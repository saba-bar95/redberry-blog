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
#main-div .selected {
  border: 1px solid #000;
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
  height: 40px;
}
#main-div .blogs-container .blog-container .blog-content .main-categories .main-category {
  padding: 6px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  border-radius: 30px;
  text-align: center;
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
  padding: 40px 0px 400px 0px;
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
#blog .slider-container {
  padding: 100px 76px;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  gap: 50px;
}
#blog .slider-container .upper {
  display: flex;
  justify-content: space-between;
}
#blog .slider-container .upper h1 {
  color: #1a1a1f;
  font-size: 32px;
  font-weight: 700;
  line-height: 40px;
}
#blog .slider-container .upper .prev {
  margin-right: 20px;
}
#blog .slider-container .upper .prev rect {
  cursor: pointer;
}
#blog .slider-container .upper .prev rect:hover {
  fill: #5d37f3;
}
#blog .slider-container .upper .next rect {
  cursor: pointer;
}
#blog .slider-container .upper .next rect:hover {
  fill: #5d37f3;
}
#blog .slider-container .lower {
  margin: auto;
}
#blog .slider-container .lower .slider {
  display: flex;
  gap: 32px;
  overflow-x: scroll;
}
#blog .slider-container .lower .slider .slide {
  width: 408px;
}
#blog .slider-container .lower .slider .slide img {
  width: 408px;
  height: 328px;
  border-radius: 12px;
  margin-bottom: 24px;
}
#blog .slider-container .lower .slider .slide .info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
#blog .slider-container .lower .slider .slide .info h2 {
  color: #1a1a1f;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
}
#blog .slider-container .lower .slider .slide .info p {
  color: #85858d;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}
#blog .slider-container .lower .slider .slide .info h1 {
  color: #1a1a1f;
  font-size: 20px;
  font-weight: 500;
  line-height: 28px;
}
#blog .slider-container .lower .slider .slide .info .categories {
  display: flex;
  overflow-x: scroll;
  gap: 16px;
  height: 50px;
}
#blog .slider-container .lower .slider .slide .info .categories .category {
  display: flex;
  padding: 6px 10px;
  align-items: center;
  gap: 10px;
  justify-content: center;
  border-radius: 30px;
}
#blog .slider-container .lower .slider .slide .info .categories .category p {
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
}
#blog .slider-container .lower .slider .slide .info h4 {
  color: #404049;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  height: 3.5em;
  overflow: hidden;
}
#blog .slider-container .lower .slider .slide .info .expand-blog {
  display: flex;
  gap: 5px;
  cursor: pointer;
}
#blog .slider-container .lower .slider .slide .info .expand-blog .text1 {
  color: #5d37f3;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}
