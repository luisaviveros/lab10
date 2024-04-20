document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.getElementById('product-container');
    const counter = document.getElementById('counter');
    let cartCount = 0;

    // desde aqui puedes cargar los producto (con el api :D)
    function loadProducts() {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(products => renderProducts(products))
            .catch(error => console.error('Error loading the products:', error));
    }

    // con esta funcion puedes renderizar los productos
    function renderProducts(products) {
        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.innerHTML = `
                <h3>${product.name}</h3>
                <p>Precio: $${product.price}</p>
                <button onclick="addToCart()">Agregar al Carrito</button>
            `;
            productContainer.appendChild(productCard);
        });
    }

    // y esta Función es  para manejar lo de adicionar de productos al carrito
    window.addToCart = function() {
        cartCount++;
        counter.textContent = cartCount;
    }

    // Llamar a la función de carga de productos al cargar la página
    loadProducts();
});
