//* Obtener un numero random de pokemon */
const randoM = (min, max) =>{
    return Math.floor(Math.random()*(max - min ))+min;
    /* ver que recuperamos */

}
let $btnAgregar = document.querySelector('#btnAgregar');

$btnAgregar.addEventListener('click' , ()=>{
    
    fetch('https://pokeapi.co/api/v2/pokemon/150')
    console.log(data);
        .then(resp => resp.json()).then(data =>{
            console.log(data);
            
            
        });
});
