/**
 * Created by rachana.thadnra on 7/1/2016.
 */

'use strict'

const ApexConstants = require('../apexConstants.js');
let LoginPage = require('../pages/login.page.js');
let HeaderPage = require('../pages/header.page.js');
let CustomerPage = require('../pages/customer.page.js');
let PageHelper = require('../pages/page.helper.js');

describe('APEX Keyboard Navigation Test', function () {
  it('Login, select a commercial customer, view customer info and navigate around the view using the keyboard', function () {
    browser.get(ApexConstants.APEX_LOGIN_URL);

    // Login
    let page = new LoginPage();
    let header = new HeaderPage();
    let customer = new CustomerPage();
    let pageHelper = new PageHelper();

    //change password to windows password

    page.login('Mike.Killeen', 'password');

    // Select a customer by name.
    header.commercialCustomerSearch('Firestone');

    // Select the exact customer.
    header.selectCommercialCustomer('Firestone - New Hope Church #027790');

    // //click customer tab
    header.navBarCustomer();

    // //click tax tab
    customer.selectTaxTab();
    pageHelper.testIfThisTheActiveElementById('tax');

    pageHelper.pressTabKey();
    pageHelper.testIfThisTheActiveElementById('bookCustomer');
    //browser.pause();

    pageHelper.pressEnterKey();
    expect(element(by.id('bookCustomer')).getText()).toEqual('Add Bookmark');
    //browser.sleep(1000);

    pageHelper.pressTabKey();
    pageHelper.testIfThisTheActiveElementById('profile');
    //browser.sleep(3000);
    
    pageHelper.pressShiftTabKey();
    pageHelper.pressEnterKey();
    //browser.sleep(6000);

    pageHelper.testIfThisTheActiveElementById('bookCustomer');
    expect(element(by.id('bookCustomer')).getText()).toEqual('Remove Bookmark');
    browser.sleep(1000);

    //customer.bookMarkClick();

  });
});