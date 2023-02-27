require('dotenv').config();
const express = require('express');
const path = require('path');
const api = require("./api");
const app = express();
const body_parser = require("body-parser");
const morgan = require('morgan');
/////////////
const passport = require('passport');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
//////////////
const { Router } = require("express");
const prefixRouter = Router();

const isProduction = process.env.NODE_ENV === "production"
prefixRouter.use('/', express.static(path.join(__dirname, 'build')));
//////////////
let url;
if (process.env.MODE === "production" ) {
    url = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}/`; 
}
else {
    url = "mongodb://127.0.0.1:27017/";
}

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store : new MongoDBStore({
    uri: url,
    collection: 'userSessions'
  })
}));
app.use(passport.authenticate('session'));
////////////////

app.use(morgan('dev'))
app.use(body_parser.json({extended: false}),
body_parser.urlencoded({extended: false}));

app.use("/api/", api);
app.use("/team19/api/", api)
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
let host = '127.0.0.1';

prefixRouter.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.use(isProduction? "/": "/team19/",prefixRouter);

app.listen(8118, host);