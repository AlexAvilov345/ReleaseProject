function goToCart() {
  window.location.href = "cart.html";
}
window.addEventListener("click", (event) => {
  if (event.target.closest("[data-cart]")) {
    let btn_bye = event.target.closest("[data-cart]");
    let card = btn_bye.closest(".product-card");

    let product_info = {
      title: card.querySelector(".product-name").innerText,
      img: card.querySelector(".product-img").getAttribute("src"),
      desc: card.querySelector(".product-desc").innerText,
      price: card.querySelector(".product-price").innerText
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product_info);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
});



  
  