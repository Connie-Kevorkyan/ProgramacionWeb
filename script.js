// Declaro el array de productos con los datos de cada uno
const DATOSPRODUCTOS = [
    {id: 1,
    nombre: "La Sombra del Viento",
    precio: 3000,
    paginas: 576,
    descripcion: 'Un amanecer de 1945, un muchacho es conducido por su padre a un misterioso lugar oculto en el corazón de la ciudad vieja: El Cementerio de los Libros Olvidados. Allí, Daniel Sempere encuentra un libro maldito que cambia el rumbo de su vida y lo arrastra a un laberinto de intrigas y secretos enterrados en el alma oscura de la ciudad.',
    foto: "Imagenes/la sombra del viento.jpg"},

    {id: 2,
    nombre: "El Juego del Angel",
    precio: 3000,
    paginas: 667,
    descripcion: 'En la turbulenta Barcelona de los años 20 un joven escritor obsesionado con un amor imposible recibe la oferta de un misterioso editor para escribir un libro como no ha existido nunca, a cambio de una fortuna y, tal vez, mucho más.',
    foto: "Imagenes/el juego del angel.jpg"},

    {id: 3,
    nombre: "El Prisionero del Cielo",
    precio: 3000,
    paginas: 324,
    descripcion: 'Daniel y Fermín, regresan de nuevo a la aventura para afrontar el mayor desafío de sus vidas. Justo cuando todo empezaba a sonreírles, un inquietante personaje visita la librería y amenaza con desvelar un secreto que lleva enterrado dos décadas en la oscura memoria de la ciudad. Al conocer la verdad, Daniel comprenderá que su destino le arrastra a enfrentarse con la mayor de las sombras: la que está creciendo en su interior.',
    foto: "Imagenes/el prisionero del cielo.jpg"},

    {id: 4,
    nombre: "El Laberinto de los Espiritus",
    precio: 3000,
    paginas: 925,
    descripcion: 'El misterio de la muerte de su madre ha abierto un abismo en el alma de Daniel. Justo cuando cree que está a un paso de resolver el enigma, una conjura más profunda y oscura de lo que podría haber imaginado despliega su red desde las entrañas del Régimen. Es entonces cuando aparece Alicia Gris, para conducirlos al corazón de las tinieblas y desvelar la historia secreta de la familia... aunque a un terrible precio.',
    foto: "Imagenes/el laberinto de los espiritus.jpg"},

    {id: 5,
    nombre: "El Principe de la Niebla",
    precio: 2500,
    paginas: 223,
    descripcion: 'El nuevo hogar de los Carver, que se han mudado a la costa huyendo de la ciudad y de la guerra, está rodeado de misterio. Todavía se respira el espíritu de Jacob, el hijo de los antiguos propietarios, que murió ahogado. Las extrañas circunstancias de esa muerte sólo se empiezan a aclarar con la aparición de un diabólico personaje: el Príncipe de la Niebla, capaz de conceder cualquier deseo a una persona; eso sí, a un alto precio.',
    foto: "Imagenes/el principe de la niebla.png"},
    
    {id: 6,
    nombre: "El Palacio de la Medianoche",
    precio: 2500,
    paginas: 352,
    descripcion: 'Calcuta, 1932. Un tren en llamas atraviesa la ciudad. Un espectro de fuego siembra el terror en las sombras de la noche. Pero eso no es más que el principio. En la víspera de cumplir dieciséis años, Ben, Sheere y sus amigos de la Chowbar Society deberán enfrentarse al terrible enigma de la historia de la ciudad. La gente que puebla sus calles sabe que la verdadera historia fue escrita en las páginas invisibles de sus espíritus.',
    foto: "Imagenes/el palacio de la medianoche.png"},
    
    {id: 7,
    nombre: "Las Luces de Septiembre",
    precio: 2500,
    paginas: 227,
    descripcion: 'Un misterioso fabricante de juguetes vive recluido en una mansión gigantesca poblada de seres mecánicos y sombras del pasado. Un enigma en torno a las extrañas luces que brillan entre la niebla que rodea el islote del faro. Una criatura de pesadilla que se oculta en la profundidad del bosque. Estos y otros elementos tejen la trama del misterio que unirá a Irene e Ismael para siempre durante un mágico verano en Bahía Azul.',
    foto: "Imagenes/las luces de septiembre.png"},
    
    {id: 8,
    nombre: "Marina",
    precio: 2300,
    paginas: 275,
    descripcion: 'En Barcelona 1980 Óscar Drai sueña despierto, deslumbrado por los palacetes cercanos al internado en el que estudia. En una de sus escapadas conoce a Marina, una chica que comparte con Óscar la aventura de adentrarse en un enigma del pasado. Un misterioso personaje de la posguerra se propuso el mayor desafío, pero su ambición lo arrastró por sendas siniestras cuyas consecuencias debe pagar alguien todavía hoy.',
    foto: "Imagenes/marina.jpg"},
    
    {id: 9,
    nombre: "La Ciudad de Vapor",
    precio: 2000,
    paginas: 224,
    descripcion: 'Un muchacho decide hacerse escritor al descubrir que sus invenciones le regalan un rato más de interés por parte de la niña rica que le ha robado el corazón. Un arquitecto huye de Constantinopla con los planos de una biblioteca inexpugnable. Un extraño caballero tienta a Cervantes para que escriba un libro como no ha existido jamás. Y Gaudí, navegando hacia una misteriosa cita en Nueva York, se deleita con la luz y el vapor.',
    foto: "Imagenes/la ciudad de vapor.jpg"},
]

