import { loadHeaderFooter } from "./utils.mjs";
import { getProducts } from "./externalServices.mjs";

function productCardTemplate(product) {
    return `
        <article class="product-card">
        <a href="./productDetail.html?product=${product.Id}">
            <img src="${product.Image}" alt="${product.Name}">
            <h2 class="product-name-h2">${product.Name}</h2>
            <p>$${product.FinalPrice}</p>
        </a>
        </article>
    `;
}

function renderProductList(products) {
    const productListElement = document.querySelector("#product-list");
    productListElement.innerHTML = products.map(productCardTemplate).join("");
}

document.addEventListener("DOMContentLoaded", async () => {
    loadHeaderFooter();

    const products = await getProducts();
    renderProductList(products);
});