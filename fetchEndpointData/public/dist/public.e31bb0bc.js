// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"library/dom.js":[function(require,module,exports) {
// ************ helper functions *******************// 
module.exports = {
  addClasses: function addClasses(el, args) {
    if (args) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          el.classList.add(item);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  },
  // ************ Library **************** //
  //*********** Creating and Appending Elements to the DOM  *******/
  create: function create() {
    for (var _len = arguments.length, items = new Array(_len), _key = 0; _key < _len; _key++) {
      items[_key] = arguments[_key];
    }

    if (items.length === 1) {
      var el = document.createElement(items[0]);
      return el;
    } else if (items.length === 2) {
      var _el = document.createElement(items[0]);

      _el.textContent = items[1];
      return _el;
    } else if (items.length >= 3) {
      var _el2 = document.createElement(items[0]);

      if (items[1] !== '') {
        _el2.textContent = items[1];
      }

      var _classes = items.slice(2);

      this.addClasses(_el2, _classes);
      return _el2;
    }
  },
  append: function append() {
    for (var _len2 = arguments.length, items = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      items[_key2] = arguments[_key2];
    }

    if (items.length === 2 && typeof items[0] !== 'string') {
      var el = items[0];
      var _elAppendingTo = items[1];
      document.querySelector(_elAppendingTo).append(el);
    } else if (items.length === 2) {
      var _el3 = document.createElement(items[0]);

      var _elAppendingTo2 = items[1];
      document.querySelector(_elAppendingTo2).append(_el3);
    } else if (items.length >= 3) {
      if (items[0] === 'div' || items[0] === 'section' || items[0] === 'article' || items[0] === 'header' || items[0] === 'main' || items[0] === 'footer' || items[0] === 'nav' || items[0] === 'aside') {
        var _el4 = document.createElement(items[0]);

        var _elAppendingTo3 = items[1];

        var _classes2 = items.slice(2);

        this.addClasses(_el4, _classes2);
        document.querySelector(_elAppendingTo3).append(_el4);
        return _el4;
      } else {
        var _el5 = document.createElement(items[0]);

        var content = items[1];
        var _elAppendingTo4 = items[2];

        var _classes3 = items.slice(3);

        _el5.textContent = content;
        this.addClasses(_el5, _classes3);
        document.querySelector(_elAppendingTo4).append(_el5);
        return _el5;
      }
    }
  },
  // elementType, content, destination, elementAppendingTo, ...classes
  insert: function insert() {
    for (var _len3 = arguments.length, items = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      items[_key3] = arguments[_key3];
    }

    if (typeof items[0] !== 'string' && items.length === 3) {
      elementType = items[0];
      destination = items[1];
      elAppendingTo = items[2];

      switch (destination) {
        case 'before':
          document.querySelector(elAppendingTo).before(elementType);
          break;

        case 'after':
          document.querySelector(elAppendingTo).after(elementType);
          break;

        default:
          console.log('Error: use "before" or "after" as destination');
      }
    } else if (typeof items[0] !== 'string' && items.length > 3) {
      elementType = items[0];
      destination = items[1];
      elAppendingTo = items[2];
      classes = items.slice(3);
      this.addClasses(elementType, classes);

      switch (destination) {
        case 'before':
          document.querySelector(elAppendingTo).before(elementType);
          break;

        case 'after':
          document.querySelector(elAppendingTo).after(elementType);
          break;

        default:
          console.log('Error: use "before" or "after" as destination');
      }
    } else if (items.length === 3) {
      var el = document.createElement(items[0]);
      var _destination = items[1];
      var _elAppendingTo5 = items[2];

      switch (_destination) {
        case 'before':
          document.querySelector(_elAppendingTo5).before(el);
          break;

        case 'after':
          document.querySelector(_elAppendingTo5).after(el);
          break;

        default:
          console.log('Error: use "before" or "after" as destination');
      }
    } else {
      var _el6 = document.createElement(items[0]);

      _el6.textContent = items[1];

      var _classes4 = items.slice(4);

      this.addClasses(_el6, _classes4);

      switch (items[2]) {
        case 'before':
          document.querySelector(items[3]).before(_el6);
          return _el6;

        case 'after':
          document.querySelector(items[3]).after(_el6);
          return _el6;

        default:
          console.log('Error: use "before" or "after" as destination');
      }
    }
  },
  center: function center() {
    for (var _len4 = arguments.length, elements = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      elements[_key4] = arguments[_key4];
    }

    for (var _i = 0, _elements = elements; _i < _elements.length; _i++) {
      var item = _elements[_i];
      item.style.textAlign = "center";
    }
  },
  color: function color() {
    for (var _len5 = arguments.length, elements = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      elements[_key5] = arguments[_key5];
    }

    for (var _i2 = 0, _elements2 = elements; _i2 < _elements2.length; _i2++) {
      var item = _elements2[_i2];
      var color = elements[elements.length - 1];
      if (typeof item === 'string') break;
      item.style.color = color;
    }
  },
  background: function background() {
    for (var _len6 = arguments.length, elements = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      elements[_key6] = arguments[_key6];
    }

    for (var _i3 = 0, _elements3 = elements; _i3 < _elements3.length; _i3++) {
      var item = _elements3[_i3];
      var background = elements[elements.length - 1];
      if (typeof item === 'string') break;
      item.style.background = background;
    }
  },
  boxIt: function boxIt() {
    for (var _len7 = arguments.length, elements = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
      elements[_key7] = arguments[_key7];
    }

    if (typeof elements[elements.length - 1] === 'string') {
      var color = elements[elements.length - 1];

      for (var _i4 = 0, _elements4 = elements; _i4 < _elements4.length; _i4++) {
        var item = _elements4[_i4];
        if (typeof item === 'string') break;
        item.style.border = "2px solid ".concat(color);
        item.style.boxShadow = "2px 2px 2px gray";
        console.log(item);
      }
    } else {
      var _color = 'black';

      for (var _i5 = 0, _elements5 = elements; _i5 < _elements5.length; _i5++) {
        var _item = _elements5[_i5];
        if (typeof _item === 'string') break;
        _item.style.border = "2px solid ".concat(_color);
        _item.style.boxShadow = "2px 2px 2px gray";
        console.log(_item);
      }
    }
  },
  img: function img() {
    var source = arguments.length <= 0 ? undefined : arguments[0];
    var alt = arguments.length <= 1 ? undefined : arguments[1];
    var width = arguments.length <= 2 ? undefined : arguments[2];
    var height = arguments.length <= 3 ? undefined : arguments[3];
    var theImage = document.createElement('img');
    theImage.setAttribute('src', source);
    theImage.setAttribute('alt', alt);
    theImage.setAttribute('width', width);
    theImage.setAttribute('height', height);
    return theImage;
  },
  smoothEdges: function smoothEdges() {
    for (var _len8 = arguments.length, elements = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
      elements[_key8] = arguments[_key8];
    }

    for (var _i6 = 0, _elements6 = elements; _i6 < _elements6.length; _i6++) {
      var item = _elements6[_i6];
      item.style.borderRadius = "5px";
    }
  },
  circle: function circle() {
    for (var _len9 = arguments.length, elements = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
      elements[_key9] = arguments[_key9];
    }

    for (var _i7 = 0, _elements7 = elements; _i7 < _elements7.length; _i7++) {
      var item = _elements7[_i7];
      item.style.borderRadius = '50%';
    }
  },
  waveEdges: function waveEdges() {
    for (var _len10 = arguments.length, elements = new Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
      elements[_key10] = arguments[_key10];
    }

    for (var _i8 = 0, _elements8 = elements; _i8 < _elements8.length; _i8++) {
      var item = _elements8[_i8];
      item.style.borderRadius = "20% 0 20% 0";
    }
  },
  underline: function underline() {
    var color;

    for (var _len11 = arguments.length, elements = new Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
      elements[_key11] = arguments[_key11];
    }

    if (typeof elements[elements.length - 1] === 'string') {
      color = elements[elements.length - 1];
    }

    for (var _i9 = 0, _elements9 = elements; _i9 < _elements9.length; _i9++) {
      var item = _elements9[_i9];
      if (typeof item === 'string') break;
      item.style.borderBottom = "1px solid ".concat(color);
    }
  },
  appendAll: function appendAll() {
    for (var _len12 = arguments.length, items = new Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
      items[_key12] = arguments[_key12];
    }

    var elToAppendTo = items.splice(-1);

    for (var _i10 = 0, _items = items; _i10 < _items.length; _i10++) {
      var item = _items[_i10];
      append(item, elToAppendTo);
    }
  },
  gridify: function gridify(container) {
    var numOfColumns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    container.style.display = 'grid';
    var auto = 'auto ';
    var totalColumns = auto.repeat(numOfColumns);
    totalColumns.trimRight();
    container.style.gridTemplateColumns = totalColumns;
    container.style.gridGap = "10px";
    container.style.justifyItems = 'center';
  }
};
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _dom = _interopRequireDefault(require("./library/dom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// s.append('h2', 'hi', 'body')
fetch('http://localhost:5000/api/people').then(function (res) {
  return res.json();
}).then(function (people) {
  people.forEach(function (person) {
    _dom.default.append('h2', person.name, 'body', 'name');

    document.querySelector('.name').classList.add('name');
  });
});
},{"./library/dom":"library/dom.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51895" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/public.e31bb0bc.js.map