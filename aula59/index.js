//produto -> aumento, desconto
//camiseta => cor, caneca = material
function Produto(nome,preco)
{
    this.nome = nome
    this.preco = preco
}
Produto.prototype.aumento = function(quantia)
{
    this.preco += quantia
}

function Camiseta(nome,preco,cor)
{
    Produto.call(this,nome,preco)
    this.cor = cor
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

Camiseta.prototype.aumento = function(percentual)
{
    this.preco *= 1+(percentual/100)
}

// Caso o codigo acima seja comentado, 
// então o aumento que será utilizado será o do produto que é o pai dele, 
// isso exemplifica como herança e classe é utilizado por baixo dos panos
const camisa_1 = new Camiseta('regata',10,'branca')
console.log(camisa_1)
camisa_1.aumento(10)
console.log(camisa_1)
