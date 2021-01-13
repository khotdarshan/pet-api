const ExpressMock = () => {
    return {
        req: {},
        res: {
            statusCode: 500,
            body: [],
            status: function (status) {
                this.statusCode = status;
                return this;
            },
            send: function (body) {
                if (body) {
                    this.body = body;
                }
                return this;
            },
            json: function (body) {
                this.body = body;
                return this;
            },
            end: function () {
                return this;
            }
        }
    };
};

module.exports = {
    ExpressMock
};