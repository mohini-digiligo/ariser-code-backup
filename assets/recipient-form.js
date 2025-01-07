/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LE: () => (/* binding */ MinimogTheme)
/* harmony export */ });
/* unused harmony exports MinimogEvents, MinimogSettings, MinimogStrings, MinimogLibs */
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

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
;// CONCATENATED MODULE: ./src/js/sections/recipient-form.js
/* provided dependency */ var MinimogTheme = __webpack_require__(4558)["LE"];

if (!customElements.get('recipient-form')) {
  customElements.define('recipient-form', class RecipientForm extends HTMLElement {
    constructor() {
      var _this$errorMessageWra, _this$errorMessageWra2, _this$errorMessage;
      super();
      _defineProperty(this, "cartUpdateUnsubscriber", undefined);
      _defineProperty(this, "variantChangeUnsubscriber", undefined);
      _defineProperty(this, "cartErrorUnsubscriber", undefined);
      this.checkboxInput = this.querySelector(`#Recipient-Checkbox-${this.dataset.sectionId}`);
      this.checkboxInput.disabled = false;
      this.hiddenControlField = this.querySelector(`#Recipient-Control-${this.dataset.sectionId}`);
      this.hiddenControlField.disabled = true;
      this.emailInput = this.querySelector(`#Recipient-email-${this.dataset.sectionId}`);
      this.nameInput = this.querySelector(`#Recipient-name-${this.dataset.sectionId}`);
      this.messageInput = this.querySelector(`#Recipient-message-${this.dataset.sectionId}`);
      this.errorMessageWrapper = this.querySelector('.product-form__recipient-error-message-wrapper');
      this.errorMessageList = (_this$errorMessageWra = this.errorMessageWrapper) === null || _this$errorMessageWra === void 0 ? void 0 : _this$errorMessageWra.querySelector('ul');
      this.errorMessage = (_this$errorMessageWra2 = this.errorMessageWrapper) === null || _this$errorMessageWra2 === void 0 ? void 0 : _this$errorMessageWra2.querySelector('.error-message');
      this.defaultErrorHeader = (_this$errorMessage = this.errorMessage) === null || _this$errorMessage === void 0 ? void 0 : _this$errorMessage.innerText;
      this.currentProductVariantId = this.dataset.productVariantId;
      this.productId = this.dataset.productId;
      this.addEventListener('change', this.onChange.bind(this));
    }
    connectedCallback() {
      this.cartUpdateUnsubscriber = window.MinimogEvents.subscribe(MinimogTheme.pubSubEvents.cartUpdate, response => {
        this.resetRecipientForm();
      });
      this.variantChangeUnsubscriber = window.MinimogEvents.subscribe(`${this.productId}__VARIANT_CHANGE`, variant => {
        this.currentProductVariantId = variant.id;
      });
      this.cartUpdateUnsubscriber = window.MinimogEvents.subscribe(MinimogTheme.pubSubEvents.cartError, event => {
        if (event.source === 'product-form' && event.productVariantId.toString() === this.currentProductVariantId) {
          this.displayErrorMessage(event.message, event.errors);
        }
      });
    }
    disconnectedCallback() {
      if (this.cartUpdateUnsubscriber) {
        this.cartUpdateUnsubscriber();
      }
      if (this.variantChangeUnsubscriber) {
        this.variantChangeUnsubscriber();
      }
      if (this.cartErrorUnsubscriber) {
        this.cartErrorUnsubscriber();
      }
    }
    onChange() {
      if (!this.checkboxInput.checked) {
        this.clearInputFields();
        this.clearErrorMessage();
      }
    }
    displayErrorMessage(title, body) {
      this.clearErrorMessage();
      const errorSize = Object.keys(body).length;
      if (errorSize > 1) this.errorMessageWrapper.hidden = false;
      if (typeof body === 'object') {
        this.errorMessage.innerText = this.defaultErrorHeader;
        return Object.entries(body).forEach(_ref => {
          let [key, value] = _ref;
          const errorMessageId = `RecipientForm-${key}-error-${this.dataset.sectionId}`;
          const fieldSelector = `#Recipient-${key}-${this.dataset.sectionId}`;
          const placeholderElement = this.querySelector(`${fieldSelector}`);
          const label = (placeholderElement === null || placeholderElement === void 0 ? void 0 : placeholderElement.getAttribute('placeholder')) || key;
          const message = `${label} ${value}`;
          const errorMessageElement = this.querySelector(`#${errorMessageId}`);
          const errorTextElement = errorMessageElement === null || errorMessageElement === void 0 ? void 0 : errorMessageElement.querySelector('.error-message');
          if (!errorTextElement) return;
          if (this.errorMessageList) {
            this.errorMessageList.appendChild(this.createErrorListItem(fieldSelector, message));
          }
          errorTextElement.innerText = `${message}.`;
          errorMessageElement.classList.remove('hidden');
          const inputElement = this[`${key}Input`];
          if (!inputElement) return;
          inputElement.setAttribute('aria-invalid', true);
          inputElement.setAttribute('aria-describedby', errorMessageId);
        });
      }
      this.errorMessage.innerText = body;
    }
    createErrorListItem(target, message) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.setAttribute('href', target);
      a.innerText = message;
      li.appendChild(a);
      li.className = "error-message";
      return li;
    }
    clearInputFields() {
      this.emailInput.value = '';
      this.nameInput.value = '';
      this.messageInput.value = '';
    }
    clearErrorMessage() {
      this.errorMessageWrapper.hidden = true;
      if (this.errorMessageList) this.errorMessageList.innerHTML = '';
      this.querySelectorAll('.sf-recipient-fields .sf-form__message').forEach(field => {
        field.classList.add('hidden');
        const textField = field.querySelector('.error-message');
        if (textField) textField.innerText = '';
      });
      [this.emailInput, this.messageInput, this.nameInput].forEach(inputElement => {
        inputElement.setAttribute('aria-invalid', false);
        inputElement.removeAttribute('aria-describedby');
      });
    }
    resetRecipientForm() {
      if (this.checkboxInput.checked) {
        this.checkboxInput.checked = false;
        this.clearInputFields();
        this.clearErrorMessage();
      }
    }
  });
}
})();

/******/ })()
;