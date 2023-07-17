var Sequelize= require("sequelize"); //para conectar a mysql
var usuarioModelo= require("./modelos/usuario");
var productoModelo= require("./modelos/producto");
require("dotenv").config();




var db = process.env.DB_LOCAL;
var usuario = process.env.USUARIO_LOCAL;
var password = process.env.PASSWORD_LOCAL;
var host = process.env.HOST_LOCAL;
var port = process.env.PORT_LOCAL;

var conexion= new Sequelize(db, usuario, password, {
    host:host,
    port:port,
    dialect:'mysql',
});


conexion.sync({force:false})
.then(()=>{
    console.log("conectado a MYSQL");

})
.catch((err)=>{
    console.log("Error al conectarse a MYSQL"+err);
});

var Usuario =usuarioModelo(conexion);
var Produto =productoModelo(conexion);
console.log(Produto);

module.exports={
    Usuario:Usuario,
    Produto:Produto
}