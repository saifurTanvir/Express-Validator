var express = require("express");
var ejs = require("ejs");
var bodyParser  = require('body-parser');
const{check, validationResult}=require('express-validator/check');
const{matchedData, sanitizeBody}=require('express-validator/filter');
var home = require("./controllers/home");
var app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));


app.use("/home", home)


app.listen("3000", function(){
	console.log("Started at 3000!");
})