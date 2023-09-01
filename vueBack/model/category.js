
const db = require ('../config/dbConnection.js')

class Category {
    fetchEurope(req, res) {
        const query = `
        SELECT prodID, prodName, qty, price, category, prodImg
        FROM Products
        WHERE category = 'Europe'
        `;
        
        db.query(query, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }
    fetchAfrica(req, res) {
        const query = `
        SELECT prodID, prodName, qty, price, category, prodImg
        FROM Products
        WHERE category = 'Africa'
        `;
        
        db.query(query, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }
    fetchAsia(req, res) {
        const query = `
        SELECT prodID, prodName, qty, price, category, prodImg
        FROM Products
        WHERE category = 'Asia'
        `;
        
        db.query(query, (err, results) => {
            if (err) throw err;
            res.json({
                status: res.statusCode,
                results
            });
        });
    }
}


module.exports=
Category
    