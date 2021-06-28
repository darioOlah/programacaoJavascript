let pratoPronto = (padrao, tempo) =>{
    if (isNaN(tempo) || tempo ===null || tempo ==='') { 
        tempo = padrao; 
        console.log('Digite um tempo válido');
    }
    if (tempo < padrao){
        return 'Tempo insuficiente!';
    }
    else if(tempo >=padrao && tempo <=(2*padrao)){
        return 'Prato pronto, bom apetite!!!'
    }
    else if (tempo > (2*padrao) && tempo <= (3*padrao)){
        return 'Sua comida queimou';
    } 
    else if (tempo >(3*padrao)){
        return 'KABUMMM!!!'
    }
}

let microondas = (prato, tempo) =>{
    console.log('Você escolheu: ' + prato );
    switch(prato.toLowerCase()){
        case 'pipoca':
            return pratoPronto(10, tempo);
        case 'macarrão': case 'brigadeiro':
            return pratoPronto(8, tempo);
        case 'carne':
            return pratoPronto(15,tempo);
        case 'feijão':
            return pratoPronto(12, tempo);
        default:
            return 'Prato inexistente.'
    }
}


console.log(microondas('carne', 18));