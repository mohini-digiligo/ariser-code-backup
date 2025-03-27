class CartItemOptions extends HTMLElement {
  constructor() {
    super();
    // Reference to the popup template, if available
    this.popup = this.querySelector("template");
    // Determine if we are on the cart page (used later to trigger events)
    this.cartPage = this.classList.contains('cartPageItem');

    // Bind our methods (ensures correct context when used in callbacks)
    this.changeCartItems = this.changeCartItems.bind(this);
    this.updateBtn = this.updateBtn.bind(this);
  }

  connectedCallback() {
    // Get all variant radio inputs inside this custom element
    const variantInputs = this.querySelectorAll('.variant-input input[type="radio"]');
    
    // Set the initial variant key (this should be your current variant ID)
    // You can either pass this in as a data attribute on the custom element or determine it from the initially checked radio
    this.dataset.key = this.dataset.key || (this.querySelector('.variant-input input[type="radio"]:checked')?.value || '');
    
    // Listen for variant changes on each input
    variantInputs.forEach(input => {
      input.addEventListener('change', (e) => {
        const newVariant = e.target.value;
        // Store the new variant value in the custom element's dataset
        this.dataset.newVariant = newVariant;
        
        // If the selected variant is different from the original, enable the change button
        if(newVariant !== this.dataset.key) {
          this.updateBtn(true);
        } else {
          this.updateBtn(false);
        }
      });
    });
    
    // Code for handling the popup, if you use one
    if (this.popup) {
      this.querySelector('[data-cart-popup-open]').addEventListener('click', function(){
        let popUpHtml = this.popup.content.cloneNode(true);
        let element = document.querySelector('.m-cart-drawer');
        if (element) {
          element.classList.remove('m-cart-drawer--active');
        }
        document.body.append(popUpHtml);
        this.newPopup = document.querySelector('.activeCartPopUp');
        if(this.newPopup){
          this.newPopup.style.display = 'flex';
          if (typeof theme !== "undefined" && theme.sections) {
            theme.sections.register('product', theme.Product, this.newPopup);
          } else {
            console.warn("Theme object is not available.");
          }
          // Add listener for closing the popup
          this.popUpClose = this.newPopup.querySelector('[data-cart-popup-close]');
          if(this.popUpClose){
            this.popUpClose.addEventListener('click', function(event){
              let elements = document.querySelector('.m-cart-drawer');
              if (elements) {
                elements.classList.add('m-cart-drawer--active');
              }
              event.preventDefault();
              this.newPopup.style.display = 'none';
              this.newPopup.remove();
            }.bind(this));
          }
          // Add listener for the submit button
          this.submitBtn = this.newPopup.querySelector('[data-submit-btn]');
          if(this.submitBtn){
            this.submitBtn.addEventListener('click', function(event){
              event.preventDefault();
              this.changeCartItems();
            }.bind(this));
          }
        }
      }.bind(this));
    }
  }

  // Function to update cart items with the new variant
  changeCartItems() {
    // Retrieve the original variant (current) and the newly selected variant
    let currentVariant = this.dataset.key,
        newVariant = this.dataset.newVariant;
    console.log("Changing from:", currentVariant, "to:", newVariant);

    // Prepare the updates object to remove the current variant and add the new one
    let updates = {};
    updates[currentVariant] = 0;
    // Use the quantity from a data attribute; default to 1 if not set
    updates[newVariant] = parseInt(this.dataset.quantity) || 1;

    // Post the updates to Shopify's cart update endpoint
    fetch(window.Shopify.routes.root + 'cart/update.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ updates })
    })
    .then(response => response.json())
    .then((data) => {
      // If there is an error status, simply return
      if(data.status) return;
      // Trigger the appropriate event based on where the change is occurring
      if(this.cartPage){
        document.dispatchEvent(new CustomEvent('cart:build'));
      } else {
        document.dispatchEvent(new CustomEvent('ajaxProduct:added')); 
      }
      // Optionally, close and remove the popup after a short delay
      if(this.newPopup){
        setTimeout(function(){
          this.newPopup.style.display = 'none';
          this.newPopup.remove();
        }.bind(this), 1000);
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  // Helper function to enable/disable the "Change" button
  updateBtn(status) {
    if(this.submitBtn){
      if(status === true){
        this.submitBtn.removeAttribute('disabled');
      } else {
        this.submitBtn.setAttribute('disabled','true');
      }
    }
  }
}

// Define the custom element
customElements.define('cart-item-options', CartItemOptions);
