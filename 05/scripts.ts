const soletar = (texto: string): string => {
    return texto.split('').join('-');
};
console.log(soletar('programador'));
