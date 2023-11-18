const pessoa = {
    nome: 'paulo',
    sobrenome: 'silva',
    idade: 25,
}

const numeros = [1,2,3,4,5,6]
for (i in pessoa)
{
    console.log(i,pessoa[i])
}

for (i of numeros)
{
    console.log(i)
}

