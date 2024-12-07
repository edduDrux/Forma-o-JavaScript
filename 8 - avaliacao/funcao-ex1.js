let notas = [];
let nota = 0;


function setNotas (values) {
    notas = values;
    nota = 0;
}

function gets() {
    if (nota < notas.length) {
        const value = notas[nota];
        nota++;
        return parseFloat(value);
    }
}

function print(texto) {
    console.log(texto);
}


module.exports = { gets, print, setNotas };