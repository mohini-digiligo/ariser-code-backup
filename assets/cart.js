/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GQ: () => (/* binding */ MinimogSettings),
/* harmony export */   LE: () => (/* binding */ MinimogTheme),
/* harmony export */   gM: () => (/* binding */ MinimogLibs),
/* harmony export */   rZ: () => (/* binding */ MinimogStrings),
/* harmony export */   s0: () => (/* binding */ MinimogEvents)
/* harmony export */ });
/* harmony import */ var _utils_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8971);
/* harmony import */ var _libs_loadjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9280);
/* harmony import */ var _libs_loadjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_libs_loadjs__WEBPACK_IMPORTED_MODULE_0__);


window.MinimogEvents = window.MinimogEvents || new _utils_events__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z();
window._ThemeEvent = window.MinimogEvents;
window.MinimogLibs.loadjs = __loadjs;
const MinimogEvents = window.MinimogEvents;
const MinimogTheme = window.MinimogTheme || {};
const MinimogSettings = window.MinimogSettings || {};
const MinimogStrings = window.MinimogStrings || {};
const MinimogLibs = window.MinimogLibs || {};

/***/ }),

/***/ 9280:
/***/ (() => {

__loadjs = function () {
  var h = function () {},
    c = {},
    u = {},
    f = {};
  function o(e, n) {
    if (e) {
      var r = f[e];
      if (u[e] = n, r) for (; r.length;) r[0](e, n), r.splice(0, 1);
    }
  }
  function l(e, n) {
    e.call && (e = {
      success: e
    }), n.length ? (e.error || h)(n) : (e.success || h)(e);
  }
  function d(r, t, s, i) {
    var c,
      o,
      e = document,
      n = s.async,
      u = (s.numRetries || 0) + 1,
      f = s.before || h,
      l = r.replace(/[\?|#].*$/, ""),
      a = r.replace(/^(css|img)!/, "");
    i = i || 0, /(^css!|\.css$)/.test(l) ? ((o = e.createElement("link")).rel = "stylesheet", o.href = a, (c = "hideFocus" in o) && o.relList && (c = 0, o.rel = "preload", o.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(l) ? (o = e.createElement("img")).src = a : ((o = e.createElement("script")).src = r, o.async = void 0 === n || n), !(o.onload = o.onerror = o.onbeforeload = function (e) {
      var n = e.type[0];
      if (c) try {
        o.sheet.cssText.length || (n = "e");
      } catch (e) {
        18 != e.code && (n = "e");
      }
      if ("e" == n) {
        if ((i += 1) < u) return d(r, t, s, i);
      } else if ("preload" == o.rel && "style" == o.as) return o.rel = "stylesheet";
      t(r, n, e.defaultPrevented);
    }) !== f(r, o) && e.head.appendChild(o);
  }
  function r(e, n, r) {
    var t, s;
    if (n && n.trim && (t = n), s = (t ? r : n) || {}, t) {
      if (t in c) throw "LoadJS";
      c[t] = !0;
    }
    function i(n, r) {
      !function (e, t, n) {
        var r,
          s,
          i = (e = e.push ? e : [e]).length,
          c = i,
          o = [];
        for (r = function (e, n, r) {
          if ("e" == n && o.push(e), "b" == n) {
            if (!r) return;
            o.push(e);
          }
          --i || t(o);
        }, s = 0; s < c; s++) d(e[s], r, n);
      }(e, function (e) {
        l(s, e), n && l({
          success: n,
          error: r
        }, e), o(t, e);
      }, s);
    }
    if (s.returnPromise) return new Promise(i);
    i();
  }
  return r.ready = function (e, n) {
    return function (e, r) {
      e = e.push ? e : [e];
      var n,
        t,
        s,
        i = [],
        c = e.length,
        o = c;
      for (n = function (e, n) {
        n.length && i.push(e), --o || r(i);
      }; c--;) t = e[c], (s = u[t]) ? n(t, s) : (f[t] = f[t] || []).push(n);
    }(e, function (e) {
      l(n, e);
    }), r;
  }, r.done = function (e) {
    o(e, []);
  }, r.reset = function () {
    c = {}, u = {}, f = {};
  }, r.isDefined = function (e) {
    return e in c;
  }, r;
}();

/***/ }),

/***/ 6295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mdn_polyfills_Node_prototype_append_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2422);
/* harmony import */ var mdn_polyfills_Node_prototype_append_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mdn_polyfills_Node_prototype_append_js__WEBPACK_IMPORTED_MODULE_0__);

class JSX {
  constructor() {
    this.component = this.component.bind(this);
    return this.component;
  }
  component(tagName, attrs) {
    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }
    if (typeof tagName === 'function') {
      // Override children
      return tagName({
        ...attrs,
        children
      });
    }
    if (children) {
      children = children.filter(val => val !== null);
    }
    if (attrs) {
      if (attrs.class) {
        attrs.className = attrs.class;
      }
      delete attrs.children;
    }

    // Normal DOM node tagName
    function createWithAttrs(tagName, attrs) {
      attrs = attrs || {};
      let elem = document.createElement(tagName);
      try {
        elem = Object.assign(elem, attrs);
      } catch {
        const attrKeys = Object.keys(attrs);
        for (let i = 0; i < attrKeys.length; i++) {
          if (attrs[i] !== 'dataSet') {
            elem.setAttribute(attrKeys[i], attrs[attrKeys[i]]);
          }
        }
      }
      return elem;
    }
    let elem = tagName !== 'fragment' ? createWithAttrs(tagName, attrs) : document.createDocumentFragment();
    // Evaluate SVG DOM node tagName

    // All svg inner tags: https://developer.mozilla.org/en-US/docs/Web/SVG/Element
    const svgInnerTags = ['svg', 'path', 'rect', 'text', 'circle', 'g'];
    if (svgInnerTags.indexOf(tagName) !== -1) {
      elem = document.createElementNS('http://www.w3.org/2000/svg', tagName);
      for (const key in attrs) {
        const attrName = key === 'className' ? 'class' : key;
        elem.setAttribute(attrName, attrs[key]);
      }
    }

    // Populate children to created DOM Node
    for (const child of children) {
      if (Array.isArray(child)) {
        elem.append(...child);
      } else {
        elem.append(child);
      }
    }

    // After elements are created
    if (attrs !== null && attrs !== void 0 && attrs.dataSet) {
      for (const key in attrs.dataSet) {
        if (Object.prototype.hasOwnProperty.call(attrs.dataSet, key)) {
          elem.dataset[key] = attrs.dataSet[key];
        }
      }
    }
    if (attrs && !window.__aleartedJSXData) {
      if (Object.keys(attrs).find(key => key.match(/^data-/))) {
        console.trace(`Your "${tagName}" component uses a data-* attribute! Use dataSet instead!!`);
        alert('Do not use data-* in your JSX component! Use dataSet instead!! - Check the console.trace for more info');
        window.__aleartedJSXData = true;
      }
    }
    if (attrs !== null && attrs !== void 0 && attrs.ref) {
      // Create a custom reference to DOM node
      if (typeof attrs.ref === 'function') {
        attrs.ref(elem);
      } else {
        attrs.ref = elem;
      }
    }
    if (attrs !== null && attrs !== void 0 && attrs.on) {
      Object.entries(attrs.on).forEach(_ref => {
        let [event, handler] = _ref;
        elem.addEventListener(event, handler);
      });
    }

    // Append style attributes to created DOM node
    if (attrs !== null && attrs !== void 0 && attrs.style) {
      Object.entries(attrs.style).forEach(_ref2 => {
        let [property, value] = _ref2;
        elem.style.setProperty(property, value);
      });
      // Object.assign(elem.style, attrs.style);
    }

    return elem;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new JSX());

/***/ }),

