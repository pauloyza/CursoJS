// curto circuito 

let corUsuario = null
const corFinal = corUsuario || "preto"
console.log(corFinal)

corUsuario = "vermelho"
console.log(corFinal)

console.log(1 && 0 && false)

// Pegadinha
let a = 0
let b = ''
let c = 'false'
let d = false
let e = NaN

console.log(a || b || c || d || e) // 'false' pois eh um true
