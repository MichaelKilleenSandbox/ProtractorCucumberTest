'use strict'

let CatalogPage = (function () {
  /**
  * Creates an instance of TopPage.
  *
  * @constructor
  * @this {CatalogPage}
  */
  function CatalogPage() {
  }

  /**
   * @this {CatalogPage}
   * @param {alphanumeric or numeric string} the expected text of the active button.
   *
   * Spool through the catalog's categories, find the one element with 'active' attribute and
   * then check if the button text matches what we think it should be.
   *
   */
  CatalogPage.prototype.browseCatagoryCheckActiveButton = function (buttonText) {
    let browseCatalogList = element.all(by.repeater('(key, category) in catalog.categories'));
    browseCatalogList.then((arr) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i].getAttribute('class').then(function (classString) {
          if (classString.includes('active')) {
            arr[i].getText().then(function (text) {
              expect(text).toEqual(buttonText);
            });
          }
        });
      }
    });
  }

    /**
   * @this {CatalogPage}
   * @param {alphanumeric or numeric string} the expected text of the active button.
   *
   * Spool through the catalog's categories, find the one element with 'active' attribute and
   * then check if the button text matches what we think it should be.
   *
   */
  CatalogPage.prototype.catagoryActiveButtonSendKeys = function (buttonText, protractorKey) {
    let browseCatalogList = element.all(by.repeater('(key, category) in catalog.categories'));
    browseCatalogList.then((arr) => {
      for (let i = 0; i < arr.length; i++) {
        arr[i].getAttribute('class').then(function (classString) {
          if (classString.includes('active')) {
            arr[i].sendKeys(protractorKey);
          }
        });
      }
    });
  }


  /**
  * Finds the parent level item by description
  *
  * @this {CatalogPage}
  * @ @param {alphanumeric or numeric string} query The search target.
  */
  CatalogPage.prototype.selectParentLevel = function (query) {
    browser.actions().doubleClick(element(by.cssContainingText('div.tree-text.ng-binding', query))).perform();
  };

  /**
  * Finds the child level item by description
  *
  * @this {CatalogPage}
  * @ @param {alphanumeric or numeric string} query The search target.
  */
  CatalogPage.prototype.selectChildLevel = function (query) {
    browser.actions().doubleClick(element(by.cssContainingText('div.tree-text.ng-binding', query))).perform();
  };

  /**
  * Click the Find Parts button.
  *
  * @this {CatalogPage}
  */
  CatalogPage.prototype.clickFindButton = function () {
    element(by.id('findParts')).click();
  };

  /**
  * Selects additional information about vehicle.
  *
  * @this {CatalogPage}
  * @ @param {alphanumeric or numeric string} query The search target.
  */
  CatalogPage.prototype.additionalInformationModal = function (selectThis) {
    element(by.cssContainingText("div.ui-grid-viewport.ng-isolate-scope", selectThis)).click();
    element(by.css("button.btn.primary-button.btn-accesskey")).click();
  };

  return CatalogPage;

})();

module.exports = CatalogPage;