/***/ 8971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Event)
/* harmony export */ });
/* unused harmony export addEventDelegate */
const addEventDelegate = _ref => {
  let {
    context = document.documentElement,
    event = 'click',
    selector,
    handler,
    capture = false
  } = _ref;
  const listener = function (e) {
    // loop parent nodes from the target to the delegation node
    for (let target = e.target; target && target !== this; target = target.parentNode) {
      if (target.matches(selector)) {
        handler.call(target, e, target);
        break;
      }
    }
  };
  context.addEventListener(event, listener, capture);
  return () => {
    context.removeEventListener(event, listener, capture);
  };
};
class Event {
  constructor() {
    this.events = {};
  }
  get evts() {
    return Object.keys(this.events);
  }
  subscribe(event, handler) {
    this.events[event] = this.events[event] || [];
    this.events[event].push(handler);
    return () => this.unSubscribe(event, handler);
  }
  unSubscribe(event, handler) {
    const handlers = this.events[event];
    if (handlers && Array.isArray(handlers)) {
      for (let i = 0; i < handlers.length; i++) {
        if (handlers[i] === handler) {
          handlers.splice(i, 1);
          break;
        }
      }
    }
  }
  emit(event) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    console.groupCollapsed(`Event emitted: ${event}`);
    console.trace();
    console.groupEnd();
    (this.events[event] || []).forEach(handler => {
      handler(...args);
    });
  }
}

/***/ }),

