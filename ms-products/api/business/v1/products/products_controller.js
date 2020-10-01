const ProductsService = require('./products_service');

class ProductsController {
    constructor() {
        this.service = new ProductsService();
    }

    async getProducts(req, res, next) {
        try {
            const data = await this.service.getProducts();
            res.json(data);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ProductsController;
