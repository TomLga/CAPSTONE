
const Users = require('./Users')
const products = require('./Products')
const Category = require('./category')

// Export all objects
module.exports = {
    users: new Users(),
    products:new products(),
    category: new Category()
}

