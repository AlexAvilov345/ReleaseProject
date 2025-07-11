let cart_counterHTML = document.querySelector(".cart-counter")
let cart_counter = localStorage.getItem("counter") || 0;
cart_counterHTML.innerHTML = cart_counter

function goToCart() {
  window.location.href = "cart.html";
}

window.addEventListener("click", (event) => {
  if (event.target.closest("[data-cart]")) {
    cart_counter++;
    cart_counterHTML.innerHTML = cart_counter;
    localStorage.setItem("counter", cart_counter);

    let btn_bye = event.target.closest("[data-cart]");

    let card = btn_bye.closest(".product-card") || btn_bye.closest(".product-card2");

    let titleEl = card.querySelector(".product-name") || card.querySelector(".product-name2") || card.querySelector("p");
    let imgEl = card.querySelector(".product-img") || card.querySelector(".product-img2") || card.querySelector("img");
    let descEl = card.querySelector(".product-desc") || card.querySelector(".product-desc2") || card.querySelectorAll("p")[1];
    let priceEl = card.querySelector(".product-price") || card.querySelector(".product-desc2") || card.querySelectorAll("p")[2];

    let product_info = {
      title: titleEl?.innerText || "No name",
      img: imgEl?.getAttribute("src") || "",
      desc: descEl?.innerText || "",
      price: priceEl?.innerText || "",
      id: card.querySelector(".id")?.innerText || ""
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product_info);
    localStorage.setItem("cart", JSON.stringify(cart));
  }
});

 const brandFilter = document.getElementById('brandFilter');
  const priceFilter = document.getElementById('priceFilter');
  const productCards = document.querySelectorAll('.product-card');

  function applyFilters() {
   const selectedBrand = brandFilter.value.toLowerCase().replace(/\s/g, '');;
    const selectedPrice = priceFilter.value;

    productCards.forEach(card => {
      const name = card.querySelector('.product-name').textContent.toLowerCase().replace(/\s/g, '');
      const priceText = card.querySelector('.product-price').textContent;
      const price = parseFloat(priceText.replace('$', ''));

      let matchesBrand = false;
      if (selectedBrand === 'all') {
        matchesBrand = true;
      } else if (name.includes(selectedBrand)) {
        matchesBrand = true;
      }

      let matchesPrice = false;
      if (selectedPrice === 'all') {
        matchesPrice = true;
      } else if (selectedPrice === 'low' && price < 70) {
        matchesPrice = true;
      } else if (selectedPrice === 'medium' && price >= 70 && price <= 100) {
        matchesPrice = true;
      } else if (selectedPrice === 'high' && price > 100) {
        matchesPrice = true;
      }

      if (matchesBrand && matchesPrice) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  brandFilter.addEventListener('change', applyFilters);
  priceFilter.addEventListener('change', applyFilters);
  


  function goToCat() {
  window.location.href = "catalog.html";
}






  
  




  
  