/***/ 2422:
/***/ (() => {

!function () {
  function t() {
    var e = Array.prototype.slice.call(arguments),
      n = document.createDocumentFragment();
    e.forEach(function (e) {
      var t = e instanceof Node;
      n.appendChild(t ? e : document.createTextNode(String(e)));
    }), this.appendChild(n);
  }
  [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach(function (e) {
    e.hasOwnProperty("append") || Object.defineProperty(e, "append", {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: t
    });
  });
}();

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./node_modules/@shopify/theme-addresses/loader.js
var query = "query countries($locale: SupportedLocale!) {" + "  countries(locale: $locale) {" + "    name" + "    code" + "    labels {" + "      address1" + "      address2" + "      city" + "      company" + "      country" + "      firstName" + "      lastName" + "      phone" + "      postalCode" + "      zone" + "    }" + "    formatting {" + "      edit" + "    }" + "    zones {" + "      name" + "      code" + "    }" + "  }" + "}";
var GRAPHQL_ENDPOINT = 'https://country-service.shopifycloud.com/graphql';
function loadCountries(locale) {
  var response = fetch(GRAPHQL_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      query: query,
      operationName: 'countries',
      variables: {
        locale: toSupportedLocale(locale)
      }
    })
  });
  return response.then(function (res) {
    return res.json();
  }).then(function (countries) {
    return countries.data.countries;
  });
}
var DEFAULT_LOCALE = 'EN';
var SUPPORTED_LOCALES = ['DA', 'DE', 'EN', 'ES', 'FR', 'IT', 'JA', 'NL', 'PT', 'PT_BR'];
function toSupportedLocale(locale) {
  var supportedLocale = locale.replace(/-/, '_').toUpperCase();
  if (SUPPORTED_LOCALES.indexOf(supportedLocale) !== -1) {
    return supportedLocale;
  } else if (SUPPORTED_LOCALES.indexOf(supportedLocale.substring(0, 2)) !== -1) {
    return supportedLocale.substring(0, 2);
  } else {
    return DEFAULT_LOCALE;
  }
}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-addresses/helpers.js
function mergeObjects() {
  var to = Object({});
  for (var index = 0; index < arguments.length; index++) {
    var nextSource = arguments[index];
    if (nextSource) {
      for (var nextKey in nextSource) {
        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
          to[nextKey] = nextSource[nextKey];
        }
      }
    }
  }
  return to;
}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-addresses/addressForm.js


var FIELD_REGEXP = /({\w+})/g;
var LINE_DELIMITER = '_';
var INPUT_SELECTORS = {
  lastName: '[name="address[last_name]"]',
  firstName: '[name="address[first_name]"]',
  company: '[name="address[company]"]',
  address1: '[name="address[address1]"]',
  address2: '[name="address[address2]"]',
  country: '[name="address[country]"]',
  zone: '[name="address[province]"]',
  postalCode: '[name="address[zip]"]',
  city: '[name="address[city]"]',
  phone: '[name="address[phone]"]'
};
function AddressForm(rootEl, locale, options) {
  locale = locale || 'en';
  options = options || {
    inputSelectors: {}
  };
  var formElements = loadFormElements(rootEl, mergeObjects(INPUT_SELECTORS, options.inputSelectors));
  validateElements(formElements);
  return loadShippingCountries(options.shippingCountriesOnly).then(function (shippingCountryCodes) {
    return loadCountries(locale).then(function (countries) {
      init(rootEl, formElements, filterCountries(countries, shippingCountryCodes));
    });
  });
}

/**
 * Runs when countries have been loaded
 */
function init(rootEl, formElements, countries) {
  populateCountries(formElements, countries);
  var selectedCountry = formElements.country.input ? formElements.country.input.value : null;
  setEventListeners(rootEl, formElements, countries);
  handleCountryChange(rootEl, formElements, selectedCountry, countries);
}

/**
 * Handles when a country change: set labels, reorder fields, populate zones
 */
function handleCountryChange(rootEl, formElements, countryCode, countries) {
  var country = getCountry(countryCode, countries);
  setLabels(formElements, country);
  reorderFields(rootEl, formElements, country);
  populateZones(formElements, country);
}

/**
 * Sets up event listener for country change
 */
function setEventListeners(rootEl, formElements, countries) {
  formElements.country.input.addEventListener('change', function (event) {
    handleCountryChange(rootEl, formElements, event.target.value, countries);
  });
}

/**
 * Reorder fields in the DOM and add data-attribute to fields given a country
 */
function reorderFields(rootEl, formElements, country) {
  var formFormat = country.formatting.edit;
  var countryWrapper = formElements.country.wrapper;
  var afterCountry = false;
  getOrderedField(formFormat).forEach(function (row) {
    row.forEach(function (line) {
      formElements[line].wrapper.dataset.lineCount = row.length;
      if (!formElements[line].wrapper) {
        return;
      }
      if (line === 'country') {
        afterCountry = true;
        return;
      }
      if (afterCountry) {
        rootEl.append(formElements[line].wrapper);
      } else {
        rootEl.insertBefore(formElements[line].wrapper, countryWrapper);
      }
    });
  });
}

/**
 * Update labels for a given country
 */
function setLabels(formElements, country) {
  Object.keys(formElements).forEach(function (formElementName) {
    formElements[formElementName].labels.forEach(function (label) {
      label.textContent = country.labels[formElementName];
    });
  });
}

/**
 * Add right countries in the dropdown for a given country
 */
function populateCountries(formElements, countries) {
  var countrySelect = formElements.country.input;
  var duplicatedCountrySelect = countrySelect.cloneNode(true);
  countries.forEach(function (country) {
    var optionElement = document.createElement('option');
    optionElement.value = country.code;
    optionElement.textContent = country.name;
    duplicatedCountrySelect.appendChild(optionElement);
  });
  countrySelect.innerHTML = duplicatedCountrySelect.innerHTML;
  if (countrySelect.dataset.default) {
    countrySelect.value = countrySelect.dataset.default;
  }
}

/**
 * Add right zones in the dropdown for a given country
 */
