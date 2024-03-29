let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    infoSubmitForm.classList.remove('active');
    navbar.classList.remove('active');
}
let infoSubmitForm = document.querySelector('.info-form');

document.querySelector('#checkout-btn').onclick = () =>{
    shoppingCart.classList.remove('active');
    infoSubmitForm.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let orderMassage = document.querySelector('.order-massage');

document.querySelector('#form-btn').onclick = () =>{
    shoppingCart.classList.remove('active');
    infoSubmitForm.classList.remove('active');
    searchForm.classList.remove('active');
    orderMassage.classList.toggle("active");
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}


let icon = document.querySelector('.left-icon');

document.querySelector('#back-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    signupForm.classList.remove('active');
    forgotForm.classList.remove('active');
}


let icon1 = document.querySelector('.left-icon1');

document.querySelector('#back-btn1').onclick = () =>{
    loginForm.classList.toggle('active');
    forgotForm.classList.remove('active');
}

let cancel = document.querySelector('.cancel');

document.querySelector('#cancel').onclick = () =>{
    loginForm.classList.remove('active');
    infoSubmitForm.classList.remove('active');
    orderMassage.classList.remove('active');
}

let signupForm = document.querySelector('.signup-form');

document.querySelector('#signup-btn').onclick = () =>{
    loginForm.classList.remove('active');
    signupForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let forgotForm = document.querySelector('.forgot-form');

document.querySelector('#forgot-btn').onclick = () =>{
    loginForm.classList.remove('active');
    forgotForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
    orderMassage.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
});

document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const shortMessage = this.parentNode.querySelector('.short-message');
            const fullMessage = this.parentNode.querySelector('.full-message');

            if (shortMessage.style.display === 'none') {
                shortMessage.style.display = 'block';
                fullMessage.style.display = 'none';
                this.textContent = 'read more';
            } else {
                shortMessage.style.display = 'none';
                fullMessage.style.display = 'block';
                this.textContent = 'read less';
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const shoppingCart = document.querySelector('.shopping-cart');

    // Event delegation for deleting items from cart
    shoppingCart.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-item')) {
            const item = event.target.closest('.box');
            item.remove();
            updateTotal();
        }
    });

    // Function to update total price
    // function updateTotal() {
    //     const prices = Array.from(shoppingCart.querySelectorAll('.price')).map(price => parseFloat(price.textContent.replace(/[^\d.]/g, '')));
    //     const totalPrice = prices.reduce((total, price) => total + price, 0);
    //     shoppingCart.querySelector('.total').textContent = `total : $${totalPrice.toFixed(2)}/-`;
    // }
});


document.addEventListener('DOMContentLoaded', function() {
    const shoppingCart = document.querySelector('.shopping-cart');

    // Event delegation for deleting items from cart
    shoppingCart.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-item')) {
            const item = event.target.closest('.box');
            item.remove();
            updateTotal();
        } else if (event.target.classList.contains('increase-btn')) {
            const quantityElement = event.target.nextElementSibling.querySelector('.quantity-value');
            const quantity = parseInt(quantityElement.textContent);
            quantityElement.textContent = quantity + 1;
            updateTotal();
        } else if (event.target.classList.contains('decrease-btn')) {
            const quantityElement = event.target.previousElementSibling.querySelector('.quantity-value');
            const quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantityElement.textContent = quantity - 1;
                updateTotal();
            }
        }
    });

    // Function to update total price
    function updateTotal() {
        const prices = Array.from(shoppingCart.querySelectorAll('.price')).map(price => parseFloat(price.textContent.replace(/[^\d.]/g, '')));
        const quantities = Array.from(shoppingCart.querySelectorAll('.quantity-value')).map(quantity => parseInt(quantity.textContent));
        const totalPrices = prices.map((price, index) => price * quantities[index]);
        const totalPrice = totalPrices.reduce((total, price) => total + price, 0);
        shoppingCart.querySelector('.total').textContent = `total : ${totalPrice.toFixed(2)}/-`;
    }
});



