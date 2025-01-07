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
// EXTERNAL MODULE: ./src/js/utilities/events.js
var events = __webpack_require__(8971);
;// CONCATENATED MODULE: ./src/js/utilities/accordion.js


class Accordion {
  constructor(container) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.defaultOptions;
    _defineProperty(this, "defaultOptions", {
      presetContentHeight: false,
      duration: 300,
      callback: () => {}
    });
    _defineProperty(this, "selectors", {
      items: ['.sf__accordion-item'],
      buttons: ['.sf__accordion-button'],
      contents: ['.sf__accordion-content']
    });
    _defineProperty(this, "openClass", 'open');
    _defineProperty(this, "initClass", 'acc-initialized');
    _defineProperty(this, "removeEvents", null);
    _defineProperty(this, "destroy", () => {
      this.removeEvents();
      window.removeEventListener("resize", this.debouncedSetContentHeight);
    });
    _defineProperty(this, "setContentOpacity", () => {
      this.domNodes.contents.forEach(cont => cont.style.opacity = 1);
    });
    _defineProperty(this, "setItemOverflowState", () => {
      var _this$domNodes, _this$domNodes$items;
      (_this$domNodes = this.domNodes) === null || _this$domNodes === void 0 ? void 0 : (_this$domNodes$items = _this$domNodes.items) === null || _this$domNodes$items === void 0 ? void 0 : _this$domNodes$items.forEach((item, index) => {
        var _this$domNodes2, _this$domNodes2$conte, _item$classList, _item$classList$conta, _contents$classList, _contents$classList$m;
        let contents = (_this$domNodes2 = this.domNodes) === null || _this$domNodes2 === void 0 ? void 0 : (_this$domNodes2$conte = _this$domNodes2.contents) === null || _this$domNodes2$conte === void 0 ? void 0 : _this$domNodes2$conte[index];
        const method = item !== null && item !== void 0 && (_item$classList = item.classList) !== null && _item$classList !== void 0 && (_item$classList$conta = _item$classList.contains) !== null && _item$classList$conta !== void 0 && _item$classList$conta.call(_item$classList, this.openClass) ? 'remove' : 'add';
        contents === null || contents === void 0 ? void 0 : (_contents$classList = contents.classList) === null || _contents$classList === void 0 ? void 0 : (_contents$classList$m = _contents$classList[method]) === null || _contents$classList$m === void 0 ? void 0 : _contents$classList$m.call(_contents$classList, 'overflow-hidden');
      });
    });
    _defineProperty(this, "setContentHeight", () => {
      this.domNodes = queryDomNodes(this.selectors, this.container);
      const {
        items,
        contents
      } = this.domNodes;
      items.forEach((item, index) => {
        var _contents$index2, _contents$index2$clas;
        const content = contents === null || contents === void 0 ? void 0 : contents[index];
        let allImageInContent = content.querySelectorAll('img');
        if (item !== null && item !== void 0 && item.classList.contains(this.openClass)) {
          var _item$style, _contents$index, _item$style2;
          item === null || item === void 0 ? void 0 : (_item$style = item.style) === null || _item$style === void 0 ? void 0 : _item$style.setProperty('--content-max-height', `auto`);
          const maxHeight = contents === null || contents === void 0 ? void 0 : (_contents$index = contents[index]) === null || _contents$index === void 0 ? void 0 : _contents$index.scrollHeight;
          item === null || item === void 0 ? void 0 : (_item$style2 = item.style) === null || _item$style2 === void 0 ? void 0 : _item$style2.setProperty('--content-max-height', `${maxHeight}px`);
          if (allImageInContent.length > 0) {
            allImageInContent.forEach(img => {
              img.setAttribute('loading', 'lazy');
              img.setAttribute('width', img.width);
              img.setAttribute('height', img.height);
              img.setAttribute('src', `${img.src}&width=${img.width + 100}`);
            });
          }
        } else {
          var _item$style3;
          item === null || item === void 0 ? void 0 : (_item$style3 = item.style) === null || _item$style3 === void 0 ? void 0 : _item$style3.setProperty('--content-max-height', 0);
        }
        contents === null || contents === void 0 ? void 0 : (_contents$index2 = contents[index]) === null || _contents$index2 === void 0 ? void 0 : (_contents$index2$clas = _contents$index2.classList) === null || _contents$index2$clas === void 0 ? void 0 : _contents$index2$clas.add('max-height-set');
      });
      this.setItemOverflowState();
      this.setContentOpacity();
    });
    _defineProperty(this, "toggle", index => {
      var _this$domNodes3, _this$domNodes3$items, _this$domNodes4, _this$domNodes4$conte, _accItem$classList, _accItem$classList2, _this$domNodes5, _this$domNodes5$conte, _this$domNodes5$conte2;
      const accItem = (_this$domNodes3 = this.domNodes) === null || _this$domNodes3 === void 0 ? void 0 : (_this$domNodes3$items = _this$domNodes3.items) === null || _this$domNodes3$items === void 0 ? void 0 : _this$domNodes3$items[index];
      const accContent = (_this$domNodes4 = this.domNodes) === null || _this$domNodes4 === void 0 ? void 0 : (_this$domNodes4$conte = _this$domNodes4.contents) === null || _this$domNodes4$conte === void 0 ? void 0 : _this$domNodes4$conte[index];
      const isOpen = accItem === null || accItem === void 0 ? void 0 : (_accItem$classList = accItem.classList) === null || _accItem$classList === void 0 ? void 0 : _accItem$classList.contains(this.openClass);
      let allImageInContent = accContent.querySelectorAll('img');
      accItem === null || accItem === void 0 ? void 0 : (_accItem$classList2 = accItem.classList) === null || _accItem$classList2 === void 0 ? void 0 : _accItem$classList2.toggle(this.openClass);
      const maxHeight = isOpen ? 0 : (_this$domNodes5 = this.domNodes) === null || _this$domNodes5 === void 0 ? void 0 : (_this$domNodes5$conte = _this$domNodes5.contents) === null || _this$domNodes5$conte === void 0 ? void 0 : (_this$domNodes5$conte2 = _this$domNodes5$conte[index]) === null || _this$domNodes5$conte2 === void 0 ? void 0 : _this$domNodes5$conte2.scrollHeight;
      accItem === null || accItem === void 0 ? void 0 : accItem.style.setProperty('--content-max-height', `${maxHeight}px`);
      if (allImageInContent.length > 0) {
        allImageInContent.forEach(img => {
          img.setAttribute('loading', 'lazy');
          img.setAttribute('width', img.width);
          img.setAttribute('height', img.height);
          img.setAttribute('src', `${img.src}&width=${img.width + 100}`);
        });
      }
      if (isOpen) {
        var _accContent$classList;
        accContent === null || accContent === void 0 ? void 0 : (_accContent$classList = accContent.classList) === null || _accContent$classList === void 0 ? void 0 : _accContent$classList.add('overflow-hidden');
      } else {
        setTimeout(() => {
          var _accContent$classList2;
          accContent === null || accContent === void 0 ? void 0 : (_accContent$classList2 = accContent.classList) === null || _accContent$classList2 === void 0 ? void 0 : _accContent$classList2.remove('overflow-hidden');
        }, 350);
      }
    });
    if (!container || container.classList.contains(this.initClass)) return;
    this.container = container;
    this.domNodes = queryDomNodes(this.selectors, this.container);
    this.options = Object.assign({}, this.defaultOptions, options);
    this.debouncedSetContentHeight = debounce(this.setContentHeight.bind(this), 300);
    this.init();
  }
  init() {
    var _this$container, _this$container$style;
    (_this$container = this.container) === null || _this$container === void 0 ? void 0 : (_this$container$style = _this$container.style) === null || _this$container$style === void 0 ? void 0 : _this$container$style.setProperty('--duration', ` ${this.options.duration}ms`);
    this.removeEvents = (0,events/* addEventDelegate */.X)({
      context: this.container,
      selector: this.selectors.buttons[0],
      handler: (e, btn) => {
        btn.classList.add('pointer-events-none');
        const index = this.domNodes.buttons.indexOf(btn);
        this.toggle(index);
        setTimeout(() => {
          btn.classList.remove('pointer-events-none');
        }, 350);
      }
    });
    if (this.options.presetContentHeight) {
      window.requestAnimationFrame(this.setContentHeight);
    } else {
      this.setItemOverflowState();
      this.setContentOpacity();
    }
    window.addEventListener("resize", this.debouncedSetContentHeight);
    if (typeof this.options.callback === "function") this.options.callback();
    this.container.classList.add(this.initClass);
  }
}
;// CONCATENATED MODULE: ./src/js/sections/tabs.js
/* provided dependency */ var MinimogTheme = __webpack_require__(4558)["LE"];


