document.addEventListener("DOMContentLoaded", function() {
    
    var usuarioGuardado = localStorage.getItem('usuario');

    if (usuarioGuardado) {
        var usuario = JSON.parse(usuarioGuardado);

        var navbarUser = document.getElementById('navbarUser');
        var usuarioElement = document.createElement('span');
        usuarioElement.textContent = usuario.nombre;
        navbarUser.appendChild(usuarioElement);
    } else {
    }
});
