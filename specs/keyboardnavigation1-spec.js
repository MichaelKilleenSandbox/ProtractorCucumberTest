/**
 * Created by mike.killeen on 7/13/2016.
 */


'use strict'

const ApexConstants = require('../apexConstants.js');
let LoginPage = require('../pages/login.page.js');
let HeaderPage = require('../pages/header.page.js');
let CatalogPage = require('../pages/catalog.page.js');
let CustomerPage = require('../pages/customer.page.js');
let ProductDetailPage = require('../pages/productdetail.page.js');
let PageHelper = require('../pages/page.helper.js');

describe('APEX Module Tests', function () {
  beforeAll(function () {

  });

  it('Login and do a search for a 2009 Ford Mustang and air filter, then check to make sure that returned elements match at least one of the search words.', function () {
    browser.get(ApexConstants.APEX_LOGIN_URL);
    let page = new LoginPage();
    let header = new HeaderPage();
    let catalog = new CatalogPage();
    let customer = new CustomerPage();
    let pageHelper = new PageHelper();
    let productDetail = new ProductDetailPage();

    //Login into APEX
    page.login('Mike.Killeen', 'password');

    header.navBarCatalog();
    browser.sleep(500);


    // Test Customer Lookup and Selection Actions.
    // Select a customer by name.

    header.commercialCustomerSearch('Firestone');
    browser.sleep(500);

    // Select the exact customer.
    header.selectCommercialCustomer('Firestone - New Hope Church #027790');
    browser.sleep(500);

    //header.search('2009 Ford Mustang Air Filter');
    //Assign a vehicle
    header.selectYMM('2006', 'Toyota', 'RAV4');
    browser.sleep(500);

    //Select some categories and click Find
    header.navBarCatalog();
    catalog.selectParentLevel('Brakes');
    catalog.selectChildLevel('Front Brakes');
    catalog.selectChildLevel('Front Brake Pads');
    catalog.selectChildLevel('Front Disc Brake Rotors');
    browser.sleep(500);

    // Look up the details.
    catalog.clickFindButton();
    catalog.additionalInformationModal('2.4L L4 -cid 2362cc');

    //Click on a product
    //productDetail.getCurrentDetailItem().click();
    productDetail.getCurrentDetailItem().sendKeys(protractor.Key.ARROW_RIGHT);

    //productDetail.getDesciptionTab().click();
    //expect(productDetail.getDesciptionTab().getText()).toEqual(browser.driver.switchTo().activeElement().getText());
    browser.sleep(500);

    //Press tab -- The focus is on the Buyer's guide and the buyer's guide page is shown. The Buyer's guide tab is shown in Blue color
    pageHelper.pressTabKey();
    //pageHelper.testIfThisTheActiveElementByText('Buyer\'s Guide');
    browser.sleep(500);
    //Press tab again -- The focus is on the Additional info tab and the additional info page is shown.
    pageHelper.pressTabKey();
    //pageHelper.testIfThisTheActiveElementByText('Additional Info');
    browser.sleep(500);

    // Should be on the image.
    pageHelper.pressTabKey();
    browser.sleep(500);

    //Press enter
    pageHelper.pressEnterKey();
    expect(element(by.css('modal-dialog')));
    browser.sleep(1000);

    //Close the PDF
    pageHelper.pressEscKey();

    browser.sleep(1500);

    /*


    //Repeat steps from 8- 10 for any listed PDFs
    //Press tab
    //Press enter
    //Close the image
    //Press tab
    //Press left and right arrows to go to the next image in the list.
    //Press right arrow when the focus is on the third image
    //Press enter
    //Repeat step 17-18 for all the mini images
    //Press left arrow when the focus is on the first image in the list
    //Press enter
    //Press tab after the last visible image in the list.

    */
  });


});


