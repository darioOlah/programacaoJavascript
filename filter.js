// .filter() - faz um loop e filtra os elementos conforme o parâmetro, retorna os valores solicitados. 
let idades = [22, 8, 17, 14, 30];
let maiores = idades.filter(function(idade)
{
    return idade > 18; // informa a condição de exibir apenas as idades maiores que 18 anos
});
console.log(maiores); // [22, 30]