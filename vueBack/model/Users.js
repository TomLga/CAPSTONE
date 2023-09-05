const db = require('../config/dbConnection')
const {hash, compare, hashSync} = require ('bcrypt')
const {createToken} = require('../Middleware/authentication')



class Users{
    //fetch users
    fetchUsers(req, res){
        const query =`
        SELECT userID,firstName,lastName,
        gender,emailAdd,userPass,userProfile
        FROM Users; `
        db.query(query,(err, results) => {
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    results:results
                })
             } )
    }

    fetchUser(req, res) {
        const query = `
        SELECT userID,firstName,lastName,
        gender,emailAdd,userProfile
        FROM Users
        WHERE userID = ?;
        `;
    
        db.query(query, [req.params.id], (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({
                    error: "An error occurred while fetching the user.",
                });
            } else {
                res.status(200).json({
                    status: res.statusCode,
                    result,
                });
            }
        });
    }
    //---------------------------------
    
    login(req, res) {
        const {emailAdd, userPass} = req.body 
        // query
        const query = `
        SELECT userID,firstName,lastName,
        gender,emailAdd,userProfile
        FROM Users
        WHERE emailAdd = '${emailAdd}'  
        `
        db.query(query, async (err, result)=>{
            if(err) throw err

            if(!result?.length){  //to avoid err of undefined 21.00/05/september
                res.json({
                    status: res.statusCode,
                    msg: "incorrect  email."
                })
            }else{
                await compare(userPass,
                    result[0].userPass,
                    (cErr, cResult)=>{
                        if(cErr) throw cErr
                        // Create a token
                        const token =
                        createToken({
                            emailAdd,
                            userPass
                        })
                    
                        if(cResult) {
                            res.json({
                                msg: "Logged in",
                                token,
                                result: result[0]
                            })
                        }else {
                            res.json({
                                status: res.statusCode,
                                msg:
                                "Invalid password or you have not registered"
                            })
                            console.log(token)
                        }
                    })
            }
        })
    }

    // ADD USER
   async register(req,res){
        const data = req.body
        data.userPass = await hash(data.userPass,15) //salt add ths chars for encryption
        const user = {
            emailAdd:data.emailAdd,
            userPass:data.userPass
        }
        const query = `
        INSERT INTO Users
        SET ?
        `
        db.query(query,[data],(err) => {
            if(err) throw err
            let token = createToken(user)
            res.json ({
                status: res.statusCode,
                token, //sending the token to FE
                msg: "user registered"
            })
        })
    }

    updateUser(req,res){
        const data = req.body
        if(data.userPass){
            data.userPass = 
            hashSync(data.userPass, 15)
        }
    const query =`
        UPDATE Users
        SET?
        WHERE userID = ?;
        `
        db.query(query,[data, req.params.id],
            (err) => {
                if(err) throw err
                res.json({
                    status: res.statusCode,
                    msg:"User information updated"
                })
            })
    }
 
    deleteUser(req,res){
        const query =
         `
        DELETE FROM Users
        WHERE userID = ${req.params.id};
        `
        db.query(query, (err) => {
            if(err) throw err
            res.json({
        status:res.statusCode,
        msg:'The user records were deleted.'
        })
        })
    }
}

module.exports = Users;