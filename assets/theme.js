document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-cart-popup-open]").forEach(function (trigger) {
        trigger.addEventListener("click", function () {
            console.log("Popup trigger clicked!"); // Debugging log
            
            // Find the parent cart-item-options
            let cartItem = trigger.closest("cart-item-options");
            if (!cartItem) return;

            // Get the modal using the data-key
            let modalKey = cartItem.getAttribute("data-key");
          
            // Use an attribute selector instead of querySelector with an ID
            //let modal = document.querySelector("[data-key='45899112546585:4c965aa252c6d069061ef577bc613673']");
            let modal = document.querySelector('.modal[data-key="45899112546585:4c965aa252c6d069061ef577bc613673"]');
            if (modal) {
                modal.classList.add("activeCartPopUp"); // Show the modal
                console.log("Modal opened:", modal);
              modal.style.display = "block"; // Show the modal
             
            } else {
                console.error("Modal not found!");
            }
        });
    });

    // Close modal event
    document.querySelectorAll("[data-cart-popup-close]").forEach(function (closeBtn) {
        closeBtn.addEventListener("click", function () {
            let modal = closeBtn.closest(".modal");
            if (modal) {
                modal.classList.remove("activeCartPopUp");
                console.log("Modal closed:", modal);
            }
        });
    });
});




// window.theme = window.theme || {};
// theme.Sections = theme.Sections || function() {
//   this.register = function(name, func, context) {
//     console.log("Registering section:", name);
//   };
// };

// function DOMready(callback) {
//   if (document.readyState !== 'loading') callback();
//   else document.addEventListener('DOMContentLoaded', callback);
// }

// DOMready(function() {
//   theme.sections = new theme.Sections();
// });

// // Define the Custom Element
// class CartItemOptions extends HTMLElement {
//   constructor() {
//     super();
//     this.popup = this.querySelector("template");
//     this.cartPage = this.classList.contains('cartPageItem');

//     if (this.popup) {
//        console.log('run');
//       this.querySelector('[data-cart-popup-open]').addEventListener('click', () => {
//         console.log("Popup trigger clicked!");
//         let popUpHtml = this.popup.content.cloneNode(true);
// console.log(popUpHtml);
//         // Ensure class is added for selection
//         let tempDiv = document.createElement("div");
//         tempDiv.appendChild(popUpHtml);
//         tempDiv.firstElementChild.classList.add("activeCartPopUp");

//         document.body.append(tempDiv.firstElementChild);

//         // Wait a bit before selecting the popup
//         setTimeout(() => {
//           this.newPopup = document.querySelector('.activeCartPopUp');
//           if (this.newPopup) {
//             this.newPopup.style.display = 'flex';

//             // Check if theme.Product exists before using it
//             if (typeof theme !== "undefined" && typeof theme.Product !== "undefined") {
//               theme.sections.register('product', theme.Product, this.newPopup);
//             } else {
//               console.warn("theme.Product is not defined. Skipping section registration.");
//             }

//             this.popUpClose = this.newPopup.querySelector('[data-cart-popup-close]');
//             if (this.popUpClose) {
//               this.popUpClose.addEventListener('click', (event) => {
//                 event.preventDefault();
//                 this.newPopup.style.display = 'none';
//                 this.newPopup.remove();
//               });
//             }

//             this.submitBtn = this.newPopup.querySelector('[data-submit-btn]');
//             if (this.submitBtn) {
//               this.submitBtn.addEventListener('click', (event) => {
//                 event.preventDefault();
//                 this.changeCartItems();
//               });
//             }
//           }
//         }, 100);
//       });
//     }
//   }

//   changeCartItems() {
//     let currentVariant = this.dataset.key,
//       newVariant = this.dataset.newVariant;

//     let updates = {};
//     updates[currentVariant] = 0;
//     updates[newVariant] = parseInt(this.dataset.quantity);

//     fetch(window.Shopify.routes.root + 'cart/update.js', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ updates })
//     })
//     .then(response => response.json())
//     .then((data) => {
//       if (data.status) return;
//       if (this.cartPage) {
//         document.dispatchEvent(new CustomEvent('cart:build'));
//       } else {
//         document.dispatchEvent(new CustomEvent('ajaxProduct:added'));
//       }

//       if (this.newPopup) {
//         setTimeout(() => {
//           this.newPopup.style.display = 'none';
//           this.newPopup.remove();
//         }, 1000);
//       }
//     })
//     .catch(error => console.error('Error:', error));
//   }

//   updateBtn(status) {
//     if (this.submitBtn) {
//       if (status) {
//         this.submitBtn.removeAttribute('disabled');
//       } else {
//         this.submitBtn.setAttribute('disabled', 'true');
//       }
//     }
//   }
// }

// // Define the custom element
// customElements.define('cart-item-options', CartItemOptions);





