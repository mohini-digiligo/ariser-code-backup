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
              this.changeCartItems();
            }.bind(this));
          }
          }
        }.bind(this));
        
      }
    }
    changeCartItems() {
    let currentVariant = this.dataset.key,
        newVariant = document.querySelector('input[name="YourVariantName"]:checked')?.value;
    
    if (!newVariant) {
        console.error("No variant selected!");
        return;
    }

    let updates = {};
    updates[currentVariant] = 0; // Remove old variant
    updates[newVariant] = parseInt(this.dataset.quantity) || 1; // Add new variant

    fetch(window.Shopify.routes.root + 'cart/update.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ updates })
    })
    .then(response => response.json())
    .then(data => {
        if (data.status) return;
        document.dispatchEvent(new CustomEvent('cart:build')); // Refresh cart
        if (this.newPopup) {
            setTimeout(() => {
                this.newPopup.style.display = 'none';
                this.newPopup.remove();
            }, 1000);
        }
    })
    .catch(error => console.error('Error:', error));
}

  
  }
  
  customElements.define('cart-item-options', CartItemOptions);








