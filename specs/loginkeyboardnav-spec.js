/**
 * Created by rachana.thandra on 7/13/2016.
 */

'use strict'

const ApexConstants = require('../apexConstants.js');
let  LoginPage = require('../pages/login.page.js');
let  PageHelper = require('../pages/page.helper.js');
let  hotKeys = require('protractor-hotkeys');

describe('APEX homepage LOGIN', function () {

  it('Login Page, keyboard navigation betweeen fields', function () {
    browser.get(ApexConstants.APEX_LOGIN_URL);

    // Login
    let  loginPage = new LoginPage();
    let  pageHelper = new PageHelper();

    // verify cursor focus
    loginPage.fillUserName(protractor.Key.TAB);
    pageHelper.testIfThisTheActiveElementById('userId');

    pageHelper.testIfThisTheActiveElementById('password');
    loginPage.fillPassword(protractor.Key.TAB);

    pageHelper.testIfThisTheActiveElementById('loginButton');

    pageHelper.pressTabKey();
    pageHelper.testIfThisTheActiveElementById('userId');

    pageHelper.pressShiftTabKey();
    pageHelper.testIfThisTheActiveElementById('loginButton');

    pageHelper.pressShiftTabKey();
    pageHelper.testIfThisTheActiveElementById('password');

    pageHelper.pressShiftTabKey();
    pageHelper.testIfThisTheActiveElementById('userId');

    pageHelper.pressShiftTabKey();
    pageHelper.testIfThisTheActiveElementById('loginButton')

  });

});


