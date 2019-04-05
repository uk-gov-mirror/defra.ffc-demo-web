const ViewModel = require('../../models/claim/email')
const schema = require('../../schemas/claim/email')
const sessionHandler = require('../../services/session-handler')
const apiGateway = require('../../services/api-gateway')

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
      const claim = sessionHandler.get(request, 'claim')

      if (!claim.submitted) {
        request.payload.claimId = 'MINE123'
        sessionHandler.update(request, 'claim', request.payload)
        const submitted = await apiGateway.submit(request)
        if (!submitted) {
          return h.view('service-unavailable')
        }
        request.payload.submitted = true
        sessionHandler.update(request, 'claim', request.payload)
      }
      return h.redirect('./confirmation')
    }
  }
}]
