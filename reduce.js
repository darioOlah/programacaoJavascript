// .reduce() - percorre o array e retorna um único valor de acordo com o parâmetro.
let numeros2 = [5, 7, 16];
let soma = numeros2.reduce(
function(acumulador, numero)
{
    return acumulador + numero; // acumulador + numero = 5 + 7 depois 12 + 16
});
console.log(soma); // 28