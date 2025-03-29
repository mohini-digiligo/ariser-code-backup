class CartItemOptions extends HTMLElement {
    constructor() {
        super();
        this.popup = this.querySelector("template");
        this.cartPage = this.classList.contains('cartPageItem');

        if (this.popup) {
            this.querySelector('[data-cart-popup-open]').addEventListener('click', function () {
                let popUpHtml = this.popup.content.cloneNode(true);
                let element = document.querySelector('.m-cart-drawer');
                if (element) {
                    element.classList.remove('m-cart-drawer--active'); // Keeps only 'm-cart-drawer' and removes other classes
                }
                document.body.append(popUpHtml);
                this.newPopup = document.querySelector('.activeCartPopUp');

                if (this.newPopup) {
                    this.newPopup.style.display = 'flex';

                    if (typeof theme !== "undefined" && theme.sections) {
                        theme.sections.register('product', theme.Product, this.newPopup);
                    } else {
                        console.warn("Theme object is not available.");
                    }

                    this.popUpClose = this.newPopup.querySelector('[data-cart-popup-close]');
                    if (this.popUpClose) {
                        this.popUpClose.addEventListener('click', function (event) {
                          
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
                    if (this.submitBtn) {
                        this.submitBtn.addEventListener('click', function (event) {
                            event.preventDefault();
                            this.changeCartItems();
                             
                        }.bind(this));
                    }

                    // ✅ Add event listener for variant selection
                    this.variantInputs = this.newPopup.querySelectorAll('[data-variant-inputs]');
                    if (this.variantInputs.length > 0) {
                        this.variantInputs.forEach(input => {
                            input.addEventListener('change', this.enableSubmitButton.bind(this));
                        });
                    }
                }
            }.bind(this));
        }
    }

    // ✅ Function to enable submit button when size changes
    enableSubmitButton() {
        if (this.submitBtn) {
            this.submitBtn.removeAttribute('disabled');
        }
    }
  
  changeCartItems() {
    let currentVariant = this.dataset.key.split(":")[0]; // Extract numeric variant ID
    let selectedOptions = {};
    document.querySelectorAll('[data-variant-inputs]:checked').forEach(selected => {
        let optionName = selected.getAttribute('data-option-name');
        let optionValue = selected.value;
        console.log('✅ Selected:', optionName, optionValue);
        selectedOptions[optionName] = optionValue;
    });

    let variantsElement = document.getElementById('productVariants');
    if (!variantsElement) {
        console.error("🚨 Error: Product variant data is unavailable.");
        return;
    }
    
    let variants = JSON.parse(variantsElement.textContent);
    let matchedVariant = variants.find(variant => {
        return Object.keys(selectedOptions).every((optionName, index) => {
            return variant[option${index + 1}] === selectedOptions[optionName];
        });
    });

    if (!matchedVariant) {
        console.error("🚨 No matching variant found!");
        alert("Selected size & sleeve combination is unavailable.");
        return;
    }

    let newVariantID = matchedVariant.id;
    console.log("✅ Matched Variant ID:", newVariantID);


    if (currentVariant === newVariantID) {
        console.log("📌 Same variant selected. No update needed.");
        setTimeout(() => {
                window.location.reload();
                this.newPopup.style.display = 'none';
                this.newPopup.remove();
        }, 500);
        return; // ❌ Stop execution if the variant is the same
    }

    console.log("❌ Removing Variant ID:", currentVariant);
    console.log("✅ Adding new Variant ID:", newVariantID);

    if (!newVariantID || isNaN(parseInt(newVariantID))) {  
        console.error("🚨 Invalid Variant ID: ", newVariantID);
        return;
    }

    let updates = {};
    updates[currentVariant] = 0; // ✅ Remove old variant
    updates[newVariantID] = parseInt(this.dataset.quantity); // ✅ Add new variant

    console.log("🐀 Sending AJAX Update:", JSON.stringify({ updates }));

    fetch(window.Shopify.routes.root + 'cart/update.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ updates })
    })
    .then(response => response.json())
    .then((data) => {
        if (data.status) {
            console.error("🚨 Shopify Error:", data);
            return;
        }
       
        console.log("✅ Cart Updated Successfully:", data);

        // ✅ Refresh Mini Cart Drawer **WITHOUT Reloading the Page**

        // ✅ Close the popup after 1 second
        if (this.newPopup) {
            setTimeout(() => {
                window.location.reload();
                this.newPopup.style.display = 'none';
                this.newPopup.remove();
            }, 1000);
        }
    })
    .catch((error) => {
        console.error('🚨 Fetch Error:', error);
    });

    // ❌ Prevent Default Form Submission (Prevents Page Reload)
    return false;
}

}

customElements.define('cart-item-options', CartItemOptions);
 
// class CartItemOptions extends HTMLElement {
//     constructor() {
//         super();
//         this.popup = this.querySelector("template");
//         this.cartPage = this.classList.contains('cartPageItem');
//         this.currentVariantID = null; // Store current variant ID

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
//                         console.warn("Theme object is not available.");
//                     }

//                     this.popUpClose = this.newPopup.querySelector('[data-cart-popup-close]');
//                     if (this.popUpClose) {
//                         this.popUpClose.addEventListener('click', function (event) {
//                             let elements = document.querySelector('.m-cart-drawer');
//                             if (elements) {
//                                 elements.classList.add('m-cart-drawer--active');
//                             }
//                             event.preventDefault();
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

//                     this.variantInputs = this.newPopup.querySelectorAll('[data-variant-input]');
//                     if (this.variantInputs.length > 0) {
//                         this.variantInputs.forEach(input => {
//                             input.addEventListener('change', this.enableSubmitButton.bind(this));
//                         });
//                     }

//                     // ✅ Store current variant ID
//                     let cartItemID = this.getAttribute('data-cart-item-id');
//                     if (cartItemID) {
//                         this.currentVariantID = parseInt(cartItemID);
//                     }
//                 }
//             }.bind(this));
//         }
//     }

//     enableSubmitButton() {
//         if (this.submitBtn) {
//             this.submitBtn.removeAttribute('disabled');
//         }
//     }

//   changeCartItems() {
//     console.log('🛒 Updating cart...');
//     let selectedOptions = {};

//     document.querySelectorAll('[data-variant-input]:checked').forEach(selected => {
//         let optionName = selected.getAttribute('data-option-name');
//         let optionValue = selected.value;
//         console.log('✅ Selected:', optionName, optionValue);
//         selectedOptions[optionName] = optionValue;
//     });

//     let variantsElement = document.getElementById('productVariants');
//     if (!variantsElement) {
//         console.error("🚨 Error: Product variant data is unavailable.");
//         return;
//     }
    
//     let variants = JSON.parse(variantsElement.textContent);
//     let matchedVariant = variants.find(variant => {
//         return Object.keys(selectedOptions).every((optionName, index) => {
//             return variant[`option${index + 1}`] === selectedOptions[optionName];
//         });
//     });

//     if (!matchedVariant) {
//         console.error("🚨 No matching variant found!");
//         alert("Selected size & sleeve combination is unavailable.");
//         return;
//     }

//     let newVariantID = matchedVariant.id;
//     console.log("✅ Matched Variant ID:", newVariantID);

//     // 🔍 Debug current variant ID
//     if (!this.currentVariantID) {
//         console.error("🚨 Error: Current variant ID is missing!");
//         alert("Something went wrong. Try refreshing the page.");
//         return;
//     }

//     console.log("🔍 Current Variant ID:", this.currentVariantID);

//     // Fetch current cart data
//     fetch('/cart.js')
//         .then(response => response.json())
//         .then(cart => {
//             let currentItem = cart.items.find(item => item.id == this.currentVariantID);

//             if (!currentItem) {
//                 console.error("🚨 Existing cart item not found.");
//                 alert("Item not found in the cart. Try again.");
//                 return;
//             }

//             let newQuantity = currentItem.quantity; // Keep the same quantity

//             // ✅ Update cart: Remove old variant & add new one
//             return fetch('/cart/update.js', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     updates: {
//                         [this.currentVariantID]: 0,  // Remove old variant
//                         [newVariantID]: newQuantity  // Add new variant with same quantity
//                     }
//                 })
//             });
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("🚨 Failed to update cart.");
//             }
//             return response.json();
//         })
//         .then(data => {
//             console.log("✅ Cart Updated:", data);

//             // ✅ Reload mini cart dynamically
//             document.querySelector('.m-cart-drawer').innerHTML = ''; 
//             document.querySelector('.m-cart-drawer').load(location.href + " #MinimogCartDrawer");

//             // ✅ Hide popup after update
//             this.newPopup.style.display = 'none';
//             this.newPopup.remove();
//         })
//         .catch(error => console.error("🚨 Cart Update Failed:", error));
// }


// }

// customElements.define('cart-item-options', CartItemOptions);

 
 




