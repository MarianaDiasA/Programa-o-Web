const calculadora = require("../calculadora/calculadora");

function home(req,res){
    res.render("index.html");
}

function resultado(req,res){
    console.log(req.body);
    let v1 = Number(req.body.numberA);
    let v2 = Number(req.body.numberB);
    let op = req.body.operation;
    let result = calculadora.calcula(v1,v2,op);
    let operation = calculadora.operador(op);
    res.render("resultado.html", {v1,operation,v2,result})
}

module.exports = {
    home,
    resultado
}