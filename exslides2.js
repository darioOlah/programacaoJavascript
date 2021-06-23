function Carro(marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
};
let meuCarro = new Carro('Ford', 'Falcon');
let outroCarro = new Carro('Chevrolet', 'Corvette');

console.log(meuCarro);
console.log(outroCarro);