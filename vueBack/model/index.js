
// const Products = require('./Products')

// module.exports ={
//     users : new Users(),
//     products: new Products()
// }

// importing
const Users = require('./Users')
const products = require('./Products')
const category = require('./category')

// Export all objects
module.exports = {
    users: new Users(),
    products:new products(),
    category: new category()
}

