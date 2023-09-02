
const db = require ('../config/dbConnection.js')
class Products{
 
    fetchProducts(req,res){
            const query =`
            SELECT prodID, prodName, qty, price, category, prodImg
            FROM Products
            `
            db.query(query,
                (err,results) => {
                    if(err) throw err
                    res.json({ 
                        status:res.statusCode,
                        results
                    })
                })
    }

    fetchProduct(req, res){
        const query = `
        SELECT prodID, prodName, qty, price, category, prodImg
        FROM Products
        WHERE prodID = ?;
        `
        db.query(query, [req.params.id], (err, result) => {
            if (err) { 
                console.error(err);
                res.status(500).json({
                    error: "An error occurred",
                });
            } else {
                res.status(200).json({
                    status: res.statusCode,
                    result,
                });
            }
        });
    }
    
    addProduct(req, res) {
        const data = req.body;
        const query = `
        INSERT INTO Products
        SET ?;
        `;
    
        db.query(query, [data], (err) => {
            if (err) {
                console.error("Error Adding New product:", err);
                return res.status(500).json({
                    status: 500,
                    error: "error Adding new product"
                });
            }
    
            res.json({
                status: res.statusCode,
                msg: "Product Added"
            });
        });
    }
    //update product
    updateProduct(req, res){
        const data = req.body
        const query =`
        UPDATE Products
        SET ?
        WHERE prodID = ?;
        `
        db.query(query,[data, req.params.id],
            (err) => {
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    msg:"Product updated."
                })
            })
    }
    //delete product
    deleteProduct(req,res){
        const query =
         `
        DELETE FROM Products
        WHERE prodID = ${req.params.id};
        `
        db.query(query, (err) => {
            if(err) throw err
            res.json({
        status:res.statusCode,
        msg:'Product deleted.'
        })
        })
    }
}





module.exports  = Products;
