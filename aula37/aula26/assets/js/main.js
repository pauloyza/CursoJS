// Capturar evento de submit do formulário

const clock = document.querySelector('.clock')
const clockJunior = document.querySelector('.clockJunior')
const begin = document.querySelector('.begin')
const stop = document.querySelector('.stop')
const zero = document.querySelector('.zero')

let clockAux = new Date('2001-01-01 00:00:00')
let clockResset = new Date(clockAux)//clockAux
function getClockNow(clockAux)
{
  let clockNow = clockAux.toLocaleTimeString('pt-BR',{
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'

  })

  return clockNow
}

// console.log(clockNow)
console.log(clock.innerHTML)
console.log(clockJunior.innerHTML)

let cronometro
begin.addEventListener('click', function(e)
{
  clock.style.color = 'black'
  clockJunior.style.color = 'black'

  cronometro = setInterval(
    function()
    {
      // console.log(clockNow)
      clock.innerHTML = getClockNow(clockAux)
      clockAux.setMilliseconds(clockAux.getMilliseconds() + 100)
    },
    100
  )
})
stop.addEventListener('click', function(e)
{
  clock.style.color = 'red'
  setTimeout(function(){
    clearInterval(cronometro)
  }, 0);
})
zero.addEventListener('click', function(e)
{
  clock.style.color = 'black'
  clockAux = new Date(clockResset)
  console.log(clockAux)
  clock.innerHTML = getClockNow(clockAux)
  setTimeout(function(){
    clearInterval(cronometro)
  }, 0);

})




