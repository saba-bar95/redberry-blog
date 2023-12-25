/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



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
/* 3 */
/***/ ((module) => {



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
/* 4 */
/***/ ((module) => {



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
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



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
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(12), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#header-div .header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 100px;
  background-color: #f8fafc;
}
#header-div .header-content button {
  font-family: "FiraGO";
  font-size: 0.9em;
  line-height: 20px;
  color: #f8fafc;
  padding: 10px 20px;
  background-color: #5d37f3;
  border: none;
  border-radius: 8px;
}
#header-div .header-content button:hover {
  cursor: pointer;
}

#main-div .main-content {
  display: flex;
  flex-direction: column;
  gap: 70px;
}
#main-div .main-content .main-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(to right, #f1f5f9, #e2e8f0);
  padding: 70px 90px 0px 120px;
}
#main-div .main-content .main-info h1 {
  font-family: inherit;
  font-size: 4.8em;
  color: #1a1a1f;
}
#main-div .categories-container {
  padding: 30px 300px;
  display: grid;
  grid-template-columns: repeat(7, minmax(100px, 1fr));
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
}
#main-div .categories-container .category {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  border-radius: 30px;
}
#main-div .categories-container .category:hover {
  cursor: pointer;
  scale: 1.05;
  transition-duration: 0.3s;
}
#main-div .categories-container .category p {
  font-family: "FiraGO";
  text-align: center;
  color: black !important;
  overflow: hidden;
  text-overflow: ellipsis;
}
#main-div .categories-container .category p:hover {
  overflow: visible;
}

#modal-container {
  font-family: "FiraGO";
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
}
#modal-container .modal-content {
  display: flex;
  flex-direction: column;
  background-color: #fefefe;
  padding: 20px 30px 35px 30px;
  width: 480px;
  transform: translateY(-50%);
  border-radius: 12px;
}
#modal-container .modal-content .x-img {
  align-self: end;
  height: 12px;
  opacity: 0.6;
}
#modal-container .modal-content .x-img:hover {
  cursor: pointer;
  scale: 1.1;
  transition-duration: 0.5s;
}
#modal-container .modal-content .input-container {
  display: flex;
  flex-direction: column;
}
#modal-container .modal-content .input-container h1 {
  text-align: center;
  margin-bottom: 30px;
  line-height: 32px;
}
#modal-container .modal-content .input-container label {
  font-size: 0.9em;
  font-weight: 600;
  line-height: 20px;
  margin-bottom: 7px;
}
#modal-container .modal-content .input-container input {
  font-family: inherit;
  font-size: 0.9em;
  border: 2px solid #000000;
  outline: none;
  background-color: #f7f7ff;
  border-radius: 12px;
  padding: 10px;
  margin-bottom: 25px;
}
#modal-container .modal-content .input-container input:focus {
  border-color: #5d37f3;
}
#modal-container .modal-content .error-container {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}
#modal-container .modal-content .error-container p {
  font-size: 0.9em;
  color: #ff0000;
}
#modal-container .modal-content .success-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}
#modal-container .modal-content .success-container h1 {
  font-size: 1.3em;
  color: #1a1a1f;
}
#modal-container .modal-content button {
  font-family: inherit;
  font-size: 0.9em;
  padding: 12px;
  border: none;
  background-color: #5d37f3;
  border-radius: 8px;
  color: #ffffff;
  font-weight: 600;
  letter-spacing: 0.03em;
}
#modal-container .modal-content button:hover {
  cursor: pointer;
}

#blog-adder {
  font-family: "FiraGO";
  padding: 50px 70px 250px 70px;
  border-top: 1px solid #e4e3eb;
  position: relative;
}
#blog-adder .back-arrow {
  position: absolute;
}
#blog-adder .back-arrow:hover {
  cursor: pointer;
}
#blog-adder .blog-adder-content {
  padding: 0px 400px;
}
#blog-adder .blog-adder-content h1 {
  font-size: 2.3em;
  color: #1a1a1f;
  line-height: 40px;
  font-weight: 700;
  margin-bottom: 60px;
}
#blog-adder .blog-adder-content .blog-form {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
#blog-adder .blog-adder-content .blog-form .img-input-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
#blog-adder .blog-adder-content .blog-form .img-input-container .image-uploader {
  width: 600px;
  background-color: #e5e7eb;
  border: 1.5px dashed #85858d;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 80px 100px;
  gap: 30px;
}
#blog-adder .blog-adder-content .blog-form .img-input-container .image-uploader img {
  align-self: center;
}
#blog-adder .blog-adder-content .blog-form .img-input-container .image-uploader .image-texts {
  display: flex;
  justify-content: center;
  gap: 5px;
}
#blog-adder .blog-adder-content .blog-form .img-input-container .image-uploader .image-texts label {
  text-decoration: underline;
  cursor: pointer;
  font-weight: 700;
}
#blog-adder .blog-adder-content .blog-form .img-input-container .image-uploader .image-texts img {
  cursor: pointer;
}
#blog-adder .blog-adder-content .blog-form button {
  align-self: start;
}

