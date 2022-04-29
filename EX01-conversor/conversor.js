/* ======================= SOLUÇÃO 1 ==========================


 // declarando a função que é chamada quando clicamos no botão converter do HTML
 function converteDollar() {

    // pegando o valor digitado no campo valorDollar do HTML
    let valorDollar = document.getElementById ('valorDollar').value;

    // converte o valor digitado considerando o valor do dollar
    let converteReal = valorDollar * 4.97;

    //imprime o resultado da conversão na tela
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `o valor convertido em reais é R$ ${converteReal}`;

    // mudar a cor para vermelho

    resultado.style.color = "red";
} 
*/

// ====================== SOLUÇÃO 2 =============================

/* function converteDollar() {

    // pegando o valor digitado no campo valorDollar do HTML
    let valorDollar = document.getElementById ('valorDollar').value;

    // converte o valor digitado considerando o valor do dollar
    let cotacaodollar = document.getElementById('cotacaoDollar').value
    let converteReal = valorDollar * 4.97;

    // imprime o resultado da conversão na tela
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `o valor convertido em reais é R$ ${converteReal}`;

    // mudar a cor para vermelho

    resultado.style.color = "red";

} */

// ========================== SOLUÇÃO 3 =============================

let formulario = document.querySelector('form');

formulario.addEventListener('submit', function(event) {

    // previne o comportamento padrão do formulario (ao enviar) 
    event.preventDefault();

    let cotacao = parseFloat( document.getElementById('cotacao').value );
    let valor = parseFloat( document.getElementById('valor').value );
    let converte = (valor * cotacao).toFixed(2);
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `o valor convertido em reais é ${converte}`;
});

 