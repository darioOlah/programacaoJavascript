// .reduce() - percorre o array e retorna um único valor de acordo com o parâmetro.
let numeros = [5, 7, 16];
let soma = numeros.reduce(
function(acumulador, numero)
{
    return acumulador + numero; // acumulador + numero = 5 + 7 depois 12 + 16
});
console.log(soma); // 28


// forma mais rápida

const num= [1, 2, -3, 4, 5, 0, 7, 8, 9, 19]; 
console.log(num.reduce((total,el)=>total+el)); // total + el = 1 + 2 depois 3 + -3 etc. total = 52

let nomes = ['Dário', 'Mario', 'Chris'];
let junta = nomes.reduce(
function(acumulador, numero)
{
    return acumulador + numero; // junta as strings
});
console.log(junta);