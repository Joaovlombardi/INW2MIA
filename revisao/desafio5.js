const leia = require("prompt-sync")()

let x1 = parseInt(leia("Digite o valor de x1 :"))
let y1 = parseInt(leia("Digite o valor de y1 :"))
let x2 = parseInt(leia("Digite o valor de x2 :"))
let y2 = parseInt(leia("Digite o valor de y2 :"))

valorD = Math.sqrt( Math.pow((x2-x1),2) + Math.pow((y2-y1),2) )

console.log("O resultado é "+valorD)
