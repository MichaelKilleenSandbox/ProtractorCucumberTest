/**
 * Created by mike.killeen on 7/1/2016.
 * conf.js runs the spec files and also handles the configuration of the run.
 */

'use strict'

const ApexConstants = require('./apexConstants.js');

/* HTML reporter for Jasmine2 and Protractor and can generate screenshots of each test . */
let Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
let reporter = new Jasmine2HtmlReporter({
  consolidateAll: true,
  takeScreenshots: true,                        // Default is true.
  savePath: 'HtmlReports/reports/screenshots',
  takeScreenshotsOnlyOnFailures: true,
  //filePrefix: 'index -'+today
});


exports.config = {

  // Framework to use. Jasmine 2 is recommended.
  framework: 'jasmine2',
  directConnect: true, // Note: IE and PhantomJS are not supported with directConnect, so set it to false.
  //requireWindowFocus: true,
  //seleniumArgs: ['-Dwebdriver.ie.driver=/node_modules/selenium-webdriver'],
  //capabilities: ApexConstants.CAPABILITIES_INTERNET_EXPLORER_11,
  seleniumAddress: 'http://localhost:4444/wd/hub',
  baseUrl: ApexConstants.BASE_APEX_URL,

  //Spec patterns are relative to the current working directly when protractor is called.
  specs: [ApexConstants.CATALOG_HIERACHY_SPEC, 
          ApexConstants.TOP_KEYB_NAV_SPEC,
          ApexConstants.LOGIN_SPEC, 
          ApexConstants.LOGIN_KEYBOARD_NAVIGATION_SPEC,
          ApexConstants.KEYBOARD_NAVIGATION_1_SPEC, 
          ApexConstants.KEYBOARD_NAVIGATION_SPEC/*,ApexConstants.APEX_MODULE_TESTS_SPEC*/],

  onPrepare: onPrepare
};

 /**
   *
   */
function onPrepare() {
  browser.driver.manage().window().maximize();
  jasmine.getEnv().addReporter(reporter);
}
