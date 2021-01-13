const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const petRouter = require('./api/routes/petRouter');
const mongo = require('./config/mongo');
app.use(bodyParser.json({ limit: '10mb' }));

app.use('/pets', petRouter);

mongo.connect();

app.listen(8081, () => {
    console.log(`Server running on port 8081`);
});

module.exports = app;