const express = require('express');
const mustacheExpress = require("mustache-express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json())
app.engine("html", mustacheExpress())
app.set("view engine", "html")
app.set("views", __dirname+'/views')
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", function (req, res){
    res.render("index")
});

app.post("/dados", function (req, res){
    res.render("dados", req.body)
});

const PORT = 8080;
app.listen(PORT, function () {
    console.log('app rodando na porta ' + PORT);
});