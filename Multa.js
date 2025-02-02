//Rodando no node, tive que adaptar o código...
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o valor da multa por dia (R$): ', (valorMultaDiaInput) => {
    rl.question('Digite o número de dias de atraso: ', (diasAtrasoInput) => {
        const valorMultaDia = parseFloat(valorMultaDiaInput);
        const diasAtraso = parseInt(diasAtrasoInput);

        let multa = valorMultaDia * diasAtraso;
        if (multa < 1) {
            multa = 1;
        }

        let multaFormatada = multa.toFixed(2);
        multaFormatada = multaFormatada.replace('.', ',');

        console.log(`O valor da multa para ${diasAtraso} dias de atraso é: R$${multaFormatada}`);

        rl.close();
    });
});
//se o valor da multa for 0 continua dando 1 real, independente dos dias?


