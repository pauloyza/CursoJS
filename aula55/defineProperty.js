function Produto(nome, preco, estoque)
{
    Object.defineProperty(this, 'estoque',{
        enumerable: true, // mostra a chave
        value: estoque, // valor
        writable: true, // pode alterar
        configurable: true //configuravel
    })

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: estoque,
            writable: true,
            configurable: true
        },
        preco: {
            enumerable: true,
            value: estoque,
            writable: true,
            configurable: true
        },
    })
}

const p1 = new Produto('Camiseta', 20, 3)
console.log(Object.keys(p1))

for(let chave in p1)
{
    console.log(chave)
}