class CartItemOptions extends HTMLElement {
    constructor() {
      super();
      this.popup = this.querySelector("template");
      this.cartPage = this.classList.contains('cartPageItem');
      if(this.popup){
        this.querySelector('[data-cart-popup-open]').addEventListener('click',function(){
         
          let popUpHtml = this.popup.content.cloneNode(true);
          // popUpHtml.classList.add('activeCartPopUp');
           let element = document.querySelector('.m-cart-drawer');
          if (element) {
              element.classList.remove('m-cart-drawer--active'); // Keeps only 'm-cart-drawer' and removes other classes
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
            this.popUpClose = this.newPopup.querySelector('[data-cart-popup-close]');
            if(this.popUpClose){
              this.popUpClose.addEventListener('click',function(event){
                let elements = document.querySelector('.m-cart-drawer');
          if (elements) {
              elements.classList.add('m-cart-drawer--active'); // Keeps only 'm-cart-drawer' and removes other classes
          }
                event.preventDefault();
                this.newPopup.style.display = 'none';
                this.newPopup.remove();
              }.bind(this));
            }
            this.submitBtn = this.newPopup.querySelector('[data-submit-btn]');
            if(this.submitBtn){
            this.submitBtn.addEventListener('click',function(event){
              event.preventDefault();
              // this.changeCartItems();
            }.bind(this));
          }
          }
        }.bind(this));
        
      }
    }
    changeCartItems() {
    let currentVariant = this.dataset.key,
        newVariant = this.dataset.newVariant;

    console.log("Current Variant:", currentVariant);
    console.log("New Variant:", newVariant);

    if (!newVariant || newVariant === currentVariant) {
        console.warn("No variant change detected.");
        return;
    }

    let updates = {};
    updates[currentVariant] = 0; // Remove old variant
    updates[newVariant] = parseInt(this.dataset.quantity); // Add new variant

    fetch(window.Shopify.routes.root + 'cart/update.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ updates })
    })
    .then(response => response.json())
    .then((data) => {
        if (data.status) return;
        
        if (this.cartPage) {
            document.dispatchEvent(new CustomEvent('cart:build'));
        } else {
            document.dispatchEvent(new CustomEvent('ajaxProduct:added'));
        }

        // ✅ Disable button after cart update
        this.updateBtn(false);

        // ✅ Update dataset key to reflect new variant
        this.dataset.key = newVariant;
    })
    .catch((error) => console.error('Error:', error));
}

updateBtn(status) {
    if (this.submitBtn) {
        if (status) {
            this.submitBtn.removeAttribute('disabled');
        } else {
            this.submitBtn.setAttribute('disabled', 'true');
        }
    } else {
        console.warn("Submit button not found.");
    }
}



  }
  
  customElements.define('cart-item-options', CartItemOptions);


document.addEventListener('DOMContentLoaded', function () {
    let variantInputs = document.querySelectorAll('.variant-input input[type="radio"]');
    let submitBtn = document.querySelector('[data-submit-btn]');
    
    if (!submitBtn) return;

    let initialVariantElement = document.querySelector('.variant-input input[type="radio"]:checked');
    let initialVariant = initialVariantElement ? initialVariantElement.value : null;

    variantInputs.forEach(input => {
        input.addEventListener('change', function () {
            let selectedVariant = this.value;
            submitBtn.dataset.newVariant = selectedVariant; // Store new variant in data attribute

            if (selectedVariant !== initialVariant) {
                submitBtn.removeAttribute('disabled'); // Enable button
            } else {
                submitBtn.setAttribute('disabled', 'true'); // Keep disabled if variant is the same
            }
        });
    });

    // ✅ Ensure this function executes correctly
    submitBtn.addEventListener('click', function () {
        changeCartItems.call(this); // Call changeCartItems function on button click
    });
});


