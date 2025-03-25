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


document.querySelector('[data-submit-btn]').addEventListener('click', function() {
    let selectedVariant = document.querySelector('[data-new-variant]').getAttribute('data-new-variant');
    let cartItemKey = document.querySelector('[data-cart-popup]').getAttribute('data-key');

    fetch('/cart/change.js', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: cartItemKey, quantity: 0 }) // Remove old variant
    }).then(() => {
        return fetch('/cart/add.js', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: selectedVariant, quantity: 1 }) // Add new variant
        });
    }).then(() => {
        location.reload(); // Refresh the cart
    });
});



