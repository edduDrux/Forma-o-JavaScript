/*
    1) FAÇA UM ALGORITIMO QUE DADO AS 3 NOTAS TIRADAS POR UM ALUNO EM UM SEMESTRE DA FACULDADE CALCULE E IMPRIMA A SUA MEDIA E A SUA CLASSIFICAÇÃO CONFORME A TABELA ABAIXO:

    MEDIA = (NOTA1 + NOTA2 + NOTA3) / 3

    CLASSIFICAÇÃO:
    - MEDIA MENOR QUE 5, REPORVAÇÃO
    - MEDIA ENTRE 5 E 6.9, RECUPERAÇÃO
    - MEDIA MAIOR QUE 7, APROVADO
*/

const nota1 = 6.5;
const nota2 = 8.5;
const nota3 = 7.5;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log(`A média do aluno foi de ${media.toFixed(2)} e ele esta REPROVADO`);
}   else if (media >= 5 && media < 7) {
    console.log(`A média do aluno foi de ${media.toFixed(2)} e ele esta de RECUPERAÇÃO`);
}  else {
    console.log(`A média do aluno foi de ${media.toFixed(2)} e ele esta APROVADO`);
}