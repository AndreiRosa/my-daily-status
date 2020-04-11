webpackHotUpdate("static\\development\\pages\\app.js",{

/***/ "./components/GoogleMap.js":
false,

/***/ "./components/Marker.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
false,

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
false,

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
false,

/***/ "./node_modules/@emotion/stylis/dist/stylis.browser.esm.js":
false,

/***/ "./node_modules/@emotion/unitless/dist/unitless.browser.esm.js":
false,

/***/ "./node_modules/@mapbox/point-geometry/index.js":
false,

/***/ "./node_modules/eventemitter3/index.js":
false,

/***/ "./node_modules/google-map-react/lib/google_heatmap.js":
false,

/***/ "./node_modules/google-map-react/lib/google_map.js":
false,

/***/ "./node_modules/google-map-react/lib/google_map_map.js":
false,

/***/ "./node_modules/google-map-react/lib/google_map_markers.js":
false,

/***/ "./node_modules/google-map-react/lib/google_map_markers_prerender.js":
false,

/***/ "./node_modules/google-map-react/lib/index.js":
false,

/***/ "./node_modules/google-map-react/lib/loaders/google_map_loader.js":
false,

/***/ "./node_modules/google-map-react/lib/marker_dispatcher.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/detect.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/detectElementResize.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/geo.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/isArraysEqualEps.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/isEmpty.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/isNumber.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/isPlainObject.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/lib_geo/lat_lng.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/lib_geo/transform.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/lib_geo/wrap.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/math/log2.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/omit.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/passiveEvents.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/pick.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/raf.js":
false,

/***/ "./node_modules/google-map-react/lib/utils/shallowEqual.js":
false,

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
false,

/***/ "./node_modules/process/browser.js":
false,

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/scriptjs/dist/script.js":
false,

/***/ "./node_modules/shallowequal/index.js":
false,

/***/ "./node_modules/styled-components/dist/styled-components.browser.esm.js":
false,

/***/ "./pages/app.js":
/*!**********************!*\
  !*** ./pages/app.js ***!
  \**********************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSP", function() { return __N_SSP; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\andre\\Desktop\\mydailystatus\\pages\\app.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var App = function App(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!props.isAuth) next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");else if (props.forceCreate) next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/create-status");
  });
  if (!props.isAuth || props.forceCreate) return null;
  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, "App"), __jsx("table", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, props.checkins.map(function (checkin) {
    return __jsx("tr", {
      key: checkin.id,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }
    }, __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, checkin.id === props.user.sub && "Seu Status"), __jsx("td", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    }, checkin.distance));
  })));
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=app.js.045949216bf031ddb5b0.hot-update.js.map