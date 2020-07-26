console.log("Server is starting");

var express = require("express");

const path = require("path");

var app = express();

var server = app.listen((process.env.PORT||3000), listening);
//const port = process.env.PORT||3000

function listening(){
    console.log("Listening...");
}

app.use(express.static('website'));
//app.use(express.static(path.join(__dirname + '/website')));

app.get('/register',userResgistration);

function userResgistration(request, response){
    response.send("Congratulations! You are registered.");
    //response.sendFile(path.join(__dirname + '/static/index.html')));
}

app.get('/email',sendEmail);

function sendEmail(request,response){
    response.send("Mail sent.");
}