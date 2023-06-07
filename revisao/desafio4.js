const leia = require("prompt-sync")()

let valorA
let valorB
let valorC
let valorR
let valorS
let valorD

valorA =parseInt(leia("Digite valorA : "))
valorB =parseInt(leia("Digite valorB : "))
valorC =parseInt(leia("Digite valorC : "))

valorR = Math.pow((valorA+valorB),2)
valorS = Math.pow((valorB+valorC),2)
valorD = (valorR+valorS)/2

console.log("O resultado é "+valorD)


