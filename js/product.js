document.querySelectorAll(".product-shop-button").forEach(button => {
  button.addEventListener("click", function() {
    console.log("Buy now clicked!");
    // Show overlay, add to cart, etc.
  });
});