class Animal{
    constructor(tipo, porte, femea, nascimento){
        this.tipo = tipo;
        this.porte = porte;
        this.femea = femea;
        this.nascimento = nascimento
    }

    fazerBarulho(){
        console.log("fazendo barulho...")
    }

    retornoIdade(anoAtual){
        return anoAtual - this.nascimento
    }

}   

class Gato extends Animal{
    constructor(tipo,raça,cor){
    super(tipo);
    this.raça = raça;
    this.cor = cor
    }

    miar(){
        console.log("miando...")
    }
}

class Cachorro extends Animal{
    constructor(tipo,raça,cor){
        super(tipo)
        this.raça = raça; 
        this.cor = cor
    }

    latir(){
        console.log("latindo...")
    }
}
//PROGRAMA PRINCIPAL

//PROGRAMA 1

let bicho1 = new Animal("mamifero","medio",false ,2020)
console.log(bicho1)
console.log(bicho1.porte)
bicho1.fazerBarulho()

//PROGRAMA 2

let frajola = new Gato("felino","sphynx","preto")
frajola.fazerBarulho()
frajola.miar()

//PROGRAMA 3 

let snoop = new Cachorro("canino","beagle","preto")
snoop.latir()

//PROGRAMA 4

snoop.nascimento = 2021
console.log("A idade é "+snoop.retornoIdade(2023)+" anos ")