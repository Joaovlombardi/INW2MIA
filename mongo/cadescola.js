//configurar a conexão com o mongodb e o banco de dados 

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/escola',
{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    serverSelectionTimeoutMS: 20000
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error :'));

db.once('open', function(){
    console.log("Conectado ao mongoDB");
});

//criando uma collection dentro do mongodb

const alunoSchema = new mongoose.Schema({
    matricula : String,
    nome : String,
    idade : Number, 
    turma : String
});

const Aluno = mongoose.model("Aluno",alunoSchema);

const paulo = new Aluno({
    matricula : "rm100",
    nome : "Paulo Pinto Pereira",
    idade : 19,
    turma : "2MIA"
})

const maria = new Aluno({
    matricula : "rm101",
    nome : "Maria Isadora Pinto",
    idade : 18,
    turma : "2MIB"
})

paulo.save();
maria.save();

Aluno.findOne({nome : 'Maria Isadora Pinto'}, function (err, aluno){
    console.log(Aluno)
})