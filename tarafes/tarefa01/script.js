function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var recado = window.document.getElementById('recado')

    const tempo = setInterval(() =>{
        let datahoje = new Date();
        let horas = datahoje.getHours();
        let minutos = datahoje.getMinutes();
        let segundos = datahoje.getSeconds();
        //msg.innerHTML = `Que horas são: ${horas}:${minutos}:${segundos}`
    
        if(horas < 10) horas = '0' + horas;
        if(minutos < 10) minutos = '0' + minutos;
        if(segundos < 10) segundos = '0' + segundos;

        document.getElementById('horas').innerHTML = horas
        document.getElementById('minutos').innerHTML = minutos
        document.getElementById('segundos').innerHTML = segundos
    })

    
    
    if(horas >= 0 && horas < 6){
        img.src = 'imagens/madrugadaa.png'
        document.body.style.background = '#D2ADD7'
        recado.innerHTML += `Tenha uma boa madrugada.`
        //MADRUGADA
    }else if(horas > 6 && horas < 12){
        //BOM DIA
        img.src = 'imagens/manhaa.png'
        document.body.style.background = '#91EE93'
        recado.innerHTML += `Tenha um bom dia.`
    }else if (horas >= 12 && horas <= 18) {
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
}

