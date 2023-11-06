function getDayWeek(data){
    let nameDay;
    switch (data){
        case 0: return nameDay = 'Domingo'
        case 1: return nameDay = 'Segunda'
        case 2: return nameDay = 'Terça'
        case 3: return nameDay = 'Quarta'
        case 4: return nameDay = 'Quinta'
        case 5: return nameDay = 'Sexta'
        case 6: return nameDay = 'Sábado'
        
    }
}

const data = new Date('2020-04-19 12:13:14')
const diaSemana = data.getDay()
const nomeSemana = getDayWeek(diaSemana)
console.log(diaSemana, nomeSemana)