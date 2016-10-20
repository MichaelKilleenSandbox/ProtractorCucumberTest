// page.helper.js

'use strict'

let hotkeys = require('protractor-hotkeys');
let PageHelper = (function () {
  /**
  * Creates an instance of PageHelper.
  *
  * @constructor
  * @this {PageHelper}
  */
  function PageHelper() {
  }

  /**
  * Checks if the element in question is active.
  *
  * @this {HeaderPage}
  * @ @param {alphanumeric string} elementID
  */
  PageHelper.prototype.testIfThisTheActiveElementById = function (elementID) {
    expect(element(by.id(elementID)).getText()).toEqual(browser.driver.switchTo().activeElement().getText());
    browser.sleep(1000);
  }

  /**
   *
   */
  PageHelper.prototype.testIfBrowseCatlogIsActive = function (elementID) {
    expect(element(by.id(elementID)).getAttribute('class')).toMatch('active');
  }

  /**
   *
   */
  PageHelper.prototype.testIfThisTheActiveElementByText = function (theText) {
    console.log('theText = ' + theText);
    expect(element(by.linkText(theText)).getText()).toEqual(browser.driver.switchTo().activeElement().getText());
    browser.sleep(500);
  }

  /**
  * @this {PageHelper}
   * @param {alphanumeric or numeric string} the element id of the tab we are checking.
   *
   * The "active" element will have an 'active' attribute added to it.
   */
  PageHelper.prototype.testIfNavigationBarTabIsActive = function (tabID) {
    expect(element(by.id(tabID)).getAttribute('class')).toMatch('active');
  }


  /**
  * Gets the value of the attribute from the element. We need to wait until it becomes available.
  *
  * @this {HeaderPage}
  * @ @param {alphanumeric or numeric string} query The search target.
  */
  PageHelper.prototype.getItem = function (elementID, attributeName) {
    return browser.wait(function () {
      return element(by.id(elementID)).getAttribute(attributeName).then(function (value) {
        return value;
      });
    });
  }

  /**
  *  Sends a TAB key.
  *  Note: This method may not work on all pages, especially ones such as login where there is a keydown in the controller.
  */
  PageHelper.prototype.pressTabKey = function () {
    browser.actions().sendKeys(protractor.Key.TAB).perform();

  }

  /**
  *
  */
  PageHelper.prototype.pressEnterKey = function () {
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
    //hotkeys.trigger('enter');
  }

  /**
  *
  */
  PageHelper.prototype.pressEscKey = function () {
    browser.actions().sendKeys(protractor.Key.ESCAPE).perform();
  }

  /**
  *
  */
  PageHelper.prototype.pressAltAndKey = function (theKey) {
    hotkeys.trigger('alt+' + theKey);
  }

  /**
  *
  */
  PageHelper.prototype.pressRightArrowKey = function () {
    browser.actions().sendKeys(protractor.Key.ARROW_RIGHT).perform();
  }

  /**
  *
  */
  PageHelper.prototype.pressShiftTabKey = function () {
    browser.actions().sendKeys(protractor.Key.chord(protractor.Key.SHIFT, protractor.Key.TAB)).perform();
  }

  /**
  *
  */
  PageHelper.prototype.pressArrowDownKey = function () {
    //hotkeys.trigger('down');
    browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
  }

  /**
  *
  */
  PageHelper.prototype.pressArrowUpKey = function () {
    //hotkeys.trigger('up');
    browser.actions().sendKeys(protractor.Key.ARROW_UP).perform();
  }

  return PageHelper;


})();

module.exports = PageHelper;