// .flat() - junta array mas não modifica o original.
let numeros5 = [1, 2, 3, [4], [[5, 6]]];
let novoArray = numeros5.flat(); // [1, 2, 3, 4, [[5, 6]]
novoArray = numeros5.flat(2); // [1, 2, 3, 4, 5, 6]
console.log(novoArray);