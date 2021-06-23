function darOi() {
    console.log("Olá, tudo bem?");
}

darOi()

let somar = function(numA, numB){
    console.log(numA + numB);
    return numA + numB;
}

somar(5,5);

// let resultado = somar(4,5);
console.log(somar(1,2));
//escopo
let resultado = 2;
console.log("resultado fora da função =" , resultado);

    function multiplicar(numA, numB){
    let resultado = numA * numB;

    console.log("resultado dentro da função =" , resultado);
}

multiplicar(3,2);