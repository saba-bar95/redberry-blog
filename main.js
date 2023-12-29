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
___CSS_LOADER_EXPORT___.push([module.id, `#header-div {
  position: sticky;
  top: 0;
}
#header-div .header-content {
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

#main-div {
  display: flex;
  flex-direction: column;
  gap: 70px;
  font-family: "FiraGO";
}
#main-div .main-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(to right, #f1f5f9, #e2e8f0);
  padding: 70px 90px 0px 120px;
}
#main-div .main-info h1 {
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
#main-div .blogs-container {
  display: grid;
  grid-template-columns: repeat(3, auto);
  column-gap: 32px;
  row-gap: 56px;
}
#main-div .blogs-container .blog-container {
  width: 408px;
}
#main-div .blogs-container .blog-container img {
  width: 100%;
  height: 328px;
  border-radius: 12px;
}
#main-div .blogs-container .blog-container .blog-content {
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 16px;
}
#main-div .blogs-container .blog-container .blog-content h2 {
  color: #1a1a1f;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
}
#main-div .blogs-container .blog-container .blog-content p {
  color: #85858d;
  font-size: 12px;
  font-weight: 400;
}
#main-div .blogs-container .blog-container .blog-content h1 {
  color: #1a1a1f;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
}
#main-div .blogs-container .blog-container .blog-content .main-categories {
  display: flex;
  gap: 16px;
}
#main-div .blogs-container .blog-container .blog-content .main-categories .main-category {
  padding: 6px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  border-radius: 30px;
}
#main-div .blogs-container .blog-container .blog-content .description {
  color: #404049;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
}
#main-div .blogs-container .blog-container .blog-content .expand-blog {
  display: flex;
  cursor: pointer;
}
#main-div .blogs-container .blog-container .blog-content .expand-blog p {
  color: #5d37f3;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}
#main-div .blogs-container .blog-container .blog-content .expand-blog img {
  height: 20px;
  width: auto;
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
#blog-adder .blog-adder-content .blog-form .img-uploader-container:hover {
  cursor: pointer;
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
#blog-adder .blog-adder-content .blog-form .img-uploader-container .image-uploader .image-texts p {
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
#blog-adder .blog-adder-content .blog-form .container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
}
#blog-adder .blog-adder-content .blog-form .container label {
  display: flex;
  gap: 5px;
  font-size: 0.9em;
  color: #1a1a1f;
  font-weight: 600;
}
#blog-adder .blog-adder-content .blog-form .container input,
#blog-adder .blog-adder-content .blog-form .container textarea,
#blog-adder .blog-adder-content .blog-form .container .select-container {
  padding: 15px 10px;
  font-family: inherit;
  border-radius: 12px;
  outline: none;
  border: 1px solid #e4e3eb;
  color: #85858d;
  background-color: #fcfcfd;
}
#blog-adder .blog-adder-content .blog-form .container .validation-container {
  display: flex;
  align-items: center;
  gap: 8px;
}
#blog-adder .blog-adder-content .blog-form .container .validation-before {
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  display: block;
  background-color: #85858d;
}
#blog-adder .blog-adder-content .blog-form .container li {
  list-style-type: none;
  color: #85858d;
}
#blog-adder .blog-adder-content .blog-form .container .select-container {
  display: grid;
  grid-template-columns: auto;
}
#blog-adder .blog-adder-content .blog-form .container .select-container .selected-category {
  display: flex;
  gap: 5px;
  border-radius: 30px;
  padding: 5px;
}
#blog-adder .blog-adder-content .blog-form .container .select-container .selected-category .category-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  border-radius: 30px;
  gap: 7px;
}
#blog-adder .blog-adder-content .blog-form .container .select-container .selected-category .category-container p {
  text-align: center;
}
#blog-adder .blog-adder-content .blog-form .container .select-container .selected-category .category-container img {
  cursor: pointer;
}
#blog-adder .blog-adder-content .blog-form .container .select-container select {
  background-color: #fcfcfd;
  border: none;
  outline: none;
  width: 100%;
  cursor: pointer;
}
#blog-adder .blog-adder-content .blog-form .email-container {
  align-self: start;
  width: calc(50% - 15px);
}
#blog-adder .blog-adder-content .blog-form .add-blog-btn {
  align-self: end;
  font-family: "FiraGO";
  font-size: 0.9em;
  width: calc(50% - 15px);
  line-height: 20px;
  color: #f8fafc;
  padding: 15px 10px;
  background-color: #e4e3eb;
  border: none;
  border-radius: 8px;
  transition-duration: 0.5s;
  cursor: pointer;
}
#blog-adder .blog-adder-content .blog-form .add-blog-btn:hover {
  background-color: #5d37f3;
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
}`, "",{"version":3,"sources":["webpack://./src/styles/header.scss","webpack://./src/index.scss","webpack://./src/styles/main.scss","webpack://./src/styles/loginModal.scss","webpack://./src/styles/blogAdder.scss"],"names":[],"mappings":"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","sourcesContent":["#header-div {\n  position: sticky;\n  top: 0;\n\n  .header-content {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 24px 100px;\n    background-color: #f8fafc;\n\n    button {\n      font-family: \"FiraGO\";\n      font-size: 0.9em;\n      line-height: 20px;\n      color: #f8fafc;\n      padding: 10px 20px;\n      background-color: #5d37f3;\n      border: none;\n      border-radius: 8px;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n}\n","@use \"/src/styles/header.scss\";\n@use \"/src/styles/main.scss\";\n@use \"/src/styles/loginModal.scss\";\n@use \"/src/styles/blogAdder.scss\";\n\n@font-face {\n  font-family: \"FiraGO\";\n  src: url(\"/src/assets/fonts/FiraGO/FiraGO-Regular.otf\");\n}\n\n$body-color: #f1f5f9;\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.hidden {\n  display: none !important;\n}\n\nbody {\n  background-color: $body-color;\n  min-height: 100vh;\n}\n","#main-div {\n  display: flex;\n  flex-direction: column;\n  gap: 70px;\n  font-family: \"FiraGO\";\n\n  .main-info {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    background-image: linear-gradient(to right, #f1f5f9, #e2e8f0);\n    padding: 70px 90px 0px 120px;\n\n    h1 {\n      font-family: inherit;\n      font-size: 4.8em;\n      color: #1a1a1f;\n    }\n  }\n\n  .categories-container {\n    padding: 30px 300px;\n    display: grid;\n    grid-template-columns: repeat(7, minmax(100px, 1fr));\n    grid-template-rows: 1fr 1fr;\n    grid-gap: 10px;\n\n    .category {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding: 4px 8px;\n      border-radius: 30px;\n      &:hover {\n        cursor: pointer;\n        scale: 1.05;\n        transition-duration: 0.3s;\n      }\n\n      p {\n        font-family: \"FiraGO\";\n        text-align: center;\n        color: black !important;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        &:hover {\n          overflow: visible;\n        }\n      }\n    }\n  }\n\n  .blogs-container {\n    display: grid;\n    grid-template-columns: repeat(3, auto);\n    column-gap: 32px;\n    row-gap: 56px;\n\n    .blog-container {\n      width: 408px;\n\n      img {\n        width: 100%;\n        height: 328px;\n        border-radius: 12px;\n      }\n\n      .blog-content {\n        display: flex;\n        flex-direction: column;\n        margin-top: 24px;\n        gap: 16px;\n\n        h2 {\n          color: #1a1a1f;\n          font-size: 16px;\n          font-weight: 500;\n          line-height: 20px;\n        }\n\n        p {\n          color: #85858d;\n          font-size: 12px;\n          font-weight: 400;\n        }\n\n        h1 {\n          color: #1a1a1f;\n          font-size: 20px;\n          font-weight: 500;\n          line-height: 28px;\n        }\n\n        .main-categories {\n          display: flex;\n          gap: 16px;\n\n          .main-category {\n            padding: 6px 10px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            font-size: 12px;\n            border-radius: 30px;\n          }\n        }\n\n        .description {\n          color: #404049;\n          font-size: 16px;\n          font-style: normal;\n          font-weight: 400;\n          line-height: 28px;\n        }\n\n        .expand-blog {\n          display: flex;\n          cursor: pointer;\n\n          p {\n            color: #5d37f3;\n            font-size: 14px;\n            font-weight: 500;\n            line-height: 20px;\n          }\n\n          img {\n            height: 20px;\n            width: auto;\n          }\n        }\n      }\n    }\n  }\n}\n","#modal-container {\n  font-family: \"FiraGO\";\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n\n  .modal-content {\n    display: flex;\n    flex-direction: column;\n    background-color: #fefefe;\n    padding: 20px 30px 35px 30px;\n    width: 480px;\n    transform: translateY(-50%);\n    border-radius: 12px;\n\n    .x-img {\n      align-self: end;\n      height: 12px;\n      opacity: 0.6;\n      &:hover {\n        cursor: pointer;\n        scale: 1.1;\n        transition-duration: 0.5s;\n      }\n    }\n\n    .input-container {\n      display: flex;\n      flex-direction: column;\n\n      h1 {\n        text-align: center;\n        margin-bottom: 30px;\n        line-height: 32px;\n      }\n\n      label {\n        font-size: 0.9em;\n        font-weight: 600;\n        line-height: 20px;\n        margin-bottom: 7px;\n      }\n\n      input {\n        font-family: inherit;\n        font-size: 0.9em;\n        border: 2px solid #000000;\n        outline: none;\n        background-color: #f7f7ff;\n        border-radius: 12px;\n        padding: 10px;\n        margin-bottom: 25px;\n        &:focus {\n          border-color: #5d37f3;\n        }\n      }\n    }\n\n    .error-container {\n      display: flex;\n      align-items: center;\n      gap: 15px;\n      margin-bottom: 25px;\n\n      p {\n        font-size: 0.9em;\n        color: #ff0000;\n      }\n    }\n\n    .success-container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      gap: 15px;\n      margin-bottom: 20px;\n\n      h1 {\n        font-size: 1.3em;\n        color: #1a1a1f;\n      }\n    }\n\n    button {\n      font-family: inherit;\n      font-size: 0.9em;\n      padding: 12px;\n      border: none;\n      background-color: #5d37f3;\n      border-radius: 8px;\n      color: #ffffff;\n      font-weight: 600;\n      letter-spacing: 0.03em;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n}\n","#blog-adder {\n  font-family: \"FiraGO\";\n  padding: 50px 70px 250px 70px;\n  border-top: 1px solid #e4e3eb;\n  position: relative;\n\n  .back-arrow {\n    position: absolute;\n    &:hover {\n      cursor: pointer;\n    }\n  }\n\n  .blog-adder-content {\n    // padding: 0px 575px;\n    padding: 0 50px;\n\n    h1 {\n      font-size: 2.3em;\n      color: #1a1a1f;\n      line-height: 40px;\n      font-weight: 700;\n      margin-bottom: 60px;\n    }\n\n    .blog-form {\n      display: flex;\n      flex-direction: column;\n      gap: 50px;\n\n      .img-uploader-container {\n        display: flex;\n        flex-direction: column;\n        gap: 12px;\n        &:hover {\n          cursor: pointer;\n        }\n\n        .image-uploader {\n          background-color: #e5e7eb;\n          border: 1.5px dashed #85858d;\n          border-radius: 12px;\n          display: flex;\n          flex-direction: column;\n          padding: 80px 100px;\n          gap: 30px;\n\n          img {\n            align-self: center;\n          }\n\n          .image-texts {\n            display: flex;\n            justify-content: center;\n            gap: 5px;\n\n            p {\n              text-decoration: underline;\n              cursor: pointer;\n              font-weight: 700;\n            }\n\n            img {\n              cursor: pointer;\n            }\n          }\n        }\n      }\n\n      .author-title-container,\n      .date-category-container {\n        display: flex;\n        justify-content: space-between;\n        gap: 30px;\n      }\n\n      .container {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n        overflow: hidden;\n\n        label {\n          display: flex;\n          gap: 5px;\n          font-size: 0.9em;\n          color: #1a1a1f;\n          font-weight: 600;\n        }\n\n        input,\n        textarea,\n        .select-container {\n          padding: 15px 10px;\n          font-family: inherit;\n          border-radius: 12px;\n          outline: none;\n          border: 1px solid #e4e3eb;\n          color: #85858d;\n          background-color: #fcfcfd;\n        }\n\n        .validation-container {\n          display: flex;\n          align-items: center;\n          gap: 8px;\n        }\n\n        .validation-before {\n          width: 0.5em;\n          height: 0.5em;\n          border-radius: 50%;\n          display: block;\n          background-color: #85858d;\n        }\n\n        li {\n          list-style-type: none;\n          color: #85858d;\n        }\n\n        .select-container {\n          display: grid;\n          grid-template-columns: auto;\n\n          .selected-category {\n            display: flex;\n            gap: 5px;\n            border-radius: 30px;\n            padding: 5px;\n\n            .category-container {\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              padding: 8px 12px;\n              border-radius: 30px;\n              gap: 7px;\n\n              p {\n                text-align: center;\n              }\n\n              img {\n                cursor: pointer;\n              }\n            }\n          }\n\n          select {\n            background-color: #fcfcfd;\n            border: none;\n            outline: none;\n            width: 100%;\n            cursor: pointer;\n          }\n        }\n      }\n\n      .email-container {\n        align-self: start;\n        width: calc(50% - 15px);\n      }\n\n      .add-blog-btn {\n        align-self: end;\n        font-family: \"FiraGO\";\n        font-size: 0.9em;\n        width: calc(50% - 15px);\n        line-height: 20px;\n        color: #f8fafc;\n        padding: 15px 10px;\n        background-color: #e4e3eb;\n        border: none;\n        border-radius: 8px;\n        transition-duration: 0.5s;\n        cursor: pointer;\n        &:hover {\n          background-color: #5d37f3;\n        }\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _loginModal_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony import */ var _blogAdder_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);




function createHeader() {
  const login = JSON.parse(localStorage.getItem("login"));

  const header = document.createElement("div");
  header.setAttribute("id", "header-div");

  const content = document.createElement("div");
  content.classList.add("header-content");
  header.appendChild(content);

  const logo = new Image();
  logo.src = _src_assets_images_redberry_logo_png__WEBPACK_IMPORTED_MODULE_0__;
  content.appendChild(logo);

  const entryBtn = document.createElement("button");
  entryBtn.textContent = "შესვლა";
  entryBtn.classList.add("entry-button");
  content.appendChild(entryBtn);

  const adderBtn = document.createElement("button");
  adderBtn.textContent = "დაამატე ბლოგი";
  adderBtn.classList.add("blog-adder-button");
  content.appendChild(adderBtn);

  if (login) entryBtn.classList.add("hidden");
  if (!login) adderBtn.classList.add("hidden");

  entryBtn.addEventListener("click", _loginModal_create__WEBPACK_IMPORTED_MODULE_1__["default"]);

  adderBtn.addEventListener("click", _blogAdder_display__WEBPACK_IMPORTED_MODULE_2__["default"]);

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
/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(22);






let removeLoginModal;

function createLoginModal() {
  const body = document.querySelector("body");
  body.style.overflow = "hidden";

  const container = document.createElement("div");
  container.setAttribute("id", "modal-container");
  body.appendChild(container);

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  container.appendChild(modalContent);

  const xImg = new Image();
  xImg.classList.add("x-img");
  xImg.src = _src_assets_images_x_icon_svg__WEBPACK_IMPORTED_MODULE_0__;
  modalContent.appendChild(xImg);

  const inputContainer = document.createElement("div");
  inputContainer.classList.add("input-container");
  modalContent.appendChild(inputContainer);

  const text = document.createElement("h1");
  text.textContent = "შესვლა";
  inputContainer.appendChild(text);

  const label = document.createElement("label");
  label.textContent = "ელ-ფოსტა";
  label.setAttribute("for", "email");
  inputContainer.appendChild(label);

  const input = document.createElement("input");
  input.setAttribute("type", "email");
  input.setAttribute("id", "email");
  input.setAttribute("placeholder", "Example@redberry.ge");
  input.setAttribute("required", "");
  inputContainer.appendChild(input);
  input.focus();

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

  container.addEventListener("click", (e) => {
    if (e.target.id === "modal-container") removeLoginModal(e);
  });

  xImg.addEventListener("click", (e) => {
    removeLoginModal(e);
  });

  entryBtn.addEventListener("click", updateLoginModal);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      updateLoginModal();
    }
  });

  function updateLoginModal() {
    if ((0,_logic_loginUser_loginUser__WEBPACK_IMPORTED_MODULE_3__["default"])(input)) {
      (0,_logic_loginUser_loginUser__WEBPACK_IMPORTED_MODULE_3__["default"])(input).then((data) => {
        (0,_update__WEBPACK_IMPORTED_MODULE_4__["default"])(data, container);
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
    container.remove();
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
/* harmony import */ var _create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);


function updateLoginModalUI(data, div) {
  const container = div.querySelector(".input-container");
  const input = div.querySelector("input");
  const successContainer = div.querySelector(".success-container");
  const errorContainer = div.querySelector(".error-container");
  const entryBtn = div.querySelector(".entry-btn");
  const successBtn = div.querySelector(".success-btn");

  if (data) {
    container.classList.add("hidden");
    successContainer.classList.remove("hidden");
    entryBtn.classList.add("hidden");
    successBtn.classList.remove("hidden");
    errorContainer.classList.add("hidden");

    successBtn.addEventListener("click", function (e) {
      (0,_create__WEBPACK_IMPORTED_MODULE_0__.removeLoginModal)(e);
      document.querySelector(".entry-button").classList.add("hidden");
      document.querySelector(".blog-adder-button").classList.remove("hidden");
    });
  }

  if (!data) {
    errorContainer.classList.remove("hidden");
    input.style.borderColor = "#ff0000";
    input.style.marginBottom = "10px";

    input.addEventListener("focus", () => {
      inputEvents("#5d37f3");
    });
    input.addEventListener("input", () => {
      inputEvents("#5d37f3");
    });
    input.addEventListener("blur", () => {
      inputEvents("#000000");
    });

    function inputEvents(color) {
      input.style.borderColor = color;
      input.style.marginBottom = "20px";
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


function createMain() {
  const status = JSON.parse(localStorage.getItem("blog-adder-status"));

  const main = document.createElement("div");
  main.setAttribute("id", "main-div");
  if (status) main.classList.add("hidden");

  const info = document.createElement("div");
  info.classList.add("main-info");
  main.appendChild(info);

  const text = document.createElement("h1");
  text.textContent = "ბლოგი";
  info.appendChild(text);

  const logo = new Image();
  logo.src = _src_assets_images_blog_logo_png__WEBPACK_IMPORTED_MODULE_0__;
  info.appendChild(logo);

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
/* harmony import */ var _src_components_dom_main_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony import */ var _author_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _categories_create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);
/* harmony import */ var _date_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _description_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(41);
/* harmony import */ var _title_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45);
/* harmony import */ var _image_create__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47);
/* harmony import */ var _logic_blogAdder_validations_form_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51);
/* harmony import */ var _email_create__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(54);











function createBlogAdder() {
  const status = JSON.parse(localStorage.getItem("blog-adder-status"));

  const blogAdder = document.createElement("div");
  blogAdder.setAttribute("id", "blog-adder");

  if (!status) blogAdder.classList.add("hidden");

  const backArrow = new Image();
  backArrow.classList.add("back-arrow");
  backArrow.src = _src_assets_images_back_arrow_png__WEBPACK_IMPORTED_MODULE_0__;
  blogAdder.appendChild(backArrow);

  const content = document.createElement("div");
  content.classList.add("blog-adder-content");
  blogAdder.appendChild(content);

  const text = document.createElement("h1");
  text.textContent = "ბლოგის დამატება";
  content.appendChild(text);

  const form = document.createElement("form");
  form.classList.add("blog-form");
  form.setAttribute("id", "blog-form");
  content.appendChild(form);

  form.appendChild((0,_image_create__WEBPACK_IMPORTED_MODULE_7__["default"])());

  const title = document.createElement("div");
  title.classList.add("author-title-container");
  form.appendChild(title);
  title.appendChild((0,_author_create__WEBPACK_IMPORTED_MODULE_2__["default"])());
  title.appendChild((0,_title_create__WEBPACK_IMPORTED_MODULE_6__["default"])());

  form.appendChild((0,_description_create__WEBPACK_IMPORTED_MODULE_5__["default"])());

  const dateCategory = document.createElement("div");
  dateCategory.classList.add("date-category-container");
  form.appendChild(dateCategory);
  dateCategory.appendChild((0,_date_create__WEBPACK_IMPORTED_MODULE_4__["default"])());
  dateCategory.appendChild((0,_categories_create__WEBPACK_IMPORTED_MODULE_3__["default"])());

  form.appendChild((0,_email_create__WEBPACK_IMPORTED_MODULE_9__["default"])());

  const addBlogBtn = document.createElement("button");
  addBlogBtn.textContent = "გამოქვეყნება";
  addBlogBtn.classList.add("add-blog-btn");
  form.appendChild(addBlogBtn);

  backArrow.addEventListener("click", _src_components_dom_main_display_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

  // form.addEventListener("input", function () {
  //   console.log("ss");
  // });

  addBlogBtn.addEventListener("click", function (e) {
    e.preventDefault();
    (0,_logic_blogAdder_validations_form_form__WEBPACK_IMPORTED_MODULE_8__["default"])();
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
/* harmony export */   "default": () => (/* binding */ createAuthor),
/* harmony export */   input: () => (/* binding */ input),
/* harmony export */   validationArr: () => (/* binding */ validationArr)
/* harmony export */ });
/* harmony import */ var _logic_blogAdder_validations_author_author__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);



const validations = [
  "მინიმუმ 4 სიმბოლო",
  "მინიმუმ 2 სიტყვა",
  "მხოლოდ ქართული სიმბოლოები",
];
const validationArr = [];
let input;

function createAuthor() {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));

  const div = document.createElement("div");
  div.classList.add("container");

  const label = document.createElement("label");
  label.textContent = "ავტორი";
  label.setAttribute("for", "author-input");
  div.appendChild(label);

  const span = document.createElement("span");
  span.textContent = "*";
  label.appendChild(span);

  input = document.createElement("input");
  input.classList.add("author-input");
  input.setAttribute("id", "author-input");
  input.setAttribute("placeholder", "შეიყვანეთ ავტორი");
  div.appendChild(input);

  const texts = document.createElement("ul");
  texts.classList.add("validation-texts");
  div.appendChild(texts);

  validations.forEach((el) => {
    const container = document.createElement("div");
    container.classList.add("validation-container");
    texts.appendChild(container);
    validationArr.push(container);

    const validationBefore = document.createElement("span");
    validationBefore.classList.add("validation-before");
    container.appendChild(validationBefore);

    const validationText = document.createElement("li");
    validationText.textContent = el;
    container.appendChild(validationText);
  });

  if (blogInfo && blogInfo.author) {
    input.value = blogInfo.author;
    (0,_logic_blogAdder_validations_author_author__WEBPACK_IMPORTED_MODULE_0__["default"])(input, validationArr);
  }

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") e.preventDefault();
  });

  input.addEventListener("focus", function () {
    if (!this.value) this.style.border = "1px solid #5D37F3";
  });

  input.addEventListener("input", function () {
    if (this.value.charAt(0) === " ") {
      alert("Input should not start with a space");
      this.value = "";
      return;
    }
    (0,_logic_blogAdder_validations_author_author__WEBPACK_IMPORTED_MODULE_0__["default"])(this, validationArr);
  });

  input.addEventListener("blur", function () {
    if (this.value.length === 0) {
      this.style.border = "1px solid #e4e3eb";
      (0,_update__WEBPACK_IMPORTED_MODULE_1__["default"])("init", validationArr[0]);
      (0,_update__WEBPACK_IMPORTED_MODULE_1__["default"])("init", validationArr[1]);
      (0,_update__WEBPACK_IMPORTED_MODULE_1__["default"])("init", validationArr[2]);
    }
  });

  return div;
}




/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateAuthor)
/* harmony export */ });
/* harmony import */ var _fourLetters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _twoWords__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony import */ var _georgianAlph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var _dom_blogAdder_author_update__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);





