let umaString = "Um \"texto\""
console.log(umaString)
// Contra barra força o próximo caracter a ser plotado

let duasString = "Um \\texto\\"
console.log(duasString)
// Contra barra força o próximo caracter a ser plotado, inclusive outro contra barra

// Irei aqui elencar os principais methodos de string
let stringAnalise = "O rato roeu a roupa do rei de roma"
let ex01 = stringAnalise[3]
let ex02 = stringAnalise[-1]
let ex03 = stringAnalise[-3]
//console.log()
let ex04 = stringAnalise.charAt(3)
let ex05 = stringAnalise.concat(' ','na Italia')
//console.log()
let ex06 = stringAnalise.indexOf('r')
let ex07 = stringAnalise.indexOf('r',3)
let ex08 = stringAnalise.lastIndexOf('r')
//console.log()

/**
 * 
 * 
 * Expressoes regulares com methodos do string
 * 
 * 
 */

//console.log(stringAnalise.match(/[a-z]/g))
//console.log(stringAnalise.match(/[A-Z]/g))
//
//console.log(stringAnalise.search(/[A-Z]/g))
//
//console.log(stringAnalise.replace(/r/,'#'))
//console.log(stringAnalise.replace(/r/g,'#'))

/**
 * 
 * 
 *      LENGTH
 * 
 * 
 */
//console.log(stringAnalise.length)

/**
 * 
 * 
 *      SLICE
 * 
 * 
 */
//console.log(stringAnalise.slice(2,6))
//console.log(stringAnalise.slice(-5))

/**
 * 
 * 
 *      SPLIT
 * 
 * 
 */

//console.log(stringAnalise.split(' '))
//console.log(stringAnalise.split(' ',3))

//OUTRAS
console.log(stringAnalise.toLocaleUpperCase())
console.log(stringAnalise.toLocaleLowerCase())