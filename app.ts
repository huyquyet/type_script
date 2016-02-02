import * as express from "express";
import * as http from "http";

import * as routers from  "./server/routes/indexs";
import * as db from "./server/models/posts";

let port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
app.use(express.static(__dirname + "/client"));
routers.indexs(app);


server.listen(port);
console.log("Server is running on " + port);
exports = module.exports = app;
