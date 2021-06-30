// .filter() - faz um loop e filtra os elementos conforme o parâmetro, retorna os valores solicitados. 
let idades = [22, 8, 17, 14, 30];
let maiores = idades.filter(function(idade)
{
    return idade > 18; // informa a condição de exibir apenas as idades maiores que 18 anos
});
console.log(maiores); // [22, 30]

const numeros= [1, 0, -3, 4, 5, 0, -7, 8, 9, -19];

const numMaior0= numeros.filter(el=>el>0); // exibe números maiores que zero
console.log(numMaior0);

const numMenor0= numeros.filter(el=>el<=0); // exibe números menores ou igual a zero
console.log(numMenor0);

const num= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = num.filter(el=>el%2==0); // exibindo os numeros pares

const impares = num.filter(el=>el%2!=0); // exibindo os numeros impares

console.log(pares);
console.log(impares);

const pessoas = [
    {nome: 'Maria', salario: 2000.00},
    {nome: 'João', salario: 4900.00},
    {nome: 'José', salario: 1000.00},
    {nome: 'Paula', salario: 1500.00}];

const salMaior= el=>el.salario>=2000;

console.log(pessoas.filter(salMaior));