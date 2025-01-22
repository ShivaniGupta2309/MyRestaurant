const cartItems = [];
const cartItemsList = document.getElementById("cart-items");
const totalAmountElement = document.getElementById("total-amount");

document.querySelectorAll(".add-item").forEach(button => {
    button.addEventListener("click", () => {
        const itemName = button.getAttribute("data-name");
        const itemPrice = parseFloat(button.getAttribute("data-price"));
        
        cartItems.push({ name: itemName, price: itemPrice });
        updateCart();
    });
});

function updateCart() {
    cartItemsList.innerHTML = "";
    let totalAmount = 0;

    cartItems.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(listItem);
        totalAmount += item.price;
    });

    totalAmountElement.textContent = totalAmount.toFixed(2);
}

document.getElementById("checkout").addEventListener("click", () => {
    if (cartItems.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert(`Your total is $${totalAmountElement.textContent}. Thank you for your order!`);
        cartItems.length = 0;
        updateCart();
    }
});
