/* estruturas de controle de repetição 

while (enquanto)
do/while (faça/enquanto)
for(para uma determinada quantidade de vez) */

// exemplo 1: while

//  while (condicao) {comandos};

let i = 1;

while (i < 20) {
    console.log(`o valor de i é: ${i}`);
    i++;
    //i++ soma o valor da propria variavel 
}

// exemplo 2: do/while

console.log("-------------------")

let j = 1;

do {
    console.log(`J é ${j}`)
    j++;
} while (j < 10);

console.log("---------------")

// exemplo 3 for

for (let k = 1; k <=5; k++) {
    console.log(`K vale: ${k}`);
}

console.log('------------')

let alunos = [
    "chiquinha", "chaves", "madruga", "kiko", "seu barriga"
];

// cache do tamanho array
let tamanho = alunos.length;

for (let i = 0; i < tamanho; i++) {
    console.log(alunos[i]);
}



console.log("---------")