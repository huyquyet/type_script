var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT || 3000;

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({extended: true}));

var mongoose = require('mongoose');

//Kết nối cơ sở dữ liệu
var db = require('./config/database');
mongoose.connect(db.url);

app.use(express.static(__dirname + '/client'));

var routes =require('./server/routes');

routes(app);

server.listen(port);
console.log('Server is running on '+ port);
exports = module.exports=app;


//import * as http from "http";
//import * as url from "url";
//import * as express from "express";
//import * as bodyParser from "body-parser";
//import errorHandler = require("errorhandler");
//import methodOverride = require("method-override");
//
//import * as routes from "./routes/index";
//import * as db from "./db";
//
//var server = express();
//
//// Configuration
//
//server.set('views', __dirname + '/views');
//server.set('view engine', 'jade');
//server.set('view options', { layout: false });
//server.use(bodyParser.urlencoded({ extended: true }));
//server.use(bodyParser.json());
//server.use(methodOverride());
//server.use(express.static(__dirname + '/client'));
//
//var env = process.env.NODE_ENV || 'development';
//if (env === 'development') {
//    server.use(errorHandler());
//}
