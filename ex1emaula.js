//objeto
let = pessoa = {
    //características do objeto - atributos
    //chave: valor
    nome: "Dário",
    sexo: "M",
    usaAlianca: true,
    idade: 33,
    filhos: 3,
    //métodos
    exibir: function() {
        let sexo = pessoa.sexo == "M" ? "Homem" : "Mulher";
        return "Característica do objeto: " + pessoa.nome.toUpperCase() + "\nSexo: " + sexo + "\nIdade: " + pessoa.idade;
    }
};

console.log("Nome:" , pessoa.nome);
console.log("----------------------------------------------------");
console.log(" ");
console.log(pessoa);
console.log("----------------------------------------------------");
console.log(" ");
console.log(pessoa.exibir());