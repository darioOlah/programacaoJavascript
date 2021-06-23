let tenista = {
    nome: 'Mariana',
    idade: 34,
    saudacao: function() {
    return 'Olá, me chamo Mariana';
    }
};
    console.log(tenista.saudacao()); // Olá, me chamo Roger

let programador = {
    nome: 'Dário',
    sobrenome: 'Olah',
    saudacao: function() { return 'Olá, me chamo ' + this.nome; }
};
    console.log(programador.saudacao()); // Olá, me chamo Roger