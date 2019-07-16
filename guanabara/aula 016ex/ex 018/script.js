var inputElement = document.querySelector('#num')
var divres = document.querySelector('#res')
var select = document.querySelector('#tab')
var number = []



function adicionar(){
    if (inputElement.value <= 0 || inputElement.value >=101 || inputElement.value.length == 0){
        alert('Número invalido ou já esta na lista')
    }else  {
        
        divres.innerHTML = ''
        var element = Number(inputElement.value)
        var idx = number.indexOf(element)
        if (idx === -1){
            number.push(element)
            var apresentarNumero = number.slice(-1)[0]
            var optionElement = document.createElement('option')
            optionElement.innerHTML = `${apresentarNumero}`
            select.appendChild(optionElement)
        }else {
            alert('Número invalido ou já esta na lista')
        }
        
    }
    inputElement.value = ''
    inputElement.focus()
}



 function finalizar (){
    var reducer = (acumulator,currentValue) => acumulator + currentValue;
    var total = number.reduce(reducer)
    var media = total / number.length

    divres.innerHTML = `Ao todo, temos ${number.length} números cadastrados.<br>`
    divres.innerHTML += `O maior número informado foi ${Math.max.apply(null, number)}.<br>`
    divres.innerHTML += `O menor número informado foi ${Math.min.apply(null, number)}.<br>`
    divres.innerHTML += `A soma dos valores é ${total}.<br>`
    divres.innerHTML += `A média dos valores é ${media}`
    
} 
