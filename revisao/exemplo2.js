const leia = require("prompt-sync")()

let valor1 = 0
let valor2 = 0
let nome = leia("Digite o seu nome : ")

valor1 =parseInt( leia("Digite valor 1 : "))
valor2 =parseInt( leia("Digite valor 2 : "))
console.log("Oi "+nome.toUpperCase()+" a soma é igual "+(valor1+valor2))
console.log(nome.length)