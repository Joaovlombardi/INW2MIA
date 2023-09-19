//criação da função normal 
function escreveNoConsole(){
    console.log("Primeiro exemplo - Funçao normal")
} 

//chama a função para executar 
escreveNoConsole();

//variação da função normal ou declarada
const escreveNoConsoleVariacao = function(){
    console.log("Segundo exemplo - Função do modo Normal") 
}

//chama a função para executar 
escreveNoConsoleVariacao();

//arrow function função seta ou flecha
//toda arrow function usar caracteres = junto com >
const escrevaComArrow = ()=>{
    console.log("Terceira variação - Arrow Function") 
}

//chama a função para executar
escrevaComArrow();

//errow function => com parametro 
const escreverComArrowParametro = (texto) => {
    console.log(texto);
} // se tiver apenas um parámetro pode ser omitido as chaves {} 

//chama função para executar 
escreverComArrowParametro("Quarto exemplo, usando parametro");
escrevaComArrow()
escreverComArrowParametro("outro texto")

//funcao arrow que soma dois valores 
const somarDois = (numero1, numero2)=>{
    console.log("A soma é "+(numero1+numero2))
} 

//executando 
console.log("--------------")
somarDois(10, 10)

// variação arrow function sem parentes e sem chave
const varianteArrow = texto => console.log(texto)

//crie uma errow function chamada parImpar que recebe 
//um parametro numerico e informar na saida este numero 
//e mais um texto conforme a situação 
//[numero], este valor é negativo
//[numero], este valor é neutro 0 
//[numero], este valor é par
//[numero], este valor é impar 

const parImpar = (numero)=>{
    if (numero < 0){
        console.log("O número "+numero +" é negativo");
    }
    else if (numero == 0){
        console.log("O número "+numero +" é neutro");
    }
    else if ((numero%2) == 0){
        console.log("O número "+numero +" é par");
    }
    else {
        console.log("O número "+numero +" é impar");
    }
}

parImpar(40)
parImpar(0)
parImpar(15)
parImpar(-10)
