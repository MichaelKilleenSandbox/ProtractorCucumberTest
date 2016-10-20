'use strict'
let VehiclePage = (function () {
  /**
  * Creates an instance of VehiclePage.
  *
  * @constructor
  * @this {VehiclePage}
  */
  function VehiclePage() {
  }


  VehiclePage.prototype.clickClearButton = function () {
    element(by.css('btn secondary-button btn-xs vehicle-clear-btn')).click();
  };


  return VehiclePage;

})();

module.exports = VehiclePage;