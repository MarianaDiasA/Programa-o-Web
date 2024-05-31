function calcula(v1,v2,op){
    let result;

    switch (op) {
        case "add":
            result = v1 + v2;
            break;
        case "subtract":
            result = v1 - v2;
            break;
        case "multiply":
            result = v1 * v2;
            break;
        case "divide":
            result = v1 / v2;
            break;
    }

    return result;
}

function operador(op){
    let nome;

    switch (op) {
        case "add":
            nome = "+";
            break;
        case "subtract":
            nome = "-";
            break;
        case "multiply":
            nome = "*";
            break;
        case "divide":
            nome = "/";
            break;
    }

    return nome;
}

module.exports = {calcula, operador};