/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LE: () => (/* binding */ MinimogTheme),
/* harmony export */   gM: () => (/* binding */ MinimogLibs),
/* harmony export */   s0: () => (/* binding */ MinimogEvents)
/* harmony export */ });
/* unused harmony exports MinimogSettings, MinimogStrings */
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
;// CONCATENATED MODULE: ./src/js/modules/mega-menu.js
/* provided dependency */ var MinimogTheme = __webpack_require__(4558)["LE"];
/* provided dependency */ var MinimogEvents = __webpack_require__(4558)["s0"];
/* provided dependency */ var MinimogLibs = __webpack_require__(4558)["gM"];

class Megamenu {
  constructor(container) {
    _defineProperty(this, "selectors", {
      announcementBar: '.announcement-bar',
      hamburgerButtons: '.sf-menu-button',
      desktopMenuItems: ['.sf-menu-item'],
      desktopSubMenus: '.sf-menu__desktop-sub-menu',
      headerMobile: '.sf-header__mobile',
      menuDrawer: '#m-menu-drawer',
      menuDrawerContent: '.m-menu-drawer__content',
      menu: '.m-menu-mobile',
      menuItems: ['.m-menu-mobile__item'],
      megaMenuMobile: ['.m-megamenu-mobile']
    });
    _defineProperty(this, "menuSelectors", {
      subMenu: '.sf-menu__desktop-sub-menu'
    });
    _defineProperty(this, "activeDesktopMenuItem", null);
    _defineProperty(this, "sliders", {});
    _defineProperty(this, "closeDesktopSubmenu", menuItemIndex => {
      var _header$classList;
      const menuItem = this.menuData[menuItemIndex];
      const {
        header
      } = menuItem;
      header === null || header === void 0 ? void 0 : (_header$classList = header.classList) === null || _header$classList === void 0 ? void 0 : _header$classList.remove('show-menu');
    });
    this.container = container;
    this.transitionDuration = 0;
    this.domNodes = queryDomNodes(this.selectors);
    this.menuData = [...this.domNodes.desktopMenuItems].map(item => {
      const header = item.closest('header');
      const menuNodes = queryDomNodes(this.menuSelectors, item);
      return {
        header,
        item,
        ...menuNodes,
        active: false
      };
    });
    this.init();
    MinimogTheme = MinimogTheme || {};
    MinimogTheme.headerSliders = this.sliders;
  }
  init() {
    var _MinimogEvents$subscr, _MinimogEvents, _MinimogEvents$subscr2, _MinimogEvents2;
    this.domNodes.hamburgerButtons.addEventListener("click", e => {
      if (this.domNodes.hamburgerButtons.classList.contains('active')) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
      this.domNodes.hamburgerButtons.classList.toggle('active');
    });
    this.domNodes.menuDrawer.addEventListener("click", e => {
      if (e.target === this.domNodes.menuDrawer) {
        this.closeMenu();
      }
    });
    this.initMobileMegaMenu();
    this.initDesktopMegaMenu();
    (_MinimogEvents$subscr = (_MinimogEvents = MinimogEvents).subscribe) === null || _MinimogEvents$subscr === void 0 ? void 0 : _MinimogEvents$subscr.call(_MinimogEvents, 'ON_OPEN_DRAWER_CART', () => {
      this.closeMenu();
    });
    (_MinimogEvents$subscr2 = (_MinimogEvents2 = MinimogEvents).subscribe) === null || _MinimogEvents$subscr2 === void 0 ? void 0 : _MinimogEvents$subscr2.call(_MinimogEvents2, 'ON_OPEN_SEARCH_POPUP', () => {
      this.closeMenu();
    });
  }
  initDesktopMegaMenu() {
    [...this.menuData].forEach(menuItem => {
      const {
        item,
        subMenu
      } = menuItem;
      if (subMenu) {
        const productsBanner = subMenu.querySelector('.sf-mega-menu-products');
        if (productsBanner) {
          var _window;
          if ((_window = window) !== null && _window !== void 0 && _window.__sfWindowLoaded) {
            menuItem.productsBannerSlider = this.initProductsBanner(productsBanner);
          } else {
            window.addEventListener("load", () => {
              menuItem.productsBannerSlider = this.initProductsBanner(productsBanner);
            });
          }
        }
      }
    });
  }
  initProductsBanner(banner) {
    var _header$dataset;
    const header = banner.closest('header');
    const menuItem = banner.closest('.sf-menu-item');
    const screenClass = `.${header === null || header === void 0 ? void 0 : (_header$dataset = header.dataset) === null || _header$dataset === void 0 ? void 0 : _header$dataset.screen}` || '';
    const id = banner.dataset.id;
    const sliderContainer = document.querySelector(`.sf-slider-${id}`);
    const columns = sliderContainer.dataset.column;
    let slider;
    slider = new MinimogLibs.Swiper(`${screenClass} .sf-slider-${id}`, {
      slidesPerView: 1,
      loop: false,
      autoplay: false,
      breakpoints: {
        1200: {
          slidesPerView: columns
        },
        992: {
          slidesPerView: columns >= 2 ? 2 : columns
        }
      }
    });
    this.sliders[menuItem.dataset.index] = slider;
    if (slider) {
      const prevBtn = document.querySelector(`#sf-slider-controls-${id} .sf-slider__controls-prev`);
      const nextBtn = document.querySelector(`#sf-slider-controls-${id} .sf-slider__controls-next`);
      prevBtn && prevBtn.addEventListener('click', () => slider.slidePrev());
      nextBtn && nextBtn.addEventListener('click', () => slider.slideNext());
    }
  }
  initMobileMegaMenu() {
    [...this.domNodes.menuItems].forEach(item => {
      const subMenuContainer = item.querySelector('.m-megamenu-mobile');
      const backBtn = item.querySelector('.m-menu-mobile__back-button');
      if (subMenuContainer) {
        addEventDelegate({
          context: item,
          selector: '[data-toggle-submenu]',
          handler: (e, target) => {
            e.preventDefault();
            const level = target.dataset.toggleSubmenu;
            const parentNode = e.target.parentNode;
            if (e.target.classList.contains('m-menu-mobile__back-button') || parentNode.classList.contains('m-menu-mobile__back-button')) {
              return;
            }
            this.openSubMenu(subMenuContainer, level);
          }
        });
      }
      if (backBtn) {
        addEventDelegate({
          context: item,
          selector: '[data-toggle-submenu]',
          handler: (e, target) => {
            e.preventDefault();
            const level = target.dataset.toggleSubmenu;
            const parentNode = e.target.parentNode;
            if (e.target.classList.contains('m-menu-mobile__back-button') || parentNode.classList.contains('m-menu-mobile__back-button')) {
              return;
            }
            this.openSubMenu(subMenuContainer, level);
          }
        });
        backBtn.addEventListener("click", e => {
          const level = e.target.dataset.level;
          this.closeSubMenu(subMenuContainer, level);
        });
      }
    });
    this.setMenuHeight();
    document.addEventListener('matchMobile', () => this.setMenuHeight());
    document.addEventListener('unmatchMobile', () => this.setMenuHeight());
  }

