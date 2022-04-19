// criando um array (ou vetor)
let alunos = ["inacinho", "veronica", "antonio", "rodrigo"];

console.log(alunos);

console.log("inacinho");

// acessando os dados do array através de indice
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

console.log(`O aluno ${alunos[3]} é sem sombra de duvidas o melhor desta sala.`);

// array como matriz (array bi-dimensional)

let tecnologias = [

    // 0       1       2
    ['html', 'CSS', 'JS'], // 0

    // 0     1         2         3        4
    ['php', 'mySQL', 'nodeJS', 'java', 'python'] // 1
];

console.log(`Eu gosto de ${tecnologias[1] [2]}`);