function populateZones(formElements, country) {
  var zoneEl = formElements.zone;
  if (!zoneEl) {
    return;
  }
  if (country.zones.length === 0) {
    zoneEl.wrapper.dataset.ariaHidden = 'true';
    zoneEl.input.innerHTML = '';
    return;
  }
  zoneEl.wrapper.dataset.ariaHidden = 'false';
  var zoneSelect = zoneEl.input;
  var duplicatedZoneSelect = zoneSelect.cloneNode(true);
  duplicatedZoneSelect.innerHTML = '';
  country.zones.forEach(function (zone) {
    var optionElement = document.createElement('option');
    optionElement.value = zone.code;
    optionElement.textContent = zone.name;
    duplicatedZoneSelect.appendChild(optionElement);
  });
  zoneSelect.innerHTML = duplicatedZoneSelect.innerHTML;
  if (zoneSelect.dataset.default) {
    zoneSelect.value = zoneSelect.dataset.default;
  }
}

/**
 * Will throw if an input or a label is missing from the wrapper
 */
function validateElements(formElements) {
  Object.keys(formElements).forEach(function (elementKey) {
    var element = formElements[elementKey].input;
    var labels = formElements[elementKey].labels;
    if (!element) {
      return;
    }
    if (typeof element !== 'object') {
      throw new TypeError(formElements[elementKey] + ' is missing an input or select.');
    } else if (typeof labels !== 'object') {
      throw new TypeError(formElements[elementKey] + ' is missing a label.');
    }
  });
}

/**
 * Given an countryCode (eg. 'CA'), will return the data of that country
 */
function getCountry(countryCode, countries) {
  countryCode = countryCode || 'CA';
  return countries.filter(function (country) {
    return country.code === countryCode;
  })[0];
}

/**
 * Given a format (eg. "{firstName}{lastName}_{company}_{address1}_{address2}_{city}_{country}{province}{zip}_{phone}")
 * will return an array of how the form needs to be formatted, eg.:
 * =>
 * [
 *   ['firstName', 'lastName'],
 *   ['company'],
 *   ['address1'],
 *   ['address2'],
 *   ['city'],
 *   ['country', 'province', 'zip'],
 *   ['phone']
 * ]
 */
function getOrderedField(format) {
  return format.split(LINE_DELIMITER).map(function (fields) {
    var result = fields.match(FIELD_REGEXP);
    if (!result) {
      return [];
    }
    return result.map(function (fieldName) {
      var newFieldName = fieldName.replace(/[{}]/g, '');
      switch (newFieldName) {
        case 'zip':
          return 'postalCode';
        case 'province':
          return 'zone';
        default:
          return newFieldName;
      }
    });
  });
}

/**
 * Given a rootEl where all `input`s, `select`s, and `labels` are nested, it
 * will returns all form elements (wrapper, input and labels) of the form.
 * See `FormElements` type for details
 */
function loadFormElements(rootEl, inputSelectors) {
  var elements = {};
  Object.keys(INPUT_SELECTORS).forEach(function (inputKey) {
    var input = rootEl.querySelector(inputSelectors[inputKey]);
    elements[inputKey] = input ? {
      wrapper: input.parentElement,
      input: input,
      labels: document.querySelectorAll('[for="' + input.id + '"]')
    } : {};
  });
  return elements;
}

/**
 * If shippingCountriesOnly is set to true, will return the list of countries the
 * shop ships to. Otherwise returns null.
 */
function loadShippingCountries(shippingCountriesOnly) {
  if (!shippingCountriesOnly) {
    // eslint-disable-next-line no-undef
    return Promise.resolve(null);
  }
  var response = fetch(location.origin + '/meta.json');
  return response.then(function (res) {
    return res.json();
  }).then(function (meta) {
    // If ships_to_countries has * in the list, it means the shop ships to
    // all countries
    return meta.ships_to_countries.indexOf('*') !== -1 ? null : meta.ships_to_countries;
  }).catch(function () {
    return null;
  });
}

/**
 * Only returns countries that are in includedCountryCodes
 * Returns all countries if no includedCountryCodes is passed
 */
function filterCountries(countries, includedCountryCodes) {
  if (!includedCountryCodes) {
    return countries;
  }
  return countries.filter(function (country) {
    return includedCountryCodes.indexOf(country.code) !== -1;
  });
}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-addresses/theme-addresses.js


;// CONCATENATED MODULE: ./src/js/modules/cart.js
/* provided dependency */ var MinimogSettings = __webpack_require__(4558)["GQ"];
/* provided dependency */ var MinimogLibs = __webpack_require__(4558)["gM"];
/* provided dependency */ var MinimogEvents = __webpack_require__(4558)["s0"];
/* provided dependency */ var MinimogTheme = __webpack_require__(4558)["LE"];
/* provided dependency */ var MinimogStrings = __webpack_require__(4558)["rZ"];
/* provided dependency */ var createElement = __webpack_require__(6295)["Z"];