function validateAuthor(input, arr) {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
  const value = input.value;

  if (value.length === 0) {
    (0,_dom_blogAdder_author_update__WEBPACK_IMPORTED_MODULE_3__["default"])(false, arr[0]);
    (0,_dom_blogAdder_author_update__WEBPACK_IMPORTED_MODULE_3__["default"])(false, arr[1]);
    (0,_dom_blogAdder_author_update__WEBPACK_IMPORTED_MODULE_3__["default"])(false, arr[2]);
    blogInfo.author = value;
    localStorage.setItem("blog-info", JSON.stringify(blogInfo));
    return;
  }

  (0,_dom_blogAdder_author_update__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_fourLetters__WEBPACK_IMPORTED_MODULE_0__["default"])(value), arr[0]);
  (0,_dom_blogAdder_author_update__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_twoWords__WEBPACK_IMPORTED_MODULE_1__["default"])(value), arr[1]);
  (0,_dom_blogAdder_author_update__WEBPACK_IMPORTED_MODULE_3__["default"])((0,_georgianAlph__WEBPACK_IMPORTED_MODULE_2__["default"])(value), arr[2]);

  blogInfo.author = value;
  localStorage.setItem("blog-info", JSON.stringify(blogInfo));

  if (
    (0,_fourLetters__WEBPACK_IMPORTED_MODULE_0__["default"])(value) &&
    (0,_twoWords__WEBPACK_IMPORTED_MODULE_1__["default"])(value) &&
    (0,_georgianAlph__WEBPACK_IMPORTED_MODULE_2__["default"])(value)
  ) {
    input.style.border = "1px solid #14D81C";
    return true;
  } else {
    input.style.border = "1px solid #EA1919";
    return false;
  }
}


/***/ }),
/* 31 */
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
/* 32 */
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
/* 33 */
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
/* 34 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateAuthor)
/* harmony export */ });
function updateAuthor(valid, div) {
  if (valid === "init") {
    div.querySelector("span").style.backgroundColor = "#85858d";
    div.querySelector("li").style.color = "#85858d";
    return;
  }

  if (valid) {
    div.querySelector("span").style.backgroundColor = "#14D81C";
    div.querySelector("li").style.color = "#14D81C";
  }

  if (!valid) {
    div.querySelector("span").style.backgroundColor = "#EA1919";
    div.querySelector("li").style.color = "#EA1919";
  }
}


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   container: () => (/* binding */ container),
/* harmony export */   "default": () => (/* binding */ createBlogCategories)
/* harmony export */ });
/* harmony import */ var _logic_categories_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);



let container;
function createBlogCategories() {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
  const body = document.querySelector("body");

  const div = document.createElement("div");
  div.classList.add("container");

  const label = document.createElement("label");
  label.textContent = "კატეგორია";
  div.appendChild(label);

  const span = document.createElement("span");
  span.textContent = "*";
  label.appendChild(span);

  container = document.createElement("div");
  container.classList.add("select-container");
  div.appendChild(container);

  const selected = document.createElement("div");
  selected.classList.add("selected-category", "hidden");
  container.appendChild(selected);

  const select = document.createElement("select");
  select.setAttribute("id", "blog-categories-select");
  container.appendChild(select);

  const placeholder = document.createElement("option");
  placeholder.textContent = "აირჩიეთ კატეგორია";
  placeholder.classList.add("placeholder-option");
  placeholder.setAttribute("value", "");
  placeholder.setAttribute("disabled", "");
  placeholder.setAttribute("selected", "");
  placeholder.setAttribute("hidden", "");
  select.appendChild(placeholder);

  (0,_logic_categories_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])("https://api.blog.redberryinternship.ge/api").then((data) => {
    data.data.forEach((cat) => {
      const option = document.createElement("option");
      option.textContent = cat.title;
      option.setAttribute("value", cat.id);
      select.appendChild(option);
    });

    const options = document.querySelectorAll("option");

    if (blogInfo && blogInfo.categories) {
      const categories = blogInfo.categories;
      (0,_update__WEBPACK_IMPORTED_MODULE_1__["default"])(
        select,
        container,
        selected,
        placeholder,
        options,
        categories
      );
    }
  });

  select.addEventListener("keydown", function (e) {
    e.preventDefault();
  });

  select.addEventListener("change", function () {
    const options = document.querySelectorAll("option");
    (0,_update__WEBPACK_IMPORTED_MODULE_1__["default"])(select, container, selected, placeholder, options, [
      +this.value,
    ]);
  });

  body.addEventListener("click", function (event) {
    if (event.target.classList.contains("add-blog-btn")) return;
    if (!event.target.closest(".select-container")) {
      const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
      if (blogInfo.categories.length < 1)
        container.style.border = "1px solid #e4e3eb";
    }
  });

  return div;
}




/***/ }),
/* 36 */
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
/* 37 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateCategories)
/* harmony export */ });
/* harmony import */ var _logic_categories_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _src_assets_images_white_remove_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);



const categoryArr = [];

function updateCategories(
  select,
  selectContainer,
  selected,
  placeholder,
  options,
  idArr
) {
  if (idArr.length >= 1) {
    placeholder.textContent = "";
    selected.classList.remove("hidden");
    select.value = "";
  }

  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
  const url = "https://api.blog.redberryinternship.ge/api";

  options.forEach((el) => {
    if (el.hasAttribute("disabled")) return;
    const valueNum = +el.getAttribute("value");

    if (idArr.includes(valueNum)) {
      categoryArr.push(valueNum);
      el.setAttribute("hidden", "");

      blogInfo.categories = categoryArr;
      localStorage.setItem("blog-info", JSON.stringify(blogInfo));
    }
  });

  (0,_logic_categories_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])(url).then((data) => {
    data.data.forEach((el) => {
      if (idArr.includes(+el.id)) {
        const container = document.createElement("div");
        container.classList.add("category-container", `category-${el.id}`);
        container.style.backgroundColor = el.background_color;
        selected.appendChild(container);

        const text = document.createElement("p");
        text.textContent = el.title;
        text.style.color = el.text_color;
        container.appendChild(text);

        const img = new Image();
        img.src = _src_assets_images_white_remove_png__WEBPACK_IMPORTED_MODULE_1__;
        container.appendChild(img);

        selectContainer.style.gridTemplateColumns = "auto minmax(30px, 1fr)";
        selectContainer.style.border = "1px solid #14D81C";

        if (categoryArr.length > 1) selected.style.overflowX = "scroll";

        img.addEventListener("click", function (event) {
          const parent = event.target.closest(".category-container");
          parent.remove();

          let index = parent.classList[1].indexOf("-");
          const catNum = +parent.classList[1].substring(index + 1);

          let arrIndex = categoryArr.indexOf(catNum);
          if (arrIndex !== -1) categoryArr.splice(arrIndex, 1);

          if (categoryArr.length < 1) {
            selectContainer.style.border = "1px solid #EA1919";
            selected.classList.add("hidden");
            placeholder.textContent = "აირჩიეთ კატეგორია";
            selectContainer.style.gridTemplateColumns = "auto";
          }

          if (categoryArr.length <= 1) selected.style.overflow = "auto";

          blogInfo.categories = categoryArr;
          localStorage.setItem("blog-info", JSON.stringify(blogInfo));

          options.forEach((el) => {
            if (el.hasAttribute("disabled")) return;
            if (+el.getAttribute("value") === catNum)
              el.removeAttribute("hidden");
          });
        });
      }
    });
  });
}


/***/ }),
/* 38 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59a39dbee31d837bc56b.png";

/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createDate),
/* harmony export */   input: () => (/* binding */ input)
/* harmony export */ });
/* harmony import */ var _logic_blogAdder_validations_date_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);


let input;
function createDate() {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));

  const div = document.createElement("div");
  div.classList.add("container");

  const label = document.createElement("label");
  label.textContent = "გამოქვეყნების თარიღი";
  label.setAttribute("for", "date-input");
  div.appendChild(label);

  const span = document.createElement("span");
  span.textContent = "*";
  label.appendChild(span);

  input = document.createElement("input");
  input.setAttribute("type", "date");
  input.setAttribute("id", "date-input");
  div.appendChild(input);

  if (blogInfo && blogInfo.date) {
    input.value = blogInfo.date;
    (0,_logic_blogAdder_validations_date_date__WEBPACK_IMPORTED_MODULE_0__["default"])(input);
  }

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") e.preventDefault();
  });

  input.addEventListener("focus", function () {
    if (!this.value) this.style.border = "1px solid #5D37F3";
  });

  input.addEventListener("change", function () {
    (0,_logic_blogAdder_validations_date_date__WEBPACK_IMPORTED_MODULE_0__["default"])(input);
  });

  input.addEventListener("blur", function () {
    if (!input.value) input.style.border = "1px solid #e4e3eb";
  });

  return div;
}




/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateDate)
/* harmony export */ });
function validateDate(input) {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
  const value = input.value;

  blogInfo.date = value;
  localStorage.setItem("blog-info", JSON.stringify(blogInfo));

  if (value) {
    input.style.border = "1px solid #14D81C";
    return true;
  } else {
    input.style.border = "1px solid #EA1919";
    return false;
  }
}


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   container: () => (/* binding */ container),
/* harmony export */   "default": () => (/* binding */ createDescription),
/* harmony export */   textarea: () => (/* binding */ textarea)
/* harmony export */ });
/* harmony import */ var _logic_blogAdder_validations_description_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _title_update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);



const validations = ["მინიმუმ 2 სიმბოლო"];
let container;
let textarea;

function createDescription() {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));

  const div = document.createElement("div");
  div.classList.add("container");

  const label = document.createElement("label");
  label.textContent = "აღწერა";
  label.setAttribute("for", "description-input");
  div.appendChild(label);

  const span = document.createElement("span");
  span.textContent = "*";
  label.appendChild(span);

  textarea = document.createElement("textarea");
  textarea.setAttribute("placeholder", "შეიყვანეთ აღწერა");
  textarea.setAttribute("rows", 6);
  textarea.setAttribute("spellcheck", "off");
  textarea.setAttribute("id", "description-input");
  textarea.style.resize = "none";

  div.appendChild(textarea);

  const texts = document.createElement("ul");
  texts.classList.add("validation-texts");
  div.appendChild(texts);

  validations.forEach((el) => {
    container = document.createElement("div");
    container.classList.add("validation-container");
    texts.appendChild(container);

    const before = document.createElement("span");
    before.classList.add("validation-before");
    container.appendChild(before);

    const text = document.createElement("li");
    text.textContent = el;
    container.appendChild(text);
  });

  if (blogInfo && blogInfo.description) {
    textarea.value = blogInfo.description;
    (0,_logic_blogAdder_validations_description_description__WEBPACK_IMPORTED_MODULE_0__["default"])(textarea, container);
  }

  textarea.addEventListener("keydown", function (e) {
    if (e.key === "Enter") e.preventDefault();
  });

  textarea.addEventListener("focus", function () {
    if (!this.value) this.style.border = "1px solid #5D37F3";
  });

  textarea.addEventListener("input", function () {
    if (this.value.charAt(0) === " ") {
      alert("Input should not start with a space");
      this.value = "";
      return;
    }
    (0,_logic_blogAdder_validations_description_description__WEBPACK_IMPORTED_MODULE_0__["default"])(this, container);
  });

  textarea.addEventListener("blur", function () {
    if (this.value.length === 0) {
      this.style.border = "1px solid #e4e3eb";
      (0,_title_update__WEBPACK_IMPORTED_MODULE_1__["default"])("init", container);
    }
  });

  return div;
}




/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateDescription)
/* harmony export */ });
/* harmony import */ var _title_twoLetters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _dom_blogAdder_title_update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);



function validateDescription(input, div) {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
  const value = input.value;

  (0,_dom_blogAdder_title_update__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_title_twoLetters__WEBPACK_IMPORTED_MODULE_0__["default"])(value), div);

  blogInfo.description = value;
  localStorage.setItem("blog-info", JSON.stringify(blogInfo));

  if ((0,_title_twoLetters__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    input.style.border = "1px solid #14D81C";
    return true;
  } else {
    input.style.border = "1px solid #EA1919";
    return false;
  }
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
/* harmony export */   "default": () => (/* binding */ updateTitle)
/* harmony export */ });
function updateTitle(valid, div) {
  if (valid === "init") {
    div.querySelector("span").style.backgroundColor = "#85858d";
    div.querySelector("li").style.color = "#85858d";
    return;
  }

  if (valid) {
    div.querySelector("span").style.backgroundColor = "#14D81C";
    div.querySelector("li").style.color = "#14D81C";
    return true;
  }

  if (!valid) {
    div.querySelector("span").style.backgroundColor = "#EA1919";
    div.querySelector("li").style.color = "#EA1919";
    return false;
  }
}


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   container: () => (/* binding */ container),
/* harmony export */   "default": () => (/* binding */ createTitle),
/* harmony export */   input: () => (/* binding */ input)
/* harmony export */ });
/* harmony import */ var _logic_blogAdder_validations_title_title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);



const validations = ["მინიმუმ 2 სიმბოლო"];
let container;
let input;

function createTitle() {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));

  const div = document.createElement("div");
  div.classList.add("container");

  const label = document.createElement("label");
  label.textContent = "სათაური";
  label.setAttribute("for", "title-input");
  div.appendChild(label);

  const span = document.createElement("span");
  span.textContent = "*";
  label.appendChild(span);

  input = document.createElement("input");
  input.classList.add("title-input");
  input.setAttribute("id", "title-input");
  input.setAttribute("placeholder", "შეიყვანეთ სათაური");
  div.appendChild(input);

  const texts = document.createElement("ul");
  texts.classList.add("validation-texts");
  div.appendChild(texts);

  validations.forEach((el) => {
    container = document.createElement("div");
    container.classList.add("validation-container");
    texts.appendChild(container);

    const before = document.createElement("span");
    before.classList.add("validation-before");
    container.appendChild(before);

    const text = document.createElement("li");
    text.textContent = el;
    container.appendChild(text);
  });

  if (blogInfo && blogInfo.title) {
    input.value = blogInfo.title;
    (0,_logic_blogAdder_validations_title_title__WEBPACK_IMPORTED_MODULE_0__["default"])(input, container);
  }

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") e.preventDefault();
  });

  input.addEventListener("focus", function () {
    if (!this.value) this.style.border = "1px solid #5D37F3";
  });

  input.addEventListener("input", function () {
    if (this.value.charAt(0) === " ") {
      alert("Input should not start with a space");
      this.value = "";
      return;
    }
    (0,_logic_blogAdder_validations_title_title__WEBPACK_IMPORTED_MODULE_0__["default"])(this, container);
  });

  input.addEventListener("blur", function () {
    if (this.value.length === 0) {
      this.style.border = "1px solid #e4e3eb";
      (0,_update__WEBPACK_IMPORTED_MODULE_1__["default"])("init", container);
    }
  });

  return div;
}




/***/ }),
/* 46 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateTitle)
/* harmony export */ });
/* harmony import */ var _twoLetters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _dom_blogAdder_title_update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);



function validateTitle(input, div) {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
  const value = input.value;

  (0,_dom_blogAdder_title_update__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_twoLetters__WEBPACK_IMPORTED_MODULE_0__["default"])(value), div);

  blogInfo.title = value;
  localStorage.setItem("blog-info", JSON.stringify(blogInfo));

  if ((0,_twoLetters__WEBPACK_IMPORTED_MODULE_0__["default"])(value)) {
    input.style.border = "1px solid #14D81C";
    return true;
  } else {
    input.style.border = "1px solid #EA1919";
    return false;
  }
}


/***/ }),
/* 47 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createImageUploader)
/* harmony export */ });
/* harmony import */ var _src_assets_images_folder_add_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _src_assets_images_remove_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);




