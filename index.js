var express=require("express");
var path=require("path");
var usuarioRutas=require("./rutas/usuarios");
var session=require("express-session");
require("dotenv").config();

var app=express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(path.join(__dirname,"/public")));

app.use(session({
    secret:process.env.SECRETO_SESION,
    resave:true,
    saveUninitialized:true,
}))

app.use("/",usuarioRutas);


var port=process.env.PORT || 8000;

app.listen(port, ()=>{
    console.log(`Servidor en http://localhost:${port}`);
});