(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://zen-heisenberg-1912da.netlify.app/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Theme = {
  color: {
    black: "#000000",
    white: "#FFFFFF",
    grey200: "#EEEEEE",
    grey400: "#BDBDBD",
    grey700: "#616161",
    grey900: "#212121",
    goldDark: "#302814"
  },
  font: {
    xxlarge: "2.5rem",
    // 16px * 2.5 = 40px
    xlarge: "2rem",
    // 16px * 2 = 24px
    large: "1.25rem",
    // 16px * 1.25 = 20px
    medium: "1rem",
    // 16px * 1 = 16px
    small: "0.75rem",
    // 16px * 0.75 = 12px
    tiny: "0.625rem" // 16px * 0.625 = 10px

  },
  weight: {
    bold: 700,
    medium: 600,
    normal: 400
  },
  letterSpacing: {
    mediumWide: "1.5px"
  },
  space: {
    xlarge: "24rem",
    large: "12rem",
    medium: "6rem",
    small: "4rem",
    tiny: "2rem",
    micro: "1rem",
    nano: "0.5rem"
  },
  mediaQuery: {
    mobile: "@media(max-width: 960px)",
    desktop: "@media(min-width: 961px)"
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Theme);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return PageMainTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElementHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ElementSubHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SectionHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return NormalText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NormalLi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return NormalOl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return NormalUl; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;


 // Title

var PageMainTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    font-size: ", ";\n    font-weight: ", ";\n    color: ", ";\n    margin-bottom: 1rem;\n"])), theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].font.xlarge, theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].weight.bold, theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].color.grey400);
var ElementHeader = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    font-size: ", ";\n    font-weight: ", ";\n    color: ", ";\n"])), theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].font.medium, theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].weight.bold, theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].color.grey400);
var ElementSubHeader = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject3 || (_templateObject3 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    font-size: ", ";\n    font-weight: ", ";\n    color: ", ";\n"])), theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].font.normal, theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].weight.normal, theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].color.grey400);
var SectionHeader = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject4 || (_templateObject4 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    font-family: 'Hiragino Mincho Pro';\n    font-size: ", ";\n    font-weight: ", ";\n    letter-spacing: 0.15rem;\n"])), theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].font.xlarge, theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].weight.medium); // Body Text

var NormalText = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject5 || (_templateObject5 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    font-size: ", ";\n    color: ", ";\n"])), theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].font.normal, theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].color.grey400);
var NormalLi = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject6 || (_templateObject6 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    font-size: ", ";\n    color: ", ";\n    padding-bottom: 0.4rem;\n"])), theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].font.normal, theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].color.grey400);
var NormalOl = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject7 || (_templateObject7 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    font-size: ", ";\n    color: ", ";\n"])), theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].font.normal, theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].color.grey400);
var NormalUl = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject8 || (_templateObject8 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    font-size: ", ";\n    color: ", ";\n"])), theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].font.normal, theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].color.grey400);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullPageSectionStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return InnerSectionStyle; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);


var _templateObject, _templateObject2;



var FullPageSectionStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    background-color: ", ";\n    padding: ", " ", " ", " ", ";\n"])), function (props) {
  return props.backgroundColor || "".concat(theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].color.grey900);
}, theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].space.large, theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].space.tiny, theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].space.medium, theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].space.tiny);
var InnerSectionStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    padding: ", " ", ";\n"])), theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].space.small, theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].space.tiny);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NormalWrapperStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NarrowWrapperStyle; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


var _templateObject, _templateObject2;


var NormalWrapperStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    display: flex;\n    flex-direction: column;\n    align-items: ", ";\n    margin: 0 auto;\n    max-width: 800px;\n"])), function (props) {
  return props.alignItems || "center";
});
var NarrowWrapperStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    display: flex;\n    flex-direction: column;\n    align-items: ", ";\n    margin: 0 auto;\n    max-width: 600px;\n"])), function (props) {
  return props.alignItems || "start";
});


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["useLocation"]; });



/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);





var Meta = function Meta(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_static__WEBPACK_IMPORTED_MODULE_1__["Head"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, props.title ? "".concat(props.title, " - ") : "", "RelyonTrip"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    itemProp: "name",
    content: props.title ? props.title : "RelyonTrip"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    itemProp: "description",
    content: props.description ? props.description : "株式会社RelyonTrip(リリオントリップ)のコーポレートサイトです。"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:site",
    content: "@akihito_sassy"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:title",
    content: props.title ? props.title : "株式会社RelyonTrip"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:creator",
    content: "@akihito_sassy"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:description",
    content: props.description ? props.description : "株式会社RelyonTrip(リリオントリップ)のコーポレートサイトです。"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "twitter:image",
    content: props.image_url ? props.image_url : "https://relyontrip.com/img/ogp.jpg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: props.title ? props.title : "RelyonTrip"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:description",
    content: props.description ? props.description : "株式会社RelyonTrip(リリオントリップ)のコーポレートサイトです。"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:url",
    content: props.url ? props.url : "https://relyontrip.com"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image",
    content: props.image_url ? props.image_url : "https://relyontrip.com/img/ogp.jpg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image:height",
    content: "630"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Meta);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(26);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(52);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(54);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(32);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _context = __webpack_require__(31);

var _context2 = _interopRequireDefault(_context);

var _utils = __webpack_require__(27);

var _helpers = __webpack_require__(55);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props).then(function (mod) {
          var state = {
            mod: mod,
            props: props
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (this.context && this.context.report) {
          this.context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod
        }, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          props: props
        };
      }
    }], [{
      key: 'preload',
      value: function preload(props) {
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-enable react/sort-comp */

      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextType = _context2["default"], _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(51)(module)))

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NormalContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SubContainer; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


var _templateObject, _templateObject2;


var NormalContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    padding: 2rem 0;\n"])));
var SubContainer = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    padding-top: 1.2rem;\n"])));


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(27);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(53)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppleButton; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


var _templateObject;



var AppleButton = function AppleButton(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StoreButton, {
    width: props.width,
    href: props.href,
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/img/apple-badge.png",
    alt: "apple store\u304B\u3089\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"
  }));
};
var StoreButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a.attrs(function (props) {
  return {
    href: props.href,
    width: props.width || "124px",
    marginRight: props.marginRight || "1rem"
  };
})(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    display: block;\n    width: ", ";\n    height: auto;\n    margin-right: ", ";\n"])), function (props) {
  return props.width;
}, function (props) {
  return props.marginRight;
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GooglePlayButton; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


var _templateObject;



var GooglePlayButton = function GooglePlayButton(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StoreButton, {
    width: props.width,
    href: props.href,
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/img/google-play-badge.png",
    alt: "google play store\u304B\u3089\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9"
  }));
};
var StoreButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a.attrs(function (props) {
  return {
    href: props.href,
    width: props.width || "153px"
  };
})(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    display: block;\n    width: ", ";\n    height: auto;\n"])), function (props) {
  return props.width;
});

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return newsData; });
var newsData = [{
  date: "2021/08/31",
  title: "【スポット掲載数32,000件突破】スポット直感型アプリ『Sassy』が、札幌市・仙台市・金沢市・名古屋市における観光コンテンツの作成・配信を開始",
  category: "プレスリリース",
  url: "https://prtimes.jp/main/html/rd/p/000000018.000051474.html",
  target: "all"
}, {
  date: "2021/08/26",
  title: "テレビ東京「田村淳が池袋 Innovation Council」に当社代表の西村が出演しました",
  category: "トピック",
  url: "https://twitter.com/tx_ikebukuro?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
  target: "company"
}, {
  date: "2021/07/31",
  title: "【自治体との取組は３ヶ月連続！】スポット直感型アプリ『Sassy』が、三重県、富山県、山梨県、長野県、岐阜県および群馬県における観光コンテンツの作成・配信を開始",
  category: "プレスリリース",
  url: "https://prtimes.jp/main/html/rd/p/000000017.000051474.html",
  target: "all"
}, {
  date: "2021/07/29",
  title: "テレビ東京「田村淳が池袋 Innovation Council」に当社代表の西村が出演しました",
  category: "トピック",
  url: "https://twitter.com/tx_ikebukuro?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
  target: "company"
}, {
  date: "2021/07/20",
  title: "読売新聞朝刊（全国紙）にて、近場で休日を楽しみたいという要望に応えるサービスとしてSassyが紹介されました。",
  category: "トピック",
  url: "https://otekomachi.yomiuri.co.jp/lifestyle/20210721-OYTET50000/",
  target: "all"
}, {
  date: "2021/06/30",
  title: "【観光/おでかけ】スポット直感型アプリ『Sassy』が青森県、岩手県および久慈市と連携！地域コンテンツの作成・配信を開始",
  category: "プレスリリース",
  url: "https://prtimes.jp/main/html/rd/p/000000015.000051474.html",
  target: "all"
}, {
  date: "2021/05/31",
  title: "【観光/おでかけ】スポット直感型アプリ『Sassy』が、山形県と連携！地域コンテンツの作成、アプリ配信を開始。",
  category: "プレスリリース",
  url: "https://prtimes.jp/main/html/rd/p/000000014.000051474.html",
  target: "all"
}, {
  date: "2021/03/16",
  title: "「Okinawa Startup Program」のデモデイが開催され、代表の西村が発表いたしました",
  category: "トピック",
  url: "https://thebridge.jp/2021/03/okinawa-startup-program-2020-2021-demoday",
  target: "all"
}, {
  date: "2020/12/17",
  title: "【より便利に】直感型おでかけアプリ『Sassy』新機能のお知らせ & 『鬼滅の刃』聖地巡礼スポット特集が大好評！",
  category: "プレスリリース",
  url: "https://prtimes.jp/main/html/rd/p/000000013.000051474.html",
  target: "all"
}, {
  date: "2020/12/01",
  title: "沖縄を代表する8社が主催する「OKINAWA Startup Program2020-2021」に採択されました",
  category: "トピック",
  url: "https://www.okinawatimes.co.jp/articles/-/671543",
  target: "company"
}, {
  date: "2020/12/01",
  title: "「X-Tech Innovation2020」の九州地区最終選考会に出場し、協賛企業賞を獲得しました",
  category: "トピック",
  url: "https://www.ibank.co.jp/xtech2020/",
  target: "company"
}, {
  date: "2020/12/01",
  title: "当社と代表の西村が「STARTUP TIMES」の取材を受けました",
  category: "トピック",
  url: "https://startuptimes.jp/2020/12/01/213270/",
  target: "company"
}, {
  date: "2020/11/08",
  title: "【20代に人気】直感型おでかけアプリ「Sassy」が、マイクロツーリズムWebメディア「Sassy-Trip」をスタート！",
  category: "プレスリリース",
  url: "https://prtimes.jp/main/html/rd/p/000000012.000051474.html",
  target: "all"
}, {
  date: "2020/10/20",
  title: "【これが観光の未来形】おでかけアプリSassyが大リニューアル！おでかけDJセレクト機能を新リリース！",
  category: "プレスリリース",
  url: "https://prtimes.jp/main/html/rd/p/000000011.000051474.html",
  target: "all"
}, {
  date: "2020/09/30",
  title: "【東京マイクロツーリズム】直感型おでかけアプリSassyに、友だち共有機能が追加！",
  category: "プレスリリース",
  url: "https://prtimes.jp/main/html/rd/p/000000010.000051474.html",
  target: "all"
}, {
  date: "2020/09/17",
  title: "J-WAVEラジオ「TOKYO MORNING RADIO（ナビゲーター：別所哲也さん）」の『MORNING INSIGHT』でSassyが紹介されました",
  category: "トピック",
  url: "https://news.j-wave.co.jp/2020/09/post-6733.html",
  target: "all"
}, {
  date: "2020/09",
  title: "東京都主催の「TCIC Pitch Campus2020アクセラレーションプログラム」に採択されました",
  category: "トピック",
  url: "https://www.tcic.jp/news/%e3%80%90%e5%8f%97%e4%bb%98%e9%96%8b%e5%a7%8b%e3%80%9107-31%e5%bf%9c%e5%8b%9f%e7%b7%a0%e3%82%81%e5%88%87%e3%82%8a-%e3%82%b3%e3%83%b3%e3%83%86%e3%83%b3%e3%83%84%e3%81%ae%e3%83%94%e3%83%83%e3%83%81/",
  target: "company"
}, {
  date: "2020/08",
  title: "日経XTechにて、NTTドコモベンチャーズ「/HuB」の記事で当社が紹介されました",
  category: "トピック",
  url: "https://special.nikkeibp.co.jp/atclh/NXT/20/nttdocomov0729_01/?fbclid=IwAR1fjYEGxlXcDBUej69PyjRTw5Xfg5tAKimPUxL2bt7eCYPsFrKkFMDYBNM",
  target: "company"
}, {
  date: "2020/07/26",
  title: "J-WAVEラジオ「CHINTAI COLORS OF WONDER」の『新しい旅を見つけよう！』のテーマでSassyが紹介されました",
  category: "トピック",
  url: "https://www.j-wave.co.jp/original/colorswonder/entry/200719.html",
  target: "all"
}, {
  date: "2020/06/30",
  title: "【マイクロツーリズムの新定番】１分でお出かけプランが完成！お出かけ・旅行計画アプリ「Sassy」のプラン機能がリニューアル",
  category: "プレスリリース",
  url: "https://prtimes.jp/main/html/rd/p/000000008.000051474.html",
  target: "all"
}, {
  date: "2020/06",
  title: "東京都主催の「ASACスタートアップアクセラレーションプログラム」に採択されました",
  category: "トピック",
  url: "https://acceleration.tokyo.jp/detail.php?keyno=329",
  target: "company"
}, {
  date: "2020/06",
  title: "株式会社ハンズオン主催の「HandsOn（スタートアップ支援）」に採択されました",
  category: "トピック",
  url: "https://prtimes.jp/main/html/rd/p/000000001.000054887.html",
  target: "company"
}, {
  date: "2020/06",
  title: "株式会社NTTドコモ・ベンチャーズ主催の「STARTUP STUDIO（ベンチャー支援）」に採択されました",
  category: "トピック",
  url: "https://www.nttdocomo-v.com/",
  target: "company"
}, {
  date: "2020/05/31",
  title: "【テイクアウトの新しい形】飲食店応援プロジェクト「テイクアウトSassy」の事前登録スタート！１分で飲食店登録完了＆完全無料！",
  category: "プレスリリース",
  url: "https://prtimes.jp/main/html/rd/p/000000007.000051474.html",
  target: "all"
}, {
  date: "2020/04/25",
  title: "【#エアお出かけ】新感覚のお出かけ/旅行計画アプリ「Sassy （サッシー）」のAndroid版がリリース！（iOS版リニューアルも同時実施！）",
  category: "プレスリリース",
  url: "https://prtimes.jp/main/html/rd/p/000000004.000051474.html",
  target: "all"
}, {
  date: "2020/03/30",
  title: "【#エアお出かけ】Sassyユーザーの「行きたい場所ランキングin東京」発表（2020年3月）",
  category: "プレスリリース",
  url: "https://prtimes.jp/main/html/rd/p/000000002.000051474.html",
  target: "all"
}, {
  date: "2020/02/22",
  title: "【新感覚】お出かけ/旅行の計画アプリ「Sassy （サッシー）」のiOS版が待望のリリース！",
  category: "プレスリリース",
  url: "https://prtimes.jp/main/html/rd/p/000000001.000051474.html",
  target: "all"
}];

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsItem; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);


var _templateObject, _templateObject2, _templateObject3, _templateObject4;




var NewsItem = function NewsItem(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ItemWrapper, {
    key: props.key
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Item, {
    href: props.body.url,
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Date, null, props.body.date), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Summary, null, props.body.title)));
};
var ItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    padding: ", " 0;\n    border-bottom: solid 1px ", ";\n    width: 100%;\n"])), theme__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].space.tiny, theme__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].color.grey900);
var Item = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    display: flex;\n    flex-direction: row;\n    ", " {\n        flex-direction: column;\n    }\n"])), theme__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].mediaQuery.mobile);
var Date = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3 || (_templateObject3 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    color: ", ";\n    font-weight: ", ";\n    letter-spacing: ", ";\n    padding-right: ", ";\n    flex-basis: 20%;\n    ", " {\n        margin-bottom: ", ";\n    }\n"])), theme__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].color.grey700, theme__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].weight.normal, theme__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].letterSpacing.mediumWide, theme__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].space.tiny, theme__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].mediaQuery.mobile, theme__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].space.micro);
var Summary = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject4 || (_templateObject4 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    color: ", ";\n    font-weight: ", ";\n    letter-spacing: ", ";\n    flex-basis: 80%;\n"])), theme__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].color.grey400, theme__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].weight.normal, theme__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].letterSpacing.mediumWide);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(13);

// EXTERNAL MODULE: /Users/natsuki/workspace/00_RelyonTrip/test/CorporateSite/corporate-site/src/components/Router.js
var Router = __webpack_require__(7);

// CONCATENATED MODULE: /Users/natsuki/workspace/00_RelyonTrip/test/CorporateSite/corporate-site/src/containers/Dynamic.js

/* harmony default export */ var Dynamic = (function () {
  return /*#__PURE__*/external_react_default.a.createElement("div", null, "This is a dynamic page! It will not be statically exported, but is available at runtime");
});
// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(2);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/classCallCheck"
var classCallCheck_ = __webpack_require__(19);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/createClass"
var createClass_ = __webpack_require__(20);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/inherits"
var inherits_ = __webpack_require__(21);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/possibleConstructorReturn"
var possibleConstructorReturn_ = __webpack_require__(22);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/getPrototypeOf"
var getPrototypeOf_ = __webpack_require__(14);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(3);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: /Users/natsuki/workspace/00_RelyonTrip/test/CorporateSite/corporate-site/src/theme.js
var theme = __webpack_require__(1);

// EXTERNAL MODULE: /Users/natsuki/workspace/00_RelyonTrip/test/CorporateSite/corporate-site/src/components/atoms/Section/style.js
var style = __webpack_require__(5);

// EXTERNAL MODULE: /Users/natsuki/workspace/00_RelyonTrip/test/CorporateSite/corporate-site/src/components/atoms/Wrapper/style.js
var Wrapper_style = __webpack_require__(6);

// CONCATENATED MODULE: /Users/natsuki/workspace/00_RelyonTrip/test/CorporateSite/corporate-site/src/components/organisms/Footer.js







var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var Footer_Footer = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Footer, _React$Component);

  var _super = _createSuper(Footer);

  function Footer() {
    classCallCheck_default()(this, Footer);

    return _super.apply(this, arguments);
  }

  createClass_default()(Footer, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement(Section, null, /*#__PURE__*/external_react_default.a.createElement(Wrapper, null, /*#__PURE__*/external_react_default.a.createElement(Footer_Header, null, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
        to: "/"
      }, /*#__PURE__*/external_react_default.a.createElement("img", {
        src: "/img/corporate-logo.png"
      }))), /*#__PURE__*/external_react_default.a.createElement(Contents, null, /*#__PURE__*/external_react_default.a.createElement(Block, null, /*#__PURE__*/external_react_default.a.createElement(Element, null, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
        to: "/sassy"
      }, "\u30B9\u30DD\u30C3\u30C8\u76F4\u611F\u578B\u30A2\u30D7\u30EA\u300CSassy\u300D")), /*#__PURE__*/external_react_default.a.createElement(Element, null, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
        to: "/link"
      }, "\u95A2\u9023\u30EA\u30F3\u30AF\u96C6"))), /*#__PURE__*/external_react_default.a.createElement(Block, null, /*#__PURE__*/external_react_default.a.createElement(Element, null, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
        to: "/"
      }, "RelyonTrip")), /*#__PURE__*/external_react_default.a.createElement(Element, null, /*#__PURE__*/external_react_default.a.createElement("a", {
        href: "https://docs.google.com/forms/d/e/1FAIpQLSf0hMiTOxYSTDbsYl3uevU_f9uhFxnL4-9d2uXbQPAmSNo8zQ/viewform",
        target: "_blank"
      }, "\u304A\u554F\u3044\u5408\u308F\u305B")), /*#__PURE__*/external_react_default.a.createElement(Element, null, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
        to: "/privacy-policy"
      }, "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC")), /*#__PURE__*/external_react_default.a.createElement(Element, null, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
        to: "/terms"
      }, "\u5229\u7528\u898F\u7D04")))), /*#__PURE__*/external_react_default.a.createElement(Bottom, null, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("p", null, "\xA9RelyonTrip")), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(Icon, {
        href: "https://www.instagram.com/sassy.trip/",
        target: "_blank"
      }, /*#__PURE__*/external_react_default.a.createElement("img", {
        src: "/img/icon-instagram.png"
      })), /*#__PURE__*/external_react_default.a.createElement(Icon, {
        href: "https://twitter.com/akihito_sassy",
        target: "_blank"
      }, /*#__PURE__*/external_react_default.a.createElement("img", {
        src: "/img/icon-twitter.png"
      })), /*#__PURE__*/external_react_default.a.createElement(Icon, {
        href: "https://www.facebook.com/akihito.nishimura.9",
        target: "_blank"
      }, /*#__PURE__*/external_react_default.a.createElement("img", {
        src: "/img/icon-facebook.png"
      }))))));
    }
  }]);

  return Footer;
}(external_react_default.a.Component);

/* harmony default export */ var organisms_Footer = (Footer_Footer);
var Section = external_styled_components_default.a.section(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n    ", ";\n    background-color: ", ";\n"])), style["b" /* InnerSectionStyle */], theme["a" /* default */].color.black);
var Wrapper = external_styled_components_default.a.div(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n    ", ";\n    align-items: normal;\n"])), Wrapper_style["b" /* NormalWrapperStyle */]);
var Footer_Header = external_styled_components_default.a.div(_templateObject3 || (_templateObject3 = taggedTemplateLiteral_default()(["\n    img {\n        width: 120px;\n        height: auto;\n    }\n"])));
var Contents = external_styled_components_default.a.div(_templateObject4 || (_templateObject4 = taggedTemplateLiteral_default()(["\n    display: flex;\n    padding-top: ", ";\n    padding-bottom: ", ";\n    ", " {\n        flex-direction: column;\n    }\n"])), theme["a" /* default */].space.tiny, theme["a" /* default */].space.tiny, theme["a" /* default */].mediaQuery.mobile);
var Block = external_styled_components_default.a.div(_templateObject5 || (_templateObject5 = taggedTemplateLiteral_default()(["\n    display: flex;\n    flex-direction: column;\n    width: 50%;\n    ", " {\n        width: 100%;\n    }\n"])), theme["a" /* default */].mediaQuery.mobile);
var Element = external_styled_components_default.a.div(_templateObject6 || (_templateObject6 = taggedTemplateLiteral_default()(["\n    margin-bottom: ", ";\n    a {\n        color: ", ";\n        font-size: ", ";\n        font-weight: ", ";\n    }\n"])), theme["a" /* default */].space.micro, theme["a" /* default */].color.white, theme["a" /* default */].font.medium, theme["a" /* default */].weight.normal);
var Bottom = external_styled_components_default.a.div(_templateObject7 || (_templateObject7 = taggedTemplateLiteral_default()(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    p {\n        font-size: ", ";\n        color: ", ";\n    }\n"])), theme["a" /* default */].font.medium, theme["a" /* default */].color.white);
var Icon = external_styled_components_default.a.a(_templateObject8 || (_templateObject8 = taggedTemplateLiteral_default()(["\n    margin-left: ", ";\n    img {\n        width: 32px;\n        height: 32px;\n    }\n"])), theme["a" /* default */].space.tiny);
// CONCATENATED MODULE: /Users/natsuki/workspace/00_RelyonTrip/test/CorporateSite/corporate-site/src/components/organisms/Header.js







var Header_templateObject, Header_templateObject2, Header_templateObject3;

function Header_createSuper(Derived) { var hasNativeReflectConstruct = Header_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = getPrototypeOf_default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function Header_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Header_Header = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Header, _React$Component);

  var _super = Header_createSuper(Header);

  function Header() {
    classCallCheck_default()(this, Header);

    return _super.apply(this, arguments);
  }

  createClass_default()(Header, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/external_react_default.a.createElement(Nav, null, /*#__PURE__*/external_react_default.a.createElement(NavHeader, null, /*#__PURE__*/external_react_default.a.createElement(NavLeft, null, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
        to: "/"
      }, /*#__PURE__*/external_react_default.a.createElement("img", {
        src: "/img/corporate-logo.png"
      })))));
    }
  }]);

  return Header;
}(external_react_default.a.Component);

/* harmony default export */ var organisms_Header = (Header_Header);
var Nav = external_styled_components_default.a.nav(Header_templateObject || (Header_templateObject = taggedTemplateLiteral_default()(["\n    background-color: ", ";\n    background-color: rgba(15, 15, 17, 0.72);\n    backdrop-filter: blur(10px);\n    position: fixed;\n    top: 0;\n    z-index: 10;\n    border-bottom: solid 1px ", ";\n"])), theme["a" /* default */].color.black, theme["a" /* default */].color.grey900);
var NavHeader = external_styled_components_default.a.div(Header_templateObject2 || (Header_templateObject2 = taggedTemplateLiteral_default()(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n"])));
var NavLeft = external_styled_components_default.a.div(Header_templateObject3 || (Header_templateObject3 = taggedTemplateLiteral_default()(["\n    color: white;\n    margin-left: ", ";\n    ", " {\n        margin-left: ", ";\n    }\n    a {\n        padding: ", " 0;\n    }\n    img {\n        width: 150px;\n        height: auto;\n        ", " {\n            width: 90px;\n        }\n    }\n"])), theme["a" /* default */].space.small, theme["a" /* default */].mediaQuery.mobile, theme["a" /* default */].space.tiny, theme["a" /* default */].space.micro, theme["a" /* default */].mediaQuery.mobile);
// EXTERNAL MODULE: /Users/natsuki/workspace/00_RelyonTrip/test/CorporateSite/corporate-site/src/app.css
var app = __webpack_require__(63);

// CONCATENATED MODULE: /Users/natsuki/workspace/00_RelyonTrip/test/CorporateSite/corporate-site/src/App.js






 // Any routes that start with 'dynamic' will be treated as non-static routes

Object(external_react_static_["addPrefetchExcludes"])(['dynamic']);

function App() {
  return /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Root"], null, /*#__PURE__*/external_react_default.a.createElement(organisms_Header, null), /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: /*#__PURE__*/external_react_default.a.createElement("em", null, "Loading...")
  }, /*#__PURE__*/external_react_default.a.createElement(ScrollToTop, null), /*#__PURE__*/external_react_default.a.createElement(Router["b" /* Router */], null, /*#__PURE__*/external_react_default.a.createElement(Dynamic, {
    path: "dynamic"
  }), /*#__PURE__*/external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  })))), /*#__PURE__*/external_react_default.a.createElement(organisms_Footer, null));
} // ページ遷移時に上部までスクロール


