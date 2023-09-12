//Criando a função da promise 

function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(frase)

        }, segundos * 1000)
    })
}

//Chamando a função

falarDepoisDe(3, "OI TURMA 2MIA")
.then(frase => frase.concat("texto da promise!"))
.then(novaFrase => console.log(novaFrase))
