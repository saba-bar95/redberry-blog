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
  padding: 0 50px;
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
#blog-adder .blog-adder-content .blog-form .img-uploader-container {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
#blog-adder .blog-adder-content .blog-form .img-uploader-container .image-uploader {
  background-color: #e5e7eb;
  border: 1.5px dashed #85858d;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  padding: 80px 100px;
  gap: 30px;
}
#blog-adder .blog-adder-content .blog-form .img-uploader-container .image-uploader img {
  align-self: center;
}
#blog-adder .blog-adder-content .blog-form .img-uploader-container .image-uploader .image-texts {
  display: flex;
  justify-content: center;
  gap: 5px;
}
#blog-adder .blog-adder-content .blog-form .img-uploader-container .image-uploader .image-texts label {
  text-decoration: underline;
  cursor: pointer;
  font-weight: 700;
}
#blog-adder .blog-adder-content .blog-form .img-uploader-container .image-uploader .image-texts img {
  cursor: pointer;
}
#blog-adder .blog-adder-content .blog-form .author-title-container,
#blog-adder .blog-adder-content .blog-form .date-category-container {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}
#blog-adder .blog-adder-content .blog-form .author-container,
#blog-adder .blog-adder-content .blog-form .title-container,
#blog-adder .blog-adder-content .blog-form .description-container,
#blog-adder .blog-adder-content .blog-form .date-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
#blog-adder .blog-adder-content .blog-form .author-container label,
#blog-adder .blog-adder-content .blog-form .title-container label,
#blog-adder .blog-adder-content .blog-form .description-container label,
#blog-adder .blog-adder-content .blog-form .date-container label {
  display: flex;
  gap: 5px;
  font-size: 0.9em;
  color: #1a1a1f;
  font-weight: 600;
}
#blog-adder .blog-adder-content .blog-form .author-container input,
#blog-adder .blog-adder-content .blog-form .author-container textarea,
#blog-adder .blog-adder-content .blog-form .title-container input,
#blog-adder .blog-adder-content .blog-form .title-container textarea,
#blog-adder .blog-adder-content .blog-form .description-container input,
#blog-adder .blog-adder-content .blog-form .description-container textarea,
#blog-adder .blog-adder-content .blog-form .date-container input,
#blog-adder .blog-adder-content .blog-form .date-container textarea {
  padding: 15px 10px;
  font-family: inherit;
  border-radius: 12px;
  outline: none;
  border: 1px solid #e4e3eb;
  color: #85858d;
}
#blog-adder .blog-adder-content .blog-form .author-container .validation-container,
#blog-adder .blog-adder-content .blog-form .title-container .validation-container,
#blog-adder .blog-adder-content .blog-form .description-container .validation-container,
#blog-adder .blog-adder-content .blog-form .date-container .validation-container {
  display: flex;
  align-items: center;
  gap: 8px;
}
#blog-adder .blog-adder-content .blog-form .author-container .validation-before,
#blog-adder .blog-adder-content .blog-form .title-container .validation-before,
#blog-adder .blog-adder-content .blog-form .description-container .validation-before,
#blog-adder .blog-adder-content .blog-form .date-container .validation-before {
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  display: block;
  background-color: #85858d;
}
#blog-adder .blog-adder-content .blog-form .author-container li,
#blog-adder .blog-adder-content .blog-form .title-container li,
#blog-adder .blog-adder-content .blog-form .description-container li,
#blog-adder .blog-adder-content .blog-form .date-container li {
  list-style-type: none;
  color: #85858d;
}
#blog-adder .blog-adder-content .blog-form .add-blog-btn {
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
}`, "",{"version":3,"sources":["webpack://./src/styles/header.scss","webpack://./src/index.scss","webpack://./src/styles/main.scss","webpack://./src/styles/loginModal.scss","webpack://./src/styles/blogAdder.scss"],"names":[],"mappings":"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","sourcesContent":["#header-div {\n  .header-content {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 24px 100px;\n    background-color: #f8fafc;\n\n    button {\n      font-family: \"FiraGO\";\n      font-size: 0.9em;\n      line-height: 20px;\n      color: #f8fafc;\n      padding: 10px 20px;\n      background-color: #5d37f3;\n      border: none;\n      border-radius: 8px;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n}\n","@use \"/src/styles/header.scss\";\n@use \"/src/styles/main.scss\";\n@use \"/src/styles/loginModal.scss\";\n@use \"/src/styles/blogAdder.scss\";\n\n@font-face {\n  font-family: \"FiraGO\";\n  src: url(\"/src/assets/fonts/FiraGO/FiraGO-Regular.otf\");\n}\n\n$body-color: #f1f5f9;\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.hidden {\n  display: none !important;\n}\n\nbody {\n  background-color: $body-color;\n  min-height: 100vh;\n}\n","#main-div {\n  .main-content {\n    display: flex;\n    flex-direction: column;\n    gap: 70px;\n\n    .main-info {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      background-image: linear-gradient(to right, #f1f5f9, #e2e8f0);\n      padding: 70px 90px 0px 120px;\n\n      h1 {\n        font-family: inherit;\n        font-size: 4.8em;\n        color: #1a1a1f;\n      }\n    }\n  }\n\n  .categories-container {\n    padding: 30px 300px;\n    display: grid;\n    grid-template-columns: repeat(7, minmax(100px, 1fr));\n    grid-template-rows: 1fr 1fr;\n    grid-gap: 10px;\n\n    .category {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding: 4px 8px;\n      border-radius: 30px;\n      &:hover {\n        cursor: pointer;\n        scale: 1.05;\n        transition-duration: 0.3s;\n      }\n\n      p {\n        font-family: \"FiraGO\";\n        text-align: center;\n        color: black !important;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        &:hover {\n          overflow: visible;\n        }\n      }\n    }\n  }\n}\n","#modal-container {\n  font-family: \"FiraGO\";\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n\n  .modal-content {\n    display: flex;\n    flex-direction: column;\n    background-color: #fefefe;\n    padding: 20px 30px 35px 30px;\n    width: 480px;\n    transform: translateY(-50%);\n    border-radius: 12px;\n\n    .x-img {\n      align-self: end;\n      height: 12px;\n      opacity: 0.6;\n      &:hover {\n        cursor: pointer;\n        scale: 1.1;\n        transition-duration: 0.5s;\n      }\n    }\n\n    .input-container {\n      display: flex;\n      flex-direction: column;\n\n      h1 {\n        text-align: center;\n        margin-bottom: 30px;\n        line-height: 32px;\n      }\n\n      label {\n        font-size: 0.9em;\n        font-weight: 600;\n        line-height: 20px;\n        margin-bottom: 7px;\n      }\n\n      input {\n        font-family: inherit;\n        font-size: 0.9em;\n        border: 2px solid #000000;\n        outline: none;\n        background-color: #f7f7ff;\n        border-radius: 12px;\n        padding: 10px;\n        margin-bottom: 25px;\n        &:focus {\n          border-color: #5d37f3;\n        }\n      }\n    }\n\n    .error-container {\n      display: flex;\n      align-items: center;\n      gap: 15px;\n      margin-bottom: 25px;\n\n      p {\n        font-size: 0.9em;\n        color: #ff0000;\n      }\n    }\n\n    .success-container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      gap: 15px;\n      margin-bottom: 20px;\n\n      h1 {\n        font-size: 1.3em;\n        color: #1a1a1f;\n      }\n    }\n\n    button {\n      font-family: inherit;\n      font-size: 0.9em;\n      padding: 12px;\n      border: none;\n      background-color: #5d37f3;\n      border-radius: 8px;\n      color: #ffffff;\n      font-weight: 600;\n      letter-spacing: 0.03em;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n}\n","#blog-adder {\n  font-family: \"FiraGO\";\n  padding: 50px 70px 250px 70px;\n  border-top: 1px solid #e4e3eb;\n  position: relative;\n\n  .back-arrow {\n    position: absolute;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n\n  .blog-adder-content {\n    // padding: 0px 575px;\n    padding: 0 50px;\n\n    h1 {\n      font-size: 2.3em;\n      color: #1a1a1f;\n      line-height: 40px;\n      font-weight: 700;\n      margin-bottom: 60px;\n    }\n\n    .blog-form {\n      display: flex;\n      flex-direction: column;\n      gap: 50px;\n\n      .img-uploader-container {\n        display: flex;\n        flex-direction: column;\n        gap: 12px;\n\n        .image-uploader {\n          background-color: #e5e7eb;\n          border: 1.5px dashed #85858d;\n          border-radius: 12px;\n          display: flex;\n          flex-direction: column;\n          padding: 80px 100px;\n          gap: 30px;\n\n          img {\n            align-self: center;\n          }\n\n          .image-texts {\n            display: flex;\n            justify-content: center;\n            gap: 5px;\n\n            label {\n              text-decoration: underline;\n              cursor: pointer;\n              font-weight: 700;\n            }\n\n            img {\n              cursor: pointer;\n            }\n          }\n        }\n      }\n\n      .author-title-container,\n      .date-category-container {\n        display: flex;\n        justify-content: space-between;\n        gap: 30px;\n      }\n\n      .author-container,\n      .title-container,\n      .description-container,\n      .date-container {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n\n        label {\n          display: flex;\n          gap: 5px;\n          font-size: 0.9em;\n          color: #1a1a1f;\n          font-weight: 600;\n        }\n\n        input,\n        textarea {\n          padding: 15px 10px;\n          font-family: inherit;\n          border-radius: 12px;\n          outline: none;\n          border: 1px solid #e4e3eb;\n          color: #85858d;\n        }\n\n        .validation-container {\n          display: flex;\n          align-items: center;\n          gap: 8px;\n        }\n\n        .validation-before {\n          width: 0.5em;\n          height: 0.5em;\n          border-radius: 50%;\n          display: block;\n          background-color: #85858d;\n        }\n\n        li {\n          list-style-type: none;\n          color: #85858d;\n        }\n      }\n\n      .add-blog-btn {\n        align-self: start;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
      updateLoginModal();
    }
  });

  function updateLoginModal() {
    if ((0,_logic_loginUser_loginUser__WEBPACK_IMPORTED_MODULE_3__["default"])(emailInput)) {
      (0,_logic_loginUser_loginUser__WEBPACK_IMPORTED_MODULE_3__["default"])(emailInput).then((data) => {
        (0,_updateLoginModalUI__WEBPACK_IMPORTED_MODULE_4__["default"])(data, modalContainer);
        localStorage.setItem("login", JSON.stringify(true));
      });
    }
  }

  removeLoginModal = function (e) {
    if (
      e.target.classList.contains("x-img") &&
      entryBtn.classList.contains("hidden")
    ) {
      normalBody();
      entryBtn.classList.add("hidden");
      document.querySelector(".entry-button").classList.add("hidden");
      document.querySelector(".blog-adder-button").classList.remove("hidden");
    }

    if (!entryBtn.classList.contains("hidden")) {
      normalBody();
    }

    if (e.target.classList.contains("success-btn")) {
      normalBody();
    }
  };

  function normalBody() {
    modalContainer.remove();
    body.style.overflow = "visible";
  }
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

  if (data) {
    inputContainer.classList.add("hidden");
    successContainer.classList.remove("hidden");
    entryBtn.classList.add("hidden");
    successBtn.classList.remove("hidden");
    errorContainer.classList.add("hidden");

    successBtn.addEventListener("click", function (e) {
      (0,_createLoginModal__WEBPACK_IMPORTED_MODULE_0__.removeLoginModal)(e);
      document.querySelector(".entry-button").classList.add("hidden");
      document.querySelector(".blog-adder-button").classList.remove("hidden");
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
/* harmony import */ var _src_components_dom_main_displayMainDiv_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _imageUploader_createImageUploader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _blogAuthor_createAuthor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var _blogTitle_createTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41);
/* harmony import */ var _blogDescription_createDescription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(45);
/* harmony import */ var _logic_blogAdder_validateForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47);
/* harmony import */ var _blogDate_createDate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49);









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

  blogAdderForm.appendChild((0,_imageUploader_createImageUploader__WEBPACK_IMPORTED_MODULE_2__["default"])(blogInfo));

  const authorTitleContainer = document.createElement("div");
  authorTitleContainer.classList.add("author-title-container");
  blogAdderForm.appendChild(authorTitleContainer);
  authorTitleContainer.appendChild((0,_blogAuthor_createAuthor__WEBPACK_IMPORTED_MODULE_3__["default"])(blogInfo));
  authorTitleContainer.appendChild((0,_blogTitle_createTitle__WEBPACK_IMPORTED_MODULE_4__["default"])(blogInfo));

  blogAdderForm.appendChild((0,_blogDescription_createDescription__WEBPACK_IMPORTED_MODULE_5__["default"])(blogInfo));

  const dateCategoryContainer = document.createElement("div");
  dateCategoryContainer.classList.add("date-category-container");
  blogAdderForm.appendChild(dateCategoryContainer);
  dateCategoryContainer.appendChild((0,_blogDate_createDate__WEBPACK_IMPORTED_MODULE_7__["default"])(blogInfo));

  const addBlogBtn = document.createElement("button");
  addBlogBtn.textContent = "გამოქვეყნება";
  addBlogBtn.classList.add("add-blog-btn");
  blogAdderForm.appendChild(addBlogBtn);

  // blogAdderForm.addEventListener("input", function () {
  //   console.log("ss");
  // });

  backArrow.addEventListener("click", _src_components_dom_main_displayMainDiv_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

  addBlogBtn.addEventListener("click", function (e) {
    e.preventDefault();

    const blogInfo = JSON.parse(localStorage.getItem("blog-info"));

    (0,_logic_blogAdder_validateForm__WEBPACK_IMPORTED_MODULE_6__["default"])(blogInfo);
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
/* 29 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createImageUploader)
/* harmony export */ });
/* harmony import */ var _src_assets_images_folder_add_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _src_assets_images_remove_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony import */ var _updateImageUploader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);




function createImageUploader(blogInfo) {
  const imageUploaderContainer = document.createElement("div");
  imageUploaderContainer.classList.add("img-uploader-container");

  const uploadImageText = document.createElement("p");
  uploadImageText.textContent = "ატვირთეთ ფოტო";
  imageUploaderContainer.appendChild(uploadImageText);

  const imageUploader = document.createElement("div");
  imageUploader.setAttribute("id", "image-uploader");
  imageUploader.classList.add("image-uploader");
  imageUploaderContainer.appendChild(imageUploader);

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

  return imageUploaderContainer;
}


/***/ }),
/* 30 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de8e7a5c0281b0e87f8c.png";

/***/ }),
/* 31 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f463719ae11ed2ff4bba.png";

/***/ }),
/* 32 */
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
/* 33 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createAuthor)
/* harmony export */ });
/* harmony import */ var _logic_blogAdder_validations_author_validateAuthor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _updateFourLetters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony import */ var _updateTwoWordsVal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var _updateGeorgianVal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);





const validations = [
  "მინიმუმ 4 სიმბოლო",
  "მინიმუმ 2 სიტყვა",
  "მხოლოდ ქართული სიმბოლოები",
];
const validationArr = [];

function createAuthor(blogInfo) {
  const authorContainer = document.createElement("div");
  authorContainer.classList.add("author-container");

  const authorLabel = document.createElement("label");
  authorLabel.textContent = "ავტორი";
  authorLabel.setAttribute("for", "author-input");
  authorContainer.appendChild(authorLabel);

  const authorLabelSpan = document.createElement("span");
  authorLabelSpan.textContent = "*";
  authorLabel.appendChild(authorLabelSpan);

  const authorInput = document.createElement("input");
  authorInput.classList.add("author-input");
  authorInput.setAttribute("id", "author-input");
  authorInput.setAttribute("placeholder", "შეიყვანეთ ავტორი");
  authorContainer.appendChild(authorInput);

  const validationTexts = document.createElement("ul");
  validationTexts.classList.add("validation-texts");
  authorContainer.appendChild(validationTexts);

  validations.forEach((el) => {
    const validationContainer = document.createElement("div");
    validationContainer.classList.add("validation-container");
    validationTexts.appendChild(validationContainer);
    validationArr.push(validationContainer);

    const validationBefore = document.createElement("span");
    validationBefore.classList.add("validation-before");
    validationContainer.appendChild(validationBefore);

    const validationText = document.createElement("li");
    validationText.textContent = el;
    validationContainer.appendChild(validationText);
  });

  if (blogInfo && blogInfo.author) {
    authorInput.value = blogInfo.author;
    (0,_logic_blogAdder_validations_author_validateAuthor__WEBPACK_IMPORTED_MODULE_0__["default"])(authorInput, validationArr);
  }

  authorInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") e.preventDefault();
  });

  authorInput.addEventListener("input", function () {
    if (this.value.charAt(0) === " ") {
      alert("Input should not start with a space");
      this.value = "";
      return;
    }
    (0,_logic_blogAdder_validations_author_validateAuthor__WEBPACK_IMPORTED_MODULE_0__["default"])(this, validationArr);
  });

  authorInput.addEventListener("blur", function () {
    if (this.value.length === 0) {
      this.style.border = "1px solid #e4e3eb";
      (0,_updateFourLetters__WEBPACK_IMPORTED_MODULE_1__["default"])("init", validationArr[0]);
      (0,_updateGeorgianVal__WEBPACK_IMPORTED_MODULE_3__["default"])("init", validationArr[1]);
      (0,_updateTwoWordsVal__WEBPACK_IMPORTED_MODULE_2__["default"])("init", validationArr[2]);
    }
  });

  return authorContainer;
}


/***/ }),
/* 34 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateAuthor)
/* harmony export */ });
/* harmony import */ var _validateFourLetters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _validateTwoWords__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var _validateGeorgianAlph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var _dom_blogAdder_blogAuthor_updateFourLetters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);
/* harmony import */ var _dom_blogAdder_blogAuthor_updateTwoWordsVal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _dom_blogAdder_blogAuthor_updateGeorgianVal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40);







function validateAuthor(input, arr) {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
  const value = input.value;

  if (value.length === 0) {
    (0,_dom_blogAdder_blogAuthor_updateFourLetters__WEBPACK_IMPORTED_MODULE_3__["default"])(false, arr[0]);
    (0,_dom_blogAdder_blogAuthor_updateTwoWordsVal__WEBPACK_IMPORTED_MODULE_4__["default"])(false, arr[1]);
    (0,_dom_blogAdder_blogAuthor_updateGeorgianVal__WEBPACK_IMPORTED_MODULE_5__["default"])(false, arr[2]);
    blogInfo.author = value;
    localStorage.setItem("blog-info", JSON.stringify(blogInfo));
    return;
  }

  (0,_dom_blogAdder_blogAuthor_updateFourLetters__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_validateFourLetters__WEBPACK_IMPORTED_MODULE_0__["default"])(value), arr[0]);
  (0,_dom_blogAdder_blogAuthor_updateTwoWordsVal__WEBPACK_IMPORTED_MODULE_4__["default"])((0,_validateTwoWords__WEBPACK_IMPORTED_MODULE_1__["default"])(value), arr[1]);
  (0,_dom_blogAdder_blogAuthor_updateGeorgianVal__WEBPACK_IMPORTED_MODULE_5__["default"])((0,_validateGeorgianAlph__WEBPACK_IMPORTED_MODULE_2__["default"])(value), arr[2]);

  if (
    (0,_validateFourLetters__WEBPACK_IMPORTED_MODULE_0__["default"])(value) &&
    (0,_validateTwoWords__WEBPACK_IMPORTED_MODULE_1__["default"])(value) &&
    (0,_validateGeorgianAlph__WEBPACK_IMPORTED_MODULE_2__["default"])(value)
  ) {
    input.style.border = "1px solid green";
  } else input.style.border = "1px solid red";

  blogInfo.author = value;
  localStorage.setItem("blog-info", JSON.stringify(blogInfo));
}


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateFourLetters)
/* harmony export */ });
function validateFourLetters(value) {
  function checkValue(value) {
    let letterCount = 0;

    for (const char of value) {
      if (char === " ") continue;
      letterCount++;
    }
    return letterCount >= 4;
  }

  return checkValue(value);
}


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateTwoWords)
/* harmony export */ });
function validateTwoWords(value) {
  function hasTwoWords(value) {
    const words = value.split(" ");
    let wordCounter = 0;

    for (let word of words) {
      if (word === "") continue;
      wordCounter++;
    }
    return wordCounter >= 2;
  }

  return hasTwoWords(value);
}


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateGeorgianAlph)
/* harmony export */ });
function validateGeorgianAlph(value) {
  const georgianAlphabet = new Set([
    0x10a0, 0x10a1, 0x10a2, 0x10a3, 0x10a4, 0x10a5, 0x10a6, 0x10a7, 0x10a8,
    0x10a9, 0x10aa, 0x10ab, 0x10ac, 0x10ad, 0x10ae, 0x10af, 0x10b0, 0x10b1,
    0x10b2, 0x10b3, 0x10b4, 0x10b5, 0x10b6, 0x10b7, 0x10b8, 0x10b9, 0x10ba,
    0x10bb, 0x10bc, 0x10bd, 0x10be, 0x10bf, 0x10c0, 0x10c1, 0x10c2, 0x10c3,
    0x10c4, 0x10c5, 0x10c6, 0x10c7, 0x10c8, 0x10c9, 0x10ca, 0x10cb, 0x10cc,
    0x10cd, 0x10ce, 0x10cf, 0x10d0, 0x10d1, 0x10d2, 0x10d3, 0x10d4, 0x10d5,
    0x10d6, 0x10d7, 0x10d8, 0x10d9, 0x10da, 0x10db, 0x10dc, 0x10dd, 0x10de,
    0x10df, 0x10e0, 0x10e1, 0x10e2, 0x10e3, 0x10e4, 0x10e5, 0x10e6, 0x10e7,
    0x10e8, 0x10e9, 0x10ea, 0x10eb, 0x10ec, 0x10ed, 0x10ee, 0x10ef,
  ]);

  function checkInput(input) {
    let allCharactersAreGeorgian = true;

    for (let char of input) {
      if (char === " ") continue;
      let charCode = char.charCodeAt(0);
      if (!georgianAlphabet.has(charCode)) {
        allCharactersAreGeorgian = false;
        break;
      }
    }

    return allCharactersAreGeorgian;
  }

  return checkInput(value);
}


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateFourLetters)
/* harmony export */ });
function updateFourLetters(valid, div) {
  if (valid === "init") {
    div.querySelector("span").style.backgroundColor = "#85858d";
    div.querySelector("li").style.color = "#85858d";
    return;
  }

  if (valid) {
    div.querySelector("span").style.backgroundColor = "green";
    div.querySelector("li").style.color = "green";
  }

  if (!valid) {
    div.querySelector("span").style.backgroundColor = "red";
    div.querySelector("li").style.color = "red";
  }
}


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateTwoWordsVal)
/* harmony export */ });
function updateTwoWordsVal(valid, div) {
  if (valid === "init") {
    div.querySelector("span").style.backgroundColor = "#85858d";
    div.querySelector("li").style.color = "#85858d";
    return;
  }

  if (valid) {
    div.querySelector("span").style.backgroundColor = "green";
    div.querySelector("li").style.color = "green";
  }

  if (!valid) {
    div.querySelector("span").style.backgroundColor = "red";
    div.querySelector("li").style.color = "red";
  }
}


/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateGeorgianVal)
/* harmony export */ });
function updateGeorgianVal(valid, div) {
  if (valid === "init") {
    div.querySelector("span").style.backgroundColor = "#85858d";
    div.querySelector("li").style.color = "#85858d";
    return;
  }

  if (valid) {
    div.querySelector("span").style.backgroundColor = "green";
    div.querySelector("li").style.color = "green";
  }

  if (!valid) {
    div.querySelector("span").style.backgroundColor = "red";
    div.querySelector("li").style.color = "red";
  }
}


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTitle)
/* harmony export */ });
/* harmony import */ var _logic_blogAdder_validations_title_validateTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _updateTwoLetters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);



const validations = ["მინიმუმ 2 სიმბოლო"];
let validationContainer;

function createTitle(blogInfo) {
  const titleContainer = document.createElement("div");
  titleContainer.classList.add("title-container");

  const titleLabel = document.createElement("label");
  titleLabel.textContent = "სათაური";
  titleLabel.setAttribute("for", "title-input");
  titleContainer.appendChild(titleLabel);

  const titleLabelSpan = document.createElement("span");
  titleLabelSpan.textContent = "*";
  titleLabel.appendChild(titleLabelSpan);

  const titleInput = document.createElement("input");
  titleInput.classList.add("title-input");
  titleInput.setAttribute("id", "title-input");
  titleInput.setAttribute("placeholder", "შეიყვანეთ სათაური");
  titleContainer.appendChild(titleInput);

  const validationTexts = document.createElement("ul");
  validationTexts.classList.add("validation-texts");
  titleContainer.appendChild(validationTexts);

  validations.forEach((el) => {
    validationContainer = document.createElement("div");
    validationContainer.classList.add("validation-container");
    validationTexts.appendChild(validationContainer);

    const validationBefore = document.createElement("span");
    validationBefore.classList.add("validation-before");
    validationContainer.appendChild(validationBefore);

    const validationText = document.createElement("li");
    validationText.textContent = el;
    validationContainer.appendChild(validationText);
  });

  if (blogInfo && blogInfo.title) {
    titleInput.value = blogInfo.title;
    (0,_logic_blogAdder_validations_title_validateTitle__WEBPACK_IMPORTED_MODULE_0__["default"])(titleInput, validationContainer);
  }

  titleInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") e.preventDefault();
  });

  titleInput.addEventListener("input", function () {
    if (this.value.charAt(0) === " ") {
      alert("Input should not start with a space");
      this.value = "";
      return;
    }
    (0,_logic_blogAdder_validations_title_validateTitle__WEBPACK_IMPORTED_MODULE_0__["default"])(this, validationContainer);
  });

  titleInput.addEventListener("blur", function () {
    if (this.value.length === 0) {
      this.style.border = "1px solid #e4e3eb";
      (0,_updateTwoLetters__WEBPACK_IMPORTED_MODULE_1__["default"])("init", validationContainer);
    }
  });

  return titleContainer;
}


/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateTitle)
/* harmony export */ });
/* harmony import */ var _validateTwoLetters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _dom_blogAdder_blogTitle_updateTwoLetters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);



function validateTitle(input, div) {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
  const value = input.value;

  (0,_dom_blogAdder_blogTitle_updateTwoLetters__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_validateTwoLetters__WEBPACK_IMPORTED_MODULE_0__["default"])(value), div);

  if ((0,_validateTwoLetters__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    input.style.border = "1px solid green";
  } else input.style.border = "1px solid red";

  blogInfo.title = value;
  localStorage.setItem("blog-info", JSON.stringify(blogInfo));
}


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateTwoLetters)
/* harmony export */ });
function validateTwoLetters(value) {
  function checkValue(value) {
    let letterCount = 0;

    for (const char of value) {
      if (char === " ") continue;
      letterCount++;
    }
    return letterCount >= 2;
  }

  return checkValue(value);
}


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateTwoLetters)
/* harmony export */ });
function updateTwoLetters(valid, div) {
  if (valid === "init") {
    div.querySelector("span").style.backgroundColor = "#85858d";
    div.querySelector("li").style.color = "#85858d";
    return;
  }

  if (valid) {
    div.querySelector("span").style.backgroundColor = "green";
    div.querySelector("li").style.color = "green";
    return true;
  }

  if (!valid) {
    div.querySelector("span").style.backgroundColor = "red";
    div.querySelector("li").style.color = "red";
    return false;
  }
}


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createDescription)
/* harmony export */ });
/* harmony import */ var _logic_blogAdder_validations_description_validateDescription__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _blogTitle_updateTwoLetters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);



const validations = ["მინიმუმ 2 სიმბოლო"];
let validationContainer;

function createDescription(blogInfo) {
  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("description-container");

  const descriptionLabel = document.createElement("label");
  descriptionLabel.textContent = "აღწერა";
  descriptionLabel.setAttribute("for", "description-input");
  descriptionContainer.appendChild(descriptionLabel);

  const descriptionLabelSpan = document.createElement("span");
  descriptionLabelSpan.textContent = "*";
  descriptionLabel.appendChild(descriptionLabelSpan);

  const descriptionInput = document.createElement("textarea");
  descriptionInput.setAttribute("rows", 6);
  descriptionInput.classList.add("description-input");
  descriptionInput.setAttribute("id", "description-input");
  descriptionInput.setAttribute("placeholder", "შეიყვანეთ აღწერა");
  descriptionContainer.appendChild(descriptionInput);

  const validationTexts = document.createElement("ul");
  validationTexts.classList.add("validation-texts");
  descriptionContainer.appendChild(validationTexts);

  validations.forEach((el) => {
    validationContainer = document.createElement("div");
    validationContainer.classList.add("validation-container");
    validationTexts.appendChild(validationContainer);

    const validationBefore = document.createElement("span");
    validationBefore.classList.add("validation-before");
    validationContainer.appendChild(validationBefore);

    const validationText = document.createElement("li");
    validationText.textContent = el;
    validationContainer.appendChild(validationText);
  });

  if (blogInfo && blogInfo.description) {
    descriptionInput.value = blogInfo.description;
    (0,_logic_blogAdder_validations_description_validateDescription__WEBPACK_IMPORTED_MODULE_0__["default"])(descriptionInput, validationContainer);
  }

  descriptionInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") e.preventDefault();
  });

  descriptionInput.addEventListener("input", function () {
    if (this.value.charAt(0) === " ") {
      alert("Input should not start with a space");
      this.value = "";
      return;
    }
    (0,_logic_blogAdder_validations_description_validateDescription__WEBPACK_IMPORTED_MODULE_0__["default"])(this, validationContainer);
  });

  descriptionInput.addEventListener("blur", function () {
    if (this.value.length === 0) {
      this.style.border = "1px solid #e4e3eb";
      (0,_blogTitle_updateTwoLetters__WEBPACK_IMPORTED_MODULE_1__["default"])("init", validationContainer);
    }
  });

  return descriptionContainer;
}


/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateDescription)
/* harmony export */ });
/* harmony import */ var _title_validateTwoLetters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _dom_blogAdder_blogTitle_updateTwoLetters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);



function validateDescription(input, div) {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
  const value = input.value;

  (0,_dom_blogAdder_blogTitle_updateTwoLetters__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_title_validateTwoLetters__WEBPACK_IMPORTED_MODULE_0__["default"])(value), div);

  if ((0,_title_validateTwoLetters__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    input.style.border = "1px solid green";
  } else input.style.border = "1px solid red";

  blogInfo.description = value;
  localStorage.setItem("blog-info", JSON.stringify(blogInfo));
}


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateForm)
/* harmony export */ });
/* harmony import */ var _validations_image_validateImg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);


function validateForm(blogInfo) {
  if ((0,_validations_image_validateImg__WEBPACK_IMPORTED_MODULE_0__["default"])(blogInfo)) return true;
}


/***/ }),
/* 48 */
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
/* 49 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createDate)
/* harmony export */ });
/* harmony import */ var _logic_blogAdder_validations_date_validateDate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);


function createDate(blogInfo) {
  const dateContainer = document.createElement("div");
  dateContainer.classList.add("date-container");

  const dateLabel = document.createElement("label");
  dateLabel.textContent = "გამოქვეყნების თარიღი";
  dateLabel.setAttribute("for", "date-input");
  dateContainer.appendChild(dateLabel);

  const dateLabelSpan = document.createElement("span");
  dateLabelSpan.textContent = "*";
  dateLabel.appendChild(dateLabelSpan);

  const dateInput = document.createElement("input");
  dateInput.setAttribute("type", "date");
  dateInput.setAttribute("id", "date-input");
  dateContainer.appendChild(dateInput);

  if (blogInfo && blogInfo.date) {
    dateInput.value = blogInfo.date;
    (0,_logic_blogAdder_validations_date_validateDate__WEBPACK_IMPORTED_MODULE_0__["default"])(dateInput);
  }

  dateInput.addEventListener("change", function () {
    (0,_logic_blogAdder_validations_date_validateDate__WEBPACK_IMPORTED_MODULE_0__["default"])(dateInput);
  });

  dateInput.addEventListener("focus", function () {
    if (!dateInput.value) dateInput.style.border = "1px solid red";
  });

  dateInput.addEventListener("blur", function () {
    if (!dateInput.value) dateInput.style.border = "1px solid #e4e3eb";
  });

  return dateContainer;
}


/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateDate)
/* harmony export */ });
function validateDate(input) {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
  const value = input.value;

  if (value) {
    input.style.border = "1px solid green";
  } else input.style.border = "1px solid red";

  blogInfo.date = value;
  localStorage.setItem("blog-info", JSON.stringify(blogInfo));
}


/***/ }),
/* 51 */
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
/* 52 */
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
/* harmony import */ var _components_logic_categories_fetchCategories__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51);
/* harmony import */ var _components_dom_main_createCategories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(52);







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

(0,_components_logic_categories_fetchCategories__WEBPACK_IMPORTED_MODULE_4__["default"])(url).then((data) => {
  (0,_components_dom_main_createCategories__WEBPACK_IMPORTED_MODULE_5__["default"])(data);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTywwT0FBME8sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sVUFBVSxXQUFXLFVBQVUsTUFBTSxTQUFTLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxTQUFTLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLGFBQWEsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsTUFBTSxTQUFTLFVBQVUsV0FBVyxVQUFVLE1BQU0sU0FBUyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxTQUFTLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLHVDQUF1QyxxQkFBcUIsb0JBQW9CLHFDQUFxQywwQkFBMEIsMEJBQTBCLGdDQUFnQyxnQkFBZ0IsZ0NBQWdDLHlCQUF5QiwwQkFBMEIsdUJBQXVCLDJCQUEyQixrQ0FBa0MscUJBQXFCLDJCQUEyQixpQkFBaUIsMEJBQTBCLFNBQVMsT0FBTyxLQUFLLEdBQUcsc0NBQXNDLGlDQUFpQyx1Q0FBdUMsc0NBQXNDLGdCQUFnQiw0QkFBNEIsOERBQThELEdBQUcseUJBQXlCLE9BQU8sY0FBYyxlQUFlLDJCQUEyQixHQUFHLGFBQWEsNkJBQTZCLEdBQUcsVUFBVSxrQ0FBa0Msc0JBQXNCLEdBQUcsZ0JBQWdCLG1CQUFtQixvQkFBb0IsNkJBQTZCLGdCQUFnQixvQkFBb0Isc0JBQXNCLHVDQUF1Qyw0QkFBNEIsc0VBQXNFLHFDQUFxQyxjQUFjLCtCQUErQiwyQkFBMkIseUJBQXlCLFNBQVMsT0FBTyxLQUFLLDZCQUE2QiwwQkFBMEIsb0JBQW9CLDJEQUEyRCxrQ0FBa0MscUJBQXFCLG1CQUFtQixzQkFBc0IsZ0NBQWdDLDRCQUE0Qix5QkFBeUIsNEJBQTRCLGlCQUFpQiwwQkFBMEIsc0JBQXNCLG9DQUFvQyxTQUFTLGFBQWEsa0NBQWtDLDZCQUE2QixrQ0FBa0MsMkJBQTJCLGtDQUFrQyxtQkFBbUIsOEJBQThCLFdBQVcsU0FBUyxPQUFPLEtBQUssR0FBRyx1QkFBdUIsNEJBQTRCLHlDQUF5QyxrQkFBa0IsNEJBQTRCLHdCQUF3QixvQkFBb0IsV0FBVyxnQkFBZ0IsaUJBQWlCLHNCQUFzQixvQkFBb0IsNkJBQTZCLGdDQUFnQyxtQ0FBbUMsbUJBQW1CLGtDQUFrQywwQkFBMEIsZ0JBQWdCLHdCQUF3QixxQkFBcUIscUJBQXFCLGlCQUFpQiwwQkFBMEIscUJBQXFCLG9DQUFvQyxTQUFTLE9BQU8sMEJBQTBCLHNCQUFzQiwrQkFBK0IsY0FBYyw2QkFBNkIsOEJBQThCLDRCQUE0QixTQUFTLGlCQUFpQiwyQkFBMkIsMkJBQTJCLDRCQUE0Qiw2QkFBNkIsU0FBUyxpQkFBaUIsK0JBQStCLDJCQUEyQixvQ0FBb0Msd0JBQXdCLG9DQUFvQyw4QkFBOEIsd0JBQXdCLDhCQUE4QixtQkFBbUIsa0NBQWtDLFdBQVcsU0FBUyxPQUFPLDBCQUEwQixzQkFBc0IsNEJBQTRCLGtCQUFrQiw0QkFBNEIsYUFBYSwyQkFBMkIseUJBQXlCLFNBQVMsT0FBTyw0QkFBNEIsc0JBQXNCLCtCQUErQiw0QkFBNEIsa0JBQWtCLDRCQUE0QixjQUFjLDJCQUEyQix5QkFBeUIsU0FBUyxPQUFPLGdCQUFnQiw2QkFBNkIseUJBQXlCLHNCQUFzQixxQkFBcUIsa0NBQWtDLDJCQUEyQix1QkFBdUIseUJBQXlCLCtCQUErQixpQkFBaUIsMEJBQTBCLFNBQVMsT0FBTyxLQUFLLEdBQUcsa0JBQWtCLDRCQUE0QixrQ0FBa0Msa0NBQWtDLHVCQUF1QixtQkFBbUIseUJBQXlCLGVBQWUsd0JBQXdCLE9BQU8sS0FBSywyQkFBMkIsNEJBQTRCLHNCQUFzQixZQUFZLHlCQUF5Qix1QkFBdUIsMEJBQTBCLHlCQUF5Qiw0QkFBNEIsT0FBTyxvQkFBb0Isc0JBQXNCLCtCQUErQixrQkFBa0IsbUNBQW1DLHdCQUF3QixpQ0FBaUMsb0JBQW9CLDZCQUE2QixzQ0FBc0MseUNBQXlDLGdDQUFnQywwQkFBMEIsbUNBQW1DLGdDQUFnQyxzQkFBc0IsbUJBQW1CLGlDQUFpQyxhQUFhLDRCQUE0Qiw0QkFBNEIsc0NBQXNDLHVCQUF1Qix1QkFBdUIsMkNBQTJDLGdDQUFnQyxpQ0FBaUMsZUFBZSxxQkFBcUIsZ0NBQWdDLGVBQWUsYUFBYSxXQUFXLFNBQVMsb0VBQW9FLHdCQUF3Qix5Q0FBeUMsb0JBQW9CLFNBQVMsNkdBQTZHLGtCQUFrQix3QkFBd0IsaUNBQWlDLG9CQUFvQixtQkFBbUIsMEJBQTBCLHFCQUFxQiw2QkFBNkIsMkJBQTJCLDZCQUE2QixXQUFXLHNDQUFzQywrQkFBK0IsaUNBQWlDLGdDQUFnQywwQkFBMEIsc0NBQXNDLDJCQUEyQixXQUFXLG1DQUFtQywwQkFBMEIsZ0NBQWdDLHFCQUFxQixXQUFXLGdDQUFnQyx5QkFBeUIsMEJBQTBCLCtCQUErQiwyQkFBMkIsc0NBQXNDLFdBQVcsZ0JBQWdCLGtDQUFrQywyQkFBMkIsV0FBVyxTQUFTLHlCQUF5Qiw0QkFBNEIsU0FBUyxPQUFPLEtBQUssR0FBRyxxQkFBcUI7QUFDenlTO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7QUMzVDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNmYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCbUU7QUFDTjtBQUNBOztBQUU5QztBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLGlFQUFlO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUNBQXFDLG9FQUFnQjs7QUFFckQseUNBQXlDLG1FQUFnQjs7QUFFekQ7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ2lEO0FBQ2E7QUFDTTtBQUNUO0FBQ0w7O0FBRXREOztBQUVlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLDBEQUFJO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGtFQUFlO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsK0RBQVk7QUFDOUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLFFBQVEsc0VBQVM7QUFDakIsTUFBTSxzRUFBUztBQUNmLFFBQVEsK0RBQWtCO0FBQzFCO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbklnQjtBQUNOOztBQUV2QjtBQUNmLE1BQU0sMERBQWE7QUFDbkIsV0FBVyx1REFBVTtBQUNyQjtBQUNBOzs7Ozs7Ozs7OztBQ1BlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNkZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxvQkFBb0IsTUFBTTtBQUMxQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZCc0Q7O0FBRXZDO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sbUVBQWdCO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDOUNlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNWMkQ7O0FBRTVDO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLDZEQUFXO0FBQzVCOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QjZEO0FBQ1c7QUFDRjtBQUNqQjtBQUNIO0FBQ2tCO0FBQ047QUFDZDs7QUFFakM7QUFDZjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsOERBQVk7QUFDOUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsOEVBQW1COztBQUUvQztBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsb0VBQVk7QUFDL0MsbUNBQW1DLGtFQUFXOztBQUU5Qyw0QkFBNEIsOEVBQWlCOztBQUU3QztBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsZ0VBQVU7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNOztBQUVOLHNDQUFzQyxrRkFBYzs7QUFFcEQ7QUFDQTs7QUFFQTs7QUFFQSxJQUFJLHlFQUFZO0FBQ2hCLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25FZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDUCtEO0FBQ047QUFDRDs7QUFFekM7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQiw4REFBYztBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQiwwREFBWTtBQUM5QjtBQUNBOztBQUVBO0FBQ0EsSUFBSSxnRUFBbUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxnRUFBbUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQSxJQUFJLGdFQUFtQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9GZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDNUR3RjtBQUNwQztBQUNBO0FBQ0E7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUksOEZBQWM7QUFDbEI7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4RkFBYztBQUNsQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLE1BQU0sOERBQWlCO0FBQ3ZCLE1BQU0sOERBQWlCO0FBQ3ZCLE1BQU0sOERBQWlCO0FBQ3ZCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlFd0Q7QUFDTjtBQUNRO0FBQzZCO0FBQ0E7QUFDQTs7QUFFeEU7QUFDZjtBQUNBOztBQUVBO0FBQ0EsSUFBSSx1RkFBaUI7QUFDckIsSUFBSSx1RkFBaUI7QUFDckIsSUFBSSx1RkFBaUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsRUFBRSx1RkFBaUIsQ0FBQyxnRUFBbUI7QUFDdkMsRUFBRSx1RkFBaUIsQ0FBQyw2REFBZ0I7QUFDcEMsRUFBRSx1RkFBaUIsQ0FBQyxpRUFBb0I7O0FBRXhDO0FBQ0EsSUFBSSxnRUFBbUI7QUFDdkIsSUFBSSw2REFBZ0I7QUFDcEIsSUFBSSxpRUFBb0I7QUFDeEI7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2xDZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDWmU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDYmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDN0JlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2hCZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNoQmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNoQnFGO0FBQ25DOztBQUVsRDtBQUNBOztBQUVlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUksNEZBQWE7QUFDakI7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0RkFBYTtBQUNqQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNkRBQWdCO0FBQ3RCO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckVzRDtBQUM4Qjs7QUFFckU7QUFDZjtBQUNBOztBQUVBLEVBQUUscUZBQWdCLENBQUMsK0RBQWtCOztBQUVyQyxNQUFNLCtEQUFrQjtBQUN4QjtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2ZlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUNaZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQnVHO0FBQzFDOztBQUU3RDtBQUNBOztBQUVlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBSSx3R0FBbUI7QUFDdkI7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSx3R0FBbUI7QUFDdkIsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxNQUFNLHVFQUFnQjtBQUN0QjtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RFNkQ7QUFDdUI7O0FBRXJFO0FBQ2Y7QUFDQTs7QUFFQSxFQUFFLHFGQUFnQixDQUFDLHFFQUFrQjs7QUFFckMsTUFBTSxxRUFBa0I7QUFDeEI7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDZjBEOztBQUUzQztBQUNmLE1BQU0sMEVBQVc7QUFDakI7Ozs7Ozs7Ozs7O0FDSmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNWa0Y7O0FBRW5FO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksMEZBQVk7QUFDaEI7O0FBRUE7QUFDQSxJQUFJLDBGQUFZO0FBQ2hCLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7Ozs7Ozs7Ozs7QUN0Q2U7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNWZTtBQUNmO0FBQ0Esb0NBQW9DLElBQUk7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7O0FBRUw7QUFDQSw2Q0FBNkMsZ0JBQWdCO0FBQzdEOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2xCZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbURBQW1ELE1BQU07QUFDekQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7Ozs7O1VDbEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQXlCO0FBQ3VDO0FBQ047QUFDZTtBQUNHO0FBQ047O0FBRXRFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0VBQWtFOztBQUVsRSxpQkFBaUIsK0VBQVk7QUFDN0IsaUJBQWlCLDJFQUFVO0FBQzNCLGlCQUFpQixxRkFBZTs7QUFFaEMsd0ZBQWU7QUFDZixFQUFFLGlGQUFnQjtBQUNsQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9pbmRleC5zY3NzPzcyMjMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vaGVhZGVyL2NyZWF0ZUhlYWRlci5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2hlYWRlci9sb2dpbk1vZGFsL2NyZWF0ZUxvZ2luTW9kYWwuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2xvZ2ljL2xvZ2luVXNlci9sb2dpblVzZXIuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2xvZ2ljL2xvZ2luVXNlci92YWxpZGF0ZUVtYWlsLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9sb2dpYy9sb2dpblVzZXIvY2hlY2tFbWFpbC5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2hlYWRlci9sb2dpbk1vZGFsL3VwZGF0ZUxvZ2luTW9kYWxVSS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2Jsb2dBZGRlci9kaXNwbGF5QmxvZ0FkZGVyLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vbWFpbi9jcmVhdGVNYWluLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vYmxvZ0FkZGVyL2NyZWF0ZUJsb2dBZGRlci5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL21haW4vZGlzcGxheU1haW5EaXYuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2RvbS9ibG9nQWRkZXIvaW1hZ2VVcGxvYWRlci9jcmVhdGVJbWFnZVVwbG9hZGVyLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vYmxvZ0FkZGVyL2ltYWdlVXBsb2FkZXIvdXBkYXRlSW1hZ2VVcGxvYWRlci5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2Jsb2dBZGRlci9ibG9nQXV0aG9yL2NyZWF0ZUF1dGhvci5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRpb25zL2F1dGhvci92YWxpZGF0ZUF1dGhvci5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRpb25zL2F1dGhvci92YWxpZGF0ZUZvdXJMZXR0ZXJzLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9sb2dpYy9ibG9nQWRkZXIvdmFsaWRhdGlvbnMvYXV0aG9yL3ZhbGlkYXRlVHdvV29yZHMuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2xvZ2ljL2Jsb2dBZGRlci92YWxpZGF0aW9ucy9hdXRob3IvdmFsaWRhdGVHZW9yZ2lhbkFscGguanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2RvbS9ibG9nQWRkZXIvYmxvZ0F1dGhvci91cGRhdGVGb3VyTGV0dGVycy5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2Jsb2dBZGRlci9ibG9nQXV0aG9yL3VwZGF0ZVR3b1dvcmRzVmFsLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vYmxvZ0FkZGVyL2Jsb2dBdXRob3IvdXBkYXRlR2VvcmdpYW5WYWwuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2RvbS9ibG9nQWRkZXIvYmxvZ1RpdGxlL2NyZWF0ZVRpdGxlLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9sb2dpYy9ibG9nQWRkZXIvdmFsaWRhdGlvbnMvdGl0bGUvdmFsaWRhdGVUaXRsZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRpb25zL3RpdGxlL3ZhbGlkYXRlVHdvTGV0dGVycy5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2Jsb2dBZGRlci9ibG9nVGl0bGUvdXBkYXRlVHdvTGV0dGVycy5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2Jsb2dBZGRlci9ibG9nRGVzY3JpcHRpb24vY3JlYXRlRGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2xvZ2ljL2Jsb2dBZGRlci92YWxpZGF0aW9ucy9kZXNjcmlwdGlvbi92YWxpZGF0ZURlc2NyaXB0aW9uLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9sb2dpYy9ibG9nQWRkZXIvdmFsaWRhdGVGb3JtLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9sb2dpYy9ibG9nQWRkZXIvdmFsaWRhdGlvbnMvaW1hZ2UvdmFsaWRhdGVJbWcuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2RvbS9ibG9nQWRkZXIvYmxvZ0RhdGUgL2NyZWF0ZURhdGUuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2xvZ2ljL2Jsb2dBZGRlci92YWxpZGF0aW9ucy9kYXRlL3ZhbGlkYXRlRGF0ZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvY2F0ZWdvcmllcy9mZXRjaENhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2RvbS9tYWluL2NyZWF0ZUNhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250cy9GaXJhR08vRmlyYUdPLVJlZ3VsYXIub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjaGVhZGVyLWRpdiAuaGVhZGVyLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI0cHggMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XG59XG4jaGVhZGVyLWRpdiAuaGVhZGVyLWNvbnRlbnQgYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlyYUdPXCI7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogI2Y4ZmFmYztcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQzN2YzO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbiNoZWFkZXItZGl2IC5oZWFkZXItY29udGVudCBidXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNtYWluLWRpdiAubWFpbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA3MHB4O1xufVxuI21haW4tZGl2IC5tYWluLWNvbnRlbnQgLm1haW4taW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjFmNWY5LCAjZTJlOGYwKTtcbiAgcGFkZGluZzogNzBweCA5MHB4IDBweCAxMjBweDtcbn1cbiNtYWluLWRpdiAubWFpbi1jb250ZW50IC5tYWluLWluZm8gaDEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiA0LjhlbTtcbiAgY29sb3I6ICMxYTFhMWY7XG59XG4jbWFpbi1kaXYgLmNhdGVnb3JpZXMtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMzBweCAzMDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgbWlubWF4KDEwMHB4LCAxZnIpKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICBncmlkLWdhcDogMTBweDtcbn1cbiNtYWluLWRpdiAuY2F0ZWdvcmllcy1jb250YWluZXIgLmNhdGVnb3J5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG4jbWFpbi1kaXYgLmNhdGVnb3JpZXMtY29udGFpbmVyIC5jYXRlZ29yeTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgc2NhbGU6IDEuMDU7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG59XG4jbWFpbi1kaXYgLmNhdGVnb3JpZXMtY29udGFpbmVyIC5jYXRlZ29yeSBwIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlyYUdPXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuI21haW4tZGl2IC5jYXRlZ29yaWVzLWNvbnRhaW5lciAuY2F0ZWdvcnkgcDpob3ZlciB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4jbW9kYWwtY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlyYUdPXCI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuI21vZGFsLWNvbnRhaW5lciAubW9kYWwtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIHBhZGRpbmc6IDIwcHggMzBweCAzNXB4IDMwcHg7XG4gIHdpZHRoOiA0ODBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuI21vZGFsLWNvbnRhaW5lciAubW9kYWwtY29udGVudCAueC1pbWcge1xuICBhbGlnbi1zZWxmOiBlbmQ7XG4gIGhlaWdodDogMTJweDtcbiAgb3BhY2l0eTogMC42O1xufVxuI21vZGFsLWNvbnRhaW5lciAubW9kYWwtY29udGVudCAueC1pbWc6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHNjYWxlOiAxLjE7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG59XG4jbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250ZW50IC5pbnB1dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuI21vZGFsLWNvbnRhaW5lciAubW9kYWwtY29udGVudCAuaW5wdXQtY29udGFpbmVyIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbn1cbiNtb2RhbC1jb250YWluZXIgLm1vZGFsLWNvbnRlbnQgLmlucHV0LWNvbnRhaW5lciBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG4jbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250ZW50IC5pbnB1dC1jb250YWluZXIgaW5wdXQge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmZjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbiNtb2RhbC1jb250YWluZXIgLm1vZGFsLWNvbnRlbnQgLmlucHV0LWNvbnRhaW5lciBpbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzVkMzdmMztcbn1cbiNtb2RhbC1jb250YWluZXIgLm1vZGFsLWNvbnRlbnQgLmVycm9yLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbiNtb2RhbC1jb250YWluZXIgLm1vZGFsLWNvbnRlbnQgLmVycm9yLWNvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgY29sb3I6ICNmZjAwMDA7XG59XG4jbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250ZW50IC5zdWNjZXNzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbiNtb2RhbC1jb250YWluZXIgLm1vZGFsLWNvbnRlbnQgLnN1Y2Nlc3MtY29udGFpbmVyIGgxIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgY29sb3I6ICMxYTFhMWY7XG59XG4jbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250ZW50IGJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IDAuOWVtO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZDM3ZjM7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG59XG4jbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250ZW50IGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2Jsb2ctYWRkZXIge1xuICBmb250LWZhbWlseTogXCJGaXJhR09cIjtcbiAgcGFkZGluZzogNTBweCA3MHB4IDI1MHB4IDcwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTRlM2ViO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jYmxvZy1hZGRlciAuYmFjay1hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbiNibG9nLWFkZGVyIC5iYWNrLWFycm93OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDAgNTBweDtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgaDEge1xuICBmb250LXNpemU6IDIuM2VtO1xuICBjb2xvcjogIzFhMWExZjtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDUwcHg7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmltZy11cGxvYWRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmltZy11cGxvYWRlci1jb250YWluZXIgLmltYWdlLXVwbG9hZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTdlYjtcbiAgYm9yZGVyOiAxLjVweCBkYXNoZWQgIzg1ODU4ZDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogODBweCAxMDBweDtcbiAgZ2FwOiAzMHB4O1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5pbWctdXBsb2FkZXItY29udGFpbmVyIC5pbWFnZS11cGxvYWRlciBpbWcge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmltZy11cGxvYWRlci1jb250YWluZXIgLmltYWdlLXVwbG9hZGVyIC5pbWFnZS10ZXh0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDVweDtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuaW1nLXVwbG9hZGVyLWNvbnRhaW5lciAuaW1hZ2UtdXBsb2FkZXIgLmltYWdlLXRleHRzIGxhYmVsIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuaW1nLXVwbG9hZGVyLWNvbnRhaW5lciAuaW1hZ2UtdXBsb2FkZXIgLmltYWdlLXRleHRzIGltZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuYXV0aG9yLXRpdGxlLWNvbnRhaW5lcixcbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuZGF0ZS1jYXRlZ29yeS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMzBweDtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuYXV0aG9yLWNvbnRhaW5lcixcbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAudGl0bGUtY29udGFpbmVyLFxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5kZXNjcmlwdGlvbi1jb250YWluZXIsXG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmRhdGUtY29udGFpbmVyIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5hdXRob3ItY29udGFpbmVyIGxhYmVsLFxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC50aXRsZS1jb250YWluZXIgbGFiZWwsXG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmRlc2NyaXB0aW9uLWNvbnRhaW5lciBsYWJlbCxcbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuZGF0ZS1jb250YWluZXIgbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDVweDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgY29sb3I6ICMxYTFhMWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmF1dGhvci1jb250YWluZXIgaW5wdXQsXG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmF1dGhvci1jb250YWluZXIgdGV4dGFyZWEsXG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLnRpdGxlLWNvbnRhaW5lciBpbnB1dCxcbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAudGl0bGUtY29udGFpbmVyIHRleHRhcmVhLFxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5kZXNjcmlwdGlvbi1jb250YWluZXIgaW5wdXQsXG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmRlc2NyaXB0aW9uLWNvbnRhaW5lciB0ZXh0YXJlYSxcbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuZGF0ZS1jb250YWluZXIgaW5wdXQsXG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmRhdGUtY29udGFpbmVyIHRleHRhcmVhIHtcbiAgcGFkZGluZzogMTVweCAxMHB4O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTNlYjtcbiAgY29sb3I6ICM4NTg1OGQ7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmF1dGhvci1jb250YWluZXIgLnZhbGlkYXRpb24tY29udGFpbmVyLFxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC50aXRsZS1jb250YWluZXIgLnZhbGlkYXRpb24tY29udGFpbmVyLFxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5kZXNjcmlwdGlvbi1jb250YWluZXIgLnZhbGlkYXRpb24tY29udGFpbmVyLFxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5kYXRlLWNvbnRhaW5lciAudmFsaWRhdGlvbi1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuYXV0aG9yLWNvbnRhaW5lciAudmFsaWRhdGlvbi1iZWZvcmUsXG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLnRpdGxlLWNvbnRhaW5lciAudmFsaWRhdGlvbi1iZWZvcmUsXG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmRlc2NyaXB0aW9uLWNvbnRhaW5lciAudmFsaWRhdGlvbi1iZWZvcmUsXG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmRhdGUtY29udGFpbmVyIC52YWxpZGF0aW9uLWJlZm9yZSB7XG4gIHdpZHRoOiAwLjVlbTtcbiAgaGVpZ2h0OiAwLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzg1ODU4ZDtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuYXV0aG9yLWNvbnRhaW5lciBsaSxcbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAudGl0bGUtY29udGFpbmVyIGxpLFxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5kZXNjcmlwdGlvbi1jb250YWluZXIgbGksXG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmRhdGUtY29udGFpbmVyIGxpIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBjb2xvcjogIzg1ODU4ZDtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuYWRkLWJsb2ctYnRuIHtcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJGaXJhR09cIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbG9naW5Nb2RhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Jsb2dBZGRlci5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUNFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDQUo7QURFSTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQU47QURDTTtFQUNFLGVBQUE7QUNDUjs7QUNsQkU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FEcUJKO0FDbkJJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2REFBQTtFQUNBLDRCQUFBO0FEcUJOO0FDbkJNO0VBQ0Usb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QURxQlI7QUNoQkU7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxvREFBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtBRGtCSjtBQ2hCSTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBRGtCTjtBQ2pCTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QURtQlI7QUNoQk07RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FEa0JSO0FDakJRO0VBQ0UsaUJBQUE7QURtQlY7O0FFbEVBO0VBQ0UscUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0Es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O0FBeVJGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNoZWFkZXItZGl2IHtcXG4gIC5oZWFkZXItY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjRweCAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICBmb250LWZhbWlseTogXFxcIkZpcmFHT1xcXCI7XFxuICAgICAgZm9udC1zaXplOiAwLjllbTtcXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgICBjb2xvcjogI2Y4ZmFmYztcXG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVkMzdmMztcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcbn1cXG5cIixcIkB1c2UgXFxcIi9zcmMvc3R5bGVzL2hlYWRlci5zY3NzXFxcIjtcXG5AdXNlIFxcXCIvc3JjL3N0eWxlcy9tYWluLnNjc3NcXFwiO1xcbkB1c2UgXFxcIi9zcmMvc3R5bGVzL2xvZ2luTW9kYWwuc2Nzc1xcXCI7XFxuQHVzZSBcXFwiL3NyYy9zdHlsZXMvYmxvZ0FkZGVyLnNjc3NcXFwiO1xcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGaXJhR09cXFwiO1xcbiAgc3JjOiB1cmwoXFxcIi9zcmMvYXNzZXRzL2ZvbnRzL0ZpcmFHTy9GaXJhR08tUmVndWxhci5vdGZcXFwiKTtcXG59XFxuXFxuJGJvZHktY29sb3I6ICNmMWY1Zjk7XFxuXFxuKiB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJvZHktY29sb3I7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXCIsXCIjbWFpbi1kaXYge1xcbiAgLm1haW4tY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogNzBweDtcXG5cXG4gICAgLm1haW4taW5mbyB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmMWY1ZjksICNlMmU4ZjApO1xcbiAgICAgIHBhZGRpbmc6IDcwcHggOTBweCAwcHggMTIwcHg7XFxuXFxuICAgICAgaDEge1xcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgICAgICBmb250LXNpemU6IDQuOGVtO1xcbiAgICAgICAgY29sb3I6ICMxYTFhMWY7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAuY2F0ZWdvcmllcy1jb250YWluZXIge1xcbiAgICBwYWRkaW5nOiAzMHB4IDMwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGdyaWQtZ2FwOiAxMHB4O1xcblxcbiAgICAuY2F0ZWdvcnkge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBwYWRkaW5nOiA0cHggOHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBzY2FsZTogMS4wNTtcXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XFxuICAgICAgfVxcblxcbiAgICAgIHAge1xcbiAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJGaXJhR09cXFwiO1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiLFwiI21vZGFsLWNvbnRhaW5lciB7XFxuICBmb250LWZhbWlseTogXFxcIkZpcmFHT1xcXCI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAubW9kYWwtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgIHBhZGRpbmc6IDIwcHggMzBweCAzNXB4IDMwcHg7XFxuICAgIHdpZHRoOiA0ODBweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcblxcbiAgICAueC1pbWcge1xcbiAgICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgb3BhY2l0eTogMC42O1xcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgc2NhbGU6IDEuMTtcXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5pbnB1dC1jb250YWluZXIge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgICBoMSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XFxuICAgICAgfVxcblxcbiAgICAgIGxhYmVsIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XFxuICAgICAgfVxcblxcbiAgICAgIGlucHV0IHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmZjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG4gICAgICAgICY6Zm9jdXMge1xcbiAgICAgICAgICBib3JkZXItY29sb3I6ICM1ZDM3ZjM7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5lcnJvci1jb250YWluZXIge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBnYXA6IDE1cHg7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG5cXG4gICAgICBwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuICAgICAgICBjb2xvcjogI2ZmMDAwMDtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnN1Y2Nlc3MtY29udGFpbmVyIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBnYXA6IDE1cHg7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG5cXG4gICAgICBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICAgICAgY29sb3I6ICMxYTFhMWY7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgICAgZm9udC1zaXplOiAwLjllbTtcXG4gICAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQzN2YzO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiLFwiI2Jsb2ctYWRkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGaXJhR09cXFwiO1xcbiAgcGFkZGluZzogNTBweCA3MHB4IDI1MHB4IDcwcHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U0ZTNlYjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIC5iYWNrLWFycm93IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5ibG9nLWFkZGVyLWNvbnRlbnQge1xcbiAgICAvLyBwYWRkaW5nOiAwcHggNTc1cHg7XFxuICAgIHBhZGRpbmc6IDAgNTBweDtcXG5cXG4gICAgaDEge1xcbiAgICAgIGZvbnQtc2l6ZTogMi4zZW07XFxuICAgICAgY29sb3I6ICMxYTFhMWY7XFxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbiAgICB9XFxuXFxuICAgIC5ibG9nLWZvcm0ge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBnYXA6IDUwcHg7XFxuXFxuICAgICAgLmltZy11cGxvYWRlci1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDEycHg7XFxuXFxuICAgICAgICAuaW1hZ2UtdXBsb2FkZXIge1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlN2ViO1xcbiAgICAgICAgICBib3JkZXI6IDEuNXB4IGRhc2hlZCAjODU4NThkO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBwYWRkaW5nOiA4MHB4IDEwMHB4O1xcbiAgICAgICAgICBnYXA6IDMwcHg7XFxuXFxuICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIC5pbWFnZS10ZXh0cyB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBnYXA6IDVweDtcXG5cXG4gICAgICAgICAgICBsYWJlbCB7XFxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIC5hdXRob3ItdGl0bGUtY29udGFpbmVyLFxcbiAgICAgIC5kYXRlLWNhdGVnb3J5LWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgZ2FwOiAzMHB4O1xcbiAgICAgIH1cXG5cXG4gICAgICAuYXV0aG9yLWNvbnRhaW5lcixcXG4gICAgICAudGl0bGUtY29udGFpbmVyLFxcbiAgICAgIC5kZXNjcmlwdGlvbi1jb250YWluZXIsXFxuICAgICAgLmRhdGUtY29udGFpbmVyIHtcXG4gICAgICAgIGZsZXg6IDE7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMTBweDtcXG5cXG4gICAgICAgIGxhYmVsIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgZ2FwOiA1cHg7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuICAgICAgICAgIGNvbG9yOiAjMWExYTFmO1xcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaW5wdXQsXFxuICAgICAgICB0ZXh0YXJlYSB7XFxuICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcXG4gICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGUzZWI7XFxuICAgICAgICAgIGNvbG9yOiAjODU4NThkO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnZhbGlkYXRpb24tY29udGFpbmVyIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgZ2FwOiA4cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudmFsaWRhdGlvbi1iZWZvcmUge1xcbiAgICAgICAgICB3aWR0aDogMC41ZW07XFxuICAgICAgICAgIGhlaWdodDogMC41ZW07XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTg1OGQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBsaSB7XFxuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgICAgICAgY29sb3I6ICM4NTg1OGQ7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIC5hZGQtYmxvZy1idG4ge1xcbiAgICAgICAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsImltcG9ydCByZWRiZXJyeUxvZ29JbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9yZWRiZXJyeS1sb2dvLnBuZ1wiO1xuaW1wb3J0IGNyZWF0ZUxvZ2luTW9kYWwgZnJvbSBcIi4vbG9naW5Nb2RhbC9jcmVhdGVMb2dpbk1vZGFsXCI7XG5pbXBvcnQgZGlzcGxheUJsb2dBZGRlciBmcm9tIFwiLi4vYmxvZ0FkZGVyL2Rpc3BsYXlCbG9nQWRkZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKHN0YXR1cykge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXItZGl2XCIpO1xuXG4gIGNvbnN0IGhlYWRlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXJDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItY29udGVudFwiKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckNvbnRlbnQpO1xuXG4gIGNvbnN0IHJlZGJlcnJ5TG9nbyA9IG5ldyBJbWFnZSgpO1xuICByZWRiZXJyeUxvZ28uc3JjID0gcmVkYmVycnlMb2dvSW1nO1xuICBoZWFkZXJDb250ZW50LmFwcGVuZENoaWxkKHJlZGJlcnJ5TG9nbyk7XG5cbiAgY29uc3QgZW50cnlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBlbnRyeUJ0bi50ZXh0Q29udGVudCA9IFwi4YOo4YOU4YOh4YOV4YOa4YOQXCI7XG4gIGVudHJ5QnRuLmNsYXNzTGlzdC5hZGQoXCJlbnRyeS1idXR0b25cIik7XG4gIGhlYWRlckNvbnRlbnQuYXBwZW5kQ2hpbGQoZW50cnlCdG4pO1xuXG4gIGNvbnN0IGJsb2dBZGRlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJsb2dBZGRlckJ0bi50ZXh0Q29udGVudCA9IFwi4YOT4YOQ4YOQ4YOb4YOQ4YOi4YOUIOGDkeGDmuGDneGDkuGDmFwiO1xuICBibG9nQWRkZXJCdG4uY2xhc3NMaXN0LmFkZChcImJsb2ctYWRkZXItYnV0dG9uXCIpO1xuICBoZWFkZXJDb250ZW50LmFwcGVuZENoaWxkKGJsb2dBZGRlckJ0bik7XG5cbiAgaWYgKHN0YXR1cykgZW50cnlCdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgaWYgKCFzdGF0dXMpIGJsb2dBZGRlckJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXG4gIGVudHJ5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVMb2dpbk1vZGFsKTtcblxuICBibG9nQWRkZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlCbG9nQWRkZXIpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG4iLCJpbXBvcnQgeFN2ZyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3gtaWNvbi5zdmdcIjtcbmltcG9ydCByZWRDaXJjbGVJbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9pbmZvLWNpcmNsZS5wbmdcIjtcbmltcG9ydCBncmVlblN1Y2Nlc3NJbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9zdWNjZXNzLWNpcmNsZS5wbmdcIjtcbmltcG9ydCBsb2dpblVzZXIgZnJvbSBcIi4uLy4uLy4uL2xvZ2ljL2xvZ2luVXNlci9sb2dpblVzZXJcIjtcbmltcG9ydCB1cGRhdGVMb2dpbk1vZGFsVUkgZnJvbSBcIi4vdXBkYXRlTG9naW5Nb2RhbFVJXCI7XG5cbmxldCByZW1vdmVMb2dpbk1vZGFsO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVMb2dpbk1vZGFsKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXG4gIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWxDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtb2RhbC1jb250YWluZXJcIik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQobW9kYWxDb250YWluZXIpO1xuXG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGVudFwiKTtcbiAgbW9kYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcblxuICBjb25zdCB4SW1nID0gbmV3IEltYWdlKCk7XG4gIHhJbWcuY2xhc3NMaXN0LmFkZChcIngtaW1nXCIpO1xuICB4SW1nLnNyYyA9IHhTdmc7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh4SW1nKTtcblxuICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1jb250YWluZXJcIik7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChpbnB1dENvbnRhaW5lcik7XG5cbiAgY29uc3QgbW9kYWxIZWFkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBtb2RhbEhlYWRlclRleHQudGV4dENvbnRlbnQgPSBcIuGDqOGDlOGDoeGDleGDmuGDkFwiO1xuICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbEhlYWRlclRleHQpO1xuXG4gIGNvbnN0IG1vZGFsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIG1vZGFsTGFiZWwudGV4dENvbnRlbnQgPSBcIuGDlOGDmi3hg6Thg53hg6Hhg6Lhg5BcIjtcbiAgbW9kYWxMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJlbWFpbFwiKTtcbiAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWxMYWJlbCk7XG5cbiAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZW1haWxcIik7XG4gIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlbWFpbFwiKTtcbiAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkV4YW1wbGVAcmVkYmVycnkuZ2VcIik7XG4gIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGVtYWlsSW5wdXQpO1xuICBlbWFpbElucHV0LmZvY3VzKCk7XG5cbiAgY29uc3Qgc3VjY2Vzc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN1Y2Nlc3NDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInN1Y2Nlc3MtY29udGFpbmVyXCIsIFwiaGlkZGVuXCIpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoc3VjY2Vzc0NvbnRhaW5lcik7XG5cbiAgY29uc3Qgc3VjY2Vzc0ltZyA9IG5ldyBJbWFnZSgpO1xuICBzdWNjZXNzSW1nLnNyYyA9IGdyZWVuU3VjY2Vzc0ltZztcbiAgc3VjY2Vzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdWNjZXNzSW1nKTtcblxuICBjb25zdCBzdWNjZXNzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgc3VjY2Vzc1RleHQudGV4dENvbnRlbnQgPSBcIuGDrOGDkOGDoOGDm+GDkOGDouGDlOGDkeGDo+GDmuGDmCDhg5Dhg5Xhg6Lhg53hg6Dhg5jhg5bhg5Dhg6rhg5jhg5BcIjtcbiAgc3VjY2Vzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdWNjZXNzVGV4dCk7XG5cbiAgY29uc3QgZXJyb3JDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlcnJvckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZXJyb3ItY29udGFpbmVyXCIsIFwiaGlkZGVuXCIpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZXJyb3JDb250YWluZXIpO1xuXG4gIGNvbnN0IHJlZENpcmNsZSA9IG5ldyBJbWFnZSgpO1xuICByZWRDaXJjbGUuc3JjID0gcmVkQ2lyY2xlSW1nO1xuICBlcnJvckNvbnRhaW5lci5hcHBlbmRDaGlsZChyZWRDaXJjbGUpO1xuXG4gIGNvbnN0IGVycm9yTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGVycm9yTXNnLnRleHRDb250ZW50ID0gXCLhg5Thg5ot4YOk4YOd4YOh4YOi4YOQIOGDkOGDoCDhg5vhg53hg5jhg6vhg5Thg5Hhg5zhg5BcIjtcbiAgZXJyb3JDb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3JNc2cpO1xuXG4gIGNvbnN0IGVudHJ5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZW50cnlCdG4udGV4dENvbnRlbnQgPSBcIuGDqOGDlOGDoeGDleGDmuGDkFwiO1xuICBlbnRyeUJ0bi5jbGFzc0xpc3QuYWRkKFwiZW50cnktYnRuXCIpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZW50cnlCdG4pO1xuXG4gIGNvbnN0IHN1Y2Nlc3NCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWNjZXNzQnRuLmNsYXNzTGlzdC5hZGQoXCJzdWNjZXNzLWJ0blwiLCBcImhpZGRlblwiKTtcbiAgc3VjY2Vzc0J0bi50ZXh0Q29udGVudCA9IFwi4YOZ4YOQ4YOg4YOS4YOYXCI7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChzdWNjZXNzQnRuKTtcblxuICBtb2RhbENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuaWQgPT09IFwibW9kYWwtY29udGFpbmVyXCIpIHJlbW92ZUxvZ2luTW9kYWwoZSk7XG4gIH0pO1xuXG4gIHhJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgcmVtb3ZlTG9naW5Nb2RhbChlKTtcbiAgfSk7XG5cbiAgZW50cnlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVwZGF0ZUxvZ2luTW9kYWwpO1xuXG4gIGVtYWlsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgdXBkYXRlTG9naW5Nb2RhbCgpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gdXBkYXRlTG9naW5Nb2RhbCgpIHtcbiAgICBpZiAobG9naW5Vc2VyKGVtYWlsSW5wdXQpKSB7XG4gICAgICBsb2dpblVzZXIoZW1haWxJbnB1dCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICB1cGRhdGVMb2dpbk1vZGFsVUkoZGF0YSwgbW9kYWxDb250YWluZXIpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvZ2luXCIsIEpTT04uc3RyaW5naWZ5KHRydWUpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUxvZ2luTW9kYWwgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcIngtaW1nXCIpICYmXG4gICAgICBlbnRyeUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIilcbiAgICApIHtcbiAgICAgIG5vcm1hbEJvZHkoKTtcbiAgICAgIGVudHJ5QnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVudHJ5LWJ1dHRvblwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibG9nLWFkZGVyLWJ1dHRvblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH1cblxuICAgIGlmICghZW50cnlCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpKSB7XG4gICAgICBub3JtYWxCb2R5KCk7XG4gICAgfVxuXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInN1Y2Nlc3MtYnRuXCIpKSB7XG4gICAgICBub3JtYWxCb2R5KCk7XG4gICAgfVxuICB9O1xuXG4gIGZ1bmN0aW9uIG5vcm1hbEJvZHkoKSB7XG4gICAgbW9kYWxDb250YWluZXIucmVtb3ZlKCk7XG4gICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwidmlzaWJsZVwiO1xuICB9XG59XG5cbmV4cG9ydCB7IHJlbW92ZUxvZ2luTW9kYWwgfTtcbiIsImltcG9ydCB2YWxpZGF0ZUVtYWlsIGZyb20gXCIuL3ZhbGlkYXRlRW1haWxcIjtcbmltcG9ydCBjaGVja0VtYWlsIGZyb20gXCIuL2NoZWNrRW1haWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9naW5Vc2VyKGlucHV0KSB7XG4gIGlmICh2YWxpZGF0ZUVtYWlsKGlucHV0KSkge1xuICAgIHJldHVybiBjaGVja0VtYWlsKGlucHV0LnZhbHVlKS50aGVuKChkYXRhKSA9PiBkYXRhKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChpbnB1dCkge1xuICBpZiAoIWlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgaW5wdXQuZm9jdXMoKTtcbiAgICBhbGVydChcIlBsZWFzZSBtYXRjaCB0aGUgZm9ybWF0IHJlcXVlc3RlZFwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKCFpbnB1dC52YWx1ZS5lbmRzV2l0aChcIkByZWRiZXJyeS5nZVwiKSkge1xuICAgIGFsZXJ0KFwiWW91ciBlbWFpbCBtdXN0IGVuZCB3aXRoIEByZWRiZXJyeS5nZVwiKTtcbiAgICBjb25zdCBhdFBvc2l0aW9uID0gaW5wdXQudmFsdWUuaW5kZXhPZihcIkBcIikgKyAxO1xuICAgIGlucHV0LnZhbHVlID0gaW5wdXQudmFsdWUuc3Vic3RyaW5nKDAsIGF0UG9zaXRpb24pO1xuICAgIGlucHV0LmZvY3VzKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChpbnB1dC52YWx1ZS5lbmRzV2l0aChcIkByZWRiZXJyeS5nZVwiKSkgcmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjaGVja0VtYWlsKGVtYWlsKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly9hcGkuYmxvZy5yZWRiZXJyeWludGVybnNoaXAuZ2UvYXBpL2xvZ2luXCIsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBhY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgZW1haWw6IGAke2VtYWlsfWAsXG4gICAgICAgIH0pLFxuICAgICAgfVxuICAgICk7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDIyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xuICB9XG59XG4iLCJpbXBvcnQgeyByZW1vdmVMb2dpbk1vZGFsIH0gZnJvbSBcIi4vY3JlYXRlTG9naW5Nb2RhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVMb2dpbk1vZGFsVUkoZGF0YSwgZGl2KSB7XG4gIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtY29udGFpbmVyXCIpO1xuICBjb25zdCBlbWFpbElucHV0ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgY29uc3Qgc3VjY2Vzc0NvbnRhaW5lciA9IGRpdi5xdWVyeVNlbGVjdG9yKFwiLnN1Y2Nlc3MtY29udGFpbmVyXCIpO1xuICBjb25zdCBlcnJvckNvbnRhaW5lciA9IGRpdi5xdWVyeVNlbGVjdG9yKFwiLmVycm9yLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgZW50cnlCdG4gPSBkaXYucXVlcnlTZWxlY3RvcihcIi5lbnRyeS1idG5cIik7XG4gIGNvbnN0IHN1Y2Nlc3NCdG4gPSBkaXYucXVlcnlTZWxlY3RvcihcIi5zdWNjZXNzLWJ0blwiKTtcblxuICBpZiAoZGF0YSkge1xuICAgIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgc3VjY2Vzc0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIGVudHJ5QnRuLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgc3VjY2Vzc0J0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIGVycm9yQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cbiAgICBzdWNjZXNzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgcmVtb3ZlTG9naW5Nb2RhbChlKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW50cnktYnV0dG9uXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsb2ctYWRkZXItYnV0dG9uXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoIWRhdGEpIHtcbiAgICBlcnJvckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIGVtYWlsSW5wdXQuc3R5bGUuYm9yZGVyQ29sb3IgPSBcIiNmZjAwMDBcIjtcbiAgICBlbWFpbElucHV0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiMTBweFwiO1xuXG4gICAgZW1haWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4ge1xuICAgICAgZW1haWxJbnB1dEV2ZW50cyhcIiM1ZDM3ZjNcIik7XG4gICAgfSk7XG4gICAgZW1haWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgZW1haWxJbnB1dEV2ZW50cyhcIiM1ZDM3ZjNcIik7XG4gICAgfSk7XG4gICAgZW1haWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICBlbWFpbElucHV0RXZlbnRzKFwiIzAwMDAwMFwiKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGVtYWlsSW5wdXRFdmVudHMoY29sb3IpIHtcbiAgICAgIGVtYWlsSW5wdXQuc3R5bGUuYm9yZGVyQ29sb3IgPSBjb2xvcjtcbiAgICAgIGVtYWlsSW5wdXQuc3R5bGUubWFyZ2luQm90dG9tID0gXCIyMHB4XCI7XG4gICAgICBpZiAoIWVycm9yQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSlcbiAgICAgICAgZXJyb3JDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlCbG9nQWRkZXIoKSB7XG4gIGNvbnN0IGJsb2dBZGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxvZy1hZGRlclwiKTtcbiAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1kaXZcIik7XG5cbiAgaWYgKGJsb2dBZGRlci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpIHtcbiAgICBibG9nQWRkZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH1cblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJsb2ctYWRkZXItc3RhdHVzXCIsIEpTT04uc3RyaW5naWZ5KHRydWUpKTtcbn1cbiIsImltcG9ydCBibG9nTG9nb0ltZyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL2Jsb2ctbG9nby5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFpbihzdGF0dXMpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluLWRpdlwiKTtcbiAgaWYgKHN0YXR1cykgbWFpbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkNvbnRlbnQuY2xhc3NMaXN0LmFkZChcIm1haW4tY29udGVudFwiKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7XG5cbiAgY29uc3QgbWFpbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluSW5mby5jbGFzc0xpc3QuYWRkKFwibWFpbi1pbmZvXCIpO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChtYWluSW5mbyk7XG5cbiAgY29uc3QgYmxvZ1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGJsb2dUZXh0LnRleHRDb250ZW50ID0gXCLhg5Hhg5rhg53hg5Lhg5hcIjtcbiAgbWFpbkluZm8uYXBwZW5kQ2hpbGQoYmxvZ1RleHQpO1xuXG4gIGNvbnN0IGJsb2dMb2dvID0gbmV3IEltYWdlKCk7XG4gIGJsb2dMb2dvLnNyYyA9IGJsb2dMb2dvSW1nO1xuICBtYWluSW5mby5hcHBlbmRDaGlsZChibG9nTG9nbyk7XG5cbiAgcmV0dXJuIG1haW47XG59XG4iLCJpbXBvcnQgYmFja0Fycm93SW1nIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvYmFjay1hcnJvdy5wbmdcIjtcbmltcG9ydCBkaXNwbGF5TWFpbkRpdiBmcm9tIFwiL3NyYy9jb21wb25lbnRzL2RvbS9tYWluL2Rpc3BsYXlNYWluRGl2LmpzXCI7XG5pbXBvcnQgY3JlYXRlSW1hZ2VVcGxvYWRlciBmcm9tIFwiLi9pbWFnZVVwbG9hZGVyL2NyZWF0ZUltYWdlVXBsb2FkZXJcIjtcbmltcG9ydCBjcmVhdGVBdXRob3IgZnJvbSBcIi4vYmxvZ0F1dGhvci9jcmVhdGVBdXRob3JcIjtcbmltcG9ydCBjcmVhdGVUaXRsZSBmcm9tIFwiLi9ibG9nVGl0bGUvY3JlYXRlVGl0bGVcIjtcbmltcG9ydCBjcmVhdGVEZXNjcmlwdGlvbiBmcm9tIFwiLi9ibG9nRGVzY3JpcHRpb24vY3JlYXRlRGVzY3JpcHRpb25cIjtcbmltcG9ydCB2YWxpZGF0ZUZvcm0gZnJvbSBcIi4uLy4uL2xvZ2ljL2Jsb2dBZGRlci92YWxpZGF0ZUZvcm1cIjtcbmltcG9ydCBjcmVhdGVEYXRlIGZyb20gXCIuL2Jsb2dEYXRlIC9jcmVhdGVEYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUJsb2dBZGRlcihzdGF0dXMsIGJsb2dJbmZvKSB7XG4gIGNvbnN0IGJsb2dBZGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJsb2dBZGRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJsb2ctYWRkZXJcIik7XG5cbiAgaWYgKCFzdGF0dXMpIGJsb2dBZGRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXG4gIGNvbnN0IGJhY2tBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICBiYWNrQXJyb3cuY2xhc3NMaXN0LmFkZChcImJhY2stYXJyb3dcIik7XG4gIGJhY2tBcnJvdy5zcmMgPSBiYWNrQXJyb3dJbWc7XG4gIGJsb2dBZGRlci5hcHBlbmRDaGlsZChiYWNrQXJyb3cpO1xuXG4gIGNvbnN0IGJsb2dBZGRlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBibG9nQWRkZXJDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJibG9nLWFkZGVyLWNvbnRlbnRcIik7XG4gIGJsb2dBZGRlci5hcHBlbmRDaGlsZChibG9nQWRkZXJDb250ZW50KTtcblxuICBjb25zdCBibG9nQWRkZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBibG9nQWRkZXJUZXh0LnRleHRDb250ZW50ID0gXCLhg5Hhg5rhg53hg5Lhg5jhg6Eg4YOT4YOQ4YOb4YOQ4YOi4YOU4YOR4YOQXCI7XG4gIGJsb2dBZGRlckNvbnRlbnQuYXBwZW5kQ2hpbGQoYmxvZ0FkZGVyVGV4dCk7XG5cbiAgY29uc3QgYmxvZ0FkZGVyRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBibG9nQWRkZXJGb3JtLmNsYXNzTGlzdC5hZGQoXCJibG9nLWZvcm1cIik7XG4gIGJsb2dBZGRlckZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJibG9nLWZvcm1cIik7XG4gIGJsb2dBZGRlckNvbnRlbnQuYXBwZW5kQ2hpbGQoYmxvZ0FkZGVyRm9ybSk7XG5cbiAgYmxvZ0FkZGVyRm9ybS5hcHBlbmRDaGlsZChjcmVhdGVJbWFnZVVwbG9hZGVyKGJsb2dJbmZvKSk7XG5cbiAgY29uc3QgYXV0aG9yVGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhdXRob3JUaXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYXV0aG9yLXRpdGxlLWNvbnRhaW5lclwiKTtcbiAgYmxvZ0FkZGVyRm9ybS5hcHBlbmRDaGlsZChhdXRob3JUaXRsZUNvbnRhaW5lcik7XG4gIGF1dGhvclRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUF1dGhvcihibG9nSW5mbykpO1xuICBhdXRob3JUaXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVUaXRsZShibG9nSW5mbykpO1xuXG4gIGJsb2dBZGRlckZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRGVzY3JpcHRpb24oYmxvZ0luZm8pKTtcblxuICBjb25zdCBkYXRlQ2F0ZWdvcnlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkYXRlQ2F0ZWdvcnlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRhdGUtY2F0ZWdvcnktY29udGFpbmVyXCIpO1xuICBibG9nQWRkZXJGb3JtLmFwcGVuZENoaWxkKGRhdGVDYXRlZ29yeUNvbnRhaW5lcik7XG4gIGRhdGVDYXRlZ29yeUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVEYXRlKGJsb2dJbmZvKSk7XG5cbiAgY29uc3QgYWRkQmxvZ0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZEJsb2dCdG4udGV4dENvbnRlbnQgPSBcIuGDkuGDkOGDm+GDneGDpeGDleGDlOGDp+GDnOGDlOGDkeGDkFwiO1xuICBhZGRCbG9nQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtYmxvZy1idG5cIik7XG4gIGJsb2dBZGRlckZvcm0uYXBwZW5kQ2hpbGQoYWRkQmxvZ0J0bik7XG5cbiAgLy8gYmxvZ0FkZGVyRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAvLyAgIGNvbnNvbGUubG9nKFwic3NcIik7XG4gIC8vIH0pO1xuXG4gIGJhY2tBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheU1haW5EaXYpO1xuXG4gIGFkZEJsb2dCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgYmxvZ0luZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvZy1pbmZvXCIpKTtcblxuICAgIHZhbGlkYXRlRm9ybShibG9nSW5mbyk7XG4gIH0pO1xuICByZXR1cm4gYmxvZ0FkZGVyO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzcGxheU1haW5EaXYoKSB7XG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tZGl2XCIpO1xuICBjb25zdCBibG9nQWRkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jsb2ctYWRkZXJcIik7XG4gIGJsb2dBZGRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBtYWluRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJibG9nLWFkZGVyLXN0YXR1c1wiLCBKU09OLnN0cmluZ2lmeShmYWxzZSkpO1xufVxuIiwiaW1wb3J0IGZvbGRlckFkZGVySW1nIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvZm9sZGVyLWFkZC5wbmdcIjtcbmltcG9ydCByZW1vdmVJbWdQbmcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9yZW1vdmUucG5nXCI7XG5pbXBvcnQgdXBkYXRlSW1hZ2VVcGxvYWRlciBmcm9tIFwiLi91cGRhdGVJbWFnZVVwbG9hZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUltYWdlVXBsb2FkZXIoYmxvZ0luZm8pIHtcbiAgY29uc3QgaW1hZ2VVcGxvYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGltYWdlVXBsb2FkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImltZy11cGxvYWRlci1jb250YWluZXJcIik7XG5cbiAgY29uc3QgdXBsb2FkSW1hZ2VUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHVwbG9hZEltYWdlVGV4dC50ZXh0Q29udGVudCA9IFwi4YOQ4YOi4YOV4YOY4YOg4YOX4YOU4YOXIOGDpOGDneGDouGDnVwiO1xuICBpbWFnZVVwbG9hZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHVwbG9hZEltYWdlVGV4dCk7XG5cbiAgY29uc3QgaW1hZ2VVcGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGltYWdlVXBsb2FkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbWFnZS11cGxvYWRlclwiKTtcbiAgaW1hZ2VVcGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaW1hZ2UtdXBsb2FkZXJcIik7XG4gIGltYWdlVXBsb2FkZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VVcGxvYWRlcik7XG5cbiAgY29uc3QgaW1hZ2VJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW1hZ2VJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZmlsZVwiKTtcbiAgaW1hZ2VJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImltYWdlLWlucHV0XCIpO1xuICBpbWFnZUlucHV0LnNldEF0dHJpYnV0ZShcImFjY2VwdFwiLCBcImltYWdlLypcIik7XG4gIGltYWdlSW5wdXQuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwiXCIpO1xuICBpbWFnZVVwbG9hZGVyLmFwcGVuZENoaWxkKGltYWdlSW5wdXQpO1xuXG4gIGNvbnN0IGZvbGRlckFkZGVyID0gbmV3IEltYWdlKCk7XG4gIGZvbGRlckFkZGVyLmNsYXNzTGlzdC5hZGQoXCJmb2xkZXItYWRkZXItaW1nXCIpO1xuICBmb2xkZXJBZGRlci5zcmMgPSBmb2xkZXJBZGRlckltZztcbiAgaW1hZ2VVcGxvYWRlci5hcHBlbmRDaGlsZChmb2xkZXJBZGRlcik7XG5cbiAgY29uc3QgaW1hZ2VUZXh0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGltYWdlVGV4dHMuY2xhc3NMaXN0LmFkZChcImltYWdlLXRleHRzXCIpO1xuICBpbWFnZVVwbG9hZGVyLmFwcGVuZENoaWxkKGltYWdlVGV4dHMpO1xuXG4gIGNvbnN0IGltYWdlVGV4dFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgaW1hZ2VUZXh0U3Bhbi5jbGFzc0xpc3QuYWRkKFwiaW1hZ2UtdGV4dC1zcGFuXCIpO1xuICBpbWFnZVRleHRTcGFuLnRleHRDb250ZW50ID0gXCLhg6nhg5Dhg5Dhg5Lhg5Phg5Thg5cg4YOk4YOQ4YOY4YOa4YOYIOGDkOGDpSDhg5Dhg5xcIjtcbiAgaW1hZ2VUZXh0cy5hcHBlbmRDaGlsZChpbWFnZVRleHRTcGFuKTtcblxuICBjb25zdCBpbWFnZUlucHV0TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGltYWdlSW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJpbWFnZS1pbnB1dFwiKTtcbiAgaW1hZ2VJbnB1dExhYmVsLmNsYXNzTGlzdC5hZGQoXCJpbWFnZS1pbnB1dC1sYWJlbFwiKTtcbiAgaW1hZ2VJbnB1dExhYmVsLnRleHRDb250ZW50ID0gXCLhg5Dhg5jhg6Dhg6nhg5jhg5Thg5cg4YOk4YOQ4YOY4YOa4YOYXCI7XG4gIGltYWdlVGV4dHMuYXBwZW5kQ2hpbGQoaW1hZ2VJbnB1dExhYmVsKTtcblxuICBjb25zdCByZW1vdmVJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgcmVtb3ZlSW1nLnNyYyA9IHJlbW92ZUltZ1BuZztcbiAgcmVtb3ZlSW1nLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmUtaW1nXCIsIFwiaGlkZGVuXCIpO1xuICBpbWFnZVRleHRzLmFwcGVuZENoaWxkKHJlbW92ZUltZyk7XG5cbiAgaWYgKGJsb2dJbmZvICYmIGJsb2dJbmZvLmltYWdlVVJMKSB7XG4gICAgdXBkYXRlSW1hZ2VVcGxvYWRlcihcbiAgICAgIGltYWdlSW5wdXQsXG4gICAgICBibG9nSW5mbyxcbiAgICAgIGltYWdlVXBsb2FkZXIsXG4gICAgICBpbWFnZVRleHRzLFxuICAgICAgaW1hZ2VJbnB1dExhYmVsLFxuICAgICAgaW1hZ2VUZXh0U3BhbixcbiAgICAgIGZvbGRlckFkZGVyLFxuICAgICAgcmVtb3ZlSW1nLFxuICAgICAgaW1hZ2VJbnB1dCxcbiAgICAgIHRydWVcbiAgICApO1xuICB9XG5cbiAgaW1hZ2VJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgdXBkYXRlSW1hZ2VVcGxvYWRlcihcbiAgICAgIGUudGFyZ2V0LFxuICAgICAgYmxvZ0luZm8sXG4gICAgICBpbWFnZVVwbG9hZGVyLFxuICAgICAgaW1hZ2VUZXh0cyxcbiAgICAgIGltYWdlSW5wdXRMYWJlbCxcbiAgICAgIGltYWdlVGV4dFNwYW4sXG4gICAgICBmb2xkZXJBZGRlcixcbiAgICAgIHJlbW92ZUltZyxcbiAgICAgIGltYWdlSW5wdXQsXG4gICAgICBmYWxzZVxuICAgICk7XG4gIH0pO1xuXG4gIHJlbW92ZUltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICB1cGRhdGVJbWFnZVVwbG9hZGVyKFxuICAgICAgZS50YXJnZXQsXG4gICAgICBibG9nSW5mbyxcbiAgICAgIGltYWdlVXBsb2FkZXIsXG4gICAgICBpbWFnZVRleHRzLFxuICAgICAgaW1hZ2VJbnB1dExhYmVsLFxuICAgICAgaW1hZ2VUZXh0U3BhbixcbiAgICAgIGZvbGRlckFkZGVyLFxuICAgICAgcmVtb3ZlSW1nLFxuICAgICAgaW1hZ2VJbnB1dCxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGltYWdlVXBsb2FkZXJDb250YWluZXI7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVJbWFnZVVwbG9hZGVyKFxuICBlLFxuICBibG9nSW5mbyxcbiAgaW1hZ2VVcGxvYWRlcixcbiAgaW1hZ2VUZXh0cyxcbiAgaW1hZ2VJbnB1dExhYmVsLFxuICBpbWFnZVRleHRTcGFuLFxuICBmb2xkZXJBZGRlcixcbiAgcmVtb3ZlSW1nLFxuICBpbWFnZUlucHV0LFxuICByZWZyZXNoUGFnZVxuKSB7XG4gIGlmIChyZWZyZXNoUGFnZSAmJiBlLmlkID09PSBcImltYWdlLWlucHV0XCIpIHtcbiAgICBpbWFnZSgpO1xuICAgIGltYWdlSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IGJsb2dJbmZvLmltYWdlTmFtZTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIXJlZnJlc2hQYWdlICYmIGUuaWQgPT09IFwiaW1hZ2UtaW5wdXRcIikge1xuICAgIGlmICghaW1hZ2VJbnB1dC5maWxlc1swXSkgcmV0dXJuO1xuICAgIGltYWdlKCk7XG4gICAgaW1hZ2VJbnB1dExhYmVsLnRleHRDb250ZW50ID0gaW1hZ2VJbnB1dC5maWxlc1swXS5uYW1lO1xuXG4gICAgY29uc3QgYmxvZ0luZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvZy1pbmZvXCIpKTtcbiAgICBibG9nSW5mby5pbWFnZVVSTCA9IGltYWdlSW5wdXQudmFsdWU7XG4gICAgYmxvZ0luZm8uaW1hZ2VOYW1lID0gaW1hZ2VJbnB1dC5maWxlc1swXS5uYW1lO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmxvZy1pbmZvXCIsIEpTT04uc3RyaW5naWZ5KGJsb2dJbmZvKSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVtb3ZlLWltZ1wiKSkge1xuICAgIG5vSW1hZ2UoKTtcblxuICAgIGNvbnN0IGJsb2dJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsb2ctaW5mb1wiKSk7XG4gICAgYmxvZ0luZm8uaW1hZ2VVUkwgPSBudWxsO1xuICAgIGJsb2dJbmZvLmltYWdlTmFtZSA9IG51bGw7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJibG9nLWluZm9cIiwgSlNPTi5zdHJpbmdpZnkoYmxvZ0luZm8pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGltYWdlKCkge1xuICAgIGltYWdlVXBsb2FkZXIuc3R5bGUucGFkZGluZyA9IFwiMjBweFwiO1xuICAgIGltYWdlVGV4dHMuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcInNwYWNlLWJldHdlZW5cIjtcbiAgICBpbWFnZUlucHV0TGFiZWwuc3R5bGUudGV4dERlY29yYXRpb24gPSBcIm5vbmVcIjtcbiAgICBpbWFnZUlucHV0TGFiZWwuc3R5bGUuZm9udFdlaWdodCA9IFwiNTAwXCI7XG4gICAgaW1hZ2VUZXh0U3Bhbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGZvbGRlckFkZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgcmVtb3ZlSW1nLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH1cblxuICBmdW5jdGlvbiBub0ltYWdlKCkge1xuICAgIGltYWdlVXBsb2FkZXIuc3R5bGUucGFkZGluZyA9IFwiODBweCAxMDBweFwiO1xuICAgIGltYWdlVGV4dHMuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xuICAgIGltYWdlSW5wdXRMYWJlbC50ZXh0Q29udGVudCA9IFwi4YOQ4YOY4YOg4YOp4YOY4YOU4YOXIOGDpOGDkOGDmOGDmuGDmFwiO1xuICAgIGltYWdlSW5wdXRMYWJlbC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwidW5kZXJsaW5lXCI7XG4gICAgaW1hZ2VJbnB1dExhYmVsLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjcwMFwiO1xuICAgIGltYWdlVGV4dFNwYW4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBmb2xkZXJBZGRlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIHJlbW92ZUltZy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGltYWdlSW5wdXQudmFsdWUgPSBcIlwiO1xuICB9XG59XG4iLCJpbXBvcnQgdmFsaWRhdGVBdXRob3IgZnJvbSBcIi4uLy4uLy4uL2xvZ2ljL2Jsb2dBZGRlci92YWxpZGF0aW9ucy9hdXRob3IvdmFsaWRhdGVBdXRob3JcIjtcbmltcG9ydCB1cGRhdGVGb3VyTGV0dGVycyBmcm9tIFwiLi91cGRhdGVGb3VyTGV0dGVyc1wiO1xuaW1wb3J0IHVwZGF0ZVR3b1dvcmRzVmFsIGZyb20gXCIuL3VwZGF0ZVR3b1dvcmRzVmFsXCI7XG5pbXBvcnQgdXBkYXRlR2VvcmdpYW5WYWwgZnJvbSBcIi4vdXBkYXRlR2VvcmdpYW5WYWxcIjtcblxuY29uc3QgdmFsaWRhdGlvbnMgPSBbXG4gIFwi4YOb4YOY4YOc4YOY4YOb4YOj4YObIDQg4YOh4YOY4YOb4YOR4YOd4YOa4YOdXCIsXG4gIFwi4YOb4YOY4YOc4YOY4YOb4YOj4YObIDIg4YOh4YOY4YOi4YOn4YOV4YOQXCIsXG4gIFwi4YOb4YOu4YOd4YOa4YOd4YOTIOGDpeGDkOGDoOGDl+GDo+GDmuGDmCDhg6Hhg5jhg5vhg5Hhg53hg5rhg53hg5Thg5Hhg5hcIixcbl07XG5jb25zdCB2YWxpZGF0aW9uQXJyID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUF1dGhvcihibG9nSW5mbykge1xuICBjb25zdCBhdXRob3JDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhdXRob3JDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImF1dGhvci1jb250YWluZXJcIik7XG5cbiAgY29uc3QgYXV0aG9yTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGF1dGhvckxhYmVsLnRleHRDb250ZW50ID0gXCLhg5Dhg5Xhg6Lhg53hg6Dhg5hcIjtcbiAgYXV0aG9yTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiYXV0aG9yLWlucHV0XCIpO1xuICBhdXRob3JDb250YWluZXIuYXBwZW5kQ2hpbGQoYXV0aG9yTGFiZWwpO1xuXG4gIGNvbnN0IGF1dGhvckxhYmVsU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBhdXRob3JMYWJlbFNwYW4udGV4dENvbnRlbnQgPSBcIipcIjtcbiAgYXV0aG9yTGFiZWwuYXBwZW5kQ2hpbGQoYXV0aG9yTGFiZWxTcGFuKTtcblxuICBjb25zdCBhdXRob3JJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgYXV0aG9ySW5wdXQuY2xhc3NMaXN0LmFkZChcImF1dGhvci1pbnB1dFwiKTtcbiAgYXV0aG9ySW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhdXRob3ItaW5wdXRcIik7XG4gIGF1dGhvcklucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwi4YOo4YOU4YOY4YOn4YOV4YOQ4YOc4YOU4YOXIOGDkOGDleGDouGDneGDoOGDmFwiKTtcbiAgYXV0aG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKGF1dGhvcklucHV0KTtcblxuICBjb25zdCB2YWxpZGF0aW9uVGV4dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHZhbGlkYXRpb25UZXh0cy5jbGFzc0xpc3QuYWRkKFwidmFsaWRhdGlvbi10ZXh0c1wiKTtcbiAgYXV0aG9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHZhbGlkYXRpb25UZXh0cyk7XG5cbiAgdmFsaWRhdGlvbnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBjb25zdCB2YWxpZGF0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB2YWxpZGF0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZGF0aW9uLWNvbnRhaW5lclwiKTtcbiAgICB2YWxpZGF0aW9uVGV4dHMuYXBwZW5kQ2hpbGQodmFsaWRhdGlvbkNvbnRhaW5lcik7XG4gICAgdmFsaWRhdGlvbkFyci5wdXNoKHZhbGlkYXRpb25Db250YWluZXIpO1xuXG4gICAgY29uc3QgdmFsaWRhdGlvbkJlZm9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHZhbGlkYXRpb25CZWZvcmUuY2xhc3NMaXN0LmFkZChcInZhbGlkYXRpb24tYmVmb3JlXCIpO1xuICAgIHZhbGlkYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQodmFsaWRhdGlvbkJlZm9yZSk7XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICB2YWxpZGF0aW9uVGV4dC50ZXh0Q29udGVudCA9IGVsO1xuICAgIHZhbGlkYXRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQodmFsaWRhdGlvblRleHQpO1xuICB9KTtcblxuICBpZiAoYmxvZ0luZm8gJiYgYmxvZ0luZm8uYXV0aG9yKSB7XG4gICAgYXV0aG9ySW5wdXQudmFsdWUgPSBibG9nSW5mby5hdXRob3I7XG4gICAgdmFsaWRhdGVBdXRob3IoYXV0aG9ySW5wdXQsIHZhbGlkYXRpb25BcnIpO1xuICB9XG5cbiAgYXV0aG9ySW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcblxuICBhdXRob3JJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnZhbHVlLmNoYXJBdCgwKSA9PT0gXCIgXCIpIHtcbiAgICAgIGFsZXJ0KFwiSW5wdXQgc2hvdWxkIG5vdCBzdGFydCB3aXRoIGEgc3BhY2VcIik7XG4gICAgICB0aGlzLnZhbHVlID0gXCJcIjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFsaWRhdGVBdXRob3IodGhpcywgdmFsaWRhdGlvbkFycik7XG4gIH0pO1xuXG4gIGF1dGhvcklucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2U0ZTNlYlwiO1xuICAgICAgdXBkYXRlRm91ckxldHRlcnMoXCJpbml0XCIsIHZhbGlkYXRpb25BcnJbMF0pO1xuICAgICAgdXBkYXRlR2VvcmdpYW5WYWwoXCJpbml0XCIsIHZhbGlkYXRpb25BcnJbMV0pO1xuICAgICAgdXBkYXRlVHdvV29yZHNWYWwoXCJpbml0XCIsIHZhbGlkYXRpb25BcnJbMl0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGF1dGhvckNvbnRhaW5lcjtcbn1cbiIsImltcG9ydCB2YWxpZGF0ZUZvdXJMZXR0ZXJzIGZyb20gXCIuL3ZhbGlkYXRlRm91ckxldHRlcnNcIjtcbmltcG9ydCB2YWxpZGF0ZVR3b1dvcmRzIGZyb20gXCIuL3ZhbGlkYXRlVHdvV29yZHNcIjtcbmltcG9ydCB2YWxpZGF0ZUdlb3JnaWFuQWxwaCBmcm9tIFwiLi92YWxpZGF0ZUdlb3JnaWFuQWxwaFwiO1xuaW1wb3J0IHVwZGF0ZUZvdXJMZXR0ZXJzIGZyb20gXCIuLi8uLi8uLi8uLi9kb20vYmxvZ0FkZGVyL2Jsb2dBdXRob3IvdXBkYXRlRm91ckxldHRlcnNcIjtcbmltcG9ydCB1cGRhdGVUd29Xb3Jkc1ZhbCBmcm9tIFwiLi4vLi4vLi4vLi4vZG9tL2Jsb2dBZGRlci9ibG9nQXV0aG9yL3VwZGF0ZVR3b1dvcmRzVmFsXCI7XG5pbXBvcnQgdXBkYXRlR2VvcmdpYW5WYWwgZnJvbSBcIi4uLy4uLy4uLy4uL2RvbS9ibG9nQWRkZXIvYmxvZ0F1dGhvci91cGRhdGVHZW9yZ2lhblZhbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZUF1dGhvcihpbnB1dCwgYXJyKSB7XG4gIGNvbnN0IGJsb2dJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsb2ctaW5mb1wiKSk7XG4gIGNvbnN0IHZhbHVlID0gaW5wdXQudmFsdWU7XG5cbiAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgIHVwZGF0ZUZvdXJMZXR0ZXJzKGZhbHNlLCBhcnJbMF0pO1xuICAgIHVwZGF0ZVR3b1dvcmRzVmFsKGZhbHNlLCBhcnJbMV0pO1xuICAgIHVwZGF0ZUdlb3JnaWFuVmFsKGZhbHNlLCBhcnJbMl0pO1xuICAgIGJsb2dJbmZvLmF1dGhvciA9IHZhbHVlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmxvZy1pbmZvXCIsIEpTT04uc3RyaW5naWZ5KGJsb2dJbmZvKSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdXBkYXRlRm91ckxldHRlcnModmFsaWRhdGVGb3VyTGV0dGVycyh2YWx1ZSksIGFyclswXSk7XG4gIHVwZGF0ZVR3b1dvcmRzVmFsKHZhbGlkYXRlVHdvV29yZHModmFsdWUpLCBhcnJbMV0pO1xuICB1cGRhdGVHZW9yZ2lhblZhbCh2YWxpZGF0ZUdlb3JnaWFuQWxwaCh2YWx1ZSksIGFyclsyXSk7XG5cbiAgaWYgKFxuICAgIHZhbGlkYXRlRm91ckxldHRlcnModmFsdWUpICYmXG4gICAgdmFsaWRhdGVUd29Xb3Jkcyh2YWx1ZSkgJiZcbiAgICB2YWxpZGF0ZUdlb3JnaWFuQWxwaCh2YWx1ZSlcbiAgKSB7XG4gICAgaW5wdXQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgZ3JlZW5cIjtcbiAgfSBlbHNlIGlucHV0LnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHJlZFwiO1xuXG4gIGJsb2dJbmZvLmF1dGhvciA9IHZhbHVlO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJsb2ctaW5mb1wiLCBKU09OLnN0cmluZ2lmeShibG9nSW5mbykpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVGb3VyTGV0dGVycyh2YWx1ZSkge1xuICBmdW5jdGlvbiBjaGVja1ZhbHVlKHZhbHVlKSB7XG4gICAgbGV0IGxldHRlckNvdW50ID0gMDtcblxuICAgIGZvciAoY29uc3QgY2hhciBvZiB2YWx1ZSkge1xuICAgICAgaWYgKGNoYXIgPT09IFwiIFwiKSBjb250aW51ZTtcbiAgICAgIGxldHRlckNvdW50Kys7XG4gICAgfVxuICAgIHJldHVybiBsZXR0ZXJDb3VudCA+PSA0O1xuICB9XG5cbiAgcmV0dXJuIGNoZWNrVmFsdWUodmFsdWUpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVUd29Xb3Jkcyh2YWx1ZSkge1xuICBmdW5jdGlvbiBoYXNUd29Xb3Jkcyh2YWx1ZSkge1xuICAgIGNvbnN0IHdvcmRzID0gdmFsdWUuc3BsaXQoXCIgXCIpO1xuICAgIGxldCB3b3JkQ291bnRlciA9IDA7XG5cbiAgICBmb3IgKGxldCB3b3JkIG9mIHdvcmRzKSB7XG4gICAgICBpZiAod29yZCA9PT0gXCJcIikgY29udGludWU7XG4gICAgICB3b3JkQ291bnRlcisrO1xuICAgIH1cbiAgICByZXR1cm4gd29yZENvdW50ZXIgPj0gMjtcbiAgfVxuXG4gIHJldHVybiBoYXNUd29Xb3Jkcyh2YWx1ZSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZUdlb3JnaWFuQWxwaCh2YWx1ZSkge1xuICBjb25zdCBnZW9yZ2lhbkFscGhhYmV0ID0gbmV3IFNldChbXG4gICAgMHgxMGEwLCAweDEwYTEsIDB4MTBhMiwgMHgxMGEzLCAweDEwYTQsIDB4MTBhNSwgMHgxMGE2LCAweDEwYTcsIDB4MTBhOCxcbiAgICAweDEwYTksIDB4MTBhYSwgMHgxMGFiLCAweDEwYWMsIDB4MTBhZCwgMHgxMGFlLCAweDEwYWYsIDB4MTBiMCwgMHgxMGIxLFxuICAgIDB4MTBiMiwgMHgxMGIzLCAweDEwYjQsIDB4MTBiNSwgMHgxMGI2LCAweDEwYjcsIDB4MTBiOCwgMHgxMGI5LCAweDEwYmEsXG4gICAgMHgxMGJiLCAweDEwYmMsIDB4MTBiZCwgMHgxMGJlLCAweDEwYmYsIDB4MTBjMCwgMHgxMGMxLCAweDEwYzIsIDB4MTBjMyxcbiAgICAweDEwYzQsIDB4MTBjNSwgMHgxMGM2LCAweDEwYzcsIDB4MTBjOCwgMHgxMGM5LCAweDEwY2EsIDB4MTBjYiwgMHgxMGNjLFxuICAgIDB4MTBjZCwgMHgxMGNlLCAweDEwY2YsIDB4MTBkMCwgMHgxMGQxLCAweDEwZDIsIDB4MTBkMywgMHgxMGQ0LCAweDEwZDUsXG4gICAgMHgxMGQ2LCAweDEwZDcsIDB4MTBkOCwgMHgxMGQ5LCAweDEwZGEsIDB4MTBkYiwgMHgxMGRjLCAweDEwZGQsIDB4MTBkZSxcbiAgICAweDEwZGYsIDB4MTBlMCwgMHgxMGUxLCAweDEwZTIsIDB4MTBlMywgMHgxMGU0LCAweDEwZTUsIDB4MTBlNiwgMHgxMGU3LFxuICAgIDB4MTBlOCwgMHgxMGU5LCAweDEwZWEsIDB4MTBlYiwgMHgxMGVjLCAweDEwZWQsIDB4MTBlZSwgMHgxMGVmLFxuICBdKTtcblxuICBmdW5jdGlvbiBjaGVja0lucHV0KGlucHV0KSB7XG4gICAgbGV0IGFsbENoYXJhY3RlcnNBcmVHZW9yZ2lhbiA9IHRydWU7XG5cbiAgICBmb3IgKGxldCBjaGFyIG9mIGlucHV0KSB7XG4gICAgICBpZiAoY2hhciA9PT0gXCIgXCIpIGNvbnRpbnVlO1xuICAgICAgbGV0IGNoYXJDb2RlID0gY2hhci5jaGFyQ29kZUF0KDApO1xuICAgICAgaWYgKCFnZW9yZ2lhbkFscGhhYmV0LmhhcyhjaGFyQ29kZSkpIHtcbiAgICAgICAgYWxsQ2hhcmFjdGVyc0FyZUdlb3JnaWFuID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhbGxDaGFyYWN0ZXJzQXJlR2VvcmdpYW47XG4gIH1cblxuICByZXR1cm4gY2hlY2tJbnB1dCh2YWx1ZSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVGb3VyTGV0dGVycyh2YWxpZCwgZGl2KSB7XG4gIGlmICh2YWxpZCA9PT0gXCJpbml0XCIpIHtcbiAgICBkaXYucXVlcnlTZWxlY3RvcihcInNwYW5cIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjODU4NThkXCI7XG4gICAgZGl2LnF1ZXJ5U2VsZWN0b3IoXCJsaVwiKS5zdHlsZS5jb2xvciA9IFwiIzg1ODU4ZFwiO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh2YWxpZCkge1xuICAgIGRpdi5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgZGl2LnF1ZXJ5U2VsZWN0b3IoXCJsaVwiKS5zdHlsZS5jb2xvciA9IFwiZ3JlZW5cIjtcbiAgfVxuXG4gIGlmICghdmFsaWQpIHtcbiAgICBkaXYucXVlcnlTZWxlY3RvcihcInNwYW5cIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICBkaXYucXVlcnlTZWxlY3RvcihcImxpXCIpLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlVHdvV29yZHNWYWwodmFsaWQsIGRpdikge1xuICBpZiAodmFsaWQgPT09IFwiaW5pdFwiKSB7XG4gICAgZGl2LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzg1ODU4ZFwiO1xuICAgIGRpdi5xdWVyeVNlbGVjdG9yKFwibGlcIikuc3R5bGUuY29sb3IgPSBcIiM4NTg1OGRcIjtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodmFsaWQpIHtcbiAgICBkaXYucXVlcnlTZWxlY3RvcihcInNwYW5cIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJncmVlblwiO1xuICAgIGRpdi5xdWVyeVNlbGVjdG9yKFwibGlcIikuc3R5bGUuY29sb3IgPSBcImdyZWVuXCI7XG4gIH1cblxuICBpZiAoIXZhbGlkKSB7XG4gICAgZGl2LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgZGl2LnF1ZXJ5U2VsZWN0b3IoXCJsaVwiKS5zdHlsZS5jb2xvciA9IFwicmVkXCI7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUdlb3JnaWFuVmFsKHZhbGlkLCBkaXYpIHtcbiAgaWYgKHZhbGlkID09PSBcImluaXRcIikge1xuICAgIGRpdi5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM4NTg1OGRcIjtcbiAgICBkaXYucXVlcnlTZWxlY3RvcihcImxpXCIpLnN0eWxlLmNvbG9yID0gXCIjODU4NThkXCI7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHZhbGlkKSB7XG4gICAgZGl2LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgICBkaXYucXVlcnlTZWxlY3RvcihcImxpXCIpLnN0eWxlLmNvbG9yID0gXCJncmVlblwiO1xuICB9XG5cbiAgaWYgKCF2YWxpZCkge1xuICAgIGRpdi5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgIGRpdi5xdWVyeVNlbGVjdG9yKFwibGlcIikuc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICB9XG59XG4iLCJpbXBvcnQgdmFsaWRhdGVUaXRsZSBmcm9tIFwiLi4vLi4vLi4vbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRpb25zL3RpdGxlL3ZhbGlkYXRlVGl0bGVcIjtcbmltcG9ydCB1cGRhdGVUd29MZXR0ZXJzIGZyb20gXCIuL3VwZGF0ZVR3b0xldHRlcnNcIjtcblxuY29uc3QgdmFsaWRhdGlvbnMgPSBbXCLhg5vhg5jhg5zhg5jhg5vhg6Phg5sgMiDhg6Hhg5jhg5vhg5Hhg53hg5rhg51cIl07XG5sZXQgdmFsaWRhdGlvbkNvbnRhaW5lcjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGl0bGUoYmxvZ0luZm8pIHtcbiAgY29uc3QgdGl0bGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGl0bGUtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIHRpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIuGDoeGDkOGDl+GDkOGDo+GDoOGDmFwiO1xuICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpdGxlLWlucHV0XCIpO1xuICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKTtcblxuICBjb25zdCB0aXRsZUxhYmVsU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB0aXRsZUxhYmVsU3Bhbi50ZXh0Q29udGVudCA9IFwiKlwiO1xuICB0aXRsZUxhYmVsLmFwcGVuZENoaWxkKHRpdGxlTGFiZWxTcGFuKTtcblxuICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICB0aXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJ0aXRsZS1pbnB1dFwiKTtcbiAgdGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlLWlucHV0XCIpO1xuICB0aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwi4YOo4YOU4YOY4YOn4YOV4YOQ4YOc4YOU4YOXIOGDoeGDkOGDl+GDkOGDo+GDoOGDmFwiKTtcbiAgdGl0bGVDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVJbnB1dCk7XG5cbiAgY29uc3QgdmFsaWRhdGlvblRleHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICB2YWxpZGF0aW9uVGV4dHMuY2xhc3NMaXN0LmFkZChcInZhbGlkYXRpb24tdGV4dHNcIik7XG4gIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHZhbGlkYXRpb25UZXh0cyk7XG5cbiAgdmFsaWRhdGlvbnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICB2YWxpZGF0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB2YWxpZGF0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZGF0aW9uLWNvbnRhaW5lclwiKTtcbiAgICB2YWxpZGF0aW9uVGV4dHMuYXBwZW5kQ2hpbGQodmFsaWRhdGlvbkNvbnRhaW5lcik7XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uQmVmb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdmFsaWRhdGlvbkJlZm9yZS5jbGFzc0xpc3QuYWRkKFwidmFsaWRhdGlvbi1iZWZvcmVcIik7XG4gICAgdmFsaWRhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh2YWxpZGF0aW9uQmVmb3JlKTtcblxuICAgIGNvbnN0IHZhbGlkYXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHZhbGlkYXRpb25UZXh0LnRleHRDb250ZW50ID0gZWw7XG4gICAgdmFsaWRhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh2YWxpZGF0aW9uVGV4dCk7XG4gIH0pO1xuXG4gIGlmIChibG9nSW5mbyAmJiBibG9nSW5mby50aXRsZSkge1xuICAgIHRpdGxlSW5wdXQudmFsdWUgPSBibG9nSW5mby50aXRsZTtcbiAgICB2YWxpZGF0ZVRpdGxlKHRpdGxlSW5wdXQsIHZhbGlkYXRpb25Db250YWluZXIpO1xuICB9XG5cbiAgdGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuXG4gIHRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy52YWx1ZS5jaGFyQXQoMCkgPT09IFwiIFwiKSB7XG4gICAgICBhbGVydChcIklucHV0IHNob3VsZCBub3Qgc3RhcnQgd2l0aCBhIHNwYWNlXCIpO1xuICAgICAgdGhpcy52YWx1ZSA9IFwiXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhbGlkYXRlVGl0bGUodGhpcywgdmFsaWRhdGlvbkNvbnRhaW5lcik7XG4gIH0pO1xuXG4gIHRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjZTRlM2ViXCI7XG4gICAgICB1cGRhdGVUd29MZXR0ZXJzKFwiaW5pdFwiLCB2YWxpZGF0aW9uQ29udGFpbmVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0aXRsZUNvbnRhaW5lcjtcbn1cbiIsImltcG9ydCB2YWxpZGF0ZVR3b0xldHRlcnMgZnJvbSBcIi4vdmFsaWRhdGVUd29MZXR0ZXJzXCI7XG5pbXBvcnQgdXBkYXRlVHdvTGV0dGVycyBmcm9tIFwiLi4vLi4vLi4vLi4vZG9tL2Jsb2dBZGRlci9ibG9nVGl0bGUvdXBkYXRlVHdvTGV0dGVyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZVRpdGxlKGlucHV0LCBkaXYpIHtcbiAgY29uc3QgYmxvZ0luZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvZy1pbmZvXCIpKTtcbiAgY29uc3QgdmFsdWUgPSBpbnB1dC52YWx1ZTtcblxuICB1cGRhdGVUd29MZXR0ZXJzKHZhbGlkYXRlVHdvTGV0dGVycyh2YWx1ZSksIGRpdik7XG5cbiAgaWYgKHZhbGlkYXRlVHdvTGV0dGVycyh2YWx1ZSkpIHtcbiAgICBpbnB1dC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBncmVlblwiO1xuICB9IGVsc2UgaW5wdXQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgcmVkXCI7XG5cbiAgYmxvZ0luZm8udGl0bGUgPSB2YWx1ZTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJibG9nLWluZm9cIiwgSlNPTi5zdHJpbmdpZnkoYmxvZ0luZm8pKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlVHdvTGV0dGVycyh2YWx1ZSkge1xuICBmdW5jdGlvbiBjaGVja1ZhbHVlKHZhbHVlKSB7XG4gICAgbGV0IGxldHRlckNvdW50ID0gMDtcblxuICAgIGZvciAoY29uc3QgY2hhciBvZiB2YWx1ZSkge1xuICAgICAgaWYgKGNoYXIgPT09IFwiIFwiKSBjb250aW51ZTtcbiAgICAgIGxldHRlckNvdW50Kys7XG4gICAgfVxuICAgIHJldHVybiBsZXR0ZXJDb3VudCA+PSAyO1xuICB9XG5cbiAgcmV0dXJuIGNoZWNrVmFsdWUodmFsdWUpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlVHdvTGV0dGVycyh2YWxpZCwgZGl2KSB7XG4gIGlmICh2YWxpZCA9PT0gXCJpbml0XCIpIHtcbiAgICBkaXYucXVlcnlTZWxlY3RvcihcInNwYW5cIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjODU4NThkXCI7XG4gICAgZGl2LnF1ZXJ5U2VsZWN0b3IoXCJsaVwiKS5zdHlsZS5jb2xvciA9IFwiIzg1ODU4ZFwiO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh2YWxpZCkge1xuICAgIGRpdi5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImdyZWVuXCI7XG4gICAgZGl2LnF1ZXJ5U2VsZWN0b3IoXCJsaVwiKS5zdHlsZS5jb2xvciA9IFwiZ3JlZW5cIjtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICghdmFsaWQpIHtcbiAgICBkaXYucXVlcnlTZWxlY3RvcihcInNwYW5cIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICBkaXYucXVlcnlTZWxlY3RvcihcImxpXCIpLnN0eWxlLmNvbG9yID0gXCJyZWRcIjtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB2YWxpZGF0ZURlc2NyaXB0aW9uIGZyb20gXCIuLi8uLi8uLi9sb2dpYy9ibG9nQWRkZXIvdmFsaWRhdGlvbnMvZGVzY3JpcHRpb24vdmFsaWRhdGVEZXNjcmlwdGlvblwiO1xuaW1wb3J0IHVwZGF0ZVR3b0xldHRlcnMgZnJvbSBcIi4uL2Jsb2dUaXRsZS91cGRhdGVUd29MZXR0ZXJzXCI7XG5cbmNvbnN0IHZhbGlkYXRpb25zID0gW1wi4YOb4YOY4YOc4YOY4YOb4YOj4YObIDIg4YOh4YOY4YOb4YOR4YOd4YOa4YOdXCJdO1xubGV0IHZhbGlkYXRpb25Db250YWluZXI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURlc2NyaXB0aW9uKGJsb2dJbmZvKSB7XG4gIGNvbnN0IGRlc2NyaXB0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGVzY3JpcHRpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImRlc2NyaXB0aW9uLWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCLhg5Dhg6bhg6zhg5Thg6Dhg5BcIjtcbiAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkZXNjcmlwdGlvbi1pbnB1dFwiKTtcbiAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbCk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25MYWJlbFNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgZGVzY3JpcHRpb25MYWJlbFNwYW4udGV4dENvbnRlbnQgPSBcIipcIjtcbiAgZGVzY3JpcHRpb25MYWJlbC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsU3Bhbik7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIDYpO1xuICBkZXNjcmlwdGlvbklucHV0LmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1pbnB1dFwiKTtcbiAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uLWlucHV0XCIpO1xuICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwi4YOo4YOU4YOY4YOn4YOV4YOQ4YOc4YOU4YOXIOGDkOGDpuGDrOGDlOGDoOGDkFwiKTtcbiAgZGVzY3JpcHRpb25Db250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgY29uc3QgdmFsaWRhdGlvblRleHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICB2YWxpZGF0aW9uVGV4dHMuY2xhc3NMaXN0LmFkZChcInZhbGlkYXRpb24tdGV4dHNcIik7XG4gIGRlc2NyaXB0aW9uQ29udGFpbmVyLmFwcGVuZENoaWxkKHZhbGlkYXRpb25UZXh0cyk7XG5cbiAgdmFsaWRhdGlvbnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICB2YWxpZGF0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB2YWxpZGF0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZGF0aW9uLWNvbnRhaW5lclwiKTtcbiAgICB2YWxpZGF0aW9uVGV4dHMuYXBwZW5kQ2hpbGQodmFsaWRhdGlvbkNvbnRhaW5lcik7XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uQmVmb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdmFsaWRhdGlvbkJlZm9yZS5jbGFzc0xpc3QuYWRkKFwidmFsaWRhdGlvbi1iZWZvcmVcIik7XG4gICAgdmFsaWRhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh2YWxpZGF0aW9uQmVmb3JlKTtcblxuICAgIGNvbnN0IHZhbGlkYXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHZhbGlkYXRpb25UZXh0LnRleHRDb250ZW50ID0gZWw7XG4gICAgdmFsaWRhdGlvbkNvbnRhaW5lci5hcHBlbmRDaGlsZCh2YWxpZGF0aW9uVGV4dCk7XG4gIH0pO1xuXG4gIGlmIChibG9nSW5mbyAmJiBibG9nSW5mby5kZXNjcmlwdGlvbikge1xuICAgIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBibG9nSW5mby5kZXNjcmlwdGlvbjtcbiAgICB2YWxpZGF0ZURlc2NyaXB0aW9uKGRlc2NyaXB0aW9uSW5wdXQsIHZhbGlkYXRpb25Db250YWluZXIpO1xuICB9XG5cbiAgZGVzY3JpcHRpb25JbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuXG4gIGRlc2NyaXB0aW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy52YWx1ZS5jaGFyQXQoMCkgPT09IFwiIFwiKSB7XG4gICAgICBhbGVydChcIklucHV0IHNob3VsZCBub3Qgc3RhcnQgd2l0aCBhIHNwYWNlXCIpO1xuICAgICAgdGhpcy52YWx1ZSA9IFwiXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhbGlkYXRlRGVzY3JpcHRpb24odGhpcywgdmFsaWRhdGlvbkNvbnRhaW5lcik7XG4gIH0pO1xuXG4gIGRlc2NyaXB0aW9uSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjZTRlM2ViXCI7XG4gICAgICB1cGRhdGVUd29MZXR0ZXJzKFwiaW5pdFwiLCB2YWxpZGF0aW9uQ29udGFpbmVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkZXNjcmlwdGlvbkNvbnRhaW5lcjtcbn1cbiIsImltcG9ydCB2YWxpZGF0ZVR3b0xldHRlcnMgZnJvbSBcIi4uL3RpdGxlL3ZhbGlkYXRlVHdvTGV0dGVyc1wiO1xuaW1wb3J0IHVwZGF0ZVR3b0xldHRlcnMgZnJvbSBcIi4uLy4uLy4uLy4uL2RvbS9ibG9nQWRkZXIvYmxvZ1RpdGxlL3VwZGF0ZVR3b0xldHRlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVEZXNjcmlwdGlvbihpbnB1dCwgZGl2KSB7XG4gIGNvbnN0IGJsb2dJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsb2ctaW5mb1wiKSk7XG4gIGNvbnN0IHZhbHVlID0gaW5wdXQudmFsdWU7XG5cbiAgdXBkYXRlVHdvTGV0dGVycyh2YWxpZGF0ZVR3b0xldHRlcnModmFsdWUpLCBkaXYpO1xuXG4gIGlmICh2YWxpZGF0ZVR3b0xldHRlcnModmFsdWUpKSB7XG4gICAgaW5wdXQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgZ3JlZW5cIjtcbiAgfSBlbHNlIGlucHV0LnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHJlZFwiO1xuXG4gIGJsb2dJbmZvLmRlc2NyaXB0aW9uID0gdmFsdWU7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmxvZy1pbmZvXCIsIEpTT04uc3RyaW5naWZ5KGJsb2dJbmZvKSk7XG59XG4iLCJpbXBvcnQgdmFsaWRhdGVJbWcgZnJvbSBcIi4vdmFsaWRhdGlvbnMvaW1hZ2UvdmFsaWRhdGVJbWdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKGJsb2dJbmZvKSB7XG4gIGlmICh2YWxpZGF0ZUltZyhibG9nSW5mbykpIHJldHVybiB0cnVlO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVJbWcoYmxvZ0luZm8pIHtcbiAgaWYgKGJsb2dJbmZvLmltYWdlVVJMKSB7XG4gICAgY29uc29sZS5sb2coXCJJbWFnZSBFeGlzdHNcIik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoIWJsb2dJbmZvLmltYWdlVVJMKSB7XG4gICAgYWxlcnQoXCJQbGVhc2UgdXBsb2FkIGFuIGltYWdlXCIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IHZhbGlkYXRlRGF0ZSBmcm9tIFwiLi4vLi4vLi4vbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRpb25zL2RhdGUvdmFsaWRhdGVEYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURhdGUoYmxvZ0luZm8pIHtcbiAgY29uc3QgZGF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRhdGUtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGRhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCLhg5Lhg5Dhg5vhg53hg6Xhg5Xhg5Thg6fhg5zhg5Thg5Hhg5jhg6Eg4YOX4YOQ4YOg4YOY4YOm4YOYXCI7XG4gIGRhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkYXRlLWlucHV0XCIpO1xuICBkYXRlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG5cbiAgY29uc3QgZGF0ZUxhYmVsU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBkYXRlTGFiZWxTcGFuLnRleHRDb250ZW50ID0gXCIqXCI7XG4gIGRhdGVMYWJlbC5hcHBlbmRDaGlsZChkYXRlTGFiZWxTcGFuKTtcblxuICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF0ZS1pbnB1dFwiKTtcbiAgZGF0ZUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXRlSW5wdXQpO1xuXG4gIGlmIChibG9nSW5mbyAmJiBibG9nSW5mby5kYXRlKSB7XG4gICAgZGF0ZUlucHV0LnZhbHVlID0gYmxvZ0luZm8uZGF0ZTtcbiAgICB2YWxpZGF0ZURhdGUoZGF0ZUlucHV0KTtcbiAgfVxuXG4gIGRhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB2YWxpZGF0ZURhdGUoZGF0ZUlucHV0KTtcbiAgfSk7XG5cbiAgZGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFkYXRlSW5wdXQudmFsdWUpIGRhdGVJbnB1dC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCByZWRcIjtcbiAgfSk7XG5cbiAgZGF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWRhdGVJbnB1dC52YWx1ZSkgZGF0ZUlucHV0LnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNlNGUzZWJcIjtcbiAgfSk7XG5cbiAgcmV0dXJuIGRhdGVDb250YWluZXI7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZURhdGUoaW5wdXQpIHtcbiAgY29uc3QgYmxvZ0luZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvZy1pbmZvXCIpKTtcbiAgY29uc3QgdmFsdWUgPSBpbnB1dC52YWx1ZTtcblxuICBpZiAodmFsdWUpIHtcbiAgICBpbnB1dC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBncmVlblwiO1xuICB9IGVsc2UgaW5wdXQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgcmVkXCI7XG5cbiAgYmxvZ0luZm8uZGF0ZSA9IHZhbHVlO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJsb2ctaW5mb1wiLCBKU09OLnN0cmluZ2lmeShibG9nSW5mbykpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDYXRlZ29yaWVzKHVybCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXJsfS9jYXRlZ29yaWVzYCwge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHRoZSBmZXRjaCBvcGVyYXRpb246IFwiLCBlcnJvcik7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3JpZXMoZGF0YSkge1xuICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1jb250ZW50XCIpO1xuXG4gIGNvbnN0IGNhdGVnb3JpZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXRlZ29yaWVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjYXRlZ29yaWVzLWNvbnRhaW5lclwiKTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoY2F0ZWdvcmllc0NvbnRhaW5lcik7XG5cbiAgZGF0YS5kYXRhLmZvckVhY2goKGVsKSA9PiB7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJjYXRlZ29yeVwiLCBgY2F0ZWdvcnktJHtlbC5pZH1gKTtcbiAgICBjYXRlZ29yeS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBlbC5iYWNrZ3JvdW5kX2NvbG9yO1xuICAgIGNhdGVnb3JpZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xuXG4gICAgY29uc3QgdGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGl0bGVUZXh0LnRleHRDb250ZW50ID0gZWwudGl0bGU7XG4gICAgdGl0bGVUZXh0LnN0eWxlLmNvbG9yID0gZWwudGV4dF9jb2xvcjtcbiAgICBjYXRlZ29yeS5hcHBlbmRDaGlsZCh0aXRsZVRleHQpO1xuICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQwOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIvc3JjL2luZGV4LnNjc3NcIjtcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9kb20vaGVhZGVyL2NyZWF0ZUhlYWRlclwiO1xuaW1wb3J0IGNyZWF0ZU1haW4gZnJvbSBcIi4vY29tcG9uZW50cy9kb20vbWFpbi9jcmVhdGVNYWluXCI7XG5pbXBvcnQgY3JlYXRlQmxvZ0FkZGVyIGZyb20gXCIuL2NvbXBvbmVudHMvZG9tL2Jsb2dBZGRlci9jcmVhdGVCbG9nQWRkZXJcIjtcbmltcG9ydCBmZXRjaENhdGVnb3JpZXMgZnJvbSBcIi4vY29tcG9uZW50cy9sb2dpYy9jYXRlZ29yaWVzL2ZldGNoQ2F0ZWdvcmllc1wiO1xuaW1wb3J0IGNyZWF0ZUNhdGVnb3JpZXMgZnJvbSBcIi4vY29tcG9uZW50cy9kb20vbWFpbi9jcmVhdGVDYXRlZ29yaWVzXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmNvbnN0IHVybCA9IFwiaHR0cHM6Ly9hcGkuYmxvZy5yZWRiZXJyeWludGVybnNoaXAuZ2UvYXBpXCI7XG5jb25zdCB0b2tlbiA9XG4gIFwiZmM5YTgwNzYwOGQwMDZmOWQ3NjA0YmM3OGJmNjJiMDI3YTIyNDdjMGMyMzJkYzIxN2E2ZTFkNTQ3NmQ1MjcxYVwiO1xuXG5jb25zdCBsb2dpblN0YXR1cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2dpblwiKSk7XG5pZiAoIWxvZ2luU3RhdHVzKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvZ2luXCIsIEpTT04uc3RyaW5naWZ5KGZhbHNlKSk7XG5cbmNvbnN0IGJsb2dBZGRlclN0YXR1cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibG9nLWFkZGVyLXN0YXR1c1wiKSk7XG5pZiAoIWJsb2dBZGRlclN0YXR1cylcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJibG9nLWFkZGVyLXN0YXR1c1wiLCBKU09OLnN0cmluZ2lmeShmYWxzZSkpO1xuXG5jb25zdCBibG9nSW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibG9nLWluZm9cIikpO1xuaWYgKCFibG9nSW5mbykgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJibG9nLWluZm9cIiwgSlNPTi5zdHJpbmdpZnkoe30pKTtcblxuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIobG9naW5TdGF0dXMpKTtcbmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlTWFpbihibG9nQWRkZXJTdGF0dXMpKTtcbmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlQmxvZ0FkZGVyKGJsb2dBZGRlclN0YXR1cywgYmxvZ0luZm8pKTtcblxuZmV0Y2hDYXRlZ29yaWVzKHVybCkudGhlbigoZGF0YSkgPT4ge1xuICBjcmVhdGVDYXRlZ29yaWVzKGRhdGEpO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=