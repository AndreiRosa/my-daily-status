webpackHotUpdate("static\\development\\pages\\app.js",{

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
/* harmony import */ var _components_Marker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Marker */ "./components/Marker.js");
/* harmony import */ var _components_GoogleMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/GoogleMap */ "./components/GoogleMap.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\andre\\Desktop\\mydailystatus\\pages\\app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var getMapBounds = function getMapBounds(map, maps, places) {
  var bounds = new maps.LatLngBounds();
  places.forEach(function (place) {
    bounds.extend(new maps.LatLng(place.geometry.location.lat, place.geometry.location.lng));
  });
  return bounds;
};

var bindResizeListener = function bindResizeListener(map, maps, bounds) {
  maps.event.addDomListenerOnce(map, 'idle', function () {
    maps.event.addDomListener(window, 'resize', function () {
      map.fitBounds(bounds);
    });
  });
};

var apiIsLoaded = function apiIsLoaded(map, maps, places) {
  var bounds = getMapBounds(map, maps, places);
  map.fitBounds(bounds);
  bindResizeListener(map, maps, bounds);
};

var App = function App(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!props.isAuth) next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");else if (props.forceCreate) next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/create-status");
  });
  var defaultProps = {
    center: [props.user.latitude, props.user.longitude]
  };
  if (!props.isAuth || props.forceCreate) return null;
  return __jsx("div", {
    style: {
      height: '1000px',
      width: '1000px'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, __jsx(_components_GoogleMap__WEBPACK_IMPORTED_MODULE_2__["default"], {
    defaultCenter: defaultProps.center,
    yesIWantToUseGoogleMapApiInternals: true,
    defaultZoom: 10,
    onGoogleApiLoaded: function onGoogleApiLoaded(_ref) {
      var map = _ref.map,
          maps = _ref.maps;
      return apiIsLoaded(map, maps, props.checkins);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, props.checkins.map(function (checkin) {
    return __jsx(_components_Marker__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: checkin.id,
      lat: checkin.coords.latitude,
      lng: checkin.coords.longitude,
      text: checkin.status,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    });
  })));
};

var __N_SSP = true;
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=app.js.3437854783baa9bf2bd6.hot-update.js.map