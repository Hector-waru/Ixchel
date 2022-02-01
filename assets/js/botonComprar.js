/* Obtener un numero random de pokemon */
const randoM = (min, max) =>{
    return Math.floor(Math.random()*(max - min ))+min;
    /* ver que recuperamos */

}
/* Esperar a aque cargue la pagina y despues mostrar el js */
document.addEventListener('DOMContentLoaded', ()=>{
    /*Aqui vemos la informacion - Recuperamos un numero random se los pasamos como id */
    const ranDOM=randoM(1,150);
    fecthData(ranDOM);
});
    /* asyn y await: espera a tener la informacion para pasar a la siguiente linea */
const fecthData = async(id)=>{
     try{
        const res= await fetch('https://pokeapi.co/api/v2/pokemon/${id}');
        const data = await res.json();
        /* una vez obtenida la informacion se añade */
        productoAgregado(data);
        console.log(data);
     }catch(error){
        console.log(error)
     }       
    }
/* alt Gr + {} */
const productoAgregado = (producto) =>{
    console.log(producto);
/* Query vs Getelementbyid gana get por las acciones que puede recuperar en un segundo */
    const template = document.querySelector('#producto');
    let image = producto.sprites.other.dream_world.front_default;
    let contenido = `<div class="producto row border-top border-bottom">
    <div class="row main align-items-center">
        <div class="col-2"><img class="" src="${image}"></div>
        <div class="col">
            <div class="row text-muted">${productTitle}</div>
            <div class="row">${productDescribe}</div>
        </div>
        <div class="col"> <a href="menosProc">-</a><a href="#" class="numeroProductos">1</a><a href="masProc">+</a> </div>
        <div class="col"> 44.00 <span class="close">&#10005;</span></div>
    </div>
</div>`;
}
/* Se tiene que agregar al boton con el nombre de esta funcion */
let $btnComprar = document.querySelector('#botonComprar');
/* se agrega el listener */
$btnComprar.addEventListener('click',()=>{
    let productTitle;
    
    let productDescribe;

    const carta = document.createElement(`div`);
    carta.innerHTML = contenido;
    $
    

});
