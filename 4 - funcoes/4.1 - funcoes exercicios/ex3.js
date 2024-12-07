/*
    FAZER UMA FUNÇÃO QUE CHAME OUTRA FUNÇÃO DENTRO DE OUTRA FUNÇÃO
*/

function escreverNome(nome) {
    return (`Meu nome é ${nome}`);
}


function verificadorIdade(idade) {
    if (idade >= 18) {
        console.log (escreverNome('Eduardo') + ' é maior de idade');
    } else {
        console.log (`Você é menor de idade ${escreverNome(nome)}`);
    }
}

verificadorIdade(18);
