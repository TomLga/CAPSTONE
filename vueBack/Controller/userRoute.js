// // settig routes 
const express = require('express')
const bodyParser = require('body-parser')
const setRoute = express.Router()
const {users, products } = require('../model')
const app = express()


setRoute.get('/users', (req, res)=>{
    users.fetchUsers(req, res)
})

setRoute.get('/user/:id', (req, res)=>{
    users.fetchUser(req, res)
})

setRoute.post('/register', bodyParser.json(), (req, res)=>{
    users.createUser(req, res)
})                  
setRoute.put('/user/:id', bodyParser.json(), (req, res)=>{
    users.UpdatehUser(req, res)
})                  
setRoute.patch('/user/:id', bodyParser.json(), (req, res)=>{
    users.UpdatehUser(req, res)
})                  
setRoute.delete('/user/:id', (req, res)=>{
    users.delUser(req, res)
})


//-------------PRODUCT ROUTE ------

setRoute.get('/products', (req, res)=>{
    products.fetchProducts(req, res)
})

setRoute.get('/product/:id', (req, res)=>{
    products.fetchProduct(req, res)
})

setRoute.post('/product', bodyParser.json(), (req, res)=>{
    products.addProduct(req, res)
})
setRoute.put('/product/:id', bodyParser.json(), (req, res)=>{
    products.updateProduct(req, res)
})
setRoute.patch('/product/:id', bodyParser.json(), (req, res)=>{
    products.updateProduct(req, res)
})

setRoute.delete('/product/:id', (req,res)=>[
    products.delProduct(req, res)
])

module.exports ={   
     express,
     setRoute

}

// bodyparser is for post and put 