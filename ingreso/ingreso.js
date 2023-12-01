function iniciarSesion() {

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var usuarioGuardado = localStorage.getItem('usuario');
    
    if (usuarioGuardado) {
        var usuario = JSON.parse(usuarioGuardado);

    
        if (usuario.email === email && usuario.password === password) {

            window.location.href = '../inicio2/inicio.html';
        } else {
            alert('Correo electrónico o contraseña incorrectos. Inténtalo de nuevo.');
        }
    } else {
        alert('No hay usuarios registrados. Regístrate primero.');
    }
}
