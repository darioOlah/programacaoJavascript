let nomes=['Luciana','Andressa','Fernanda','Sophia','Juan'];
//            0          1         2          3        4
console.log(nomes.length); // tamanho Array
console.log(nomes[4]); // puxa elemento na posição [4]

console.log('------------------------');

for (let i=nomes.length-1; i>=0; i--)  // mostra Array em ordem decrescente
{
console.log(nomes[i]);
}
console.log('------------------------');

for (let i=0; i< nomes.length; i++)  // mostra Array em ordem crescente
{
console.log(nomes[i]);
}
console.log('------------------------');

console.log(nomes[nomes.length-1]);