'use strict'

const chromeArgs = process.env.CHROME_ARGS.split(' ')

module.exports = [
  // The below list of os / browser / device combos is deisgned to keep as upto date as bstack allows
  // Note that Chrome on ios and Samsung internet on android are not spec'd as these capabilities do
  // not appear avilabale with bstack currently.  Device tests are set to run on real devices.
  // {
  // // Windows Edge 86
  //   os: 'Windows',
  //   osVersion: '10',
  //   browserName: 'Edge',
  //   browserVersion: 'latest'
  // },
  // {
  //   // Windows 10 Firefox latest
  //   os: 'Windows',
  //   osVersion: '10',
  //   browserName: 'Firefox',
  //   browserVersion: 'latest'
  // },
  // {
  //   // MacOS Mojave Safari 13.1
  //   os: 'OS X',
  //   osVersion: 'Catalina',
  //   browserName: 'Safari',
  //   browserVersion: 'latest'
  // },
  // {
  //   // MacOS Mojave Firefox latest
  //   os: 'OS X',
  //   osVersion: 'Mojave',
  //   browserName: 'Firefox',
  //   browserVersion: 'latest'
  // },
  // {
  //   // MacOS Mojave Chrome latest
  //   os: 'OS X',
  //   osVersion: 'Catalina',
  //   browserName: 'Chrome',
  //   browserVersion: 'latest'
  // },

  {
    //   maxInstances,
    os: 'Windows',
    osVersion: '10',
    browserName: 'Chrome',
    browserVersion: 'latest',
    acceptInsecureCerts: false,
    'goog:chromeOptions': {
      args: chromeArgs
    }
  }

  // {
  //   // iPhone SE 2020 13 Safari latest
  //   osVersion: '13',
  //   device: 'iPhone 11',
  //   realMobile: 'true',
  //   browserName: 'iPhone',
  //   browserVersion: 'latest',
  //   appiumVersion: '1.18.0'
  // },
  // {
  // // Samsung Galaxy S20 Chrome latest
  //   osVersion: '10.0',
  //   device: 'Samsung Galaxy S20',
  //   realMobile: 'true',
  //   browserVersion: 'latest',
  //   appiumVersion: '1.18.0'
  // }
]
