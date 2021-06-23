//utilizando função declarativa
module.exports = function escreverSexo (sexo)
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