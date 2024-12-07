class Pessoa {
    nome;
    idade;
    altura;
    anoNascimento;
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.anoNascimento = 2024 - idade;
    }
    apresentacao() {
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, tenho ${this.altura}m de altura e eu nasci em ${this.anoNascimento}`);
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p1.idade < p2.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const eduardo = new Pessoa('Eduardo', 21, 1.83);
const lucas = new Pessoa('Lucas', 32, 1.80);

compararPessoas(eduardo, lucas); 