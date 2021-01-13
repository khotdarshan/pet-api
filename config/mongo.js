const mongoose = require('mongoose');
const mongoURI = `mongodb://localhost:27017/petdb`;

const connect = () => {
    mongoose
        .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("Connected to MongoDB...", mongoURI))
        .catch(err => {
            console.error("Could not connect to MongoDB...", mongoURI, err);
            close();
        });
};

const close = () => {
    mongoose
        .disconnect();
};

module.exports = {
    connect,
    close
};