let cpf = '705.484.450-52'
let cpfLimpo = cpf.replace(/\D+/g, '') //retorna só os numeros do cpf (em formato string)
cpfArray = Array.from(cpfLimpo) //transforma a string em cpf em um array de string
cpfArrayNumber = cpfArray.map((val) => Number(val)) //transforma o vetor anterior num vetor de numeros
// console.log(typeof(cpfArrayNumber[0]))
// console.log(cpfArray)
// console.log(cpfArray.reduce((ac, val)=> ac + Number(val), 0))

function validaCPF(cpf)
{
    //verificar primeiro digito
    let cpfLimpo = cpf.replace(/\D+/g, '')
    let cpfArray = Array.from(cpfLimpo)
    let cpfArrayNumber = cpfArray.map((val) => Number(val))
    let verdadeiroPrimeiroDigito = cpfArrayNumber.slice(-2,-1)
    let verdadeiroSegundoDigito = cpfArrayNumber.slice(-1,Number.MAX_VALUE)
    //Pegar a soma do primeiro digito
    const primeiroDigito = cpfArrayNumber.slice(0,-2).reduce(
        function(ac, val, ind)
        {
            ac += val*(10-ind)
            // console.log(ac, val, ind)
            return ac
        },0
    )

    const validador_Primeiro_Digito = (11 - (primeiroDigito % 11))>9? 0: (11 - (primeiroDigito % 11))
    if (validador_Primeiro_Digito != verdadeiroPrimeiroDigito)
    {
        throw new TypeError('Cpf inválido, primeiro digito já entregou')
        return
    }    
    else
        console.log('primeiro digito com sucesso')
    //verificar segundo digito
    const segundoDigito = cpfArrayNumber.slice(0,-1).reduce(
        function(ac, val, ind)
        {
            ac += val*(11-ind)
            // console.log(ac, val, ind)
            return ac
        },0
    )

    const validador_Segundo_Digito = (11 - (segundoDigito % 11))>9? 0: (11 - (segundoDigito % 11))
    if (validador_Segundo_Digito != verdadeiroSegundoDigito)
    {
        throw new TypeError('Cpf inválido, segundo digito já entregou')
        return
    }    
    else
        console.log('tudo ok mano, cpf válido')
}

validaCPF(cpf)
// let teste = cpfArrayNumber.slice(-1,)
// console.log(Number.MAX_VALUE)
// console.log(cpfArrayNumber)