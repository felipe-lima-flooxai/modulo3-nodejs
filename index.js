const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser");
const { body, validationResult } = require('express-validator');

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

consign().include("routes").include("utils").into(app);


            



app.listen(3000, '127.0.0.1', ()=> {console.log("Servidor rodando!")});
