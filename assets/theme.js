changeCartItems() {
    let currentVariant = this.dataset.key,
        newVariant = this.dataset.newVariant;

    console.log("Current Variant:", currentVariant);
    console.log("New Variant:", newVariant);

    if (!newVariant || newVariant === currentVariant) {
        console.warn("No variant change detected.");
        return;
    }

    let updates = {};
    updates[currentVariant] = 0; // Remove old variant
    updates[newVariant] = parseInt(this.dataset.quantity); // Add new variant

    fetch(window.Shopify.routes.root + 'cart/update.js', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
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

        // ✅ Disable button after cart update
        this.updateBtn(false);

        // ✅ Update dataset key to reflect new variant
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

document.addEventListener('DOMContentLoaded', function () {
    let variantInputs = document.querySelectorAll('.variant-input input[type="radio"]');
    let submitBtn = document.querySelector('[data-submit-btn]');
    
    if (!submitBtn) return;

    let initialVariant = document.querySelector('.variant-input input[type="radio"]:checked')?.value;

    variantInputs.forEach(input => {
        input.addEventListener('change', function () {
            let selectedVariant = this.value;
            submitBtn.dataset.newVariant = selectedVariant; // Store the new variant in data attribute

            if (selectedVariant !== initialVariant) {
                submitBtn.removeAttribute('disabled'); // Enable button
            } else {
                submitBtn.setAttribute('disabled', 'true'); // Keep disabled if variant is same
            }
        });
    });

    // ✅ Handle the Change button click WITHOUT modifying popup logic
    submitBtn.addEventListener('click', function () {
        changeCartItems.call(this); // Call changeCartItems function when button is clicked
    });
});
