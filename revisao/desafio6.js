const leia = require("prompt-sync")()

let aluno = leia("Digite o nome do aluno : ")
let nota = parseInt(leia("Digite a nota do aluno : "))
let tipo = leia("Digite o aluno, a aluna :")

if(nota <= 5){
    console.log("Oi aluno "+aluno+" ainda não, recuperação")
}
else{
console.log("Oi aluno "+aluno+" otimo, continue assim")
}
