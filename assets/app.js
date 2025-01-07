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
/* harmony export */   X: () => (/* binding */ addEventDelegate),
/* harmony export */   Z: () => (/* binding */ Event)
/* harmony export */ });
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

/***/ 6662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchCache: () => (/* binding */ fetchCache),
/* harmony export */   fetchJSON: () => (/* binding */ fetchJSON),
/* harmony export */   fetchJsonCache: () => (/* binding */ fetchJsonCache),
/* harmony export */   fetchSection: () => (/* binding */ fetchSection),
/* harmony export */   getRequestDefaultConfigs: () => (/* binding */ getRequestDefaultConfigs)
/* harmony export */ });
/* provided dependency */ var createElement = __webpack_require__(6295)["Z"];
const requestDefaultConfigs = {
  mode: 'same-origin',
  credentials: 'same-origin',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json'
  }
};
function getRequestDefaultConfigs() {
  return JSON.parse(JSON.stringify(requestDefaultConfigs));
}
const fetchJSON = function (url) {
  let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getRequestDefaultConfigs();
  return fetch(url, config).then(function (response) {
    if (!response.ok) {
      throw response;
    }
    return response.json();
  });
};
const cache = new Map();
const fetchCache = function (url) {
  let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getRequestDefaultConfigs();
  return new Promise((resolve, reject) => {
    let cached = cache.get(url);
    if (cached) return resolve(cached);
    fetch(url, config).then(res => {
      cached = res.text();
      cache.set(url, cached);
      resolve(cached);
    }).catch(reject);
  });
};
const sectionCache = new Map();
const fetchSection = function (sectionId) {
  let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  const {
    url: _url,
    fromCache = false,
    params = {}
  } = options;
  return new Promise((resolve, reject) => {
    const url = new URL(_url || window.location.href);
    url.searchParams.set('section_id', sectionId);
    Object.entries(params).forEach(_ref => {
      let [k, v] = _ref;
      return url.searchParams.set(k, v);
    });
    if (fromCache) {
      const cached = sectionCache.get(url);
      if (cached) return resolve(cached);
    }
    fetch(url, getRequestDefaultConfigs()).then(res => {
      if (res.ok) return res.text();
      reject(`Failed to load section: ${sectionId}`);
    }).then(html => {
      const div = createElement("div", null);
      div.innerHTML = html;
      sectionCache.set(url, div);
      resolve(div);
    }).catch(reject);
  });
};
const cache2 = new Map();
const fetchJsonCache = function (url) {
  let config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : requestDefaultConfigs;
  return new Promise((resolve, reject) => {
    if (cache2.get(url)) {
      return resolve(cache2.get(url));
    }
    fetch(url, config).then(res => {
      if (res.ok) {
        const json = res.json();
        resolve(json);
        cache2.set(url, json);
        return json;
      } else {
        reject(res);
      }
    }).catch(reject);
  });
};

/***/ }),

/***/ 5118:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/* provided dependency */ var MinimogTheme = __webpack_require__(4558)["LE"];
/* provided dependency */ var MinimogEvents = __webpack_require__(4558)["s0"];
/* provided dependency */ var MinimogStrings = __webpack_require__(4558)["rZ"];
const {
  getRequestDefaultConfigs
} = __webpack_require__(6662);
const Shopify = window.Shopify || {};

/**
 * Override the behavior of https://cdn.shopify.com/s/shopify/api.jquery.js
 */

/*

IMPORTANT:

Ajax requests that update Shopify's cart must be queued and sent synchronously to the server.
Meaning: you must wait for your 1st ajax callback to send your 2nd request, and then wait
for its callback to send your 3rd request, etc.

*/

/*

Override so that Shopify.formatMoney returns pretty
money values instead of cents.

*/

// Shopify.money_format = '${{amount}}';

/*

Events (override!)

Example override:
  ... add to your theme.liquid's script tag....

  Shopify.onItemAdded = function(line_item) {
    $('message').update('Added '+line_item.title + '...');
  }

*/

Shopify.onError = function (XMLHttpRequest, textStatus) {
  // Shopify returns a description of the error in XMLHttpRequest.responseText.
  // It is JSON.
  // Example: {"description":"The product 'Amelia - Small' is already sold out.","status":500,"message":"Cart Error"}
  var data = eval('(' + XMLHttpRequest.responseText + ')');
  if (data.message) {
    alert(data.message + '(' + data.status + '): ' + data.description);
  } else {
    alert('Error : ' + Shopify.fullMessagesFromErrors(data).join('; ') + '.');
  }
};
Shopify.fullMessagesFromErrors = function (errors) {
  var fullMessages = [];
  Array.from(errors).forEach(function (messages, attribute) {
    Array.from(messages).forEach(function (message, index) {
      fullMessages.push(attribute + ' ' + message);
    });
  });
  return fullMessages;
};
Shopify.onCartUpdate = async function (cart) {
  let open_drawer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  try {
    const {
      Cart
    } = MinimogTheme;
    if (Cart) {
      if (!cart) {
        await Cart.refreshCart();
        cart = Cart.cart;
      }
      if (open_drawer) {
        await Cart.renderNewCart();
        Cart.openCartDrawer();
      }
      MinimogEvents.emit('ON_CART_UPDATE', cart);
      console.info(`There are now ${cart.item_count} items in the cart. Should open drawer: ${open_drawer}`);
    }
  } catch (err) {
    console.error("Failed to trigger Shopify.onCartUpdate()", err);
  }
};
Shopify.onCartShippingRatesUpdate = function (rates, shipping_address) {
  var readable_address = '';
  if (shipping_address.zip) readable_address += shipping_address.zip + ', ';
  if (shipping_address.province) readable_address += shipping_address.province + ', ';
  readable_address += shipping_address.country;
  alert('There are ' + rates.length + ' shipping rates available for ' + readable_address + ', starting at ' + Shopify.formatMoney(rates[0].price) + '.');
};

/**
 * Shopify will override the fetch and XHR request for analytics so we will not override it.
 * Use the Shopify.onItemAdded instead.
 * @param line_item
 * @param open_drawer
 */
Shopify.onItemAdded = async function (line_item) {
  let open_drawer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  // console.info(`New item added to cart: `, line_item, `Should open drawer: ${open_drawer}`)
  try {
    const {
      Cart
    } = MinimogTheme;
    MinimogEvents.emit('ON_ITEM_ADDED', line_item);
    if (Cart) {
      await Cart.refreshCart();
      if (open_drawer) {
        var _Cart$domNodes;
        await Cart.renderNewCart();
        Cart.openCartDrawer();
        MinimogTheme.Notification.show({
          target: (_Cart$domNodes = Cart.domNodes) === null || _Cart$domNodes === void 0 ? void 0 : _Cart$domNodes.cartDrawerItems,
          method: 'prepend',
          type: 'success',
          message: MinimogStrings.itemAdded,
          delay: 400
        });
      }
      await Shopify.onCartUpdate(Cart.cart, false);
    }
  } catch (err) {
    console.error(`Failed to execute Shopify.onItemAdded()`, err);
  }
};
Shopify.onProduct = function (product) {
  alert('Received everything we ever wanted to know about ' + product.title);
};

/* Tools */

/*
Examples of call:
Shopify.formatMoney(600000, 'â‚¬{{amount_with_comma_separator}} EUR')
Shopify.formatMoney(600000, 'â‚¬{{amount}} EUR')
Shopify.formatMoney(600000, '${{amount_no_decimals}}')
Shopify.formatMoney(600000, '{{ shop.money_format }}') in a Liquid template!

In a Liquid template, you have access to a shop money formats with:
{{ shop.money_format }}
{{ shop.money_with_currency_format }}
{{ shop.money_without_currency_format }}
All these formats are editable on the Preferences page in your admin.
*/
Shopify.formatMoney = function (cents, format) {
  if (typeof cents == 'string') {
    cents = cents.replace('.', '');
  }
  var value = '';
  var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
  var formatString = format || this.money_format;
  function defaultOption(opt, def) {
    return typeof opt == 'undefined' ? def : opt;
  }
  function formatWithDelimiters(number, precision, thousands, decimal) {
    precision = defaultOption(precision, 2);
    thousands = defaultOption(thousands, ',');
    decimal = defaultOption(decimal, '.');
    if (isNaN(number) || number == null) {
      return 0;
    }
    number = (number / 100.0).toFixed(precision);
    var parts = number.split('.'),
      dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
      cents = parts[1] ? decimal + parts[1] : '';
    return dollars + cents;
  }
  switch (formatString.match(placeholderRegex)[1]) {
    case 'amount':
      value = formatWithDelimiters(cents, 2);
      break;
    case 'amount_no_decimals':
      value = formatWithDelimiters(cents, 0);
      break;
    case 'amount_with_comma_separator':
      value = formatWithDelimiters(cents, 2, '.', ',');
      break;
    case 'amount_no_decimals_with_comma_separator':
      value = formatWithDelimiters(cents, 0, '.', ',');
      break;
  }
  return formatString.replace(placeholderRegex, value);
};
Shopify.resizeImage = function (image, size) {
  try {
    if (size === 'original') {
      return image;
    } else {
      var matches = image.match(/(.*\/[\w\-_.]+)\.(\w{2,4})/);
      return matches[1] + '_' + size + '.' + matches[2];
    }
  } catch (e) {
    return image;
  }
};

/* Ajax API */

// -------------------------------------------------------------------------------------
// POST to cart/add.js returns the JSON of the line item associated with the added item.
// -------------------------------------------------------------------------------------
Shopify.addItem = function (variant_id, quantity, callback) {
  console.info('// TODO: Implement Shopify.addItem function!');
  //  quantity = quantity || 1
  // let params = {
  //   type: 'POST',
  //   url: '/cart/add.js',
  //   data: 'quantity=' + quantity + '&id=' + variant_id,
  //   dataType: 'json',
  //   success: function (line_item) {
  //     if ((typeof callback) === 'function') {
  //       callback(line_item)
  //     } else {
  //       Shopify.onItemAdded(line_item)
  //     }
  //   },
  //   error: function (XMLHttpRequest, textStatus) {
  //     Shopify.onError(XMLHttpRequest, textStatus)
  //   }
  // }
  // jQuery.ajax(params)
};

// ---------------------------------------------------------
// POST to cart/add.js returns the JSON of the line item.
// ---------------------------------------------------------
Shopify.addItemFromForm = function (form_id, callback) {
  console.info('// TODO: Implement Shopify.addItemFromForm function!');

  // var params = {
  //   type: 'POST',
  //   url: '/cart/add.js',
  //   data: jQuery('#' + form_id).serialize(),
  //   dataType: 'json',
  //   success: function (line_item) {
  //     if ((typeof callback) === 'function') {
  //       callback(line_item)
  //     } else {
  //       Shopify.onItemAdded(line_item)
  //     }
  //   },
  //   error: function (XMLHttpRequest, textStatus) {
  //     Shopify.onError(XMLHttpRequest, textStatus)
  //   }
  // }
  // jQuery.ajax(params)
};

// ---------------------------------------------------------
// GET cart.js returns the cart in JSON.
// ---------------------------------------------------------
Shopify.getCart = function (callback) {
  console.info('// TODO: Implement Shopify.getCart function!');

  // jQuery.getJSON('/cart.js', function (cart, textStatus) {
  //   if ((typeof callback) === 'function') {
  //     callback(cart)
  //   } else {
  //     Shopify.onCartUpdate(cart)
  //   }
  // })
};

