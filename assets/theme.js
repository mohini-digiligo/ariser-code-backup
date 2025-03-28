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
                        this.popUpClose.addEventListener('click', function (event) {
                            event.preventDefault();
                            let elements = document.querySelector('.m-cart-drawer');
                            if (elements) {
                                elements.classList.add('m-cart-drawer--active');
                            }
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

                    // 🔹 Fix: Update `newVariant` when size is selected
                    this.newPopup.querySelectorAll('input[name="size"]').forEach((radio) => {
                        radio.addEventListener("change", function () {
                            let selectedVariant = this.getAttribute("data-variant-id");
                            console.log("✅ Selected Variant ID:", selectedVariant);
                            document.querySelector('[data-new-variant]').setAttribute("data-new-variant", selectedVariant);
                            this.updateBtn(true); // Enable submit button
                        }.bind(this));
                    });
                }
            }.bind(this));
        }
    }

    changeCartItems() {
        let currentVariant = this.getAttribute('data-key');  // Variant being removed
        let newVariant = this.getAttribute('data-new-variant');  // Variant being added
        let quantity = parseInt(this.getAttribute('data-quantity')) || 1;

        console.log("🔄 Updating Cart:");
        console.log("➡ Removing Variant ID:", currentVariant);
        console.log("➡ Adding Variant ID:", newVariant);
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

    updateBtn(status) {
        if (this.submitBtn) {
            if (status) {
                this.submitBtn.removeAttribute('disabled');
            } else {
                this.submitBtn.setAttribute('disabled', 'true');
            }
        }
    }
}

customElements.define('cart-item-options', CartItemOptions);
