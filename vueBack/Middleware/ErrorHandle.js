function errorHandling(err, req, res, next){
    if(err){
        let status = err.status || 500
        res.json({
            status,
            msg: 'ERROR OCC'
        })
    }
    next()
}
module.exports = errorHandling