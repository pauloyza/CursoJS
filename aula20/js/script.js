function main() {
    const form = document.querySelector('.form');
    const resultados = document.querySelector('.resultados');

    const pessoas = []

    function criadorPessoa(nome, sobrenome, peso, altura){
        return{
            nome,
            sobrenome,
            peso,
            altura
        }
    }

    function recebeEventoForm(event){
        event.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        console.log(pessoas.length)
        pessoas.push(criadorPessoa(nome.value, sobrenome.value, peso.value, altura.value))
        console.log(pessoas)
        
        resultados.innerHTML += `<p>${nome.value} ${sobrenome.value} tem ${altura.value}.m e pesa ${peso.value}</p>` 
    }
    form.addEventListener('submit', recebeEventoForm);
}

main()