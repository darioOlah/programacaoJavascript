// .find() - retorna o primeiro valor que cumprir a condição especificada.
let moedas = [
    { nome: 'Bitcoin', simbolo: 'BTC' },
    { nome: 'Bitcoin', simbolo: 'BTC' },
    { nome: 'Ethereum', simbolo: 'ETH' },
    { nome: 'Cardano', simbolo: 'ADA' },
];
    moedas.find(
function (moeda) {
    console.log (moeda.nome === 'Bitcoin');
}); // {nome: 'Bitcoin', simbolo: 'BTC'}