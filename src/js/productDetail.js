import { loadHeaderFooter, getParam } from "./utils.mjs";
import { findProductById } from "./externalServices.mjs";

function renderProductDetails(product) {
    document.querySelector("#productName").textContent = product.Name;
    document.querySelector("#productImage").src = product.Image;
    document.querySelector("#productImage").alt = product.Name;
    document.querySelector("#productDescription").textContent = product.DescriptionHtmlSimple;
    document.querySelector("#productPrice").textContent = `$${product.FinalPrice}`;
}

function getCartItems() {
    return JSON.parse(localStorage.getItem("woh-cart")) || [];
}

function addProductToCart(product) {
    // Using function above to pull out of local storage
    const cartItems = getCartItems();

    // Are there existing products?
    const existingProduct = cartItems.find((item) => item.Id === product.Id);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        product.quantity = 1;
        cartItems.push(product);
    }
    
    localStorage.setItem("woh-cart", JSON.stringify(cartItems));
}

document.addEventListener("DOMContentLoaded", async () => {
    loadHeaderFooter();

    const productId = getParam("product");
    const product = await findProductById(productId);

    renderProductDetails(product);

    const addToCartButton = document.querySelector("#addToCart");

    addToCartButton.addEventListener("click", () => {
        addProductToCart(product);

        addToCartButton.textContent = "Product Added!";
        addToCartButton.style.backgroundColor = "green";
        addToCartButton.style.color = "white";

        setTimeout(() => {
            addToCartButton.textContent = "Add to Cart";
            addToCartButton.style.backgroundColor = "";
            addToCartButton.style.color = "";
        }, 1500);
    })
});