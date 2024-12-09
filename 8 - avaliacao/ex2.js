/*
    2) FAÇA UM PROGRAMA QUE RECEBA N (QUANTIDADE DE NUMEROS) E SEUS RESPECTIVOS VALORES NA SEQUENCIA
    IMPRIMA O MAIOR NUMERO PAR E O MENOR NUMERO IMPAR

    EXEMPLO: 
    ENTRADA: 5, 3, 4, 1, 10, 8
    
    SAIDA: MAIOR NUMERO PAR: 10, MENOR NUMERO IMPAR: 1
*/

const { gets, print } = require('./funcao-ex2');

const num = gets();

let maiorPar = 0;
let menorImpar = 0;

for (let i = 0; i < num; i++) {

    const valor = gets();

    if (valor % 2 === 0 && valor > maiorPar) {
        maiorPar = valor;
    } else if (valor % 2 !== 0 && (valor < menorImpar || menorImpar === 0)) {
        menorImpar = valor;
    }
    
}

print(`MAIOR NUMERO PAR: ${maiorPar}, MENOR NUMERO IMPAR: ${menorImpar}`);