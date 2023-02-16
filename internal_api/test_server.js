//File used only for testing the api.js module

require("dotenv").config();
const express = require("express");
const api = require("./api");
const app = express();
const body_parser = require("body-parser");

app.use(body_parser.json({extended: false}),
body_parser.urlencoded({extended: false}));
app.use("/api", api);
app.listen(3000);
console.log("running");