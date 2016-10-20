/**
 * Created by rachana.thandra on 7/13/2016.
 */

'use strict'

const ApexConstants = require('../apexConstants.js');
let LoginPage = require('../pages/login.page.js');
let PageHelper = require('../pages/page.helper.js');
let HeaderPage = require('../pages/header.page.js');
let CatalogPage = require('../pages/catalog.page.js');

describe('APEX homepage LOGIN', function () {

  it('Login, keyboard navigation for tabs on the top page', function () {
    browser.get(ApexConstants.APEX_LOGIN_URL);

    // Login
    let page = new LoginPage();
    //let  top = new TopPage();
    let pageHelper = new PageHelper();
    let header = new HeaderPage();
    let catalog = new CatalogPage();

    page.login('rachana.thandra', 'password');

    expect(element(by.id('navbarCatalog')));

    //customer tab highlighted
    pageHelper.pressAltAndKey('1');
    pageHelper.testIfNavigationBarTabIsActive('navbarCustomer');

    pageHelper.pressAltAndKey('2');
    pageHelper.testIfNavigationBarTabIsActive('navbarVehicle');

    pageHelper.pressAltAndKey('3');
    pageHelper.testIfNavigationBarTabIsActive('navbarCatalog');

    // This should not advance to the results page as there is no vehicle or parts selected.
    pageHelper.pressAltAndKey('4');
    pageHelper.testIfNavigationBarTabIsActive('navbarCatalog');

    header.commercialCustomerSearch('Firestone');
    // Select the exact customer.
    header.selectCommercialCustomer('Firestone - New Hope Church #027790');

    // Select a vehicle
    header.selectYMM('2006', 'Toyota', 'RAV4');

    // Test the catalogs actions by pick some brakes.
    header.navBarCatalog();
    catalog.selectParentLevel('Brakes');
    catalog.selectChildLevel('Front Brakes');
    catalog.selectChildLevel('Front Brake Pads');
    browser.sleep(500);
    // Look up the details.
    catalog.clickFindButton();
    catalog.additionalInformationModal('2.4L L4 -cid 2362cc');

    pageHelper.pressAltAndKey('3');
    pageHelper.testIfNavigationBarTabIsActive('navbarCatalog');

    pageHelper.pressAltAndKey('4');
    pageHelper.testIfNavigationBarTabIsActive('navbarResults');


    //pageHelper.pressAltAndKey('5');
    //expect(element(by.id('cartButton')).getAttribute('class')).toMatch('active');
    //pageHelper.testIfThisTheActiveElementById('cartButton');


    //browser.sleep(500);

  });

});