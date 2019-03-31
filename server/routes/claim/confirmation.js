const ViewModel = require('../../models/claim/confirmation')
const sessionHandler = require('../../services/session-handler')

module.exports = {
  method: 'GET',
  path: '/claim/confirmation',
  options: {
    handler: (request, h) => {
      let claim = sessionHandler.get(request, 'claim')
      claim.claimId = 'MINE001'
      return h.view('claim/confirmation', new ViewModel(claim))
    }
  }
}
