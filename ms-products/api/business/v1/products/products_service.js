const { MsCalculatorProductsService } = require('../../../../main/grpc/services');
class ProductsService {

    async getProducts() {
        try {
            const products = await MsCalculatorProductsService.getProducts({ id: '_asdfsd123213d' });
            return products;
        } catch(error) {
            throw error;
        }
    }
}

module.exports = ProductsService;
