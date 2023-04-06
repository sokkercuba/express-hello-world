const router = require('express').Router()
const dbController = require('../controllers/collections')

/* ### Cyclic CRUD ### */
// Create or Update a collection
router.route('/:col/:key').post(dbController.setCollection)

// Delete a collection
router.route('/:col/:key').delete(dbController.deleteCollection)

// Get a single collection
router.route('/:col/:key').get(dbController.getCollection)

// Get a full listing of collections
router.route('/:col').get(dbController.getCollections)

module.exports = router
