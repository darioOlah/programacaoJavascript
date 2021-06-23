let codigo = "77420-KSS-C00";
let localizacao = [...codigo];
let local = (localizacao[0]+localizacao[1]+localizacao[2]+localizacao[3]+localizacao[4])
    if (local === 77420) { console.log("Prateleira 02") }
    if (local === 77421) { return "Prateleira 03" }
        else { "Código Incorreto"}

console.log(localizacao);
console.log(local);