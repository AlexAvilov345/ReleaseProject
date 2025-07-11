let container_card = document.querySelector(".container-card");

let counter = 0;
let cart = JSON.parse(localStorage.getItem("cart")) || [];
cart_counter = localStorage.getItem("counter") || 0;
cart_counterHTML = document.querySelector(".cart-counter")

if (cart.length === 0) {
  container_card.innerHTML = `<p class="empty-cart-message">Кошик порожній</p>`;
} else {
  cart.forEach(card => {
    let cardHTML = `
    <div class="cart-container">
      <div class="cart-card">
      <div class="card mb-3">
        <img src="${card.img}" alt="${card.title}" class="cart-card-img" />
        <div class="cart-card-info">
          <h2 class="cart-card-title">${card.title}</h2>
          <p class="cart-card-desc">${card.desc}</p>
          <p class="cart-card-price">${card.price}</p>
           <p class="card-text"><small class="text-muted" data-price = "${card.price}">${card.price}</small></p>
                 <div class="input-group">
        <input type="number" class="form-control" placeholder="Amount" min="1"value="1">
          <button class="btn-btn-outline-secondary" type="button" data-action="minus">-</button>
          <button class="btn-btn-outline-secondary" type="button" data-action="plus">+</button>    
          </div>
          </div>
        </div>
      </div>
      </div>
    `;
    container_card.insertAdjacentHTML("beforeend", cardHTML);
  });
}
document.querySelectorAll("[data-action='minus']").forEach(btn => {
  btn.addEventListener("click", ()=>{
   const input = btn.closest(".input-group").querySelector(".form-control");
    let currentValue = parseInt(input.value);
    

    if(currentValue > 1){
      let newValue = currentValue - 1
      input.value = newValue;
          const priceElement = btn.closest(".card").querySelector(".text-muted");
    const unitPrice = parseFloat(priceElement.dataset.price);
    priceElement.innerHTML -= unitPrice


      cart_counter--
    localStorage.setItem("counter", cart_counter)
    cart_counterHTML.innerHTML = cart_counter
    
    }

  })
})

document.querySelectorAll("[data-action='plus']").forEach(btn => {
  btn.addEventListener("click", ()=>{
   const input = btn.closest(".input-group").querySelector(".form-control");
    let newValue = parseInt(input.value) + 1;
    localStorage.setItem("cart-counter", newValue)
    input.value = localStorage.getItem("cart-counter");

    const priceElement = btn.closest(".card").querySelector(".text-muted");
    const unitPrice = parseFloat(priceElement.dataset.price);
    priceElement.innerHTML = unitPrice * newValue

    cart_counter++
    localStorage.setItem("counter", cart_counter)
    cart_counterHTML.innerHTML = cart_counter



  })
})
document.querySelector(".clear-cart-btn").addEventListener("click", () => {
  localStorage.removeItem("cart");
  location.reload(); 
});





document.addEventListener("DOMContentLoaded", () => {
  const container_card = document.querySelector(".container-card");
  const cart_counterHTML = document.querySelector(".cart-counter");
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length > 0) {
    const buyBtn = document.createElement("button");
    buyBtn.textContent = "Купити";
    buyBtn.classList.add("buy-btn");
    container_card.appendChild(buyBtn);

    const modal = document.getElementById("thanksModal");
    const closeModal = modal.querySelector(".modal-close");

    buyBtn.addEventListener("click", () => {
      modal.classList.remove("hidden");
    });

    closeModal.addEventListener("click", () => {
      modal.classList.add("hidden");

      localStorage.removeItem("cart");
      localStorage.removeItem("counter");
      container_card.innerHTML = `<p class="empty-cart-message">Кошик порожній</p>`;
      if (cart_counterHTML) cart_counterHTML.textContent = 0;
    });
  }
});










