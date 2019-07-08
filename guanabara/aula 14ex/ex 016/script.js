var inicio = document.querySelector('#inicio')
var fim = document.querySelector('#fim')
var passo = document.querySelector('#passo')
var res = document.querySelector('#res')


function contar(){
    if (inicio.value.length ==0 || fim.value.length ==0 || passo.value.length ==0){
        res.innerHTML="Impossível contar!"  
        //alert('[ERRO] dados incompletos')       
    }else {
        res.innerHTML = 'Contando: <br>'
        var inicioValue = Number(inicio.value)
        var fimValue = Number(fim.value)
        var passoValue = Number(passo.value)
        if (passoValue <= 0){
            alert('Passo invalido! Considerando PASSO 1')
            passoValue = 1
        }
        if (inicioValue < fimValue){
            //Contagem crescente
            for (var c = inicioValue;c <=fimValue; c+=passoValue){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }else {
            //Contagem regressiva
            for (var c = inicioValue;c >=fimValue;c-=passoValue){
                res.innerHTML += ` ${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
        
}