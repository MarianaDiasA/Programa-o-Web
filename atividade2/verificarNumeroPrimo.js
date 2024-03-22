function verificarNumeroPrimo(n){
    if(n <=1 ){
        return false;
    }
    if(( n != 2) && (n % 2 == 0)){
        return false;
    }
    for(let i = 3; i < n; i+=2){
        if(n % i == 0){
            return false;
        }
    }

    return true;
}
console.log('0 - ' + verificarNumeroPrimo(0));
console.log('1 - ' + verificarNumeroPrimo(1));
console.log('2 - ' + verificarNumeroPrimo(2));
console.log('3 - ' + verificarNumeroPrimo(3));
console.log('4 - ' + verificarNumeroPrimo(4));
console.log('83 - ' + verificarNumeroPrimo(83));