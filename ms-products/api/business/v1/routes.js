const express = require('express');

const Router = express.Router();

Router.use('/products', require('../v1/products/products_routes'))

/* health check */
Router.route('/health').get((req, res) => res.status(200).send());

module.exports = Router;
