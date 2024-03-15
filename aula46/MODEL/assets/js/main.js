function Calculadora() {
  
  display = document.querySelector('.display')

    this.inicia = () => {
      cliqueBotoes();
      pressionaBackSpace();
      pressionaEnter();
    }

    const pressionaBackSpace= () => {
      display.addEventListener('keydown', e => {
        if (e.keyCode === 8) {
          e.preventDefault();
          clearDisplay();
        }
      });
    }

    const pressionaEnter = () => {
      display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          realizaConta();
        }
      });
    }

    const realizaConta = () => {
      let conta = display.value;
      
      try {
        conta = eval(conta);
        
        if(!conta) {
          alert('Conta inválida');
          return;
        }
        console.log(conta)
        display.value = String(conta);
      } catch(e) {
        alert('Conta inválida');
        return;
      }
    }

    const clearDisplay = () => {
      display.value = '';
    }

    const apagaUm = () => {
      display.value = display.value.slice(0, -1);
    }


    const cliqueBotoes = () => {
      document.addEventListener('click', e => {
        const el = e.target;

        if(el.classList.contains('btn-num')) {
          btnParaDisplay(el.innerText);
        }

        if(el.classList.contains('btn-clear')) {
          clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          apagaUm();
        }

        if(el.classList.contains('btn-eq')) {
          realizaConta();
        }

        display.focus();
      });
    }

    const btnParaDisplay = function(valor) {
      display.value += valor;
    }

  
}

const calculadora = new Calculadora();
calculadora.inicia();
