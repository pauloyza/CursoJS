let a = new Date()
let b = new Date(a)

console.log(a)
console.log(b)

a.setDate(a.getDate() + 1)

console.log(a)
console.log(b)