const load = require('./loader');

const MsCalculatorProductsService = load({
  service: 'ProductsService',
  protoFile: 'Products'
});

module.exports = {
    MsCalculatorProductsService
};