//array = tipo de variável composta
let nomes= ['Bianca','Paula','Chris','Felipe'];
//             0        1       2       3
// núm. elementoss = 4 - tamanho
console.log(nomes);
console.log(nomes[1]); // começa do ZERO
console.log(nomes.length);
nomes.push('Alba');
console.log(nomes);
console.log(nomes[3]); // começa do ZERO
console.log(nomes.length);
nomes.push('Pedro', 'Mario'); // PUSH método que insere elementos no final do array
console.log(nomes);
nomes.unshift ('Luciana'); // UNSHIFT método que insere elementos no início do array
console.log(nomes);
let nomeRemovido = nomes.shift(); // SHIFT método remove o primeiro elemento
console.log(nomeRemovido , '- Removido o primeiro elemento');
console.log(nomes);
nomeRemovido = nomes.pop(); // POP método remove o ultimo elemento
console.log(nomeRemovido , '- Removido o ultimo elemento!');
console.log(nomes);
let nomesRetornados = nomes.join(' - ');
console.log(nomesRetornados);
console.log(nomes);
console.log(nomes.lastIndexOf('Chris'));
console.log(nomes.indexOf('Bianca'));
console.log(nomes.indexOf('Dâmares'));
console.log(nomes.includes('Alba'));