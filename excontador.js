//closures = fechamento

function pai() {
    let x=1; //escopo local
    function filho(){
        console.log(x); //escopo global
        x++;
    }
    return filho;
}
let contador=pai();

contador();
contador();
contador();
contador();
contador();