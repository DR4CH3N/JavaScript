// exemplo 1: objeto basico
let livro = {
    // propriedade: valor
    titulo: 'senhor dos anéis',
    ano: 1954,
    volumes: 3,
    autor: 'J.R.R Tolkien'

};

console.log(livro);

console.log(`Meu livro preferido é o ${livro.titulo} que foi lançado em ${livro.ano}.`);

// exemplo 2: objeto contendo array e outro objeto

let pessoa = {
    // propriedades

    nome: 'certo alguem',
    idade: '39',
    sexo: 'masculino',
    telefones: ['2222-3333', '6666-9999'],
    cidade: 'são paulo',
    medidas: {
        peso: 90,
        altura: 1.80
    }
};

console.log(pessoa.medidas.altura); // 1.80m
console.log(pessoa.telefones[0]); // 2222-3333

console.log(`${pessoa.nome} é uma pessoa incrivel, contrate atraves do telefone ${pessoa.telefones[1]}`);

// exemplo 3: array de objeto

let livros = [
    {
        titulo: 'senhor dos aneis',
        autor: 'J.R.R Tolkien'
    },
    {
        titulo: 'ghost rider',
        autor: 'neil peart'
    },
    {
        titulo: 'game of thrones',
        autor: 'George R.R Martin'
    }
];

console.log(`Meu livro favorito é ${livros[1].titulo} do autor ${livros[1].autor}`);