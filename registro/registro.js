function registrarUsuario() {

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var genero = document.getElementById('genero').value;


    var usuario = {
        nombre: nombre,
        apellido: apellido,
        email: email,
        password: password,
        genero: genero
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));

    window.location.href = '../ingreso/ingreso.html';
}



