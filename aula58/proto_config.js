function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco*((100-percentual)/100)
}

//Literal
const p2 = {
    nome: 'Caneca',
    preco: 15
}
Object.setPrototypeOf(p2, Produto.prototype)

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 99
    },
})

const p1 = new Produto('Camiseta', 50)
p1.desconto(10)
console.log(p1.preco)