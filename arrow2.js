let bemVindo = () => console.log('Olá Mundo!');
bemVindo();

let dobro = numero => console.log(numero * 2);
dobro(6);

let soma = (a, b) => console.log(a + b);
soma(3,5);

let horaAtual = () => {
let data = new Date();
return data.getHours() + ':' +
data.getMinutes();
}
console.log(horaAtual);




