const etiquetas: { produto: string, lote: number, ano: number, qtd: number} = {
    produto: 'CPU Dual Core 3.0GHZ',
    lote: 321,
    ano: 2022,
    qtd: 5
};

const imprimirEtiquetas = (etiqueta:{ 
    produto: string, 
    lote: number, 
    ano: number, 
    qtd: number
}): string[]  => {

    const resultado: string[] = [];

    for (let i = 1; i <= etiqueta.qtd; i++) {
        resultado.push(`${etiqueta.lote}-${etiqueta.ano}-${i.toString().padStart(3, '0')}`);
    }
    return resultado
};

console.log(imprimirEtiquetas(etiquetas));