Shopify.pollForCartShippingRatesForDestination = function (shippingAddress, callback, errback) {
  console.info('// TODO: Implement Shopify.pollForCartShippingRatesForDestination function!');

  // errback = errback || Shopify.onError
  // var poller = function () {
  //   jQuery.ajax('/cart/async_shipping_rates', {
  //     dataType: 'json',
  //     success: function (response, textStatus, xhr) {
  //       if (xhr.status === 200) {
  //         if ((typeof callback) == 'function') {
  //           callback(response.shipping_rates, shippingAddress)
  //         } else {
  //           Shopify.onCartShippingRatesUpdate(response.shipping_rates, shippingAddress)
  //         }
  //       } else {
  //         setTimeout(poller, 500)
  //       }
  //     },
  //     error: errback
  //   })
  // }
  //
  // return poller
};

Shopify.getCartShippingRatesForDestination = function (shippingAddress, callback, errback) {
  console.info('// TODO: Implement Shopify.getCartShippingRatesForDestination function!');

  // errback = errback || Shopify.onError
  // var params = {
  //   type: 'POST',
  //   url: '/cart/prepare_shipping_rates',
  //   data: Shopify.param({'shipping_address': shippingAddress}),
  //   success: Shopify.pollForCartShippingRatesForDestination(shippingAddress, callback, errback),
  //   error: errback
  // }
  //
  // jQuery.ajax(params)
};

// ---------------------------------------------------------
// GET products/<product-handle>.js returns the product in JSON.
// ---------------------------------------------------------
Shopify.getProduct = function (handle, callback) {
  console.info('// TODO: Implement Shopify.getProduct function!');

  // jQuery.getJSON('/products/' + handle + '.js', function (product, textStatus) {
  //   if ((typeof callback) === 'function') {
  //     callback(product)
  //   } else {
  //     Shopify.onProduct(product)
  //   }
  // })
};

// ---------------------------------------------------------
// POST to cart/change.js returns the cart in JSON.
// ---------------------------------------------------------
Shopify.changeItem = function (variant_id, quantity, callback) {
  console.info('// TODO: Implement Shopify.changeItem function!');

  // var params = {
  //   type: 'POST',
  //   url: '/cart/change.js',
  //   data: 'quantity=' + quantity + '&id=' + variant_id,
  //   dataType: 'json',
  //   success: function (cart) {
  //     if ((typeof callback) === 'function') {
  //       callback(cart)
  //     } else {
  //       Shopify.onCartUpdate(cart)
  //     }
  //   },
  //   error: function (XMLHttpRequest, textStatus) {
  //     Shopify.onError(XMLHttpRequest, textStatus)
  //   }
  // }
  // jQuery.ajax(params)
};

// ---------------------------------------------------------
// POST to cart/change.js returns the cart in JSON.
// ---------------------------------------------------------
Shopify.removeItem = function (variant_id, callback) {
  console.info('// TODO: Implement Shopify.removeItem function!');

  // var params = {
  //   type: 'POST',
  //   url: '/cart/change.js',
  //   data: 'quantity=0&id=' + variant_id,
  //   dataType: 'json',
  //   success: function (cart) {
  //     if ((typeof callback) === 'function') {
  //       callback(cart)
  //     } else {
  //       Shopify.onCartUpdate(cart)
  //     }
  //   },
  //   error: function (XMLHttpRequest, textStatus) {
  //     Shopify.onError(XMLHttpRequest, textStatus)
  //   }
  // }
  // jQuery.ajax(params)
};

// ---------------------------------------------------------
// POST to cart/clear.js returns the cart in JSON.
// It removes all the items in the cart, but does
// not clear the cart attributes nor the cart note.
// ---------------------------------------------------------
Shopify.clear = async function () {
  let removeAttributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  try {
    await Promise.all([await fetch('/cart/clear.js'), removeAttributes && (await fetch('/cart/update.js', {
      ...getRequestDefaultConfigs(),
      method: 'POST',
      body: JSON.stringify({
        attributes: {
          _foxCartDiscounts: null
        }
      })
    }))]);
  } catch (error) {
    console.error("Failed to clear cart. ", error);
  }
};

// ---------------------------------------------------------
// POST to cart/update.js returns the cart in JSON.
// ---------------------------------------------------------
Shopify.updateCartFromForm = function (form_id, callback) {
  console.info('// TODO: Implement Shopify.updateCartFromForm function!');

  // var params = {
  //   type: 'POST',
  //   url: '/cart/update.js',
  //   data: jQuery('#' + form_id).serialize(),
  //   dataType: 'json',
  //   success: function (cart) {
  //     if ((typeof callback) === 'function') {
  //       callback(cart)
  //     } else {
  //       Shopify.onCartUpdate(cart)
  //     }
  //   },
  //   error: function (XMLHttpRequest, textStatus) {
  //     Shopify.onError(XMLHttpRequest, textStatus)
  //   }
  // }
  // jQuery.ajax(params)
};

// ---------------------------------------------------------
// POST to cart/update.js returns the cart in JSON.
// To clear a particular attribute, set its value to an empty string.
// Receives attributes as a hash or array. Look at comments below.
// ---------------------------------------------------------
Shopify.updateCartAttributes = function (attributes, callback) {
  console.info('// TODO: Implement Shopify.updateCartAttributes function!');

  // var data = ''
  // // If attributes is an array of the form:
  // // [ { key: 'my key', value: 'my value' }, ... ]
  // if (jQuery.isArray(attributes)) {
  //   jQuery.each(attributes, function (indexInArray, valueOfElement) {
  //     var key = attributeToString(valueOfElement.key)
  //     if (key !== '') {
  //       data += 'attributes[' + key + ']=' + attributeToString(valueOfElement.value) + '&'
  //     }
  //   })
  // }
  //   // If attributes is a hash of the form:
  // // { 'my key' : 'my value', ... }
  // else if ((typeof attributes === 'object') && attributes !== null) {
  //   jQuery.each(attributes, function (key, value) {
  //     data += 'attributes[' + attributeToString(key) + ']=' + attributeToString(value) + '&'
  //   })
  // }
  // var params = {
  //   type: 'POST',
  //   url: '/cart/update.js',
  //   data: data,
  //   dataType: 'json',
  //   success: function (cart) {
  //     if ((typeof callback) === 'function') {
  //       callback(cart)
  //     } else {
  //       Shopify.onCartUpdate(cart)
  //     }
  //   },
  //   error: function (XMLHttpRequest, textStatus) {
  //     Shopify.onError(XMLHttpRequest, textStatus)
  //   }
  // }
  // jQuery.ajax(params)
};

// ---------------------------------------------------------
// POST to cart/update.js returns the cart in JSON.
// ---------------------------------------------------------
Shopify.updateCartNote = function (note, callback) {
  console.info('// TODO: Implement Shopify.updateCartNote function!');

  // var params = {
  //   type: 'POST',
  //   url: '/cart/update.js',
  //   data: 'note=' + attributeToString(note),
  //   dataType: 'json',
  //   success: function (cart) {
  //     if ((typeof callback) === 'function') {
  //       callback(cart)
  //     } else {
  //       Shopify.onCartUpdate(cart)
  //     }
  //   },
  //   error: function (XMLHttpRequest, textStatus) {
  //     Shopify.onError(XMLHttpRequest, textStatus)
  //   }
  // }
  // jQuery.ajax(params)
};

/***/ }),

/***/ 1339:
/***/ (() => {

Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), window.Element && !Element.prototype.closest && (Element.prototype.closest = function (e) {
  var t = this;
  do {
    if (t.matches(e)) return t;
    t = t.parentElement || t.parentNode;
  } while (null !== t && 1 === t.nodeType);
  return null;
});

/***/ }),

/***/ 2297:
/***/ (() => {

!function () {
  function t() {
    var e = Array.prototype.slice.call(arguments),
      r = document.createDocumentFragment();
    e.forEach(function (e) {
      var t = e instanceof Node;
      r.appendChild(t ? e : document.createTextNode(String(e)));
    }), this.parentNode.insertBefore(r, this.nextSibling);
  }
  [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function (e) {
    e.hasOwnProperty("after") || Object.defineProperty(e, "after", {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: t
    });
  });
}();

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

/***/ }),

/***/ 598:
/***/ (() => {

!function () {
  function t() {
    var e = Array.prototype.slice.call(arguments),
      n = document.createDocumentFragment();
    e.forEach(function (e) {
      var t = e instanceof Node;
      n.appendChild(t ? e : document.createTextNode(String(e)));
    }), this.insertBefore(n, this.firstChild);
  }
  [Element.prototype, Document.prototype, DocumentFragment.prototype].forEach(function (e) {
    e.hasOwnProperty("prepend") || Object.defineProperty(e, "prepend", {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: t
    });
  });
}();

/***/ }),

/***/ 1713:
/***/ (() => {

!function () {
  var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e;
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  };
  function t() {
    var e,
      t = this.parentNode,
      o = arguments.length;
    if (t) for (o || t.removeChild(this); o--;) "object" !== (void 0 === (e = arguments[o]) ? "undefined" : r(e)) ? e = this.ownerDocument.createTextNode(e) : e.parentNode && e.parentNode.removeChild(e), o ? t.insertBefore(this.previousSibling, e) : t.replaceChild(e, this);
  }
  [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach(function (e) {
    e.hasOwnProperty("replaceWith") || Object.defineProperty(e, "replaceWith", {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: t
    });
  });
}();

/***/ }),

