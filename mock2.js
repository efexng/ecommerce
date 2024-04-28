// Get the modal element
var modal = document.getElementById("myModal");

// Get the span element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get the loading spinner element
var loadingSpinner = document.getElementById("loadingSpinner");

// Get the accepted cards2 section
var acceptedCards2 = document.querySelector(".accepted-cards2");

// Get the form inputs
var cardNumberInput = document.getElementById("cardNumber");
var cardNameInput = document.getElementById("cardName");
var expirationMonthSelect = document.querySelector("[name='expirationMonth']");
var expirationYearSelect = document.querySelector("[name='expirationYear']");
var securityCodeInput = document.getElementById("securityCode");
var defaultPaymentCheckbox = document.getElementById("defaultPayment");

// Get the "Add your card" and "Cancel" buttons
var addCardBtn = document.querySelector(".delivery-cost2 button:last-child");
var cancelBtn = document.querySelector(".btn");

// When the user clicks on the "Add a Credit or Debit Card" link, open the modal after showing the loading spinner
document.querySelector(".accepted-cards span").addEventListener("click", function () {
  // Display the loading spinner for 5 seconds (5000 milliseconds)
  loadingSpinner.style.display = "block";
  setTimeout(function () {
    loadingSpinner.style.display = "none";
    modal.style.display = "block"; // Show the modal after 5 seconds
  }, 1000); // 1000 milliseconds = 1 second
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};




// Handle "Cancel" button click
cancelBtn.addEventListener("click", function () {
  modal.style.display = "none"; // Close the modal
});



document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const quantity = parseInt(urlParams.get('quantity'));
  const price = parseFloat(urlParams.get('price'));
  const deliveryCost = parseFloat(document.querySelector('.deliverycost').textContent.replace('$', ''));

  // Calculate the total including item price and delivery cost
  const total = price + deliveryCost;


  // Update the HTML elements with the retrieved values
  const deliveryInt = document.querySelector(".delivery-int");
  const orderSump = document.querySelector(".order-sump");
  const orderSump1 = document.querySelector(".order-sump1");


  if (quantity > 1) {
      deliveryInt.textContent = `${quantity} Items`;
  } else {
      deliveryInt.textContent = `${quantity} Item`;
  }

  orderSump.textContent = `$${price.toFixed(2)}`;
  orderSump1.textContent = `$${total.toFixed(2)}`;
});








document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const quantity = parseInt(urlParams.get('quantity'));

  // Display the retrieved itemCount in the HTML
  const itemCountElement = document.querySelector('.delivery-int'); // Assuming you want to display it in an element with class "delivery-int"
  if (itemCountElement) {
    itemCountElement.textContent = quantity > 1 ? quantity + ' items' : quantity + ' item';
  }

  // Get the "Buy now" button
  const buyNowBtn = document.querySelector('.buynowbtn');

  // Set the initial state of the Buy now button
  let cardAdded = false; // Flag to track if a card is added

  // Function to enable/disable Buy now button based on cardAdded flag
  function toggleBuyNowButton() {
    if (cardAdded) {
      buyNowBtn.removeAttribute('disabled');
      buyNowBtn.style.opacity = "1";
      buyNowBtn.style.cursor = "pointer";
    } else {
      buyNowBtn.setAttribute('disabled', 'disabled');
      buyNowBtn.style.opacity = "0.5";
      buyNowBtn.style.cursor = "default";
    }
  }
  

  // Add an event listener to the "Buy now" button
  buyNowBtn.addEventListener('click', function () {
    // Show the loading spinner for 3 seconds (3000 milliseconds)
    const loadingSpinner = document.getElementById("loadingSpinner");
    loadingSpinner.style.display = "block"; // Display the loading spinner
  
    // Delay the redirection to order.html until after 3 seconds
    setTimeout(function () {
      // Redirect to order.html with itemCount as a query parameter
      window.location.href = `order.html?itemCount=${quantity}`;
    }, 3000); // 3000 milliseconds = 3 seconds
  });
  

  // Handle "Add your card" button click
  addCardBtn.addEventListener("click", function () {
    // Get the form inputs
    const cardNumber = cardNumberInput.value;

    // Show the loading spinner for 5 seconds
    loadingSpinner.style.display = "block";
    setTimeout(function () {
      loadingSpinner.style.display = "none";
      // Update the accepted cards section with the entered card information
      const cardHtml = `<div>
                           <input type="radio" name="" id="" checked>
                           <img src="./assets/card-logo-compact._CB478583243_.gif" width="30" alt="">
                           <h3><span>Your Card Ending</span> ${cardNumber.slice(-4)}</h3>
                           <button class="delete-btn">Delete</button> <!-- Added Delete button -->
                       </div>`;
      acceptedCards2.innerHTML = cardHtml;
      modal.style.display = "none"; // Close the modal after updating

      // Show the updated accepted cards section in .accepted-cards2
      acceptedCards2.style.display = "block"; // Show the .accepted-cards2 section

      // Clear the input fields
      cardNumberInput.value = "";
      cardNameInput.value = "";
      expirationMonthSelect.value = "";
      expirationYearSelect.value = "";
      securityCodeInput.value = "";
      defaultPaymentCheckbox.checked = false;

      // Set cardAdded flag to true and enable Buy now button
      cardAdded = true;
      toggleBuyNowButton();

      // Add event listener to the newly added delete button
      const deleteBtn = acceptedCards2.querySelector(".delete-btn");
      deleteBtn.addEventListener("click", function () {
        // Handle delete button click here
        // For example, you can remove the card from the UI
        acceptedCards2.innerHTML = ""; // Clear the accepted cards section
        acceptedCards2.style.display = "none"; // Hide the .accepted-cards2 section
        cardAdded = false; // Set cardAdded flag to false
        toggleBuyNowButton(); // Disable Buy now button
      });
    }, 3000); // 5000 milliseconds = 5 seconds

    modal.style.display = "none"; // Close the modal immediately after clicking "Add your card"
  });

  // Disable Buy now button initially
  toggleBuyNowButton();
});






