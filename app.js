const express = require('express')
const app = express()
const helmet = require('helmet')
const router = require('./routes')
const session = require('express-session')
const { CyclicSessionStore } = require('@cyclic.sh/session-store')

const oneHourMs = 60 * 60 * 1000
const oneDayMs = 24 * oneHourMs

// #############################################################################
// Logs all request paths and method
app.use(function (req, res, next) {
  res.set('x-timestamp', Date.now())
  res.set('x-powered-by', 'cyclic.sh')
  console.log(
    `[${new Date().toISOString()}] ${req.ip} ${req.method} ${req.path}`
  )
  next()
})

// #############################################################################
// This configures static hosting for files in /public that have the extensions
// listed in the array.
const options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['htm', 'html', 'css', 'js', 'ico', 'jpg', 'jpeg', 'png', 'svg'],
  index: ['index.html'],
  maxAge: '1m',
  redirect: false
}

const dynamoOpts = {
  table: {
    hashPrefix: 'sid_',
    name: process.env.CYCLIC_DB
  },
  touchInterval: oneHourMs,
  ttl: oneDayMs
}

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'"]
    }
  })
)
app.use(express.json({ limit: '10mb', extended: true }))
app.use(
  express.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 })
)

app.set('trust-proxy', 1)
app.use(
  session({
    store: new CyclicSessionStore(dynamoOpts),
    secret: process.env.SESSION_SECRET || 'THIS-IS-NOT-A-SECRET',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: 'auto',
      maxAge: oneDayMs
    }
  })
)

app.use('/', router)

app.use(express.static('public', options))

app.use('*', (req, res) => {
  res
    .json({
      at: new Date().toISOString(),
      method: req.method,
      hostname: req.hostname,
      ip: req.ip,
      query: req.query,
      headers: req.headers,
      cookies: req.cookies,
      params: req.params
    })
    .end()
})

module.exports = app
