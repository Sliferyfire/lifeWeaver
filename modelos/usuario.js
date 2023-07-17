var Sequelize = require("sequelize");

module.exports=(conexion)=>{
    const UsuarioSchema=conexion.define("usuario",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombre:{
            type:Sequelize.STRING,
        },
        usuario:{
            type:Sequelize.STRING,
        },
        email:{
          type:Sequelize.STRING
        },
        password:{
            type:Sequelize.STRING
        },
    });
    return UsuarioSchema;
}