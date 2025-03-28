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

document.addEventListener("DOMContentLoaded", function () {
  console.log('run');
    let variantInputs = document.querySelectorAll("[data-variant-input]");
    let submitButton = document.querySelector("[data-submit-btn]");

    function checkVariantSelection() {
        let selectedVariant = document.querySelector("[data-variant-input]:checked");

        if (selectedVariant) {
            submitButton.removeAttribute("disabled"); // Enable button
        } else {
            submitButton.setAttribute("disabled", "true"); // Keep disabled if none selected
        }
    }

    // Listen for changes in variant selection
    variantInputs.forEach(input => {
        input.addEventListener("change", function () {
            checkVariantSelection();
        });
    });

    // AJAX to update cart when button is clicked
    submitButton.addEventListener("click", function () {
        let selectedVariant = document.querySelector("[data-variant-input]:checked");
        if (!selectedVariant) return;

        let variantValue = selectedVariant.value; // Get selected variant value

        console.log("Selected Variant:", variantValue);

        fetch('/cart/update.js', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                updates: {
                    [variantValue]: 1 // Assuming quantity is 1, modify as needed
                }
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log("Cart updated:", data);
            submitButton.innerText = "Updated";
        })
        .catch(error => console.error("Error updating cart:", error));
    });

    // Run function once on page load to check if any option is already selected
    checkVariantSelection();
});



