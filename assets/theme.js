class CartItemOptions extends HTMLElement {
    constructor() {
        super();
        this.popup = this.querySelector("template");
        this.cartPage = this.classList.contains('cartPageItem');

        if (this.popup) {
            this.querySelector('[data-cart-popup-open]').addEventListener('click', () => {
                let popUpHtml = this.popup.content.cloneNode(true);
                let element = document.querySelector('.m-cart-drawer');
                if (element) {
                    element.classList.remove('m-cart-drawer--active');
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
                        this.popUpClose.addEventListener('click', (event) => {
                            let elements = document.querySelector('.m-cart-drawer');
                            if (elements) {
                                elements.classList.add('m-cart-drawer--active');
                            }
                            event.preventDefault();
                            this.newPopup.style.display = 'none';
                            this.newPopup.remove();
                        });
                    }

                    // Select Submit Button
                    this.submitBtn = this.newPopup.querySelector('[data-submit-btn]');
                    if (this.submitBtn) {
                        this.submitBtn.addEventListener('click', (event) => {
                            event.preventDefault();
                            this.submitBtn.setAttribute('disabled', 'true'); // Prevent multiple clicks
                            this.changeCartItems();
                            setTimeout(() => {
                                this.submitBtn.removeAttribute('disabled'); // Re-enable button
                            }, 1500);
                        });
                    }

                    // ✅ Track Variant Selection Changes
                    this.newPopup.querySelectorAll('[name="Size"]').forEach((radio) => {
                        radio.addEventListener('change', (event) => {
                            this.setAttribute('data-new-variant', event.target.value);
                            console.log("Selected Variant:", event.target.value);
                            //this.updateBtn(true); // Enable button on selection change
                        });
                    });
                }
            });
        }
    }

    // ✅ Updates Cart with Selected Variant
   changeCartItems() {
    let currentVariant = this.getAttribute('data-key');  // The variant being removed
    let newVariant = this.getAttribute('data-new-variant');  // The variant being added
    let quantity = parseInt(this.getAttribute('data-quantity')) || 1;

    console.log("🔎 Checking variant values:");
    console.log("➡ Current Variant ID:", currentVariant);
    console.log("➡ New Variant ID:", newVariant);
    console.log("➡ Quantity:", quantity);

    if (!currentVariant || !newVariant || isNaN(newVariant)) {
        console.error("❌ Error: Missing or invalid variant data.");
        return;
    }

    let updates = {};
    updates[currentVariant] = 0;
    updates[newVariant] = quantity;

    fetch(window.Shopify.routes.root + 'cart/update.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ updates })
    })
    .then(response => response.json())
    .then((data) => {
        if (data.status === 422) {
            console.error("❌ Shopify Error:", data);
            return;
        }

        console.log("✅ Cart updated successfully:", data);

        document.dispatchEvent(new CustomEvent(this.cartPage ? 'cart:build' : 'ajaxProduct:added'));

        if (this.newPopup) {
            setTimeout(() => {
                this.newPopup.style.display = 'none';
                this.newPopup.remove();
            }, 1000);
        }
    })
    .catch(error => console.error('❌ Error updating cart:', error));
}


}

// Register the custom element
customElements.define('cart-item-options', CartItemOptions);
