const express = require('express');
const validate = require('express-validation');

const Controller = require('./products_controller');
const validation = require('./products_validations');

const Router = express.Router();
let controller = new Controller();

Router
    .route('/')
    .get(controller.getProducts.bind(controller));

module.exports = Router;