document.getElementById("navBar").innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark">
<div class="container-fluid">
  <a class="navbar-brand" href="index.html"><img src="imagenes/logo.png" width="150"></a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav me-5 mb-2 mb-lg-0">
      <li class="nav-item left-bar artesanos">
        <a class="nav-link active" aria-current="page" href="artesanos.html">Artesanos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="catalogo.html">Catalogo</a>
      </li>
      
      <li class="nav-item">
        <a class="nav-link" href="iniciar-sesion.html">Iniciar Sesion</a>
      </li>
      <li class="nav-item signup">
        <button class="signup-btn">
        <a class="nav-link active" href="registro-comprador.html">Regístrate</a>
        </button>
      </li>
        <li>
          <a class="navbar-brand" href="carrito.html"><img src="imagenes/cart.png" width="30"></a>
        </li>
      
        
    
    </ul>
  </div>
</div>
</nav>`