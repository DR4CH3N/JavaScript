// estruturas de controle condicional

// if/else, else if

let nome = "matheus";
let idade = 10;

// verificar a idade da pessoa

// condicional encadeada
let mensagem;

// if (condição) {
//  comando
//  }
/*
if (idade >= 18) {
    mensagem = "voce e maior de idade";
} else {
    mensagem = "voce é o amor da minha vida"
}

 document write mostra algo na tela
document.write(mensagem); */

if (idade >= 60) {
    mensagem = `é idoso`;
}
else if (idade >= 18) {
    mensagem = `é maior de idade`;
}
else {
  //  mensagem = 'maior de idade';

  if(idade >= 12 && idade <18) {
    mensagem = `é adolescente`;
  } else {
      mensagem = `é criança`;
  }
};

console.log(`${nome} ${mensagem}`);
console.log("---------------------------");

let nota1 = 8;
let nota2 = 8;
let notatotal = nota1 + nota2
let media = notatotal / 2

/* if (media < 7) {
    document.write("reprovado, se lascou")
} else {
    document.write("aprovado, parabens!!")
} */

media >=7 ? media = "aprovado" : media = "reprovado"

console.log(media)

console.log("-------------------")

/* switch/case/default/break
opções de chatbot:
1 -> informaçoes 
2 -> reclamação
3 -> duvidas
4 -> transferir
*/

let opcao = 4
let textopcao;

switch(opcao) {
    case 1:
        textopcao = "legal, o que deseja saber?";
        break;

    case 2: 
    textopcao = "que pena, o que esta acontecendo?";
    break;
    
    case 3: 
    textopcao = "certo, qual a sua duvida?";
    break;

    default: textopcao = "hmm não entendi, vou te transferir";
    break;
}

console.log(`voce escolheu a opcao ${opcao}`);
console.log(textopcao);

console.log("-------------------")

/* operadores de comparação */

let a = 10;
let b = "10";

console.log(a === b); // true ou false

