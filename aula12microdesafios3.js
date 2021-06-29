// .reduce() - percorre o array e retorna um único valor de acordo com o parâmetro.
let numeros = [1, 2, 3, 4, 5];
let formatar = numeros.reduce(
function(formatar)
{
    return numeros[0] + '-' + numeros [1] + '-' + numeros[2] + '-' + numeros [3] + '-' + numeros[4];
});
console.log(formatar);