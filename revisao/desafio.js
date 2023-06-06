const leia = require("prompt-sync")()

let nome = "";
let celcius = 0;
let kelvin = 0;

nome = leia("Digite o seu nome : ");
celcius = parseInt(leia("Digite a temperatura em celcius: "))
kelvin = celcius + 273;



console.log("Oi "+nome+" a temperatura em graus kelvin é "+ kelvin) 