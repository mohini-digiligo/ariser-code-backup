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
