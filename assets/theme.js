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
                        console.warn("⚠️ Theme object is not available.");
                    }

                    this.popUpClose = this.newPopup.querySelector('[data-cart-popup-close]');
                    if (this.popUpClose) {
                        this.popUpClose.addEventListener('click', (event) => {
                            event.preventDefault();
                            let elements = document.querySelector('.m-cart-drawer');
                            if (elements) {
                                elements.classList.add('m-cart-drawer--active');
                            }
                            this.newPopup.style.display = 'none';
                            this.newPopup.remove();
                        });
                    }

                    this.submitBtn = this.newPopup.querySelector('[data-submit-btn]');
                    if (this.submitBtn) {
                        this.submitBtn.addEventListener('click', (event) => {
                            event.preventDefault();
                            this.changeCartItems();
                        });
                    }

                    // Fix: Ensure correct `data-new-variant` is set every time user selects a new size
                    this.newPopup.querySelectorAll('input[name="size"]').forEach((radio) => {
                        radio.addEventListener("change", (event) => {
                            let selectedVariant = event.target.getAttribute("data-variant-id");

                            console.log("✅ Selected Variant ID:", selectedVariant);

                            if (selectedVariant) {
                                this.setAttribute("data-new-variant", selectedVariant);
                                this.updateBtn(true); // Enable submit button
                            } else {
                                console.error("❌ Error: No valid variant ID found.");
                            }
                        });
                    });
                }
            });
        }
    }

    changeCartItems() {
    if (this.submitBtn) {
        this.submitBtn.setAttribute("disabled", "true"); // Prevent multiple clicks
    }

    let currentVariant = this.getAttribute('data-key');
    let newVariant = this.getAttribute('data-new-variant');
    let quantity = parseInt(this.getAttribute('data-quantity')) || 1;

    if (!newVariant || isNaN(newVariant)) {
        console.error("❌ Error: Missing or invalid new variant.");
        return;
    }

    if (currentVariant === newVariant) {
        console.warn("⚠️ Selected variant is the same. No update needed.");
        return;
    }

    console.log("🔄 Updating Cart: Removing:", currentVariant, " Adding:", newVariant);

    let updates = { [currentVariant]: 0, [newVariant]: quantity };

    fetch(window.Shopify.routes.root + 'cart/update.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ updates })
    })
    .then(response => response.json())
    .then((data) => {
        console.log("📩 Shopify API Response:", data);
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
    .catch(error => console.error('❌ Error updating cart:', error))
    .finally(() => {
        if (this.submitBtn) {
            this.submitBtn.removeAttribute("disabled"); // Re-enable button after update
        }
    });
}

}

customElements.define('cart-item-options', CartItemOptions);
