const ViewModel = require('../../models/claim/confirmation')
const sessionHandler = require('../../services/session-handler')

module.exports = {
  method: 'GET',
  path: '/claim/confirmation',
  options: {
    handler: (request, h) => {
      const claim = sessionHandler.get(request, 'claim')
      return h.view('claim/confirmation', new ViewModel(claim))
    }
  }
}
