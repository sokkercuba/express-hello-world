const CyclicDb = require('@cyclic.sh/dynamodb')
const { mergeObjects } = require('../utils/mergeObjects')
const db = CyclicDb('fantastic-shirt-mothCyclicDB')

const setCollection = async (req, res) => {
  const { params, body } = req
  const { col, key } = params

  if (!col || !key) {
    return res.status(400).send({
      message: 'Required parameters col and/or key missing!'
    })
  }

  const item = await db.collection(col).set(key, body)
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
    const {
      props: { training }
    } = await db.collection(col).get(key)

    const { training: newTraining, ...rest } = body
    const mergedTraining = mergeObjects(training, newTraining)
    const data = { mergedTraining, ...rest }

    // Save new updated data
    await db.collection(col).set(key, data)

    res.json(data).end()
  } catch (e) {
    console.log(e.message)
    res.status(404).send({
      message: e.message || e
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
  res.json(item).end()
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
    itemsMetadata.map(
      async ({ key }) => (await db.collection(col).get(key)).props
    )
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
