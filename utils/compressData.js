const zlib = require('zlib')
const flatted = require('flatted')

// Function to compress data using zlib (asynchronous)
async function compressData(data) {
  return new Promise((resolve, reject) => {
    try {
      const jsonString = flatted.stringify(data)
      zlib.gzip(jsonString, (err, compressedData) => {
        if (err) {
          reject(err)
        } else {
          resolve(compressedData)
        }
      })
    } catch (error) {
      reject(error)
    }
  })
}

// Function to decompress data and parse it to JSON (asynchronous)
async function decompressAndParse(buffer) {
  return new Promise((resolve, reject) => {
    try {
      zlib.gunzip(buffer, (err, decompressedData) => {
        if (err) {
          reject(err)
        } else {
          const jsonString = decompressedData.toString('utf-8')
          const parsedData = flatted.parse(jsonString)
          resolve(parsedData)
        }
      })
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  compressData,
  decompressAndParse
}
