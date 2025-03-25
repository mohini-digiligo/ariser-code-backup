/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};



/******/ })()
;


document.querySelectorAll('.variant-option').forEach(option => {
    option.addEventListener('change', function() {
        let selectedVariant = this.getAttribute('data-variant-id');
        document.querySelector('[data-new-variant]').setAttribute('data-new-variant', selectedVariant);
    });
});


document.querySelectorAll('.variant-option').forEach(option => {
    option.addEventListener('change', function() {
        document.querySelector('[data-submit-btn]').removeAttribute('disabled');
    });
});

document.querySelectorAll('[data-cart-popup-open]').forEach(button => {
    button.addEventListener('click', function(event) {
        console.log("Change options clicked!");
        
        let productId = this.closest('cart-item-options').getAttribute('class').match(/js-modal-open-quick-modal-(\d+)-/)[1];
        let cartItemKey = this.closest('cart-item-options').getAttribute('data-key');
        
        let modalId = `#js-modal-open-quick-modal-${productId}-${cartItemKey}`;
        let modal = document.querySelector(modalId);
        
        if (modal) {
            modal.classList.add('activeCartPopUp'); // Open the modal
        } else {
            console.error("Modal not found:", modalId);
        }
    });
});




