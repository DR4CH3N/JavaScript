let formulario = document.querySelector('form');

formulario.addEventListener('submit', function(event) {

    event.preventDefault();

    // parseInt transforma um numero quebrado em numero inteiro
    // math.random() * numero pega um numero aleatorio, multiplique ele pelo numero limite desejado 
    // EX: quero um numero de 0 a 11
    // voce no caso iria digitar 12 em vez de 11 
    // sendo que se voce digitasse 11 o numero em questao nunca iria ser sorteado, apenas 10 pra baixo.
    let numeroEscolhido = parseInt (Math.random() * 11);

    let palpiteUsuario = parseInt( document.getElementById('palpite').value );
    let resultado = document.getElementById('resultado');

    if (palpiteUsuario == numeroEscolhido) {
    resultado.innerHTML = "voce acertou! parabéns!";

    } else if (palpiteUsuario < 0 || palpiteUsuario > 10) {
    resultado.innerHTML = "digite um numero entre 0 e 10";
    }
    else {
    resultado.innerHTML = "ERROU!";
};
});

// desafio 1: caso palpitar mais de 3 vezes o usuario nao pode mais jogar
// desafio 2: dar uma dica para o usuario (caso ele errar) comparando o numero digitado com o numero escolhido pelo computador 
// (porem não exibindo o numero exato, apenas dizendo se é maior ou menor)