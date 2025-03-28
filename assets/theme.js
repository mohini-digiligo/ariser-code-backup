// class CartItemOptions extends HTMLElement {
//     constructor() {
//         super();
//         this.popup = this.querySelector("template");
//         this.cartPage = this.classList.contains('cartPageItem');

//         if (this.popup) {
//             this.querySelector('[data-cart-popup-open]').addEventListener('click', function () {
//                 let popUpHtml = this.popup.content.cloneNode(true);
//                 let element = document.querySelector('.m-cart-drawer');

//                 if (element) {
//                     element.classList.remove('m-cart-drawer--active');
//                 }

//                 document.body.append(popUpHtml);
//                 this.newPopup = document.querySelector('.activeCartPopUp');

//                 if (this.newPopup) {
//                     this.newPopup.style.display = 'flex';

//                     if (typeof theme !== "undefined" && theme.sections) {
//                         theme.sections.register('product', theme.Product, this.newPopup);
//                     } else {
//                         console.warn("⚠️ Theme object is not available.");
//                     }

//                     this.popUpClose = this.newPopup.querySelector('[data-cart-popup-close]');
//                     if (this.popUpClose) {
//                         this.popUpClose.addEventListener('click', function (event) {
//                             event.preventDefault();
//                             let elements = document.querySelector('.m-cart-drawer');
//                             if (elements) {
//                                 elements.classList.add('m-cart-drawer--active');
//                             }
//                             this.newPopup.style.display = 'none';
//                             this.newPopup.remove();
//                         }.bind(this));
//                     }

//                     this.submitBtn = this.newPopup.querySelector('[data-submit-btn]');
//                     if (this.submitBtn) {
//                         this.submitBtn.addEventListener('click', function (event) {
//                             event.preventDefault();
//                             this.changeCartItems();
//                         }.bind(this));
//                     }

//                     // ✅ Fix: Update `data-new-variant` correctly when selecting a size
//                     this.newPopup.querySelectorAll('input[name="size"]').forEach((radio) => {
//                         radio.addEventListener("change", function (event) {
//                             let selectedVariant = event.target.getAttribute("data-variant-id");
//                             console.log("✅ Selected Variant ID:", selectedVariant);

//                             if (selectedVariant) {
//                                 this.setAttribute("data-new-variant", selectedVariant);
//                                 this.updateBtn(true); // Enable submit button
//                             } else {
//                                 console.error("❌ Error: No valid variant ID found for selection.");
//                             }
//                         }.bind(this));
//                     });
//                 }
//             }.bind(this));
//         }
//     }

//     changeCartItems() {
//         let currentVariant = this.getAttribute('data-key');  // Variant being removed
//         let newVariant = this.getAttribute('data-new-variant');  // Variant being added
//         let quantity = parseInt(this.getAttribute('data-quantity')) || 1;

//         console.log("🔄 Updating Cart:");
//         console.log("➡ Removing Variant ID:", currentVariant);
//         console.log("➡ Adding Variant ID:", newVariant);
//         console.log("➡ Quantity:", quantity);

//         // ✅ Prevents removing and adding the same variant
//         if (!currentVariant || !newVariant || isNaN(newVariant)) {
//             console.error("❌ Error: Missing or invalid variant data.");
//             return;
//         }

//         if (currentVariant === newVariant) {
//             console.warn("⚠️ Selected variant is the same as the current variant. No update needed.");
//             return;
//         }

//         // ✅ Ensures cart updates properly without conflicts
//         setTimeout(() => {
//             let updates = {};

//             // ✅ Check if the current variant exists before removing it
//             if (currentVariant) {
//                 updates[currentVariant] = 0;
//             }

//             updates[newVariant] = quantity;

//             fetch(window.Shopify.routes.root + 'cart/update.js', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({ updates })
//             })
//             .then(response => response.json())
//             .then((data) => {
//                 if (data.status === 422) {
//                     console.error("❌ Shopify Error:", data);
//                     return;
//                 }

//                 console.log("✅ Cart updated successfully:", data);

//                 document.dispatchEvent(new CustomEvent(this.cartPage ? 'cart:build' : 'ajaxProduct:added'));

//                 if (this.newPopup) {
//                     setTimeout(() => {
//                         this.newPopup.style.display = 'none';
//                         this.newPopup.remove();
//                     }, 1000);
//                 }
//             })
//             .catch(error => console.error('❌ Error updating cart:', error));
//         }, 300); // ✅ Slight delay to avoid API conflicts
//     }

//     updateBtn(status) {
//         if (this.submitBtn) {
//             if (status) {
//                 this.submitBtn.removeAttribute('disabled');
//             } else {
//                 this.submitBtn.setAttribute('disabled', 'true');
//             }
//         }
//     }
// }

// customElements.define('cart-item-options', CartItemOptions);



class CartItemOptions extends HTMLElement {
    constructor() {
      super();
      this.popup = this.querySelector("template");
      this.cartPage = this.classList.contains('cartPageItem');
      if(this.popup){
        this.querySelector('[data-cart-popup-open]').addEventListener('click',function(){
         
          let popUpHtml = this.popup.content.cloneNode(true);
          // popUpHtml.classList.add('activeCartPopUp');
          
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
    changeCartItems(){
        let currentVariant = this.dataset.key,
          newVariant = this.dataset.newVariant;
        
        let updates = {};
          updates[currentVariant] = 0;
          updates[newVariant] = parseInt(this.dataset.quantity);
        fetch(window.Shopify.routes.root + 'cart/update.js', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ updates })
        })
        .then(response => {
          return response.json();
        })
        .then((data) =>{
          if(data.status) return;
          if(this.cartPage){
          document.dispatchEvent(new CustomEvent('cart:build'));
          }else{
          document.dispatchEvent(new CustomEvent('ajaxProduct:added')); 
          }
          if(this.newPopup){
            setTimeout(function(){
                this.newPopup.style.display = 'none';
                this.newPopup.remove();
            }.bind(this),1000)
          }
       })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
    updateBtn(status){
      if(this.submitBtn){
        if(status == true){
          this.submitBtn.removeAttribute('disabled')
        }
        else{
          this.submitBtn.setAttribute('disabled','true')
        }
      }
    }
  
  }
  
  customElements.define('cart-item-options', CartItemOptions);


  class CartGiftWrapping extends HTMLElement {
    constructor() {
      super();
      this.variant = this.dataset.giftWrapId;
      this.cartSize = parseInt(this.dataset.cartItemsSize);
      this.giftWrapStatus = parseInt(this.dataset.giftWrapsInCart);
      this.cartPage = this.closest('[data-gift-wrap]')?.classList.contains('cart-page');
      if(this.cartSize == 1 && this.giftWrapStatus > 0 ){
        this.UpdateGiftWrap(0);
      }
      this.addEventListener('click',function(event){
        event.preventDefault();
        this.classList.add('disabled');
        if(this.giftWrapStatus > 0){
              this.UpdateGiftWrap(0);
        }else{
              this.UpdateGiftWrap(1);          
        }
      }.bind(this));
    }
    UpdateGiftWrap(quantity){
        
        let updates = {};
          updates[this.variant] =quantity;
        fetch(window.Shopify.routes.root + 'cart/update.js', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ updates })
        })
        .then(response => {
          return response.json();
        })
        .then((data) =>{
          if(data.status) return;
          if(this.cartPage){
          document.dispatchEvent(new CustomEvent('cart:build'));
          }else{
          document.dispatchEvent(new CustomEvent('ajaxProduct:added')); 
          }
       })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  
  }
  
  customElements.define('cart-gift-wrapping', CartGiftWrapping);