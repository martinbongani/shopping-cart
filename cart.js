document.addEventListener("DOMContentLoaded", function() {
    const productsContainer = document.getElementById("products");
    const cartContainer = document.getElementById("cart");

    // Sample products
    const products = [
        { id: 1, name: "Philips 1.9litres ProBlend System Blender 450W 3000 Series - Black", price: 189000 },
        { id: 2, name: "Apple iPhone 15 Pro 6.1\" 8GB RAM 256GB ROM 48MP 3274mAh - Blue Titanium", price: 5150000 },
        { id: 3, name: "ADH 428L Double Door Big Top Mount Refrigerator - Silver", price: 1550000 }
    ];

    // Render products
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: UGX ${product.price.toLocaleString()}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });

    let cart = [];

    // Function to add item to cart
    window.addToCart = function(productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            cart.push(product);
            renderCart();
        }
    };

    // Function to render cart
    function renderCart() {
        cartContainer.innerHTML = "";
        let total = 0;
        cart.forEach(item => {
            total += item.price;
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.textContent = item.name;
            cartContainer.appendChild(cartItem);
        });
        const totalElement = document.createElement("div");
        totalElement.classList.add("cart-total");
        totalElement.textContent = `Total: UGX ${total.toLocaleString()}`;
        cartContainer.appendChild(totalElement);
    }
});
