const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27]
const Numeros_Pares = numeros.filter(valor => valor%2==0)
const Pares_Dobrados = Numeros_Pares.map(valor => valor*2)
const Total = Pares_Dobrados.reduce
(
    function(acumulator, valor)
    {
        return acumulator += valor
    },0
)
console.log(Numeros_Pares)
console.log(Pares_Dobrados)
console.log(Total)