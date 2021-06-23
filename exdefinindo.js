//utilizando função declarativa
function escreverSexo (sexo)
{
    if (sexo=='f')
{
    return 'Feminino';
}
    if (sexo=='m')
{
    return 'Masculino';
}
    if (sexo!='f' && sexo!='m') 
{ 
    return 'Outros';
}
}
//invocar a função
console.log(escreverSexo('m'));

module.exports = escreverSexo();