const ViewModel = require('../../models/claim/email')
const schema = require('../../schemas/claim/email')
const sessionHandler = require('../../services/session-handler')

module.exports = [{
  method: 'GET',
  path: '/claim/email',
  options: {
    handler: (request, h) => {
      let claim = sessionHandler.get(request, 'claim')
      return h.view('claim/email', new ViewModel(claim.email, null))
    }
  }
},
{
  method: 'POST',
  path: '/claim/email',
  options: {
    validate: { payload: { email: schema },
      failAction: async (request, h, error) => {
        return h.view('claim/email', new ViewModel(request.payload.email, error)).takeover()
      }
    },
    handler: async (request, h) => {
      sessionHandler.update(request, 'claim', request.payload)
      return h.redirect('./confirmation')
    }
  }
}]
