const express = require('express');

const routes = express.Router();

const ProductController = require('./controllers/ProductController');
const UserController = require('./controllers/UserController');

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);

routes.get('/users/:systemId', UserController.show);
routes.post('/users', UserController.store);
routes.put('/users/:systemId', UserController.update);
routes.delete('/users/:systemId', UserController.destroy);

module.exports = routes;