/***/ 643:
/***/ ((module) => {

var COMPLETE = 'complete',
  CANCELED = 'canceled';
function raf(task) {
  if ('requestAnimationFrame' in window) {
    return window.requestAnimationFrame(task);
  }
  setTimeout(task, 16);
}
function setElementScroll(element, x, y) {
  Math.max(0, x);
  Math.max(0, y);
  if (element.self === element) {
    element.scrollTo(x, y);
  } else {
    element.scrollLeft = x;
    element.scrollTop = y;
  }
}
function getTargetScrollLocation(scrollSettings, parent) {
  var align = scrollSettings.align,
    target = scrollSettings.target,
    targetPosition = target.getBoundingClientRect(),
    parentPosition,
    x,
    y,
    differenceX,
    differenceY,
    targetWidth,
    targetHeight,
    leftAlign = align && align.left != null ? align.left : 0.5,
    topAlign = align && align.top != null ? align.top : 0.5,
    leftOffset = align && align.leftOffset != null ? align.leftOffset : 0,
    topOffset = align && align.topOffset != null ? align.topOffset : 0,
    leftScalar = leftAlign,
    topScalar = topAlign;
  if (scrollSettings.isWindow(parent)) {
    targetWidth = Math.min(targetPosition.width, parent.innerWidth);
    targetHeight = Math.min(targetPosition.height, parent.innerHeight);
    x = targetPosition.left + parent.pageXOffset - parent.innerWidth * leftScalar + targetWidth * leftScalar;
    y = targetPosition.top + parent.pageYOffset - parent.innerHeight * topScalar + targetHeight * topScalar;
    x -= leftOffset;
    y -= topOffset;
    x = scrollSettings.align.lockX ? parent.pageXOffset : x;
    y = scrollSettings.align.lockY ? parent.pageYOffset : y;
    differenceX = x - parent.pageXOffset;
    differenceY = y - parent.pageYOffset;
  } else {
    targetWidth = targetPosition.width;
    targetHeight = targetPosition.height;
    parentPosition = parent.getBoundingClientRect();
    var offsetLeft = targetPosition.left - (parentPosition.left - parent.scrollLeft);
    var offsetTop = targetPosition.top - (parentPosition.top - parent.scrollTop);
    x = offsetLeft + targetWidth * leftScalar - parent.clientWidth * leftScalar;
    y = offsetTop + targetHeight * topScalar - parent.clientHeight * topScalar;
    x -= leftOffset;
    y -= topOffset;
    x = Math.max(Math.min(x, parent.scrollWidth - parent.clientWidth), 0);
    y = Math.max(Math.min(y, parent.scrollHeight - parent.clientHeight), 0);
    x = scrollSettings.align.lockX ? parent.scrollLeft : x;
    y = scrollSettings.align.lockY ? parent.scrollTop : y;
    differenceX = x - parent.scrollLeft;
    differenceY = y - parent.scrollTop;
  }
  return {
    x: x,
    y: y,
    differenceX: differenceX,
    differenceY: differenceY
  };
}
function animate(parent) {
  var scrollSettings = parent._scrollSettings;
  if (!scrollSettings) {
    return;
  }
  var maxSynchronousAlignments = scrollSettings.maxSynchronousAlignments;
  var location = getTargetScrollLocation(scrollSettings, parent),
    time = Date.now() - scrollSettings.startTime,
    timeValue = Math.min(1 / scrollSettings.time * time, 1);
  if (scrollSettings.endIterations >= maxSynchronousAlignments) {
    setElementScroll(parent, location.x, location.y);
    parent._scrollSettings = null;
    return scrollSettings.end(COMPLETE);
  }
  var easeValue = 1 - scrollSettings.ease(timeValue);
  setElementScroll(parent, location.x - location.differenceX * easeValue, location.y - location.differenceY * easeValue);
  if (time >= scrollSettings.time) {
    scrollSettings.endIterations++;
    // Align ancestor synchronously
    scrollSettings.scrollAncestor && animate(scrollSettings.scrollAncestor);
    animate(parent);
    return;
  }
  raf(animate.bind(null, parent));
}
function defaultIsWindow(target) {
  return target.self === target;
}
function transitionScrollTo(target, parent, settings, scrollAncestor, callback) {
  var idle = !parent._scrollSettings,
    lastSettings = parent._scrollSettings,
    now = Date.now(),
    cancelHandler,
    passiveOptions = {
      passive: true
    };
  if (lastSettings) {
    lastSettings.end(CANCELED);
  }
  function end(endType) {
    parent._scrollSettings = null;
    if (parent.parentElement && parent.parentElement._scrollSettings) {
      parent.parentElement._scrollSettings.end(endType);
    }
    if (settings.debug) {
      console.log('Scrolling ended with type', endType, 'for', parent);
    }
    callback(endType);
    if (cancelHandler) {
      parent.removeEventListener('touchstart', cancelHandler, passiveOptions);
      parent.removeEventListener('wheel', cancelHandler, passiveOptions);
    }
  }
  var maxSynchronousAlignments = settings.maxSynchronousAlignments;
  if (maxSynchronousAlignments == null) {
    maxSynchronousAlignments = 3;
  }
  parent._scrollSettings = {
    startTime: now,
    endIterations: 0,
    target: target,
    time: settings.time,
    ease: settings.ease,
    align: settings.align,
    isWindow: settings.isWindow || defaultIsWindow,
    maxSynchronousAlignments: maxSynchronousAlignments,
    end: end,
    scrollAncestor
  };
  if (!('cancellable' in settings) || settings.cancellable) {
    cancelHandler = end.bind(null, CANCELED);
    parent.addEventListener('touchstart', cancelHandler, passiveOptions);
    parent.addEventListener('wheel', cancelHandler, passiveOptions);
  }
  if (idle) {
    animate(parent);
  }
  return cancelHandler;
}
function defaultIsScrollable(element) {
  return 'pageXOffset' in element || (element.scrollHeight !== element.clientHeight || element.scrollWidth !== element.clientWidth) && getComputedStyle(element).overflow !== 'hidden';
}
function defaultValidTarget() {
  return true;
}
function findParentElement(el) {
  if (el.assignedSlot) {
    return findParentElement(el.assignedSlot);
  }
  if (el.parentElement) {
    if (el.parentElement.tagName.toLowerCase() === 'body') {
      return el.parentElement.ownerDocument.defaultView || el.parentElement.ownerDocument.ownerWindow;
    }
    return el.parentElement;
  }
  if (el.getRootNode) {
    var parent = el.getRootNode();
    if (parent.nodeType === 11) {
      return parent.host;
    }
  }
}
module.exports = function (target, settings, callback) {
  if (!target) {
    return;
  }
  if (typeof settings === 'function') {
    callback = settings;
    settings = null;
  }
  if (!settings) {
    settings = {};
  }
  settings.time = isNaN(settings.time) ? 1000 : settings.time;
  settings.ease = settings.ease || function (v) {
    return 1 - Math.pow(1 - v, v / 2);
  };
  settings.align = settings.align || {};
  var parent = findParentElement(target),
    parents = 1;
  function done(endType) {
    parents--;
    if (!parents) {
      callback && callback(endType);
    }
  }
  var validTarget = settings.validTarget || defaultValidTarget;
  var isScrollable = settings.isScrollable;
  if (settings.debug) {
    console.log('About to scroll to', target);
    if (!parent) {
      console.error('Target did not have a parent, is it mounted in the DOM?');
    }
  }
  var scrollingElements = [];
  while (parent) {
    if (settings.debug) {
      console.log('Scrolling parent node', parent);
    }
    if (validTarget(parent, parents) && (isScrollable ? isScrollable(parent, defaultIsScrollable) : defaultIsScrollable(parent))) {
      parents++;
      scrollingElements.push(parent);
    }
    parent = findParentElement(parent);
    if (!parent) {
      done(COMPLETE);
      break;
    }
  }
  return scrollingElements.reduce((cancel, parent, index) => transitionScrollTo(target, parent, settings, scrollingElements[index + 1], done), null);
};

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

;// CONCATENATED MODULE: ./node_modules/@shopify/theme-sections/section.js
var SECTION_ID_ATTR = 'data-section-id';
function Section(container, properties) {
  this.container = validateContainerElement(container);
  this.id = container.getAttribute(SECTION_ID_ATTR);
  this.extensions = [];

  // eslint-disable-next-line es5/no-es6-static-methods
  Object.assign(this, validatePropertiesObject(properties));
  this.onLoad();
}
Section.prototype = {
  onLoad: Function.prototype,
  onUnload: Function.prototype,
  onSelect: Function.prototype,
  onDeselect: Function.prototype,
  onBlockSelect: Function.prototype,
  onBlockDeselect: Function.prototype,
  extend: function extend(extension) {
    this.extensions.push(extension); // Save original extension

    // eslint-disable-next-line es5/no-es6-static-methods
    var extensionClone = Object.assign({}, extension);
    delete extensionClone.init; // Remove init function before assigning extension properties

    // eslint-disable-next-line es5/no-es6-static-methods
    Object.assign(this, extensionClone);
    if (typeof extension.init === 'function') {
      extension.init.apply(this);
    }
  }
};
function validateContainerElement(container) {
  if (!(container instanceof Element)) {
    throw new TypeError('Theme Sections: Attempted to load section. The section container provided is not a DOM element.');
  }
  if (container.getAttribute(SECTION_ID_ATTR) === null) {
    throw new Error('Theme Sections: The section container provided does not have an id assigned to the ' + SECTION_ID_ATTR + ' attribute.');
  }
  return container;
}
function validatePropertiesObject(value) {
  if (typeof value !== 'undefined' && typeof value !== 'object' || value === null) {
    throw new TypeError('Theme Sections: The properties object provided is not a valid');
  }
  return value;
}

// Object.assign() polyfill from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Polyfill
if (typeof Object.assign != 'function') {
  // Must be writable: true, enumerable: false, configurable: true
  Object.defineProperty(Object, 'assign', {
    value: function assign(target) {
      // .length of function is 2
      'use strict';

      if (target == null) {
        // TypeError if undefined or null
        throw new TypeError('Cannot convert undefined or null to object');
      }
      var to = Object(target);
      for (var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];
        if (nextSource != null) {
          // Skip over if undefined or null
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
      return to;
    },
    writable: true,
    configurable: true
  });
}
;// CONCATENATED MODULE: ./node_modules/@shopify/theme-sections/theme-sections.js
/*
 * @shopify/theme-sections
 * -----------------------------------------------------------------------------
 *
 * A framework to provide structure to your Shopify sections and a load and unload
 * lifecycle. The lifecycle is automatically connected to theme editor events so
 * that your sections load and unload as the editor changes the content and
 * settings of your sections.
 */


var SECTION_TYPE_ATTR = 'data-section-type';
var theme_sections_SECTION_ID_ATTR = 'data-section-id';
window.Shopify = window.Shopify || {};
window.Shopify.theme = window.Shopify.theme || {};
window.Shopify.theme.sections = window.Shopify.theme.sections || {};
var registered = window.Shopify.theme.sections.registered = window.Shopify.theme.sections.registered || {};
var instances = window.Shopify.theme.sections.instances = window.Shopify.theme.sections.instances || [];
function register(type, properties) {
  if (typeof type !== 'string') {
    throw new TypeError('Theme Sections: The first argument for .register must be a string that specifies the type of the section being registered');
  }
  if (typeof registered[type] !== 'undefined') {
    throw new Error('Theme Sections: A section of type "' + type + '" has already been registered. You cannot register the same section type twice');
  }
  function TypedSection(container) {
    Section.call(this, container, properties);
  }
  TypedSection.constructor = Section;
  TypedSection.prototype = Object.create(Section.prototype);
  TypedSection.prototype.type = type;
  return registered[type] = TypedSection;
}
function unregister(types) {
  types = normalizeType(types);
  types.forEach(function (type) {
    delete registered[type];
  });
}
function load(types, containers) {
  types = normalizeType(types);
  if (typeof containers === 'undefined') {
    containers = document.querySelectorAll('[' + SECTION_TYPE_ATTR + ']');
  }
  containers = normalizeContainers(containers);
  types.forEach(function (type) {
    var TypedSection = registered[type];
    if (typeof TypedSection === 'undefined') {
      return;
    }
    containers = containers.filter(function (container) {
      // Filter from list of containers because container already has an instance loaded
      if (isInstance(container)) {
        return false;
      }

      // Filter from list of containers because container doesn't have data-section-type attribute
      if (container.getAttribute(SECTION_TYPE_ATTR) === null) {
        return false;
      }

      // Keep in list of containers because current type doesn't match
      if (container.getAttribute(SECTION_TYPE_ATTR) !== type) {
        return true;
      }
      instances.push(new TypedSection(container));

      // Filter from list of containers because container now has an instance loaded
      return false;
    });
  });
}
function unload(selector) {
  var instancesToUnload = getInstances(selector);
  instancesToUnload.forEach(function (instance) {
    var index = instances.map(function (e) {
      return e.id;
    }).indexOf(instance.id);
    instances.splice(index, 1);
    instance.onUnload();
  });
}
function extend(selector, extension) {
  var instancesToExtend = getInstances(selector);
  instancesToExtend.forEach(function (instance) {
    instance.extend(extension);
  });
}
function getInstances(selector) {
  var filteredInstances = [];

  // Fetch first element if its an array
  if (NodeList.prototype.isPrototypeOf(selector) || Array.isArray(selector)) {
    var firstElement = selector[0];
  }

  // If selector element is DOM element
  if (selector instanceof Element || firstElement instanceof Element) {
    var containers = normalizeContainers(selector);
    containers.forEach(function (container) {
      filteredInstances = filteredInstances.concat(instances.filter(function (instance) {
        return instance.container === container;
      }));
    });

    // If select is type string
  } else if (typeof selector === 'string' || typeof firstElement === 'string') {
    var types = normalizeType(selector);
    types.forEach(function (type) {
      filteredInstances = filteredInstances.concat(instances.filter(function (instance) {
        return instance.type === type;
      }));
    });
  }
  return filteredInstances;
}
function getInstanceById(id) {
  var instance;
  for (var i = 0; i < instances.length; i++) {
    if (instances[i].id === id) {
      instance = instances[i];
      break;
    }
  }
  return instance;
}
function isInstance(selector) {
  return getInstances(selector).length > 0;
}
function normalizeType(types) {
  // If '*' then fetch all registered section types
  if (types === '*') {
    types = Object.keys(registered);

    // If a single section type string is passed, put it in an array
  } else if (typeof types === 'string') {
    types = [types];

    // If single section constructor is passed, transform to array with section
    // type string
  } else if (types.constructor === Section) {
    types = [types.prototype.type];

    // If array of typed section constructors is passed, transform the array to
    // type strings
  } else if (Array.isArray(types) && types[0].constructor === Section) {
    types = types.map(function (TypedSection) {
      return TypedSection.prototype.type;
    });
  }
  types = types.map(function (type) {
    return type.toLowerCase();
  });
  return types;
}
function normalizeContainers(containers) {
  // Nodelist with entries
  if (NodeList.prototype.isPrototypeOf(containers) && containers.length > 0) {
    containers = Array.prototype.slice.call(containers);

    // Empty Nodelist
  } else if (NodeList.prototype.isPrototypeOf(containers) && containers.length === 0) {
    containers = [];

    // Handle null (document.querySelector() returns null with no match)
  } else if (containers === null) {
    containers = [];

    // Single DOM element
  } else if (!Array.isArray(containers) && containers instanceof Element) {
    containers = [containers];
  }
  return containers;
}
if (window.Shopify.designMode) {
  document.addEventListener('shopify:section:load', function (event) {
    var id = event.detail.sectionId;
    var container = event.target.querySelector('[' + theme_sections_SECTION_ID_ATTR + '="' + id + '"]');
    if (container !== null) {
      load(container.getAttribute(SECTION_TYPE_ATTR), container);
    }
  });
  document.addEventListener('shopify:section:unload', function (event) {
    var id = event.detail.sectionId;
    var container = event.target.querySelector('[' + theme_sections_SECTION_ID_ATTR + '="' + id + '"]');
    var instance = getInstances(container)[0];
    if (typeof instance === 'object') {
      unload(container);
    }
  });
  document.addEventListener('shopify:section:select', function (event) {
    var instance = getInstanceById(event.detail.sectionId);
    if (typeof instance === 'object') {
      instance.onSelect(event);
    }
  });
  document.addEventListener('shopify:section:deselect', function (event) {
    var instance = getInstanceById(event.detail.sectionId);
    if (typeof instance === 'object') {
      instance.onDeselect(event);
    }
  });
  document.addEventListener('shopify:block:select', function (event) {
    var instance = getInstanceById(event.detail.sectionId);
    if (typeof instance === 'object') {
      instance.onBlockSelect(event);
    }
  });
  document.addEventListener('shopify:block:deselect', function (event) {
    var instance = getInstanceById(event.detail.sectionId);
    if (typeof instance === 'object') {
      instance.onBlockDeselect(event);
    }
  });
}
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
;// CONCATENATED MODULE: ./src/js/components/Notification.jsx
/* provided dependency */ var createElement = __webpack_require__(6295)["Z"];
/* harmony default export */ function components_Notification(_ref) {
  let {
    type,
    message,
    onclick,
    sticky
  } = _ref;
  let icon;
  if (type === 'warning') {
    icon = createElement("svg", {
      class: "w-6 h-6",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, createElement("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    }));
  } else if (type === 'success') {
    icon = createElement("svg", {
      class: "w-6 h-6",
      fill: "none",
      stroke: "currentColor",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    }, createElement("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    }));
  }
  return createElement("div", {
    className: `notification ${type} ${sticky ? 'notification--sticky' : null}`,
    onclick: onclick
  }, icon, createElement("div", {
    className: "ml-3"
  }, message));
}
;// CONCATENATED MODULE: ./src/js/modules/notification.js
/* provided dependency */ var notification_createElement = __webpack_require__(6295)["Z"];
/* provided dependency */ var MinimogTheme = __webpack_require__(4558)["LE"];

// eslint-disable-next-line no-unused-vars

class Notification {
  constructor() {
    _defineProperty(this, "noti", null);
    _defineProperty(this, "removeTimeoutId", null);
    _defineProperty(this, "hideTimeoutId", null);
    _defineProperty(this, "transitionDuration", 300);
    _defineProperty(this, "show", _ref => {
      let {
        target,
        type,
        message,
        method = 'after',
        last = 3000,
        delay = 0,
        debug = false,
        sticky = false
      } = _ref;
      this.clearTimeout();
      this.removeNoti();
      setTimeout(() => {
        this.noti = notification_createElement(components_Notification, {
          type: type,
          message: message,
          onclick: this.handleClick,
          sticky: sticky
        });
        target === null || target === void 0 ? void 0 : target[method](this.noti);
        requestAnimationFrame(() => this.noti.classList.add('show'));
        if (!debug) {
          this.hideTimeoutId = setTimeout(() => {
            this.noti.classList.add('hide');
            this.removeTimeoutId = setTimeout(this.removeNoti, this.transitionDuration * 2);
          }, last);
        }
      }, delay);
    });
    _defineProperty(this, "handleClick", () => {
      clearTimeout(this.removeTimeoutId);
      this.noti.classList.add('hide');
      setTimeout(this.removeNoti, this.transitionDuration * 2);
    });
    _defineProperty(this, "clearTimeout", () => {
      clearTimeout(this.removeTimeoutId);
      clearTimeout(this.hideTimeoutId);
    });
    _defineProperty(this, "removeNoti", () => {
      var _this$noti;
      this === null || this === void 0 ? void 0 : (_this$noti = this.noti) === null || _this$noti === void 0 ? void 0 : _this$noti.remove();
    });
  }
}
MinimogTheme.Notification = new Notification();
;// CONCATENATED MODULE: ./src/js/components/LazyImage.jsx
/* provided dependency */ var LazyImage_createElement = __webpack_require__(6295)["Z"];
/* harmony default export */ function LazyImage(props) {
  const {
    src,
    alt,
    style = {},
    className = '',
    onLoad = () => {},
    onError = () => {}
  } = props;
  const image = LazyImage_createElement("img", {
    style: style,
    className: `transition-opacity opacity-0 ${className}`,
    src: `${src}&width=300`,
    loading: "lazy",
    alt: alt
  });
  image.addEventListener('load', imgLoaded);
  image.addEventListener('error', imgError);
  if (image.complete && image.naturalWidth) {
    imgLoaded();
  }
  function imgLoaded() {
    onLoad && onLoad();
    image.classList.add('opacity-100');
    image.removeEventListener('load', imgLoaded);
    image.removeEventListener('error', imgError);
  }
  function imgError(err) {
    console.error('Failed to load LazyImage. ', err, props);
    onError && onError();
    image.style.opacity = 0;
    image.removeEventListener('load', imgLoaded);
    image.removeEventListener('error', imgError);
  }
  return image;
}
;// CONCATENATED MODULE: ./src/js/components/InstagramImage.jsx
/* provided dependency */ var InstagramImage_createElement = __webpack_require__(6295)["Z"];
// eslint-disable-next-line no-unused-vars

/* harmony default export */ function InstagramImage(_ref) {
  let {
    image
  } = _ref;
  return InstagramImage_createElement("div", {
    className: "sf-column"
  }, InstagramImage_createElement("a", {
    href: image.permalink,
    target: "_blank",
    className: "sf__insta-item block relative"
  }, InstagramImage_createElement("div", {
    className: "sf__insta-content absolute z-10 inset-0 flex items-center justify-center"
  }, InstagramImage_createElement("div", {
    class: "sf__insta-icon"
  }, InstagramImage_createElement("svg", {
    className: "w-10 h-10",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 448 512"
  }, InstagramImage_createElement("path", {
    fill: "currentColor",
    d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
  })))), InstagramImage_createElement("div", {
    className: "sf__insta-image",
    style: {
      "--aspect-ratio": "1/1"
    }
  }, InstagramImage_createElement(LazyImage, {
    src: image.media_url,
    alt: `instagram-image-${image.username}-${image.id}`
  })), InstagramImage_createElement("div", {
    className: "sf__item-bg"
  })));
}
;// CONCATENATED MODULE: ./src/js/modules/instagram.js
/* provided dependency */ var instagram_createElement = __webpack_require__(6295)["Z"];

// eslint-disable-next-line no-unused-vars

class Instagram {
  constructor(container, accessToken) {
    let imagesCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 4;
    _defineProperty(this, "mediaAPI", 'https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username');
    this.container = container;
    this.imagesContainer = container.querySelector('.instagram-images');
    this.accessToken = accessToken;
    this.imagesCount = imagesCount;
    if (window.__sfWindowLoaded) this.init().catch(console.error);else window.addEventListener("load", () => this.init().catch(console.error));
  }
  async init() {
    const media = await fetchJsonCache(`${this.mediaAPI}&access_token=${this.accessToken}`, {
      cache: 'force-cache'
    });
    if (!media) return;
    if (media.error) {
      var _media$error;
      return console.error('Instagram error: ', (_media$error = media.error) === null || _media$error === void 0 ? void 0 : _media$error.message);
    }
    media.data.filter(d => d.media_type === 'IMAGE' || d.media_type === 'CAROUSEL_ALBUM')
    // .reverse()
    .slice(0, this.imagesCount).forEach(image => {
      console.log(image, 'img insta');
      const imgNode = instagram_createElement(InstagramImage, {
        image: image
      });
      this.imagesContainer.appendChild(imgNode);
    });
  }
}
window.MinimogTheme.Instagram = Instagram;
;// CONCATENATED MODULE: ./src/js/pages/compare-product.js
/* provided dependency */ var MinimogSettings = __webpack_require__(4558)["GQ"];
/* provided dependency */ var compare_product_createElement = __webpack_require__(6295)["Z"];
/* provided dependency */ var compare_product_MinimogTheme = __webpack_require__(4558)["LE"];

class CompareProduct {
  constructor() {
    _defineProperty(this, "storageKey", 'sf__compare-products');
    _defineProperty(this, "products", []);
    _defineProperty(this, "productNodes", {});
    _defineProperty(this, "pageTemplate", 'page.product-compare');
    _defineProperty(this, "addedClass", 'added-to-compare');
    _defineProperty(this, "selectors", {
      container: '.sf-prod-compare__container',
      noProducts: '.sf-prod-compare__no_products',
      wrapper: '.sf-prod-compare__wrapper',
      item: '.sf-prod-compare',
      compareButton: '.sf-prod-compare__button',
      compareText: '.sf-prod-compare__button-content',
      removeButton: '.sf-prod-compare__remove'
    });
    _defineProperty(this, "init", () => {
      if (MinimogSettings.template === this.pageTemplate) {
        this.renderComparePage();
        this.addEventToRemoveButtons();
      } else {
        this.setCompareButtonsState();
        this.addEventToCompareButtons();
      }
    });
    _defineProperty(this, "saveToStorage", () => {
      this.products = Array.from(new Set(this.products));
      localStorage.setItem(this.storageKey, JSON.stringify(this.products));
    });
    _defineProperty(this, "setCompareButtonsState", () => {
      const buttons = document.querySelectorAll(this.selectors.compareButton);
      buttons.forEach(btn => {
        var _btn$dataset, _btn$classList;
        const prodHandle = btn === null || btn === void 0 ? void 0 : (_btn$dataset = btn.dataset) === null || _btn$dataset === void 0 ? void 0 : _btn$dataset.productHandle;
        if (this.products.indexOf(prodHandle) >= 0 && !(btn !== null && btn !== void 0 && (_btn$classList = btn.classList) !== null && _btn$classList !== void 0 && _btn$classList.contains(this.addedClass))) {
          this.toggleButtonState(btn, true);
        }
      });
    });
    _defineProperty(this, "addEventToCompareButtons", () => {
      addEventDelegate({
        selector: this.selectors.compareButton,
        handler: (e, btn) => {
          var _btn$dataset2;
          e.preventDefault();
          const productHandle = btn === null || btn === void 0 ? void 0 : (_btn$dataset2 = btn.dataset) === null || _btn$dataset2 === void 0 ? void 0 : _btn$dataset2.productHandle;
          if (productHandle) {
            const active = !btn.classList.contains(this.addedClass);
            this.toggleButtonState(btn, active);
            document.querySelectorAll(this.selectors.compareButton).forEach(btnItem => {
              var _btnItem$dataset;
              if ((btnItem === null || btnItem === void 0 ? void 0 : (_btnItem$dataset = btnItem.dataset) === null || _btnItem$dataset === void 0 ? void 0 : _btnItem$dataset.productHandle) === productHandle && btnItem !== btn) {
                var _btnItem$classList;
                const isAdded = !(btnItem !== null && btnItem !== void 0 && (_btnItem$classList = btnItem.classList) !== null && _btnItem$classList !== void 0 && _btnItem$classList.contains(this.addedClass));
                this.toggleButtonState(btnItem, isAdded);
              }
            });
          }
        }
      });
    });
    _defineProperty(this, "toggleButtonState", (btn, active) => {
      var _btn$dataset3;
      const productHandle = btn === null || btn === void 0 ? void 0 : (_btn$dataset3 = btn.dataset) === null || _btn$dataset3 === void 0 ? void 0 : _btn$dataset3.productHandle;
      const compareText = btn.querySelector(this.selectors.compareText);
      if (active) {
        this.addToCompare(productHandle);
        btn.classList.add(this.addedClass);
      } else {
        this.removeFromCompare(productHandle);
        btn.classList.remove(this.addedClass);
      }
      if (compareText) {
        var _compareText$dataset;
        const temp = compareText === null || compareText === void 0 ? void 0 : (_compareText$dataset = compareText.dataset) === null || _compareText$dataset === void 0 ? void 0 : _compareText$dataset.revertText;
        compareText.dataset.revertText = compareText.textContent;
        compareText.textContent = temp;
      }
    });
    _defineProperty(this, "addEventToRemoveButtons", () => {
      addEventDelegate({
        selector: this.selectors.removeButton,
        handler: (e, btn) => {
          var _btn$dataset4;
          e.preventDefault();
          const prod = btn === null || btn === void 0 ? void 0 : btn.closest(this.selectors.wrapper);
          prod === null || prod === void 0 ? void 0 : prod.remove();
          const productHandle = btn === null || btn === void 0 ? void 0 : (_btn$dataset4 = btn.dataset) === null || _btn$dataset4 === void 0 ? void 0 : _btn$dataset4.productHandle;
          if (productHandle) {
            this.removeFromCompare(productHandle);
            if (!this.products.length) {
              this.showNoProductsMessage();
            }
          }
        }
      });
    });
    _defineProperty(this, "renderComparePage", async () => {
      const container = document.querySelector(this.selectors.container);
      if (container) {
        let noItemAvailable = true;
        if (this.products.length) {
          const promises = this.products.map(async hdl => {
            const prodHTML = await fetchCache(`/products/${hdl}?view=compare`);
            const item = compare_product_createElement("div", {
              className: `hidden ${this.selectors.wrapper.replace('.', '')}`
            });
            item.innerHTML = prodHTML;
            if (item.querySelector(this.selectors.item)) {
              noItemAvailable = false;
              this.productNodes[hdl] = item;
            }
          });
          await Promise.all(promises);

          // Render in order
          this.products.forEach(hdl => {
            const prodNode = this.productNodes[hdl];
            if (prodNode) {
              container.appendChild(prodNode);
              prodNode.classList.remove('hidden');
            }
          });
        }
        if (noItemAvailable) {
          this.showNoProductsMessage();
        }
        container.classList.add('opacity-100');
      }
    });
    _defineProperty(this, "showNoProductsMessage", () => {
      const container = document.querySelector(this.selectors.container);
      const noProducts = document.querySelector(this.selectors.noProducts);
      container.classList.add('hidden');
      noProducts.classList.remove('hidden');
    });
    this.products = Array.from(new Set(Array.from(JSON.parse(localStorage.getItem(this.storageKey)) || [])));
    this.init();
  }
  addToCompare(handle) {
    if (handle && this.products.indexOf(handle) === -1) {
      this.products.push(handle);
      this.saveToStorage();
    }
  }
  removeFromCompare(handle) {
    this.products = this.products.filter(hdl => hdl !== handle);
    this.saveToStorage();
  }
}
compare_product_MinimogTheme.CompareProduct = new CompareProduct();
;// CONCATENATED MODULE: ./src/js/components/WishlistRemoveButton.jsx
/* provided dependency */ var WishlistRemoveButton_createElement = __webpack_require__(6295)["Z"];
/* harmony default export */ function WishlistRemoveButton(_ref) {
  let {
    productHandle
  } = _ref;
  return WishlistRemoveButton_createElement("div", {
    className: "block md:hidden absolute z-10 right-5 top-5"
  }, WishlistRemoveButton_createElement("div", {
    className: "sf__tooltip-item sf-wishlist__remove",
    dataSet: {
      productHandle
    }
  }, WishlistRemoveButton_createElement("svg", {
    className: "w-5 h-5",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, WishlistRemoveButton_createElement("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M6 18L18 6M6 6l12 12"
  }))));
}
// EXTERNAL MODULE: ./node_modules/scroll-into-view/scrollIntoView.js
var scrollIntoView = __webpack_require__(643);
var scrollIntoView_default = /*#__PURE__*/__webpack_require__.n(scrollIntoView);
// EXTERNAL MODULE: ./src/js/utilities/events.js
var events = __webpack_require__(8971);
;// CONCATENATED MODULE: ./src/js/utilities/localization.js
function initLocalization() {
  const switchers = document.querySelectorAll('[data-localization-select]');
  switchers && switchers.forEach(function (select) {
    select.addEventListener('change', function (e) {
      const value = e.target.value;
      const form = select.closest('[data-localization-form]');
      const input = form.querySelector('input[data-localization-input]');
      input && input.setAttribute('value', value);
      input && form.submit();
    });
  });
}
;// CONCATENATED MODULE: ./src/js/utilities/index.js
/* provided dependency */ var utilities_MinimogSettings = __webpack_require__(4558)["GQ"];
/* provided dependency */ var utilities_createElement = __webpack_require__(6295)["Z"];



window.__getSectionInstanceByType = type => window.Shopify.theme.sections.instances.find(inst => inst.type === type);
function productFormCheck(form) {
  const fieldSelectors = '[data-theme-fields] [name][required]:not([hidden]):not([type="hidden"])';
  const requiredFields = form.querySelectorAll(fieldSelectors);
  const missingFields = [];
  requiredFields.forEach(field => {
    if (field.type === 'radio') {
      const raidoButtons = form.querySelectorAll(`input[name="${field.name}"]`);
      const selected = Array.from(raidoButtons).some(btn => btn.checked);
      if (!selected) {
        missingFields.push(field);
      }
    } else if (!field.value) {
      missingFields.push(field);
    }
  });
  return missingFields;
}
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, $1 => `_${$1.toLowerCase()}`);
function isInViewport(elem) {
  const rect = elem.getBoundingClientRect();
  // NOTE: not accuracy in all cases but we only need this
  return rect.top > 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight);
}
function loadStyles() {
  const {
    themeStyleURLs = {}
  } = window;
  Object.values(themeStyleURLs).forEach(style => {
    const {
      url,
      required,
      afterWindowLoaded
    } = style;
    if (url && required) {
      var _window;
      if (!afterWindowLoaded || (_window = window) !== null && _window !== void 0 && _window.__sfWindowLoaded) {
        loadCSS(url);
      } else {
        window.addEventListener("load", () => loadCSS(url));
      }
    }
  });
}
function loadScripts() {
  const {
    themeScriptURLs = {}
  } = window;
  Object.values(themeScriptURLs).forEach(script => {
    const {
      url,
      required,
      afterWindowLoaded
    } = script;
    if (url && required) {
      var _window2;
      if (!afterWindowLoaded || (_window2 = window) !== null && _window2 !== void 0 && _window2.__sfWindowLoaded) {
        loadJS(url);
      } else {
        window.addEventListener("load", () => loadJS(url));
      }
    }
  });
}
function addCustomerFormHandlers() {
  (0,events/* addEventDelegate */.X)({
    selector: '.sf-customer__forms',
    handler: (e, form) => {
      if (e.target.classList.contains('sf-customer__reset-password-btn')) {
        form.classList.add('show-recover-password-form');
        return;
      }
      if (e.target.classList.contains('sf-customer__cancel-reset')) {
        form.classList.remove('show-recover-password-form');
        return;
      }
    }
  });
  if (document.querySelector('.sf-customer__recover-form-posted')) {
    var _document$querySelect, _document$querySelect2;
    (_document$querySelect = document.querySelector('.sf-customer__forms')) === null || _document$querySelect === void 0 ? void 0 : (_document$querySelect2 = _document$querySelect.classList) === null || _document$querySelect2 === void 0 ? void 0 : _document$querySelect2.add('show-recover-password-form');
  }
}
function getVideoURL(id, host) {
  if (host === 'youtube') {
    return `https://www.youtube.com/watch?v=${id}&gl=true`;
  }
  if (host === 'vimeo') {
    return `https://vimeo.com/${id}`;
  }
  return '';
}
function initTermsCheckbox() {
  (0,events/* addEventDelegate */.X)({
    selector: '.agree-terms [name="agree_terms"]',
    event: 'change',
    handler: (e, target) => {
      const button = target.closest('.agree-terms').nextElementSibling;
      if (button && button.hasAttributes('data-terms-action')) {
        if (target.checked) {
          button.removeAttribute('disabled');
        } else {
          button.setAttribute('disabled', true);
        }
      }
    }
  });
}
const scrollToTopTarget = document.querySelector('#scroll-to-top-target');
function scrollToTop(callback) {
  scrollIntoView_default()(scrollToTopTarget, callback);
}
function initScrollTop() {
  const scrollTopButton = document.querySelector('#scroll-to-top-button');
  if (scrollTopButton) {
    scrollTopButton.addEventListener('click', scrollToTop);
    window.addEventListener('scroll', function () {
      const method = window.scrollY > 100 ? 'add' : 'remove';
      scrollTopButton.classList[method]('opacity-100');
    });
  }
}
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}
function getCookie(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}
function addRecentViewedProduct() {
  const cookies = getCookie('sf-recent-viewed-products');
  let products = cookies ? JSON.parse(cookies) : [];
  if (products.indexOf(utilities_MinimogSettings.productHandle) === -1) {
    products.unshift(utilities_MinimogSettings.productHandle);
    products = products.slice(0, 20);
    setCookie('sf-recent-viewed-products', JSON.stringify(products));
  }
}
const utilities_generateDomFromString = value => {
  const d = utilities_createElement("div", null);
  d.innerHTML = value;
  return d;
};
function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function updateParam(key, value) {
  var {
    location
  } = window;
  var baseUrl = [location.protocol, '//', location.host, location.pathname].join('');
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  if (urlParams.has(key)) {
    if (value !== '' && value !== 'undefined') {
      urlParams.set(key, value);
    }
    if (value === '' || value === 'undefined') {
      urlParams.delete(key);
    }
  } else {
    if (value) urlParams.append(key, value);
  }
  window.history.replaceState({}, "", baseUrl + '?' + urlParams.toString());
  return false;
}
function getParams() {
  let params = {};
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  for (const entry of urlParams.entries()) {
    params[entry[0]] = entry[1];
  }
  return params;
}
const setSwatchesOptions = () => {
  try {
    utilities_MinimogSettings._colorSwatches = [];
    utilities_MinimogSettings._imageSwatches = [];
    utilities_MinimogSettings.product_colors.split(',').filter(Boolean).forEach(colorSwatch => {
      var _value$trim;
      const [key, value] = colorSwatch.split(':');
      utilities_MinimogSettings._colorSwatches.push({
        key: key.trim().toLowerCase(),
        value: (value === null || value === void 0 ? void 0 : (_value$trim = value.trim) === null || _value$trim === void 0 ? void 0 : _value$trim.call(value)) || ''
      });
    });
    Object.keys(utilities_MinimogSettings).forEach(key => {
      if (key.includes('filter_color') && !key.includes('.png')) {
        if (utilities_MinimogSettings[`${key}.png`]) {
          utilities_MinimogSettings._imageSwatches.push({
            key: utilities_MinimogSettings[key].toLowerCase(),
            value: utilities_MinimogSettings[`${key}.png`]
          });
        }
      }
    });
  } catch (e) {
    console.error('Failed to convert color/image swatch structure!', e);
  }
};
const refreshProductReview = () => {
  if (typeof SMARTIFYAPPS !== 'undefined' && SMARTIFYAPPS.rv.installed) {
    SMARTIFYAPPS.rv.scmReviewsRate.actionCreateReviews();
  }
  if (typeof Yotpo !== 'undefined' && typeof Yotpo.API === 'function') {
    const yotpoApi = new Yotpo.API(yotpo);
    yotpoApi === null || yotpoApi === void 0 ? void 0 : yotpoApi.refreshWidgets();
  }
};
const formatUrl = (pageType, handle, query) => {
  let url;
  const {
    routes
  } = utilities_MinimogSettings;
  const root = routes.root.endsWith('/') ? '' : routes.root;
  url = `${root}/${pageType}/${handle}`;
  if (query) url += `?${query}`;
  return url;
};
function runHelpers() {
  try {
    loadScripts();
    loadStyles();
    ////////////////////
    setSwatchesOptions();
    initTermsCheckbox();
    initLocalization();
    addCustomerFormHandlers();
    initScrollTop();
  } catch (err) {
    console.error('Failed to run helpers.', err);
  }
}
window.MinimogLibs.getVideoURL = getVideoURL;
window.MinimogLibs.scrollToTop = scrollToTop;
;// CONCATENATED MODULE: ./src/js/pages/wishlist.js
/* provided dependency */ var wishlist_createElement = __webpack_require__(6295)["Z"];
/* provided dependency */ var wishlist_MinimogSettings = __webpack_require__(4558)["GQ"];
/* provided dependency */ var wishlist_MinimogTheme = __webpack_require__(4558)["LE"];

// eslint-disable-next-line no-unused-vars


class Wishlist {
  constructor() {
    _defineProperty(this, "isWishlistPage", false);
    _defineProperty(this, "storageKey", 'sf__wishlist-products');
    _defineProperty(this, "products", []);
    _defineProperty(this, "productNodes", {});
    _defineProperty(this, "pageTemplate", 'page.wishlist');
    _defineProperty(this, "addedClass", 'added-to-wishlist');
    _defineProperty(this, "hasItemClass", 'wishlist-has-item');
    _defineProperty(this, "selectors", {
      container: '.sf-wishlist__container',
      noProducts: '.sf-wishlist__no_products',
      wrapper: '.sf-wishlist__wrapper',
      productCard: '.sf__pcard',
      wishlistButton: '.sf-wishlist__button',
      wishlistText: '.sf-wishlist__button-content',
      removeButton: '.sf-wishlist__remove',
      count: '.sf-wishlist-count'
    });
    _defineProperty(this, "init", async () => {
      if (this.isWishlistPage) {
        await this.renderWishlistPage();
        this.addEventToRemoveButtons();
      }
      this.setWishlistButtonsState();
      this.addEventToWishlistButtons();
      this.updateWishlistCount();
    });
    _defineProperty(this, "saveToStorage", () => {
      this.products = Array.from(new Set(this.products));
      localStorage.setItem(this.storageKey, JSON.stringify(this.products));
    });
    _defineProperty(this, "setWishlistButtonsState", () => {
      const buttons = document.querySelectorAll(this.selectors.wishlistButton);
      buttons.forEach(btn => {
        var _btn$dataset, _btn$classList;
        const prodHandle = btn === null || btn === void 0 ? void 0 : (_btn$dataset = btn.dataset) === null || _btn$dataset === void 0 ? void 0 : _btn$dataset.productHandle;
        if (this.products.indexOf(prodHandle) >= 0 && !(btn !== null && btn !== void 0 && (_btn$classList = btn.classList) !== null && _btn$classList !== void 0 && _btn$classList.contains(this.addedClass))) {
          this.toggleButtonState(btn, true);
          if (this.isWishlistPage) {
            btn.classList.remove(this.selectors.wishlistButton.replace('.', ''));
            btn.classList.add(this.selectors.removeButton.replace('.', ''));
          }
        }
      });
    });
    _defineProperty(this, "updateWishlistCount", () => {
      const size = this.products.length;
      const countElems = document.querySelectorAll(this.selectors.count);
      [...countElems].forEach(elem => {
        elem.textContent = size;
        if (size < 1) {
          elem.classList.add('hidden');
        } else {
          elem.classList.remove('hidden');
        }
      });
      const method = size ? 'add' : 'remove';
      document.body.classList[method](this.hasItemClass);
    });
    _defineProperty(this, "addEventToWishlistButtons", () => {
      addEventDelegate({
        selector: this.selectors.wishlistButton,
        handler: (e, btn) => {
          var _btn$dataset2;
          e.preventDefault();
          const productHandle = btn === null || btn === void 0 ? void 0 : (_btn$dataset2 = btn.dataset) === null || _btn$dataset2 === void 0 ? void 0 : _btn$dataset2.productHandle;
          if (productHandle) {
            const active = !btn.classList.contains(this.addedClass);
            this.toggleButtonState(btn, active);
            this.updateWishlistCount();
            document.querySelectorAll(this.selectors.wishlistButton).forEach(btnItem => {
              var _btnItem$dataset;
              if ((btnItem === null || btnItem === void 0 ? void 0 : (_btnItem$dataset = btnItem.dataset) === null || _btnItem$dataset === void 0 ? void 0 : _btnItem$dataset.productHandle) === productHandle && btnItem !== btn) {
                var _btnItem$classList;
                const isAdded = !(btnItem !== null && btnItem !== void 0 && (_btnItem$classList = btnItem.classList) !== null && _btnItem$classList !== void 0 && _btnItem$classList.contains(this.addedClass));
                this.toggleButtonState(btnItem, isAdded);
              }
            });
          }
        }
      });
    });
    _defineProperty(this, "toggleButtonState", (btn, active) => {
      var _btn$dataset3;
      const productHandle = btn === null || btn === void 0 ? void 0 : (_btn$dataset3 = btn.dataset) === null || _btn$dataset3 === void 0 ? void 0 : _btn$dataset3.productHandle;
      const wishlistText = btn.querySelector(this.selectors.wishlistText);
      if (active) {
        this.addToWishlist(productHandle);
        btn.classList.add(this.addedClass);
      } else {
        this.removeFromWishlist(productHandle);
        btn.classList.remove(this.addedClass);
      }
      if (wishlistText) {
        var _wishlistText$dataset;
        const temp = wishlistText === null || wishlistText === void 0 ? void 0 : (_wishlistText$dataset = wishlistText.dataset) === null || _wishlistText$dataset === void 0 ? void 0 : _wishlistText$dataset.revertText;
        wishlistText.dataset.revertText = wishlistText.textContent;
        wishlistText.textContent = temp;
      }
    });
    _defineProperty(this, "addEventToRemoveButtons", () => {
      addEventDelegate({
        selector: this.selectors.removeButton,
        handler: (e, btn) => {
          var _btn$dataset4;
          e.preventDefault();
          const prod = btn === null || btn === void 0 ? void 0 : btn.closest(this.selectors.wrapper);
          prod === null || prod === void 0 ? void 0 : prod.remove();
          const productHandle = btn === null || btn === void 0 ? void 0 : (_btn$dataset4 = btn.dataset) === null || _btn$dataset4 === void 0 ? void 0 : _btn$dataset4.productHandle;
          if (productHandle) {
            this.removeFromWishlist(productHandle);
            this.updateWishlistCount();
            if (!this.products.length) {
              this.showNoProductsMessage();
            }
          }
        }
      });
    });
    _defineProperty(this, "renderWishlistPage", async () => {
      const container = document.querySelector(this.selectors.container);
      if (container) {
        let noItemAvailable = true;
        if (this.products.length) {
          const promises = this.products.map(async hdl => {
            const url = formatUrl('products', hdl, 'view=grid-card-item');
            const prodHTML = await fetchCache(url);
            const item = wishlist_createElement("div", {
              className: `hidden relative ${this.selectors.wrapper.replace('.', '')}`
            });
            item.innerHTML = prodHTML;
            if (item.querySelector(this.selectors.productCard)) {
              noItemAvailable = false;
              item.appendChild(wishlist_createElement(WishlistRemoveButton, {
                productHandle: hdl
              }));
              this.productNodes[hdl] = item;
            }
          });
          await Promise.all(promises);

          // Render in order
          this.products.forEach(hdl => {
            const prod = this.productNodes[hdl];
            if (prod) {
              container.appendChild(prod);
              prod.classList.remove('hidden');
            }
          });
        }
        if (noItemAvailable) {
          this.showNoProductsMessage();
        } else {
          this.setWishlistButtonsState();
        }
        container.classList.add('opacity-100');
      }
    });
    _defineProperty(this, "showNoProductsMessage", () => {
      const container = document.querySelector(this.selectors.container);
      const noProducts = document.querySelector(this.selectors.noProducts);
      container.classList.add('hidden');
      noProducts.classList.remove('hidden');
    });
    this.products = Array.from(new Set(Array.from(JSON.parse(localStorage.getItem(this.storageKey)) || [])));
    this.isWishlistPage = wishlist_MinimogSettings.template === this.pageTemplate;
    this.init();
  }
  addToWishlist(handle) {
    if (handle && this.products.indexOf(handle) === -1) {
      this.products.push(handle);
      this.saveToStorage();
    }
  }
  removeFromWishlist(handle) {
    this.products = this.products.filter(hdl => hdl !== handle);
    this.saveToStorage();
  }
}
wishlist_MinimogTheme.Wishlist = new Wishlist();
;// CONCATENATED MODULE: ./src/js/utilities/dom-intersection-observer.js
if (!window.IntersectionObserver) {
  loadJS('https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver');
}
function handleBackgroundImageLazyload() {
  return addIntersectionObserver('sf-bg-lazy');
}
handleBackgroundImageLazyload();
async function addIntersectionObserver(classSelector) {
  let newClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  let lazyImages = [].slice.call(document.getElementsByClassName(classSelector));
  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.classList.remove(classSelector);
          newClass && lazyImage.classList.remove(newClass);
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });
    lazyImages.forEach(function (lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  }
}
function observeElement(target, callback) {
  let option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  let observer = new IntersectionObserver(callback, option);
  observer.observe(target);
}
// EXTERNAL MODULE: ./node_modules/mdn-polyfills/Element.prototype.closest.js
var Element_prototype_closest = __webpack_require__(1339);
// EXTERNAL MODULE: ./node_modules/mdn-polyfills/Node.prototype.replaceWith.js
var Node_prototype_replaceWith = __webpack_require__(1713);
// EXTERNAL MODULE: ./node_modules/mdn-polyfills/Node.prototype.after.js
var Node_prototype_after = __webpack_require__(2297);
// EXTERNAL MODULE: ./node_modules/mdn-polyfills/Node.prototype.prepend.js
var Node_prototype_prepend = __webpack_require__(598);
;// CONCATENATED MODULE: ./src/js/utilities/polyfill.js




// EXTERNAL MODULE: ./src/js/utilities/shopify.js
var shopify = __webpack_require__(5118);
;// CONCATENATED MODULE: ./src/js/modules/boost-sales-helper.js
/* provided dependency */ var boost_sales_helper_MinimogTheme = __webpack_require__(4558)["LE"];

class BoostSales {
  constructor() {
    _defineProperty(this, "selectors", {
      liveViews: ['.prod__live-views'],
      stockCountdowns: ['.prod__stock-countdown']
    });
    _defineProperty(this, "init", () => {
      try {
        this.domNodes = queryDomNodes(this.selectors);
        this.initLiveViews();
        this.initStockCountDown();
      } catch (error) {
        console.error("Failed to init Boost Sales Helper");
      }
    });
    _defineProperty(this, "initLiveViews", () => {
      var _this$domNodes, _this$domNodes$liveVi;
      (_this$domNodes = this.domNodes) === null || _this$domNodes === void 0 ? void 0 : (_this$domNodes$liveVi = _this$domNodes.liveViews) === null || _this$domNodes$liveVi === void 0 ? void 0 : _this$domNodes$liveVi.forEach(liveViews => {
        if (liveViews.dataset.initialized !== "true") {
          const liveViewElem = liveViews.querySelector('.live-views-text');
          const settings = liveViews.dataset;
          if (liveViewElem) {
            const lvtHTML = liveViewElem.innerHTML;
            liveViewElem.innerHTML = lvtHTML.replace(settings.liveViewsCurrent, `<span class="live-view-numb">${settings.liveViewsCurrent}</span>`);
            this.changeLiveViewsNumber(liveViewElem, settings);
          }
          liveViews.dataset.initialized = true;
        }
      });
    });
    _defineProperty(this, "changeLiveViewsNumber", (liveViewElem, settings) => {
      const numbElem = liveViewElem.querySelector('.live-view-numb');
      const {
        liveViewsDuration,
        liveViewsMax,
        liveViewsMin
      } = settings;
      const duration = Number(liveViewsDuration) || 5;
      const max = Number(liveViewsMax) || 30;
      const min = Number(liveViewsMin) || 20;
      if (numbElem) {
        setInterval(() => {
          const newViews = Math.floor(Math.random() * (max - min + 1)) + min;
          numbElem.textContent = newViews;
        }, duration * 1000);
      }
    });
    _defineProperty(this, "initStockCountDown", () => {
      var _this$domNodes2, _this$domNodes2$stock;
      (_this$domNodes2 = this.domNodes) === null || _this$domNodes2 === void 0 ? void 0 : (_this$domNodes2$stock = _this$domNodes2.stockCountdowns) === null || _this$domNodes2$stock === void 0 ? void 0 : _this$domNodes2$stock.forEach(stockCountdown => {
        if (stockCountdown.dataset.initialized !== "true") {
          stockCountdown.classList.remove('hidden');
          const progress = stockCountdown.querySelector('.psc__progress');
          const width = progress.dataset.stockCountdownWidth;
          if (progress) {
            progress.style.width = "100%";
            setTimeout(() => {
              progress.style.width = width;
            }, 2000);
          }
          stockCountdown.dataset.initialized = true;
        }
      });
    });
    this.init();
  }
}
boost_sales_helper_MinimogTheme = boost_sales_helper_MinimogTheme || {};
boost_sales_helper_MinimogTheme.BoostSales = new BoostSales();
;// CONCATENATED MODULE: ./src/js/pages/product/product-list.js
/* provided dependency */ var product_list_createElement = __webpack_require__(6295)["Z"];
/* provided dependency */ var product_list_MinimogTheme = __webpack_require__(4558)["LE"];
/* provided dependency */ var MinimogLibs = __webpack_require__(4558)["gM"];


class ProductList {
  constructor(container) {
    let productHandles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    _defineProperty(this, "selectors", {
      productList: "[data-product-list]",
      gridContainer: "[data-grid-container]",
      sliderControl: ".sf-slider__controls"
    });
    _defineProperty(this, "swiper", void 0);
    _defineProperty(this, "currentScreen", void 0);
    _defineProperty(this, "init", async () => {
      var _MinimogTheme$Compare, _MinimogTheme$Wishlis;
      const productNodes = {};
      await Promise.all(this.productHandles.map(async hdl => {
        const url = formatUrl("products", hdl, "view=grid-card-item");
        const prodHTML = await fetchCache(url);
        const prodNode = product_list_createElement("div", {
          className: `swiper-slide ${this.enableSlider ? "" : "pb-[30px]"}`
        });
        prodNode.innerHTML = prodHTML;
        if (prodNode.querySelector('[data-view="card"]')) {
          productNodes[hdl] = prodNode;
        }
      }));

      // Render in order
      const {
        productList,
        gridContainer
      } = this.domNodes;
      if (!this.enableSlider) productList.remove();
      this.productHandles.forEach(hdl => {
        const node = productNodes[hdl];
        if (node) {
          const productWrapper = this.enableSlider ? productList : gridContainer;
          productWrapper === null || productWrapper === void 0 ? void 0 : productWrapper.appendChild(node);
        }
      });
      (_MinimogTheme$Compare = product_list_MinimogTheme.CompareProduct) === null || _MinimogTheme$Compare === void 0 ? void 0 : _MinimogTheme$Compare.setCompareButtonsState();
      (_MinimogTheme$Wishlis = product_list_MinimogTheme.Wishlist) === null || _MinimogTheme$Wishlis === void 0 ? void 0 : _MinimogTheme$Wishlis.setWishlistButtonsState();
      setTimeout(() => {
        this.initByScreenSize();
      }, 300);
      this.container.classList.remove("hidden");
      window.addEventListener("resize", debounce(this.initByScreenSize, 300));
      refreshProductReview();
    });
    _defineProperty(this, "initByScreenSize", () => {
      const {
        productList,
        gridContainer,
        sliderControl
      } = this.domNodes;
      const screen = window.innerWidth > 767 ? "desktop" : "mobile";
      if (screen === this.currentScreen) return;
      this.currentScreen = screen;
      if (screen === "desktop") {
        var _this$productHandles;
        gridContainer === null || gridContainer === void 0 ? void 0 : gridContainer.parentNode.classList.remove("sf__ms");
        productList === null || productList === void 0 ? void 0 : productList.classList.remove("sf__ms-wrapper");
        if (this.enableSlider && ((_this$productHandles = this.productHandles) === null || _this$productHandles === void 0 ? void 0 : _this$productHandles.length) > this.productsPerRow) {
          gridContainer === null || gridContainer === void 0 ? void 0 : gridContainer.classList.add("swiper-container");
          sliderControl === null || sliderControl === void 0 ? void 0 : sliderControl.classList.remove("hidden");
          const _container = this.container;
          const controlsContainer = this.container.querySelector(".sf-slider__controls");
          const prevButton = controlsContainer && controlsContainer.querySelector(".sf-slider__controls-prev");
          const nextButton = controlsContainer && controlsContainer.querySelector(".sf-slider__controls-next");
          const slideItemsLength = gridContainer.querySelector(".swiper-wrapper").childElementCount;
          this.slider = new MinimogLibs.Swiper(gridContainer, {
            slidesPerView: 2,
            showPagination: false,
            showNavigation: true,
            loop: true,
            threshold: 2,
            pagination: false,
            breakpoints: {
              768: {
                slidesPerView: 3
              },
              1280: {
                slidesPerView: parseInt(this.productsPerRow)
              }
            },
            on: {
              init: function () {
                setTimeout(() => {
                  // Calculate controls position
                  const firstItem = _container.querySelector(".sf-image");
                  if (firstItem && controlsContainer) {
                    const itemHeight = firstItem.clientHeight;
                    controlsContainer.style.setProperty("--offset-top", parseInt(itemHeight) / 2 + "px");
                  }
                }, 200);
              },
              breakpoint: (swiper, breakpointParams) => {
                if (controlsContainer) {
                  const {
                    slidesPerView
                  } = breakpointParams;
                  if (slideItemsLength > slidesPerView) {
                    controlsContainer.classList.remove("hidden");
                    swiper.allowTouchMove = true;
                  } else {
                    controlsContainer.classList.add("hidden");
                    swiper.allowTouchMove = false;
                  }
                }
              }
            }
          });
          if (this.slider) {
            prevButton && prevButton.addEventListener("click", () => this.slider.slidePrev());
            nextButton && nextButton.addEventListener("click", () => this.slider.slideNext());
          }
          this.swiper = gridContainer === null || gridContainer === void 0 ? void 0 : gridContainer.swiper;
        }
      } else {
        if (this.swiper) this.swiper.destroy(false, true);
        gridContainer.classList.remove("swiper-container");
        gridContainer.parentNode.classList.add("sf__ms");
        sliderControl === null || sliderControl === void 0 ? void 0 : sliderControl.classList.add("hidden");
        productList.classList.add("sf__ms-wrapper");
      }
    });
    if (!container || !productHandles.length) return;
    this.container = container;
    this.enableSlider = container.dataset.enableSlider === "true";
    this.productsToShow = Number(container.dataset.productsToShow) || 20;
    this.productsPerRow = Number(container.dataset.productsPerRow);
    this.productHandles = productHandles.slice(0, this.productsToShow);
    this.domNodes = queryDomNodes(this.selectors, container);
    this.init().catch(console.error);
  }
}
product_list_MinimogTheme.ProductList = ProductList;
;// CONCATENATED MODULE: ./src/js/components/Spinner.jsx
/* provided dependency */ var Spinner_createElement = __webpack_require__(6295)["Z"];
/* harmony default export */ function Spinner(_ref) {
  let {
    className = ''
  } = _ref;
  return Spinner_createElement("svg", {
    className: `animate-spin hidden w-[20px] h-[20px] ${className}`,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none"
  }, Spinner_createElement("circle", {
    className: "opacity-25",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    "stroke-width": "4"
  }), Spinner_createElement("path", {
    className: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  }));
}
;// CONCATENATED MODULE: ./src/js/sections/product-tabs.js
/* provided dependency */ var product_tabs_createElement = __webpack_require__(6295)["Z"];
/* provided dependency */ var product_tabs_MinimogTheme = __webpack_require__(4558)["LE"];
/* provided dependency */ var product_tabs_MinimogLibs = __webpack_require__(4558)["gM"];
// eslint-disable-next-line no-unused-vars


register('product-tabs', {
  onLoad: function () {
    this.initTabs();
    this.initMobileSelect();
    this.selectors = {
      loadMoreBtn: '[data-load-more-product]',
      productsContainer: '[data-products-container]'
    };
    this.domNodes = queryDomNodes(this.selectors);
    this.tabSliders = [];
    const sliderEnabled = this.container.dataset.enableSlider === 'true';
    const mobileSliderDisable = this.container.dataset.mobileDisableSlider === 'true';
    const buttonType = this.container.dataset.buttonType;
    const blocks = this.container.querySelectorAll('.sf-tab-content');
    if (sliderEnabled) {
      this.showPagination = this.container.dataset.showPagination === 'true';
      this.showNavigation = this.container.dataset.showNavigation === 'true';
      this.items = this.container.dataset.items;
      for (let block of blocks) {
        this.initSliderByScreenSize(block);
        document.addEventListener('matchMobile', () => {
          this.initSliderByScreenSize(block);
        });
        document.addEventListener('unmatchMobile', () => {
          this.initSliderByScreenSize(block);
        });
      }
    }
    if (!sliderEnabled && buttonType === 'load') {
      this.canLoad = true;
      this.currentPage = 1;
      this.spinner = product_tabs_createElement(Spinner, null);
      for (let block of blocks) {
        this.initLoadMore(block);
      }
    }
    if (product_tabs_MinimogTheme.config.mqlMobile && mobileSliderDisable && buttonType === 'load') {
      this.canLoad = true;
      this.currentPage = 1;
      this.spinner = product_tabs_createElement(Spinner, null);
      for (let block of blocks) {
        this.initLoadMore(block);
      }
    }
    document.addEventListener('matchMobile', () => {
      if (product_tabs_MinimogTheme.config.mqlMobile && mobileSliderDisable && buttonType === 'load') {
        this.canLoad = true;
        this.currentPage = 1;
        this.spinner = product_tabs_createElement(Spinner, null);
        for (let block of blocks) {
          this.initLoadMore(block);
        }
      }
    });
  },
  initTabs: function () {
    this.tabs = new product_tabs_MinimogTheme.Tabs(this === null || this === void 0 ? void 0 : this.container, target => {
      const tabId = target.getAttribute('href');
      const slider = this.container.querySelector(tabId + ' .swiper-container');
      const controlsContainer = this.container.querySelector(tabId + ' .sf-slider__controls');
      // trigger update slider
      slider && slider.swiper.update();
      const firstItem = slider === null || slider === void 0 ? void 0 : slider.querySelector('.sf-image');
      if (firstItem) {
        const itemHeight = firstItem.clientHeight;
        controlsContainer.style.setProperty('--offset-top', parseInt(itemHeight) / 2 + 25 + 'px');
      }
    });
  },
  initSliderByScreenSize: function (sliderContainer) {
    const mobileDisableSlider = this.container.dataset.mobileDisableSlider === "true";
    const slider = sliderContainer.querySelector('.m-product-list__wrapper');
    const controlsContainer = sliderContainer.querySelector(".sf-slider__controls");
    if (product_tabs_MinimogTheme.config.mqlMobile && mobileDisableSlider) {
      controlsContainer === null || controlsContainer === void 0 ? void 0 : controlsContainer.classList.add("hidden");
      slider.classList.remove("swiper-container");
      if (slider.swiper) slider.swiper.destroy(false, true);
    } else {
      controlsContainer === null || controlsContainer === void 0 ? void 0 : controlsContainer.classList.remove("hidden");
      this.initSlider(sliderContainer);
    }
  },
  initSlider: function (sliderContainer) {
    const swiper = sliderContainer === null || sliderContainer === void 0 ? void 0 : sliderContainer.querySelector('.m-product-list__wrapper');
    const controlsContainer = sliderContainer.querySelector(".sf-slider__controls");
    const prevButton = controlsContainer && controlsContainer.querySelector(".sf-slider__controls-prev");
    const nextButton = controlsContainer && controlsContainer.querySelector(".sf-slider__controls-next");
    const slideItemsLength = sliderContainer.querySelector(".swiper-wrapper").childElementCount;
    swiper === null || swiper === void 0 ? void 0 : swiper.classList.add("swiper-container");
    let slider = new product_tabs_MinimogLibs.Swiper(swiper, {
      slidesPerView: 2,
      showPagination: this.showPagination,
      showNavigation: this.showNavigation,
      loop: this.enableFlashsale ? false : true,
      pagination: this.showPagination ? {
        el: sliderContainer.querySelector(".swiper-pagination"),
        clickable: true
      } : false,
      breakpoints: {
        768: {
          slidesPerView: parseInt(this.items) >= 3 ? 3 : parseInt(this.items)
        },
        992: {
          slidesPerView: parseInt(this.items) >= 4 ? 4 : parseInt(this.items)
        },
        1280: {
          slidesPerView: parseInt(this.items)
        }
      },
      threshold: 2,
      on: {
        init: function () {
          setTimeout(() => {
            // Calculate controls position
            const firstItem = sliderContainer.querySelector(".sf-image");
            if (firstItem && controlsContainer) {
              const itemHeight = firstItem.clientHeight;
              controlsContainer.style.setProperty("--offset-top", parseInt(itemHeight) / 2 + "px");
            }
          }, 200);
        },
        breakpoint: (swiper, breakpointParams) => {
          if (controlsContainer) {
            const {
              slidesPerView
            } = breakpointParams;
            if (slideItemsLength > slidesPerView) {
              controlsContainer.classList.remove("hidden");
              swiper.allowTouchMove = true;
            } else {
              controlsContainer.classList.add("hidden");
              swiper.allowTouchMove = false;
            }
          }
        }
      }
    });
    if (slider && this.showNavigation) {
      prevButton && prevButton.addEventListener("click", () => slider.slidePrev());
      nextButton && nextButton.addEventListener("click", () => slider.slideNext());
    }
  },
  initMobileSelect: function () {
    this.select = this.container.querySelector('[data-tab-select]');
    this.select.addEventListener('change', () => {
      var _this$tabs, _this$tabs$currentTab, _this$tabs2, _this$tabs2$currentTa;
      this.tabs.setActiveTab(parseInt(this.select.value));
      const slider = (_this$tabs = this.tabs) === null || _this$tabs === void 0 ? void 0 : (_this$tabs$currentTab = _this$tabs.currentTab) === null || _this$tabs$currentTab === void 0 ? void 0 : _this$tabs$currentTab.querySelector('.swiper-container');
      const controlsContainer = (_this$tabs2 = this.tabs) === null || _this$tabs2 === void 0 ? void 0 : (_this$tabs2$currentTa = _this$tabs2.currentTab) === null || _this$tabs2$currentTa === void 0 ? void 0 : _this$tabs2$currentTa.querySelector('.sf-slider__controls');
      slider && slider.swiper.update();
      const firstItem = slider === null || slider === void 0 ? void 0 : slider.querySelector('.sf-image');
      if (firstItem) {
        const itemHeight = firstItem.clientHeight;
        controlsContainer.style.setProperty('--offset-top', parseInt(itemHeight) / 2 + 25 + 'px');
      }
    });
  },
  initLoadMore: function (wrapper) {
    addEventDelegate({
      context: wrapper,
      selector: this.selectors.loadMoreBtn,
      handler: e => {
        e.preventDefault();
        this.handleLoadMore(wrapper);
      }
    });
  },
  handleLoadMore: function (wrapper) {
    const loadBtn = wrapper.querySelector(this.selectors.loadMoreBtn);
    const productsContainer = wrapper.querySelector(this.selectors.productsContainer);
    let currentPage = wrapper.dataset.page;
    currentPage = parseInt(currentPage);
    const totalPages = wrapper.dataset.totalPages;
    this.toggleLoading(loadBtn, true);
    const url = wrapper.dataset.url;
    const dataUrl = `${url}?page=${currentPage + 1}&section_id=${this.id}`;
    fetchCache(dataUrl).then(html => {
      currentPage++;
      wrapper.dataset.page = currentPage;
      this.toggleLoading(loadBtn, false);
      const dom = generateDomFromString(html);
      const tabId = wrapper.getAttribute('id');
      const products = dom.querySelector(`#${tabId} ${this.selectors.productsContainer}`);
      if (products) {
        Array.from(products.childNodes).forEach(product => productsContainer.appendChild(product));
      }
      if (currentPage >= parseInt(totalPages)) loadBtn && loadBtn.remove();
    });
  },
  toggleLoading: function (loadBtn, status) {
    if (!loadBtn) return;
    if (status) {
      loadBtn.appendChild(this.spinner);
      loadBtn.classList.add('sf-spinner-loading');
    } else {
      var _this$spinner;
      this === null || this === void 0 ? void 0 : (_this$spinner = this.spinner) === null || _this$spinner === void 0 ? void 0 : _this$spinner.remove();
      loadBtn.classList.remove('sf-spinner-loading');
    }
  },
  onBlockSelect: function (evt) {
    const {
      index
    } = evt.target.dataset;
    this.tabs.setActiveTab(index);
  }
});

// load('product-tabs')
;// CONCATENATED MODULE: ./src/js/app.js












function initTheme() {
  runHelpers();
  load('product-tabs');
}
initTheme();
})();

/******/ })()
;