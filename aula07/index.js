/**
 * Não podemos criar constantes com palavras reservadas
 * constantes precisam ter nomes significativos
 * Não pode começar o nome de uma constante com um número
 * Não podem conter espaços ou traços
 * Utilizamos camelCase
 * Case-sensitive
 * Não podemos redeclarar constantes com let
 * NÃO UTILIZE VAR, UTILIZE LET.
 */

const primeiroNumero = 5
const segundoNumero = 10
const resultado = primeiroNumero + segundoNumero
const resultadoDuplicado = resultado * 2

console.log(typeof resultado)
console.log(typeof('5'+segundoNumero))

