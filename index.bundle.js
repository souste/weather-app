(self["webpackChunkweather_app"] = self["webpackChunkweather_app"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./VarelaRound-Regular.ttf */ "./src/VarelaRound-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! background.jpg */ "./src/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "ValeraRound";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
  font-weight: normal;
  font-style: normal;
}

body {
  font-family: "ValeraRound";
  background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  font-weight: bold;
  background-size: cover;
}

.weather-container {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}

/* FORM */
#content {
  display: flex;
  flex-direction: column;
  margin-left: 200px;
  margin-top: 50px;
}

.outside-form-container {
  display: flex;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
}

input {
  height: 30px;
  width: 300px;
  padding: 2px 23px 2px 30px;
  background-color: #f5f5f5;
  border-radius: 10px;
}

.submit-button {
  opacity: 50%;
  border-radius: 5%;
}

.submit-button:hover {
  cursor: pointer;
}

/* SINGLE LOCATION FORECAST */

.location-container {
  text-align: center;
  background-color: white;
  opacity: 50%;
  border-radius: 5%;
  padding: 10px;
  width: min(500px, 100%);
}

.location-name {
  font-size: 80px;
  color: red;
}

.location-country {
  font-size: 40px;
}

.location-time,
.location-temp-c,
.location-condition {
  font-size: 20px;
}

.location-icon {
  height: auto;
  width: 150px;
}

/* THREE DAY FORECASTS */

.forecast-days-container {
  list-style: none;
  display: flex;
}

.single-forecast-day-container {
  margin-right: 20px;
  height: 180px;
  background-color: white;
  opacity: 50%;
  border-radius: 5%;
  padding: 10px;
  text-align: center;
  width: min(200px, 100%);
}

.forecast-date {
  font-weight: bold;
  font-size: 20px;
  color: red;
}

/* TOGGLE switch */
.toggle {
  display: inline-block;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-left: 100px;
}

.toggle-switch {
  background: white;
  width: 80px;
  height: 30px;
  overflow: hidden;
  border-radius: 20px;
  display: inline-block;
  vertical-align: middle;
  margin: 0 10px;
  cursor: pointer;
}

.toggle-switch:after {
  content: " ";
  display: block;
  width: 40px;
  height: 30px;
  background-color: black;
  border: 3px solid #fff;
  border-top: 0;
  border-bottom: 0;
  margin-left: -3px;
  transition: all 0.1s ease-in-out;
}

.active .toggle-switch:after {
  margin-left: 40px;
}

.toggle-label {
  display: inline-block;
  line-height: 30px;
  color: red; /* default color for toggle-label */
}

