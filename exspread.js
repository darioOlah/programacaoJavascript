let cores = ['Amarelo', 'Vermelho', 'Azul'];
let outrasCores = ['Rosa', 'Verde', 'Preto'];
let todasAsCores = [...cores, ...outrasCores];

console.log(todasAsCores);

let fala = ['Pedro', 'tenha'];
let saudacao = ['Bom dia', ...fala, 'uma feliz semana'];

console.log(saudacao);

let carro = {marca:'Ferrari', km:0, ano:2019};
let corredorUm = {nome:'Vettel', idade:32, ...carro};
let corredorDois = {nome:'Leclerc', idade:21, ...carro};

console.log(corredorUm,corredorDois);

let notas = [9.3, 8.5, 3.2, 7, 10];
console.log(Math.min(...notas));