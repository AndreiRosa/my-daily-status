module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./firebase-secret.json":
/*!******************************!*\
  !*** ./firebase-secret.json ***!
  \******************************/
/*! exports provided: type, project_id, private_key_id, private_key, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"service_account\",\"project_id\":\"mydstatus\",\"private_key_id\":\"0ba51d88dd833a7f8919ea7da39671b1b1600986\",\"private_key\":\"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCPkJSe7G+m9rz7\\ndc1rP1zj+4piUbO850MDVIkq7AApZ8T+U6hDgf9x5ao27b8A6+pBjhuMiteiW4O2\\nrfMgUgtwvGgpa4IH95kHuOhD/dQUmz8iJwXjq7WNqXvXCiqSFEZ5MWTFYJ9xB9TL\\njjiMbmA+3NvY9VYJHfLgGBPt2rN9No5z5uCBKCtkgdRlW/QqPCPv6ml3z0CpO8+a\\n+140NldgAi334dMIav+/MgT7snkXtx/2WAXORbnMflPzYBELZuBhtSHaNlHC6DpY\\n80MMOiAWFxHwsr/3KGxWZWl/+PPEKS+ryh84IvORrxFsKNuNxKG0tDXqIYZKE1ug\\nC79QfP6PAgMBAAECggEAEGPXM9WWYZ9lr+ehDg9r0XNUNylQtc5JLkYmasoKsq9w\\nJAD1AtACk8Q+jIrT9Yz5b4aDyqXHPHfqL57oVNZJDBPWaHQnojU4OVN44NpHrhqT\\nOJjv6TAfSA8DXmeAuLCr4wYqlQYU7diRCLQx7IZlYofgaYKI0f2jTsYw8ES5nR/D\\nkp6eepVloLQwl8T9CZj/OD4kmsgqT60UZf4ckLvitX3bhRJBb7YoSVCSMScpA1LV\\n8oF8v+exCRPMQu8jtU4x+IiEEBwJKI8VMWYXuQtmmWvHyuk+uiv7VC23xdI/M7Rm\\naKFdPCiYx7MC76HjzqR2NLz5/cFqSmr5ULhm+uXNYQKBgQDGmnjthacLmPYue6hR\\nIce9rUqJaYIrl/Gskpf2IvoPWluKdCchdrYHKQjwwB/KiJ3mW8de9/hEmg8CR2w9\\npbkpyHthc3MvUaQvWsZyrDsocPMbqyL23vkLObutSu39TUiBGbZzZ2FvxFuDhkTG\\nhIoIGKNvs3YjuQQEUk+IurNqKQKBgQC5Dh1eTzMbEeYRwupsIaLWCK9yzvnmvshj\\nqcyiV24eO2sRuZeSOpu4WRc8RjOxsLQKaLLBej93OT/ZwXXSj4/D6upZ8F+XtnDx\\nLY29/yC3SrryjYP1mDHtqd5cNuPJByTES9/fokwOKMHX2YuNQDz3UaQDOpcgvehG\\nr3bVpHkp9wKBgQC55Z2Ltq7FjEfi+pxyVMxCHxLFzJyrcW4lupHDMrod5NYKou59\\nxEBeM2rK7wrS6U3jccUMf89DZ3DlETWf/p9zHNVgQlBu2lx0duOKMuyszgzAuU/h\\nBJTYjRG/A4QAtXZIYWkGXJ43n/SJCAUYTLdnHKjexXyvs16vLNyFfzyxAQKBgEG4\\nlI+I2yKTAb1vFugeLgGLhhvlC/V57hsPE8DYAiC0g3sBCaaCMAmRgmICoJtLoTVN\\nJ6b07pM9/sIsJdcI60ruJBqa9qgfwA63We6PLCRMYwZ/Yc0YJys7t9/SEqWzZshc\\nFf8LWa1xph4tgZVBqiU/llsbNM8JAvQPnsmTJwDTAoGAfnm5RQ4CYSV8rPmRHCUb\\npmTa5t+6b3x+SziHbh5MCTT9Ur7BGdV6QTNQnLRb4ewo1k6jx05lKiWtS6n07m2C\\naAZPEPN4xlSY+LNY3QTINypFUAolwajtBpYTAJp8gCJ8uvkkXIoktC0AyhOQ8kbc\\nO8viPFypu0pmonJswy5tA8w=\\n-----END PRIVATE KEY-----\\n\",\"client_email\":\"firebase-adminsdk-bfzp3@mydstatus.iam.gserviceaccount.com\",\"client_id\":\"100142027563249635788\",\"auth_uri\":\"https://accounts.google.com/o/oauth2/auth\",\"token_uri\":\"https://oauth2.googleapis.com/token\",\"auth_provider_x509_cert_url\":\"https://www.googleapis.com/oauth2/v1/certs\",\"client_x509_cert_url\":\"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-bfzp3%40mydstatus.iam.gserviceaccount.com\"}");

/***/ }),

