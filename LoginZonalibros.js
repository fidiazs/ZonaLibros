const usuarios = [
    {
        correo: "Viktor@duoc.cl",
        contraseña: "1234"
    },
    {
        correo: "milo@duoc.cl",
        contraseña: "6767"
    }
];

const boton = document.getElementById("btnlogin");
const botonRegistro = document.getElementById("btnregistro");

    botonRegistro.addEventListener("click", function() {
    window.location.href = "Registro.html";
});

function login() {
    const correo = document.getElementById('correo').value;
    const contraseña = document.getElementById("contraseña").value;

    const usuario = usuarios.find(
        usuario =>
            usuario.correo === correo &&
            usuario.contraseña === contraseña
    );

}

boton.addEventListener("click", login);


