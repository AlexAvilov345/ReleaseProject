let cart_counterHTML = document.querySelector(".cart-counter")
let cart_counter = localStorage.getItem("counter") || 0;
cart_counterHTML.innerHTML = cart_counter

function goToCart() {
  window.location.href = "cart.html";
}
window.addEventListener("click", (event) => {
  if (event.target.closest("[data-cart]")) {
    cart_counter++
      cart_counterHTML.innerHTML = cart_counter
      localStorage.setItem("counter", cart_counter)
    let btn_bye = event.target.closest("[data-cart]");
    let card = btn_bye.closest(".product-card");

    let product_info = {
      title: card.querySelector(".product-name").innerText,
      img: card.querySelector(".product-img").getAttribute("src"),
      desc: card.querySelector(".product-desc").innerText,
      price: card.querySelector(".product-price").innerText,
      id: card.querySelector(".id").innerText
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product_info);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
});
function goToCat() {
  window.location.href = "catalog.html";
}