.active .toggle-label {
  color: white;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,0BAA0B;EAC1B,+DAAwD;EACxD,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,0BAA0B;EAC1B,mDAAiC;EACjC,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA,SAAS;AACT;EACE,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,0BAA0B;EAC1B,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA,6BAA6B;;AAE7B;EACE,kBAAkB;EAClB,uBAAuB;EACvB,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,UAAU;AACZ;;AAEA;EACE,eAAe;AACjB;;AAEA;;;EAGE,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA,wBAAwB;;AAExB;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,kBAAkB;EAClB,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,UAAU;AACZ;;AAEA,kBAAkB;AAClB;EACE,qBAAqB;EACrB,yBAAyB;EACzB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,qBAAqB;EACrB,sBAAsB;EACtB,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,WAAW;EACX,YAAY;EACZ,uBAAuB;EACvB,sBAAsB;EACtB,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,gCAAgC;AAClC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;EACjB,UAAU,EAAE,mCAAmC;AACjD;;AAEA;EACE,YAAY;AACd","sourcesContent":["@font-face {\n  font-family: \"ValeraRound\";\n  src: url(\"./VarelaRound-Regular.ttf\") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n\nbody {\n  font-family: \"ValeraRound\";\n  background: url(\"background.jpg\");\n  font-weight: bold;\n  background-size: cover;\n}\n\n.weather-container {\n  display: flex;\n  flex-direction: row;\n  margin-top: 20px;\n}\n\n/* FORM */\n#content {\n  display: flex;\n  flex-direction: column;\n  margin-left: 200px;\n  margin-top: 50px;\n}\n\n.outside-form-container {\n  display: flex;\n}\n\n.form-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.form {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 10px;\n}\n\ninput {\n  height: 30px;\n  width: 300px;\n  padding: 2px 23px 2px 30px;\n  background-color: #f5f5f5;\n  border-radius: 10px;\n}\n\n.submit-button {\n  opacity: 50%;\n  border-radius: 5%;\n}\n\n.submit-button:hover {\n  cursor: pointer;\n}\n\n/* SINGLE LOCATION FORECAST */\n\n.location-container {\n  text-align: center;\n  background-color: white;\n  opacity: 50%;\n  border-radius: 5%;\n  padding: 10px;\n  width: min(500px, 100%);\n}\n\n.location-name {\n  font-size: 80px;\n  color: red;\n}\n\n.location-country {\n  font-size: 40px;\n}\n\n.location-time,\n.location-temp-c,\n.location-condition {\n  font-size: 20px;\n}\n\n.location-icon {\n  height: auto;\n  width: 150px;\n}\n\n/* THREE DAY FORECASTS */\n\n.forecast-days-container {\n  list-style: none;\n  display: flex;\n}\n\n.single-forecast-day-container {\n  margin-right: 20px;\n  height: 180px;\n  background-color: white;\n  opacity: 50%;\n  border-radius: 5%;\n  padding: 10px;\n  text-align: center;\n  width: min(200px, 100%);\n}\n\n.forecast-date {\n  font-weight: bold;\n  font-size: 20px;\n  color: red;\n}\n\n/* TOGGLE switch */\n.toggle {\n  display: inline-block;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  margin-left: 100px;\n}\n\n.toggle-switch {\n  background: white;\n  width: 80px;\n  height: 30px;\n  overflow: hidden;\n  border-radius: 20px;\n  display: inline-block;\n  vertical-align: middle;\n  margin: 0 10px;\n  cursor: pointer;\n}\n\n.toggle-switch:after {\n  content: \" \";\n  display: block;\n  width: 40px;\n  height: 30px;\n  background-color: black;\n  border: 3px solid #fff;\n  border-top: 0;\n  border-bottom: 0;\n  margin-left: -3px;\n  transition: all 0.1s ease-in-out;\n}\n\n.active .toggle-switch:after {\n  margin-left: 40px;\n}\n\n.toggle-label {\n  display: inline-block;\n  line-height: 30px;\n  color: red; /* default color for toggle-label */\n}\n\n.active .toggle-label {\n  color: white;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api.js":
/*!********************!*\
  !*** ./src/api.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getThreeDayForecast: () => (/* binding */ getThreeDayForecast),
/* harmony export */   getWeatherLocation: () => (/* binding */ getWeatherLocation)
/* harmony export */ });
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./src/form.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_form__WEBPACK_IMPORTED_MODULE_0__);


const content = document.getElementById("content");
const weatherContainer = document.createElement("div");
weatherContainer.className = "weather-container";
content.appendChild(weatherContainer);
const locationInput = document.getElementById("location");
const submitButton = document.querySelector(".submit-button");

const locationContainer = document.createElement("div");
locationContainer.className = "location-container";

const forecastDays = document.createElement("ul");
forecastDays.className = "forecast-days-container";

const toggleSwitch = document.querySelector(".toggle-switch");
let click = false;

// CREATE AND GET SINGLE WEATHER LOCATION

function createWeatherLocation(weatherData) {
  const locationName = document.createElement("h2");
  locationName.className = "location-name";
  locationName.innerText = weatherData.location.name;

  const locationCountry = document.createElement("p");
  locationCountry.className = "location-country";
  locationCountry.innerText = weatherData.location.country;

  const locationTime = document.createElement("p");
  locationTime.className = "location-time";
  locationTime.innerText = weatherData.location.localtime;

  const locationTempC = document.createElement("p");
  locationTempC.className = "location-temp-c";
  locationTempC.innerText = `${weatherData.current.temp_c} °C`;

  const locationCondition = document.createElement("p");
  locationCondition.className = "location-condition";
  locationCondition.innerText = `${weatherData.current.condition.text} °C`;

  const locationIcon = document.createElement("img");
  locationIcon.className = "location-icon";
  locationIcon.src = weatherData.current.condition.icon;

  locationContainer.appendChild(locationName);
  locationContainer.appendChild(locationCountry);
  locationContainer.appendChild(locationTime);
  locationContainer.appendChild(locationTempC);
  locationContainer.appendChild(locationCondition);
  locationContainer.appendChild(locationIcon);
}

let weatherData;
async function getWeatherLocation(locationValue) {
  const response = locationValue
    ? await fetch(`https://api.weatherapi.com/v1/forecast.json?key=164214608c0c4ca6b2a112803240901&q=${locationValue}`, {
        mode: "cors",
      })
    : await fetch("https://api.weatherapi.com/v1/forecast.json?key=164214608c0c4ca6b2a112803240901&q=Manchester", {
        mode: "cors",
      });

  weatherData = await response.json();

  createWeatherLocation(weatherData);

  weatherContainer.appendChild(locationContainer);
}

// CREATE AND GET THREE DAY WEATHER FORECAST

