let numTarjeta = document.getElementById('numeros-tarjeta');
let titularTarjeta = document.getElementById('titular-tarjeta');
let vencimiento = document.getElementById('vencimiento');
let cvv = document.getElementById('cvv');

function validarPago() {

    console.log(numTarjeta.value);
    if(numTarjeta.value == '') {
        alert('Introduce los números de tu tarjeta');
    }

    console.log(titularTarjeta.value);
    if(titularTarjeta.value == ''){
        alert('Introduce el nombre del titular de la tarjeta');
    }

    console.log(vencimiento.value);
    if(vencimiento.value == ''){
        alert('Introduce la fecha de venicmiento de la tarjeta');
    }

    console.log(cvv.value);
    if(cvv.value == '') {
        alert('Introduce el CVV del reverso de la tarjeta');
    }
    

}