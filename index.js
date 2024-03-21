const Sequelize = require ('sequelize');

const conexao = new Sequelize('nodejs' , 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

conexao.authenticate()
    .then(() => {
        console.log('conectado com sucesso.');

    }).catch((erro)=>{
        console.log('deu erro', erro);
    });

const Cargo = conexao.define('cargos',{
    codigo:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    descricao: {
        type: Sequelize.STRING(150),
        allowNull: false

    }
});

Cargo.sync({
    alter: true
});