function ScrollToTop() {
  var _useLocation = Object(Router["c" /* useLocation */])(),
      pathname = _useLocation.pathname;

  Object(external_react_["useLayoutEffect"])(function () {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(26);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(16);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, modCache) {
  var isSync = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("/Users/natsuki/workspace/00_RelyonTrip/test/CorporateSite/corporate-site/node_modules/react-static/lib/browser");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var ReportContext = _react2["default"].createContext({
  report: function report() {}
});

exports["default"] = ReportContext;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Terms; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var components_atoms_Wrapper_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var components_atoms_Section_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var components_atoms_Text_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4);
/* harmony import */ var components_atoms_Container_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(12);
/* harmony import */ var meta__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(10);


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;









function Terms() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Section, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(meta__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    title: "\u63B2\u8F09\u60C5\u5831\u306E\u8457\u4F5C\u6A29\u306B\u3064\u3044\u3066",
    description: "RelyonTrip \u63B2\u8F09\u60C5\u5831\u306E\u8457\u4F5C\u6A29\u306B\u3064\u3044\u3066",
    url: "https://relyontrip.com/copyright"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, null, "\u63B2\u8F09\u60C5\u5831\u306E\u8457\u4F5C\u6A29\u306B\u3064\u3044\u3066"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "Sassy\u30A2\u30D7\u30EA\u5185\u306E\u4E00\u90E8\u30B9\u30DD\u30C3\u30C8\u60C5\u5831\u306F\u4EE5\u4E0B\u306E\u8457\u4F5C\u7269\u3092\u6539\u5909\u3057\u3066\u5229\u7528\u3057\u3066\u3044\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u5C71\u5F62\u770C\u30FB\u5929\u7AE5\u5E02\u30FB\u9577\u4E95\u5E02\u30FB\u8239\u65B9\u753A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u5CA9\u624B\u770C\u30FB\u76DB\u5CA1\u5E02\u30FB\u5965\u5DDE\u5E02\u30FB\u4E00\u95A2\u5E02"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u9752\u68EE\u770C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u7FA4\u99AC\u770C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u77F3\u5DDD\u770C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u91D1\u6CA2\u5E02"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u5BCC\u5C71\u770C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u5BCC\u5C71\u5E02"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u5C71\u68A8\u770C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u9759\u5CA1\u770C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u798F\u4E95\u770C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u540D\u53E4\u5C4B\u5E02"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u5C90\u961C\u770C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u4E09\u91CD\u770C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u9577\u91CE\u770C"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u672D\u5E4C\u5E02"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u4ED9\u53F0\u5E02")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u30AF\u30EA\u30A8\u30A4\u30C6\u30A3\u30D6\u30FB\u30B3\u30E2\u30F3\u30BA\u30FB\u30E9\u30A4\u30BB\u30F3\u30B9 \u8868\u793A 4.0 \u56FD\u969B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\uFF08", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://creativecommons.org/licenses/by/4.0/deed.ja",
    target: "_blank"
  }, "https://creativecommons.org/licenses/by/4.0/deed.ja"), "\uFF09"))));
}
var Section = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.section(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n"])), components_atoms_Section_style__WEBPACK_IMPORTED_MODULE_5__[/* FullPageSectionStyle */ "a"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n"])), components_atoms_Wrapper_style__WEBPACK_IMPORTED_MODULE_4__[/* NarrowWrapperStyle */ "a"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3 || (_templateObject3 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n"])), components_atoms_Container_style__WEBPACK_IMPORTED_MODULE_7__[/* NormalContainer */ "a"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject4 || (_templateObject4 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n    width: 100%;\n    text-align: center;\n"])), components_atoms_Text_style__WEBPACK_IMPORTED_MODULE_6__[/* PageMainTitle */ "g"]);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p(_templateObject5 || (_templateObject5 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n    margin-top: 0;\n    margin-bottom: ", ";\n"])), components_atoms_Text_style__WEBPACK_IMPORTED_MODULE_6__[/* NormalText */ "e"], theme__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].space.nano);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Terms; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1);
/* harmony import */ var components_atoms_Wrapper_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var components_atoms_Section_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var components_atoms_Text_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4);
/* harmony import */ var components_atoms_AppleButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17);
/* harmony import */ var components_atoms_GooglePlayButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(18);
/* harmony import */ var meta__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(10);


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;











