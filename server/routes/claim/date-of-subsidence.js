const ViewModel = require('../../models/claim/date-of-subsidence')
const schema = require('../../schemas/claim/date-of-subsidence')
const sessionHandler = require('../../services/session-handler')
const dateUtil = require('../../../util/date-util')

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
        let dateOfSubsidence = dateUtil.buildDate(request.payload.year, request.payload.month, request.payload.day, false)
        return h.view('claim/date-of-subsidence', new ViewModel(dateOfSubsidence, error)).takeover()
      }
    },
    handler: async (request, h) => {
      let dateOfSubsidence
      try {
        dateOfSubsidence = dateUtil.buildDate(request.payload.year, request.payload.month, request.payload.day, true)
      } catch (err) {
        return this.failAction(request, h, err)
      }
      sessionHandler.update(request, 'claim', { dateOfSubsidence: dateOfSubsidence })
      return h.redirect('./mine-type')
    }
  }
}]
