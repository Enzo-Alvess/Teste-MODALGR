const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function contarPalavras(frase) {
    const palavras = frase.split(' ');
    const quantidadePalavras = palavras.length;
    console.log(`Quantidade de palavras: ${quantidadePalavras}`);
}


rl.question('Digite uma frase: ', (frase) => {
    contarPalavras(frase);
    rl.close();  // Fecha a interface de leitura
});
