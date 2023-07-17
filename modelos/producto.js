var Sequelize = require("sequelize");

module.exports=(conexion)=>{
    const ProductoSchema=conexion.define("productos",{
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nombre:{
            type:Sequelize.STRING,
        },
        descripcion:{
            type:Sequelize.STRING,
        },
        precio:{
          type:Sequelize.STRING,
        },
        imagen:{
            type:Sequelize.STRING,
        }
    });
    return ProductoSchema;
}