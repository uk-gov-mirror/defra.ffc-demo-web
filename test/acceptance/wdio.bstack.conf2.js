// const { ReportAggregator, HtmlReporter } = require('@rpii/wdio-html-reporter')
// const log4js = require('@log4js-node/log4js-api')
// const logger = log4js.getLogger('default')
// const envRoot = (process.env.TEST_ENVIRONMENT_ROOT_URL || 'http://host.docker.internal:3000')
// // const chromeArgs = process.env.CHROME_ARGS.split(' ')
// const maxInstances = process.env.MAX_INSTANCES ? Number(process.env.MAX_INSTANCES) : 5

// const webdriver = require('selenium-webdriver')
const browser = require('webdriverio')
const browserstack = require('browserstack-local')
const local = new browserstack.Local()

exports.config = {

  capabilities: {
    'build': 'Docker example',
    'browserName': 'chrome',
    'os': 'OS X',
    'browserstack.local': true,
    'browserstack.user': process.env.BROWSERSTACK_USERNAME,
    'browserstack.key': process.env.BROWSERSTACK_ACCESS_KEY
  }
}

var options = {
  'key': process.env.BROWSERSTACK_ACCESS_KEY
}

console.log('Starting tunnel...')

local.start(options, function (error) {
  if (error) {
    console.error('Received error while starting tunnel', error)
    process.exit(1)
  }
  console.log('Is Running', local.isRunning())
  console.log('Browserstack Started')

  // var driver = new webdriver.Builder().usingServer('http://hub.browserstack.com/wd/hub').withCapabilities(capabilities).build()
  browser.url('http://www.browserstack.com')
  browser.close()
  console.log('Stopped')
})
