'use strict';

let PageHelper = require('./page.helper.js');


let HeaderPage = (function () {
  /**
  * Creates an instance of HeaderPage.
  *
  * @constructor
  * @this {HeaderPage}
  */
  function HeaderPage() {
  }

  // Add a page helper, well, for help with our pages.
  HeaderPage.prototype.pageHelper = new PageHelper();

  /**
  * Performs a commercial customer search.
  *
  * @this {HeaderPage}
  * @ @param {alphanumeric or numeric string} query The search target.
  */
  HeaderPage.prototype.commercialCustomerSearch = function (query) {
    element(by.model('ctrl.sessions.current().customer.isRetail')).click();
    element(by.model('ctrl.sessions.current().customer.searchText')).sendKeys(query);
    element(by.cssContainingText('.primary-nav-button', 'Go')).click();
  };

  /**
  * Sets team members default customer type
  *
  * @this {HeaderPage}
  * @ @param {alpha string} customerType R/C.
  */
  HeaderPage.prototype.yourActionsSetCustomerDefault = function (customerType) {
    element(by.id('simple-dropdown')).click();
    element(by.css('[ng-click="ctrl.renderPreferenceModal()"]')).click();
    if (customerType === 'R') {
      element(by.id('speedPerksCustomer')).click();
    }
    else {
      element(by.id('commercialCustomer')).click();
    }
    browser.actions().sendKeys(protractor.Key.ALT + 'S').perform();
  };


  /**
  * Selects Year Make and Model of a vehicle.
  *
  * @this {HeaderPage}
  * @ @param {numeric string} year The year of the vehicle.
  * @ @param {alphanumeric string} make The manufacturer of the vehicle.
  * @ @param {alphanumeric string} model The particualr model of the vehicle.
  */
  HeaderPage.prototype.selectYMM = function (year, make, model) {
    element(by.id('searchpanel')).sendKeys(year);
    element(by.id('searchpanel')).sendKeys(protractor.Key.ENTER);
    element(by.cssContainingText('div.ymm-description.ng-binding.col-md-9', make)).click();
    element(by.cssContainingText('div.ymm-description.ng-binding.col-md-9', model)).click();
  };

  /**
  * Performs the selection of a particual commercial customer.
  *
  * @this {HeaderPage}
  * @ @param {alphanumeric or numeric string} query The search target.
  */
  HeaderPage.prototype.selectCommercialCustomer = function (query) {
    element(by.id('filterText')).sendKeys(query);
    element(by.cssContainingText('button.btn.primary-button.btn-accesskey', 'Select')).click();
  }

  /**
  * Performs a search.
  *
  * @this {HeaderPage}
  * @ @param {alphanumeric or numeric string} query The search target.
  */
  HeaderPage.prototype.search = function (query) {
    let queryPartsArray = query.split(' ');
    element(by.model('newTag.text')).sendKeys(query);

    testCheckThatItemsInQueryAreReturned(queryPartsArray);

    element(by.id('searchCatalogBtn')).click();
    //browser.actions().sendKeys(protractor.Key.ALT + 'S').perform();
  }

  /**
  * Tests if the items returned match at least one key word.
  *
  * @this {HeaderPage}
  * @ @param {array of Promises} queryPartsArray
  */
  function testCheckThatItemsInQueryAreReturned(queryPartsArray) {
    //queryPartsArray.push('USED CAR');
    let itemList = element.all(by.repeater('item in suggestionList.items track by track(item)'));
    expect(itemList.count()).toEqual(12, 'the items in the list were not equal');
    itemList.then(function (arr) {
      for (let i = 0; i < arr.length; i++) {
        arr[i].getText().then(function (text) {
          expect(queryPartsArray.some(function (v) {
            console.log(text.toUpperCase() + ':' + v.toUpperCase());
            return text.toUpperCase().indexOf(v.toUpperCase()) >= 0;
          })).toBeTruthy("'" + text + "' was not found in any of the search criterea [" + queryPartsArray + "].");
        });
      }
    });
  }

  /**
  * Selects the Customer Nav Bar
  *
  * @this {HeaderPage}
  */
  HeaderPage.prototype.navBarCustomer = function () {
    element(by.id('navbarCustomer')).click();
    browser.sleep(500);
  };

  /**
  * Selects the Vehicle Nav Bar
  *
  * @this {HeaderPage}
  */
  HeaderPage.prototype.navBarVehicle = function () {
    element(by.id('navbarVehicle')).click();
    browser.sleep(500);
  };

  /**
  * Selects the Catalog Nav Bar
  *
  * @this {HeaderPage}
  */
  HeaderPage.prototype.navBarCatalog = function () {
    element(by.id('navbarCatalog')).click();
    browser.sleep(500);
  };

  /**
  * Selects the Results Nav Bar
  *
  * @this {HeaderPage}
  */
  HeaderPage.prototype.navBarResults = function () {
    element(by.id('navbarResults')).click();
    browser.sleep(500);
  };

  return HeaderPage;

})();

module.exports = HeaderPage;