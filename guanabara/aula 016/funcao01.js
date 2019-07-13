function parinpar(n){
    if (n%2==0){
        return 'par'
    }else {
        return 'impar'
    }
}

let res = parinpar(223)
console.log(`O numero é ${res}`)