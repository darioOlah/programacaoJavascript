// .splice() - ajuda a remover ou adicionar elementos de um array.
let numeros = [3, 4, 5, 6, 7];
numeros.splice(0, 0, 2); // inicia no indice 0, elimina 0 indices e adiciona o elemento 2
console.log(numeros); // [2,3,4,5,6,7]
numeros.splice(1, 2); // inicia no indice 1 (4), eliminado 2 indices os elementos (4,5)
console.log(numeros); // [2,5,6,7]