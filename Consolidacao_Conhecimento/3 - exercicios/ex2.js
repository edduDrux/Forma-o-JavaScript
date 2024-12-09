/*
    2) O IMC - INDICE DE MASSA CORPORAL É UM CRITERIO DA ORGANIZAÇÃO MUNDIAÇ DE SAUDE PARA DAR UMA INDICAÇÃO
    SOBRE A CONDIÇÃO DE PESO DE UMA PESSOA ADULTA.

    FORMULA DO IMC:
    IMC = PESO / (ALTURA * ALTURA)

    ELABORE UM ALGORITMO QUE DADO O PESO E A ALTURA DE UMA PESSOA, CALCULE O SEU IMC E MOSTRE A SUA CLASSIFICAÇÃO CONFORME A TABELA ABAIXO:

    IMC EM ADULTOS CONDIÇÃO:
    - ABAIXO DE 18.5: ABAIXO DO PESO
    - ENTRE 18.5 E 25: PESO NORMAL
    - ENTRE 25 E 30: SOBREPESO
    - ENTRE 30 E 40: OBESIDADE
    - ACIMA DE 40: OBESIDADE MÓRBIDA
*/

const peso = 88.00
const altura = 1.83
const imc = peso / Math.pow(altura, 2);


if (imc < 18.5) {
        console.log(`ABAIXO DO PESO`);
}   else if (imc <= 18.5 && imc < 25) {
        console.log(`com PESO NORMAL`);
}   else if (imc >= 25 && imc < 30) {
        console.log(`com SOBREPESO`);
}   else if (imc >= 30 && imc < 40) {
        console.log(`com OBESIDADE`);
}   else {
        console.log(`com OBESIDADE MÓRBIDA`);
}