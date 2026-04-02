import { loadHeaderFooter, getCartItems, calculateCartTotal } from "./utils.mjs";

function renderCartContents() {
    const cartItems = getCartItems();
    const cartList = document.querySelector(".product-list");

    if (cartItems.length === 0) {
        cartList.innerHTML = `
            <p class="empty-cart">Your cart is empty.</p>
            <a class="empty-cart-a" href="/products/">Shop Here</a>`;
        return;
    }

    cartList.innerHTML = "";

    cartItems.forEach((item) => {
        cartList.innerHTML += `
        <li class="cart-card__divider">
            <div class="cart-card__content">
                <img src="${item.Image}" alt="${item.Name}"/>
                
                <div class="cart-card__details">
                    <h2 class="card__name">${item.Name}</h2>
                    <p class="cart-card__quantity">qty: ${item.quantity}</p>
                    <p class="cart-card__price">$${item.FinalPrice}</p>
                    <button class="remove-button" data-id="${item.Id}">Remove</button>
                </div>
            </div>
        </li>`
    });

    const removeButtons = document.querySelectorAll(".remove-button");

    removeButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productId = button.dataset.id;
            removeItemFromCart(productId);
        });
    });
}

function removeItemFromCart(productId) {
    let cartItems = getCartItems();

    cartItems = cartItems.filter((item) => item.Id != productId);

    localStorage.setItem("woh-cart", JSON.stringify(cartItems));

    renderCartContents();
    updateSubTotal();
}

function updateSubTotal() {
    const subtotal = document.querySelector(".cart-subtotal");
    const cartItems = getCartItems();
    const total = calculateCartTotal(cartItems);
    
    subtotal.textContent = `Subtotal: $${total.toFixed(2)}`;

}

document.addEventListener("DOMContentLoaded", () => {
    loadHeaderFooter();
    renderCartContents();
    updateSubTotal();
});

