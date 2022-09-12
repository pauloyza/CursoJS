let alunos = ['Paulo', 'John', 'Matheus']

alunos.push('Andreia')
alunos.unshift('Heloísa')

let memory = alunos.pop()

console.log(memory)
console.log(alunos)

// push, slice e outras funções de string também funcionarão no array

// Const pode ser usada para um array, poderemos mudar os valores internos,
// mas nao conseguiremos alterar o tipo de dado

let estudantes = ['John', 'Carlos', 'Carol']
estudantes.push('John')
estudantes = 1 // isso pode por nao ser uma constante
console.log(estudantes)

const teste = ['John', 'Carlos', 'Carol']
// teste = 1
// console.log(teste) error