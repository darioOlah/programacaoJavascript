// .map() - faz um loop no array e retorna um novo array modificado.
let numeros = [2, 4, 6];
let dobro = numeros.map(function(num)
{
    return num * 2; // condição exige que multiplique por 2 cada elemento
});
console.log(dobro); // [4,8,12]


let letras = ['a', 'b', 'c', 'd', 'e'];
const letrasMaius=letras.map(el=>el.toUpperCase());
console.log(letrasMaius);

var salarios = [1050.00, 2000.00, 3500.00, 4100.00, 1540.00];
let aumento = salarios.map(function(aum)
{
return aum*1.4;
});
console.log(aumento);

var salario = [1050.00, 2000.00, 1500.00, 4100.00, 540.00];
let bonus = salario.map(function(aum)
{
    if (aum<2000)
    {
        return aum*1.4;
    }
    return aum
});
console.log(bonus);

const pessoas = [
    {nome: 'Maria', sob: 'Bonita', sal: 2000.00},
    {nome: 'João', sob: 'Lindo',sal: 4900.00},
    {nome: 'José', sob: 'Bom',sal: 1000.00},
    {nome: 'Paula', sob: 'Boa',sal: 1500.00}];

const nomeMaius=el=>el.nome.toUpperCase();
console.log(pessoas.map(nomeMaius));

// função para aumentar o salario
function salAum(el)
{
    return el.sal*1.4;
}
console.log(pessoas.map(salAum));

// retornando objeto utilizando arrow function ()
console.log(pessoas.map(el=>({
    nome: el.nome.toUpperCase(),
    sal: el.sal + 1000
})));