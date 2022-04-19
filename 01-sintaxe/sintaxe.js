// comentario de uma linha: CTRL + ;
/* bloco de comentario: SHIFT + ALT + A */

// comando de saida para o console
console.log("Olá mundo!");

// variaveis
// palavras-chave: var, let, const

/* 
var -> variavel de escopo global
let -> variavel de escopo de bloco
const -> constante de escopo de bloco
*/

const nome = "Matheus anthony"; // constante
let ano = 2022; // variavel de escopo local
var curso = "técnico em informatica para internet"; // variavel global

/*ano = 2025;
curso = "como se tornar uma princesa";
*/

// recuperando os valores
console.log(nome);
console.log(ano);
console.log(curso);

// concatenação
// Eu sou o(a) XXXXX, e em ANO estou estudando no curso CURSO
console.log("eu sou o " +nome+ " e em " +ano+ " estou estudando no curso " +curso+ ".");

// string literal/template string/ECMA script
console.log(`Eu sou o ${nome} e em ${ano} estou estudando no curso ${curso}.`);

/* operadores matematicos:
+ adição
- subtração
/ divisão
* multiplicação 
*/

let produto = "TV led";
let preco = 6500;
let quantidade = 3;
let total = preco * quantidade;

console.log(`Temos atualmente no estoque o produto ${produto} na quantidade de ${quantidade} unidades, ao custo de ${preco} (cada) e valor total de ${total}.`);