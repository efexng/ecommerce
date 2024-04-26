const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control_prev');
const next_btn = document.querySelector('.control_next');


let n = 0;

function chnageSlider() {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}

chnageSlider();

prev_btn.addEventListener('click', (e)=> {
    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1;
    }
    chnageSlider();
});

next_btn.addEventListener('click', (e)=> {
    if (n < imgs.length - 1) {
        n++;
    } else {
        n = 0;
    }
    chnageSlider();
});






function calculateCartCount(cartItems) {
    let totalCount = 0;
    cartItems.forEach(item => {
        totalCount += item.quantity;
    });
    return totalCount;
}

function updateCartCount(count) {
    const cartCountElement = document.getElementById("cartcount");
    if (cartCountElement) {
        let displayCount = count.toString();

        if (count > 99) {
            displayCount = "99+";
            cartCountElement.classList.add("smaller");
            cartCountElement.classList.remove("small", "smallest");
        } else if (count > 10) {
            cartCountElement.classList.add("small");
            cartCountElement.classList.remove("smaller", "smallest");
        } else if (count === 10) { // Fixed the equality check
            cartCountElement.classList.add("smallest");
            cartCountElement.classList.remove("small", "smaller");
        } else if (count < 10) {
            cartCountElement.classList.remove("small", "smaller", "smallest");
        }

        cartCountElement.textContent = displayCount;
    }
}


// Retrieve cart items count from localStorage and update cart count on page load
const storedCartItems = localStorage.getItem("cartItems");
            if (storedCartItems) {
                const cartItems = JSON.parse(storedCartItems);
                updateCartCount(calculateCartCount(cartItems)); // Update cart count based on retrieved cart items
            }
            const addToCartBtn = document.getElementById("addtocart");
            const quantitySelect = document.querySelector(".product-quantity");