function Terms() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Section, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(meta__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    title: "\u30EA\u30F3\u30AF\u4E00\u89A7",
    description: "\u30B9\u30DD\u30C3\u30C8\u76F4\u611F\u578B\u30A2\u30D7\u30EA Sassy(\u30B5\u30C3\u30B7\u30FC)\u306E\u30EA\u30F3\u30AF\u4E00\u89A7\u3067\u3059\u3002",
    url: "https://relyontrip.com/link"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u30B9\u30DD\u30C3\u30C8\u76F4\u611F\u578B\u30A2\u30D7\u30EA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, null, "Sassy(\u30B5\u30C3\u30B7\u30FC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AppIcon, {
    src: "/img/app-logo.png",
    alt: "Sassy\u30A2\u30D7\u30EA\u30ED\u30B4"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SubContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PrimaryButton, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], {
    to: "/sassy"
  }, "\u30A2\u30D7\u30EA\u8A73\u7D30\u306F\u3053\u3061\u3089"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StoreButtonsSubContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_atoms_AppleButton__WEBPACK_IMPORTED_MODULE_8__[/* AppleButton */ "a"], {
    href: "https://apps.apple.com/jp/app/id1496112424"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_atoms_GooglePlayButton__WEBPACK_IMPORTED_MODULE_9__[/* GooglePlayButton */ "a"], {
    href: "https://play.google.com/store/apps/details?id=com.relyontrip.sassy&referrer=utm_source%3Dsassy-lp%26anid%3Dadmob"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, {
    style: {
      marginBottom: "1rem"
    }
  }, "\u95A2\u9023\u30EA\u30F3\u30AF\u96C6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkCard, {
    style: {
      marginBottom: "1rem"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://note.com/caviia/",
    target: "_blank"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/img/circle_note.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u7DE8\u96C6\u90E8\u306B\u3088\u308B\u516C\u5F0Fnote\uFF08\u30D6\u30ED\u30B0\uFF09\u306F\u3053\u3061\u3089\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "\u30A2\u30D7\u30EA\u306E\u4FBF\u5229\u306A\u4F7F\u3044\u65B9\u3084\u30AA\u30EA\u30B8\u30CA\u30EB\u30C6\u30FC\u30DE\u306B\u5408\u308F\u305B\u305F\u304A\u3059\u3059\u3081\u30B9\u30DD\u30C3\u30C8\u3092\u7D39\u4ECB\u3057\u3066\u3044\u307E\u3059\u3002"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkCard, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.instagram.com/sassy.trip/",
    target: "_blank"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/img/circle_instagram.png"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Instagram\u3067\u306F\u52D5\u753B\u3068\u8C4A\u5BCC\u306A\u5199\u771F\u4ED8\u304D\u3067\u30A2\u30D7\u30EA\u5185\u306E\u30B9\u30DD\u30C3\u30C8\u3092\u7D39\u4ECB\u3057\u3066\u3044\u307E\u3059\u3002\u30A2\u30D7\u30EA\u306E\u30A4\u30E1\u30FC\u30B8\u3092\u77E5\u308A\u305F\u3044\u65B9\u306F\u305C\u3072\u3054\u89A7\u304F\u3060\u3055\u3044\u3002")))));
}
var Section = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.section(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n    background-color: ", ";\n    font-family: \"\u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 ProN W3\", \"Hiragino Kaku Gothic ProN\", \"\u30E1\u30A4\u30EA\u30AA\", \"Meiryo\", \"verdana\", serif;\n"])), components_atoms_Section_style__WEBPACK_IMPORTED_MODULE_6__[/* FullPageSectionStyle */ "a"], theme__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].color.grey900);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n"])), components_atoms_Wrapper_style__WEBPACK_IMPORTED_MODULE_5__[/* NormalWrapperStyle */ "b"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject3 || (_templateObject3 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-bottom: 6rem;\n"])));
var SubContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject4 || (_templateObject4 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    margin-bottom: 2rem;\n"])));
var StoreButtonsSubContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject5 || (_templateObject5 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    display: flex;\n    flex-direction: row;\n"])));
var Title = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject6 || (_templateObject6 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n"])), components_atoms_Text_style__WEBPACK_IMPORTED_MODULE_7__[/* PageMainTitle */ "g"]);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject7 || (_templateObject7 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n"])), components_atoms_Text_style__WEBPACK_IMPORTED_MODULE_7__[/* ElementHeader */ "a"]);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.p(_templateObject8 || (_templateObject8 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    font-size: ", ";\n    color: ", ";\n    line-height: 1;\n    margin: 0;\n"])), theme__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].font.medium, theme__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].color.grey400);
var PrimaryButton = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.button(_templateObject9 || (_templateObject9 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    background-color: rgba(0, 0, 0, 0.4);\n    border: 1px solid ", ";\n    border-radius: 8px;\n    a {\n        display: block;\n        padding: 1rem 4rem;\n        color: ", ";\n        font-size: ", ";\n        font-weight: ", ";\n    }\n    &:hover {\n        background-color: rgba(0, 0, 0, 0.2);\n        cursor: pointer;\n    }\n"])), theme__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].color.grey700, theme__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].color.white, theme__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].font.medium, theme__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].weight.normal);
var AppIcon = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.img(_templateObject10 || (_templateObject10 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    width: 120px;\n    height: auto;\n"])));
var LinkCard = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject11 || (_templateObject11 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    background-color: #2B2D30;\n    border-radius: 1rem;\n    box-shadow: 0 0 0.8rem rgb(64 48 52 / 4%);\n    padding: 1.5rem;\n    max-width: 360px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    position: relative;\n    a {\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 100%;\n        width: 100%;\n    }\n    img {\n        display: block;\n        width: 3rem;\n        height: auto;\n    }\n    div {\n        margin-left: 2rem;\n        p {\n            margin: 0;\n            line-height: 1.8;\n            font-size: ", ";\n            color: #D1D2D3;\n        }\n    }\n"])), theme__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].font.small);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return News; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23);
/* harmony import */ var components_atoms_Wrapper_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var components_atoms_Section_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5);
/* harmony import */ var components_atoms_Text_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4);
/* harmony import */ var components_molecules_NewsItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(24);
/* harmony import */ var meta__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(10);


var _templateObject, _templateObject2, _templateObject3;










var outputNews = data__WEBPACK_IMPORTED_MODULE_4__[/* newsData */ "a"].filter(function (output) {
  return output.target == "all" || "company";
});
function News() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Section, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(meta__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    title: "\u304A\u77E5\u3089\u305B",
    description: "\u682A\u5F0F\u4F1A\u793ERelyonTrip\u306E\u304A\u77E5\u3089\u305B\u4E00\u89A7",
    url: "https://relyontrip.com/news"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, null, "News"), outputNews.map(function (body, key) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_molecules_NewsItem__WEBPACK_IMPORTED_MODULE_8__[/* NewsItem */ "a"], {
      body: body,
      key: key
    });
  })));
}
var Section = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.section(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n    background-color: ", ";\n"])), components_atoms_Section_style__WEBPACK_IMPORTED_MODULE_6__[/* FullPageSectionStyle */ "a"], theme__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].color.black);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n"])), components_atoms_Wrapper_style__WEBPACK_IMPORTED_MODULE_5__[/* NormalWrapperStyle */ "b"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3 || (_templateObject3 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n"])), components_atoms_Text_style__WEBPACK_IMPORTED_MODULE_7__[/* PageMainTitle */ "g"]);

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PricavyPolicy; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_atoms_Wrapper_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var components_atoms_Section_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var components_atoms_Text_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var components_atoms_Container_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var meta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11;








function PricavyPolicy() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Section, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(meta__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    title: "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC",
    description: "\u682A\u5F0F\u4F1A\u793ERelyonTrip\u306E\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC",
    url: "https://relyontrip.com/privacy-policy"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, null, "\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u682A\u5F0F\u4F1A\u793ERelyonTrip\uFF08\u4EE5\u4E0B\u300C\u5F53\u793E\u300D\u3068\u3044\u3044\u307E\u3059\u3002\uFF09\u306F\u3001\u5F53\u793E\u306E\u63D0\u4F9B\u3059\u308B\u30B5\u30FC\u30D3\u30B9\uFF08\u4EE5\u4E0B\u300C\u672C\u30B5\u30FC\u30D3\u30B9\u300D\u3068\u3044\u3044\u307E\u3059\u3002\uFF09\u306B\u304A\u3051\u308B\u3001\u304A\u5BA2\u69D8\u306B\u3064\u3044\u3066\u306E\u500B\u4EBA\u60C5\u5831\u3092\u542B\u3080\u5229\u7528\u8005\u60C5\u5831\u306E\u53D6\u6271\u3044\u306B\u3064\u3044\u3066\u3001\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\uFF08\u4EE5\u4E0B\u300C\u672C\u30DD\u30EA\u30B7\u30FC\u300D\u3068\u3044\u3044\u307E\u3059\u3002\uFF09\u3092\u5B9A\u3081\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, "\u7B2C1\u6761(\u53CE\u96C6\u3059\u308B\u5229\u7528\u8005\u60C5\u5831\u53CA\u3073\u53CE\u96C6\u65B9\u6CD5)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u672C\u30DD\u30EA\u30B7\u30FC\u306B\u304A\u3044\u3066\u3001\u300C\u5229\u7528\u8005\u60C5\u5831\u300D\u3068\u306F\u3001\u304A\u5BA2\u69D8\u306E\u8B58\u5225\u306B\u4FC2\u308B\u60C5\u5831\u3001\u901A\u4FE1\u30B5\u30FC\u30D3\u30B9\u4E0A\u306E\u884C\u52D5\u5C65\u6B74\u3001\u305D\u306E\u4ED6\u306E\u304A\u5BA2\u69D8\u307E\u305F\u306F\u304A\u5BA2\u69D8\u306E\u7AEF\u672B\u306B\u95A2\u9023\u3057\u3066\u751F\u6210\u307E\u305F\u306F\u84C4\u7A4D\u3055\u308C\u305F\u60C5\u5831\u3067\u3042\u3063\u3066\u3001\u672C\u30DD\u30EA\u30B7\u30FC\u306B\u57FA\u3065\u304D\u5F53\u793E\u304C\u53CE\u96C6\u3059\u308B\u3082\u306E\u3092\u610F\u5473\u3059\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002\u672C\u30B5\u30FC\u30D3\u30B9\u306B\u304A\u3044\u3066\u5F53\u793E\u304C\u53CE\u96C6\u3059\u308B\u5229\u7528\u8005\u60C5\u5831\u306F\u3001\u305D\u306E\u53CE\u96C6\u65B9\u6CD5\u306B\u5FDC\u3058\u3066\u3001\u4EE5\u4E0B\u306E\u3088\u3046\u306A\u3082\u306E\u3068\u306A\u308A\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SecondContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SecondHeader, null, "(1) \u304A\u5BA2\u69D8\u304B\u3089\u3054\u63D0\u4F9B\u3044\u305F\u3060\u304F\u60C5\u5831"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u672C\u30B5\u30FC\u30D3\u30B9\u3092\u5229\u7528\u3059\u308B\u305F\u3081\u306B\u3001\u307E\u305F\u306F\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u5229\u7528\u3092\u901A\u3058\u3066\u304A\u5BA2\u69D8\u304B\u3089\u3054\u63D0\u4F9B\u3044\u305F\u3060\u304F\u60C5\u5831\u306F\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3067\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u30CB\u30C3\u30AF\u30CD\u30FC\u30E0\u3001\u751F\u5E74\u6708\u65E5\u3001\u6027\u5225\u7B49\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u306B\u95A2\u3059\u308B\u60C5\u5831"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u7B49\u9023\u7D61\u5148\u306B\u95A2\u3059\u308B\u60C5\u5831"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u304A\u5BA2\u69D8\u306E\u8096\u50CF\u3092\u542B\u3080\u9759\u6B62\u753B\u60C5\u5831"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u5165\u529B\u30D5\u30A9\u30FC\u30E0\u305D\u306E\u4ED6\u5F53\u793E\u304C\u5B9A\u3081\u308B\u65B9\u6CD5\u3092\u901A\u3058\u3066\u304A\u5BA2\u69D8\u304C\u5165\u529B\u307E\u305F\u306F\u9001\u4FE1\u3059\u308B\u60C5\u5831"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SecondContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SecondHeader, null, "(2) \u304A\u5BA2\u69D8\u304C\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u5229\u7528\u306B\u304A\u3044\u3066\u3001\u4ED6\u306E\u30B5\u30FC\u30D3\u30B9\u3068\u9023\u643A\u3092\u8A31\u53EF\u3059\u308B\u3053\u3068\u306B\u3088\u308A\u3001\u5F53\u8A72\u4ED6\u306E\u30B5\u30FC\u30D3\u30B9\u304B\u3089\u3054\u63D0\u4F9B\u3044\u305F\u3060\u304F\u60C5\u5831"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u304A\u5BA2\u69D8\u304C\u3001\u672C\u30B5\u30FC\u30D3\u30B9\u3092\u5229\u7528\u3059\u308B\u306B\u3042\u305F\u308A\u3001\u30BD\u30FC\u30B7\u30E3\u30EB\u30CD\u30C3\u30C8\u30EF\u30FC\u30AD\u30F3\u30B0\u30B5\u30FC\u30D3\u30B9\u7B49\u306E\u4ED6\u306E\u30B5\u30FC\u30D3\u30B9\u3068\u306E\u9023\u643A\u3092\u8A31\u53EF\u3057\u305F\u5834\u5408\u306B\u306F\u3001\u305D\u306E\u8A31\u53EF\u306E\u969B\u306B\u3054\u540C\u610F\u3044\u305F\u3060\u3044\u305F\u5185\u5BB9\u306B\u57FA\u3065\u304D\u3001\u4EE5\u4E0B\u306E\u60C5\u5831\u3092\u5F53\u8A72\u5916\u90E8\u30B5\u30FC\u30D3\u30B9\u304B\u3089\u53CE\u96C6\u3057\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ul, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u5F53\u8A72\u5916\u90E8\u30B5\u30FC\u30D3\u30B9\u3067\u304A\u5BA2\u69D8\u304C\u5229\u7528\u3059\u308BID"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u305D\u306E\u4ED6\u5F53\u8A72\u5916\u90E8\u30B5\u30FC\u30D3\u30B9\u306E\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u8A2D\u5B9A\u306B\u3088\u308A\u304A\u5BA2\u69D8\u304C\u9023\u643A\u5148\u306B\u958B\u793A\u3092\u8A8D\u3081\u305F\u60C5\u5831"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SecondContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SecondHeader, null, "(3) \u304A\u5BA2\u69D8\u304C\u672C\u30B5\u30FC\u30D3\u30B9\u3092\u5229\u7528\u3059\u308B\u306B\u3042\u305F\u3063\u3066\u3001\u5F53\u793E\u304C\u53CE\u96C6\u3059\u308B\u60C5\u5831"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u5F53\u793E\u306F\u3001\u672C\u30B5\u30FC\u30D3\u30B9\u3078\u306E\u30A2\u30AF\u30BB\u30B9\u72B6\u6CC1\u3084\u305D\u306E\u3054\u5229\u7528\u65B9\u6CD5\u306B\u95A2\u3059\u308B\u60C5\u5831\u3092\u53CE\u96C6\u3059\u308B\u3053\u3068\u304C\u3042\u308A\u307E\u3059\u3002\u3053\u308C\u306B\u306F\u4EE5\u4E0B\u306E\u60C5\u5831\u304C\u542B\u307E\u308C\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u30EA\u30D5\u30A1\u30E9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "IP\u30A2\u30C9\u30EC\u30B9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u30B5\u30FC\u30D0\u30FC\u30A2\u30AF\u30BB\u30B9\u30ED\u30B0\u306B\u95A2\u3059\u308B\u60C5\u5831"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "Cookie\u3001ADID\u3001IDFA\u305D\u306E\u4ED6\u306E\u8B58\u5225\u5B50"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SecondContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SecondHeader, null, "(4) \u304A\u5BA2\u69D8\u304C\u672C\u30B5\u30FC\u30D3\u30B9\u3092\u5229\u7528\u3059\u308B\u306B\u3042\u305F\u3063\u3066\u3001\u5F53\u793E\u304C\u304A\u5BA2\u69D8\u306E\u500B\u5225\u540C\u610F\u306B\u57FA\u3065\u3044\u3066\u53CE\u96C6\u3059\u308B\u60C5\u5831"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u5F53\u793E\u306F\u3001\u304A\u5BA2\u69D8\u304C3-1\u306B\u5B9A\u3081\u308B\u65B9\u6CD5\u306B\u3088\u308A\u500B\u5225\u306B\u540C\u610F\u3057\u305F\u5834\u5408\u3001\u5F53\u793E\u306F\u4EE5\u4E0B\u306E\u60C5\u5831\u3092\u5229\u7528\u4E2D\u306E\u7AEF\u672B\u304B\u3089\u53CE\u96C6\u3057\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u4F4D\u7F6E\u60C5\u5831")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, "\u7B2C2\u6761(\u5229\u7528\u76EE\u7684)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u30B5\u30FC\u30D3\u30B9\u63D0\u4F9B\u306B\u304B\u304B\u308F\u308B\u5229\u7528\u8005\u60C5\u5831\u306E\u5177\u4F53\u7684\u306A\u5229\u7528\u76EE\u7684\u306F\u4EE5\u4E0B\u306E\u3068\u304A\u308A\u3067\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u672C\u30B5\u30FC\u30D3\u30B9\u306B\u95A2\u3059\u308B\u767B\u9332\u306E\u53D7\u4ED8\u3001\u672C\u4EBA\u78BA\u8A8D\u3001\u304A\u5BA2\u69D8\u306E\u8A8D\u8A3C\u3001\u304A\u5BA2\u69D8\u8A2D\u5B9A\u306E\u8A18\u9332\u3001\u5229\u7528\u6599\u91D1\u306E\u6C7A\u6E08\u8A08\u7B97\u7B49\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u63D0\u4F9B\u3001\u7DAD\u6301\u3001\u4FDD\u8B77\u53CA\u3073\u6539\u5584\u306E\u305F\u3081"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u304A\u5BA2\u69D8\u306E\u30C8\u30E9\u30D5\u30A3\u30C3\u30AF\u6E2C\u5B9A\u53CA\u3073\u884C\u52D5\u6E2C\u5B9A\u306E\u305F\u3081"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u5E83\u544A\u306E\u914D\u4FE1\u3001\u8868\u793A\u53CA\u3073\u52B9\u679C\u6E2C\u5B9A\u306E\u305F\u3081"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u672C\u30B5\u30FC\u30D3\u30B9\u306B\u95A2\u3059\u308B\u3054\u6848\u5185\u3001\u304A\u554F\u3044\u5408\u308F\u305B\u7B49\u3078\u306E\u5BFE\u5FDC\u306E\u305F\u3081"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u672C\u30B5\u30FC\u30D3\u30B9\u306B\u95A2\u3059\u308B\u5F53\u793E\u306E\u898F\u7D04\u3001\u30DD\u30EA\u30B7\u30FC\u7B49\uFF08\u4EE5\u4E0B\u300C\u898F\u7D04\u7B49\u300D\u3068\u3044\u3044\u307E\u3059\u3002\uFF09\u306B\u9055\u53CD\u3059\u308B\u884C\u70BA\u306B\u5BFE\u3059\u308B\u5BFE\u5FDC\u306E\u305F\u3081"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u672C\u30B5\u30FC\u30D3\u30B9\u306B\u95A2\u3059\u308B\u898F\u7D04\u7B49\u306E\u5909\u66F4\u306A\u3069\u3092\u901A\u77E5\u3059\u308B\u305F\u3081"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, "\u7B2C3\u6761(\u901A\u77E5\u30FB\u516C\u8868\u307E\u305F\u306F\u540C\u610F\u53D6\u5F97\u306E\u65B9\u6CD5\u3001\u5229\u7528\u4E2D\u6B62\u8981\u8ACB\u306E\u65B9\u6CD5)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SecondContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "3-1 \u4EE5\u4E0B\u306E\u5229\u7528\u8005\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001\u305D\u306E\u53CE\u96C6\u304C\u884C\u308F\u308C\u308B\u524D\u306B\u304A\u5BA2\u69D8\u306E\u540C\u610F\u3092\u5F97\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u4F4D\u7F6E\u60C5\u5831"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u7AEF\u672B\u60C5\u5831"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SecondContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "3-2 \u304A\u5BA2\u69D8\u306F\u3001\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u6240\u5B9A\u306E\u8A2D\u5B9A\u3092\u884C\u3046\u3053\u3068\u306B\u3088\u308A\u3001\u5229\u7528\u8005\u60C5\u5831\u306E\u5168\u90E8\u307E\u305F\u306F\u4E00\u90E8\u306B\u3064\u3044\u3066\u305D\u306E\u53CE\u96C6\u53C8\u306F\u5229\u7528\u306E\u505C\u6B62\u3092\u6C42\u3081\u308B\u3053\u3068\u304C\u3067\u304D\u3001\u3053\u306E\u5834\u5408\u3001\u5F53\u793E\u306F\u901F\u3084\u304B\u306B\u3001\u5F53\u793E\u306E\u5B9A\u3081\u308B\u3068\u3053\u308D\u306B\u5F93\u3044\u3001\u305D\u306E\u5229\u7528\u3092\u505C\u6B62\u3057\u307E\u3059\u3002\u306A\u304A\u5229\u7528\u8005\u60C5\u5831\u306E\u9805\u76EE\u306B\u3088\u3063\u3066\u306F\u3001\u305D\u306E\u53CE\u96C6\u307E\u305F\u306F\u5229\u7528\u304C\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u524D\u63D0\u3068\u306A\u308B\u305F\u3081\u3001\u5F53\u793E\u6240\u5B9A\u306E\u65B9\u6CD5\u306B\u3088\u308A\u672C\u30B5\u30FC\u30D3\u30B9\u3092\u9000\u4F1A\u3057\u305F\u5834\u5408\u306B\u9650\u308A\u3001\u5F53\u793E\u306F\u305D\u306E\u53CE\u96C6\u53C8\u306F\u5229\u7528\u3092\u505C\u6B62\u3057\u307E\u3059\u3002"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, "\u7B2C4\u6761(\u7B2C\u4E09\u8005\u63D0\u4F9B)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u5F53\u793E\u306F\u3001\u5229\u7528\u8005\u60C5\u5831\u306E\u3046\u3061\u3001\u500B\u4EBA\u60C5\u5831\u306B\u3064\u3044\u3066\u306F\u3001\u3042\u3089\u304B\u3058\u3081\u304A\u5BA2\u69D8\u306E\u540C\u610F\u3092\u5F97\u306A\u3044\u3067\u3001\u7B2C\u4E09\u8005\uFF08\u65E5\u672C\u56FD\u5916\u306B\u3042\u308B\u8005\u3092\u542B\u307F\u307E\u3059\u3002\uFF09\u306B\u63D0\u4F9B\u3057\u307E\u305B\u3093\u3002\u4F46\u3057\u3001\u6B21\u306B\u63B2\u3052\u308B\u5FC5\u8981\u304C\u3042\u308A\u7B2C\u4E09\u8005\uFF08\u65E5\u672C\u56FD\u5916\u306B\u3042\u308B\u8005\u3092\u542B\u307F\u307E\u3059\u3002\uFF09\u306B\u63D0\u4F9B\u3059\u308B\u5834\u5408\u306F\u3053\u306E\u9650\u308A\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u5F53\u793E\u304C\u5229\u7528\u76EE\u7684\u306E\u9054\u6210\u306B\u5FC5\u8981\u306A\u7BC4\u56F2\u5185\u306B\u304A\u3044\u3066\u500B\u4EBA\u60C5\u5831\u306E\u53D6\u6271\u3044\u306E\u5168\u90E8\u307E\u305F\u306F\u4E00\u90E8\u3092\u59D4\u8A17\u3059\u308B\u5834\u5408"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u5408\u4F75\u305D\u306E\u4ED6\u306E\u4E8B\u7531\u306B\u3088\u308B\u4E8B\u696D\u306E\u627F\u7D99\u306B\u4F34\u3063\u3066\u500B\u4EBA\u60C5\u5831\u304C\u63D0\u4F9B\u3055\u308C\u308B\u5834\u5408"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u56FD\u306E\u6A5F\u95A2\u3082\u3057\u304F\u306F\u5730\u65B9\u516C\u5171\u56E3\u4F53\u307E\u305F\u306F\u305D\u306E\u59D4\u8A17\u3092\u53D7\u3051\u305F\u8005\u304C\u6CD5\u4EE4\u306E\u5B9A\u3081\u308B\u4E8B\u52D9\u3092\u9042\u884C\u3059\u308B\u3053\u3068\u306B\u5BFE\u3057\u3066\u5354\u529B\u3059\u308B\u5FC5\u8981\u304C\u3042\u308B\u5834\u5408\u3067\u3042\u3063\u3066\u3001\u304A\u5BA2\u69D8\u306E\u540C\u610F\u3092\u5F97\u308B\u3053\u3068\u306B\u3088\u3063\u3066\u5F53\u8A72\u4E8B\u52D9\u306E\u9042\u884C\u306B\u652F\u969C\u3092\u53CA\u307C\u3059\u304A\u305D\u308C\u304C\u3042\u308B\u5834\u5408"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u305D\u306E\u4ED6\u3001\u500B\u4EBA\u60C5\u5831\u306E\u4FDD\u8B77\u306B\u95A2\u3059\u308B\u6CD5\u5F8B\uFF08\u4EE5\u4E0B\u300C\u500B\u4EBA\u60C5\u5831\u4FDD\u8B77\u6CD5\u300D\u3068\u3044\u3044\u307E\u3059\u3002\uFF09\u305D\u306E\u4ED6\u306E\u6CD5\u4EE4\u3067\u8A8D\u3081\u3089\u308C\u308B\u5834\u5408"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, "\u7B2C5\u6761(\u500B\u4EBA\u60C5\u5831\u306E\u958B\u793A)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u5F53\u793E\u306F\u3001\u304A\u5BA2\u69D8\u304B\u3089\u3001\u500B\u4EBA\u60C5\u5831\u4FDD\u8B77\u6CD5\u306E\u5B9A\u3081\u306B\u57FA\u3065\u304D\u500B\u4EBA\u60C5\u5831\u306E\u958B\u793A\u3092\u6C42\u3081\u3089\u308C\u305F\u3068\u304D\u306F\u3001\u304A\u5BA2\u69D8\u3054\u672C\u4EBA\u304B\u3089\u306E\u3054\u8ACB\u6C42\u3067\u3042\u308B\u3053\u3068\u3092\u78BA\u8A8D\u306E\u4E0A\u3067\u3001\u304A\u5BA2\u69D8\u306B\u5BFE\u3057\u3001\u9045\u6EDE\u306A\u304F\u958B\u793A\u3092\u884C\u3044\u307E\u3059\uFF08\u5F53\u8A72\u500B\u4EBA\u60C5\u5831\u304C\u5B58\u5728\u3057\u306A\u3044\u3068\u304D\u306B\u306F\u305D\u306E\u65E8\u3092\u901A\u77E5\u3044\u305F\u3057\u307E\u3059\u3002\uFF09\u3002\u4F46\u3057\u3001\u500B\u4EBA\u60C5\u5831\u4FDD\u8B77\u6CD5\u305D\u306E\u4ED6\u306E\u6CD5\u4EE4\u306B\u3088\u308A\u3001\u5F53\u793E\u304C\u958B\u793A\u306E\u7FA9\u52D9\u3092\u8CA0\u308F\u306A\u3044\u5834\u5408\u306F\u3001\u3053\u306E\u9650\u308A\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u306A\u304A\u3001\u500B\u4EBA\u60C5\u5831\u306E\u958B\u793A\u306B\u3064\u304D\u307E\u3057\u3066\u306F\u3001\u624B\u6570\u6599\uFF081\u4EF6\u3042\u305F\u308A1,000\u5186\uFF09\u3092\u9802\u6234\u3057\u3066\u304A\u308A\u307E\u3059\u306E\u3067\u3001\u3042\u3089\u304B\u3058\u3081\u5FA1\u4E86\u627F\u304F\u3060\u3055\u3044\u3002")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, "\u7B2C6\u6761(\u500B\u4EBA\u60C5\u5831\u306E\u8A02\u6B63\u53CA\u3073\u5229\u7528\u505C\u6B62\u7B49)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SecondContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "6-1 \u5F53\u793E\u306F\u3001\u304A\u5BA2\u69D8\u304B\u3089\u3001(1)\u500B\u4EBA\u60C5\u5831\u304C\u771F\u5B9F\u3067\u306A\u3044\u3068\u3044\u3046\u7406\u7531\u306B\u3088\u3063\u3066\u500B\u4EBA\u60C5\u5831\u4FDD\u8B77\u6CD5\u306E\u5B9A\u3081\u306B\u57FA\u3065\u304D\u305D\u306E\u5185\u5BB9\u306E\u8A02\u6B63\u3092\u6C42\u3081\u3089\u308C\u305F\u5834\u5408\u3001\u53CA\u3073(2)\u3042\u3089\u304B\u3058\u3081\u516C\u8868\u3055\u308C\u305F\u5229\u7528\u76EE\u7684\u306E\u7BC4\u56F2\u3092\u8D85\u3048\u3066\u53D6\u6271\u308F\u308C\u3066\u3044\u308B\u3068\u3044\u3046\u7406\u7531\u307E\u305F\u306F\u507D\u308A\u305D\u306E\u4ED6\u4E0D\u6B63\u306E\u624B\u6BB5\u306B\u3088\u308A\u53CE\u96C6\u3055\u308C\u305F\u3082\u306E\u3067\u3042\u308B\u3068\u3044\u3046\u7406\u7531\u306B\u3088\u308A\u3001\u500B\u4EBA\u60C5\u5831\u4FDD\u8B77\u6CD5\u306E\u5B9A\u3081\u306B\u57FA\u3065\u304D\u305D\u306E\u5229\u7528\u306E\u505C\u6B62\u3092\u6C42\u3081\u3089\u308C\u305F\u5834\u5408\u306B\u306F\u3001\u304A\u5BA2\u69D8\u3054\u672C\u4EBA\u304B\u3089\u306E\u3054\u8ACB\u6C42\u3067\u3042\u308B\u3053\u3068\u3092\u78BA\u8A8D\u306E\u4E0A\u3067\u9045\u6EDE\u306A\u304F\u5FC5\u8981\u306A\u8ABF\u67FB\u3092\u884C\u3044\u3001\u305D\u306E\u7D50\u679C\u306B\u57FA\u3065\u304D\u3001\u500B\u4EBA\u60C5\u5831\u306E\u5185\u5BB9\u306E\u8A02\u6B63\u307E\u305F\u306F\u5229\u7528\u505C\u6B62\u3092\u884C\u3044\u3001\u305D\u306E\u65E8\u3092\u304A\u5BA2\u69D8\u306B\u901A\u77E5\u3057\u307E\u3059\u3002\u306A\u304A\u3001\u8A02\u6B63\u307E\u305F\u306F\u5229\u7528\u505C\u6B62\u3092\u884C\u308F\u306A\u3044\u65E8\u306E\u6C7A\u5B9A\u3092\u3057\u305F\u3068\u304D\u306F\u3001\u304A\u5BA2\u69D8\u306B\u5BFE\u3057\u305D\u306E\u65E8\u3092\u901A\u77E5\u3044\u305F\u3057\u307E\u3059\u3002")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SecondContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "6-2 \u5F53\u793E\u306F\u3001\u304A\u5BA2\u69D8\u304B\u3089\u3001\u304A\u5BA2\u69D8\u306E\u500B\u4EBA\u60C5\u5831\u306B\u3064\u3044\u3066\u6D88\u53BB\u3092\u6C42\u3081\u3089\u308C\u305F\u5834\u5408\u3001\u5F53\u793E\u304C\u5F53\u8A72\u8ACB\u6C42\u306B\u5FDC\u3058\u308B\u5FC5\u8981\u304C\u3042\u308B\u3068\u5224\u65AD\u3057\u305F\u5834\u5408\u306F\u3001\u304A\u5BA2\u69D8\u3054\u672C\u4EBA\u304B\u3089\u306E\u3054\u8ACB\u6C42\u3067\u3042\u308B\u3053\u3068\u3092\u78BA\u8A8D\u306E\u4E0A\u3067\u3001\u500B\u4EBA\u60C5\u5831\u306E\u6D88\u53BB\u3092\u884C\u3044\u3001\u305D\u306E\u65E8\u3092\u304A\u5BA2\u69D8\u306B\u901A\u77E5\u3057\u307E\u3059\u3002")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SecondContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "6-3 \u500B\u4EBA\u60C5\u5831\u4FDD\u8B77\u6CD5\u305D\u306E\u4ED6\u306E\u6CD5\u4EE4\u306B\u3088\u308A\u3001\u5F53\u793E\u304C\u8A02\u6B63\u7B49\u307E\u305F\u306F\u5229\u7528\u505C\u6B62\u7B49\u306E\u7FA9\u52D9\u3092\u8CA0\u308F\u306A\u3044\u5834\u5408\u306F\u30016-1\u304A\u3088\u30736-2\u306E\u898F\u5B9A\u306F\u9069\u7528\u3055\u308C\u307E\u305B\u3093\u3002"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, "\u7B2C7\u6761(\u304A\u554F\u3044\u5408\u308F\u305B\u7A93\u53E3)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u3054\u610F\u898B\u3001\u3054\u8CEA\u554F\u3001\u82E6\u60C5\u306E\u304A\u7533\u51FA\u305D\u306E\u4ED6\u5229\u7528\u8005\u60C5\u5831\u306E\u53D6\u6271\u3044\u306B\u95A2\u3059\u308B\u304A\u554F\u3044\u5408\u308F\u305B\u306F\u3001\u4E0B\u8A18\u306E\u7A93\u53E3\u307E\u3067\u304A\u9858\u3044\u3044\u305F\u3057\u307E\u3059\u3002 "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u4F4F\u6240\uFF1A\u6771\u4EAC\u90FD\u56FD\u5206\u5BFA\u5E02\u6238\u50093\u4E01\u76EE30\u756A11\u53F7"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u4F1A\u793E\u540D\uFF1A\u682A\u5F0F\u4F1A\u793ERelyonTrip"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u500B\u4EBA\u60C5\u5831\u53D6\u6271\u8CAC\u4EFB\u8005\uFF1A\u897F\u6751 \u5F70\u4EC1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u9023\u7D61\u5148\uFF1Asassy_support@relyontrip.com")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, "\u7B2C8\u6761(\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\u306E\u5909\u66F4\u624B\u7D9A)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u5F53\u793E\u306F\u3001\u5FC5\u8981\u306B\u5FDC\u3058\u3066\u3001\u672C\u30DD\u30EA\u30B7\u30FC\u3092\u5909\u66F4\u3057\u307E\u3059\u3002\u4F46\u3057\u3001\u6CD5\u4EE4\u4E0A\u304A\u5BA2\u69D8\u306E\u540C\u610F\u304C\u5FC5\u8981\u3068\u306A\u308B\u3088\u3046\u306A\u672C\u30DD\u30EA\u30B7\u30FC\u306E\u5909\u66F4\u3092\u884C\u3046\u5834\u5408\u3001\u5909\u66F4\u5F8C\u306E\u672C\u30DD\u30EA\u30B7\u30FC\u306F\u3001\u5F53\u793E\u6240\u5B9A\u306E\u65B9\u6CD5\u3067\u5909\u66F4\u306B\u540C\u610F\u3057\u305F\u304A\u5BA2\u69D8\u306B\u5BFE\u3057\u3066\u306E\u307F\u9069\u7528\u3055\u308C\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002\u306A\u304A\u3001\u5F53\u793E\u306F\u3001\u672C\u30DD\u30EA\u30B7\u30FC\u3092\u5909\u66F4\u3059\u308B\u5834\u5408\u306B\u306F\u3001\u5909\u66F4\u5F8C\u306E\u672C\u30DD\u30EA\u30B7\u30FC\u306E\u65BD\u884C\u6642\u671F\u53CA\u3073\u5185\u5BB9\u3092\u5F53\u793E\u306E\u30A2\u30D7\u30EA\u4E0A\u3067\u306E\u8868\u793A\u305D\u306E\u4ED6\u306E\u9069\u5207\u306A\u65B9\u6CD5\u306B\u3088\u308A\u5468\u77E5\u3057\u3001\u307E\u305F\u306F\u304A\u5BA2\u69D8\u306B\u901A\u77E5\u3057\u307E\u3059\u3002")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "2020\u5E742\u670810\u65E5 \u5236\u5B9A"))));
}
var Section = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.section(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n"])), components_atoms_Section_style__WEBPACK_IMPORTED_MODULE_4__[/* FullPageSectionStyle */ "a"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n"])), components_atoms_Wrapper_style__WEBPACK_IMPORTED_MODULE_3__[/* NormalWrapperStyle */ "b"]);
var FirstContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3 || (_templateObject3 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n"])), components_atoms_Container_style__WEBPACK_IMPORTED_MODULE_6__[/* NormalContainer */ "a"]);
var SecondContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject4 || (_templateObject4 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n"])), components_atoms_Container_style__WEBPACK_IMPORTED_MODULE_6__[/* SubContainer */ "b"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject5 || (_templateObject5 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n"])), components_atoms_Text_style__WEBPACK_IMPORTED_MODULE_5__[/* PageMainTitle */ "g"]);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject6 || (_templateObject6 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n"])), components_atoms_Text_style__WEBPACK_IMPORTED_MODULE_5__[/* ElementHeader */ "a"]);
var SecondHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject7 || (_templateObject7 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n"])), components_atoms_Text_style__WEBPACK_IMPORTED_MODULE_5__[/* ElementSubHeader */ "b"]);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p(_templateObject8 || (_templateObject8 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n"])), components_atoms_Text_style__WEBPACK_IMPORTED_MODULE_5__[/* NormalText */ "e"]);
var Li = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.li(_templateObject9 || (_templateObject9 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n"])), components_atoms_Text_style__WEBPACK_IMPORTED_MODULE_5__[/* NormalLi */ "c"]);
var Ol = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ol(_templateObject10 || (_templateObject10 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n"])), components_atoms_Text_style__WEBPACK_IMPORTED_MODULE_5__[/* NormalOl */ "d"]);
var Ul = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ul(_templateObject11 || (_templateObject11 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n"])), components_atoms_Text_style__WEBPACK_IMPORTED_MODULE_5__[/* NormalUl */ "f"]);

/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sassy; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _product_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64);
/* harmony import */ var _product_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_product_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);



function Sassy() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(meta__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    title: "Sassy(\u30B5\u30C3\u30B7\u30FC) \u30B9\u30DD\u30C3\u30C8\u76F4\u611F\u578B\u30A2\u30D7\u30EA",
    description: "\u30B9\u30EF\u30A4\u30D7\u3067\u300C\u884C\u304D\u305F\u3044\u300D\u3092\u767A\u898B\u3002Sassy\u306F\u3001\u307F\u3093\u306A\u306E\uFF62\u3068\u3063\u3066\u304A\u304D\uFF63\u30B9\u30DD\u30C3\u30C8\u304C\u7C21\u5358\u306B\u3001\u4FBF\u5229\u306B\u63A2\u305B\u308B\u30A2\u30D7\u30EA\u3002\u305D\u3057\u3066\u3001\u4ECA\u307E\u3067\u306E\u304A\u3067\u304B\u3051\u63A2\u3057\u306E\uFF62\u30E1\u30F3\u30C9\u30AF\u30B5\u30A4\uFF63\u90E8\u5206\u3092\u89E3\u6C7A\u3057\u307E\u3059\u3002\u6620\u3048\u30B9\u30DD\u30C3\u30C8\u63A2\u3057\u3001\u53E3\u30B3\u30DF\u304C\u8ABF\u3079\u3001\u7D4C\u8DEF\u3068\u30A2\u30AF\u30BB\u30B9\u306E\u78BA\u8A8D\u2026\u3002\u3053\u308C\u307E\u3067\u306E\u8272\u3005\u306A\u30C4\u30FC\u30EB\u306E\u5F80\u5FA9\u3092\u3001Sassy\u306F\uFF11\u3064\u306B\u307E\u3068\u3081\u307E\u3057\u305F\u3002\u30AB\u30D5\u30A7\u306E\u306F\u3057\u3054\u3001\u99C5\u30C1\u30AB\u306E\u304A\u5E97\u63A2\u3057\u3001\u30E9\u30F3\u30C1\u3068\u30B7\u30E7\u30C3\u30D4\u30F3\u30B0\u306E\u7D44\u307F\u5408\u308F\u305B\u3002Sassy\u3067\u3001\u304A\u3067\u304B\u3051\u30B9\u30DD\u30C3\u30C8\u63A2\u3057\u3092\u3082\u3063\u3068\u30AB\u30F3\u30BF\u30F3\u306B\u3001\u3082\u3063\u3068\u697D\u3057\u304F\u3057\u307E\u3057\u3087\u3046\uFF01",
    url: "https://relyontrip.com/sassy"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-area-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-area-concept-message pc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      borderRadius: "1rem 0 2rem 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u30B9\u30EF\u30A4\u30D7\u3067\uFF64"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\uFF62\u884C\u304D\u305F\u3044\uFF63\u3092\u767A\u898B\uFF61")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u30B9\u30DD\u30C3\u30C8\u76F4\u611F\u578B\u30A2\u30D7\u30EA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-area-concept-message sp"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      borderRadius: "1rem 0 2rem 0",
      textAlign: "center"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\u30B9\u30EF\u30A4\u30D7\u3067\uFF64"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "\uFF62\u884C\u304D\u305F\u3044\uFF63\u3092\u767A\u898B\uFF61")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u30B9\u30DD\u30C3\u30C8\u76F4\u611F\u578B\u30A2\u30D7\u30EA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/logo-white.png",
    alt: "Sassy\u30ED\u30B4",
    width: "180px",
    height: "auto",
    className: "logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "app-download-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://itunes.apple.com/jp/app/id1496112424?mt=8",
    target: "_blank",
    onclick: "gtag('event', 'click', {'event_category':'link','event_label':'itunes.apple.com/jp/app/id1496112424?mt=8 in_sassy_index top','value':'1'});"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/apple-badge.png",
    alt: "AppStore\u3067Sassy\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B",
    style: {
      width: "124px"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://play.google.com/store/apps/details?id=com.relyontrip.sassy&referrer=utm_source%3Dsassy-lp%26anid%3Dadmob",
    target: "_blank",
    onclick: "gtag('event', 'click', {'event_category':'link','event_label':'play.google.com/store/apps/details?id=com.relyontrip.sassy in_sassy_index top','value':'1'});"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/google-play-badge.png",
    alt: "GooglePlay\u3067Sassy\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B",
    style: {
      width: "154px"
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
    playsinline: "",
    muted: "muted",
    loop: "loop",
    autoplay: "autoplay",
    height: "auto;",
    "min-width": "240px;",
    width: "320px;",
    style: {
      borderRadius: "16px",
      margin: "32px 0px"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    src: "/feature_movie.mp4",
    type: "video/mp4"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "app-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contents-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u3053\u308C\u307E\u3067\u4F53\u9A13\u3057\u305F\u3053\u3068\u306E\u306A\u3044", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "\u304A\u3067\u304B\u3051"), "\u3092\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u4ECA\u307E\u3067\u306E\u300C\u304A\u3067\u304B\u3051\u300D\u306B\u6EA2\u308C\u3066\u3044\u305F\u300C\u30E1\u30F3\u30C9\u30AF\u30B5\u30A4\u300D\b\u3002\u6C17\u3065\u304B\u306C\u3046\u3061\u306B\u3001\u7A4D\u307F\u91CD\u306A\u3063\u3066\u3044\u307E\u305B\u3093\u304B\uFF1F")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u300C\u30A4\u30F3\u30B9\u30BF\u300D\u3084\u300C\u30CD\u30C3\u30C8\u691C\u7D22\u300D\u3067\u30B9\u30DD\u30C3\u30C8\u3092\u63A2\u3057\u3066\u3001\u30B0\u30EB\u30E1\u30B5\u30A4\u30C8\u3067\u55B6\u696D\u6642\u9593\u3084\u30AF\u30C1\u30B3\u30DF\u3092\u8ABF\u3079\u3066\u3001\u30DE\u30C3\u30D7\u3067\u5834\u6240\u3084\u7D4C\u8DEF\u3092\u78BA\u8A8D\u3057\u3066\u3001\u53CB\u3060\u3061\u306B\u5171\u6709\u3057\u3066\u2026\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u4ECA\u5EA6\u304B\u3089\u306F\u3001\u3042\u306A\u305F\u306E\u300C\u30E1\u30F3\u30C9\u30AF\u30B5\u30A4\u300D\u5168\u90E8\u3092Sassy\u304C\u89E3\u6C7A\u3057\u307E\u3059\u3002")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u300C\u30EF\u30AF\u30EF\u30AF\u300D\u3060\u3051\u3092\u697D\u3057\u3093\u3067\u6B32\u3057\u3044\u304B\u3089\u3002Sassy\u306F\u3001\u76F4\u611F\u7684\u306A\u64CD\u4F5C\u3068\u8C4A\u5BCC\u306A\u4FBF\u5229\u6A5F\u80FD\u306B\u3053\u3060\u308F\u308A\u307E\u3057\u305F\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u5E73\u65E5\u3067\u8A08\u753B\u3067\u30EF\u30AF\u30EF\u30AF\u3001\u4F11\u65E5\u306F\u884C\u3063\u3066\u30EF\u30AF\u30EF\u30AF\u3002\u304A\u3067\u304B\u3051\u306B\u3001\u5F69\u308A\u3092\u3002")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "app-download-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://itunes.apple.com/jp/app/id1496112424?mt=8",
    target: "_blank",
    onclick: "gtag('event', 'click', {'event_category':'link','event_label':'itunes.apple.com/jp/app/id1496112424?mt=8 in_sassy_index middle','value':'1'});"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/apple-badge.png",
    alt: "AppStore\u3067Sassy\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B",
    style: {
      width: "124px"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://play.google.com/store/apps/details?id=com.relyontrip.sassy&referrer=utm_source%3Dsassy-lp%26anid%3Dadmob",
    target: "_blank",
    onclick: "gtag('event', 'click', {'event_category':'link','event_label':'play.google.com/store/apps/details?id=com.relyontrip.sassy in_sassy_index middle','value':'1'});"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/google-play-badge.png",
    alt: "GooglePlay\u3067Sassy\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B",
    style: {
      width: "154px"
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "highlight-feature",
    id: "dj"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contents-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u30C6\u30FC\u30DE\u5225\u30B9\u30DD\u30C3\u30C8\u307E\u3068\u3081\u96C6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dj-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/dj-01.jpg",
    className: "dj-avatar"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/dj-02.jpg",
    className: "dj-avatar"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/dj-03.jpg",
    className: "dj-avatar"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/dj-04.jpg",
    className: "dj-avatar"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/dj-05.jpg",
    className: "dj-avatar"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-dj"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u6570\u3005\u306E\u826F\u8CEA\u30B9\u30DD\u30C3\u30C8\u3092\u77E5\u308A\u5C3D\u304F\u3057\u305F\u300C\u304A\u3067\u304B\u3051\u306E\u30D7\u30ED\u300D\u304C\u3001\u30C6\u30FC\u30DE\u306B\u3042\u308F\u305B\u305F\u30A4\u30C1\u30AA\u30B7\u306E\u30B9\u30DD\u30C3\u30C8\u3092\u53B3\u9078\u3057\u3066\u30D1\u30C3\u30B1\u30FC\u30B8\u5316\u3057\u307E\u3057\u305F\u3002\u4E00\u822C\u7684\u306A\u300C\u307E\u3068\u3081\u30B5\u30A4\u30C8\u300D\u3068\u9055\u3044\u3001Sassy\u306E\u300C\u307E\u3068\u3081\u96C6\u300D\u3067\u306F\u8907\u6570\u306E\u30B9\u30DD\u30C3\u30C8\u3092\u30DE\u30C3\u30D7\u3067\u307E\u3068\u3081\u3066\u628A\u63E1\u3067\u304D\u3001\u305D\u306E\u307E\u307E\u304A\u6C17\u306B\u5165\u308A\u4FDD\u5B58\u3082\u53EF\u80FD\u3067\u3059\u3002")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/playlist-and-map.jpg",
    alt: "\u304A\u3067\u304B\u3051DJ\u30BB\u30EC\u30AF\u30C8",
    className: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "\u30B3\u30F3\u30C6\u30F3\u30C4\u3001\u7D9A\u3005\u5145\u5B9F\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "playlist-sample"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/playlist-sample.jpg",
    alt: "\u304A\u3067\u304B\u3051DJ\u30BB\u30EC\u30AF\u30C8\u30B5\u30F3\u30D7\u30EB",
    className: ""
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-dj"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u307E\u3068\u3081\u96C6\u3067\u306F\u3001\u6570\u3005\u306E\u30EF\u30AF\u30EF\u30AF\u3059\u308B\u30C6\u30FC\u30DE\u3092\u3054\u7528\u610F\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u307E\u305F\u3001\u300C\u3053\u3093\u306A\u30C6\u30FC\u30DE\u304C\u77E5\u308A\u305F\u3044\uFF01\u300D\u3068\u3044\u3046\u30EA\u30AF\u30A8\u30B9\u30C8\u3082\u5927\u52DF\u96C6\u4E2D\u3067\u3059\u3002\u304A\u6C17\u8EFD\u306B\u4E0B\u8A18\u30D5\u30A9\u30FC\u30E0\u304B\u3089\u304A\u554F\u3044\u5408\u308F\u305B\u304F\u3060\u3055\u3044\u3002")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "request-btn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://docs.google.com/forms/d/e/1FAIpQLSf0hMiTOxYSTDbsYl3uevU_f9uhFxnL4-9d2uXbQPAmSNo8zQ/viewform",
    target: "_blank",
    onclick: "ga('send','event','btn-to-contact','click','in-sassy-index', 1)"
  }, "\u304A\u554F\u3044\u5408\u308F\u305B\u30D5\u30A9\u30FC\u30E0")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "overflow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contents-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "feature-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "feature-contents"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u4E00\u7DD2\u306B\u300C\u884C\u304D\u305F\u3044\u300D\u3092\u5171\u6709"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text"
  }, "\u300C\u3069\u3053\u304B\u884C\u304D\u305F\u3044\u3068\u3053\u308D\u3042\u308B\uFF1F\u300D\u306E\u4F1A\u8A71\u3002\u3053\u308C\u304B\u3089\u306F\u3001Sassy\u3067\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text"
  }, "\uFF12\u4EBA\u306E\u300C\u884C\u304D\u305F\u3044\u300D\u30B9\u30DD\u30C3\u30C8\u3092\u81EA\u52D5\u3067\u30DE\u30C3\u30C1\u30F3\u30B0\u3002")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-card card-blue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/friends.jpg",
    alt: "\u53CB\u3060\u3061\u3068\u300C\u884C\u304D\u305F\u3044\u300D\u3092\u5171\u6709",
    className: "screen-shot"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "overflow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contents-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "feature-row end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-card card-left card-orange"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/swipe.jpg",
    alt: "\u76F4\u611F\u3067\u884C\u304D\u305F\u3044\u30B9\u30DD\u30C3\u30C8\u3092\u63A2\u3059",
    className: "screen-shot screen-shot-left"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "feature-contents margin-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u81EA\u5206\u306E\u597D\u307F\u306F\u300C\u76F4\u611F\u300D\u3067\u63A2\u3059"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text"
  }, "\u6B21\u3005\u51FA\u3066\u304F\u308B\u5199\u771F\u3092\u300C\u597D\u304D\u304B\u3069\u3046\u304B\u300D\u3067\u30B9\u30EF\u30A4\u30D7\u3059\u308B\u3060\u3051\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text"
  }, "\u76F4\u611F\u7684\u306A\u64CD\u4F5C\u3067\u3001\u6B21\u306E\u304A\u3067\u304B\u3051\u5148\u3092\u898B\u3064\u3051\u3088\u3046\u3002"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "overflow"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contents-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "feature-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "feature-contents"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u30A4\u30F3\u30B9\u30BF\u3068\u30DE\u30C3\u30D7\u304C\u9023\u52D5"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text"
  }, "\u30A4\u30F3\u30B9\u30BF\u3067\u898B\u3064\u3051\u305F\u30B9\u30DD\u30C3\u30C8\u3092\u4FDD\u5B58\u3059\u308C\u3070\u3001"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text"
  }, "\u3042\u306A\u305F\u3060\u3051\u306E\u300C\u884C\u304D\u305F\u3044\u30DE\u30C3\u30D7\u300D\u304C\u81EA\u52D5\u3067\u5B8C\u6210\u3002")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-card card-biolate"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/instagram-map.jpg",
    alt: "\u30A4\u30F3\u30B9\u30BF\u3068\u30DE\u30C3\u30D7\u304C\u9023\u52D5\u53CB\u3060\u3061\u3068\u300C\u884C\u304D\u305F\u3044\u300D\u3092\u5171\u6709",
    className: "screen-shot"
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "topic"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Topic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contents"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://prtimes.jp/main/html/rd/p/000000018.000051474.html",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "date"
  }, "2021-08-31"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title"
  }, "\u3010\u30B9\u30DD\u30C3\u30C8\u63B2\u8F09\u657032,000\u4EF6\u7A81\u7834\u3011\u30B9\u30DD\u30C3\u30C8\u76F4\u611F\u578B\u30A2\u30D7\u30EA\u300ESassy\u300F\u304C\u3001\u672D\u5E4C\u5E02\u30FB\u4ED9\u53F0\u5E02\u30FB\u91D1\u6CA2\u5E02\u30FB\u540D\u53E4\u5C4B\u5E02\u306B\u304A\u3051\u308B\u89B3\u5149\u30B3\u30F3\u30C6\u30F3\u30C4\u306E\u4F5C\u6210\u30FB\u914D\u4FE1\u3092\u958B\u59CB"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contents"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://prtimes.jp/main/html/rd/p/000000017.000051474.html",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "date"
  }, "2021-07-31"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title"
  }, "\u3010\u81EA\u6CBB\u4F53\u3068\u306E\u53D6\u7D44\u306F\uFF13\u30F6\u6708\u9023\u7D9A\uFF01\u3011\u30B9\u30DD\u30C3\u30C8\u76F4\u611F\u578B\u30A2\u30D7\u30EA\u300ESassy\u300F\u304C\u3001\u4E09\u91CD\u770C\u3001\u5BCC\u5C71\u770C\u3001\u5C71\u68A8\u770C\u3001\u9577\u91CE\u770C\u3001\u5C90\u961C\u770C\u304A\u3088\u3073\u7FA4\u99AC\u770C\u306B\u304A\u3051\u308B\u89B3\u5149\u30B3\u30F3\u30C6\u30F3\u30C4\u306E\u4F5C\u6210\u30FB\u914D\u4FE1\u3092\u958B\u59CB"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contents"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://otekomachi.yomiuri.co.jp/lifestyle/20210721-OYTET50000/",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "date"
  }, "2021-07-20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title"
  }, "\u8AAD\u58F2\u65B0\u805E\u671D\u520A\uFF08\u5168\u56FD\u7D19\uFF09\u306B\u3066\u3001\u8FD1\u5834\u3067\u4F11\u65E5\u3092\u697D\u3057\u307F\u305F\u3044\u3068\u3044\u3046\u8981\u671B\u306B\u5FDC\u3048\u308B\u30B5\u30FC\u30D3\u30B9\u3068\u3057\u3066Sassy\u304C\u7D39\u4ECB\u3055\u308C\u307E\u3057\u305F\u3002"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contents"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://prtimes.jp/main/html/rd/p/000000015.000051474.html",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "date"
  }, "2021-06-30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title"
  }, "\u3010\u89B3\u5149/\u304A\u3067\u304B\u3051\u3011\u30B9\u30DD\u30C3\u30C8\u76F4\u611F\u578B\u30A2\u30D7\u30EA\u300ESassy\u300F\u304C\u9752\u68EE\u770C\u3001\u5CA9\u624B\u770C\u304A\u3088\u3073\u4E45\u6148\u5E02\u3068\u9023\u643A\uFF01\u5730\u57DF\u30B3\u30F3\u30C6\u30F3\u30C4\u306E\u4F5C\u6210\u30FB\u914D\u4FE1\u3092\u958B\u59CB"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contents"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://prtimes.jp/main/html/rd/p/000000014.000051474.html",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "date"
  }, "2021-05-31"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title"
  }, "\u3010\u89B3\u5149/\u304A\u3067\u304B\u3051\u3011\u30B9\u30DD\u30C3\u30C8\u76F4\u611F\u578B\u30A2\u30D7\u30EA\u300ESassy\u300F\u304C\u3001\u5C71\u5F62\u770C\u3068\u9023\u643A\uFF01\u5730\u57DF\u30B3\u30F3\u30C6\u30F3\u30C4\u306E\u4F5C\u6210\u3001\u30A2\u30D7\u30EA\u914D\u4FE1\u3092\u958B\u59CB\u3002"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contents"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://prtimes.jp/main/html/rd/p/000000013.000051474.html",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "date"
  }, "2020-12-17"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title"
  }, "\u3010\u3088\u308A\u4FBF\u5229\u306B\u3011\u76F4\u611F\u578B\u304A\u3067\u304B\u3051\u30A2\u30D7\u30EA\u300ESassy\u300F\u65B0\u6A5F\u80FD\u306E\u304A\u77E5\u3089\u305B & \u300E\u9B3C\u6EC5\u306E\u5203\u300F\u8056\u5730\u5DE1\u793C\u30B9\u30DD\u30C3\u30C8\u7279\u96C6\u304C\u5927\u597D\u8A55\uFF01"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contents"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://prtimes.jp/main/html/rd/p/000000012.000051474.html",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "date"
  }, "2020-11-08"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title"
  }, "\u301020\u4EE3\u306B\u4EBA\u6C17\u3011\u76F4\u611F\u578B\u304A\u3067\u304B\u3051\u30A2\u30D7\u30EA\u300CSassy\u300D\u304C\u3001\u30DE\u30A4\u30AF\u30ED\u30C4\u30FC\u30EA\u30BA\u30E0Web\u30E1\u30C7\u30A3\u30A2\u300CSassy-Trip\u300D\u3092\u30B9\u30BF\u30FC\u30C8\uFF01"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contents"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://prtimes.jp/main/html/rd/p/000000011.000051474.html",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "date"
  }, "2020-10-20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title"
  }, "\u3010\u3053\u308C\u304C\u89B3\u5149\u306E\u672A\u6765\u5F62\u3011\u304A\u3067\u304B\u3051\u30A2\u30D7\u30EASassy\u304C\u5927\u30EA\u30CB\u30E5\u30FC\u30A2\u30EB\uFF01\u304A\u3067\u304B\u3051DJ\u30BB\u30EC\u30AF\u30C8\u6A5F\u80FD\u3092\u65B0\u30EA\u30EA\u30FC\u30B9\uFF01"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contents"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://prtimes.jp/main/html/rd/p/000000010.000051474.html",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "date"
  }, "2020-09-30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title"
  }, "\u3010\u6771\u4EAC\u30DE\u30A4\u30AF\u30ED\u30C4\u30FC\u30EA\u30BA\u30E0\u3011\u76F4\u611F\u578B\u304A\u3067\u304B\u3051\u30A2\u30D7\u30EASassy\u306B\u3001\u53CB\u3060\u3061\u5171\u6709\u6A5F\u80FD\u304C\u8FFD\u52A0\uFF01"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contents"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://news.j-wave.co.jp/2020/09/post-6733.html",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "date"
  }, "2020-09-17"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title"
  }, "J-WAVE\u30E9\u30B8\u30AA\u300CTOKYO MORNING RADIO\uFF08\u30CA\u30D3\u30B2\u30FC\u30BF\u30FC\uFF1A\u5225\u6240\u54F2\u4E5F\u3055\u3093\uFF09\u300D\u306E\u300EMORNING INSIGHT\u300F\u3067Sassy\u304C\u7D39\u4ECB\u3055\u308C\u307E\u3057\u305F"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contents"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.j-wave.co.jp/original/colorswonder/entry/200719.html",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "date"
  }, "2020-07-19"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title"
  }, "J-WAVE\u30E9\u30B8\u30AA\u300CCHINTAI COLORS OF WONDER\u300D\u306E\u300E\u65B0\u3057\u3044\u65C5\u3092\u898B\u3064\u3051\u3088\u3046\uFF01\u300F\u306E\u30C6\u30FC\u30DE\u3067Sassy\u304C\u7D39\u4ECB\u3055\u308C\u307E\u3057\u305F"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contents"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://prtimes.jp/main/html/rd/p/000000008.000051474.html",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "date"
  }, "2020-06-30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title"
  }, "\u3010\u30DE\u30A4\u30AF\u30ED\u30C4\u30FC\u30EA\u30BA\u30E0\u306E\u65B0\u5B9A\u756A\u3011\uFF11\u5206\u3067\u304A\u51FA\u304B\u3051\u30D7\u30E9\u30F3\u304C\u5B8C\u6210\uFF01\u304A\u51FA\u304B\u3051\u30FB\u65C5\u884C\u8A08\u753B\u30A2\u30D7\u30EA\u300CSassy\u300D\u306E\u30D7\u30E9\u30F3\u6A5F\u80FD\u304C\u30EA\u30CB\u30E5\u30FC\u30A2\u30EB"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contents"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://prtimes.jp/main/html/rd/p/000000007.000051474.html",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "date"
  }, "2020-05-31"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title"
  }, "\u3010\u30C6\u30A4\u30AF\u30A2\u30A6\u30C8\u306E\u65B0\u3057\u3044\u5F62\u3011\u98F2\u98DF\u5E97\u5FDC\u63F4\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u300C\u30C6\u30A4\u30AF\u30A2\u30A6\u30C8Sassy\u300D\u306E\u4E8B\u524D\u767B\u9332\u30B9\u30BF\u30FC\u30C8\uFF01\uFF11\u5206\u3067\u98F2\u98DF\u5E97\u767B\u9332\u5B8C\u4E86\uFF06\u5B8C\u5168\u7121\u6599\uFF01"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contents"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://prtimes.jp/main/html/rd/p/000000004.000051474.html",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "date"
  }, "2020-04-25"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title"
  }, "\u3010#\u30A8\u30A2\u304A\u51FA\u304B\u3051\u3011\u65B0\u611F\u899A\u306E\u304A\u51FA\u304B\u3051/\u65C5\u884C\u8A08\u753B\u30A2\u30D7\u30EA\u300CSassy \uFF08\u30B5\u30C3\u30B7\u30FC\uFF09\u300D\u306EAndroid\u7248\u304C\u30EA\u30EA\u30FC\u30B9\uFF01\uFF08iOS\u7248\u30EA\u30CB\u30E5\u30FC\u30A2\u30EB\u3082\u540C\u6642\u5B9F\u65BD\uFF01\uFF09"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contents"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://prtimes.jp/main/html/rd/p/000000002.000051474.html",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "date"
  }, "2020-03-30"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title"
  }, "\u3010#\u30A8\u30A2\u304A\u51FA\u304B\u3051\u3011Sassy\u30E6\u30FC\u30B6\u30FC\u306E\u300C\u884C\u304D\u305F\u3044\u5834\u6240\u30E9\u30F3\u30AD\u30F3\u30B0in\u6771\u4EAC\u300D\u767A\u8868\uFF082020\u5E743\u6708\uFF09"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contents"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://prtimes.jp/main/html/rd/p/000000001.000051474.html",
    target: "_blank"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "date"
  }, "2020-02-22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "title"
  }, "\u3010\u65B0\u611F\u899A\u3011\u304A\u51FA\u304B\u3051/\u65C5\u884C\u306E\u8A08\u753B\u30A2\u30D7\u30EA\u300CSassy \uFF08\u30B5\u30C3\u30B7\u30FC\uFF09\u300D\u306EiOS\u7248\u304C\u5F85\u671B\u306E\u30EA\u30EA\u30FC\u30B9\uFF01")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "overflow-app-download"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contents-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "feature-row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-card card-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/girls.jpg",
    alt: "Sassy\u3092\u4F7F\u3063\u3066\u53CB\u3060\u3061\u3068\u51FA\u304B\u3051\u3088\u3046",
    className: "screen-shot"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "feature-contents"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "\u3055\u3042\u3001\u5916\u306B\u7E70\u308A\u51FA\u305D\u3046\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/app-logo.png",
    alt: "Sassy\u30A2\u30D7\u30EA\u30ED\u30B4",
    className: "app-logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "app-download-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://itunes.apple.com/jp/app/id1496112424?mt=8",
    target: "_blank",
    onclick: "gtag('event', 'click', {'event_category':'link','event_label':'itunes.apple.com/jp/app/id1496112424?mt=8 in_sassy_index bottom','value':'1'});"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/apple-badge.png",
    alt: "AppStore\u3067Sassy\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B",
    style: {
      width: "124px"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://play.google.com/store/apps/details?id=com.relyontrip.sassy&referrer=utm_source%3Dsassy-lp%26anid%3Dadmob",
    target: "_blank",
    onclick: "gtag('event', 'click', {'event_category':'link','event_label':'play.google.com/store/apps/details?id=com.relyontrip.sassy in_sassy_index bottom','value':'1'});"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/google-play-badge.png",
    alt: "GooglePlay\u3067Sassy\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B",
    style: {
      width: "154px"
    }
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "overflow-app-download-sp"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "contents-inner"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "feature-row end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "\u3055\u3042\u3001"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "\u5916\u306B\u7E70\u308A\u51FA\u305D\u3046\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bg-card card-left"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/girls-for-sp.jpg",
    alt: "Sassy\u3092\u4F7F\u3063\u3066\u53CB\u3060\u3061\u3068\u51FA\u304B\u3051\u3088\u3046",
    className: "screen-shot"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "feature-contents"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/app-logo.png",
    alt: "Sassy\u30A2\u30D7\u30EA\u30ED\u30B4",
    className: "app-logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "app-download-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://itunes.apple.com/jp/app/id1496112424?mt=8",
    target: "_blank",
    onclick: "gtag('event', 'click', {'event_category':'link','event_label':'itunes.apple.com/jp/app/id1496112424?mt=8 in_sassy_index bottom','value':'1'});"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/apple-badge.png",
    alt: "AppStore\u3067Sassy\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B",
    style: {
      width: "124px"
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://play.google.com/store/apps/details?id=com.relyontrip.sassy&referrer=utm_source%3Dsassy-lp%26anid%3Dadmob",
    target: "_blank",
    onclick: "gtag('event', 'click', {'event_category':'link','event_label':'play.google.com/store/apps/details?id=com.relyontrip.sassy in_sassy_index bottom','value':'1'});"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/img/google-play-badge.png",
    alt: "GooglePlay\u3067Sassy\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B",
    style: {
      width: "154px"
    }
  }))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "origin"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Sassy(\u30B5\u30C3\u30B7\u30FC)\u306E\u7531\u6765"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\u5FC3\u306B\u300E\u523A\u3055\u308B\u300F\u30B9\u30DD\u30C3\u30C8"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\u5730\u56F3\u306B\u30D4\u30F3\u3092\u300E\u523A\u3059\u300F"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\u65C5\u884C\u300E\u518A\u5B50\u300F\u304C\u4E0D\u8981\u306B"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "\u56F0\u3063\u305F\u6642\u306B\u624B\u3092\u300E\u5DEE\u3057\u300F\u4F38\u3079\u308B"))));
}

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Terms; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_atoms_Wrapper_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var components_atoms_Section_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var components_atoms_Text_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var components_atoms_Container_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(12);
/* harmony import */ var meta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(10);


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;








