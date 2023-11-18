// Capturar evento de submit do formulário
// const form = document.querySelector('.container h1');
// const p = document.createElement('h1');
// form.innerHTML = "testando"
// p.innerHTML = "testando"
// form.appendChild(p)

const elementos = 
[
  {tag: 'p', texto: 'Frase 1'},
  {tag: 'div', texto: 'Frase 2'},
  {tag: 'footer', texto: 'Frase 3'},
  {tag: 'section', texto: 'Frase 4'},
]
const meow = document.querySelector('.container')
for (i of elementos){
  let type = i.tag;
  let text = i.texto;

  let body = document.createElement(type)
  body.innerHTML = text

  meow.appendChild(body)
}