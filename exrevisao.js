    console.log('------------------------------------------------------------------------------------- EXERCÍCIO 1')
const pontos = [12,34,56,34,5,8,76,4,1,90];

for (let i=0; i<pontos.length; i++) 
{
    console.log(pontos[i]);
}
    console.log('------------------------------------------------------------------------------------- EXERCÍCIO 2')
const outros = ['A','B','C','D','E','F','G'];
for (let i=0; i<outros.length; i++) 
{
    console.log(outros[i]);
}
for (let i=0; i<outros.length; i++) 
{   
    outros[i]+=i;
    console.log(outros[i]);
}
console.log('------------------------------------------------------------------------------------- EXERCÍCIO 3')

let nome = ['Luciana','Stefany','Mario','Pedro','Silvia','Christopher','Dário'];
    console.log(nome);
function mostrar (i) {
    console.log(nome[i]);
}
function alterar (i) {
    nome[i] = 'Aluno(a) ' + nome[i];
}
for (let i=0; i<nome.length; i++) 
{   
    alterar(i);
    mostrar(i);
}
console.log('------------------------------------------------------------------------------------- EXERCÍCIO 4')
const ale = ['A58','25B','C44','D955','E68','F54','G6'];
for (let i=0; i<ale.length; i++) 
{
    console.log(ale[i]);
}
for (let i=0; i<ale.length; i++) 
{   
    ale[i]+=i;
    console.log(ale[i]);
}