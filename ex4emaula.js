class Gato{
    constructor(nome){
      this.nome = nome
    }
    exibirNome = function(){
      console.log(this.nome)
    }
  }
  const gato = new Gato("Tiffany")
  gato.exibirNome()