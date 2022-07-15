function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('nasc')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO]')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            if( idade >=0 && idade <= 4) {
                img.setAttribute('src', 'imagens/bartbb.png')
                res.innerHTML = `Detectamos um bebê com ${idade} anos.`
                //bebe
            }else if(idade < 10){
                img.setAttribute('src', 'imagens/bart.png')
                res.innerHTML = `Detectamos uma criança com ${idade} anos.`
                //criança
            }else if(idade < 17 ){
                img.setAttribute('src', 'imagens/nelson.png')
                res.innerHTML = `Detectamos um adolescente com ${idade} anos.`
                //adolecente
            }else if(idade < 59){
                img.setAttribute('src', 'imagens/homer-ad.png')
                res.innerHTML = `Detectamos um adulto com ${idade} anos.`
                //adulto
            }else{
                img.setAttribute('src', 'imagens/velho.png')
                res.innerHTML = `Detectamos um senhor com ${idade} anos.`
                //idoso
            }
                
        }else if(fsex[1].checked){
            if( idade >=0 && idade <= 4) {
                img.setAttribute('src', 'imagens/maggibb.png')
                res.innerHTML = `Detectamos uma bebê com ${idade} anos.`
                //bebe
            }else if(idade < 10){
                img.setAttribute('src', 'imagens/lisa.png')
                res.innerHTML = `Detectamos uma criança com ${idade} anos.`
                //criança
            }else if(idade < 17 ){
                img.setAttribute('src', 'imagens/adole.png')
                res.innerHTML = `Detectamos uma adolescente com ${idade} anos.`
                //adolecente
            }else if(idade < 59){
                img.setAttribute('src', 'imagens/marge-ad.png')
                res.innerHTML = `Detectamos uma adulta com ${idade} anos.`
                //adulta
            }else{
                img.setAttribute('src', 'imagens/velha.png')
                res.innerHTML = `Detectamos uma senhora com ${idade} anos.`
                //idosa
            }
        }
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}