function contar() {
    var inicio = document.querySelector('#inicio')
    var fim = document.querySelector('#fim')
    var passo = document.querySelector('#passo')
    var res = document.querySelector('#res')
    if (inicio.value.length == 0 || fim.value.length == 0){
        res.innerHTML = ' <br> Erro, verifique os dados '
    }else {
        res.innerHTML = 'Contando <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0){
            alert('Erro passo igual a 0, definindo passo igual a 1')
            p = 1;
        }
        if (i < f){
            //Contagem crescente
            for (var j = i;j<=f;j+=p){
                res.innerHTML += ` ${j} \u{1f449} `
            }   
        }
        if ( i > f){
            //Contagem regressiva
            for (var j = i;j>=f;j-=p){
                res.innerHTML += ` ${j} \u{1f449}`
            }   
        }
        res.innerHTML += `\u{1f3c1}` 
    }
}