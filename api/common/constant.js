const HTTP_STATUS = {
    OK: 200,
    BAD_REQUEST: 400,
    ACCESS_DENIED: 401,
    NOT_FOUND: 404,
    REQUEST_TIMEOUT: 408,
    INTERNAL_SERVER_ERROR: 500
};

const ErrorMessages = {
    PET_NOT_FOUND: 'Pet not found'
};

const Messages = {
    PET_DELETED: 'Pet deleted successfully'
};

module.exports = {
    HTTP_STATUS,
    ErrorMessages,
    Messages
};