class MCartRemoveButton extends HTMLElement {
  constructor() {
    super();
    this.addEventListener('click', event => {
      event.preventDefault();
      const cartItems = this.closest('m-cart-template') || this.closest('m-cart-drawer-items');
      cartItems.updateQuantity(this.dataset.index, 0);
    });
  }
}
customElements.define('m-cart-remove-button', MCartRemoveButton);
class MCartTemplate extends HTMLElement {
  constructor() {
    super();
    this.cartUpdateUnsubscriber = undefined;
    this.isCartPage = MinimogSettings.templateName === 'cart';
    this.cartDrawerWrapper = document.querySelector('m-cart-drawer');
    this.cartDrawerInner = document.querySelector('.m-cart-drawer--inner');
    this.mainCartItems = this.querySelector('[data-minimog-cart-items]');
    this.cartSubTotal = this.querySelector('[data-cart-subtotal]');
    this.cartDiscount = this.querySelector('[data-minimog-cart-discounts]');
    this.giftWrapping = this.querySelector('[data-minimog-gift-wrapping]');
    let loadingTarget = this.cartDrawerInner;
    if (this.isCartPage) loadingTarget = document.body;
    this.loading = new MinimogLibs.AnimateLoading(loadingTarget, {
      overlay: loadingTarget
    });
    this.rootUrl = window.Shopify.routes.root;
    const debouncedOnChange = debounce(event => {
      if (event.target.name !== 'id') {
        this.onChange(event);
      }
    }, 300);
    if (this.isCartPage) {
      this.mainCartItems.addEventListener('change', debouncedOnChange.bind(this));
    } else {
      this.addEventListener('change', debouncedOnChange.bind(this));
    }
    MinimogEvents.subscribe(MinimogTheme.pubSubEvents.cartUpdate, response => {
      this.getCart().then(cart => {
        this.updateCartCount(cart.item_count);
      });
    });
  }
  updateCartCount(itemCount) {
    const cartCounts = document.querySelectorAll('.m-cart-count-bubble');
    cartCounts.forEach(cartCount => {
      if (itemCount > 0) {
        cartCount.textContent = itemCount;
        cartCount.classList.remove('hidden');
      } else {
        cartCount.classList.add('hidden');
      }
    });
  }
  getCart() {
    return fetchJSON(this.rootUrl + 'cart.json');
  }
  connectedCallback() {
    this.cartUpdateUnsubscriber = MinimogEvents.subscribe(MinimogTheme.pubSubEvents.cartUpdate, event => {
      if (event.source === 'main-cart-items') {
        return;
      }
      this.onCartUpdate();
    });
  }
  disconnectedCallback() {
    if (this.cartUpdateUnsubscriber) {
      this.cartUpdateUnsubscriber();
    }
  }
  onCartUpdate() {
    let renderFooter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    const {
      routes
    } = window.MinimogSettings;
    fetch(`${routes.cart}?section_id=cart-template`).then(response => response.text()).then(responseText => {
      const html = new DOMParser().parseFromString(responseText, 'text/html');
      const cartItems = html.querySelector('[data-minimog-cart-items]');
      const cartSubTotal = html.querySelector('[data-cart-subtotal]');
      const cartDiscount = html.querySelector('[data-minimog-cart-discounts]');
      const giftWrapping = html.querySelector('[data-minimog-gift-wrapping]');
      if (this.isCartPage) {
        this.mainCartItems.innerHTML = cartItems.innerHTML;
        if (renderFooter) {
          this.cartSubTotal.innerHTML = cartSubTotal.innerHTML;
          this.cartDiscount.innerHTML = cartDiscount.innerHTML;
          this.giftWrapping.innerHTML = giftWrapping.innerHTML;
        }
        if (window.FoxKitV2 && window.FoxKitV2.Modules.InCart) {
          window.FoxKitV2.Modules.InCart.getCart();
        }
      }
    }).catch(e => {
      console.error(e);
    });
  }
  onChange(event) {
    this.updateQuantity(event.target.dataset.index, event.target.value, document.activeElement.getAttribute('name'));
  }
  updateQuantity(line, quantity, name) {
    this.loading.start();
    const {
      routes
    } = window.MinimogSettings;
    const body = JSON.stringify({
      line,
      quantity,
      sections: this.getSectionsToRender().map(section => section.section),
      sections_url: window.location.pathname
    });
    fetch(`${routes.cart_change_url}`, {
      ...fetchConfig(),
      ...{
        body
      }
    }).then(response => {
      return response.text();
    }).then(state => {
      const parsedState = JSON.parse(state);
      let quantityElement = document.getElementById(`MinimogDrawer-quantity-${line}`);
      if (this.isCartPage) {
        if (MinimogTheme.config.mqlMobile) {
          quantityElement = document.querySelector(`.MinimogQuantity-${line}.MinimogQuantity-mobile`);
        } else {
          quantityElement = document.querySelector(`.MinimogQuantity-${line}.MinimogQuantity-desktop`);
        }
      }
      const items = document.querySelectorAll('.m-cart--item');
      if (parsedState.errors) {
        this.loading.finish();
        quantityElement.value = quantityElement.getAttribute('value');
        this.updateLiveRegions(line, parsedState.errors);
        return;
      }
      this.classList.toggle('m-cart--empty', parsedState.item_count === 0);
      if (this.cartDrawerWrapper) this.cartDrawerWrapper.classList.toggle('m-cart--empty', parsedState.item_count === 0);
      this.getSectionsToRender().forEach(section => {
        const elementToReplace = document.getElementById(section.id).querySelector(section.selector) || document.getElementById(section.id);
        elementToReplace.innerHTML = this.getSectionInnerHTML(parsedState.sections[section.section], section.selector);
      });
      const updatedValue = parsedState.items[line - 1] ? parsedState.items[line - 1].quantity : undefined;
      let message = '';
      if (items.length === parsedState.items.length && updatedValue !== parseInt(quantityElement.value)) {
        if (typeof updatedValue === 'undefined') {
          message = window.MinimogStrings.cartError;
        } else {
          message = window.MinimogStrings.quantityError.replace('[quantity]', updatedValue);
        }
      }
      this.updateLiveRegions(line, message);
      MinimogEvents.emit(MinimogTheme.pubSubEvents.cartUpdate, {
        ...parsedState,
        source: 'main-cart-items'
      });
    }).catch(() => {}).finally(() => {
      this.loading.finish();
    });
  }
  updateLiveRegions(line, message) {
    let lineItemNode = document.getElementById(`MinimogCartDrawer-Item-${line}`);
    if (this.isCartPage) lineItemNode = document.getElementById(`MinimogCart-Item-${line}`);
    if (message !== '' && lineItemNode) {
      MinimogTheme.Notification.show({
        target: lineItemNode,
        type: 'warning',
        message: message
      });
    }
  }
  getSectionInnerHTML(html, selector) {
    return new DOMParser().parseFromString(html, 'text/html').querySelector(selector).innerHTML;
  }
  getSectionsToRender() {
    return [{
      id: 'MinimogCart',
      section: 'cart-template',
      selector: '[data-minimog-cart-items]'
    }, {
      id: 'MinimogCart',
      section: 'cart-template',
      selector: '[data-cart-subtotal]'
    }, {
      id: 'MinimogCart',
      section: 'cart-template',
      selector: '[data-minimog-cart-discounts]'
    }, {
      id: 'MinimogCart',
      section: 'cart-template',
      selector: '[data-minimog-gift-wrapping]'
    }];
  }
}
customElements.define('m-cart-template', MCartTemplate);
class MCartDrawer extends HTMLElement {
  constructor() {
    super();
    this.cartDrawerInner = this.querySelector('.m-cart-drawer--inner');
    this.cartDrawerCloseIcon = this.querySelector('.m-cart-drawer--close-icon');
    this.cartOverlay = this.querySelector('.m-cart--overlay');
    this.rootUrl = window.Shopify.routes.root;
    this.setHeaderCartIconAccessibility();
    this.cartDrawerCloseIcon.addEventListener('click', this.close.bind(this));
    this.addEventListener('click', event => {
      if (event.target.closest('.m-cart-drawer--inner') !== this.cartDrawerInner) {
        this.close();
      }
    });
  }
  setHeaderCartIconAccessibility() {
    const cartLinks = document.querySelectorAll('.m-cart-icon-bubble');
    cartLinks.forEach(cartLink => {
      cartLink.setAttribute('role', 'button');
      cartLink.setAttribute('aria-haspopup', 'dialog');
      cartLink.addEventListener('click', event => {
        if (MinimogSettings.enable_cart_drawer) {
          event.preventDefault();
          this.open(cartLink);
        }
      });
    });
  }
  open(triggeredBy) {
    if (triggeredBy) this.setActiveElement(triggeredBy);
    this.classList.add('m-cart-drawer--active');
    requestAnimationFrame(() => {
      this.style.setProperty('--cart-drawer-overlay-alpha', '0.5');
      this.cartDrawerInner.style.setProperty('--cart-drawer-inner-translate-x', '0');
    });
    document.documentElement.classList.add('prevent-scroll');
  }
  close() {
    this.style.setProperty('--cart-drawer-overlay-alpha', '0');
    this.cartDrawerInner.style.setProperty('--cart-drawer-inner-translate-x', '100%');
    setTimeout(() => {
      this.classList.remove('m-cart-drawer--active');
      document.documentElement.classList.remove('prevent-scroll');
    }, 300);
  }
  renderContents(parsedState) {
    this.classList.contains('m-cart--empty') && this.classList.remove('m-cart--empty');
    this.productId = parsedState.id;
    this.getSectionsToRender().forEach(section => {
      const sectionElement = section.selector ? document.querySelector(section.selector) : document.getElementById(section.id);
      sectionElement.innerHTML = this.getSectionInnerHTML(parsedState.sections[section.id], section.selector);
    });
    setTimeout(() => {
      this.open();
      if (window.FoxKitV2 && window.FoxKitV2.Modules.InCart) {
        window.FoxKitV2.Modules.InCart.getCart();
      }
    });
  }
  updateCartCount(itemCount) {
    const cartCounts = document.querySelectorAll('.m-cart-count-bubble');
    cartCounts.forEach(cartCount => {
      if (itemCount > 0) {
        cartCount.textContent = itemCount;
        cartCount.classList.remove('hidden');
      } else {
        cartCount.classList.add('hidden');
      }
    });
  }
  getCart() {
    return fetchJSON(this.rootUrl + 'cart.json');
  }
  onCartDrawerUpdate() {
    let updateFooter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    fetch(`${MinimogSettings.routes.cart}?section_id=cart-drawer`).then(response => response.text()).then(responseText => {
      this.getSectionsToRender().forEach(section => {
        if (section.block === 'cart-items') {
          const sectionElement = section.selector ? document.querySelector(section.selector) : document.getElementById(section.id);
          sectionElement.innerHTML = this.getSectionInnerHTML(responseText, section.selector);
          if (window.FoxKitV2 && window.FoxKitV2.Modules.InCart) {
            window.FoxKitV2.Modules.InCart.getCart();
          }
        } else {
          if (updateFooter) {
            const sectionElement = section.selector ? document.querySelector(section.selector) : document.getElementById(section.id);
            sectionElement.innerHTML = this.getSectionInnerHTML(responseText, section.selector);
          }
        }
      });
    }).catch(e => {
      console.error(e);
    });
    this.getCart().then(cart => {
      this.classList.toggle('m-cart--empty', cart.item_count === 0);
      this.updateCartCount(cart.item_count);
    });
  }
  getSectionInnerHTML(html) {
    let selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.shopify-section';
    return new DOMParser().parseFromString(html, 'text/html').querySelector(selector).innerHTML;
  }
  getSectionsToRender() {
    return [{
      id: 'cart-drawer',
      selector: '[data-minimog-cart-items]',
      block: 'cart-items'
    }, {
      id: 'cart-drawer',
      selector: '[data-minimog-cart-discounts]',
      block: 'cart-footer'
    }, {
      id: 'cart-drawer',
      selector: '[data-cart-subtotal]',
      block: 'cart-footer'
    }, {
      id: 'cart-drawer',
      selector: '[data-minimog-gift-wrapping]',
      block: 'cart-footer'
    }];
  }
  getSectionDOM(html) {
    let selector = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.shopify-section';
    return new DOMParser().parseFromString(html, 'text/html').querySelector(selector);
  }
  setActiveElement(element) {
    this.activeElement = element;
  }
}
customElements.define('m-cart-drawer', MCartDrawer);
class MCartDrawerItems extends MCartTemplate {
  getSectionsToRender() {
    return [{
      id: 'MinimogCartDrawer',
      section: 'cart-drawer',
      selector: '[data-minimog-cart-items]'
    }, {
      id: 'MinimogCartDrawer',
      section: 'cart-drawer',
      selector: '[data-minimog-cart-discounts]'
    }, {
      id: 'MinimogCartDrawer',
      section: 'cart-drawer',
      selector: '[data-cart-subtotal]'
    }, {
      id: 'MinimogCartDrawer',
      section: 'cart-drawer',
      selector: '[data-minimog-gift-wrapping]'
    }];
  }
}
customElements.define('m-cart-drawer-items', MCartDrawerItems);
class MCartAddons extends HTMLElement {
  constructor() {
    super();
    this.selectors = {
      zipCode: '[name="address[zip]"]',
      province: '[name="address[province]"]',
      country: '[name="address[country]"]',
      addressForm: '[data-address="root"]',
      shippingMessage: '.m-cart-shipping--message',
      cartDiscountCode: '[name="discount"]',
      cartDiscountCodeNoti: '[data-discount-noti]',
      cartNote: '[name="note"]',
      saveAddonButton: '.m-cart-addon--save-button',
      closeAddonButton: '.m-cart-addon--close-button',
      calcShippingButton: '.m-cart-addon--calc-shipping-button',
      triggerAddonButton: '.m-cart-addon--trigger-button'
    };
    this.cartWrapper = document.querySelector('.m-cart-drawer');
    this.isCartPage = MinimogSettings.templateName === 'cart';
    if (this.isCartPage) {
      this.cartWrapper = document.querySelector('m-cart-template');
    }
    this.cartOverlay = this.cartWrapper.querySelector('.m-cart--overlay');
    this.domNodes = queryDomNodes(this.selectors, this);
    this.rootUrl = window.Shopify.routes.root;
    this.discountCodeKey = 'minimog-discount-code';
    this.init();
  }
  init() {
    const {
      addressForm,
      cartDiscountCode,
      cartDiscountCodeNoti
    } = this.domNodes;
    addEventDelegate({
      selector: this.selectors.triggerAddonButton,
      handler: (e, addonButton) => {
        var _this$cartOverlay;
        e.preventDefault();
        if (this.isCartPage) {
          const addonCurrentActive = document.querySelector('.m-cart-addon--content.open');
          if (addonCurrentActive) addonCurrentActive.classList.remove('open');
        }
        const {
          open: addonTarget
        } = addonButton.dataset;
        const addonNode = this.cartWrapper.querySelector(`#m-addons-${addonTarget}`);
        addonButton.classList.add('active');
        addonNode === null || addonNode === void 0 ? void 0 : addonNode.classList.add('open');
        (_this$cartOverlay = this.cartOverlay) === null || _this$cartOverlay === void 0 ? void 0 : _this$cartOverlay.classList.add('open');
        this.openAddon = addonNode;
        if (addonTarget === 'shipping') {
          AddressForm(addressForm, window.Shopify.locale);
        }
      }
    });
    addEventDelegate({
      selector: this.selectors.closeAddonButton,
      context: this.cartWrapper,
      handler: this.close.bind(this)
    });
    addEventDelegate({
      selector: this.selectors.calcShippingButton,
      context: this.cartWrapper,
      handler: this.calcShipping.bind(this)
    });
    if (cartDiscountCode) {
      const code = localStorage.getItem(this.discountCodeKey);
      if (code) {
        cartDiscountCode.value = code;
        if (cartDiscountCodeNoti) {
          cartDiscountCodeNoti.style.display = 'inline';
        }
      }
    }
    this.saveAddonValue();
  }
  close(event) {
    event.preventDefault();
    this.openAddon.classList.remove('open');
    this.cartOverlay.classList.remove('open');
    this.openAddon = null;
  }
  calcShipping(event) {
    var _this$domNodes$zipCod;
    event.preventDefault();
    const actionsWrapper = event.target.closest('.m-cart-addon--actions');
    actionsWrapper.classList.add('shipping-calculating');
    const zipCode = (_this$domNodes$zipCod = this.domNodes.zipCode.value) === null || _this$domNodes$zipCod === void 0 ? void 0 : _this$domNodes$zipCod.trim();
    const country = this.domNodes.country.value;
    const province = this.domNodes.province.value;
    this.domNodes.shippingMessage.classList.remove('error');
    this.domNodes.shippingMessage.innerHTML = '';
    const showDeliveryDays = actionsWrapper.dataset.showDeliveryDays === 'true';
    fetch(`${this.rootUrl}cart/shipping_rates.json?shipping_address%5Bzip%5D=${zipCode}&shipping_address%5Bcountry%5D=${country}&shipping_address%5Bprovince%5D=${province}`).then(res => res.json()).then(res => {
      if (res && res.shipping_rates) {
        const {
          shipping_rates
        } = res;
        const {
          shippingRatesResult,
          noShippingRate
        } = MinimogStrings;
        if (shipping_rates.length > 0) {
          actionsWrapper.classList.remove('shipping-calculating');
          this.domNodes.shippingMessage.appendChild(createElement("p", {
            className: "mb-3 text-base"
          }, shippingRatesResult.replace('{{count}}', shipping_rates.length), ":"));
          shipping_rates.map(rate => {
            const {
              deliveryOne = 'Day',
              deliveryOther = 'Days'
            } = actionsWrapper.dataset;
            let deliveryDays = '';
            if (rate.delivery_days.length > 0 && showDeliveryDays) {
              let textDay = deliveryOne;
              const firstDeliveryDay = rate.delivery_days[0];
              const lastDeliveryDay = rate.delivery_days.at(-1);
              if (firstDeliveryDay > 1) textDay = deliveryOther;
              if (firstDeliveryDay === lastDeliveryDay) {
                deliveryDays = `(${firstDeliveryDay} ${textDay})`;
              } else {
                deliveryDays = `(${firstDeliveryDay} - ${lastDeliveryDay} ${textDay})`;
              }
            }
            const rateNode = createElement("span", null);
            rateNode.innerHTML = formatMoney(rate.price, MinimogSettings.money_format);
            this.domNodes.shippingMessage.appendChild(createElement("p", null, rate.name, ": ", rateNode, " ", deliveryDays));
          });
        } else {
          actionsWrapper.classList.remove('shipping-calculating');
          this.domNodes.shippingMessage.innerHTML = `<p>${noShippingRate}</p>`;
        }
      } else {
        actionsWrapper.classList.remove('shipping-calculating');
        Object.entries(res).map(error => {
          var _error$;
          this.domNodes.shippingMessage.classList.add((_error$ = error[0]) === null || _error$ === void 0 ? void 0 : _error$.toLowerCase());
          const message = `${error[1][0]}`;
          this.domNodes.shippingMessage.appendChild(createElement("p", null, message));
        });
      }
    }).catch(console.error);
  }
  saveAddonValue() {
    addEventDelegate({
      event: 'click',
      context: this.cartWrapper,
      selector: this.selectors.saveAddonButton,
      handler: (event, target) => {
        event.preventDefault();
        const {
          cartDiscountCode,
          cartDiscountCodeNoti
        } = this.domNodes;
        if (target.dataset.action === 'coupon' && cartDiscountCode) {
          const code = this.domNodes.cartDiscountCode.value;
          localStorage.setItem(this.discountCodeKey, code);
          if (code !== '' && cartDiscountCodeNoti) {
            cartDiscountCodeNoti.style.display = 'inline';
          } else {
            cartDiscountCodeNoti.style.display = 'none';
          }
        }
        if (target.dataset.action === 'note') {
          this.updateCartNote();
        }
        this.close(event);
      }
    });
  }
  updateCartNote() {
    const cartNoteValue = this.domNodes.cartNote.value;
    const body = JSON.stringify({
      note: cartNoteValue
    });
    fetch(`${window.MinimogSettings.routes.cart_update_url}`, {
      ...fetchConfig(),
      ...{
        body
      }
    });
  }
}
customElements.define('m-cart-addons', MCartAddons);
})();

/******/ })()
;