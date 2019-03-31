const config = require('../config')
module.exports = {
  plugin: require('yar'),
  options: {
    storeBlank: true,
    maxCookieSize: 0,
    cache: {
      cache: config.cacheName,
      expiresIn: config.sessionTimeoutMinutes * 60 * 1000
    },
    cookieOptions: {
      password: config.cookiePassword,
      isSecure: config.env !== 'development'
    }
  }
}
