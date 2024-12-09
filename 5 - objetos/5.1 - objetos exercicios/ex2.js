/*
    2) CIRE UMA CLASSE PARA REPRESENTAR PESSOAS.
    PARA CADA PESSOA TEREMOS OS ATRIBUTOS NOME, PESO E ALTURA.
    AS PESSOAS DEVEM TER A CAPACIDADE DE DIZER O VALOR DO SEU IMC (IMC = PESO / ALTURA^2).
    INSTACIE UMA PESSOA CHAMADA JPSE QUE TENHA 70KG E 1,75M DE ALTURA E PEÇA AO JOSE DIZER O VALOr
    DO SEU IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    imc() {
        return this.peso / (this.altura ** 2);
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(`O valor do meu IMC é de ${jose.imc().toFixed(2)}`);

