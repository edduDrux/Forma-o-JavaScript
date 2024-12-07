/*
    1) CRIE uMA CLASSE PARA REPRESENTAR CARROS.
    OS CARROS POSSUEM UMA MARCA, UMA COR E UM GASTO MEDIO DE COMBUSTIVEL POR KILOMETRO RODADO.
    CRIE UM METODO QUE DADO A QUANTIDADE DE QUILOMETROS E O PREÇO DO COMBUSTIVEL NOS DE O VALOR
    GASTO EM REAIS PARA REALIZAR ESTE PERCURSO.
*/

class Carro {
    marca;
    cor;
    gastoKmLitro;

    constructor(marca, cor, gastoKmLitro) {
        this.marca = marca;
        this.cor = cor;
        this.gastoKmLitro = gastoKmLitro;
    }
}

const parati = new Carro('Volkswagen', 'Prata', 1/10);
console.log(parati);


const calcularGasto = (carro, km, precoLitro) => {
    return carro.gastoKmLitro * km * precoLitro;
}
console.log(`O valor gasto para percorrer 100km é de R$${calcularGasto(parati, 100, 5.5).toFixed(2)}`);