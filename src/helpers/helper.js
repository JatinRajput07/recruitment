exports.success = (res,message,statusCode,data)=>{
    return res.status(statusCode).json({
        status:true,
        statusCode:statusCode,
        message:message,
        data
    })
}