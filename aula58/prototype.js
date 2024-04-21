function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
    this.nomeCompleto = () => 'ORIGINAL: ' + this.nome + ' ' + this.sobrenome
}

// Pessoa.prototype === pessoa1.__proto__
Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome
}

const pessoa1 = new Pessoa('Luiz','O.')
console.dir(pessoa1)