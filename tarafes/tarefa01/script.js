function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var recado = window.document.getElementById('recado')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segu = data.getSeconds()
    
    msg.innerHTML = `Que horas são: ${hora}:${minuto}:${segu}`
    if(hora >= 0 && hora < 6){
        img.src = 'imagens/madrugadaa.png'
        document.body.style.background = '#D2ADD7'
        recado.innerHTML += `Tenha uma boa madrugada.`
        //MADRUGADA
    }else if(hora > 6 && hora < 12){
        //BOM DIA
        img.src = 'imagens/manhaa.png'
        document.body.style.background = '#91EE93'
        recado.innerHTML += `Tenha um bom dia.`
    }else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'imagens/tardee.png'
        document.body.style.background = '#F5967B' 
        recado.innerHTML += `Tenha uma boa tarde.` 
    } else {
        //BOA NOITE
        img.src = 'imagens/noitee.png'
        document.body.style.background = '#445F70'
        recado.innerHTML += `Tenha uma boa noite.`
    }

    semana.innerHTML = `Hoje é ${dia}`

    

    //madrugada é da 0h ás 6
}


//#D2ADD7
//#B4ADD7
