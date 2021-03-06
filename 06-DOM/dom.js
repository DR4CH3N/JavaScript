/* metodos/funções de acesso e seleção

getElementById() -> seleciona um elemento pelo ID

querySelector() -> seleciona UM elemento de acordo com um seletor

querySelectorAll() -> seleciona VARIOS elementos de acordo com um seletor
*/

// selecionando pelo ID

const titulo = document.getElementById ('titulo-principal');
console.log(titulo);

// selecionando pela TAG

const pagina = document.querySelector('body');
console.log(pagina);

// selecionando todas as tags H2

const subtitulo = document.querySelectorAll('h2');
console.log(subtitulo);



// modificando elementos

// cada vez que voce digitar essa variavel, o conteudo da variavel/constante sera exibido
// text.content muda o conteudo de X variavel/constante
titulo.textContent = 'Olá mundo!';
subtitulo[1].textContent = 'Full-stack';

const legenda = document.querySelector('figcaption');
// innerHTML faz com que tags do HTML sejam aceitas dentro do codigo do JS
// text.content NÃO permite que tags sejam colocadas dentro do codigo
legenda.innerHTML = "<b>qq coisa ai</b>";

// CSS via JS

titulo.style.textAlign = "center";
// as tags de CSS no JS NÃO tem - (ífen). a primeira letra de cada palavra é SEMPRE maiuscula

titulo.style.backgroundImage = 'linear-gradient(lightyellow, lightblue)';
titulo.style.color = "red";

const lista_editores = document.querySelector('#lista-editores');

const ultimo = lista_editores.querySelector('li:last-child');

ultimo.innerHTML = "<b>Deu ruim!</b>";

const primeiro = lista_editores.querySelector('li:first-child');

primeiro.innerHTML = "<b>Deu ruim 2!!</b>"

const outro = lista_editores.querySelector('li:nth-child(2)');

//outro.innerHTML = "<b>Deu ruim de novo!!!</b>"

// outro.style.color = "blue";

ultimo.classList.add('destaque-item');

// adicionando o atributo TARGET em todos os links da lista de referencia
// selecionando todos os links contidos na lista ul
const links = document.querySelectorAll('ul li a');

console.log(links);

// links[0].style.color = "red";

for (let i = 0; i < links.length; i++) {
    links[i].setAttribute('taget', '_blank');
}