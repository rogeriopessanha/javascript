function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
   
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        //BOM DIA
        img.src = 'imagens/manhaa.png'
        document.body.style.background = '#E6E2C3'
    }else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'imagens/tardee.png'
        document.body.style.background = '#F5967B'  
    } else {
        //BOA NOITE
        img.src = 'imagens/noitee.png'
        document.body.style.background = '#445F70'
    }
}
