// class CartItemOptions extends HTMLElement {
//     constructor() {
//       super();
//       this.popup = this.querySelector("template");
//       this.cartPage = this.classList.contains('cartPageItem');
//       if(this.popup){
//         this.querySelector('[data-cart-popup-open]').addEventListener('click',function(){
         
//           let popUpHtml = this.popup.content.cloneNode(true);
//           // popUpHtml.classList.add('activeCartPopUp');
//            let element = document.querySelector('.m-cart-drawer');
//           if (element) {
//               element.classList.remove('m-cart-drawer--active'); // Keeps only 'm-cart-drawer' and removes other classes
//           }
//           document.body.append(popUpHtml);
//           this.newPopup = document.querySelector('.activeCartPopUp');
//           if(this.newPopup){
//           this.newPopup.style.display = 'flex';
            
//             if (typeof theme !== "undefined" && theme.sections) {
//   theme.sections.register('product', theme.Product, this.newPopup);
// } else {
//   console.warn("Theme object is not available.");
// }
//             this.popUpClose = this.newPopup.querySelector('[data-cart-popup-close]');
//             if(this.popUpClose){
//               this.popUpClose.addEventListener('click',function(event){
//                 let elements = document.querySelector('.m-cart-drawer');
//           if (elements) {
//               elements.classList.add('m-cart-drawer--active'); // Keeps only 'm-cart-drawer' and removes other classes
//           }
//                 event.preventDefault();
//                 this.newPopup.style.display = 'none';
//                 this.newPopup.remove();
//               }.bind(this));
//             }
//             this.submitBtn = this.newPopup.querySelector('[data-submit-btn]');
//             if(this.submitBtn){
//             this.submitBtn.addEventListener('click',function(event){
//               event.preventDefault();
//               this.changeCartItems();
//             }.bind(this));
//           }
//           }
//         }.bind(this));
        
//       }
//     }
//     changeCartItems(){
      
//         let currentVariant = this.dataset.key,
//           newVariant = this.dataset.newVariant;
//         console.log(newVariant);
//         let updates = {};
//           updates[currentVariant] = 0;
//           updates[newVariant] = parseInt(this.dataset.quantity);
//         fetch(window.Shopify.routes.root + 'cart/update.js', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ updates })
//         })
//         .then(response => {
//           return response.json();
//         })
//         .then((data) =>{
//           if(data.status) return;
//           if(this.cartPage){
//           document.dispatchEvent(new CustomEvent('cart:build'));
//           }else{
//           document.dispatchEvent(new CustomEvent('ajaxProduct:added')); 
//           }
//           if(this.newPopup){
//             setTimeout(function(){
//                 this.newPopup.style.display = 'none';
//                 this.newPopup.remove();
//             }.bind(this),1000)
//           }
//        })
//         .catch((error) => {
//           console.error('Error:', error);
//         });
//     }
//     updateBtn(status){
//       if(this.submitBtn){
//         if(status == true){
//           this.submitBtn.removeAttribute('disabled')
//         }
//         else{
//           this.submitBtn.setAttribute('disabled','true')
//         }
//       }
//     }
  
//   }
  
//   customElements.define('cart-item-options', CartItemOptions);

document.addEventListener("DOMContentLoaded", function () {
  let selectedProductId, selectedLineItem, selectedVariantId;

  document.querySelectorAll(".change-size-btn").forEach(button => {
    button.addEventListener("click", function () {
      selectedVariantId = this.dataset.variantId;
      selectedProductId = this.dataset.productId;
      selectedLineItem = this.closest(".mini-cart-item").dataset.line;

      fetch(`/products/${selectedProductId}.js`)
        .then(response => response.json())
        .then(product => {
          let sizeOptions = document.getElementById("size-options");
          sizeOptions.innerHTML = ""; 

          product.variants.forEach(variant => {
            let btn = document.createElement("button");
            btn.textContent = variant.option1;
            btn.dataset.variantId = variant.id;
            btn.classList.add("size-option");
            btn.onclick = function () {
              document.querySelectorAll(".size-option").forEach(b => b.classList.remove("selected"));
              btn.classList.add("selected");
            };
            sizeOptions.appendChild(btn);
          });

          document.getElementById("size-change-modal").classList.remove("hidden");
        });
    });
  });

  document.getElementById("update-size-btn").addEventListener("click", function () {
    let newVariant = document.querySelector(".size-option.selected")?.dataset.variantId;
    if (!newVariant || newVariant == selectedVariantId) return;

    fetch("/cart/change.js", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: selectedVariantId,
        quantity: 0 
      })
    }).then(() => {
      return fetch("/cart/add.js", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: newVariant,
          quantity: 1
        })
      });
    }).then(() => {
      location.reload(); 
    });
  });

  document.querySelector(".close-modal").addEventListener("click", function () {
    document.getElementById("size-change-modal").classList.add("hidden");
  });
});








