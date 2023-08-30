
const {hash, compare, hashSync} = require('bcrypt')
const myDB = require('../config/dbConnection')
const {craeteToken} = require('../Middleware/authentication')

class Users{
    fetchUsers(req, res){
        const query = `
        SELECT userID, firstName,lastName,gender,emailAdd,userProfile
        FROM Users 
        `
        myDB.query(query,(err, results)=>{
            if (err) throw err
            res.json({
                status:res.statusCode,
                results
            })

        })
    }
    fetchUser(req, res){
        const query = `
        SELECT userID, firstName,lastName,gender,emailAdd,userProfile
        FROM Users 
        wHERE userID = ${req.params.id}
        `
        myDB.query(query,(err, results)=>{
            if (err) throw err
            res.json({
                status:res.statusCode,
                results
            })

        })

    }
    // register user
     async createUser(req, res){
        const data = req.body
        data.userPass = await hash(data.userPass, 15)
        const user ={
            emailAdd:data.emailAdd,
            userPass:data.userPass
        }
        const query= `
        INSERT INTO Users
        SET ?
        `
        myDB.query(query, [data], (err)=>{
            if(err) throw err
            let token = craeteToken(user)
            res.json({
                status: res.statusCode,
                msg:"NEW USER ADDED"
            })
        })






    }
    updateUser(req, res){
        const data = req.body
        if(data.userPass){
            data.userPass = hashSync(data.userPass, 15)
        }
        const query = `
        UPDATE Users
        SET ?
        WHERE userID = ?;
        `
        myDB.query(query, [data, req.params.id],
            (err)=>{
                if (err) throw err
                res.json({
                    status: res.statusCode,
                    msg: "User updated"
                })
            })



    }
    delUser(req, res){
        const query = `
        DELETE FROM Users
        WHERE userID = ${req.params.id}
        `
        myDB.query(query, (err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg:"USER DELETED"
            })
        })

    }
}

module.exports = Users