@font-face {
  font-family: "FiraGO";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.hidden {
  display: none !important;
}

body {
  background-color: #f1f5f9;
  min-height: 100vh;
}`, "",{"version":3,"sources":["webpack://./src/styles/header.scss","webpack://./src/index.scss","webpack://./src/styles/main.scss","webpack://./src/styles/loginModal.scss","webpack://./src/styles/blogAdder.scss"],"names":[],"mappings":"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","sourcesContent":["#header-div {\n  .header-content {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 24px 100px;\n    background-color: #f8fafc;\n\n    button {\n      font-family: \"FiraGO\";\n      font-size: 0.9em;\n      line-height: 20px;\n      color: #f8fafc;\n      padding: 10px 20px;\n      background-color: #5d37f3;\n      border: none;\n      border-radius: 8px;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n}\n","@use \"/src/styles/header.scss\";\n@use \"/src/styles/main.scss\";\n@use \"/src/styles/loginModal.scss\";\n@use \"/src/styles/blogAdder.scss\";\n\n@font-face {\n  font-family: \"FiraGO\";\n  src: url(\"/src/assets/fonts/FiraGO/FiraGO-Regular.otf\");\n}\n\n$body-color: #f1f5f9;\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.hidden {\n  display: none !important;\n}\n\nbody {\n  background-color: $body-color;\n  min-height: 100vh;\n}\n","#main-div {\n  .main-content {\n    display: flex;\n    flex-direction: column;\n    gap: 70px;\n\n    .main-info {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      background-image: linear-gradient(to right, #f1f5f9, #e2e8f0);\n      padding: 70px 90px 0px 120px;\n\n      h1 {\n        font-family: inherit;\n        font-size: 4.8em;\n        color: #1a1a1f;\n      }\n    }\n  }\n\n  .categories-container {\n    padding: 30px 300px;\n    display: grid;\n    grid-template-columns: repeat(7, minmax(100px, 1fr));\n    grid-template-rows: 1fr 1fr;\n    grid-gap: 10px;\n\n    .category {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding: 4px 8px;\n      border-radius: 30px;\n      &:hover {\n        cursor: pointer;\n        scale: 1.05;\n        transition-duration: 0.3s;\n      }\n\n      p {\n        font-family: \"FiraGO\";\n        text-align: center;\n        color: black !important;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        &:hover {\n          overflow: visible;\n        }\n      }\n    }\n  }\n}\n","#modal-container {\n  font-family: \"FiraGO\";\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n\n  .modal-content {\n    display: flex;\n    flex-direction: column;\n    background-color: #fefefe;\n    padding: 20px 30px 35px 30px;\n    width: 480px;\n    transform: translateY(-50%);\n    border-radius: 12px;\n\n    .x-img {\n      align-self: end;\n      height: 12px;\n      opacity: 0.6;\n      &:hover {\n        cursor: pointer;\n        scale: 1.1;\n        transition-duration: 0.5s;\n      }\n    }\n\n    .input-container {\n      display: flex;\n      flex-direction: column;\n\n      h1 {\n        text-align: center;\n        margin-bottom: 30px;\n        line-height: 32px;\n      }\n\n      label {\n        font-size: 0.9em;\n        font-weight: 600;\n        line-height: 20px;\n        margin-bottom: 7px;\n      }\n\n      input {\n        font-family: inherit;\n        font-size: 0.9em;\n        border: 2px solid #000000;\n        outline: none;\n        background-color: #f7f7ff;\n        border-radius: 12px;\n        padding: 10px;\n        margin-bottom: 25px;\n        &:focus {\n          border-color: #5d37f3;\n        }\n      }\n    }\n\n    .error-container {\n      display: flex;\n      align-items: center;\n      gap: 15px;\n      margin-bottom: 25px;\n\n      p {\n        font-size: 0.9em;\n        color: #ff0000;\n      }\n    }\n\n    .success-container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      gap: 15px;\n      margin-bottom: 20px;\n\n      h1 {\n        font-size: 1.3em;\n        color: #1a1a1f;\n      }\n    }\n\n    button {\n      font-family: inherit;\n      font-size: 0.9em;\n      padding: 12px;\n      border: none;\n      background-color: #5d37f3;\n      border-radius: 8px;\n      color: #ffffff;\n      font-weight: 600;\n      letter-spacing: 0.03em;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n}\n","#blog-adder {\n  font-family: \"FiraGO\";\n  padding: 50px 70px 250px 70px;\n  border-top: 1px solid #e4e3eb;\n  position: relative;\n\n  .back-arrow {\n    position: absolute;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n\n  .blog-adder-content {\n    padding: 0px 400px;\n\n    h1 {\n      font-size: 2.3em;\n      color: #1a1a1f;\n      line-height: 40px;\n      font-weight: 700;\n      margin-bottom: 60px;\n    }\n\n    .blog-form {\n      display: flex;\n      flex-direction: column;\n      gap: 50px;\n\n      .img-input-container {\n        display: flex;\n        flex-direction: column;\n        gap: 12px;\n\n        .image-uploader {\n          width: 600px;\n          background-color: #e5e7eb;\n          border: 1.5px dashed #85858d;\n          border-radius: 12px;\n          display: flex;\n          flex-direction: column;\n          padding: 80px 100px;\n          gap: 30px;\n\n          img {\n            align-self: center;\n          }\n\n          .image-texts {\n            display: flex;\n            justify-content: center;\n            gap: 5px;\n\n            label {\n              text-decoration: underline;\n              cursor: pointer;\n              font-weight: 700;\n            }\n\n            img {\n              cursor: pointer;\n            }\n          }\n        }\n      }\n\n      button {\n        align-self: start;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



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
/* 10 */
/***/ ((module) => {



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
/* 11 */
/***/ ((module) => {



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
/* 12 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b4a58aae1f6b1a3d6be.otf";

/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _src_assets_images_redberry_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _loginModal_createLoginModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _blogAdder_displayBlogAdder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);




function createHeader(status) {
  const header = document.createElement("div");
  header.setAttribute("id", "header-div");

  const headerContent = document.createElement("div");
  headerContent.classList.add("header-content");
  header.appendChild(headerContent);

  const redberryLogo = new Image();
  redberryLogo.src = _src_assets_images_redberry_logo_png__WEBPACK_IMPORTED_MODULE_0__;
  headerContent.appendChild(redberryLogo);

  const entryBtn = document.createElement("button");
  entryBtn.textContent = "შესვლა";
  entryBtn.classList.add("entry-button");
  headerContent.appendChild(entryBtn);

  const blogAdderBtn = document.createElement("button");
  blogAdderBtn.textContent = "დაამატე ბლოგი";
  blogAdderBtn.classList.add("blog-adder-button");
  headerContent.appendChild(blogAdderBtn);

  if (status) entryBtn.classList.add("hidden");
  if (!status) blogAdderBtn.classList.add("hidden");

  entryBtn.addEventListener("click", _loginModal_createLoginModal__WEBPACK_IMPORTED_MODULE_1__["default"]);

  blogAdderBtn.addEventListener("click", _blogAdder_displayBlogAdder__WEBPACK_IMPORTED_MODULE_2__["default"]);

  return header;
}


/***/ }),
/* 14 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aa2a7b635abed30edf40.png";

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createLoginModal),
/* harmony export */   removeLoginModal: () => (/* binding */ removeLoginModal)
/* harmony export */ });
/* harmony import */ var _src_assets_images_x_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _src_assets_images_info_circle_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var _src_assets_images_success_circle_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _logic_loginUser_loginUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var _updateLoginModalUI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);






let removeLoginModal;

function createLoginModal() {
  const body = document.querySelector("body");
  body.style.overflow = "hidden";

  const modalContainer = document.createElement("div");
  modalContainer.setAttribute("id", "modal-container");
  body.appendChild(modalContainer);

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  modalContainer.appendChild(modalContent);

  const xImg = new Image();
  xImg.classList.add("x-img");
  xImg.src = _src_assets_images_x_icon_svg__WEBPACK_IMPORTED_MODULE_0__;
  modalContent.appendChild(xImg);

  const inputContainer = document.createElement("div");
  inputContainer.classList.add("input-container");
  modalContent.appendChild(inputContainer);

  const modalHeaderText = document.createElement("h1");
  modalHeaderText.textContent = "შესვლა";
  inputContainer.appendChild(modalHeaderText);

  const modalLabel = document.createElement("label");
  modalLabel.textContent = "ელ-ფოსტა";
  modalLabel.setAttribute("for", "email");
  inputContainer.appendChild(modalLabel);

  const emailInput = document.createElement("input");
  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("id", "email");
  emailInput.setAttribute("placeholder", "Example@redberry.ge");
  emailInput.setAttribute("required", "");
  inputContainer.appendChild(emailInput);
  emailInput.focus();

  const successContainer = document.createElement("div");
  successContainer.classList.add("success-container", "hidden");
  modalContent.appendChild(successContainer);

  const successImg = new Image();
  successImg.src = _src_assets_images_success_circle_png__WEBPACK_IMPORTED_MODULE_2__;
  successContainer.appendChild(successImg);

  const successText = document.createElement("h1");
  successText.textContent = "წარმატებული ავტორიზაცია";
  successContainer.appendChild(successText);

  const errorContainer = document.createElement("div");
  errorContainer.classList.add("error-container", "hidden");
  modalContent.appendChild(errorContainer);

  const redCircle = new Image();
  redCircle.src = _src_assets_images_info_circle_png__WEBPACK_IMPORTED_MODULE_1__;
  errorContainer.appendChild(redCircle);

  const errorMsg = document.createElement("p");
  errorMsg.textContent = "ელ-ფოსტა არ მოიძებნა";
  errorContainer.appendChild(errorMsg);

  const entryBtn = document.createElement("button");
  entryBtn.textContent = "შესვლა";
  entryBtn.classList.add("entry-btn");
  modalContent.appendChild(entryBtn);

  const successBtn = document.createElement("button");
  successBtn.classList.add("success-btn", "hidden");
  successBtn.textContent = "კარგი";
  modalContent.appendChild(successBtn);

  modalContainer.addEventListener("click", (e) => {
    if (e.target.id === "modal-container") removeLoginModal(e);
  });

  xImg.addEventListener("click", (e) => {
    removeLoginModal(e);
  });

  entryBtn.addEventListener("click", updateLoginModal);

  emailInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      (0,_updateLoginModalUI__WEBPACK_IMPORTED_MODULE_4__["default"])();
    }
  });

  function updateLoginModal() {
    if ((0,_logic_loginUser_loginUser__WEBPACK_IMPORTED_MODULE_3__["default"])(emailInput)) {
      (0,_logic_loginUser_loginUser__WEBPACK_IMPORTED_MODULE_3__["default"])(emailInput).then((data) => {
        (0,_updateLoginModalUI__WEBPACK_IMPORTED_MODULE_4__["default"])(data, modalContainer);
      });
    }
  }

  removeLoginModal = function (e) {
    if (!entryBtn.classList.contains("hidden")) {
      modalContainer.remove();
      body.style.overflow = "visible";
    }

    if (e.target.classList.contains("success-btn")) {
      modalContainer.remove();
      body.style.overflow = "visible";
    }
  };
}




/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9c60b4f8f13653ae2c0b.svg";

/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a333296c5e5e2800ead6.png";

/***/ }),
/* 18 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "62e47bc4e5495f7a587c.png";

/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loginUser)
/* harmony export */ });
/* harmony import */ var _validateEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _checkEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);



function loginUser(input) {
  if ((0,_validateEmail__WEBPACK_IMPORTED_MODULE_0__["default"])(input)) {
    return (0,_checkEmail__WEBPACK_IMPORTED_MODULE_1__["default"])(input.value).then((data) => data);
  }
}


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateEmail)
/* harmony export */ });
function validateEmail(input) {
  if (!input.validity.valid) {
    input.focus();
    alert("Please match the format requested");
    return false;
  }
  if (!input.value.endsWith("@redberry.ge")) {
    alert("Your email must end with @redberry.ge");
    const atPosition = input.value.indexOf("@") + 1;
    input.value = input.value.substring(0, atPosition);
    input.focus();
    return false;
  }
  if (input.value.endsWith("@redberry.ge")) return true;
}


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ checkEmail)
/* harmony export */ });
async function checkEmail(email) {
  try {
    const response = await fetch(
      "https://api.blog.redberryinternship.ge/api/login",
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: `${email}`,
        }),
      }
    );
    if (response.status === 204) {
      return true;
    } else if (response.status === 422) {
      return false;
    }
  } catch (error) {
    console.error("Error:", error);
  }
}


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateLoginModalUI)
/* harmony export */ });
/* harmony import */ var _createLoginModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);


function updateLoginModalUI(data, div) {
  const inputContainer = div.querySelector(".input-container");
  const emailInput = div.querySelector("input");
  const successContainer = div.querySelector(".success-container");
  const errorContainer = div.querySelector(".error-container");
  const entryBtn = div.querySelector(".entry-btn");
  const successBtn = div.querySelector(".success-btn");
  const xImg = div.querySelector(".x-img");

  if (data) {
    inputContainer.classList.add("hidden");
    successContainer.classList.remove("hidden");
    entryBtn.classList.add("hidden");
    successBtn.classList.remove("hidden");
    errorContainer.classList.add("hidden");
    xImg.classList.add("hidden");

    successBtn.addEventListener("click", function (e) {
      (0,_createLoginModal__WEBPACK_IMPORTED_MODULE_0__.removeLoginModal)(e);
      document.querySelector(".entry-button").classList.add("hidden");
      document.querySelector(".blog-adder-button").classList.remove("hidden");
      localStorage.setItem("login", JSON.stringify(true));
    });
  }

  if (!data) {
    errorContainer.classList.remove("hidden");
    emailInput.style.borderColor = "#ff0000";
    emailInput.style.marginBottom = "10px";

    emailInput.addEventListener("focus", () => {
      emailInputEvents("#5d37f3");
    });
    emailInput.addEventListener("input", () => {
      emailInputEvents("#5d37f3");
    });
    emailInput.addEventListener("blur", () => {
      emailInputEvents("#000000");
    });

    function emailInputEvents(color) {
      emailInput.style.borderColor = color;
      emailInput.style.marginBottom = "20px";
      if (!errorContainer.classList.contains("hidden"))
        errorContainer.classList.add("hidden");
    }
  }
}


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayBlogAdder)
/* harmony export */ });
function displayBlogAdder() {
  const blogAdder = document.querySelector("#blog-adder");
  const mainDiv = document.querySelector("#main-div");

  if (blogAdder.classList.contains("hidden")) {
    blogAdder.classList.remove("hidden");
    mainDiv.classList.add("hidden");
  }

  localStorage.setItem("blog-adder-status", JSON.stringify(true));
}


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createMain)
/* harmony export */ });
/* harmony import */ var _src_assets_images_blog_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);


function createMain(status) {
  const main = document.createElement("div");
  main.setAttribute("id", "main-div");
  if (status) main.classList.add("hidden");

  const mainContent = document.createElement("div");
  mainContent.classList.add("main-content");
  main.appendChild(mainContent);

  const mainInfo = document.createElement("div");
  mainInfo.classList.add("main-info");
  mainContent.appendChild(mainInfo);

  const blogText = document.createElement("h1");
  blogText.textContent = "ბლოგი";
  mainInfo.appendChild(blogText);

  const blogLogo = new Image();
  blogLogo.src = _src_assets_images_blog_logo_png__WEBPACK_IMPORTED_MODULE_0__;
  mainInfo.appendChild(blogLogo);

  return main;
}


/***/ }),
/* 25 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4afb9cf34dfc3f4c7593.png";

/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBlogAdder)
/* harmony export */ });
/* harmony import */ var _src_assets_images_back_arrow_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _logic_blogAdder_validateBlogInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _imageUploader_createImageUploader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);




function createBlogAdder(status, blogInfo) {
  const blogAdder = document.createElement("div");
  blogAdder.setAttribute("id", "blog-adder");

  if (!status) blogAdder.classList.add("hidden");

  const backArrow = new Image();
  backArrow.classList.add("back-arrow");
  backArrow.src = _src_assets_images_back_arrow_png__WEBPACK_IMPORTED_MODULE_0__;
  blogAdder.appendChild(backArrow);

  const blogAdderContent = document.createElement("div");
  blogAdderContent.classList.add("blog-adder-content");
  blogAdder.appendChild(blogAdderContent);

  const blogAdderText = document.createElement("h1");
  blogAdderText.textContent = "ბლოგის დამატება";
  blogAdderContent.appendChild(blogAdderText);

  const blogAdderForm = document.createElement("form");
  blogAdderForm.classList.add("blog-form");
  blogAdderForm.setAttribute("id", "blog-form");
  blogAdderContent.appendChild(blogAdderForm);

  (0,_imageUploader_createImageUploader__WEBPACK_IMPORTED_MODULE_2__["default"])(blogAdderForm, blogInfo, backArrow);

  const addBlogBtn = document.createElement("button");
  addBlogBtn.textContent = "გამოქვეყნება";
  addBlogBtn.classList.add("add-blog-btn");
  blogAdderForm.appendChild(addBlogBtn);

  addBlogBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const blogInfo = JSON.parse(localStorage.getItem("blog-info"));

    (0,_logic_blogAdder_validateBlogInfo__WEBPACK_IMPORTED_MODULE_1__["default"])(blogInfo);
  });
  return blogAdder;
}


/***/ }),
/* 27 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c76c43741c0abf5a879d.png";

/***/ }),
/* 28 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateBlogInfo)
/* harmony export */ });
/* harmony import */ var _validateImg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);


function validateBlogInfo(blogInfo) {
  if ((0,_validateImg__WEBPACK_IMPORTED_MODULE_0__["default"])(blogInfo)) return true;
}


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateImg)
/* harmony export */ });
function validateImg(blogInfo) {
  if (blogInfo.imageURL) {
    console.log("Image Exists");
    return true;
  }

  if (!blogInfo.imageURL) {
    alert("Please upload an image");
    return false;
  }
}


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createImageUploader)
/* harmony export */ });
/* harmony import */ var _src_assets_images_folder_add_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _src_assets_images_remove_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var _updateImageUploader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var _main_displayMainDiv__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);





function createImageUploader(
  blogAdderForm,
  blogInfo,
  backArrow
) {
  const imageInputContainer = document.createElement("div");
  imageInputContainer.classList.add("img-input-container");
  blogAdderForm.appendChild(imageInputContainer);

  const uploadImageText = document.createElement("p");
  uploadImageText.textContent = "ატვირთეთ ფოტო";
  imageInputContainer.appendChild(uploadImageText);

  const imageUploader = document.createElement("div");
  imageUploader.setAttribute("id", "image-uploader");
  imageUploader.classList.add("image-uploader");
  imageInputContainer.appendChild(imageUploader);

  const imageInput = document.createElement("input");
  imageInput.setAttribute("type", "file");
  imageInput.setAttribute("id", "image-input");
  imageInput.setAttribute("accept", "image/*");
  imageInput.setAttribute("hidden", "");
  imageUploader.appendChild(imageInput);

  const folderAdder = new Image();
  folderAdder.classList.add("folder-adder-img");
  folderAdder.src = _src_assets_images_folder_add_png__WEBPACK_IMPORTED_MODULE_0__;
  imageUploader.appendChild(folderAdder);

  const imageTexts = document.createElement("div");
  imageTexts.classList.add("image-texts");
  imageUploader.appendChild(imageTexts);

  const imageTextSpan = document.createElement("span");
  imageTextSpan.classList.add("image-text-span");
  imageTextSpan.textContent = "ჩააგდეთ ფაილი აქ ან";
  imageTexts.appendChild(imageTextSpan);

  const imageInputLabel = document.createElement("label");
  imageInputLabel.setAttribute("for", "image-input");
  imageInputLabel.classList.add("image-input-label");
  imageInputLabel.textContent = "აირჩიეთ ფაილი";
  imageTexts.appendChild(imageInputLabel);

  const removeImg = new Image();
  removeImg.src = _src_assets_images_remove_png__WEBPACK_IMPORTED_MODULE_1__;
  removeImg.classList.add("remove-img", "hidden");
  imageTexts.appendChild(removeImg);

  if (blogInfo && blogInfo.imageURL) {
    (0,_updateImageUploader__WEBPACK_IMPORTED_MODULE_2__["default"])(
      imageInput,
      blogInfo,
      imageUploader,
      imageTexts,
      imageInputLabel,
      imageTextSpan,
      folderAdder,
      removeImg,
      imageInput,
      true
    );
  }

  imageInput.addEventListener("change", function (e) {
    (0,_updateImageUploader__WEBPACK_IMPORTED_MODULE_2__["default"])(
      e.target,
      blogInfo,
      imageUploader,
      imageTexts,
      imageInputLabel,
      imageTextSpan,
      folderAdder,
      removeImg,
      imageInput,
      false
    );
  });

  removeImg.addEventListener("click", (e) => {
    (0,_updateImageUploader__WEBPACK_IMPORTED_MODULE_2__["default"])(
      e.target,
      blogInfo,
      imageUploader,
      imageTexts,
      imageInputLabel,
      imageTextSpan,
      folderAdder,
      removeImg,
      imageInput,
      false
    );
  });

  backArrow.addEventListener("click", function (e) {
    (0,_main_displayMainDiv__WEBPACK_IMPORTED_MODULE_3__["default"])();

    (0,_updateImageUploader__WEBPACK_IMPORTED_MODULE_2__["default"])(
      e.target,
      blogInfo,
      imageUploader,
      imageTexts,
      imageInputLabel,
      imageTextSpan,
      folderAdder,
      removeImg,
      imageInput,
      false
    );
  });

  return imageInputContainer;
}


/***/ }),
/* 31 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de8e7a5c0281b0e87f8c.png";

/***/ }),
/* 32 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f463719ae11ed2ff4bba.png";

/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateImageUploader)
/* harmony export */ });
function updateImageUploader(
  e,
  blogInfo,
  imageUploader,
  imageTexts,
  imageInputLabel,
  imageTextSpan,
  folderAdder,
  removeImg,
  imageInput,
  refreshPage
) {
  if (refreshPage && e.id === "image-input") {
    image();
    imageInputLabel.textContent = blogInfo.imageName;
    return;
  }

  if (!refreshPage && e.id === "image-input") {
    if (!imageInput.files[0]) return;
    image();
    imageInputLabel.textContent = imageInput.files[0].name;

    const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
    blogInfo.imageURL = imageInput.value;
    blogInfo.imageName = imageInput.files[0].name;
    localStorage.setItem("blog-info", JSON.stringify(blogInfo));
    return;
  }

  if (e.classList.contains("remove-img")) {
    noImage();

    const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
    blogInfo.imageURL = null;
    blogInfo.imageName = null;
    localStorage.setItem("blog-info", JSON.stringify(blogInfo));
  }

  if (e.classList.contains("back-arrow")) {
    noImage();

    const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
    for (let [key, value] of Object.entries(blogInfo)) {
      blogInfo[key] = null;
    }
    localStorage.setItem("blog-info", JSON.stringify(blogInfo));
  }

  function image() {
    imageUploader.style.padding = "20px";
    imageTexts.style.justifyContent = "space-between";
    imageInputLabel.style.textDecoration = "none";
    imageInputLabel.style.fontWeight = "500";
    imageTextSpan.classList.add("hidden");
    folderAdder.classList.add("hidden");
    removeImg.classList.remove("hidden");
  }

  function noImage() {
    imageUploader.style.padding = "80px 100px";
    imageTexts.style.justifyContent = "center";
    imageInputLabel.textContent = "აირჩიეთ ფაილი";
    imageInputLabel.style.textDecoration = "underline";
    imageInputLabel.style.fontWeight = "700";
    imageTextSpan.classList.remove("hidden");
    folderAdder.classList.remove("hidden");
    removeImg.classList.add("hidden");
    imageInput.value = "";
  }
}


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ displayMainDiv)
/* harmony export */ });
function displayMainDiv() {
  const mainDiv = document.querySelector("#main-div");
  const blogAdder = document.querySelector("#blog-adder");
  blogAdder.classList.add("hidden");
  mainDiv.classList.remove("hidden");

  localStorage.setItem("blog-adder-status", JSON.stringify(false));
}


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fetchCategories)
/* harmony export */ });
async function fetchCategories(url) {
  try {
    const response = await fetch(`${url}/categories`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.log("There was a problem with the fetch operation: ", error);
  }
}


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createCategories)
/* harmony export */ });
function createCategories(data) {
  const mainContent = document.querySelector(".main-content");

  const categoriesContainer = document.createElement("div");
  categoriesContainer.classList.add("categories-container");
  mainContent.appendChild(categoriesContainer);

  data.data.forEach((el) => {
    const category = document.createElement("div");
    category.classList.add("category", `category-${el.id}`);
    category.style.backgroundColor = el.background_color;
    categoriesContainer.appendChild(category);

    const titleText = document.createElement("p");
    titleText.textContent = el.title;
    titleText.style.color = el.text_color;
    category.appendChild(titleText);
  });
}


/***/ })
/******/ 	]);
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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			0: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _components_dom_header_createHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _components_dom_main_createMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _components_dom_blogAdder_createBlogAdder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26);
/* harmony import */ var _components_logic_fetchCategories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35);
/* harmony import */ var _components_dom_main_createCategories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36);







const body = document.querySelector("body");
const url = "https://api.blog.redberryinternship.ge/api";
const token =
  "fc9a807608d006f9d7604bc78bf62b027a2247c0c232dc217a6e1d5476d5271a";

const loginStatus = JSON.parse(localStorage.getItem("login"));
if (!loginStatus) localStorage.setItem("login", JSON.stringify(false));

const blogAdderStatus = JSON.parse(localStorage.getItem("blog-adder-status"));
if (!blogAdderStatus)
  localStorage.setItem("blog-adder-status", JSON.stringify(false));

const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
if (!blogInfo) localStorage.setItem("blog-info", JSON.stringify({}));

body.appendChild((0,_components_dom_header_createHeader__WEBPACK_IMPORTED_MODULE_1__["default"])(loginStatus));
body.appendChild((0,_components_dom_main_createMain__WEBPACK_IMPORTED_MODULE_2__["default"])(blogAdderStatus));
body.appendChild((0,_components_dom_blogAdder_createBlogAdder__WEBPACK_IMPORTED_MODULE_3__["default"])(blogAdderStatus, blogInfo));

(0,_components_logic_fetchCategories__WEBPACK_IMPORTED_MODULE_4__["default"])(url).then((data) => {
  (0,_components_dom_main_createCategories__WEBPACK_IMPORTED_MODULE_5__["default"])(data);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sME9BQTBPLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFB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QTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXlCO0FBQ3VDO0FBQ047QUFDZTtBQUNSO0FBQ0s7O0FBRXRFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0VBQWtFOztBQUVsRSxpQkFBaUIsK0VBQVk7QUFDN0IsaUJBQWlCLDJFQUFVO0FBQzNCLGlCQUFpQixxRkFBZTs7QUFFaEMsNkVBQWU7QUFDZixFQUFFLGlGQUFnQjtBQUNsQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9pbmRleC5zY3NzPzcyMjMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vaGVhZGVyL2NyZWF0ZUhlYWRlci5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2hlYWRlci9sb2dpbk1vZGFsL2NyZWF0ZUxvZ2luTW9kYWwuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2xvZ2ljL2xvZ2luVXNlci9sb2dpblVzZXIuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2xvZ2ljL2xvZ2luVXNlci92YWxpZGF0ZUVtYWlsLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9sb2dpYy9sb2dpblVzZXIvY2hlY2tFbWFpbC5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2hlYWRlci9sb2dpbk1vZGFsL3VwZGF0ZUxvZ2luTW9kYWxVSS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2Jsb2dBZGRlci9kaXNwbGF5QmxvZ0FkZGVyLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vbWFpbi9jcmVhdGVNYWluLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vYmxvZ0FkZGVyL2NyZWF0ZUJsb2dBZGRlci5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRlQmxvZ0luZm8uanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2xvZ2ljL2Jsb2dBZGRlci92YWxpZGF0ZUltZy5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2Jsb2dBZGRlci9pbWFnZVVwbG9hZGVyL2NyZWF0ZUltYWdlVXBsb2FkZXIuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2RvbS9ibG9nQWRkZXIvaW1hZ2VVcGxvYWRlci91cGRhdGVJbWFnZVVwbG9hZGVyLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vbWFpbi9kaXNwbGF5TWFpbkRpdi5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvZmV0Y2hDYXRlZ29yaWVzLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vbWFpbi9jcmVhdGVDYXRlZ29yaWVzLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udHMvRmlyYUdPL0ZpcmFHTy1SZWd1bGFyLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI2hlYWRlci1kaXYgLmhlYWRlci1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyNHB4IDEwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmYWZjO1xufVxuI2hlYWRlci1kaXYgLmhlYWRlci1jb250ZW50IGJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpcmFHT1wiO1xuICBmb250LXNpemU6IDAuOWVtO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICNmOGZhZmM7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkMzdmMztcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4jaGVhZGVyLWRpdiAuaGVhZGVyLWNvbnRlbnQgYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jbWFpbi1kaXYgLm1haW4tY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNzBweDtcbn1cbiNtYWluLWRpdiAubWFpbi1jb250ZW50IC5tYWluLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2YxZjVmOSwgI2UyZThmMCk7XG4gIHBhZGRpbmc6IDcwcHggOTBweCAwcHggMTIwcHg7XG59XG4jbWFpbi1kaXYgLm1haW4tY29udGVudCAubWFpbi1pbmZvIGgxIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogNC44ZW07XG4gIGNvbG9yOiAjMWExYTFmO1xufVxuI21haW4tZGl2IC5jYXRlZ29yaWVzLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDMwcHggMzAwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIG1pbm1heCgxMDBweCwgMWZyKSk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgZ3JpZC1nYXA6IDEwcHg7XG59XG4jbWFpbi1kaXYgLmNhdGVnb3JpZXMtY29udGFpbmVyIC5jYXRlZ29yeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuI21haW4tZGl2IC5jYXRlZ29yaWVzLWNvbnRhaW5lciAuY2F0ZWdvcnk6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHNjYWxlOiAxLjA1O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xufVxuI21haW4tZGl2IC5jYXRlZ29yaWVzLWNvbnRhaW5lciAuY2F0ZWdvcnkgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpcmFHT1wiO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbiNtYWluLWRpdiAuY2F0ZWdvcmllcy1jb250YWluZXIgLmNhdGVnb3J5IHA6aG92ZXIge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuI21vZGFsLWNvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpcmFHT1wiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiNtb2RhbC1jb250YWluZXIgLm1vZGFsLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xuICBwYWRkaW5nOiAyMHB4IDMwcHggMzVweCAzMHB4O1xuICB3aWR0aDogNDgwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbiNtb2RhbC1jb250YWluZXIgLm1vZGFsLWNvbnRlbnQgLngtaW1nIHtcbiAgYWxpZ24tc2VsZjogZW5kO1xuICBoZWlnaHQ6IDEycHg7XG4gIG9wYWNpdHk6IDAuNjtcbn1cbiNtb2RhbC1jb250YWluZXIgLm1vZGFsLWNvbnRlbnQgLngtaW1nOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBzY2FsZTogMS4xO1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xufVxuI21vZGFsLWNvbnRhaW5lciAubW9kYWwtY29udGVudCAuaW5wdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbiNtb2RhbC1jb250YWluZXIgLm1vZGFsLWNvbnRlbnQgLmlucHV0LWNvbnRhaW5lciBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG59XG4jbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250ZW50IC5pbnB1dC1jb250YWluZXIgbGFiZWwge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xufVxuI21vZGFsLWNvbnRhaW5lciAubW9kYWwtY29udGVudCAuaW5wdXQtY29udGFpbmVyIGlucHV0IHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3ZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4jbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250ZW50IC5pbnB1dC1jb250YWluZXIgaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItY29sb3I6ICM1ZDM3ZjM7XG59XG4jbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250ZW50IC5lcnJvci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4jbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250ZW50IC5lcnJvci1jb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGNvbG9yOiAjZmYwMDAwO1xufVxuI21vZGFsLWNvbnRhaW5lciAubW9kYWwtY29udGVudCAuc3VjY2Vzcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4jbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250ZW50IC5zdWNjZXNzLWNvbnRhaW5lciBoMSB7XG4gIGZvbnQtc2l6ZTogMS4zZW07XG4gIGNvbG9yOiAjMWExYTFmO1xufVxuI21vZGFsLWNvbnRhaW5lciAubW9kYWwtY29udGVudCBidXR0b24ge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQzN2YzO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xufVxuI21vZGFsLWNvbnRhaW5lciAubW9kYWwtY29udGVudCBidXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNibG9nLWFkZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlyYUdPXCI7XG4gIHBhZGRpbmc6IDUwcHggNzBweCAyNTBweCA3MHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U0ZTNlYjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuI2Jsb2ctYWRkZXIgLmJhY2stYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4jYmxvZy1hZGRlciAuYmFjay1hcnJvdzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQge1xuICBwYWRkaW5nOiAwcHggNDAwcHg7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IGgxIHtcbiAgZm9udC1zaXplOiAyLjNlbTtcbiAgY29sb3I6ICMxYTFhMWY7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA1MHB4O1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5pbWctaW5wdXQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5pbWctaW5wdXQtY29udGFpbmVyIC5pbWFnZS11cGxvYWRlciB7XG4gIHdpZHRoOiA2MDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTdlYjtcbiAgYm9yZGVyOiAxLjVweCBkYXNoZWQgIzg1ODU4ZDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogODBweCAxMDBweDtcbiAgZ2FwOiAzMHB4O1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5pbWctaW5wdXQtY29udGFpbmVyIC5pbWFnZS11cGxvYWRlciBpbWcge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmltZy1pbnB1dC1jb250YWluZXIgLmltYWdlLXVwbG9hZGVyIC5pbWFnZS10ZXh0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDVweDtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuaW1nLWlucHV0LWNvbnRhaW5lciAuaW1hZ2UtdXBsb2FkZXIgLmltYWdlLXRleHRzIGxhYmVsIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuaW1nLWlucHV0LWNvbnRhaW5lciAuaW1hZ2UtdXBsb2FkZXIgLmltYWdlLXRleHRzIGltZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSBidXR0b24ge1xuICBhbGlnbi1zZWxmOiBzdGFydDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpcmFHT1wiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9sb2dpbk1vZGFsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYmxvZ0FkZGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNBSjtBREVJO0VBQ0UscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNBTjtBRENNO0VBQ0UsZUFBQTtBQ0NSOztBQ2xCRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QURxQko7QUNuQkk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDZEQUFBO0VBQ0EsNEJBQUE7QURxQk47QUNuQk07RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBRHFCUjtBQ2hCRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG9EQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FEa0JKO0FDaEJJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FEa0JOO0FDakJNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBRG1CUjtBQ2hCTTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QURrQlI7QUNqQlE7RUFDRSxpQkFBQTtBRG1CVjs7QUVsRUE7RUFDRSxxQkFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FGcUVGO0FFbkVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FGcUVKO0FFbkVJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FGcUVOO0FFcEVNO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSx5QkFBQTtBRnNFUjtBRWxFSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBRm9FTjtBRWxFTTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBRm9FUjtBRWpFTTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FGbUVSO0FFaEVNO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUZrRVI7QUVqRVE7RUFDRSxxQkFBQTtBRm1FVjtBRTlESTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBRmdFTjtBRTlETTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBRmdFUjtBRTVESTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FGOEROO0FFNURNO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FGOERSO0FFMURJO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FGNEROO0FFM0RNO0VBQ0UsZUFBQTtBRjZEUjs7QUdoS0E7RUFDRSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBSG1LRjtBR2pLRTtFQUNFLGtCQUFBO0FIbUtKO0FHbEtJO0VBQ0UsZUFBQTtBSG9LTjtBR2hLRTtFQUNFLGtCQUFBO0FIa0tKO0FHaEtJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FIa0tOO0FHL0pJO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBSGlLTjtBRy9KTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7QUhpS1I7QUcvSlE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FIaUtWO0FHL0pVO0VBQ0Usa0JBQUE7QUhpS1o7QUc5SlU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0FIZ0taO0FHOUpZO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUhnS2Q7QUc3Slk7RUFDRSxlQUFBO0FIK0pkO0FHekpNO0VBQ0UsaUJBQUE7QUgySlI7O0FBek5BO0VBQ0UscUJBQUE7RUFDQSw0Q0FBQTtBQTRORjtBQXZOQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUF5TkY7O0FBdE5BO0VBQ0Usd0JBQUE7QUF5TkY7O0FBdE5BO0VBQ0UseUJBYlc7RUFjWCxpQkFBQTtBQXlORlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIjaGVhZGVyLWRpdiB7XFxuICAuaGVhZGVyLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDI0cHggMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJGaXJhR09cXFwiO1xcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgICAgY29sb3I6ICNmOGZhZmM7XFxuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZDM3ZjM7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCJAdXNlIFxcXCIvc3JjL3N0eWxlcy9oZWFkZXIuc2Nzc1xcXCI7XFxuQHVzZSBcXFwiL3NyYy9zdHlsZXMvbWFpbi5zY3NzXFxcIjtcXG5AdXNlIFxcXCIvc3JjL3N0eWxlcy9sb2dpbk1vZGFsLnNjc3NcXFwiO1xcbkB1c2UgXFxcIi9zcmMvc3R5bGVzL2Jsb2dBZGRlci5zY3NzXFxcIjtcXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRmlyYUdPXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvc3JjL2Fzc2V0cy9mb250cy9GaXJhR08vRmlyYUdPLVJlZ3VsYXIub3RmXFxcIik7XFxufVxcblxcbiRib2R5LWNvbG9yOiAjZjFmNWY5O1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRib2R5LWNvbG9yO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblwiLFwiI21haW4tZGl2IHtcXG4gIC5tYWluLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDcwcHg7XFxuXFxuICAgIC5tYWluLWluZm8ge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjFmNWY5LCAjZTJlOGYwKTtcXG4gICAgICBwYWRkaW5nOiA3MHB4IDkwcHggMHB4IDEyMHB4O1xcblxcbiAgICAgIGgxIHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAgICAgZm9udC1zaXplOiA0LjhlbTtcXG4gICAgICAgIGNvbG9yOiAjMWExYTFmO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLmNhdGVnb3JpZXMtY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMzBweCAzMDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgbWlubWF4KDEwMHB4LCAxZnIpKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBncmlkLWdhcDogMTBweDtcXG5cXG4gICAgLmNhdGVnb3J5IHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgcGFkZGluZzogNHB4IDhweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgc2NhbGU6IDEuMDU7XFxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xcbiAgICAgIH1cXG5cXG4gICAgICBwIHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiRmlyYUdPXFxcIjtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIiNtb2RhbC1jb250YWluZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGaXJhR09cXFwiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgLm1vZGFsLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbiAgICBwYWRkaW5nOiAyMHB4IDMwcHggMzVweCAzMHB4O1xcbiAgICB3aWR0aDogNDgwcHg7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG5cXG4gICAgLngtaW1nIHtcXG4gICAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgICAgaGVpZ2h0OiAxMnB4O1xcbiAgICAgIG9wYWNpdHk6IDAuNjtcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHNjYWxlOiAxLjE7XFxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuaW5wdXQtY29udGFpbmVyIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgICAgaDEge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xcbiAgICAgIH1cXG5cXG4gICAgICBsYWJlbCB7XFxuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogN3B4O1xcbiAgICAgIH1cXG5cXG4gICAgICBpbnB1dCB7XFxuICAgICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3ZmY7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxuICAgICAgICAmOmZvY3VzIHtcXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjNWQzN2YzO1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuZXJyb3ItY29udGFpbmVyIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZ2FwOiAxNXB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XFxuXFxuICAgICAgcCB7XFxuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgICAgICAgY29sb3I6ICNmZjAwMDA7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5zdWNjZXNzLWNvbnRhaW5lciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgZ2FwOiAxNXB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuXFxuICAgICAgaDEge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgICAgIGNvbG9yOiAjMWExYTFmO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICBidXR0b24ge1xcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuICAgICAgcGFkZGluZzogMTJweDtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVkMzdmMztcXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgY29sb3I6ICNmZmZmZmY7XFxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIiNibG9nLWFkZGVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRmlyYUdPXFxcIjtcXG4gIHBhZGRpbmc6IDUwcHggNzBweCAyNTBweCA3MHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNGUzZWI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuICAuYmFjay1hcnJvdyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICB9XFxuXFxuICAuYmxvZy1hZGRlci1jb250ZW50IHtcXG4gICAgcGFkZGluZzogMHB4IDQwMHB4O1xcblxcbiAgICBoMSB7XFxuICAgICAgZm9udC1zaXplOiAyLjNlbTtcXG4gICAgICBjb2xvcjogIzFhMWExZjtcXG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcXG4gICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XFxuICAgIH1cXG5cXG4gICAgLmJsb2ctZm9ybSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGdhcDogNTBweDtcXG5cXG4gICAgICAuaW1nLWlucHV0LWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMTJweDtcXG5cXG4gICAgICAgIC5pbWFnZS11cGxvYWRlciB7XFxuICAgICAgICAgIHdpZHRoOiA2MDBweDtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTdlYjtcXG4gICAgICAgICAgYm9yZGVyOiAxLjVweCBkYXNoZWQgIzg1ODU4ZDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgcGFkZGluZzogODBweCAxMDBweDtcXG4gICAgICAgICAgZ2FwOiAzMHB4O1xcblxcbiAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAuaW1hZ2UtdGV4dHMge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiA1cHg7XFxuXFxuICAgICAgICAgICAgbGFiZWwge1xcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICBidXR0b24ge1xcbiAgICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsImltcG9ydCByZWRiZXJyeUxvZ29JbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9yZWRiZXJyeS1sb2dvLnBuZ1wiO1xuaW1wb3J0IGNyZWF0ZUxvZ2luTW9kYWwgZnJvbSBcIi4vbG9naW5Nb2RhbC9jcmVhdGVMb2dpbk1vZGFsXCI7XG5pbXBvcnQgZGlzcGxheUJsb2dBZGRlciBmcm9tIFwiLi4vYmxvZ0FkZGVyL2Rpc3BsYXlCbG9nQWRkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKHN0YXR1cykge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXItZGl2XCIpO1xuXG4gIGNvbnN0IGhlYWRlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItY29udGVudFwiKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnRlbnQpO1xuXG4gIGNvbnN0IHJlZGJlcnJ5TG9nbyA9IG5ldyBJbWFnZSgpO1xuICByZWRiZXJyeUxvZ28uc3JjID0gcmVkYmVycnlMb2dvSW1nO1xuICBoZWFkZXJDb250ZW50LmFwcGVuZENoaWxkKHJlZGJlcnJ5TG9nbyk7XG5cbiAgY29uc3QgZW50cnlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBlbnRyeUJ0bi50ZXh0Q29udGVudCA9IFwi4YOo4YOU4YOh4YOV4YOa4YOQXCI7XG4gIGVudHJ5QnRuLmNsYXNzTGlzdC5hZGQoXCJlbnRyeS1idXR0b25cIik7XG4gIGhlYWRlckNvbnRlbnQuYXBwZW5kQ2hpbGQoZW50cnlCdG4pO1xuXG4gIGNvbnN0IGJsb2dBZGRlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJsb2dBZGRlckJ0bi50ZXh0Q29udGVudCA9IFwi4YOT4YOQ4YOQ4YOb4YOQ4YOi4YOUIOGDkeGDmuGDneGDkuGDmFwiO1xuICBibG9nQWRkZXJCdG4uY2xhc3NMaXN0LmFkZChcImJsb2ctYWRkZXItYnV0dG9uXCIpO1xuICBoZWFkZXJDb250ZW50LmFwcGVuZENoaWxkKGJsb2dBZGRlckJ0bik7XG5cbiAgaWYgKHN0YXR1cykgZW50cnlCdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgaWYgKCFzdGF0dXMpIGJsb2dBZGRlckJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXG4gIGVudHJ5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVMb2dpbk1vZGFsKTtcblxuICBibG9nQWRkZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlCbG9nQWRkZXIpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG4iLCJpbXBvcnQgeFN2ZyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3gtaWNvbi5zdmdcIjtcbmltcG9ydCByZWRDaXJjbGVJbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9pbmZvLWNpcmNsZS5wbmdcIjtcbmltcG9ydCBncmVlblN1Y2Nlc3NJbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9zdWNjZXNzLWNpcmNsZS5wbmdcIjtcbmltcG9ydCBsb2dpblVzZXIgZnJvbSBcIi4uLy4uLy4uL2xvZ2ljL2xvZ2luVXNlci9sb2dpblVzZXJcIjtcbmltcG9ydCB1cGRhdGVMb2dpbk1vZGFsVUkgZnJvbSBcIi4vdXBkYXRlTG9naW5Nb2RhbFVJXCI7XG5cbmxldCByZW1vdmVMb2dpbk1vZGFsO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVMb2dpbk1vZGFsKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXG4gIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWxDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb2RhbC1jb250YWluZXJcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIpO1xuXG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGVudFwiKTtcbiAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcblxuICBjb25zdCB4SW1nID0gbmV3IEltYWdlKCk7XG4gIHhJbWcuY2xhc3NMaXN0LmFkZChcIngtaW1nXCIpO1xuICB4SW1nLnNyYyA9IHhTdmc7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh4SW1nKTtcblxuICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1jb250YWluZXJcIik7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChpbnB1dENvbnRhaW5lcik7XG5cbiAgY29uc3QgbW9kYWxIZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBtb2RhbEhlYWRlclRleHQudGV4dENvbnRlbnQgPSBcIuGDqOGDlOGDoeGDleGDmuGDkFwiO1xuICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbEhlYWRlclRleHQpO1xuXG4gIGNvbnN0IG1vZGFsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIG1vZGFsTGFiZWwudGV4dENvbnRlbnQgPSBcIuGDlOGDmi3hg6Thg53hg6Hhg6Lhg5BcIjtcbiAgbW9kYWxMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJlbWFpbFwiKTtcbiAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWxMYWJlbCk7XG5cbiAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZW1haWxcIik7XG4gIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlbWFpbFwiKTtcbiAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkV4YW1wbGVAcmVkYmVycnkuZ2VcIik7XG4gIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsSW5wdXQpO1xuICBlbWFpbElucHV0LmZvY3VzKCk7XG5cbiAgY29uc3Qgc3VjY2Vzc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN1Y2Nlc3NDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInN1Y2Nlc3MtY29udGFpbmVyXCIsIFwiaGlkZGVuXCIpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoc3VjY2Vzc0NvbnRhaW5lcik7XG5cbiAgY29uc3Qgc3VjY2Vzc0ltZyA9IG5ldyBJbWFnZSgpO1xuICBzdWNjZXNzSW1nLnNyYyA9IGdyZWVuU3VjY2Vzc0ltZztcbiAgc3VjY2Vzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdWNjZXNzSW1nKTtcblxuICBjb25zdCBzdWNjZXNzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgc3VjY2Vzc1RleHQudGV4dENvbnRlbnQgPSBcIuGDrOGDkOGDoOGDm+GDkOGDouGDlOGDkeGDo+GDmuGDmCDhg5Dhg5Xhg6Lhg53hg6Dhg5jhg5bhg5Dhg6rhg5jhg5BcIjtcbiAgc3VjY2Vzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdWNjZXNzVGV4dCk7XG5cbiAgY29uc3QgZXJyb3JDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlcnJvckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZXJyb3ItY29udGFpbmVyXCIsIFwiaGlkZGVuXCIpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZXJyb3JDb250YWluZXIpO1xuXG4gIGNvbnN0IHJlZENpcmNsZSA9IG5ldyBJbWFnZSgpO1xuICByZWRDaXJjbGUuc3JjID0gcmVkQ2lyY2xlSW1nO1xuICBlcnJvckNvbnRhaW5lci5hcHBlbmRDaGlsZChyZWRDaXJjbGUpO1xuXG4gIGNvbnN0IGVycm9yTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGVycm9yTXNnLnRleHRDb250ZW50ID0gXCLhg5Thg5ot4YOk4YOd4YOh4YOi4YOQIOGDkOGDoCDhg5vhg53hg5jhg6vhg5Thg5Hhg5zhg5BcIjtcbiAgZXJyb3JDb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3JNc2cpO1xuXG4gIGNvbnN0IGVudHJ5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZW50cnlCdG4udGV4dENvbnRlbnQgPSBcIuGDqOGDlOGDoeGDleGDmuGDkFwiO1xuICBlbnRyeUJ0bi5jbGFzc0xpc3QuYWRkKFwiZW50cnktYnRuXCIpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZW50cnlCdG4pO1xuXG4gIGNvbnN0IHN1Y2Nlc3NCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWNjZXNzQnRuLmNsYXNzTGlzdC5hZGQoXCJzdWNjZXNzLWJ0blwiLCBcImhpZGRlblwiKTtcbiAgc3VjY2Vzc0J0bi50ZXh0Q29udGVudCA9IFwi4YOZ4YOQ4YOg4YOS4YOYXCI7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChzdWNjZXNzQnRuKTtcblxuICBtb2RhbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuaWQgPT09IFwibW9kYWwtY29udGFpbmVyXCIpIHJlbW92ZUxvZ2luTW9kYWwoZSk7XG4gIH0pO1xuXG4gIHhJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgcmVtb3ZlTG9naW5Nb2RhbChlKTtcbiAgfSk7XG5cbiAgZW50cnlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVwZGF0ZUxvZ2luTW9kYWwpO1xuXG4gIGVtYWlsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgdXBkYXRlTG9naW5Nb2RhbFVJKCk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiB1cGRhdGVMb2dpbk1vZGFsKCkge1xuICAgIGlmIChsb2dpblVzZXIoZW1haWxJbnB1dCkpIHtcbiAgICAgIGxvZ2luVXNlcihlbWFpbElucHV0KS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgIHVwZGF0ZUxvZ2luTW9kYWxVSShkYXRhLCBtb2RhbENvbnRhaW5lcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVMb2dpbk1vZGFsID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoIWVudHJ5QnRuLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSkge1xuICAgICAgbW9kYWxDb250YWluZXIucmVtb3ZlKCk7XG4gICAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJ2aXNpYmxlXCI7XG4gICAgfVxuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInN1Y2Nlc3MtYnRuXCIpKSB7XG4gICAgICBtb2RhbENvbnRhaW5lci5yZW1vdmUoKTtcbiAgICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCB7IHJlbW92ZUxvZ2luTW9kYWwgfTtcbiIsImltcG9ydCB2YWxpZGF0ZUVtYWlsIGZyb20gXCIuL3ZhbGlkYXRlRW1haWxcIjtcbmltcG9ydCBjaGVja0VtYWlsIGZyb20gXCIuL2NoZWNrRW1haWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9naW5Vc2VyKGlucHV0KSB7XG4gIGlmICh2YWxpZGF0ZUVtYWlsKGlucHV0KSkge1xuICAgIHJldHVybiBjaGVja0VtYWlsKGlucHV0LnZhbHVlKS50aGVuKChkYXRhKSA9PiBkYXRhKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChpbnB1dCkge1xuICBpZiAoIWlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgaW5wdXQuZm9jdXMoKTtcbiAgICBhbGVydChcIlBsZWFzZSBtYXRjaCB0aGUgZm9ybWF0IHJlcXVlc3RlZFwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKCFpbnB1dC52YWx1ZS5lbmRzV2l0aChcIkByZWRiZXJyeS5nZVwiKSkge1xuICAgIGFsZXJ0KFwiWW91ciBlbWFpbCBtdXN0IGVuZCB3aXRoIEByZWRiZXJyeS5nZVwiKTtcbiAgICBjb25zdCBhdFBvc2l0aW9uID0gaW5wdXQudmFsdWUuaW5kZXhPZihcIkBcIikgKyAxO1xuICAgIGlucHV0LnZhbHVlID0gaW5wdXQudmFsdWUuc3Vic3RyaW5nKDAsIGF0UG9zaXRpb24pO1xuICAgIGlucHV0LmZvY3VzKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChpbnB1dC52YWx1ZS5lbmRzV2l0aChcIkByZWRiZXJyeS5nZVwiKSkgcmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjaGVja0VtYWlsKGVtYWlsKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly9hcGkuYmxvZy5yZWRiZXJyeWludGVybnNoaXAuZ2UvYXBpL2xvZ2luXCIsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBhY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgZW1haWw6IGAke2VtYWlsfWAsXG4gICAgICAgIH0pLFxuICAgICAgfVxuICAgICk7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDIyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xuICB9XG59XG4iLCJpbXBvcnQgeyByZW1vdmVMb2dpbk1vZGFsIH0gZnJvbSBcIi4vY3JlYXRlTG9naW5Nb2RhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVMb2dpbk1vZGFsVUkoZGF0YSwgZGl2KSB7XG4gIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtY29udGFpbmVyXCIpO1xuICBjb25zdCBlbWFpbElucHV0ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgY29uc3Qgc3VjY2Vzc0NvbnRhaW5lciA9IGRpdi5xdWVyeVNlbGVjdG9yKFwiLnN1Y2Nlc3MtY29udGFpbmVyXCIpO1xuICBjb25zdCBlcnJvckNvbnRhaW5lciA9IGRpdi5xdWVyeVNlbGVjdG9yKFwiLmVycm9yLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgZW50cnlCdG4gPSBkaXYucXVlcnlTZWxlY3RvcihcIi5lbnRyeS1idG5cIik7XG4gIGNvbnN0IHN1Y2Nlc3NCdG4gPSBkaXYucXVlcnlTZWxlY3RvcihcIi5zdWNjZXNzLWJ0blwiKTtcbiAgY29uc3QgeEltZyA9IGRpdi5xdWVyeVNlbGVjdG9yKFwiLngtaW1nXCIpO1xuXG4gIGlmIChkYXRhKSB7XG4gICAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBzdWNjZXNzQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgZW50cnlCdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBzdWNjZXNzQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgZXJyb3JDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB4SW1nLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cbiAgICBzdWNjZXNzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgcmVtb3ZlTG9naW5Nb2RhbChlKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW50cnktYnV0dG9uXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsb2ctYWRkZXItYnV0dG9uXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvZ2luXCIsIEpTT04uc3RyaW5naWZ5KHRydWUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICghZGF0YSkge1xuICAgIGVycm9yQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgZW1haWxJbnB1dC5zdHlsZS5ib3JkZXJDb2xvciA9IFwiI2ZmMDAwMFwiO1xuICAgIGVtYWlsSW5wdXQuc3R5bGUubWFyZ2luQm90dG9tID0gXCIxMHB4XCI7XG5cbiAgICBlbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiB7XG4gICAgICBlbWFpbElucHV0RXZlbnRzKFwiIzVkMzdmM1wiKTtcbiAgICB9KTtcbiAgICBlbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCAoKSA9PiB7XG4gICAgICBlbWFpbElucHV0RXZlbnRzKFwiIzVkMzdmM1wiKTtcbiAgICB9KTtcbiAgICBlbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcbiAgICAgIGVtYWlsSW5wdXRFdmVudHMoXCIjMDAwMDAwXCIpO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gZW1haWxJbnB1dEV2ZW50cyhjb2xvcikge1xuICAgICAgZW1haWxJbnB1dC5zdHlsZS5ib3JkZXJDb2xvciA9IGNvbG9yO1xuICAgICAgZW1haWxJbnB1dC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjIwcHhcIjtcbiAgICAgIGlmICghZXJyb3JDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpKVxuICAgICAgICBlcnJvckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheUJsb2dBZGRlcigpIHtcbiAgY29uc3QgYmxvZ0FkZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibG9nLWFkZGVyXCIpO1xuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWRpdlwiKTtcblxuICBpZiAoYmxvZ0FkZGVyLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSkge1xuICAgIGJsb2dBZGRlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIG1haW5EaXYuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfVxuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmxvZy1hZGRlci1zdGF0dXNcIiwgSlNPTi5zdHJpbmdpZnkodHJ1ZSkpO1xufVxuIiwiaW1wb3J0IGJsb2dMb2dvSW1nIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvYmxvZy1sb2dvLnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNYWluKHN0YXR1cykge1xuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW4tZGl2XCIpO1xuICBpZiAoc3RhdHVzKSBtYWluLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibWFpbi1jb250ZW50XCIpO1xuICBtYWluLmFwcGVuZENoaWxkKG1haW5Db250ZW50KTtcblxuICBjb25zdCBtYWluSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5JbmZvLmNsYXNzTGlzdC5hZGQoXCJtYWluLWluZm9cIik7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKG1haW5JbmZvKTtcblxuICBjb25zdCBibG9nVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgYmxvZ1RleHQudGV4dENvbnRlbnQgPSBcIuGDkeGDmuGDneGDkuGDmFwiO1xuICBtYWluSW5mby5hcHBlbmRDaGlsZChibG9nVGV4dCk7XG5cbiAgY29uc3QgYmxvZ0xvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgYmxvZ0xvZ28uc3JjID0gYmxvZ0xvZ29JbWc7XG4gIG1haW5JbmZvLmFwcGVuZENoaWxkKGJsb2dMb2dvKTtcblxuICByZXR1cm4gbWFpbjtcbn1cbiIsImltcG9ydCBiYWNrQXJyb3dJbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9iYWNrLWFycm93LnBuZ1wiO1xuaW1wb3J0IHZhbGlkYXRlQmxvZ0luZm8gZnJvbSBcIi4uLy4uL2xvZ2ljL2Jsb2dBZGRlci92YWxpZGF0ZUJsb2dJbmZvXCI7XG5pbXBvcnQgY3JlYXRlSW1hZ2VVcGxvYWRlciBmcm9tIFwiLi9pbWFnZVVwbG9hZGVyL2NyZWF0ZUltYWdlVXBsb2FkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQmxvZ0FkZGVyKHN0YXR1cywgYmxvZ0luZm8pIHtcbiAgY29uc3QgYmxvZ0FkZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmxvZ0FkZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYmxvZy1hZGRlclwiKTtcblxuICBpZiAoIXN0YXR1cykgYmxvZ0FkZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cbiAgY29uc3QgYmFja0Fycm93ID0gbmV3IEltYWdlKCk7XG4gIGJhY2tBcnJvdy5jbGFzc0xpc3QuYWRkKFwiYmFjay1hcnJvd1wiKTtcbiAgYmFja0Fycm93LnNyYyA9IGJhY2tBcnJvd0ltZztcbiAgYmxvZ0FkZGVyLmFwcGVuZENoaWxkKGJhY2tBcnJvdyk7XG5cbiAgY29uc3QgYmxvZ0FkZGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJsb2dBZGRlckNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImJsb2ctYWRkZXItY29udGVudFwiKTtcbiAgYmxvZ0FkZGVyLmFwcGVuZENoaWxkKGJsb2dBZGRlckNvbnRlbnQpO1xuXG4gIGNvbnN0IGJsb2dBZGRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGJsb2dBZGRlclRleHQudGV4dENvbnRlbnQgPSBcIuGDkeGDmuGDneGDkuGDmOGDoSDhg5Phg5Dhg5vhg5Dhg6Lhg5Thg5Hhg5BcIjtcbiAgYmxvZ0FkZGVyQ29udGVudC5hcHBlbmRDaGlsZChibG9nQWRkZXJUZXh0KTtcblxuICBjb25zdCBibG9nQWRkZXJGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGJsb2dBZGRlckZvcm0uY2xhc3NMaXN0LmFkZChcImJsb2ctZm9ybVwiKTtcbiAgYmxvZ0FkZGVyRm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJsb2ctZm9ybVwiKTtcbiAgYmxvZ0FkZGVyQ29udGVudC5hcHBlbmRDaGlsZChibG9nQWRkZXJGb3JtKTtcblxuICBjcmVhdGVJbWFnZVVwbG9hZGVyKGJsb2dBZGRlckZvcm0sIGJsb2dJbmZvLCBiYWNrQXJyb3cpO1xuXG4gIGNvbnN0IGFkZEJsb2dCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRCbG9nQnRuLnRleHRDb250ZW50ID0gXCLhg5Lhg5Dhg5vhg53hg6Xhg5Xhg5Thg6fhg5zhg5Thg5Hhg5BcIjtcbiAgYWRkQmxvZ0J0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLWJsb2ctYnRuXCIpO1xuICBibG9nQWRkZXJGb3JtLmFwcGVuZENoaWxkKGFkZEJsb2dCdG4pO1xuXG4gIGFkZEJsb2dCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgYmxvZ0luZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvZy1pbmZvXCIpKTtcblxuICAgIHZhbGlkYXRlQmxvZ0luZm8oYmxvZ0luZm8pO1xuICB9KTtcbiAgcmV0dXJuIGJsb2dBZGRlcjtcbn1cbiIsImltcG9ydCB2YWxpZGF0ZUltZyBmcm9tIFwiLi92YWxpZGF0ZUltZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZUJsb2dJbmZvKGJsb2dJbmZvKSB7XG4gIGlmICh2YWxpZGF0ZUltZyhibG9nSW5mbykpIHJldHVybiB0cnVlO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVJbWcoYmxvZ0luZm8pIHtcbiAgaWYgKGJsb2dJbmZvLmltYWdlVVJMKSB7XG4gICAgY29uc29sZS5sb2coXCJJbWFnZSBFeGlzdHNcIik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoIWJsb2dJbmZvLmltYWdlVVJMKSB7XG4gICAgYWxlcnQoXCJQbGVhc2UgdXBsb2FkIGFuIGltYWdlXCIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IGZvbGRlckFkZGVySW1nIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvZm9sZGVyLWFkZC5wbmdcIjtcbmltcG9ydCByZW1vdmVJbWdQbmcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9yZW1vdmUucG5nXCI7XG5pbXBvcnQgdXBkYXRlSW1hZ2VVcGxvYWRlciBmcm9tIFwiLi91cGRhdGVJbWFnZVVwbG9hZGVyXCI7XG5pbXBvcnQgZGlzcGxheU1haW5EaXYgZnJvbSBcIi4uLy4uL21haW4vZGlzcGxheU1haW5EaXZcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSW1hZ2VVcGxvYWRlcihcbiAgYmxvZ0FkZGVyRm9ybSxcbiAgYmxvZ0luZm8sXG4gIGJhY2tBcnJvd1xuKSB7XG4gIGNvbnN0IGltYWdlSW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbWFnZUlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbWctaW5wdXQtY29udGFpbmVyXCIpO1xuICBibG9nQWRkZXJGb3JtLmFwcGVuZENoaWxkKGltYWdlSW5wdXRDb250YWluZXIpO1xuXG4gIGNvbnN0IHVwbG9hZEltYWdlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB1cGxvYWRJbWFnZVRleHQudGV4dENvbnRlbnQgPSBcIuGDkOGDouGDleGDmOGDoOGDl+GDlOGDlyDhg6Thg53hg6Lhg51cIjtcbiAgaW1hZ2VJbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh1cGxvYWRJbWFnZVRleHQpO1xuXG4gIGNvbnN0IGltYWdlVXBsb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbWFnZVVwbG9hZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW1hZ2UtdXBsb2FkZXJcIik7XG4gIGltYWdlVXBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImltYWdlLXVwbG9hZGVyXCIpO1xuICBpbWFnZUlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlVXBsb2FkZXIpO1xuXG4gIGNvbnN0IGltYWdlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGltYWdlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImZpbGVcIik7XG4gIGltYWdlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbWFnZS1pbnB1dFwiKTtcbiAgaW1hZ2VJbnB1dC5zZXRBdHRyaWJ1dGUoXCJhY2NlcHRcIiwgXCJpbWFnZS8qXCIpO1xuICBpbWFnZUlucHV0LnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcIlwiKTtcbiAgaW1hZ2VVcGxvYWRlci5hcHBlbmRDaGlsZChpbWFnZUlucHV0KTtcblxuICBjb25zdCBmb2xkZXJBZGRlciA9IG5ldyBJbWFnZSgpO1xuICBmb2xkZXJBZGRlci5jbGFzc0xpc3QuYWRkKFwiZm9sZGVyLWFkZGVyLWltZ1wiKTtcbiAgZm9sZGVyQWRkZXIuc3JjID0gZm9sZGVyQWRkZXJJbWc7XG4gIGltYWdlVXBsb2FkZXIuYXBwZW5kQ2hpbGQoZm9sZGVyQWRkZXIpO1xuXG4gIGNvbnN0IGltYWdlVGV4dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbWFnZVRleHRzLmNsYXNzTGlzdC5hZGQoXCJpbWFnZS10ZXh0c1wiKTtcbiAgaW1hZ2VVcGxvYWRlci5hcHBlbmRDaGlsZChpbWFnZVRleHRzKTtcblxuICBjb25zdCBpbWFnZVRleHRTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGltYWdlVGV4dFNwYW4uY2xhc3NMaXN0LmFkZChcImltYWdlLXRleHQtc3BhblwiKTtcbiAgaW1hZ2VUZXh0U3Bhbi50ZXh0Q29udGVudCA9IFwi4YOp4YOQ4YOQ4YOS4YOT4YOU4YOXIOGDpOGDkOGDmOGDmuGDmCDhg5Dhg6Ug4YOQ4YOcXCI7XG4gIGltYWdlVGV4dHMuYXBwZW5kQ2hpbGQoaW1hZ2VUZXh0U3Bhbik7XG5cbiAgY29uc3QgaW1hZ2VJbnB1dExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBpbWFnZUlucHV0TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaW1hZ2UtaW5wdXRcIik7XG4gIGltYWdlSW5wdXRMYWJlbC5jbGFzc0xpc3QuYWRkKFwiaW1hZ2UtaW5wdXQtbGFiZWxcIik7XG4gIGltYWdlSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwi4YOQ4YOY4YOg4YOp4YOY4YOU4YOXIOGDpOGDkOGDmOGDmuGDmFwiO1xuICBpbWFnZVRleHRzLmFwcGVuZENoaWxkKGltYWdlSW5wdXRMYWJlbCk7XG5cbiAgY29uc3QgcmVtb3ZlSW1nID0gbmV3IEltYWdlKCk7XG4gIHJlbW92ZUltZy5zcmMgPSByZW1vdmVJbWdQbmc7XG4gIHJlbW92ZUltZy5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlLWltZ1wiLCBcImhpZGRlblwiKTtcbiAgaW1hZ2VUZXh0cy5hcHBlbmRDaGlsZChyZW1vdmVJbWcpO1xuXG4gIGlmIChibG9nSW5mbyAmJiBibG9nSW5mby5pbWFnZVVSTCkge1xuICAgIHVwZGF0ZUltYWdlVXBsb2FkZXIoXG4gICAgICBpbWFnZUlucHV0LFxuICAgICAgYmxvZ0luZm8sXG4gICAgICBpbWFnZVVwbG9hZGVyLFxuICAgICAgaW1hZ2VUZXh0cyxcbiAgICAgIGltYWdlSW5wdXRMYWJlbCxcbiAgICAgIGltYWdlVGV4dFNwYW4sXG4gICAgICBmb2xkZXJBZGRlcixcbiAgICAgIHJlbW92ZUltZyxcbiAgICAgIGltYWdlSW5wdXQsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgfVxuXG4gIGltYWdlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgIHVwZGF0ZUltYWdlVXBsb2FkZXIoXG4gICAgICBlLnRhcmdldCxcbiAgICAgIGJsb2dJbmZvLFxuICAgICAgaW1hZ2VVcGxvYWRlcixcbiAgICAgIGltYWdlVGV4dHMsXG4gICAgICBpbWFnZUlucHV0TGFiZWwsXG4gICAgICBpbWFnZVRleHRTcGFuLFxuICAgICAgZm9sZGVyQWRkZXIsXG4gICAgICByZW1vdmVJbWcsXG4gICAgICBpbWFnZUlucHV0LFxuICAgICAgZmFsc2VcbiAgICApO1xuICB9KTtcblxuICByZW1vdmVJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgdXBkYXRlSW1hZ2VVcGxvYWRlcihcbiAgICAgIGUudGFyZ2V0LFxuICAgICAgYmxvZ0luZm8sXG4gICAgICBpbWFnZVVwbG9hZGVyLFxuICAgICAgaW1hZ2VUZXh0cyxcbiAgICAgIGltYWdlSW5wdXRMYWJlbCxcbiAgICAgIGltYWdlVGV4dFNwYW4sXG4gICAgICBmb2xkZXJBZGRlcixcbiAgICAgIHJlbW92ZUltZyxcbiAgICAgIGltYWdlSW5wdXQsXG4gICAgICBmYWxzZVxuICAgICk7XG4gIH0pO1xuXG4gIGJhY2tBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBkaXNwbGF5TWFpbkRpdigpO1xuXG4gICAgdXBkYXRlSW1hZ2VVcGxvYWRlcihcbiAgICAgIGUudGFyZ2V0LFxuICAgICAgYmxvZ0luZm8sXG4gICAgICBpbWFnZVVwbG9hZGVyLFxuICAgICAgaW1hZ2VUZXh0cyxcbiAgICAgIGltYWdlSW5wdXRMYWJlbCxcbiAgICAgIGltYWdlVGV4dFNwYW4sXG4gICAgICBmb2xkZXJBZGRlcixcbiAgICAgIHJlbW92ZUltZyxcbiAgICAgIGltYWdlSW5wdXQsXG4gICAgICBmYWxzZVxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiBpbWFnZUlucHV0Q29udGFpbmVyO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlSW1hZ2VVcGxvYWRlcihcbiAgZSxcbiAgYmxvZ0luZm8sXG4gIGltYWdlVXBsb2FkZXIsXG4gIGltYWdlVGV4dHMsXG4gIGltYWdlSW5wdXRMYWJlbCxcbiAgaW1hZ2VUZXh0U3BhbixcbiAgZm9sZGVyQWRkZXIsXG4gIHJlbW92ZUltZyxcbiAgaW1hZ2VJbnB1dCxcbiAgcmVmcmVzaFBhZ2Vcbikge1xuICBpZiAocmVmcmVzaFBhZ2UgJiYgZS5pZCA9PT0gXCJpbWFnZS1pbnB1dFwiKSB7XG4gICAgaW1hZ2UoKTtcbiAgICBpbWFnZUlucHV0TGFiZWwudGV4dENvbnRlbnQgPSBibG9nSW5mby5pbWFnZU5hbWU7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFyZWZyZXNoUGFnZSAmJiBlLmlkID09PSBcImltYWdlLWlucHV0XCIpIHtcbiAgICBpZiAoIWltYWdlSW5wdXQuZmlsZXNbMF0pIHJldHVybjtcbiAgICBpbWFnZSgpO1xuICAgIGltYWdlSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IGltYWdlSW5wdXQuZmlsZXNbMF0ubmFtZTtcblxuICAgIGNvbnN0IGJsb2dJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsb2ctaW5mb1wiKSk7XG4gICAgYmxvZ0luZm8uaW1hZ2VVUkwgPSBpbWFnZUlucHV0LnZhbHVlO1xuICAgIGJsb2dJbmZvLmltYWdlTmFtZSA9IGltYWdlSW5wdXQuZmlsZXNbMF0ubmFtZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJsb2ctaW5mb1wiLCBKU09OLnN0cmluZ2lmeShibG9nSW5mbykpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChlLmNsYXNzTGlzdC5jb250YWlucyhcInJlbW92ZS1pbWdcIikpIHtcbiAgICBub0ltYWdlKCk7XG5cbiAgICBjb25zdCBibG9nSW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibG9nLWluZm9cIikpO1xuICAgIGJsb2dJbmZvLmltYWdlVVJMID0gbnVsbDtcbiAgICBibG9nSW5mby5pbWFnZU5hbWUgPSBudWxsO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmxvZy1pbmZvXCIsIEpTT04uc3RyaW5naWZ5KGJsb2dJbmZvKSk7XG4gIH1cblxuICBpZiAoZS5jbGFzc0xpc3QuY29udGFpbnMoXCJiYWNrLWFycm93XCIpKSB7XG4gICAgbm9JbWFnZSgpO1xuXG4gICAgY29uc3QgYmxvZ0luZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvZy1pbmZvXCIpKTtcbiAgICBmb3IgKGxldCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYmxvZ0luZm8pKSB7XG4gICAgICBibG9nSW5mb1trZXldID0gbnVsbDtcbiAgICB9XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJibG9nLWluZm9cIiwgSlNPTi5zdHJpbmdpZnkoYmxvZ0luZm8pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGltYWdlKCkge1xuICAgIGltYWdlVXBsb2FkZXIuc3R5bGUucGFkZGluZyA9IFwiMjBweFwiO1xuICAgIGltYWdlVGV4dHMuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcInNwYWNlLWJldHdlZW5cIjtcbiAgICBpbWFnZUlucHV0TGFiZWwuc3R5bGUudGV4dERlY29yYXRpb24gPSBcIm5vbmVcIjtcbiAgICBpbWFnZUlucHV0TGFiZWwuc3R5bGUuZm9udFdlaWdodCA9IFwiNTAwXCI7XG4gICAgaW1hZ2VUZXh0U3Bhbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGZvbGRlckFkZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgcmVtb3ZlSW1nLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH1cblxuICBmdW5jdGlvbiBub0ltYWdlKCkge1xuICAgIGltYWdlVXBsb2FkZXIuc3R5bGUucGFkZGluZyA9IFwiODBweCAxMDBweFwiO1xuICAgIGltYWdlVGV4dHMuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xuICAgIGltYWdlSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwi4YOQ4YOY4YOg4YOp4YOY4YOU4YOXIOGDpOGDkOGDmOGDmuGDmFwiO1xuICAgIGltYWdlSW5wdXRMYWJlbC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwidW5kZXJsaW5lXCI7XG4gICAgaW1hZ2VJbnB1dExhYmVsLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjcwMFwiO1xuICAgIGltYWdlVGV4dFNwYW4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBmb2xkZXJBZGRlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIHJlbW92ZUltZy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGltYWdlSW5wdXQudmFsdWUgPSBcIlwiO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5TWFpbkRpdigpIHtcbiAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1kaXZcIik7XG4gIGNvbnN0IGJsb2dBZGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxvZy1hZGRlclwiKTtcbiAgYmxvZ0FkZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIG1haW5EaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJsb2ctYWRkZXItc3RhdHVzXCIsIEpTT04uc3RyaW5naWZ5KGZhbHNlKSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBmZXRjaENhdGVnb3JpZXModXJsKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHt1cmx9L2NhdGVnb3JpZXNgLCB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggdGhlIGZldGNoIG9wZXJhdGlvbjogXCIsIGVycm9yKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ2F0ZWdvcmllcyhkYXRhKSB7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWNvbnRlbnRcIik7XG5cbiAgY29uc3QgY2F0ZWdvcmllc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhdGVnb3JpZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhdGVnb3JpZXMtY29udGFpbmVyXCIpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChjYXRlZ29yaWVzQ29udGFpbmVyKTtcblxuICBkYXRhLmRhdGEuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5XCIsIGBjYXRlZ29yeS0ke2VsLmlkfWApO1xuICAgIGNhdGVnb3J5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGVsLmJhY2tncm91bmRfY29sb3I7XG4gICAgY2F0ZWdvcmllc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XG5cbiAgICBjb25zdCB0aXRsZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0aXRsZVRleHQudGV4dENvbnRlbnQgPSBlbC50aXRsZTtcbiAgICB0aXRsZVRleHQuc3R5bGUuY29sb3IgPSBlbC50ZXh0X2NvbG9yO1xuICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKHRpdGxlVGV4dCk7XG4gIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDA6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi9zcmMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL2RvbS9oZWFkZXIvY3JlYXRlSGVhZGVyXCI7XG5pbXBvcnQgY3JlYXRlTWFpbiBmcm9tIFwiLi9jb21wb25lbnRzL2RvbS9tYWluL2NyZWF0ZU1haW5cIjtcbmltcG9ydCBjcmVhdGVCbG9nQWRkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9kb20vYmxvZ0FkZGVyL2NyZWF0ZUJsb2dBZGRlclwiO1xuaW1wb3J0IGZldGNoQ2F0ZWdvcmllcyBmcm9tIFwiLi9jb21wb25lbnRzL2xvZ2ljL2ZldGNoQ2F0ZWdvcmllc1wiO1xuaW1wb3J0IGNyZWF0ZUNhdGVnb3JpZXMgZnJvbSBcIi4vY29tcG9uZW50cy9kb20vbWFpbi9jcmVhdGVDYXRlZ29yaWVzXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmNvbnN0IHVybCA9IFwiaHR0cHM6Ly9hcGkuYmxvZy5yZWRiZXJyeWludGVybnNoaXAuZ2UvYXBpXCI7XG5jb25zdCB0b2tlbiA9XG4gIFwiZmM5YTgwNzYwOGQwMDZmOWQ3NjA0YmM3OGJmNjJiMDI3YTIyNDdjMGMyMzJkYzIxN2E2ZTFkNTQ3NmQ1MjcxYVwiO1xuXG5jb25zdCBsb2dpblN0YXR1cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2dpblwiKSk7XG5pZiAoIWxvZ2luU3RhdHVzKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvZ2luXCIsIEpTT04uc3RyaW5naWZ5KGZhbHNlKSk7XG5cbmNvbnN0IGJsb2dBZGRlclN0YXR1cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibG9nLWFkZGVyLXN0YXR1c1wiKSk7XG5pZiAoIWJsb2dBZGRlclN0YXR1cylcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJibG9nLWFkZGVyLXN0YXR1c1wiLCBKU09OLnN0cmluZ2lmeShmYWxzZSkpO1xuXG5jb25zdCBibG9nSW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibG9nLWluZm9cIikpO1xuaWYgKCFibG9nSW5mbykgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJibG9nLWluZm9cIiwgSlNPTi5zdHJpbmdpZnkoe30pKTtcblxuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIobG9naW5TdGF0dXMpKTtcbmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbihibG9nQWRkZXJTdGF0dXMpKTtcbmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlQmxvZ0FkZGVyKGJsb2dBZGRlclN0YXR1cywgYmxvZ0luZm8pKTtcblxuZmV0Y2hDYXRlZ29yaWVzKHVybCkudGhlbigoZGF0YSkgPT4ge1xuICBjcmVhdGVDYXRlZ29yaWVzKGRhdGEpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=