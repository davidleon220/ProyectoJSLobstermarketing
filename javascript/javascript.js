let contenedor = document.getElementById("clima");


fetch("https://api.openweathermap.org/data/2.5/weather?q=caracas&lang=es&units=metric&appid=bbf8893c6e8030e157bb633d11a66e17")
    .then( response => response.json())
    .then( data => {
        contenedor.innerHTML = `<span> Cuidad: ${data.name}</span>
                                <br>
                                <span> Temperatura: ${data.main.temp}</span>`
    })

/* desloquear despues de resolvero lo del api 
Swal.fire({
    icon:"success",
    title:"Bienvenido a la Sección de Servicos",
    text:"En esta sección puede realizar la compra del Servicio que deseas",
    imageUrl:'../imagenes/logo.png',    
    footer:"<a href= '../index.html'>Ir al Inicio</a>",
    showClass: {
        popup: 'animate__animated animate__bounceInUp'
    },
    hideClass: {
        popup: 'animate__animated animate__hinge'
    }

}); */

const servicios = [

    {
        id:3,
        name:"Promoción única",
        price: "250 $",
        img: '../imagen/sem.png',
    },    
    
    {
        id:1,
        name:"Inbound",
        price: "40 $",
        img: '../imagen/inbound.png',
    },

    {
        id:2,
        name:"SEO",
        price: "90 $",
        img: '../imagen/seo.png',
    },

    {
        id:3,
        name:"SEM",
        price: "30 $",
        img: '../imagen/sem.png',
    },

    {
        id:4,
        name:"Gestión de Redes Sociales",
        price: "50 $",
        img: '../imagen/gestion.png',
    },

    {
        id:5,
        name:"Campañas de Facebook",
        price: "20 $",
        img: '../imagen/campaña.png',
    },

    {
        id:6,
        name:"Creación de contenidos",
        price: "80 $",
        img: '../imagen/contenido.png',
    },

]


const contenedorServicios= document.querySelector
(".contenedor-servicios");


const contenedorSeleccionados= document.querySelector
(".lista-servicios");


const listadoDeServiciosSeleccionados=[];

document.addEventListener("DOMContentLoaded", function() {
    
    mostrarServicios();

})

function mostrarServicios() {

    servicios.forEach(function(servicio) {
        const divServicio = document.createElement("div");
        divServicio.classList.add("card");

        const imagenServicio = document.createElement("img");
        imagenServicio.src = servicio.img;
        imagenServicio.className = "imagen-servicio";

        const precioServicio= document.createElement("h3");
        precioServicio.textContent = servicio.price;
        precioServicio.classList.add("precio-servicio");
        
        const tituloServicio= document.createElement("h2");
        tituloServicio.textContent = servicio.name;
        tituloServicio.classList.add("titulo-Servicio");

        const btnSeleccionados = document.createElement("button");
        btnSeleccionados.textContent = "Comprar";
        btnSeleccionados.classList.add("btn-seleccionados");
        btnSeleccionados.onclick = listaDeServicios;
        btnSeleccionados.onclick = function() {
            listaDeServicios (servicio.id);
            } 

        divServicio.appendChild(imagenServicio);
        divServicio.appendChild(tituloServicio);
        divServicio.appendChild(precioServicio);
        divServicio.appendChild(btnSeleccionados);
        

        contenedorServicios.appendChild(divServicio);
    
    })
}

function listaDeServicios(id) {
    const serviciosEncontrado = servicios.find (function(servicio){
        return servicio.id===id;
    });

    const servicosFiltrados = servicios.filter(function(servicios){
        return servicios.price > 10;
    })

    console.log(servicosFiltrados);

    listadoDeServiciosSeleccionados.push(serviciosEncontrado);
    mostrarLosServiciosSeleccionados(listadoDeServiciosSeleccionados);

}

function mostrarLosServiciosSeleccionados(favoritos){
    contenedorSeleccionados.innerHTML="";
    favoritos.forEach(function(servicio) {
        const divServicio = document.createElement("div");
        divServicio.classList.add("card");

        const imagenServicio = document.createElement("img");
        imagenServicio.src = servicio.img;
        imagenServicio.className = "imagen-servicio";

        const precioServicio= document.createElement("h3");
        precioServicio.textContent = servicio.price;
        precioServicio.classList.add("precio-servicio");

        const tituloServicio= document.createElement("h2");
        tituloServicio.textContent = servicio.name;
        tituloServicio.classList.add("titulo-Servicio");

        const btnSeleccionados = document.createElement("button");
        btnSeleccionados.textContent = "Borrar";
        btnSeleccionados.classList.add("btn-seleccionados");
        btnSeleccionados.onclick = listaDeServicios;
        btnSeleccionados.onclick = function(e) {
            let abuelo = e.target.parentNode;
                        abuelo.remove();
            
            } 
    
        divServicio.appendChild(imagenServicio);
        divServicio.appendChild(tituloServicio);
        divServicio.appendChild(precioServicio);
        divServicio.appendChild(precioServicio);
        divServicio.appendChild(btnSeleccionados);
        
        contenedorSeleccionados.appendChild(divServicio);
        
    })

}

