'use strict';
const express = require('express');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');


const app = express();
app.use(logger);

app.get("/", (req, res) => {
    res.status(200).send('Wlcome to home page');
});

app.get("/person",validator, (req,res)=>{
    res.status(200).send({ name: req.query.name})
        
});

app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
    app.listen(port, () => {
        console.log(`i'm listening on port${port}`);
    });
}
module.exports = {
    app: app,
    start: start,
}