function createThreeDayWeatherForecast(forecastDay) {
  forecastDay.forEach((data) => {
    const singleForecastDay = document.createElement("div");
    singleForecastDay.className = "single-forecast-day-container";

    const dateObject = new Date(data.date);
    const dayOfWeek = dateObject.toLocaleDateString("en-US", { weekday: "long" });
    const forecastDate = document.createElement("li");
    forecastDate.className = "forecast-date";
    forecastDate.innerText = dayOfWeek;

    const forecastTempHigh = document.createElement("li");
    forecastTempHigh.className = "forecast-temp-high";
    forecastTempHigh.innerText = `${data.day.maxtemp_c} °C (High)`;

    const forecastTempLow = document.createElement("li");
    forecastTempLow.className = "forecast-temp-low";
    forecastTempLow.innerText = `${data.day.mintemp_c} °C (Low)`;

    const forecastCondition = document.createElement("li");
    forecastCondition.innerText = data.day.condition.text;

    const forecastIcon = document.createElement("img");
    forecastIcon.src = data.day.condition.icon;

    singleForecastDay.appendChild(forecastDate);
    singleForecastDay.appendChild(forecastTempHigh);
    singleForecastDay.appendChild(forecastTempLow);
    singleForecastDay.appendChild(forecastCondition);
    singleForecastDay.appendChild(forecastIcon);

    forecastDays.appendChild(singleForecastDay);
  });
}

let forecastDay;

async function getThreeDayForecast(locationValue) {
  const response = locationValue
    ? await fetch(`https://api.weatherapi.com/v1/forecast.json?key=164214608c0c4ca6b2a112803240901&q=${locationValue}&days=3`, {
        mode: "cors",
      })
    : await fetch("https://api.weatherapi.com/v1/forecast.json?key=164214608c0c4ca6b2a112803240901&q=Manchester&days=3", {
        mode: "cors",
      });

  const forecastData = await response.json();
  forecastDay = forecastData.forecast.forecastday;
  createThreeDayWeatherForecast(forecastDay);

  weatherContainer.appendChild(forecastDays);
}

// SUBMIT BUTTON

let locationValue = "";

submitButton.addEventListener("click", async (event) => {
  while (locationContainer.firstChild) {
    locationContainer.removeChild(locationContainer.firstChild);
  }
  while (forecastDays.firstChild) {
    forecastDays.removeChild(forecastDays.firstChild);
  }

  forecastDays.innerHTML = "";
  event.preventDefault();
  locationValue = locationInput.value;
  console.log(locationInput.value);

  await getWeatherLocation(locationValue);
  await getThreeDayForecast(locationValue);

  toggleSwitch.parentElement.classList.remove("active");
  click = false;
});

// TOGGLE SWITCH

toggleSwitch.addEventListener("click", () => {
  const locationTemp = document.querySelector(".location-temp-c");
  const forecastTempHigh = document.querySelectorAll(".forecast-temp-high");
  const forecastTempLow = document.querySelectorAll(".forecast-temp-low");

  click = !click;
  if (click) {
    locationTemp.innerText = `${weatherData.current.temp_f} °F`;

    forecastTempHigh.forEach((day, index) => {
      day.innerText = `${forecastDay[index].day.maxtemp_f} °F (High)`;
    });

    forecastTempLow.forEach((day, index) => {
      day.innerText = `${forecastDay[index].day.mintemp_f} °F (Low)`;
    });
  } else {
    locationTemp.innerText = `${weatherData.current.temp_c} °C`;

    forecastTempHigh.forEach((day, index) => {
      day.innerText = `${forecastDay[index].day.maxtemp_c} °F (High)`;
    });

    forecastTempLow.forEach((day, index) => {
      day.innerText = `${forecastDay[index].day.mintemp_c} °F (Low)`;
    });
  }
});

function toggleHandler(event) {
  event.preventDefault();
  event.currentTarget.parentElement.classList.toggle("active");
}

toggleSwitch.addEventListener("click", toggleHandler);




/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ (() => {

const content = document.getElementById("content");

const formContainer = document.createElement("div");
formContainer.className = "form-container";

const formHTML = `
<div class="outside-form-container">
<form class="form" action="">
<input type="text" id="location" name="location" placeholder="Enter Location" />
<button class="submit-button"><img src="../src/search.png" /></button>
</form>
<div class="toggle">
<div class="toggle-label">C</div>
<div class="toggle-switch"></div>
<div class="toggle-label active">F</div>
</div>
</div>
`;

formContainer.innerHTML = formHTML;
content.appendChild(formContainer);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api */ "./src/api.js");



(0,_api__WEBPACK_IMPORTED_MODULE_1__.getWeatherLocation)();

(0,_api__WEBPACK_IMPORTED_MODULE_1__.getThreeDayForecast)();


/***/ }),

