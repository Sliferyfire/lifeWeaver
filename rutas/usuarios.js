var ruta=require("express").Router();
const { where } = require("sequelize");
var {Usuario}=require('../conexion');
var {Producto}=require('../conexion');

ruta.get("/",(req,res)=>{
    if (req.session.usuario){
        res.render("inicioUsuario")
    }
    else {
        res.render("inicio")
    }
})

ruta.get("/iniciarSesion",(req,res)=>{
    res.render("formIniSes");
})

ruta.get("/crearSesion",(req,res)=>{
    res.render("formCrearSes");
})

ruta.get("/registroExito",(req,res)=>{
    res.render("registroExito");
})

// -----------------------Inicio Sesion-----------------------------------------------------------------

ruta.post("/validar",(req,res)=>{
    
    if(req.body.usuario=="admin" && req.body.password=="12345678"){
        req.session.usuario=req.body.usuario;
        res.redirect("/inicioAdmin");
    }else {
        Usuario.findAll({where:{usuario:req.body.usuario , password:req.body.password}})
        .then((usuario)=>{
            
                req.session.usuario=req.body.usuario;
                res.redirect("/inicio");
            
        })
        .catch((err)=>{
            console.log("Error...." + err);
            res.redirect("/error");
        });
    }

});

ruta.get("/inicio",(req,res)=>{
    if (req.session.usuario){
        res.render("inicioUsuario", {usuario:req.session.usuario});
    } 
    else {
        res.redirect("/error");
    }
});

ruta.get("/error",(req,res)=>{
    res.render("error");
});

ruta.get("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/");
});



//------------------------Interaccion con base de datos------------------------------------------------------------
//-----------Paginas administrador--------------------------------------------------------------------------------

ruta.get("/inicioAdmin",(req,res)=>{
    if (req.session.usuario == "admin"){
        res.render("inicioAdmin");
    }
    else{
        res.redirect("/");
    } 
});

ruta.get("/verUsuarios",(req,res)=>{
    if (req.session.usuario == "admin"){
        Usuario.findAll()
        .then((usu)=>{
            res.render("verUsuarios",{usuarios:usu});
        })
        .catch((err)=>{
            console.log("Error " + err)
            res.end();
        });
    }
    else{
        res.redirect("/");
    } 
});

ruta.get("/verProductos",(req,res)=>{
    if (req.session.usuario == "admin"){
        Producto.findAll()
        .then((prod)=>{
            res.render("verProductos",{productos:prod});
        })
        .catch((err)=>{
            console.log("Error " + err)
            res.end();
        });
    }
    else{
        res.redirect("/");
    } 
});

ruta.get("/nuevoProducto",(req,res)=>{
    if (req.session.usuario == "admin"){
        res.render("nuevoProducto");
    }
    else{
        res.redirect("/");
    } 
});

ruta.post("/capturarProducto",(req,res)=>{
    if (req.session.usuario == "admin"){
        Producto.create(req.body)
        .then(()=>{
            res.redirect("/verProductos");
        })
        .catch((err)=>{
            console.log("No se pudo insertar el usuario "+ err);
            res.redirect("/inicioAdmin");
        });
    }
    else{
        res.redirect("/");
    } 
});


//------------------------------------------------------------------------------------------------------------

ruta.post("/capturarUsuario",(req, res)=>{
    Usuario.create(req.body)
    .then(()=>{
        res.redirect("/");
    })
    .catch((err)=>{
        console.log("No se pudo insertar el usuario "+ err);
        res.redirect("/");
    });
    
});


module.exports=ruta;