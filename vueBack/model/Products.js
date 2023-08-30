
const myDB = require('../config/dbConnection')

class Products{
    fetchProducts(req, res){
        const query = `
        SELECT prodID, prodName, qty, price, catergory, prodImg
        FROM Products
        `
        myDB.query(query,(err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results:results
            })
        })
    }

    fetchProduct(req, res){
        const query=`
        SELECT prodID, prodName, qty, price, catergory, prodImg
        FROM Products
        WHERE prodID = ${req.params.id}
        `
        myDB.query(query, (err, results)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results:results
            })
        })
    }

    addProduct(req,res){
    const data = req.body() 
        const query =`
        INSERT INTO Products
        SET ?
        `
        myDB.query(query, [data],(err)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,

            })
        })

   }

   updateProduct(req, res){
    const query = `
    UPDATE Products
    SET ?
    WHERE prodID = ?
    `
    myDB.query(query,[req.body, res.params.id], (err)=>{
        if(err) throw err
        res.json({
            status: res.statusCode,
            msg: "PRODUCT UPDATED"
        })
    })
   }

   delProduct(req, res){
    const query = `
    DELETE FROM Products
    WHERE prodID = ${req.params.id}`

    myDB.query(query, (err)=>{
        if(err) throw err
        res.json({
            status:res.statusCode,
            msg:" PRODUCT DELETED"
        })
    })
   }

}

module.exports=Products