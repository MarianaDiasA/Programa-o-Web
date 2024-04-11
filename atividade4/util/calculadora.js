function somar(a, b){
    return Number(a) + Number(b);
}
function subtrair(a, b){
    return Number(a) - Number(b);
}
function multiplicar(a, b){
    return Number(a) * (b);
}
function dividir(a, b){
    return Number(a) / Number(b);
}
//passo como parâmetro o a e o b que estão no index
//obs: não declaro as variáveis nesse espaço, já que estou só usando como parâmetro, mas irei trabalhar com objetos numéricos(Number)

module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
};