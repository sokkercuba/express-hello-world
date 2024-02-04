const CyclicDb = require('@cyclic.sh/dynamodb')
const { mergeTraining, mergeJuniors } = require('../utils/mergeObjects')
const { compressData, decompressAndParse } = require('../utils/compressData')
const db = CyclicDb('fantastic-shirt-mothCyclicDB')

const setCollection = async (req, res) => {
  const { params, body } = req
  const { col, key } = params

  if (!col || !key) {
    return res.status(400).send({
      message: 'Required parameters col and/or key missing!'
    })
  }

  const withCompression = await compressData(body)
  const item = await db.collection(col).set(key, { data: withCompression })

  res.json(item).end()
}

const updateCollection = async (req, res) => {
  const { params, body } = req
  const { col, key } = params

  if (!col || !key) {
    return res.status(400).send({
      message: 'Required parameters col and/or key missing!'
    })
  }

  try {
    const props = await db.collection(col).get(key)
    const deCompressed = await decompressAndParse(props?.data || props)
    const {
      props: { training, juniors }
    } = deCompressed

    const { training: newTraining, juniors: newJuniors, ...rest } = body
    const mergedTraining = mergeTraining(training, newTraining)
    const mergedJuniors = mergeJuniors(
      juniors?.juniors || [],
      newJuniors?.juniors || []
    )
    const data = {
      ...rest,
      training: mergedTraining,
      juniors: { juniors: mergedJuniors?.juniors || [] }
    }

    const withCompression = await compressData(data)

    // Save new updated data
    await db.collection(col).set(key, { data: withCompression })

    res.json(data).end()
  } catch (e) {
    console.log(e.message)
    res.status(404).send({
      message: e.message || e,
      data: body
    })
  }
}

const deleteCollection = async (req, res) => {
  const { col, key } = req?.params || null

  if (!col || !key) {
    return res.status(400).send({
      message: 'Required parameters col and/or key missing!'
    })
  }

  const item = await db.collection(col).delete(key)
  res.json(item).end()
}

const getCollection = async (req, res) => {
  const { col, key } = req?.params || null

  if (!col || !key) {
    return res.status(400).send({
      message: 'Required parameters col and/or key missing!'
    })
  }

  const item = await db.collection(col).get(key)
  const deCompressed = await decompressAndParse(item?.props?.data || [])

  res.json({ data: deCompressed }).end()
}

const getCollections = async (req, res) => {
  const { col } = req?.params || null

  if (!col) {
    return res.status(400).send({
      message: 'Required parameter col missing!'
    })
  }

  const { results: itemsMetadata } = await db.collection(col).list()
  const items = await Promise.all(
    itemsMetadata.map(async ({ key }) => {
      const item = await db.collection(col).get(key).props
      const deCompressed = await decompressAndParse(item)
      return { data: deCompressed }
    })
  )

  res.json(items).end()
}

module.exports = {
  setCollection,
  updateCollection,
  deleteCollection,
  getCollection,
  getCollections
}