/***/ "./lib/auth0.js":
/*!**********************!*\
  !*** ./lib/auth0.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth0/nextjs-auth0 */ "@auth0/nextjs-auth0");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__["initAuth0"])({
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: "openid profile",
  domain: process.env.AUTH0_DOMAIN,
  redirectUri: "http://localhost:3000/api/callback",
  postLogoutRedirectUri: "http://localhost:3000",
  session: {
    cookieSecret: "Aj8h7AHian8AJjnsa9s7aJ97A9s4aAs6",
    cookieLifetime: 3600
  }
}));

/***/ }),

/***/ "./lib/db.js":
/*!*******************!*\
  !*** ./lib/db.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const admin = __webpack_require__(/*! firebase-admin */ "firebase-admin");

const secret = __webpack_require__(/*! ../firebase-secret.json */ "./firebase-secret.json");

const {
  GeoFirestore
} = __webpack_require__(/*! geofirestore */ "geofirestore");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(secret)
  });
}

const firestore = admin.firestore();
const db = new GeoFirestore(firestore);
module.exports = {
  db
};

/***/ }),

/***/ "./lib/geo.js":
/*!********************!*\
  !*** ./lib/geo.js ***!
  \********************/
/*! exports provided: distance */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
function toRad(Value) {
  return Value * Math.PI / 180;
}

function distance(lat1, lon1, lat2, lon2) {
  var R = 6371; // km

  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}

/***/ }),

/***/ "./pages/app.js":
/*!**********************!*\
  !*** ./pages/app.js ***!
  \**********************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_auth0__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/auth0 */ "./lib/auth0.js");
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/db */ "./lib/db.js");
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_db__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_geo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/geo */ "./lib/geo.js");
var _jsxFileName = "C:\\Users\\andre\\Desktop\\mydailystatus\\pages\\app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const App = props => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!props.isAuth) next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/");else if (props.forceCreate) next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push("/create-status");
  });
  if (!props.isAuth || props.forceCreate) return null;
  return __jsx("div", {
    className: "text-center mx-auto container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: "font-bold text-3xl py-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, "Status pr\xF3ximos a voc\xEA:"), __jsx("table", {
    className: "table-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, props.checkins.map(checkin => __jsx("tr", {
    key: checkin.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, __jsx("td", {
    className: "px-4 py-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, checkin.id === props.user.sub && "Seu Status: "), __jsx("td", {
    className: "px-4 py-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, checkin.status), __jsx("td", {
    className: "px-4 py-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, checkin.distance)))), __jsx("form", {
    method: "get",
    action: "/api/logout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("button", {
    className: "py-4 px-2 rounded font-bold bg-pink-800 text-white block w-1/6 shadow-xl hover:shadow mx-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "Sair")));
};

/* harmony default export */ __webpack_exports__["default"] = (App);
async function getServerSideProps({
  req,
  res
}) {
  const session = await _lib_auth0__WEBPACK_IMPORTED_MODULE_2__["default"].getSession(req);
  const currentDate = new Date().toISOString().substr(0, 10);
  let checkinsList = [];
  let props = {
    user: {},
    isAuth: false,
    forceCreate: false,
    checkins: []
  };

  if (session) {
    const {
      user
    } = session;
    const todaysCheckin = await _lib_db__WEBPACK_IMPORTED_MODULE_3__["db"].collection("markers").doc(currentDate).collection("checks").doc(user.sub).get();
    const {
      coordinates
    } = todaysCheckin.data();
    let forceCreate = true;

    if (coordinates) {
      forceCreate = false;
      const {
        docs
      } = await _lib_db__WEBPACK_IMPORTED_MODULE_3__["db"].collection("markers").doc(currentDate).collection("checks").near({
        center: coordinates,
        radius: 18000
      }).get();
      checkinsList = docs.map(doc => {
        const {
          status,
          coordinates
        } = doc.data();
        const {
          latitude,
          longitude
        } = coordinates;
        const {
          latitude: lat,
          longitude: long
        } = coordinates;
        return {
          id: doc.id,
          status,
          coords: {
            latitude,
            longitude
          },
          distance: Object(_lib_geo__WEBPACK_IMPORTED_MODULE_4__["distance"])(lat, long, latitude, longitude).toFixed(2)
        };
      });
    }

    props = {
      user,
      isAuth: true,
      forceCreate,
      checkins: checkinsList
    };
  }

  return {
    props
  };
}

/***/ }),

/***/ 6:
/*!****************************!*\
  !*** multi ./pages/app.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\andre\Desktop\mydailystatus\pages\app.js */"./pages/app.js");


/***/ }),

/***/ "@auth0/nextjs-auth0":
/*!**************************************!*\
  !*** external "@auth0/nextjs-auth0" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),

/***/ "geofirestore":
/*!*******************************!*\
  !*** external "geofirestore" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("geofirestore");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=app.js.map