const mongoose = require('mongoose')
const Schema = mongoose.Schema


// informandos os dados que serão obrigatórios dentro da minha base de dados 

const ContatoSchema = new Schema ({
    _id: {
        type: mongoose.Schema.Types.ObjectId, // tipo dos dados 
        auto: true, // é autogerado? 
        required: true, // é obrigatório? 
    }, 
    nome: {
        type: String,
        required: true,
        unique: true
    }, 
    celular: {
        type: String,
        required: true,
        unique: true
    }, 
    dataNascimento: {   
        type: Date,
        required: true,
    },
    fotoPerfil :{
        type: String, // url da foto
        required: false
    }

})

const contatosCollection = mongoose.model('contato', ContatoSchema)
// representa a coleção do banco 
// //db.aluna.find (representa isso ai miga)

module.exports = contatosCollection