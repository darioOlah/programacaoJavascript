// ano ---> bissexto (sim ou não)
// ano/4 ---> resto = 0

let ano = 2020;
let resto = ano%4;
// SINTAXE IF TERNÁRIO: let variavel = condição ? 'caso true' : 'caso false'
let resposta = resto==0 ? 'É bissexto!' : 'Não é bissexto!';
console.log(resposta);