document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const shoppingCart = document.querySelector('.shopping-cart');
    const totalAmountElement = shoppingCart.querySelector('.total-amount');
    const checkoutButton = shoppingCart.querySelector('.checkout-btn');
    const selectedItemName = document.getElementById('selected-item-name');
    const selectedItemPrice = document.getElementById('selected-item-price');
    const selectedItemQuantity = document.getElementById('selected-item-quantity');
    const orderForm = document.getElementById('order-form');

    let totalPrice = 0.00;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const item = event.target.closest('.box');
            const priceString = item.querySelector('.price').textContent;
            const price = parseFloat(priceString.match(/\d+\.\d+/)); // Extracting price from the text
            totalPrice += price;
            alert("Product is added into cart");
            const newItem = createCartItem(item);
            shoppingCart.insertBefore(newItem, shoppingCart.lastElementChild);
            updateTotal(); // Update total when an item is added to the cart
        });
    });

    function createCartItem(item) {
        const imageSrc = item.querySelector('img').src;
        const productName = item.querySelector('h3').textContent;
        const price = item.querySelector('.price').textContent;

        const newItem = document.createElement('div');
        newItem.classList.add('box');
        newItem.innerHTML = `
            <i class="fas fa-trash delete-item"></i>
            <img src="${imageSrc}" alt="">
            <div class="content">
                <h3>${productName}</h3>
                <span class="price">${price}</span>
                <div class="quantity-controls">
                    <button class="quantity-btn increase-btn">+</button>
                    <span class="quantity">Qty: <span class="quantity-value">1</span></span>
                    <button class="quantity-btn decrease-btn">-</button>
                </div>
            </div>
        `;
        return newItem;
    }

    function updateTotal() {
        const prices = Array.from(shoppingCart.querySelectorAll('.price')).map(price => parseFloat(price.textContent.replace(/[^\d.]/g, '')));
        const quantities = Array.from(shoppingCart.querySelectorAll('.quantity-value')).map(quantity => parseInt(quantity.textContent));
        const totalPrices = prices.map((price, index) => price * quantities[index]);
        const totalPrice = totalPrices.reduce((total, price) => total + price, 0);
        totalAmountElement.textContent = totalPrice.toFixed(2);
    }

    checkoutButton.addEventListener('click', function(event) {
        // Clear previous items
        selectedItemName.innerHTML = '';
        selectedItemPrice.innerHTML = '';
        selectedItemQuantity.innerHTML = '';

        // Convert total price into input tag
        const totalPriceInput = document.createElement('input');
        totalPriceInput.setAttribute('type', 'text');
        totalPriceInput.setAttribute('name', 'data[TOTAL]');
        totalPriceInput.setAttribute('value', totalAmountElement.textContent);
        selectedItemPrice.appendChild(totalPriceInput);



        // Transfer information to order form
        const cartItems = Array.from(shoppingCart.querySelectorAll('.box')).map(item => {
            return {
                name: item.querySelector('h3').textContent,
                price: item.querySelector('.price').textContent,
                quantity: item.querySelector('.quantity-value').textContent
            };
        });

        const totalItemsSelected = cartItems.length;

        if (totalItemsSelected > 0) {
            

            // Populate order form with items
            cartItems.forEach((item, index) => { // Use the index parameter to manually name attributes

            const itemContainer = document.createElement('div');
            itemContainer.classList.add('item-container');

            const itemName = document.createElement('input');
            itemName.setAttribute('type', 'text');
            itemName.setAttribute('name', `data[itemname${index + 1}]`); // Set name attribute dynamically
            itemName.setAttribute('value', item.name);
            // itemName.setAttribute('disabled', 'true'); // Add disabled attribute
            event.preventDefault();
            itemContainer.appendChild(itemName);

            const itemPrice = document.createElement('input');
            itemPrice.setAttribute('type', 'text');
            itemPrice.setAttribute('name', `data[itemprice${index + 1}]`); // Set name attribute dynamically
            itemPrice.setAttribute('value', item.price);
            // itemPrice.setAttribute('disabled', 'true'); // Add disabled attribute
            itemContainer.appendChild(itemPrice);

            const itemQuantity = document.createElement('input');
            itemQuantity.setAttribute('type', 'text');
            itemQuantity.setAttribute('name', `data[itemqty${index + 1}]`); // Set name attribute dynamically
            itemQuantity.setAttribute('value', item.quantity);
            // itemQuantity.setAttribute('disabled', 'true'); // Add disabled attribute
            itemContainer.appendChild(itemQuantity);

            const divider = document.createElement('hr'); // Add a divider between items
            selectedItemPrice.appendChild(divider.cloneNode()); // Clone the divider to maintain separate dividers for each section
            selectedItemPrice.appendChild(itemContainer.cloneNode(true)); // Clone the item container to maintain separate dividers for each section
        });
            
            // Show the order form
            orderForm.style.display = 'block';
        } else {
            // Show an alert or message indicating that the cart is empty
            alert('Your cart is empty!');
        }
    });

    orderForm.addEventListener('submit', function(event) {
        // Prevent the form from submitting
        event.preventDefault();
        // Handle form submission logic here
        // You can access form fields using event.target.elements
        // For example: const name = event.target.elements.name.value;
    });
});





document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    // Get username and password from form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Fetch data from Google Sheets
    var response = await fetch('https://sheetdb.io/api/v1/0xzoluvui8zkc/search?username=' + encodeURIComponent(username) + '&password=' + encodeURIComponent(password));
    var data = await response.json();
    
    if (data.length > 0) {
        // Redirect to dashboard or another page
        window.location.href = 'index.html';
    } else {
        // Display error message
       // document.getElementById('error-message').style.display = 'block';
        //document.getElementById('username').style.display = 'block';
    }
});