  //////////////// MOBILE MENU EVENTS
  openMenu() {
    document.documentElement.classList.add('prevent-scroll');
    this.domNodes.menuDrawer.classList.add('open');
  }
  closeMenu() {
    const {
      menuDrawer,
      menu,
      megaMenuMobile,
      hamburgerButtons
    } = this.domNodes;
    setTimeout(() => {
      megaMenuMobile.forEach(container => {
        container.classList.remove('open');
      });
      menu.classList.remove('m-submenu-open', 'm-submenu-open--level-1', 'm-submenu-open--level-2');
      menuDrawer.classList.remove('open');
      document.documentElement.classList.remove('prevent-scroll');
      hamburgerButtons.classList.remove('active');
      // Close search
    }, this.transitionDuration);
  }
  openSubMenu(subMenuContainer, level) {
    let subMenuOpenClass = `m-submenu-open--level-${level}`;
    this.domNodes.menuDrawerContent.classList.add('open-submenu');
    this.domNodes.menu.classList.add('m-submenu-open');
    this.domNodes.menu.classList.add(subMenuOpenClass);
    subMenuContainer.classList.add('open');
  }
  closeSubMenu(subMenuContainer, level) {
    let subMenuOpenClass = `m-submenu-open--level-${level}`;
    if (level === '1') this.domNodes.menu.classList.remove('m-submenu-open');
    this.domNodes.menu.classList.remove(subMenuOpenClass);
    subMenuContainer.classList.remove('open');
    this.domNodes.menuDrawerContent.classList.remove('open-submenu');
  }
  setMenuHeight() {
    const {
      menuDrawer,
      headerMobile
    } = this.domNodes;
    const offset = headerMobile.getBoundingClientRect().top;
    const panelHeight = window.innerHeight - headerMobile.offsetHeight - offset;
    menuDrawer.style.setProperty('--menu-drawer-height', `${panelHeight}px`);
  }
}
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
;// CONCATENATED MODULE: ./src/js/modules/siteNav.js
/* provided dependency */ var siteNav_MinimogTheme = __webpack_require__(4558)["LE"];

