const Sequelize = require("sequelize")
const sequelize = new Sequelize("dbprojetonode", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao conectar: " + erro)
})

const Agendamentos = sequelize.define("agendamentos", {
    nome:{
        type: Sequelize.STRING
    },
    endereco:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.INTEGER
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.STRING
    },
    observacao:{
        type: Sequelize.TEXT
    }
})

Agendamentos.sync({force: true})

Agendamentos.create({
    nome: "Ruth Carvalho",
    endereco: "Rua das Flores, 154",
    bairro: "AE Carvalho",
    cep: 16985470,
    cidade: "São Paulo",
    estado: "SP",
    observacao: "Realizar os serviços de alinhamento do veiculo"
})