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
//++++++++++++++++++++++++++++++++ usuario

conexao.authenticate()
    .then(() => {
        console.log('conectado com sucesso.');

    }).catch((erro)=>{
        console.log('deu erro', erro);
    });

const funcionario = conexao.define('funcionario',{
    codigo:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false,

    },
    idade:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    cpf:{
        type: Sequelize.STRING(11),
        allowNull: false,
    },
    codigoCargo: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
});

funcionario.sync({
    alter: true
});

funcionario.belongsTo(Cargo, { foreignKey: 'codigoCargo' });

conexao.sync({ alter: true })
    .then(() => {
        console.log('Tabelas sincronizadas.');
    })
    .catch((erro)=>{
        console.log('Erro ao sincronizar tabelas', erro);
    });