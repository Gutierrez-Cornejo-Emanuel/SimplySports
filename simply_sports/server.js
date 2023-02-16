require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const { Router } = require("express");
const prefixRouter = Router();

const isProduction = process.env.NODE_ENV === "production"
prefixRouter.use('/', express.static(path.join(__dirname, 'build')));

app.use(morgan('dev'))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
let host;
if (isProduction) {
  host='127.0.0.1';
} else {
  host='localhost';
}

prefixRouter.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use(isProduction? "/": "/team19/",prefixRouter);

app.listen(8118, host);