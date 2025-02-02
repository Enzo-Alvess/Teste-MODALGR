const tamanho = 50;
    const multiplosDe3 = [];
    const naoMultiplosDe3 = [];

    for (let i = 0; i < tamanho; i++) {
        const numero = Math.floor(Math.random() * 100) + 1;

        if (numero % 3 === 0) {
            multiplosDe3.push(numero);
        } else {
            naoMultiplosDe3.push(numero);
        }
    }

    console.log("Primeiro vetor (múltiplos de 3):", multiplosDe3);
    console.log("Segundo vetor (não múltiplos de 3):", naoMultiplosDe3);
