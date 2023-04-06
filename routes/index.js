const express = require('express')
const router = express.Router()
const routes = require('./routes')
const authRoutes = require('./auth')

/* Private route */
// router.route("/api/v1").get(protect, getPrivateRoute);

router.use('/api/v1', routes)
router.use('/api/auth/v1', authRoutes)

module.exports = router
