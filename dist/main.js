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
  border-bottom: 1px solid #e4e3eb;
  background: #fff;
  font-family: "FiraGO";
}
#header-div .header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 100px;
  background-color: #f8fafc;
}
#header-div .header-content button {
  line-height: 20px;
  font-family: inherit;
  padding: 10px 20px;
  background-color: #5d37f3;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
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
  text-align: center;
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
  margin: auto;
}
#main-div .blogs-container .blog-container {
  width: 408px;
  justify-self: center;
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
  overflow-x: scroll;
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
  font-weight: 400;
  line-height: 28px;
  height: 3.5em;
  overflow: hidden;
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
  padding: 40px 24px;
  width: 480px;
  transform: translateY(-50%);
  border-radius: 12px;
  background: #fff;
}
#modal-container .modal-content .x-img {
  align-self: end;
  height: 12px;
  color: #1a1a1f;
  cursor: pointer;
}
#modal-container .modal-content .x-img:hover {
  scale: 1.1;
  transition-duration: 0.5s;
}
#modal-container .modal-content .input-container {
  display: flex;
  flex-direction: column;
}
#modal-container .modal-content .input-container h1 {
  margin-bottom: 24px;
  color: #1a1a1f;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
}
#modal-container .modal-content .input-container label {
  margin-bottom: 8px;
  color: #1a1a1f;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
}
#modal-container .modal-content .input-container input {
  border: 1.5px solid #5d37f3;
  font-family: inherit;
  outline: none;
  background-color: #f7f7ff;
  border-radius: 12px;
  padding: 10px;
  margin-bottom: 24px;
  color: #85858d;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
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
  padding: 40px 76px 110px 76px;
  border-top: 1px solid #e4e3eb;
  position: relative;
}
#blog-adder .back-arrow {
  position: absolute;
  cursor: pointer;
}
#blog-adder .blog-adder-content {
  width: 600px;
  margin-left: 480px;
}
#blog-adder .blog-adder-content h1 {
  font-size: 2.3em;
  color: #1a1a1f;
  line-height: 40px;
  font-weight: 700;
}
#blog-adder .blog-adder-content .blog-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 40px 0px;
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
  border-radius: 12px;
  border: 1px dashed #85858d;
  background: #f4f3ff;
  border: 1.5px dashed #85858d;
  display: flex;
  flex-direction: column;
  padding: 48px 165px;
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
#blog-adder .blog-adder-content .blog-form .img-uploader-container .image-uploader .image-texts span,
#blog-adder .blog-adder-content .blog-form .img-uploader-container .image-uploader .image-texts p {
  color: #1a1a1f;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
#blog-adder .blog-adder-content .blog-form .img-uploader-container .image-uploader .image-texts p {
  text-decoration: underline;
  cursor: pointer;
  font-weight: 600;
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
  color: #1a1a1f;
  font-weight: 600;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}
#blog-adder .blog-adder-content .blog-form .container input,
#blog-adder .blog-adder-content .blog-form .container textarea,
#blog-adder .blog-adder-content .blog-form .container .select-container {
  padding: 12px 16px;
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
  color: #85858d;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
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
#blog-adder .blog-adder-content .add-blog-btn {
  float: right;
  font-family: inherit;
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
#blog-adder .blog-adder-content .add-blog-btn:hover {
  background-color: #5d37f3;
}

#blog {
  font-family: "FiraGO";
  position: relative;
  background: #f3f2fa;
  min-height: 100vh;
  padding: 40px 0px;
}
#blog .back-arrow {
  position: absolute;
  cursor: pointer;
  margin-left: 76px;
}
#blog .blog-content {
  width: 720px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
#blog .blog-content img {
  height: 328px;
}
#blog .blog-content .blog-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
#blog .blog-content .blog-info .wrapper-div {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
#blog .blog-content .blog-info .wrapper-div h2 {
  color: #1a1a1f;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
}
#blog .blog-content .blog-info .wrapper-div p {
  color: #85858d;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}
#blog .blog-content .blog-info h1 {
  color: #1a1a1f;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
}
#blog .blog-content .blog-info .categories {
  display: flex;
  gap: 16px;
}
#blog .blog-content .blog-info .categories .category {
  border-radius: 30px;
  padding: 6px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
}
#blog .blog-content .blog-info .description-para {
  color: #404049;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
}
#blog .related {
  padding: 0 76px;
  margin-top: 98px;
}
#blog .related .upper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#blog .related .upper h1 {
  color: #1a1a1f;
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
}
#blog .related .upper .buttons-div {
  display: flex;
  justify-content: space-between;
  gap: 24px;
}
#blog .related .upper .buttons-div rect {
  cursor: pointer;
}
#blog .related .upper .buttons-div rect:hover {
  fill: #5d37f3;
}

#success-container {
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
#success-container .content {
  display: flex;
  flex-direction: column;
  padding: 40px 24px;
  width: 480px;
  transform: translateY(-50%);
  border-radius: 12px;
  background: #fff;
}
#success-container .content .x-img {
  align-self: end;
  height: 12px;
  color: #1a1a1f;
  cursor: pointer;
}
#success-container .content .x-img:hover {
  scale: 1.1;
  transition-duration: 0.5s;
}
#success-container .content .success-img {
  height: 53px;
  width: 53px;
  align-self: center;
  margin-top: 25px;
}
#success-container .content h1 {
  color: #1a1a1f;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  margin-top: 16px;
}
#success-container .content button {
  font-family: inherit;
  margin-top: 48px;
  padding: 12px;
  border: none;
  background-color: #5d37f3;
  border-radius: 8px;
  letter-spacing: 0.03em;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}
#success-container .content button:hover {
  cursor: pointer;
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
  padding-bottom: 66px;
}`, "",{"version":3,"sources":["webpack://./src/styles/header.scss","webpack://./src/index.scss","webpack://./src/styles/main.scss","webpack://./src/styles/loginModal.scss","webpack://./src/styles/blogAdder.scss","webpack://./src/styles/blog.scss","webpack://./src/styles/successModal.scss"],"names":[],"mappings":"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","sourcesContent":["#header-div {\n  position: sticky;\n  top: 0;\n  border-bottom: 1px solid #e4e3eb;\n  background: #fff;\n  font-family: \"FiraGO\";\n\n  .header-content {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 25px 100px;\n    background-color: #f8fafc;\n\n    button {\n      line-height: 20px;\n      font-family: inherit;\n      padding: 10px 20px;\n      background-color: #5d37f3;\n      border: none;\n      border-radius: 8px;\n      color: #fff;\n      font-size: 14px;\n      font-style: normal;\n      font-weight: 500;\n      line-height: 20px;\n      cursor: pointer;\n    }\n  }\n}\n","@use \"/src/styles/header.scss\";\n@use \"/src/styles/main.scss\";\n@use \"/src/styles/loginModal.scss\";\n@use \"/src/styles/blogAdder.scss\";\n@use \"/src/styles/blog.scss\";\n@use \"/src/styles/successModal.scss\";\n\n@font-face {\n  font-family: \"FiraGO\";\n  src: url(\"/src/assets/fonts/FiraGO/FiraGO-Regular.otf\");\n}\n\n$body-color: #f1f5f9;\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.hidden {\n  display: none !important;\n}\n\nbody {\n  background-color: $body-color;\n  min-height: 100vh;\n  padding-bottom: 66px;\n}\n","#main-div {\n  display: flex;\n  flex-direction: column;\n  gap: 70px;\n  font-family: \"FiraGO\";\n\n  .main-info {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 70px 90px 0px 120px;\n\n    h1 {\n      font-family: inherit;\n      font-size: 4.8em;\n      color: #1a1a1f;\n    }\n  }\n\n  .categories-container {\n    padding: 30px 300px;\n    display: grid;\n    grid-template-columns: repeat(7, minmax(100px, 1fr));\n    grid-template-rows: 1fr 1fr;\n    grid-gap: 10px;\n\n    .category {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding: 4px 8px;\n      border-radius: 30px;\n      &:hover {\n        cursor: pointer;\n        scale: 1.05;\n        transition-duration: 0.3s;\n      }\n\n      p {\n        text-align: center;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        &:hover {\n          overflow: visible;\n        }\n      }\n    }\n  }\n\n  .blogs-container {\n    display: grid;\n    grid-template-columns: repeat(3, auto);\n    column-gap: 32px;\n    row-gap: 56px;\n    margin: auto;\n\n    .blog-container {\n      width: 408px;\n      justify-self: center;\n\n      img {\n        width: 100%;\n        height: 328px;\n        border-radius: 12px;\n      }\n\n      .blog-content {\n        display: flex;\n        flex-direction: column;\n        margin-top: 24px;\n        gap: 16px;\n\n        h2 {\n          color: #1a1a1f;\n          font-size: 16px;\n          font-weight: 500;\n          line-height: 20px;\n        }\n\n        p {\n          color: #85858d;\n          font-size: 12px;\n          font-weight: 400;\n        }\n\n        h1 {\n          color: #1a1a1f;\n          font-size: 20px;\n          font-weight: 500;\n          line-height: 28px;\n        }\n\n        .main-categories {\n          display: flex;\n          gap: 16px;\n          overflow-x: scroll;\n\n          .main-category {\n            padding: 6px 10px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            font-size: 12px;\n            border-radius: 30px;\n          }\n        }\n\n        .description {\n          color: #404049;\n          font-size: 16px;\n          font-weight: 400;\n          line-height: 28px;\n          height: 3.5em;\n          overflow: hidden;\n        }\n\n        .expand-blog {\n          display: flex;\n          cursor: pointer;\n\n          p {\n            color: #5d37f3;\n            font-size: 14px;\n            font-weight: 500;\n            line-height: 20px;\n          }\n\n          img {\n            height: 20px;\n            width: auto;\n          }\n        }\n      }\n    }\n  }\n}\n","#modal-container {\n  font-family: \"FiraGO\";\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n\n  .modal-content {\n    display: flex;\n    flex-direction: column;\n    padding: 40px 24px;\n    width: 480px;\n    transform: translateY(-50%);\n    border-radius: 12px;\n    background: #fff;\n\n    .x-img {\n      align-self: end;\n      height: 12px;\n      color: #1a1a1f;\n      cursor: pointer;\n      &:hover {\n        scale: 1.1;\n        transition-duration: 0.5s;\n      }\n    }\n\n    .input-container {\n      display: flex;\n      flex-direction: column;\n\n      h1 {\n        margin-bottom: 24px;\n        color: #1a1a1f;\n        text-align: center;\n        font-size: 24px;\n        font-style: normal;\n        font-weight: 700;\n        line-height: 32px;\n      }\n\n      label {\n        margin-bottom: 8px;\n        color: #1a1a1f;\n        font-size: 14px;\n        font-style: normal;\n        font-weight: 600;\n        line-height: 20px;\n      }\n\n      input {\n        border: 1.5px solid #5d37f3;\n        font-family: inherit;\n        outline: none;\n        background-color: #f7f7ff;\n        border-radius: 12px;\n        padding: 10px;\n        margin-bottom: 24px;\n        color: #85858d;\n        font-size: 14px;\n        font-style: normal;\n        font-weight: 400;\n        line-height: 20px;\n      }\n    }\n\n    .error-container {\n      display: flex;\n      align-items: center;\n      gap: 15px;\n      margin-bottom: 25px;\n\n      p {\n        font-size: 0.9em;\n        color: #ff0000;\n      }\n    }\n\n    .success-container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      gap: 15px;\n      margin-bottom: 20px;\n\n      h1 {\n        font-size: 1.3em;\n        color: #1a1a1f;\n      }\n    }\n\n    button {\n      font-family: inherit;\n      font-size: 0.9em;\n      padding: 12px;\n      border: none;\n      background-color: #5d37f3;\n      border-radius: 8px;\n      color: #ffffff;\n      font-weight: 600;\n      letter-spacing: 0.03em;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n}\n","#blog-adder {\n  font-family: \"FiraGO\";\n  padding: 40px 76px 110px 76px;\n  border-top: 1px solid #e4e3eb;\n  position: relative;\n\n  .back-arrow {\n    position: absolute;\n    cursor: pointer;\n  }\n\n  .blog-adder-content {\n    width: 600px;\n    margin-left: 480px;\n\n    h1 {\n      font-size: 2.3em;\n      color: #1a1a1f;\n      line-height: 40px;\n      font-weight: 700;\n    }\n\n    .blog-form {\n      display: flex;\n      flex-direction: column;\n      gap: 24px;\n      margin: 40px 0px;\n\n      .img-uploader-container {\n        display: flex;\n        flex-direction: column;\n        gap: 12px;\n        &:hover {\n          cursor: pointer;\n        }\n\n        .image-uploader {\n          border-radius: 12px;\n          border: 1px dashed #85858d;\n          background: #f4f3ff;\n          border: 1.5px dashed #85858d;\n          display: flex;\n          flex-direction: column;\n          padding: 48px 165px;\n          gap: 30px;\n\n          img {\n            align-self: center;\n          }\n\n          .image-texts {\n            display: flex;\n            justify-content: center;\n            gap: 5px;\n\n            span,\n            p {\n              color: #1a1a1f;\n              font-size: 14px;\n              font-weight: 400;\n              line-height: 20px;\n            }\n\n            p {\n              text-decoration: underline;\n              cursor: pointer;\n              font-weight: 600;\n            }\n\n            img {\n              cursor: pointer;\n            }\n          }\n        }\n      }\n\n      .author-title-container,\n      .date-category-container {\n        display: flex;\n        justify-content: space-between;\n        gap: 30px;\n      }\n\n      .container {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n        overflow: hidden;\n\n        label {\n          display: flex;\n          gap: 5px;\n          color: #1a1a1f;\n          font-weight: 600;\n          font-size: 14px;\n          font-weight: 500;\n          line-height: 20px;\n        }\n\n        input,\n        textarea,\n        .select-container {\n          padding: 12px 16px;\n          font-family: inherit;\n          border-radius: 12px;\n          outline: none;\n          border: 1px solid #e4e3eb;\n          color: #85858d;\n          background-color: #fcfcfd;\n        }\n\n        .validation-container {\n          display: flex;\n          align-items: center;\n          gap: 8px;\n        }\n\n        .validation-before {\n          width: 0.5em;\n          height: 0.5em;\n          border-radius: 50%;\n          display: block;\n          background-color: #85858d;\n        }\n\n        li {\n          list-style-type: none;\n          color: #85858d;\n          color: #85858d;\n          font-size: 12px;\n          font-weight: 400;\n          line-height: 20px;\n        }\n\n        .select-container {\n          display: grid;\n          grid-template-columns: auto;\n\n          .selected-category {\n            display: flex;\n            gap: 5px;\n            border-radius: 30px;\n            padding: 5px;\n\n            .category-container {\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              padding: 8px 12px;\n              border-radius: 30px;\n              gap: 7px;\n\n              p {\n                text-align: center;\n              }\n\n              img {\n                cursor: pointer;\n              }\n            }\n          }\n\n          select {\n            background-color: #fcfcfd;\n            border: none;\n            outline: none;\n            width: 100%;\n            cursor: pointer;\n          }\n        }\n      }\n\n      .email-container {\n        align-self: start;\n        width: calc(50% - 15px);\n      }\n    }\n    .add-blog-btn {\n      float: right;\n      font-family: inherit;\n      font-size: 0.9em;\n      width: calc(50% - 15px);\n      line-height: 20px;\n      color: #f8fafc;\n      padding: 15px 10px;\n      background-color: #e4e3eb;\n      border: none;\n      border-radius: 8px;\n      transition-duration: 0.5s;\n      cursor: pointer;\n      &:hover {\n        background-color: #5d37f3;\n      }\n    }\n  }\n}\n","#blog {\n  font-family: \"FiraGO\";\n  position: relative;\n  background: #f3f2fa;\n  min-height: 100vh;\n  padding: 40px 0px;\n\n  .back-arrow {\n    position: absolute;\n    cursor: pointer;\n    margin-left: 76px;\n  }\n\n  .blog-content {\n    width: 720px;\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n\n    img {\n      height: 328px;\n    }\n\n    .blog-info {\n      display: flex;\n      flex-direction: column;\n      gap: 24px;\n\n      .wrapper-div {\n        display: flex;\n        flex-direction: column;\n        gap: 8px;\n\n        h2 {\n          color: #1a1a1f;\n          font-size: 16px;\n          font-weight: 500;\n          line-height: 20px;\n        }\n\n        p {\n          color: #85858d;\n          font-size: 12px;\n          font-weight: 400;\n          line-height: 16px;\n        }\n      }\n\n      h1 {\n        color: #1a1a1f;\n        font-size: 32px;\n        font-style: normal;\n        font-weight: 700;\n        line-height: 40px;\n      }\n\n      .categories {\n        display: flex;\n        gap: 16px;\n\n        .category {\n          border-radius: 30px;\n          padding: 6px 10px;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          font-size: 12px;\n          font-weight: 500;\n          line-height: 16px;\n        }\n      }\n\n      .description-para {\n        color: #404049;\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 28px;\n      }\n    }\n  }\n\n  .related {\n    padding: 0 76px;\n    margin-top: 98px;\n\n    .upper {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n\n      h1 {\n        color: #1a1a1f;\n        font-size: 32px;\n        font-weight: 700;\n        line-height: 40px;\n      }\n\n      .buttons-div {\n        display: flex;\n        justify-content: space-between;\n        gap: 24px;\n\n        rect {\n          cursor: pointer;\n          &:hover {\n            fill: #5d37f3;\n          }\n        }\n      }\n    }\n  }\n}\n","#success-container {\n  font-family: \"FiraGO\";\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n\n  .content {\n    display: flex;\n    flex-direction: column;\n    padding: 40px 24px;\n    width: 480px;\n    transform: translateY(-50%);\n    border-radius: 12px;\n    background: #fff;\n\n    .x-img {\n      align-self: end;\n      height: 12px;\n      color: #1a1a1f;\n      cursor: pointer;\n      &:hover {\n        scale: 1.1;\n        transition-duration: 0.5s;\n      }\n    }\n\n    .success-img {\n      height: 53px;\n      width: 53px;\n      align-self: center;\n      margin-top: 25px;\n    }\n\n    h1 {\n      color: #1a1a1f;\n      text-align: center;\n      font-size: 20px;\n      font-weight: 700;\n      line-height: 28px;\n      margin-top: 16px;\n    }\n\n    button {\n      font-family: inherit;\n      margin-top: 48px;\n      padding: 12px;\n      border: none;\n      background-color: #5d37f3;\n      border-radius: 8px;\n      letter-spacing: 0.03em;\n      color: #fff;\n      font-size: 14px;\n      font-weight: 500;\n      line-height: 20px;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
  const blog = document.querySelector("#blog");

  if (blog) blog.classList.add("hidden");

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
/* harmony import */ var _image_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _author_create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);
/* harmony import */ var _title_create__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);
/* harmony import */ var _description_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43);
/* harmony import */ var _date_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45);
/* harmony import */ var _categories_create__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(47);
/* harmony import */ var _email_create__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(51);
/* harmony import */ var _logic_blogAdder_validations_form_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53);











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

  form.appendChild((0,_image_create__WEBPACK_IMPORTED_MODULE_2__["default"])());

  const title = document.createElement("div");
  title.classList.add("author-title-container");
  form.appendChild(title);
  title.appendChild((0,_author_create__WEBPACK_IMPORTED_MODULE_3__["default"])());
  title.appendChild((0,_title_create__WEBPACK_IMPORTED_MODULE_4__["default"])());

  form.appendChild((0,_description_create__WEBPACK_IMPORTED_MODULE_5__["default"])());

  const dateCategory = document.createElement("div");
  dateCategory.classList.add("date-category-container");
  form.appendChild(dateCategory);
  dateCategory.appendChild((0,_date_create__WEBPACK_IMPORTED_MODULE_6__["default"])());
  dateCategory.appendChild((0,_categories_create__WEBPACK_IMPORTED_MODULE_7__["default"])());

  form.appendChild((0,_email_create__WEBPACK_IMPORTED_MODULE_8__["default"])());

  const addBlogBtn = document.createElement("button");
  addBlogBtn.textContent = "გამოქვეყნება";
  addBlogBtn.classList.add("add-blog-btn");
  content.appendChild(addBlogBtn);

  backArrow.addEventListener("click", _src_components_dom_main_display_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

  addBlogBtn.addEventListener("click", function (e) {
    e.preventDefault();
    (0,_logic_blogAdder_validations_form_form__WEBPACK_IMPORTED_MODULE_9__["default"])();
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
  const blog = document.querySelector("#blog");

  blogAdder.classList.add("hidden");

  if (blog) {
    blog.classList.remove("hidden");
  } else mainDiv.classList.remove("hidden");

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
/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(32);




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
    if (!e.dataTransfer.files[0].type.match("image.*")) return;

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

    async function handleFile() {
      const base64 = await fileToBase64(files);

      const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
      blogInfo.image = {};
      blogInfo.image.base64 = base64;
      blogInfo.image.name = files.name;
      blogInfo.image.type = files.type;
      localStorage.setItem("blog-info", JSON.stringify(blogInfo));
    }

    async function fileToBase64(file) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function (event) {
          const base64 = event.target.result;
          resolve(base64);
        };
        reader.onerror = function (error) {
          reject(error);
        };
        reader.readAsDataURL(file);
      });
    }

    handleFile();
    return;
  }

  if (e.classList.contains("remove-img")) {
    noImage();
    const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
    blogInfo.image = null;
    localStorage.setItem("blog-info", JSON.stringify(blogInfo));
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
/* 33 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createAuthor),
/* harmony export */   input: () => (/* binding */ input),
/* harmony export */   validationArr: () => (/* binding */ validationArr)
/* harmony export */ });
/* harmony import */ var _logic_blogAdder_validations_author_author__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);



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
/* 34 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateAuthor)
/* harmony export */ });
/* harmony import */ var _fourLetters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _twoWords__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var _georgianAlph__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var _dom_blogAdder_author_update__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(38);





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
/* 39 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   container: () => (/* binding */ container),
/* harmony export */   "default": () => (/* binding */ createTitle),
/* harmony export */   input: () => (/* binding */ input)
/* harmony export */ });
/* harmony import */ var _logic_blogAdder_validations_title_title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);



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
/* 40 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateTitle)
/* harmony export */ });
/* harmony import */ var _twoLetters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _dom_blogAdder_title_update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);



function validateTitle(input, div) {
  const value = input.value;
  (0,_dom_blogAdder_title_update__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_twoLetters__WEBPACK_IMPORTED_MODULE_0__["default"])(value), div);

  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
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
/* 41 */
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
/* 42 */
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
/* 43 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   container: () => (/* binding */ container),
/* harmony export */   "default": () => (/* binding */ createDescription),
/* harmony export */   textarea: () => (/* binding */ textarea)
/* harmony export */ });
/* harmony import */ var _logic_blogAdder_validations_description_description__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _title_update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);



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
/* 44 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateDescription)
/* harmony export */ });
/* harmony import */ var _title_twoLetters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _dom_blogAdder_title_update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);



function validateDescription(input, div) {
  const value = input.value;
  (0,_dom_blogAdder_title_update__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_title_twoLetters__WEBPACK_IMPORTED_MODULE_0__["default"])(value), div);

  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
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
/* 45 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createDate),
/* harmony export */   input: () => (/* binding */ input)
/* harmony export */ });
/* harmony import */ var _logic_blogAdder_validations_date_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);


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
/* 46 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateDate)
/* harmony export */ });
function validateDate(input) {
  const value = input.value;
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
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
/* 47 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   container: () => (/* binding */ container),
/* harmony export */   "default": () => (/* binding */ createBlogCategories)
/* harmony export */ });
/* harmony import */ var _logic_categories_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);



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
      if (blogInfo.categories && blogInfo.categories.length < 1)
        container.style.border = "1px solid #e4e3eb";
    }
  });

  return div;
}




/***/ }),
/* 48 */
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
/* 49 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateCategories)
/* harmony export */ });
/* harmony import */ var _logic_categories_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _src_assets_images_white_remove_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);



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
/* 50 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59a39dbee31d837bc56b.png";

/***/ }),
/* 51 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createEmail)
/* harmony export */ });
/* harmony import */ var _logic_blogAdder_validations_email_email__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);


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
    else input.style.border = "1px solid #EA1919";
  }

  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") e.preventDefault();
  });

  input.addEventListener("focus", function () {
    if (!this.value) this.style.border = "1px solid #5D37F3";
  });

  input.addEventListener("input", function () {
    if ((0,_logic_blogAdder_validations_email_email__WEBPACK_IMPORTED_MODULE_0__["default"])(this)) this.style.border = "1px solid #14D81C";
    else this.style.border = "1px solid #EA1919";

    const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
    blogInfo.email = this.value;
    localStorage.setItem("blog-info", JSON.stringify(blogInfo));
  });

  input.addEventListener("blur", function () {
    if (!input.value) this.style.border = "1px solid  #e4e3eb";
  });

  return div;
}


/***/ }),
/* 52 */
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
/* 53 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validateForm)
/* harmony export */ });
/* harmony import */ var _image_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54);
/* harmony import */ var _author_author__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony import */ var _title_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var _description_description__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(44);
/* harmony import */ var _date_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46);
/* harmony import */ var _dom_blogAdder_author_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33);
/* harmony import */ var _dom_blogAdder_title_create__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39);
/* harmony import */ var _dom_blogAdder_description_create__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43);
/* harmony import */ var _dom_blogAdder_date_create__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45);
/* harmony import */ var _dom_blogAdder_categories_create__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(47);
/* harmony import */ var _src_components_dom_blogAdder_success_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55);
/* harmony import */ var _blogs_sendBlog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56);













function validateForm() {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));

  if (!(0,_author_author__WEBPACK_IMPORTED_MODULE_1__["default"])(_dom_blogAdder_author_create__WEBPACK_IMPORTED_MODULE_5__.input, _dom_blogAdder_author_create__WEBPACK_IMPORTED_MODULE_5__.validationArr))
    _dom_blogAdder_author_create__WEBPACK_IMPORTED_MODULE_5__.input.style.border = "1px solid #EA1919";
  if (!(0,_title_title__WEBPACK_IMPORTED_MODULE_2__["default"])(_dom_blogAdder_title_create__WEBPACK_IMPORTED_MODULE_6__.input, _dom_blogAdder_title_create__WEBPACK_IMPORTED_MODULE_6__.container))
    _dom_blogAdder_title_create__WEBPACK_IMPORTED_MODULE_6__.input.style.border = "1px solid #EA1919";
  if (!(0,_description_description__WEBPACK_IMPORTED_MODULE_3__["default"])(_dom_blogAdder_description_create__WEBPACK_IMPORTED_MODULE_7__.textarea, _dom_blogAdder_description_create__WEBPACK_IMPORTED_MODULE_7__.container))
    _dom_blogAdder_description_create__WEBPACK_IMPORTED_MODULE_7__.textarea.style.border = "1px solid #EA1919";
  if (!(0,_date_date__WEBPACK_IMPORTED_MODULE_4__["default"])(_dom_blogAdder_date_create__WEBPACK_IMPORTED_MODULE_8__.input)) _dom_blogAdder_date_create__WEBPACK_IMPORTED_MODULE_8__.input.style.border = "1px solid #EA1919";
  if (
    (blogInfo.categories && blogInfo.categories.length < 1) ||
    !blogInfo.categories
  )
    _dom_blogAdder_categories_create__WEBPACK_IMPORTED_MODULE_9__.container.style.border = "1px solid #EA1919";

  if (
    (0,_image_image__WEBPACK_IMPORTED_MODULE_0__["default"])() &&
    (0,_author_author__WEBPACK_IMPORTED_MODULE_1__["default"])(_dom_blogAdder_author_create__WEBPACK_IMPORTED_MODULE_5__.input, _dom_blogAdder_author_create__WEBPACK_IMPORTED_MODULE_5__.validationArr) &&
    (0,_title_title__WEBPACK_IMPORTED_MODULE_2__["default"])(_dom_blogAdder_title_create__WEBPACK_IMPORTED_MODULE_6__.input, _dom_blogAdder_title_create__WEBPACK_IMPORTED_MODULE_6__.container) &&
    (0,_description_description__WEBPACK_IMPORTED_MODULE_3__["default"])(_dom_blogAdder_description_create__WEBPACK_IMPORTED_MODULE_7__.textarea, _dom_blogAdder_description_create__WEBPACK_IMPORTED_MODULE_7__.container) &&
    (0,_date_date__WEBPACK_IMPORTED_MODULE_4__["default"])(_dom_blogAdder_date_create__WEBPACK_IMPORTED_MODULE_8__.input) &&
    blogInfo.categories &&
    blogInfo.categories.length > 0
  ) {
    (0,_blogs_sendBlog__WEBPACK_IMPORTED_MODULE_11__["default"])();
    localStorage.setItem("blog-info", JSON.stringify({}));
    (0,_src_components_dom_blogAdder_success_create_js__WEBPACK_IMPORTED_MODULE_10__["default"])();
  }
}


/***/ }),
/* 54 */
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
/* 55 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createSuccessModal)
/* harmony export */ });
/* harmony import */ var _src_assets_images_x_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _src_assets_images_success_circle_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony import */ var _src_components_dom_main_display_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);




function createSuccessModal() {
  const body = document.querySelector("body");
  body.style.overflow = "hidden";

  const container = document.createElement("div");
  container.setAttribute("id", "success-container");
  body.appendChild(container);

  const content = document.createElement("div");
  content.classList.add("content");
  container.appendChild(content);

  const xImg = new Image();
  xImg.src = _src_assets_images_x_icon_svg__WEBPACK_IMPORTED_MODULE_0__;
  xImg.classList.add("x-img");
  content.appendChild(xImg);

  const success = new Image();
  success.src = _src_assets_images_success_circle_png__WEBPACK_IMPORTED_MODULE_1__;
  success.classList.add("success-img");
  content.appendChild(success);

  const text = document.createElement("h1");
  text.textContent = "ჩანაწერი წარმატებით დაემატა";
  content.appendChild(text);

  const button = document.createElement("button");
  button.textContent = "მთავარ გვერდზე დაბრუნება";
  content.appendChild(button);

  xImg.addEventListener("click", function () {
    container.remove();
    normalBody();
    location.reload();
  });

  button.addEventListener("click", function () {
    (0,_src_components_dom_main_display_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    container.remove();
    normalBody();
    location.reload();
  });

  function normalBody() {
    container.remove();
    body.style.overflow = "visible";
  }
}


/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ sendBlog)
/* harmony export */ });
function sendBlog() {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
  const formData = new FormData();
  const base64String = blogInfo.image.base64;
  const newBase64 = base64String.replace(/^data:image\/\w+;base64,/, "");
  const blob = base64StringToBlob(newBase64);
  formData.append("title", blogInfo.title);
  formData.append("description", blogInfo.description);
  formData.append("image", blob, "filename.jpg");
  formData.append("author", blogInfo.author);
  formData.append("categories", JSON.stringify(blogInfo.categories));
  formData.append("publish_date", blogInfo.date);
  if (blogInfo.email) formData.append("email", blogInfo.email);

  async function postBlog() {
    try {
      const response = await fetch(
        "https://api.blog.redberryinternship.ge/api/blogs",
        {
          method: "POST",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer e73b2cdfdf3c029e1684fd536b3d9981f6d050358dce0c4a34cc98a854cd0af6",
          },
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log("Success", data);
    } catch (err) {
      console.log(err);
    }
  }

  postBlog();

  function base64StringToBlob(base64String) {
    const binaryString = atob(base64String);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return new Blob([bytes], { type: "image/jpeg" });
  }
}


/***/ }),
/* 57 */
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
/* 58 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fetchBlogs)
/* harmony export */ });
async function fetchBlogs(url, token) {
  try {
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
  } catch (error) {
    console.log("There was a problem with the fetch operation: ", error);
  }
}


/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBlogs)
/* harmony export */ });
/* harmony import */ var _src_assets_images_expand_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _logic_blog_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var _blog_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);




function createBlogs(data) {
  const main = document.querySelector("#main-div");

  const container = document.createElement("div");
  container.classList.add("blogs-container");
  main.appendChild(container);

  data.data.forEach((info) => {
    const blog = document.createElement("div");
    blog.classList.add("blog-container", `blog-${info.id}`);
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

    expand.addEventListener("click", function () {
      (0,_logic_blog_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])(info.id).then((data) => {
        (0,_blog_create__WEBPACK_IMPORTED_MODULE_2__["default"])(data);
      });
    });
  });

  return container;
}


/***/ }),
/* 60 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "83ba954f3f8255732713.png";

/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ fetchBlog)
/* harmony export */ });
async function fetchBlog(id) {
  try {
    const response = await fetch(
      `https://api.blog.redberryinternship.ge/api/blogs/${id}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer e73b2cdfdf3c029e1684fd536b3d9981f6d050358dce0c4a34cc98a854cd0af6`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("HTTP error " + response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("There was a problem with the fetch operation: ", error);
  }
}