/***/ "./src/VarelaRound-Regular.ttf":
/*!*************************************!*\
  !*** ./src/VarelaRound-Regular.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e67ccd4a92677fdf8719.ttf";

/***/ }),

/***/ "./src/background.jpg":
/*!****************************!*\
  !*** ./src/background.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4f20bf21d3b98a3e7161.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLG9DQUFvQyxvQkFBb0I7O0FBRXhEO0FBQ0E7QUFDQSxtQ0FBbUMsb0JBQW9COztBQUV2RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsdUdBQXVHLGNBQWM7QUFDckg7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLDRCQUE0Qjs7QUFFNUQ7QUFDQSx5QkFBeUIsa0NBQWtDO0FBQzNELEtBQUs7O0FBRUw7QUFDQSx5QkFBeUIsa0NBQWtDO0FBQzNELEtBQUs7QUFDTCxJQUFJO0FBQ0osZ0NBQWdDLDRCQUE0Qjs7QUFFNUQ7QUFDQSx5QkFBeUIsa0NBQWtDO0FBQzNELEtBQUs7O0FBRUw7QUFDQSx5QkFBeUIsa0NBQWtDO0FBQzNELEtBQUs7QUFDTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRW1EOzs7Ozs7Ozs7OztBQzNMbkQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwQnFCO0FBQzJDOztBQUVoRSx3REFBa0I7O0FBRWxCLHlEQUFtQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9WYXJlbGFSb3VuZC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImJhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlZhbGVyYVJvdW5kXCI7XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pIGZvcm1hdChcInRydWV0eXBlXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbmJvZHkge1xuICBmb250LWZhbWlseTogXCJWYWxlcmFSb3VuZFwiO1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ud2VhdGhlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4vKiBGT1JNICovXG4jY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1sZWZ0OiAyMDBweDtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLm91dHNpZGUtZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZm9ybS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbn1cblxuaW5wdXQge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgcGFkZGluZzogMnB4IDIzcHggMnB4IDMwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5zdWJtaXQtYnV0dG9uIHtcbiAgb3BhY2l0eTogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1JTtcbn1cblxuLnN1Ym1pdC1idXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIFNJTkdMRSBMT0NBVElPTiBGT1JFQ0FTVCAqL1xuXG4ubG9jYXRpb24tY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1JTtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IG1pbig1MDBweCwgMTAwJSk7XG59XG5cbi5sb2NhdGlvbi1uYW1lIHtcbiAgZm9udC1zaXplOiA4MHB4O1xuICBjb2xvcjogcmVkO1xufVxuXG4ubG9jYXRpb24tY291bnRyeSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLmxvY2F0aW9uLXRpbWUsXG4ubG9jYXRpb24tdGVtcC1jLFxuLmxvY2F0aW9uLWNvbmRpdGlvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmxvY2F0aW9uLWljb24ge1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLyogVEhSRUUgREFZIEZPUkVDQVNUUyAqL1xuXG4uZm9yZWNhc3QtZGF5cy1jb250YWluZXIge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc2luZ2xlLWZvcmVjYXN0LWRheS1jb250YWluZXIge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGhlaWdodDogMTgwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUlO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiBtaW4oMjAwcHgsIDEwMCUpO1xufVxuXG4uZm9yZWNhc3QtZGF0ZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi8qIFRPR0dMRSBzd2l0Y2ggKi9cbi50b2dnbGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbn1cblxuLnRvZ2dsZS1zd2l0Y2gge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBtYXJnaW46IDAgMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udG9nZ2xlLXN3aXRjaDphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XG4gIGJvcmRlci10b3A6IDA7XG4gIGJvcmRlci1ib3R0b206IDA7XG4gIG1hcmdpbi1sZWZ0OiAtM3B4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcbn1cblxuLmFjdGl2ZSAudG9nZ2xlLXN3aXRjaDphZnRlciB7XG4gIG1hcmdpbi1sZWZ0OiA0MHB4O1xufVxuXG4udG9nZ2xlLWxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgY29sb3I6IHJlZDsgLyogZGVmYXVsdCBjb2xvciBmb3IgdG9nZ2xlLWxhYmVsICovXG59XG5cbi5hY3RpdmUgLnRvZ2dsZS1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQiwrREFBd0Q7RUFDeEQsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixtREFBaUM7RUFDakMsaUJBQWlCO0VBQ2pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBLFNBQVM7QUFDVDtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLDZCQUE2Qjs7QUFFN0I7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBOzs7RUFHRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQSx3QkFBd0I7O0FBRXhCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLFVBQVU7QUFDWjs7QUFFQSxrQkFBa0I7QUFDbEI7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsVUFBVSxFQUFFLG1DQUFtQztBQUNqRDs7QUFFQTtFQUNFLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVmFsZXJhUm91bmRcXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi4vVmFyZWxhUm91bmQtUmVndWxhci50dGZcXFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVmFsZXJhUm91bmRcXFwiO1xcbiAgYmFja2dyb3VuZDogdXJsKFxcXCJiYWNrZ3JvdW5kLmpwZ1xcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbn1cXG5cXG4ud2VhdGhlci1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4vKiBGT1JNICovXFxuI2NvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tbGVmdDogMjAwcHg7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4ub3V0c2lkZS1mb3JtLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbmlucHV0IHtcXG4gIGhlaWdodDogMzBweDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIHBhZGRpbmc6IDJweCAyM3B4IDJweCAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5zdWJtaXQtYnV0dG9uIHtcXG4gIG9wYWNpdHk6IDUwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDUlO1xcbn1cXG5cXG4uc3VibWl0LWJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIFNJTkdMRSBMT0NBVElPTiBGT1JFQ0FTVCAqL1xcblxcbi5sb2NhdGlvbi1jb250YWluZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBvcGFjaXR5OiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiA1JTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB3aWR0aDogbWluKDUwMHB4LCAxMDAlKTtcXG59XFxuXFxuLmxvY2F0aW9uLW5hbWUge1xcbiAgZm9udC1zaXplOiA4MHB4O1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLmxvY2F0aW9uLWNvdW50cnkge1xcbiAgZm9udC1zaXplOiA0MHB4O1xcbn1cXG5cXG4ubG9jYXRpb24tdGltZSxcXG4ubG9jYXRpb24tdGVtcC1jLFxcbi5sb2NhdGlvbi1jb25kaXRpb24ge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4ubG9jYXRpb24taWNvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB3aWR0aDogMTUwcHg7XFxufVxcblxcbi8qIFRIUkVFIERBWSBGT1JFQ0FTVFMgKi9cXG5cXG4uZm9yZWNhc3QtZGF5cy1jb250YWluZXIge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zaW5nbGUtZm9yZWNhc3QtZGF5LWNvbnRhaW5lciB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICBoZWlnaHQ6IDE4MHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBvcGFjaXR5OiA1MCU7XFxuICBib3JkZXItcmFkaXVzOiA1JTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogbWluKDIwMHB4LCAxMDAlKTtcXG59XFxuXFxuLmZvcmVjYXN0LWRhdGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5cXG4vKiBUT0dHTEUgc3dpdGNoICovXFxuLnRvZ2dsZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xcbn1cXG5cXG4udG9nZ2xlLXN3aXRjaCB7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2dnbGUtc3dpdGNoOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCIgXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNmZmY7XFxuICBib3JkZXItdG9wOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG4gIG1hcmdpbi1sZWZ0OiAtM3B4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5hY3RpdmUgLnRvZ2dsZS1zd2l0Y2g6YWZ0ZXIge1xcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxufVxcblxcbi50b2dnbGUtbGFiZWwge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBjb2xvcjogcmVkOyAvKiBkZWZhdWx0IGNvbG9yIGZvciB0b2dnbGUtbGFiZWwgKi9cXG59XFxuXFxuLmFjdGl2ZSAudG9nZ2xlLWxhYmVsIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL2Zvcm1cIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbmNvbnN0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xud2VhdGhlckNvbnRhaW5lci5jbGFzc05hbWUgPSBcIndlYXRoZXItY29udGFpbmVyXCI7XG5jb250ZW50LmFwcGVuZENoaWxkKHdlYXRoZXJDb250YWluZXIpO1xuY29uc3QgbG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIik7XG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1idXR0b25cIik7XG5cbmNvbnN0IGxvY2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmxvY2F0aW9uQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwibG9jYXRpb24tY29udGFpbmVyXCI7XG5cbmNvbnN0IGZvcmVjYXN0RGF5cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbmZvcmVjYXN0RGF5cy5jbGFzc05hbWUgPSBcImZvcmVjYXN0LWRheXMtY29udGFpbmVyXCI7XG5cbmNvbnN0IHRvZ2dsZVN3aXRjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9nZ2xlLXN3aXRjaFwiKTtcbmxldCBjbGljayA9IGZhbHNlO1xuXG4vLyBDUkVBVEUgQU5EIEdFVCBTSU5HTEUgV0VBVEhFUiBMT0NBVElPTlxuXG5mdW5jdGlvbiBjcmVhdGVXZWF0aGVyTG9jYXRpb24od2VhdGhlckRhdGEpIHtcbiAgY29uc3QgbG9jYXRpb25OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICBsb2NhdGlvbk5hbWUuY2xhc3NOYW1lID0gXCJsb2NhdGlvbi1uYW1lXCI7XG4gIGxvY2F0aW9uTmFtZS5pbm5lclRleHQgPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5uYW1lO1xuXG4gIGNvbnN0IGxvY2F0aW9uQ291bnRyeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsb2NhdGlvbkNvdW50cnkuY2xhc3NOYW1lID0gXCJsb2NhdGlvbi1jb3VudHJ5XCI7XG4gIGxvY2F0aW9uQ291bnRyeS5pbm5lclRleHQgPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5jb3VudHJ5O1xuXG4gIGNvbnN0IGxvY2F0aW9uVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsb2NhdGlvblRpbWUuY2xhc3NOYW1lID0gXCJsb2NhdGlvbi10aW1lXCI7XG4gIGxvY2F0aW9uVGltZS5pbm5lclRleHQgPSB3ZWF0aGVyRGF0YS5sb2NhdGlvbi5sb2NhbHRpbWU7XG5cbiAgY29uc3QgbG9jYXRpb25UZW1wQyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsb2NhdGlvblRlbXBDLmNsYXNzTmFtZSA9IFwibG9jYXRpb24tdGVtcC1jXCI7XG4gIGxvY2F0aW9uVGVtcEMuaW5uZXJUZXh0ID0gYCR7d2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2N9IMKwQ2A7XG5cbiAgY29uc3QgbG9jYXRpb25Db25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbG9jYXRpb25Db25kaXRpb24uY2xhc3NOYW1lID0gXCJsb2NhdGlvbi1jb25kaXRpb25cIjtcbiAgbG9jYXRpb25Db25kaXRpb24uaW5uZXJUZXh0ID0gYCR7d2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dH0gwrBDYDtcblxuICBjb25zdCBsb2NhdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBsb2NhdGlvbkljb24uY2xhc3NOYW1lID0gXCJsb2NhdGlvbi1pY29uXCI7XG4gIGxvY2F0aW9uSWNvbi5zcmMgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi5pY29uO1xuXG4gIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uTmFtZSk7XG4gIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uQ291bnRyeSk7XG4gIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uVGltZSk7XG4gIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uVGVtcEMpO1xuICBsb2NhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2NhdGlvbkNvbmRpdGlvbik7XG4gIGxvY2F0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGxvY2F0aW9uSWNvbik7XG59XG5cbmxldCB3ZWF0aGVyRGF0YTtcbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJMb2NhdGlvbihsb2NhdGlvblZhbHVlKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gbG9jYXRpb25WYWx1ZVxuICAgID8gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTE2NDIxNDYwOGMwYzRjYTZiMmExMTI4MDMyNDA5MDEmcT0ke2xvY2F0aW9uVmFsdWV9YCwge1xuICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgIH0pXG4gICAgOiBhd2FpdCBmZXRjaChcImh0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTE2NDIxNDYwOGMwYzRjYTZiMmExMTI4MDMyNDA5MDEmcT1NYW5jaGVzdGVyXCIsIHtcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICB9KTtcblxuICB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICBjcmVhdGVXZWF0aGVyTG9jYXRpb24od2VhdGhlckRhdGEpO1xuXG4gIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobG9jYXRpb25Db250YWluZXIpO1xufVxuXG4vLyBDUkVBVEUgQU5EIEdFVCBUSFJFRSBEQVkgV0VBVEhFUiBGT1JFQ0FTVFxuXG5mdW5jdGlvbiBjcmVhdGVUaHJlZURheVdlYXRoZXJGb3JlY2FzdChmb3JlY2FzdERheSkge1xuICBmb3JlY2FzdERheS5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgY29uc3Qgc2luZ2xlRm9yZWNhc3REYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNpbmdsZUZvcmVjYXN0RGF5LmNsYXNzTmFtZSA9IFwic2luZ2xlLWZvcmVjYXN0LWRheS1jb250YWluZXJcIjtcblxuICAgIGNvbnN0IGRhdGVPYmplY3QgPSBuZXcgRGF0ZShkYXRhLmRhdGUpO1xuICAgIGNvbnN0IGRheU9mV2VlayA9IGRhdGVPYmplY3QudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwgeyB3ZWVrZGF5OiBcImxvbmdcIiB9KTtcbiAgICBjb25zdCBmb3JlY2FzdERhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgZm9yZWNhc3REYXRlLmNsYXNzTmFtZSA9IFwiZm9yZWNhc3QtZGF0ZVwiO1xuICAgIGZvcmVjYXN0RGF0ZS5pbm5lclRleHQgPSBkYXlPZldlZWs7XG5cbiAgICBjb25zdCBmb3JlY2FzdFRlbXBIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGZvcmVjYXN0VGVtcEhpZ2guY2xhc3NOYW1lID0gXCJmb3JlY2FzdC10ZW1wLWhpZ2hcIjtcbiAgICBmb3JlY2FzdFRlbXBIaWdoLmlubmVyVGV4dCA9IGAke2RhdGEuZGF5Lm1heHRlbXBfY30gwrBDIChIaWdoKWA7XG5cbiAgICBjb25zdCBmb3JlY2FzdFRlbXBMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgZm9yZWNhc3RUZW1wTG93LmNsYXNzTmFtZSA9IFwiZm9yZWNhc3QtdGVtcC1sb3dcIjtcbiAgICBmb3JlY2FzdFRlbXBMb3cuaW5uZXJUZXh0ID0gYCR7ZGF0YS5kYXkubWludGVtcF9jfSDCsEMgKExvdylgO1xuXG4gICAgY29uc3QgZm9yZWNhc3RDb25kaXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgZm9yZWNhc3RDb25kaXRpb24uaW5uZXJUZXh0ID0gZGF0YS5kYXkuY29uZGl0aW9uLnRleHQ7XG5cbiAgICBjb25zdCBmb3JlY2FzdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGZvcmVjYXN0SWNvbi5zcmMgPSBkYXRhLmRheS5jb25kaXRpb24uaWNvbjtcblxuICAgIHNpbmdsZUZvcmVjYXN0RGF5LmFwcGVuZENoaWxkKGZvcmVjYXN0RGF0ZSk7XG4gICAgc2luZ2xlRm9yZWNhc3REYXkuYXBwZW5kQ2hpbGQoZm9yZWNhc3RUZW1wSGlnaCk7XG4gICAgc2luZ2xlRm9yZWNhc3REYXkuYXBwZW5kQ2hpbGQoZm9yZWNhc3RUZW1wTG93KTtcbiAgICBzaW5nbGVGb3JlY2FzdERheS5hcHBlbmRDaGlsZChmb3JlY2FzdENvbmRpdGlvbik7XG4gICAgc2luZ2xlRm9yZWNhc3REYXkuYXBwZW5kQ2hpbGQoZm9yZWNhc3RJY29uKTtcblxuICAgIGZvcmVjYXN0RGF5cy5hcHBlbmRDaGlsZChzaW5nbGVGb3JlY2FzdERheSk7XG4gIH0pO1xufVxuXG5sZXQgZm9yZWNhc3REYXk7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFRocmVlRGF5Rm9yZWNhc3QobG9jYXRpb25WYWx1ZSkge1xuICBjb25zdCByZXNwb25zZSA9IGxvY2F0aW9uVmFsdWVcbiAgICA/IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT0xNjQyMTQ2MDhjMGM0Y2E2YjJhMTEyODAzMjQwOTAxJnE9JHtsb2NhdGlvblZhbHVlfSZkYXlzPTNgLCB7XG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgfSlcbiAgICA6IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9MTY0MjE0NjA4YzBjNGNhNmIyYTExMjgwMzI0MDkwMSZxPU1hbmNoZXN0ZXImZGF5cz0zXCIsIHtcbiAgICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICB9KTtcblxuICBjb25zdCBmb3JlY2FzdERhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIGZvcmVjYXN0RGF5ID0gZm9yZWNhc3REYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5O1xuICBjcmVhdGVUaHJlZURheVdlYXRoZXJGb3JlY2FzdChmb3JlY2FzdERheSk7XG5cbiAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JlY2FzdERheXMpO1xufVxuXG4vLyBTVUJNSVQgQlVUVE9OXG5cbmxldCBsb2NhdGlvblZhbHVlID0gXCJcIjtcblxuc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgd2hpbGUgKGxvY2F0aW9uQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBsb2NhdGlvbkNvbnRhaW5lci5yZW1vdmVDaGlsZChsb2NhdGlvbkNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfVxuICB3aGlsZSAoZm9yZWNhc3REYXlzLmZpcnN0Q2hpbGQpIHtcbiAgICBmb3JlY2FzdERheXMucmVtb3ZlQ2hpbGQoZm9yZWNhc3REYXlzLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgZm9yZWNhc3REYXlzLmlubmVySFRNTCA9IFwiXCI7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGxvY2F0aW9uVmFsdWUgPSBsb2NhdGlvbklucHV0LnZhbHVlO1xuICBjb25zb2xlLmxvZyhsb2NhdGlvbklucHV0LnZhbHVlKTtcblxuICBhd2FpdCBnZXRXZWF0aGVyTG9jYXRpb24obG9jYXRpb25WYWx1ZSk7XG4gIGF3YWl0IGdldFRocmVlRGF5Rm9yZWNhc3QobG9jYXRpb25WYWx1ZSk7XG5cbiAgdG9nZ2xlU3dpdGNoLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgY2xpY2sgPSBmYWxzZTtcbn0pO1xuXG4vLyBUT0dHTEUgU1dJVENIXG5cbnRvZ2dsZVN3aXRjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCBsb2NhdGlvblRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLXRlbXAtY1wiKTtcbiAgY29uc3QgZm9yZWNhc3RUZW1wSGlnaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9yZWNhc3QtdGVtcC1oaWdoXCIpO1xuICBjb25zdCBmb3JlY2FzdFRlbXBMb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcmVjYXN0LXRlbXAtbG93XCIpO1xuXG4gIGNsaWNrID0gIWNsaWNrO1xuICBpZiAoY2xpY2spIHtcbiAgICBsb2NhdGlvblRlbXAuaW5uZXJUZXh0ID0gYCR7d2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2Z9IMKwRmA7XG5cbiAgICBmb3JlY2FzdFRlbXBIaWdoLmZvckVhY2goKGRheSwgaW5kZXgpID0+IHtcbiAgICAgIGRheS5pbm5lclRleHQgPSBgJHtmb3JlY2FzdERheVtpbmRleF0uZGF5Lm1heHRlbXBfZn0gwrBGIChIaWdoKWA7XG4gICAgfSk7XG5cbiAgICBmb3JlY2FzdFRlbXBMb3cuZm9yRWFjaCgoZGF5LCBpbmRleCkgPT4ge1xuICAgICAgZGF5LmlubmVyVGV4dCA9IGAke2ZvcmVjYXN0RGF5W2luZGV4XS5kYXkubWludGVtcF9mfSDCsEYgKExvdylgO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGxvY2F0aW9uVGVtcC5pbm5lclRleHQgPSBgJHt3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfY30gwrBDYDtcblxuICAgIGZvcmVjYXN0VGVtcEhpZ2guZm9yRWFjaCgoZGF5LCBpbmRleCkgPT4ge1xuICAgICAgZGF5LmlubmVyVGV4dCA9IGAke2ZvcmVjYXN0RGF5W2luZGV4XS5kYXkubWF4dGVtcF9jfSDCsEYgKEhpZ2gpYDtcbiAgICB9KTtcblxuICAgIGZvcmVjYXN0VGVtcExvdy5mb3JFYWNoKChkYXksIGluZGV4KSA9PiB7XG4gICAgICBkYXkuaW5uZXJUZXh0ID0gYCR7Zm9yZWNhc3REYXlbaW5kZXhdLmRheS5taW50ZW1wX2N9IMKwRiAoTG93KWA7XG4gICAgfSk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0b2dnbGVIYW5kbGVyKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGV2ZW50LmN1cnJlbnRUYXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufVxuXG50b2dnbGVTd2l0Y2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZUhhbmRsZXIpO1xuXG5leHBvcnQgeyBnZXRXZWF0aGVyTG9jYXRpb24sIGdldFRocmVlRGF5Rm9yZWNhc3QgfTtcbiIsImNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuZm9ybUNvbnRhaW5lci5jbGFzc05hbWUgPSBcImZvcm0tY29udGFpbmVyXCI7XG5cbmNvbnN0IGZvcm1IVE1MID0gYFxuPGRpdiBjbGFzcz1cIm91dHNpZGUtZm9ybS1jb250YWluZXJcIj5cbjxmb3JtIGNsYXNzPVwiZm9ybVwiIGFjdGlvbj1cIlwiPlxuPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJsb2NhdGlvblwiIG5hbWU9XCJsb2NhdGlvblwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgTG9jYXRpb25cIiAvPlxuPGJ1dHRvbiBjbGFzcz1cInN1Ym1pdC1idXR0b25cIj48aW1nIHNyYz1cIi4uL3NyYy9zZWFyY2gucG5nXCIgLz48L2J1dHRvbj5cbjwvZm9ybT5cbjxkaXYgY2xhc3M9XCJ0b2dnbGVcIj5cbjxkaXYgY2xhc3M9XCJ0b2dnbGUtbGFiZWxcIj5DPC9kaXY+XG48ZGl2IGNsYXNzPVwidG9nZ2xlLXN3aXRjaFwiPjwvZGl2PlxuPGRpdiBjbGFzcz1cInRvZ2dsZS1sYWJlbCBhY3RpdmVcIj5GPC9kaXY+XG48L2Rpdj5cbjwvZGl2PlxuYDtcblxuZm9ybUNvbnRhaW5lci5pbm5lckhUTUwgPSBmb3JtSFRNTDtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgZ2V0V2VhdGhlckxvY2F0aW9uLCBnZXRUaHJlZURheUZvcmVjYXN0IH0gZnJvbSBcIi4vYXBpXCI7XG5cbmdldFdlYXRoZXJMb2NhdGlvbigpO1xuXG5nZXRUaHJlZURheUZvcmVjYXN0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=