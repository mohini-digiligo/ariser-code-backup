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
    // changeCartItems(){
      
    //     let currentVariant = this.dataset.key,
    //       newVariant = this.dataset.newVariant;
    //     console.log(newVariant);
    //     let updates = {};
    //       updates[currentVariant] = 0;
    //       updates[newVariant] = parseInt(this.dataset.quantity);
    //     fetch(window.Shopify.routes.root + 'cart/update.js', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({ updates })
    //     })
    //     .then(response => {
    //       return response.json();
    //     })
    //     .then((data) =>{
    //       if(data.status) return;
    //       if(this.cartPage){
    //       document.dispatchEvent(new CustomEvent('cart:build'));
    //       }else{
    //       document.dispatchEvent(new CustomEvent('ajaxProduct:added')); 
    //       }
    //       if(this.newPopup){
    //         setTimeout(function(){
    //             this.newPopup.style.display = 'none';
    //             this.newPopup.remove();
    //         }.bind(this),1000)
    //       }
    //    })
    //     .catch((error) => {
    //       console.error('Error:', error);
    //     });
    // }
    // updateBtn(status){
    //   if(this.submitBtn){
    //     if(status == true){
    //       this.submitBtn.removeAttribute('disabled')
    //     }
    //     else{
    //       this.submitBtn.setAttribute('disabled','true')
    //     }
    //   }
    // }
  
  }
  
  customElements.define('cart-item-options', CartItemOptions);


document.addEventListener('DOMContentLoaded', function () {
    let variantInputs = document.querySelectorAll('.variant-input input[type="radio"]');
    let submitBtn = document.querySelector('[data-submit-btn]');
    
    if (!submitBtn) return;

    let initialVariant = document.querySelector('.variant-input input[type="radio"]:checked')?.value;

    variantInputs.forEach(input => {
        input.addEventListener('change', function () {
            let selectedVariant = this.value;
            submitBtn.dataset.newVariant = selectedVariant; // Store the new variant in data attribute

            if (selectedVariant !== initialVariant) {
                submitBtn.removeAttribute('disabled'); // Enable button
            } else {
                submitBtn.setAttribute('disabled', 'true'); // Keep disabled if variant is same
            }
        });
    });

    // Handle the Change button click
    submitBtn.addEventListener('click', function () {
        changeCartItems.call(this); // Call changeCartItems function when button is clicked
    });
});


function changeCartItems() {
    let currentVariant = this.dataset.key, // Current variant in the cart
        newVariant = this.dataset.newVariant; // New variant selected by user

    if (!newVariant || newVariant === currentVariant) {
        console.error("No variant selected or variant unchanged.");
        return;
    }

    let updates = {};
    updates[currentVariant] = 0; // Remove old variant
    updates[newVariant] = 1; // Add new variant

    fetch(window.Shopify.routes.root + 'cart/update.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ updates })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status) return;
        
        // Dispatch an event to refresh the cart
        document.dispatchEvent(new CustomEvent('cart:build'));

        // Disable button after change
        let submitBtn = document.querySelector('[data-submit-btn]');
        if (submitBtn) {
            submitBtn.setAttribute('disabled', 'true');
        }

        // Close popup if it exists
        if (this.newPopup) {
            setTimeout(() => {
                this.newPopup.style.display = 'none';
                this.newPopup.remove();
            }, 1000);
        }
    })
    .catch(error => console.error('Error:', error));
}







