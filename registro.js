function registrarUsuario() {

    var nombres = document.getElementById('nombres').value;
    var apellidos = document.getElementById('apellidos').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var genero = document.getElementById('genero').value;

    var usuario = {
        nombres: nombres,
        apellidos: apellidos,
        email: email,
        genero: genero
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));

    window.location.href = 'ingreso.html';
}

