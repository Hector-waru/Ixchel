let nombre = document.getElementById('name');
let email = document.getElementById('email');
let dir = document.getElementById('direccion');
let rfc = document.getElementById('rfc');
let pwd1 = document.getElementById('password1');
let pwd2 = document.getElementById('password2');

function getInfo() {
    console.log(nombre.value);
    if(nombre.value == '') {
        alert('Introduce un nombre');
    }
    
    console.log(email.value);
    if(email.value == ''){
        alert('Introduce un correo electrónico');
    }

    console.log(dir.value);
    if(dir.value == ''){
        alert('Introduce una dirección');
    }

    console.log(rfc.value);
    if(rfc.value == '') {
        alert('Introduce un RFC válido');
    }

    console.log(pwd1.value);
    if(pwd1.value == '') {
        alert('Introduce una contraseña');
    }

    console.log(pwd2.value);
    if(pwd1.value != pwd2.value) {
        alert('Las contraseñas no coinciden');
    }

}