/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBlogContent)
/* harmony export */ });
/* harmony import */ var _logic_blogs_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58);
/* harmony import */ var _relatedBlogs_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63);
/* harmony import */ var _src_assets_images_back_arrow_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27);




function createBlogContent(data) {
  const body = document.querySelector("body");
  const mainDiv = document.querySelector("#main-div");
  mainDiv.classList.add("hidden");

  const blog = document.createElement("div");
  blog.setAttribute("id", "blog");

  const backArrow = new Image();
  backArrow.classList.add("back-arrow");
  backArrow.src = _src_assets_images_back_arrow_png__WEBPACK_IMPORTED_MODULE_2__;
  blog.appendChild(backArrow);

  const content = document.createElement("div");
  content.classList.add("blog-content");
  blog.appendChild(content);

  const image = new Image();
  image.src = data.image;
  content.appendChild(image);

  const info = document.createElement("div");
  info.classList.add("blog-info");
  content.appendChild(info);

  const wrapper = document.createElement("div");
  wrapper.classList.add("wrapper-div");
  info.appendChild(wrapper);

  const author = document.createElement("h2");
  author.textContent = data.author;
  wrapper.appendChild(author);

  const dateEmail = document.createElement("p");
  dateEmail.textContent = `${data.publish_date}  •  ${data.email}`;
  wrapper.appendChild(dateEmail);

  const title = document.createElement("h1");
  title.textContent = data.title;
  info.appendChild(title);

  const categories = document.createElement("div");
  categories.classList.add("categories");
  info.appendChild(categories);

  data.categories.forEach((el) => {
    const category = document.createElement("div");
    category.textContent = el.title;
    category.style.color = el.text_color;
    category.style.backgroundColor = el.background_color;
    category.classList.add("category", `category-${el.id}`);
    categories.appendChild(category);
  });

  const description = document.createElement("p");
  description.textContent = data.description;
  description.classList.add("description-para");
  content.appendChild(description);

  const related = document.createElement("div");
  related.classList.add("related");
  blog.appendChild(related);

  const upper = document.createElement("div");
  upper.classList.add("upper");
  related.appendChild(upper);

  const text = document.createElement("h1");
  text.textContent = "მსგავსი სტატიები";
  upper.appendChild(text);

  const buttons = document.createElement("div");
  buttons.classList.add("buttons-div");
  upper.appendChild(buttons);

  buttons.appendChild(createLeftSVG());
  buttons.appendChild(createRightSVG());

  const lower = document.createElement("div");
  lower.classList.add("lower");
  related.appendChild(lower);

  (0,_logic_blogs_fetch__WEBPACK_IMPORTED_MODULE_0__["default"])(
    "https://api.blog.redberryinternship.ge/api",
    "fc9a807608d006f9d7604bc78bf62b027a2247c0c232dc217a6e1d5476d5271a"
  ).then((data2) => {
    (0,_relatedBlogs_create__WEBPACK_IMPORTED_MODULE_1__["default"])(data, data2, lower);
  });

  backArrow.addEventListener("click", function () {
    mainDiv.classList.remove("hidden");
    blog.remove();
  });

  body.appendChild(blog);
}

function createLeftSVG() {
  let svgNS = "http://www.w3.org/2000/svg"; //namespace
  let svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", "44");
  svg.setAttribute("height", "44");
  svg.setAttribute("viewBox", "0 0 44 44");
  svg.setAttribute("fill", "none");

  let rect = document.createElementNS(svgNS, "rect");
  rect.setAttribute("width", "44");
  rect.setAttribute("height", "44");
  rect.setAttribute("rx", "22");
  rect.setAttribute("fill", "#E4E3EB");
  svg.appendChild(rect);

  let path = document.createElementNS(svgNS, "path");
  path.setAttribute(
    "d",
    "M18 23C18.5523 23 19 22.5523 19 22C19 21.4477 18.5523 21 18 21L18 23ZM17.1929 21.2929C16.8024 21.6834 16.8024 22.3166 17.1929 22.7071L23.5569 29.0711C23.9474 29.4616 24.5805 29.4616 24.9711 29.0711C25.3616 28.6805 25.3616 28.0474 24.9711 27.6569L19.3142 22L24.9711 16.3431C25.3616 15.9526 25.3616 15.3195 24.9711 14.9289C24.5805 14.5384 23.9474 14.5384 23.5569 14.9289L17.1929 21.2929ZM18 21L17.9 21L17.9 23L18 23L18 21Z"
  );
  path.setAttribute("fill", "#F3F2FA");
  svg.appendChild(path);
  return svg;
}

function createRightSVG() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", "44");
  svg.setAttribute("height", "44");
  svg.setAttribute("viewBox", "0 0 44 44");
  svg.setAttribute("fill", "none");

  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  rect.setAttribute("x", "44");
  rect.setAttribute("y", "44");
  rect.setAttribute("width", "44");
  rect.setAttribute("height", "44");
  rect.setAttribute("rx", "22");
  rect.setAttribute("transform", "rotate(180 44 44)");
  rect.setAttribute("fill", "#E4E3EB");
  svg.appendChild(rect);

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    "M26 21C25.4477 21 25 21.4477 25 22C25 22.5523 25.4477 23 26 23L26 21ZM26.8071 22.7071C27.1976 22.3166 27.1976 21.6834 26.8071 21.2929L20.4431 14.9289C20.0526 14.5384 19.4195 14.5384 19.0289 14.9289C18.6384 15.3195 18.6384 15.9526 19.0289 16.3431L24.6858 22L19.0289 27.6569C18.6384 28.0474 18.6384 28.6805 19.0289 29.0711C19.4195 29.4616 20.0526 29.4616 20.4431 29.0711L26.8071 22.7071ZM26 23L26.1 23L26.1 21L26 21L26 23Z"
  );
  path.setAttribute("fill", "white");
  svg.appendChild(path);

  return svg;
}


/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ relatedBlogs)
/* harmony export */ });
function relatedBlogs(data1, data2, lower) {
  // console.log(data1);
  // console.log(lower);
  // let mainArray = [1, 2, 3, 4, 5];
  // let otherArrays = [
  //   [2, 3, 4, 5, 6],
  //   [3, 4, 5, 6, 7],
  //   [4, 5, 6, 7, 8],
  //   [1, 2, 3, 4, 5],
  //   [6, 7, 8, 9, 10],
  // ];
  // let intersectionCounts = otherArrays.map((otherArray) => {
  //   let intersection = mainArray.filter((value) =>
  //     otherArray.includes(value)
  //   );
  //   return intersection.length;
  // });
  // let sortedArrays = otherArrays.slice().sort((a, b) => {
  //   return (
  //     intersectionCounts[otherArrays.indexOf(b)] -
  //     intersectionCounts[otherArrays.indexOf(a)]
  //   );
  // });
  // console.log(sortedArrays);
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
/* harmony import */ var _components_dom_header_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _components_dom_main_create__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _components_dom_blogAdder_create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26);
/* harmony import */ var _components_logic_categories_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48);
/* harmony import */ var _components_dom_main_categories_create__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57);
/* harmony import */ var _components_logic_blogs_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(58);
/* harmony import */ var _components_dom_main_blogs_create__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(59);









const body = document.querySelector("body");
const url = "https://api.blog.redberryinternship.ge/api";
const token =
  "e73b2cdfdf3c029e1684fd536b3d9981f6d050358dce0c4a34cc98a854cd0af6";

