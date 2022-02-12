let correo = document.getElementById('email');
let pwd = document.getElementById('password');

function validarIniciarSesion() {
    
    console.log(correo.value);
    if(correo.value = ''){
        alert('Introduce tu correo electrónico');
    }

    console.log(pwd.value);
    if(pwd.value == ''){
        alert('Introduce tu contraseña');
    }


    
}