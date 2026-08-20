const shopping_cart_icon = document.getElementById("cart-icon");
const cart = document.querySelector(".cart");
const close_cart = document.getElementById("close");

function closeCart() {
    cart.style.display = "none";
}
function openCart() {
    cart.style.display = "block";
}

const addToCartBtn = document.querySelectorAll(".addtocart");
addToCartBtn.forEach(button => {
  button.addEventListener("click", (event) => {
    const cartbox = event.target.closest(".content");
    addToCart(cartbox);
  }); 
});

const cart_content = document.querySelector(".cartCont");
const addToCart = cartbox => {
    const productTitle = cartbox.querySelector(".package-title").textContent;
    const productPrice = cartbox.querySelector(".package-price").textContent;

    

    const cart_shop_box = document.createElement("div");
    cart_shop_box.classList.add("cart-container");
    cart_container = `<div class="bottom-border"></div>
              <div class="product">
                <h3 class="cart-title">${productTitle}<span class="product-price">${productPrice}</span></h3>
             <i class="fa-solid fa-trash-can"></i>
             `;

    cart_shop_box.innerHTML = cart_container;

    cart_content.append(cart_shop_box);

    cart_shop_box.querySelector(".fa-trash-can").addEventListener("click", function() {
        cart_shop_box.remove();

        total_price();
    });

    total_price();

};

function total_price() {
    const totalPriceElement = document.querySelector(".total-price");
    const cartBoxes = cart_content.querySelectorAll(".cart-container");
    let total = 0;
    cartBoxes.forEach(cartbox => {
        const cartPrice = cartbox.querySelector(".product-price");
        const price = cartPrice.textContent.replace("$", "");
        total += Number(price);
    })
    totalPriceElement.textContent = `$${total}`;
}

const buybtn = document.querySelector(".buy-btn");
buybtn.addEventListener("click", function() {
    const cartBoxes = cart_content.querySelectorAll(".cart-container");
    if (cartBoxes.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    cartBoxes.forEach(cartBox => cartBox.remove());

    cart_count = 0;

    total_price();
    alert("Thank you for your purchase!");
    
})
