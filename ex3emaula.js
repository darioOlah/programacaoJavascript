//método CONSTRUTOR - cria o modelo do objeto
//sempre com primeira letra maiúscula

class Gato {
    constructor(nome, idade, sexo, cor, raca) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.cor = cor;
        this.raca = raca;
    }
}

//instanciar objeto - criar uma cópia do objeto na memória

let gato = new Gato("Valentino", 7, "Macho", "Preto", "Genêrico");
let gato2 = new Gato ("Valentina", 7, "Fêmea", "Preto", "Genêrica");

console.log(gato.nome + " e " + gato2.nome);