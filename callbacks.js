function nomeCompleto(nome, sobrenome) {
    return nome + ' ' + sobrenome;
        };
        function bomDia(nome, sobrenome, callback) {
            return 'Olá, ' + callback(nome, sobrenome);
        };
    console.log(nomeCompleto('Dário','Olah'));


function iniciais(nome, sobrenome) {
    return nome[0] + sobrenome[0];
            };
            function bomDia(nome, sobrenome, callback) {
                return 'Olá, ' + callback(nome, sobrenome);
            };
    console.log(iniciais ('Dário','Olah'));


const somar = (numA, numB) => numA + numB;

const calculadora = (numA, numB, operacao) => operacao(numA, numB);

console.log(calculadora(10,20,somar));

// pode criar funcao dentro do resultado=> console.log(calculadora(10,20,(numA, numB) => numA - numB));
