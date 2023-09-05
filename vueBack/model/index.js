
const Users = require('./Users')
const products = require('./Products')
const Category = require('./category')
const History = require('./History')

// Export all objects
module.exports = {
    users: new Users(),
    products:new products(),
    category: new Category(),
    history: new History()
}

