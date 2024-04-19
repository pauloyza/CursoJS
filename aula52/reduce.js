const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]

const total = numeros.reduce(function(acumulador, valor, indice, array){
    if( valor%2 === 0 ) acumulador.push(valor)
    return acumulador
}, [])
console.log(total)

const pessoas = [
    {nome:'Luiz', idade:62 },
    {nome:'Maria', idade:23 },
    {nome:'Eduardo', idade:55 },
    {nome:'Leticia', idade:19 },
    {nome:'Rosana', idade:32 },
    {nome:'Wallace', idade:47 },
    {nome:'Wallace2', idade:94 }
    
]
//Retorne a pessoa mais velha com reduce
const Pessoa_Mais_Velha = pessoas.reduce(
    (acumulador,obj) =>
        //acumulador = obj.idade>acumulador.idade? obj:acumulador
        obj.idade>acumulador.idade? obj:acumulador
        //return acumulador
     //{nome:'', idade:0}
)
const Pessoa_Mais_Velha_Melhorada = pessoas.reduce((acumulador,obj) => obj.idade>acumulador.idade? obj:acumulador)
console.log(Pessoa_Mais_Velha)
console.log(Pessoa_Mais_Velha_Melhorada)