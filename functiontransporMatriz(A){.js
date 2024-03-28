function mostrar(matriz){
    
    for(let i=0;i<3;i++){
        console.log("");
        for(let j=0;j<3;j++){
            process.stdout.write(matriz[i][j] + " ");
        }
    }
}
var matriz = new Array(3);
matriz[0] = [4,7,8];
matriz[1] = [8,2,1];
matriz[2] = [9,1,5];
mostrar(matriz);
console.log("");

function transporMatriz(matriz){

    //nova matriz que esta vazia
    var matrizTrans = [];

    //len vai pegar o primeiro array (qnt = 3 colunas)
    //novalinha para posicionar os valores depois

    for(let len=0;len<matriz[0].length;len++){
        let novalinha = [];
        for(const linha of matriz) {
            novalinha.push(linha[len])
        }
        matrizTrans.push(novalinha);
    }
    return matrizTrans;
}
let matrizTrans = transporMatriz(matriz);
mostrar(matrizTrans);


