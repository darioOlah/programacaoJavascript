// .slice() - retorna uma cópia do array com os parâmetros solicitados.
let numeros3 = [3, 4, 5, 6, 7];
let subArray = numeros3.slice(0, 3);
console.log(subArray); // [3,4,5]

// .splice() - ajuda a remover ou adicionar elementos de um array.
let numeros = [3, 4, 5, 6, 7];
numeros.splice(0, 0, 2); // inicia no indice 0, elimina 0 indices e adiciona o elemento 2
console.log(numeros); // [2,3,4,5,6,7]
numeros.splice(1, 2); // inicia no indice 1 (4), eliminado 2 indices os elementos (4,5)
console.log(numeros); // [2,5,6,7]

// .sort() - ordena os elementos em ordem crescente.
let marcas = ['samsung', 'xiaomi', 'apple'];
marcas.sort();
console.log(marcas); // ['apple', 'samsung', 'xiaomi']

let numeros4 = [10, 3, 4, 52, 6, 7];
numeros4.sort(
function(a,b){
return a-b; }); // [4, 7, 8, 9, 10, 52]

// .flat() - junta array mas não modifica o original.
let numeros5 = [1, 2, 3, [4], [[5, 6]]];
let novoArray = numeros5.flat(); // [1, 2, 3, 4, [[5, 6]]
novoArray = numeros5.flat(2); // [1, 2, 3, 4, 5, 6]
console.log(novoArray);

// .includes() - verifica se existe o valor do elemento no array.
let numeros6 = [3, 4, 5, 6, 7];
let existe = numeros6.includes(4); // true
console.log(existe);
existe = numeros6.includes(4, 2); // false  // 4 é o valor e 2 é o indice de inicio
console.log(existe);

// .find() - retorna o primeiro valor que cumprir a condição especificada.
let moedas = [
    { nome: 'Bitcoin', simbolo: 'BTC' },
    { nome: 'Bitcoin', simbolo: 'BTC' },
    { nome: 'Ethereum', simbolo: 'ETH' },
    { nome: 'Cardano', simbolo: 'ADA' },
];
    moedas.find(
function (moeda) {
    console.log (moeda.nome === 'Bitcoin');
}); // {nome: 'Bitcoin', simbolo: 'BTC'}