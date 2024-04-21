/**
 * Object.values
 * Object.entries
 * Object.assign(des,any)
 * Object.getOwnPropertyDescriptor(o,'prop')
 * ... (spread)
 * 
 * //ja vimos
 * Object.keys (Retorna as chaves)
 * Object.freeze (congela o objeto)
 * Object.definyProperties (define varias propriedades)
 * Object.definyProperty (define uma propriedade)
 */

const produto = {nome: 'Produto', preco:1.8}
Object.defineProperty(produto,'nome', {
    writable: false,
    configurable: false,
    value: 'qualquer outra coisa'
})
const caneca = Object.assign({},produto,{material:'porcelana'})
const str = 'paulo'
caneca.nome = 'Outro nome'
caneca.preco = 2.5

// console.log(produto)
// console.log(caneca)
// console.log(Object.keys(str))

console.log(Object.getOwnPropertyDescriptor(produto,'nome'))