/*
    FAÇA UM PROGRAMA PARA CALCULAR O VALOR DE UMA VIAGEM 

    VOCE TERA 5 VARIAVEIS. SENDO ELAS:
    1 - PREÇO DO ETANOL
    2 - PREÇO DA GASOLINA
    3 - O TIPO DE COMBUSTIVEL QUE ESTA NO SEU CARRO
    4 - GASTO MEDIO DE COMBUSTIVEL DO CARRO POR KM
    5 - DISTANCIA A SER PERCORRIDA

    IMPRIMA NO CONSOLE O VALOR QUE SERA GASTO PARA REALIZAR A VIAGEM
*/

const gasolina = 6.10
const etanol = 4.04
const kmLitroGasolina = 12
const kmLitroEtanol = 10
const distanciaKm = 776
const tipoCombustivel = 'gasolina'


if (tipoCombustivel === 'gasolina') {
    const consumo = distanciaKm / kmLitroGasolina
    const custo = consumo * gasolina
    console.log(`O custo da viagem com Gasolina foi de R$ ${custo.toFixed(2)}`);
} else {
    const consumo = distanciaKm / kmLitroEtanol
    const custo = consumo * etanol
    console.log(`O custo da viagem com Etanol foi de R$ ${custo.toFixed(2)}`);
}
