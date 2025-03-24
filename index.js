const express = require("express");
const consign = require("consign");
const bodyParser = require("body-parser")

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

consign().include("routes").into(app);


            



app.listen(3000, '127.0.0.1', ()=> {console.log("Servidor rodando!")});
