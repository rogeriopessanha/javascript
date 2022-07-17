function clicar (){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passos')
    var resul = document.getElementById('resul')

    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        //window.alert('[ERRO] Está faltando dados.')
        resul.innerHTML = 'Impossivel contar, está faltando dados.'

    }else{
      resul.innerHTML = ('Contando: <br> ')
      var i = Number(inicio.value)
      var f = Number(fim.value)
      var p = Number(passos.value)
      if (p <= 0){
        window.alert('Passo invalido. Considerando passo 1')
        p = 1
      }

      if(i < f){
        //contagem crescente
        for(var c = i; c <= f; c += p){
            resul.innerHTML += `${c} \u{1F449}`
        }
      }else{
        //contagem regressiva
        for (var c = i; c >= f; c -= p){
            resul.innerHTML += ` ${c} \u{1F449}`
        }
      }
      resul.innerHTML += `\u{1F3C1}`
    }
}