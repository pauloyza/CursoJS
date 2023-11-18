const array = [1,2,3]
const [a,b] = array
console.log(a,b)

const pessoa = {
    nome: 'Paulo',
    sobrenome: 'Andre',
    idade: 25,
    endereco: {
        rua: 'av brasil',
        numero: '320'
    }
    
}

const {sobrenome: last_name,nome = '', ...rest} = pessoa
console.log(nome,last_name,rest)