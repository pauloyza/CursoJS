function main() {
    const form = document.querySelector('.form');
    const resultados = document.querySelector('.resultados');

    function recebeEventoForm(event){
        event.preventDefault()

        const peso =  form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        const imc = peso.value / (altura.value ** 2)
        
        let ap = 0
        let msg = ''
        if      (peso.value    === '')          {msg = 'Campo peso está vazio'}
        else if (altura.value  === '')          {msg = 'Campo altura está vazio'}
        else if (Number.isNaN(peso.value/2))    {msg = 'O peso precisa ser um número'}
        else if (Number.isNaN(altura.value/2))  {msg = 'A altura precisa ser um número'}
        else 
            if (imc < 18.5)                 {msg =`Seu imc ${imc.toFixed(2)} está abaixo do peso normal`; ap = 1;}
            else if (imc >= 18.5 && imc<25) {msg =`Seu imc ${imc.toFixed(2)} está normal`; ap = 1;}
            else if (imc >= 25 && imc<30)   {msg =`Seu imc ${imc.toFixed(2)} está no sobrepeso`; ap = 1;}
            else if (imc >= 30 && imc<35)   {msg =`Seu imc ${imc.toFixed(2)} está na obesidade 1`; ap = 1;}
            else if (imc >= 35 && imc<40)   {msg =`Seu imc ${imc.toFixed(2)} está na obesidade 2`; ap = 1;}
            else if (imc >=40)              {msg =`Seu imc ${imc.toFixed(2)} está na obesidade 3`; ap = 1;}
        
        console.log(peso.value,altura.value,imc, ap, msg)
        console.log(peso==='')
        
        // resultados.innerHTML += 'oi'
        if      (ap === 0) {resultados.innerHTML = `<p background-color="red">${msg}</p>`}
        else    {resultados.innerHTML = `<p background-color="green">${msg}</p>`}
    }    
    form.addEventListener('submit', recebeEventoForm);
    
}
main()