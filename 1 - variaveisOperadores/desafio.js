const valorCombustivel = 5.30;
const kmLitro = 12;
const distancia = 320;

const consumo = distancia / kmLitro;
const custo = consumo * valorCombustivel;

console.log(`O custo da viagem foi de R$ ${custo.toFixed(2)}`);