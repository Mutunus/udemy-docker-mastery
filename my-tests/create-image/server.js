const express = require('express');
const app = express();
const http = require('http');

const server = http.createServer(app);

app.use('/', function (req, res, next) {
    console.log(req)
    res.status(200).json('yup')
})

server.listen(10000, function () {
    console.log('server up')
})