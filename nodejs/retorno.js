const somaNovo = (numero1, numero2) =>{
    return (numero1 + numero2);
}

console.log("A soma dos valores é " +somaNovo(15,20))
console.log("A soma dos valores é " ,somaNovo(15,20))

const parImparNovo = numero => {
    if(numero < 0 ){
        return 'negativo'
    }
    else if(numero ==0){
        return 'neutro'
    }
    else if((numero % 2)=== 0){
        return 'par'
    }
    else{
        return 'impar'
    }
}
console.log("---------------------")

console.log(" O numero é " +parImparNovo(0))
console.log(" O numero é " +parImparNovo(-1))
console.log(" O numero é " +parImparNovo(1))
console.log(" O numero é " +parImparNovo(2))