register('tabs', {
  onLoad: function () {
    this.tabs = new MinimogTheme.Tabs(this.container);
    this.acc = new Accordion(this.container, {
      presetContentHeight: true
    });
  },
  onBlockSelect: function (ev) {
    var _tabHeader$dataset, _this$tabs;
    const tabHeader = ev === null || ev === void 0 ? void 0 : ev.target;
    const index = Number(tabHeader === null || tabHeader === void 0 ? void 0 : (_tabHeader$dataset = tabHeader.dataset) === null || _tabHeader$dataset === void 0 ? void 0 : _tabHeader$dataset.index) || 0;
    if (this.acc) {
      var _accItem$classList, _accItem$classList$co;
      const accItem = this.acc.domNodes.items[index];
      const isAccOpen = accItem === null || accItem === void 0 ? void 0 : (_accItem$classList = accItem.classList) === null || _accItem$classList === void 0 ? void 0 : (_accItem$classList$co = _accItem$classList.contains) === null || _accItem$classList$co === void 0 ? void 0 : _accItem$classList$co.call(_accItem$classList, 'open');
      if (!isAccOpen) {
        var _this$acc;
        this === null || this === void 0 ? void 0 : (_this$acc = this.acc) === null || _this$acc === void 0 ? void 0 : _this$acc.toggle(index);
      }
    }
    (_this$tabs = this.tabs) === null || _this$tabs === void 0 ? void 0 : _this$tabs.setActiveTab(index);
  },
  onBlockDeselect: function (ev) {
    var _tabHeader$dataset2;
    const tabHeader = ev === null || ev === void 0 ? void 0 : ev.target;
    const index = Number(tabHeader === null || tabHeader === void 0 ? void 0 : (_tabHeader$dataset2 = tabHeader.dataset) === null || _tabHeader$dataset2 === void 0 ? void 0 : _tabHeader$dataset2.index) || 0;
    if (this.acc) {
      var _accItem$classList2, _accItem$classList2$c;
      const accItem = this.acc.domNodes.items[index];
      const isAccOpen = accItem === null || accItem === void 0 ? void 0 : (_accItem$classList2 = accItem.classList) === null || _accItem$classList2 === void 0 ? void 0 : (_accItem$classList2$c = _accItem$classList2.contains) === null || _accItem$classList2$c === void 0 ? void 0 : _accItem$classList2$c.call(_accItem$classList2, 'open');
      if (isAccOpen) {
        var _this$acc2;
        this === null || this === void 0 ? void 0 : (_this$acc2 = this.acc) === null || _this$acc2 === void 0 ? void 0 : _this$acc2.toggle(index);
      }
    }
  }
});
load('tabs');
})();

/******/ })()
;