let contenedor = document.getElementById("clima");


fetch("https://api.openweathermap.org/data/2.5/weather?q=caracas&lang=es&units=metric&appid=bbf8893c6e8030e157bb633d11a66e17")
    .then( response =>     response.json())
    .then( data => {
        contenedor.innerHTML = `<span> Cuidad: ${data.name}</span>
                                <span> Temp: ${data.main.temp}</span>`
    })



let formularioRegistro = document.getElementById ("register");
let inputRegistroUser = document.getElementById ("userRegister");
let inputRegistroPass = document.getElementById ("passRegister");

let formularioIngresar = document.getElementById ("login");
let inputLoginUser = document.getElementById ("user");
let inputLoginPass = document.getElementById ("pass");
let error= document.getElementById("error");
let usuarios = [];

class Usuario {
    constructor(usuario,contraseña) {
        this.usuario = usuario;
        this.contraseña = contraseña;
    }
}

formularioRegistro.addEventListener("submit", (e) => {
    e.preventDefault();

    if (inputRegistroPass.value != "" && inputRegistroUser.value != "") {
        let nuevoUsuario = new Usuario(inputRegistroUser.value, inputRegistroPass.value);
        usuarios.push (nuevoUsuario);
    console.log (usuarios)
        alert("Usuario creado correctamente" + inputRegistroUser.value);
    }

})

formularioIngresar.addEventListener("submit", (e) =>{
    e.preventDefault();
    let us = inputLoginUser.value;
    let ps = inputLoginPass.value;

    for (let user of usuarios){
        if (us == user.usuario && ps == user.contraseña){
            alert ("Acceso correcto");
            localStorage.setItem("usuario", user.usuario)
            window.location.href = "/pages/servicios.html";
        } else {
            error.innerHTML = "<p> Acceso incorrecto, intente nuevamente</p>"
        
        }
    }

})