//Assinatura de função simples
function saudacao(nome){
    console.log(`bom dia ${nome}`)
    return 123456
}

let a = saudacao('Luiz')
console.log(a)

//Assinatura de função anonima
const raizAnonima = function (n){
    return n ** 0.5
};


//arrow function para funções complexas
const raizArrow = (n) =>{
    return n ** 0.5
};

//arrow function para funções simples
const raiz = n => n ** 0.5

//arrow function para funções complexas



console.log(raiz(9))