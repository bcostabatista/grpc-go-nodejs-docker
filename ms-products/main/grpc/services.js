const load = require('./loader');

const MsCalculatorProductsService = load({
  service: 'ProductsService',
  protoFile: 'products',
  apiVersion: 'v1'
});

module.exports = {
    MsCalculatorProductsService
};