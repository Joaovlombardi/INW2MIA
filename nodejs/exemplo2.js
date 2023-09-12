let p = new Promise(function(cumpriPromessa){
    cumpriPromessa(['Jv', 'Gui', 'Gabriel', 'Pietra'])  
})

p
.then(valor => valor[0])
.then(valor =>console.log(valor))


