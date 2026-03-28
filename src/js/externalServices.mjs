async function convertToJson(res) {
    const data = await res.json().catch(() => null);
    if (res.ok) return data;

    const message = data?.Message || data?.message || `HTTP ${res.status}`;
    throw { name: "servicesError", message };
}

export async function getProducts() {
    const response = await fetch("/json/products.json");
    return await convertToJson(response);
}

export async function findProductById(id) {
    const products = await getProducts();
    return products.find((item) => item.Id === id);
}