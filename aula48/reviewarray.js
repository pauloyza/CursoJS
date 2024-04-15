const nomes = ['Paulo','Belize','Tama']
const teste1 = [...nomes]
const teste2 = [1, ...nomes]
console.log(teste1, nomes, teste2)
console.log(nomes.length)
// pop  faz o contrario do shift
// push adiciona no final
// unshift adiciona no inicio
// .slice( inicial, final não incluso) ou (0, -(quantidade que quero remover)) // outra maneira de pensar eh que o inicio ele inclui e o ultimo ele destroi
const nome = 'Paulo Andre de Almeida Silva'
const nomeSepara = nome.split(' ');
console.log(nomeSepara)
const nomeJunta = nomeSepara.join(' ')
console.log(nomeJunta)



//pop
const fakePop = [...nomes]
//fakePop.splice(-2,2) (-2, Number.MAX_VALUE)
console.log(nomes, fakePop)

//
// correções acima precisam ser feitas
//

//valor por referencia
const nomesRef = ['Paulo','Belize','Tama', 'Eduardo', 'Joana', 'Wallace', 'Rosana', 'Maria'];
const novoRef = [nomesRef];
const removido = novoRef.pop();
console.log(nomesRef);
console.log(removido);

//slices
const novosNomes = nomesRef.slice(-2,0)
console.log(novosNomes)

//splice
//nomes.splice(indicie, indicie para o delete, elem1, elem2, elem3, ...)
console.log(nomesRef)
spliceRemove = nomesRef.splice(-2,2)//nomesRef.splice(3,1,'Elisangela')
console.log(nomesRef, spliceRemove)


