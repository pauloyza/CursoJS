let nome = 'Paulo'
nome[0] = 'l'
console.log(nome) // string eh imutavel

// arrays, objetos e functions são passados por referencia

const a = [1, 2, 3]
const b = a
const c = [...a] // c eh outro vetor, e nao uma mera referencia para a
c.push(10)
console.log(a,b)
a.push(4) 
console.log(a,b)
b.pop()
console.log(a,b)
console.log(c)