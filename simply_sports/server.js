require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

const isProduction = process.env.NODE_ENV === "production"
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
let host;
if (isProduction) {
  host='0.0.0.0';
} else {
  host='localhost'
}
app.listen(8118, host);