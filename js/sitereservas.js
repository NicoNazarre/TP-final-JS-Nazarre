  class Excursion {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    } 
}

localStorage.removeItem("saludo");

localStorage.clear();

const datos = document.getElementsByClassName("datos");

const total = document.getElementsByTagName("th")

for (let dato of datos) {

}

class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;

    }
}

const baseDeDatos = [
    {
        id: 1,
        nombre: 'Abrau',
        precio: 400,
        imagen: 'D:/Programación/CoderHouse/curso-JAVASCRIPT/TP-final-JS-Nazarre/multimedia/abraao.jpg' 
    },
    {
        id: 2,
        nombre: 'Dentista',
        precio: 700,
        imagen: 'D:/Programación/CoderHouse/curso-JAVASCRIPT/TP-final-JS-Nazarre/multimedia/dentista.jpg'
    },
    {
        id: 3,
        nombre: 'Lopez Mendez',
        precio: 900,
        imagen: 'D:/Programación/CoderHouse/curso-JAVASCRIPT/TP-final-JS-Nazarre/multimedia/lopes mendes.jpg'
    },
    {
        id: 4,
        nombre: 'Lagoa Azul',
        precio: 500,
        imagen: 'D:/Programación/CoderHouse/curso-JAVASCRIPT/TP-final-JS-Nazarre/multimedia/lagoa azul.jpg'
    },
    {
        id: 5,
        nombre: 'Lagoa Verde',
        precio: 600,
        imagen: 'D:/Programación/CoderHouse/curso-JAVASCRIPT/TP-final-JS-Nazarre/multimedia/lagoa verde.jpg'
    }

];

let carrito = [];
const divisa = 'U$S';

const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');


function renderizarProductos() {
    baseDeDatos.forEach((info) => {
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = info.nombre;
        
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', info.imagen);
        
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = `${divisa}${info.precio}`;
       
        const miNodoBoton = document.createElement('button');
        miNodoBoton.classList.add('btn', 'btn-primary');
        miNodoBoton.textContent = 'Ingrese la cantidad de personas';
        miNodoBoton.setAttribute('marcador', info.id);
        miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
       
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBoton);
        miNodo.appendChild(miNodoCardBody);
        DOMitems.appendChild(miNodo);
    });
}


function anyadirProductoAlCarrito(evento) {
    carrito.push(evento.target.getAttribute('marcador'))
    renderizarCarrito();

}

function renderizarCarrito() {
    DOMcarrito.textContent = '';
    
    const carritoSinDuplicados = [...new Set(carrito)];
    
    carritoSinDuplicados.forEach((item) => {
        
    const miItem = baseDeDatos.filter((itemBaseDatos) => {
            
    return itemBaseDatos.id === parseInt(item);
});
        
        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
           
            return itemId === item ? total += 1 : total;
        }, 0);
        
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
        
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        
        miNodo.appendChild(miBoton);
        DOMcarrito.appendChild(miNodo);
});
    
    DOMtotal.textContent = calcularTotal();
}

function borrarItemCarrito(evento) {
    
    const id = evento.target.dataset.item;
    
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
   
    renderizarCarrito();
}

function calcularTotal() {
    
    return carrito.reduce((total, item) => {
       
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        
        return total + miItem[0].precio;
    }, 0).toFixed(2);
}


function vaciarCarrito() {
    
    carrito = [];
    
    renderizarCarrito();
}

DOMbotonVaciar.addEventListener('click', vaciarCarrito);

renderizarProductos();
renderizarCarrito();

