const router = require('express').Router()
const userController = require('../controllers/users')

/** ### AUTH ROUTES ### */
router.route('/login').post(userController.handleLogin)
router.route('/logout').get(userController.handleLogOut)
router.route('/signup').post(userController.handleSignup)
router.route('/check-session').get(userController.checkLogin)
router.route('/changepassword').patch(userController.handleChangePassword)

module.exports = router
