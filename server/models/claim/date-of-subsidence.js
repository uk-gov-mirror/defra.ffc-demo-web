function ViewModel (dateOfSubsidence, error) {
  // Constructor function to create logic dependent nunjucks page
  this.model = {
    id: 'date-of-subsidence',
    fieldset: {
      legend: {
        text: 'When did the subsidence start?',
        isPageHeading: true,
        classes: 'govuk-fieldset__legend--xl'
      }
    },
    hint: {
      text: 'For example, 12 11 2007'
    }
  }

  // If error is passed to model then this error property is added to the model and therefore radio macro
  if (error) {
    this.model.errorMessage = {
      'text': 'Please select a valid date'
    }
  }
}

module.exports = ViewModel
