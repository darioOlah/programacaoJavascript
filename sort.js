// .sort() - ordena os elementos em ordem crescente.
let marcas = ['samsung', 'xiaomi', 'apple'];
marcas.sort();
console.log(marcas); // ['apple', 'samsung', 'xiaomi']

let numeros4 = [10, 3, 4, 52, 6, 7];
numeros4.sort(
function(a,b){
return a-b; }); // [4, 7, 8, 9, 10, 52]