export async function renderWithTemplate (
    templateFn, 
    parentElement,
    data,
    callback,
    position = "afterbegin",
    clear = true
) {
    if (clear) {
        parentElement.innerHTML = "";
    }
    const htmlString = await templateFn(data);
    parentElement.insertAdjacentHTML(position, htmlString);
    if (callback) {
        callback(data);
    }

}

function loadTemplate(path) {
  // wait what?  we are returning a new function? this is called currying and can be very helpful.
  return async function () {
    const res = await fetch(path);
    if (res.ok) {
      const html = await res.text();
      return html;
    } else {
      console.error(`Failed to load template from ${path}: ${res.status}`);
      return "";
    }
  };
}

export function loadHeaderFooter (){
    const headerTemplateFn = loadTemplate("/partials/header.html");
    const footerTemplateFn = loadTemplate("/partials/footer.html");
    const headerEl = document.querySelector("#main-header");
    const footerEl = document.querySelector("#main-footer");
    renderWithTemplate(headerTemplateFn, headerEl, null);
    renderWithTemplate(footerTemplateFn, footerEl, null);
}