// fc9a807608d006f9d7604bc78bf62b027a2247c0c232dc217a6e1d5476d5271a;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sd1RBQXdULFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE9BQU8sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxPQUFPLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxRQUFRLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxX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QUFDSjtBQUNVO0FBQ0U7QUFDSztBQUNmO0FBQ0s7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtFQUFrRTs7QUFFbEUsaUJBQWlCLHlFQUFZO0FBQzdCLGlCQUFpQix1RUFBVTtBQUMzQixpQkFBaUIsNEVBQWU7O0FBRWhDLDhFQUFlO0FBQ2YsRUFBRSxrRkFBZ0I7O0FBRWxCO0FBQ0EsSUFBSSx5RUFBVTtBQUNkLE1BQU0sNkVBQVc7QUFDakIsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9pbmRleC5zY3NzPzcyMjMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vaGVhZGVyL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2hlYWRlci9sb2dpbk1vZGFsL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvbG9naW5Vc2VyL2xvZ2luVXNlci5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvbG9naW5Vc2VyL3ZhbGlkYXRlRW1haWwuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2xvZ2ljL2xvZ2luVXNlci9jaGVja0VtYWlsLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vaGVhZGVyL2xvZ2luTW9kYWwvdXBkYXRlLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vYmxvZ0FkZGVyL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2RvbS9tYWluL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2Jsb2dBZGRlci9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2RvbS9tYWluL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2RvbS9ibG9nQWRkZXIvaW1hZ2UvY3JlYXRlLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vYmxvZ0FkZGVyL2ltYWdlL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2Jsb2dBZGRlci9hdXRob3IvY3JlYXRlLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9sb2dpYy9ibG9nQWRkZXIvdmFsaWRhdGlvbnMvYXV0aG9yL2F1dGhvci5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRpb25zL2F1dGhvci9mb3VyTGV0dGVycy5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRpb25zL2F1dGhvci90d29Xb3Jkcy5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRpb25zL2F1dGhvci9nZW9yZ2lhbkFscGguanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2RvbS9ibG9nQWRkZXIvYXV0aG9yL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2Jsb2dBZGRlci90aXRsZS9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2xvZ2ljL2Jsb2dBZGRlci92YWxpZGF0aW9ucy90aXRsZS90aXRsZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRpb25zL3RpdGxlL3R3b0xldHRlcnMuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2RvbS9ibG9nQWRkZXIvdGl0bGUvdXBkYXRlLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vYmxvZ0FkZGVyL2Rlc2NyaXB0aW9uL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRpb25zL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vYmxvZ0FkZGVyL2RhdGUvY3JlYXRlLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9sb2dpYy9ibG9nQWRkZXIvdmFsaWRhdGlvbnMvZGF0ZS9kYXRlLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vYmxvZ0FkZGVyL2NhdGVnb3JpZXMvY3JlYXRlLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9sb2dpYy9jYXRlZ29yaWVzL2ZldGNoLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vYmxvZ0FkZGVyL2NhdGVnb3JpZXMvdXBkYXRlLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vYmxvZ0FkZGVyL2VtYWlsL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRpb25zL2VtYWlsL2VtYWlsLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9sb2dpYy9ibG9nQWRkZXIvdmFsaWRhdGlvbnMvZm9ybS9mb3JtLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9sb2dpYy9ibG9nQWRkZXIvdmFsaWRhdGlvbnMvaW1hZ2UvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2RvbS9ibG9nQWRkZXIvc3VjY2Vzcy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2xvZ2ljL2Jsb2dzL3NlbmRCbG9nLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vbWFpbi9jYXRlZ29yaWVzL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvYmxvZ3MvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2RvbS9tYWluL2Jsb2dzL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvYmxvZy9mZXRjaC5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL21haW4vYmxvZy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2RvbS9tYWluL2Jsb2cvcmVsYXRlZEJsb2dzL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi9zcmMvYXNzZXRzL2ZvbnRzL0ZpcmFHTy9GaXJhR08tUmVndWxhci5vdGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCNoZWFkZXItZGl2IHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTNlYjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgZm9udC1mYW1pbHk6IFwiRmlyYUdPXCI7XG59XG4jaGVhZGVyLWRpdiAuaGVhZGVyLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDI1cHggMTAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XG59XG4jaGVhZGVyLWRpdiAuaGVhZGVyLWNvbnRlbnQgYnV0dG9uIHtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZDM3ZjM7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbiNtYWluLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNzBweDtcbiAgZm9udC1mYW1pbHk6IFwiRmlyYUdPXCI7XG59XG4jbWFpbi1kaXYgLm1haW4taW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNzBweCA5MHB4IDBweCAxMjBweDtcbn1cbiNtYWluLWRpdiAubWFpbi1pbmZvIGgxIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogNC44ZW07XG4gIGNvbG9yOiAjMWExYTFmO1xufVxuI21haW4tZGl2IC5jYXRlZ29yaWVzLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDMwcHggMzAwcHg7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIG1pbm1heCgxMDBweCwgMWZyKSk7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgZ3JpZC1nYXA6IDEwcHg7XG59XG4jbWFpbi1kaXYgLmNhdGVnb3JpZXMtY29udGFpbmVyIC5jYXRlZ29yeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA0cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuI21haW4tZGl2IC5jYXRlZ29yaWVzLWNvbnRhaW5lciAuY2F0ZWdvcnk6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHNjYWxlOiAxLjA1O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xufVxuI21haW4tZGl2IC5jYXRlZ29yaWVzLWNvbnRhaW5lciAuY2F0ZWdvcnkgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG4jbWFpbi1kaXYgLmNhdGVnb3JpZXMtY29udGFpbmVyIC5jYXRlZ29yeSBwOmhvdmVyIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4jbWFpbi1kaXYgLmJsb2dzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIGF1dG8pO1xuICBjb2x1bW4tZ2FwOiAzMnB4O1xuICByb3ctZ2FwOiA1NnB4O1xuICBtYXJnaW46IGF1dG87XG59XG4jbWFpbi1kaXYgLmJsb2dzLWNvbnRhaW5lciAuYmxvZy1jb250YWluZXIge1xuICB3aWR0aDogNDA4cHg7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuI21haW4tZGl2IC5ibG9ncy1jb250YWluZXIgLmJsb2ctY29udGFpbmVyIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDMyOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuI21haW4tZGl2IC5ibG9ncy1jb250YWluZXIgLmJsb2ctY29udGFpbmVyIC5ibG9nLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tdG9wOiAyNHB4O1xuICBnYXA6IDE2cHg7XG59XG4jbWFpbi1kaXYgLmJsb2dzLWNvbnRhaW5lciAuYmxvZy1jb250YWluZXIgLmJsb2ctY29udGVudCBoMiB7XG4gIGNvbG9yOiAjMWExYTFmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuI21haW4tZGl2IC5ibG9ncy1jb250YWluZXIgLmJsb2ctY29udGFpbmVyIC5ibG9nLWNvbnRlbnQgcCB7XG4gIGNvbG9yOiAjODU4NThkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG4jbWFpbi1kaXYgLmJsb2dzLWNvbnRhaW5lciAuYmxvZy1jb250YWluZXIgLmJsb2ctY29udGVudCBoMSB7XG4gIGNvbG9yOiAjMWExYTFmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuI21haW4tZGl2IC5ibG9ncy1jb250YWluZXIgLmJsb2ctY29udGFpbmVyIC5ibG9nLWNvbnRlbnQgLm1haW4tY2F0ZWdvcmllcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTZweDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuI21haW4tZGl2IC5ibG9ncy1jb250YWluZXIgLmJsb2ctY29udGFpbmVyIC5ibG9nLWNvbnRlbnQgLm1haW4tY2F0ZWdvcmllcyAubWFpbi1jYXRlZ29yeSB7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xufVxuI21haW4tZGl2IC5ibG9ncy1jb250YWluZXIgLmJsb2ctY29udGFpbmVyIC5ibG9nLWNvbnRlbnQgLmRlc2NyaXB0aW9uIHtcbiAgY29sb3I6ICM0MDQwNDk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIGhlaWdodDogMy41ZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4jbWFpbi1kaXYgLmJsb2dzLWNvbnRhaW5lciAuYmxvZy1jb250YWluZXIgLmJsb2ctY29udGVudCAuZXhwYW5kLWJsb2cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jbWFpbi1kaXYgLmJsb2dzLWNvbnRhaW5lciAuYmxvZy1jb250YWluZXIgLmJsb2ctY29udGVudCAuZXhwYW5kLWJsb2cgcCB7XG4gIGNvbG9yOiAjNWQzN2YzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuI21haW4tZGl2IC5ibG9ncy1jb250YWluZXIgLmJsb2ctY29udGFpbmVyIC5ibG9nLWNvbnRlbnQgLmV4cGFuZC1ibG9nIGltZyB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IGF1dG87XG59XG5cbiNtb2RhbC1jb250YWluZXIge1xuICBmb250LWZhbWlseTogXCJGaXJhR09cIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4jbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogNDBweCAyNHB4O1xuICB3aWR0aDogNDgwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbiNtb2RhbC1jb250YWluZXIgLm1vZGFsLWNvbnRlbnQgLngtaW1nIHtcbiAgYWxpZ24tc2VsZjogZW5kO1xuICBoZWlnaHQ6IDEycHg7XG4gIGNvbG9yOiAjMWExYTFmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250ZW50IC54LWltZzpob3ZlciB7XG4gIHNjYWxlOiAxLjE7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG59XG4jbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250ZW50IC5pbnB1dC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuI21vZGFsLWNvbnRhaW5lciAubW9kYWwtY29udGVudCAuaW5wdXQtY29udGFpbmVyIGgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgY29sb3I6ICMxYTFhMWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xufVxuI21vZGFsLWNvbnRhaW5lciAubW9kYWwtY29udGVudCAuaW5wdXQtY29udGFpbmVyIGxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBjb2xvcjogIzFhMWExZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuI21vZGFsLWNvbnRhaW5lciAubW9kYWwtY29udGVudCAuaW5wdXQtY29udGFpbmVyIGlucHV0IHtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjNWQzN2YzO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmZjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgY29sb3I6ICM4NTg1OGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbiNtb2RhbC1jb250YWluZXIgLm1vZGFsLWNvbnRlbnQgLmVycm9yLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbn1cbiNtb2RhbC1jb250YWluZXIgLm1vZGFsLWNvbnRlbnQgLmVycm9yLWNvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgY29sb3I6ICNmZjAwMDA7XG59XG4jbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250ZW50IC5zdWNjZXNzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbiNtb2RhbC1jb250YWluZXIgLm1vZGFsLWNvbnRlbnQgLnN1Y2Nlc3MtY29udGFpbmVyIGgxIHtcbiAgZm9udC1zaXplOiAxLjNlbTtcbiAgY29sb3I6ICMxYTFhMWY7XG59XG4jbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250ZW50IGJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IDAuOWVtO1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZDM3ZjM7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG59XG4jbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250ZW50IGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI2Jsb2ctYWRkZXIge1xuICBmb250LWZhbWlseTogXCJGaXJhR09cIjtcbiAgcGFkZGluZzogNDBweCA3NnB4IDExMHB4IDc2cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTRlM2ViO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4jYmxvZy1hZGRlciAuYmFjay1hcnJvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCB7XG4gIHdpZHRoOiA2MDBweDtcbiAgbWFyZ2luLWxlZnQ6IDQ4MHB4O1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCBoMSB7XG4gIGZvbnQtc2l6ZTogMi4zZW07XG4gIGNvbG9yOiAjMWExYTFmO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjRweDtcbiAgbWFyZ2luOiA0MHB4IDBweDtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuaW1nLXVwbG9hZGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTJweDtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuaW1nLXVwbG9hZGVyLWNvbnRhaW5lcjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuaW1nLXVwbG9hZGVyLWNvbnRhaW5lciAuaW1hZ2UtdXBsb2FkZXIge1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3JkZXI6IDFweCBkYXNoZWQgIzg1ODU4ZDtcbiAgYmFja2dyb3VuZDogI2Y0ZjNmZjtcbiAgYm9yZGVyOiAxLjVweCBkYXNoZWQgIzg1ODU4ZDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZzogNDhweCAxNjVweDtcbiAgZ2FwOiAzMHB4O1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5pbWctdXBsb2FkZXItY29udGFpbmVyIC5pbWFnZS11cGxvYWRlciBpbWcge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmltZy11cGxvYWRlci1jb250YWluZXIgLmltYWdlLXVwbG9hZGVyIC5pbWFnZS10ZXh0cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDVweDtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuaW1nLXVwbG9hZGVyLWNvbnRhaW5lciAuaW1hZ2UtdXBsb2FkZXIgLmltYWdlLXRleHRzIHNwYW4sXG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmltZy11cGxvYWRlci1jb250YWluZXIgLmltYWdlLXVwbG9hZGVyIC5pbWFnZS10ZXh0cyBwIHtcbiAgY29sb3I6ICMxYTFhMWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmltZy11cGxvYWRlci1jb250YWluZXIgLmltYWdlLXVwbG9hZGVyIC5pbWFnZS10ZXh0cyBwIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuaW1nLXVwbG9hZGVyLWNvbnRhaW5lciAuaW1hZ2UtdXBsb2FkZXIgLmltYWdlLXRleHRzIGltZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuYXV0aG9yLXRpdGxlLWNvbnRhaW5lcixcbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuZGF0ZS1jYXRlZ29yeS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMzBweDtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuY29udGFpbmVyIHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5jb250YWluZXIgbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDVweDtcbiAgY29sb3I6ICMxYTFhMWY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmNvbnRhaW5lciBpbnB1dCxcbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuY29udGFpbmVyIHRleHRhcmVhLFxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5jb250YWluZXIgLnNlbGVjdC1jb250YWluZXIge1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTRlM2ViO1xuICBjb2xvcjogIzg1ODU4ZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmZDtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuY29udGFpbmVyIC52YWxpZGF0aW9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5jb250YWluZXIgLnZhbGlkYXRpb24tYmVmb3JlIHtcbiAgd2lkdGg6IDAuNWVtO1xuICBoZWlnaHQ6IDAuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODU4NThkO1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5jb250YWluZXIgbGkge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGNvbG9yOiAjODU4NThkO1xuICBjb2xvcjogIzg1ODU4ZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuY29udGFpbmVyIC5zZWxlY3QtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5jb250YWluZXIgLnNlbGVjdC1jb250YWluZXIgLnNlbGVjdGVkLWNhdGVnb3J5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuY29udGFpbmVyIC5zZWxlY3QtY29udGFpbmVyIC5zZWxlY3RlZC1jYXRlZ29yeSAuY2F0ZWdvcnktY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBnYXA6IDdweDtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuY29udGFpbmVyIC5zZWxlY3QtY29udGFpbmVyIC5zZWxlY3RlZC1jYXRlZ29yeSAuY2F0ZWdvcnktY29udGFpbmVyIHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmNvbnRhaW5lciAuc2VsZWN0LWNvbnRhaW5lciAuc2VsZWN0ZWQtY2F0ZWdvcnkgLmNhdGVnb3J5LWNvbnRhaW5lciBpbWcge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmNvbnRhaW5lciAuc2VsZWN0LWNvbnRhaW5lciBzZWxlY3Qge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZkO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmVtYWlsLWNvbnRhaW5lciB7XG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xuICB3aWR0aDogY2FsYyg1MCUgLSAxNXB4KTtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmFkZC1ibG9nLWJ0biB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDE1cHgpO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6ICNmOGZhZmM7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTNlYjtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmFkZC1ibG9nLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZDM3ZjM7XG59XG5cbiNibG9nIHtcbiAgZm9udC1mYW1pbHk6IFwiRmlyYUdPXCI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogI2YzZjJmYTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBhZGRpbmc6IDQwcHggMHB4O1xufVxuI2Jsb2cgLmJhY2stYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDc2cHg7XG59XG4jYmxvZyAuYmxvZy1jb250ZW50IHtcbiAgd2lkdGg6IDcyMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNDBweDtcbn1cbiNibG9nIC5ibG9nLWNvbnRlbnQgaW1nIHtcbiAgaGVpZ2h0OiAzMjhweDtcbn1cbiNibG9nIC5ibG9nLWNvbnRlbnQgLmJsb2ctaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjRweDtcbn1cbiNibG9nIC5ibG9nLWNvbnRlbnQgLmJsb2ctaW5mbyAud3JhcHBlci1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbn1cbiNibG9nIC5ibG9nLWNvbnRlbnQgLmJsb2ctaW5mbyAud3JhcHBlci1kaXYgaDIge1xuICBjb2xvcjogIzFhMWExZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbiNibG9nIC5ibG9nLWNvbnRlbnQgLmJsb2ctaW5mbyAud3JhcHBlci1kaXYgcCB7XG4gIGNvbG9yOiAjODU4NThkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuI2Jsb2cgLmJsb2ctY29udGVudCAuYmxvZy1pbmZvIGgxIHtcbiAgY29sb3I6ICMxYTFhMWY7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogNDBweDtcbn1cbiNibG9nIC5ibG9nLWNvbnRlbnQgLmJsb2ctaW5mbyAuY2F0ZWdvcmllcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTZweDtcbn1cbiNibG9nIC5ibG9nLWNvbnRlbnQgLmJsb2ctaW5mbyAuY2F0ZWdvcmllcyAuY2F0ZWdvcnkge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG4jYmxvZyAuYmxvZy1jb250ZW50IC5ibG9nLWluZm8gLmRlc2NyaXB0aW9uLXBhcmEge1xuICBjb2xvcjogIzQwNDA0OTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cbiNibG9nIC5yZWxhdGVkIHtcbiAgcGFkZGluZzogMCA3NnB4O1xuICBtYXJnaW4tdG9wOiA5OHB4O1xufVxuI2Jsb2cgLnJlbGF0ZWQgLnVwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuI2Jsb2cgLnJlbGF0ZWQgLnVwcGVyIGgxIHtcbiAgY29sb3I6ICMxYTFhMWY7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG4jYmxvZyAucmVsYXRlZCAudXBwZXIgLmJ1dHRvbnMtZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDI0cHg7XG59XG4jYmxvZyAucmVsYXRlZCAudXBwZXIgLmJ1dHRvbnMtZGl2IHJlY3Qge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jYmxvZyAucmVsYXRlZCAudXBwZXIgLmJ1dHRvbnMtZGl2IHJlY3Q6aG92ZXIge1xuICBmaWxsOiAjNWQzN2YzO1xufVxuXG4jc3VjY2Vzcy1jb250YWluZXIge1xuICBmb250LWZhbWlseTogXCJGaXJhR09cIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4jc3VjY2Vzcy1jb250YWluZXIgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA0MHB4IDI0cHg7XG4gIHdpZHRoOiA0ODBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuI3N1Y2Nlc3MtY29udGFpbmVyIC5jb250ZW50IC54LWltZyB7XG4gIGFsaWduLXNlbGY6IGVuZDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBjb2xvcjogIzFhMWExZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI3N1Y2Nlc3MtY29udGFpbmVyIC5jb250ZW50IC54LWltZzpob3ZlciB7XG4gIHNjYWxlOiAxLjE7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG59XG4jc3VjY2Vzcy1jb250YWluZXIgLmNvbnRlbnQgLnN1Y2Nlc3MtaW1nIHtcbiAgaGVpZ2h0OiA1M3B4O1xuICB3aWR0aDogNTNweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuI3N1Y2Nlc3MtY29udGFpbmVyIC5jb250ZW50IGgxIHtcbiAgY29sb3I6ICMxYTFhMWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbiNzdWNjZXNzLWNvbnRhaW5lciAuY29udGVudCBidXR0b24ge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgbWFyZ2luLXRvcDogNDhweDtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQzN2YzO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuI3N1Y2Nlc3MtY29udGFpbmVyIC5jb250ZW50IGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpcmFHT1wiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZy1ib3R0b206IDY2cHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbG9naW5Nb2RhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Jsb2dBZGRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Jsb2cuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdWNjZXNzTW9kYWwuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNDSjtBRENJO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNDTjs7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QTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUx5Z0JKO0FLdmdCSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUx5Z0JOO0FLeGdCTTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtBTDBnQlI7QUt0Z0JJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FMd2dCTjtBS3JnQkk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FMdWdCTjtBS3BnQkk7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUxzZ0JOO0FLcmdCTTtFQUNFLGVBQUE7QUx1Z0JSOztBQTVqQkE7RUFDRSxxQkFBQTtFQUNBLDRDQUFBO0FBK2pCRjtBQTFqQkE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBNGpCRjs7QUF6akJBO0VBQ0Usd0JBQUE7QUE0akJGOztBQXpqQkE7RUFDRSx5QkFiVztFQWNYLGlCQUFBO0VBQ0Esb0JBQUE7QUE0akJGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiNoZWFkZXItZGl2IHtcXG4gIHBvc2l0aW9uOiBzdGlja3k7XFxuICB0b3A6IDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U0ZTNlYjtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBmb250LWZhbWlseTogXFxcIkZpcmFHT1xcXCI7XFxuXFxuICAuaGVhZGVyLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDI1cHggMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGZhZmM7XFxuXFxuICAgIGJ1dHRvbiB7XFxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZDM3ZjM7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiQHVzZSBcXFwiL3NyYy9zdHlsZXMvaGVhZGVyLnNjc3NcXFwiO1xcbkB1c2UgXFxcIi9zcmMvc3R5bGVzL21haW4uc2Nzc1xcXCI7XFxuQHVzZSBcXFwiL3NyYy9zdHlsZXMvbG9naW5Nb2RhbC5zY3NzXFxcIjtcXG5AdXNlIFxcXCIvc3JjL3N0eWxlcy9ibG9nQWRkZXIuc2Nzc1xcXCI7XFxuQHVzZSBcXFwiL3NyYy9zdHlsZXMvYmxvZy5zY3NzXFxcIjtcXG5AdXNlIFxcXCIvc3JjL3N0eWxlcy9zdWNjZXNzTW9kYWwuc2Nzc1xcXCI7XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIkZpcmFHT1xcXCI7XFxuICBzcmM6IHVybChcXFwiL3NyYy9hc3NldHMvZm9udHMvRmlyYUdPL0ZpcmFHTy1SZWd1bGFyLm90ZlxcXCIpO1xcbn1cXG5cXG4kYm9keS1jb2xvcjogI2YxZjVmOTtcXG5cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9keS1jb2xvcjtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZy1ib3R0b206IDY2cHg7XFxufVxcblwiLFwiI21haW4tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA3MHB4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGaXJhR09cXFwiO1xcblxcbiAgLm1haW4taW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNzBweCA5MHB4IDBweCAxMjBweDtcXG5cXG4gICAgaDEge1xcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAgIGZvbnQtc2l6ZTogNC44ZW07XFxuICAgICAgY29sb3I6ICMxYTFhMWY7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5jYXRlZ29yaWVzLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDMwcHggMzAwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIG1pbm1heCgxMDBweCwgMWZyKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ3JpZC1nYXA6IDEwcHg7XFxuXFxuICAgIC5jYXRlZ29yeSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIHBhZGRpbmc6IDRweCA4cHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHNjYWxlOiAxLjA1O1xcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gICAgICB9XFxuXFxuICAgICAgcCB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAuYmxvZ3MtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgYXV0byk7XFxuICAgIGNvbHVtbi1nYXA6IDMycHg7XFxuICAgIHJvdy1nYXA6IDU2cHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG5cXG4gICAgLmJsb2ctY29udGFpbmVyIHtcXG4gICAgICB3aWR0aDogNDA4cHg7XFxuICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuXFxuICAgICAgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAzMjhweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgICAgfVxcblxcbiAgICAgIC5ibG9nLWNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgICAgICAgZ2FwOiAxNnB4O1xcblxcbiAgICAgICAgaDIge1xcbiAgICAgICAgICBjb2xvcjogIzFhMWExZjtcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHAge1xcbiAgICAgICAgICBjb2xvcjogIzg1ODU4ZDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaDEge1xcbiAgICAgICAgICBjb2xvcjogIzFhMWExZjtcXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tYWluLWNhdGVnb3JpZXMge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBnYXA6IDE2cHg7XFxuICAgICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG5cXG4gICAgICAgICAgLm1haW4tY2F0ZWdvcnkge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgY29sb3I6ICM0MDQwNDk7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XFxuICAgICAgICAgIGhlaWdodDogMy41ZW07XFxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZXhwYW5kLWJsb2cge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgICAgIHAge1xcbiAgICAgICAgICAgIGNvbG9yOiAjNWQzN2YzO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiLFwiI21vZGFsLWNvbnRhaW5lciB7XFxuICBmb250LWZhbWlseTogXFxcIkZpcmFHT1xcXCI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAubW9kYWwtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDQwcHggMjRweDtcXG4gICAgd2lkdGg6IDQ4MHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuXFxuICAgIC54LWltZyB7XFxuICAgICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICAgIGhlaWdodDogMTJweDtcXG4gICAgICBjb2xvcjogIzFhMWExZjtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBzY2FsZTogMS4xO1xcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmlucHV0LWNvbnRhaW5lciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICAgIGgxIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICAgICAgICBjb2xvcjogIzFhMWExZjtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcXG4gICAgICB9XFxuXFxuICAgICAgbGFiZWwge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICAgICAgY29sb3I6ICMxYTFhMWY7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgICAgfVxcblxcbiAgICAgIGlucHV0IHtcXG4gICAgICAgIGJvcmRlcjogMS41cHggc29saWQgIzVkMzdmMztcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3ZmY7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICAgICAgICBjb2xvcjogIzg1ODU4ZDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmVycm9yLWNvbnRhaW5lciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGdhcDogMTVweDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcblxcbiAgICAgIHAge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcXG4gICAgICAgIGNvbG9yOiAjZmYwMDAwO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuc3VjY2Vzcy1jb250YWluZXIge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGdhcDogMTVweDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcblxcbiAgICAgIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgICAgICBjb2xvcjogIzFhMWExZjtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgICAgIHBhZGRpbmc6IDEycHg7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZDM3ZjM7XFxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIjYmxvZy1hZGRlciB7XFxuICBmb250LWZhbWlseTogXFxcIkZpcmFHT1xcXCI7XFxuICBwYWRkaW5nOiA0MHB4IDc2cHggMTEwcHggNzZweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTRlM2ViO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgLmJhY2stYXJyb3cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC5ibG9nLWFkZGVyLWNvbnRlbnQge1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA0ODBweDtcXG5cXG4gICAgaDEge1xcbiAgICAgIGZvbnQtc2l6ZTogMi4zZW07XFxuICAgICAgY29sb3I6ICMxYTFhMWY7XFxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgfVxcblxcbiAgICAuYmxvZy1mb3JtIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgZ2FwOiAyNHB4O1xcbiAgICAgIG1hcmdpbjogNDBweCAwcHg7XFxuXFxuICAgICAgLmltZy11cGxvYWRlci1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDEycHg7XFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmltYWdlLXVwbG9hZGVyIHtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgICAgICAgYm9yZGVyOiAxcHggZGFzaGVkICM4NTg1OGQ7XFxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmNGYzZmY7XFxuICAgICAgICAgIGJvcmRlcjogMS41cHggZGFzaGVkICM4NTg1OGQ7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIHBhZGRpbmc6IDQ4cHggMTY1cHg7XFxuICAgICAgICAgIGdhcDogMzBweDtcXG5cXG4gICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgLmltYWdlLXRleHRzIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogNXB4O1xcblxcbiAgICAgICAgICAgIHNwYW4sXFxuICAgICAgICAgICAgcCB7XFxuICAgICAgICAgICAgICBjb2xvcjogIzFhMWExZjtcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgcCB7XFxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIC5hdXRob3ItdGl0bGUtY29udGFpbmVyLFxcbiAgICAgIC5kYXRlLWNhdGVnb3J5LWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgZ2FwOiAzMHB4O1xcbiAgICAgIH1cXG5cXG4gICAgICAuY29udGFpbmVyIHtcXG4gICAgICAgIGZsZXg6IDE7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgICAgICBsYWJlbCB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGdhcDogNXB4O1xcbiAgICAgICAgICBjb2xvcjogIzFhMWExZjtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGlucHV0LFxcbiAgICAgICAgdGV4dGFyZWEsXFxuICAgICAgICAuc2VsZWN0LWNvbnRhaW5lciB7XFxuICAgICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcXG4gICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGUzZWI7XFxuICAgICAgICAgIGNvbG9yOiAjODU4NThkO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZkO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnZhbGlkYXRpb24tY29udGFpbmVyIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgZ2FwOiA4cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudmFsaWRhdGlvbi1iZWZvcmUge1xcbiAgICAgICAgICB3aWR0aDogMC41ZW07XFxuICAgICAgICAgIGhlaWdodDogMC41ZW07XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTg1OGQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBsaSB7XFxuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgICAgICAgY29sb3I6ICM4NTg1OGQ7XFxuICAgICAgICAgIGNvbG9yOiAjODU4NThkO1xcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnNlbGVjdC1jb250YWluZXIge1xcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuXFxuICAgICAgICAgIC5zZWxlY3RlZC1jYXRlZ29yeSB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBnYXA6IDVweDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgICAgICAgICAuY2F0ZWdvcnktY29udGFpbmVyIHtcXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgICAgICAgICAgICBnYXA6IDdweDtcXG5cXG4gICAgICAgICAgICAgIHAge1xcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIHNlbGVjdCB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmZDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgLmVtYWlsLWNvbnRhaW5lciB7XFxuICAgICAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDE1cHgpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuYWRkLWJsb2ctYnRuIHtcXG4gICAgICBmbG9hdDogcmlnaHQ7XFxuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgICAgZm9udC1zaXplOiAwLjllbTtcXG4gICAgICB3aWR0aDogY2FsYyg1MCUgLSAxNXB4KTtcXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgICBjb2xvcjogI2Y4ZmFmYztcXG4gICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTNlYjtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVkMzdmMztcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIjYmxvZyB7XFxuICBmb250LWZhbWlseTogXFxcIkZpcmFHT1xcXCI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiAjZjNmMmZhO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiA0MHB4IDBweDtcXG5cXG4gIC5iYWNrLWFycm93IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiA3NnB4O1xcbiAgfVxcblxcbiAgLmJsb2ctY29udGVudCB7XFxuICAgIHdpZHRoOiA3MjBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDQwcHg7XFxuXFxuICAgIGltZyB7XFxuICAgICAgaGVpZ2h0OiAzMjhweDtcXG4gICAgfVxcblxcbiAgICAuYmxvZy1pbmZvIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgZ2FwOiAyNHB4O1xcblxcbiAgICAgIC53cmFwcGVyLWRpdiB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogOHB4O1xcblxcbiAgICAgICAgaDIge1xcbiAgICAgICAgICBjb2xvcjogIzFhMWExZjtcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHAge1xcbiAgICAgICAgICBjb2xvcjogIzg1ODU4ZDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgaDEge1xcbiAgICAgICAgY29sb3I6ICMxYTFhMWY7XFxuICAgICAgICBmb250LXNpemU6IDMycHg7XFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICAgICAgfVxcblxcbiAgICAgIC5jYXRlZ29yaWVzIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDE2cHg7XFxuXFxuICAgICAgICAuY2F0ZWdvcnkge1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICAgICAgICBwYWRkaW5nOiA2cHggMTBweDtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIC5kZXNjcmlwdGlvbi1wYXJhIHtcXG4gICAgICAgIGNvbG9yOiAjNDA0MDQ5O1xcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfVxcblxcbiAgLnJlbGF0ZWQge1xcbiAgICBwYWRkaW5nOiAwIDc2cHg7XFxuICAgIG1hcmdpbi10b3A6IDk4cHg7XFxuXFxuICAgIC51cHBlciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICBoMSB7XFxuICAgICAgICBjb2xvcjogIzFhMWExZjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcXG4gICAgICB9XFxuXFxuICAgICAgLmJ1dHRvbnMtZGl2IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBnYXA6IDI0cHg7XFxuXFxuICAgICAgICByZWN0IHtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICBmaWxsOiAjNWQzN2YzO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiLFwiI3N1Y2Nlc3MtY29udGFpbmVyIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRmlyYUdPXFxcIjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gIC5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogNDBweCAyNHB4O1xcbiAgICB3aWR0aDogNDgwcHg7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcXG5cXG4gICAgLngtaW1nIHtcXG4gICAgICBhbGlnbi1zZWxmOiBlbmQ7XFxuICAgICAgaGVpZ2h0OiAxMnB4O1xcbiAgICAgIGNvbG9yOiAjMWExYTFmO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIHNjYWxlOiAxLjE7XFxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuc3VjY2Vzcy1pbWcge1xcbiAgICAgIGhlaWdodDogNTNweDtcXG4gICAgICB3aWR0aDogNTNweDtcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgfVxcblxcbiAgICBoMSB7XFxuICAgICAgY29sb3I6ICMxYTFhMWY7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbiAgICAgIG1hcmdpbi10b3A6IDE2cHg7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgICBtYXJnaW4tdG9wOiA0OHB4O1xcbiAgICAgIHBhZGRpbmc6IDEycHg7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZDM3ZjM7XFxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XFxuICAgICAgY29sb3I6ICNmZmY7XFxuICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsImltcG9ydCBsb2dvSW1nIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvcmVkYmVycnktbG9nby5wbmdcIjtcbmltcG9ydCBjcmVhdGVMb2dpbk1vZGFsIGZyb20gXCIuL2xvZ2luTW9kYWwvY3JlYXRlXCI7XG5pbXBvcnQgZGlzcGxheUJsb2dBZGRlciBmcm9tIFwiLi4vYmxvZ0FkZGVyL2Rpc3BsYXlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICBjb25zdCBsb2dpbiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJsb2dpblwiKSk7XG5cbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaGVhZGVyLWRpdlwiKTtcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWNvbnRlbnRcIik7XG4gIGhlYWRlci5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICBjb25zdCBsb2dvID0gbmV3IEltYWdlKCk7XG4gIGxvZ28uc3JjID0gbG9nb0ltZztcbiAgY29udGVudC5hcHBlbmRDaGlsZChsb2dvKTtcblxuICBjb25zdCBlbnRyeUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGVudHJ5QnRuLnRleHRDb250ZW50ID0gXCLhg6jhg5Thg6Hhg5Xhg5rhg5BcIjtcbiAgZW50cnlCdG4uY2xhc3NMaXN0LmFkZChcImVudHJ5LWJ1dHRvblwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChlbnRyeUJ0bik7XG5cbiAgY29uc3QgYWRkZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRlckJ0bi50ZXh0Q29udGVudCA9IFwi4YOT4YOQ4YOQ4YOb4YOQ4YOi4YOUIOGDkeGDmuGDneGDkuGDmFwiO1xuICBhZGRlckJ0bi5jbGFzc0xpc3QuYWRkKFwiYmxvZy1hZGRlci1idXR0b25cIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkZXJCdG4pO1xuXG4gIGlmIChsb2dpbikgZW50cnlCdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgaWYgKCFsb2dpbikgYWRkZXJCdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuICBlbnRyeUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY3JlYXRlTG9naW5Nb2RhbCk7XG5cbiAgYWRkZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlCbG9nQWRkZXIpO1xuXG4gIHJldHVybiBoZWFkZXI7XG59XG4iLCJpbXBvcnQgeFN2ZyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3gtaWNvbi5zdmdcIjtcbmltcG9ydCByZWRDaXJjbGVJbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9pbmZvLWNpcmNsZS5wbmdcIjtcbmltcG9ydCBncmVlblN1Y2Nlc3NJbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9zdWNjZXNzLWNpcmNsZS5wbmdcIjtcbmltcG9ydCBsb2dpblVzZXIgZnJvbSBcIi4uLy4uLy4uL2xvZ2ljL2xvZ2luVXNlci9sb2dpblVzZXJcIjtcbmltcG9ydCB1cGRhdGVMb2dpbk1vZGFsVUkgZnJvbSBcIi4vdXBkYXRlXCI7XG5cbmxldCByZW1vdmVMb2dpbk1vZGFsO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVMb2dpbk1vZGFsKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1vZGFsLWNvbnRhaW5lclwiKTtcbiAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGNvbnN0IG1vZGFsQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1vZGFsQ29udGVudC5jbGFzc0xpc3QuYWRkKFwibW9kYWwtY29udGVudFwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsQ29udGVudCk7XG5cbiAgY29uc3QgeEltZyA9IG5ldyBJbWFnZSgpO1xuICB4SW1nLmNsYXNzTGlzdC5hZGQoXCJ4LWltZ1wiKTtcbiAgeEltZy5zcmMgPSB4U3ZnO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoeEltZyk7XG5cbiAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtY29udGFpbmVyXCIpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoaW5wdXRDb250YWluZXIpO1xuXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRleHQudGV4dENvbnRlbnQgPSBcIuGDqOGDlOGDoeGDleGDmuGDkFwiO1xuICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBcIuGDlOGDmi3hg6Thg53hg6Hhg6Lhg5BcIjtcbiAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZW1haWxcIik7XG4gIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImVtYWlsXCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVtYWlsXCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkV4YW1wbGVAcmVkYmVycnkuZ2VcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG4gIGlucHV0LmZvY3VzKCk7XG5cbiAgY29uc3Qgc3VjY2Vzc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHN1Y2Nlc3NDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInN1Y2Nlc3MtY29udGFpbmVyXCIsIFwiaGlkZGVuXCIpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoc3VjY2Vzc0NvbnRhaW5lcik7XG5cbiAgY29uc3Qgc3VjY2Vzc0ltZyA9IG5ldyBJbWFnZSgpO1xuICBzdWNjZXNzSW1nLnNyYyA9IGdyZWVuU3VjY2Vzc0ltZztcbiAgc3VjY2Vzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdWNjZXNzSW1nKTtcblxuICBjb25zdCBzdWNjZXNzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgc3VjY2Vzc1RleHQudGV4dENvbnRlbnQgPSBcIuGDrOGDkOGDoOGDm+GDkOGDouGDlOGDkeGDo+GDmuGDmCDhg5Dhg5Xhg6Lhg53hg6Dhg5jhg5bhg5Dhg6rhg5jhg5BcIjtcbiAgc3VjY2Vzc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdWNjZXNzVGV4dCk7XG5cbiAgY29uc3QgZXJyb3JDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlcnJvckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZXJyb3ItY29udGFpbmVyXCIsIFwiaGlkZGVuXCIpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZXJyb3JDb250YWluZXIpO1xuXG4gIGNvbnN0IHJlZENpcmNsZSA9IG5ldyBJbWFnZSgpO1xuICByZWRDaXJjbGUuc3JjID0gcmVkQ2lyY2xlSW1nO1xuICBlcnJvckNvbnRhaW5lci5hcHBlbmRDaGlsZChyZWRDaXJjbGUpO1xuXG4gIGNvbnN0IGVycm9yTXNnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGVycm9yTXNnLnRleHRDb250ZW50ID0gXCLhg5Thg5ot4YOk4YOd4YOh4YOi4YOQIOGDkOGDoCDhg5vhg53hg5jhg6vhg5Thg5Hhg5zhg5BcIjtcbiAgZXJyb3JDb250YWluZXIuYXBwZW5kQ2hpbGQoZXJyb3JNc2cpO1xuXG4gIGNvbnN0IGVudHJ5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZW50cnlCdG4udGV4dENvbnRlbnQgPSBcIuGDqOGDlOGDoeGDleGDmuGDkFwiO1xuICBlbnRyeUJ0bi5jbGFzc0xpc3QuYWRkKFwiZW50cnktYnRuXCIpO1xuICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQoZW50cnlCdG4pO1xuXG4gIGNvbnN0IHN1Y2Nlc3NCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzdWNjZXNzQnRuLmNsYXNzTGlzdC5hZGQoXCJzdWNjZXNzLWJ0blwiLCBcImhpZGRlblwiKTtcbiAgc3VjY2Vzc0J0bi50ZXh0Q29udGVudCA9IFwi4YOZ4YOQ4YOg4YOS4YOYXCI7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChzdWNjZXNzQnRuKTtcblxuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmlkID09PSBcIm1vZGFsLWNvbnRhaW5lclwiKSByZW1vdmVMb2dpbk1vZGFsKGUpO1xuICB9KTtcblxuICB4SW1nLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIHJlbW92ZUxvZ2luTW9kYWwoZSk7XG4gIH0pO1xuXG4gIGVudHJ5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB1cGRhdGVMb2dpbk1vZGFsKTtcblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICB1cGRhdGVMb2dpbk1vZGFsKCk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiB1cGRhdGVMb2dpbk1vZGFsKCkge1xuICAgIGlmIChsb2dpblVzZXIoaW5wdXQpKSB7XG4gICAgICBsb2dpblVzZXIoaW5wdXQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgdXBkYXRlTG9naW5Nb2RhbFVJKGRhdGEsIGNvbnRhaW5lcik7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9naW5cIiwgSlNPTi5zdHJpbmdpZnkodHJ1ZSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlTG9naW5Nb2RhbCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKFxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwieC1pbWdcIikgJiZcbiAgICAgIGVudHJ5QnRuLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKVxuICAgICkge1xuICAgICAgbm9ybWFsQm9keSgpO1xuICAgICAgZW50cnlCdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW50cnktYnV0dG9uXCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsb2ctYWRkZXItYnV0dG9uXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgfVxuXG4gICAgaWYgKCFlbnRyeUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpIHtcbiAgICAgIG5vcm1hbEJvZHkoKTtcbiAgICB9XG5cbiAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3VjY2Vzcy1idG5cIikpIHtcbiAgICAgIG5vcm1hbEJvZHkoKTtcbiAgICB9XG4gIH07XG5cbiAgZnVuY3Rpb24gbm9ybWFsQm9keSgpIHtcbiAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwidmlzaWJsZVwiO1xuICB9XG59XG5cbmV4cG9ydCB7IHJlbW92ZUxvZ2luTW9kYWwgfTtcbiIsImltcG9ydCB2YWxpZGF0ZUVtYWlsIGZyb20gXCIuL3ZhbGlkYXRlRW1haWxcIjtcbmltcG9ydCBjaGVja0VtYWlsIGZyb20gXCIuL2NoZWNrRW1haWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9naW5Vc2VyKGlucHV0KSB7XG4gIGlmICh2YWxpZGF0ZUVtYWlsKGlucHV0KSkge1xuICAgIHJldHVybiBjaGVja0VtYWlsKGlucHV0LnZhbHVlKS50aGVuKChkYXRhKSA9PiBkYXRhKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChpbnB1dCkge1xuICBpZiAoIWlucHV0LnZhbGlkaXR5LnZhbGlkKSB7XG4gICAgaW5wdXQuZm9jdXMoKTtcbiAgICBhbGVydChcIlBsZWFzZSBtYXRjaCB0aGUgZm9ybWF0IHJlcXVlc3RlZFwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKCFpbnB1dC52YWx1ZS5lbmRzV2l0aChcIkByZWRiZXJyeS5nZVwiKSkge1xuICAgIGFsZXJ0KFwiWW91ciBlbWFpbCBtdXN0IGVuZCB3aXRoIEByZWRiZXJyeS5nZVwiKTtcbiAgICBjb25zdCBhdFBvc2l0aW9uID0gaW5wdXQudmFsdWUuaW5kZXhPZihcIkBcIikgKyAxO1xuICAgIGlucHV0LnZhbHVlID0gaW5wdXQudmFsdWUuc3Vic3RyaW5nKDAsIGF0UG9zaXRpb24pO1xuICAgIGlucHV0LmZvY3VzKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChpbnB1dC52YWx1ZS5lbmRzV2l0aChcIkByZWRiZXJyeS5nZVwiKSkgcmV0dXJuIHRydWU7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjaGVja0VtYWlsKGVtYWlsKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIFwiaHR0cHM6Ly9hcGkuYmxvZy5yZWRiZXJyeWludGVybnNoaXAuZ2UvYXBpL2xvZ2luXCIsXG4gICAgICB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBhY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgZW1haWw6IGAke2VtYWlsfWAsXG4gICAgICAgIH0pLFxuICAgICAgfVxuICAgICk7XG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjA0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDIyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xuICB9XG59XG4iLCJpbXBvcnQgeyByZW1vdmVMb2dpbk1vZGFsIH0gZnJvbSBcIi4vY3JlYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUxvZ2luTW9kYWxVSShkYXRhLCBkaXYpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXQtY29udGFpbmVyXCIpO1xuICBjb25zdCBpbnB1dCA9IGRpdi5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XG4gIGNvbnN0IHN1Y2Nlc3NDb250YWluZXIgPSBkaXYucXVlcnlTZWxlY3RvcihcIi5zdWNjZXNzLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgZXJyb3JDb250YWluZXIgPSBkaXYucXVlcnlTZWxlY3RvcihcIi5lcnJvci1jb250YWluZXJcIik7XG4gIGNvbnN0IGVudHJ5QnRuID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCIuZW50cnktYnRuXCIpO1xuICBjb25zdCBzdWNjZXNzQnRuID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCIuc3VjY2Vzcy1idG5cIik7XG5cbiAgaWYgKGRhdGEpIHtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBzdWNjZXNzQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgZW50cnlCdG4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBzdWNjZXNzQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgZXJyb3JDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuICAgIHN1Y2Nlc3NCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICByZW1vdmVMb2dpbk1vZGFsKGUpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbnRyeS1idXR0b25cIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmxvZy1hZGRlci1idXR0b25cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICghZGF0YSkge1xuICAgIGVycm9yQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgaW5wdXQuc3R5bGUuYm9yZGVyQ29sb3IgPSBcIiNmZjAwMDBcIjtcbiAgICBpbnB1dC5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjEwcHhcIjtcblxuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiB7XG4gICAgICBpbnB1dEV2ZW50cyhcIiM1ZDM3ZjNcIik7XG4gICAgfSk7XG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsICgpID0+IHtcbiAgICAgIGlucHV0RXZlbnRzKFwiIzVkMzdmM1wiKTtcbiAgICB9KTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCAoKSA9PiB7XG4gICAgICBpbnB1dEV2ZW50cyhcIiMwMDAwMDBcIik7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBpbnB1dEV2ZW50cyhjb2xvcikge1xuICAgICAgaW5wdXQuc3R5bGUuYm9yZGVyQ29sb3IgPSBjb2xvcjtcbiAgICAgIGlucHV0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiMjBweFwiO1xuICAgICAgaWYgKCFlcnJvckNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpXG4gICAgICAgIGVycm9yQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5QmxvZ0FkZGVyKCkge1xuICBjb25zdCBibG9nQWRkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jsb2ctYWRkZXJcIik7XG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tZGl2XCIpO1xuICBjb25zdCBibG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibG9nXCIpO1xuXG4gIGlmIChibG9nKSBibG9nLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cbiAgaWYgKGJsb2dBZGRlci5jbGFzc0xpc3QuY29udGFpbnMoXCJoaWRkZW5cIikpIHtcbiAgICBibG9nQWRkZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gIH1cblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJsb2ctYWRkZXItc3RhdHVzXCIsIEpTT04uc3RyaW5naWZ5KHRydWUpKTtcbn1cbiIsImltcG9ydCBsb2dvSW1nIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvYmxvZy1sb2dvLnBuZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVNYWluKCkge1xuICBjb25zdCBzdGF0dXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvZy1hZGRlci1zdGF0dXNcIikpO1xuXG4gIGNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbi1kaXZcIik7XG4gIGlmIChzdGF0dXMpIG1haW4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5mby5jbGFzc0xpc3QuYWRkKFwibWFpbi1pbmZvXCIpO1xuICBtYWluLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRleHQudGV4dENvbnRlbnQgPSBcIuGDkeGDmuGDneGDkuGDmFwiO1xuICBpbmZvLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgbG9nby5zcmMgPSBsb2dvSW1nO1xuICBpbmZvLmFwcGVuZENoaWxkKGxvZ28pO1xuXG4gIHJldHVybiBtYWluO1xufVxuIiwiaW1wb3J0IGJhY2tBcnJvd0ltZyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL2JhY2stYXJyb3cucG5nXCI7XG5pbXBvcnQgZGlzcGxheU1haW5EaXYgZnJvbSBcIi9zcmMvY29tcG9uZW50cy9kb20vbWFpbi9kaXNwbGF5LmpzXCI7XG5pbXBvcnQgY3JlYXRlSW1hZ2VVcGxvYWRlciBmcm9tIFwiLi9pbWFnZS9jcmVhdGVcIjtcbmltcG9ydCBjcmVhdGVBdXRob3IgZnJvbSBcIi4vYXV0aG9yL2NyZWF0ZVwiO1xuaW1wb3J0IGNyZWF0ZVRpdGxlIGZyb20gXCIuL3RpdGxlL2NyZWF0ZVwiO1xuaW1wb3J0IGNyZWF0ZURlc2NyaXB0aW9uIGZyb20gXCIuL2Rlc2NyaXB0aW9uL2NyZWF0ZVwiO1xuaW1wb3J0IGNyZWF0ZURhdGUgZnJvbSBcIi4vZGF0ZS9jcmVhdGVcIjtcbmltcG9ydCBjcmVhdGVCbG9nQ2F0ZWdvcmllcyBmcm9tIFwiLi9jYXRlZ29yaWVzL2NyZWF0ZVwiO1xuaW1wb3J0IGNyZWF0ZUVtYWlsIGZyb20gXCIuL2VtYWlsL2NyZWF0ZVwiO1xuaW1wb3J0IHZhbGlkYXRlRm9ybSBmcm9tIFwiLi4vLi4vbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRpb25zL2Zvcm0vZm9ybVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVCbG9nQWRkZXIoKSB7XG4gIGNvbnN0IHN0YXR1cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibG9nLWFkZGVyLXN0YXR1c1wiKSk7XG5cbiAgY29uc3QgYmxvZ0FkZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYmxvZ0FkZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYmxvZy1hZGRlclwiKTtcblxuICBpZiAoIXN0YXR1cykgYmxvZ0FkZGVyLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cbiAgY29uc3QgYmFja0Fycm93ID0gbmV3IEltYWdlKCk7XG4gIGJhY2tBcnJvdy5jbGFzc0xpc3QuYWRkKFwiYmFjay1hcnJvd1wiKTtcbiAgYmFja0Fycm93LnNyYyA9IGJhY2tBcnJvd0ltZztcbiAgYmxvZ0FkZGVyLmFwcGVuZENoaWxkKGJhY2tBcnJvdyk7XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImJsb2ctYWRkZXItY29udGVudFwiKTtcbiAgYmxvZ0FkZGVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRleHQudGV4dENvbnRlbnQgPSBcIuGDkeGDmuGDneGDkuGDmOGDoSDhg5Phg5Dhg5vhg5Dhg6Lhg5Thg5Hhg5BcIjtcbiAgY29udGVudC5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gIGZvcm0uY2xhc3NMaXN0LmFkZChcImJsb2ctZm9ybVwiKTtcbiAgZm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJsb2ctZm9ybVwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUltYWdlVXBsb2FkZXIoKSk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwiYXV0aG9yLXRpdGxlLWNvbnRhaW5lclwiKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIHRpdGxlLmFwcGVuZENoaWxkKGNyZWF0ZUF1dGhvcigpKTtcbiAgdGl0bGUuYXBwZW5kQ2hpbGQoY3JlYXRlVGl0bGUoKSk7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVEZXNjcmlwdGlvbigpKTtcblxuICBjb25zdCBkYXRlQ2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkYXRlQ2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImRhdGUtY2F0ZWdvcnktY29udGFpbmVyXCIpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRhdGVDYXRlZ29yeSk7XG4gIGRhdGVDYXRlZ29yeS5hcHBlbmRDaGlsZChjcmVhdGVEYXRlKCkpO1xuICBkYXRlQ2F0ZWdvcnkuYXBwZW5kQ2hpbGQoY3JlYXRlQmxvZ0NhdGVnb3JpZXMoKSk7XG5cbiAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVFbWFpbCgpKTtcblxuICBjb25zdCBhZGRCbG9nQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkQmxvZ0J0bi50ZXh0Q29udGVudCA9IFwi4YOS4YOQ4YOb4YOd4YOl4YOV4YOU4YOn4YOc4YOU4YOR4YOQXCI7XG4gIGFkZEJsb2dCdG4uY2xhc3NMaXN0LmFkZChcImFkZC1ibG9nLWJ0blwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChhZGRCbG9nQnRuKTtcblxuICBiYWNrQXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlNYWluRGl2KTtcblxuICBhZGRCbG9nQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB2YWxpZGF0ZUZvcm0oKTtcbiAgfSk7XG4gIHJldHVybiBibG9nQWRkZXI7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNwbGF5TWFpbkRpdigpIHtcbiAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1kaXZcIik7XG4gIGNvbnN0IGJsb2dBZGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxvZy1hZGRlclwiKTtcbiAgY29uc3QgYmxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxvZ1wiKTtcblxuICBibG9nQWRkZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuICBpZiAoYmxvZykge1xuICAgIGJsb2cuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfSBlbHNlIG1haW5EaXYuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJsb2ctYWRkZXItc3RhdHVzXCIsIEpTT04uc3RyaW5naWZ5KGZhbHNlKSk7XG59XG4iLCJpbXBvcnQgZm9sZGVySW1nIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvZm9sZGVyLWFkZC5wbmdcIjtcbmltcG9ydCByZW1vdmVJbWdQbmcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9yZW1vdmUucG5nXCI7XG5pbXBvcnQgdXBkYXRlSW1hZ2VVcGxvYWRlciBmcm9tIFwiLi91cGRhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlSW1hZ2VVcGxvYWRlcigpIHtcbiAgY29uc3QgYmxvZ0luZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvZy1pbmZvXCIpKTtcblxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiaW1hZ2UtaW5wdXRcIik7XG4gIGxhYmVsLmNsYXNzTGlzdC5hZGQoXCJpbWctdXBsb2FkZXItY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgdGV4dC50ZXh0Q29udGVudCA9IFwi4YOQ4YOi4YOV4YOY4YOg4YOX4YOU4YOXIOGDpOGDneGDouGDnVwiO1xuICBsYWJlbC5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICBjb25zdCB1cGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHVwbG9hZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW1hZ2UtdXBsb2FkZXJcIik7XG4gIHVwbG9hZGVyLmNsYXNzTGlzdC5hZGQoXCJpbWFnZS11cGxvYWRlclwiKTtcbiAgbGFiZWwuYXBwZW5kQ2hpbGQodXBsb2FkZXIpO1xuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZmlsZVwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbWFnZS1pbnB1dFwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwiYWNjZXB0XCIsIFwiaW1hZ2UvKlwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwiXCIpO1xuICB1cGxvYWRlci5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gIGltZy5jbGFzc0xpc3QuYWRkKFwiZm9sZGVyLWFkZGVyLWltZ1wiKTtcbiAgaW1nLnNyYyA9IGZvbGRlckltZztcbiAgdXBsb2FkZXIuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICBjb25zdCB0ZXh0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRleHRzLmNsYXNzTGlzdC5hZGQoXCJpbWFnZS10ZXh0c1wiKTtcbiAgdXBsb2FkZXIuYXBwZW5kQ2hpbGQodGV4dHMpO1xuXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IFwi4YOp4YOQ4YOQ4YOS4YOT4YOU4YOXIOGDpOGDkOGDmOGDmuGDmCDhg5Dhg6Ug4YOQ4YOcXCI7XG4gIHRleHRzLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYS50ZXh0Q29udGVudCA9IFwi4YOQ4YOY4YOg4YOp4YOY4YOU4YOXIOGDpOGDkOGDmOGDmuGDmFwiO1xuICB0ZXh0cy5hcHBlbmRDaGlsZChwYXJhKTtcblxuICBjb25zdCByZW1vdmVJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgcmVtb3ZlSW1nLnNyYyA9IHJlbW92ZUltZ1BuZztcbiAgcmVtb3ZlSW1nLmNsYXNzTGlzdC5hZGQoXCJyZW1vdmUtaW1nXCIsIFwiaGlkZGVuXCIpO1xuICB0ZXh0cy5hcHBlbmRDaGlsZChyZW1vdmVJbWcpO1xuXG4gIGlmIChibG9nSW5mbyAmJiBibG9nSW5mby5pbWFnZSkge1xuICAgIHVwZGF0ZUltYWdlVXBsb2FkZXIoXG4gICAgICBpbnB1dCxcbiAgICAgIGJsb2dJbmZvLFxuICAgICAgdXBsb2FkZXIsXG4gICAgICB0ZXh0cyxcbiAgICAgIHBhcmEsXG4gICAgICBzcGFuLFxuICAgICAgaW1nLFxuICAgICAgcmVtb3ZlSW1nLFxuICAgICAgaW5wdXQsXG4gICAgICB0cnVlXG4gICAgKTtcbiAgfVxuXG4gIGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJyZW1vdmUtaW1nXCIpKSBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuXG4gIGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnb3ZlclwiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG5cbiAgbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZmlsZXMgPSBlLmRhdGFUcmFuc2Zlci5maWxlcztcbiAgICBpZiAoIWUuZGF0YVRyYW5zZmVyLmZpbGVzWzBdLnR5cGUubWF0Y2goXCJpbWFnZS4qXCIpKSByZXR1cm47XG5cbiAgICB1cGRhdGVJbWFnZVVwbG9hZGVyKFxuICAgICAgZS50YXJnZXQsXG4gICAgICBibG9nSW5mbyxcbiAgICAgIHVwbG9hZGVyLFxuICAgICAgdGV4dHMsXG4gICAgICBwYXJhLFxuICAgICAgc3BhbixcbiAgICAgIGltZyxcbiAgICAgIHJlbW92ZUltZyxcbiAgICAgIGlucHV0LFxuICAgICAgZmFsc2UsXG4gICAgICBmaWxlc1xuICAgICk7XG4gIH0pO1xuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICB1cGRhdGVJbWFnZVVwbG9hZGVyKFxuICAgICAgZS50YXJnZXQsXG4gICAgICBibG9nSW5mbyxcbiAgICAgIHVwbG9hZGVyLFxuICAgICAgdGV4dHMsXG4gICAgICBwYXJhLFxuICAgICAgc3BhbixcbiAgICAgIGltZyxcbiAgICAgIHJlbW92ZUltZyxcbiAgICAgIGlucHV0LFxuICAgICAgZmFsc2VcbiAgICApO1xuICB9KTtcblxuICByZW1vdmVJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgdXBkYXRlSW1hZ2VVcGxvYWRlcihcbiAgICAgIGUudGFyZ2V0LFxuICAgICAgYmxvZ0luZm8sXG4gICAgICB1cGxvYWRlcixcbiAgICAgIHRleHRzLFxuICAgICAgcGFyYSxcbiAgICAgIHNwYW4sXG4gICAgICBpbWcsXG4gICAgICByZW1vdmVJbWcsXG4gICAgICBpbnB1dCxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGxhYmVsO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlSW1hZ2VVcGxvYWRlcihcbiAgZSxcbiAgYmxvZ0luZm8sXG4gIHVwbG9hZGVyLFxuICB0ZXh0cyxcbiAgbGFiZWwsXG4gIHNwYW4sXG4gIGltZyxcbiAgcmVtb3ZlSW1nLFxuICBpbnB1dCxcbiAgcmVmcmVzaFBhZ2UsXG4gIGZpbGV6XG4pIHtcbiAgaWYgKHJlZnJlc2hQYWdlICYmIGUuaWQgPT09IFwiaW1hZ2UtaW5wdXRcIikge1xuICAgIGltYWdlKCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBibG9nSW5mby5pbWFnZS5uYW1lO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChcbiAgICAhZS5jbGFzc0xpc3QuY29udGFpbnMoXCJyZW1vdmUtaW1nXCIpICYmXG4gICAgIXJlZnJlc2hQYWdlICYmXG4gICAgKGUuaWQgPT09IFwiaW1hZ2UtaW5wdXRcIiB8fCBlLmNsb3Nlc3QoXCIjaW1hZ2UtdXBsb2FkZXJcIikpXG4gICkge1xuICAgIGlmICghaW5wdXQuZmlsZXNbMF0gJiYgZS5pZCA9PT0gXCJpbWFnZS1pbnB1dFwiKSByZXR1cm47XG5cbiAgICBsZXQgZmlsZXM7XG4gICAgaWYgKGlucHV0LmZpbGVzWzBdKSBmaWxlcyA9IGlucHV0LmZpbGVzWzBdO1xuICAgIGVsc2UgZmlsZXMgPSBmaWxlelswXTtcblxuICAgIGltYWdlKCk7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBmaWxlcy5uYW1lO1xuXG4gICAgYXN5bmMgZnVuY3Rpb24gaGFuZGxlRmlsZSgpIHtcbiAgICAgIGNvbnN0IGJhc2U2NCA9IGF3YWl0IGZpbGVUb0Jhc2U2NChmaWxlcyk7XG5cbiAgICAgIGNvbnN0IGJsb2dJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsb2ctaW5mb1wiKSk7XG4gICAgICBibG9nSW5mby5pbWFnZSA9IHt9O1xuICAgICAgYmxvZ0luZm8uaW1hZ2UuYmFzZTY0ID0gYmFzZTY0O1xuICAgICAgYmxvZ0luZm8uaW1hZ2UubmFtZSA9IGZpbGVzLm5hbWU7XG4gICAgICBibG9nSW5mby5pbWFnZS50eXBlID0gZmlsZXMudHlwZTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmxvZy1pbmZvXCIsIEpTT04uc3RyaW5naWZ5KGJsb2dJbmZvKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gZmlsZVRvQmFzZTY0KGZpbGUpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICBjb25zdCBiYXNlNjQgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgICAgIHJlc29sdmUoYmFzZTY0KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICB9O1xuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUZpbGUoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZS5jbGFzc0xpc3QuY29udGFpbnMoXCJyZW1vdmUtaW1nXCIpKSB7XG4gICAgbm9JbWFnZSgpO1xuICAgIGNvbnN0IGJsb2dJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsb2ctaW5mb1wiKSk7XG4gICAgYmxvZ0luZm8uaW1hZ2UgPSBudWxsO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmxvZy1pbmZvXCIsIEpTT04uc3RyaW5naWZ5KGJsb2dJbmZvKSk7XG4gIH1cblxuICBmdW5jdGlvbiBpbWFnZSgpIHtcbiAgICB1cGxvYWRlci5zdHlsZS5wYWRkaW5nID0gXCIyMHB4XCI7XG4gICAgdGV4dHMuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcInNwYWNlLWJldHdlZW5cIjtcbiAgICBsYWJlbC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xuICAgIGxhYmVsLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjUwMFwiO1xuICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBpbWcuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICByZW1vdmVJbWcuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vSW1hZ2UoKSB7XG4gICAgdXBsb2FkZXIuc3R5bGUucGFkZGluZyA9IFwiODBweCAxMDBweFwiO1xuICAgIHRleHRzLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IFwi4YOQ4YOY4YOg4YOp4YOY4YOU4YOXIOGDpOGDkOGDmOGDmuGDmFwiO1xuICAgIGxhYmVsLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJ1bmRlcmxpbmVcIjtcbiAgICBsYWJlbC5zdHlsZS5mb250V2VpZ2h0ID0gXCI3MDBcIjtcbiAgICBzcGFuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgaW1nLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgcmVtb3ZlSW1nLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgaW5wdXQudmFsdWUgPSBcIlwiO1xuICB9XG59XG4iLCJpbXBvcnQgdmFsaWRhdGVBdXRob3IgZnJvbSBcIi4uLy4uLy4uL2xvZ2ljL2Jsb2dBZGRlci92YWxpZGF0aW9ucy9hdXRob3IvYXV0aG9yXCI7XG5pbXBvcnQgdXBkYXRlQXV0aG9yIGZyb20gXCIuL3VwZGF0ZVwiO1xuXG5jb25zdCB2YWxpZGF0aW9ucyA9IFtcbiAgXCLhg5vhg5jhg5zhg5jhg5vhg6Phg5sgNCDhg6Hhg5jhg5vhg5Hhg53hg5rhg51cIixcbiAgXCLhg5vhg5jhg5zhg5jhg5vhg6Phg5sgMiDhg6Hhg5jhg6Lhg6fhg5Xhg5BcIixcbiAgXCLhg5vhg67hg53hg5rhg53hg5Mg4YOl4YOQ4YOg4YOX4YOj4YOa4YOYIOGDoeGDmOGDm+GDkeGDneGDmuGDneGDlOGDkeGDmFwiLFxuXTtcbmNvbnN0IHZhbGlkYXRpb25BcnIgPSBbXTtcbmxldCBpbnB1dDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQXV0aG9yKCkge1xuICBjb25zdCBibG9nSW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibG9nLWluZm9cIikpO1xuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IFwi4YOQ4YOV4YOi4YOd4YOg4YOYXCI7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImF1dGhvci1pbnB1dFwiKTtcbiAgZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSBcIipcIjtcbiAgbGFiZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbiAgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0LmNsYXNzTGlzdC5hZGQoXCJhdXRob3ItaW5wdXRcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYXV0aG9yLWlucHV0XCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIuGDqOGDlOGDmOGDp+GDleGDkOGDnOGDlOGDlyDhg5Dhg5Xhg6Lhg53hg6Dhg5hcIik7XG4gIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgY29uc3QgdGV4dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHRleHRzLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZGF0aW9uLXRleHRzXCIpO1xuICBkaXYuYXBwZW5kQ2hpbGQodGV4dHMpO1xuXG4gIHZhbGlkYXRpb25zLmZvckVhY2goKGVsKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInZhbGlkYXRpb24tY29udGFpbmVyXCIpO1xuICAgIHRleHRzLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgdmFsaWRhdGlvbkFyci5wdXNoKGNvbnRhaW5lcik7XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uQmVmb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgdmFsaWRhdGlvbkJlZm9yZS5jbGFzc0xpc3QuYWRkKFwidmFsaWRhdGlvbi1iZWZvcmVcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHZhbGlkYXRpb25CZWZvcmUpO1xuXG4gICAgY29uc3QgdmFsaWRhdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgdmFsaWRhdGlvblRleHQudGV4dENvbnRlbnQgPSBlbDtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodmFsaWRhdGlvblRleHQpO1xuICB9KTtcblxuICBpZiAoYmxvZ0luZm8gJiYgYmxvZ0luZm8uYXV0aG9yKSB7XG4gICAgaW5wdXQudmFsdWUgPSBibG9nSW5mby5hdXRob3I7XG4gICAgdmFsaWRhdGVBdXRob3IoaW5wdXQsIHZhbGlkYXRpb25BcnIpO1xuICB9XG5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy52YWx1ZSkgdGhpcy5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjNUQzN0YzXCI7XG4gIH0pO1xuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMudmFsdWUuY2hhckF0KDApID09PSBcIiBcIikge1xuICAgICAgYWxlcnQoXCJJbnB1dCBzaG91bGQgbm90IHN0YXJ0IHdpdGggYSBzcGFjZVwiKTtcbiAgICAgIHRoaXMudmFsdWUgPSBcIlwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YWxpZGF0ZUF1dGhvcih0aGlzLCB2YWxpZGF0aW9uQXJyKTtcbiAgfSk7XG5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjZTRlM2ViXCI7XG4gICAgICB1cGRhdGVBdXRob3IoXCJpbml0XCIsIHZhbGlkYXRpb25BcnJbMF0pO1xuICAgICAgdXBkYXRlQXV0aG9yKFwiaW5pdFwiLCB2YWxpZGF0aW9uQXJyWzFdKTtcbiAgICAgIHVwZGF0ZUF1dGhvcihcImluaXRcIiwgdmFsaWRhdGlvbkFyclsyXSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgeyBpbnB1dCwgdmFsaWRhdGlvbkFyciB9O1xuIiwiaW1wb3J0IHZhbGlkYXRlRm91ckxldHRlcnMgZnJvbSBcIi4vZm91ckxldHRlcnNcIjtcbmltcG9ydCB2YWxpZGF0ZVR3b1dvcmRzIGZyb20gXCIuL3R3b1dvcmRzXCI7XG5pbXBvcnQgdmFsaWRhdGVHZW9yZ2lhbkFscGggZnJvbSBcIi4vZ2VvcmdpYW5BbHBoXCI7XG5pbXBvcnQgdXBkYXRlQXV0aG9yIGZyb20gXCIuLi8uLi8uLi8uLi9kb20vYmxvZ0FkZGVyL2F1dGhvci91cGRhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVBdXRob3IoaW5wdXQsIGFycikge1xuICBjb25zdCBibG9nSW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibG9nLWluZm9cIikpO1xuICBjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlO1xuXG4gIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICB1cGRhdGVBdXRob3IoZmFsc2UsIGFyclswXSk7XG4gICAgdXBkYXRlQXV0aG9yKGZhbHNlLCBhcnJbMV0pO1xuICAgIHVwZGF0ZUF1dGhvcihmYWxzZSwgYXJyWzJdKTtcbiAgICBibG9nSW5mby5hdXRob3IgPSB2YWx1ZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJsb2ctaW5mb1wiLCBKU09OLnN0cmluZ2lmeShibG9nSW5mbykpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHVwZGF0ZUF1dGhvcih2YWxpZGF0ZUZvdXJMZXR0ZXJzKHZhbHVlKSwgYXJyWzBdKTtcbiAgdXBkYXRlQXV0aG9yKHZhbGlkYXRlVHdvV29yZHModmFsdWUpLCBhcnJbMV0pO1xuICB1cGRhdGVBdXRob3IodmFsaWRhdGVHZW9yZ2lhbkFscGgodmFsdWUpLCBhcnJbMl0pO1xuXG4gIGJsb2dJbmZvLmF1dGhvciA9IHZhbHVlO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJsb2ctaW5mb1wiLCBKU09OLnN0cmluZ2lmeShibG9nSW5mbykpO1xuXG4gIGlmIChcbiAgICB2YWxpZGF0ZUZvdXJMZXR0ZXJzKHZhbHVlKSAmJlxuICAgIHZhbGlkYXRlVHdvV29yZHModmFsdWUpICYmXG4gICAgdmFsaWRhdGVHZW9yZ2lhbkFscGgodmFsdWUpXG4gICkge1xuICAgIGlucHV0LnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICMxNEQ4MUNcIjtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBpbnB1dC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjRUExOTE5XCI7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZUZvdXJMZXR0ZXJzKHZhbHVlKSB7XG4gIGZ1bmN0aW9uIGNoZWNrVmFsdWUodmFsdWUpIHtcbiAgICBsZXQgbGV0dGVyQ291bnQgPSAwO1xuXG4gICAgZm9yIChjb25zdCBjaGFyIG9mIHZhbHVlKSB7XG4gICAgICBpZiAoY2hhciA9PT0gXCIgXCIpIGNvbnRpbnVlO1xuICAgICAgbGV0dGVyQ291bnQrKztcbiAgICB9XG4gICAgcmV0dXJuIGxldHRlckNvdW50ID49IDQ7XG4gIH1cblxuICByZXR1cm4gY2hlY2tWYWx1ZSh2YWx1ZSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZVR3b1dvcmRzKHZhbHVlKSB7XG4gIGZ1bmN0aW9uIGhhc1R3b1dvcmRzKHZhbHVlKSB7XG4gICAgY29uc3Qgd29yZHMgPSB2YWx1ZS5zcGxpdChcIiBcIik7XG4gICAgbGV0IHdvcmRDb3VudGVyID0gMDtcblxuICAgIGZvciAobGV0IHdvcmQgb2Ygd29yZHMpIHtcbiAgICAgIGlmICh3b3JkID09PSBcIlwiKSBjb250aW51ZTtcbiAgICAgIHdvcmRDb3VudGVyKys7XG4gICAgfVxuICAgIHJldHVybiB3b3JkQ291bnRlciA+PSAyO1xuICB9XG5cbiAgcmV0dXJuIGhhc1R3b1dvcmRzKHZhbHVlKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlR2VvcmdpYW5BbHBoKHZhbHVlKSB7XG4gIGNvbnN0IGdlb3JnaWFuQWxwaGFiZXQgPSBuZXcgU2V0KFtcbiAgICAweDEwYTAsIDB4MTBhMSwgMHgxMGEyLCAweDEwYTMsIDB4MTBhNCwgMHgxMGE1LCAweDEwYTYsIDB4MTBhNywgMHgxMGE4LFxuICAgIDB4MTBhOSwgMHgxMGFhLCAweDEwYWIsIDB4MTBhYywgMHgxMGFkLCAweDEwYWUsIDB4MTBhZiwgMHgxMGIwLCAweDEwYjEsXG4gICAgMHgxMGIyLCAweDEwYjMsIDB4MTBiNCwgMHgxMGI1LCAweDEwYjYsIDB4MTBiNywgMHgxMGI4LCAweDEwYjksIDB4MTBiYSxcbiAgICAweDEwYmIsIDB4MTBiYywgMHgxMGJkLCAweDEwYmUsIDB4MTBiZiwgMHgxMGMwLCAweDEwYzEsIDB4MTBjMiwgMHgxMGMzLFxuICAgIDB4MTBjNCwgMHgxMGM1LCAweDEwYzYsIDB4MTBjNywgMHgxMGM4LCAweDEwYzksIDB4MTBjYSwgMHgxMGNiLCAweDEwY2MsXG4gICAgMHgxMGNkLCAweDEwY2UsIDB4MTBjZiwgMHgxMGQwLCAweDEwZDEsIDB4MTBkMiwgMHgxMGQzLCAweDEwZDQsIDB4MTBkNSxcbiAgICAweDEwZDYsIDB4MTBkNywgMHgxMGQ4LCAweDEwZDksIDB4MTBkYSwgMHgxMGRiLCAweDEwZGMsIDB4MTBkZCwgMHgxMGRlLFxuICAgIDB4MTBkZiwgMHgxMGUwLCAweDEwZTEsIDB4MTBlMiwgMHgxMGUzLCAweDEwZTQsIDB4MTBlNSwgMHgxMGU2LCAweDEwZTcsXG4gICAgMHgxMGU4LCAweDEwZTksIDB4MTBlYSwgMHgxMGViLCAweDEwZWMsIDB4MTBlZCwgMHgxMGVlLCAweDEwZWYsXG4gIF0pO1xuXG4gIGZ1bmN0aW9uIGNoZWNrSW5wdXQoaW5wdXQpIHtcbiAgICBsZXQgYWxsQ2hhcmFjdGVyc0FyZUdlb3JnaWFuID0gdHJ1ZTtcblxuICAgIGZvciAobGV0IGNoYXIgb2YgaW5wdXQpIHtcbiAgICAgIGlmIChjaGFyID09PSBcIiBcIikgY29udGludWU7XG4gICAgICBsZXQgY2hhckNvZGUgPSBjaGFyLmNoYXJDb2RlQXQoMCk7XG4gICAgICBpZiAoIWdlb3JnaWFuQWxwaGFiZXQuaGFzKGNoYXJDb2RlKSkge1xuICAgICAgICBhbGxDaGFyYWN0ZXJzQXJlR2VvcmdpYW4gPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGFsbENoYXJhY3RlcnNBcmVHZW9yZ2lhbjtcbiAgfVxuXG4gIHJldHVybiBjaGVja0lucHV0KHZhbHVlKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUF1dGhvcih2YWxpZCwgZGl2KSB7XG4gIGlmICh2YWxpZCA9PT0gXCJpbml0XCIpIHtcbiAgICBkaXYucXVlcnlTZWxlY3RvcihcInNwYW5cIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjODU4NThkXCI7XG4gICAgZGl2LnF1ZXJ5U2VsZWN0b3IoXCJsaVwiKS5zdHlsZS5jb2xvciA9IFwiIzg1ODU4ZFwiO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh2YWxpZCkge1xuICAgIGRpdi5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMxNEQ4MUNcIjtcbiAgICBkaXYucXVlcnlTZWxlY3RvcihcImxpXCIpLnN0eWxlLmNvbG9yID0gXCIjMTREODFDXCI7XG4gIH1cblxuICBpZiAoIXZhbGlkKSB7XG4gICAgZGl2LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI0VBMTkxOVwiO1xuICAgIGRpdi5xdWVyeVNlbGVjdG9yKFwibGlcIikuc3R5bGUuY29sb3IgPSBcIiNFQTE5MTlcIjtcbiAgfVxufVxuIiwiaW1wb3J0IHZhbGlkYXRlVGl0bGUgZnJvbSBcIi4uLy4uLy4uL2xvZ2ljL2Jsb2dBZGRlci92YWxpZGF0aW9ucy90aXRsZS90aXRsZVwiO1xuaW1wb3J0IHVwZGF0ZVRpdGxlIGZyb20gXCIuL3VwZGF0ZVwiO1xuXG5jb25zdCB2YWxpZGF0aW9ucyA9IFtcIuGDm+GDmOGDnOGDmOGDm+GDo+GDmyAyIOGDoeGDmOGDm+GDkeGDneGDmuGDnVwiXTtcbmxldCBjb250YWluZXI7XG5sZXQgaW5wdXQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVRpdGxlKCkge1xuICBjb25zdCBibG9nSW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibG9nLWluZm9cIikpO1xuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IFwi4YOh4YOQ4YOX4YOQ4YOj4YOg4YOYXCI7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpdGxlLWlucHV0XCIpO1xuICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IFwiKlwiO1xuICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcblxuICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZChcInRpdGxlLWlucHV0XCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlLWlucHV0XCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIuGDqOGDlOGDmOGDp+GDleGDkOGDnOGDlOGDlyDhg6Hhg5Dhg5fhg5Dhg6Phg6Dhg5hcIik7XG4gIGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgY29uc3QgdGV4dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHRleHRzLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZGF0aW9uLXRleHRzXCIpO1xuICBkaXYuYXBwZW5kQ2hpbGQodGV4dHMpO1xuXG4gIHZhbGlkYXRpb25zLmZvckVhY2goKGVsKSA9PiB7XG4gICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInZhbGlkYXRpb24tY29udGFpbmVyXCIpO1xuICAgIHRleHRzLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBiZWZvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBiZWZvcmUuY2xhc3NMaXN0LmFkZChcInZhbGlkYXRpb24tYmVmb3JlXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiZWZvcmUpO1xuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gZWw7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuICB9KTtcblxuICBpZiAoYmxvZ0luZm8gJiYgYmxvZ0luZm8udGl0bGUpIHtcbiAgICBpbnB1dC52YWx1ZSA9IGJsb2dJbmZvLnRpdGxlO1xuICAgIHZhbGlkYXRlVGl0bGUoaW5wdXQsIGNvbnRhaW5lcik7XG4gIH1cblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLnZhbHVlKSB0aGlzLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICM1RDM3RjNcIjtcbiAgfSk7XG5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy52YWx1ZS5jaGFyQXQoMCkgPT09IFwiIFwiKSB7XG4gICAgICBhbGVydChcIklucHV0IHNob3VsZCBub3Qgc3RhcnQgd2l0aCBhIHNwYWNlXCIpO1xuICAgICAgdGhpcy52YWx1ZSA9IFwiXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhbGlkYXRlVGl0bGUodGhpcywgY29udGFpbmVyKTtcbiAgfSk7XG5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjZTRlM2ViXCI7XG4gICAgICB1cGRhdGVUaXRsZShcImluaXRcIiwgY29udGFpbmVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkaXY7XG59XG5cbmV4cG9ydCB7IGlucHV0LCBjb250YWluZXIgfTtcbiIsImltcG9ydCB2YWxpZGF0ZVR3b0xldHRlcnMgZnJvbSBcIi4vdHdvTGV0dGVyc1wiO1xuaW1wb3J0IHVwZGF0ZVRpdGxlIGZyb20gXCIuLi8uLi8uLi8uLi9kb20vYmxvZ0FkZGVyL3RpdGxlL3VwZGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZVRpdGxlKGlucHV0LCBkaXYpIHtcbiAgY29uc3QgdmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgdXBkYXRlVGl0bGUodmFsaWRhdGVUd29MZXR0ZXJzKHZhbHVlKSwgZGl2KTtcblxuICBjb25zdCBibG9nSW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibG9nLWluZm9cIikpO1xuICBibG9nSW5mby50aXRsZSA9IHZhbHVlO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJsb2ctaW5mb1wiLCBKU09OLnN0cmluZ2lmeShibG9nSW5mbykpO1xuXG4gIGlmICh2YWxpZGF0ZVR3b0xldHRlcnModmFsdWUpKSB7XG4gICAgaW5wdXQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgIzE0RDgxQ1wiO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGlucHV0LnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNFQTE5MTlcIjtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlVHdvTGV0dGVycyh2YWx1ZSkge1xuICBmdW5jdGlvbiBjaGVja1ZhbHVlKHZhbHVlKSB7XG4gICAgbGV0IGxldHRlckNvdW50ID0gMDtcblxuICAgIGZvciAoY29uc3QgY2hhciBvZiB2YWx1ZSkge1xuICAgICAgaWYgKGNoYXIgPT09IFwiIFwiKSBjb250aW51ZTtcbiAgICAgIGxldHRlckNvdW50Kys7XG4gICAgfVxuICAgIHJldHVybiBsZXR0ZXJDb3VudCA+PSAyO1xuICB9XG5cbiAgcmV0dXJuIGNoZWNrVmFsdWUodmFsdWUpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlVGl0bGUodmFsaWQsIGRpdikge1xuICBpZiAodmFsaWQgPT09IFwiaW5pdFwiKSB7XG4gICAgZGl2LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzg1ODU4ZFwiO1xuICAgIGRpdi5xdWVyeVNlbGVjdG9yKFwibGlcIikuc3R5bGUuY29sb3IgPSBcIiM4NTg1OGRcIjtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodmFsaWQpIHtcbiAgICBkaXYucXVlcnlTZWxlY3RvcihcInNwYW5cIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjMTREODFDXCI7XG4gICAgZGl2LnF1ZXJ5U2VsZWN0b3IoXCJsaVwiKS5zdHlsZS5jb2xvciA9IFwiIzE0RDgxQ1wiO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKCF2YWxpZCkge1xuICAgIGRpdi5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNFQTE5MTlcIjtcbiAgICBkaXYucXVlcnlTZWxlY3RvcihcImxpXCIpLnN0eWxlLmNvbG9yID0gXCIjRUExOTE5XCI7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgdmFsaWRhdGVEZXNjcmlwdGlvbiBmcm9tIFwiLi4vLi4vLi4vbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRpb25zL2Rlc2NyaXB0aW9uL2Rlc2NyaXB0aW9uXCI7XG5pbXBvcnQgdXBkYXRlVGl0bGUgZnJvbSBcIi4uL3RpdGxlL3VwZGF0ZVwiO1xuXG5jb25zdCB2YWxpZGF0aW9ucyA9IFtcIuGDm+GDmOGDnOGDmOGDm+GDo+GDmyAyIOGDoeGDmOGDm+GDkeGDneGDmuGDnVwiXTtcbmxldCBjb250YWluZXI7XG5sZXQgdGV4dGFyZWE7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURlc2NyaXB0aW9uKCkge1xuICBjb25zdCBibG9nSW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibG9nLWluZm9cIikpO1xuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IFwi4YOQ4YOm4YOs4YOU4YOg4YOQXCI7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NyaXB0aW9uLWlucHV0XCIpO1xuICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IFwiKlwiO1xuICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcblxuICB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgdGV4dGFyZWEuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCLhg6jhg5Thg5jhg6fhg5Xhg5Dhg5zhg5Thg5cg4YOQ4YOm4YOs4YOU4YOg4YOQXCIpO1xuICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIDYpO1xuICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJzcGVsbGNoZWNrXCIsIFwib2ZmXCIpO1xuICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uLWlucHV0XCIpO1xuICB0ZXh0YXJlYS5zdHlsZS5yZXNpemUgPSBcIm5vbmVcIjtcblxuICBkaXYuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xuXG4gIGNvbnN0IHRleHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICB0ZXh0cy5jbGFzc0xpc3QuYWRkKFwidmFsaWRhdGlvbi10ZXh0c1wiKTtcbiAgZGl2LmFwcGVuZENoaWxkKHRleHRzKTtcblxuICB2YWxpZGF0aW9ucy5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZGF0aW9uLWNvbnRhaW5lclwiKTtcbiAgICB0ZXh0cy5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgY29uc3QgYmVmb3JlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgYmVmb3JlLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZGF0aW9uLWJlZm9yZVwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmVmb3JlKTtcblxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IGVsO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgfSk7XG5cbiAgaWYgKGJsb2dJbmZvICYmIGJsb2dJbmZvLmRlc2NyaXB0aW9uKSB7XG4gICAgdGV4dGFyZWEudmFsdWUgPSBibG9nSW5mby5kZXNjcmlwdGlvbjtcbiAgICB2YWxpZGF0ZURlc2NyaXB0aW9uKHRleHRhcmVhLCBjb250YWluZXIpO1xuICB9XG5cbiAgdGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcblxuICB0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy52YWx1ZSkgdGhpcy5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjNUQzN0YzXCI7XG4gIH0pO1xuXG4gIHRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMudmFsdWUuY2hhckF0KDApID09PSBcIiBcIikge1xuICAgICAgYWxlcnQoXCJJbnB1dCBzaG91bGQgbm90IHN0YXJ0IHdpdGggYSBzcGFjZVwiKTtcbiAgICAgIHRoaXMudmFsdWUgPSBcIlwiO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YWxpZGF0ZURlc2NyaXB0aW9uKHRoaXMsIGNvbnRhaW5lcik7XG4gIH0pO1xuXG4gIHRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy52YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2U0ZTNlYlwiO1xuICAgICAgdXBkYXRlVGl0bGUoXCJpbml0XCIsIGNvbnRhaW5lcik7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgeyB0ZXh0YXJlYSwgY29udGFpbmVyIH07XG4iLCJpbXBvcnQgdmFsaWRhdGVUd29MZXR0ZXJzIGZyb20gXCIuLi90aXRsZS90d29MZXR0ZXJzXCI7XG5pbXBvcnQgdXBkYXRlVGl0bGUgZnJvbSBcIi4uLy4uLy4uLy4uL2RvbS9ibG9nQWRkZXIvdGl0bGUvdXBkYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlRGVzY3JpcHRpb24oaW5wdXQsIGRpdikge1xuICBjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlO1xuICB1cGRhdGVUaXRsZSh2YWxpZGF0ZVR3b0xldHRlcnModmFsdWUpLCBkaXYpO1xuXG4gIGNvbnN0IGJsb2dJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsb2ctaW5mb1wiKSk7XG4gIGJsb2dJbmZvLmRlc2NyaXB0aW9uID0gdmFsdWU7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmxvZy1pbmZvXCIsIEpTT04uc3RyaW5naWZ5KGJsb2dJbmZvKSk7XG5cbiAgaWYgKHZhbGlkYXRlVHdvTGV0dGVycyh2YWx1ZSkpIHtcbiAgICBpbnB1dC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjMTREODFDXCI7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgaW5wdXQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI0VBMTkxOVwiO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IHZhbGlkYXRlRGF0ZSBmcm9tIFwiLi4vLi4vLi4vbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRpb25zL2RhdGUvZGF0ZVwiO1xuXG5sZXQgaW5wdXQ7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVEYXRlKCkge1xuICBjb25zdCBibG9nSW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibG9nLWluZm9cIikpO1xuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKFwiY29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IFwi4YOS4YOQ4YOb4YOd4YOl4YOV4YOU4YOn4YOc4YOU4YOR4YOY4YOhIOGDl+GDkOGDoOGDmOGDpuGDmFwiO1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkYXRlLWlucHV0XCIpO1xuICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IFwiKlwiO1xuICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcblxuICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF0ZS1pbnB1dFwiKTtcbiAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICBpZiAoYmxvZ0luZm8gJiYgYmxvZ0luZm8uZGF0ZSkge1xuICAgIGlucHV0LnZhbHVlID0gYmxvZ0luZm8uZGF0ZTtcbiAgICB2YWxpZGF0ZURhdGUoaW5wdXQpO1xuICB9XG5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy52YWx1ZSkgdGhpcy5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjNUQzN0YzXCI7XG4gIH0pO1xuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xuICAgIHZhbGlkYXRlRGF0ZShpbnB1dCk7XG4gIH0pO1xuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWlucHV0LnZhbHVlKSBpbnB1dC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjZTRlM2ViXCI7XG4gIH0pO1xuXG4gIHJldHVybiBkaXY7XG59XG5cbmV4cG9ydCB7IGlucHV0IH07XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZURhdGUoaW5wdXQpIHtcbiAgY29uc3QgdmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgY29uc3QgYmxvZ0luZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvZy1pbmZvXCIpKTtcbiAgYmxvZ0luZm8uZGF0ZSA9IHZhbHVlO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJsb2ctaW5mb1wiLCBKU09OLnN0cmluZ2lmeShibG9nSW5mbykpO1xuXG4gIGlmICh2YWx1ZSkge1xuICAgIGlucHV0LnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICMxNEQ4MUNcIjtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBpbnB1dC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjRUExOTE5XCI7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgZmV0Y2hDYXRlZ29yaWVzIGZyb20gXCIuLi8uLi8uLi9sb2dpYy9jYXRlZ29yaWVzL2ZldGNoXCI7XG5pbXBvcnQgdXBkYXRlQ2F0ZWdvcmllcyBmcm9tIFwiLi91cGRhdGVcIjtcblxubGV0IGNvbnRhaW5lcjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUJsb2dDYXRlZ29yaWVzKCkge1xuICBjb25zdCBibG9nSW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibG9nLWluZm9cIikpO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gXCLhg5nhg5Dhg6Lhg5Thg5Lhg53hg6Dhg5jhg5BcIjtcbiAgZGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHNwYW4udGV4dENvbnRlbnQgPSBcIipcIjtcbiAgbGFiZWwuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbiAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3QtY29udGFpbmVyXCIpO1xuICBkaXYuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBjb25zdCBzZWxlY3RlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNlbGVjdGVkLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZC1jYXRlZ29yeVwiLCBcImhpZGRlblwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdGVkKTtcblxuICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICBzZWxlY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJibG9nLWNhdGVnb3JpZXMtc2VsZWN0XCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcblxuICBjb25zdCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gIHBsYWNlaG9sZGVyLnRleHRDb250ZW50ID0gXCLhg5Dhg5jhg6Dhg6nhg5jhg5Thg5cg4YOZ4YOQ4YOi4YOU4YOS4YOd4YOg4YOY4YOQXCI7XG4gIHBsYWNlaG9sZGVyLmNsYXNzTGlzdC5hZGQoXCJwbGFjZWhvbGRlci1vcHRpb25cIik7XG4gIHBsYWNlaG9sZGVyLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiXCIpO1xuICBwbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiLCBcIlwiKTtcbiAgcGxhY2Vob2xkZXIuc2V0QXR0cmlidXRlKFwic2VsZWN0ZWRcIiwgXCJcIik7XG4gIHBsYWNlaG9sZGVyLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcIlwiKTtcbiAgc2VsZWN0LmFwcGVuZENoaWxkKHBsYWNlaG9sZGVyKTtcblxuICBmZXRjaENhdGVnb3JpZXMoXCJodHRwczovL2FwaS5ibG9nLnJlZGJlcnJ5aW50ZXJuc2hpcC5nZS9hcGlcIikudGhlbigoZGF0YSkgPT4ge1xuICAgIGRhdGEuZGF0YS5mb3JFYWNoKChjYXQpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBjYXQudGl0bGU7XG4gICAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgY2F0LmlkKTtcbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIik7XG5cbiAgICBpZiAoYmxvZ0luZm8gJiYgYmxvZ0luZm8uY2F0ZWdvcmllcykge1xuICAgICAgY29uc3QgY2F0ZWdvcmllcyA9IGJsb2dJbmZvLmNhdGVnb3JpZXM7XG4gICAgICB1cGRhdGVDYXRlZ29yaWVzKFxuICAgICAgICBzZWxlY3QsXG4gICAgICAgIGNvbnRhaW5lcixcbiAgICAgICAgc2VsZWN0ZWQsXG4gICAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgICBvcHRpb25zLFxuICAgICAgICBjYXRlZ29yaWVzXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG5cbiAgc2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcblxuICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJvcHRpb25cIik7XG4gICAgdXBkYXRlQ2F0ZWdvcmllcyhzZWxlY3QsIGNvbnRhaW5lciwgc2VsZWN0ZWQsIHBsYWNlaG9sZGVyLCBvcHRpb25zLCBbXG4gICAgICArdGhpcy52YWx1ZSxcbiAgICBdKTtcbiAgfSk7XG5cbiAgYm9keS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhZGQtYmxvZy1idG5cIikpIHJldHVybjtcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLnNlbGVjdC1jb250YWluZXJcIikpIHtcbiAgICAgIGNvbnN0IGJsb2dJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsb2ctaW5mb1wiKSk7XG4gICAgICBpZiAoYmxvZ0luZm8uY2F0ZWdvcmllcyAmJiBibG9nSW5mby5jYXRlZ29yaWVzLmxlbmd0aCA8IDEpXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjZTRlM2ViXCI7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgeyBjb250YWluZXIgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQ2F0ZWdvcmllcyh1cmwpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VybH0vY2F0ZWdvcmllc2AsIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhcIlRoZXJlIHdhcyBhIHByb2JsZW0gd2l0aCB0aGUgZmV0Y2ggb3BlcmF0aW9uOiBcIiwgZXJyb3IpO1xuICB9XG59XG4iLCJpbXBvcnQgZmV0Y2hDYXRlZ29yaWVzIGZyb20gXCIuLi8uLi8uLi9sb2dpYy9jYXRlZ29yaWVzL2ZldGNoXCI7XG5pbXBvcnQgaW1hZ2UgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy93aGl0ZS1yZW1vdmUucG5nXCI7XG5cbmNvbnN0IGNhdGVnb3J5QXJyID0gW107XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUNhdGVnb3JpZXMoXG4gIHNlbGVjdCxcbiAgc2VsZWN0Q29udGFpbmVyLFxuICBzZWxlY3RlZCxcbiAgcGxhY2Vob2xkZXIsXG4gIG9wdGlvbnMsXG4gIGlkQXJyXG4pIHtcbiAgaWYgKGlkQXJyLmxlbmd0aCA+PSAxKSB7XG4gICAgcGxhY2Vob2xkZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHNlbGVjdGVkLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgc2VsZWN0LnZhbHVlID0gXCJcIjtcbiAgfVxuXG4gIGNvbnN0IGJsb2dJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsb2ctaW5mb1wiKSk7XG4gIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9hcGkuYmxvZy5yZWRiZXJyeWludGVybnNoaXAuZ2UvYXBpXCI7XG5cbiAgb3B0aW9ucy5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSkgcmV0dXJuO1xuICAgIGNvbnN0IHZhbHVlTnVtID0gK2VsLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpO1xuXG4gICAgaWYgKGlkQXJyLmluY2x1ZGVzKHZhbHVlTnVtKSkge1xuICAgICAgY2F0ZWdvcnlBcnIucHVzaCh2YWx1ZU51bSk7XG4gICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJcIik7XG5cbiAgICAgIGJsb2dJbmZvLmNhdGVnb3JpZXMgPSBjYXRlZ29yeUFycjtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmxvZy1pbmZvXCIsIEpTT04uc3RyaW5naWZ5KGJsb2dJbmZvKSk7XG4gICAgfVxuICB9KTtcblxuICBmZXRjaENhdGVnb3JpZXModXJsKS50aGVuKChkYXRhKSA9PiB7XG4gICAgZGF0YS5kYXRhLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBpZiAoaWRBcnIuaW5jbHVkZXMoK2VsLmlkKSkge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5LWNvbnRhaW5lclwiLCBgY2F0ZWdvcnktJHtlbC5pZH1gKTtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGVsLmJhY2tncm91bmRfY29sb3I7XG4gICAgICAgIHNlbGVjdGVkLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gZWwudGl0bGU7XG4gICAgICAgIHRleHQuc3R5bGUuY29sb3IgPSBlbC50ZXh0X2NvbG9yO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5zcmMgPSBpbWFnZTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICAgICAgc2VsZWN0Q29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcImF1dG8gbWlubWF4KDMwcHgsIDFmcilcIjtcbiAgICAgICAgc2VsZWN0Q29udGFpbmVyLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICMxNEQ4MUNcIjtcblxuICAgICAgICBpZiAoY2F0ZWdvcnlBcnIubGVuZ3RoID4gMSkgc2VsZWN0ZWQuc3R5bGUub3ZlcmZsb3dYID0gXCJzY3JvbGxcIjtcblxuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KFwiLmNhdGVnb3J5LWNvbnRhaW5lclwiKTtcbiAgICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XG5cbiAgICAgICAgICBsZXQgaW5kZXggPSBwYXJlbnQuY2xhc3NMaXN0WzFdLmluZGV4T2YoXCItXCIpO1xuICAgICAgICAgIGNvbnN0IGNhdE51bSA9ICtwYXJlbnQuY2xhc3NMaXN0WzFdLnN1YnN0cmluZyhpbmRleCArIDEpO1xuXG4gICAgICAgICAgbGV0IGFyckluZGV4ID0gY2F0ZWdvcnlBcnIuaW5kZXhPZihjYXROdW0pO1xuICAgICAgICAgIGlmIChhcnJJbmRleCAhPT0gLTEpIGNhdGVnb3J5QXJyLnNwbGljZShhcnJJbmRleCwgMSk7XG5cbiAgICAgICAgICBpZiAoY2F0ZWdvcnlBcnIubGVuZ3RoIDwgMSkge1xuICAgICAgICAgICAgc2VsZWN0Q29udGFpbmVyLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNFQTE5MTlcIjtcbiAgICAgICAgICAgIHNlbGVjdGVkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgICBwbGFjZWhvbGRlci50ZXh0Q29udGVudCA9IFwi4YOQ4YOY4YOg4YOp4YOY4YOU4YOXIOGDmeGDkOGDouGDlOGDkuGDneGDoOGDmOGDkFwiO1xuICAgICAgICAgICAgc2VsZWN0Q29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcImF1dG9cIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY2F0ZWdvcnlBcnIubGVuZ3RoIDw9IDEpIHNlbGVjdGVkLnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XG5cbiAgICAgICAgICBibG9nSW5mby5jYXRlZ29yaWVzID0gY2F0ZWdvcnlBcnI7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJibG9nLWluZm9cIiwgSlNPTi5zdHJpbmdpZnkoYmxvZ0luZm8pKTtcblxuICAgICAgICAgIG9wdGlvbnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSkgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKCtlbC5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSA9PT0gY2F0TnVtKVxuICAgICAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoXCJoaWRkZW5cIik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cbiIsImltcG9ydCB2YWxpZGF0ZUVtYWlsIGZyb20gXCIuLi8uLi8uLi9sb2dpYy9ibG9nQWRkZXIvdmFsaWRhdGlvbnMvZW1haWwvZW1haWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRW1haWwoKSB7XG4gIGNvbnN0IGJsb2dJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsb2ctaW5mb1wiKSk7XG5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIiwgXCJlbWFpbC1jb250YWluZXJcIik7XG5cbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gXCLhg5Thg5ot4YOk4YOd4YOh4YOi4YOQXCI7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImVtYWlsLWlucHV0XCIpO1xuICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkV4YW1wbGVAcmVkYmVycnkuZ2VcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJlbWFpbFwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJlbWFpbC1pbnB1dFwiKTtcbiAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICBpZiAoYmxvZ0luZm8gJiYgYmxvZ0luZm8uZW1haWwpIHtcbiAgICBpbnB1dC52YWx1ZSA9IGJsb2dJbmZvLmVtYWlsO1xuICAgIGlmICh2YWxpZGF0ZUVtYWlsKGlucHV0KSkgaW5wdXQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgIzE0RDgxQ1wiO1xuICAgIGVsc2UgaW5wdXQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI0VBMTkxOVwiO1xuICB9XG5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy52YWx1ZSkgdGhpcy5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjNUQzN0YzXCI7XG4gIH0pO1xuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJpbnB1dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHZhbGlkYXRlRW1haWwodGhpcykpIHRoaXMuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgIzE0RDgxQ1wiO1xuICAgIGVsc2UgdGhpcy5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjRUExOTE5XCI7XG5cbiAgICBjb25zdCBibG9nSW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibG9nLWluZm9cIikpO1xuICAgIGJsb2dJbmZvLmVtYWlsID0gdGhpcy52YWx1ZTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJsb2ctaW5mb1wiLCBKU09OLnN0cmluZ2lmeShibG9nSW5mbykpO1xuICB9KTtcblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFpbnB1dC52YWx1ZSkgdGhpcy5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAgI2U0ZTNlYlwiO1xuICB9KTtcblxuICByZXR1cm4gZGl2O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChpbnB1dCkge1xuICBjb25zdCByZWdleCA9IC9eW2EtekEtWjAtOS5fKy1dK0BbYS16QS1aMC05Li1dK1xcLlthLXpBLVpdezIsfSQvO1xuICBpZiAocmVnZXgudGVzdChpbnB1dC52YWx1ZSkgJiYgaW5wdXQudmFsdWUuZW5kc1dpdGgoXCJAcmVkYmVycnkuZ2VcIikpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB2YWxpZGF0ZUltZyBmcm9tIFwiLi4vaW1hZ2UvaW1hZ2VcIjtcbmltcG9ydCB2YWxpZGF0ZUF1dGhvciBmcm9tIFwiLi4vYXV0aG9yL2F1dGhvclwiO1xuaW1wb3J0IHZhbGlkYXRlVGl0bGUgZnJvbSBcIi4uL3RpdGxlL3RpdGxlXCI7XG5pbXBvcnQgdmFsaWRhdGVEZXNjcmlwdGlvbiBmcm9tIFwiLi4vZGVzY3JpcHRpb24vZGVzY3JpcHRpb25cIjtcbmltcG9ydCB2YWxpZGF0ZURhdGUgZnJvbSBcIi4uL2RhdGUvZGF0ZVwiO1xuaW1wb3J0IHtcbiAgaW5wdXQgYXMgYXV0aG9ySW5wdXQsXG4gIHZhbGlkYXRpb25BcnIgYXMgYXV0aG9yVmFsaWRhdGlvbkFycixcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL2RvbS9ibG9nQWRkZXIvYXV0aG9yL2NyZWF0ZVwiO1xuaW1wb3J0IHtcbiAgaW5wdXQgYXMgdGl0bGVJbnB1dCxcbiAgY29udGFpbmVyIGFzIHRpdGxlQ29udGFpbmVyLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vZG9tL2Jsb2dBZGRlci90aXRsZS9jcmVhdGVcIjtcbmltcG9ydCB7XG4gIHRleHRhcmVhIGFzIGRlc2NyaXB0b25UZXh0YXJlYSxcbiAgY29udGFpbmVyIGFzIGRlc2NyaXB0aW9uQ29udGFpbmVyLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vZG9tL2Jsb2dBZGRlci9kZXNjcmlwdGlvbi9jcmVhdGVcIjtcbmltcG9ydCB7IGlucHV0IGFzIGRhdGVJbnB1dCB9IGZyb20gXCIuLi8uLi8uLi8uLi9kb20vYmxvZ0FkZGVyL2RhdGUvY3JlYXRlXCI7XG5pbXBvcnQgeyBjb250YWluZXIgYXMgY2F0ZWdvcmllc0NvbnRhaW5lciB9IGZyb20gXCIuLi8uLi8uLi8uLi9kb20vYmxvZ0FkZGVyL2NhdGVnb3JpZXMvY3JlYXRlXCI7XG5pbXBvcnQgY3JlYXRlU3VjY2Vzc01vZGFsIGZyb20gXCIvc3JjL2NvbXBvbmVudHMvZG9tL2Jsb2dBZGRlci9zdWNjZXNzL2NyZWF0ZS5qc1wiO1xuaW1wb3J0IHNlbmRCbG9nIGZyb20gXCIuLi8uLi8uLi9ibG9ncy9zZW5kQmxvZ1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZUZvcm0oKSB7XG4gIGNvbnN0IGJsb2dJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsb2ctaW5mb1wiKSk7XG5cbiAgaWYgKCF2YWxpZGF0ZUF1dGhvcihhdXRob3JJbnB1dCwgYXV0aG9yVmFsaWRhdGlvbkFycikpXG4gICAgYXV0aG9ySW5wdXQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI0VBMTkxOVwiO1xuICBpZiAoIXZhbGlkYXRlVGl0bGUodGl0bGVJbnB1dCwgdGl0bGVDb250YWluZXIpKVxuICAgIHRpdGxlSW5wdXQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI0VBMTkxOVwiO1xuICBpZiAoIXZhbGlkYXRlRGVzY3JpcHRpb24oZGVzY3JpcHRvblRleHRhcmVhLCBkZXNjcmlwdGlvbkNvbnRhaW5lcikpXG4gICAgZGVzY3JpcHRvblRleHRhcmVhLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNFQTE5MTlcIjtcbiAgaWYgKCF2YWxpZGF0ZURhdGUoZGF0ZUlucHV0KSkgZGF0ZUlucHV0LnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNFQTE5MTlcIjtcbiAgaWYgKFxuICAgIChibG9nSW5mby5jYXRlZ29yaWVzICYmIGJsb2dJbmZvLmNhdGVnb3JpZXMubGVuZ3RoIDwgMSkgfHxcbiAgICAhYmxvZ0luZm8uY2F0ZWdvcmllc1xuICApXG4gICAgY2F0ZWdvcmllc0NvbnRhaW5lci5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjRUExOTE5XCI7XG5cbiAgaWYgKFxuICAgIHZhbGlkYXRlSW1nKCkgJiZcbiAgICB2YWxpZGF0ZUF1dGhvcihhdXRob3JJbnB1dCwgYXV0aG9yVmFsaWRhdGlvbkFycikgJiZcbiAgICB2YWxpZGF0ZVRpdGxlKHRpdGxlSW5wdXQsIHRpdGxlQ29udGFpbmVyKSAmJlxuICAgIHZhbGlkYXRlRGVzY3JpcHRpb24oZGVzY3JpcHRvblRleHRhcmVhLCBkZXNjcmlwdGlvbkNvbnRhaW5lcikgJiZcbiAgICB2YWxpZGF0ZURhdGUoZGF0ZUlucHV0KSAmJlxuICAgIGJsb2dJbmZvLmNhdGVnb3JpZXMgJiZcbiAgICBibG9nSW5mby5jYXRlZ29yaWVzLmxlbmd0aCA+IDBcbiAgKSB7XG4gICAgc2VuZEJsb2coKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJsb2ctaW5mb1wiLCBKU09OLnN0cmluZ2lmeSh7fSkpO1xuICAgIGNyZWF0ZVN1Y2Nlc3NNb2RhbCgpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZUltZygpIHtcbiAgY29uc3QgYmxvZ0luZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvZy1pbmZvXCIpKTtcblxuICBpZiAoYmxvZ0luZm8uaW1hZ2UpIHJldHVybiB0cnVlO1xuXG4gIGlmICghYmxvZ0luZm8uaW1hZ2UpIHtcbiAgICBhbGVydChcIlBsZWFzZSB1cGxvYWQgYW4gaW1hZ2VcIik7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgeFN2ZyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3gtaWNvbi5zdmdcIjtcbmltcG9ydCBzdWNjZXNzSW1nIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvc3VjY2Vzcy1jaXJjbGUucG5nXCI7XG5pbXBvcnQgZGlzcGxheU1haW5EaXYgZnJvbSBcIi9zcmMvY29tcG9uZW50cy9kb20vbWFpbi9kaXNwbGF5LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVN1Y2Nlc3NNb2RhbCgpIHtcbiAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICBib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWNjZXNzLWNvbnRhaW5lclwiKTtcbiAgYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJjb250ZW50XCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgY29uc3QgeEltZyA9IG5ldyBJbWFnZSgpO1xuICB4SW1nLnNyYyA9IHhTdmc7XG4gIHhJbWcuY2xhc3NMaXN0LmFkZChcIngtaW1nXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHhJbWcpO1xuXG4gIGNvbnN0IHN1Y2Nlc3MgPSBuZXcgSW1hZ2UoKTtcbiAgc3VjY2Vzcy5zcmMgPSBzdWNjZXNzSW1nO1xuICBzdWNjZXNzLmNsYXNzTGlzdC5hZGQoXCJzdWNjZXNzLWltZ1wiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChzdWNjZXNzKTtcblxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gXCLhg6nhg5Dhg5zhg5Dhg6zhg5Thg6Dhg5gg4YOs4YOQ4YOg4YOb4YOQ4YOi4YOU4YOR4YOY4YOXIOGDk+GDkOGDlOGDm+GDkOGDouGDkFwiO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRleHQpO1xuXG4gIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGJ1dHRvbi50ZXh0Q29udGVudCA9IFwi4YOb4YOX4YOQ4YOV4YOQ4YOgIOGDkuGDleGDlOGDoOGDk+GDluGDlCDhg5Phg5Dhg5Hhg6Dhg6Phg5zhg5Thg5Hhg5BcIjtcbiAgY29udGVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuXG4gIHhJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgbm9ybWFsQm9keSgpO1xuICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICB9KTtcblxuICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBkaXNwbGF5TWFpbkRpdigpO1xuICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICBub3JtYWxCb2R5KCk7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIG5vcm1hbEJvZHkoKSB7XG4gICAgY29udGFpbmVyLnJlbW92ZSgpO1xuICAgIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcInZpc2libGVcIjtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2VuZEJsb2coKSB7XG4gIGNvbnN0IGJsb2dJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsb2ctaW5mb1wiKSk7XG4gIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gIGNvbnN0IGJhc2U2NFN0cmluZyA9IGJsb2dJbmZvLmltYWdlLmJhc2U2NDtcbiAgY29uc3QgbmV3QmFzZTY0ID0gYmFzZTY0U3RyaW5nLnJlcGxhY2UoL15kYXRhOmltYWdlXFwvXFx3KztiYXNlNjQsLywgXCJcIik7XG4gIGNvbnN0IGJsb2IgPSBiYXNlNjRTdHJpbmdUb0Jsb2IobmV3QmFzZTY0KTtcbiAgZm9ybURhdGEuYXBwZW5kKFwidGl0bGVcIiwgYmxvZ0luZm8udGl0bGUpO1xuICBmb3JtRGF0YS5hcHBlbmQoXCJkZXNjcmlwdGlvblwiLCBibG9nSW5mby5kZXNjcmlwdGlvbik7XG4gIGZvcm1EYXRhLmFwcGVuZChcImltYWdlXCIsIGJsb2IsIFwiZmlsZW5hbWUuanBnXCIpO1xuICBmb3JtRGF0YS5hcHBlbmQoXCJhdXRob3JcIiwgYmxvZ0luZm8uYXV0aG9yKTtcbiAgZm9ybURhdGEuYXBwZW5kKFwiY2F0ZWdvcmllc1wiLCBKU09OLnN0cmluZ2lmeShibG9nSW5mby5jYXRlZ29yaWVzKSk7XG4gIGZvcm1EYXRhLmFwcGVuZChcInB1Ymxpc2hfZGF0ZVwiLCBibG9nSW5mby5kYXRlKTtcbiAgaWYgKGJsb2dJbmZvLmVtYWlsKSBmb3JtRGF0YS5hcHBlbmQoXCJlbWFpbFwiLCBibG9nSW5mby5lbWFpbCk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gcG9zdEJsb2coKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIFwiaHR0cHM6Ly9hcGkuYmxvZy5yZWRiZXJyeWludGVybnNoaXAuZ2UvYXBpL2Jsb2dzXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIGFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOlxuICAgICAgICAgICAgICBcIkJlYXJlciBlNzNiMmNkZmRmM2MwMjllMTY4NGZkNTM2YjNkOTk4MWY2ZDA1MDM1OGRjZTBjNGEzNGNjOThhODU0Y2QwYWY2XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBmb3JtRGF0YSxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEhUVFAgZXJyb3IhIHN0YXR1czogJHtyZXNwb25zZS5zdGF0dXN9YCk7XG4gICAgICB9XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzXCIsIGRhdGEpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH1cblxuICBwb3N0QmxvZygpO1xuXG4gIGZ1bmN0aW9uIGJhc2U2NFN0cmluZ1RvQmxvYihiYXNlNjRTdHJpbmcpIHtcbiAgICBjb25zdCBiaW5hcnlTdHJpbmcgPSBhdG9iKGJhc2U2NFN0cmluZyk7XG4gICAgY29uc3QgbGVuID0gYmluYXJ5U3RyaW5nLmxlbmd0aDtcbiAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGxlbik7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgYnl0ZXNbaV0gPSBiaW5hcnlTdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBCbG9iKFtieXRlc10sIHsgdHlwZTogXCJpbWFnZS9qcGVnXCIgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3JpZXMoZGF0YSkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWRpdlwiKTtcblxuICBjb25zdCBjYXRlZ29yaWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2F0ZWdvcmllcy5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcmllcy1jb250YWluZXJcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2F0ZWdvcmllcyk7XG5cbiAgZGF0YS5kYXRhLmZvckVhY2goKGVsKSA9PiB7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJjYXRlZ29yeVwiLCBgY2F0ZWdvcnktJHtlbC5pZH1gKTtcbiAgICBjYXRlZ29yeS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBlbC5iYWNrZ3JvdW5kX2NvbG9yO1xuICAgIGNhdGVnb3JpZXMuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBlbC50aXRsZTtcbiAgICB0ZXh0LnN0eWxlLmNvbG9yID0gZWwudGV4dF9jb2xvcjtcbiAgICBjYXRlZ29yeS5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBmZXRjaEJsb2dzKHVybCwgdG9rZW4pIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke3VybH0vYmxvZ3NgLCB7XG4gICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIGFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkhUVFAgZXJyb3IgXCIgKyByZXNwb25zZS5zdGF0dXMpO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHRoZSBmZXRjaCBvcGVyYXRpb246IFwiLCBlcnJvcik7XG4gIH1cbn1cbiIsImltcG9ydCBleHBhbmRJbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9leHBhbmQucG5nXCI7XG5pbXBvcnQgZmV0Y2hCbG9nIGZyb20gXCIuLi8uLi8uLi9sb2dpYy9ibG9nL2ZldGNoXCI7XG5pbXBvcnQgY3JlYXRlQmxvZ0NvbnRlbnQgZnJvbSBcIi4uL2Jsb2cvY3JlYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUJsb2dzKGRhdGEpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1kaXZcIik7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJibG9ncy1jb250YWluZXJcIik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBkYXRhLmRhdGEuZm9yRWFjaCgoaW5mbykgPT4ge1xuICAgIGNvbnN0IGJsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJsb2cuY2xhc3NMaXN0LmFkZChcImJsb2ctY29udGFpbmVyXCIsIGBibG9nLSR7aW5mby5pZH1gKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmxvZyk7XG5cbiAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IGluZm8uaW1hZ2U7XG4gICAgYmxvZy5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJibG9nLWNvbnRlbnRcIik7XG4gICAgYmxvZy5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICAgIGNvbnN0IGF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBhdXRob3IudGV4dENvbnRlbnQgPSBpbmZvLmF1dGhvcjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGF1dGhvcik7XG5cbiAgICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgZGF0ZS50ZXh0Q29udGVudCA9IGluZm8ucHVibGlzaF9kYXRlO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IGluZm8udGl0bGU7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb25zdCBjYXRlZ29yaWVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXRlZ29yaWVzLmNsYXNzTGlzdC5hZGQoXCJtYWluLWNhdGVnb3JpZXNcIik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjYXRlZ29yaWVzKTtcblxuICAgIGluZm8uY2F0ZWdvcmllcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcIm1haW4tY2F0ZWdvcnlcIiwgYG1haW4tY2F0ZWdvcnktJHtlbC5pZH1gKTtcbiAgICAgIGNhdGVnb3J5LnRleHRDb250ZW50ID0gZWwudGl0bGU7XG4gICAgICBjYXRlZ29yeS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBlbC5iYWNrZ3JvdW5kX2NvbG9yO1xuICAgICAgY2F0ZWdvcnkuc3R5bGUuY29sb3IgPSBlbC50ZXh0X2NvbG9yO1xuICAgICAgY2F0ZWdvcmllcy5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGluZm8uZGVzY3JpcHRpb247XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBleHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGV4cGFuZC5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kLWJsb2dcIik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChleHBhbmQpO1xuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBcIuGDoeGDoOGDo+GDmuGDkOGDkyDhg5zhg5Dhg67hg5Xhg5BcIjtcbiAgICBleHBhbmQuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gZXhwYW5kSW1nO1xuICAgIGV4cGFuZC5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgZXhwYW5kLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBmZXRjaEJsb2coaW5mby5pZCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICBjcmVhdGVCbG9nQ29udGVudChkYXRhKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hCbG9nKGlkKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5ibG9nLnJlZGJlcnJ5aW50ZXJuc2hpcC5nZS9hcGkvYmxvZ3MvJHtpZH1gLFxuICAgICAge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBhY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgZTczYjJjZGZkZjNjMDI5ZTE2ODRmZDUzNmIzZDk5ODFmNmQwNTAzNThkY2UwYzRhMzRjYzk4YTg1NGNkMGFmNmAsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkhUVFAgZXJyb3IgXCIgKyByZXNwb25zZS5zdGF0dXMpO1xuICAgIH1cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHRoZSBmZXRjaCBvcGVyYXRpb246IFwiLCBlcnJvcik7XG4gIH1cbn1cbiIsImltcG9ydCBmZXRjaEJsb2dzIGZyb20gXCIuLi8uLi8uLi9sb2dpYy9ibG9ncy9mZXRjaFwiO1xuaW1wb3J0IHJlbGF0ZWRCbG9ncyBmcm9tIFwiLi9yZWxhdGVkQmxvZ3MvY3JlYXRlXCI7XG5pbXBvcnQgYmFja0Fycm93SW1nIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvYmFjay1hcnJvdy5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQmxvZ0NvbnRlbnQoZGF0YSkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tZGl2XCIpO1xuICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cbiAgY29uc3QgYmxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJsb2cuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJibG9nXCIpO1xuXG4gIGNvbnN0IGJhY2tBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICBiYWNrQXJyb3cuY2xhc3NMaXN0LmFkZChcImJhY2stYXJyb3dcIik7XG4gIGJhY2tBcnJvdy5zcmMgPSBiYWNrQXJyb3dJbWc7XG4gIGJsb2cuYXBwZW5kQ2hpbGQoYmFja0Fycm93KTtcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiYmxvZy1jb250ZW50XCIpO1xuICBibG9nLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gIGltYWdlLnNyYyA9IGRhdGEuaW1hZ2U7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJibG9nLWluZm9cIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIndyYXBwZXItZGl2XCIpO1xuICBpbmZvLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuXG4gIGNvbnN0IGF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgYXV0aG9yLnRleHRDb250ZW50ID0gZGF0YS5hdXRob3I7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYXV0aG9yKTtcblxuICBjb25zdCBkYXRlRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZGF0ZUVtYWlsLnRleHRDb250ZW50ID0gYCR7ZGF0YS5wdWJsaXNoX2RhdGV9ICDigKIgICR7ZGF0YS5lbWFpbH1gO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGRhdGVFbWFpbCk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gZGF0YS50aXRsZTtcbiAgaW5mby5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgY2F0ZWdvcmllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhdGVnb3JpZXMuY2xhc3NMaXN0LmFkZChcImNhdGVnb3JpZXNcIik7XG4gIGluZm8uYXBwZW5kQ2hpbGQoY2F0ZWdvcmllcyk7XG5cbiAgZGF0YS5jYXRlZ29yaWVzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhdGVnb3J5LnRleHRDb250ZW50ID0gZWwudGl0bGU7XG4gICAgY2F0ZWdvcnkuc3R5bGUuY29sb3IgPSBlbC50ZXh0X2NvbG9yO1xuICAgIGNhdGVnb3J5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGVsLmJhY2tncm91bmRfY29sb3I7XG4gICAgY2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5XCIsIGBjYXRlZ29yeS0ke2VsLmlkfWApO1xuICAgIGNhdGVnb3JpZXMuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xuICB9KTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRhdGEuZGVzY3JpcHRpb247XG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1wYXJhXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICBjb25zdCByZWxhdGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmVsYXRlZC5jbGFzc0xpc3QuYWRkKFwicmVsYXRlZFwiKTtcbiAgYmxvZy5hcHBlbmRDaGlsZChyZWxhdGVkKTtcblxuICBjb25zdCB1cHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHVwcGVyLmNsYXNzTGlzdC5hZGQoXCJ1cHBlclwiKTtcbiAgcmVsYXRlZC5hcHBlbmRDaGlsZCh1cHBlcik7XG5cbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGV4dC50ZXh0Q29udGVudCA9IFwi4YOb4YOh4YOS4YOQ4YOV4YOh4YOYIOGDoeGDouGDkOGDouGDmOGDlOGDkeGDmFwiO1xuICB1cHBlci5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwiYnV0dG9ucy1kaXZcIik7XG4gIHVwcGVyLmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuXG4gIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY3JlYXRlTGVmdFNWRygpKTtcbiAgYnV0dG9ucy5hcHBlbmRDaGlsZChjcmVhdGVSaWdodFNWRygpKTtcblxuICBjb25zdCBsb3dlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxvd2VyLmNsYXNzTGlzdC5hZGQoXCJsb3dlclwiKTtcbiAgcmVsYXRlZC5hcHBlbmRDaGlsZChsb3dlcik7XG5cbiAgZmV0Y2hCbG9ncyhcbiAgICBcImh0dHBzOi8vYXBpLmJsb2cucmVkYmVycnlpbnRlcm5zaGlwLmdlL2FwaVwiLFxuICAgIFwiZmM5YTgwNzYwOGQwMDZmOWQ3NjA0YmM3OGJmNjJiMDI3YTIyNDdjMGMyMzJkYzIxN2E2ZTFkNTQ3NmQ1MjcxYVwiXG4gICkudGhlbigoZGF0YTIpID0+IHtcbiAgICByZWxhdGVkQmxvZ3MoZGF0YSwgZGF0YTIsIGxvd2VyKTtcbiAgfSk7XG5cbiAgYmFja0Fycm93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgbWFpbkRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIGJsb2cucmVtb3ZlKCk7XG4gIH0pO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQoYmxvZyk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxlZnRTVkcoKSB7XG4gIGxldCBzdmdOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjsgLy9uYW1lc3BhY2VcbiAgbGV0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJzdmdcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjQ0XCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiNDRcIik7XG4gIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDQ0IDQ0XCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIm5vbmVcIik7XG5cbiAgbGV0IHJlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTlMsIFwicmVjdFwiKTtcbiAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjQ0XCIpO1xuICByZWN0LnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjQ0XCIpO1xuICByZWN0LnNldEF0dHJpYnV0ZShcInJ4XCIsIFwiMjJcIik7XG4gIHJlY3Quc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIiNFNEUzRUJcIik7XG4gIHN2Zy5hcHBlbmRDaGlsZChyZWN0KTtcblxuICBsZXQgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJwYXRoXCIpO1xuICBwYXRoLnNldEF0dHJpYnV0ZShcbiAgICBcImRcIixcbiAgICBcIk0xOCAyM0MxOC41NTIzIDIzIDE5IDIyLjU1MjMgMTkgMjJDMTkgMjEuNDQ3NyAxOC41NTIzIDIxIDE4IDIxTDE4IDIzWk0xNy4xOTI5IDIxLjI5MjlDMTYuODAyNCAyMS42ODM0IDE2LjgwMjQgMjIuMzE2NiAxNy4xOTI5IDIyLjcwNzFMMjMuNTU2OSAyOS4wNzExQzIzLjk0NzQgMjkuNDYxNiAyNC41ODA1IDI5LjQ2MTYgMjQuOTcxMSAyOS4wNzExQzI1LjM2MTYgMjguNjgwNSAyNS4zNjE2IDI4LjA0NzQgMjQuOTcxMSAyNy42NTY5TDE5LjMxNDIgMjJMMjQuOTcxMSAxNi4zNDMxQzI1LjM2MTYgMTUuOTUyNiAyNS4zNjE2IDE1LjMxOTUgMjQuOTcxMSAxNC45Mjg5QzI0LjU4MDUgMTQuNTM4NCAyMy45NDc0IDE0LjUzODQgMjMuNTU2OSAxNC45Mjg5TDE3LjE5MjkgMjEuMjkyOVpNMTggMjFMMTcuOSAyMUwxNy45IDIzTDE4IDIzTDE4IDIxWlwiXG4gICk7XG4gIHBhdGguc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIiNGM0YyRkFcIik7XG4gIHN2Zy5hcHBlbmRDaGlsZChwYXRoKTtcbiAgcmV0dXJuIHN2Zztcbn1cblxuZnVuY3Rpb24gY3JlYXRlUmlnaHRTVkcoKSB7XG4gIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCI0NFwiKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjQ0XCIpO1xuICBzdmcuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCA0NCA0NFwiKTtcbiAgc3ZnLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJub25lXCIpO1xuXG4gIGNvbnN0IHJlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInJlY3RcIik7XG4gIHJlY3Quc2V0QXR0cmlidXRlKFwieFwiLCBcIjQ0XCIpO1xuICByZWN0LnNldEF0dHJpYnV0ZShcInlcIiwgXCI0NFwiKTtcbiAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjQ0XCIpO1xuICByZWN0LnNldEF0dHJpYnV0ZShcImhlaWdodFwiLCBcIjQ0XCIpO1xuICByZWN0LnNldEF0dHJpYnV0ZShcInJ4XCIsIFwiMjJcIik7XG4gIHJlY3Quc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKDE4MCA0NCA0NClcIik7XG4gIHJlY3Quc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIiNFNEUzRUJcIik7XG4gIHN2Zy5hcHBlbmRDaGlsZChyZWN0KTtcblxuICBjb25zdCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJwYXRoXCIpO1xuICBwYXRoLnNldEF0dHJpYnV0ZShcbiAgICBcImRcIixcbiAgICBcIk0yNiAyMUMyNS40NDc3IDIxIDI1IDIxLjQ0NzcgMjUgMjJDMjUgMjIuNTUyMyAyNS40NDc3IDIzIDI2IDIzTDI2IDIxWk0yNi44MDcxIDIyLjcwNzFDMjcuMTk3NiAyMi4zMTY2IDI3LjE5NzYgMjEuNjgzNCAyNi44MDcxIDIxLjI5MjlMMjAuNDQzMSAxNC45Mjg5QzIwLjA1MjYgMTQuNTM4NCAxOS40MTk1IDE0LjUzODQgMTkuMDI4OSAxNC45Mjg5QzE4LjYzODQgMTUuMzE5NSAxOC42Mzg0IDE1Ljk1MjYgMTkuMDI4OSAxNi4zNDMxTDI0LjY4NTggMjJMMTkuMDI4OSAyNy42NTY5QzE4LjYzODQgMjguMDQ3NCAxOC42Mzg0IDI4LjY4MDUgMTkuMDI4OSAyOS4wNzExQzE5LjQxOTUgMjkuNDYxNiAyMC4wNTI2IDI5LjQ2MTYgMjAuNDQzMSAyOS4wNzExTDI2LjgwNzEgMjIuNzA3MVpNMjYgMjNMMjYuMSAyM0wyNi4xIDIxTDI2IDIxTDI2IDIzWlwiXG4gICk7XG4gIHBhdGguc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIndoaXRlXCIpO1xuICBzdmcuYXBwZW5kQ2hpbGQocGF0aCk7XG5cbiAgcmV0dXJuIHN2Zztcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbGF0ZWRCbG9ncyhkYXRhMSwgZGF0YTIsIGxvd2VyKSB7XG4gIC8vIGNvbnNvbGUubG9nKGRhdGExKTtcbiAgLy8gY29uc29sZS5sb2cobG93ZXIpO1xuICAvLyBsZXQgbWFpbkFycmF5ID0gWzEsIDIsIDMsIDQsIDVdO1xuICAvLyBsZXQgb3RoZXJBcnJheXMgPSBbXG4gIC8vICAgWzIsIDMsIDQsIDUsIDZdLFxuICAvLyAgIFszLCA0LCA1LCA2LCA3XSxcbiAgLy8gICBbNCwgNSwgNiwgNywgOF0sXG4gIC8vICAgWzEsIDIsIDMsIDQsIDVdLFxuICAvLyAgIFs2LCA3LCA4LCA5LCAxMF0sXG4gIC8vIF07XG4gIC8vIGxldCBpbnRlcnNlY3Rpb25Db3VudHMgPSBvdGhlckFycmF5cy5tYXAoKG90aGVyQXJyYXkpID0+IHtcbiAgLy8gICBsZXQgaW50ZXJzZWN0aW9uID0gbWFpbkFycmF5LmZpbHRlcigodmFsdWUpID0+XG4gIC8vICAgICBvdGhlckFycmF5LmluY2x1ZGVzKHZhbHVlKVxuICAvLyAgICk7XG4gIC8vICAgcmV0dXJuIGludGVyc2VjdGlvbi5sZW5ndGg7XG4gIC8vIH0pO1xuICAvLyBsZXQgc29ydGVkQXJyYXlzID0gb3RoZXJBcnJheXMuc2xpY2UoKS5zb3J0KChhLCBiKSA9PiB7XG4gIC8vICAgcmV0dXJuIChcbiAgLy8gICAgIGludGVyc2VjdGlvbkNvdW50c1tvdGhlckFycmF5cy5pbmRleE9mKGIpXSAtXG4gIC8vICAgICBpbnRlcnNlY3Rpb25Db3VudHNbb3RoZXJBcnJheXMuaW5kZXhPZihhKV1cbiAgLy8gICApO1xuICAvLyB9KTtcbiAgLy8gY29uc29sZS5sb2coc29ydGVkQXJyYXlzKTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQwOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIvc3JjL2luZGV4LnNjc3NcIjtcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9kb20vaGVhZGVyL2NyZWF0ZVwiO1xuaW1wb3J0IGNyZWF0ZU1haW4gZnJvbSBcIi4vY29tcG9uZW50cy9kb20vbWFpbi9jcmVhdGVcIjtcbmltcG9ydCBjcmVhdGVCbG9nQWRkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9kb20vYmxvZ0FkZGVyL2NyZWF0ZVwiO1xuaW1wb3J0IGZldGNoQ2F0ZWdvcmllcyBmcm9tIFwiLi9jb21wb25lbnRzL2xvZ2ljL2NhdGVnb3JpZXMvZmV0Y2hcIjtcbmltcG9ydCBjcmVhdGVDYXRlZ29yaWVzIGZyb20gXCIuL2NvbXBvbmVudHMvZG9tL21haW4vY2F0ZWdvcmllcy9jcmVhdGVcIjtcbmltcG9ydCBmZXRjaEJsb2dzIGZyb20gXCIuL2NvbXBvbmVudHMvbG9naWMvYmxvZ3MvZmV0Y2hcIjtcbmltcG9ydCBjcmVhdGVCbG9ncyBmcm9tIFwiLi9jb21wb25lbnRzL2RvbS9tYWluL2Jsb2dzL2NyZWF0ZVwiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCB1cmwgPSBcImh0dHBzOi8vYXBpLmJsb2cucmVkYmVycnlpbnRlcm5zaGlwLmdlL2FwaVwiO1xuY29uc3QgdG9rZW4gPVxuICBcImU3M2IyY2RmZGYzYzAyOWUxNjg0ZmQ1MzZiM2Q5OTgxZjZkMDUwMzU4ZGNlMGM0YTM0Y2M5OGE4NTRjZDBhZjZcIjtcblxuLy8gZmM5YTgwNzYwOGQwMDZmOWQ3NjA0YmM3OGJmNjJiMDI3YTIyNDdjMGMyMzJkYzIxN2E2ZTFkNTQ3NmQ1MjcxYTtcblxuY29uc3QgbG9naW4gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9naW5cIikpO1xuaWYgKCFsb2dpbikgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2dpblwiLCBKU09OLnN0cmluZ2lmeShmYWxzZSkpO1xuXG5jb25zdCBzdGF0dXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvZy1hZGRlci1zdGF0dXNcIikpO1xuaWYgKCFzdGF0dXMpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmxvZy1hZGRlci1zdGF0dXNcIiwgSlNPTi5zdHJpbmdpZnkoZmFsc2UpKTtcblxuY29uc3QgYmxvZ0luZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvZy1pbmZvXCIpKTtcbmlmICghYmxvZ0luZm8pIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmxvZy1pbmZvXCIsIEpTT04uc3RyaW5naWZ5KHt9KSk7XG5cbmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVNYWluKCkpO1xuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVCbG9nQWRkZXIoKSk7XG5cbmZldGNoQ2F0ZWdvcmllcyh1cmwpLnRoZW4oKGRhdGEpID0+IHtcbiAgY3JlYXRlQ2F0ZWdvcmllcyhkYXRhKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBmZXRjaEJsb2dzKHVybCwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGNyZWF0ZUJsb2dzKGRhdGEpO1xuICAgIH0pO1xuICB9LCAxMDAwKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9