function createImageUploader() {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));

  const label = document.createElement("label");
  label.setAttribute("for", "image-input");
  label.classList.add("img-uploader-container");

  const text = document.createElement("p");
  text.textContent = "ატვირთეთ ფოტო";
  label.appendChild(text);

  const uploader = document.createElement("div");
  uploader.setAttribute("id", "image-uploader");
  uploader.classList.add("image-uploader");
  label.appendChild(uploader);

  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("id", "image-input");
  input.setAttribute("accept", "image/*");
  input.setAttribute("hidden", "");
  uploader.appendChild(input);

  const img = new Image();
  img.classList.add("folder-adder-img");
  img.src = _src_assets_images_folder_add_png__WEBPACK_IMPORTED_MODULE_0__;
  uploader.appendChild(img);

  const texts = document.createElement("div");
  texts.classList.add("image-texts");
  uploader.appendChild(texts);

  const span = document.createElement("span");
  span.textContent = "ჩააგდეთ ფაილი აქ ან";
  texts.appendChild(span);

  const para = document.createElement("p");
  para.textContent = "აირჩიეთ ფაილი";
  texts.appendChild(para);

  const removeImg = new Image();
  removeImg.src = _src_assets_images_remove_png__WEBPACK_IMPORTED_MODULE_1__;
  removeImg.classList.add("remove-img", "hidden");
  texts.appendChild(removeImg);

  if (blogInfo && blogInfo.image) {
    (0,_update__WEBPACK_IMPORTED_MODULE_2__["default"])(
      input,
      blogInfo,
      uploader,
      texts,
      para,
      span,
      img,
      removeImg,
      input,
      true
    );
  }

  label.addEventListener("click", function (e) {
    if (e.target.classList.contains("remove-img")) e.preventDefault();
  });

  label.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  label.addEventListener("drop", function (e) {
    e.preventDefault();
    const files = e.dataTransfer.files;

    (0,_update__WEBPACK_IMPORTED_MODULE_2__["default"])(
      e.target,
      blogInfo,
      uploader,
      texts,
      para,
      span,
      img,
      removeImg,
      input,
      false,
      files
    );
  });

  input.addEventListener("change", function (e) {
    (0,_update__WEBPACK_IMPORTED_MODULE_2__["default"])(
      e.target,
      blogInfo,
      uploader,
      texts,
      para,
      span,
      img,
      removeImg,
      input,
      false
    );
  });

  removeImg.addEventListener("click", (e) => {
    (0,_update__WEBPACK_IMPORTED_MODULE_2__["default"])(
      e.target,
      blogInfo,
      uploader,
      texts,
      para,
      span,
      img,
      removeImg,
      input,
      false
    );
  });

  return label;
}


/***/ }),
/* 48 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de8e7a5c0281b0e87f8c.png";

/***/ }),
/* 49 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f463719ae11ed2ff4bba.png";

/***/ }),
/* 50 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateImageUploader)
/* harmony export */ });
function updateImageUploader(
  e,
  blogInfo,
  uploader,
  texts,
  label,
  span,
  img,
  removeImg,
  input,
  refreshPage,
  filez
) {
  if (refreshPage && e.id === "image-input") {
    image();
    label.textContent = blogInfo.image.name;

    const base64String = "your base64 string";
    const fileType = blogInfo.image.type;
    const fileName = blogInfo.image.name;
    const file = base64StringToFile(base64String, fileType, fileName);
    // console.log(file);
    return;
  }

  if (
    !e.classList.contains("remove-img") &&
    !refreshPage &&
    (e.id === "image-input" || e.closest("#image-uploader"))
  ) {
    if (!input.files[0] && e.id === "image-input") return;

    let files;
    if (input.files[0]) files = input.files[0];
    else files = filez[0];

    image();
    label.textContent = files.name;

    const blogInfo = JSON.parse(localStorage.getItem("blog-info"));

    getBase64(files)
      .then(function (base64) {
        blogInfo.image = {};
        blogInfo.image.base64 = base64;
        blogInfo.image.name = files.name;
        blogInfo.image.type = files.type;
        localStorage.setItem("blog-info", JSON.stringify(blogInfo));
      })
      .catch(function (error) {
        console.log("Failed to get base64 string: ", error);
      });

    return;
  }

  if (e.classList.contains("remove-img")) {
    noImage();

    const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
    blogInfo.image = null;
    localStorage.setItem("blog-info", JSON.stringify(blogInfo));
  }

  function base64StringToFile(base64String, fileType, fileName) {
    // Convert base64 string to byte array
    const byteCharacters = atob(base64String);
    const byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += 512) {
      const slice = byteCharacters.slice(offset, offset + 512);
      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    // Convert byte array to Blob
    const blob = new Blob(byteArrays, { type: fileType });

    // Convert Blob to File
    const file = new File([blob], fileName, { type: fileType });

    return file;
  }

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }

  function image() {
    uploader.style.padding = "20px";
    texts.style.justifyContent = "space-between";
    label.style.textDecoration = "none";
    label.style.fontWeight = "500";
    span.classList.add("hidden");
    img.classList.add("hidden");
    removeImg.classList.remove("hidden");
  }

  function noImage() {
    uploader.style.padding = "80px 100px";
    texts.style.justifyContent = "center";
    label.textContent = "აირჩიეთ ფაილი";
    label.style.textDecoration = "underline";
    label.style.fontWeight = "700";
    span.classList.remove("hidden");
    img.classList.remove("hidden");
    removeImg.classList.add("hidden");
    input.value = "";
  }
}


/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateForm)
/* harmony export */ });
/* harmony import */ var _image_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _author_author__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _title_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46);
/* harmony import */ var _description_description__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(42);
/* harmony import */ var _date_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40);
/* harmony import */ var _dom_blogAdder_author_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29);
/* harmony import */ var _dom_blogAdder_title_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45);
/* harmony import */ var _dom_blogAdder_description_create__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41);
/* harmony import */ var _dom_blogAdder_date_create__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39);
/* harmony import */ var _dom_blogAdder_categories_create__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(35);
/* harmony import */ var _blogs_send__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(53);













function validateForm() {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));

  if (!(0,_author_author__WEBPACK_IMPORTED_MODULE_1__["default"])(_dom_blogAdder_author_create__WEBPACK_IMPORTED_MODULE_5__.input, _dom_blogAdder_author_create__WEBPACK_IMPORTED_MODULE_5__.validationArr))
    _dom_blogAdder_author_create__WEBPACK_IMPORTED_MODULE_5__.input.style.border = "1px solid #EA1919";
  if (!(0,_title_title__WEBPACK_IMPORTED_MODULE_2__["default"])(_dom_blogAdder_title_create__WEBPACK_IMPORTED_MODULE_6__.input, _dom_blogAdder_title_create__WEBPACK_IMPORTED_MODULE_6__.container))
    _dom_blogAdder_title_create__WEBPACK_IMPORTED_MODULE_6__.input.style.border = "1px solid #EA1919";
  if (!(0,_description_description__WEBPACK_IMPORTED_MODULE_3__["default"])(_dom_blogAdder_description_create__WEBPACK_IMPORTED_MODULE_7__.textarea, _dom_blogAdder_description_create__WEBPACK_IMPORTED_MODULE_7__.container))
    _dom_blogAdder_description_create__WEBPACK_IMPORTED_MODULE_7__.textarea.style.border = "1px solid #EA1919";
  if (!(0,_date_date__WEBPACK_IMPORTED_MODULE_4__["default"])(_dom_blogAdder_date_create__WEBPACK_IMPORTED_MODULE_8__.input)) _dom_blogAdder_date_create__WEBPACK_IMPORTED_MODULE_8__.input.style.border = "1px solid #EA1919";
  if (blogInfo.categories.length < 1)
    _dom_blogAdder_categories_create__WEBPACK_IMPORTED_MODULE_9__.container.style.border = "1px solid #EA1919";

  if (
    (0,_image_image__WEBPACK_IMPORTED_MODULE_0__["default"])() &&
    (0,_author_author__WEBPACK_IMPORTED_MODULE_1__["default"])(_dom_blogAdder_author_create__WEBPACK_IMPORTED_MODULE_5__.input, _dom_blogAdder_author_create__WEBPACK_IMPORTED_MODULE_5__.validationArr) &&
    (0,_title_title__WEBPACK_IMPORTED_MODULE_2__["default"])(_dom_blogAdder_title_create__WEBPACK_IMPORTED_MODULE_6__.input, _dom_blogAdder_title_create__WEBPACK_IMPORTED_MODULE_6__.container) &&
    (0,_description_description__WEBPACK_IMPORTED_MODULE_3__["default"])(_dom_blogAdder_description_create__WEBPACK_IMPORTED_MODULE_7__.textarea, _dom_blogAdder_description_create__WEBPACK_IMPORTED_MODULE_7__.container) &&
    (0,_date_date__WEBPACK_IMPORTED_MODULE_4__["default"])(_dom_blogAdder_date_create__WEBPACK_IMPORTED_MODULE_8__.input) &&
    blogInfo.categories.length > 0
  )
    (0,_blogs_send__WEBPACK_IMPORTED_MODULE_10__["default"])();
}


/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateImg)
/* harmony export */ });
function validateImg() {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));

  if (blogInfo.image) return true;

  if (!blogInfo.image) {
    alert("Please upload an image");
    return false;
  }
}


/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sendBlog)
/* harmony export */ });
function sendBlog() {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
  console.log(blogInfo);
}


/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createEmail)
/* harmony export */ });
/* harmony import */ var _logic_blogAdder_validations_email_email__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);


function createEmail() {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));

  const div = document.createElement("div");
  div.classList.add("container", "email-container");

  const label = document.createElement("label");
  label.textContent = "ელ-ფოსტა";
  label.setAttribute("for", "email-input");
  div.appendChild(label);

  const input = document.createElement("input");
  input.setAttribute("placeholder", "Example@redberry.ge");
  input.setAttribute("type", "email");
  input.setAttribute("id", "email-input");
  div.appendChild(input);

  if (blogInfo && blogInfo.email) {
    input.value = blogInfo.email;
    if ((0,_logic_blogAdder_validations_email_email__WEBPACK_IMPORTED_MODULE_0__["default"])(input)) input.style.border = "1px solid #14D81C";
    if (!(0,_logic_blogAdder_validations_email_email__WEBPACK_IMPORTED_MODULE_0__["default"])(input)) input.style.border = "1px solid #EA1919";
  }

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") e.preventDefault();
  });

  input.addEventListener("focus", function () {
    if (!this.value) this.style.border = "1px solid #5D37F3";
  });

  input.addEventListener("input", function () {
    if ((0,_logic_blogAdder_validations_email_email__WEBPACK_IMPORTED_MODULE_0__["default"])(this)) this.style.border = "1px solid #14D81C";
    if (!(0,_logic_blogAdder_validations_email_email__WEBPACK_IMPORTED_MODULE_0__["default"])(this)) this.style.border = "1px solid #EA1919";

    blogInfo.email = this.value;
    localStorage.setItem("blog-info", JSON.stringify(blogInfo));
  });

  input.addEventListener("blur", function () {
    if (!input.value) this.style.border = "1px solid  #e4e3eb";
  });

  return div;
}


/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateEmail)
/* harmony export */ });
function validateEmail(input) {
  const regex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (regex.test(input.value) && input.value.endsWith("@redberry.ge")) {
    return true;
  } else {
    return false;
  }
}


/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createCategories)
/* harmony export */ });
function createCategories(data) {
  const content = document.querySelector("#main-div");

  const categories = document.createElement("div");
  categories.classList.add("categories-container");
  content.appendChild(categories);

  data.data.forEach((el) => {
    const category = document.createElement("div");
    category.classList.add("category", `category-${el.id}`);
    category.style.backgroundColor = el.background_color;
    categories.appendChild(category);

    const text = document.createElement("p");
    text.textContent = el.title;
    text.style.color = el.text_color;
    category.appendChild(text);
  });
}


/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fetchBlogs)
/* harmony export */ });
async function fetchBlogs(url, token) {
  const response = await fetch(`${url}/blogs`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error("HTTP error " + response.status);
  }
  const data = await response.json();
  return data;
}


/***/ }),
/* 58 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBlogs)
/* harmony export */ });
/* harmony import */ var _src_assets_images_expand_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);


function createBlogs(data) {
  //   console.log(data);
  const main = document.querySelector("#main-div");

  const container = document.createElement("div");
  container.classList.add("blogs-container");
  main.appendChild(container);

  data.data.forEach((info) => {
    const blog = document.createElement("div");
    blog.classList.add("blog-container");
    container.appendChild(blog);

    const image = new Image();
    image.src = info.image;
    blog.appendChild(image);

    const content = document.createElement("div");
    content.classList.add("blog-content");
    blog.appendChild(content);

    const author = document.createElement("h2");
    author.textContent = info.author;
    content.appendChild(author);

    const date = document.createElement("p");
    date.textContent = info.publish_date;
    content.appendChild(date);

    const title = document.createElement("h1");
    title.textContent = info.title;
    content.appendChild(title);

    const categories = document.createElement("div");
    categories.classList.add("main-categories");
    content.appendChild(categories);

    info.categories.forEach((el) => {
      const category = document.createElement("div");
      category.classList.add("main-category", `main-category-${el.id}`);
      category.textContent = el.title;
      category.style.backgroundColor = el.background_color;
      category.style.color = el.text_color;
      categories.appendChild(category);
    });

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = info.description;
    content.appendChild(description);

    const expand = document.createElement("div");
    expand.classList.add("expand-blog");
    content.appendChild(expand);

    const text = document.createElement("p");
    text.textContent = "სრულად ნახვა";
    expand.appendChild(text);

    const img = new Image();
    img.src = _src_assets_images_expand_png__WEBPACK_IMPORTED_MODULE_0__;
    expand.appendChild(img);
  });

  return container;
}


/***/ }),
/* 59 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83ba954f3f8255732713.png";

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
/* harmony import */ var _components_dom_header_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _components_dom_main_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _components_dom_blogAdder_create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26);
/* harmony import */ var _components_logic_categories_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
/* harmony import */ var _components_dom_main_categories_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56);
/* harmony import */ var _components_logic_blogs_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57);
/* harmony import */ var _components_dom_main_blogs_create__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(58);









const body = document.querySelector("body");
const url = "https://api.blog.redberryinternship.ge/api";
const token =
  "fc9a807608d006f9d7604bc78bf62b027a2247c0c232dc217a6e1d5476d5271a";

const login = JSON.parse(localStorage.getItem("login"));
if (!login) localStorage.setItem("login", JSON.stringify(false));

const status = JSON.parse(localStorage.getItem("blog-adder-status"));
if (!status) localStorage.setItem("blog-adder-status", JSON.stringify(false));

const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
if (!blogInfo) localStorage.setItem("blog-info", JSON.stringify({}));

body.appendChild((0,_components_dom_header_create__WEBPACK_IMPORTED_MODULE_1__["default"])());
body.appendChild((0,_components_dom_main_create__WEBPACK_IMPORTED_MODULE_2__["default"])());
body.appendChild((0,_components_dom_blogAdder_create__WEBPACK_IMPORTED_MODULE_3__["default"])());

