/**
 * Module to centralize the constants that get used in different tests.
 */
'use strict'

const LENGTH_OF_SLEEP = 0;
const SPECS_DIR = './specs/';
const TOP_KEYB_NAV_SPEC = SPECS_DIR + 'topkeyboardnav-spec.js';
const CATALOG_HIERACHY_SPEC = SPECS_DIR + 'cataloghierarchy-spec.js';
const LOGIN_SPEC = SPECS_DIR + 'login-spec.js';
const LOGIN_KEYBOARD_NAVIGATION_SPEC = SPECS_DIR + 'loginkeyboardnav-spec.js';
const KEYBOARD_NAVIGATION_1_SPEC = SPECS_DIR + 'keyboardnavigation1-spec.js';
const KEYBOARD_NAVIGATION_SPEC = SPECS_DIR + 'keyboardnav-spec.js';
const APEX_MODULE_TESTS_SPEC = SPECS_DIR + 'apex-module-tests-specs.js';
//const BASE_APEX_URL = 'http://sdwbstapptest02:8080/apex-web/index.html#';
const BASE_APEX_URL = 'http://sdfifcatdev02:8080/apex-web/1.2/index.html#';
const APEX_LOGIN_URL = BASE_APEX_URL + '/login';
const APEX_CATALOG_URL = BASE_APEX_URL + '/catalog/-1';


// Used by Protractor to setup browser to run the tests.
const CAPABILITIES_INTERNET_EXPLORER_11 = { 
  'browserName': 'internet explorer',
  'platform': 'ANY',
  'version': '11'
};

// Used by Protractor to setup a headless browser to run the tests.
const CAPABILITIES_PHANTOMJS = {
  'browserName': 'phantomjs',

  /* 
   * Can be used to specify the phantomjs binary path.
   * This can generally be ommitted if you installed phantomjs globally.
   */
  'phantomjs.binary.path': require('phantomjs').path,

  /*
   * Command line args to pass to ghostdriver, phantomjs's browser driver.
   * See https://github.com/detro/ghostdriver#faq
   */
  'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
};

const ApexConstants = (Object.freeze({
  'TOP_KEYB_NAV_SPEC': TOP_KEYB_NAV_SPEC,
  'CATALOG_HIERACHY_SPEC': CATALOG_HIERACHY_SPEC,
  'LOGIN_SPEC': LOGIN_SPEC,
  'LOGIN_KEYBOARD_NAVIGATION_SPEC': LOGIN_KEYBOARD_NAVIGATION_SPEC,
  'KEYBOARD_NAVIGATION_1_SPEC': KEYBOARD_NAVIGATION_1_SPEC,
  'KEYBOARD_NAVIGATION_SPEC': KEYBOARD_NAVIGATION_SPEC,
  'APEX_MODULE_TESTS_SPEC': APEX_MODULE_TESTS_SPEC,
  'BASE_APEX_URL': BASE_APEX_URL,
  'APEX_LOGIN_URL': APEX_LOGIN_URL,
  'APEX_CATALOG_URL': APEX_CATALOG_URL,
  'CAPABILITIES_INTERNET_EXPLORER_11' : CAPABILITIES_INTERNET_EXPLORER_11,
  'CAPABILITIES_PHANTOMJS' : CAPABILITIES_PHANTOMJS,
  'LENGTH_OF_SLEEP' : LENGTH_OF_SLEEP
}));


module.exports = ApexConstants;

