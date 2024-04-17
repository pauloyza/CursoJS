// filter, map, reduce
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]

function maioresQueDez(valor,indice,array){
    return valor>10;
}
let numerosModify = numeros.filter(maioresQueDez)
console.log(numerosModify)

//Agora com arrow
numerosModify = numeros.filter((valor) => valor>10)
console.log(numerosModify)

//retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas ocm mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    {nome:'Luiz', idade:62 },
    {nome:'Maria', idade:23 },
    {nome:'Eduardo', idade:55 },
    {nome:'Leticia', idade:19 },
    {nome:'Rosana', idade:32 },
    {nome:'Wallace', idade:47 }
]

const Pessoas_Mais_5_Letras = pessoas.filter((valor) => valor.nome.length>5)
const Pessoas_Mais_50 = pessoas.filter((valor) => valor.idade > 50)
const Pessoas_Nome_End_A = pessoas.filter((valor) => valor.nome.slice(valor.nome.length-1, valor.nome.length) == 'a') // endsWith()

let teste = {nome: 'luiz', idade:62}
let arraycomum = [1,2,3,4,5,6,7,8]
//console.log(arraycomum.slice(arraycomum.length-1,arraycomum.length), arraycomum)
//console.log(Pessoas_Mais_5_Letras)
//console.log(Pessoas_Mais_50)
console.log(Pessoas_Nome_End_A)
