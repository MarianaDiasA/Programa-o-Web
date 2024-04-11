const express = require('express');
const app = express();
const calcula = require('./util/calculadora');

app.get('/', function (req,res){
    res.send('Calculadora: ');
});

app.get('/somar/:a/:b', function (req,res){
    let a = req.params.a;
    let b = req.params.b;
    let c = calcula.somar(a, b);
    res.send(""+c);
});

app.get('/subtrair/:a/:b', function (req,res){
    let a = req.params.a;
    let b = req.params.b;
    let c = calcula.subtrair(a, b);
    res.send(""+c);
});

app.get('/multiplicar/:a/:b', function (req,res){
    let a = req.params.a;
    let b = req.params.b;
    let c = calcula.multiplicar(a, b);
    res.send(""+c);
});

app.get('/dividir/:a/:b', function (req,res){
    let a = req.params.a;
    let b = req.params.b;
    let c = calcula.dividir(a, b);
    res.send(""+c);
});

const PORT = 8080;
app.listen(PORT, function (){
    console.log('app rodando na porta '+ PORT);
});
