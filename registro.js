function registrarUsuario() {
    // Obtener valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var genero = document.getElementById('genero').value;

    // Crear objeto de usuario
    var usuario = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password,  // No recomendado en un entorno real. En producción, deberías hashear la contraseña.
        genero: genero
    };

    // Guardar usuario en el localStorage
    localStorage.setItem('usuario', JSON.stringify(usuario));

    // Redirigir a la página de inicio de sesión (simulado)
    window.location.href = 'ingreso.html';
}