function Terms() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Section, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(meta__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    title: "\u5229\u7528\u898F\u7D04",
    description: "\u682A\u5F0F\u4F1A\u793ERelyonTrip\u306E\u5229\u7528\u898F\u7D04",
    url: "https://relyontrip.com/terms"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, null, "\u5229\u7528\u898F\u7D04"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u672C\u5229\u7528\u898F\u7D04\uFF08\u4EE5\u4E0B\u300C\u672C\u898F\u7D04\u300D\u3068\u8A00\u3044\u307E\u3059\u3002\uFF09\u306B\u306F\u3001\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u63D0\u4F9B\u6761\u4EF6\u53CA\u3073\u5F53\u793E\u3068\u767B\u9332\u3055\u308C\u305F\u304A\u5BA2\u69D8\uFF08\u4EE5\u4E0B\u300C\u304A\u5BA2\u69D8\u300D\u3068\u8A00\u3044\u307E\u3059\u3002\uFF09\u3068\u306E\u9593\u306E\u6A29\u5229\u7FA9\u52D9\u95A2\u4FC2\u304C\u5B9A\u3081\u3089\u308C\u3066\u3044\u307E\u3059\u3002\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u5229\u7528\u306B\u969B\u3057\u3066\u306F\u3001\u672C\u898F\u7D04\u306E\u5168\u6587\u3092\u304A\u8AAD\u307F\u3044\u305F\u3060\u3044\u305F\u3046\u3048\u3067\u3001\u672C\u898F\u7D04\u306B\u540C\u610F\u3044\u305F\u3060\u304F\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, "\u7B2C1\u6761(\u9069\u7528)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, " \u672C\u898F\u7D04\u306F\u3001\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u63D0\u4F9B\u6761\u4EF6\u53CA\u3073\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u5229\u7528\u306B\u95A2\u3059\u308B\u5F53\u793E\u3068\u304A\u5BA2\u69D8\u3068\u306E\u9593\u306E\u6A29\u5229\u7FA9\u52D9\u95A2\u4FC2\u3092\u5B9A\u3081\u308B\u3053\u3068\u3092\u76EE\u7684\u3068\u3057\u3001\u304A\u5BA2\u69D8\u3068\u5F53\u793E\u3068\u306E\u9593\u306E\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u5229\u7528\u306B\u95A2\u308F\u308B\u4E00\u5207\u306E\u95A2\u4FC2\u306B\u9069\u7528\u3055\u308C\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u5F53\u793E\u304C\u5F53\u793E\u30A2\u30D7\u30EA\u4E0A\u3067\u63B2\u8F09\u3059\u308B\u672C\u30B5\u30FC\u30D3\u30B9\u5229\u7528\u306B\u95A2\u3059\u308B\u30EB\u30FC\u30EB\uFF08", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.relyontrip.com/"
  }, "https://relyontrip.com"), "\uFF09\u306F\u3001\u672C\u898F\u7D04\u306E\u4E00\u90E8\u3092\u69CB\u6210\u3059\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u672C\u898F\u7D04\u306E\u5185\u5BB9\u3068\u3001\u524D\u9805\u306E\u30EB\u30FC\u30EB\u305D\u306E\u4ED6\u306E\u672C\u898F\u7D04\u5916\u306B\u304A\u3051\u308B\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u8AAC\u660E\u7B49\u3068\u304C\u7570\u306A\u308B\u5834\u5408\u306F\u3001\u672C\u898F\u7D04\u306E\u898F\u5B9A\u304C\u512A\u5148\u3057\u3066\u9069\u7528\u3055\u308C\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, "\u7B2C2\u6761(\u5B9A\u7FA9)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u672C\u898F\u7D04\u306B\u304A\u3044\u3066\u4F7F\u7528\u3059\u308B\u4EE5\u4E0B\u306E\u7528\u8A9E\u306F\u3001\u5404\u3005\u4EE5\u4E0B\u306B\u5B9A\u3081\u308B\u610F\u5473\u3092\u6709\u3059\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002\xA0\u200D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u300C\u30B5\u30FC\u30D3\u30B9\u5229\u7528\u5951\u7D04\u300D\u3068\u306F\u3001\u672C\u898F\u7D04\u3092\u5951\u7D04\u6761\u4EF6\u3068\u3057\u3066\u5F53\u793E\u3068\u304A\u5BA2\u69D8\u306E\u9593\u3067\u7DE0\u7D50\u3055\u308C\u308B\u3001\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u5229\u7528\u5951\u7D04\u3092\u610F\u5473\u3057\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u300C\u77E5\u7684\u8CA1\u7523\u6A29\u300D\u3068\u306F\u3001\u8457\u4F5C\u6A29\u3001\u7279\u8A31\u6A29\u3001\u5B9F\u7528\u65B0\u6848\u6A29\u3001\u610F\u5320\u6A29\u3001\u5546\u6A19\u6A29\u305D\u306E\u4ED6\u306E\u77E5\u7684\u8CA1\u7523\u6A29\uFF08\u305D\u308C\u3089\u306E\u6A29\u5229\u3092\u53D6\u5F97\u3057\u3001\u307E\u305F\u306F\u305D\u308C\u3089\u306E\u6A29\u5229\u306B\u3064\u304D\u767B\u9332\u7B49\u3092\u51FA\u9858\u3059\u308B\u6A29\u5229\u3092\u542B\u307F\u307E\u3059\u3002\uFF09\u3092\u610F\u5473\u3057\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u300C\u6295\u7A3F\u30C7\u30FC\u30BF\u300D\u3068\u306F\u3001\u304A\u5BA2\u69D8\u304C\u672C\u30B5\u30FC\u30D3\u30B9\u3092\u5229\u7528\u3057\u3066\u6295\u7A3F\u305D\u306E\u4ED6\u9001\u4FE1\u3059\u308B\u30B3\u30F3\u30C6\u30F3\u30C4\uFF08\u6587\u7AE0\u3001\u753B\u50CF\u3001\u52D5\u753B\u305D\u306E\u4ED6\u306E\u30C7\u30FC\u30BF\u3092\u542B\u307F\u307E\u3059\u304C\u3053\u308C\u3089\u306B\u9650\u308A\u307E\u305B\u3093\u3002\uFF09\u3092\u610F\u5473\u3057\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u300C\u5F53\u793E\u300D\u3068\u306F\u3001\u682A\u5F0F\u4F1A\u793ERelyonTrip\u3092\u610F\u5473\u3057\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u300C\u5F53\u793E\u30A2\u30D7\u30EA\u300D\u3068\u306F\u3001\u305D\u306E\u540D\u79F0\u304C\u300CSassy\u300D\u307E\u305F\u306F\u300CCaviia\u300D\u3067\u3042\u308B\u3001\u5F53\u793E\u304C\u904B\u55B6\u3059\u308B\u30A2\u30D7\u30EA\uFF08\u7406\u7531\u306E\u5982\u4F55\u3092\u554F\u308F\u305A\u3001\u5F53\u793E\u306E\u30A2\u30D7\u30EA\u306E\u540D\u79F0\u307E\u305F\u306F\u5185\u5BB9\u304C\u5909\u66F4\u3055\u308C\u305F\u5834\u5408\u306F\u3001\u5F53\u8A72\u5909\u66F4\u5F8C\u306E\u30A2\u30D7\u30EA\u3092\u542B\u307F\u307E\u3059\u3002\uFF09\u3092\u610F\u5473\u3057\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u300C\u767B\u9332\u3055\u308C\u305F\u304A\u5BA2\u69D8\u300D\u3068\u306F\u3001\u7B2C3\u6761\uFF08\u767B\u9332\uFF09\u306B\u57FA\u3065\u3044\u3066\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u5229\u7528\u8005\u3068\u3057\u3066\u306E\u767B\u9332\u304C\u306A\u3055\u308C\u305F\u500B\u4EBA\u307E\u305F\u306F\u6CD5\u4EBA\u3092\u610F\u5473\u3057\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u300C\u672C\u30B5\u30FC\u30D3\u30B9\u300D\u3068\u306F\u3001\u5F53\u793E\u304C\u63D0\u4F9B\u3059\u308B\u300CSassy\u300D\u304A\u3088\u3073\u300CCaviia\u300D\u3068\u3044\u3046\u540D\u79F0\u306E\u30B5\u30FC\u30D3\u30B9\uFF08\u7406\u7531\u306E\u5982\u4F55\u3092\u554F\u308F\u305A\u30B5\u30FC\u30D3\u30B9\u306E\u540D\u79F0\u307E\u305F\u306F\u5185\u5BB9\u304C\u5909\u66F4\u3055\u308C\u305F\u5834\u5408\u306F\u3001\u5F53\u8A72\u5909\u66F4\u5F8C\u306E\u30B5\u30FC\u30D3\u30B9\u3092\u542B\u307F\u307E\u3059\u3002\uFF09\u3092\u610F\u5473\u3057\u307E\u3059\u3002"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, "\u7B2C3\u6761(\u767B\u9332)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u5229\u7528\u3092\u5E0C\u671B\u3059\u308B\u8005\uFF08\u4EE5\u4E0B\u300C\u767B\u9332\u5E0C\u671B\u8005\u300D\u3068\u3044\u3044\u307E\u3059\u3002\uFF09\u306F\u3001\u672C\u898F\u7D04\u3092\u9075\u5B88\u3059\u308B\u3053\u3068\u306B\u540C\u610F\u3057\u3001\u304B\u3064\u5F53\u793E\u306E\u5B9A\u3081\u308B\u4E00\u5B9A\u306E\u60C5\u5831\uFF08\u4EE5\u4E0B\u300C\u767B\u9332\u4E8B\u9805\u300D\u3068\u3044\u3044\u307E\u3059\u3002\uFF09\u3092\u5F53\u793E\u306E\u5B9A\u3081\u308B\u65B9\u6CD5\u3067\u5F53\u793E\u306B\u63D0\u4F9B\u3059\u308B\u3053\u3068\u306B\u3088\u308A\u3001\u5F53\u793E\u306B\u5BFE\u3057\u3001\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u5229\u7528\u306E\u767B\u9332\u3092\u7533\u8ACB\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u5F53\u793E\u306F\u3001\u5F53\u793E\u306E\u57FA\u6E96\u306B\u5F93\u3063\u3066\u3001\u7B2C\uFF11\u9805\u306B\u57FA\u3065\u3044\u3066\u767B\u9332\u7533\u8ACB\u3092\u884C\u3063\u305F\u767B\u9332\u5E0C\u671B\u8005\uFF08\u4EE5\u4E0B\u300C\u767B\u9332\u7533\u8ACB\u8005\u300D\u3068\u3044\u3044\u307E\u3059\u3002\uFF09\u306E\u767B\u9332\u306E\u53EF\u5426\u3092\u5224\u65AD\u3057\u3001\u5F53\u793E\u304C\u767B\u9332\u3092\u8A8D\u3081\u308B\u5834\u5408\u306B\u306F\u305D\u306E\u65E8\u3092\u767B\u9332\u7533\u8ACB\u8005\u306B\u901A\u77E5\u3057\u307E\u3059\u3002\u767B\u9332\u7533\u8ACB\u8005\u306E\u304A\u5BA2\u69D8\u3068\u3057\u3066\u306E\u767B\u9332\u306F\u3001\u5F53\u793E\u304C\u672C\u9805\u306E\u901A\u77E5\u3092\u884C\u3063\u305F\u3053\u3068\u3092\u3082\u3063\u3066\u5B8C\u4E86\u3057\u305F\u3082\u306E\u3068\u3057\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u524D\u9805\u306B\u5B9A\u3081\u308B\u767B\u9332\u306E\u5B8C\u4E86\u6642\u306B\u3001\u30B5\u30FC\u30D3\u30B9\u5229\u7528\u5951\u7D04\u304C\u304A\u5BA2\u69D8\u3068\u5F53\u793E\u306E\u9593\u306B\u6210\u7ACB\u3057\u3001\u304A\u5BA2\u69D8\u306F\u672C\u30B5\u30FC\u30D3\u30B9\u3092\u672C\u898F\u7D04\u306B\u5F93\u3044\u5229\u7528\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3088\u3046\u306B\u306A\u308A\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u5F53\u793E\u306F\u3001\u767B\u9332\u7533\u8ACB\u8005\u304C\u3001\u4EE5\u4E0B\u306E\u5404\u53F7\u306E\u3044\u305A\u308C\u304B\u306E\u4E8B\u7531\u306B\u8A72\u5F53\u3059\u308B\u5834\u5408\u306F\u3001\u767B\u9332\u53CA\u3073\u518D\u767B\u9332\u3092\u62D2\u5426\u3059\u308B\u3053\u3068\u304C\u3042\u308A\u3001\u307E\u305F\u305D\u306E\u7406\u7531\u306B\u3064\u3044\u3066\u4E00\u5207\u958B\u793A\u7FA9\u52D9\u3092\u8CA0\u3044\u307E\u305B\u3093\u3002")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SecondContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u5F53\u793E\u306B\u63D0\u4F9B\u3057\u305F\u767B\u9332\u4E8B\u9805\u306E\u5168\u90E8\u307E\u305F\u306F\u4E00\u90E8\u306B\u3064\u304D\u865A\u507D\u3001\u8AA4\u8A18\u307E\u305F\u306F\u8A18\u8F09\u6F0F\u308C\u304C\u3042\u3063\u305F\u5834\u5408"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u672A\u6210\u5E74\u8005\u3001\u6210\u5E74\u88AB\u5F8C\u898B\u4EBA\u3001\u88AB\u4FDD\u4F50\u4EBA\u307E\u305F\u306F\u88AB\u88DC\u52A9\u4EBA\u306E\u3044\u305A\u308C\u304B\u3067\u3042\u308A\u3001\u6CD5\u5B9A\u4EE3\u7406\u4EBA\u3001\u5F8C\u898B\u4EBA\u3001\u4FDD\u4F50\u4EBA\u307E\u305F\u306F\u88DC\u52A9\u4EBA\u306E\u540C\u610F\u7B49\u3092\u5F97\u3066\u3044\u306A\u304B\u3063\u305F\u5834\u5408"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u53CD\u793E\u4F1A\u7684\u52E2\u529B\u7B49\uFF08\u66B4\u529B\u56E3\u3001\u66B4\u529B\u56E3\u54E1\u3001\u53F3\u7FFC\u56E3\u4F53\u3001\u53CD\u793E\u4F1A\u7684\u52E2\u529B\u3001\u305D\u306E\u4ED6\u3053\u308C\u306B\u6E96\u305A\u308B\u8005\u3092\u610F\u5473\u3057\u307E\u3059\u3002\u4EE5\u4E0B\u540C\u3058\u3002\uFF09\u3067\u3042\u308B\u3001\u307E\u305F\u306F\u8CC7\u91D1\u63D0\u4F9B\u305D\u306E\u4ED6\u3092\u901A\u3058\u3066\u53CD\u793E\u4F1A\u7684\u52E2\u529B\u7B49\u306E\u7DAD\u6301\u3001\u904B\u55B6\u3082\u3057\u304F\u306F\u7D4C\u55B6\u306B\u5354\u529B\u3082\u3057\u304F\u306F\u95A2\u4E0E\u3059\u308B\u7B49\u53CD\u793E\u4F1A\u7684\u52E2\u529B\u7B49\u3068\u306E\u4F55\u3089\u304B\u306E\u4EA4\u6D41\u3082\u3057\u304F\u306F\u95A2\u4E0E\u3092\u884C\u3063\u3066\u3044\u308B\u3068\u5F53\u793E\u304C\u5224\u65AD\u3057\u305F\u5834\u5408"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u904E\u53BB\u5F53\u793E\u3068\u306E\u5951\u7D04\u306B\u9055\u53CD\u3057\u305F\u8005\u307E\u305F\u306F\u305D\u306E\u95A2\u4FC2\u8005\u3067\u3042\u308B\u3068\u5F53\u793E\u304C\u5224\u65AD\u3057\u305F\u5834\u5408"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u7B2C10\u6761\u306B\u5B9A\u3081\u308B\u63AA\u7F6E\u3092\u53D7\u3051\u305F\u3053\u3068\u304C\u3042\u308B\u5834\u5408"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u305D\u306E\u4ED6\u3001\u767B\u9332\u3092\u9069\u5F53\u3067\u306A\u3044\u3068\u5F53\u793E\u304C\u5224\u65AD\u3057\u305F\u5834\u5408"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, "\u7B2C4\u6761(\u767B\u9332\u4E8B\u9805\u306E\u5909\u66F4)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u304A\u5BA2\u69D8\u306F\u3001\u767B\u9332\u4E8B\u9805\u306B\u5909\u66F4\u304C\u3042\u3063\u305F\u5834\u5408\u3001\u5F53\u793E\u306E\u5B9A\u3081\u308B\u65B9\u6CD5\u306B\u3088\u308A\u5F53\u8A72\u5909\u66F4\u4E8B\u9805\u3092\u9045\u6EDE\u306A\u304F\u5F53\u793E\u306B\u901A\u77E5\u3059\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, "\u7B2C5\u6761(\u30D1\u30B9\u30EF\u30FC\u30C9\u53CA\u3073ID\u306E\u7BA1\u7406)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u304A\u5BA2\u69D8\u306F\u3001\u81EA\u5DF1\u306E\u8CAC\u4EFB\u306B\u304A\u3044\u3066\u3001\u672C\u30B5\u30FC\u30D3\u30B9\u306B\u95A2\u3059\u308B\u30D1\u30B9\u30EF\u30FC\u30C9\u53CA\u3073ID\u3092\u9069\u5207\u306B\u7BA1\u7406\u53CA\u3073\u4FDD\u7BA1\u3059\u308B\u3082\u306E\u3068\u3057\u3001\u3053\u308C\u3092\u7B2C\u4E09\u8005\u306B\u5229\u7528\u3055\u305B\u3001\u307E\u305F\u306F\u8CB8\u4E0E\u3001\u8B72\u6E21\u3001\u540D\u7FA9\u5909\u66F4\u3001\u58F2\u8CB7\u7B49\u3092\u3057\u3066\u306F\u306A\u3089\u306A\u3044\u3082\u306E\u3068\u3057\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u30D1\u30B9\u30EF\u30FC\u30C9\u307E\u305F\u306FID\u306E\u7BA1\u7406\u4E0D\u5341\u5206\u3001\u4F7F\u7528\u4E0A\u306E\u904E\u8AA4\u3001\u7B2C\u4E09\u8005\u306E\u4F7F\u7528\u7B49\u306B\u3088\u3063\u3066\u751F\u3058\u305F\u640D\u5BB3\u306B\u95A2\u3059\u308B\u8CAC\u4EFB\u306F\u304A\u5BA2\u69D8\u304C\u8CA0\u3046\u3082\u306E\u3068\u3057\u307E\u3059\u3002"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, "\u7B2C6\u6761(\u6599\u91D1\u53CA\u3073\u652F\u6255\u65B9\u6CD5)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u304A\u5BA2\u69D8\u306F\u3001\u672C\u30B5\u30FC\u30D3\u30B9\u5229\u7528\u306E\u5BFE\u4FA1\u3068\u3057\u3066\u3001\u4ECA\u5F8C\u5225\u9014\u5F53\u793E\u304C\u5B9A\u3081\u305F\u5834\u5408\u306F\u3001\u5F53\u793E\u30A2\u30D7\u30EA\u4E0A\u306B\u8868\u793A\u3059\u308B\u5229\u7528\u6599\u91D1\u3092\u3001\u5F53\u793E\u304C\u6307\u5B9A\u3059\u308B\u652F\u6255\u65B9\u6CD5\u306B\u3088\u308A\u5F53\u793E\u306B\u652F\u6255\u3046\u3082\u306E\u3068\u3057\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u304A\u5BA2\u69D8\u304C\u5229\u7528\u6599\u91D1\u306E\u652F\u6255\u3092\u9045\u6EDE\u3057\u305F\u5834\u5408\u3001\u304A\u5BA2\u69D8\u306F\u5E7414.6\uFF05\u306E\u5272\u5408\u306B\u3088\u308B\u9045\u5EF6\u640D\u5BB3\u91D1\u3092\u5F53\u793E\u306B\u652F\u6255\u3046\u3082\u306E\u3068\u3057\u307E\u3059\u3002"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, "\u7B2C7\u6761(\u7981\u6B62\u4E8B\u9805)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u304A\u5BA2\u69D8\u306F\u3001\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u5229\u7528\u306B\u3042\u305F\u308A\u3001\u4EE5\u4E0B\u306E\u5404\u53F7\u306E\u3044\u305A\u308C\u304B\u306B\u8A72\u5F53\u3059\u308B\u884C\u70BA\u307E\u305F\u306F\u8A72\u5F53\u3059\u308B\u3068\u5F53\u793E\u304C\u5224\u65AD\u3059\u308B\u884C\u70BA\u3092\u3057\u3066\u306F\u306A\u308A\u307E\u305B\u3093\u3002\u200D"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u6CD5\u4EE4\u306B\u9055\u53CD\u3059\u308B\u884C\u70BA\u307E\u305F\u306F\u72AF\u7F6A\u884C\u70BA\u306B\u95A2\u9023\u3059\u308B\u884C\u70BA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u5F53\u793E\u3001\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u4ED6\u306E\u5229\u7528\u8005\u307E\u305F\u306F\u305D\u306E\u4ED6\u306E\u7B2C\u4E09\u8005\u306B\u5BFE\u3059\u308B\u8A50\u6B3A\u307E\u305F\u306F\u8105\u8FEB\u884C\u70BA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u516C\u5E8F\u826F\u4FD7\u306B\u53CD\u3059\u308B\u884C\u70BA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u5F53\u793E\u3001\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u4ED6\u306E\u5229\u7528\u8005\u307E\u305F\u306F\u305D\u306E\u4ED6\u306E\u7B2C\u4E09\u8005\u306E\u77E5\u7684\u8CA1\u7523\u6A29\u3001\u8096\u50CF\u6A29\u3001\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u306E\u6A29\u5229\u3001\u540D\u8A89\u3001\u305D\u306E\u4ED6\u306E\u6A29\u5229\u307E\u305F\u306F\u5229\u76CA\u3092\u4FB5\u5BB3\u3059\u308B\u884C\u70BA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u672C\u30B5\u30FC\u30D3\u30B9\u3092\u901A\u3058\u3001\u4EE5\u4E0B\u306B\u8A72\u5F53\u3057\u3001\u307E\u305F\u306F\u8A72\u5F53\u3059\u308B\u3068\u5F53\u793E\u304C\u5224\u65AD\u3059\u308B\u60C5\u5831\u3092\u5F53\u793E\u307E\u305F\u306F\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u4ED6\u306E\u5229\u7528\u8005\u306B\u9001\u4FE1\u3059\u308B\u3053\u3068\u30FB\u904E\u5EA6\u306B\u66B4\u529B\u7684\u307E\u305F\u306F\u6B8B\u8650\u306A\u8868\u73FE\u3092\u542B\u3080\u60C5\u5831\u30FB\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC\u30FB\u30A6\u30A3\u30EB\u30B9\u305D\u306E\u4ED6\u306E\u6709\u5BB3\u306A\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC\u30FB\u30D7\u30ED\u30B0\u30E9\u30E0\u3092\u542B\u3080\u60C5\u5831\u30FB\u5F53\u793E\u3001\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u4ED6\u306E\u5229\u7528\u8005\u307E\u305F\u306F\u305D\u306E\u4ED6\u306E\u7B2C\u4E09\u8005\u306E\u540D\u8A89\u307E\u305F\u306F\u4FE1\u7528\u3092\u6BC0\u640D\u3059\u308B\u8868\u73FE\u3092\u542B\u3080\u60C5\u5831\u30FB\u904E\u5EA6\u306B\u308F\u3044\u305B\u3064\u306A\u8868\u73FE\u3092\u542B\u3080\u60C5\u5831\u30FB\u5DEE\u5225\u3092\u52A9\u9577\u3059\u308B\u8868\u73FE\u3092\u542B\u3080\u60C5\u5831\u30FB\u81EA\u6BBA\u3001\u81EA\u50B7\u884C\u70BA\u3092\u52A9\u9577\u3059\u308B\u8868\u73FE\u3092\u542B\u3080\u60C5\u5831\u30FB\u85AC\u7269\u306E\u4E0D\u9069\u5207\u306A\u5229\u7528\u3092\u52A9\u9577\u3059\u308B\u8868\u73FE\u3092\u542B\u3080\u60C5\u5831\u30FB\u53CD\u793E\u4F1A\u7684\u306A\u8868\u73FE\u3092\u542B\u3080\u60C5\u5831\u30FB\u30C1\u30A7\u30FC\u30F3\u30E1\u30FC\u30EB\u7B49\u306E\u7B2C\u4E09\u8005\u3078\u306E\u60C5\u5831\u306E\u62E1\u6563\u3092\u6C42\u3081\u308B\u60C5\u5831\u30FB\u4ED6\u4EBA\u306B\u4E0D\u5FEB\u611F\u3092\u4E0E\u3048\u308B\u8868\u73FE\u3092\u542B\u3080\u60C5\u5831"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u307E\u305F\u306F\u30B7\u30B9\u30C6\u30E0\u7B49\u306B\u904E\u5EA6\u306A\u8CA0\u8377\u3092\u304B\u3051\u308B\u884C\u70BA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u5F53\u793E\u304C\u63D0\u4F9B\u3059\u308B\u30BD\u30D5\u30C8\u30A6\u30A7\u30A2\u305D\u306E\u4ED6\u306E\u30B7\u30B9\u30C6\u30E0\u306B\u5BFE\u3059\u308B\u30EA\u30D0\u30FC\u30B9\u30A8\u30F3\u30B8\u30CB\u30A2\u30EA\u30F3\u30B0\u305D\u306E\u4ED6\u306E\u89E3\u6790\u884C\u70BA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u904B\u55B6\u3092\u59A8\u5BB3\u3059\u308B\u304A\u305D\u308C\u306E\u3042\u308B\u884C\u70BA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u5F53\u793E\u306E\u30CD\u30C3\u30C8\u30EF\u30FC\u30AF\u307E\u305F\u306F\u30B7\u30B9\u30C6\u30E0\u7B49\u3078\u306E\u4E0D\u6B63\u30A2\u30AF\u30BB\u30B9"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u7B2C\u4E09\u8005\u306B\u6210\u308A\u3059\u307E\u3059\u884C\u70BA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u4ED6\u306E\u5229\u7528\u8005\u306EID\u307E\u305F\u306F\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5229\u7528\u3059\u308B\u884C\u70BA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u5F53\u793E\u304C\u4E8B\u524D\u306B\u8A31\u8AFE\u3057\u306A\u3044\u672C\u30B5\u30FC\u30D3\u30B9\u4E0A\u3067\u306E\u5BA3\u4F1D\u3001\u5E83\u544A\u3001\u52E7\u8A98\u3001\u307E\u305F\u306F\u55B6\u696D\u884C\u70BA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u4ED6\u306E\u5229\u7528\u8005\u306E\u60C5\u5831\u306E\u53CE\u96C6"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u5F53\u793E\u3001\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u4ED6\u306E\u5229\u7528\u8005\u307E\u305F\u306F\u305D\u306E\u4ED6\u306E\u7B2C\u4E09\u8005\u306B\u4E0D\u5229\u76CA\u3001\u640D\u5BB3\u3001\u4E0D\u5FEB\u611F\u3092\u4E0E\u3048\u308B\u884C\u70BA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u5F53\u793E\u30A2\u30D7\u30EA\u4E0A\u3067\u63B2\u8F09\u3059\u308B\u672C\u30B5\u30FC\u30D3\u30B9\u5229\u7528\u306B\u95A2\u3059\u308B\u30EB\u30FC\u30EB\uFF08", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://www.relyontrip.com/"
  }, "https://relyontrip.com"), "\uFF09\u306B\u62B5\u89E6\u3059\u308B\u884C\u70BA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u53CD\u793E\u4F1A\u7684\u52E2\u529B\u7B49\u3078\u306E\u5229\u76CA\u4F9B\u4E0E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u9762\u8B58\u306E\u306A\u3044\u7570\u6027\u3068\u306E\u51FA\u4F1A\u3044\u3092\u76EE\u7684\u3068\u3057\u305F\u884C\u70BA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u524D\u5404\u53F7\u306E\u884C\u70BA\u3092\u76F4\u63A5\u307E\u305F\u306F\u9593\u63A5\u306B\u60F9\u8D77\u3057\u3001\u307E\u305F\u306F\u5BB9\u6613\u306B\u3059\u308B\u884C\u70BA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u524D\u5404\u53F7\u306E\u884C\u70BA\u3092\u8A66\u307F\u308B\u3053\u3068"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u305D\u306E\u4ED6\u3001\u5F53\u793E\u304C\u4E0D\u9069\u5207\u3068\u5224\u65AD\u3059\u308B\u884C\u70BA"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, "\u7B2C8\u6761(\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u505C\u6B62\u7B49)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u5F53\u793E\u306F\u3001\u4EE5\u4E0B\u306E\u3044\u305A\u308C\u304B\u306B\u8A72\u5F53\u3059\u308B\u5834\u5408\u306B\u306F\u3001\u304A\u5BA2\u69D8\u306B\u4E8B\u524D\u306B\u901A\u77E5\u3059\u308B\u3053\u3068\u306A\u304F\u3001\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u5168\u90E8\u307E\u305F\u306F\u4E00\u90E8\u306E\u63D0\u4F9B\u3092\u505C\u6B62\u307E\u305F\u306F\u4E2D\u65AD\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u672C\u30B5\u30FC\u30D3\u30B9\u306B\u4FC2\u308B\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC\u30FB\u30B7\u30B9\u30C6\u30E0\u306E\u70B9\u691C\u307E\u305F\u306F\u4FDD\u5B88\u4F5C\u696D\u3092\u7DCA\u6025\u306B\u884C\u3046\u5834\u5408"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u30B3\u30F3\u30D4\u30E5\u30FC\u30BF\u30FC\u3001\u901A\u4FE1\u56DE\u7DDA\u7B49\u306E\u969C\u5BB3\u3001\u8AA4\u64CD\u4F5C\u3001\u904E\u5EA6\u306A\u30A2\u30AF\u30BB\u30B9\u306E\u96C6\u4E2D\u3001\u4E0D\u6B63\u30A2\u30AF\u30BB\u30B9\u3001\u30CF\u30C3\u30AD\u30F3\u30B0\u7B49\u306B\u3088\u308A\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u904B\u55B6\u304C\u3067\u304D\u306A\u304F\u306A\u3063\u305F\u5834\u5408"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u5730\u9707\u3001\u843D\u96F7\u3001\u706B\u707D\u3001\u98A8\u6C34\u5BB3\u3001\u505C\u96FB\u3001\u5929\u707D\u5730\u5909\u306A\u3069\u306E\u4E0D\u53EF\u6297\u529B\u306B\u3088\u308A\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u904B\u55B6\u304C\u3067\u304D\u306A\u304F\u306A\u3063\u305F\u5834\u5408"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u305D\u306E\u4ED6\u3001\u5F53\u793E\u304C\u505C\u6B62\u307E\u305F\u306F\u4E2D\u65AD\u3092\u5FC5\u8981\u3068\u5224\u65AD\u3057\u305F\u5834\u5408"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, "\u7B2C9\u6761(\u6A29\u5229\u5E30\u5C5E)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u5F53\u793E\u30A2\u30D7\u30EA\u53CA\u3073\u672C\u30B5\u30FC\u30D3\u30B9\u306B\u95A2\u3059\u308B\u77E5\u7684\u8CA1\u7523\u6A29\u306F\u5168\u3066\u5F53\u793E\u307E\u305F\u306F\u5F53\u793E\u306B\u30E9\u30A4\u30BB\u30F3\u30B9\u3092\u8A31\u8AFE\u3057\u3066\u3044\u308B\u8005\u306B\u5E30\u5C5E\u3057\u3066\u304A\u308A\u3001\u672C\u898F\u7D04\u306B\u57FA\u3065\u304F\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u5229\u7528\u8A31\u8AFE\u306F\u3001\u5F53\u793E\u30A2\u30D7\u30EA\u307E\u305F\u306F\u672C\u30B5\u30FC\u30D3\u30B9\u306B\u95A2\u3059\u308B\u5F53\u793E\u307E\u305F\u306F\u5F53\u793E\u306B\u30E9\u30A4\u30BB\u30F3\u30B9\u3092\u8A31\u8AFE\u3057\u3066\u3044\u308B\u8005\u306E\u77E5\u7684\u8CA1\u7523\u6A29\u306E\u4F7F\u7528\u8A31\u8AFE\u3092\u610F\u5473\u3059\u308B\u3082\u306E\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u304A\u5BA2\u69D8\u306F\u3001\u6295\u7A3F\u30C7\u30FC\u30BF\u306B\u3064\u3044\u3066\u3001\u81EA\u3089\u304C\u6295\u7A3F\u305D\u306E\u4ED6\u9001\u4FE1\u3059\u308B\u3053\u3068\u306B\u3064\u3044\u3066\u306E\u9069\u6CD5\u306A\u6A29\u5229\u3092\u6709\u3057\u3066\u3044\u308B\u3053\u3068\u3001\u53CA\u3073\u6295\u7A3F\u30C7\u30FC\u30BF\u304C\u7B2C\u4E09\u8005\u306E\u6A29\u5229\u3092\u4FB5\u5BB3\u3057\u3066\u3044\u306A\u3044\u3053\u3068\u306B\u3064\u3044\u3066\u3001\u5F53\u793E\u306B\u5BFE\u3057\u8868\u660E\u3057\u3001\u4FDD\u8A3C\u3059\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u304A\u5BA2\u69D8\u306F\u3001\u6295\u7A3F\u30C7\u30FC\u30BF\u306B\u3064\u3044\u3066\u3001\u5F53\u793E\u306B\u5BFE\u3057\u3001\u4E16\u754C\u7684\u3001\u975E\u72EC\u5360\u7684\u3001\u7121\u511F\u3001\u30B5\u30D6\u30E9\u30A4\u30BB\u30F3\u30B9\u53EF\u80FD\u304B\u3064\u8B72\u6E21\u53EF\u80FD\u306A\u4F7F\u7528\u3001\u8907\u88FD\u3001\u914D\u5E03\u3001\u6D3E\u751F\u8457\u4F5C\u7269\u306E\u4F5C\u6210\u3001\u8868\u793A\u53CA\u3073\u5B9F\u884C\u306B\u95A2\u3059\u308B\u30E9\u30A4\u30BB\u30F3\u30B9\u3092\u4ED8\u4E0E\u3057\u307E\u3059\u3002\u307E\u305F\u3001\u4ED6\u306E\u304A\u5BA2\u69D8\u306B\u5BFE\u3057\u3066\u3082\u3001\u672C\u30B5\u30FC\u30D3\u30B9\u3092\u5229\u7528\u3057\u3066\u304A\u5BA2\u69D8\u304C\u6295\u7A3F\u305D\u306E\u4ED6\u9001\u4FE1\u3057\u305F\u6295\u7A3F\u30C7\u30FC\u30BF\u306E\u4F7F\u7528\u3001\u8907\u88FD\u3001\u914D\u5E03\u3001\u6D3E\u751F\u8457\u4F5C\u7269\u3092\u4F5C\u6210\u3001\u8868\u793A\u53CA\u3073\u5B9F\u884C\u3059\u308B\u3053\u3068\u306B\u3064\u3044\u3066\u306E\u975E\u72EC\u5360\u7684\u306A\u30E9\u30A4\u30BB\u30F3\u30B9\u3092\u4ED8\u4E0E\u3057\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u304A\u5BA2\u69D8\u306F\u3001\u5F53\u793E\u53CA\u3073\u5F53\u793E\u304B\u3089\u6A29\u5229\u3092\u627F\u7D99\u3057\u307E\u305F\u306F\u8A31\u8AFE\u3055\u308C\u305F\u8005\u306B\u5BFE\u3057\u3066\u8457\u4F5C\u8005\u4EBA\u683C\u6A29\u3092\u884C\u4F7F\u3057\u306A\u3044\u3053\u3068\u306B\u540C\u610F\u3059\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, "\u7B2C10\u6761(\u767B\u9332\u62B9\u6D88\u7B49)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u5F53\u793E\u306F\u3001\u304A\u5BA2\u69D8\u304C\u3001\u4EE5\u4E0B\u306E\u5404\u53F7\u306E\u3044\u305A\u308C\u304B\u306E\u4E8B\u7531\u306B\u8A72\u5F53\u3059\u308B\u5834\u5408\u306F\u3001\u4E8B\u524D\u306B\u901A\u77E5\u307E\u305F\u306F\u50AC\u544A\u3059\u308B\u3053\u3068\u306A\u304F\u3001\u6295\u7A3F\u30C7\u30FC\u30BF\u3092\u524A\u9664\u3082\u3057\u304F\u306F\u975E\u8868\u793A\u306B\u3057\u3001\u5F53\u8A72\u304A\u5BA2\u69D8\u306B\u3064\u3044\u3066\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u5229\u7528\u3092\u4E00\u6642\u7684\u306B\u505C\u6B62\u3057\u3001\u307E\u305F\u306F\u304A\u5BA2\u69D8\u3068\u3057\u3066\u306E\u767B\u9332\u3092\u62B9\u6D88\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002(1)\xA0 \u672C\u898F\u7D04\u306E\u3044\u305A\u308C\u304B\u306E\u6761\u9805\u306B\u9055\u53CD\u3057\u305F\u5834\u5408(2)\xA0 \u767B\u9332\u4E8B\u9805\u306B\u865A\u507D\u306E\u4E8B\u5B9F\u304C\u3042\u308B\u3053\u3068\u304C\u5224\u660E\u3057\u305F\u5834\u5408(3)\xA0 \u652F\u6255\u505C\u6B62\u3082\u3057\u304F\u306F\u652F\u6255\u4E0D\u80FD\u3068\u306A\u308A\u3001\u307E\u305F\u306F\u7834\u7523\u624B\u7D9A\u958B\u59CB\u3001\u6C11\u4E8B\u518D\u751F\u624B\u7D9A\u958B\u59CB\u3001\u4F1A\u793E\u66F4\u751F\u624B\u7D9A\u958B\u59CB\u3001\u7279\u5225\u6E05\u7B97\u958B\u59CB\u82E5\u3057\u304F\u306F\u3053\u308C\u3089\u306B\u985E\u3059\u308B\u624B\u7D9A\u306E\u958B\u59CB\u306E\u7533\u7ACB\u3066\u304C\u3042\u3063\u305F\u5834\u5408(4) 12\u30F6\u6708\u4EE5\u4E0A\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u5229\u7528\u304C\u306A\u3044\u5834\u5408 (5)\xA0 \u5F53\u793E\u304B\u3089\u306E\u554F\u3044\u5408\u308F\u305B\u305D\u306E\u4ED6\u306E\u56DE\u7B54\u3092\u6C42\u3081\u308B\u9023\u7D61\u306B\u5BFE\u3057\u306630\u65E5\u9593\u4EE5\u4E0A\u5FDC\u7B54\u304C\u306A\u3044\u5834\u5408(6)\xA0 \u7B2C3\u6761\u7B2C4\u9805\u5404\u53F7\u306B\u8A72\u5F53\u3059\u308B\u5834\u5408(7)\xA0 \u305D\u306E\u4ED6\u3001\u5F53\u793E\u304C\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u5229\u7528\u307E\u305F\u306F\u304A\u5BA2\u69D8\u3068\u3057\u3066\u306E\u767B\u9332\u306E\u7D99\u7D9A\u3092\u9069\u5F53\u3067\u306A\u3044\u3068\u5224\u65AD\u3057\u305F\u5834\u5408"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u524D\u9805\u5404\u53F7\u306E\u3044\u305A\u308C\u304B\u306E\u4E8B\u7531\u306B\u8A72\u5F53\u3057\u305F\u5834\u5408\u3001\u304A\u5BA2\u69D8\u306F\u3001\u5F53\u793E\u306B\u5BFE\u3057\u3066\u8CA0\u3063\u3066\u3044\u308B\u50B5\u52D9\u306E\u4E00\u5207\u306B\u3064\u3044\u3066\u5F53\u7136\u306B\u671F\u9650\u306E\u5229\u76CA\u3092\u5931\u3044\u3001\u76F4\u3061\u306B\u5F53\u793E\u306B\u5BFE\u3057\u3066\u5168\u3066\u306E\u50B5\u52D9\u306E\u652F\u6255\u3092\u884C\u308F\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, "\u7B2C11\u6761(\u9000\u4F1A)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u304A\u5BA2\u69D8\u306F\u3001\u5F53\u793E\u6240\u5B9A\u306E\u624B\u7D9A\u306E\u5B8C\u4E86\u306B\u3088\u308A\u3001\u672C\u30B5\u30FC\u30D3\u30B9\u304B\u3089\u9000\u4F1A\u3057\u3001\u767B\u9332\u3092\u62B9\u6D88\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u9000\u4F1A\u306B\u3042\u305F\u308A\u3001\u5F53\u793E\u306B\u5BFE\u3057\u3066\u8CA0\u3063\u3066\u3044\u308B\u50B5\u52D9\u304C\u6709\u308B\u5834\u5408\u306F\u3001\u304A\u5BA2\u69D8\u306F\u3001\u5F53\u793E\u306B\u5BFE\u3057\u3066\u8CA0\u3063\u3066\u3044\u308B\u50B5\u52D9\u306E\u4E00\u5207\u306B\u3064\u3044\u3066\u5F53\u7136\u306B\u671F\u9650\u306E\u5229\u76CA\u3092\u5931\u3044\u3001\u76F4\u3061\u306B\u5F53\u793E\u306B\u5BFE\u3057\u3066\u5168\u3066\u306E\u50B5\u52D9\u306E\u652F\u6255\u3092\u884C\u308F\u306A\u3051\u308C\u3070\u306A\u308A\u307E\u305B\u3093\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u9000\u4F1A\u5F8C\u306E\u5229\u7528\u8005\u60C5\u5831\u306E\u53D6\u6271\u3044\u306B\u3064\u3044\u3066\u306F\u3001\u7B2C15\u6761\u306E\u898F\u5B9A\u306B\u5F93\u3046\u3082\u306E\u3068\u3057\u307E\u3059\u3002"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, "\u7B2C12\u6761(\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u5185\u5BB9\u306E\u5909\u66F4\u3001\u7D42\u4E86)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u5F53\u793E\u306F\u3001\u5F53\u793E\u306E\u90FD\u5408\u306B\u3088\u308A\u3001\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u5185\u5BB9\u3092\u5909\u66F4\u3057\u3001\u307E\u305F\u306F\u63D0\u4F9B\u3092\u7D42\u4E86\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u5F53\u793E\u304C\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u63D0\u4F9B\u3092\u7D42\u4E86\u3059\u308B\u5834\u5408\u3001\u5F53\u793E\u306F\u304A\u5BA2\u69D8\u306B\u4E8B\u524D\u306B\u901A\u77E5\u3059\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, "\u7B2C13\u6761(\u4FDD\u8A3C\u306E\u5426\u8A8D\u53CA\u3073\u514D\u8CAC)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u5F53\u793E\u306F\u3001\u672C\u30B5\u30FC\u30D3\u30B9\u304C\u304A\u5BA2\u69D8\u306E\u7279\u5B9A\u306E\u76EE\u7684\u306B\u9069\u5408\u3059\u308B\u3053\u3068\u3001\u671F\u5F85\u3059\u308B\u6A5F\u80FD\u30FB\u5546\u54C1\u7684\u4FA1\u5024\u30FB\u6B63\u78BA\u6027\u30FB\u6709\u7528\u6027\u3092\u6709\u3059\u308B\u3053\u3068\u3001\u304A\u5BA2\u69D8\u306B\u3088\u308B\u672C\u30B5\u30FC\u30D3\u30B9\u306E\u5229\u7528\u304C\u304A\u5BA2\u69D8\u306B\u9069\u7528\u306E\u3042\u308B\u6CD5\u4EE4\u307E\u305F\u306F\u696D\u754C\u56E3\u4F53\u306E\u5185\u90E8\u898F\u5247\u7B49\u306B\u9069\u5408\u3059\u308B\u3053\u3068\u3001\u7D99\u7D9A\u7684\u306B\u5229\u7528\u3067\u304D\u308B\u3053\u3068\u3001\u53CA\u3073\u4E0D\u5177\u5408\u304C\u751F\u3058\u306A\u3044\u3053\u3068\u306B\u3064\u3044\u3066\u3001\u660E\u793A\u53C8\u306F\u9ED9\u793A\u3092\u554F\u308F\u305A\u4F55\u3089\u4FDD\u8A3C\u3059\u308B\u3082\u306E\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u5F53\u793E\u306F\u3001\u672C\u30B5\u30FC\u30D3\u30B9\u306B\u95A2\u3057\u3066\u304A\u5BA2\u69D8\u304C\u88AB\u3063\u305F\u640D\u5BB3\u306B\u3064\u304D\u3001\u904E\u53BB12\u30F6\u6708\u9593\u306B\u304A\u5BA2\u69D8\u304C\u5F53\u793E\u306B\u652F\u6255\u3063\u305F\u5BFE\u4FA1\u306E\u91D1\u984D\u3092\u8D85\u3048\u3066\u8CE0\u511F\u3059\u308B\u8CAC\u4EFB\u3092\u8CA0\u308F\u306A\u3044\u3082\u306E\u3068\u3057\u3001\u307E\u305F\u3001\u4ED8\u968F\u7684\u640D\u5BB3\u3001\u9593\u63A5\u640D\u5BB3\u3001\u7279\u5225\u640D\u5BB3\u3001\u5C06\u6765\u306E\u640D\u5BB3\u53CA\u3073\u9038\u5931\u5229\u76CA\u306B\u304B\u304B\u308B\u640D\u5BB3\u306B\u3064\u3044\u3066\u306F\u3001\u8CE0\u511F\u3059\u308B\u8CAC\u4EFB\u3092\u8CA0\u308F\u306A\u3044\u3082\u306E\u3068\u3057\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u672C\u30B5\u30FC\u30D3\u30B9\u307E\u305F\u306F\u5F53\u793E\u30A2\u30D7\u30EA\u306B\u95A2\u9023\u3057\u3066\u304A\u5BA2\u69D8\u3068\u4ED6\u306E\u304A\u5BA2\u69D8\u307E\u305F\u306F\u7B2C\u4E09\u8005\u3068\u306E\u9593\u306B\u304A\u3044\u3066\u751F\u3058\u305F\u53D6\u5F15\u3001\u9023\u7D61\u3001\u7D1B\u4E89\u7B49\u306B\u3064\u3044\u3066\u306F\u3001\u304A\u5BA2\u69D8\u304C\u81EA\u5DF1\u306E\u8CAC\u4EFB\u306B\u3088\u3063\u3066\u89E3\u6C7A\u3059\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, "\u7B2C14\u6761(\u79D8\u5BC6\u4FDD\u6301)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u304A\u5BA2\u69D8\u306F\u3001\u672C\u30B5\u30FC\u30D3\u30B9\u306B\u95A2\u9023\u3057\u3066\u5F53\u793E\u304C\u304A\u5BA2\u69D8\u306B\u5BFE\u3057\u3066\u79D8\u5BC6\u306B\u53D6\u6271\u3046\u3053\u3068\u3092\u6C42\u3081\u3066\u958B\u793A\u3057\u305F\u975E\u516C\u77E5\u306E\u60C5\u5831\u306B\u3064\u3044\u3066\u3001\u5F53\u793E\u306E\u4E8B\u524D\u306E\u66F8\u9762\u306B\u3088\u308B\u627F\u8AFE\u304C\u3042\u308B\u5834\u5408\u3092\u9664\u304D\u3001\u79D8\u5BC6\u306B\u53D6\u6271\u3046\u3082\u306E\u3068\u3057\u307E\u3059\u3002\u200D")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, "\u7B2C15\u6761(\u5229\u7528\u8005\u60C5\u5831\u306E\u53D6\u6271\u3044)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u5F53\u793E\u306B\u3088\u308B\u304A\u5BA2\u69D8\u306E\u5229\u7528\u8005\u60C5\u5831\u306E\u53D6\u6271\u3044\u306B\u3064\u3044\u3066\u306F\u3001\u5225\u9014\u672C\u30A2\u30D7\u30EA\u4E0A\u306B\u304A\u3051\u308B\u3001\u5F53\u793E\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\u306E\u5B9A\u3081\u306B\u3088\u308B\u3082\u306E\u3068\u3057\u3001\u304A\u5BA2\u69D8\u306F\u3053\u306E\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC\u306B\u5F93\u3063\u3066\u5F53\u793E\u304C\u304A\u5BA2\u69D8\u306E\u5229\u7528\u8005\u60C5\u5831\u3092\u53D6\u6271\u3046\u3053\u3068\u306B\u3064\u3044\u3066\u540C\u610F\u3059\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u5F53\u793E\u306F\u3001\u304A\u5BA2\u69D8\u304C\u5F53\u793E\u306B\u63D0\u4F9B\u3057\u305F\u60C5\u5831\u3001\u30C7\u30FC\u30BF\u7B49\u3092\u3001\u500B\u4EBA\u3092\u7279\u5B9A\u3067\u304D\u306A\u3044\u5F62\u3067\u306E\u7D71\u8A08\u7684\u306A\u60C5\u5831\u3068\u3057\u3066\u3001\u5F53\u793E\u306E\u88C1\u91CF\u3067\u3001\u5229\u7528\u53CA\u3073\u516C\u958B\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3082\u306E\u3068\u3057\u3001\u304A\u5BA2\u69D8\u306F\u3053\u308C\u306B\u540C\u610F\u3057\u53CD\u5BFE\u3057\u306A\u3044\u3082\u306E\u3068\u3057\u307E\u3059\u3002"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, "\u7B2C16\u6761(\u672C\u898F\u7D04\u7B49\u306E\u5909\u66F4)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u5F53\u793E\u306F\u3001\u5F53\u793E\u304C\u5FC5\u8981\u3068\u8A8D\u3081\u305F\u5834\u5408\u306F\u3001\u672C\u898F\u7D04\u3092\u5909\u66F4\u3067\u304D\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002\u672C\u898F\u7D04\u3092\u5909\u66F4\u3059\u308B\u5834\u5408\u3001\u5909\u66F4\u5F8C\u306E\u672C\u898F\u7D04\u306E\u65BD\u884C\u6642\u671F\u53CA\u3073\u5185\u5BB9\u3092\u5F53\u793E\u30A6\u30A7\u30D6\u30B5\u30A4\u30C8\u4E0A\u3067\u306E\u63B2\u793A\u305D\u306E\u4ED6\u306E\u9069\u5207\u306A\u65B9\u6CD5\u306B\u3088\u308A\u5468\u77E5\u3057\u3001\u307E\u305F\u306F\u304A\u5BA2\u69D8\u306B\u901A\u77E5\u3057\u307E\u3059\u3002\u4F46\u3057\u3001\u6CD5\u4EE4\u4E0A\u304A\u5BA2\u69D8\u306E\u540C\u610F\u304C\u5FC5\u8981\u3068\u306A\u308B\u3088\u3046\u306A\u5185\u5BB9\u306E\u5909\u66F4\u306E\u5834\u5408\u306F\u3001\u5F53\u793E\u6240\u5B9A\u306E\u65B9\u6CD5\u3067\u304A\u5BA2\u69D8\u306E\u540C\u610F\u3092\u5F97\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002\u200D")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, "\u7B2C17\u6761(\u9023\u7D61\uFF0F\u901A\u77E5)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u672C\u30B5\u30FC\u30D3\u30B9\u306B\u95A2\u3059\u308B\u554F\u3044\u5408\u308F\u305B\u305D\u306E\u4ED6\u304A\u5BA2\u69D8\u304B\u3089\u5F53\u793E\u306B\u5BFE\u3059\u308B\u9023\u7D61\u307E\u305F\u306F\u901A\u77E5\u3001\u53CA\u3073\u672C\u898F\u7D04\u306E\u5909\u66F4\u306B\u95A2\u3059\u308B\u901A\u77E5\u305D\u306E\u4ED6\u5F53\u793E\u304B\u3089\u304A\u5BA2\u69D8\u306B\u5BFE\u3059\u308B\u9023\u7D61\u307E\u305F\u306F\u901A\u77E5\u306F\u3001\u5F53\u793E\u306E\u5B9A\u3081\u308B\u65B9\u6CD5\u3067\u884C\u3046\u3082\u306E\u3068\u3057\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u5F53\u793E\u304C\u767B\u9332\u4E8B\u9805\u306B\u542B\u307E\u308C\u308B\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u305D\u306E\u4ED6\u306E\u9023\u7D61\u5148\u306B\u9023\u7D61\u307E\u305F\u306F\u901A\u77E5\u3092\u884C\u3063\u305F\u5834\u5408\u3001\u304A\u5BA2\u69D8\u306F\u5F53\u8A72\u9023\u7D61\u307E\u305F\u306F\u901A\u77E5\u3092\u53D7\u9818\u3057\u305F\u3082\u306E\u3068\u307F\u306A\u3057\u307E\u3059\u3002"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, "\u7B2C18\u6761(\u30B5\u30FC\u30D3\u30B9\u5229\u7528\u5951\u7D04\u4E0A\u306E\u5730\u4F4D\u306E\u8B72\u6E21\u7B49)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u304A\u5BA2\u69D8\u306F\u3001\u5F53\u793E\u306E\u66F8\u9762\u306B\u3088\u308B\u4E8B\u524D\u306E\u627F\u8AFE\u306A\u304F\u3001\u5229\u7528\u5951\u7D04\u4E0A\u306E\u5730\u4F4D\u307E\u305F\u306F\u672C\u898F\u7D04\u306B\u57FA\u3065\u304F\u6A29\u5229\u3082\u3057\u304F\u306F\u7FA9\u52D9\u306B\u3064\u304D\u3001\u7B2C\u4E09\u8005\u306B\u5BFE\u3057\u3001\u8B72\u6E21\u3001\u79FB\u8EE2\u3001\u62C5\u4FDD\u8A2D\u5B9A\u3001\u305D\u306E\u4ED6\u306E\u51E6\u5206\u3092\u3059\u308B\u3053\u3068\u306F\u3067\u304D\u307E\u305B\u3093\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u5F53\u793E\u306F\u672C\u30B5\u30FC\u30D3\u30B9\u306B\u304B\u304B\u308B\u4E8B\u696D\u3092\u4ED6\u793E\u306B\u8B72\u6E21\u3057\u305F\u5834\u5408\u306B\u306F\u3001\u5F53\u8A72\u4E8B\u696D\u8B72\u6E21\u306B\u4F34\u3044\u5229\u7528\u5951\u7D04\u4E0A\u306E\u5730\u4F4D\u3001\u672C\u898F\u7D04\u306B\u57FA\u3065\u304F\u6A29\u5229\u53CA\u3073\u7FA9\u52D9\u4E26\u3073\u306B\u304A\u5BA2\u69D8\u306E\u767B\u9332\u4E8B\u9805\u305D\u306E\u4ED6\u306E\u9867\u5BA2\u60C5\u5831\u3092\u5F53\u8A72\u4E8B\u696D\u8B72\u6E21\u306E\u8B72\u53D7\u4EBA\u306B\u8B72\u6E21\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u308B\u3082\u306E\u3068\u3057\u3001\u304A\u5BA2\u69D8\u306F\u3001\u304B\u304B\u308B\u8B72\u6E21\u306B\u3064\u304D\u672C\u9805\u306B\u304A\u3044\u3066\u4E88\u3081\u540C\u610F\u3057\u305F\u3082\u306E\u3068\u3057\u307E\u3059\u3002\u306A\u304A\u3001\u672C\u9805\u306B\u5B9A\u3081\u308B\u4E8B\u696D\u8B72\u6E21\u306B\u306F\u3001\u901A\u5E38\u306E\u4E8B\u696D\u8B72\u6E21\u306E\u307F\u306A\u3089\u305A\u3001\u4F1A\u793E\u5206\u5272\u305D\u306E\u4ED6\u4E8B\u696D\u304C\u79FB\u8EE2\u3059\u308B\u3042\u3089\u3086\u308B\u5834\u5408\u3092\u542B\u3080\u3082\u306E\u3068\u3057\u307E\u3059\u3002\xA0"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, "\u7B2C19\u6761(\u5206\u96E2\u53EF\u80FD\u6027)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "\u672C\u898F\u7D04\u306E\u3044\u305A\u308C\u304B\u306E\u6761\u9805\u307E\u305F\u306F\u305D\u306E\u4E00\u90E8\u304C\u3001\u6D88\u8CBB\u8005\u5951\u7D04\u6CD5\u305D\u306E\u4ED6\u306E\u6CD5\u4EE4\u7B49\u306B\u3088\u308A\u7121\u52B9\u307E\u305F\u306F\u57F7\u884C\u4E0D\u80FD\u3068\u5224\u65AD\u3055\u308C\u305F\u5834\u5408\u3067\u3042\u3063\u3066\u3082\u3001\u672C\u898F\u7D04\u306E\u6B8B\u308A\u306E\u898F\u5B9A\u53CA\u3073\u4E00\u90E8\u304C\u7121\u52B9\u307E\u305F\u306F\u57F7\u884C\u4E0D\u80FD\u3068\u5224\u65AD\u3055\u308C\u305F\u898F\u5B9A\u306E\u6B8B\u308A\u306E\u90E8\u5206\u306F\u3001\u7D99\u7D9A\u3057\u3066\u5B8C\u5168\u306B\u52B9\u529B\u3092\u6709\u3059\u308B\u3082\u306E\u3068\u3057\u307E\u3059\u3002\u200D")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, null, "\u7B2C20\u6761(\u6E96\u62E0\u6CD5\u53CA\u3073\u7BA1\u8F44\u88C1\u5224\u6240)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ol, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u672C\u898F\u7D04\u53CA\u3073\u30B5\u30FC\u30D3\u30B9\u5229\u7528\u5951\u7D04\u306E\u6E96\u62E0\u6CD5\u306F\u65E5\u672C\u6CD5\u3068\u3057\u307E\u3059\u3002"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, null, "\u672C\u898F\u7D04\u307E\u305F\u306F\u30B5\u30FC\u30D3\u30B9\u5229\u7528\u5951\u7D04\u306B\u8D77\u56E0\u3057\u3001\u307E\u305F\u306F\u95A2\u9023\u3059\u308B\u4E00\u5207\u306E\u7D1B\u4E89\u306B\u3064\u3044\u3066\u306F\u3001\u6771\u4EAC\u5730\u65B9\u88C1\u5224\u6240\u3092\u7B2C\u4E00\u5BE9\u306E\u5C02\u5C5E\u7684\u5408\u610F\u7BA1\u8F44\u88C1\u5224\u6240\u3068\u3057\u307E\u3059\u3002"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FirstContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Text, null, "2020\u5E742\u670810\u65E5 \u5236\u5B9A"))));
}
var Section = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.section(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n"])), components_atoms_Section_style__WEBPACK_IMPORTED_MODULE_4__[/* FullPageSectionStyle */ "a"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2 || (_templateObject2 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n"])), components_atoms_Wrapper_style__WEBPACK_IMPORTED_MODULE_3__[/* NormalWrapperStyle */ "b"]);
var FirstContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3 || (_templateObject3 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n"])), components_atoms_Container_style__WEBPACK_IMPORTED_MODULE_6__[/* NormalContainer */ "a"]);
var SecondContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject4 || (_templateObject4 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n"])), components_atoms_Container_style__WEBPACK_IMPORTED_MODULE_6__[/* SubContainer */ "b"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject5 || (_templateObject5 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n"])), components_atoms_Text_style__WEBPACK_IMPORTED_MODULE_5__[/* PageMainTitle */ "g"]);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject6 || (_templateObject6 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n"])), components_atoms_Text_style__WEBPACK_IMPORTED_MODULE_5__[/* ElementHeader */ "a"]);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p(_templateObject7 || (_templateObject7 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n"])), components_atoms_Text_style__WEBPACK_IMPORTED_MODULE_5__[/* NormalText */ "e"]);
var Li = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.li(_templateObject8 || (_templateObject8 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n"])), components_atoms_Text_style__WEBPACK_IMPORTED_MODULE_5__[/* NormalLi */ "c"]);
var Ol = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ol(_templateObject9 || (_templateObject9 = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", ";\n"])), components_atoms_Text_style__WEBPACK_IMPORTED_MODULE_5__[/* NormalOl */ "d"]);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(2);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(3);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: /Users/natsuki/workspace/00_RelyonTrip/test/CorporateSite/corporate-site/src/theme.js
var theme = __webpack_require__(1);

// EXTERNAL MODULE: /Users/natsuki/workspace/00_RelyonTrip/test/CorporateSite/corporate-site/src/components/Router.js
var Router = __webpack_require__(7);

// EXTERNAL MODULE: /Users/natsuki/workspace/00_RelyonTrip/test/CorporateSite/corporate-site/src/data.js
var data = __webpack_require__(23);

// EXTERNAL MODULE: /Users/natsuki/workspace/00_RelyonTrip/test/CorporateSite/corporate-site/src/components/atoms/Wrapper/style.js
var style = __webpack_require__(6);

// EXTERNAL MODULE: /Users/natsuki/workspace/00_RelyonTrip/test/CorporateSite/corporate-site/src/components/atoms/Section/style.js
var Section_style = __webpack_require__(5);

// EXTERNAL MODULE: /Users/natsuki/workspace/00_RelyonTrip/test/CorporateSite/corporate-site/src/components/molecules/NewsItem.js
var NewsItem = __webpack_require__(24);

// EXTERNAL MODULE: /Users/natsuki/workspace/00_RelyonTrip/test/CorporateSite/corporate-site/src/components/atoms/Text/style.js
var Text_style = __webpack_require__(4);

// CONCATENATED MODULE: /Users/natsuki/workspace/00_RelyonTrip/test/CorporateSite/corporate-site/src/components/organisms/NewsSection.js


var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;










var outputNews = data["a" /* newsData */].filter(function (output) {
  return output.target == "all" || "company";
});
var NewsSection_NewsSection = function NewsSection(props) {
  return /*#__PURE__*/external_react_default.a.createElement(Section, null, /*#__PURE__*/external_react_default.a.createElement(Wrapper, null, /*#__PURE__*/external_react_default.a.createElement(Header, null, "News"), outputNews.slice(0, 4).map(function (body, key) {
    return /*#__PURE__*/external_react_default.a.createElement(NewsItem["a" /* NewsItem */], {
      body: body,
      key: key
    });
  }), /*#__PURE__*/external_react_default.a.createElement(BottomWrapper, null, /*#__PURE__*/external_react_default.a.createElement(MoreButton, null, /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/news"
  }, /*#__PURE__*/external_react_default.a.createElement("p", null, "View All"), /*#__PURE__*/external_react_default.a.createElement("img", {
    src: "/img/icon-arrow-right.png"
  }))))));
};
var Section = external_styled_components_default.a.section(_templateObject || (_templateObject = taggedTemplateLiteral_default()(["\n    ", ";\n    background-color: ", ";\n"])), Section_style["b" /* InnerSectionStyle */], theme["a" /* default */].color.black);
var Wrapper = external_styled_components_default.a.div(_templateObject2 || (_templateObject2 = taggedTemplateLiteral_default()(["\n    ", "\n"])), style["b" /* NormalWrapperStyle */]);
var Header = external_styled_components_default.a.h1(_templateObject3 || (_templateObject3 = taggedTemplateLiteral_default()(["\n    ", ";\n    color: ", ";\n    margin-bottom: ", ";\n"])), Text_style["h" /* SectionHeader */], theme["a" /* default */].color.grey400, theme["a" /* default */].space.micro);
var BottomWrapper = external_styled_components_default.a.div(_templateObject4 || (_templateObject4 = taggedTemplateLiteral_default()(["\n    display: flex;\n    justify-content: flex-end;\n    width: 100%;\n    padding-top: 2rem;\n"])));
var MoreButton = external_styled_components_default.a.div(_templateObject5 || (_templateObject5 = taggedTemplateLiteral_default()(["\na {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    border-bottom: solid 1px ", ";\n    p {\n        color: ", ";\n        font-family: 'Hiragino Mincho Pro';\n        letter-spacing: 0.1rem;\n        font-size: ", ";\n        font-weight: ", ";\n        margin-right: ", ";\n    }\n    img {\n        width: 1.2rem;\n    }\n}"])), theme["a" /* default */].color.white, theme["a" /* default */].color.white, theme["a" /* default */].font.large, theme["a" /* default */].weight.normal, theme["a" /* default */].space.micro);
// EXTERNAL MODULE: /Users/natsuki/workspace/00_RelyonTrip/test/CorporateSite/corporate-site/src/components/atoms/AppleButton.js
var AppleButton = __webpack_require__(17);

// EXTERNAL MODULE: /Users/natsuki/workspace/00_RelyonTrip/test/CorporateSite/corporate-site/src/components/atoms/GooglePlayButton.js
var GooglePlayButton = __webpack_require__(18);

// CONCATENATED MODULE: /Users/natsuki/workspace/00_RelyonTrip/test/CorporateSite/corporate-site/src/components/organisms/ProductSection.js


var ProductSection_templateObject, ProductSection_templateObject2, ProductSection_templateObject3, ProductSection_templateObject4, ProductSection_templateObject5, _templateObject6, _templateObject7, _templateObject8;










var ProductSection_ProductSection = function ProductSection(props) {
  return /*#__PURE__*/external_react_default.a.createElement(ProductSection_Section, null, /*#__PURE__*/external_react_default.a.createElement(ProductSection_Wrapper, null, /*#__PURE__*/external_react_default.a.createElement(ProductSection_Header, null, "Product"), /*#__PURE__*/external_react_default.a.createElement(Text, null, "\u89B3\u5149\u30FB\u98F2\u98DF\u7CFB\u30A2\u30D7\u30EA\u300E Sassy (\u30B5\u30C3\u30B7\u30FC) \u300F\u3068", /*#__PURE__*/external_react_default.a.createElement("br", null), "\u300E Caviia (\u30AD\u30E3\u30D3\u30A2) \u300F\u3092\u958B\u767A\u3057\u3066\u3044\u307E\u3059\u3002"), /*#__PURE__*/external_react_default.a.createElement(Container, null, /*#__PURE__*/external_react_default.a.createElement(Item, null, /*#__PURE__*/external_react_default.a.createElement(Image, null, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: "/img/thumbnail-sassy.png"
  }), /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/sassy"
  })), /*#__PURE__*/external_react_default.a.createElement(StoreButtonsContainer, null, /*#__PURE__*/external_react_default.a.createElement(AppleButton["a" /* AppleButton */], {
    href: "https://apps.apple.com/jp/app/id1496112424"
  }), /*#__PURE__*/external_react_default.a.createElement(GooglePlayButton["a" /* GooglePlayButton */], {
    href: "https://play.google.com/store/apps/details?id=com.relyontrip.sassy&referrer=utm_source%3Dsassy-lp%26anid%3Dadmob"
  }))), /*#__PURE__*/external_react_default.a.createElement(Item, null, /*#__PURE__*/external_react_default.a.createElement(Image, null, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: "/img/thumbnail-caviia.png"
  }), /*#__PURE__*/external_react_default.a.createElement(Router["a" /* Link */], {
    to: ""
  })), /*#__PURE__*/external_react_default.a.createElement(StoreButtonsContainer, null, /*#__PURE__*/external_react_default.a.createElement(AppleButton["a" /* AppleButton */], null), /*#__PURE__*/external_react_default.a.createElement(GooglePlayButton["a" /* GooglePlayButton */], null))))));
};
var ProductSection_Section = external_styled_components_default.a.section(ProductSection_templateObject || (ProductSection_templateObject = taggedTemplateLiteral_default()(["\n    ", ";\n    background-color: ", ";\n"])), Section_style["b" /* InnerSectionStyle */], theme["a" /* default */].color.white);
var ProductSection_Wrapper = external_styled_components_default.a.div(ProductSection_templateObject2 || (ProductSection_templateObject2 = taggedTemplateLiteral_default()(["\n    ", "\n"])), style["b" /* NormalWrapperStyle */]);
var ProductSection_Header = external_styled_components_default.a.h1(ProductSection_templateObject3 || (ProductSection_templateObject3 = taggedTemplateLiteral_default()(["\n    ", ";\n    color: ", ";\n    margin-bottom: ", ";\n"])), Text_style["h" /* SectionHeader */], theme["a" /* default */].color.grey900, theme["a" /* default */].space.micro);
var Text = external_styled_components_default.a.p(ProductSection_templateObject4 || (ProductSection_templateObject4 = taggedTemplateLiteral_default()(["\n    color: ", ";\n    margin: 0;\n    text-align: center;\n    br {\n        display: none;\n        ", " {\n            display: inline;\n        }\n    }\n"])), theme["a" /* default */].color.gre900, theme["a" /* default */].mediaQuery.mobile);
var Container = external_styled_components_default.a.div(ProductSection_templateObject5 || (ProductSection_templateObject5 = taggedTemplateLiteral_default()(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: ", " 0;\n    ", " {\n        flex-direction: column;\n        >div:first-child {\n            padding-bottom: ", ";\n        }\n    }\n    ", " {\n        >div:first-child {\n            margin-right: ", ";\n        }\n    }\n"])), theme["a" /* default */].space.small, theme["a" /* default */].mediaQuery.mobile, theme["a" /* default */].space.small, theme["a" /* default */].mediaQuery.desktop, theme["a" /* default */].space.medium);
var StoreButtonsContainer = external_styled_components_default.a.div(_templateObject6 || (_templateObject6 = taggedTemplateLiteral_default()(["\n    display: flex;\n    flex-direction: row;\n"])));
var Item = external_styled_components_default.a.div(_templateObject7 || (_templateObject7 = taggedTemplateLiteral_default()(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 50%;\n    ", " {\n        width: 100%;\n    }\n"])), theme["a" /* default */].mediaQuery.mobile);
var Image = external_styled_components_default.a.div(_templateObject8 || (_templateObject8 = taggedTemplateLiteral_default()(["\n    position: relative;\n    width: 100%;\n    margin-bottom: ", ";\n    img {\n        width: 100%;\n    }\n    a {\n        display: block;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n"])), theme["a" /* default */].space.micro);
// CONCATENATED MODULE: /Users/natsuki/workspace/00_RelyonTrip/test/CorporateSite/corporate-site/src/components/organisms/CompanySection.js


var CompanySection_templateObject, CompanySection_templateObject2, CompanySection_templateObject3, CompanySection_templateObject4, CompanySection_templateObject5, CompanySection_templateObject6, CompanySection_templateObject7, CompanySection_templateObject8;







var CompanySection_CompanySection = function CompanySection(props) {
  return /*#__PURE__*/external_react_default.a.createElement(CompanySection_Section, null, /*#__PURE__*/external_react_default.a.createElement(CompanySection_Wrapper, null, /*#__PURE__*/external_react_default.a.createElement(Element, null, /*#__PURE__*/external_react_default.a.createElement(CompanySection_Header, null, "Mission"), /*#__PURE__*/external_react_default.a.createElement(Message, null, "\u4EBA\u3068\u4EBA\u304C\u3082\u3063\u3068\u3064\u306A\u304C\u308C\u308B\u4E16\u754C\u3092\u3064\u304F\u308B")), /*#__PURE__*/external_react_default.a.createElement(Element, null, /*#__PURE__*/external_react_default.a.createElement(CompanySection_Header, null, "Vision"), /*#__PURE__*/external_react_default.a.createElement(Message, null, "\u3064\u306A\u304C\u308A\u306E\u4E2D\u306E\u308F\u305A\u3089\u308F\u3057\u3055\u3092", /*#__PURE__*/external_react_default.a.createElement("br", null), "IT\u3067\u89E3\u6C7A\u3059\u308B")), /*#__PURE__*/external_react_default.a.createElement(Element, null, /*#__PURE__*/external_react_default.a.createElement(CompanySection_Header, null, "Company"), /*#__PURE__*/external_react_default.a.createElement(Row, null, /*#__PURE__*/external_react_default.a.createElement(Heading, null, "\u4F1A\u793E\u540D"), /*#__PURE__*/external_react_default.a.createElement(Body, null, "\u682A\u5F0F\u4F1A\u793ERelyonTrip\uFF08\u30EA\u30EA\u30AA\u30F3\u30C8\u30EA\u30C3\u30D7\uFF09")), /*#__PURE__*/external_react_default.a.createElement(Row, null, /*#__PURE__*/external_react_default.a.createElement(Heading, null, "\u4EE3\u8868\u8005"), /*#__PURE__*/external_react_default.a.createElement(Body, null, "\u4EE3\u8868\u53D6\u7DE0\u5F79CEO \u897F\u6751 \u5F70\u4EC1")), /*#__PURE__*/external_react_default.a.createElement(Row, null, /*#__PURE__*/external_react_default.a.createElement(Heading, null, "\u8A2D\u7ACB\u65E5"), /*#__PURE__*/external_react_default.a.createElement(Body, null, "2019\u5E74\uFF08\u4EE4\u548C\u5143\u5E74\uFF0910\u67081\u65E5")), /*#__PURE__*/external_react_default.a.createElement(Row, null, /*#__PURE__*/external_react_default.a.createElement(Heading, null, "\u6240\u5728\u5730"), /*#__PURE__*/external_react_default.a.createElement(Body, null, "\u6771\u4EAC\u90FD\u56FD\u5206\u5BFA\u5E02\u6238\u50093\u4E01\u76EE30\u756A11\u53F7")), /*#__PURE__*/external_react_default.a.createElement(Row, null, /*#__PURE__*/external_react_default.a.createElement(Heading, null, "\u4E8B\u696D\u5185\u5BB9"), /*#__PURE__*/external_react_default.a.createElement(Body, null, "\u30B9\u30DD\u30C3\u30C8\u76F4\u611F\u578B\u30A2\u30D7\u30EA\u300CSassy\u300D\u3001\u4EBA\u751FNo.1\u98F2\u98DF\u5E97SNS\u300CCaviia\u300D\u306E\u4F01\u753B\u30FB\u958B\u767A\u30FB\u904B\u55B6\u3001\u30DE\u30A4\u30AF\u30ED\u30C4\u30FC\u30EA\u30BA\u30E0\u306E\u4F01\u753B\u30FB\u30B3\u30F3\u30B5\u30EB\u30C6\u30A3\u30F3\u30B0 \u7B49")))));
};
var CompanySection_Section = external_styled_components_default.a.section(CompanySection_templateObject || (CompanySection_templateObject = taggedTemplateLiteral_default()(["\n    ", "\n    background-color: ", ";\n"])), Section_style["b" /* InnerSectionStyle */], theme["a" /* default */].color.black);
var CompanySection_Wrapper = external_styled_components_default.a.div(CompanySection_templateObject2 || (CompanySection_templateObject2 = taggedTemplateLiteral_default()(["\n    ", ";\n"])), style["b" /* NormalWrapperStyle */]);
var CompanySection_Header = external_styled_components_default.a.h1(CompanySection_templateObject3 || (CompanySection_templateObject3 = taggedTemplateLiteral_default()(["\n    ", ";\n    color: ", ";\n    margin-bottom: ", ";\n"])), Text_style["h" /* SectionHeader */], theme["a" /* default */].color.grey400, theme["a" /* default */].space.micro);
var Message = external_styled_components_default.a.div(CompanySection_templateObject4 || (CompanySection_templateObject4 = taggedTemplateLiteral_default()(["\n    color: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n    letter-spacing: ", ";\n    text-align: center;\n    br {\n        display: none;\n        ", " {\n            display: inline;\n        }\n    }\n"])), theme["a" /* default */].color.grey200, theme["a" /* default */].font.large, theme["a" /* default */].weight.normal, theme["a" /* default */].letterSpacing.mediumWide, theme["a" /* default */].mediaQuery.mobile);
var Element = external_styled_components_default.a.div(CompanySection_templateObject5 || (CompanySection_templateObject5 = taggedTemplateLiteral_default()(["\n    margin-bottom: ", ";\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n"])), theme["a" /* default */].space.small);
var Heading = external_styled_components_default.a.div(CompanySection_templateObject6 || (CompanySection_templateObject6 = taggedTemplateLiteral_default()(["\n    font-size: ", ";\n    color: ", ";\n    flex-basis: 140px;\n"])), theme["a" /* default */].font.medium, theme["a" /* default */].color.grey700);
var Body = external_styled_components_default.a.div(CompanySection_templateObject7 || (CompanySection_templateObject7 = taggedTemplateLiteral_default()(["\n    font-size: ", ";\n    color: ", ";\n    flex-basis: auto;\n    width: 100%;\n"])), theme["a" /* default */].font.medium, theme["a" /* default */].color.grey400);
var Row = external_styled_components_default.a.div(CompanySection_templateObject8 || (CompanySection_templateObject8 = taggedTemplateLiteral_default()(["\n    display: flex;\n    width: 100%;\n    padding: ", " 0;\n"])), theme["a" /* default */].space.micro);
// CONCATENATED MODULE: /Users/natsuki/workspace/00_RelyonTrip/test/CorporateSite/corporate-site/src/components/organisms/ContactSection.js


var ContactSection_templateObject, ContactSection_templateObject2, ContactSection_templateObject3, ContactSection_templateObject4;







var ContactSection_ContactSection = function ContactSection(props) {
  return /*#__PURE__*/external_react_default.a.createElement(ContactSection_Section, null, /*#__PURE__*/external_react_default.a.createElement(ContactSection_Wrapper, null, /*#__PURE__*/external_react_default.a.createElement(ContactSection_Header, null, "Contact"), /*#__PURE__*/external_react_default.a.createElement(Button, null, /*#__PURE__*/external_react_default.a.createElement("a", {
    href: "https://docs.google.com/forms/d/e/1FAIpQLSf0hMiTOxYSTDbsYl3uevU_f9uhFxnL4-9d2uXbQPAmSNo8zQ/viewform",
    target: "_blank"
  }, "\u304A\u554F\u3044\u5408\u308F\u305B\u306F\u3053\u3061\u3089"))));
};
var ContactSection_Section = external_styled_components_default.a.section(ContactSection_templateObject || (ContactSection_templateObject = taggedTemplateLiteral_default()(["\n    ", ";\n    background-color: ", ";\n"])), Section_style["b" /* InnerSectionStyle */], theme["a" /* default */].color.goldDark);
var ContactSection_Wrapper = external_styled_components_default.a.div(ContactSection_templateObject2 || (ContactSection_templateObject2 = taggedTemplateLiteral_default()(["\n    ", ";\n"])), style["b" /* NormalWrapperStyle */]);
var ContactSection_Header = external_styled_components_default.a.h1(ContactSection_templateObject3 || (ContactSection_templateObject3 = taggedTemplateLiteral_default()(["\n    ", ";\n    color: ", ";\n    margin-bottom: ", ";\n"])), Text_style["h" /* SectionHeader */], theme["a" /* default */].color.grey400, theme["a" /* default */].space.tiny);
var Button = external_styled_components_default.a.button(ContactSection_templateObject4 || (ContactSection_templateObject4 = taggedTemplateLiteral_default()(["\n    background-color: rgba(0, 0, 0, 0.4);\n    border: 1px solid ", ";\n    border-radius: 8px;\n    a {\n        display: block;\n        padding: ", " ", ";\n        color: ", ";\n        font-size: ", ";\n        font-weight: ", ";\n        font-family: 'Hiragino Mincho Pro';\n        ", " {\n            padding: ", " ", ";\n        }\n    }\n    &:hover {\n        background-color: rgba(0, 0, 0, 0.2);\n        cursor: pointer;\n    }\n"])), theme["a" /* default */].color.grey700, theme["a" /* default */].space.tiny, theme["a" /* default */].space.medium, theme["a" /* default */].color.white, theme["a" /* default */].font.large, theme["a" /* default */].weight.normal, theme["a" /* default */].mediaQuery.mobile, theme["a" /* default */].space.tiny, theme["a" /* default */].space.tiny);
// EXTERNAL MODULE: /Users/natsuki/workspace/00_RelyonTrip/test/CorporateSite/corporate-site/src/meta.js
var meta = __webpack_require__(10);

// CONCATENATED MODULE: /Users/natsuki/workspace/00_RelyonTrip/test/CorporateSite/corporate-site/src/pages/index.js


var pages_templateObject, pages_templateObject2, pages_templateObject3;









/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(meta["a" /* default */], {
    description: "\u682A\u5F0F\u4F1A\u793ERelyonTrip\uFF08\u30EA\u30EA\u30AA\u30F3\u30C8\u30EA\u30C3\u30D7\uFF09\u306E\u30B3\u30FC\u30DD\u30EC\u30FC\u30C8\u30B5\u30A4\u30C8\u3067\u3059\u3002",
    url: "https://relyontrip.com"
  }), /*#__PURE__*/external_react_default.a.createElement(MainVisual, null, /*#__PURE__*/external_react_default.a.createElement(MainMovie, {
    autoPlay: "true",
    loop: "true",
    muted: "true",
    playsInline: true
  }, /*#__PURE__*/external_react_default.a.createElement("source", {
    src: "/movie/top.mp4",
    type: "video/mp4"
  }))), /*#__PURE__*/external_react_default.a.createElement(Contents, null, /*#__PURE__*/external_react_default.a.createElement(ProductSection_ProductSection, null), /*#__PURE__*/external_react_default.a.createElement(NewsSection_NewsSection, null), /*#__PURE__*/external_react_default.a.createElement(CompanySection_CompanySection, null), /*#__PURE__*/external_react_default.a.createElement(ContactSection_ContactSection, null)));
});
var Contents = external_styled_components_default.a.div(pages_templateObject || (pages_templateObject = taggedTemplateLiteral_default()(["\n  margin-top: 38%;\n  ", " {\n    margin-top: 56%;\n  }\n"])), theme["a" /* default */].mediaQuery.mobile);
var MainVisual = external_styled_components_default.a.div(pages_templateObject2 || (pages_templateObject2 = taggedTemplateLiteral_default()(["\n  position: fixed;\n  width: 100%;\n  height: 540px;\n  z-index: -1;\n  top: 0;\n  background-color: ", ";\n"])), theme["a" /* default */].color.black);
var MainMovie = external_styled_components_default.a.video(pages_templateObject3 || (pages_templateObject3 = taggedTemplateLiteral_default()(["\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  ", " {\n    height: auto;\n  }\n"])), theme["a" /* default */].mediaQuery.mobile);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(13);

var _router = __webpack_require__(15);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return /*#__PURE__*/_react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren =
        /*#__PURE__*/
        // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), /*#__PURE__*/_react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? /*#__PURE__*/_react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (
          /*#__PURE__*/
          // Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return /*#__PURE__*/_react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(47);
__webpack_require__(49);
module.exports = __webpack_require__(56);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(48)["default"];

var _require = __webpack_require__(29),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (false) {}

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "__react_static_root__/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _react_static_root_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "__react_static_root__/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "__react_static_root__/",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(29),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(50),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (false) {}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var react_universal_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_universal_component__WEBPACK_IMPORTED_MODULE_3__);


















Object(react_universal_component__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/404 */).then(__webpack_require__.bind(null, 36))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(36);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/404";
  }
}), universalOptions);
t_0.template = '__react_static_root__/src/pages/404.js';
var t_1 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/copyright.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/copyright */).then(__webpack_require__.bind(null, 37))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/copyright.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(37);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/copyright";
  }
}), universalOptions);
t_1.template = '__react_static_root__/src/pages/copyright.js';
var t_2 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/index */).then(__webpack_require__.bind(null, 43))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(43);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/index";
  }
}), universalOptions);
t_2.template = '__react_static_root__/src/pages/index.js';
var t_3 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/link.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/link */).then(__webpack_require__.bind(null, 38))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/link.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(38);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/link";
  }
}), universalOptions);
t_3.template = '__react_static_root__/src/pages/link.js';
var t_4 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/news.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/news */).then(__webpack_require__.bind(null, 39))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/news.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(39);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/news";
  }
}), universalOptions);
t_4.template = '__react_static_root__/src/pages/news.js';
var t_5 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/privacy-policy.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/privacy-policy */).then(__webpack_require__.bind(null, 40))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/privacy-policy.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(40);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/privacy-policy";
  }
}), universalOptions);
t_5.template = '__react_static_root__/src/pages/privacy-policy.js';
var t_6 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/sassy.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/sassy */).then(__webpack_require__.bind(null, 41))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/sassy.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(41);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/sassy";
  }
}), universalOptions);
t_6.template = '__react_static_root__/src/pages/sassy.js';
var t_7 = react_universal_component__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "__react_static_root__/src/pages/terms.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | __react_static_root__/src/pages/terms */).then(__webpack_require__.bind(null, 42))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '__react_static_root__/src/pages/terms.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(42);
  },
  chunkName: function chunkName() {
    return "__react_static_root__/src/pages/terms";
  }
}), universalOptions);
t_7.template = '__react_static_root__/src/pages/terms.js'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '__react_static_root__/src/pages/404.js': t_0,
  '__react_static_root__/src/pages/copyright.js': t_1,
  '__react_static_root__/src/pages/index.js': t_2,
  '__react_static_root__/src/pages/link.js': t_3,
  '__react_static_root__/src/pages/news.js': t_4,
  '__react_static_root__/src/pages/privacy-policy.js': t_5,
  '__react_static_root__/src/pages/sassy.js': t_6,
  '__react_static_root__/src/pages/terms.js': t_7
}); // Not Found Template

