// code for popup mini cart change options start
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
    let currentVariant = this.dataset.key ? this.dataset.key.split(":")[0] : null;
    if (!currentVariant) {
        console.error("🚨 Error: Unable to detect current variant.");
        return;
    }

    let selectedOptions = {};
    document.querySelectorAll('[data-variant-inputs]:checked').forEach(selected => {
        let optionName = selected.getAttribute('data-option-name');
        let optionValue = selected.value;
        selectedOptions[optionName] = optionValue;
    });

    let variantsElement = document.getElementById('productVariantsnew');
    if (!variantsElement) {
        console.error("🚨 Error: Product variant data is unavailable.");
        return;
    }
    
    let variants = JSON.parse(variantsElement.textContent);
     console.error("current variant" , currentVariant);
    console.error("variantsElement" , variantsElement);
    let matchedVariant = variants.find(variant => {
        return Object.keys(selectedOptions).every((optionName, index) => {
            let optionKey = `option${index + 1}`;
            return variant[optionKey] === selectedOptions[optionName];
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
        this.closePopup();
        return;
    }

    let updates = {};
    updates[currentVariant] = 0; // Remove old variant
    updates[newVariantID] = parseInt(this.dataset.quantity || 1); // Add new variant

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
        this.updateMiniCart();

        // ✅ Close the popup after 1 second
        this.closePopup();
    })
    .catch((error) => {
        console.error('🚨 Fetch Error:', error);
    });
}
// ✅ Function to close the popup cleanly
closePopup() {
    if (this.newPopup) {
        setTimeout(() => {
            window.location.reload();
            this.newPopup.style.display = 'none';
            this.newPopup.remove();
        }, 500);
    }
}
// ✅ Function to update mini cart dynamically
updateMiniCart() {
    fetch(window.Shopify.routes.root + 'cart.js')
    .then(response => response.json())
    .then(cartData => {
        console.log("🛒 Updated Cart:", cartData);
        // Trigger an event or manually update the cart UI
        document.dispatchEvent(new CustomEvent("cart:updated", { detail: cartData }));
    });
}
}
customElements.define('cart-item-options', CartItemOptions);

// code for popup mini cart change options end



// Js for recommaned product cart drawer start
// document.addEventListener("DOMContentLoaded", function () {
//     let swiperInstance;

//     function initSwiper() {
//         let sliderContainer = document.querySelector(".swiper.product-slider");

//         if (!sliderContainer) {
//             console.warn("Swiper slider not found. Waiting for DOM update...");
//             setTimeout(initSwiper, 500); // Wait and retry
//             return;
//         }

//         let slides = sliderContainer.querySelectorAll(".swiper-slide");
//         let slideCount = slides.length;

//         if (swiperInstance) {
//             swiperInstance.destroy(true, true); // Destroy existing instance
//         }

//         let enableLoop = slideCount > 2; // Enable loop mode only if there are enough slides

//         swiperInstance = new Swiper(".swiper.product-slider", {
//             slidesPerView: 1,
//             spaceBetween: 10,
//             navigation: {
//                 nextEl: ".swiper-button-next",
//                 prevEl: ".swiper-button-prev",
//             },
//             loop: enableLoop,
//         });

//         console.log("✅ Swiper initialized. Slides:", slideCount, "Loop enabled:", enableLoop);
//     }

//     // Function to retry Swiper initialization when Shopify updates sections
//     function reinitializeSwiper() {
//         setTimeout(() => {
//             console.log("♻️ Reinitializing Swiper after cart update...");
//             initSwiper();
//         }, 1000); // Delay to ensure section is fully loaded
//     }

//     // Listen for Shopify section updates and cart changes
//     document.addEventListener("shopify:section:load", reinitializeSwiper);
//     document.addEventListener("cart:updated", reinitializeSwiper);
//     document.addEventListener("cart:open", reinitializeSwiper);

//     // Observe changes in the cart recommendations section
//     const cartRecommendations = document.querySelector("[data-cart-recommendations]");
//     if (cartRecommendations) {
//         const observer = new MutationObserver(reinitializeSwiper);
//         observer.observe(cartRecommendations, { childList: true, subtree: true });
//     }

//     // Initialize Swiper on page load
//     initSwiper();
// });
document.addEventListener("DOMContentLoaded", function () {
    let swiperInstance;
    let isReinitializing = false; // Prevent multiple reinitializations

    function initSwiper() {
        let sliderContainer = document.querySelector(".swiper.product-slider");

        if (!sliderContainer) {
            console.warn("Swiper slider not found. Waiting for DOM update...");
            setTimeout(initSwiper, 500); // Wait and retry
            return;
        }

        let slides = sliderContainer.querySelectorAll(".swiper-slide");
        let slideCount = slides.length;

        if (swiperInstance) {
            swiperInstance.destroy(true, true); // Destroy existing instance
        }

        let enableLoop = slideCount > 2; // Enable loop mode only if there are enough slides

        swiperInstance = new Swiper(".swiper.product-slider", {
            slidesPerView: 1,
            spaceBetween: 10,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            loop: enableLoop,
        });

        console.log("✅ Swiper initialized. Slides:", slideCount, "Loop enabled:", enableLoop);
        isReinitializing = false; // Reset flag after initialization
    }

    // Function to retry Swiper initialization when Shopify updates the cart
    function reinitializeSwiper() {
        if (isReinitializing) return; // Prevent multiple calls
        isReinitializing = true;

        setTimeout(() => {
            console.log("♻️ Reinitializing Swiper after cart update...");
            initSwiper();
        }, 1000); // Delay to ensure section is fully loaded
    }

    // Listen for Shopify section updates and cart changes
    //document.addEventListener("shopify:section:load", reinitializeSwiper);
    document.addEventListener("cart:updated", reinitializeSwiper);
    document.addEventListener("cart:open", reinitializeSwiper);

    // Detect when an item is removed from the cart
    document.addEventListener("click", function (event) {
        if (event.target.matches(".cart-remove, .cart-remove *")) {
            console.log("🗑 Product removed. Waiting for cart update...");
            setTimeout(reinitializeSwiper, 1000); // Reinitialize after cart refresh
        }
    });

    // Observe changes in the cart recommendations section
    const cartRecommendations = document.querySelector("[data-cart-recommendations]");
    if (cartRecommendations) {
        const observer = new MutationObserver(reinitializeSwiper);
        observer.observe(cartRecommendations, { childList: true, subtree: true });
    }

    // Initialize Swiper on page load
    initSwiper();
});



// Js for recommaned product cart drawer end 




 