// Declaro variables
let carrito = [];

let items = document.querySelector('#libros');
let productoscarrito = document.querySelector('#compras');
let finCarrito = document.querySelector('#finCarrito');

let botonFinalizar = document.querySelector('#fincompra');

let precioSubtotal  = document.querySelector('#subtotalcompra');
let precioEnvio = document.querySelector('#enviocompra');
let precioTotal = document.querySelector('#totalcompra');

let cantidadProductos = document.querySelector('#cantidadproductos');

let opcionEnvioDomicilio = document.querySelector('#enviodomicilio');
let opcionRetiroTienda = document.querySelector('#retirotienda');

// Funcion para mostrar los productos en el index
function renderizarProductos() {
    DATOSPRODUCTOS.forEach((info) => {
        const nodocard = document.createElement('div');
        nodocard.classList.add('card', 'mb-3');
        
        const nodorow = document.createElement('div');
        nodorow.classList.add('row', 'g-0');
        
        const nodocol4 = document.createElement('div');
        nodocol4.classList.add('col-md-4');
        
        const nodofoto = document.createElement('img');
        nodofoto.classList.add('img-fluid', 'rounded-start');
        nodofoto.setAttribute('src', info.foto);
        
        const nodocol8 = document.createElement('div');
        nodocol8.classList.add('col-md-8');
        
        const nodocardbody = document.createElement('div');
        nodocardbody.classList.add('card-body');
        
        const nodotitulo = document.createElement('h5');
        nodotitulo.classList.add('card-title');
        nodotitulo.textContent = info.nombre;
        
        const nododescripcion = document.createElement('p');
        nododescripcion.classList.add('card-text');
        nododescripcion.textContent = info.descripcion;
        
        const nodopaginas = document.createElement('p');
        nodopaginas.classList.add('card-text');
        nodopaginas.textContent = `${info.paginas}${' páginas'}`;
        
        const nodoprecio = document.createElement('p');
        nodoprecio.classList.add('card-text');
        nodoprecio.textContent = `${'Precio: $'}${info.precio}`;
        
        const nodoboton = document.createElement('button');
        nodoboton.classList.add('btn', 'btn-primary');
        nodoboton.textContent = 'Añadir al Carrito';
        nodoboton.addEventListener('click', agregarAlCarrito);
        nodoboton.setAttribute('marcador', info.id);


        nodocard.appendChild(nodorow);
        
        nodorow.appendChild(nodocol4);
        nodorow.appendChild(nodocol8);
        
        nodocol4.appendChild(nodofoto);
        
        nodocol8.appendChild(nodocardbody);
        
        nodocardbody.appendChild(nodotitulo);
        nodocardbody.appendChild(nododescripcion);
        nodocardbody.appendChild(nodopaginas);
        nodocardbody.appendChild(nodoprecio);
        nodocardbody.appendChild(nodoboton);
        
        items.appendChild(nodocard); 
    });
}

// Funcion para agregar productos al carrito
function agregarAlCarrito (evento) {
    let carritoStorage = JSON.parse(sessionStorage.getItem("carrito"));
    if (carritoStorage != null) { //Chequeo si esta vacio
        carrito = carritoStorage //Si no esta vacio, lo guardo
    }

    let idItemNuevo = evento.target.getAttribute('marcador')
    if (carrito.find((item) => item.itemId === idItemNuevo)){
        let item = carrito.find((itemCantidad) => itemCantidad.itemId === idItemNuevo)
        item.cantidad += 1;
        console.log(carrito)
    } else{
        var itemCantidad = new Object();
        itemCantidad.itemId = idItemNuevo;
        itemCantidad.cantidad = 1;
        carrito.push(itemCantidad);  
        console.log(carrito)  
    }

    sessionStorage.setItem("carrito", JSON.stringify(carrito));
    renderizarCarritoItemNuevo();
}

