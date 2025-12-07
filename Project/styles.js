// ==================== CART SYSTEM ====================

let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartIcon();

// Add to cart
document.getElementById("addToCart").addEventListener("click", () => {
    let qty = parseInt(document.getElementById("qty").value);

    let product = {
        name: "Akos Noir – 50ml",
        price: 29.99,
        quantity: qty
    };

    cart.push(product);
    saveCart();
    alert("Added to cart ✔");
});


// Open cart
function openCart(){
    renderCart();
    document.getElementById("cart-panel").classList.add("open");
}

// Render items
function renderCart(){
    let list = document.getElementById("cart-items");
    list.innerHTML="";

    let total = 0;
    cart.forEach((item,index)=>{
        total += item.price * item.quantity;
        list.innerHTML += `
            <li>
                ${item.name} x ${item.quantity}
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
                <button onclick="removeItem(${index})">✖</button>
            </li>
        `;
    });

    document.getElementById("total").innerText = total.toFixed(2);
    updateCartIcon();
}

// Remove one product
function removeItem(i){
    cart.splice(i,1);
    saveCart();
    renderCart();
}

// Clear cart
function clearCart(){
    cart=[];
    saveCart();
    renderCart();
    updateCartIcon();
}

// Save to localStorage + update icon
function saveCart(){
    localStorage.setItem("cart",JSON.stringify(cart));
    updateCartIcon();
}
function updateCartIcon(){
    document.getElementById("cart-count").innerText = cart.length;
}
