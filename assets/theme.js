  // Get modal and close button
var modal = document.getElementById("change-options-modal");
var span = document.getElementsByClassName("close")[0];

// Event listener for "Change Options" buttons
document.querySelectorAll('.change-options').forEach(function(button) {
  button.addEventListener('click', function() {
    console.log('hello');
    var itemId = button.getAttribute("data-item-id"); // Get the item id for the clicked cart item
    openChangeOptionsModal(itemId); // Open the modal for that item
  });
});

// Function to open the modal and load the variant options dynamically
function openChangeOptionsModal(itemId) {
  // Fetch the current cart information
  fetch('/cart.js')
    .then(response => response.json())
    .then(cart => {
      var lineItem = cart.items.find(item => item.id == itemId); // Find the line item in the cart
      var productId = lineItem.product_id; // Get the product ID
      var selectedVariantId = lineItem.variant_id; // Get the selected variant ID

      // Fetch the product information to get the variants
      fetch(/products/${lineItem.product.handle}.js)
        .then(response => response.json())
        .then(product => {
          var variants = product.variants; // Get all the variants of the product
          var variantOptionsHtml = '';

          // Build HTML for variant selection
          variants.forEach(function(variant) {
            variantOptionsHtml += `
              <div>
                <label for="variant-${variant.id}">${variant.title}</label>
                <input type="radio" name="variant-${lineItem.id}" value="${variant.id}" id="variant-${variant.id}" 
                  ${variant.id === selectedVariantId ? 'checked' : ''}>
                <label for="variant-${variant.id}">${variant.title}</label>
              </div>
            `;
          });

          // Insert variant options into the modal
          document.getElementById("variant-options").innerHTML = variantOptionsHtml;
          
          // Store the itemId in the modal to be used when updating
          modal.setAttribute('data-item-id', itemId);

          // Open the modal
          modal.style.display = "block";
        });
    });
}

// Close the modal when the user clicks the "X"
span.onclick = function() {
  modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Handle the form submission (updating the cart with the new variant)
document.getElementById("change-options-form").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form submission

  var itemId = modal.getAttribute('data-item-id'); // Get the itemId from the modal
  var selectedVariantId = document.querySelector(input[name="variant-${itemId}"]:checked).value; // Get the selected variant ID

  // Prepare the updates object
  var updates = {};
  updates[itemId] = selectedVariantId; // Map the itemId to the new variant ID

  // Send the update to the cart using AJAX
  fetch('/cart/update.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ updates: updates })
  })
  .then(response => response.json())
  .then(cart => {
    console.log(cart); // Optionally log the updated cart
    modal.style.display = "none"; // Close the modal after updating the cart
    // Optionally, update the mini cart UI here with the updated cart information
  });
});