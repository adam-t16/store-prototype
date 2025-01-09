var cart = JSON.parse(localStorage.getItem('cart')) || [];

function updateCartCount() {
    var cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cart.length;
}

function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

window.onload = function() {
    var addToCartButtons = document.querySelectorAll('.product-card button');

    addToCartButtons.forEach(function(button, index) {
        button.addEventListener('click', function() {
            var productCard = button.parentElement;
            var productImage = productCard.querySelector('img').src;
            var productName = productCard.querySelector('h3').textContent;
            var productPrice = parseFloat(productCard.querySelector('p').textContent.replace('Q', ''));
            if (!isNaN(productPrice)) {
                addToCart({ index, productImage, productName, productPrice });
            } else {
                console.error('Product price is not a number:', productCard.querySelector('p').textContent);
            }
        });
    });

    updateCartCount();
};