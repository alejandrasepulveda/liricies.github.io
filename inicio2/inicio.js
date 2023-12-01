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


document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navList = document.querySelector('.navbar__text');

    if (menuIcon && navList) {
        menuIcon.addEventListener('click', function () {
            navList.style.display = navList.style.display === 'flex' ? 'none' : 'flex';
        });
    }
});