class SiteNav {
  constructor(container) {
    _defineProperty(this, "selectors", {
      menuItems: ['.sf-nav .sf-menu-item'],
      dropdowns: ['.sf-menu__submenu'],
      subMenu: '.sf-menu__submenu',
      dropdownBg: '.sf-nav__bg',
      overlay: '.sf-header__overlay',
      swiper: '.swiper-container'
    });
    _defineProperty(this, "classes", {
      slideFromRight: 'slide-from-right',
      slideReveal: 'slide-reveal',
      active: 'sf-mega-active'
    });
    _defineProperty(this, "headerSticky", false);
    _defineProperty(this, "attachEvents", () => {
      this.domNodes.menuItems.forEach((menuItem, index) => {
        menuItem.addEventListener('mouseenter', evt => this.onMenuItemEnter(evt, index));
        menuItem.addEventListener('mouseleave', evt => this.onMenuItemLeave(evt, index));
      });
    });
    _defineProperty(this, "initDropdownSize", () => {
      var _this$container, _this$container2;
      (_this$container = this.container) === null || _this$container === void 0 ? void 0 : _this$container.style.setProperty('--sf-dropdown-width', this.windowWidth());
      (_this$container2 = this.container) === null || _this$container2 === void 0 ? void 0 : _this$container2.style.setProperty('--sf-dropdown-height', this.windowHeight());
    });
    _defineProperty(this, "onMenuItemEnter", (evt, index) => {
      var _target$dataset, _this$container3, _this$container4, _this$container5, _this$container6, _this$container7;
      const {
        target
      } = evt;
      if (target.classList.contains('sf-menu-item--no-mega')) return;
      clearTimeout(this.timeoutLeave);
      this.activeIndex = Number((_target$dataset = target.dataset) === null || _target$dataset === void 0 ? void 0 : _target$dataset.index);
      this.headerSticky = ((_this$container3 = this.container) === null || _this$container3 === void 0 ? void 0 : _this$container3.dataset.sticky) === 'true';
      this.reInitSlider(target);
      this.visited ? (_this$container4 = this.container) === null || _this$container4 === void 0 ? void 0 : _this$container4.classList.remove(this.classes.slideReveal) : (_this$container5 = this.container) === null || _this$container5 === void 0 ? void 0 : _this$container5.classList.add(this.classes.slideReveal);
      this.visited = true;
      this.lastActiveIndex >= 0 && this.activeIndex >= 0 && (this.lastActiveIndex < this.activeIndex ? (_this$container6 = this.container) === null || _this$container6 === void 0 ? void 0 : _this$container6.classList.add(this.classes.slideFromRight) : this.lastActiveIndex > this.activeIndex && ((_this$container7 = this.container) === null || _this$container7 === void 0 ? void 0 : _this$container7.classList.remove(this.classes.slideFromRight)));
      this.getElementBoundingRect(target).then(rect => {
        if (rect) {
          var _this$container8, _this$container9;
          (_this$container8 = this.container) === null || _this$container8 === void 0 ? void 0 : _this$container8.style.setProperty('--sf-dropdown-width', rect.width);
          (_this$container9 = this.container) === null || _this$container9 === void 0 ? void 0 : _this$container9.style.setProperty('--sf-dropdown-height', rect.height);
        }
        this.timeoutEnter = setTimeout(() => {
          var _this$container10;
          if (this.activeIndex !== Number(target.dataset.index)) return;
          (_this$container10 = this.container) === null || _this$container10 === void 0 ? void 0 : _this$container10.classList.add(this.classes.active);
          target.closest('.sf-menu-item').classList.add('sf-menu-item--active');
        }, 120);
      });
    });
    _defineProperty(this, "onMenuItemLeave", (evt, index) => {
      // console.log(evt, 'leave')
      this.activeIndex = -1;
      this.lastActiveIndex = index;
      evt.target.closest('.sf-menu-item').classList.remove('sf-menu-item--active');
      this.timeoutLeave = setTimeout(() => {
        if (this.activeIndex === -1 || this.activeIndex < 0) {
          this.visited = false;
        }
        this.resetMegaMenu(evt.target);
      }, 80);
    });
    _defineProperty(this, "reInitSlider", menuItem => {
      var _MinimogTheme;
      const swiper = menuItem.querySelector(this.selectors.swiper);
      if (!swiper) return;
      const itemIndex = menuItem.dataset.index;
      const slider = (_MinimogTheme = siteNav_MinimogTheme) === null || _MinimogTheme === void 0 ? void 0 : _MinimogTheme.headerSliders[itemIndex];
      slider === null || slider === void 0 ? void 0 : slider.update();
    });
    _defineProperty(this, "getElementBoundingRect", async element => {
      const subMenu = element.querySelector(this.selectors.subMenu);
      if (subMenu) {
        const rect = subMenu.getBoundingClientRect();
        return {
          width: rect.width,
          height: rect.height,
          left: rect.left,
          top: rect.top
        };
      }
    });
    _defineProperty(this, "resetMegaMenu", () => {
      var _this$container11;
      this.activeIndex = -1;
      clearTimeout(this.timeoutEnter);
      (_this$container11 = this.container) === null || _this$container11 === void 0 ? void 0 : _this$container11.classList.remove(this.classes.active, this.classes.slideFromRight, this.classes.slideReveal, 'sf-header--bg-black', 'sf-header--bg-white');
    });
    _defineProperty(this, "windowWidth", () => {
      return window.innerWidth;
    });
    _defineProperty(this, "windowHeight", () => {
      return window.innerHeight;
    });
    _defineProperty(this, "destroy", () => {
      this.domNodes.menuItems.forEach((menuItem, index) => {
        menuItem.removeEventListener('mouseenter', evt => this.onMenuItemEnter(evt, index));
        menuItem.removeEventListener('mouseleave', evt => this.onMenuItemLeave(evt, index));
      });
    });
    if (!container) return;
    this.container = container;
    this.domNodes = queryDomNodes(this.selectors, this.container);
    this.activeIndex = -1;
    this.lastActiveIndex = -1;
    this.visited = false;
    this.timeoutEnter = null;
    this.timeoutLeave = null;
    this.attachEvents();
  }
}
;// CONCATENATED MODULE: ./src/js/sections/header.js
/* provided dependency */ var header_MinimogTheme = __webpack_require__(4558)["LE"];



