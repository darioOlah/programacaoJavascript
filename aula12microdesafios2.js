// .filter() - faz um loop e filtra os elementos conforme o parâmetro, retorna os valores solicitados. 
let nomes = ['Maria', 'Mariana', 'Marivaldo', 'Dário', 'Maria', 'Leonardo', 'Maria'];
let consulta = nomes.filter(function(nomes)
{
    return nomes == 'Maria'; // informa a condição de exibir apenas o elemento Maria
});
console.log(consulta);