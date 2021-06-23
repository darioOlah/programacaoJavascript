let pessoa = {
    nome : "Dário",
    idade : 33,
    profissao : "Programador",
}
let {nome, profissao} = pessoa;

console.log(nome);

let seriesFavoritas = ["Lucifer", "Fear The Walking Dead", "Loki"];

const [item1, item2, item3] = seriesFavoritas;

console.log(item2);