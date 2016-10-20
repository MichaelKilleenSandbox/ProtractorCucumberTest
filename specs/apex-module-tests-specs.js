/**
 * Created by mike.killeen on 7/13/2016.
 * This spec is mostly just a sandbox used to develope and wire up support modules.
 */

'use strict'
const ApexConstants = require('../apexConstants.js');
let PageObjects = require('../pages/pageObjects.js');

describe('APEX Module Tests', function () {
  beforeAll(function () {

  });

  it('Login and do a search for a 2009 Ford Mustang and air filter, then check to make sure that returned elements match at least one of the search words.', function () {
    browser.get(ApexConstants.APEX_LOGIN_URL);

    PageObjects.LOGIN_PAGE.login('Mike.Killeen', 'password');

    // Back to catalog for another search
    PageObjects.HEADER_SECTION.navBarCatalog();

    PageObjects.HEADER_SECTION.search('2009 Ford Mustang Air Filter');

    //browser.actions().sendKeys(protractor.Key.ALT + 'S').perform();
  });

  it('Login, select a commercial customer, pick some front brakes.', function () {
    browser.get(ApexConstants.APEX_LOGIN_URL);

    PageObjects.LOGIN_PAGE.login('Mike.Killeen', 'password');

    // Test Customer Lookup and Selection Actions.
    // Select a customer by name.
    PageObjects.HEADER_SECTION.commercialCustomerSearch('Firestone');
    // Select the exact customer.
    PageObjects.HEADER_SECTION.selectCommercialCustomer('Firestone - New Hope Church #027790');

    // Select a vehicle
    PageObjects.HEADER_SECTION.selectYMM('2006', 'Toyota', 'RAV4');

    // Check the catalog
    let categoriesList = element.all(by.repeater('(key, category) in catalog.categories'));
    expect(categoriesList.count()).toEqual(5); // <================ My one lonely assertion!!!

    // Test the catalogs actions by pick some brakes.
    PageObjects.HEADER_SECTION.navBarCatalog();
    PageObjects.CATALOG_PAGE.selectParentLevel('Brakes');
    PageObjects.CATALOG_PAGE.selectChildLevel('Front Brakes');
    PageObjects.CATALOG_PAGE.selectChildLevel('Front Brake Pads');
    browser.sleep(500);

    // Look up the details.
    PageObjects.CATALOG_PAGE.clickFindButton();
    PageObjects.CATALOG_PAGE.additionalInformationModal('2.4L L4 -cid 2362cc');
  });


  it('Login, select a commercial customer, pick some front brakes and do a search.', function () {
    browser.get(ApexConstants.APEX_LOGIN_URL);

    PageObjects.LOGIN_PAGE.login('Mike.Killeen', 'password');

    // Test Customer Lookup and Selection Actions.
    // Select a customer by name.
    PageObjects.HEADER_SECTION.commercialCustomerSearch('Firestone');
    // Select the exact customer.
    PageObjects.HEADER_SECTION.selectCommercialCustomer('Firestone - New Hope Church #027790');


    // Select a vehicle
    PageObjects.HEADER_SECTION.selectYMM('2006', 'Toyota', 'RAV4');

    // A quick test of customer view keyboard navigation actions.
    PageObjects.HEADER_SECTION.navBarCustomer();
    pageHelper.testIfThisTheActiveElementById('profile');
    PageObjects.CUSTOMER_PAGE.selectTaxTab();
    pageHelper.testIfThisTheActiveElementById('tax');

    // The Add Bookmark Button
    PageObjects.PAGE_HELPER.pressTabKey();
    PageObjects.PAGE_HELPER.testIfThisTheActiveElementById('bookCustomer');

    PageObjects.PAGE_HELPER.pressTabKey();
    PageObjects.PAGE_HELPER.testIfThisTheActiveElementById('profile');

    PageObjects.PAGE_HELPER.pressTabKey();
    PageObjects.PAGE_HELPER.testIfThisTheActiveElementById('notes');

    PageObjects.PAGE_HELPER.pressTabKey();
    PageObjects.PAGE_HELPER.testIfThisTheActiveElementById('invoice');

    PageObjects.PAGE_HELPER.pressTabKey();
    PageObjects.PAGE_HELPER.testIfThisTheActiveElementById('ful-fillment');

    PageObjects.PAGE_HELPER.pressTabKey();
    PageObjects.PAGE_HELPER.testIfThisTheActiveElementById('AR');

    PageObjects.PAGE_HELPER.pressTabKey();
    PageObjects.PAGE_HELPER.testIfThisTheActiveElementById('tax');

    PageObjects.CUSTOMER_PAGE.selectFulfillmentTab();
    PageObjects.PAGE_HELPER.testIfThisTheActiveElementById('ful-fillment');

    PageObjects.CUSTOMER_PAGE.selectInvoiceTab();
    PageObjects.PAGE_HELPER.testIfThisTheActiveElementById('invoice');

    PageObjects.CUSTOMER_PAGE.selectNotesTab();
    PageObjects.PAGE_HELPER.testIfThisTheActiveElementById('notes');

    PageObjects.CUSTOMER_PAGE.selectProfileTab();
    PageObjects.PAGE_HELPER.testIfThisTheActiveElementById('profile');

    PageObjects.CUSTOMER_PAGE.selectFulfillmentTab();
    PageObjects.PAGE_HELPER.testIfThisTheActiveElementById('ful-fillment');
    browser.sleep(500);

    // End Test of customer page keyboard navigation.
  });
});

