/**
 * Module to help manage the different page objects. 
 */
'use strict'

let LoginPage = require('../pages/login.page.js');
let HeaderPage = require('../pages/header.page.js');
let CatalogPage = require('../pages/catalog.page.js');
let CustomerPage = require('../pages/customer.page.js');
let PageHelper = require('../pages/page.helper.js');
let ProductDetailPage = require('../pages/productDetail.page.js');
let loginPage = new LoginPage();
let header = new HeaderPage();
let catalog = new CatalogPage();
let customer = new CustomerPage();
let pageHelper = new PageHelper();
let productDetail = new ProductDetailPage();

const PageObjects = (Object.freeze({
  'LOGIN_PAGE': loginPage,
  'HEADER_SECTION': header,
  'CATALOG_PAGE': catalog,
  'CUSTOMER_PAGE': customer,
  'PAGE_HELPER': pageHelper,
  'PRODUCT_DETAIL' : productDetail
}));

module.exports = PageObjects;


