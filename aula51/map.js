//#map altera o valor do array, sempre terá o mesmo tamanho do array original

// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
    {nome:'Luiz', idade:62 },
    {nome:'Maria', idade:23 },
    {nome:'Eduardo', idade:55 },
    {nome:'Leticia', idade:19 },
    {nome:'Rosana', idade:32 },
    {nome:'Wallace', idade:47 }
]

const Pessoas_So_Nome = pessoas.map(valor => valor.nome)
const Pessoas_So_Idade = pessoas.map(valor => valor.idade)
const Pessoas_Add_Id = pessoas.map(
    function(valor,indice){
        valor.id = indice
        //Repare que isso alterará o array original, se não quero isso: New_Valor = {...valor}
        return valor
    }
)

console.log(Pessoas_So_Nome)
console.log(Pessoas_So_Idade)
console.log(Pessoas_Add_Id)