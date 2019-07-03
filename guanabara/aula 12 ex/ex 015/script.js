function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var radioMasc = document.querySelector('input#masc')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img');
        if(radioMasc.checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                //Criança
                img.src = 'img/bebe-m.jpg'
            }else if (idade <18) {
                //Jovem
                img.src = 'img/jovem-m.jpg'
            }else if (idade <50) {
                //Adulto
                img.src = 'img/adulto.jpg'
            }else {
                //Idoso
                img.src = 'img/idoso.jpg'
            }
        }else {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                //Criança
                img.src = 'img/bebe-f.jpg'
            }else if (idade <18) {
                //Jovem
                img.src = 'img/jovem-f.jpg'
            }else if (idade <50) {
                //Adulto
                img.src = 'img/adulta.jpg'
            }else {
                //Idoso
                img.src = 'img/idosa.jpg'
            }
        }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.<br>`
    res.appendChild(img)
}