function iniciarSesion() {
    // Obtener valores del formulario
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Obtener usuario del localStorage (simulado)
    var usuarioGuardado = localStorage.getItem('usuario');
    
    if (usuarioGuardado) {
        var usuario = JSON.parse(usuarioGuardado);

    
        if (usuario.email === email && usuario.password === password) {

            window.location.href = 'index.html';
        } else {
            alert('Correo electrónico o contraseña incorrectos. Inténtalo de nuevo.');
        }
    } else {
        alert('No hay usuarios registrados. Regístrate primero.');
    }
}