#blog .slider-container .lower .slider .slide .info .expand-blog .expand1-img {
  width: 20px;
  height: 20px;
  margin-bottom: 0;
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
}`, "",{"version":3,"sources":["webpack://./src/styles/header.scss","webpack://./src/index.scss","webpack://./src/styles/main.scss","webpack://./src/styles/loginModal.scss","webpack://./src/styles/blogAdder.scss","webpack://./src/styles/blog.scss","webpack://./src/styles/successModal.scss"],"names":[],"mappings":"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","sourcesContent":["#header-div {\n  position: sticky;\n  top: 0;\n  border-bottom: 1px solid #e4e3eb;\n  background: #fff;\n  font-family: \"FiraGO\";\n\n  .header-content {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 25px 100px;\n    background-color: #f8fafc;\n\n    button {\n      line-height: 20px;\n      font-family: inherit;\n      padding: 10px 20px;\n      background-color: #5d37f3;\n      border: none;\n      border-radius: 8px;\n      color: #fff;\n      font-size: 14px;\n      font-style: normal;\n      font-weight: 500;\n      line-height: 20px;\n      cursor: pointer;\n    }\n  }\n}\n","@use \"/src/styles/header.scss\";\n@use \"/src/styles/main.scss\";\n@use \"/src/styles/loginModal.scss\";\n@use \"/src/styles/blogAdder.scss\";\n@use \"/src/styles/blog.scss\";\n@use \"/src/styles/successModal.scss\";\n\n@font-face {\n  font-family: \"FiraGO\";\n  src: url(\"/src/assets/fonts/FiraGO/FiraGO-Regular.otf\");\n}\n\n$body-color: #f1f5f9;\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.hidden {\n  display: none !important;\n}\n\nbody {\n  background-color: $body-color;\n  min-height: 100vh;\n  padding-bottom: 66px;\n}\n","#main-div {\n  display: flex;\n  flex-direction: column;\n  gap: 70px;\n  font-family: \"FiraGO\";\n\n  .selected {\n    border: 1px solid #000;\n  }\n\n  .main-info {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 70px 90px 0px 120px;\n\n    h1 {\n      font-family: inherit;\n      font-size: 4.8em;\n      color: #1a1a1f;\n    }\n  }\n\n  .categories-container {\n    padding: 30px 300px;\n    display: grid;\n    grid-template-columns: repeat(7, minmax(100px, 1fr));\n    grid-template-rows: 1fr 1fr;\n    grid-gap: 10px;\n\n    .category {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding: 4px 8px;\n      border-radius: 30px;\n      &:hover {\n        cursor: pointer;\n        scale: 1.05;\n        transition-duration: 0.3s;\n      }\n\n      p {\n        text-align: center;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        &:hover {\n          overflow: visible;\n        }\n      }\n    }\n  }\n\n  .blogs-container {\n    display: grid;\n    grid-template-columns: repeat(3, auto);\n    column-gap: 32px;\n    row-gap: 56px;\n    margin: auto;\n\n    .blog-container {\n      width: 408px;\n      justify-self: center;\n\n      img {\n        width: 100%;\n        height: 328px;\n        border-radius: 12px;\n      }\n\n      .blog-content {\n        display: flex;\n        flex-direction: column;\n        margin-top: 24px;\n        gap: 16px;\n\n        h2 {\n          color: #1a1a1f;\n          font-size: 16px;\n          font-weight: 500;\n          line-height: 20px;\n        }\n\n        p {\n          color: #85858d;\n          font-size: 12px;\n          font-weight: 400;\n        }\n\n        h1 {\n          color: #1a1a1f;\n          font-size: 20px;\n          font-weight: 500;\n          line-height: 28px;\n        }\n\n        .main-categories {\n          display: flex;\n          gap: 16px;\n          overflow-x: scroll;\n          height: 40px;\n\n          .main-category {\n            padding: 6px 10px;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            font-size: 12px;\n            border-radius: 30px;\n            text-align: center;\n          }\n        }\n\n        .description {\n          color: #404049;\n          font-size: 16px;\n          font-weight: 400;\n          line-height: 28px;\n          height: 3.5em;\n          overflow: hidden;\n        }\n\n        .expand-blog {\n          display: flex;\n          cursor: pointer;\n\n          p {\n            color: #5d37f3;\n            font-size: 14px;\n            font-weight: 500;\n            line-height: 20px;\n          }\n\n          img {\n            height: 20px;\n            width: auto;\n          }\n        }\n      }\n    }\n  }\n}\n","#modal-container {\n  font-family: \"FiraGO\";\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n\n  .modal-content {\n    display: flex;\n    flex-direction: column;\n    padding: 40px 24px;\n    width: 480px;\n    transform: translateY(-50%);\n    border-radius: 12px;\n    background: #fff;\n\n    .x-img {\n      align-self: end;\n      height: 12px;\n      color: #1a1a1f;\n      cursor: pointer;\n      &:hover {\n        scale: 1.1;\n        transition-duration: 0.5s;\n      }\n    }\n\n    .input-container {\n      display: flex;\n      flex-direction: column;\n\n      h1 {\n        margin-bottom: 24px;\n        color: #1a1a1f;\n        text-align: center;\n        font-size: 24px;\n        font-style: normal;\n        font-weight: 700;\n        line-height: 32px;\n      }\n\n      label {\n        margin-bottom: 8px;\n        color: #1a1a1f;\n        font-size: 14px;\n        font-style: normal;\n        font-weight: 600;\n        line-height: 20px;\n      }\n\n      input {\n        border: 1.5px solid #5d37f3;\n        font-family: inherit;\n        outline: none;\n        background-color: #f7f7ff;\n        border-radius: 12px;\n        padding: 10px;\n        margin-bottom: 24px;\n        color: #85858d;\n        font-size: 14px;\n        font-style: normal;\n        font-weight: 400;\n        line-height: 20px;\n      }\n    }\n\n    .error-container {\n      display: flex;\n      align-items: center;\n      gap: 15px;\n      margin-bottom: 25px;\n\n      p {\n        font-size: 0.9em;\n        color: #ff0000;\n      }\n    }\n\n    .success-container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      gap: 15px;\n      margin-bottom: 20px;\n\n      h1 {\n        font-size: 1.3em;\n        color: #1a1a1f;\n      }\n    }\n\n    button {\n      font-family: inherit;\n      font-size: 0.9em;\n      padding: 12px;\n      border: none;\n      background-color: #5d37f3;\n      border-radius: 8px;\n      color: #ffffff;\n      font-weight: 600;\n      letter-spacing: 0.03em;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n}\n","#blog-adder {\n  font-family: \"FiraGO\";\n  padding: 40px 76px 110px 76px;\n  border-top: 1px solid #e4e3eb;\n  position: relative;\n\n  .back-arrow {\n    position: absolute;\n    cursor: pointer;\n  }\n\n  .blog-adder-content {\n    width: 600px;\n    margin-left: 480px;\n\n    h1 {\n      font-size: 2.3em;\n      color: #1a1a1f;\n      line-height: 40px;\n      font-weight: 700;\n    }\n\n    .blog-form {\n      display: flex;\n      flex-direction: column;\n      gap: 24px;\n      margin: 40px 0px;\n\n      .img-uploader-container {\n        display: flex;\n        flex-direction: column;\n        gap: 12px;\n        &:hover {\n          cursor: pointer;\n        }\n\n        .image-uploader {\n          border-radius: 12px;\n          border: 1px dashed #85858d;\n          background: #f4f3ff;\n          border: 1.5px dashed #85858d;\n          display: flex;\n          flex-direction: column;\n          padding: 48px 165px;\n          gap: 30px;\n\n          img {\n            align-self: center;\n          }\n\n          .image-texts {\n            display: flex;\n            justify-content: center;\n            gap: 5px;\n\n            span,\n            p {\n              color: #1a1a1f;\n              font-size: 14px;\n              font-weight: 400;\n              line-height: 20px;\n            }\n\n            p {\n              text-decoration: underline;\n              cursor: pointer;\n              font-weight: 600;\n            }\n\n            img {\n              cursor: pointer;\n            }\n          }\n        }\n      }\n\n      .author-title-container,\n      .date-category-container {\n        display: flex;\n        justify-content: space-between;\n        gap: 30px;\n      }\n\n      .container {\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        gap: 10px;\n        overflow: hidden;\n\n        label {\n          display: flex;\n          gap: 5px;\n          color: #1a1a1f;\n          font-weight: 600;\n          font-size: 14px;\n          font-weight: 500;\n          line-height: 20px;\n        }\n\n        input,\n        textarea,\n        .select-container {\n          padding: 12px 16px;\n          font-family: inherit;\n          border-radius: 12px;\n          outline: none;\n          border: 1px solid #e4e3eb;\n          color: #85858d;\n          background-color: #fcfcfd;\n        }\n\n        .validation-container {\n          display: flex;\n          align-items: center;\n          gap: 8px;\n        }\n\n        .validation-before {\n          width: 0.5em;\n          height: 0.5em;\n          border-radius: 50%;\n          display: block;\n          background-color: #85858d;\n        }\n\n        li {\n          list-style-type: none;\n          color: #85858d;\n          color: #85858d;\n          font-size: 12px;\n          font-weight: 400;\n          line-height: 20px;\n        }\n\n        .select-container {\n          display: grid;\n          grid-template-columns: auto;\n\n          .selected-category {\n            display: flex;\n            gap: 5px;\n            border-radius: 30px;\n            padding: 5px;\n\n            .category-container {\n              display: flex;\n              justify-content: center;\n              align-items: center;\n              padding: 8px 12px;\n              border-radius: 30px;\n              gap: 7px;\n\n              p {\n                text-align: center;\n              }\n\n              img {\n                cursor: pointer;\n              }\n            }\n          }\n\n          select {\n            background-color: #fcfcfd;\n            border: none;\n            outline: none;\n            width: 100%;\n            cursor: pointer;\n          }\n        }\n      }\n\n      .email-container {\n        align-self: start;\n        width: calc(50% - 15px);\n      }\n    }\n    .add-blog-btn {\n      float: right;\n      font-family: inherit;\n      font-size: 0.9em;\n      width: calc(50% - 15px);\n      line-height: 20px;\n      color: #f8fafc;\n      padding: 15px 10px;\n      background-color: #e4e3eb;\n      border: none;\n      border-radius: 8px;\n      transition-duration: 0.5s;\n      cursor: pointer;\n      &:hover {\n        background-color: #5d37f3;\n      }\n    }\n  }\n}\n","#blog {\n  font-family: \"FiraGO\";\n  position: relative;\n  background: #f3f2fa;\n  min-height: 100vh;\n  padding: 40px 0px 400px 0px;\n\n  .back-arrow {\n    position: absolute;\n    cursor: pointer;\n    margin-left: 76px;\n  }\n\n  .blog-content {\n    width: 720px;\n    margin: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 40px;\n\n    img {\n      height: 328px;\n    }\n\n    .blog-info {\n      display: flex;\n      flex-direction: column;\n      gap: 24px;\n\n      .wrapper-div {\n        display: flex;\n        flex-direction: column;\n        gap: 8px;\n\n        h2 {\n          color: #1a1a1f;\n          font-size: 16px;\n          font-weight: 500;\n          line-height: 20px;\n        }\n\n        p {\n          color: #85858d;\n          font-size: 12px;\n          font-weight: 400;\n          line-height: 16px;\n        }\n      }\n\n      h1 {\n        color: #1a1a1f;\n        font-size: 32px;\n        font-style: normal;\n        font-weight: 700;\n        line-height: 40px;\n      }\n\n      .categories {\n        display: flex;\n        gap: 16px;\n\n        .category {\n          border-radius: 30px;\n          padding: 6px 10px;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          font-size: 12px;\n          font-weight: 500;\n          line-height: 16px;\n        }\n      }\n\n      .description-para {\n        color: #404049;\n        font-size: 16px;\n        font-weight: 400;\n        line-height: 28px;\n      }\n    }\n  }\n\n  .slider-container {\n    padding: 100px 76px;\n    display: flex;\n    flex-direction: column;\n    overflow-x: scroll;\n    gap: 50px;\n\n    .upper {\n      display: flex;\n      justify-content: space-between;\n\n      h1 {\n        color: #1a1a1f;\n        font-size: 32px;\n        font-weight: 700;\n        line-height: 40px;\n      }\n\n      .prev {\n        margin-right: 20px;\n\n        rect {\n          cursor: pointer;\n          &:hover {\n            fill: #5d37f3;\n          }\n        }\n      }\n\n      .next {\n        rect {\n          cursor: pointer;\n          &:hover {\n            fill: #5d37f3;\n          }\n        }\n      }\n    }\n\n    .lower {\n      margin: auto;\n\n      .slider {\n        display: flex;\n        gap: 32px;\n        overflow-x: scroll;\n\n        .slide {\n          width: 408px;\n\n          img {\n            width: 408px;\n            height: 328px;\n            border-radius: 12px;\n            margin-bottom: 24px;\n          }\n\n          .info {\n            display: flex;\n            flex-direction: column;\n            gap: 16px;\n\n            h2 {\n              color: #1a1a1f;\n              font-size: 16px;\n              font-weight: 500;\n              line-height: 20px;\n            }\n\n            p {\n              color: #85858d;\n              font-size: 12px;\n              font-weight: 400;\n              line-height: 16px;\n            }\n\n            h1 {\n              color: #1a1a1f;\n              font-size: 20px;\n              font-weight: 500;\n              line-height: 28px;\n            }\n\n            .categories {\n              display: flex;\n              overflow-x: scroll;\n              gap: 16px;\n              height: 50px;\n\n              .category {\n                display: flex;\n                padding: 6px 10px;\n                align-items: center;\n                gap: 10px;\n                justify-content: center;\n                border-radius: 30px;\n\n                p {\n                  text-align: center;\n                  font-size: 12px;\n                  font-weight: 500;\n                  line-height: 16px;\n                }\n              }\n            }\n\n            h4 {\n              color: #404049;\n              font-size: 16px;\n              font-weight: 400;\n              line-height: 28px;\n              height: 3.5em;\n              overflow: hidden;\n            }\n\n            .expand-blog {\n              display: flex;\n              gap: 5px;\n              cursor: pointer;\n\n              .text1 {\n                color: #5d37f3;\n                font-size: 14px;\n                font-weight: 500;\n                line-height: 20px;\n              }\n\n              .expand1-img {\n                width: 20px;\n                height: 20px;\n                margin-bottom: 0;\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n","#success-container {\n  font-family: \"FiraGO\";\n  background-color: rgba(0, 0, 0, 0.4);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  height: 100%;\n\n  .content {\n    display: flex;\n    flex-direction: column;\n    padding: 40px 24px;\n    width: 480px;\n    transform: translateY(-50%);\n    border-radius: 12px;\n    background: #fff;\n\n    .x-img {\n      align-self: end;\n      height: 12px;\n      color: #1a1a1f;\n      cursor: pointer;\n      &:hover {\n        scale: 1.1;\n        transition-duration: 0.5s;\n      }\n    }\n\n    .success-img {\n      height: 53px;\n      width: 53px;\n      align-self: center;\n      margin-top: 25px;\n    }\n\n    h1 {\n      color: #1a1a1f;\n      text-align: center;\n      font-size: 20px;\n      font-weight: 700;\n      line-height: 28px;\n      margin-top: 16px;\n    }\n\n    button {\n      font-family: inherit;\n      margin-top: 48px;\n      padding: 12px;\n      border: none;\n      background-color: #5d37f3;\n      border-radius: 8px;\n      letter-spacing: 0.03em;\n      color: #fff;\n      font-size: 14px;\n      font-weight: 500;\n      line-height: 20px;\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _email_email__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(52);














function validateForm() {
  const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
  const emailInput = document.querySelector("#email-input");

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
    if (emailInput.value && !(0,_email_email__WEBPACK_IMPORTED_MODULE_12__["default"])(emailInput)) {
      return;
    }
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
  const selected = JSON.parse(localStorage.getItem("selected"));
  const content = document.querySelector("#main-div");
  const categories = document.createElement("div");
  categories.classList.add("categories-container");
  content.appendChild(categories);

  data.data.forEach((el) => {
    const category = document.createElement("div");
    category.classList.add("category", `category-${el.id}`);
    category.style.backgroundColor = el.background_color;
    categories.appendChild(category);
    if (selected.includes(el.id)) category.classList.add("selected");

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
/* harmony import */ var _filter_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63);





function createBlogs(data) {
  const main = document.querySelector("#main-div");

  const container = document.createElement("div");
  container.classList.add("blogs-container");
  main.appendChild(container);

  data.data.forEach((info) => {
    const blog = document.createElement("div");
    blog.classList.add("blog-container", `blog-${info.id}`);
    container.appendChild(blog);

    const comparisonDate = new Date(info.publish_date);
    const today = new Date();
    if (today < comparisonDate) blog.style.display = "none";

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
        (0,_blog_create__WEBPACK_IMPORTED_MODULE_2__["default"])(data, info.id);
      });
    });
  });

  const filters = document.querySelectorAll(".category");

  filters.forEach((el) => {
    el.addEventListener("click", function (e) {
      (0,_filter_filter__WEBPACK_IMPORTED_MODULE_3__["default"])(e.target);
    });
  });

  (0,_filter_filter__WEBPACK_IMPORTED_MODULE_3__["default"])(false);

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
    alert("Too many requests");
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
/* harmony import */ var _src_assets_images_back_arrow_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _logic_blog_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var _src_assets_images_expand_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60);




function createBlogContent(data, infoID) {
  if (!data) return;
  const body = document.querySelector("body");
  const mainDiv = document.querySelector("#main-div");
  mainDiv.classList.add("hidden");

  const blog = document.createElement("div");
  blog.setAttribute("id", "blog");

  const backArrow = new Image();
  backArrow.classList.add("back-arrow");
  backArrow.src = _src_assets_images_back_arrow_png__WEBPACK_IMPORTED_MODULE_0__;
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

  let emailText;
  if (data.email) {
    emailText = `• ${data.email}`;
  } else emailText = "";

  const dateEmail = document.createElement("p");
  dateEmail.textContent = `${data.publish_date}${emailText}`;
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

  backArrow.addEventListener("click", function () {
    mainDiv.classList.remove("hidden");
    blog.remove();
  });

  body.appendChild(blog);

  //= SLIDER =====================================

  const container = document.createElement("div");
  container.classList.add("slider-container");
  blog.appendChild(container);

  const upper = document.createElement("div");
  upper.classList.add("upper");
  container.appendChild(upper);

  const text = document.createElement("h1");
  text.textContent = "მსგავსი სტატიები";
  upper.appendChild(text);

  // const leftsvg = createLeftSVG();
  // const rightsvg = createRightSVG();

  // const buttons = document.createElement("div");
  // buttons.classList.add("buttons");
  // buttons.appendChild(leftsvg);
  // buttons.appendChild(rightsvg);
  // upper.appendChild(buttons);

  const lower = document.createElement("div");
  lower.classList.add("lower");
  container.appendChild(lower);

  const slider = document.createElement("div");
  slider.classList.add("slider");
  lower.appendChild(slider);

  const selectedArr = [];
  data.categories.forEach((el) => {
    selectedArr.push(el.id);
  });
  const blogs = document.querySelectorAll(".blog-container");
  blogs.forEach((el) => {
    const categories = el.querySelectorAll(".main-category");
    const categoriesArr = Array.from(categories).map(function (element) {
      return +element.classList[1].split("-")[2];
    });
    const isContained = categoriesArr.some((element) =>
      selectedArr.includes(element)
    );
    if (isContained) {
      function getAfterDash(input) {
        const index = input.indexOf("-");
        return input.slice(index + 1);
      }
      const blogId = +getAfterDash(el.classList[1]);
      (0,_logic_blog_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])(blogId).then((data) => {
        if (blogId === infoID) return;
        const slide = document.createElement("div");
        slide.classList.add("slide");
        slide.setAttribute("id", `${data.id}`);
        slider.appendChild(slide);

        const image = new Image();
        image.src = data.image;
        slide.appendChild(image);

        const info = document.createElement("div");
        info.classList.add("info");
        slide.appendChild(info);

        const author = document.createElement("h2");
        author.textContent = data.author;
        info.appendChild(author);

        const date = document.createElement("p");
        date.textContent = data.publish_date;
        info.appendChild(date);

        const title = document.createElement("h1");
        title.textContent = data.title;
        info.appendChild(title);

        const categories = document.createElement("div");
        categories.classList.add("categories");
        info.appendChild(categories);

        data.categories.forEach((el) => {
          const category = document.createElement("div");
          category.classList.add("category");
          category.style.backgroundColor = el.background_color;
          categories.appendChild(category);

          const para = document.createElement("p");
          para.textContent = el.title;
          para.style.color = el.text_color;
          category.appendChild(para);
        });

        const description = document.createElement("h4");
        description.classList.add("description");
        description.textContent = data.description;
        info.appendChild(description);

        const expand = document.createElement("div");
        expand.classList.add("expand-blog");
        info.appendChild(expand);

        const text1 = document.createElement("p");
        text1.classList.add("text1");
        text1.textContent = "სრულად ნახვა";
        expand.appendChild(text1);

        const img = new Image();
        img.classList.add("expand1-img");
        img.src = _src_assets_images_expand_png__WEBPACK_IMPORTED_MODULE_2__;
        expand.appendChild(img);

        expand.addEventListener("click", function () {
          const newID = +this.closest(".slide").getAttribute("id");

          (0,_logic_blog_fetch__WEBPACK_IMPORTED_MODULE_1__["default"])(newID).then((data) => {
            createBlogContent(data, newID);
            blog.remove();
          });
        });
      });
    }
  });
}

// function createLeftSVG() {
//   let svgNS = "http://www.w3.org/2000/svg";
//   let svg = document.createElementNS(svgNS, "svg");
//   svg.setAttribute("width", "44");
//   svg.setAttribute("height", "44");
//   svg.setAttribute("viewBox", "0 0 44 44");
//   svg.setAttribute("fill", "none");
//   svg.classList.add("prev");

//   let rect = document.createElementNS(svgNS, "rect");
//   rect.setAttribute("width", "44");
//   rect.setAttribute("height", "44");
//   rect.setAttribute("rx", "22");
//   rect.setAttribute("fill", "#E4E3EB");
//   svg.appendChild(rect);

//   let path = document.createElementNS(svgNS, "path");
//   path.setAttribute(
//     "d",
//     "M18 23C18.5523 23 19 22.5523 19 22C19 21.4477 18.5523 21 18 21L18 23ZM17.1929 21.2929C16.8024 21.6834 16.8024 22.3166 17.1929 22.7071L23.5569 29.0711C23.9474 29.4616 24.5805 29.4616 24.9711 29.0711C25.3616 28.6805 25.3616 28.0474 24.9711 27.6569L19.3142 22L24.9711 16.3431C25.3616 15.9526 25.3616 15.3195 24.9711 14.9289C24.5805 14.5384 23.9474 14.5384 23.5569 14.9289L17.1929 21.2929ZM18 21L17.9 21L17.9 23L18 23L18 21Z"
//   );
//   path.setAttribute("fill", "#F3F2FA");
//   svg.appendChild(path);
//   return svg;
// }

// function createRightSVG() {
//   const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
//   svg.setAttribute("width", "44");
//   svg.setAttribute("height", "44");
//   svg.setAttribute("viewBox", "0 0 44 44");
//   svg.setAttribute("fill", "none");
//   svg.classList.add("next");

//   const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
//   rect.setAttribute("x", "44");
//   rect.setAttribute("y", "44");
//   rect.setAttribute("width", "44");
//   rect.setAttribute("height", "44");
//   rect.setAttribute("rx", "22");
//   rect.setAttribute("transform", "rotate(180 44 44)");
//   rect.setAttribute("fill", "#E4E3EB");
//   svg.appendChild(rect);

//   const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
//   path.setAttribute(
//     "d",
//     "M26 21C25.4477 21 25 21.4477 25 22C25 22.5523 25.4477 23 26 23L26 21ZM26.8071 22.7071C27.1976 22.3166 27.1976 21.6834 26.8071 21.2929L20.4431 14.9289C20.0526 14.5384 19.4195 14.5384 19.0289 14.9289C18.6384 15.3195 18.6384 15.9526 19.0289 16.3431L24.6858 22L19.0289 27.6569C18.6384 28.0474 18.6384 28.6805 19.0289 29.0711C19.4195 29.4616 20.0526 29.4616 20.4431 29.0711L26.8071 22.7071ZM26 23L26.1 23L26.1 21L26 21L26 23Z"
//   );
//   path.setAttribute("fill", "white");
//   svg.appendChild(path);

//   return svg;
// }


/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ filterBlogs)
/* harmony export */ });
function filterBlogs(target) {
  let selected = JSON.parse(localStorage.getItem("selected"));
  const blogs = document.querySelectorAll(".blog-container");

  if (target) {
    const categoryContainer = target.closest(".category");
    let num = +categoryContainer.classList[1].split("-").pop();
    if (categoryContainer.classList.contains("selected")) {
      categoryContainer.classList.remove("selected");
      selected = selected.filter((value) => value !== num);
      localStorage.setItem("selected", JSON.stringify(selected));
    } else {
      categoryContainer.classList.add("selected");
      selected.push(+num);
      localStorage.setItem("selected", JSON.stringify(selected));
    }
  }

  blogs.forEach((el) => {
    const categories = el.querySelectorAll(".main-category");
    const categoriesArr = Array.from(categories).map(function (element) {
      return +element.classList[1].split("-")[2];
    });

    const isContained = categoriesArr.some((element) =>
      selected.includes(element)
    );

    if (selected.length < 1) {
      el.classList.remove("hidden");
      return;
    }

    if (!isContained) el.classList.add("hidden");
    else el.classList.remove("hidden");
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

const login = JSON.parse(localStorage.getItem("login"));
if (!login) localStorage.setItem("login", JSON.stringify(false));

const status = JSON.parse(localStorage.getItem("blog-adder-status"));
if (!status) localStorage.setItem("blog-adder-status", JSON.stringify(false));

const blogInfo = JSON.parse(localStorage.getItem("blog-info"));
if (!blogInfo) localStorage.setItem("blog-info", JSON.stringify({}));

const selected = JSON.parse(localStorage.getItem("selected"));
if (!selected) localStorage.setItem("selected", JSON.stringify([]));

body.appendChild((0,_components_dom_header_create__WEBPACK_IMPORTED_MODULE_1__["default"])());
body.appendChild((0,_components_dom_main_create__WEBPACK_IMPORTED_MODULE_2__["default"])());
body.appendChild((0,_components_dom_blogAdder_create__WEBPACK_IMPORTED_MODULE_3__["default"])());

(0,_components_logic_categories_fetch__WEBPACK_IMPORTED_MODULE_4__["default"])(url)
  .then((data) => {
    (0,_components_dom_main_categories_create__WEBPACK_IMPORTED_MODULE_5__["default"])(data);

    setTimeout(() => {
      (0,_components_logic_blogs_fetch__WEBPACK_IMPORTED_MODULE_6__["default"])(url, token).then((data) => {
        (0,_components_dom_main_blogs_create__WEBPACK_IMPORTED_MODULE_7__["default"])(data);
      });
    }, 1000);
  })
  .catch((err) => console.log(err));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHdUQUF3VCxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE1BQU0sT0FBTyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLFFBQVEsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sTUFBTSxV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RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBeUI7QUFDaUM7QUFDSjtBQUNVO0FBQ0U7QUFDSztBQUNmO0FBQ0s7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtFQUFrRTs7QUFFbEU7QUFDQTs7QUFFQSxpQkFBaUIseUVBQVk7QUFDN0IsaUJBQWlCLHVFQUFVO0FBQzNCLGlCQUFpQiw0RUFBZTs7QUFFaEMsOEVBQWU7QUFDZjtBQUNBLElBQUksa0ZBQWdCOztBQUVwQjtBQUNBLE1BQU0seUVBQVU7QUFDaEIsUUFBUSw2RUFBVztBQUNuQixPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvaW5kZXguc2Nzcz83MjIzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9pbmRleC5zY3NzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2hlYWRlci9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2RvbS9oZWFkZXIvbG9naW5Nb2RhbC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2xvZ2ljL2xvZ2luVXNlci9sb2dpblVzZXIuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2xvZ2ljL2xvZ2luVXNlci92YWxpZGF0ZUVtYWlsLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9sb2dpYy9sb2dpblVzZXIvY2hlY2tFbWFpbC5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2hlYWRlci9sb2dpbk1vZGFsL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2Jsb2dBZGRlci9kaXNwbGF5LmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vbWFpbi9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2RvbS9ibG9nQWRkZXIvY3JlYXRlLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vbWFpbi9kaXNwbGF5LmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vYmxvZ0FkZGVyL2ltYWdlL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2Jsb2dBZGRlci9pbWFnZS91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2RvbS9ibG9nQWRkZXIvYXV0aG9yL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRpb25zL2F1dGhvci9hdXRob3IuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2xvZ2ljL2Jsb2dBZGRlci92YWxpZGF0aW9ucy9hdXRob3IvZm91ckxldHRlcnMuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2xvZ2ljL2Jsb2dBZGRlci92YWxpZGF0aW9ucy9hdXRob3IvdHdvV29yZHMuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2xvZ2ljL2Jsb2dBZGRlci92YWxpZGF0aW9ucy9hdXRob3IvZ2VvcmdpYW5BbHBoLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vYmxvZ0FkZGVyL2F1dGhvci91cGRhdGUuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2RvbS9ibG9nQWRkZXIvdGl0bGUvY3JlYXRlLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9sb2dpYy9ibG9nQWRkZXIvdmFsaWRhdGlvbnMvdGl0bGUvdGl0bGUuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2xvZ2ljL2Jsb2dBZGRlci92YWxpZGF0aW9ucy90aXRsZS90d29MZXR0ZXJzLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vYmxvZ0FkZGVyL3RpdGxlL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2Jsb2dBZGRlci9kZXNjcmlwdGlvbi9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2xvZ2ljL2Jsb2dBZGRlci92YWxpZGF0aW9ucy9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2Jsb2dBZGRlci9kYXRlL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRpb25zL2RhdGUvZGF0ZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2Jsb2dBZGRlci9jYXRlZ29yaWVzL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvY2F0ZWdvcmllcy9mZXRjaC5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2Jsb2dBZGRlci9jYXRlZ29yaWVzL3VwZGF0ZS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL2Jsb2dBZGRlci9lbWFpbC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2xvZ2ljL2Jsb2dBZGRlci92YWxpZGF0aW9ucy9lbWFpbC9lbWFpbC5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRpb25zL2Zvcm0vZm9ybS5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRpb25zL2ltYWdlL2ltYWdlLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vYmxvZ0FkZGVyL3N1Y2Nlc3MvY3JlYXRlLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9sb2dpYy9ibG9ncy9zZW5kQmxvZy5qcyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nLy4vc3JjL2NvbXBvbmVudHMvZG9tL21haW4vY2F0ZWdvcmllcy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2xvZ2ljL2Jsb2dzL2ZldGNoLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vbWFpbi9ibG9ncy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2xvZ2ljL2Jsb2cvZmV0Y2guanMiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9jb21wb25lbnRzL2RvbS9tYWluL2Jsb2cvY3JlYXRlLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvLi9zcmMvY29tcG9uZW50cy9kb20vbWFpbi9ibG9ncy9maWx0ZXIvZmlsdGVyLmpzIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZWRiZXJyeS1ibG9nL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3JlZGJlcnJ5LWJsb2cvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVkYmVycnktYmxvZy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiL3NyYy9hc3NldHMvZm9udHMvRmlyYUdPL0ZpcmFHTy1SZWd1bGFyLm90ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgI2hlYWRlci1kaXYge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlM2ViO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJGaXJhR09cIjtcbn1cbiNoZWFkZXItZGl2IC5oZWFkZXItY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMjVweCAxMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcbn1cbiNoZWFkZXItZGl2IC5oZWFkZXItY29udGVudCBidXR0b24ge1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkMzdmMztcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuI21haW4tZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA3MHB4O1xuICBmb250LWZhbWlseTogXCJGaXJhR09cIjtcbn1cbiNtYWluLWRpdiAuc2VsZWN0ZWQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xufVxuI21haW4tZGl2IC5tYWluLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDcwcHggOTBweCAwcHggMTIwcHg7XG59XG4jbWFpbi1kaXYgLm1haW4taW5mbyBoMSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IDQuOGVtO1xuICBjb2xvcjogIzFhMWExZjtcbn1cbiNtYWluLWRpdiAuY2F0ZWdvcmllcy1jb250YWluZXIge1xuICBwYWRkaW5nOiAzMHB4IDMwMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gIGdyaWQtZ2FwOiAxMHB4O1xufVxuI21haW4tZGl2IC5jYXRlZ29yaWVzLWNvbnRhaW5lciAuY2F0ZWdvcnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cbiNtYWluLWRpdiAuY2F0ZWdvcmllcy1jb250YWluZXIgLmNhdGVnb3J5OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBzY2FsZTogMS4wNTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbn1cbiNtYWluLWRpdiAuY2F0ZWdvcmllcy1jb250YWluZXIgLmNhdGVnb3J5IHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuI21haW4tZGl2IC5jYXRlZ29yaWVzLWNvbnRhaW5lciAuY2F0ZWdvcnkgcDpob3ZlciB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuI21haW4tZGl2IC5ibG9ncy1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBhdXRvKTtcbiAgY29sdW1uLWdhcDogMzJweDtcbiAgcm93LWdhcDogNTZweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuI21haW4tZGl2IC5ibG9ncy1jb250YWluZXIgLmJsb2ctY29udGFpbmVyIHtcbiAgd2lkdGg6IDQwOHB4O1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cbiNtYWluLWRpdiAuYmxvZ3MtY29udGFpbmVyIC5ibG9nLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMjhweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cbiNtYWluLWRpdiAuYmxvZ3MtY29udGFpbmVyIC5ibG9nLWNvbnRhaW5lciAuYmxvZy1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXRvcDogMjRweDtcbiAgZ2FwOiAxNnB4O1xufVxuI21haW4tZGl2IC5ibG9ncy1jb250YWluZXIgLmJsb2ctY29udGFpbmVyIC5ibG9nLWNvbnRlbnQgaDIge1xuICBjb2xvcjogIzFhMWExZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbiNtYWluLWRpdiAuYmxvZ3MtY29udGFpbmVyIC5ibG9nLWNvbnRhaW5lciAuYmxvZy1jb250ZW50IHAge1xuICBjb2xvcjogIzg1ODU4ZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuI21haW4tZGl2IC5ibG9ncy1jb250YWluZXIgLmJsb2ctY29udGFpbmVyIC5ibG9nLWNvbnRlbnQgaDEge1xuICBjb2xvcjogIzFhMWExZjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cbiNtYWluLWRpdiAuYmxvZ3MtY29udGFpbmVyIC5ibG9nLWNvbnRhaW5lciAuYmxvZy1jb250ZW50IC5tYWluLWNhdGVnb3JpZXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDE2cHg7XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuI21haW4tZGl2IC5ibG9ncy1jb250YWluZXIgLmJsb2ctY29udGFpbmVyIC5ibG9nLWNvbnRlbnQgLm1haW4tY2F0ZWdvcmllcyAubWFpbi1jYXRlZ29yeSB7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jbWFpbi1kaXYgLmJsb2dzLWNvbnRhaW5lciAuYmxvZy1jb250YWluZXIgLmJsb2ctY29udGVudCAuZGVzY3JpcHRpb24ge1xuICBjb2xvcjogIzQwNDA0OTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgaGVpZ2h0OiAzLjVlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbiNtYWluLWRpdiAuYmxvZ3MtY29udGFpbmVyIC5ibG9nLWNvbnRhaW5lciAuYmxvZy1jb250ZW50IC5leHBhbmQtYmxvZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNtYWluLWRpdiAuYmxvZ3MtY29udGFpbmVyIC5ibG9nLWNvbnRhaW5lciAuYmxvZy1jb250ZW50IC5leHBhbmQtYmxvZyBwIHtcbiAgY29sb3I6ICM1ZDM3ZjM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4jbWFpbi1kaXYgLmJsb2dzLWNvbnRhaW5lciAuYmxvZy1jb250YWluZXIgLmJsb2ctY29udGVudCAuZXhwYW5kLWJsb2cgaW1nIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogYXV0bztcbn1cblxuI21vZGFsLWNvbnRhaW5lciB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpcmFHT1wiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiNtb2RhbC1jb250YWluZXIgLm1vZGFsLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA0MHB4IDI0cHg7XG4gIHdpZHRoOiA0ODBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuI21vZGFsLWNvbnRhaW5lciAubW9kYWwtY29udGVudCAueC1pbWcge1xuICBhbGlnbi1zZWxmOiBlbmQ7XG4gIGhlaWdodDogMTJweDtcbiAgY29sb3I6ICMxYTFhMWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNtb2RhbC1jb250YWluZXIgLm1vZGFsLWNvbnRlbnQgLngtaW1nOmhvdmVyIHtcbiAgc2NhbGU6IDEuMTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbn1cbiNtb2RhbC1jb250YWluZXIgLm1vZGFsLWNvbnRlbnQgLmlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4jbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250ZW50IC5pbnB1dC1jb250YWluZXIgaDEge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBjb2xvcjogIzFhMWExZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGluZS1oZWlnaHQ6IDMycHg7XG59XG4jbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250ZW50IC5pbnB1dC1jb250YWluZXIgbGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGNvbG9yOiAjMWExYTFmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4jbW9kYWwtY29udGFpbmVyIC5tb2RhbC1jb250ZW50IC5pbnB1dC1jb250YWluZXIgaW5wdXQge1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICM1ZDM3ZjM7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2ZmO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBjb2xvcjogIzg1ODU4ZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuI21vZGFsLWNvbnRhaW5lciAubW9kYWwtY29udGVudCAuZXJyb3ItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuI21vZGFsLWNvbnRhaW5lciAubW9kYWwtY29udGVudCAuZXJyb3ItY29udGFpbmVyIHAge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogI2ZmMDAwMDtcbn1cbiNtb2RhbC1jb250YWluZXIgLm1vZGFsLWNvbnRlbnQgLnN1Y2Nlc3MtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuI21vZGFsLWNvbnRhaW5lciAubW9kYWwtY29udGVudCAuc3VjY2Vzcy1jb250YWluZXIgaDEge1xuICBmb250LXNpemU6IDEuM2VtO1xuICBjb2xvcjogIzFhMWExZjtcbn1cbiNtb2RhbC1jb250YWluZXIgLm1vZGFsLWNvbnRlbnQgYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkMzdmMztcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcbn1cbiNtb2RhbC1jb250YWluZXIgLm1vZGFsLWNvbnRlbnQgYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4jYmxvZy1hZGRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpcmFHT1wiO1xuICBwYWRkaW5nOiA0MHB4IDc2cHggMTEwcHggNzZweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlNGUzZWI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbiNibG9nLWFkZGVyIC5iYWNrLWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IHtcbiAgd2lkdGg6IDYwMHB4O1xuICBtYXJnaW4tbGVmdDogNDgwcHg7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IGgxIHtcbiAgZm9udC1zaXplOiAyLjNlbTtcbiAgY29sb3I6ICMxYTFhMWY7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyNHB4O1xuICBtYXJnaW46IDQwcHggMHB4O1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5pbWctdXBsb2FkZXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxMnB4O1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5pbWctdXBsb2FkZXItY29udGFpbmVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5pbWctdXBsb2FkZXItY29udGFpbmVyIC5pbWFnZS11cGxvYWRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjODU4NThkO1xuICBiYWNrZ3JvdW5kOiAjZjRmM2ZmO1xuICBib3JkZXI6IDEuNXB4IGRhc2hlZCAjODU4NThkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA0OHB4IDE2NXB4O1xuICBnYXA6IDMwcHg7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmltZy11cGxvYWRlci1jb250YWluZXIgLmltYWdlLXVwbG9hZGVyIGltZyB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuaW1nLXVwbG9hZGVyLWNvbnRhaW5lciAuaW1hZ2UtdXBsb2FkZXIgLmltYWdlLXRleHRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogNXB4O1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5pbWctdXBsb2FkZXItY29udGFpbmVyIC5pbWFnZS11cGxvYWRlciAuaW1hZ2UtdGV4dHMgc3BhbixcbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuaW1nLXVwbG9hZGVyLWNvbnRhaW5lciAuaW1hZ2UtdXBsb2FkZXIgLmltYWdlLXRleHRzIHAge1xuICBjb2xvcjogIzFhMWExZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuaW1nLXVwbG9hZGVyLWNvbnRhaW5lciAuaW1hZ2UtdXBsb2FkZXIgLmltYWdlLXRleHRzIHAge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5pbWctdXBsb2FkZXItY29udGFpbmVyIC5pbWFnZS11cGxvYWRlciAuaW1hZ2UtdGV4dHMgaW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5hdXRob3ItdGl0bGUtY29udGFpbmVyLFxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5kYXRlLWNhdGVnb3J5LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAzMHB4O1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5jb250YWluZXIge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmNvbnRhaW5lciBsYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNXB4O1xuICBjb2xvcjogIzFhMWExZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuY29udGFpbmVyIGlucHV0LFxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5jb250YWluZXIgdGV4dGFyZWEsXG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmNvbnRhaW5lciAuc2VsZWN0LWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNGUzZWI7XG4gIGNvbG9yOiAjODU4NThkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZkO1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5jb250YWluZXIgLnZhbGlkYXRpb24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmNvbnRhaW5lciAudmFsaWRhdGlvbi1iZWZvcmUge1xuICB3aWR0aDogMC41ZW07XG4gIGhlaWdodDogMC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NTg1OGQ7XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmNvbnRhaW5lciBsaSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgY29sb3I6ICM4NTg1OGQ7XG4gIGNvbG9yOiAjODU4NThkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5jb250YWluZXIgLnNlbGVjdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG59XG4jYmxvZy1hZGRlciAuYmxvZy1hZGRlci1jb250ZW50IC5ibG9nLWZvcm0gLmNvbnRhaW5lciAuc2VsZWN0LWNvbnRhaW5lciAuc2VsZWN0ZWQtY2F0ZWdvcnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogNXB4O1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5jb250YWluZXIgLnNlbGVjdC1jb250YWluZXIgLnNlbGVjdGVkLWNhdGVnb3J5IC5jYXRlZ29yeS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIGdhcDogN3B4O1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYmxvZy1mb3JtIC5jb250YWluZXIgLnNlbGVjdC1jb250YWluZXIgLnNlbGVjdGVkLWNhdGVnb3J5IC5jYXRlZ29yeS1jb250YWluZXIgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuY29udGFpbmVyIC5zZWxlY3QtY29udGFpbmVyIC5zZWxlY3RlZC1jYXRlZ29yeSAuY2F0ZWdvcnktY29udGFpbmVyIGltZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuY29udGFpbmVyIC5zZWxlY3QtY29udGFpbmVyIHNlbGVjdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiNibG9nLWFkZGVyIC5ibG9nLWFkZGVyLWNvbnRlbnQgLmJsb2ctZm9ybSAuZW1haWwtY29udGFpbmVyIHtcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDE1cHgpO1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYWRkLWJsb2ctYnRuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gMTVweCk7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogI2Y4ZmFmYztcbiAgcGFkZGluZzogMTVweCAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlM2ViO1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2Jsb2ctYWRkZXIgLmJsb2ctYWRkZXItY29udGVudCAuYWRkLWJsb2ctYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVkMzdmMztcbn1cblxuI2Jsb2cge1xuICBmb250LWZhbWlseTogXCJGaXJhR09cIjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiAjZjNmMmZhO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogNDBweCAwcHggNDAwcHggMHB4O1xufVxuI2Jsb2cgLmJhY2stYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IDc2cHg7XG59XG4jYmxvZyAuYmxvZy1jb250ZW50IHtcbiAgd2lkdGg6IDcyMHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogNDBweDtcbn1cbiNibG9nIC5ibG9nLWNvbnRlbnQgaW1nIHtcbiAgaGVpZ2h0OiAzMjhweDtcbn1cbiNibG9nIC5ibG9nLWNvbnRlbnQgLmJsb2ctaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMjRweDtcbn1cbiNibG9nIC5ibG9nLWNvbnRlbnQgLmJsb2ctaW5mbyAud3JhcHBlci1kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDhweDtcbn1cbiNibG9nIC5ibG9nLWNvbnRlbnQgLmJsb2ctaW5mbyAud3JhcHBlci1kaXYgaDIge1xuICBjb2xvcjogIzFhMWExZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbn1cbiNibG9nIC5ibG9nLWNvbnRlbnQgLmJsb2ctaW5mbyAud3JhcHBlci1kaXYgcCB7XG4gIGNvbG9yOiAjODU4NThkO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xufVxuI2Jsb2cgLmJsb2ctY29udGVudCAuYmxvZy1pbmZvIGgxIHtcbiAgY29sb3I6ICMxYTFhMWY7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogNDBweDtcbn1cbiNibG9nIC5ibG9nLWNvbnRlbnQgLmJsb2ctaW5mbyAuY2F0ZWdvcmllcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMTZweDtcbn1cbiNibG9nIC5ibG9nLWNvbnRlbnQgLmJsb2ctaW5mbyAuY2F0ZWdvcmllcyAuY2F0ZWdvcnkge1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG59XG4jYmxvZyAuYmxvZy1jb250ZW50IC5ibG9nLWluZm8gLmRlc2NyaXB0aW9uLXBhcmEge1xuICBjb2xvcjogIzQwNDA0OTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbn1cbiNibG9nIC5zbGlkZXItY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTAwcHggNzZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBnYXA6IDUwcHg7XG59XG4jYmxvZyAuc2xpZGVyLWNvbnRhaW5lciAudXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4jYmxvZyAuc2xpZGVyLWNvbnRhaW5lciAudXBwZXIgaDEge1xuICBjb2xvcjogIzFhMWExZjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogNDBweDtcbn1cbiNibG9nIC5zbGlkZXItY29udGFpbmVyIC51cHBlciAucHJldiB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cbiNibG9nIC5zbGlkZXItY29udGFpbmVyIC51cHBlciAucHJldiByZWN0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2Jsb2cgLnNsaWRlci1jb250YWluZXIgLnVwcGVyIC5wcmV2IHJlY3Q6aG92ZXIge1xuICBmaWxsOiAjNWQzN2YzO1xufVxuI2Jsb2cgLnNsaWRlci1jb250YWluZXIgLnVwcGVyIC5uZXh0IHJlY3Qge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jYmxvZyAuc2xpZGVyLWNvbnRhaW5lciAudXBwZXIgLm5leHQgcmVjdDpob3ZlciB7XG4gIGZpbGw6ICM1ZDM3ZjM7XG59XG4jYmxvZyAuc2xpZGVyLWNvbnRhaW5lciAubG93ZXIge1xuICBtYXJnaW46IGF1dG87XG59XG4jYmxvZyAuc2xpZGVyLWNvbnRhaW5lciAubG93ZXIgLnNsaWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMzJweDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xufVxuI2Jsb2cgLnNsaWRlci1jb250YWluZXIgLmxvd2VyIC5zbGlkZXIgLnNsaWRlIHtcbiAgd2lkdGg6IDQwOHB4O1xufVxuI2Jsb2cgLnNsaWRlci1jb250YWluZXIgLmxvd2VyIC5zbGlkZXIgLnNsaWRlIGltZyB7XG4gIHdpZHRoOiA0MDhweDtcbiAgaGVpZ2h0OiAzMjhweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cbiNibG9nIC5zbGlkZXItY29udGFpbmVyIC5sb3dlciAuc2xpZGVyIC5zbGlkZSAuaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbn1cbiNibG9nIC5zbGlkZXItY29udGFpbmVyIC5sb3dlciAuc2xpZGVyIC5zbGlkZSAuaW5mbyBoMiB7XG4gIGNvbG9yOiAjMWExYTFmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuI2Jsb2cgLnNsaWRlci1jb250YWluZXIgLmxvd2VyIC5zbGlkZXIgLnNsaWRlIC5pbmZvIHAge1xuICBjb2xvcjogIzg1ODU4ZDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMTZweDtcbn1cbiNibG9nIC5zbGlkZXItY29udGFpbmVyIC5sb3dlciAuc2xpZGVyIC5zbGlkZSAuaW5mbyBoMSB7XG4gIGNvbG9yOiAjMWExYTFmO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xufVxuI2Jsb2cgLnNsaWRlci1jb250YWluZXIgLmxvd2VyIC5zbGlkZXIgLnNsaWRlIC5pbmZvIC5jYXRlZ29yaWVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICBnYXA6IDE2cHg7XG4gIGhlaWdodDogNTBweDtcbn1cbiNibG9nIC5zbGlkZXItY29udGFpbmVyIC5sb3dlciAuc2xpZGVyIC5zbGlkZSAuaW5mbyAuY2F0ZWdvcmllcyAuY2F0ZWdvcnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbn1cbiNibG9nIC5zbGlkZXItY29udGFpbmVyIC5sb3dlciAuc2xpZGVyIC5zbGlkZSAuaW5mbyAuY2F0ZWdvcmllcyAuY2F0ZWdvcnkgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMTZweDtcbn1cbiNibG9nIC5zbGlkZXItY29udGFpbmVyIC5sb3dlciAuc2xpZGVyIC5zbGlkZSAuaW5mbyBoNCB7XG4gIGNvbG9yOiAjNDA0MDQ5O1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBoZWlnaHQ6IDMuNWVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuI2Jsb2cgLnNsaWRlci1jb250YWluZXIgLmxvd2VyIC5zbGlkZXIgLnNsaWRlIC5pbmZvIC5leHBhbmQtYmxvZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jYmxvZyAuc2xpZGVyLWNvbnRhaW5lciAubG93ZXIgLnNsaWRlciAuc2xpZGUgLmluZm8gLmV4cGFuZC1ibG9nIC50ZXh0MSB7XG4gIGNvbG9yOiAjNWQzN2YzO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuI2Jsb2cgLnNsaWRlci1jb250YWluZXIgLmxvd2VyIC5zbGlkZXIgLnNsaWRlIC5pbmZvIC5leHBhbmQtYmxvZyAuZXhwYW5kMS1pbWcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4jc3VjY2Vzcy1jb250YWluZXIge1xuICBmb250LWZhbWlseTogXCJGaXJhR09cIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4jc3VjY2Vzcy1jb250YWluZXIgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiA0MHB4IDI0cHg7XG4gIHdpZHRoOiA0ODBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuI3N1Y2Nlc3MtY29udGFpbmVyIC5jb250ZW50IC54LWltZyB7XG4gIGFsaWduLXNlbGY6IGVuZDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBjb2xvcjogIzFhMWExZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI3N1Y2Nlc3MtY29udGFpbmVyIC5jb250ZW50IC54LWltZzpob3ZlciB7XG4gIHNjYWxlOiAxLjE7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XG59XG4jc3VjY2Vzcy1jb250YWluZXIgLmNvbnRlbnQgLnN1Y2Nlc3MtaW1nIHtcbiAgaGVpZ2h0OiA1M3B4O1xuICB3aWR0aDogNTNweDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyNXB4O1xufVxuI3N1Y2Nlc3MtY29udGFpbmVyIC5jb250ZW50IGgxIHtcbiAgY29sb3I6ICMxYTFhMWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cbiNzdWNjZXNzLWNvbnRhaW5lciAuY29udGVudCBidXR0b24ge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgbWFyZ2luLXRvcDogNDhweDtcbiAgcGFkZGluZzogMTJweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWQzN2YzO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuI3N1Y2Nlc3MtY29udGFpbmVyIC5jb250ZW50IGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkZpcmFHT1wiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5oaWRkZW4ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZy1ib3R0b206IDY2cHg7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2hlYWRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvaW5kZXguc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbG9naW5Nb2RhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Jsb2dBZGRlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Jsb2cuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdWNjZXNzTW9kYWwuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNDSjtBRENJO0VBQ0UsaUJBQUE7RUFDQSxvQkFB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LFlBQUE7QUx3bUJGO0FLdG1CRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBTHdtQko7QUt0bUJJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBTHdtQk47QUt2bUJNO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0FMeW1CUjtBS3JtQkk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUx1bUJOO0FLcG1CSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUxzbUJOO0FLbm1CSTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBTHFtQk47QUtwbUJNO0VBQ0UsZUFBQTtBTHNtQlI7O0FBM3BCQTtFQUNFLHFCQUFBO0VBQ0EsNENBQUE7QUE4cEJGO0FBenBCQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUEycEJGOztBQXhwQkE7RUFDRSx3QkFBQTtBQTJwQkY7O0FBeHBCQTtFQUNFLHlCQWJXO0VBY1gsaUJBQUE7RUFDQSxvQkFBQTtBQTJwQkZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiI2hlYWRlci1kaXYge1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlM2ViO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRmlyYUdPXFxcIjtcXG5cXG4gIC5oZWFkZXItY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjVweCAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZmFmYztcXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVkMzdmMztcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgIGNvbG9yOiAjZmZmO1xcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCJAdXNlIFxcXCIvc3JjL3N0eWxlcy9oZWFkZXIuc2Nzc1xcXCI7XFxuQHVzZSBcXFwiL3NyYy9zdHlsZXMvbWFpbi5zY3NzXFxcIjtcXG5AdXNlIFxcXCIvc3JjL3N0eWxlcy9sb2dpbk1vZGFsLnNjc3NcXFwiO1xcbkB1c2UgXFxcIi9zcmMvc3R5bGVzL2Jsb2dBZGRlci5zY3NzXFxcIjtcXG5AdXNlIFxcXCIvc3JjL3N0eWxlcy9ibG9nLnNjc3NcXFwiO1xcbkB1c2UgXFxcIi9zcmMvc3R5bGVzL3N1Y2Nlc3NNb2RhbC5zY3NzXFxcIjtcXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiRmlyYUdPXFxcIjtcXG4gIHNyYzogdXJsKFxcXCIvc3JjL2Fzc2V0cy9mb250cy9GaXJhR08vRmlyYUdPLVJlZ3VsYXIub3RmXFxcIik7XFxufVxcblxcbiRib2R5LWNvbG9yOiAjZjFmNWY5O1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRib2R5LWNvbG9yO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nLWJvdHRvbTogNjZweDtcXG59XFxuXCIsXCIjbWFpbi1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDcwcHg7XFxuICBmb250LWZhbWlseTogXFxcIkZpcmFHT1xcXCI7XFxuXFxuICAuc2VsZWN0ZWQge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xcbiAgfVxcblxcbiAgLm1haW4taW5mbyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNzBweCA5MHB4IDBweCAxMjBweDtcXG5cXG4gICAgaDEge1xcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAgIGZvbnQtc2l6ZTogNC44ZW07XFxuICAgICAgY29sb3I6ICMxYTFhMWY7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5jYXRlZ29yaWVzLWNvbnRhaW5lciB7XFxuICAgIHBhZGRpbmc6IDMwcHggMzAwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIG1pbm1heCgxMDBweCwgMWZyKSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ3JpZC1nYXA6IDEwcHg7XFxuXFxuICAgIC5jYXRlZ29yeSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIHBhZGRpbmc6IDRweCA4cHg7XFxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgIHNjYWxlOiAxLjA1O1xcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcXG4gICAgICB9XFxuXFxuICAgICAgcCB7XFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxuXFxuICAuYmxvZ3MtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgYXV0byk7XFxuICAgIGNvbHVtbi1nYXA6IDMycHg7XFxuICAgIHJvdy1nYXA6IDU2cHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG5cXG4gICAgLmJsb2ctY29udGFpbmVyIHtcXG4gICAgICB3aWR0aDogNDA4cHg7XFxuICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuXFxuICAgICAgaW1nIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgaGVpZ2h0OiAzMjhweDtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgICAgfVxcblxcbiAgICAgIC5ibG9nLWNvbnRlbnQge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xcbiAgICAgICAgZ2FwOiAxNnB4O1xcblxcbiAgICAgICAgaDIge1xcbiAgICAgICAgICBjb2xvcjogIzFhMWExZjtcXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHAge1xcbiAgICAgICAgICBjb2xvcjogIzg1ODU4ZDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgaDEge1xcbiAgICAgICAgICBjb2xvcjogIzFhMWExZjtcXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tYWluLWNhdGVnb3JpZXMge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBnYXA6IDE2cHg7XFxuICAgICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xcblxcbiAgICAgICAgICAubWFpbi1jYXRlZ29yeSB7XFxuICAgICAgICAgICAgcGFkZGluZzogNnB4IDEwcHg7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcXG4gICAgICAgICAgY29sb3I6ICM0MDQwNDk7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XFxuICAgICAgICAgIGhlaWdodDogMy41ZW07XFxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZXhwYW5kLWJsb2cge1xcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgICAgICAgIHAge1xcbiAgICAgICAgICAgIGNvbG9yOiAjNWQzN2YzO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblwiLFwiI21vZGFsLWNvbnRhaW5lciB7XFxuICBmb250LWZhbWlseTogXFxcIkZpcmFHT1xcXCI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAubW9kYWwtY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmc6IDQwcHggMjRweDtcXG4gICAgd2lkdGg6IDQ4MHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIGJhY2tncm91bmQ6ICNmZmY7XFxuXFxuICAgIC54LWltZyB7XFxuICAgICAgYWxpZ24tc2VsZjogZW5kO1xcbiAgICAgIGhlaWdodDogMTJweDtcXG4gICAgICBjb2xvcjogIzFhMWExZjtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBzY2FsZTogMS4xO1xcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC41cztcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmlucHV0LWNvbnRhaW5lciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICAgIGgxIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICAgICAgICBjb2xvcjogIzFhMWExZjtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcXG4gICAgICB9XFxuXFxuICAgICAgbGFiZWwge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xcbiAgICAgICAgY29sb3I6ICMxYTFhMWY7XFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgICAgfVxcblxcbiAgICAgIGlucHV0IHtcXG4gICAgICAgIGJvcmRlcjogMS41cHggc29saWQgIzVkMzdmMztcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3ZmY7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XFxuICAgICAgICBjb2xvcjogIzg1ODU4ZDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmVycm9yLWNvbnRhaW5lciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGdhcDogMTVweDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcblxcbiAgICAgIHAge1xcbiAgICAgICAgZm9udC1zaXplOiAwLjllbTtcXG4gICAgICAgIGNvbG9yOiAjZmYwMDAwO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAuc3VjY2Vzcy1jb250YWluZXIge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGdhcDogMTVweDtcXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcblxcbiAgICAgIGgxIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgICAgICBjb2xvcjogIzFhMWExZjtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgICBmb250LXNpemU6IDAuOWVtO1xcbiAgICAgIHBhZGRpbmc6IDEycHg7XFxuICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZDM3ZjM7XFxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIjYmxvZy1hZGRlciB7XFxuICBmb250LWZhbWlseTogXFxcIkZpcmFHT1xcXCI7XFxuICBwYWRkaW5nOiA0MHB4IDc2cHggMTEwcHggNzZweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTRlM2ViO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcblxcbiAgLmJhY2stYXJyb3cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG5cXG4gIC5ibG9nLWFkZGVyLWNvbnRlbnQge1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiA0ODBweDtcXG5cXG4gICAgaDEge1xcbiAgICAgIGZvbnQtc2l6ZTogMi4zZW07XFxuICAgICAgY29sb3I6ICMxYTFhMWY7XFxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgfVxcblxcbiAgICAuYmxvZy1mb3JtIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgZ2FwOiAyNHB4O1xcbiAgICAgIG1hcmdpbjogNDBweCAwcHg7XFxuXFxuICAgICAgLmltZy11cGxvYWRlci1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDEycHg7XFxuICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmltYWdlLXVwbG9hZGVyIHtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgICAgICAgYm9yZGVyOiAxcHggZGFzaGVkICM4NTg1OGQ7XFxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmNGYzZmY7XFxuICAgICAgICAgIGJvcmRlcjogMS41cHggZGFzaGVkICM4NTg1OGQ7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgIHBhZGRpbmc6IDQ4cHggMTY1cHg7XFxuICAgICAgICAgIGdhcDogMzBweDtcXG5cXG4gICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgLmltYWdlLXRleHRzIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGdhcDogNXB4O1xcblxcbiAgICAgICAgICAgIHNwYW4sXFxuICAgICAgICAgICAgcCB7XFxuICAgICAgICAgICAgICBjb2xvcjogIzFhMWExZjtcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgcCB7XFxuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIC5hdXRob3ItdGl0bGUtY29udGFpbmVyLFxcbiAgICAgIC5kYXRlLWNhdGVnb3J5LWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgZ2FwOiAzMHB4O1xcbiAgICAgIH1cXG5cXG4gICAgICAuY29udGFpbmVyIHtcXG4gICAgICAgIGZsZXg6IDE7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgICAgICBsYWJlbCB7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGdhcDogNXB4O1xcbiAgICAgICAgICBjb2xvcjogIzFhMWExZjtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGlucHV0LFxcbiAgICAgICAgdGV4dGFyZWEsXFxuICAgICAgICAuc2VsZWN0LWNvbnRhaW5lciB7XFxuICAgICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcXG4gICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNGUzZWI7XFxuICAgICAgICAgIGNvbG9yOiAjODU4NThkO1xcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZkO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnZhbGlkYXRpb24tY29udGFpbmVyIHtcXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgICAgZ2FwOiA4cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudmFsaWRhdGlvbi1iZWZvcmUge1xcbiAgICAgICAgICB3aWR0aDogMC41ZW07XFxuICAgICAgICAgIGhlaWdodDogMC41ZW07XFxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4NTg1OGQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBsaSB7XFxuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgICAgICAgY29sb3I6ICM4NTg1OGQ7XFxuICAgICAgICAgIGNvbG9yOiAjODU4NThkO1xcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnNlbGVjdC1jb250YWluZXIge1xcbiAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XFxuXFxuICAgICAgICAgIC5zZWxlY3RlZC1jYXRlZ29yeSB7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBnYXA6IDVweDtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcXG5cXG4gICAgICAgICAgICAuY2F0ZWdvcnktY29udGFpbmVyIHtcXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMTJweDtcXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgICAgICAgICAgICBnYXA6IDdweDtcXG5cXG4gICAgICAgICAgICAgIHAge1xcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIHNlbGVjdCB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmZDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgLmVtYWlsLWNvbnRhaW5lciB7XFxuICAgICAgICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDE1cHgpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgICAuYWRkLWJsb2ctYnRuIHtcXG4gICAgICBmbG9hdDogcmlnaHQ7XFxuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgICAgZm9udC1zaXplOiAwLjllbTtcXG4gICAgICB3aWR0aDogY2FsYyg1MCUgLSAxNXB4KTtcXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgICBjb2xvcjogI2Y4ZmFmYztcXG4gICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTNlYjtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVkMzdmMztcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIjYmxvZyB7XFxuICBmb250LWZhbWlseTogXFxcIkZpcmFHT1xcXCI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiAjZjNmMmZhO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBwYWRkaW5nOiA0MHB4IDBweCA0MDBweCAwcHg7XFxuXFxuICAuYmFjay1hcnJvdyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tbGVmdDogNzZweDtcXG4gIH1cXG5cXG4gIC5ibG9nLWNvbnRlbnQge1xcbiAgICB3aWR0aDogNzIwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA0MHB4O1xcblxcbiAgICBpbWcge1xcbiAgICAgIGhlaWdodDogMzI4cHg7XFxuICAgIH1cXG5cXG4gICAgLmJsb2ctaW5mbyB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGdhcDogMjRweDtcXG5cXG4gICAgICAud3JhcHBlci1kaXYge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBnYXA6IDhweDtcXG5cXG4gICAgICAgIGgyIHtcXG4gICAgICAgICAgY29sb3I6ICMxYTFhMWY7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBwIHtcXG4gICAgICAgICAgY29sb3I6ICM4NTg1OGQ7XFxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICAgICAgICB9XFxuICAgICAgfVxcblxcbiAgICAgIGgxIHtcXG4gICAgICAgIGNvbG9yOiAjMWExYTFmO1xcbiAgICAgICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgICAgIH1cXG5cXG4gICAgICAuY2F0ZWdvcmllcyB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiAxNnB4O1xcblxcbiAgICAgICAgLmNhdGVnb3J5IHtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgICAgICAgcGFkZGluZzogNnB4IDEwcHg7XFxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XFxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgICAgICAgfVxcbiAgICAgIH1cXG5cXG4gICAgICAuZGVzY3JpcHRpb24tcGFyYSB7XFxuICAgICAgICBjb2xvcjogIzQwNDA0OTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG5cXG4gIC5zbGlkZXItY29udGFpbmVyIHtcXG4gICAgcGFkZGluZzogMTAwcHggNzZweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgICBnYXA6IDUwcHg7XFxuXFxuICAgIC51cHBlciB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFxuICAgICAgaDEge1xcbiAgICAgICAgY29sb3I6ICMxYTFhMWY7XFxuICAgICAgICBmb250LXNpemU6IDMycHg7XFxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICAgICAgfVxcblxcbiAgICAgIC5wcmV2IHtcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG5cXG4gICAgICAgIHJlY3Qge1xcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGZpbGw6ICM1ZDM3ZjM7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuXFxuICAgICAgLm5leHQge1xcbiAgICAgICAgcmVjdCB7XFxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgJjpob3ZlciB7XFxuICAgICAgICAgICAgZmlsbDogIzVkMzdmMztcXG4gICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICAubG93ZXIge1xcbiAgICAgIG1hcmdpbjogYXV0bztcXG5cXG4gICAgICAuc2xpZGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDMycHg7XFxuICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuXFxuICAgICAgICAuc2xpZGUge1xcbiAgICAgICAgICB3aWR0aDogNDA4cHg7XFxuXFxuICAgICAgICAgIGltZyB7XFxuICAgICAgICAgICAgd2lkdGg6IDQwOHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMzI4cHg7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcbiAgICAgICAgICB9XFxuXFxuICAgICAgICAgIC5pbmZvIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZ2FwOiAxNnB4O1xcblxcbiAgICAgICAgICAgIGgyIHtcXG4gICAgICAgICAgICAgIGNvbG9yOiAjMWExYTFmO1xcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBwIHtcXG4gICAgICAgICAgICAgIGNvbG9yOiAjODU4NThkO1xcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBoMSB7XFxuICAgICAgICAgICAgICBjb2xvcjogIzFhMWExZjtcXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmNhdGVnb3JpZXMge1xcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgICAgICAgICAgIGdhcDogMTZweDtcXG4gICAgICAgICAgICAgIGhlaWdodDogNTBweDtcXG5cXG4gICAgICAgICAgICAgIC5jYXRlZ29yeSB7XFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcblxcbiAgICAgICAgICAgICAgICBwIHtcXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgaDQge1xcbiAgICAgICAgICAgICAgY29sb3I6ICM0MDQwNDk7XFxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XFxuICAgICAgICAgICAgICBoZWlnaHQ6IDMuNWVtO1xcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLmV4cGFuZC1ibG9nIHtcXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgICBnYXA6IDVweDtcXG4gICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgICAgICAgICAgIC50ZXh0MSB7XFxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNWQzN2YzO1xcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgLmV4cGFuZDEtaW1nIHtcXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIjc3VjY2Vzcy1jb250YWluZXIge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJGaXJhR09cXFwiO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nOiA0MHB4IDI0cHg7XFxuICAgIHdpZHRoOiA0ODBweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xcblxcbiAgICAueC1pbWcge1xcbiAgICAgIGFsaWduLXNlbGY6IGVuZDtcXG4gICAgICBoZWlnaHQ6IDEycHg7XFxuICAgICAgY29sb3I6ICMxYTFhMWY7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgc2NhbGU6IDEuMTtcXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5zdWNjZXNzLWltZyB7XFxuICAgICAgaGVpZ2h0OiA1M3B4O1xcbiAgICAgIHdpZHRoOiA1M3B4O1xcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICB9XFxuXFxuICAgIGgxIHtcXG4gICAgICBjb2xvcjogIzFhMWExZjtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XFxuICAgICAgbWFyZ2luLXRvcDogMTZweDtcXG4gICAgfVxcblxcbiAgICBidXR0b24ge1xcbiAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICAgIG1hcmdpbi10b3A6IDQ4cHg7XFxuICAgICAgcGFkZGluZzogMTJweDtcXG4gICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzVkMzdmMztcXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcXG4gICAgICBjb2xvcjogI2ZmZjtcXG4gICAgICBmb250LXNpemU6IDE0cHg7XFxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcXG4gICAgICAmOmhvdmVyIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB9XFxuICAgIH1cXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiaW1wb3J0IGxvZ29JbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9yZWRiZXJyeS1sb2dvLnBuZ1wiO1xuaW1wb3J0IGNyZWF0ZUxvZ2luTW9kYWwgZnJvbSBcIi4vbG9naW5Nb2RhbC9jcmVhdGVcIjtcbmltcG9ydCBkaXNwbGF5QmxvZ0FkZGVyIGZyb20gXCIuLi9ibG9nQWRkZXIvZGlzcGxheVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gIGNvbnN0IGxvZ2luID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvZ2luXCIpKTtcblxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBoZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJoZWFkZXItZGl2XCIpO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItY29udGVudFwiKTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgbG9nby5zcmMgPSBsb2dvSW1nO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGxvZ28pO1xuXG4gIGNvbnN0IGVudHJ5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgZW50cnlCdG4udGV4dENvbnRlbnQgPSBcIuGDqOGDlOGDoeGDleGDmuGDkFwiO1xuICBlbnRyeUJ0bi5jbGFzc0xpc3QuYWRkKFwiZW50cnktYnV0dG9uXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGVudHJ5QnRuKTtcblxuICBjb25zdCBhZGRlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZGVyQnRuLnRleHRDb250ZW50ID0gXCLhg5Phg5Dhg5Dhg5vhg5Dhg6Lhg5Qg4YOR4YOa4YOd4YOS4YOYXCI7XG4gIGFkZGVyQnRuLmNsYXNzTGlzdC5hZGQoXCJibG9nLWFkZGVyLWJ1dHRvblwiKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChhZGRlckJ0bik7XG5cbiAgaWYgKGxvZ2luKSBlbnRyeUJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICBpZiAoIWxvZ2luKSBhZGRlckJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXG4gIGVudHJ5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjcmVhdGVMb2dpbk1vZGFsKTtcblxuICBhZGRlckJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheUJsb2dBZGRlcik7XG5cbiAgcmV0dXJuIGhlYWRlcjtcbn1cbiIsImltcG9ydCB4U3ZnIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMveC1pY29uLnN2Z1wiO1xuaW1wb3J0IHJlZENpcmNsZUltZyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL2luZm8tY2lyY2xlLnBuZ1wiO1xuaW1wb3J0IGdyZWVuU3VjY2Vzc0ltZyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3N1Y2Nlc3MtY2lyY2xlLnBuZ1wiO1xuaW1wb3J0IGxvZ2luVXNlciBmcm9tIFwiLi4vLi4vLi4vbG9naWMvbG9naW5Vc2VyL2xvZ2luVXNlclwiO1xuaW1wb3J0IHVwZGF0ZUxvZ2luTW9kYWxVSSBmcm9tIFwiLi91cGRhdGVcIjtcblxubGV0IHJlbW92ZUxvZ2luTW9kYWw7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUxvZ2luTW9kYWwoKSB7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibW9kYWwtY29udGFpbmVyXCIpO1xuICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3QgbW9kYWxDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbW9kYWxDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJtb2RhbC1jb250ZW50XCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KTtcblxuICBjb25zdCB4SW1nID0gbmV3IEltYWdlKCk7XG4gIHhJbWcuY2xhc3NMaXN0LmFkZChcIngtaW1nXCIpO1xuICB4SW1nLnNyYyA9IHhTdmc7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZCh4SW1nKTtcblxuICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1jb250YWluZXJcIik7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChpbnB1dENvbnRhaW5lcik7XG5cbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGV4dC50ZXh0Q29udGVudCA9IFwi4YOo4YOU4YOh4YOV4YOa4YOQXCI7XG4gIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IFwi4YOU4YOaLeGDpOGDneGDoeGDouGDkFwiO1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJlbWFpbFwiKTtcbiAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZW1haWxcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZW1haWxcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRXhhbXBsZUByZWRiZXJyeS5nZVwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgaW5wdXQuZm9jdXMoKTtcblxuICBjb25zdCBzdWNjZXNzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc3VjY2Vzc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic3VjY2Vzcy1jb250YWluZXJcIiwgXCJoaWRkZW5cIik7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChzdWNjZXNzQ29udGFpbmVyKTtcblxuICBjb25zdCBzdWNjZXNzSW1nID0gbmV3IEltYWdlKCk7XG4gIHN1Y2Nlc3NJbWcuc3JjID0gZ3JlZW5TdWNjZXNzSW1nO1xuICBzdWNjZXNzQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Y2Nlc3NJbWcpO1xuXG4gIGNvbnN0IHN1Y2Nlc3NUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBzdWNjZXNzVGV4dC50ZXh0Q29udGVudCA9IFwi4YOs4YOQ4YOg4YOb4YOQ4YOi4YOU4YOR4YOj4YOa4YOYIOGDkOGDleGDouGDneGDoOGDmOGDluGDkOGDquGDmOGDkFwiO1xuICBzdWNjZXNzQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1Y2Nlc3NUZXh0KTtcblxuICBjb25zdCBlcnJvckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVycm9yQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJlcnJvci1jb250YWluZXJcIiwgXCJoaWRkZW5cIik7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChlcnJvckNvbnRhaW5lcik7XG5cbiAgY29uc3QgcmVkQ2lyY2xlID0gbmV3IEltYWdlKCk7XG4gIHJlZENpcmNsZS5zcmMgPSByZWRDaXJjbGVJbWc7XG4gIGVycm9yQ29udGFpbmVyLmFwcGVuZENoaWxkKHJlZENpcmNsZSk7XG5cbiAgY29uc3QgZXJyb3JNc2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgZXJyb3JNc2cudGV4dENvbnRlbnQgPSBcIuGDlOGDmi3hg6Thg53hg6Hhg6Lhg5Ag4YOQ4YOgIOGDm+GDneGDmOGDq+GDlOGDkeGDnOGDkFwiO1xuICBlcnJvckNvbnRhaW5lci5hcHBlbmRDaGlsZChlcnJvck1zZyk7XG5cbiAgY29uc3QgZW50cnlCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBlbnRyeUJ0bi50ZXh0Q29udGVudCA9IFwi4YOo4YOU4YOh4YOV4YOa4YOQXCI7XG4gIGVudHJ5QnRuLmNsYXNzTGlzdC5hZGQoXCJlbnRyeS1idG5cIik7XG4gIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChlbnRyeUJ0bik7XG5cbiAgY29uc3Qgc3VjY2Vzc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHN1Y2Nlc3NCdG4uY2xhc3NMaXN0LmFkZChcInN1Y2Nlc3MtYnRuXCIsIFwiaGlkZGVuXCIpO1xuICBzdWNjZXNzQnRuLnRleHRDb250ZW50ID0gXCLhg5nhg5Dhg6Dhg5Lhg5hcIjtcbiAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKHN1Y2Nlc3NCdG4pO1xuXG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQuaWQgPT09IFwibW9kYWwtY29udGFpbmVyXCIpIHJlbW92ZUxvZ2luTW9kYWwoZSk7XG4gIH0pO1xuXG4gIHhJbWcuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgcmVtb3ZlTG9naW5Nb2RhbChlKTtcbiAgfSk7XG5cbiAgZW50cnlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHVwZGF0ZUxvZ2luTW9kYWwpO1xuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIHVwZGF0ZUxvZ2luTW9kYWwoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHVwZGF0ZUxvZ2luTW9kYWwoKSB7XG4gICAgaWYgKGxvZ2luVXNlcihpbnB1dCkpIHtcbiAgICAgIGxvZ2luVXNlcihpbnB1dCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICB1cGRhdGVMb2dpbk1vZGFsVUkoZGF0YSwgY29udGFpbmVyKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2dpblwiLCBKU09OLnN0cmluZ2lmeSh0cnVlKSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVMb2dpbk1vZGFsID0gZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJ4LWltZ1wiKSAmJlxuICAgICAgZW50cnlCdG4uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpXG4gICAgKSB7XG4gICAgICBub3JtYWxCb2R5KCk7XG4gICAgICBlbnRyeUJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbnRyeS1idXR0b25cIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmxvZy1hZGRlci1idXR0b25cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICB9XG5cbiAgICBpZiAoIWVudHJ5QnRuLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSkge1xuICAgICAgbm9ybWFsQm9keSgpO1xuICAgIH1cblxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzdWNjZXNzLWJ0blwiKSkge1xuICAgICAgbm9ybWFsQm9keSgpO1xuICAgIH1cbiAgfTtcblxuICBmdW5jdGlvbiBub3JtYWxCb2R5KCkge1xuICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICBib2R5LnN0eWxlLm92ZXJmbG93ID0gXCJ2aXNpYmxlXCI7XG4gIH1cbn1cblxuZXhwb3J0IHsgcmVtb3ZlTG9naW5Nb2RhbCB9O1xuIiwiaW1wb3J0IHZhbGlkYXRlRW1haWwgZnJvbSBcIi4vdmFsaWRhdGVFbWFpbFwiO1xuaW1wb3J0IGNoZWNrRW1haWwgZnJvbSBcIi4vY2hlY2tFbWFpbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2dpblVzZXIoaW5wdXQpIHtcbiAgaWYgKHZhbGlkYXRlRW1haWwoaW5wdXQpKSB7XG4gICAgcmV0dXJuIGNoZWNrRW1haWwoaW5wdXQudmFsdWUpLnRoZW4oKGRhdGEpID0+IGRhdGEpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGlucHV0KSB7XG4gIGlmICghaW5wdXQudmFsaWRpdHkudmFsaWQpIHtcbiAgICBpbnB1dC5mb2N1cygpO1xuICAgIGFsZXJ0KFwiUGxlYXNlIG1hdGNoIHRoZSBmb3JtYXQgcmVxdWVzdGVkXCIpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoIWlucHV0LnZhbHVlLmVuZHNXaXRoKFwiQHJlZGJlcnJ5LmdlXCIpKSB7XG4gICAgYWxlcnQoXCJZb3VyIGVtYWlsIG11c3QgZW5kIHdpdGggQHJlZGJlcnJ5LmdlXCIpO1xuICAgIGNvbnN0IGF0UG9zaXRpb24gPSBpbnB1dC52YWx1ZS5pbmRleE9mKFwiQFwiKSArIDE7XG4gICAgaW5wdXQudmFsdWUgPSBpbnB1dC52YWx1ZS5zdWJzdHJpbmcoMCwgYXRQb3NpdGlvbik7XG4gICAgaW5wdXQuZm9jdXMoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGlucHV0LnZhbHVlLmVuZHNXaXRoKFwiQHJlZGJlcnJ5LmdlXCIpKSByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrRW1haWwoZW1haWwpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgXCJodHRwczovL2FwaS5ibG9nLnJlZGJlcnJ5aW50ZXJuc2hpcC5nZS9hcGkvbG9naW5cIixcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIGFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBlbWFpbDogYCR7ZW1haWx9YCxcbiAgICAgICAgfSksXG4gICAgICB9XG4gICAgKTtcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MjIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvcik7XG4gIH1cbn1cbiIsImltcG9ydCB7IHJlbW92ZUxvZ2luTW9kYWwgfSBmcm9tIFwiLi9jcmVhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlTG9naW5Nb2RhbFVJKGRhdGEsIGRpdikge1xuICBjb25zdCBjb250YWluZXIgPSBkaXYucXVlcnlTZWxlY3RvcihcIi5pbnB1dC1jb250YWluZXJcIik7XG4gIGNvbnN0IGlucHV0ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcbiAgY29uc3Qgc3VjY2Vzc0NvbnRhaW5lciA9IGRpdi5xdWVyeVNlbGVjdG9yKFwiLnN1Y2Nlc3MtY29udGFpbmVyXCIpO1xuICBjb25zdCBlcnJvckNvbnRhaW5lciA9IGRpdi5xdWVyeVNlbGVjdG9yKFwiLmVycm9yLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgZW50cnlCdG4gPSBkaXYucXVlcnlTZWxlY3RvcihcIi5lbnRyeS1idG5cIik7XG4gIGNvbnN0IHN1Y2Nlc3NCdG4gPSBkaXYucXVlcnlTZWxlY3RvcihcIi5zdWNjZXNzLWJ0blwiKTtcblxuICBpZiAoZGF0YSkge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIHN1Y2Nlc3NDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBlbnRyeUJ0bi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIHN1Y2Nlc3NCdG4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBlcnJvckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXG4gICAgc3VjY2Vzc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJlbW92ZUxvZ2luTW9kYWwoZSk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVudHJ5LWJ1dHRvblwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ibG9nLWFkZGVyLWJ1dHRvblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKCFkYXRhKSB7XG4gICAgZXJyb3JDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBpbnB1dC5zdHlsZS5ib3JkZXJDb2xvciA9IFwiI2ZmMDAwMFwiO1xuICAgIGlucHV0LnN0eWxlLm1hcmdpbkJvdHRvbSA9IFwiMTBweFwiO1xuXG4gICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsICgpID0+IHtcbiAgICAgIGlucHV0RXZlbnRzKFwiIzVkMzdmM1wiKTtcbiAgICB9KTtcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgKCkgPT4ge1xuICAgICAgaW5wdXRFdmVudHMoXCIjNWQzN2YzXCIpO1xuICAgIH0pO1xuICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsICgpID0+IHtcbiAgICAgIGlucHV0RXZlbnRzKFwiIzAwMDAwMFwiKTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGlucHV0RXZlbnRzKGNvbG9yKSB7XG4gICAgICBpbnB1dC5zdHlsZS5ib3JkZXJDb2xvciA9IGNvbG9yO1xuICAgICAgaW5wdXQuc3R5bGUubWFyZ2luQm90dG9tID0gXCIyMHB4XCI7XG4gICAgICBpZiAoIWVycm9yQ29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSlcbiAgICAgICAgZXJyb3JDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlCbG9nQWRkZXIoKSB7XG4gIGNvbnN0IGJsb2dBZGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmxvZy1hZGRlclwiKTtcbiAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1kaXZcIik7XG4gIGNvbnN0IGJsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Jsb2dcIik7XG5cbiAgaWYgKGJsb2cpIGJsb2cuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuICBpZiAoYmxvZ0FkZGVyLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSkge1xuICAgIGJsb2dBZGRlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgIG1haW5EaXYuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfVxuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmxvZy1hZGRlci1zdGF0dXNcIiwgSlNPTi5zdHJpbmdpZnkodHJ1ZSkpO1xufVxuIiwiaW1wb3J0IGxvZ29JbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9ibG9nLWxvZ28ucG5nXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gIGNvbnN0IHN0YXR1cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibG9nLWFkZGVyLXN0YXR1c1wiKSk7XG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluLWRpdlwiKTtcbiAgaWYgKHN0YXR1cykgbWFpbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJtYWluLWluZm9cIik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGV4dC50ZXh0Q29udGVudCA9IFwi4YOR4YOa4YOd4YOS4YOYXCI7XG4gIGluZm8uYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpO1xuICBsb2dvLnNyYyA9IGxvZ29JbWc7XG4gIGluZm8uYXBwZW5kQ2hpbGQobG9nbyk7XG5cbiAgcmV0dXJuIG1haW47XG59XG4iLCJpbXBvcnQgYmFja0Fycm93SW1nIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMvYmFjay1hcnJvdy5wbmdcIjtcbmltcG9ydCBkaXNwbGF5TWFpbkRpdiBmcm9tIFwiL3NyYy9jb21wb25lbnRzL2RvbS9tYWluL2Rpc3BsYXkuanNcIjtcbmltcG9ydCBjcmVhdGVJbWFnZVVwbG9hZGVyIGZyb20gXCIuL2ltYWdlL2NyZWF0ZVwiO1xuaW1wb3J0IGNyZWF0ZUF1dGhvciBmcm9tIFwiLi9hdXRob3IvY3JlYXRlXCI7XG5pbXBvcnQgY3JlYXRlVGl0bGUgZnJvbSBcIi4vdGl0bGUvY3JlYXRlXCI7XG5pbXBvcnQgY3JlYXRlRGVzY3JpcHRpb24gZnJvbSBcIi4vZGVzY3JpcHRpb24vY3JlYXRlXCI7XG5pbXBvcnQgY3JlYXRlRGF0ZSBmcm9tIFwiLi9kYXRlL2NyZWF0ZVwiO1xuaW1wb3J0IGNyZWF0ZUJsb2dDYXRlZ29yaWVzIGZyb20gXCIuL2NhdGVnb3JpZXMvY3JlYXRlXCI7XG5pbXBvcnQgY3JlYXRlRW1haWwgZnJvbSBcIi4vZW1haWwvY3JlYXRlXCI7XG5pbXBvcnQgdmFsaWRhdGVGb3JtIGZyb20gXCIuLi8uLi9sb2dpYy9ibG9nQWRkZXIvdmFsaWRhdGlvbnMvZm9ybS9mb3JtXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUJsb2dBZGRlcigpIHtcbiAgY29uc3Qgc3RhdHVzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsb2ctYWRkZXItc3RhdHVzXCIpKTtcblxuICBjb25zdCBibG9nQWRkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBibG9nQWRkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJibG9nLWFkZGVyXCIpO1xuXG4gIGlmICghc3RhdHVzKSBibG9nQWRkZXIuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcblxuICBjb25zdCBiYWNrQXJyb3cgPSBuZXcgSW1hZ2UoKTtcbiAgYmFja0Fycm93LmNsYXNzTGlzdC5hZGQoXCJiYWNrLWFycm93XCIpO1xuICBiYWNrQXJyb3cuc3JjID0gYmFja0Fycm93SW1nO1xuICBibG9nQWRkZXIuYXBwZW5kQ2hpbGQoYmFja0Fycm93KTtcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiYmxvZy1hZGRlci1jb250ZW50XCIpO1xuICBibG9nQWRkZXIuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgdGV4dC50ZXh0Q29udGVudCA9IFwi4YOR4YOa4YOd4YOS4YOY4YOhIOGDk+GDkOGDm+GDkOGDouGDlOGDkeGDkFwiO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHRleHQpO1xuXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgZm9ybS5jbGFzc0xpc3QuYWRkKFwiYmxvZy1mb3JtXCIpO1xuICBmb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYmxvZy1mb3JtXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlSW1hZ2VVcGxvYWRlcigpKTtcblxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJhdXRob3ItdGl0bGUtY29udGFpbmVyXCIpO1xuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgdGl0bGUuYXBwZW5kQ2hpbGQoY3JlYXRlQXV0aG9yKCkpO1xuICB0aXRsZS5hcHBlbmRDaGlsZChjcmVhdGVUaXRsZSgpKTtcblxuICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZURlc2NyaXB0aW9uKCkpO1xuXG4gIGNvbnN0IGRhdGVDYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRhdGVDYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwiZGF0ZS1jYXRlZ29yeS1jb250YWluZXJcIik7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUNhdGVnb3J5KTtcbiAgZGF0ZUNhdGVnb3J5LmFwcGVuZENoaWxkKGNyZWF0ZURhdGUoKSk7XG4gIGRhdGVDYXRlZ29yeS5hcHBlbmRDaGlsZChjcmVhdGVCbG9nQ2F0ZWdvcmllcygpKTtcblxuICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUVtYWlsKCkpO1xuXG4gIGNvbnN0IGFkZEJsb2dCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRCbG9nQnRuLnRleHRDb250ZW50ID0gXCLhg5Lhg5Dhg5vhg53hg6Xhg5Xhg5Thg6fhg5zhg5Thg5Hhg5BcIjtcbiAgYWRkQmxvZ0J0bi5jbGFzc0xpc3QuYWRkKFwiYWRkLWJsb2ctYnRuXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGFkZEJsb2dCdG4pO1xuXG4gIGJhY2tBcnJvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheU1haW5EaXYpO1xuXG4gIGFkZEJsb2dCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHZhbGlkYXRlRm9ybSgpO1xuICB9KTtcbiAgcmV0dXJuIGJsb2dBZGRlcjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc3BsYXlNYWluRGl2KCkge1xuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWRpdlwiKTtcbiAgY29uc3QgYmxvZ0FkZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibG9nLWFkZGVyXCIpO1xuICBjb25zdCBibG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNibG9nXCIpO1xuXG4gIGJsb2dBZGRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuXG4gIGlmIChibG9nKSB7XG4gICAgYmxvZy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9IGVsc2UgbWFpbkRpdi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmxvZy1hZGRlci1zdGF0dXNcIiwgSlNPTi5zdHJpbmdpZnkoZmFsc2UpKTtcbn1cbiIsImltcG9ydCBmb2xkZXJJbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9mb2xkZXItYWRkLnBuZ1wiO1xuaW1wb3J0IHJlbW92ZUltZ1BuZyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3JlbW92ZS5wbmdcIjtcbmltcG9ydCB1cGRhdGVJbWFnZVVwbG9hZGVyIGZyb20gXCIuL3VwZGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVJbWFnZVVwbG9hZGVyKCkge1xuICBjb25zdCBibG9nSW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibG9nLWluZm9cIikpO1xuXG4gIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJpbWFnZS1pbnB1dFwiKTtcbiAgbGFiZWwuY2xhc3NMaXN0LmFkZChcImltZy11cGxvYWRlci1jb250YWluZXJcIik7XG5cbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gXCLhg5Dhg6Lhg5Xhg5jhg6Dhg5fhg5Thg5cg4YOk4YOd4YOi4YOdXCI7XG4gIGxhYmVsLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gIGNvbnN0IHVwbG9hZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdXBsb2FkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbWFnZS11cGxvYWRlclwiKTtcbiAgdXBsb2FkZXIuY2xhc3NMaXN0LmFkZChcImltYWdlLXVwbG9hZGVyXCIpO1xuICBsYWJlbC5hcHBlbmRDaGlsZCh1cGxvYWRlcik7XG5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJmaWxlXCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImltYWdlLWlucHV0XCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJhY2NlcHRcIiwgXCJpbWFnZS8qXCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJoaWRkZW5cIiwgXCJcIik7XG4gIHVwbG9hZGVyLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgaW1nLmNsYXNzTGlzdC5hZGQoXCJmb2xkZXItYWRkZXItaW1nXCIpO1xuICBpbWcuc3JjID0gZm9sZGVySW1nO1xuICB1cGxvYWRlci5hcHBlbmRDaGlsZChpbWcpO1xuXG4gIGNvbnN0IHRleHRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdGV4dHMuY2xhc3NMaXN0LmFkZChcImltYWdlLXRleHRzXCIpO1xuICB1cGxvYWRlci5hcHBlbmRDaGlsZCh0ZXh0cyk7XG5cbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLnRleHRDb250ZW50ID0gXCLhg6nhg5Dhg5Dhg5Lhg5Phg5Thg5cg4YOk4YOQ4YOY4YOa4YOYIOGDkOGDpSDhg5Dhg5xcIjtcbiAgdGV4dHMuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbiAgY29uc3QgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBwYXJhLnRleHRDb250ZW50ID0gXCLhg5Dhg5jhg6Dhg6nhg5jhg5Thg5cg4YOk4YOQ4YOY4YOa4YOYXCI7XG4gIHRleHRzLmFwcGVuZENoaWxkKHBhcmEpO1xuXG4gIGNvbnN0IHJlbW92ZUltZyA9IG5ldyBJbWFnZSgpO1xuICByZW1vdmVJbWcuc3JjID0gcmVtb3ZlSW1nUG5nO1xuICByZW1vdmVJbWcuY2xhc3NMaXN0LmFkZChcInJlbW92ZS1pbWdcIiwgXCJoaWRkZW5cIik7XG4gIHRleHRzLmFwcGVuZENoaWxkKHJlbW92ZUltZyk7XG5cbiAgaWYgKGJsb2dJbmZvICYmIGJsb2dJbmZvLmltYWdlKSB7XG4gICAgdXBkYXRlSW1hZ2VVcGxvYWRlcihcbiAgICAgIGlucHV0LFxuICAgICAgYmxvZ0luZm8sXG4gICAgICB1cGxvYWRlcixcbiAgICAgIHRleHRzLFxuICAgICAgcGFyYSxcbiAgICAgIHNwYW4sXG4gICAgICBpbWcsXG4gICAgICByZW1vdmVJbWcsXG4gICAgICBpbnB1dCxcbiAgICAgIHRydWVcbiAgICApO1xuICB9XG5cbiAgbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInJlbW92ZS1pbWdcIikpIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG5cbiAgbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcblxuICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmaWxlcyA9IGUuZGF0YVRyYW5zZmVyLmZpbGVzO1xuICAgIGlmICghZS5kYXRhVHJhbnNmZXIuZmlsZXNbMF0udHlwZS5tYXRjaChcImltYWdlLipcIikpIHJldHVybjtcblxuICAgIHVwZGF0ZUltYWdlVXBsb2FkZXIoXG4gICAgICBlLnRhcmdldCxcbiAgICAgIGJsb2dJbmZvLFxuICAgICAgdXBsb2FkZXIsXG4gICAgICB0ZXh0cyxcbiAgICAgIHBhcmEsXG4gICAgICBzcGFuLFxuICAgICAgaW1nLFxuICAgICAgcmVtb3ZlSW1nLFxuICAgICAgaW5wdXQsXG4gICAgICBmYWxzZSxcbiAgICAgIGZpbGVzXG4gICAgKTtcbiAgfSk7XG5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xuICAgIHVwZGF0ZUltYWdlVXBsb2FkZXIoXG4gICAgICBlLnRhcmdldCxcbiAgICAgIGJsb2dJbmZvLFxuICAgICAgdXBsb2FkZXIsXG4gICAgICB0ZXh0cyxcbiAgICAgIHBhcmEsXG4gICAgICBzcGFuLFxuICAgICAgaW1nLFxuICAgICAgcmVtb3ZlSW1nLFxuICAgICAgaW5wdXQsXG4gICAgICBmYWxzZVxuICAgICk7XG4gIH0pO1xuXG4gIHJlbW92ZUltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICB1cGRhdGVJbWFnZVVwbG9hZGVyKFxuICAgICAgZS50YXJnZXQsXG4gICAgICBibG9nSW5mbyxcbiAgICAgIHVwbG9hZGVyLFxuICAgICAgdGV4dHMsXG4gICAgICBwYXJhLFxuICAgICAgc3BhbixcbiAgICAgIGltZyxcbiAgICAgIHJlbW92ZUltZyxcbiAgICAgIGlucHV0LFxuICAgICAgZmFsc2VcbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gbGFiZWw7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVJbWFnZVVwbG9hZGVyKFxuICBlLFxuICBibG9nSW5mbyxcbiAgdXBsb2FkZXIsXG4gIHRleHRzLFxuICBsYWJlbCxcbiAgc3BhbixcbiAgaW1nLFxuICByZW1vdmVJbWcsXG4gIGlucHV0LFxuICByZWZyZXNoUGFnZSxcbiAgZmlsZXpcbikge1xuICBpZiAocmVmcmVzaFBhZ2UgJiYgZS5pZCA9PT0gXCJpbWFnZS1pbnB1dFwiKSB7XG4gICAgaW1hZ2UoKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGJsb2dJbmZvLmltYWdlLm5hbWU7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKFxuICAgICFlLmNsYXNzTGlzdC5jb250YWlucyhcInJlbW92ZS1pbWdcIikgJiZcbiAgICAhcmVmcmVzaFBhZ2UgJiZcbiAgICAoZS5pZCA9PT0gXCJpbWFnZS1pbnB1dFwiIHx8IGUuY2xvc2VzdChcIiNpbWFnZS11cGxvYWRlclwiKSlcbiAgKSB7XG4gICAgaWYgKCFpbnB1dC5maWxlc1swXSAmJiBlLmlkID09PSBcImltYWdlLWlucHV0XCIpIHJldHVybjtcblxuICAgIGxldCBmaWxlcztcbiAgICBpZiAoaW5wdXQuZmlsZXNbMF0pIGZpbGVzID0gaW5wdXQuZmlsZXNbMF07XG4gICAgZWxzZSBmaWxlcyA9IGZpbGV6WzBdO1xuXG4gICAgaW1hZ2UoKTtcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9IGZpbGVzLm5hbWU7XG5cbiAgICBhc3luYyBmdW5jdGlvbiBoYW5kbGVGaWxlKCkge1xuICAgICAgY29uc3QgYmFzZTY0ID0gYXdhaXQgZmlsZVRvQmFzZTY0KGZpbGVzKTtcblxuICAgICAgY29uc3QgYmxvZ0luZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvZy1pbmZvXCIpKTtcbiAgICAgIGJsb2dJbmZvLmltYWdlID0ge307XG4gICAgICBibG9nSW5mby5pbWFnZS5iYXNlNjQgPSBiYXNlNjQ7XG4gICAgICBibG9nSW5mby5pbWFnZS5uYW1lID0gZmlsZXMubmFtZTtcbiAgICAgIGJsb2dJbmZvLmltYWdlLnR5cGUgPSBmaWxlcy50eXBlO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJibG9nLWluZm9cIiwgSlNPTi5zdHJpbmdpZnkoYmxvZ0luZm8pKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBmaWxlVG9CYXNlNjQoZmlsZSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIGNvbnN0IGJhc2U2NCA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgcmVzb2x2ZShiYXNlNjQpO1xuICAgICAgICB9O1xuICAgICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlRmlsZSgpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChlLmNsYXNzTGlzdC5jb250YWlucyhcInJlbW92ZS1pbWdcIikpIHtcbiAgICBub0ltYWdlKCk7XG4gICAgY29uc3QgYmxvZ0luZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvZy1pbmZvXCIpKTtcbiAgICBibG9nSW5mby5pbWFnZSA9IG51bGw7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJibG9nLWluZm9cIiwgSlNPTi5zdHJpbmdpZnkoYmxvZ0luZm8pKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGltYWdlKCkge1xuICAgIHVwbG9hZGVyLnN0eWxlLnBhZGRpbmcgPSBcIjIwcHhcIjtcbiAgICB0ZXh0cy5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwic3BhY2UtYmV0d2VlblwiO1xuICAgIGxhYmVsLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XG4gICAgbGFiZWwuc3R5bGUuZm9udFdlaWdodCA9IFwiNTAwXCI7XG4gICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIHJlbW92ZUltZy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gbm9JbWFnZSgpIHtcbiAgICB1cGxvYWRlci5zdHlsZS5wYWRkaW5nID0gXCI4MHB4IDEwMHB4XCI7XG4gICAgdGV4dHMuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gXCLhg5Dhg5jhg6Dhg6nhg5jhg5Thg5cg4YOk4YOQ4YOY4YOa4YOYXCI7XG4gICAgbGFiZWwuc3R5bGUudGV4dERlY29yYXRpb24gPSBcInVuZGVybGluZVwiO1xuICAgIGxhYmVsLnN0eWxlLmZvbnRXZWlnaHQgPSBcIjcwMFwiO1xuICAgIHNwYW4uY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBpbWcuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICByZW1vdmVJbWcuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gIH1cbn1cbiIsImltcG9ydCB2YWxpZGF0ZUF1dGhvciBmcm9tIFwiLi4vLi4vLi4vbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRpb25zL2F1dGhvci9hdXRob3JcIjtcbmltcG9ydCB1cGRhdGVBdXRob3IgZnJvbSBcIi4vdXBkYXRlXCI7XG5cbmNvbnN0IHZhbGlkYXRpb25zID0gW1xuICBcIuGDm+GDmOGDnOGDmOGDm+GDo+GDmyA0IOGDoeGDmOGDm+GDkeGDneGDmuGDnVwiLFxuICBcIuGDm+GDmOGDnOGDmOGDm+GDo+GDmyAyIOGDoeGDmOGDouGDp+GDleGDkFwiLFxuICBcIuGDm+GDruGDneGDmuGDneGDkyDhg6Xhg5Dhg6Dhg5fhg6Phg5rhg5gg4YOh4YOY4YOb4YOR4YOd4YOa4YOd4YOU4YOR4YOYXCIsXG5dO1xuY29uc3QgdmFsaWRhdGlvbkFyciA9IFtdO1xubGV0IGlucHV0O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVBdXRob3IoKSB7XG4gIGNvbnN0IGJsb2dJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsb2ctaW5mb1wiKSk7XG5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gXCLhg5Dhg5Xhg6Lhg53hg6Dhg5hcIjtcbiAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiYXV0aG9yLWlucHV0XCIpO1xuICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IFwiKlwiO1xuICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcblxuICBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgaW5wdXQuY2xhc3NMaXN0LmFkZChcImF1dGhvci1pbnB1dFwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhdXRob3ItaW5wdXRcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwi4YOo4YOU4YOY4YOn4YOV4YOQ4YOc4YOU4YOXIOGDkOGDleGDouGDneGDoOGDmFwiKTtcbiAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICBjb25zdCB0ZXh0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgdGV4dHMuY2xhc3NMaXN0LmFkZChcInZhbGlkYXRpb24tdGV4dHNcIik7XG4gIGRpdi5hcHBlbmRDaGlsZCh0ZXh0cyk7XG5cbiAgdmFsaWRhdGlvbnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidmFsaWRhdGlvbi1jb250YWluZXJcIik7XG4gICAgdGV4dHMuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICB2YWxpZGF0aW9uQXJyLnB1c2goY29udGFpbmVyKTtcblxuICAgIGNvbnN0IHZhbGlkYXRpb25CZWZvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICB2YWxpZGF0aW9uQmVmb3JlLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZGF0aW9uLWJlZm9yZVwiKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodmFsaWRhdGlvbkJlZm9yZSk7XG5cbiAgICBjb25zdCB2YWxpZGF0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICB2YWxpZGF0aW9uVGV4dC50ZXh0Q29udGVudCA9IGVsO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh2YWxpZGF0aW9uVGV4dCk7XG4gIH0pO1xuXG4gIGlmIChibG9nSW5mbyAmJiBibG9nSW5mby5hdXRob3IpIHtcbiAgICBpbnB1dC52YWx1ZSA9IGJsb2dJbmZvLmF1dGhvcjtcbiAgICB2YWxpZGF0ZUF1dGhvcihpbnB1dCwgdmFsaWRhdGlvbkFycik7XG4gIH1cblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLnZhbHVlKSB0aGlzLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICM1RDM3RjNcIjtcbiAgfSk7XG5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy52YWx1ZS5jaGFyQXQoMCkgPT09IFwiIFwiKSB7XG4gICAgICBhbGVydChcIklucHV0IHNob3VsZCBub3Qgc3RhcnQgd2l0aCBhIHNwYWNlXCIpO1xuICAgICAgdGhpcy52YWx1ZSA9IFwiXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhbGlkYXRlQXV0aG9yKHRoaXMsIHZhbGlkYXRpb25BcnIpO1xuICB9KTtcblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNlNGUzZWJcIjtcbiAgICAgIHVwZGF0ZUF1dGhvcihcImluaXRcIiwgdmFsaWRhdGlvbkFyclswXSk7XG4gICAgICB1cGRhdGVBdXRob3IoXCJpbml0XCIsIHZhbGlkYXRpb25BcnJbMV0pO1xuICAgICAgdXBkYXRlQXV0aG9yKFwiaW5pdFwiLCB2YWxpZGF0aW9uQXJyWzJdKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkaXY7XG59XG5cbmV4cG9ydCB7IGlucHV0LCB2YWxpZGF0aW9uQXJyIH07XG4iLCJpbXBvcnQgdmFsaWRhdGVGb3VyTGV0dGVycyBmcm9tIFwiLi9mb3VyTGV0dGVyc1wiO1xuaW1wb3J0IHZhbGlkYXRlVHdvV29yZHMgZnJvbSBcIi4vdHdvV29yZHNcIjtcbmltcG9ydCB2YWxpZGF0ZUdlb3JnaWFuQWxwaCBmcm9tIFwiLi9nZW9yZ2lhbkFscGhcIjtcbmltcG9ydCB1cGRhdGVBdXRob3IgZnJvbSBcIi4uLy4uLy4uLy4uL2RvbS9ibG9nQWRkZXIvYXV0aG9yL3VwZGF0ZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZUF1dGhvcihpbnB1dCwgYXJyKSB7XG4gIGNvbnN0IGJsb2dJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsb2ctaW5mb1wiKSk7XG4gIGNvbnN0IHZhbHVlID0gaW5wdXQudmFsdWU7XG5cbiAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgIHVwZGF0ZUF1dGhvcihmYWxzZSwgYXJyWzBdKTtcbiAgICB1cGRhdGVBdXRob3IoZmFsc2UsIGFyclsxXSk7XG4gICAgdXBkYXRlQXV0aG9yKGZhbHNlLCBhcnJbMl0pO1xuICAgIGJsb2dJbmZvLmF1dGhvciA9IHZhbHVlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmxvZy1pbmZvXCIsIEpTT04uc3RyaW5naWZ5KGJsb2dJbmZvKSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdXBkYXRlQXV0aG9yKHZhbGlkYXRlRm91ckxldHRlcnModmFsdWUpLCBhcnJbMF0pO1xuICB1cGRhdGVBdXRob3IodmFsaWRhdGVUd29Xb3Jkcyh2YWx1ZSksIGFyclsxXSk7XG4gIHVwZGF0ZUF1dGhvcih2YWxpZGF0ZUdlb3JnaWFuQWxwaCh2YWx1ZSksIGFyclsyXSk7XG5cbiAgYmxvZ0luZm8uYXV0aG9yID0gdmFsdWU7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmxvZy1pbmZvXCIsIEpTT04uc3RyaW5naWZ5KGJsb2dJbmZvKSk7XG5cbiAgaWYgKFxuICAgIHZhbGlkYXRlRm91ckxldHRlcnModmFsdWUpICYmXG4gICAgdmFsaWRhdGVUd29Xb3Jkcyh2YWx1ZSkgJiZcbiAgICB2YWxpZGF0ZUdlb3JnaWFuQWxwaCh2YWx1ZSlcbiAgKSB7XG4gICAgaW5wdXQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgIzE0RDgxQ1wiO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGlucHV0LnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNFQTE5MTlcIjtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlRm91ckxldHRlcnModmFsdWUpIHtcbiAgZnVuY3Rpb24gY2hlY2tWYWx1ZSh2YWx1ZSkge1xuICAgIGxldCBsZXR0ZXJDb3VudCA9IDA7XG5cbiAgICBmb3IgKGNvbnN0IGNoYXIgb2YgdmFsdWUpIHtcbiAgICAgIGlmIChjaGFyID09PSBcIiBcIikgY29udGludWU7XG4gICAgICBsZXR0ZXJDb3VudCsrO1xuICAgIH1cbiAgICByZXR1cm4gbGV0dGVyQ291bnQgPj0gNDtcbiAgfVxuXG4gIHJldHVybiBjaGVja1ZhbHVlKHZhbHVlKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlVHdvV29yZHModmFsdWUpIHtcbiAgZnVuY3Rpb24gaGFzVHdvV29yZHModmFsdWUpIHtcbiAgICBjb25zdCB3b3JkcyA9IHZhbHVlLnNwbGl0KFwiIFwiKTtcbiAgICBsZXQgd29yZENvdW50ZXIgPSAwO1xuXG4gICAgZm9yIChsZXQgd29yZCBvZiB3b3Jkcykge1xuICAgICAgaWYgKHdvcmQgPT09IFwiXCIpIGNvbnRpbnVlO1xuICAgICAgd29yZENvdW50ZXIrKztcbiAgICB9XG4gICAgcmV0dXJuIHdvcmRDb3VudGVyID49IDI7XG4gIH1cblxuICByZXR1cm4gaGFzVHdvV29yZHModmFsdWUpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVHZW9yZ2lhbkFscGgodmFsdWUpIHtcbiAgY29uc3QgZ2VvcmdpYW5BbHBoYWJldCA9IG5ldyBTZXQoW1xuICAgIDB4MTBhMCwgMHgxMGExLCAweDEwYTIsIDB4MTBhMywgMHgxMGE0LCAweDEwYTUsIDB4MTBhNiwgMHgxMGE3LCAweDEwYTgsXG4gICAgMHgxMGE5LCAweDEwYWEsIDB4MTBhYiwgMHgxMGFjLCAweDEwYWQsIDB4MTBhZSwgMHgxMGFmLCAweDEwYjAsIDB4MTBiMSxcbiAgICAweDEwYjIsIDB4MTBiMywgMHgxMGI0LCAweDEwYjUsIDB4MTBiNiwgMHgxMGI3LCAweDEwYjgsIDB4MTBiOSwgMHgxMGJhLFxuICAgIDB4MTBiYiwgMHgxMGJjLCAweDEwYmQsIDB4MTBiZSwgMHgxMGJmLCAweDEwYzAsIDB4MTBjMSwgMHgxMGMyLCAweDEwYzMsXG4gICAgMHgxMGM0LCAweDEwYzUsIDB4MTBjNiwgMHgxMGM3LCAweDEwYzgsIDB4MTBjOSwgMHgxMGNhLCAweDEwY2IsIDB4MTBjYyxcbiAgICAweDEwY2QsIDB4MTBjZSwgMHgxMGNmLCAweDEwZDAsIDB4MTBkMSwgMHgxMGQyLCAweDEwZDMsIDB4MTBkNCwgMHgxMGQ1LFxuICAgIDB4MTBkNiwgMHgxMGQ3LCAweDEwZDgsIDB4MTBkOSwgMHgxMGRhLCAweDEwZGIsIDB4MTBkYywgMHgxMGRkLCAweDEwZGUsXG4gICAgMHgxMGRmLCAweDEwZTAsIDB4MTBlMSwgMHgxMGUyLCAweDEwZTMsIDB4MTBlNCwgMHgxMGU1LCAweDEwZTYsIDB4MTBlNyxcbiAgICAweDEwZTgsIDB4MTBlOSwgMHgxMGVhLCAweDEwZWIsIDB4MTBlYywgMHgxMGVkLCAweDEwZWUsIDB4MTBlZixcbiAgXSk7XG5cbiAgZnVuY3Rpb24gY2hlY2tJbnB1dChpbnB1dCkge1xuICAgIGxldCBhbGxDaGFyYWN0ZXJzQXJlR2VvcmdpYW4gPSB0cnVlO1xuXG4gICAgZm9yIChsZXQgY2hhciBvZiBpbnB1dCkge1xuICAgICAgaWYgKGNoYXIgPT09IFwiIFwiKSBjb250aW51ZTtcbiAgICAgIGxldCBjaGFyQ29kZSA9IGNoYXIuY2hhckNvZGVBdCgwKTtcbiAgICAgIGlmICghZ2VvcmdpYW5BbHBoYWJldC5oYXMoY2hhckNvZGUpKSB7XG4gICAgICAgIGFsbENoYXJhY3RlcnNBcmVHZW9yZ2lhbiA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gYWxsQ2hhcmFjdGVyc0FyZUdlb3JnaWFuO1xuICB9XG5cbiAgcmV0dXJuIGNoZWNrSW5wdXQodmFsdWUpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlQXV0aG9yKHZhbGlkLCBkaXYpIHtcbiAgaWYgKHZhbGlkID09PSBcImluaXRcIikge1xuICAgIGRpdi5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiM4NTg1OGRcIjtcbiAgICBkaXYucXVlcnlTZWxlY3RvcihcImxpXCIpLnN0eWxlLmNvbG9yID0gXCIjODU4NThkXCI7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHZhbGlkKSB7XG4gICAgZGl2LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzE0RDgxQ1wiO1xuICAgIGRpdi5xdWVyeVNlbGVjdG9yKFwibGlcIikuc3R5bGUuY29sb3IgPSBcIiMxNEQ4MUNcIjtcbiAgfVxuXG4gIGlmICghdmFsaWQpIHtcbiAgICBkaXYucXVlcnlTZWxlY3RvcihcInNwYW5cIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjRUExOTE5XCI7XG4gICAgZGl2LnF1ZXJ5U2VsZWN0b3IoXCJsaVwiKS5zdHlsZS5jb2xvciA9IFwiI0VBMTkxOVwiO1xuICB9XG59XG4iLCJpbXBvcnQgdmFsaWRhdGVUaXRsZSBmcm9tIFwiLi4vLi4vLi4vbG9naWMvYmxvZ0FkZGVyL3ZhbGlkYXRpb25zL3RpdGxlL3RpdGxlXCI7XG5pbXBvcnQgdXBkYXRlVGl0bGUgZnJvbSBcIi4vdXBkYXRlXCI7XG5cbmNvbnN0IHZhbGlkYXRpb25zID0gW1wi4YOb4YOY4YOc4YOY4YOb4YOj4YObIDIg4YOh4YOY4YOb4YOR4YOd4YOa4YOdXCJdO1xubGV0IGNvbnRhaW5lcjtcbmxldCBpbnB1dDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGl0bGUoKSB7XG4gIGNvbnN0IGJsb2dJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsb2ctaW5mb1wiKSk7XG5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gXCLhg6Hhg5Dhg5fhg5Dhg6Phg6Dhg5hcIjtcbiAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGl0bGUtaW5wdXRcIik7XG4gIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLnRleHRDb250ZW50ID0gXCIqXCI7XG4gIGxhYmVsLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dC5jbGFzc0xpc3QuYWRkKFwidGl0bGUtaW5wdXRcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGUtaW5wdXRcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwi4YOo4YOU4YOY4YOn4YOV4YOQ4YOc4YOU4YOXIOGDoeGDkOGDl+GDkOGDo+GDoOGDmFwiKTtcbiAgZGl2LmFwcGVuZENoaWxkKGlucHV0KTtcblxuICBjb25zdCB0ZXh0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgdGV4dHMuY2xhc3NMaXN0LmFkZChcInZhbGlkYXRpb24tdGV4dHNcIik7XG4gIGRpdi5hcHBlbmRDaGlsZCh0ZXh0cyk7XG5cbiAgdmFsaWRhdGlvbnMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidmFsaWRhdGlvbi1jb250YWluZXJcIik7XG4gICAgdGV4dHMuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIGNvbnN0IGJlZm9yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGJlZm9yZS5jbGFzc0xpc3QuYWRkKFwidmFsaWRhdGlvbi1iZWZvcmVcIik7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJlZm9yZSk7XG5cbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBlbDtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG4gIH0pO1xuXG4gIGlmIChibG9nSW5mbyAmJiBibG9nSW5mby50aXRsZSkge1xuICAgIGlucHV0LnZhbHVlID0gYmxvZ0luZm8udGl0bGU7XG4gICAgdmFsaWRhdGVUaXRsZShpbnB1dCwgY29udGFpbmVyKTtcbiAgfVxuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMudmFsdWUpIHRoaXMuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgIzVEMzdGM1wiO1xuICB9KTtcblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnZhbHVlLmNoYXJBdCgwKSA9PT0gXCIgXCIpIHtcbiAgICAgIGFsZXJ0KFwiSW5wdXQgc2hvdWxkIG5vdCBzdGFydCB3aXRoIGEgc3BhY2VcIik7XG4gICAgICB0aGlzLnZhbHVlID0gXCJcIjtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFsaWRhdGVUaXRsZSh0aGlzLCBjb250YWluZXIpO1xuICB9KTtcblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMudmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNlNGUzZWJcIjtcbiAgICAgIHVwZGF0ZVRpdGxlKFwiaW5pdFwiLCBjb250YWluZXIpO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IHsgaW5wdXQsIGNvbnRhaW5lciB9O1xuIiwiaW1wb3J0IHZhbGlkYXRlVHdvTGV0dGVycyBmcm9tIFwiLi90d29MZXR0ZXJzXCI7XG5pbXBvcnQgdXBkYXRlVGl0bGUgZnJvbSBcIi4uLy4uLy4uLy4uL2RvbS9ibG9nQWRkZXIvdGl0bGUvdXBkYXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlVGl0bGUoaW5wdXQsIGRpdikge1xuICBjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlO1xuICB1cGRhdGVUaXRsZSh2YWxpZGF0ZVR3b0xldHRlcnModmFsdWUpLCBkaXYpO1xuXG4gIGNvbnN0IGJsb2dJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsb2ctaW5mb1wiKSk7XG4gIGJsb2dJbmZvLnRpdGxlID0gdmFsdWU7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmxvZy1pbmZvXCIsIEpTT04uc3RyaW5naWZ5KGJsb2dJbmZvKSk7XG5cbiAgaWYgKHZhbGlkYXRlVHdvTGV0dGVycyh2YWx1ZSkpIHtcbiAgICBpbnB1dC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjMTREODFDXCI7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgaW5wdXQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI0VBMTkxOVwiO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVUd29MZXR0ZXJzKHZhbHVlKSB7XG4gIGZ1bmN0aW9uIGNoZWNrVmFsdWUodmFsdWUpIHtcbiAgICBsZXQgbGV0dGVyQ291bnQgPSAwO1xuXG4gICAgZm9yIChjb25zdCBjaGFyIG9mIHZhbHVlKSB7XG4gICAgICBpZiAoY2hhciA9PT0gXCIgXCIpIGNvbnRpbnVlO1xuICAgICAgbGV0dGVyQ291bnQrKztcbiAgICB9XG4gICAgcmV0dXJuIGxldHRlckNvdW50ID49IDI7XG4gIH1cblxuICByZXR1cm4gY2hlY2tWYWx1ZSh2YWx1ZSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVUaXRsZSh2YWxpZCwgZGl2KSB7XG4gIGlmICh2YWxpZCA9PT0gXCJpbml0XCIpIHtcbiAgICBkaXYucXVlcnlTZWxlY3RvcihcInNwYW5cIikuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjODU4NThkXCI7XG4gICAgZGl2LnF1ZXJ5U2VsZWN0b3IoXCJsaVwiKS5zdHlsZS5jb2xvciA9IFwiIzg1ODU4ZFwiO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmICh2YWxpZCkge1xuICAgIGRpdi5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiMxNEQ4MUNcIjtcbiAgICBkaXYucXVlcnlTZWxlY3RvcihcImxpXCIpLnN0eWxlLmNvbG9yID0gXCIjMTREODFDXCI7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoIXZhbGlkKSB7XG4gICAgZGl2LnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI0VBMTkxOVwiO1xuICAgIGRpdi5xdWVyeVNlbGVjdG9yKFwibGlcIikuc3R5bGUuY29sb3IgPSBcIiNFQTE5MTlcIjtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB2YWxpZGF0ZURlc2NyaXB0aW9uIGZyb20gXCIuLi8uLi8uLi9sb2dpYy9ibG9nQWRkZXIvdmFsaWRhdGlvbnMvZGVzY3JpcHRpb24vZGVzY3JpcHRpb25cIjtcbmltcG9ydCB1cGRhdGVUaXRsZSBmcm9tIFwiLi4vdGl0bGUvdXBkYXRlXCI7XG5cbmNvbnN0IHZhbGlkYXRpb25zID0gW1wi4YOb4YOY4YOc4YOY4YOb4YOj4YObIDIg4YOh4YOY4YOb4YOR4YOd4YOa4YOdXCJdO1xubGV0IGNvbnRhaW5lcjtcbmxldCB0ZXh0YXJlYTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlRGVzY3JpcHRpb24oKSB7XG4gIGNvbnN0IGJsb2dJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsb2ctaW5mb1wiKSk7XG5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gXCLhg5Dhg6bhg6zhg5Thg6Dhg5BcIjtcbiAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZGVzY3JpcHRpb24taW5wdXRcIik7XG4gIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLnRleHRDb250ZW50ID0gXCIqXCI7XG4gIGxhYmVsLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gIHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICB0ZXh0YXJlYS5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIuGDqOGDlOGDmOGDp+GDleGDkOGDnOGDlOGDlyDhg5Dhg6bhg6zhg5Thg6Dhg5BcIik7XG4gIHRleHRhcmVhLnNldEF0dHJpYnV0ZShcInJvd3NcIiwgNik7XG4gIHRleHRhcmVhLnNldEF0dHJpYnV0ZShcInNwZWxsY2hlY2tcIiwgXCJvZmZcIik7XG4gIHRleHRhcmVhLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVzY3JpcHRpb24taW5wdXRcIik7XG4gIHRleHRhcmVhLnN0eWxlLnJlc2l6ZSA9IFwibm9uZVwiO1xuXG4gIGRpdi5hcHBlbmRDaGlsZCh0ZXh0YXJlYSk7XG5cbiAgY29uc3QgdGV4dHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIHRleHRzLmNsYXNzTGlzdC5hZGQoXCJ2YWxpZGF0aW9uLXRleHRzXCIpO1xuICBkaXYuYXBwZW5kQ2hpbGQodGV4dHMpO1xuXG4gIHZhbGlkYXRpb25zLmZvckVhY2goKGVsKSA9PiB7XG4gICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInZhbGlkYXRpb24tY29udGFpbmVyXCIpO1xuICAgIHRleHRzLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBjb25zdCBiZWZvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBiZWZvcmUuY2xhc3NMaXN0LmFkZChcInZhbGlkYXRpb24tYmVmb3JlXCIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiZWZvcmUpO1xuXG4gICAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gZWw7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuICB9KTtcblxuICBpZiAoYmxvZ0luZm8gJiYgYmxvZ0luZm8uZGVzY3JpcHRpb24pIHtcbiAgICB0ZXh0YXJlYS52YWx1ZSA9IGJsb2dJbmZvLmRlc2NyaXB0aW9uO1xuICAgIHZhbGlkYXRlRGVzY3JpcHRpb24odGV4dGFyZWEsIGNvbnRhaW5lcik7XG4gIH1cblxuICB0ZXh0YXJlYS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuXG4gIHRleHRhcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLnZhbHVlKSB0aGlzLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICM1RDM3RjNcIjtcbiAgfSk7XG5cbiAgdGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodGhpcy52YWx1ZS5jaGFyQXQoMCkgPT09IFwiIFwiKSB7XG4gICAgICBhbGVydChcIklucHV0IHNob3VsZCBub3Qgc3RhcnQgd2l0aCBhIHNwYWNlXCIpO1xuICAgICAgdGhpcy52YWx1ZSA9IFwiXCI7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhbGlkYXRlRGVzY3JpcHRpb24odGhpcywgY29udGFpbmVyKTtcbiAgfSk7XG5cbiAgdGV4dGFyZWEuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjZTRlM2ViXCI7XG4gICAgICB1cGRhdGVUaXRsZShcImluaXRcIiwgY29udGFpbmVyKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkaXY7XG59XG5cbmV4cG9ydCB7IHRleHRhcmVhLCBjb250YWluZXIgfTtcbiIsImltcG9ydCB2YWxpZGF0ZVR3b0xldHRlcnMgZnJvbSBcIi4uL3RpdGxlL3R3b0xldHRlcnNcIjtcbmltcG9ydCB1cGRhdGVUaXRsZSBmcm9tIFwiLi4vLi4vLi4vLi4vZG9tL2Jsb2dBZGRlci90aXRsZS91cGRhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVEZXNjcmlwdGlvbihpbnB1dCwgZGl2KSB7XG4gIGNvbnN0IHZhbHVlID0gaW5wdXQudmFsdWU7XG4gIHVwZGF0ZVRpdGxlKHZhbGlkYXRlVHdvTGV0dGVycyh2YWx1ZSksIGRpdik7XG5cbiAgY29uc3QgYmxvZ0luZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvZy1pbmZvXCIpKTtcbiAgYmxvZ0luZm8uZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJibG9nLWluZm9cIiwgSlNPTi5zdHJpbmdpZnkoYmxvZ0luZm8pKTtcblxuICBpZiAodmFsaWRhdGVUd29MZXR0ZXJzKHZhbHVlKSkge1xuICAgIGlucHV0LnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICMxNEQ4MUNcIjtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBpbnB1dC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjRUExOTE5XCI7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgdmFsaWRhdGVEYXRlIGZyb20gXCIuLi8uLi8uLi9sb2dpYy9ibG9nQWRkZXIvdmFsaWRhdGlvbnMvZGF0ZS9kYXRlXCI7XG5cbmxldCBpbnB1dDtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZURhdGUoKSB7XG4gIGNvbnN0IGJsb2dJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsb2ctaW5mb1wiKSk7XG5cbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoXCJjb250YWluZXJcIik7XG5cbiAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gXCLhg5Lhg5Dhg5vhg53hg6Xhg5Xhg5Thg6fhg5zhg5Thg5Hhg5jhg6Eg4YOX4YOQ4YOg4YOY4YOm4YOYXCI7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRhdGUtaW5wdXRcIik7XG4gIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBzcGFuLnRleHRDb250ZW50ID0gXCIqXCI7XG4gIGxhYmVsLmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkYXRlLWlucHV0XCIpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gIGlmIChibG9nSW5mbyAmJiBibG9nSW5mby5kYXRlKSB7XG4gICAgaW5wdXQudmFsdWUgPSBibG9nSW5mby5kYXRlO1xuICAgIHZhbGlkYXRlRGF0ZShpbnB1dCk7XG4gIH1cblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLnZhbHVlKSB0aGlzLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICM1RDM3RjNcIjtcbiAgfSk7XG5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFsaWRhdGVEYXRlKGlucHV0KTtcbiAgfSk7XG5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmICghaW5wdXQudmFsdWUpIGlucHV0LnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNlNGUzZWJcIjtcbiAgfSk7XG5cbiAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IHsgaW5wdXQgfTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlRGF0ZShpbnB1dCkge1xuICBjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlO1xuICBjb25zdCBibG9nSW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibG9nLWluZm9cIikpO1xuICBibG9nSW5mby5kYXRlID0gdmFsdWU7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmxvZy1pbmZvXCIsIEpTT04uc3RyaW5naWZ5KGJsb2dJbmZvKSk7XG5cbiAgaWYgKHZhbHVlKSB7XG4gICAgaW5wdXQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgIzE0RDgxQ1wiO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIGlucHV0LnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNFQTE5MTlcIjtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCBmZXRjaENhdGVnb3JpZXMgZnJvbSBcIi4uLy4uLy4uL2xvZ2ljL2NhdGVnb3JpZXMvZmV0Y2hcIjtcbmltcG9ydCB1cGRhdGVDYXRlZ29yaWVzIGZyb20gXCIuL3VwZGF0ZVwiO1xuXG5sZXQgY29udGFpbmVyO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQmxvZ0NhdGVnb3JpZXMoKSB7XG4gIGNvbnN0IGJsb2dJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsb2ctaW5mb1wiKSk7XG4gIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcblxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiKTtcblxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBcIuGDmeGDkOGDouGDlOGDkuGDneGDoOGDmOGDkFwiO1xuICBkaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Bhbi50ZXh0Q29udGVudCA9IFwiKlwiO1xuICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcblxuICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNlbGVjdC1jb250YWluZXJcIik7XG4gIGRpdi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgc2VsZWN0ZWQuY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkLWNhdGVnb3J5XCIsIFwiaGlkZGVuXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0ZWQpO1xuXG4gIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gIHNlbGVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJsb2ctY2F0ZWdvcmllcy1zZWxlY3RcIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3QpO1xuXG4gIGNvbnN0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgcGxhY2Vob2xkZXIudGV4dENvbnRlbnQgPSBcIuGDkOGDmOGDoOGDqeGDmOGDlOGDlyDhg5nhg5Dhg6Lhg5Thg5Lhg53hg6Dhg5jhg5BcIjtcbiAgcGxhY2Vob2xkZXIuY2xhc3NMaXN0LmFkZChcInBsYWNlaG9sZGVyLW9wdGlvblwiKTtcbiAgcGxhY2Vob2xkZXIuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJcIik7XG4gIHBsYWNlaG9sZGVyLnNldEF0dHJpYnV0ZShcImRpc2FibGVkXCIsIFwiXCIpO1xuICBwbGFjZWhvbGRlci5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKTtcbiAgcGxhY2Vob2xkZXIuc2V0QXR0cmlidXRlKFwiaGlkZGVuXCIsIFwiXCIpO1xuICBzZWxlY3QuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXIpO1xuXG4gIGZldGNoQ2F0ZWdvcmllcyhcImh0dHBzOi8vYXBpLmJsb2cucmVkYmVycnlpbnRlcm5zaGlwLmdlL2FwaVwiKS50aGVuKChkYXRhKSA9PiB7XG4gICAgZGF0YS5kYXRhLmZvckVhY2goKGNhdCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGNhdC50aXRsZTtcbiAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBjYXQuaWQpO1xuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG5cbiAgICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKTtcblxuICAgIGlmIChibG9nSW5mbyAmJiBibG9nSW5mby5jYXRlZ29yaWVzKSB7XG4gICAgICBjb25zdCBjYXRlZ29yaWVzID0gYmxvZ0luZm8uY2F0ZWdvcmllcztcbiAgICAgIHVwZGF0ZUNhdGVnb3JpZXMoXG4gICAgICAgIHNlbGVjdCxcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAgIG9wdGlvbnMsXG4gICAgICAgIGNhdGVnb3JpZXNcbiAgICAgICk7XG4gICAgfVxuICB9KTtcblxuICBzZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuXG4gIHNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIm9wdGlvblwiKTtcbiAgICB1cGRhdGVDYXRlZ29yaWVzKHNlbGVjdCwgY29udGFpbmVyLCBzZWxlY3RlZCwgcGxhY2Vob2xkZXIsIG9wdGlvbnMsIFtcbiAgICAgICt0aGlzLnZhbHVlLFxuICAgIF0pO1xuICB9KTtcblxuICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFkZC1ibG9nLWJ0blwiKSkgcmV0dXJuO1xuICAgIGlmICghZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIuc2VsZWN0LWNvbnRhaW5lclwiKSkge1xuICAgICAgY29uc3QgYmxvZ0luZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvZy1pbmZvXCIpKTtcbiAgICAgIGlmIChibG9nSW5mby5jYXRlZ29yaWVzICYmIGJsb2dJbmZvLmNhdGVnb3JpZXMubGVuZ3RoIDwgMSlcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNlNGUzZWJcIjtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBkaXY7XG59XG5cbmV4cG9ydCB7IGNvbnRhaW5lciB9O1xuIiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hDYXRlZ29yaWVzKHVybCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXJsfS9jYXRlZ29yaWVzYCwge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBkYXRhO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKFwiVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHRoZSBmZXRjaCBvcGVyYXRpb246IFwiLCBlcnJvcik7XG4gIH1cbn1cbiIsImltcG9ydCBmZXRjaENhdGVnb3JpZXMgZnJvbSBcIi4uLy4uLy4uL2xvZ2ljL2NhdGVnb3JpZXMvZmV0Y2hcIjtcbmltcG9ydCBpbWFnZSBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL3doaXRlLXJlbW92ZS5wbmdcIjtcblxuY29uc3QgY2F0ZWdvcnlBcnIgPSBbXTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlQ2F0ZWdvcmllcyhcbiAgc2VsZWN0LFxuICBzZWxlY3RDb250YWluZXIsXG4gIHNlbGVjdGVkLFxuICBwbGFjZWhvbGRlcixcbiAgb3B0aW9ucyxcbiAgaWRBcnJcbikge1xuICBpZiAoaWRBcnIubGVuZ3RoID49IDEpIHtcbiAgICBwbGFjZWhvbGRlci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgc2VsZWN0ZWQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICBzZWxlY3QudmFsdWUgPSBcIlwiO1xuICB9XG5cbiAgY29uc3QgYmxvZ0luZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvZy1pbmZvXCIpKTtcbiAgY29uc3QgdXJsID0gXCJodHRwczovL2FwaS5ibG9nLnJlZGJlcnJ5aW50ZXJuc2hpcC5nZS9hcGlcIjtcblxuICBvcHRpb25zLmZvckVhY2goKGVsKSA9PiB7XG4gICAgaWYgKGVsLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpKSByZXR1cm47XG4gICAgY29uc3QgdmFsdWVOdW0gPSArZWwuZ2V0QXR0cmlidXRlKFwidmFsdWVcIik7XG5cbiAgICBpZiAoaWRBcnIuaW5jbHVkZXModmFsdWVOdW0pKSB7XG4gICAgICBjYXRlZ29yeUFyci5wdXNoKHZhbHVlTnVtKTtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZShcImhpZGRlblwiLCBcIlwiKTtcblxuICAgICAgYmxvZ0luZm8uY2F0ZWdvcmllcyA9IGNhdGVnb3J5QXJyO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJibG9nLWluZm9cIiwgSlNPTi5zdHJpbmdpZnkoYmxvZ0luZm8pKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZldGNoQ2F0ZWdvcmllcyh1cmwpLnRoZW4oKGRhdGEpID0+IHtcbiAgICBkYXRhLmRhdGEuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGlmIChpZEFyci5pbmNsdWRlcygrZWwuaWQpKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnktY29udGFpbmVyXCIsIGBjYXRlZ29yeS0ke2VsLmlkfWApO1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZWwuYmFja2dyb3VuZF9jb2xvcjtcbiAgICAgICAgc2VsZWN0ZWQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHRleHQudGV4dENvbnRlbnQgPSBlbC50aXRsZTtcbiAgICAgICAgdGV4dC5zdHlsZS5jb2xvciA9IGVsLnRleHRfY29sb3I7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLnNyYyA9IGltYWdlO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgICAgICBzZWxlY3RDb250YWluZXIuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IFwiYXV0byBtaW5tYXgoMzBweCwgMWZyKVwiO1xuICAgICAgICBzZWxlY3RDb250YWluZXIuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgIzE0RDgxQ1wiO1xuXG4gICAgICAgIGlmIChjYXRlZ29yeUFyci5sZW5ndGggPiAxKSBzZWxlY3RlZC5zdHlsZS5vdmVyZmxvd1ggPSBcInNjcm9sbFwiO1xuXG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgY29uc3QgcGFyZW50ID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIuY2F0ZWdvcnktY29udGFpbmVyXCIpO1xuICAgICAgICAgIHBhcmVudC5yZW1vdmUoKTtcblxuICAgICAgICAgIGxldCBpbmRleCA9IHBhcmVudC5jbGFzc0xpc3RbMV0uaW5kZXhPZihcIi1cIik7XG4gICAgICAgICAgY29uc3QgY2F0TnVtID0gK3BhcmVudC5jbGFzc0xpc3RbMV0uc3Vic3RyaW5nKGluZGV4ICsgMSk7XG5cbiAgICAgICAgICBsZXQgYXJySW5kZXggPSBjYXRlZ29yeUFyci5pbmRleE9mKGNhdE51bSk7XG4gICAgICAgICAgaWYgKGFyckluZGV4ICE9PSAtMSkgY2F0ZWdvcnlBcnIuc3BsaWNlKGFyckluZGV4LCAxKTtcblxuICAgICAgICAgIGlmIChjYXRlZ29yeUFyci5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgICBzZWxlY3RDb250YWluZXIuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI0VBMTkxOVwiO1xuICAgICAgICAgICAgc2VsZWN0ZWQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLnRleHRDb250ZW50ID0gXCLhg5Dhg5jhg6Dhg6nhg5jhg5Thg5cg4YOZ4YOQ4YOi4YOU4YOS4YOd4YOg4YOY4YOQXCI7XG4gICAgICAgICAgICBzZWxlY3RDb250YWluZXIuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IFwiYXV0b1wiO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjYXRlZ29yeUFyci5sZW5ndGggPD0gMSkgc2VsZWN0ZWQuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcblxuICAgICAgICAgIGJsb2dJbmZvLmNhdGVnb3JpZXMgPSBjYXRlZ29yeUFycjtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJsb2ctaW5mb1wiLCBKU09OLnN0cmluZ2lmeShibG9nSW5mbykpO1xuXG4gICAgICAgICAgb3B0aW9ucy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsLmhhc0F0dHJpYnV0ZShcImRpc2FibGVkXCIpKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoK2VsLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpID09PSBjYXROdW0pXG4gICAgICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZShcImhpZGRlblwiKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuIiwiaW1wb3J0IHZhbGlkYXRlRW1haWwgZnJvbSBcIi4uLy4uLy4uL2xvZ2ljL2Jsb2dBZGRlci92YWxpZGF0aW9ucy9lbWFpbC9lbWFpbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVFbWFpbCgpIHtcbiAgY29uc3QgYmxvZ0luZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvZy1pbmZvXCIpKTtcblxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaXYuY2xhc3NMaXN0LmFkZChcImNvbnRhaW5lclwiLCBcImVtYWlsLWNvbnRhaW5lclwiKTtcblxuICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBcIuGDlOGDmi3hg6Thg53hg6Hhg6Lhg5BcIjtcbiAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZW1haWwtaW5wdXRcIik7XG4gIGRpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGlucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiRXhhbXBsZUByZWRiZXJyeS5nZVwiKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImVtYWlsXCIpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImVtYWlsLWlucHV0XCIpO1xuICBkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gIGlmIChibG9nSW5mbyAmJiBibG9nSW5mby5lbWFpbCkge1xuICAgIGlucHV0LnZhbHVlID0gYmxvZ0luZm8uZW1haWw7XG4gICAgaWYgKHZhbGlkYXRlRW1haWwoaW5wdXQpKSBpbnB1dC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjMTREODFDXCI7XG4gICAgZWxzZSBpbnB1dC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjRUExOTE5XCI7XG4gIH1cblxuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH0pO1xuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLnZhbHVlKSB0aGlzLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICM1RDM3RjNcIjtcbiAgfSk7XG5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodmFsaWRhdGVFbWFpbCh0aGlzKSkgdGhpcy5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjMTREODFDXCI7XG4gICAgZWxzZSB0aGlzLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNFQTE5MTlcIjtcblxuICAgIGNvbnN0IGJsb2dJbmZvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJsb2ctaW5mb1wiKSk7XG4gICAgYmxvZ0luZm8uZW1haWwgPSB0aGlzLnZhbHVlO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmxvZy1pbmZvXCIsIEpTT04uc3RyaW5naWZ5KGJsb2dJbmZvKSk7XG4gIH0pO1xuXG4gIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIWlucHV0LnZhbHVlKSB0aGlzLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICAjZTRlM2ViXCI7XG4gIH0pO1xuXG4gIHJldHVybiBkaXY7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGlucHV0KSB7XG4gIGNvbnN0IHJlZ2V4ID0gL15bYS16QS1aMC05Ll8rLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWl17Mix9JC87XG4gIGlmIChyZWdleC50ZXN0KGlucHV0LnZhbHVlKSAmJiBpbnB1dC52YWx1ZS5lbmRzV2l0aChcIkByZWRiZXJyeS5nZVwiKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IHZhbGlkYXRlSW1nIGZyb20gXCIuLi9pbWFnZS9pbWFnZVwiO1xuaW1wb3J0IHZhbGlkYXRlQXV0aG9yIGZyb20gXCIuLi9hdXRob3IvYXV0aG9yXCI7XG5pbXBvcnQgdmFsaWRhdGVUaXRsZSBmcm9tIFwiLi4vdGl0bGUvdGl0bGVcIjtcbmltcG9ydCB2YWxpZGF0ZURlc2NyaXB0aW9uIGZyb20gXCIuLi9kZXNjcmlwdGlvbi9kZXNjcmlwdGlvblwiO1xuaW1wb3J0IHZhbGlkYXRlRGF0ZSBmcm9tIFwiLi4vZGF0ZS9kYXRlXCI7XG5pbXBvcnQge1xuICBpbnB1dCBhcyBhdXRob3JJbnB1dCxcbiAgdmFsaWRhdGlvbkFyciBhcyBhdXRob3JWYWxpZGF0aW9uQXJyLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vZG9tL2Jsb2dBZGRlci9hdXRob3IvY3JlYXRlXCI7XG5pbXBvcnQge1xuICBpbnB1dCBhcyB0aXRsZUlucHV0LFxuICBjb250YWluZXIgYXMgdGl0bGVDb250YWluZXIsXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kb20vYmxvZ0FkZGVyL3RpdGxlL2NyZWF0ZVwiO1xuaW1wb3J0IHtcbiAgdGV4dGFyZWEgYXMgZGVzY3JpcHRvblRleHRhcmVhLFxuICBjb250YWluZXIgYXMgZGVzY3JpcHRpb25Db250YWluZXIsXG59IGZyb20gXCIuLi8uLi8uLi8uLi9kb20vYmxvZ0FkZGVyL2Rlc2NyaXB0aW9uL2NyZWF0ZVwiO1xuaW1wb3J0IHsgaW5wdXQgYXMgZGF0ZUlucHV0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RvbS9ibG9nQWRkZXIvZGF0ZS9jcmVhdGVcIjtcbmltcG9ydCB7IGNvbnRhaW5lciBhcyBjYXRlZ29yaWVzQ29udGFpbmVyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2RvbS9ibG9nQWRkZXIvY2F0ZWdvcmllcy9jcmVhdGVcIjtcbmltcG9ydCBjcmVhdGVTdWNjZXNzTW9kYWwgZnJvbSBcIi9zcmMvY29tcG9uZW50cy9kb20vYmxvZ0FkZGVyL3N1Y2Nlc3MvY3JlYXRlLmpzXCI7XG5pbXBvcnQgc2VuZEJsb2cgZnJvbSBcIi4uLy4uLy4uL2Jsb2dzL3NlbmRCbG9nXCI7XG5pbXBvcnQgdmFsaWRhdGVFbWFpbCBmcm9tIFwiLi4vZW1haWwvZW1haWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKCkge1xuICBjb25zdCBibG9nSW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibG9nLWluZm9cIikpO1xuICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlbWFpbC1pbnB1dFwiKTtcblxuICBpZiAoIXZhbGlkYXRlQXV0aG9yKGF1dGhvcklucHV0LCBhdXRob3JWYWxpZGF0aW9uQXJyKSlcbiAgICBhdXRob3JJbnB1dC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjRUExOTE5XCI7XG4gIGlmICghdmFsaWRhdGVUaXRsZSh0aXRsZUlucHV0LCB0aXRsZUNvbnRhaW5lcikpXG4gICAgdGl0bGVJbnB1dC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjRUExOTE5XCI7XG4gIGlmICghdmFsaWRhdGVEZXNjcmlwdGlvbihkZXNjcmlwdG9uVGV4dGFyZWEsIGRlc2NyaXB0aW9uQ29udGFpbmVyKSlcbiAgICBkZXNjcmlwdG9uVGV4dGFyZWEuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI0VBMTkxOVwiO1xuICBpZiAoIXZhbGlkYXRlRGF0ZShkYXRlSW5wdXQpKSBkYXRlSW5wdXQuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI0VBMTkxOVwiO1xuICBpZiAoXG4gICAgKGJsb2dJbmZvLmNhdGVnb3JpZXMgJiYgYmxvZ0luZm8uY2F0ZWdvcmllcy5sZW5ndGggPCAxKSB8fFxuICAgICFibG9nSW5mby5jYXRlZ29yaWVzXG4gIClcbiAgICBjYXRlZ29yaWVzQ29udGFpbmVyLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkICNFQTE5MTlcIjtcblxuICBpZiAoXG4gICAgdmFsaWRhdGVJbWcoKSAmJlxuICAgIHZhbGlkYXRlQXV0aG9yKGF1dGhvcklucHV0LCBhdXRob3JWYWxpZGF0aW9uQXJyKSAmJlxuICAgIHZhbGlkYXRlVGl0bGUodGl0bGVJbnB1dCwgdGl0bGVDb250YWluZXIpICYmXG4gICAgdmFsaWRhdGVEZXNjcmlwdGlvbihkZXNjcmlwdG9uVGV4dGFyZWEsIGRlc2NyaXB0aW9uQ29udGFpbmVyKSAmJlxuICAgIHZhbGlkYXRlRGF0ZShkYXRlSW5wdXQpICYmXG4gICAgYmxvZ0luZm8uY2F0ZWdvcmllcyAmJlxuICAgIGJsb2dJbmZvLmNhdGVnb3JpZXMubGVuZ3RoID4gMFxuICApIHtcbiAgICBpZiAoZW1haWxJbnB1dC52YWx1ZSAmJiAhdmFsaWRhdGVFbWFpbChlbWFpbElucHV0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZW5kQmxvZygpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmxvZy1pbmZvXCIsIEpTT04uc3RyaW5naWZ5KHt9KSk7XG4gICAgY3JlYXRlU3VjY2Vzc01vZGFsKCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlSW1nKCkge1xuICBjb25zdCBibG9nSW5mbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJibG9nLWluZm9cIikpO1xuXG4gIGlmIChibG9nSW5mby5pbWFnZSkgcmV0dXJuIHRydWU7XG5cbiAgaWYgKCFibG9nSW5mby5pbWFnZSkge1xuICAgIGFsZXJ0KFwiUGxlYXNlIHVwbG9hZCBhbiBpbWFnZVwiKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB4U3ZnIGZyb20gXCIvc3JjL2Fzc2V0cy9pbWFnZXMveC1pY29uLnN2Z1wiO1xuaW1wb3J0IHN1Y2Nlc3NJbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9zdWNjZXNzLWNpcmNsZS5wbmdcIjtcbmltcG9ydCBkaXNwbGF5TWFpbkRpdiBmcm9tIFwiL3NyYy9jb21wb25lbnRzL2RvbS9tYWluL2Rpc3BsYXkuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU3VjY2Vzc01vZGFsKCkge1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGJvZHkuc3R5bGUub3ZlcmZsb3cgPSBcImhpZGRlblwiO1xuXG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Y2Nlc3MtY29udGFpbmVyXCIpO1xuICBib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcImNvbnRlbnRcIik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICBjb25zdCB4SW1nID0gbmV3IEltYWdlKCk7XG4gIHhJbWcuc3JjID0geFN2ZztcbiAgeEltZy5jbGFzc0xpc3QuYWRkKFwieC1pbWdcIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoeEltZyk7XG5cbiAgY29uc3Qgc3VjY2VzcyA9IG5ldyBJbWFnZSgpO1xuICBzdWNjZXNzLnNyYyA9IHN1Y2Nlc3NJbWc7XG4gIHN1Y2Nlc3MuY2xhc3NMaXN0LmFkZChcInN1Y2Nlc3MtaW1nXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKHN1Y2Nlc3MpO1xuXG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRleHQudGV4dENvbnRlbnQgPSBcIuGDqeGDkOGDnOGDkOGDrOGDlOGDoOGDmCDhg6zhg5Dhg6Dhg5vhg5Dhg6Lhg5Thg5Hhg5jhg5cg4YOT4YOQ4YOU4YOb4YOQ4YOi4YOQXCI7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYnV0dG9uLnRleHRDb250ZW50ID0gXCLhg5vhg5fhg5Dhg5Xhg5Dhg6Ag4YOS4YOV4YOU4YOg4YOT4YOW4YOUIOGDk+GDkOGDkeGDoOGDo+GDnOGDlOGDkeGDkFwiO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG5cbiAgeEltZy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICBub3JtYWxCb2R5KCk7XG4gICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gIH0pO1xuXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGRpc3BsYXlNYWluRGl2KCk7XG4gICAgY29udGFpbmVyLnJlbW92ZSgpO1xuICAgIG5vcm1hbEJvZHkoKTtcbiAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gbm9ybWFsQm9keSgpIHtcbiAgICBjb250YWluZXIucmVtb3ZlKCk7XG4gICAgYm9keS5zdHlsZS5vdmVyZmxvdyA9IFwidmlzaWJsZVwiO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZW5kQmxvZygpIHtcbiAgY29uc3QgYmxvZ0luZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvZy1pbmZvXCIpKTtcbiAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgY29uc3QgYmFzZTY0U3RyaW5nID0gYmxvZ0luZm8uaW1hZ2UuYmFzZTY0O1xuICBjb25zdCBuZXdCYXNlNjQgPSBiYXNlNjRTdHJpbmcucmVwbGFjZSgvXmRhdGE6aW1hZ2VcXC9cXHcrO2Jhc2U2NCwvLCBcIlwiKTtcbiAgY29uc3QgYmxvYiA9IGJhc2U2NFN0cmluZ1RvQmxvYihuZXdCYXNlNjQpO1xuXG4gIGZvcm1EYXRhLmFwcGVuZChcInRpdGxlXCIsIGJsb2dJbmZvLnRpdGxlKTtcbiAgZm9ybURhdGEuYXBwZW5kKFwiZGVzY3JpcHRpb25cIiwgYmxvZ0luZm8uZGVzY3JpcHRpb24pO1xuICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZVwiLCBibG9iLCBcImZpbGVuYW1lLmpwZ1wiKTtcbiAgZm9ybURhdGEuYXBwZW5kKFwiYXV0aG9yXCIsIGJsb2dJbmZvLmF1dGhvcik7XG4gIGZvcm1EYXRhLmFwcGVuZChcImNhdGVnb3JpZXNcIiwgSlNPTi5zdHJpbmdpZnkoYmxvZ0luZm8uY2F0ZWdvcmllcykpO1xuICBmb3JtRGF0YS5hcHBlbmQoXCJwdWJsaXNoX2RhdGVcIiwgYmxvZ0luZm8uZGF0ZSk7XG4gIGlmIChibG9nSW5mby5lbWFpbCkgZm9ybURhdGEuYXBwZW5kKFwiZW1haWxcIiwgYmxvZ0luZm8uZW1haWwpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHBvc3RCbG9nKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgICAgICBcImh0dHBzOi8vYXBpLmJsb2cucmVkYmVycnlpbnRlcm5zaGlwLmdlL2FwaS9ibG9nc1wiLFxuICAgICAgICB7XG4gICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBhY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjpcbiAgICAgICAgICAgICAgXCJCZWFyZXIgZTczYjJjZGZkZjNjMDI5ZTE2ODRmZDUzNmIzZDk5ODFmNmQwNTAzNThkY2UwYzRhMzRjYzk4YTg1NGNkMGFmNlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogZm9ybURhdGEsXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xuICAgICAgfVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc1wiLCBkYXRhKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9XG5cbiAgcG9zdEJsb2coKTtcblxuICBmdW5jdGlvbiBiYXNlNjRTdHJpbmdUb0Jsb2IoYmFzZTY0U3RyaW5nKSB7XG4gICAgY29uc3QgYmluYXJ5U3RyaW5nID0gYXRvYihiYXNlNjRTdHJpbmcpO1xuICAgIGNvbnN0IGxlbiA9IGJpbmFyeVN0cmluZy5sZW5ndGg7XG4gICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShsZW4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGJ5dGVzW2ldID0gYmluYXJ5U3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQmxvYihbYnl0ZXNdLCB7IHR5cGU6IFwiaW1hZ2UvanBlZ1wiIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVDYXRlZ29yaWVzKGRhdGEpIHtcbiAgY29uc3Qgc2VsZWN0ZWQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2VsZWN0ZWRcIikpO1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtYWluLWRpdlwiKTtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhdGVnb3JpZXMuY2xhc3NMaXN0LmFkZChcImNhdGVnb3JpZXMtY29udGFpbmVyXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNhdGVnb3JpZXMpO1xuXG4gIGRhdGEuZGF0YS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnlcIiwgYGNhdGVnb3J5LSR7ZWwuaWR9YCk7XG4gICAgY2F0ZWdvcnkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZWwuYmFja2dyb3VuZF9jb2xvcjtcbiAgICBjYXRlZ29yaWVzLmFwcGVuZENoaWxkKGNhdGVnb3J5KTtcbiAgICBpZiAoc2VsZWN0ZWQuaW5jbHVkZXMoZWwuaWQpKSBjYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XG5cbiAgICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgdGV4dC50ZXh0Q29udGVudCA9IGVsLnRpdGxlO1xuICAgIHRleHQuc3R5bGUuY29sb3IgPSBlbC50ZXh0X2NvbG9yO1xuICAgIGNhdGVnb3J5LmFwcGVuZENoaWxkKHRleHQpO1xuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQmxvZ3ModXJsLCB0b2tlbikge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7dXJsfS9ibG9nc2AsIHtcbiAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgYWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSFRUUCBlcnJvciBcIiArIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJUaGVyZSB3YXMgYSBwcm9ibGVtIHdpdGggdGhlIGZldGNoIG9wZXJhdGlvbjogXCIsIGVycm9yKTtcbiAgfVxufVxuIiwiaW1wb3J0IGV4cGFuZEltZyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL2V4cGFuZC5wbmdcIjtcbmltcG9ydCBmZXRjaEJsb2cgZnJvbSBcIi4uLy4uLy4uL2xvZ2ljL2Jsb2cvZmV0Y2hcIjtcbmltcG9ydCBjcmVhdGVCbG9nQ29udGVudCBmcm9tIFwiLi4vYmxvZy9jcmVhdGVcIjtcbmltcG9ydCBmaWx0ZXJCbG9ncyBmcm9tIFwiLi9maWx0ZXIvZmlsdGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUJsb2dzKGRhdGEpIHtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWFpbi1kaXZcIik7XG5cbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJibG9ncy1jb250YWluZXJcIik7XG4gIG1haW4uYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBkYXRhLmRhdGEuZm9yRWFjaCgoaW5mbykgPT4ge1xuICAgIGNvbnN0IGJsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJsb2cuY2xhc3NMaXN0LmFkZChcImJsb2ctY29udGFpbmVyXCIsIGBibG9nLSR7aW5mby5pZH1gKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmxvZyk7XG5cbiAgICBjb25zdCBjb21wYXJpc29uRGF0ZSA9IG5ldyBEYXRlKGluZm8ucHVibGlzaF9kYXRlKTtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgaWYgKHRvZGF5IDwgY29tcGFyaXNvbkRhdGUpIGJsb2cuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBpbmZvLmltYWdlO1xuICAgIGJsb2cuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiYmxvZy1jb250ZW50XCIpO1xuICAgIGJsb2cuYXBwZW5kQ2hpbGQoY29udGVudCk7XG5cbiAgICBjb25zdCBhdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgYXV0aG9yLnRleHRDb250ZW50ID0gaW5mby5hdXRob3I7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhdXRob3IpO1xuXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRhdGUudGV4dENvbnRlbnQgPSBpbmZvLnB1Ymxpc2hfZGF0ZTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBpbmZvLnRpdGxlO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY2F0ZWdvcmllcy5jbGFzc0xpc3QuYWRkKFwibWFpbi1jYXRlZ29yaWVzXCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2F0ZWdvcmllcyk7XG5cbiAgICBpbmZvLmNhdGVnb3JpZXMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNhdGVnb3J5LmNsYXNzTGlzdC5hZGQoXCJtYWluLWNhdGVnb3J5XCIsIGBtYWluLWNhdGVnb3J5LSR7ZWwuaWR9YCk7XG4gICAgICBjYXRlZ29yeS50ZXh0Q29udGVudCA9IGVsLnRpdGxlO1xuICAgICAgY2F0ZWdvcnkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZWwuYmFja2dyb3VuZF9jb2xvcjtcbiAgICAgIGNhdGVnb3J5LnN0eWxlLmNvbG9yID0gZWwudGV4dF9jb2xvcjtcbiAgICAgIGNhdGVnb3JpZXMuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpbmZvLmRlc2NyaXB0aW9uO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgZXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBleHBhbmQuY2xhc3NMaXN0LmFkZChcImV4cGFuZC1ibG9nXCIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZXhwYW5kKTtcblxuICAgIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICB0ZXh0LnRleHRDb250ZW50ID0gXCLhg6Hhg6Dhg6Phg5rhg5Dhg5Mg4YOc4YOQ4YOu4YOV4YOQXCI7XG4gICAgZXhwYW5kLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9IGV4cGFuZEltZztcbiAgICBleHBhbmQuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgIGV4cGFuZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgZmV0Y2hCbG9nKGluZm8uaWQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY3JlYXRlQmxvZ0NvbnRlbnQoZGF0YSwgaW5mby5pZCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgZmlsdGVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2F0ZWdvcnlcIik7XG5cbiAgZmlsdGVycy5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZmlsdGVyQmxvZ3MoZS50YXJnZXQpO1xuICAgIH0pO1xuICB9KTtcblxuICBmaWx0ZXJCbG9ncyhmYWxzZSk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGZldGNoQmxvZyhpZCkge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkuYmxvZy5yZWRiZXJyeWludGVybnNoaXAuZ2UvYXBpL2Jsb2dzLyR7aWR9YCxcbiAgICAgIHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgYWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyIGU3M2IyY2RmZGYzYzAyOWUxNjg0ZmQ1MzZiM2Q5OTgxZjZkMDUwMzU4ZGNlMGM0YTM0Y2M5OGE4NTRjZDBhZjZgLFxuICAgICAgICB9LFxuICAgICAgfVxuICAgICk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJIVFRQIGVycm9yIFwiICsgcmVzcG9uc2Uuc3RhdHVzKTtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBhbGVydChcIlRvbyBtYW55IHJlcXVlc3RzXCIpO1xuICAgIGNvbnNvbGUubG9nKFwiVGhlcmUgd2FzIGEgcHJvYmxlbSB3aXRoIHRoZSBmZXRjaCBvcGVyYXRpb246IFwiLCBlcnJvcik7XG4gIH1cbn1cbiIsImltcG9ydCBiYWNrQXJyb3dJbWcgZnJvbSBcIi9zcmMvYXNzZXRzL2ltYWdlcy9iYWNrLWFycm93LnBuZ1wiO1xuaW1wb3J0IGZldGNoQmxvZyBmcm9tIFwiLi4vLi4vLi4vbG9naWMvYmxvZy9mZXRjaFwiO1xuaW1wb3J0IGV4cGFuZEltZyBmcm9tIFwiL3NyYy9hc3NldHMvaW1hZ2VzL2V4cGFuZC5wbmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQmxvZ0NvbnRlbnQoZGF0YSwgaW5mb0lEKSB7XG4gIGlmICghZGF0YSkgcmV0dXJuO1xuICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW4tZGl2XCIpO1xuICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5cbiAgY29uc3QgYmxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGJsb2cuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJibG9nXCIpO1xuXG4gIGNvbnN0IGJhY2tBcnJvdyA9IG5ldyBJbWFnZSgpO1xuICBiYWNrQXJyb3cuY2xhc3NMaXN0LmFkZChcImJhY2stYXJyb3dcIik7XG4gIGJhY2tBcnJvdy5zcmMgPSBiYWNrQXJyb3dJbWc7XG4gIGJsb2cuYXBwZW5kQ2hpbGQoYmFja0Fycm93KTtcblxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKFwiYmxvZy1jb250ZW50XCIpO1xuICBibG9nLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG4gIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gIGltYWdlLnNyYyA9IGRhdGEuaW1hZ2U7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuXG4gIGNvbnN0IGluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbmZvLmNsYXNzTGlzdC5hZGQoXCJibG9nLWluZm9cIik7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdyYXBwZXIuY2xhc3NMaXN0LmFkZChcIndyYXBwZXItZGl2XCIpO1xuICBpbmZvLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuXG4gIGNvbnN0IGF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgYXV0aG9yLnRleHRDb250ZW50ID0gZGF0YS5hdXRob3I7XG4gIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYXV0aG9yKTtcblxuICBsZXQgZW1haWxUZXh0O1xuICBpZiAoZGF0YS5lbWFpbCkge1xuICAgIGVtYWlsVGV4dCA9IGDigKIgJHtkYXRhLmVtYWlsfWA7XG4gIH0gZWxzZSBlbWFpbFRleHQgPSBcIlwiO1xuXG4gIGNvbnN0IGRhdGVFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkYXRlRW1haWwudGV4dENvbnRlbnQgPSBgJHtkYXRhLnB1Ymxpc2hfZGF0ZX0ke2VtYWlsVGV4dH1gO1xuICB3cmFwcGVyLmFwcGVuZENoaWxkKGRhdGVFbWFpbCk7XG5cbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gZGF0YS50aXRsZTtcbiAgaW5mby5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgY29uc3QgY2F0ZWdvcmllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhdGVnb3JpZXMuY2xhc3NMaXN0LmFkZChcImNhdGVnb3JpZXNcIik7XG4gIGluZm8uYXBwZW5kQ2hpbGQoY2F0ZWdvcmllcyk7XG5cbiAgZGF0YS5jYXRlZ29yaWVzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgY29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhdGVnb3J5LnRleHRDb250ZW50ID0gZWwudGl0bGU7XG4gICAgY2F0ZWdvcnkuc3R5bGUuY29sb3IgPSBlbC50ZXh0X2NvbG9yO1xuICAgIGNhdGVnb3J5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGVsLmJhY2tncm91bmRfY29sb3I7XG4gICAgY2F0ZWdvcnkuY2xhc3NMaXN0LmFkZChcImNhdGVnb3J5XCIsIGBjYXRlZ29yeS0ke2VsLmlkfWApO1xuICAgIGNhdGVnb3JpZXMuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xuICB9KTtcblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRhdGEuZGVzY3JpcHRpb247XG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJkZXNjcmlwdGlvbi1wYXJhXCIpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICBiYWNrQXJyb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBtYWluRGl2LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgYmxvZy5yZW1vdmUoKTtcbiAgfSk7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChibG9nKTtcblxuICAvLz0gU0xJREVSID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNsaWRlci1jb250YWluZXJcIik7XG4gIGJsb2cuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBjb25zdCB1cHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHVwcGVyLmNsYXNzTGlzdC5hZGQoXCJ1cHBlclwiKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHVwcGVyKTtcblxuICBjb25zdCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gXCLhg5vhg6Hhg5Lhg5Dhg5Xhg6Hhg5gg4YOh4YOi4YOQ4YOi4YOY4YOU4YOR4YOYXCI7XG4gIHVwcGVyLmFwcGVuZENoaWxkKHRleHQpO1xuXG4gIC8vIGNvbnN0IGxlZnRzdmcgPSBjcmVhdGVMZWZ0U1ZHKCk7XG4gIC8vIGNvbnN0IHJpZ2h0c3ZnID0gY3JlYXRlUmlnaHRTVkcoKTtcblxuICAvLyBjb25zdCBidXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgLy8gYnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uc1wiKTtcbiAgLy8gYnV0dG9ucy5hcHBlbmRDaGlsZChsZWZ0c3ZnKTtcbiAgLy8gYnV0dG9ucy5hcHBlbmRDaGlsZChyaWdodHN2Zyk7XG4gIC8vIHVwcGVyLmFwcGVuZENoaWxkKGJ1dHRvbnMpO1xuXG4gIGNvbnN0IGxvd2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbG93ZXIuY2xhc3NMaXN0LmFkZChcImxvd2VyXCIpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG93ZXIpO1xuXG4gIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNsaWRlci5jbGFzc0xpc3QuYWRkKFwic2xpZGVyXCIpO1xuICBsb3dlci5hcHBlbmRDaGlsZChzbGlkZXIpO1xuXG4gIGNvbnN0IHNlbGVjdGVkQXJyID0gW107XG4gIGRhdGEuY2F0ZWdvcmllcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgIHNlbGVjdGVkQXJyLnB1c2goZWwuaWQpO1xuICB9KTtcbiAgY29uc3QgYmxvZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2ctY29udGFpbmVyXCIpO1xuICBibG9ncy5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBlbC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1haW4tY2F0ZWdvcnlcIik7XG4gICAgY29uc3QgY2F0ZWdvcmllc0FyciA9IEFycmF5LmZyb20oY2F0ZWdvcmllcykubWFwKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICByZXR1cm4gK2VsZW1lbnQuY2xhc3NMaXN0WzFdLnNwbGl0KFwiLVwiKVsyXTtcbiAgICB9KTtcbiAgICBjb25zdCBpc0NvbnRhaW5lZCA9IGNhdGVnb3JpZXNBcnIuc29tZSgoZWxlbWVudCkgPT5cbiAgICAgIHNlbGVjdGVkQXJyLmluY2x1ZGVzKGVsZW1lbnQpXG4gICAgKTtcbiAgICBpZiAoaXNDb250YWluZWQpIHtcbiAgICAgIGZ1bmN0aW9uIGdldEFmdGVyRGFzaChpbnB1dCkge1xuICAgICAgICBjb25zdCBpbmRleCA9IGlucHV0LmluZGV4T2YoXCItXCIpO1xuICAgICAgICByZXR1cm4gaW5wdXQuc2xpY2UoaW5kZXggKyAxKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGJsb2dJZCA9ICtnZXRBZnRlckRhc2goZWwuY2xhc3NMaXN0WzFdKTtcbiAgICAgIGZldGNoQmxvZyhibG9nSWQpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgaWYgKGJsb2dJZCA9PT0gaW5mb0lEKSByZXR1cm47XG4gICAgICAgIGNvbnN0IHNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2xpZGUuY2xhc3NMaXN0LmFkZChcInNsaWRlXCIpO1xuICAgICAgICBzbGlkZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgJHtkYXRhLmlkfWApO1xuICAgICAgICBzbGlkZXIuYXBwZW5kQ2hpbGQoc2xpZGUpO1xuXG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltYWdlLnNyYyA9IGRhdGEuaW1hZ2U7XG4gICAgICAgIHNsaWRlLmFwcGVuZENoaWxkKGltYWdlKTtcblxuICAgICAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5mby5jbGFzc0xpc3QuYWRkKFwiaW5mb1wiKTtcbiAgICAgICAgc2xpZGUuYXBwZW5kQ2hpbGQoaW5mbyk7XG5cbiAgICAgICAgY29uc3QgYXV0aG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBhdXRob3IudGV4dENvbnRlbnQgPSBkYXRhLmF1dGhvcjtcbiAgICAgICAgaW5mby5hcHBlbmRDaGlsZChhdXRob3IpO1xuXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGRhdGEucHVibGlzaF9kYXRlO1xuICAgICAgICBpbmZvLmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IGRhdGEudGl0bGU7XG4gICAgICAgIGluZm8uYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjYXRlZ29yaWVzLmNsYXNzTGlzdC5hZGQoXCJjYXRlZ29yaWVzXCIpO1xuICAgICAgICBpbmZvLmFwcGVuZENoaWxkKGNhdGVnb3JpZXMpO1xuXG4gICAgICAgIGRhdGEuY2F0ZWdvcmllcy5mb3JFYWNoKChlbCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjYXRlZ29yeS5jbGFzc0xpc3QuYWRkKFwiY2F0ZWdvcnlcIik7XG4gICAgICAgICAgY2F0ZWdvcnkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZWwuYmFja2dyb3VuZF9jb2xvcjtcbiAgICAgICAgICBjYXRlZ29yaWVzLmFwcGVuZENoaWxkKGNhdGVnb3J5KTtcblxuICAgICAgICAgIGNvbnN0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gZWwudGl0bGU7XG4gICAgICAgICAgcGFyYS5zdHlsZS5jb2xvciA9IGVsLnRleHRfY29sb3I7XG4gICAgICAgICAgY2F0ZWdvcnkuYXBwZW5kQ2hpbGQocGFyYSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwiZGVzY3JpcHRpb25cIik7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZGF0YS5kZXNjcmlwdGlvbjtcbiAgICAgICAgaW5mby5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgICAgICAgY29uc3QgZXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZXhwYW5kLmNsYXNzTGlzdC5hZGQoXCJleHBhbmQtYmxvZ1wiKTtcbiAgICAgICAgaW5mby5hcHBlbmRDaGlsZChleHBhbmQpO1xuXG4gICAgICAgIGNvbnN0IHRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHRleHQxLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0MVwiKTtcbiAgICAgICAgdGV4dDEudGV4dENvbnRlbnQgPSBcIuGDoeGDoOGDo+GDmuGDkOGDkyDhg5zhg5Dhg67hg5Xhg5BcIjtcbiAgICAgICAgZXhwYW5kLmFwcGVuZENoaWxkKHRleHQxKTtcblxuICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJleHBhbmQxLWltZ1wiKTtcbiAgICAgICAgaW1nLnNyYyA9IGV4cGFuZEltZztcbiAgICAgICAgZXhwYW5kLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICAgICAgZXhwYW5kLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29uc3QgbmV3SUQgPSArdGhpcy5jbG9zZXN0KFwiLnNsaWRlXCIpLmdldEF0dHJpYnV0ZShcImlkXCIpO1xuXG4gICAgICAgICAgZmV0Y2hCbG9nKG5ld0lEKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjcmVhdGVCbG9nQ29udGVudChkYXRhLCBuZXdJRCk7XG4gICAgICAgICAgICBibG9nLnJlbW92ZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZUxlZnRTVkcoKSB7XG4vLyAgIGxldCBzdmdOUyA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbi8vICAgbGV0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJzdmdcIik7XG4vLyAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjQ0XCIpO1xuLy8gICBzdmcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiNDRcIik7XG4vLyAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDQ0IDQ0XCIpO1xuLy8gICBzdmcuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIm5vbmVcIik7XG4vLyAgIHN2Zy5jbGFzc0xpc3QuYWRkKFwicHJldlwiKTtcblxuLy8gICBsZXQgcmVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgXCJyZWN0XCIpO1xuLy8gICByZWN0LnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiNDRcIik7XG4vLyAgIHJlY3Quc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiNDRcIik7XG4vLyAgIHJlY3Quc2V0QXR0cmlidXRlKFwicnhcIiwgXCIyMlwiKTtcbi8vICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwiI0U0RTNFQlwiKTtcbi8vICAgc3ZnLmFwcGVuZENoaWxkKHJlY3QpO1xuXG4vLyAgIGxldCBwYXRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05TLCBcInBhdGhcIik7XG4vLyAgIHBhdGguc2V0QXR0cmlidXRlKFxuLy8gICAgIFwiZFwiLFxuLy8gICAgIFwiTTE4IDIzQzE4LjU1MjMgMjMgMTkgMjIuNTUyMyAxOSAyMkMxOSAyMS40NDc3IDE4LjU1MjMgMjEgMTggMjFMMTggMjNaTTE3LjE5MjkgMjEuMjkyOUMxNi44MDI0IDIxLjY4MzQgMTYuODAyNCAyMi4zMTY2IDE3LjE5MjkgMjIuNzA3MUwyMy41NTY5IDI5LjA3MTFDMjMuOTQ3NCAyOS40NjE2IDI0LjU4MDUgMjkuNDYxNiAyNC45NzExIDI5LjA3MTFDMjUuMzYxNiAyOC42ODA1IDI1LjM2MTYgMjguMDQ3NCAyNC45NzExIDI3LjY1NjlMMTkuMzE0MiAyMkwyNC45NzExIDE2LjM0MzFDMjUuMzYxNiAxNS45NTI2IDI1LjM2MTYgMTUuMzE5NSAyNC45NzExIDE0LjkyODlDMjQuNTgwNSAxNC41Mzg0IDIzLjk0NzQgMTQuNTM4NCAyMy41NTY5IDE0LjkyODlMMTcuMTkyOSAyMS4yOTI5Wk0xOCAyMUwxNy45IDIxTDE3LjkgMjNMMTggMjNMMTggMjFaXCJcbi8vICAgKTtcbi8vICAgcGF0aC5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsIFwiI0YzRjJGQVwiKTtcbi8vICAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xuLy8gICByZXR1cm4gc3ZnO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBjcmVhdGVSaWdodFNWRygpIHtcbi8vICAgY29uc3Qgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJzdmdcIik7XG4vLyAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ3aWR0aFwiLCBcIjQ0XCIpO1xuLy8gICBzdmcuc2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIsIFwiNDRcIik7XG4vLyAgIHN2Zy5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDQ0IDQ0XCIpO1xuLy8gICBzdmcuc2V0QXR0cmlidXRlKFwiZmlsbFwiLCBcIm5vbmVcIik7XG4vLyAgIHN2Zy5jbGFzc0xpc3QuYWRkKFwibmV4dFwiKTtcblxuLy8gICBjb25zdCByZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJyZWN0XCIpO1xuLy8gICByZWN0LnNldEF0dHJpYnV0ZShcInhcIiwgXCI0NFwiKTtcbi8vICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJ5XCIsIFwiNDRcIik7XG4vLyAgIHJlY3Quc2V0QXR0cmlidXRlKFwid2lkdGhcIiwgXCI0NFwiKTtcbi8vICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJoZWlnaHRcIiwgXCI0NFwiKTtcbi8vICAgcmVjdC5zZXRBdHRyaWJ1dGUoXCJyeFwiLCBcIjIyXCIpO1xuLy8gICByZWN0LnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgxODAgNDQgNDQpXCIpO1xuLy8gICByZWN0LnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCIjRTRFM0VCXCIpO1xuLy8gICBzdmcuYXBwZW5kQ2hpbGQocmVjdCk7XG5cbi8vICAgY29uc3QgcGF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwicGF0aFwiKTtcbi8vICAgcGF0aC5zZXRBdHRyaWJ1dGUoXG4vLyAgICAgXCJkXCIsXG4vLyAgICAgXCJNMjYgMjFDMjUuNDQ3NyAyMSAyNSAyMS40NDc3IDI1IDIyQzI1IDIyLjU1MjMgMjUuNDQ3NyAyMyAyNiAyM0wyNiAyMVpNMjYuODA3MSAyMi43MDcxQzI3LjE5NzYgMjIuMzE2NiAyNy4xOTc2IDIxLjY4MzQgMjYuODA3MSAyMS4yOTI5TDIwLjQ0MzEgMTQuOTI4OUMyMC4wNTI2IDE0LjUzODQgMTkuNDE5NSAxNC41Mzg0IDE5LjAyODkgMTQuOTI4OUMxOC42Mzg0IDE1LjMxOTUgMTguNjM4NCAxNS45NTI2IDE5LjAyODkgMTYuMzQzMUwyNC42ODU4IDIyTDE5LjAyODkgMjcuNjU2OUMxOC42Mzg0IDI4LjA0NzQgMTguNjM4NCAyOC42ODA1IDE5LjAyODkgMjkuMDcxMUMxOS40MTk1IDI5LjQ2MTYgMjAuMDUyNiAyOS40NjE2IDIwLjQ0MzEgMjkuMDcxMUwyNi44MDcxIDIyLjcwNzFaTTI2IDIzTDI2LjEgMjNMMjYuMSAyMUwyNiAyMUwyNiAyM1pcIlxuLy8gICApO1xuLy8gICBwYXRoLnNldEF0dHJpYnV0ZShcImZpbGxcIiwgXCJ3aGl0ZVwiKTtcbi8vICAgc3ZnLmFwcGVuZENoaWxkKHBhdGgpO1xuXG4vLyAgIHJldHVybiBzdmc7XG4vLyB9XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaWx0ZXJCbG9ncyh0YXJnZXQpIHtcbiAgbGV0IHNlbGVjdGVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNlbGVjdGVkXCIpKTtcbiAgY29uc3QgYmxvZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmJsb2ctY29udGFpbmVyXCIpO1xuXG4gIGlmICh0YXJnZXQpIHtcbiAgICBjb25zdCBjYXRlZ29yeUNvbnRhaW5lciA9IHRhcmdldC5jbG9zZXN0KFwiLmNhdGVnb3J5XCIpO1xuICAgIGxldCBudW0gPSArY2F0ZWdvcnlDb250YWluZXIuY2xhc3NMaXN0WzFdLnNwbGl0KFwiLVwiKS5wb3AoKTtcbiAgICBpZiAoY2F0ZWdvcnlDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpIHtcbiAgICAgIGNhdGVnb3J5Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZFwiKTtcbiAgICAgIHNlbGVjdGVkID0gc2VsZWN0ZWQuZmlsdGVyKCh2YWx1ZSkgPT4gdmFsdWUgIT09IG51bSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNlbGVjdGVkXCIsIEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhdGVnb3J5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcbiAgICAgIHNlbGVjdGVkLnB1c2goK251bSk7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNlbGVjdGVkXCIsIEpTT04uc3RyaW5naWZ5KHNlbGVjdGVkKSk7XG4gICAgfVxuICB9XG5cbiAgYmxvZ3MuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gZWwucXVlcnlTZWxlY3RvckFsbChcIi5tYWluLWNhdGVnb3J5XCIpO1xuICAgIGNvbnN0IGNhdGVnb3JpZXNBcnIgPSBBcnJheS5mcm9tKGNhdGVnb3JpZXMpLm1hcChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgcmV0dXJuICtlbGVtZW50LmNsYXNzTGlzdFsxXS5zcGxpdChcIi1cIilbMl07XG4gICAgfSk7XG5cbiAgICBjb25zdCBpc0NvbnRhaW5lZCA9IGNhdGVnb3JpZXNBcnIuc29tZSgoZWxlbWVudCkgPT5cbiAgICAgIHNlbGVjdGVkLmluY2x1ZGVzKGVsZW1lbnQpXG4gICAgKTtcblxuICAgIGlmIChzZWxlY3RlZC5sZW5ndGggPCAxKSB7XG4gICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghaXNDb250YWluZWQpIGVsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgZWxzZSBlbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHQwOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIvc3JjL2luZGV4LnNjc3NcIjtcbmltcG9ydCBjcmVhdGVIZWFkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9kb20vaGVhZGVyL2NyZWF0ZVwiO1xuaW1wb3J0IGNyZWF0ZU1haW4gZnJvbSBcIi4vY29tcG9uZW50cy9kb20vbWFpbi9jcmVhdGVcIjtcbmltcG9ydCBjcmVhdGVCbG9nQWRkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9kb20vYmxvZ0FkZGVyL2NyZWF0ZVwiO1xuaW1wb3J0IGZldGNoQ2F0ZWdvcmllcyBmcm9tIFwiLi9jb21wb25lbnRzL2xvZ2ljL2NhdGVnb3JpZXMvZmV0Y2hcIjtcbmltcG9ydCBjcmVhdGVDYXRlZ29yaWVzIGZyb20gXCIuL2NvbXBvbmVudHMvZG9tL21haW4vY2F0ZWdvcmllcy9jcmVhdGVcIjtcbmltcG9ydCBmZXRjaEJsb2dzIGZyb20gXCIuL2NvbXBvbmVudHMvbG9naWMvYmxvZ3MvZmV0Y2hcIjtcbmltcG9ydCBjcmVhdGVCbG9ncyBmcm9tIFwiLi9jb21wb25lbnRzL2RvbS9tYWluL2Jsb2dzL2NyZWF0ZVwiO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XG5jb25zdCB1cmwgPSBcImh0dHBzOi8vYXBpLmJsb2cucmVkYmVycnlpbnRlcm5zaGlwLmdlL2FwaVwiO1xuY29uc3QgdG9rZW4gPVxuICBcImU3M2IyY2RmZGYzYzAyOWUxNjg0ZmQ1MzZiM2Q5OTgxZjZkMDUwMzU4ZGNlMGM0YTM0Y2M5OGE4NTRjZDBhZjZcIjtcblxuY29uc3QgbG9naW4gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9naW5cIikpO1xuaWYgKCFsb2dpbikgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsb2dpblwiLCBKU09OLnN0cmluZ2lmeShmYWxzZSkpO1xuXG5jb25zdCBzdGF0dXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvZy1hZGRlci1zdGF0dXNcIikpO1xuaWYgKCFzdGF0dXMpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmxvZy1hZGRlci1zdGF0dXNcIiwgSlNPTi5zdHJpbmdpZnkoZmFsc2UpKTtcblxuY29uc3QgYmxvZ0luZm8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmxvZy1pbmZvXCIpKTtcbmlmICghYmxvZ0luZm8pIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmxvZy1pbmZvXCIsIEpTT04uc3RyaW5naWZ5KHt9KSk7XG5cbmNvbnN0IHNlbGVjdGVkID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNlbGVjdGVkXCIpKTtcbmlmICghc2VsZWN0ZWQpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2VsZWN0ZWRcIiwgSlNPTi5zdHJpbmdpZnkoW10pKTtcblxuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG5ib2R5LmFwcGVuZENoaWxkKGNyZWF0ZUJsb2dBZGRlcigpKTtcblxuZmV0Y2hDYXRlZ29yaWVzKHVybClcbiAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICBjcmVhdGVDYXRlZ29yaWVzKGRhdGEpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBmZXRjaEJsb2dzKHVybCwgdG9rZW4pLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgY3JlYXRlQmxvZ3MoZGF0YSk7XG4gICAgICB9KTtcbiAgICB9LCAxMDAwKTtcbiAgfSlcbiAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9