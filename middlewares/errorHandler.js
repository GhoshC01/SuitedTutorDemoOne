const AppError =require('../utlis/error')

const errorHandeler = (err,req,res,next)=>{
    let  {statusCode , message }= err

    if (!err.isOperational) {
        statusCode =500
        message = 'Internal Server Error'
    }

res.status(statusCode).json({
    success:false,
    message
})
}

module.exports = errorHandeler;