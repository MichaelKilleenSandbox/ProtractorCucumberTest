/**
 * Created by mike.killeen on 7/13/2016.
 */

'use strict'

const ApexConstants = require('../apexConstants.js');
let LoginPage = require('../pages/login.page.js');
let HeaderPage = require('../pages/header.page.js');

describe('APEX Module Tests', function () {
  it('Login and do a search for a 2009 Ford Mustang', function () {
    browser.get(ApexConstants.APEX_LOGIN_URL);

    // Login
    let page = new LoginPage();
    let header = new HeaderPage();

    page.login('Mike.Killeen', 'password');

    header.navBarCatalog();
    header.search('2009 Ford Mustang Air Filter');
    //browser.sleep(500);
    //browser.actions().sendKeys(protractor.Key.ALT + 'S').perform();
  });
});

