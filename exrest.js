function somar(...numeros) {
    // Os números agora são um array
    // O método reduce obtém a somatória
    return numeros.reduce((acumulador, num) => acumulador += num);
    }
    console.log(somar(1, 4)); // Devolve 5
    console.log(somar(13, 6, 8, 12, 23, 37)); // Devolve 99

    