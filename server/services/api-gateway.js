const config = require('../config')
const restClient = require('./rest-client')
const sessionHandler = require('./session-handler')

module.exports = {
  submit: async (request) => {
    try {
      let claim = sessionHandler.get(request, 'claim')
      await restClient.postJson(`${config.apiGateway}/claim`, { payload: claim })
      return true
    } catch (err) {
      return false
    }
  }
}
