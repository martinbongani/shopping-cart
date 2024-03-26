document.addEventListener("DOMContentLoaded", function() {
    const productsContainer = document.getElementById("products");
    const cartContainer = document.getElementById("cart");

    // Sample products
    const products = [
        { id: 1, name: "Baby wipes", price: 189000 },
        { id: 2, name: "Cribs and Chairs-furniture", price: 5150000 },
        { id: 3, name: "Musical instruments", price: 1550000 },
        { id: 4, name: "Toys", price: 2305500 },
        { id: 5, name: "Baby diapers", price: 229000 },
        { id: 6, name: "Snacks", price: 36100 },
        { id: 7, name: "Books and charts", price: 46200 },
        { id: 8, name: "First aid kit", price: 144300 },
        { id: 9, name: "Bottles and feeding utensils", price: 106100 },
        { id: 10, name: "Kitchen appliances", price: 1314711 },
        { id: 11, name: "Office supplies", price: 48000 },
        { id: 12, name: "Blankets and bedding", price: 1097900 }
    ];

    
    // Render products
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        //html and css included
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
        console.log(cart)
    };

    // Function to render cart
    /*
    function renderCart() {
        cartContainer.innerHTML = "";
        let total = 0;
        cart.forEach(item => {
            total += item.price;
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            
            cartItem.innerHTML = `<p>${item.name}</p><button onClick = "removeItem()">Remove item</button>`
            cartContainer.appendChild(cartItem);
        });
        const totalElement = document.createElement("div");
        totalElement.classList.add("cart-total");
        totalElement.textContent = `Total: UGX ${total.toLocaleString()}`;
        cartContainer.appendChild(totalElement);
    }
    */
    // function removeItem(productId) {
    //     const index = cart.findIndex(item => item.id===productId)
    //     // const product = cart.find(p => p.id === productId);
    //     // if (product) {
    //     //     cart.splice(product);
    //     //     renderCart();
    //     // }

    // }
    // removeItem(1)

    // Function to render cart
function renderCart() {
    cartContainer.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        //total = total + item.price
        total += item.price;
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.textContent = item.name; //doesnt include markup

        // Create remove button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-button");

        // Add event listener to remove button
        removeButton.addEventListener("click", function() {
            removeFromCart(item.id); // Calling line 108
        });

        // Append remove button to cart item
        cartItem.appendChild(removeButton);

        cartContainer.appendChild(cartItem);
    });
    const totalElement = document.createElement("div");
    totalElement.classList.add("cart-total");
    totalElement.textContent = `Total: UGX ${total.toLocaleString()}`;
    cartContainer.appendChild(totalElement);
}

// Function to remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    renderCart();
}
});