register('header', {
  onLoad: function () {
    var _this$container, _this$container$datas, _this$container2, _this$container2$data;
    this.isDesignMode = ((_this$container = this.container) === null || _this$container === void 0 ? void 0 : (_this$container$datas = _this$container.dataset) === null || _this$container$datas === void 0 ? void 0 : _this$container$datas.designMode) === 'true';
    this.selectors = {
      headers: ['header'],
      logos: ['.sf-logo'],
      topbar: '.sf-topbar',
      headerWrapper: '.header__wrapper',
      topbarClose: '.sf-topbar__close'
    };
    this.domNodes = queryDomNodes(this.selectors, this.container);
    this.innerWidth = window.innerWidth;
    this.offsetTop = this.domNodes.headerWrapper.offsetTop;
    this.headerHeight = this.domNodes.headerWrapper.offsetHeight;
    this.stickyEnabled = ((_this$container2 = this.container) === null || _this$container2 === void 0 ? void 0 : (_this$container2$data = _this$container2.dataset) === null || _this$container2$data === void 0 ? void 0 : _this$container2$data.sticky) === 'true' || false;
    this.classes = {
      scrollUp: 'scroll-up',
      scrollDown: 'scroll-down',
      stuck: 'stuck'
    };
    try {
      var _this$domNodes, _this$domNodes$header, _this$domNodes$header2, _this$domNodes$header3;
      this.transparentHeader = ((_this$domNodes = this.domNodes) === null || _this$domNodes === void 0 ? void 0 : (_this$domNodes$header = _this$domNodes.headers) === null || _this$domNodes$header === void 0 ? void 0 : (_this$domNodes$header2 = _this$domNodes$header[0]) === null || _this$domNodes$header2 === void 0 ? void 0 : (_this$domNodes$header3 = _this$domNodes$header2.dataset) === null || _this$domNodes$header3 === void 0 ? void 0 : _this$domNodes$header3.transparent) === 'true';
      this.initAddon();
      this.handleSticky();
      document.addEventListener('matchMobile', () => this.handleSticky());
      document.addEventListener('unmatchMobile', () => this.handleSticky());
      this.siteNav = new SiteNav(this.container);
      window.__sfHeader = this;
      window.addEventListener('resize', () => {
        this.innerWidth = window.innerWidth;
      });
      if (this.transparentHeader && this.innerWidth > 1280) {
        var _this$domNodes$header4, _this$domNodes$header5;
        (_this$domNodes$header4 = this.domNodes.headerWrapper) === null || _this$domNodes$header4 === void 0 ? void 0 : (_this$domNodes$header5 = _this$domNodes$header4.classList) === null || _this$domNodes$header5 === void 0 ? void 0 : _this$domNodes$header5.add('transparent-on-top');
      } else {
        var _this$domNodes$header6, _this$domNodes$header7;
        (_this$domNodes$header6 = this.domNodes.headerWrapper) === null || _this$domNodes$header6 === void 0 ? void 0 : (_this$domNodes$header7 = _this$domNodes$header6.classList) === null || _this$domNodes$header7 === void 0 ? void 0 : _this$domNodes$header7.remove('transparent-on-top');
      }
    } catch (error) {
      console.error('Failed to init header section.', error);
    }
  },
  initAddon: function () {
    this.megamenu = new Megamenu(this.container);
    if (this.isDesignMode) {
      var _MinimogTheme, _MinimogTheme$Wishlis, _MinimogTheme$Wishlis2, _MinimogTheme2, _MinimogTheme2$Search, _MinimogTheme2$Search2;
      header_MinimogTheme = header_MinimogTheme || {};
      (_MinimogTheme = header_MinimogTheme) === null || _MinimogTheme === void 0 ? void 0 : (_MinimogTheme$Wishlis = _MinimogTheme.Wishlist) === null || _MinimogTheme$Wishlis === void 0 ? void 0 : (_MinimogTheme$Wishlis2 = _MinimogTheme$Wishlis.updateWishlistCount) === null || _MinimogTheme$Wishlis2 === void 0 ? void 0 : _MinimogTheme$Wishlis2.call(_MinimogTheme$Wishlis);
      (_MinimogTheme2 = header_MinimogTheme) === null || _MinimogTheme2 === void 0 ? void 0 : (_MinimogTheme2$Search = _MinimogTheme2.Search) === null || _MinimogTheme2$Search === void 0 ? void 0 : (_MinimogTheme2$Search2 = _MinimogTheme2$Search.init) === null || _MinimogTheme2$Search2 === void 0 ? void 0 : _MinimogTheme2$Search2.call(_MinimogTheme2$Search);
    }
  },
  handleSticky: function () {
    let extraSpace = 20;
    const sectionGroups = document.querySelectorAll('.shopify-section-group-header-group');
    sectionGroups.forEach(section => {
      if (!section.classList.contains('m-section-header')) {
        extraSpace += section.offsetHeight;
      }
    });
    const topBar = document.querySelector('.sf-topbar');
    if (topBar) extraSpace += topBar.offsetHeight;
    if (!this.stickyEnabled) return;
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= extraSpace) {
        this.container.classList.remove(this.classes.scrollUp, this.classes.stuck);
        if (this.transparentHeader && this.innerWidth > 1279) {
          var _this$domNodes$header8, _this$domNodes$header9, _this$domNodes$header10;
          (_this$domNodes$header8 = this.domNodes.headerWrapper) === null || _this$domNodes$header8 === void 0 ? void 0 : (_this$domNodes$header9 = _this$domNodes$header8.classList) === null || _this$domNodes$header9 === void 0 ? void 0 : (_this$domNodes$header10 = _this$domNodes$header9.add) === null || _this$domNodes$header10 === void 0 ? void 0 : _this$domNodes$header10.call(_this$domNodes$header9, 'transparent-on-top');
        }
        return;
      }
      this.container.classList.add(this.classes.stuck);
      if (currentScroll > this.headerHeight + extraSpace && currentScroll > lastScroll && !this.container.classList.contains(this.classes.scrollDown)) {
        this.container.classList.remove(this.classes.scrollUp);
        this.container.classList.add(this.classes.scrollDown);
      } else if (currentScroll < lastScroll && this.container.classList.contains(this.classes.scrollDown)) {
        this.container.classList.remove(this.classes.scrollDown);
        this.container.classList.add(this.classes.scrollUp);
        if (this.transparentHeader && this.innerWidth > 1279) {
          var _this$domNodes$header11, _this$domNodes$header12, _this$domNodes$header13;
          (_this$domNodes$header11 = this.domNodes.headerWrapper) === null || _this$domNodes$header11 === void 0 ? void 0 : (_this$domNodes$header12 = _this$domNodes$header11.classList) === null || _this$domNodes$header12 === void 0 ? void 0 : (_this$domNodes$header13 = _this$domNodes$header12.remove) === null || _this$domNodes$header13 === void 0 ? void 0 : _this$domNodes$header13.call(_this$domNodes$header12, 'transparent-on-top');
        }
      }
      lastScroll = currentScroll;
    });
  },
  onUnload: function () {
    this.siteNav.destroy();
  }
});
load('header');
})();

/******/ })()
;