(0,_components_logic_categories_fetch__WEBPACK_IMPORTED_MODULE_4__["default"])(url).then((data) => {
  (0,_components_dom_main_categories_create__WEBPACK_IMPORTED_MODULE_5__["default"])(data);

  setTimeout(() => {
    (0,_components_logic_blogs_fetch__WEBPACK_IMPORTED_MODULE_6__["default"])(url, token).then((data) => {
      (0,_components_dom_main_blogs_create__WEBPACK_IMPORTED_MODULE_7__["default"])(data);
    });
  }, 1000);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBNEk7QUFDNUk7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw0SEFBTzs7OztBQUlzRjtBQUM5RyxPQUFPLGlFQUFlLDRIQUFPLElBQUksNEhBQU8sVUFBVSw0SEFBTyxtQkFBbUIsRUFBQzs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ25GYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDNURhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLGlFQUE4RDtBQUMxRyw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLDBPQUEwTyxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sT0FBTyxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxRQUFRLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFB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Qiw0RUFBZTs7QUFFaEMsOEVBQWU7QUFDZixFQUFFLGtGQUFnQjs7QUFFbEI7QUFDQSxJQUFJLHlFQUFVO0FBQ2QsTUFBTSw2RUFBVztBQUNqQixLQUFLO0FBQ0wsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2luZGV4LnNjc3M/NzIyMyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvaW5kZXguc2NzcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2RvbS9oZWFkZXIvY3JlYXRlLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vaGVhZGVyL2xvZ2luTW9kYWwvY3JlYXRlLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9sb2dpYy9sb2dpblVzZXIvbG9naW5Vc2VyLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9sb2dpYy9sb2dpblVzZXIvdmFsaWRhdGVFbWFpbC5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvbG9naW5Vc2VyL2NoZWNrRW1haWwuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2RvbS9oZWFkZXIvbG9naW5Nb2RhbC91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2RvbS9ibG9nQWRkZXIvZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL21haW4vY3JlYXRlLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vYmxvZ0FkZGVyL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL21haW4vZGlzcGxheS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2Jsb2dBZGRlci9hdXRob3IvY3JlYXRlLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9sb2dpYy9ibG9nQWRkZXIvdmFsaWRhdGlvbnMvYXV0aG9yL2F1dGhvci5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRpb25zL2F1dGhvci9mb3VyTGV0dGVycy5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRpb25zL2F1dGhvci90d29Xb3Jkcy5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRpb25zL2F1dGhvci9nZW9yZ2lhbkFscGguanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2RvbS9ibG9nQWRkZXIvYXV0aG9yL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2Jsb2dBZGRlci9jYXRlZ29yaWVzL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvY2F0ZWdvcmllcy9mZXRjaC5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2Jsb2dBZGRlci9jYXRlZ29yaWVzL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2Jsb2dBZGRlci9kYXRlL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRpb25zL2RhdGUvZGF0ZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2Jsb2dBZGRlci9kZXNjcmlwdGlvbi9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2xvZ2ljL2Jsb2dBZGRlci92YWxpZGF0aW9ucy9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRpb25zL3RpdGxlL3R3b0xldHRlcnMuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2RvbS9ibG9nQWRkZXIvdGl0bGUvdXBkYXRlLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vYmxvZ0FkZGVyL3RpdGxlL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRpb25zL3RpdGxlL3RpdGxlLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vYmxvZ0FkZGVyL2ltYWdlL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2Jsb2dBZGRlci9pbWFnZS91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2xvZ2ljL2Jsb2dBZGRlci92YWxpZGF0aW9ucy9mb3JtL2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2xvZ2ljL2Jsb2dBZGRlci92YWxpZGF0aW9ucy9pbWFnZS9pbWFnZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvYmxvZ3Mvc2VuZC5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2Jsb2dBZGRlci9lbWFpbC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2xvZ2ljL2Jsb2dBZGRlci92YWxpZGF0aW9ucy9lbWFpbC9lbWFpbC5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL21haW4vY2F0ZWdvcmllcy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2xvZ2ljL2Jsb2dzL2ZldGNoLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vbWFpbi9ibG9ncy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIvc3JjL2Fzc2V0cy9mb250cy9GaXJhR08vRmlyYUdPLVJlZ3VsYXIub3RmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAjaGVhZGVyLWRpdiB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbn1cbiNoZWFkZXItZGl2IC5oZWFkZXItY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjRweCAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcbn1cbiNoZWFkZXItZGl2IC5oZWFkZXItY29udGVudCBidXR0b24ge1xuICBmb250LWZhbWlseTogXCJGaXJhR09cIjtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjZjhmYWZjO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZDM3ZjM7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuI2hlYWRlci1kaXYgLmhlYWRlci1jb250ZW50IGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI21haW4tZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA3MHB4O1xuICBmb250LWZhbWlseTogXCJGaXJhR09cIjtcbn1cbiNtYWluLWRpdiAubWFpbi1pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmMWY1ZjksICNlMmU4ZjApO1xuICBwYWRkaW5nOiA3MHB4IDkwcHggMHB4IDEyMHB4O1xufVxuI21haW4tZGl2IC5tYWluLWluZm8gaDEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiA0LjhlbTtcbiAgY29sb3I6ICMxYTFhMWY7XG59XG4jbWFpbi1kaXYgLmNhdGVnb3JpZXMtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMzBweCAzMDBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgbWlubWF4KDEwMHB4LCAxZnIpKTtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xuICBncmlkLWdhcDogMTBweDtcbn1cbiNtYWluLWRpdiAuY2F0ZWdvcmllcy1jb250YWluZXIgLmNhdGVnb3J5IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG4jbWFpbi1kaXYgLmNhdGVnb3JpZXMtY29udGFpbmVyIC5jYXRlZ29yeTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgc2NhbGU6IDEuMDU7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG59XG4jbWFpbi1kaXYgLmNhdGVnb3JpZXMtY29udGFpbmVyIC5jYXRlZ29yeSBwIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlyYUdPXCI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuI21haW4tZGl2IC5jYXRlZ29yaWVzLWNvbnRhaW5lciAuY2F0ZWdvcnkgcDpob3ZlciB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuI21haW4tZGl2IC5ibG9ncy1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBhdXRvKTtcbiAgY29sdW1uLWdhcDogMzJweDtcbiAgcm93LWdhcDogNTZweDtcbn1cbiNtYWluLWRpdiAuYmxvZ3MtY29udGFpbmVyIC5ibG9nLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA0MDhweDtcbn1cbiNtYWluLWRpdiAuYmxvZ3MtY29udGFpbmVyIC5ibG9nLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMjhweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbiNtYWluLWRpdiAuYmxvZ3MtY29udGFpbmVyIC5ibG9nLWNvbnRhaW5lciAuYmxvZy1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgZ2FwOiAxNnB4O1xufVxuI21haW4tZGl2IC5ibG9ncy1jb250YWluZXIgLmJsb2ctY29udGFpbmVyIC5ibG9nLWNvbnRlbnQgaDIge1xuICBjb2xvcjogIzFhMWExZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbiNtYWluLWRpdiAuYmxvZ3MtY29udGFpbmVyIC5ibG9nLWNvbnRhaW5lciAuYmxvZy1jb250ZW50IHAge1xuICBjb2xvcjogIzg1ODU4ZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuI21haW4tZGl2IC5ibG9ncy1jb250YWluZXIgLmJsb2ctY29udGFpbmVyIC5ibG9nLWNvbnRlbnQgaDEge1xuICBjb2xvcjogIzFhMWExZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cbiNtYWluLWRpdiAuYmxvZ3MtY29udGFpbmVyIC5ibG9nLWNvbnRhaW5lciAuYmxvZy1jb250ZW50IC5tYWluLWNhdGVnb3JpZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE2cHg7XG59XG4jbWFpbi1kaXYgLmJsb2dzLWNvbnRhaW5lciAuYmxvZy1jb250YWluZXIgLmJsb2ctY29udGVudCAubWFpbi1jYXRlZ29yaWVzIC5tYWluLWNhdGVnb3J5IHtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG59XG4jbWFpbi1kaXYgLmJsb2dzLWNvbnRhaW5lciAuYmxvZy1jb250YWluZXIgLmJsb2ctY29udGVudCAuZGVzY3JpcHRpb24ge1xuICBjb2xvcjogIzQwNDA0OTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuI21haW4tZGl2IC5ibG9ncy1jb250YWluZXIgLmJsb2ctY29udGFpbmVyIC5ibG9nLWNvbnRlbnQgLmV4cGFuZC1ibG9nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI21haW4tZGl2IC5ibG9ncy1jb250YWluZXIgLmJsb2ctY29udGFpbmVyIC5ibG9nLWNvbnRlbnQgLmV4cGFuZC1ibG9nIHAge1xuICBjb2xvcjogIzVkMzdmMztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbiNtYWluLWRpdiAuYmxvZ3MtY29udGFpbmVyIC5ibG9nLWNvbnRhaW5lciAuYmxvZy1jb250ZW50IC5leHBhbmQtYmxvZyBpbWcge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiBhdXRvO1xufVxuXG4jbW9kYWwtY29udGFpbmVyIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlyYUdPXCI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuI21vZGFsLWNvbnRhaW5lciAubW9kYWwtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XG4gIHBhZGRpbmc6IDIwcHggMzBweCAzNXB4IDMwcHg7XG4gIHdpZHRoOiA0ODBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuI21vZGFsLWNvbnRhaW5lciAubW9kYWwtY29udGVudCAueC1pbWcge1xuICBhbGlnbi1zZWxmOiBlbmQ7XG4gIGhlaWdodDogMTJweDtcbiAgb3BhY2l0eTogMC42O1xufVxuI21vZGFsLWNvbnRhaW5lciAubW9kYWwtY29udGVudCAueC1pbWc6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHNjYWxlOiAxLjE7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG59XG4jbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250ZW50IC5pbnB1dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuI21vZGFsLWNvbnRhaW5lciAubW9kYWwtY29udGVudCAuaW5wdXQtY29udGFpbmVyIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbn1cbiNtb2RhbC1jb250YWluZXIgLm1vZGFsLWNvbnRlbnQgLmlucHV0LWNvbnRhaW5lciBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiA3cHg7XG59XG4jbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250ZW50IC5pbnB1dC1jb250YWluZXIgaW5wdXQge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwMDAwMDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmZjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbiNtb2RhbC1jb250YWluZXIgLm1vZGFsLWNvbnRlbnQgLmlucHV0LWNvbnRhaW5lciBpbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzVkMzdmMztcbn1cbiNtb2RhbC1jb250YWluZXIgLm1vZGFsLWNvbnRlbnQgLmVycm9yLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbiNtb2RhbC1jb250YWluZXIgLm1vZGFsLWNvbnRlbnQgLmVycm9yLWNvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgY29sb3I6ICNmZjAwMDA7XG59XG4jbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250ZW50IC5zdWNjZXNzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbiNtb2RhbC1jb250YWluZXIgLm1vZGFsLWNvbnRlbnQgLnN1Y2Nlc3MtY29udGFpbmVyIGgxIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgY29sb3I6ICMxYTFhMWY7XG59XG4jbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250ZW50IGJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IDAuOWVtO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZDM3ZjM7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG59XG4jbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250ZW50IGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2Jsb2ctYWRkZXIge1xuICBmb250LWZhbWlseTogXCJGaXJhR09cIjtcbiAgcGFkZGluZzogNTBweCA3MHB4IDI1MHB4IDcwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTRlM2ViO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jYmxvZy1hZGRlciAuYmFjay1hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbiNibG9nLWFkZGVyIC5iYWNrLWFycm93OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCB7XG4gIHBhZGRpbmc6IDAgNTBweDtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgaDEge1xuICBmb250LXNpemU6IDIuM2VtO1xuICBjb2xvcjogIzFhMWExZjtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDUwcHg7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmltZy11cGxvYWRlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEycHg7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmltZy11cGxvYWRlci1jb250YWluZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmltZy11cGxvYWRlci1jb250YWluZXIgLmltYWdlLXVwbG9hZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTdlYjtcbiAgYm9yZGVyOiAxLjVweCBkYXNoZWQgIzg1ODU4ZDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogODBweCAxMDBweDtcbiAgZ2FwOiAzMHB4O1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5pbWctdXBsb2FkZXItY29udGFpbmVyIC5pbWFnZS11cGxvYWRlciBpbWcge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmltZy11cGxvYWRlci1jb250YWluZXIgLmltYWdlLXVwbG9hZGVyIC5pbWFnZS10ZXh0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDVweDtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuaW1nLXVwbG9hZGVyLWNvbnRhaW5lciAuaW1hZ2UtdXBsb2FkZXIgLmltYWdlLXRleHRzIHAge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5pbWctdXBsb2FkZXItY29udGFpbmVyIC5pbWFnZS11cGxvYWRlciAuaW1hZ2UtdGV4dHMgaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5hdXRob3ItdGl0bGUtY29udGFpbmVyLFxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5kYXRlLWNhdGVnb3J5LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAzMHB4O1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5jb250YWluZXIge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmNvbnRhaW5lciBsYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNXB4O1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogIzFhMWExZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuY29udGFpbmVyIGlucHV0LFxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5jb250YWluZXIgdGV4dGFyZWEsXG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmNvbnRhaW5lciAuc2VsZWN0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNGUzZWI7XG4gIGNvbG9yOiAjODU4NThkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZkO1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5jb250YWluZXIgLnZhbGlkYXRpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmNvbnRhaW5lciAudmFsaWRhdGlvbi1iZWZvcmUge1xuICB3aWR0aDogMC41ZW07XG4gIGhlaWdodDogMC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NTg1OGQ7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmNvbnRhaW5lciBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgY29sb3I6ICM4NTg1OGQ7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmNvbnRhaW5lciAuc2VsZWN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuY29udGFpbmVyIC5zZWxlY3QtY29udGFpbmVyIC5zZWxlY3RlZC1jYXRlZ29yeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNXB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmNvbnRhaW5lciAuc2VsZWN0LWNvbnRhaW5lciAuc2VsZWN0ZWQtY2F0ZWdvcnkgLmNhdGVnb3J5LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZ2FwOiA3cHg7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmNvbnRhaW5lciAuc2VsZWN0LWNvbnRhaW5lciAuc2VsZWN0ZWQtY2F0ZWdvcnkgLmNhdGVnb3J5LWNvbnRhaW5lciBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5jb250YWluZXIgLnNlbGVjdC1jb250YWluZXIgLnNlbGVjdGVkLWNhdGVnb3J5IC5jYXRlZ29yeS1jb250YWluZXIgaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5jb250YWluZXIgLnNlbGVjdC1jb250YWluZXIgc2VsZWN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmZDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5lbWFpbC1jb250YWluZXIge1xuICBhbGlnbi1zZWxmOiBzdGFydDtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gMTVweCk7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmFkZC1ibG9nLWJ0biB7XG4gIGFsaWduLXNlbGY6IGVuZDtcbiAgZm9udC1mYW1pbHk6IFwiRmlyYUdPXCI7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDE1cHgpO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICNmOGZhZmM7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTNlYjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuYWRkLWJsb2ctYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkMzdmMztcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpcmFHT1wiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9pbmRleC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9sb2dpbk1vZGFsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvYmxvZ0FkZGVyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBQTtFQUNBLE1BQUE7QUNDRjtBRENFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDQ0o7QURDSTtFQUNFLHFCQUFBO0VBQ0Es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QSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBSG1PVjtBR2hPUTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUhrT1Y7QUcvTlE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FIaU9WO0FHOU5RO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FIZ09WO0FHN05RO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0FIK05WO0FHN05VO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUgrTlo7QUc3Tlk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0FIK05kO0FHN05jO0VBQ0Usa0JBQUE7QUgrTmhCO0FHNU5jO0VBQ0UsZUFBQTtBSDhOaEI7QUd6TlU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUgyTlo7QUd0Tk07RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0FId05SO0FHck5NO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUh1TlI7QUd0TlE7RUFDRSx5QkFBQTtBSHdOVjs7QUF0WUE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0FBeVlGO0FBcFlBO0VBQ0UsU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQXNZRjs7QUFuWUE7RUFDRSx3QkFBQTtBQXNZRjs7QUFuWUE7RUFDRSx5QkFiVztFQWNYLGlCQUFBO0FBc1lGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNoZWFkZXItZGl2IHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuXFxuICAuaGVhZGVyLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDI0cHggMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgZm9udC1mYW1pbHk6IFxcXCJGaXJhR09cXFwiO1xcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgICAgY29sb3I6ICNmOGZhZmM7XFxuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZDM3ZjM7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCJAdXNlIFxcXCIvc3JjL3N0eWxlcy9oZWFkZXIuc2Nzc1xcXCI7XFxuQHVzZSBcXFwiL3NyYy9zdHlsZXMvbWFpbi5zY3NzXFxcIjtcXG5AdXNlIFxcXCIvc3JjL3N0eWxlcy9sb2dpbk1vZGFsLnNjc3NcXFwiO1xcbkB1c2UgXFxcIi9zcmMvc3R5bGVzL2Jsb2dBZGRlci5zY3NzXFxcIjtcXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRmlyYUdPXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvc3JjL2Fzc2V0cy9mb250cy9GaXJhR08vRmlyYUdPLVJlZ3VsYXIub3RmXFxcIik7XFxufVxcblxcbiRib2R5LWNvbG9yOiAjZjFmNWY5O1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRib2R5LWNvbG9yO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblwiLFwiI21haW4tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA3MHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGaXJhR09cXFwiO1xcblxcbiAgLm1haW4taW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZjFmNWY5LCAjZTJlOGYwKTtcXG4gICAgcGFkZGluZzogNzBweCA5MHB4IDBweCAxMjBweDtcXG5cXG4gICAgaDEge1xcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAgIGZvbnQtc2l6ZTogNC44ZW07XFxuICAgICAgY29sb3I6ICMxYTFhMWY7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5jYXRlZ29yaWVzLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDMwcHggMzAwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIG1pbm1heCgxMDBweCwgMWZyKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ3JpZC1nYXA6IDEwcHg7XFxuXFxuICAgIC5jYXRlZ29yeSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIHBhZGRpbmc6IDRweCA4cHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHNjYWxlOiAxLjA1O1xcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gICAgICB9XFxuXFxuICAgICAgcCB7XFxuICAgICAgICBmb250LWZhbWlseTogXFxcIkZpcmFHT1xcXCI7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5ibG9ncy1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBhdXRvKTtcXG4gICAgY29sdW1uLWdhcDogMzJweDtcXG4gICAgcm93LWdhcDogNTZweDtcXG5cXG4gICAgLmJsb2ctY29udGFpbmVyIHtcXG4gICAgICB3aWR0aDogNDA4cHg7XFxuXFxuICAgICAgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAzMjhweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgICAgfVxcblxcbiAgICAgIC5ibG9nLWNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgICAgICAgZ2FwOiAxNnB4O1xcblxcbiAgICAgICAgaDIge1xcbiAgICAgICAgICBjb2xvcjogIzFhMWExZjtcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHAge1xcbiAgICAgICAgICBjb2xvcjogIzg1ODU4ZDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaDEge1xcbiAgICAgICAgICBjb2xvcjogIzFhMWExZjtcXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tYWluLWNhdGVnb3JpZXMge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBnYXA6IDE2cHg7XFxuXFxuICAgICAgICAgIC5tYWluLWNhdGVnb3J5IHtcXG4gICAgICAgICAgICBwYWRkaW5nOiA2cHggMTBweDtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XFxuICAgICAgICAgIGNvbG9yOiAjNDA0MDQ5O1xcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZXhwYW5kLWJsb2cge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgICAgIHAge1xcbiAgICAgICAgICAgIGNvbG9yOiAjNWQzN2YzO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiLFwiI21vZGFsLWNvbnRhaW5lciB7XFxuICBmb250LWZhbWlseTogXFxcIkZpcmFHT1xcXCI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAubW9kYWwtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxuICAgIHBhZGRpbmc6IDIwcHggMzBweCAzNXB4IDMwcHg7XFxuICAgIHdpZHRoOiA0ODBweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcblxcbiAgICAueC1pbWcge1xcbiAgICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgb3BhY2l0eTogMC42O1xcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgc2NhbGU6IDEuMTtcXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5pbnB1dC1jb250YWluZXIge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG4gICAgICBoMSB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XFxuICAgICAgfVxcblxcbiAgICAgIGxhYmVsIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XFxuICAgICAgfVxcblxcbiAgICAgIGlucHV0IHtcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7XFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmZjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG4gICAgICAgICY6Zm9jdXMge1xcbiAgICAgICAgICBib3JkZXItY29sb3I6ICM1ZDM3ZjM7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5lcnJvci1jb250YWluZXIge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBnYXA6IDE1cHg7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcXG5cXG4gICAgICBwIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XFxuICAgICAgICBjb2xvcjogI2ZmMDAwMDtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLnN1Y2Nlc3MtY29udGFpbmVyIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICBnYXA6IDE1cHg7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG5cXG4gICAgICBoMSB7XFxuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICAgICAgY29sb3I6ICMxYTFhMWY7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgICAgZm9udC1zaXplOiAwLjllbTtcXG4gICAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQzN2YzO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgICBjb2xvcjogI2ZmZmZmZjtcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiLFwiI2Jsb2ctYWRkZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGaXJhR09cXFwiO1xcbiAgcGFkZGluZzogNTBweCA3MHB4IDI1MHB4IDcwcHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U0ZTNlYjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXG4gIC5iYWNrLWFycm93IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAmOmhvdmVyIHtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5ibG9nLWFkZGVyLWNvbnRlbnQge1xcbiAgICAvLyBwYWRkaW5nOiAwcHggNTc1cHg7XFxuICAgIHBhZGRpbmc6IDAgNTBweDtcXG5cXG4gICAgaDEge1xcbiAgICAgIGZvbnQtc2l6ZTogMi4zZW07XFxuICAgICAgY29sb3I6ICMxYTFhMWY7XFxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xcbiAgICB9XFxuXFxuICAgIC5ibG9nLWZvcm0ge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBnYXA6IDUwcHg7XFxuXFxuICAgICAgLmltZy11cGxvYWRlci1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDEycHg7XFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmltYWdlLXVwbG9hZGVyIHtcXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTdlYjtcXG4gICAgICAgICAgYm9yZGVyOiAxLjVweCBkYXNoZWQgIzg1ODU4ZDtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgcGFkZGluZzogODBweCAxMDBweDtcXG4gICAgICAgICAgZ2FwOiAzMHB4O1xcblxcbiAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgfVxcblxcbiAgICAgICAgICAuaW1hZ2UtdGV4dHMge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgZ2FwOiA1cHg7XFxuXFxuICAgICAgICAgICAgcCB7XFxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIC5hdXRob3ItdGl0bGUtY29udGFpbmVyLFxcbiAgICAgIC5kYXRlLWNhdGVnb3J5LWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgZ2FwOiAzMHB4O1xcbiAgICAgIH1cXG5cXG4gICAgICAuY29udGFpbmVyIHtcXG4gICAgICAgIGZsZXg6IDE7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgICAgICBsYWJlbCB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGdhcDogNXB4O1xcbiAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgICAgICAgICBjb2xvcjogIzFhMWExZjtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGlucHV0LFxcbiAgICAgICAgdGV4dGFyZWEsXFxuICAgICAgICAuc2VsZWN0LWNvbnRhaW5lciB7XFxuICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcXG4gICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGUzZWI7XFxuICAgICAgICAgIGNvbG9yOiAjODU4NThkO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZkO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnZhbGlkYXRpb24tY29udGFpbmVyIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgZ2FwOiA4cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudmFsaWRhdGlvbi1iZWZvcmUge1xcbiAgICAgICAgICB3aWR0aDogMC41ZW07XFxuICAgICAgICAgIGhlaWdodDogMC41ZW07XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTg1OGQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBsaSB7XFxuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgICAgICAgY29sb3I6ICM4NTg1OGQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc2VsZWN0LWNvbnRhaW5lciB7XFxuICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG5cXG4gICAgICAgICAgLnNlbGVjdGVkLWNhdGVnb3J5IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGdhcDogNXB4O1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgICAgICAgICAgcGFkZGluZzogNXB4O1xcblxcbiAgICAgICAgICAgIC5jYXRlZ29yeS1jb250YWluZXIge1xcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgICAgICAgICAgIGdhcDogN3B4O1xcblxcbiAgICAgICAgICAgICAgcCB7XFxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgc2VsZWN0IHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZkO1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAuZW1haWwtY29udGFpbmVyIHtcXG4gICAgICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTVweCk7XFxuICAgICAgfVxcblxcbiAgICAgIC5hZGQtYmxvZy1idG4ge1xcbiAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJGaXJhR09cXFwiO1xcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDE1cHgpO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgICAgICBjb2xvcjogI2Y4ZmFmYztcXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNGUzZWI7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZDM3ZjM7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsImltcG9ydCBsb2dvSW1nIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvcmVkYmVycnktbG9nby5wbmdcIjtcbmltcG9ydCBjcmVhdGVMb2dpbk1vZGFsIGZyb20gXCIuL2xvZ2luTW9kYWwvY3JlYXRlXCI7XG5pbXBvcnQgZGlzcGxheUJsb2dBZGRlciBmcm9tIFwiLi4vYmxvZ0FkZGVyL2Rpc3BsYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBsb2dpbiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2dpblwiKSk7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyLWRpdlwiKTtcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWNvbnRlbnRcIik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICBjb25zdCBsb2dvID0gbmV3IEltYWdlKCk7XG4gIGxvZ28uc3JjID0gbG9nb0ltZztcbiAgY29udGVudC5hcHBlbmRDaGlsZChsb2dvKTtcblxuICBjb25zdCBlbnRyeUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVudHJ5QnRuLnRleHRDb250ZW50ID0gXCLhg6jhg5Thg6Hhg5Xhg5rhg5BcIjtcbiAgZW50cnlCdG4uY2xhc3NMaXN0LmFkZChcImVudHJ5LWJ1dHRvblwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChlbnRyeUJ0bik7XG5cbiAgY29uc3QgYWRkZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRlckJ0bi50ZXh0Q29udGVudCA9IFwi4YOT4YOQ4YOQ4YOb4YOQ4YOi4YOUIOGDkeGDmuGDneGDkuGDmFwiO1xuICBhZGRlckJ0bi5jbGFzc0xpc3QuYWRkKFwiYmxvZy1hZGRlci1idXR0b25cIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkZXJCdG4pO1xuXG4gIGlmIChsb2dpbikgZW50cnlCdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgaWYgKCFsb2dpbikgYWRkZXJCdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuICBlbnRyeUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlTG9naW5Nb2RhbCk7XG5cbiAgYWRkZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlCbG9nQWRkZXIpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG4iLCJpbXBvcnQgeFN2ZyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3gtaWNvbi5zdmdcIjtcbmltcG9ydCByZWRDaXJjbGVJbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9pbmZvLWNpcmNsZS5wbmdcIjtcbmltcG9ydCBncmVlblN1Y2Nlc3NJbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9zdWNjZXNzLWNpcmNsZS5wbmdcIjtcbmltcG9ydCBsb2dpblVzZXIgZnJvbSBcIi4uLy4uLy4uL2xvZ2ljL2xvZ2luVXNlci9sb2dpblVzZXJcIjtcbmltcG9ydCB1cGRhdGVMb2dpbk1vZGFsVUkgZnJvbSBcIi4vdXBkYXRlXCI7XG5cbmxldCByZW1vdmVMb2dpbk1vZGFsO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVMb2dpbk1vZGFsKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1vZGFsLWNvbnRhaW5lclwiKTtcbiAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGVudFwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XG5cbiAgY29uc3QgeEltZyA9IG5ldyBJbWFnZSgpO1xuICB4SW1nLmNsYXNzTGlzdC5hZGQoXCJ4LWltZ1wiKTtcbiAgeEltZy5zcmMgPSB4U3ZnO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoeEltZyk7XG5cbiAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtY29udGFpbmVyXCIpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoaW5wdXRDb250YWluZXIpO1xuXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRleHQudGV4dENvbnRlbnQgPSBcIuGDqOGDlOGDoeGDleGDmuGDkFwiO1xuICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBcIuGDlOGDmi3hg6Thg53hg6Hhg6Lhg5BcIjtcbiAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZW1haWxcIik7XG4gIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImVtYWlsXCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVtYWlsXCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkV4YW1wbGVAcmVkYmVycnkuZ2VcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIGlucHV0LmZvY3VzKCk7XG5cbiAgY29uc3Qgc3VjY2Vzc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN1Y2Nlc3NDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInN1Y2Nlc3MtY29udGFpbmVyXCIsIFwiaGlkZGVuXCIpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoc3VjY2Vzc0NvbnRhaW5lcik7XG5cbiAgY29uc3Qgc3VjY2Vzc0ltZyA9IG5ldyBJbWFnZSgpO1xuICBzdWNjZXNzSW1nLnNyYyA9IGdyZWVuU3VjY2Vzc0ltZztcbiAgc3VjY2Vzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdWNjZXNzSW1nKTtcblxuICBjb25zdCBzdWNjZXNzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgc3VjY2Vzc1RleHQudGV4dENvbnRlbnQgPSBcIuGDrOGDkOGDoOGDm+GDkOGDouGDlOGDkeGDo+GDmuGDmCDhg5Dhg5Xhg6Lhg53hg6Dhg5jhg5bhg5Dhg6rhg5jhg5BcIjtcbiAgc3VjY2Vzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdWNjZXNzVGV4dCk7XG5cbiAgY29uc3QgZXJyb3JDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlcnJvckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZXJyb3ItY29udGFpbmVyXCIsIFwiaGlkZGVuXCIpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZXJyb3JDb250YWluZXIpO1xuXG4gIGNvbnN0IHJlZENpcmNsZSA9IG5ldyBJbWFnZSgpO1xuICByZWRDaXJjbGUuc3JjID0gcmVkQ2lyY2xlSW1nO1xuICBlcnJvckNvbnRhaW5lci5hcHBlbmRDaGlsZChyZWRDaXJjbGUpO1xuXG4gIGNvbnN0IGVycm9yTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGVycm9yTXNnLnRleHRDb250ZW50ID0gXCLhg5Thg5ot4YOk4YOd4YOh4YOi4YOQIOGDkOGDoCDhg5vhg53hg5jhg6vhg5Thg5Hhg5zhg5BcIjtcbiAgZXJyb3JDb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3JNc2cpO1xuXG4gIGNvbnN0IGVudHJ5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZW50cnlCdG4udGV4dENvbnRlbnQgPSBcIuGDqOGDlOGDoeGDleGDmuGDkFwiO1xuICBlbnRyeUJ0bi5jbGFzc0xpc3QuYWRkKFwiZW50cnktYnRuXCIpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZW50cnlCdG4pO1xuXG4gIGNvbnN0IHN1Y2Nlc3NCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWNjZXNzQnRuLmNsYXNzTGlzdC5hZGQoXCJzdWNjZXNzLWJ0blwiLCBcImhpZGRlblwiKTtcbiAgc3VjY2Vzc0J0bi50ZXh0Q29udGVudCA9IFwi4YOZ4YOQ4YOg4YOS4YOYXCI7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChzdWNjZXNzQnRuKTtcblxuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmlkID09PSBcIm1vZGFsLWNvbnRhaW5lclwiKSByZW1vdmVMb2dpbk1vZGFsKGUpO1xuICB9KTtcblxuICB4SW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHJlbW92ZUxvZ2luTW9kYWwoZSk7XG4gIH0pO1xuXG4gIGVudHJ5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1cGRhdGVMb2dpbk1vZGFsKTtcblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICB1cGRhdGVMb2dpbk1vZGFsKCk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiB1cGRhdGVMb2dpbk1vZGFsKCkge1xuICAgIGlmIChsb2dpblVzZXIoaW5wdXQpKSB7XG4gICAgICBsb2dpblVzZXIoaW5wdXQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgdXBkYXRlTG9naW5Nb2RhbFVJKGRhdGEsIGNvbnRhaW5lcik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9naW5cIiwgSlNPTi5zdHJpbmdpZnkodHJ1ZSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlTG9naW5Nb2RhbCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKFxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwieC1pbWdcIikgJiZcbiAgICAgIGVudHJ5QnRuLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKVxuICAgICkge1xuICAgICAgbm9ybWFsQm9keSgpO1xuICAgICAgZW50cnlCdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW50cnktYnV0dG9uXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsb2ctYWRkZXItYnV0dG9uXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfVxuXG4gICAgaWYgKCFlbnRyeUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpIHtcbiAgICAgIG5vcm1hbEJvZHkoKTtcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3VjY2Vzcy1idG5cIikpIHtcbiAgICAgIG5vcm1hbEJvZHkoKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gbm9ybWFsQm9keSgpIHtcbiAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwidmlzaWJsZVwiO1xuICB9XG59XG5cbmV4cG9ydCB7IHJlbW92ZUxvZ2luTW9kYWwgfTtcbiIsImltcG9ydCB2YWxpZGF0ZUVtYWlsIGZyb20gXCIuL3ZhbGlkYXRlRW1haWxcIjtcbmltcG9ydCBjaGVja0VtYWlsIGZyb20gXCIuL2NoZWNrRW1haWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9naW5Vc2VyKGlucHV0KSB7XG4gIGlmICh2YWxpZGF0ZUVtYWlsKGlucHV0KSkge1xuICAgIHJldHVybiBjaGVja0VtYWlsKGlucHV0LnZhbHVlKS50aGVuKChkYXRhKSA9PiBkYXRhKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChpbnB1dCkge1xuICBpZiAoIWlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgaW5wdXQuZm9jdXMoKTtcbiAgICBhbGVydChcIlBsZWFzZSBtYXRjaCB0aGUgZm9ybWF0IHJlcXVlc3RlZFwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKCFpbnB1dC52YWx1ZS5lbmRzV2l0aChcIkByZWRiZXJyeS5nZVwiKSkge1xuICAgIGFsZXJ0KFwiWW91ciBlbWFpbCBtdXN0IGVuZCB3aXRoIEByZWRiZXJyeS5nZVwiKTtcbiAgICBjb25zdCBhdFBvc2l0aW9uID0gaW5wdXQudmFsdWUuaW5kZXhPZihcIkBcIikgKyAxO1xuICAgIGlucHV0LnZhbHVlID0gaW5wdXQudmFsdWUuc3Vic3RyaW5nKDAsIGF0UG9zaXRpb24pO1xuICAgIGlucHV0LmZvY3VzKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChpbnB1dC52YWx1ZS5lbmRzV2l0aChcIkByZWRiZXJyeS5nZVwiKSkgcmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjaGVja0VtYWlsKGVtYWlsKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly9hcGkuYmxvZy5yZWRiZXJyeWludGVybnNoaXAuZ2UvYXBpL2xvZ2luXCIsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBhY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgZW1haWw6IGAke2VtYWlsfWAsXG4gICAgICAgIH0pLFxuICAgICAgfVxuICAgICk7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDIyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xuICB9XG59XG4iLCJpbXBvcnQgeyByZW1vdmVMb2dpbk1vZGFsIH0gZnJvbSBcIi4vY3JlYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUxvZ2luTW9kYWxVSShkYXRhLCBkaXYpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtY29udGFpbmVyXCIpO1xuICBjb25zdCBpbnB1dCA9IGRpdi5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gIGNvbnN0IHN1Y2Nlc3NDb250YWluZXIgPSBkaXYucXVlcnlTZWxlY3RvcihcIi5zdWNjZXNzLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgZXJyb3JDb250YWluZXIgPSBkaXYucXVlcnlTZWxlY3RvcihcIi5lcnJvci1jb250YWluZXJcIik7XG4gIGNvbnN0IGVudHJ5QnRuID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCIuZW50cnktYnRuXCIpO1xuICBjb25zdCBzdWNjZXNzQnRuID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCIuc3VjY2Vzcy1idG5cIik7XG5cbiAgaWYgKGRhdGEpIHtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBzdWNjZXNzQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgZW50cnlCdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBzdWNjZXNzQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgZXJyb3JDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuICAgIHN1Y2Nlc3NCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICByZW1vdmVMb2dpbk1vZGFsKGUpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbnRyeS1idXR0b25cIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmxvZy1hZGRlci1idXR0b25cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICghZGF0YSkge1xuICAgIGVycm9yQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgaW5wdXQuc3R5bGUuYm9yZGVyQ29sb3IgPSBcIiNmZjAwMDBcIjtcbiAgICBpbnB1dC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjEwcHhcIjtcblxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiB7XG4gICAgICBpbnB1dEV2ZW50cyhcIiM1ZDM3ZjNcIik7XG4gICAgfSk7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgIGlucHV0RXZlbnRzKFwiIzVkMzdmM1wiKTtcbiAgICB9KTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICBpbnB1dEV2ZW50cyhcIiMwMDAwMDBcIik7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBpbnB1dEV2ZW50cyhjb2xvcikge1xuICAgICAgaW5wdXQuc3R5bGUuYm9yZGVyQ29sb3IgPSBjb2xvcjtcbiAgICAgIGlucHV0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiMjBweFwiO1xuICAgICAgaWYgKCFlcnJvckNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpXG4gICAgICAgIGVycm9yQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5QmxvZ0FkZGVyKCkge1xuICBjb25zdCBibG9nQWRkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jsb2ctYWRkZXJcIik7XG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tZGl2XCIpO1xuXG4gIGlmIChibG9nQWRkZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpKSB7XG4gICAgYmxvZ0FkZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJibG9nLWFkZGVyLXN0YXR1c1wiLCBKU09OLnN0cmluZ2lmeSh0cnVlKSk7XG59XG4iLCJpbXBvcnQgbG9nb0ltZyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL2Jsb2ctbG9nby5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlTWFpbigpIHtcbiAgY29uc3Qgc3RhdHVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsb2ctYWRkZXItc3RhdHVzXCIpKTtcblxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW4tZGl2XCIpO1xuICBpZiAoc3RhdHVzKSBtYWluLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cbiAgY29uc3QgaW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGluZm8uY2xhc3NMaXN0LmFkZChcIm1haW4taW5mb1wiKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChpbmZvKTtcblxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gXCLhg5Hhg5rhg53hg5Lhg5hcIjtcbiAgaW5mby5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICBjb25zdCBsb2dvID0gbmV3IEltYWdlKCk7XG4gIGxvZ28uc3JjID0gbG9nb0ltZztcbiAgaW5mby5hcHBlbmRDaGlsZChsb2dvKTtcblxuICByZXR1cm4gbWFpbjtcbn1cbiIsImltcG9ydCBiYWNrQXJyb3dJbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9iYWNrLWFycm93LnBuZ1wiO1xuaW1wb3J0IGRpc3BsYXlNYWluRGl2IGZyb20gXCIvc3JjL2NvbXBvbmVudHMvZG9tL21haW4vZGlzcGxheS5qc1wiO1xuaW1wb3J0IGNyZWF0ZUF1dGhvciBmcm9tIFwiLi9hdXRob3IvY3JlYXRlXCI7XG5pbXBvcnQgY3JlYXRlQmxvZ0NhdGVnb3JpZXMgZnJvbSBcIi4vY2F0ZWdvcmllcy9jcmVhdGVcIjtcbmltcG9ydCBjcmVhdGVEYXRlIGZyb20gXCIuL2RhdGUvY3JlYXRlXCI7XG5pbXBvcnQgY3JlYXRlRGVzY3JpcHRpb24gZnJvbSBcIi4vZGVzY3JpcHRpb24vY3JlYXRlXCI7XG5pbXBvcnQgY3JlYXRlVGl0bGUgZnJvbSBcIi4vdGl0bGUvY3JlYXRlXCI7XG5pbXBvcnQgY3JlYXRlSW1hZ2VVcGxvYWRlciBmcm9tIFwiLi9pbWFnZS9jcmVhdGVcIjtcbmltcG9ydCB2YWxpZGF0ZUZvcm0gZnJvbSBcIi4uLy4uL2xvZ2ljL2Jsb2dBZGRlci92YWxpZGF0aW9ucy9mb3JtL2Zvcm1cIjtcbmltcG9ydCBjcmVhdGVFbWFpbCBmcm9tIFwiLi9lbWFpbC9jcmVhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQmxvZ0FkZGVyKCkge1xuICBjb25zdCBzdGF0dXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvZy1hZGRlci1zdGF0dXNcIikpO1xuXG4gIGNvbnN0IGJsb2dBZGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJsb2dBZGRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJsb2ctYWRkZXJcIik7XG5cbiAgaWYgKCFzdGF0dXMpIGJsb2dBZGRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXG4gIGNvbnN0IGJhY2tBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICBiYWNrQXJyb3cuY2xhc3NMaXN0LmFkZChcImJhY2stYXJyb3dcIik7XG4gIGJhY2tBcnJvdy5zcmMgPSBiYWNrQXJyb3dJbWc7XG4gIGJsb2dBZGRlci5hcHBlbmRDaGlsZChiYWNrQXJyb3cpO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJibG9nLWFkZGVyLWNvbnRlbnRcIik7XG4gIGJsb2dBZGRlci5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gXCLhg5Hhg5rhg53hg5Lhg5jhg6Eg4YOT4YOQ4YOb4YOQ4YOi4YOU4YOR4YOQXCI7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICBmb3JtLmNsYXNzTGlzdC5hZGQoXCJibG9nLWZvcm1cIik7XG4gIGZvcm0uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJibG9nLWZvcm1cIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVJbWFnZVVwbG9hZGVyKCkpO1xuXG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGl0bGUuY2xhc3NMaXN0LmFkZChcImF1dGhvci10aXRsZS1jb250YWluZXJcIik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQodGl0bGUpO1xuICB0aXRsZS5hcHBlbmRDaGlsZChjcmVhdGVBdXRob3IoKSk7XG4gIHRpdGxlLmFwcGVuZENoaWxkKGNyZWF0ZVRpdGxlKCkpO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRGVzY3JpcHRpb24oKSk7XG5cbiAgY29uc3QgZGF0ZUNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGF0ZUNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJkYXRlLWNhdGVnb3J5LWNvbnRhaW5lclwiKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkYXRlQ2F0ZWdvcnkpO1xuICBkYXRlQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoY3JlYXRlRGF0ZSgpKTtcbiAgZGF0ZUNhdGVnb3J5LmFwcGVuZENoaWxkKGNyZWF0ZUJsb2dDYXRlZ29yaWVzKCkpO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRW1haWwoKSk7XG5cbiAgY29uc3QgYWRkQmxvZ0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZEJsb2dCdG4udGV4dENvbnRlbnQgPSBcIuGDkuGDkOGDm+GDneGDpeGDleGDlOGDp+GDnOGDlOGDkeGDkFwiO1xuICBhZGRCbG9nQnRuLmNsYXNzTGlzdC5hZGQoXCJhZGQtYmxvZy1idG5cIik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoYWRkQmxvZ0J0bik7XG5cbiAgYmFja0Fycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5TWFpbkRpdik7XG5cbiAgLy8gZm9ybS5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAvLyAgIGNvbnNvbGUubG9nKFwic3NcIik7XG4gIC8vIH0pO1xuXG4gIGFkZEJsb2dCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhbGlkYXRlRm9ybSgpO1xuICB9KTtcbiAgcmV0dXJuIGJsb2dBZGRlcjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlNYWluRGl2KCkge1xuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWRpdlwiKTtcbiAgY29uc3QgYmxvZ0FkZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibG9nLWFkZGVyXCIpO1xuXG4gIGJsb2dBZGRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBtYWluRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJibG9nLWFkZGVyLXN0YXR1c1wiLCBKU09OLnN0cmluZ2lmeShmYWxzZSkpO1xufVxuIiwiaW1wb3J0IHZhbGlkYXRlQXV0aG9yIGZyb20gXCIuLi8uLi8uLi9sb2dpYy9ibG9nQWRkZXIvdmFsaWRhdGlvbnMvYXV0aG9yL2F1dGhvclwiO1xuaW1wb3J0IHVwZGF0ZUF1dGhvciBmcm9tIFwiLi91cGRhdGVcIjtcblxuY29uc3QgdmFsaWRhdGlvbnMgPSBbXG4gIFwi4YOb4YOY4YOc4YOY4YOb4YOj4YObIDQg4YOh4YOY4YOb4YOR4YOd4YOa4YOdXCIsXG4gIFwi4YOb4YOY4YOc4YOY4YOb4YOj4YObIDIg4YOh4YOY4YOi4YOn4YOV4YOQXCIsXG4gIFwi4YOb4YOu4YOd4YOa4YOd4YOTIOGDpeGDkOGDoOGDl+GDo+GDmuGDmCDhg6Hhg5jhg5vhg5Hhg53hg5rhg53hg5Thg5Hhg5hcIixcbl07XG5jb25zdCB2YWxpZGF0aW9uQXJyID0gW107XG5sZXQgaW5wdXQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUF1dGhvcigpIHtcbiAgY29uc3QgYmxvZ0luZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvZy1pbmZvXCIpKTtcblxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcblxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBcIuGDkOGDleGDouGDneGDoOGDmFwiO1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJhdXRob3ItaW5wdXRcIik7XG4gIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLnRleHRDb250ZW50ID0gXCIqXCI7XG4gIGxhYmVsLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwiYXV0aG9yLWlucHV0XCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImF1dGhvci1pbnB1dFwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCLhg6jhg5Thg5jhg6fhg5Xhg5Dhg5zhg5Thg5cg4YOQ4YOV4YOi4YOd4YOg4YOYXCIpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gIGNvbnN0IHRleHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICB0ZXh0cy5jbGFzc0xpc3QuYWRkKFwidmFsaWRhdGlvbi10ZXh0c1wiKTtcbiAgZGl2LmFwcGVuZENoaWxkKHRleHRzKTtcblxuICB2YWxpZGF0aW9ucy5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZGF0aW9uLWNvbnRhaW5lclwiKTtcbiAgICB0ZXh0cy5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgIHZhbGlkYXRpb25BcnIucHVzaChjb250YWluZXIpO1xuXG4gICAgY29uc3QgdmFsaWRhdGlvbkJlZm9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHZhbGlkYXRpb25CZWZvcmUuY2xhc3NMaXN0LmFkZChcInZhbGlkYXRpb24tYmVmb3JlXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh2YWxpZGF0aW9uQmVmb3JlKTtcblxuICAgIGNvbnN0IHZhbGlkYXRpb25UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHZhbGlkYXRpb25UZXh0LnRleHRDb250ZW50ID0gZWw7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHZhbGlkYXRpb25UZXh0KTtcbiAgfSk7XG5cbiAgaWYgKGJsb2dJbmZvICYmIGJsb2dJbmZvLmF1dGhvcikge1xuICAgIGlucHV0LnZhbHVlID0gYmxvZ0luZm8uYXV0aG9yO1xuICAgIHZhbGlkYXRlQXV0aG9yKGlucHV0LCB2YWxpZGF0aW9uQXJyKTtcbiAgfVxuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMudmFsdWUpIHRoaXMuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgIzVEMzdGM1wiO1xuICB9KTtcblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnZhbHVlLmNoYXJBdCgwKSA9PT0gXCIgXCIpIHtcbiAgICAgIGFsZXJ0KFwiSW5wdXQgc2hvdWxkIG5vdCBzdGFydCB3aXRoIGEgc3BhY2VcIik7XG4gICAgICB0aGlzLnZhbHVlID0gXCJcIjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFsaWRhdGVBdXRob3IodGhpcywgdmFsaWRhdGlvbkFycik7XG4gIH0pO1xuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2U0ZTNlYlwiO1xuICAgICAgdXBkYXRlQXV0aG9yKFwiaW5pdFwiLCB2YWxpZGF0aW9uQXJyWzBdKTtcbiAgICAgIHVwZGF0ZUF1dGhvcihcImluaXRcIiwgdmFsaWRhdGlvbkFyclsxXSk7XG4gICAgICB1cGRhdGVBdXRob3IoXCJpbml0XCIsIHZhbGlkYXRpb25BcnJbMl0pO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IHsgaW5wdXQsIHZhbGlkYXRpb25BcnIgfTtcbiIsImltcG9ydCB2YWxpZGF0ZUZvdXJMZXR0ZXJzIGZyb20gXCIuL2ZvdXJMZXR0ZXJzXCI7XG5pbXBvcnQgdmFsaWRhdGVUd29Xb3JkcyBmcm9tIFwiLi90d29Xb3Jkc1wiO1xuaW1wb3J0IHZhbGlkYXRlR2VvcmdpYW5BbHBoIGZyb20gXCIuL2dlb3JnaWFuQWxwaFwiO1xuaW1wb3J0IHVwZGF0ZUF1dGhvciBmcm9tIFwiLi4vLi4vLi4vLi4vZG9tL2Jsb2dBZGRlci9hdXRob3IvdXBkYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlQXV0aG9yKGlucHV0LCBhcnIpIHtcbiAgY29uc3QgYmxvZ0luZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvZy1pbmZvXCIpKTtcbiAgY29uc3QgdmFsdWUgPSBpbnB1dC52YWx1ZTtcblxuICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgdXBkYXRlQXV0aG9yKGZhbHNlLCBhcnJbMF0pO1xuICAgIHVwZGF0ZUF1dGhvcihmYWxzZSwgYXJyWzFdKTtcbiAgICB1cGRhdGVBdXRob3IoZmFsc2UsIGFyclsyXSk7XG4gICAgYmxvZ0luZm8uYXV0aG9yID0gdmFsdWU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJibG9nLWluZm9cIiwgSlNPTi5zdHJpbmdpZnkoYmxvZ0luZm8pKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB1cGRhdGVBdXRob3IodmFsaWRhdGVGb3VyTGV0dGVycyh2YWx1ZSksIGFyclswXSk7XG4gIHVwZGF0ZUF1dGhvcih2YWxpZGF0ZVR3b1dvcmRzKHZhbHVlKSwgYXJyWzFdKTtcbiAgdXBkYXRlQXV0aG9yKHZhbGlkYXRlR2VvcmdpYW5BbHBoKHZhbHVlKSwgYXJyWzJdKTtcblxuICBibG9nSW5mby5hdXRob3IgPSB2YWx1ZTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJibG9nLWluZm9cIiwgSlNPTi5zdHJpbmdpZnkoYmxvZ0luZm8pKTtcblxuICBpZiAoXG4gICAgdmFsaWRhdGVGb3VyTGV0dGVycyh2YWx1ZSkgJiZcbiAgICB2YWxpZGF0ZVR3b1dvcmRzKHZhbHVlKSAmJlxuICAgIHZhbGlkYXRlR2VvcmdpYW5BbHBoKHZhbHVlKVxuICApIHtcbiAgICBpbnB1dC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjMTREODFDXCI7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgaW5wdXQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI0VBMTkxOVwiO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVGb3VyTGV0dGVycyh2YWx1ZSkge1xuICBmdW5jdGlvbiBjaGVja1ZhbHVlKHZhbHVlKSB7XG4gICAgbGV0IGxldHRlckNvdW50ID0gMDtcblxuICAgIGZvciAoY29uc3QgY2hhciBvZiB2YWx1ZSkge1xuICAgICAgaWYgKGNoYXIgPT09IFwiIFwiKSBjb250aW51ZTtcbiAgICAgIGxldHRlckNvdW50Kys7XG4gICAgfVxuICAgIHJldHVybiBsZXR0ZXJDb3VudCA+PSA0O1xuICB9XG5cbiAgcmV0dXJuIGNoZWNrVmFsdWUodmFsdWUpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVUd29Xb3Jkcyh2YWx1ZSkge1xuICBmdW5jdGlvbiBoYXNUd29Xb3Jkcyh2YWx1ZSkge1xuICAgIGNvbnN0IHdvcmRzID0gdmFsdWUuc3BsaXQoXCIgXCIpO1xuICAgIGxldCB3b3JkQ291bnRlciA9IDA7XG5cbiAgICBmb3IgKGxldCB3b3JkIG9mIHdvcmRzKSB7XG4gICAgICBpZiAod29yZCA9PT0gXCJcIikgY29udGludWU7XG4gICAgICB3b3JkQ291bnRlcisrO1xuICAgIH1cbiAgICByZXR1cm4gd29yZENvdW50ZXIgPj0gMjtcbiAgfVxuXG4gIHJldHVybiBoYXNUd29Xb3Jkcyh2YWx1ZSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZUdlb3JnaWFuQWxwaCh2YWx1ZSkge1xuICBjb25zdCBnZW9yZ2lhbkFscGhhYmV0ID0gbmV3IFNldChbXG4gICAgMHgxMGEwLCAweDEwYTEsIDB4MTBhMiwgMHgxMGEzLCAweDEwYTQsIDB4MTBhNSwgMHgxMGE2LCAweDEwYTcsIDB4MTBhOCxcbiAgICAweDEwYTksIDB4MTBhYSwgMHgxMGFiLCAweDEwYWMsIDB4MTBhZCwgMHgxMGFlLCAweDEwYWYsIDB4MTBiMCwgMHgxMGIxLFxuICAgIDB4MTBiMiwgMHgxMGIzLCAweDEwYjQsIDB4MTBiNSwgMHgxMGI2LCAweDEwYjcsIDB4MTBiOCwgMHgxMGI5LCAweDEwYmEsXG4gICAgMHgxMGJiLCAweDEwYmMsIDB4MTBiZCwgMHgxMGJlLCAweDEwYmYsIDB4MTBjMCwgMHgxMGMxLCAweDEwYzIsIDB4MTBjMyxcbiAgICAweDEwYzQsIDB4MTBjNSwgMHgxMGM2LCAweDEwYzcsIDB4MTBjOCwgMHgxMGM5LCAweDEwY2EsIDB4MTBjYiwgMHgxMGNjLFxuICAgIDB4MTBjZCwgMHgxMGNlLCAweDEwY2YsIDB4MTBkMCwgMHgxMGQxLCAweDEwZDIsIDB4MTBkMywgMHgxMGQ0LCAweDEwZDUsXG4gICAgMHgxMGQ2LCAweDEwZDcsIDB4MTBkOCwgMHgxMGQ5LCAweDEwZGEsIDB4MTBkYiwgMHgxMGRjLCAweDEwZGQsIDB4MTBkZSxcbiAgICAweDEwZGYsIDB4MTBlMCwgMHgxMGUxLCAweDEwZTIsIDB4MTBlMywgMHgxMGU0LCAweDEwZTUsIDB4MTBlNiwgMHgxMGU3LFxuICAgIDB4MTBlOCwgMHgxMGU5LCAweDEwZWEsIDB4MTBlYiwgMHgxMGVjLCAweDEwZWQsIDB4MTBlZSwgMHgxMGVmLFxuICBdKTtcblxuICBmdW5jdGlvbiBjaGVja0lucHV0KGlucHV0KSB7XG4gICAgbGV0IGFsbENoYXJhY3RlcnNBcmVHZW9yZ2lhbiA9IHRydWU7XG5cbiAgICBmb3IgKGxldCBjaGFyIG9mIGlucHV0KSB7XG4gICAgICBpZiAoY2hhciA9PT0gXCIgXCIpIGNvbnRpbnVlO1xuICAgICAgbGV0IGNoYXJDb2RlID0gY2hhci5jaGFyQ29kZUF0KDApO1xuICAgICAgaWYgKCFnZW9yZ2lhbkFscGhhYmV0LmhhcyhjaGFyQ29kZSkpIHtcbiAgICAgICAgYWxsQ2hhcmFjdGVyc0FyZUdlb3JnaWFuID0gZmFsc2U7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBhbGxDaGFyYWN0ZXJzQXJlR2VvcmdpYW47XG4gIH1cblxuICByZXR1cm4gY2hlY2tJbnB1dCh2YWx1ZSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVBdXRob3IodmFsaWQsIGRpdikge1xuICBpZiAodmFsaWQgPT09IFwiaW5pdFwiKSB7XG4gICAgZGl2LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzg1ODU4ZFwiO1xuICAgIGRpdi5xdWVyeVNlbGVjdG9yKFwibGlcIikuc3R5bGUuY29sb3IgPSBcIiM4NTg1OGRcIjtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodmFsaWQpIHtcbiAgICBkaXYucXVlcnlTZWxlY3RvcihcInNwYW5cIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMTREODFDXCI7XG4gICAgZGl2LnF1ZXJ5U2VsZWN0b3IoXCJsaVwiKS5zdHlsZS5jb2xvciA9IFwiIzE0RDgxQ1wiO1xuICB9XG5cbiAgaWYgKCF2YWxpZCkge1xuICAgIGRpdi5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNFQTE5MTlcIjtcbiAgICBkaXYucXVlcnlTZWxlY3RvcihcImxpXCIpLnN0eWxlLmNvbG9yID0gXCIjRUExOTE5XCI7XG4gIH1cbn1cbiIsImltcG9ydCBmZXRjaENhdGVnb3JpZXMgZnJvbSBcIi4uLy4uLy4uL2xvZ2ljL2NhdGVnb3JpZXMvZmV0Y2hcIjtcbmltcG9ydCB1cGRhdGVDYXRlZ29yaWVzIGZyb20gXCIuL3VwZGF0ZVwiO1xuXG5sZXQgY29udGFpbmVyO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQmxvZ0NhdGVnb3JpZXMoKSB7XG4gIGNvbnN0IGJsb2dJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsb2ctaW5mb1wiKSk7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcblxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBcIuGDmeGDkOGDouGDlOGDkuGDneGDoOGDmOGDkFwiO1xuICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IFwiKlwiO1xuICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcblxuICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNlbGVjdC1jb250YWluZXJcIik7XG4gIGRpdi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2VsZWN0ZWQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLWNhdGVnb3J5XCIsIFwiaGlkZGVuXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0ZWQpO1xuXG4gIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJsb2ctY2F0ZWdvcmllcy1zZWxlY3RcIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3QpO1xuXG4gIGNvbnN0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgcGxhY2Vob2xkZXIudGV4dENvbnRlbnQgPSBcIuGDkOGDmOGDoOGDqeGDmOGDlOGDlyDhg5nhg5Dhg6Lhg5Thg5Lhg53hg6Dhg5jhg5BcIjtcbiAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZChcInBsYWNlaG9sZGVyLW9wdGlvblwiKTtcbiAgcGxhY2Vob2xkZXIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJcIik7XG4gIHBsYWNlaG9sZGVyLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICBwbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKTtcbiAgcGxhY2Vob2xkZXIuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwiXCIpO1xuICBzZWxlY3QuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXIpO1xuXG4gIGZldGNoQ2F0ZWdvcmllcyhcImh0dHBzOi8vYXBpLmJsb2cucmVkYmVycnlpbnRlcm5zaGlwLmdlL2FwaVwiKS50aGVuKChkYXRhKSA9PiB7XG4gICAgZGF0YS5kYXRhLmZvckVhY2goKGNhdCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNhdC50aXRsZTtcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBjYXQuaWQpO1xuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKTtcblxuICAgIGlmIChibG9nSW5mbyAmJiBibG9nSW5mby5jYXRlZ29yaWVzKSB7XG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gYmxvZ0luZm8uY2F0ZWdvcmllcztcbiAgICAgIHVwZGF0ZUNhdGVnb3JpZXMoXG4gICAgICAgIHNlbGVjdCxcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIGNhdGVnb3JpZXNcbiAgICAgICk7XG4gICAgfVxuICB9KTtcblxuICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuXG4gIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKTtcbiAgICB1cGRhdGVDYXRlZ29yaWVzKHNlbGVjdCwgY29udGFpbmVyLCBzZWxlY3RlZCwgcGxhY2Vob2xkZXIsIG9wdGlvbnMsIFtcbiAgICAgICt0aGlzLnZhbHVlLFxuICAgIF0pO1xuICB9KTtcblxuICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFkZC1ibG9nLWJ0blwiKSkgcmV0dXJuO1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIuc2VsZWN0LWNvbnRhaW5lclwiKSkge1xuICAgICAgY29uc3QgYmxvZ0luZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvZy1pbmZvXCIpKTtcbiAgICAgIGlmIChibG9nSW5mby5jYXRlZ29yaWVzLmxlbmd0aCA8IDEpXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjZTRlM2ViXCI7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgeyBjb250YWluZXIgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQ2F0ZWdvcmllcyh1cmwpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VybH0vY2F0ZWdvcmllc2AsIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcIlRoZXJlIHdhcyBhIHByb2JsZW0gd2l0aCB0aGUgZmV0Y2ggb3BlcmF0aW9uOiBcIiwgZXJyb3IpO1xuICB9XG59XG4iLCJpbXBvcnQgZmV0Y2hDYXRlZ29yaWVzIGZyb20gXCIuLi8uLi8uLi9sb2dpYy9jYXRlZ29yaWVzL2ZldGNoXCI7XG5pbXBvcnQgaW1hZ2UgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy93aGl0ZS1yZW1vdmUucG5nXCI7XG5cbmNvbnN0IGNhdGVnb3J5QXJyID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUNhdGVnb3JpZXMoXG4gIHNlbGVjdCxcbiAgc2VsZWN0Q29udGFpbmVyLFxuICBzZWxlY3RlZCxcbiAgcGxhY2Vob2xkZXIsXG4gIG9wdGlvbnMsXG4gIGlkQXJyXG4pIHtcbiAgaWYgKGlkQXJyLmxlbmd0aCA+PSAxKSB7XG4gICAgcGxhY2Vob2xkZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHNlbGVjdGVkLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgc2VsZWN0LnZhbHVlID0gXCJcIjtcbiAgfVxuXG4gIGNvbnN0IGJsb2dJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsb2ctaW5mb1wiKSk7XG4gIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9hcGkuYmxvZy5yZWRiZXJyeWludGVybnNoaXAuZ2UvYXBpXCI7XG5cbiAgb3B0aW9ucy5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSkgcmV0dXJuO1xuICAgIGNvbnN0IHZhbHVlTnVtID0gK2VsLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpO1xuXG4gICAgaWYgKGlkQXJyLmluY2x1ZGVzKHZhbHVlTnVtKSkge1xuICAgICAgY2F0ZWdvcnlBcnIucHVzaCh2YWx1ZU51bSk7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJcIik7XG5cbiAgICAgIGJsb2dJbmZvLmNhdGVnb3JpZXMgPSBjYXRlZ29yeUFycjtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmxvZy1pbmZvXCIsIEpTT04uc3RyaW5naWZ5KGJsb2dJbmZvKSk7XG4gICAgfVxuICB9KTtcblxuICBmZXRjaENhdGVnb3JpZXModXJsKS50aGVuKChkYXRhKSA9PiB7XG4gICAgZGF0YS5kYXRhLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBpZiAoaWRBcnIuaW5jbHVkZXMoK2VsLmlkKSkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5LWNvbnRhaW5lclwiLCBgY2F0ZWdvcnktJHtlbC5pZH1gKTtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGVsLmJhY2tncm91bmRfY29sb3I7XG4gICAgICAgIHNlbGVjdGVkLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gZWwudGl0bGU7XG4gICAgICAgIHRleHQuc3R5bGUuY29sb3IgPSBlbC50ZXh0X2NvbG9yO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5zcmMgPSBpbWFnZTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICAgICAgc2VsZWN0Q29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcImF1dG8gbWlubWF4KDMwcHgsIDFmcilcIjtcbiAgICAgICAgc2VsZWN0Q29udGFpbmVyLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICMxNEQ4MUNcIjtcblxuICAgICAgICBpZiAoY2F0ZWdvcnlBcnIubGVuZ3RoID4gMSkgc2VsZWN0ZWQuc3R5bGUub3ZlcmZsb3dYID0gXCJzY3JvbGxcIjtcblxuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLmNhdGVnb3J5LWNvbnRhaW5lclwiKTtcbiAgICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XG5cbiAgICAgICAgICBsZXQgaW5kZXggPSBwYXJlbnQuY2xhc3NMaXN0WzFdLmluZGV4T2YoXCItXCIpO1xuICAgICAgICAgIGNvbnN0IGNhdE51bSA9ICtwYXJlbnQuY2xhc3NMaXN0WzFdLnN1YnN0cmluZyhpbmRleCArIDEpO1xuXG4gICAgICAgICAgbGV0IGFyckluZGV4ID0gY2F0ZWdvcnlBcnIuaW5kZXhPZihjYXROdW0pO1xuICAgICAgICAgIGlmIChhcnJJbmRleCAhPT0gLTEpIGNhdGVnb3J5QXJyLnNwbGljZShhcnJJbmRleCwgMSk7XG5cbiAgICAgICAgICBpZiAoY2F0ZWdvcnlBcnIubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgc2VsZWN0Q29udGFpbmVyLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNFQTE5MTlcIjtcbiAgICAgICAgICAgIHNlbGVjdGVkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBwbGFjZWhvbGRlci50ZXh0Q29udGVudCA9IFwi4YOQ4YOY4YOg4YOp4YOY4YOU4YOXIOGDmeGDkOGDouGDlOGDkuGDneGDoOGDmOGDkFwiO1xuICAgICAgICAgICAgc2VsZWN0Q29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcImF1dG9cIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY2F0ZWdvcnlBcnIubGVuZ3RoIDw9IDEpIHNlbGVjdGVkLnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XG5cbiAgICAgICAgICBibG9nSW5mby5jYXRlZ29yaWVzID0gY2F0ZWdvcnlBcnI7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJibG9nLWluZm9cIiwgSlNPTi5zdHJpbmdpZnkoYmxvZ0luZm8pKTtcblxuICAgICAgICAgIG9wdGlvbnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCtlbC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSA9PT0gY2F0TnVtKVxuICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCB2YWxpZGF0ZURhdGUgZnJvbSBcIi4uLy4uLy4uL2xvZ2ljL2Jsb2dBZGRlci92YWxpZGF0aW9ucy9kYXRlL2RhdGVcIjtcblxubGV0IGlucHV0O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRGF0ZSgpIHtcbiAgY29uc3QgYmxvZ0luZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvZy1pbmZvXCIpKTtcblxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcblxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBcIuGDkuGDkOGDm+GDneGDpeGDleGDlOGDp+GDnOGDlOGDkeGDmOGDoSDhg5fhg5Dhg6Dhg5jhg6bhg5hcIjtcbiAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGF0ZS1pbnB1dFwiKTtcbiAgZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSBcIipcIjtcbiAgbGFiZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbiAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRhdGUtaW5wdXRcIik7XG4gIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgaWYgKGJsb2dJbmZvICYmIGJsb2dJbmZvLmRhdGUpIHtcbiAgICBpbnB1dC52YWx1ZSA9IGJsb2dJbmZvLmRhdGU7XG4gICAgdmFsaWRhdGVEYXRlKGlucHV0KTtcbiAgfVxuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMudmFsdWUpIHRoaXMuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgIzVEMzdGM1wiO1xuICB9KTtcblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICB2YWxpZGF0ZURhdGUoaW5wdXQpO1xuICB9KTtcblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFpbnB1dC52YWx1ZSkgaW5wdXQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2U0ZTNlYlwiO1xuICB9KTtcblxuICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgeyBpbnB1dCB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVEYXRlKGlucHV0KSB7XG4gIGNvbnN0IGJsb2dJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsb2ctaW5mb1wiKSk7XG4gIGNvbnN0IHZhbHVlID0gaW5wdXQudmFsdWU7XG5cbiAgYmxvZ0luZm8uZGF0ZSA9IHZhbHVlO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJsb2ctaW5mb1wiLCBKU09OLnN0cmluZ2lmeShibG9nSW5mbykpO1xuXG4gIGlmICh2YWx1ZSkge1xuICAgIGlucHV0LnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICMxNEQ4MUNcIjtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBpbnB1dC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjRUExOTE5XCI7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgdmFsaWRhdGVEZXNjcmlwdGlvbiBmcm9tIFwiLi4vLi4vLi4vbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRpb25zL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uXCI7XG5pbXBvcnQgdXBkYXRlVGl0bGUgZnJvbSBcIi4uL3RpdGxlL3VwZGF0ZVwiO1xuXG5jb25zdCB2YWxpZGF0aW9ucyA9IFtcIuGDm+GDmOGDnOGDmOGDm+GDo+GDmyAyIOGDoeGDmOGDm+GDkeGDneGDmuGDnVwiXTtcbmxldCBjb250YWluZXI7XG5sZXQgdGV4dGFyZWE7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURlc2NyaXB0aW9uKCkge1xuICBjb25zdCBibG9nSW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibG9nLWluZm9cIikpO1xuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IFwi4YOQ4YOm4YOs4YOU4YOg4YOQXCI7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NyaXB0aW9uLWlucHV0XCIpO1xuICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IFwiKlwiO1xuICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcblxuICB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCLhg6jhg5Thg5jhg6fhg5Xhg5Dhg5zhg5Thg5cg4YOQ4YOm4YOs4YOU4YOg4YOQXCIpO1xuICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIDYpO1xuICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJzcGVsbGNoZWNrXCIsIFwib2ZmXCIpO1xuICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uLWlucHV0XCIpO1xuICB0ZXh0YXJlYS5zdHlsZS5yZXNpemUgPSBcIm5vbmVcIjtcblxuICBkaXYuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xuXG4gIGNvbnN0IHRleHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICB0ZXh0cy5jbGFzc0xpc3QuYWRkKFwidmFsaWRhdGlvbi10ZXh0c1wiKTtcbiAgZGl2LmFwcGVuZENoaWxkKHRleHRzKTtcblxuICB2YWxpZGF0aW9ucy5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZGF0aW9uLWNvbnRhaW5lclwiKTtcbiAgICB0ZXh0cy5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgY29uc3QgYmVmb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgYmVmb3JlLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZGF0aW9uLWJlZm9yZVwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmVmb3JlKTtcblxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IGVsO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgfSk7XG5cbiAgaWYgKGJsb2dJbmZvICYmIGJsb2dJbmZvLmRlc2NyaXB0aW9uKSB7XG4gICAgdGV4dGFyZWEudmFsdWUgPSBibG9nSW5mby5kZXNjcmlwdGlvbjtcbiAgICB2YWxpZGF0ZURlc2NyaXB0aW9uKHRleHRhcmVhLCBjb250YWluZXIpO1xuICB9XG5cbiAgdGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcblxuICB0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy52YWx1ZSkgdGhpcy5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjNUQzN0YzXCI7XG4gIH0pO1xuXG4gIHRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMudmFsdWUuY2hhckF0KDApID09PSBcIiBcIikge1xuICAgICAgYWxlcnQoXCJJbnB1dCBzaG91bGQgbm90IHN0YXJ0IHdpdGggYSBzcGFjZVwiKTtcbiAgICAgIHRoaXMudmFsdWUgPSBcIlwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YWxpZGF0ZURlc2NyaXB0aW9uKHRoaXMsIGNvbnRhaW5lcik7XG4gIH0pO1xuXG4gIHRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2U0ZTNlYlwiO1xuICAgICAgdXBkYXRlVGl0bGUoXCJpbml0XCIsIGNvbnRhaW5lcik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgeyB0ZXh0YXJlYSwgY29udGFpbmVyIH07XG4iLCJpbXBvcnQgdmFsaWRhdGVUd29MZXR0ZXJzIGZyb20gXCIuLi90aXRsZS90d29MZXR0ZXJzXCI7XG5pbXBvcnQgdXBkYXRlVGl0bGUgZnJvbSBcIi4uLy4uLy4uLy4uL2RvbS9ibG9nQWRkZXIvdGl0bGUvdXBkYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlRGVzY3JpcHRpb24oaW5wdXQsIGRpdikge1xuICBjb25zdCBibG9nSW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibG9nLWluZm9cIikpO1xuICBjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlO1xuXG4gIHVwZGF0ZVRpdGxlKHZhbGlkYXRlVHdvTGV0dGVycyh2YWx1ZSksIGRpdik7XG5cbiAgYmxvZ0luZm8uZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJibG9nLWluZm9cIiwgSlNPTi5zdHJpbmdpZnkoYmxvZ0luZm8pKTtcblxuICBpZiAodmFsaWRhdGVUd29MZXR0ZXJzKHZhbHVlKSkge1xuICAgIGlucHV0LnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICMxNEQ4MUNcIjtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBpbnB1dC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjRUExOTE5XCI7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZVR3b0xldHRlcnModmFsdWUpIHtcbiAgZnVuY3Rpb24gY2hlY2tWYWx1ZSh2YWx1ZSkge1xuICAgIGxldCBsZXR0ZXJDb3VudCA9IDA7XG5cbiAgICBmb3IgKGNvbnN0IGNoYXIgb2YgdmFsdWUpIHtcbiAgICAgIGlmIChjaGFyID09PSBcIiBcIikgY29udGludWU7XG4gICAgICBsZXR0ZXJDb3VudCsrO1xuICAgIH1cbiAgICByZXR1cm4gbGV0dGVyQ291bnQgPj0gMjtcbiAgfVxuXG4gIHJldHVybiBjaGVja1ZhbHVlKHZhbHVlKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVRpdGxlKHZhbGlkLCBkaXYpIHtcbiAgaWYgKHZhbGlkID09PSBcImluaXRcIikge1xuICAgIGRpdi5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM4NTg1OGRcIjtcbiAgICBkaXYucXVlcnlTZWxlY3RvcihcImxpXCIpLnN0eWxlLmNvbG9yID0gXCIjODU4NThkXCI7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHZhbGlkKSB7XG4gICAgZGl2LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzE0RDgxQ1wiO1xuICAgIGRpdi5xdWVyeVNlbGVjdG9yKFwibGlcIikuc3R5bGUuY29sb3IgPSBcIiMxNEQ4MUNcIjtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICghdmFsaWQpIHtcbiAgICBkaXYucXVlcnlTZWxlY3RvcihcInNwYW5cIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjRUExOTE5XCI7XG4gICAgZGl2LnF1ZXJ5U2VsZWN0b3IoXCJsaVwiKS5zdHlsZS5jb2xvciA9IFwiI0VBMTkxOVwiO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IHZhbGlkYXRlVGl0bGUgZnJvbSBcIi4uLy4uLy4uL2xvZ2ljL2Jsb2dBZGRlci92YWxpZGF0aW9ucy90aXRsZS90aXRsZVwiO1xuaW1wb3J0IHVwZGF0ZVRpdGxlIGZyb20gXCIuL3VwZGF0ZVwiO1xuXG5jb25zdCB2YWxpZGF0aW9ucyA9IFtcIuGDm+GDmOGDnOGDmOGDm+GDo+GDmyAyIOGDoeGDmOGDm+GDkeGDneGDmuGDnVwiXTtcbmxldCBjb250YWluZXI7XG5sZXQgaW5wdXQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRpdGxlKCkge1xuICBjb25zdCBibG9nSW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibG9nLWluZm9cIikpO1xuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IFwi4YOh4YOQ4YOX4YOQ4YOj4YOg4YOYXCI7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpdGxlLWlucHV0XCIpO1xuICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IFwiKlwiO1xuICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcblxuICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZChcInRpdGxlLWlucHV0XCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlLWlucHV0XCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIuGDqOGDlOGDmOGDp+GDleGDkOGDnOGDlOGDlyDhg6Hhg5Dhg5fhg5Dhg6Phg6Dhg5hcIik7XG4gIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgY29uc3QgdGV4dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHRleHRzLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZGF0aW9uLXRleHRzXCIpO1xuICBkaXYuYXBwZW5kQ2hpbGQodGV4dHMpO1xuXG4gIHZhbGlkYXRpb25zLmZvckVhY2goKGVsKSA9PiB7XG4gICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInZhbGlkYXRpb24tY29udGFpbmVyXCIpO1xuICAgIHRleHRzLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBiZWZvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBiZWZvcmUuY2xhc3NMaXN0LmFkZChcInZhbGlkYXRpb24tYmVmb3JlXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiZWZvcmUpO1xuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gZWw7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuICB9KTtcblxuICBpZiAoYmxvZ0luZm8gJiYgYmxvZ0luZm8udGl0bGUpIHtcbiAgICBpbnB1dC52YWx1ZSA9IGJsb2dJbmZvLnRpdGxlO1xuICAgIHZhbGlkYXRlVGl0bGUoaW5wdXQsIGNvbnRhaW5lcik7XG4gIH1cblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLnZhbHVlKSB0aGlzLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICM1RDM3RjNcIjtcbiAgfSk7XG5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy52YWx1ZS5jaGFyQXQoMCkgPT09IFwiIFwiKSB7XG4gICAgICBhbGVydChcIklucHV0IHNob3VsZCBub3Qgc3RhcnQgd2l0aCBhIHNwYWNlXCIpO1xuICAgICAgdGhpcy52YWx1ZSA9IFwiXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhbGlkYXRlVGl0bGUodGhpcywgY29udGFpbmVyKTtcbiAgfSk7XG5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjZTRlM2ViXCI7XG4gICAgICB1cGRhdGVUaXRsZShcImluaXRcIiwgY29udGFpbmVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkaXY7XG59XG5cbmV4cG9ydCB7IGlucHV0LCBjb250YWluZXIgfTtcbiIsImltcG9ydCB2YWxpZGF0ZVR3b0xldHRlcnMgZnJvbSBcIi4vdHdvTGV0dGVyc1wiO1xuaW1wb3J0IHVwZGF0ZVRpdGxlIGZyb20gXCIuLi8uLi8uLi8uLi9kb20vYmxvZ0FkZGVyL3RpdGxlL3VwZGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZVRpdGxlKGlucHV0LCBkaXYpIHtcbiAgY29uc3QgYmxvZ0luZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvZy1pbmZvXCIpKTtcbiAgY29uc3QgdmFsdWUgPSBpbnB1dC52YWx1ZTtcblxuICB1cGRhdGVUaXRsZSh2YWxpZGF0ZVR3b0xldHRlcnModmFsdWUpLCBkaXYpO1xuXG4gIGJsb2dJbmZvLnRpdGxlID0gdmFsdWU7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmxvZy1pbmZvXCIsIEpTT04uc3RyaW5naWZ5KGJsb2dJbmZvKSk7XG5cbiAgaWYgKHZhbGlkYXRlVHdvTGV0dGVycyh2YWx1ZSkpIHtcbiAgICBpbnB1dC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjMTREODFDXCI7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgaW5wdXQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI0VBMTkxOVwiO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IGZvbGRlckltZyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL2ZvbGRlci1hZGQucG5nXCI7XG5pbXBvcnQgcmVtb3ZlSW1nUG5nIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvcmVtb3ZlLnBuZ1wiO1xuaW1wb3J0IHVwZGF0ZUltYWdlVXBsb2FkZXIgZnJvbSBcIi4vdXBkYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUltYWdlVXBsb2FkZXIoKSB7XG4gIGNvbnN0IGJsb2dJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsb2ctaW5mb1wiKSk7XG5cbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImltYWdlLWlucHV0XCIpO1xuICBsYWJlbC5jbGFzc0xpc3QuYWRkKFwiaW1nLXVwbG9hZGVyLWNvbnRhaW5lclwiKTtcblxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHRleHQudGV4dENvbnRlbnQgPSBcIuGDkOGDouGDleGDmOGDoOGDl+GDlOGDlyDhg6Thg53hg6Lhg51cIjtcbiAgbGFiZWwuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgY29uc3QgdXBsb2FkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB1cGxvYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImltYWdlLXVwbG9hZGVyXCIpO1xuICB1cGxvYWRlci5jbGFzc0xpc3QuYWRkKFwiaW1hZ2UtdXBsb2FkZXJcIik7XG4gIGxhYmVsLmFwcGVuZENoaWxkKHVwbG9hZGVyKTtcblxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImZpbGVcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW1hZ2UtaW5wdXRcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcImFjY2VwdFwiLCBcImltYWdlLypcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcIlwiKTtcbiAgdXBsb2FkZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICBpbWcuY2xhc3NMaXN0LmFkZChcImZvbGRlci1hZGRlci1pbWdcIik7XG4gIGltZy5zcmMgPSBmb2xkZXJJbWc7XG4gIHVwbG9hZGVyLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgY29uc3QgdGV4dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0ZXh0cy5jbGFzc0xpc3QuYWRkKFwiaW1hZ2UtdGV4dHNcIik7XG4gIHVwbG9hZGVyLmFwcGVuZENoaWxkKHRleHRzKTtcblxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSBcIuGDqeGDkOGDkOGDkuGDk+GDlOGDlyDhg6Thg5Dhg5jhg5rhg5gg4YOQ4YOlIOGDkOGDnFwiO1xuICB0ZXh0cy5hcHBlbmRDaGlsZChzcGFuKTtcblxuICBjb25zdCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmEudGV4dENvbnRlbnQgPSBcIuGDkOGDmOGDoOGDqeGDmOGDlOGDlyDhg6Thg5Dhg5jhg5rhg5hcIjtcbiAgdGV4dHMuYXBwZW5kQ2hpbGQocGFyYSk7XG5cbiAgY29uc3QgcmVtb3ZlSW1nID0gbmV3IEltYWdlKCk7XG4gIHJlbW92ZUltZy5zcmMgPSByZW1vdmVJbWdQbmc7XG4gIHJlbW92ZUltZy5jbGFzc0xpc3QuYWRkKFwicmVtb3ZlLWltZ1wiLCBcImhpZGRlblwiKTtcbiAgdGV4dHMuYXBwZW5kQ2hpbGQocmVtb3ZlSW1nKTtcblxuICBpZiAoYmxvZ0luZm8gJiYgYmxvZ0luZm8uaW1hZ2UpIHtcbiAgICB1cGRhdGVJbWFnZVVwbG9hZGVyKFxuICAgICAgaW5wdXQsXG4gICAgICBibG9nSW5mbyxcbiAgICAgIHVwbG9hZGVyLFxuICAgICAgdGV4dHMsXG4gICAgICBwYXJhLFxuICAgICAgc3BhbixcbiAgICAgIGltZyxcbiAgICAgIHJlbW92ZUltZyxcbiAgICAgIGlucHV0LFxuICAgICAgdHJ1ZVxuICAgICk7XG4gIH1cblxuICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVtb3ZlLWltZ1wiKSkgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcblxuICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuXG4gIGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcm9wXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZpbGVzID0gZS5kYXRhVHJhbnNmZXIuZmlsZXM7XG5cbiAgICB1cGRhdGVJbWFnZVVwbG9hZGVyKFxuICAgICAgZS50YXJnZXQsXG4gICAgICBibG9nSW5mbyxcbiAgICAgIHVwbG9hZGVyLFxuICAgICAgdGV4dHMsXG4gICAgICBwYXJhLFxuICAgICAgc3BhbixcbiAgICAgIGltZyxcbiAgICAgIHJlbW92ZUltZyxcbiAgICAgIGlucHV0LFxuICAgICAgZmFsc2UsXG4gICAgICBmaWxlc1xuICAgICk7XG4gIH0pO1xuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICB1cGRhdGVJbWFnZVVwbG9hZGVyKFxuICAgICAgZS50YXJnZXQsXG4gICAgICBibG9nSW5mbyxcbiAgICAgIHVwbG9hZGVyLFxuICAgICAgdGV4dHMsXG4gICAgICBwYXJhLFxuICAgICAgc3BhbixcbiAgICAgIGltZyxcbiAgICAgIHJlbW92ZUltZyxcbiAgICAgIGlucHV0LFxuICAgICAgZmFsc2VcbiAgICApO1xuICB9KTtcblxuICByZW1vdmVJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgdXBkYXRlSW1hZ2VVcGxvYWRlcihcbiAgICAgIGUudGFyZ2V0LFxuICAgICAgYmxvZ0luZm8sXG4gICAgICB1cGxvYWRlcixcbiAgICAgIHRleHRzLFxuICAgICAgcGFyYSxcbiAgICAgIHNwYW4sXG4gICAgICBpbWcsXG4gICAgICByZW1vdmVJbWcsXG4gICAgICBpbnB1dCxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlSW1hZ2VVcGxvYWRlcihcbiAgZSxcbiAgYmxvZ0luZm8sXG4gIHVwbG9hZGVyLFxuICB0ZXh0cyxcbiAgbGFiZWwsXG4gIHNwYW4sXG4gIGltZyxcbiAgcmVtb3ZlSW1nLFxuICBpbnB1dCxcbiAgcmVmcmVzaFBhZ2UsXG4gIGZpbGV6XG4pIHtcbiAgaWYgKHJlZnJlc2hQYWdlICYmIGUuaWQgPT09IFwiaW1hZ2UtaW5wdXRcIikge1xuICAgIGltYWdlKCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBibG9nSW5mby5pbWFnZS5uYW1lO1xuXG4gICAgY29uc3QgYmFzZTY0U3RyaW5nID0gXCJ5b3VyIGJhc2U2NCBzdHJpbmdcIjtcbiAgICBjb25zdCBmaWxlVHlwZSA9IGJsb2dJbmZvLmltYWdlLnR5cGU7XG4gICAgY29uc3QgZmlsZU5hbWUgPSBibG9nSW5mby5pbWFnZS5uYW1lO1xuICAgIGNvbnN0IGZpbGUgPSBiYXNlNjRTdHJpbmdUb0ZpbGUoYmFzZTY0U3RyaW5nLCBmaWxlVHlwZSwgZmlsZU5hbWUpO1xuICAgIC8vIGNvbnNvbGUubG9nKGZpbGUpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChcbiAgICAhZS5jbGFzc0xpc3QuY29udGFpbnMoXCJyZW1vdmUtaW1nXCIpICYmXG4gICAgIXJlZnJlc2hQYWdlICYmXG4gICAgKGUuaWQgPT09IFwiaW1hZ2UtaW5wdXRcIiB8fCBlLmNsb3Nlc3QoXCIjaW1hZ2UtdXBsb2FkZXJcIikpXG4gICkge1xuICAgIGlmICghaW5wdXQuZmlsZXNbMF0gJiYgZS5pZCA9PT0gXCJpbWFnZS1pbnB1dFwiKSByZXR1cm47XG5cbiAgICBsZXQgZmlsZXM7XG4gICAgaWYgKGlucHV0LmZpbGVzWzBdKSBmaWxlcyA9IGlucHV0LmZpbGVzWzBdO1xuICAgIGVsc2UgZmlsZXMgPSBmaWxlelswXTtcblxuICAgIGltYWdlKCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBmaWxlcy5uYW1lO1xuXG4gICAgY29uc3QgYmxvZ0luZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvZy1pbmZvXCIpKTtcblxuICAgIGdldEJhc2U2NChmaWxlcylcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChiYXNlNjQpIHtcbiAgICAgICAgYmxvZ0luZm8uaW1hZ2UgPSB7fTtcbiAgICAgICAgYmxvZ0luZm8uaW1hZ2UuYmFzZTY0ID0gYmFzZTY0O1xuICAgICAgICBibG9nSW5mby5pbWFnZS5uYW1lID0gZmlsZXMubmFtZTtcbiAgICAgICAgYmxvZ0luZm8uaW1hZ2UudHlwZSA9IGZpbGVzLnR5cGU7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmxvZy1pbmZvXCIsIEpTT04uc3RyaW5naWZ5KGJsb2dJbmZvKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkZhaWxlZCB0byBnZXQgYmFzZTY0IHN0cmluZzogXCIsIGVycm9yKTtcbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwicmVtb3ZlLWltZ1wiKSkge1xuICAgIG5vSW1hZ2UoKTtcblxuICAgIGNvbnN0IGJsb2dJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsb2ctaW5mb1wiKSk7XG4gICAgYmxvZ0luZm8uaW1hZ2UgPSBudWxsO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmxvZy1pbmZvXCIsIEpTT04uc3RyaW5naWZ5KGJsb2dJbmZvKSk7XG4gIH1cblxuICBmdW5jdGlvbiBiYXNlNjRTdHJpbmdUb0ZpbGUoYmFzZTY0U3RyaW5nLCBmaWxlVHlwZSwgZmlsZU5hbWUpIHtcbiAgICAvLyBDb252ZXJ0IGJhc2U2NCBzdHJpbmcgdG8gYnl0ZSBhcnJheVxuICAgIGNvbnN0IGJ5dGVDaGFyYWN0ZXJzID0gYXRvYihiYXNlNjRTdHJpbmcpO1xuICAgIGNvbnN0IGJ5dGVBcnJheXMgPSBbXTtcbiAgICBmb3IgKGxldCBvZmZzZXQgPSAwOyBvZmZzZXQgPCBieXRlQ2hhcmFjdGVycy5sZW5ndGg7IG9mZnNldCArPSA1MTIpIHtcbiAgICAgIGNvbnN0IHNsaWNlID0gYnl0ZUNoYXJhY3RlcnMuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyA1MTIpO1xuICAgICAgY29uc3QgYnl0ZU51bWJlcnMgPSBuZXcgQXJyYXkoc2xpY2UubGVuZ3RoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpY2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgYnl0ZU51bWJlcnNbaV0gPSBzbGljZS5jaGFyQ29kZUF0KGkpO1xuICAgICAgfVxuICAgICAgY29uc3QgYnl0ZUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZU51bWJlcnMpO1xuICAgICAgYnl0ZUFycmF5cy5wdXNoKGJ5dGVBcnJheSk7XG4gICAgfVxuXG4gICAgLy8gQ29udmVydCBieXRlIGFycmF5IHRvIEJsb2JcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoYnl0ZUFycmF5cywgeyB0eXBlOiBmaWxlVHlwZSB9KTtcblxuICAgIC8vIENvbnZlcnQgQmxvYiB0byBGaWxlXG4gICAgY29uc3QgZmlsZSA9IG5ldyBGaWxlKFtibG9iXSwgZmlsZU5hbWUsIHsgdHlwZTogZmlsZVR5cGUgfSk7XG5cbiAgICByZXR1cm4gZmlsZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEJhc2U2NChmaWxlKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgICAgcmVhZGVyLm9uZXJyb3IgPSAoZXJyb3IpID0+IHJlamVjdChlcnJvcik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbWFnZSgpIHtcbiAgICB1cGxvYWRlci5zdHlsZS5wYWRkaW5nID0gXCIyMHB4XCI7XG4gICAgdGV4dHMuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcInNwYWNlLWJldHdlZW5cIjtcbiAgICBsYWJlbC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xuICAgIGxhYmVsLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjUwMFwiO1xuICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBpbWcuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICByZW1vdmVJbWcuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vSW1hZ2UoKSB7XG4gICAgdXBsb2FkZXIuc3R5bGUucGFkZGluZyA9IFwiODBweCAxMDBweFwiO1xuICAgIHRleHRzLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwi4YOQ4YOY4YOg4YOp4YOY4YOU4YOXIOGDpOGDkOGDmOGDmuGDmFwiO1xuICAgIGxhYmVsLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJ1bmRlcmxpbmVcIjtcbiAgICBsYWJlbC5zdHlsZS5mb250V2VpZ2h0ID0gXCI3MDBcIjtcbiAgICBzcGFuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgaW1nLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgcmVtb3ZlSW1nLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICB9XG59XG4iLCJpbXBvcnQgdmFsaWRhdGVJbWcgZnJvbSBcIi4uL2ltYWdlL2ltYWdlXCI7XG5pbXBvcnQgdmFsaWRhdGVBdXRob3IgZnJvbSBcIi4uL2F1dGhvci9hdXRob3JcIjtcbmltcG9ydCB2YWxpZGF0ZVRpdGxlIGZyb20gXCIuLi90aXRsZS90aXRsZVwiO1xuaW1wb3J0IHZhbGlkYXRlRGVzY3JpcHRpb24gZnJvbSBcIi4uL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uXCI7XG5pbXBvcnQgdmFsaWRhdGVEYXRlIGZyb20gXCIuLi9kYXRlL2RhdGVcIjtcblxuaW1wb3J0IHtcbiAgaW5wdXQgYXMgYXV0aG9ySW5wdXQsXG4gIHZhbGlkYXRpb25BcnIgYXMgYXV0aG9yVmFsaWRhdGlvbkFycixcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2RvbS9ibG9nQWRkZXIvYXV0aG9yL2NyZWF0ZVwiO1xuaW1wb3J0IHtcbiAgaW5wdXQgYXMgdGl0bGVJbnB1dCxcbiAgY29udGFpbmVyIGFzIHRpdGxlQ29udGFpbmVyLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vZG9tL2Jsb2dBZGRlci90aXRsZS9jcmVhdGVcIjtcbmltcG9ydCB7XG4gIHRleHRhcmVhIGFzIGRlc2NyaXB0b25UZXh0YXJlYSxcbiAgY29udGFpbmVyIGFzIGRlc2NyaXB0aW9uQ29udGFpbmVyLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vZG9tL2Jsb2dBZGRlci9kZXNjcmlwdGlvbi9jcmVhdGVcIjtcbmltcG9ydCB7IGlucHV0IGFzIGRhdGVJbnB1dCB9IGZyb20gXCIuLi8uLi8uLi8uLi9kb20vYmxvZ0FkZGVyL2RhdGUvY3JlYXRlXCI7XG5pbXBvcnQgeyBjb250YWluZXIgYXMgY2F0ZWdvcmllc0NvbnRhaW5lciB9IGZyb20gXCIuLi8uLi8uLi8uLi9kb20vYmxvZ0FkZGVyL2NhdGVnb3JpZXMvY3JlYXRlXCI7XG5pbXBvcnQgc2VuZEJsb2cgZnJvbSBcIi4uLy4uLy4uL2Jsb2dzL3NlbmRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKCkge1xuICBjb25zdCBibG9nSW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibG9nLWluZm9cIikpO1xuXG4gIGlmICghdmFsaWRhdGVBdXRob3IoYXV0aG9ySW5wdXQsIGF1dGhvclZhbGlkYXRpb25BcnIpKVxuICAgIGF1dGhvcklucHV0LnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNFQTE5MTlcIjtcbiAgaWYgKCF2YWxpZGF0ZVRpdGxlKHRpdGxlSW5wdXQsIHRpdGxlQ29udGFpbmVyKSlcbiAgICB0aXRsZUlucHV0LnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNFQTE5MTlcIjtcbiAgaWYgKCF2YWxpZGF0ZURlc2NyaXB0aW9uKGRlc2NyaXB0b25UZXh0YXJlYSwgZGVzY3JpcHRpb25Db250YWluZXIpKVxuICAgIGRlc2NyaXB0b25UZXh0YXJlYS5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjRUExOTE5XCI7XG4gIGlmICghdmFsaWRhdGVEYXRlKGRhdGVJbnB1dCkpIGRhdGVJbnB1dC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjRUExOTE5XCI7XG4gIGlmIChibG9nSW5mby5jYXRlZ29yaWVzLmxlbmd0aCA8IDEpXG4gICAgY2F0ZWdvcmllc0NvbnRhaW5lci5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjRUExOTE5XCI7XG5cbiAgaWYgKFxuICAgIHZhbGlkYXRlSW1nKCkgJiZcbiAgICB2YWxpZGF0ZUF1dGhvcihhdXRob3JJbnB1dCwgYXV0aG9yVmFsaWRhdGlvbkFycikgJiZcbiAgICB2YWxpZGF0ZVRpdGxlKHRpdGxlSW5wdXQsIHRpdGxlQ29udGFpbmVyKSAmJlxuICAgIHZhbGlkYXRlRGVzY3JpcHRpb24oZGVzY3JpcHRvblRleHRhcmVhLCBkZXNjcmlwdGlvbkNvbnRhaW5lcikgJiZcbiAgICB2YWxpZGF0ZURhdGUoZGF0ZUlucHV0KSAmJlxuICAgIGJsb2dJbmZvLmNhdGVnb3JpZXMubGVuZ3RoID4gMFxuICApXG4gICAgc2VuZEJsb2coKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlSW1nKCkge1xuICBjb25zdCBibG9nSW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibG9nLWluZm9cIikpO1xuXG4gIGlmIChibG9nSW5mby5pbWFnZSkgcmV0dXJuIHRydWU7XG5cbiAgaWYgKCFibG9nSW5mby5pbWFnZSkge1xuICAgIGFsZXJ0KFwiUGxlYXNlIHVwbG9hZCBhbiBpbWFnZVwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNlbmRCbG9nKCkge1xuICBjb25zdCBibG9nSW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibG9nLWluZm9cIikpO1xuICBjb25zb2xlLmxvZyhibG9nSW5mbyk7XG59XG4iLCJpbXBvcnQgdmFsaWRhdGVFbWFpbCBmcm9tIFwiLi4vLi4vLi4vbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRpb25zL2VtYWlsL2VtYWlsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVtYWlsKCkge1xuICBjb25zdCBibG9nSW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibG9nLWluZm9cIikpO1xuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIsIFwiZW1haWwtY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IFwi4YOU4YOaLeGDpOGDneGDoeGDouGDkFwiO1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJlbWFpbC1pbnB1dFwiKTtcbiAgZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJFeGFtcGxlQHJlZGJlcnJ5LmdlXCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZW1haWxcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZW1haWwtaW5wdXRcIik7XG4gIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgaWYgKGJsb2dJbmZvICYmIGJsb2dJbmZvLmVtYWlsKSB7XG4gICAgaW5wdXQudmFsdWUgPSBibG9nSW5mby5lbWFpbDtcbiAgICBpZiAodmFsaWRhdGVFbWFpbChpbnB1dCkpIGlucHV0LnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICMxNEQ4MUNcIjtcbiAgICBpZiAoIXZhbGlkYXRlRW1haWwoaW5wdXQpKSBpbnB1dC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjRUExOTE5XCI7XG4gIH1cblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLnZhbHVlKSB0aGlzLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICM1RDM3RjNcIjtcbiAgfSk7XG5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodmFsaWRhdGVFbWFpbCh0aGlzKSkgdGhpcy5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjMTREODFDXCI7XG4gICAgaWYgKCF2YWxpZGF0ZUVtYWlsKHRoaXMpKSB0aGlzLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNFQTE5MTlcIjtcblxuICAgIGJsb2dJbmZvLmVtYWlsID0gdGhpcy52YWx1ZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJsb2ctaW5mb1wiLCBKU09OLnN0cmluZ2lmeShibG9nSW5mbykpO1xuICB9KTtcblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFpbnB1dC52YWx1ZSkgdGhpcy5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAgI2U0ZTNlYlwiO1xuICB9KTtcblxuICByZXR1cm4gZGl2O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChpbnB1dCkge1xuICBjb25zdCByZWdleCA9IC9eW2EtekEtWjAtOS5fKy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVpdezIsfSQvO1xuXG4gIGlmIChyZWdleC50ZXN0KGlucHV0LnZhbHVlKSAmJiBpbnB1dC52YWx1ZS5lbmRzV2l0aChcIkByZWRiZXJyeS5nZVwiKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ2F0ZWdvcmllcyhkYXRhKSB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tZGl2XCIpO1xuXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjYXRlZ29yaWVzLmNsYXNzTGlzdC5hZGQoXCJjYXRlZ29yaWVzLWNvbnRhaW5lclwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjYXRlZ29yaWVzKTtcblxuICBkYXRhLmRhdGEuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5XCIsIGBjYXRlZ29yeS0ke2VsLmlkfWApO1xuICAgIGNhdGVnb3J5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGVsLmJhY2tncm91bmRfY29sb3I7XG4gICAgY2F0ZWdvcmllcy5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XG5cbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IGVsLnRpdGxlO1xuICAgIHRleHQuc3R5bGUuY29sb3IgPSBlbC50ZXh0X2NvbG9yO1xuICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKHRleHQpO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQmxvZ3ModXJsLCB0b2tlbikge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VybH0vYmxvZ3NgLCB7XG4gICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIGFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcbiAgICB9LFxuICB9KTtcblxuICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSFRUUCBlcnJvciBcIiArIHJlc3BvbnNlLnN0YXR1cyk7XG4gIH1cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgcmV0dXJuIGRhdGE7XG59XG4iLCJpbXBvcnQgZXhwYW5kSW1nIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvZXhwYW5kLnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVCbG9ncyhkYXRhKSB7XG4gIC8vICAgY29uc29sZS5sb2coZGF0YSk7XG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tZGl2XCIpO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYmxvZ3MtY29udGFpbmVyXCIpO1xuICBtYWluLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgZGF0YS5kYXRhLmZvckVhY2goKGluZm8pID0+IHtcbiAgICBjb25zdCBibG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBibG9nLmNsYXNzTGlzdC5hZGQoXCJibG9nLWNvbnRhaW5lclwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmxvZyk7XG5cbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IGluZm8uaW1hZ2U7XG4gICAgYmxvZy5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJibG9nLWNvbnRlbnRcIik7XG4gICAgYmxvZy5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIGNvbnN0IGF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBhdXRob3IudGV4dENvbnRlbnQgPSBpbmZvLmF1dGhvcjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGF1dGhvcik7XG5cbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IGluZm8ucHVibGlzaF9kYXRlO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGluZm8udGl0bGU7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBjYXRlZ29yaWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXRlZ29yaWVzLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNhdGVnb3JpZXNcIik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjYXRlZ29yaWVzKTtcblxuICAgIGluZm8uY2F0ZWdvcmllcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcIm1haW4tY2F0ZWdvcnlcIiwgYG1haW4tY2F0ZWdvcnktJHtlbC5pZH1gKTtcbiAgICAgIGNhdGVnb3J5LnRleHRDb250ZW50ID0gZWwudGl0bGU7XG4gICAgICBjYXRlZ29yeS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBlbC5iYWNrZ3JvdW5kX2NvbG9yO1xuICAgICAgY2F0ZWdvcnkuc3R5bGUuY29sb3IgPSBlbC50ZXh0X2NvbG9yO1xuICAgICAgY2F0ZWdvcmllcy5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGluZm8uZGVzY3JpcHRpb247XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBleHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGV4cGFuZC5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kLWJsb2dcIik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChleHBhbmQpO1xuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBcIuGDoeGDoOGDo+GDmuGDkOGDkyDhg5zhg5Dhg67hg5Xhg5BcIjtcbiAgICBleHBhbmQuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gZXhwYW5kSW1nO1xuICAgIGV4cGFuZC5hcHBlbmRDaGlsZChpbWcpO1xuICB9KTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdDA6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi9zcmMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IGNyZWF0ZUhlYWRlciBmcm9tIFwiLi9jb21wb25lbnRzL2RvbS9oZWFkZXIvY3JlYXRlXCI7XG5pbXBvcnQgY3JlYXRlTWFpbiBmcm9tIFwiLi9jb21wb25lbnRzL2RvbS9tYWluL2NyZWF0ZVwiO1xuaW1wb3J0IGNyZWF0ZUJsb2dBZGRlciBmcm9tIFwiLi9jb21wb25lbnRzL2RvbS9ibG9nQWRkZXIvY3JlYXRlXCI7XG5pbXBvcnQgZmV0Y2hDYXRlZ29yaWVzIGZyb20gXCIuL2NvbXBvbmVudHMvbG9naWMvY2F0ZWdvcmllcy9mZXRjaFwiO1xuaW1wb3J0IGNyZWF0ZUNhdGVnb3JpZXMgZnJvbSBcIi4vY29tcG9uZW50cy9kb20vbWFpbi9jYXRlZ29yaWVzL2NyZWF0ZVwiO1xuaW1wb3J0IGZldGNoQmxvZ3MgZnJvbSBcIi4vY29tcG9uZW50cy9sb2dpYy9ibG9ncy9mZXRjaFwiO1xuaW1wb3J0IGNyZWF0ZUJsb2dzIGZyb20gXCIuL2NvbXBvbmVudHMvZG9tL21haW4vYmxvZ3MvY3JlYXRlXCI7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbmNvbnN0IHVybCA9IFwiaHR0cHM6Ly9hcGkuYmxvZy5yZWRiZXJyeWludGVybnNoaXAuZ2UvYXBpXCI7XG5jb25zdCB0b2tlbiA9XG4gIFwiZmM5YTgwNzYwOGQwMDZmOWQ3NjA0YmM3OGJmNjJiMDI3YTIyNDdjMGMyMzJkYzIxN2E2ZTFkNTQ3NmQ1MjcxYVwiO1xuXG5jb25zdCBsb2dpbiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2dpblwiKSk7XG5pZiAoIWxvZ2luKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvZ2luXCIsIEpTT04uc3RyaW5naWZ5KGZhbHNlKSk7XG5cbmNvbnN0IHN0YXR1cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibG9nLWFkZGVyLXN0YXR1c1wiKSk7XG5pZiAoIXN0YXR1cykgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJibG9nLWFkZGVyLXN0YXR1c1wiLCBKU09OLnN0cmluZ2lmeShmYWxzZSkpO1xuXG5jb25zdCBibG9nSW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibG9nLWluZm9cIikpO1xuaWYgKCFibG9nSW5mbykgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJibG9nLWluZm9cIiwgSlNPTi5zdHJpbmdpZnkoe30pKTtcblxuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUJsb2dBZGRlcigpKTtcblxuZmV0Y2hDYXRlZ29yaWVzKHVybCkudGhlbigoZGF0YSkgPT4ge1xuICBjcmVhdGVDYXRlZ29yaWVzKGRhdGEpO1xuXG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGZldGNoQmxvZ3ModXJsLCB0b2tlbikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgY3JlYXRlQmxvZ3MoZGF0YSk7XG4gICAgfSk7XG4gIH0sIDEwMDApO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=