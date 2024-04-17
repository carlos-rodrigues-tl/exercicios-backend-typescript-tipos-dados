const numeros: number[] = [1, 5, 2];

const mutiplicarNumeros = (numeros: number[]): number[] [] => {
    let tabuadas: number[] [] = [];

    for (let index = 0; index < numeros.length; index++) {
        const numero = numeros[index];
        const tabuada = [];

        for (let mutiplicador = 1; mutiplicador <= 10; mutiplicador++) {
            const resultado = (numero * mutiplicador);
            tabuada.push(resultado);

            console.log(`${numero} x ${mutiplicador} = ${resultado}`);
        }
        console.log('--------------');
       tabuadas.push(tabuada);
    }
    return tabuadas;
};

mutiplicarNumeros(numeros);