function renderizarCarritoItemNuevo () {
    productoscarrito.textContent = '';
    carrito = JSON.parse(sessionStorage.getItem("carrito"));
    carrito.forEach((itemCantidad) => {      
        let miItem = DATOSPRODUCTOS.find((itemDATOSPRODUCTOS) => itemDATOSPRODUCTOS.id === parseInt(itemCantidad.itemId))
        console.log(miItem)
        
        const minodo = document.createElement('a');
        minodo.classList.add('list-group-item', 'list-group-item-action', 'd-flex', 'gap-3', 'py-3');
        
        const minodofoto = document.createElement('img');
        minodofoto.setAttribute ('src', miItem.foto);
        minodofoto.style.height = '55px';
        minodofoto.style.width = '37px';

        const minodoinfo = document.createElement('div');
        minodoinfo.classList.add('d-flex', 'gap-2', 'w-100', 'justify-content-between');

        const minododiv = document.createElement('div');
        minododiv.classList.add ('row');
        
        const minodotitulo = document.createElement('h6');
        minodotitulo.classList.add('mb-0', 'text-nowrap');
        minodotitulo.textContent = miItem.nombre;
        
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn');
        miBoton.textContent = '-';
        miBoton.dataset.itemCantidad = itemCantidad;
        miBoton.addEventListener('click', borrarItemCarrito);
        
        const minodocantidad = document.createElement('p');
        minodocantidad.textContent = itemCantidad.cantidad;
        
        const minodoprecio = document.createElement('p');
        minodoprecio.classList.add ('text-nowrap');
        minodoprecio.textContent = `$${miItem.precio}`;

        minodo.appendChild(minodofoto);
        minodo.appendChild(minodoinfo);
        minodoinfo.appendChild(minododiv);
        minododiv.appendChild(minodotitulo);
        minododiv.appendChild(minodocantidad);
        minodoinfo.appendChild(minodoprecio);
        
        minodoinfo.appendChild(miBoton);
        productoscarrito.appendChild(minodo);
   })
    //precioSubtotal.textContent = calcularTotal ();
    cantidadProductos.textContent = agregarAlCarrito ();
}

 function mostrarCarrito () {
    console.log("ENTRE A MOSTRAR CARRITO")
    carrito = JSON.parse(sessionStorage.getItem("carrito"));
    console.log(carrito)
    let miCarrito = carrito
    console.log(miCarrito)

    miCarrito.forEach((itemCantidad) => {
        let miItem = DATOSPRODUCTOS.find((itemDATOSPRODUCTOS) => itemDATOSPRODUCTOS.id === parseInt(itemCantidad.itemId))
        console.log(miItem)
        
        const minodo = document.createElement('a');
        minodo.classList.add('list-group-item', 'list-group-item-action', 'd-flex', 'gap-3', 'py-3');
        
        const minodofoto = document.createElement('img');
        minodofoto.setAttribute ('src', miItem.foto);
        minodofoto.style.height = '55px';
        minodofoto.style.width = '37px';

        const minodoinfo = document.createElement('div');
        minodoinfo.classList.add('d-flex', 'gap-2', 'w-100', 'justify-content-between');

        const minododiv = document.createElement('div');
        minododiv.classList.add ('row');
        
        const minodotitulo = document.createElement('h6');
        minodotitulo.classList.add('mb-0', 'text-nowrap');
        minodotitulo.textContent = miItem.nombre;

        const minodocantidad = document.createElement('p');
        minodocantidad.textContent = itemCantidad.cantidad;
        
        const minodoprecio = document.createElement('p');
        minodoprecio.classList.add ('text-nowrap');
        minodoprecio.textContent = `$${miItem.precio}`;

        minodo.appendChild(minodofoto);
        minodo.appendChild(minodoinfo);
        minodoinfo.appendChild(minododiv);
        minododiv.appendChild(minodotitulo);
        minododiv.appendChild(minodocantidad);
        minodoinfo.appendChild(minodoprecio);

        console.log("LLEGO AL INAL")
        finCarrito.appendChild(minodo);
    })
    //calcularTotal()
    
} 

function finalizarCompra() {
    carrito = [];
    total= 0;
    renderizarCarritoItemNuevo();
}

botonFinalizar.addEventListener('click', finalizarCompra);

function borrarItemCarrito (evento) {
    const id = evento.target.dataset.item;
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    })
    renderizarCarrito ();
}

function calcularTotal () {
    let sumaTotal = 0;
    carrito.forEach((items) => sumaTotal += (DATOSPRODUCTOS.find((itemDATOSPRODUCTOS) => itemDATOSPRODUCTOS.id === items.itemId).precio * items.cantidad))
    console.log(sumaTotal)
    
}

function opcionEnvio () {
    opcionEnvioElegido = document.querySelector('input[name="metododeenvio"]:checked').value;
    if (opcionEnvioDomicilio.value == opcionEnvioElegido) {
        precioEnvio.textContent = 350;
        precioTotal.textContent = parseFloat(precioSubtotal.textContent) + parseFloat(precioEnvio.textContent);
    }
    else if (opcionRetiroTienda.value == opcionEnvioElegido) {
        precioEnvio.textContent = 0;
        precioTotal.textContent = parseFloat(precioSubtotal.textContent) + parseFloat(precioEnvio.textContent);
    }
}

renderizarProductos();
renderizarCarritoItemNuevo();
mostrarCarrito();

//cantidadProductos.textContent = 1;
//opcionEnvio()