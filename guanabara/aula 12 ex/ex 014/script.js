function carregar (){
    var msg = document.getElementById('msg')
    var div = document.querySelector('div#foto')
    var img = document.createElement('img');
    var data = new Date()
    var hora = data.getHours();
    
    div.appendChild(img);
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 &&  hora < 12){
        //Bom dia
        img.src = 'imagens/manha.png';
        document.body.style.backgroundColor = '#F1F8E0'
    } else if (hora >=12 && hora < 18) {
        //Boa tarde
        img.src = 'imagens/tarde.png';
        document.body.style.backgroundColor = '#FAAC58'
    }else {
        // boa noite
        img.src = 'imagens/noite.png';
        document.body.style.backgroundColor = '#a05000'
    }
    
}

carregar();
