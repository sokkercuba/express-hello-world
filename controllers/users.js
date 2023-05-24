const auth = require('../utils/auth')
const CyclicDb = require('@cyclic.sh/dynamodb')
const db = CyclicDb('fantastic-shirt-mothCyclicDB')

const users = db.collection('users')

const sendResponse = (res, statusCode, data) => {
  res.status(statusCode).json({ ...data })
}

const checkLogin = async (req, res) => {
  if (req.session?.logged_in) {
    req.session.views = req.session.views + 1 || 1
    return sendResponse(res, 200, { success: true })
  } else {
    return sendResponse(res, 200, { success: false })
  }
}

const handleLogin = async (req, res, next) => {
  const { login, password } = req.body

  // Check if login and password is provided
  if (!login || !password) {
    return sendResponse(res, 400, {
      error: 'Please provide an username and password'
    })
  }

  try {
    // Check that user exists by username
    const userItem = await users.get(login)
    const user = userItem?.props

    if (!user) {
      return sendResponse(res, 404, { error: 'User not found' })
    }

    // Check that password match
    if (auth.testPassword(password, user.salt, user.hashedPassword)) {
      req.session.logged_in = true
      req.session.user = login
      req.session.save(function (error) {
        console.log('🚀 ~ session save: ', error)
      })
    } else {
      return sendResponse(res, 401, { error: 'Invalid credentials' })
    }

    return sendResponse(res, 200, { success: true, user })
  } catch (error) {
    return sendResponse(res, 500, {
      error
    })
  }
}

const handleLogOut = async (req, res) => {
  req.session.destroy(function (error) {
    if (error) {
      return sendResponse(res, 500, {
        error: 'Well, this is unexpected, please try again.'
      })
    }
    return sendResponse(res, 200, { success: true })
  })
}

// @desc    Register user
const handleSignup = async (req, res, next) => {
  const { login, password } = req.body

  const existingUser = await users.get(login)

  if (existingUser) {
    return sendResponse(res, 403, {
      error: 'the username provided is already registered'
    })
  }

  const { salt, hashed } = auth.securePassword(password)
  const uid = 'uid_' + Math.random().toString().slice(2)
  const uProps = {
    uid,
    login,
    salt,
    status: 'new',
    hashedPassword: hashed
  }

  try {
    const user = await users.set(login, uProps, { $index: ['uid'] })
    if (!user) {
      return sendResponse(res, 500, {
        error: 'Error while creating a new user'
      })
    }

    return sendResponse(res, 200, { success: true, user: user.props })
  } catch (error) {
    console.log('🚀 ~ signup err:', error)
    return sendResponse(res, 500, {
      error
    })
  }
}

const handleChangePassword = async (req, res, next) => {
  const { login, password } = req.body
  const { salt, hashed } = auth.securePassword(password)

  try {
    const { props: oldUser } = await users.get(login)
    const uProps = {
      ...oldUser,
      salt,
      status: 'updated',
      hashedPassword: hashed
    }

    await users.set(login, { salt, status: 'updated', hashedPassword: hashed })

    return sendResponse(res, 200, { success: true, user: uProps })
  } catch (error) {
    console.log('🚀 ~ changepassword err:', error)
    return sendResponse(res, 500, {
      error
    })
  }
}

module.exports = {
  checkLogin,
  handleLogOut,
  handleLogin,
  handleSignup,
  handleChangePassword
}
