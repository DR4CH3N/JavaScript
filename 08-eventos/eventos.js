let nome = document.getElementById("nome");
let resultado = document.getElementById ("resultado");

// quando voce escrever algo no formulario, ele vai aparecer no H2 no HTML
function clique() {
    console.log(nome.value);
    resultado.textContent = nome.value;
}
