exports.createModelRes = (status, message, data = {}) => {
    return { status, message, data };
};

exports.send = (res, modelRes) => {
console.log(modelRes)
    return res.status(modelRes.status).json({
        message: modelRes.message,
        data: modelRes.data,
    });
};

exports.badRequest = res => {
    return res.status(400).json({
        message: 'API_ERROR_INVALID_REQUEST',
        data: {},
    });
};

exports.unauthorized = (res, msg) => {
    return res.status(401).json({
        message: msg,
        data: {},
    });
};

exports.notFound = res => {
    return res.status(404).json({
        message: 'API_ERROR_NOT_FOUND',
        data: {},
    });
};
