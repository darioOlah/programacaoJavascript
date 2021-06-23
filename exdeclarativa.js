//função declarativa
//Math biblioteca de comenado matemáticos
//sqrt = square - sq (quadrado) root -rt (raiz)
//objetivo da minha função: elevar o número ao cubo e extrair raiz quadrada - EM PARTES
function calcular (numero) {
    let resultado=Math.pow(numero, 3);
    resultado=Math.sqrt(resultado);
    return resultado;
 }

    //invocar a função
console.log(calcular(100));

//objetivo da minha função: elevar o número ao cubo e extrair raiz quadrada - DIRETO

function calcular (numero) {
    return Math.sqrt(Math.pow(numero, 3));
    }
    //invocar a função
console.log(calcular(10));
