 const pagina = document.querySelector('body');
 const titulo = pagina.querySelector('h1');
 const msg = pagina.querySelector('#mensagem');
 const sub01 = pagina.querySelector('#subtitulo-exemplo01');

// quando um evento acontecer (passar o mouse em algo) este comando sera executado:
sub01.addEventListener('mouseover', function() {
    msg.textContent = 'voce passou o mouse sobre aqui';
});

//Obs: paragrafo vazio abaixo não vai renderizar o texto
// addEventListener vai ser um "espião" de eventos
sub01.addEventListener('mouseout', function() {
    msg.textContent = ""
});

// exemplo 02


const botao = pagina.querySelector('#noturno');
// no click, o botão modo noturno vai desativar ou ativar com o toggle
botao.addEventListener('click', function() {
pagina.classList.toggle('modo-noturno');
if ( botao.textContent == 'ativar' ) {
     botao.textContent = 'desativar';
}
else {
    botao.textContent = 'ativar';
};
});

// exemplo 03: formulario
const formulario = pagina.querySelector('form');
const campoNome = formulario.querySelector('#nome');
const campoNota = formulario.querySelector('#nota1');
const campoNota1 = formulario.querySelector('#nota2');
const campoNota2 = formulario.querySelector('#nota2');
const corpoTabela = pagina.querySelector('tbody');

formulario.addEventListener('submit', function(event) {
    // previne o comportamento padrão do formulario
    event.preventDefault();    

    // capturando os dados digitados
    let nome = campoNome.value;
    let nota1 = parseFloat(campoNota1.value);
    let nota2 = parseFloat(campoNota2.value);

    
    // calculando media
    let media = calculaMedia (nota1, nota2);

    // verificando a situação
    let situacao = verificaSituacao(media);

    // montagem do resumo do aluno
    montaResumo(nome, media, situacao);

    // resetando o formulario
    formulario.reset();

    // levando o foco para o campo nome
    campoNome.focus();
});

function calculaMedia(nota1, nota2){
    return (nota1 + nota2) / 2;
}

function verificaSituacao(media) {
    if (media >=7) {
        return "aprovado";
    }
    else {
        return "Reprovado!";
    }
};

function montaResumo(nome, media, situacao) {
    // 1) criar o elemento dinamicamente
    let linha = document.createElement('tr');

    // 2) montar o conteudo do elemento criado
    linha.innerHTML = `<td> ${nome} </td>
                       <td> ${media} </td>
                       <td> ${situacao} </td>`;

    // 3) adicionar o elemento ao DOM (corpoTabela)
    corpoTabela.appendChild(linha);
};













 
/* escopo ocal e global
for (let i = 0; i < 100; i++ ) {
    console.log(i);
};

document.write(i);
*/

/*let nome = document.getElementById("nome").value;
let resultado = document.getElementById ("resultado");

// quando voce escrever algo no formulario, ele vai aparecer no H2 no HTML
function clique() {
    console.log(nome.value);
    resultado.textContent = nome.value;
}

resultado.innerHTML = 'alo'

 desafio: digite o valor em dolar para saber o valor em real */

/*
 console.log(qualquerCoisa);
 qualquerCoisa.style.color = "red";

 qualquerCoisa.innerHTML = "qulquer coisa mesmo"; */