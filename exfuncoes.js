console.log("----------------------------------------------------------------------------------------------------------------EXERCÍCIO 1--------")

// Micro desafios - Etapa I - Exercicio 1

let imc = function(peso, altura){
    console.log("Olá, conforme sua massa de " + peso + "Kg e sua altura de " + altura + "m o seu IMC é " + (peso / altura**2));
}

imc(72,1.70);

// Micro desafios - Etapa I - Exercicio 2

console.log("----------------------------------------------------------------------------------------------------------------EXERCÍCIO 2--------")

// SOMA
let soma = function (numA, numB){
    console.log("A soma dos números " + numA + " e " + numB  + " é igual a " + (numA+numB));
}

soma(4,9);

// SUBTRAÇÃO
let subtracao = function (numA,numB){
    console.log("A subtração dos números " + numA + " e " + numB  + " é igual a " + (numA-numB));
}

subtracao(12,5);

// DIVISÃO

let divisao = function (numA,numB){
    console.log("A divisão do número " + numA + " pelo número " + numB  + " é igual a " + (numA/numB));
}

divisao(20,5);

//MULTIPLICAÇÃO

let multiplicacao = function (numA,numB){
    console.log("A multiplicação do número " + numA + " pelo número " + numB  + " é igual a " + (numA*numB));
}

multiplicacao(4,8);

// Micro desafios - Etapa I - Exercicio 3

console.log("----------------------------------------------------------------------------------------------------------------EXERCÍCIO 3--------")

let nomeJogador = "Dário";
let golsJogador = 0;
let precoEmDolares = 10000;

function fazerGols(){
    golsJogador++;
    console.log("GOL!!!!!! Feito pelo jogador " + nomeJogador + "!");
    console.log("O jogador fez, " + golsJogador + " gol(s) e ganhou", + (golsJogador*precoEmDolares) + " dólares!");
    
}
fazerGols();
fazerGols();
fazerGols();
fazerGols();
fazerGols();

// Micro desafios - Etapa I - Exercicio 4

console.log("----------------------------------------------------------------------------------------------------------------EXERCÍCIO 4--------")

function hatTrick(){
    golsJogador=0;
    precoEmDolares=10000;
    fazerGols();
    fazerGols();
    fazerGols();
    console.log("HATTRICK - O jogador fez, " + golsJogador + " gol(s) e ganhou", + ((golsJogador*precoEmDolares)+(golsJogador*(precoEmDolares*0.10))) + " dólares!");
}
hatTrick();

