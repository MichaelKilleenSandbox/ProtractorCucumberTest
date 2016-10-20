'use strict'

let CustomerPage = (function () {

  /**
  * Creates an instance of CustomerPage.
  *
  * @constructor
  * @this {CatalogPage}
  */
  function CustomerPage() {
  }

  CustomerPage.prototype.bookMarkClick = function () {
    element(by.id('bookCustomer')).click();
    browser.sleep(500);
  };


  /**
  * Selects the Tax tab.
  *
  * @this {CustomerPage}
  * @ @param {alphanumeric or numeric string} query The search target.
  */
  CustomerPage.prototype.selectTaxTab = function () {
    element(by.id('tax')).click();
    browser.sleep(500);
  };


  /**
  * Selects the Profile tab.
  *
  * @this {CustomerPage}
  * @ @param {alphanumeric or numeric string} query The search target.
  */
  CustomerPage.prototype.selectProfileTab = function () {
    element(by.id('profile')).click();
    browser.sleep(500);
  };

  /**
  * Selects the Notes tab.
  *
  * @this {CustomerPage}
  * @ @param {alphanumeric or numeric string} query The search target.
  */
  CustomerPage.prototype.selectNotesTab = function () {
    element(by.id('notes')).click();
    browser.sleep(500);
  };

  /**
  * Selects the Invoice tab.
  *
  * @this {CustomerPage}
  * @ @param {alphanumeric or numeric string} query The search target.
  */
  CustomerPage.prototype.selectInvoiceTab = function () {
    element(by.id('invoice')).click();
    browser.sleep(500);
  };


  /**
  * Selects the Fulfillment tab.
  *
  * @this {CustomerPage}
  * @ @param {alphanumeric or numeric string} query The search target.
  */
  CustomerPage.prototype.selectFulfillmentTab = function () {
    element(by.id('ful-fillment')).click();
    browser.sleep(500);
  };

  /**
  * Selects the Accounts Receivable  tab.
  *
  * @this {CustomerPage}
  * @ @param {alphanumeric or numeric string} query The search target.
  */
  CustomerPage.prototype.selectARTab = function () {
    element(by.id('AR')).click();
    browser.sleep(500);
  };

  return CustomerPage;

})();

module.exports = CustomerPage;