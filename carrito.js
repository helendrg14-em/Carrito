
let carrito = [];
const cartCount = document.getElementById('cart-count');

function agregarCarrito(nombre, precio) {
    
    let productoExistente = carrito.find(item => item.nombre === nombre);
    
    if (productoExistente) {
        productoExistente.cantidad += 1;
    } else {
        carrito.push({ nombre, precio, cantidad: 1 });
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
   

    actualizarContador();
    
}

function actualizarContador() {
    const totalItems = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    cartCount.textContent = totalItems;
}

function procesarCompra() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
    window.location.href = 'datos.html'; 
}
