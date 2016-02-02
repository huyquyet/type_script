"use strict";
var express = require("express");
var http = require("http");
var routers = require("./server/routes/indexs");
var port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
app.use(express.static(__dirname + "/client"));
routers.indexs(app);
server.listen(port);
console.log("Server is running on " + port);
exports = module.exports = app;
//# sourceMappingURL=app.js.map