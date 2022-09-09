let varA = 'A';//B
let varB = 'B';//C
let varC = 'C';//A
/*
let memory = varA
varA = varB
varB = varC
varC = memory
*/

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)