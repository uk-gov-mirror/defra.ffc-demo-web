'use strict'

var browserstack = require('browserstack-local')
var request = require('request')
const compatibility = require('./browsers')
const moment = require('moment-timezone')
const timestamp = moment.tz('Europe/London').format('D/M/YY hh:mm:ss')

exports.config = {

  specs: [
    './test/browser-comp-test.js'
  ],

  maxInstances: 2,

  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACC_KEY',

  capabilities: compatibility.map(e => {
    e.project = 'FFc'
    e.build = 'FFC'
    e.name = `Kaz Iyiola@ ${timestamp}`
    e['browserstack.local'] = true
    e['browserstack.debug'] = true
    e['browserstack.networkLogs'] = true
    e['browserstack.acceptSslCerts'] = true
    e['browserstack.console'] = 'errors'
    e['browserstack.use_w3c'] = true
    e['browserstack.selenium_version'] = '3.141.59'
    return e
  }),

  // Code to start browserstack local before start of test
  onPrepare: function (config, capabilities) {
    console.log('Connecting local')
    return new Promise(function (resolve, reject) {
      exports.bs_local = new browserstack.Local()
      const bsLocalArgs = {
        key: exports.config.key,
        verbose: 'true',
        force: 'true',
        onlyAutomate: 'true',
        forceLocal: 'true'
      }
      exports.bs_local.start(bsLocalArgs, function (error) {
        if (error) return reject(error)
        console.log('Connected. Now testing...')
        resolve()
      })
    })
  },

  // Code to stop browserstack local after end of test
  onComplete: (capabilities, specs) => {
    exports.bs_local.stop()
    console.log('Testing complete, binary closed')
  },

  logLevel: 'warn',
  bail: 0,
  baseUrl: process.env.FLOOD_APP_SITE_URL,
  waitforTimeout: 60000,
  connectionRetryTimeout: 60000,
  connectionRetryCount: 3,
  framework: 'mocha',
  reporters:
    [
      'spec', 'dot'
    ],

  mochaOpts: {
    ui: 'bdd',
    timeout: 240000
  },

  beforeTest: function () {
    const chai = require('chai')
    const chaiWebdriver = require('chai-webdriverio').default

    chai.use(chaiWebdriver(browser))

    global.assert = chai.assert
    global.should = chai.should
    global.expect = chai.expect
  },

  afterTest: async function (test, context, { error, result, duration, passed, retries }) {
    const sessionid = browser.sessionId
    function doRequest (url, testStatus) {
      return new Promise(function (resolve, reject) {
        request({
          uri: url,
          method: 'PUT',
          form: { status: testStatus, reason: [error, result] }
        }, function (error, response, body) {
          if (!error && response.statusCode === 200) {
            resolve(body)
          } else {
            reject(error)
          }
        })
      })
    }
    if (test.passed) {
      const res = await doRequest(`https://${this.user}:${this.key}@api.browserstack.com/automate/sessions/${sessionid}.json`, 'passed')
      console.log(res)
    } else if (test.failed) {
      const res = await doRequest(`https://${this.user}:${this.key}@api.browserstack.com/automate/sessions/${sessionid}.json`, 'failed')
      console.log(res)
    } else {
      const res = await doRequest(`https://${this.user}:${this.key}@api.browserstack.com/automate/sessions/${sessionid}.json`, 'failed')
      console.log(res)
    }
  }
}
// Code to support common capabilities
exports.config.capabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i]
})
