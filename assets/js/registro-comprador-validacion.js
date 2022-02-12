let email = document.getElementById('email');
let pwd1 = document.getElementById('password1');
let pwd2 = document.getElementById('password2');


function getInfoComprador() {
    
    console.log(email.value);
    if(email.value == ''){
        alert('Introduce un correo electrónico');
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