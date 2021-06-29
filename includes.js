// .includes() - verifica se existe o valor do elemento no array.
let numeros6 = [3, 4, 5, 6, 7];
let existe = numeros6.includes(4); // true
console.log(existe);
existe = numeros6.includes(4, 2); // false  // 4 é o valor e 2 é o indice de inicio
console.log(existe);