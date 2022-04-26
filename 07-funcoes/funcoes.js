/* sintaxe 1 (tradicional) 
função literal/anônima */
let exemplo1 = function() {
    console.log("funções anonima / literal");
};

// chamando a função 1
exemplo1();

/* sintaxe 2 (tradicional) 
função nomeada*/
function exemplo2() {
    console.log("função nomeada");
}

// chamando a função 2
exemplo2()

/* sintaxe 3 (moderna) 
função seta/flecha (arrow function)*/

let exemplo3 = () => {
    console.log('arrow function');
}

// chamando a função 3 
exemplo3()

let exemplo3b = () => 
console.log('arrow function B');

exemplo3b();

// exemplos
// função nomeada
function dobra(valor) {
    return valor * 2;
};
document.write( dobra(10) );

// arrow function
let dobraB = (valor) => {
    return valor * 2;
};
console.log( dobraB(100) );

let dobraC = valor => valor * 100;
console.log( dobraC(50) );

console.log('-------------------------');

let preco = 1250;
let desconto = 77.88;
let precoFinal = preco - desconto;

// função dentro de função
function formataValor(valor) {
    return valor.toLocaleString('en', {
        style: 'currency',
        currency: 'USD'   
    });
}

console.log( formataValor(preco) )

// arrow
let formataPreco = valor => {
    return valor.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'   
    });
}

console.log( formataPreco(preco) );