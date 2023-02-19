require('dotenv').config();
const express = require('express');
const path = require('path');
const api = require("./api");
const app = express();
const body_parser = require("body-parser");
const morgan = require('morgan');
const { Router } = require("express");
const prefixRouter = Router();

const isProduction = process.env.NODE_ENV === "production"
prefixRouter.use('/', express.static(path.join(__dirname, 'build')));

app.use(morgan('dev'))
app.use(body_parser.json({extended: false}),
body_parser.urlencoded({extended: false}));
app.use("/api/", api);
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