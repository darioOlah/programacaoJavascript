//trabalhando com mais de um objeto
let cachorro = {
    nome: "Britney",
    idade: 14,
    sexo: "Fêmea",
    cor: "Branca",
    raca: "Shitzu",
    comportamento: function() { 
        return "A " + this.nome + " é muito brava!"}
};

let { nome,idade,sexo,cor,raca,comportamento}=cachorro;
console.log(cachorro.comportamento());

let gato = {
    nome: "Valentino",
    idade: 7,
    sexo: "Macho",
    cor: "Preto",
    raca: "Genêrico"
};

console.log( "Eu tenho 2 animais, " + cachorro.nome + " e " + gato.nome);
console.log(cachorro.comportamento());