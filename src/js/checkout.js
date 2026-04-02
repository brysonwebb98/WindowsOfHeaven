import { loadHeaderFooter, calculateCartTotal, getCartItems } from "./utils.mjs";

function renderFinalPrice (){
    // SUBTOTAL 
    const cartItems = getCartItems();
    const subtotal = calculateCartTotal(cartItems);
    const subtotalElement = document.querySelector(".checkout-subtotal");
    subtotalElement.innerHTML = subtotal;

    const shippingOption = document.querySelector(".country");
    const shippingCost = document.querySelector(".checkout-shipping");
    
    if (shippingOption.value === "USA") {
        shippingCost.innerHTML = 10;
    }
    else if (shippingOption.value === "Canada") {
        shippingCost.innerHTML = 15;
    }
    else if (shippingOption.value === "Mexico") {
        shippingCost.innerHTML = 20;
    }

    const totalElement = document.querySelector(".checkout-total");
    const total = Number(shippingCost.innerHTML) + subtotal;

    totalElement.innerHTML = total;
}



document.addEventListener("DOMContentLoaded", () => {
    loadHeaderFooter();

    renderFinalPrice();
    const shippingOption = document.querySelector(".country");
    shippingOption.addEventListener("change", renderFinalPrice)

    const checkoutButton = document.querySelector(".checkout-submit")
    checkoutButton.addEventListener("click", (event) => {
        event.preventDefault();
        localStorage.removeItem("woh-cart");
        window.location.href = "../confirmation/"
    });

});