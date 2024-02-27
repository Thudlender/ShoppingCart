const cart = {};

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        const price = parseFloat(button.getAttribute('data-price'));
        if (!cart[productId]) {
            cart[productId] = { quantity: 1, price: price };
        } else {
            cart[productId].quantity++;
        }
        updateCartDisplay();
    });
});

function updateCartDisplay() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';

    let totalPrice = 0;
    for (const productId in cart) {
        const item = cart[productId];
        const itemTotalPrice = item.quantity * item.price;
        totalPrice += itemTotalPrice;
        const productElement = document.createElement('p');
        productElement.textContent = `Product ${productId}: ${item.quantity} x $${item.price} = $${itemTotalPrice}`;
        cartElement.appendChild(productElement);
    }

    if (Object.keys(cart).length === 0) {
        cartElement.innerHTML = '<p>No items in cart.</p>';
    } else {
        const totalPriceElement = document.createElement('p');
        totalPriceElement.textContent = `Total Price: $${totalPrice}`;
        cartElement.appendChild(totalPriceElement);
    }
}