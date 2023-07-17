function validarFormulario() {
    var nombres = document.getElementById('nombres').value;
    var contra = document.getElementById('contra').value;

    if (nombres !== 'ivan@gmail.com') {
        document.getElementById('mensajemail').innerHTML = 'El correo ingresado no es válido';
        return;
    }
    else[
        document.getElementById('mensajemail').innerHTML =""
    ]


    if (contra !== 'cisco') {
        document.getElementById('mensajecontraseña').innerHTML = 'La contraseña ingresada no es válida';
        return;
    }

    else[
        document.getElementById('mensajecontraseña').innerHTML =""
    ]

    window.location.href = "/";
}
