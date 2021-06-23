//função declarativa
function soma(a,b)
{
    return a+b;

}
console.log(soma(1,3));

//expressão de função / função anônima

let somar = function (c,d)
{
    return c+d;
}
console.log(somar(6,3));

//arrow function

let somando = (e,f) => e+f;
console.log (somando(5,9));

let mostrarNumero = g => console.log(g);
mostrarNumero(1900);

let darBomDia = () => console.log('Bom dia'); // Pode usar () ou _
darBomDia();

let darBoaNoite = _ => console.log('Boa noite'); // Pode usar () ou _
darBoaNoite();