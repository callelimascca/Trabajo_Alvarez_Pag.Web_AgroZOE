// Cuando la página de catálogo se haya cargado completamente
document.addEventListener("DOMContentLoaded", function() {

    // Selecciona todos los botones "Ver Más"
    const botonesVerMas = document.querySelectorAll('.btn-success');

    // Agrega un evento de clic a cada botón
    botonesVerMas.forEach(function(boton) {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); // Previene el comportamiento por defecto

            // Captura los datos del producto desde los atributos del botón
            const title = boton.getAttribute('data-title');
            const description = boton.getAttribute('data-description');
            const image = boton.getAttribute('data-image');
            const price = boton.getAttribute('data-price'); 

            // Almacena los datos del producto en sessionStorage
            sessionStorage.setItem('productTitle', title);
            sessionStorage.setItem('productDescription', description);
            sessionStorage.setItem('productImage', image);
            sessionStorage.setItem('productPrice', price);

            // Redirige a la página de detalles del producto
            window.location.href = 'detalle_producto.html';
        });
    });
});

// Cuando la página de producto se haya cargado completamente
document.addEventListener("DOMContentLoaded", function() {

    // Obtiene los datos del producto almacenados en sessionStorage
    const title = sessionStorage.getItem('productTitle');
    const description = sessionStorage.getItem('productDescription');
    const image = sessionStorage.getItem('productImage');
    const price = sessionStorage.getItem('productPrice');

    // Si los datos existen, muestra los detalles del producto
    if (title && description && image && price) {
        document.getElementById('detalle').innerHTML = `
            <div class="product-info">
                <div>
                    <img src="${image}" alt="${title}" style="max-width: 100%;"/>
                </div>
                <div class="product-text" style="max-width: 45%; padding-left: 20px;">
                    <h1>${title}</h1>
                    <p>${description}</p>
                    <p><strong>Precio: </strong>${price}</p>
                </div>
            </div>
        `;
    }

    // Evento para volver al catálogo
    document.getElementById('volver').addEventListener('click', function() {
        window.location.href = 'catalogo.html'; // Redirige al catálogo
    });
});
