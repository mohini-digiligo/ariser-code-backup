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
                    this.variantInputs = this.newPopup.querySelectorAll('[data-variant-input]');
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

    let selectedVariant = this.newPopup.querySelector('[data-variant-input]:checked');
    if (!selectedVariant) {
        console.error("🚨 No variant selected!");
        return;
    }

    let newVariant = selectedVariant.getAttribute("data-variant-id").split(":")[0];

    if (currentVariant === newVariant) {
        console.log("📌 Same variant selected. No update needed.");
        return; // ❌ Stop execution if the variant is the same
    }

    console.log("❌ Removing Variant ID:", currentVariant);
    console.log("✅ Adding new Variant ID:", newVariant);

    if (!newVariant || isNaN(parseInt(newVariant))) {  
        console.error("🚨 Invalid Variant ID: ", newVariant);
        return;
    }

    let updates = {};
    updates[currentVariant] = 0; // ✅ Remove old variant
    updates[newVariant] = parseInt(this.dataset.quantity); // ✅ Add new variant

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
        this.reloadMiniCartDrawer();

        // ✅ Close the popup after 1 second
        if (this.newPopup) {
            setTimeout(() => {
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

reloadMiniCartDrawer() {
    let cartDrawer = document.querySelector("#MinimogCartDrawer");
    if (cartDrawer) {
        cartDrawer.classList.add("loading"); // Optional: Add loading effect
        fetch(window.Shopify.routes.root + "cart")
            .then(response => response.text())
            .then(html => {
                let newCartContent = new DOMParser().parseFromString(html, "text/html")
                    .querySelector("#MinimogCartDrawer");
                if (newCartContent) {
                    cartDrawer.innerHTML = newCartContent.innerHTML;
                    console.log("✅ Mini Cart Updated Successfully!");
                }
                cartDrawer.classList.remove("loading");
            })
            .catch(error => console.error("🚨 Error updating Mini Cart:", error));
    } else {
        console.warn("⚠️ Mini Cart Drawer (#MinimogCartDrawer) not found.");
    }
}





}

customElements.define('cart-item-options', CartItemOptions);
 




