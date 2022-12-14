"use strict";
// show cart

(function () {
  const cartInfo = document.getElementById("cart-info");
  const cart = document.getElementById("cart");

  cartInfo.addEventListener("click", function () {
    cart.classList.toggle("show-cart");
  });
})();

// add items to the cart

(function () {
  const cartBtn = document.querySelectorAll(".store-item-icon");

  cartBtn.forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      if (event.target.parentElement.classList.contains("store-item-icon")) {
        let fullPath = event.target.parentElement.previousElementSibling.src;
        let pos = fullPath.indexOf("img") + 3;
        let partPath = fullPath.slice(pos);

        const item = {};
        item.img = `img-cart${partPath}`;
        let price =
          event.target.parentElement.parentElement.nextElementSibling
            .firstElementChild.lastElementChild.lastElementChild.innerText;
        item.price = price;

        let name =
          event.target.parentElement.parentElement.nextElementSibling
            .firstElementChild.firstElementChild.innerText;
        item.name = name;

        const cart = document.getElementById("cart");
        const total = document.querySelector(".cart-total-container");
        const cartItem = document.createElement("div");
        cartItem.classList.add(
          "cart-item",
          "d-flex",
          "justify-content-between",
          "text-capitalize",
          "my-3"
        );
        cartItem.innerHTML = `
        <img src="${item.img}" class="img-fluid rounded-circle" id="item-img" alt="">
        <div class="item-text">

          <p id="cart-item-title" class="font-weight-bold mb-0">${item.name}</p>
          <span>$</span>
          <span id="cart-item-price" class="cart-item-price">${item.price}</span>
        </div>
        <a href="#" id="cart-item-remove" class="cart-item-remove">
          <i class="fas fa-trash"></i>
        </a>`;
        cart.insertBefore(cartItem, total);
        // alert("item added to the cart");
        showTotals();
      }
    });
  });

  function showTotals() {
    let cartItemsPrices = document.querySelectorAll(".cart-item-price");
    let total = 0;
    let total_items = 0;
    cartItemsPrices.forEach((i) => {
      total += parseFloat(i.innerHTML);
      total_items += 1;
    });

    let cartTotal = total.toFixed(2);
    const cartDisplayTotalBottom = document.getElementById("cart-total");
    cartDisplayTotalBottom.innerText = cartTotal;
    const cartDisplayTotalTop = document.getElementById("item-total");
    cartDisplayTotalTop.innerText = cartTotal;

    const cartDisplayItemsNo = document.getElementById("item-count");
    cartDisplayItemsNo.innerText = total_items;
  }
})();

/*
<div class="cart-item d-flex justify-content-between text-capitalize my-3">
            <img src="---------item.img---------" class="img-fluid rounded-circle" id="item-img" alt="">
            <div class="item-text">

              <p id="cart-item-title" class="font-weight-bold mb-0">---------item.name-------</p>
              <span>$</span>
              <span id="cart-item-price" class="cart-item-price">-------utem.price--------</span>
            </div>
            <a href="#" id="cart-item-remove" class="cart-item-remove">
              <i class="fas fa-trash"></i>
            </a>
</div>
          */
