/*************
 *  Author : MD Humayun Kabir Bulbul
 */

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse content-type - application/json
app.use(bodyParser.json());

// parse content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended:true }));

// ==> Routes API:
const index = require('./routes/index.js');
const salesRoute = require('./routes/sales.routes');

require("./routes/sales.routes.js")(app);

app.use(index);
app.use('/api/', salesRoute);

module.exports = app;