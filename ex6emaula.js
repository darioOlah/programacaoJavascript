//spread operator (...) operador de propagação - espalhamento

let futrasVermelhas = ["Morango","Cereja","Maça"];
let frutasAmarelas = ["Banana","Pêssego","Melão"];
let frutasVerdes = ["Limão","Uva","Abacate"];

let frutas=[...futrasVermelhas,...frutasAmarelas,...frutasVerdes];
console.log(frutas);
console.log(frutas.length);

let frutas2=[futrasVermelhas,frutasAmarelas,frutasVerdes];
console.log(frutas2);
console.log(frutas2.length);