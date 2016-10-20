/**
 * Created by mike.killeen on 7/1/2016.
 */

'use strict'
const ApexConstants = require('../apexConstants.js');
let LoginPage = require('../pages/login.page.js');
let HeaderPage = require('../pages/header.page.js');

describe('APEX homepage LOGIN', function () {
  it('Login, select a commercial customer and then pick brakes', function () {
    browser.get(ApexConstants.APEX_LOGIN_URL);

    // Login
    let page = new LoginPage();
    let header = new HeaderPage();

    page.login('Mike.Killeen', 'password');

    header.yourActionsSetCustomerDefault('R');

    //expect(true).toBeTruthy();

  });
});

