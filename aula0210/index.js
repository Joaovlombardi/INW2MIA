const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/aula0210',{
    useNewUrlParser : true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS : 20000
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error : '));

db.once('open' , ()=>{
    console.log("Estamos conectados ao banco")
})

// 2 - vamos fazer a conexão
// 2.1 - SCHEMA 

const alunoSchema = new mongoose.Schema({
    nome : String,
    idade : Number,
    turma : String,
});

const Alunos = mongoose.model('Alunos',alunoSchema);

//3 inserindo os dados 
Alunos.insertMany([
    {nome : 'Maria', idade : 15, turma : 'turma1' },
    {nome : 'Paulo', idade : 16, turma : 'turma2' },
    {nome : 'Pedro', idade : 17, turma : 'turma1' }
])

// 4 - recuperando os dados
async function findAlunos(){
    try{
        const alunos = await Alunos.find({turma:'turma2'});
        console.log("Alunos : ", alunos) 
    }
    catch(error){
        console.error('Error na busca : ', error)
    }
}
findAlunos();

    