let express = require("express");
let routes = express.Router();

routes.get("/",(req, res)=> {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Seja bem Vindo</h1>");
});

module.exports = routes;