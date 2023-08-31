
const db = require ('../config/dbConnection.js')

class category {
    fetchEurope(req, res) {
        const query = `
        SELECT prodID, prodName, qty, price, catergory, prodImg
        FROM Products
        WHERE catergory = 'Europe'
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
        SELECT prodID, prodName, qty, price, catergory, prodImg
        FROM Products
        WHERE catergory = 'Africa'
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
        SELECT prodID, prodName, qty, price, catergory, prodImg
        FROM Products
        WHERE catergory = 'Asia'
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
    category
    