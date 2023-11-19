function soma(x,y)
{
    if
    (
        typeof x !== 'number' ||
        typeof y !== 'number'
    ){
        throw new Error('x ou y nao sao numeros')
    }
    return x+y
}

try{
console.log(soma(2,'a'))
} catch(error){
    // console.log(error)
    console.log('malguma coisa bem mais amigável do que isso')
}

function retornaHora(data)
{
    if (data && !(data instanceof Date))
    {
        throw new TypeError("Esperando instance de Date")
    }

    if (!data)
    {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',   
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    })
}

try{
    const data = new Date()
    const hora = retornaHora(2)
    console.log(hora)
}catch(e){
    console.log('Deu erro')
}finally{
    console.log('tenha um bom dia')
}