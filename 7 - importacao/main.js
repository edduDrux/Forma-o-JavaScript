const { gets, print } = require('./funcoes-auxiliares.js');

const sorteio = [];

for (let i = 0; i < 5; i++) {
    const valorSorteado = gets();
    sorteio.push(valorSorteado);
}
const maiorValor = Math.max(...sorteio);
print(`O maior valor é: ${maiorValor}`);