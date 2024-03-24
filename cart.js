document.addEventListener("DOMContentLoaded", function() {
    const productsContainer = document.getElementById("products");
    const cartContainer = document.getElementById("cart");

    // Sample products
    const products = [
        { id: 1, name: "Philips 1.9litres ProBlend System Blender 450W 3000 Series - Black", price: 189000 },
        { id: 2, name: "Apple iPhone 15 Pro 6.1\" 8GB RAM 256GB ROM 48MP 3274mAh - Blue Titanium", price: 5150000 },
        { id: 3, name: "ADH 428L Double Door Big Top Mount Refrigerator - Silver", price: 1550000 },
        { id: 4, name: "Samsung 50 Inch Crystal UHD 4k Smart", price: 2305500 },
        { id: 5, name: "20 Litres Microwave Oven 20MOMS11 - Mirror Silver", price: 229000 },
        { id: 6, name: "Saachi Non Stick Dry Flat Iron - Silver Gray", price: 36100 },
        { id: 7, name: "Stainless Steel Electric Kettle - Silver & Black", price: 46200 },
        { id: 8, name: "Deep Fryer - Silver & Black", price: 144300 },
        { id: 9, name: "Hot Plate Electric Cooker", price: 106100 },
        { id: 10, name: "Soni 5.1Ch Home Cinema Sound Bar 400W HTS20R", price: 1314711 },
        { id: 11, name: "HiFi Earphone Bass Headsets", price: 48000 },
        { id: 12, name: "Hisense 7kg Automatic Front Loading Washing Machine - Titanium", price: 1097900 }
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
