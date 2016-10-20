'use strict'

let ProductDetailPage = (function () {

  /**
  * Creates an instance of ProductDetailPage.
  *
  * @constructor
  * @this {CatalogPage}
  */
  function ProductDetailPage() {
  }

  let descriptionTab = element.all(by.xpath('//*[@id="descTab"]/a'));
  let buyersGuideTab = element.all(by.xpath('/html/body/div[4]/div/div/div/div/div[3]/div/ul/li[2]/a'));
  let additionalInfoTab = element.all(by.xpath('//*[@id="additionalTab"]/a'));
  let currentDetailItem = element.all(by.model('product.isSelected')).get(0);
  //let currentDetailItem = element(by.xpath('//*[@id="0"]/div/div[2]/div[1]'));
  //#\30 > div > div.row.result-item.eq-height.ng-scope.ng-isolate-scope.active-line-item > div.check-box.vertical-align.border-right


  ProductDetailPage.prototype.getLinkByText = function (textOnPage) {
    element.all(by.linkText(textOnPage)).get(1).click();

  };

  ProductDetailPage.prototype.getCurrentDetailItem = function () {
    return currentDetailItem;
  };

  ProductDetailPage.prototype.getDesciptionTab = function () {
    return descriptionTab;
  };

  ProductDetailPage.prototype.getBuyersGuideTab = function () {
    return buyersGuideTab;
  };

  ProductDetailPage.prototype.getAdditionalInfoTab = function () {
    return additionalInfoTab;
  };



  return ProductDetailPage;

})();

module.exports = ProductDetailPage;


