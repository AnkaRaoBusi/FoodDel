let cart = [];
let totalPrice = 0;

function showLogin() {
    document.getElementById('login').style.display = "block";
}

function toggleForm() {
    let loginForm = document.getElementById('login-form');
    let registerForm = document.getElementById('register-form');
    let title = document.getElementById('login-title');

    if (loginForm.classList.contains('hidden')) {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        title.textContent = "Login";
    } else {
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
        title.textContent = "Register";
    }
}

function slideLeft(category) {
    let carousel = document.getElementById(category);
    carousel.scrollBy({ left: -200, behavior: "smooth" });
}

function slideRight(category) {
    let carousel = document.getElementById(category);
    carousel.scrollBy({ left: 200, behavior: "smooth" });
}

function addToCart(itemName, price) {
    let item = cart.find(i => i.name === itemName);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ name: itemName, price: price, quantity: 1 });
    }

    totalPrice += price;
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    let cartCount = document.getElementById("cart-count");
    let totalDisplay = document.getElementById("total-price");

    cartList.innerHTML = "";
    cart.forEach(item => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `${item.name} - $${item.price} x ${item.quantity}`;
        cartList.appendChild(listItem);
    });

    cartCount.innerText = cart.length;
    totalDisplay.innerText = totalPrice.toFixed(2);
}
// Show/Hide Login Form
function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
}

function toggleForm() {
    const title = document.getElementById('login-title');
    const loginBtn = document.querySelector('.login-container button');

    if (title.textContent === "Login") {
        title.textContent = "Register";
        loginBtn.textContent = "Sign Up";
    } else {
        title.textContent = "Login";
        loginBtn.textContent = "Login";
    }
}

// Show Address Form on 'Pay Now' Click
function showAddressForm() {
    document.getElementById('addressForm').style.display = 'block';
}

// Add to Cart Button Click
const cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart!');
    });
});

// Payment Submission
document.querySelector('.submit-btn').addEventListener('click', () => {
    alert('Your order has been placed successfully!');
});
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

function showLogin() {
    document.getElementById("loginForm").style.display = "block";
}

function login() {
    alert("Login Successful!");
}

function showAddressForm() {
    const addressForm = document.getElementById("addressForm");
    addressForm.style.display = "block";
}

document.querySelectorAll('.add-cart').forEach(button => {
    button.addEventListener('click', () => {
        alert("Item added to cart!");
    });
});
