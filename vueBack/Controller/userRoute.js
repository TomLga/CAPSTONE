
const express = require('express');
const bodyParser = require('body-parser');
const routes = express.Router();
const {createToken} = require('../Middleware/authentication')
const { products } = require('../model/index');
const { users } = require('../model/index');

// -----USER ROUTE--------
routes.get('/users', (req, res) => {
  users.fetchUsers(req, res);
});

routes.get('/user/:id', (req, res) => {
  users.fetchUser(req, res);
});
 
routes.post('/adduser', bodyParser.json(), (req, res) => {
  users.register(req, res);
});

routes.patch('/user/:id', bodyParser.json(), (req, res) => {
  users.updateUser(req, res);
});

routes.delete('/user/:id', (req, res) => {
  users.deleteUser(req, res);
});

// -----PRODUCT ROUTE-----
routes.get('/Allproducts', (req, res) => {
  products.fetchProducts(req, res);
});

routes.get('/product/:id', (req, res) => {
  products.fetchProduct(req, res);
});
 
routes.post('/Addproduct', bodyParser.json(), (req, res) => {
  products.addProduct(req, res);
});

routes.delete('/product/:id', (req, res) => {
  products.deleteProduct(req, res);
});

routes.patch('/product/:id', bodyParser.json(), (req, res) => {
  products.updateProduct(req, res);
});
 

module.exports = {
  express,
  routes,
}