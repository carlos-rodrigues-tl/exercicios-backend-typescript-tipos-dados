const usuarios2 = [
    {
        nome: "Guido",
        idade: 32,
        status: true,
    },
    {
        nome: "Dani",
        idade: 30,
        status: true,
    },
    {
        nome: "João",
        idade: 40,
        status: false,
    },
    {
        nome: "Guilherme",
        idade: 29,
        status: true,
    },
    {
        nome: "Ana",
        idade: 18,
        status: false,
    },
    {
        nome: "José",
        idade: 28,
        status: false,
    },
]


const encontrarUsuario = (
    usuarios: { 
        nome: string, 
        idade: number, 
        status: boolean
    }[], 
    nome: string): 
    { 
        nome: string, 
        idade: number, 
        status: boolean
    }[] => {
    return usuarios.filter(usuario => {
        const nomeUsuario = usuario.nome.toLowerCase();
        const nomeFiltrar = nome.toLowerCase();

        return nomeUsuario.includes(nomeFiltrar);
    })

};

console.log( encontrarUsuario(usuarios2, 'jo') );

