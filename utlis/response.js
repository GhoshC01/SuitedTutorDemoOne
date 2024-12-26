const sendResponse =(res,statuscode,success,message,data=null)=>{
res.status(statuscode).json({
    success,
    message,
    data,
});
}
modules.exports =sendResponse;