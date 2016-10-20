/**
 * Created by rachana.thandra on 7/13/2016.
 */

'use strict'

const ApexConstants = require('../apexConstants.js');
let hotkeys = require('protractor-hotkeys');
let LoginPage = require('../pages/login.page.js');
let PageHelper = require('../pages/page.helper.js');
let HeaderPage = require('../pages/header.page.js');
let CatalogPage = require('../pages/catalog.page.js');
let page = new LoginPage();
let header = new HeaderPage();
let pageHelper = new PageHelper();
let catalog = new CatalogPage();



describe('APEX Module Tests', function () {
  it('Login Page, keyboard navigation for catalog hierarchy', function () {
    browser.get(ApexConstants.APEX_LOGIN_URL);

    page.login('rachana.thandra', 'password');

    // shoulds focus the catalog bar (hierarchy) on the left
    pageHelper.pressAltAndKey('b'); // Hot key to the Browse Catalog list.
    pageHelper.testIfThisTheActiveElementById('catalogSidebar');
    catalog.browseCatagoryCheckActiveButton('Parts');

    pageHelper.pressArrowDownKey();
    catalog.browseCatagoryCheckActiveButton('Fluids');

    pageHelper.pressArrowUpKey();
    catalog.browseCatagoryCheckActiveButton('Parts');

    pageHelper.pressArrowDownKey();
    pageHelper.pressArrowDownKey();
    catalog.browseCatagoryCheckActiveButton('Job Packages');

    pageHelper.pressArrowDownKey();
    catalog.browseCatagoryCheckActiveButton('Labor');

    pageHelper.pressArrowDownKey();
    catalog.browseCatagoryCheckActiveButton('Chemicals, Accessories, Tools');

    pageHelper.pressArrowDownKey();
    catalog.browseCatagoryCheckActiveButton('Parts');

    pageHelper.pressArrowUpKey();
    pageHelper.pressArrowUpKey();
    catalog.browseCatagoryCheckActiveButton('Labor');

    browser.sleep(500);
  });

});

