// .map() - faz um loop no array e retorna um novo array modificado.
let numeros = [0, 2, 4, 6, 8];
let impares = numeros.map(function(num)
{
    return num + 1; // condição exige que some + 1 em cada elemento
});
console.log(impares); // [4,8,12]