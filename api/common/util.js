const responseWrapper = (data, res, statusCode) => {
    statusCode = statusCode || HTTP_STATUS.OK;
    data ? res.status(statusCode).json(data) : res.status(statusCode).end();
};

module.exports = {
    responseWrapper
};