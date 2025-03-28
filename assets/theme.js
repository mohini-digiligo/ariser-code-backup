class CartItemOptions extends HTMLElement {
    constructor() {
        super();
        this.popup = this.querySelector("template");
        this.cartPage = this.classList.contains('cartPageItem');

        if (this.popup) {
            this.querySelector('[data-cart-popup-open]').addEventListener('click', () => {
                let popUpHtml = this.popup.content.cloneNode(true);
                popUpHtml.firstElementChild.classList.add('activeCartPopUp'); // Ensure class is added

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
                }
            });
        }
    }

    changeCartItems() {
        let currentVariant = this.getAttribute('data-key');
        let newVariant = this.getAttribute('data-new-variant'); 
        let quantity = parseInt(this.getAttribute('data-quantity')) || 1;

        if (!currentVariant || !newVariant) {
            console.error("Missing variant data.");
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
            if (data.status) return;

            document.dispatchEvent(new CustomEvent(this.cartPage ? 'cart:build' : 'ajaxProduct:added'));

            if (this.newPopup) {
                setTimeout(() => {
                    this.newPopup.style.display = 'none';
                    this.newPopup.remove();
                }, 1000);
            }
        })
        .catch(error => console.error('Error:', error));
    }

    updateBtn(status) {
        this.submitBtn?.toggleAttribute('disabled', !status);
    }
}

customElements.define('cart-item-options', CartItemOptions);
