exports.successResponseWithData = function (res, msg, data) {
    let resdata = {
        status: 1,
        message: msg,
        data: data
    }
    return res.status(200).json(resdata);
}
