// .map() - faz um loop no array e retorna um novo array modificado.
let numeros = [2, 4, 6];
let dobro = numeros.map(function(num)
{
    return num * 2; // condição exige que multiplique por 2 cada elemento
});
console.log(dobro); // [4,8,12]