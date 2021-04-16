import Page from './page'

class PropertyType extends Page {
  /**
  * define elements
  */

  get startNewClaim () { return $('//button[contains(., "Start new claim")]') }
  get saveAndContinueButton () { return $('//button[contains(., "Save and continue")]') }
  get propertyStillAccessible () { return $('//h1[contains(., "Is the property still accessible?")]') }
  // get homeRadioButton() { return $('//*[(@id = "propertyType-1")]');}
  // get homeRadioButton () { return $('//*[(@id = "propertyType")]') }
  // //main[@id='main-content']/div/div/form/div/fieldset/div[2]/div[2]/input

  get homeRadioButton () { return $('//main[@id="main-content"]/div/div/form/div/fieldset/div[2]/div[2]/input') }
  // get homeRadioButton () { return $('//div[2]/input') }

  get businessRadioButton () { return $('//*[(@id = "propertyType-2")]') }

  /**
  * define or overwrite page methods
  */
  open () {
    super.open('claim/property-type')
    browser.pause(3000)
  }

  selectHomeRadioBtn () {
    this.homeRadioButton.click()
    browser.pause(3000)
  }
  /**
     * your page specific methods
     */

  waitForloginPageToLoad () {
    if (!this.homeRadioButton.isDisplayed()) {
      this.homeRadioButton.waitForDisplayed(10000)
    }
  }
}

export default new PropertyType()
