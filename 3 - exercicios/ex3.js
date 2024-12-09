/*
    3) ELABORE UM ALGORITMO QUE CALCULE O QUE DEVE SER PAGO POR UM PRODUTO, CONSIDERANDO O PREÇO NORMAL DE ETIQUE 
    E A ESCOLHA DA CONDIÇÃO DE PAGAMENTO.
    UTILIZE OS CODIGOS DA TABELA A SEGUIR PARA LER QUAL A CNDIÇÃO DE PAGAMENTO ESCOLHIDA E EFETUAR O CALCULO APROPRIADO.

    CODIGO CONDIÇÃO DE PAGAMENTO:
    1 - A VISTA DEBITO, RECEBE 10% DE DESCONTO
    2 - A VISTA DINHEIRO OU PIX RECEBE 15% DE DESCONTO
    3 - PARCELADO EM 2X, PREÇO NORMAL DE ETIQUETA SEM JUROS
    4 - PARCELADO ACIMA DE 2X, PREÇO NORMAL DE ETIQUETA MAIS 10% DE JUROS
*/

const valorProduto = 100.00
const debito = 0.10
const dinheiro = 0.15
const parcela2x = 0
const parcela3x = 0.10

const condicaoPagamento = 4 // 1 = debito, 2 = dinheiro, 3 = parcelado2x, 4 = parcelado3x

if (condicaoPagamento === 1) {
    const valorFinal = valorProduto - (valorProduto * debito)
    console.log(`O valor final a ser pago é de R$ ${valorFinal.toFixed(2)}`);
} else if (condicaoPagamento === 2) {
    const valorFinal = valorProduto - (valorProduto * dinheiro)
    console.log(`O valor final a ser pago é de R$ ${valorFinal.toFixed(2)}`);
} else if (condicaoPagamento === 3) {
    const valorFinal = valorProduto - (valorProduto * parcela2x)
    console.log(`O valor final a ser pago é de R$ ${valorFinal.toFixed(2)}`);
} else {
    const valorFinal = valorProduto + (valorProduto * parcela3x)
    console.log(`O valor final a ser pago é de R$ ${valorFinal.toFixed(2)}`);
}
