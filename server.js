var express = require("express");
var bodyParser = require('body-parser')

const userResgistrationHandler = require("./routes/register");

var app = express();
const port = process.env.PORT || 3000;

var jsonParser = bodyParser.json()

console.log("Server is starting");

app.listen(port, () => {console.log(`Weeks Left App BACKEND listening at http://localhost:${port}`)})

app.post('/register',jsonParser,  userResgistrationHandler);
