/*
 o um igual "=" é para atribuir valor a variavel
 os dois iguais "==" ignora o tipo da variavel
 os tres iguais "===" considera o tipo da variavel
*/

const numero = 0;

const isNumeroPar = (numero % 2) === 0;

if (isNumeroPar) {
    console.log("O número é par");
} else {
    console.log("O número é impar");
}