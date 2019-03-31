const ViewModel = require('../../models/claim/date-of-subsidence')
const schema = require('../../schemas/claim/date-of-subsidence')
const sessionHandler = require('../../services/session-handler')

module.exports = [{
  method: 'GET',
  path: '/claim/date-of-subsidence',
  options: {
    handler: (request, h) => {
      let claim = sessionHandler.get(request, 'claim')
      return h.view('claim/date-of-subsidence', new ViewModel(claim.dateOfSubsidence, null))
    }
  }
},
{
  method: 'POST',
  path: '/claim/date-of-subsidence',
  options: {
    validate: { payload: schema,
      failAction: async (request, h, error) => {
        return h.view('claim/date-of-subsidence', new ViewModel(request.payload.dateOfSubsidence, error)).takeover()
      }
    },
    handler: async (request, h) => {
      sessionHandler.update(request, 'claim', request.payload)
      return h.redirect('./mine-type')
    }
  }
}]
