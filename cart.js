let container_card = document.querySelector(".container-card");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
  container_card.innerHTML = `<p class="empty-cart-message">Кошик порожній</p>`;
} else {
  cart.forEach(card => {
    let cardHTML = `
      <div class="cart-card">
        <img src="${card.img}" alt="${card.title}" class="cart-card-img" />
        <div class="cart-card-info">
          <h2 class="cart-card-title">${card.title}</h2>
          <p class="cart-card-desc">${card.desc}</p>
          <p class="cart-card-price">${card.price}</p>
        </div>
      </div>
    `;
    container_card.insertAdjacentHTML("beforeend", cardHTML);
  });
}
document.querySelector(".clear-cart-btn").addEventListener("click", () => {
  localStorage.removeItem("cart");
  location.reload(); 
});

