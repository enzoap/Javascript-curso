function tabuada (){
    var inputElement = document.querySelector('#num')
    var selectElement = document.querySelector('#tab')
    
    var eraseOption = document.querySelector('#clear')
    //eraseOption.textContent = ''
    //optionElement.innerHTML = 'teste'
    //selectElement.appendChild(optionElement)
    if (inputElement.value.length == 0){
        alert('Digite um número')
    }else {
        var num = inputElement.value
        selectElement.innerHTML = ''
        for (var c = 0;c<=10;c++){
            var res =` ${num} * ${c} = ${(num * c)}`
            var optionElement = document.createElement('option')
            optionElement.innerHTML = `${String(res)}`
            selectElement.appendChild(optionElement)
        }
        
    }
}