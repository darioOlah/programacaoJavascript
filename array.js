// .map() - faz um loop no array e retorna um novo array modificado.
let numeros = [2, 4, 6];
let dobro = numeros.map(function(num)
{
    return num * 2; // condição exige que multiplique por 2 cada elemento
});
console.log(dobro); // [4,8,12]

// .filter() - faz um loop e filtra os elementos conforme o parâmetro, retorna os valores solicitados. 
let idades = [22, 8, 17, 14, 30];
let maiores = idades.filter(function(idade)
{
    return idade > 18; // informa a condição de exibir apenas as idades maiores que 18 anos
});
console.log(maiores); // [22, 30]

// .reduce() - percorre o array e retorna um único valor de acordo com o parâmetro.
let numeros2 = [5, 7, 16];
let soma = numeros2.reduce(
function(acumulador, numero)
{
    return acumulador + numero; // acumulador + numero = 5 + 7 depois 12 + 16
});
console.log(soma); // 28

// .forEach() - exibe todos os elementos do array
var paises = ['Brasil', 'Cuba', 'Peru'];
paises.forEach(
function(pais){
console.log(pais);
});