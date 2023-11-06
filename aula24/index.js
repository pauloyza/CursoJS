// const tresHoras = 60 * 60 * 3 * 1000 // passando 3 horas para mili segundos
// const umDia = 60 * 60 * 24 * 1000
// const data = new Date(0 + tresHoras);
// console.log(new Date(data.set(48)));
let data = new Date(2019, 3, 20, 15, 14, 27, 500)
// data = new Date(2019, 3, 20, 30) // a, m, d, h, M, s, ms
data = new Date('2019-03-20T20:20:20.1000') // data string
console.log('Dia', data.getDate())
console.log('Mes', data.getMonth()) // Mês começa do zero
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('Dia semana', data.getDay()) // 0 - Domingo, 6 - Sabado
console.log(data.toString());
console.log(Date.now()) // Formato em milisegundos de toda a data atual, pode ser utilizada para salvar horas
