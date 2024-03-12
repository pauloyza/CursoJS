const tasks = document.querySelector('.tasks')
const form    = document.querySelector('.form')

let listaDeTarefas = []

form.addEventListener('submit', function(e){
  e.preventDefault()
  let taskAux = form.querySelector('.tarefaAdd')

  let body = document.createElement('li')
  tarefaAdd(body)
  body.innerHTML = text

  console.log(taskAux.value)
})

function tarefaAdd(taskAux){
  let tarefaAdicionada = 
}