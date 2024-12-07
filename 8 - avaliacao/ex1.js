/*
    1) FAÇA UM PROGRAMA QUE RECEBA A MEDIA DE UM ALUNO.
    CASO A MEDIA SEJA < 5 IMPRIMA "REPROVADO".
    CASO A MEDIA SEJA >= 5 E < 7 IMPRIMA "RECUPERACAO".
    CASO A MEDIA SEJA >= 7 IMPRIMA "APROVADO".
    
    EXEMPLO:
    entrada: 5,5
    saida: recuperacao 
*/

/*
    1) FAÇA UM PROGRAMA QUE RECEBA A MEDIA DE UM ALUNO.
    CASO A MEDIA SEJA < 5 IMPRIMA "REPROVADO".
    CASO A MEDIA SEJA >= 5 E < 7 IMPRIMA "RECUPERACAO".
    CASO A MEDIA SEJA >= 7 IMPRIMA "APROVADO".
    
    EXEMPLO:
    entrada: 5,5
    saida: recuperacao 
*/

const { gets, print, setNotas } = require('./funcao-ex1');

setNotas([4.5, 8.2, 6.1, 7.0, 8.8, 6.5]);
const totalNotas = 6;
const media = Array.from({ length: totalNotas}, gets).reduce((soma, nota) => soma + nota, 0) / totalNotas;

console.log(media);
print(media < 5 ? 'REPROVADO' : media < 7 ? 'RECUPERACAO' : 'APROVADO');