var notFoundTemplate = "__react_static_root__/src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(27);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 16,
	"./": 16,
	"./index": 16,
	"./index.js": 16
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 53;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(26);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _context = __webpack_require__(31);

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks(props) {
    _classCallCheck(this, ReportChunks);

    var _this = _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).call(this, props));

    _this.state = {
      report: props.report
    };
    return _this;
  }

  _createClass(ReportChunks, [{
    key: 'render',
    value: function render() {
      return _react2["default"].createElement(_context2["default"].Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(32);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(11);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(33);

var _interopRequireWildcard = __webpack_require__(34);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(57);

var _Suspense = _interopRequireDefault(__webpack_require__(58));
/* eslint-disable import/no-dynamic-require */
// Override the suspense module to be our own
// This is expected to break when using preact
// In order to make it work with preact 10, use `patch-package` to remove those 2 lines
// Reference: https://github.com/react-static/react-static/pull/1500


React.Suspense = _Suspense["default"];
React["default"].Suspense = _Suspense["default"];

var App = __webpack_require__(61)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return /*#__PURE__*/React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, /*#__PURE__*/React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("/Users/natsuki/workspace/00_RelyonTrip/test/CorporateSite/corporate-site/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(34);

var _interopRequireDefault = __webpack_require__(33);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(59));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(60));

var React = _interopRequireWildcard(__webpack_require__(0));

var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? /*#__PURE__*/React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : /*#__PURE__*/React.createElement(React.Fragment, {
    key: key
  }, children);
}

var _default = Suspense;
exports["default"] = _default;

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(62)(module)))

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// Module
exports.push([module.i, "* {\n  scroll-behavior: smooth;\n}\n\nhtml {\n  font-size: 16px;\n}\n\nbody {\n  font-family: '游明朝','Yu Mincho',YuMincho,'Hiragino Mincho Pro','ヒラギノ明朝 Pro W3',serif;\n  font-weight: 500;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n  color: #108db8;\n  font-weight: bold;\n}\n\nimg {\n  max-width: 100%;\n}\n\nnav {\n  width: 100%;\n  background: #108db8;\n}\n\nnav a {\n  color: white;\n  padding: 1rem;\n  display: inline-block;\n}\n\n.content {\n  padding: 1rem;\n}\n", ""]);



/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// Module
exports.push([module.i, "/* TODO: 当ファイルの削除 */\n\nmain {\n  padding: 3.125rem 0;\n  background-color: #1B1D21;\n}\n\nmain p {\n  font-size: 1rem;\n  font-family: \"ヒラギノ角ゴ ProN W3\", \"Hiragino Kaku Gothic ProN\", \"メイリオ\", \"Meiryo\", \"verdana\", serif;\n}\n\nmain h1 {\n  font-family: \"ヒラギノ角ゴ ProN W3\", \"Hiragino Kaku Gothic ProN\", \"メイリオ\", \"Meiryo\", \"verdana\", serif;\n}\n\nmain h2 {\n  font-family: \"ヒラギノ角ゴ ProN W3\", \"Hiragino Kaku Gothic ProN\", \"メイリオ\", \"Meiryo\", \"verdana\", serif;\n}\n\nmain h3 {\n  font-family: \"ヒラギノ角ゴ ProN W3\", \"Hiragino Kaku Gothic ProN\", \"メイリオ\", \"Meiryo\", \"verdana\", serif;\n}\n\nmain h4 {\n  font-family: \"ヒラギノ角ゴ ProN W3\", \"Hiragino Kaku Gothic ProN\", \"メイリオ\", \"Meiryo\", \"verdana\", serif;\n}\n\nmain div {\n  font-family: \"ヒラギノ角ゴ ProN W3\", \"Hiragino Kaku Gothic ProN\", \"メイリオ\", \"Meiryo\", \"verdana\", serif;\n}\n\nmain li {\n  font-family: \"ヒラギノ角ゴ ProN W3\", \"Hiragino Kaku Gothic ProN\", \"メイリオ\", \"Meiryo\", \"verdana\", serif;\n}\n\n#sassy-header {\n  display: none;\n  position: fixed;\n  z-index: 9999;\n  background-color: #1B1D21;\n  width: 100%;\n  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.2);\n}\n\n#sassy-header .wrapper {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n@media (min-width: 1024px) {\n  #sassy-header .wrapper {\n    padding: 0 2.5rem;\n  }\n}\n\n@media (max-width: 1024px) {\n  #sassy-header .wrapper {\n    padding: 0 1.25rem;\n  }\n}\n\n#sassy-header .logo {\n  width: 100px;\n  height: auto;\n  padding: 0.75rem 0;\n}\n\n.hero-area-wrapper {\n  background: #2B2D30;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 3.125rem 0;\n}\n\n@media (max-width: 1024px) {\n  .hero-area-wrapper {\n    padding: 1.875rem 0 3.125rem 0;\n  }\n}\n\n.hero-area-wrapper .app-download-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  padding: 1.25rem 0 1.875rem 0;\n}\n\n.hero-area-wrapper .app-download-container a + a {\n  margin-left: 0.9375rem;\n}\n\n.hero-area-wrapper .app-download-container img {\n  width: 100%;\n}\n\n.hero-area-concept-message {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0rem 0;\n}\n\n.hero-area-concept-message h1 {\n  font-size: 2.5rem;\n  margin: 0;\n  line-height: 1.2;\n  font-weight: 700;\n  color: #FF789B;\n}\n\n@media (max-width: 1024px) {\n  .hero-area-concept-message h1 {\n    font-size: 1.875rem;\n    padding-bottom: 0.625rem;\n  }\n}\n\n.hero-area-concept-message h2 {\n  font-size: 1.25rem;\n  margin: 0;\n  padding: 0.875rem;\n  line-height: 1;\n  font-weight: 400;\n  color: #FFFFFF;\n}\n\n@media (max-width: 1024px) {\n  .hero-area-concept-message h2 {\n    font-size: 1.25rem;\n    line-height: 0.6;\n  }\n}\n\n.hero-area-concept-message h3 {\n  font-size: 3.125rem;\n  margin: 0;\n  line-height: 1.4;\n  font-weight: 700;\n  color: #FF789B;\n}\n\n@media (max-width: 1024px) {\n  .hero-area-concept-message h3 {\n    font-size: 1.875rem;\n    line-height: 1.2;\n    padding-top: 0.625rem;\n  }\n}\n\n.mockup {\n  width: 70%;\n  height: auto;\n  max-width: 400px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  margin: 0 auto;\n}\n\n@media (max-width: 1024px) {\n  .mockup {\n    height: 100%;\n    align-items: center;\n  }\n}\n\n.logo {\n  padding-bottom: 0.625rem;\n}\n\n.avatar-container {\n  display: flex;\n  width: 80%;\n  max-width: 400px;\n  margin: 0 auto;\n  justify-content: center;\n}\n\n@media (max-width: 1024px) {\n  .avatar-container {\n    width: 70%;\n  }\n}\n\n.avatar-item img {\n  width: 100%;\n  height: auto;\n}\n\n.avatar-item + .avatar-item {\n  padding-left: 0.875rem;\n}\n\n@media (max-width: 1024px) {\n  .avatar-item + .avatar-item {\n    padding-left: 0.625rem;\n  }\n}\n\n.app-description {\n  padding: 2.5rem 0;\n}\n\n.app-description .contents-inner {\n  max-width: 800px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\n@media (min-width: 1024px) {\n  .app-description .contents-inner {\n    padding: 0 2.5rem;\n  }\n}\n\n@media (max-width: 1024px) {\n  .app-description .contents-inner {\n    padding: 0 1.25rem;\n  }\n}\n\n.app-description .contents-inner h2 {\n  font-size: 2rem;\n  color: #D1D2D3;\n  margin: 0;\n  padding: 0.625rem 0;\n}\n\n.app-description .contents-inner h2 span {\n  color: #FF789B;\n}\n\n.app-description .contents-inner div {\n  padding: 0.625rem 0;\n}\n\n.app-description .contents-inner div p {\n  font-size: 1rem;\n  color: #ABABAD;\n  margin: 0;\n  line-height: 1.6;\n  padding: 0.125rem 0;\n}\n\n@media (max-width: 1024px) {\n  .app-description .contents-inner div p {\n    font-size: 0.875rem;\n  }\n}\n\n.app-description .contents-inner .app-download-container {\n  margin-top: 1.5rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n}\n\n.app-description .contents-inner .app-download-container a + a {\n  margin-left: 0.375rem;\n}\n\n.app-description .contents-inner .app-download-container img {\n  width: 100%;\n}\n\n.youtube-container {\n  text-align: center;\n  position: relative;\n  width: 100%;\n  max-width: 560px;\n  margin: 0.625rem auto;\n}\n\n.youtube-container::before {\n  content: \"\";\n  display: block;\n  padding-top: 56.25%;\n}\n\n.youtube-container iframe {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.highlight-feature {\n  background-color: #2B2D30;\n  color: #D1D2D3;\n  padding: 5rem 0;\n}\n\n.highlight-feature .contents-inner {\n  max-width: 800px;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n@media (min-width: 1024px) {\n  .highlight-feature .contents-inner {\n    padding: 0 2.5rem;\n  }\n}\n\n@media (max-width: 1024px) {\n  .highlight-feature .contents-inner {\n    padding: 0 1.25rem;\n  }\n}\n\n.highlight-feature .contents-inner h2 {\n  font-size: 2rem;\n  color: #FFFFFF;\n  text-align: center;\n  margin: 0;\n}\n\n@media (max-width: 1024px) {\n  .highlight-feature .contents-inner h2 {\n    font-size: 1.5rem;\n  }\n}\n\n.highlight-feature .contents-inner .about-dj {\n  padding: 0 0 1.25rem 0;\n}\n\n.highlight-feature .contents-inner .card {\n  padding: 0 0 3.75rem 0;\n}\n\n.highlight-feature .contents-inner .card img {\n  border-radius: 1.5rem;\n  width: 100%;\n  height: auto;\n}\n\n@media (max-width: 1024px) {\n  .highlight-feature .contents-inner .card img {\n    border-radius: 0.875rem;\n  }\n}\n\n.highlight-feature .contents-inner h3 {\n  font-size: 1.875rem;\n  color: #ABABAD;\n  text-align: center;\n  margin: 0;\n  padding: 0 0 1rem 0;\n}\n\n@media (max-width: 1024px) {\n  .highlight-feature .contents-inner h3 {\n    font-size: 1.25rem;\n  }\n}\n\n.highlight-feature .contents-inner .playlist-sample {\n  padding: 0 0 1.25rem 0;\n}\n\n.highlight-feature .contents-inner .playlist-sample img {\n  border-radius: 1.5rem;\n  width: 100%;\n  height: auto;\n}\n\n@media (max-width: 1024px) {\n  .highlight-feature .contents-inner .playlist-sample img {\n    border-radius: 0.875rem;\n  }\n}\n\n.highlight-feature .contents-inner p {\n  font-size: 1rem;\n  color: #D1D2D3;\n  margin: 0;\n  line-height: 1.6;\n  padding: 0 0 0.25rem 0;\n}\n\n@media (max-width: 1024px) {\n  .highlight-feature .contents-inner p {\n    font-size: 0.875rem;\n  }\n}\n\n.highlight-feature .contents-inner .dj-container {\n  display: flex;\n  justify-content: center;\n  padding: 1.25rem 0;\n}\n\n.highlight-feature .contents-inner .dj-container .dj-avatar {\n  border-radius: 2.5rem;\n  width: 3.75rem;\n  height: 3.75rem;\n  margin-right: 0.75rem;\n}\n\n@media (max-width: 1024px) {\n  .highlight-feature .contents-inner .dj-container .dj-avatar {\n    width: 2.5rem;\n    height: 2.5rem;\n    margin-right: 0.5rem;\n  }\n}\n\n.highlight-feature .contents-inner .dj-container .dj-avatar:last-child {\n  margin-right: 0;\n}\n\n.highlight-feature .contents-inner .request-btn {\n  padding: 0.875rem 1.25rem;\n  border-radius: 0.5rem;\n  width: 260px;\n  border: 1px solid #ABABAD;\n  background-color: #1B1D21;\n  color: #FFFFFF;\n}\n\n.highlight-feature .contents-inner .request-btn a {\n  color: #FFFFFF;\n  font-size: 1rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n}\n\n.overflow {\n  width: 100%;\n  overflow: hidden;\n  padding: 5rem 0;\n}\n\n@media (max-width: 1024px) {\n  .overflow {\n    padding: 2.5rem 0;\n  }\n}\n\n.overflow .contents-inner {\n  max-width: 1140px;\n  margin-right: auto;\n  margin-left: auto;\n  padding-right: 24px;\n  padding-left: 24px;\n}\n\n.overflow .contents-inner .feature-row {\n  display: flex;\n  align-items: center;\n}\n\n@media (max-width: 1024px) {\n  .overflow .contents-inner .feature-row {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n\n.overflow .contents-inner .feature-row .feature-contents {\n  max-width: 444px;\n  flex: 0 0 auto;\n}\n\n.overflow .contents-inner .feature-row .feature-contents h2 {\n  font-size: 2rem;\n  color: #FFFFFF;\n}\n\n@media (max-width: 1024px) {\n  .overflow .contents-inner .feature-row .feature-contents h2 {\n    font-size: 1.5rem;\n  }\n}\n\n.overflow .contents-inner .feature-row .feature-contents .text {\n  color: #ABABAD;\n  font-size: 1rem;\n}\n\n@media (max-width: 1024px) {\n  .overflow .contents-inner .feature-row .feature-contents {\n    max-width: 100%;\n    order: 1;\n  }\n}\n\n.overflow .contents-inner .feature-row .bg-card {\n  position: relative;\n  width: 1000px;\n  margin-left: 148px;\n  overflow: hidden;\n  flex: 1 0 auto;\n  height: 400px;\n  border-radius: 2.4em;\n}\n\n@media (max-width: 1024px) {\n  .overflow .contents-inner .feature-row .bg-card {\n    max-width: 100%;\n    margin-left: 0;\n    height: 220px;\n  }\n}\n\n.overflow .contents-inner .feature-row .bg-card .screen-shot {\n  left: 4vw;\n  position: absolute;\n  top: 0;\n  width: 600px;\n}\n\n@media (max-width: 1024px) {\n  .overflow .contents-inner .feature-row .bg-card .screen-shot {\n    width: 90%;\n    left: 50%;\n    transform: translateX(-50%);\n  }\n}\n\n@media (min-width: 1024px) {\n  .overflow .contents-inner .feature-row .bg-card .screen-shot-left {\n    right: 4vw;\n    left: auto;\n  }\n}\n\n.overflow .contents-inner .feature-row .card-left {\n  margin-left: 0;\n}\n\n.overflow .contents-inner .feature-row .margin-left {\n  margin-left: 148px;\n}\n\n@media (max-width: 1024px) {\n  .overflow .contents-inner .feature-row .margin-left {\n    margin-left: 0;\n  }\n}\n\n.overflow .contents-inner .feature-row .card-orange {\n  background-color: #DAA520;\n}\n\n.overflow .contents-inner .feature-row .card-blue {\n  background-color: #6495ED;\n}\n\n.overflow .contents-inner .feature-row .card-biolate {\n  background-color: #8A2BE2;\n}\n\n.overflow .contents-inner .end {\n  justify-content: flex-end;\n}\n\n.topic {\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n@media (min-width: 1024px) {\n  .topic {\n    padding: 0 2.5rem;\n  }\n}\n\n@media (max-width: 1024px) {\n  .topic {\n    padding: 0 1.25rem;\n  }\n}\n\n.topic h2 {\n  color: #FF789B;\n  font-size: 2rem;\n}\n\n.topic .contents {\n  padding: 1.8rem 0;\n}\n\n.topic .contents a {\n  color: #D1D2D3;\n  text-decoration: none;\n}\n\n.topic .contents a .date {\n  font-size: 0.875rem;\n  margin: 0;\n  color: #ABABAD;\n  padding-bottom: 0.375rem;\n  font-weight: 400;\n}\n\n.topic .contents a .title {\n  margin: 0;\n  font-weight: 400;\n}\n\n.topic .contents .date {\n  font-size: 1rem;\n  margin: 0;\n}\n\n.topic .contents .title {\n  font-size: 1rem;\n}\n\n.topic .contents .title a {\n  color: #FFFFFF;\n}\n\n@media (min-width: 1024px) {\n  .overflow-app-download {\n    width: 100%;\n    overflow: hidden;\n    background-color: #2B2D30;\n    margin: 5rem auto;\n  }\n  .overflow-app-download .contents-inner {\n    max-width: 800px;\n    margin-right: auto;\n    margin-left: auto;\n    padding-right: 24px;\n    padding-left: 24px;\n  }\n  .overflow-app-download .contents-inner .feature-row {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n  }\n  .overflow-app-download .contents-inner .feature-row .feature-contents {\n    max-width: 444px;\n    flex: 0 0 auto;\n    margin-left: 148px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .overflow-app-download .contents-inner .feature-row .feature-contents h3 {\n    font-size: 2rem;\n    color: #FF789B;\n    margin: 0;\n    padding-bottom: 1.5rem;\n  }\n  .overflow-app-download .contents-inner .feature-row .feature-contents .app-logo {\n    padding-bottom: 3.6rem;\n  }\n  .overflow-app-download .contents-inner .feature-row .feature-contents .app-download-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n  }\n  .overflow-app-download .contents-inner .feature-row .feature-contents .app-download-container a + a {\n    margin-left: 0.375rem;\n  }\n  .overflow-app-download .contents-inner .feature-row .feature-contents .app-download-container img {\n    width: 100%;\n  }\n  .overflow-app-download .contents-inner .feature-row .bg-card {\n    position: relative;\n    width: 1000px;\n    margin-left: 148px;\n    overflow: hidden;\n    flex: 1 0 auto;\n    height: 400px;\n  }\n  .overflow-app-download .contents-inner .feature-row .bg-card .screen-shot {\n    right: 0;\n    position: absolute;\n    top: 50%;\n    left: 0%;\n    transform: translateY(-50%);\n    width: 100%;\n  }\n}\n\n@media (max-width: 1024px) {\n  .overflow-app-download {\n    display: none;\n  }\n}\n\n@media (max-width: 1024px) {\n  .overflow-app-download-sp {\n    width: 100%;\n    overflow: hidden;\n    background-color: #2B2D30;\n    margin: 5rem auto;\n  }\n  .overflow-app-download-sp .contents-inner {\n    max-width: 640px;\n    margin-right: auto;\n    margin-left: auto;\n    padding: 2rem;\n  }\n  .overflow-app-download-sp .contents-inner .feature-row {\n    display: flex;\n    align-items: center;\n  }\n}\n\n@media (max-width: 1024px) and (max-width: 1024px) {\n  .overflow-app-download-sp .contents-inner .feature-row {\n    flex-direction: column;\n  }\n}\n\n@media (max-width: 1024px) {\n  .overflow-app-download-sp .contents-inner .feature-row h3 {\n    font-size: 1.5rem;\n    color: #FF789B;\n    margin: 0;\n    line-height: 1.4;\n  }\n  .overflow-app-download-sp .contents-inner .feature-row .feature-contents {\n    max-width: 444px;\n    margin-left: 148px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .overflow-app-download-sp .contents-inner .feature-row .feature-contents .app-logo {\n    padding-bottom: 1.25rem;\n  }\n  .overflow-app-download-sp .contents-inner .feature-row .feature-contents .app-download-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n  }\n  .overflow-app-download-sp .contents-inner .feature-row .feature-contents .app-download-container a + a {\n    margin-left: 0.375rem;\n  }\n  .overflow-app-download-sp .contents-inner .feature-row .feature-contents .app-download-container img {\n    width: 100%;\n  }\n}\n\n@media (max-width: 1024px) and (max-width: 1024px) {\n  .overflow-app-download-sp .contents-inner .feature-row .feature-contents {\n    max-width: 100%;\n    order: 1;\n    margin-left: 0;\n  }\n}\n\n@media (max-width: 1024px) {\n  .overflow-app-download-sp .contents-inner .feature-row .bg-card {\n    position: relative;\n    width: 100%;\n    overflow: hidden;\n    height: 120px;\n    margin: 1rem 0;\n  }\n  .overflow-app-download-sp .contents-inner .feature-row .bg-card .screen-shot {\n    right: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 100%;\n  }\n  .overflow-app-download-sp .contents-inner .end {\n    justify-content: flex-end;\n  }\n}\n\n@media (min-width: 1024px) {\n  .overflow-app-download-sp {\n    display: none;\n  }\n}\n\n.origin {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 2.5rem;\n  padding-bottom: 5rem;\n}\n\n.origin h4 {\n  color: #FF789B;\n  font-size: 0.875rem;\n  margin: 0;\n}\n\n.origin li {\n  color: #ABABAD;\n  font-size: 0.875rem;\n  line-height: 1.8;\n}\n\n#contact-form-header .wrapper {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n@media (min-width: 1024px) {\n  #contact-form-header .wrapper {\n    padding: 0 2.5rem;\n  }\n}\n\n@media (max-width: 1024px) {\n  #contact-form-header .wrapper {\n    padding: 0 1.25rem;\n  }\n}\n\n#contact-form-header .logo {\n  width: 100px;\n  height: auto;\n  padding: 0.25rem 0;\n}\n\n#contact-form-main {\n  padding-bottom: 1.875rem;\n}\n\n#contact-form-main .wrapper {\n  max-width: 1200px;\n  margin: 0 auto;\n  max-width: 420px;\n  display: flex;\n  flex-direction: column;\n  background-color: #1B1D21;\n  align-items: center;\n  color: #D1D2D3;\n}\n\n@media (min-width: 1024px) {\n  #contact-form-main .wrapper {\n    padding: 0 2.5rem;\n  }\n}\n\n@media (max-width: 1024px) {\n  #contact-form-main .wrapper {\n    padding: 0 1.25rem;\n  }\n}\n\n#contact-form-main .wrapper .description {\n  display: flex;\n  flex-direction: column;\n  padding: 1.5rem 0;\n}\n\n#contact-form-main .wrapper .description .contents-wrapper {\n  padding: 1.25rem 0;\n}\n\n#contact-form-main .wrapper .description div {\n  display: flex;\n  flex-direction: column;\n}\n\n#contact-form-main .wrapper .description div p {\n  font-size: 0.875rem;\n  line-height: 2;\n  margin: 0;\n}\n\n#contact-form-main .wrapper .description div .dj-detail {\n  padding: 0.5rem 0 0.5rem 0;\n}\n\n#contact-form-main .wrapper .description div .dj-detail a {\n  text-decoration: underline;\n  font-size: 0.875rem;\n  color: #FF789B;\n  font-weight: 600;\n}\n\n#contact-form-main .wrapper .description div + div {\n  margin-top: 0.875rem;\n}\n\n#contact-form-main .wrapper .description hr {\n  border-top: 1px solid #595657;\n  width: 100%;\n  border-bottom: none;\n  border-right: none;\n  border-left: none;\n}\n\n#contact-form-main .wrapper .button-block {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0.625rem 0;\n}\n\n#contact-form-main .wrapper .button-block .btn {\n  padding: 0.875rem 1.25rem;\n  border-radius: 0.5rem;\n  width: 260px;\n  border: 1px solid #ABABAD;\n  background-color: #1B1D21;\n  color: #FFFFFF;\n}\n\n#contact-form-main .wrapper .button-block .btn a {\n  color: #FFFFFF;\n  font-size: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-decoration: none;\n}\n\n#contact-form-main .wrapper .button-block .btn a img {\n  padding-right: 0.625rem;\n  width: 24px;\n  height: 24px;\n  flex-basis: 10%;\n}\n\n#contact-form-main .wrapper .button-block .btn a span {\n  display: inline-block;\n  flex-basis: 90%;\n}\n\n#contact-form-main .wrapper .button-block .btn.line {\n  background-color: #00B900;\n  border-style: none;\n}\n\n#contact-form-main .wrapper .button-block button + button {\n  margin-top: 0.875rem;\n}\n\n#contact-form-main .wrapper .button-block .qr {\n  display: block;\n  padding: 1.875rem 0 1.25rem 0;\n}\n\n#contact-form-main .wrapper .button-block .qr img {\n  width: 160px;\n  height: auto;\n}\n\n.inner-contents {\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n@media (min-width: 1024px) {\n  .inner-contents {\n    padding: 0 2.5rem;\n  }\n}\n\n@media (max-width: 1024px) {\n  .inner-contents {\n    padding: 0 1.25rem;\n  }\n}\n\n.wide-inner-contents {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n\n@media (min-width: 1024px) {\n  .wide-inner-contents {\n    padding: 0 2.5rem;\n  }\n}\n\n@media (max-width: 1024px) {\n  .wide-inner-contents {\n    padding: 0 1.25rem;\n  }\n}\n\n.center-setting {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.app-logo {\n  display: block;\n  width: 5rem;\n  height: auto;\n  padding: 0.625rem 0;\n}\n\n.app-download-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.app-download-container a + a {\n  margin-left: 0.375rem;\n}\n\n.app-download-container img {\n  width: 100%;\n}\n\nfooter {\n  padding: 1.875rem 0;\n  background-color: #F6F6F6;\n  padding: 2.5rem 0;\n}\n\nfooter div + div {\n  margin-top: 1.875rem;\n}\n\nfooter .links-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@media (min-width: 1024px) {\n  footer .links-container {\n    flex-direction: row;\n  }\n}\n\n@media (max-width: 1024px) {\n  footer .links-container {\n    flex-direction: column;\n  }\n}\n\nfooter .links-container a {\n  display: block;\n  color: #897E81;\n  text-decoration: none;\n  padding: 0 0.625rem;\n  font-size: 0.875rem;\n}\n\nfooter .links-container a:hover {\n  color: #403034;\n}\n\n@media (max-width: 1024px) {\n  footer .links-container a + a {\n    margin-top: 0.5rem;\n  }\n}\n\nfooter .sns-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\nfooter .sns-container a {\n  display: block;\n}\n\nfooter .sns-container a img {\n  width: 1.5rem;\n  height: auto;\n}\n\nfooter .sns-container a + a {\n  margin-left: 0.875rem;\n}\n\nfooter .copyright-container {\n  text-align: center;\n}\n\nfooter .copyright-container p {\n  font-size: 0.875rem;\n  color: #897E81;\n}\n\n@media (min-width: 1024px) {\n  .sp {\n    display: none;\n  }\n}\n\n@media (max-width: 1024px) {\n  .pc {\n    display: none;\n  }\n}", ""]);



/***/ })
/******/ ]);
});