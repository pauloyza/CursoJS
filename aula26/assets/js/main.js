// Capturar evento de submit do formulário
//const form = document.querySelector('#formulario');

// form.addEventListener('submit', function (e) {
//   e.preventDefault();
//   const inputPeso = e.target.querySelector('#peso');
//   const inputAltura = e.target.querySelector('#altura');

//   const peso = Number(inputPeso.value);
//   const altura = Number(inputAltura.value);

//   if (!peso) {
//     setResultado('Peso inválido', false);
//     return;
//   }

//   if (!altura) {
//     setResultado('Altura inválida', false);
//     return;
//   }

//   const imc = getImc(peso, altura);
//   const nivelImc = getNivelImc(imc);

//   const msg = `Seu IMC é ${imc} (${nivelImc}).`;

//   setResultado(msg, true);
// });

setResultado()


function criaH () {
  const h = document.createElement('h1');
  return h;
}

function setResultado () {
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';

  const h = criaH();

  // if (isValid) {
  //   p.classList.add('paragrafo-resultado');
  // } else {
  //   p.classList.add('bad');
  // }
  const data = new Date()
  // h.innerHTML = data;

  const diaSemana  = getWeekName(data)
  const diaMesAno  = getDayName(data)
  const hora       = getHour(data)

  const msg = `${diaSemana}, ${diaMesAno} ${hora} `
  h.innerHTML = msg;

  resultado.appendChild(h);
}

function getWeekName(data){
  const dayWeek = data.getDay()
  console.log(getDayWeek(dayWeek))
  return getDayWeek(dayWeek)

}

function getDayName(data){
  const day   = data.getDate()
  const month = data.getMonth()
  const year  = data.getFullYear()
  const msg   = `${day} de ${getMonthName(month)} de ${year}`
  console.log(msg)
  return msg
}

function getHour(data){
  const hour  = zeroAEsquerda(data.getHours());
  const minute= zeroAEsquerda(data.getMinutes());
  const hour_default = `${hour}:${minute}`
  console.log(hour_default)
  return hour_default
}

function getDayWeek(data){
  let nameDay;
  switch (data){
      case 0: return nameDay = 'Domingo'
      case 1: return nameDay = 'Segunda-feira'
      case 2: return nameDay = 'Terça-feira'
      case 3: return nameDay = 'Quarta-feira'
      case 4: return nameDay = 'Quinta-feira'
      case 5: return nameDay = 'Sexta'
      case 6: return nameDay = 'Sábado'
      default: return ''
  }
}

function getMonthName(month){
  switch (month){
    case 0: return 'Janeiro';
    case 1: return 'Fevereiro';
    case 2: return 'Março';
    case 3: return 'Abril';
    case 4: return 'Maio';
    case 5: return 'Junho';
    case 6: return 'Julho';
    case 7: return 'Agosto';
    case 8: return 'Setembro';
    case 9: return 'Outubro';
    case 10: return 'Novembro';
    case 11: return 'Dezembro';
  }
}

function zeroAEsquerda (num) {
  return num<10 ? `0${num}`:num
}
// Criar as funçoes get que estao ali em cima, e terminar de criar a string msg, fazer alguns testes
