function criaPessoa (nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade,

        fala(){
            console.log('olá mundo')
        }
    };
}

pessoa1 = criaPessoa('Paulo', 'Silva', 12); // função factory
console.log(pessoa1.idade);
pessoa1.fala();