
function mostrarArte() {
    document.getElementById('joyeria').style.display = 'none';
    document.getElementById('arte').style.display = 'block';
}

function mostrarJoyeria() {
    document.getElementById('arte').style.display = 'none';
    document.getElementById('joyeria').style.display = 'block';
}

function ocultarInventario() {
    document.getElementById('stock').style.display = 'none';
}

function ingresarInventario() {
    document.getElementById('stock').style.display = 'block';
}