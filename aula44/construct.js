// Construtora -> Pessoa (new)
// Nao precisa de return
function Pessoa(nome, sobrenome)
{
    //private
    const ID = 1234
    const metodoInterno = () => {}

    //public
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = () =>
    {
        console.log(this.nome + ': sou um metodo')
    }
}