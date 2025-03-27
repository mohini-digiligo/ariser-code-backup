class CartItemOptions extends HTMLElement {
  constructor() {
    super();
    this.cartPage = this.classList.contains('cartPageItem');
    this.submitBtn = this.querySelector('[data-submit-btn]'); // Set the button reference
  }

  connectedCallback() {
    const variantInputs = this.querySelectorAll('.variant-input input[type="radio"]');

    // Store initial variant selection (from the checked radio button)
    this.dataset.key = this.dataset.key || this.querySelector('.variant-input input[type="radio"]:checked')?.value || '';

    variantInputs.forEach(input => {
      input.addEventListener('change', (e) => {
        const newVariant = e.target.value;
        this.dataset.newVariant = newVariant;

        console.log("Current Variant:", this.dataset.key);
        console.log("New Variant:", this.dataset.newVariant);

        // Check if the variant has actually changed
        if (newVariant !== this.dataset.key) {
          this.updateBtn(true);
        } else {
          this.updateBtn(false);
        }
      });
    });

    if (this.submitBtn) {
      this.submitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        this.changeCartItems();
      });
    }
  }

  changeCartItems() {
    let currentVariant = this.dataset.key,
        newVariant = this.dataset.newVariant;

    if (!newVariant || newVariant === currentVariant) {
      console.warn("No variant change detected.");
      return;
    }

    let updates = {};
    updates[currentVariant] = 0;
    updates[newVariant] = parseInt(this.dataset.quantity) || 1;

    fetch(window.Shopify.routes.root + 'cart/update.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ updates })
    })
    .then(response => response.json())
    .then((data) => {
      if (data.status) return;
      if (this.cartPage) {
        document.dispatchEvent(new CustomEvent('cart:build'));
      } else {
        document.dispatchEvent(new CustomEvent('ajaxProduct:added'));
      }

      // Reset button after cart update
      this.updateBtn(false);
      this.dataset.key = newVariant;
    })
    .catch((error) => console.error('Error:', error));
  }

  updateBtn(status) {
    if (this.submitBtn) {
      if (status) {
        this.submitBtn.removeAttribute('disabled');
      } else {
        this.submitBtn.setAttribute('disabled', 'true');
      }
    } else {
      console.warn("Submit button not found.");
    }
  }
}

customElements.define('cart-item-options', CartItemOptions);
