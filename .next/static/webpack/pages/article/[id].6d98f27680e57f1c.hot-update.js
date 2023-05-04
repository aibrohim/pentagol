"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/article/[id]",{

/***/ "./src/entities/article-card/ui/article-card.tsx":
/*!*******************************************************!*\
  !*** ./src/entities/article-card/ui/article-card.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ArticleCard\": function() { return /* binding */ ArticleCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _shared_lib_normalize_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/lib/normalize-date */ \"./src/shared/lib/normalize-date/index.ts\");\n/* harmony import */ var _shared_lib_classNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/lib/classNames */ \"./src/shared/lib/classNames/index.ts\");\n/* harmony import */ var _article_card_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article-card.module.scss */ \"./src/entities/article-card/ui/article-card.module.scss\");\n/* harmony import */ var _article_card_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_article_card_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\nvar ArticleCard = function(param) {\n    var article = param.article, className = param.className;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: (0,_shared_lib_classNames__WEBPACK_IMPORTED_MODULE_3__.classNames)((_article_card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ArticleCard), {}, [\n            className\n        ]),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n            scroll: true,\n            className: (_article_card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().Link),\n            href: \"/article/\".concat(article.id),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: (_article_card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().Img),\n                    src: \"https://www.aljazeera.com/wp-content/uploads/2021/06/2021-06-28T220439Z_2107545029_UP1EH6S1PBPB2_RTRMADP_3_SOCCER-EURO-FRA-SWI-REPORT.jpg\",\n                    alt: article.title\n                }, void 0, false, {\n                    fileName: \"/Users/ibrohim/Desktop/pentagol/src/entities/article-card/ui/article-card.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: (_article_card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().Title),\n                    children: article.title\n                }, void 0, false, {\n                    fileName: \"/Users/ibrohim/Desktop/pentagol/src/entities/article-card/ui/article-card.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_article_card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().Description),\n                    children: article.description\n                }, void 0, false, {\n                    fileName: \"/Users/ibrohim/Desktop/pentagol/src/entities/article-card/ui/article-card.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                    className: (_article_card_module_scss__WEBPACK_IMPORTED_MODULE_4___default().publishedAt),\n                    children: (0,_shared_lib_normalize_date__WEBPACK_IMPORTED_MODULE_2__.normalizeDate)(article.publishedAt)\n                }, void 0, false, {\n                    fileName: \"/Users/ibrohim/Desktop/pentagol/src/entities/article-card/ui/article-card.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/ibrohim/Desktop/pentagol/src/entities/article-card/ui/article-card.tsx\",\n            lineNumber: 19,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/ibrohim/Desktop/pentagol/src/entities/article-card/ui/article-card.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n};\n_c = ArticleCard;\nvar _c;\n$RefreshReg$(_c, \"ArticleCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZW50aXRpZXMvYXJ0aWNsZS1jYXJkL3VpL2FydGljbGUtY2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDNkI7QUFHK0I7QUFFUDtBQUVKO0FBTzFDLElBQU1JLGNBQW9DLGdCQUE0QjtRQUF6QkMsZ0JBQUFBLFNBQVNDLGtCQUFBQTtJQUMzRCxxQkFDRSw4REFBQ0Q7UUFBUUMsV0FBV0osa0VBQVVBLENBQUNDLDhFQUFtQixFQUFFLENBQUMsR0FBRztZQUFDRztTQUFVO2tCQUNqRSw0RUFBQ04sa0RBQUlBO1lBQUNPLE1BQU07WUFBQ0QsV0FBV0gsdUVBQVk7WUFBRUssTUFBTSxZQUF1QixPQUFYSCxRQUFRSSxFQUFFOzs4QkFDaEUsOERBQUNDO29CQUNDSixXQUFXSCxzRUFBVztvQkFDdEJTLEtBQ0U7b0JBRUZDLEtBQUtSLFFBQVFTLEtBQUs7Ozs7Ozs4QkFFcEIsOERBQUNDO29CQUFHVCxXQUFXSCx3RUFBYTs4QkFBR0UsUUFBUVMsS0FBSzs7Ozs7OzhCQUM1Qyw4REFBQ0c7b0JBQUVYLFdBQVdILDhFQUFtQjs4QkFBR0UsUUFBUWMsV0FBVzs7Ozs7OzhCQUN2RCw4REFBQ0M7b0JBQUtkLFdBQVdILDhFQUFtQjs4QkFDakNGLHlFQUFhQSxDQUFDSSxRQUFRZ0IsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLNUMsRUFBRTtLQW5CV2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9lbnRpdGllcy9hcnRpY2xlLWNhcmQvdWkvYXJ0aWNsZS1jYXJkLnRzeD80YmVmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmltcG9ydCB7IEFydGljbGVTY2hlbWEgfSBmcm9tIFwiQC9lbnRpdGllcy9hcnRpY2xlL21vZGVsL3R5cGVzXCI7XG5pbXBvcnQgeyBub3JtYWxpemVEYXRlIH0gZnJvbSBcIkAvc2hhcmVkL2xpYi9ub3JtYWxpemUtZGF0ZVwiO1xuXG5pbXBvcnQgeyBjbGFzc05hbWVzIH0gZnJvbSBcIkAvc2hhcmVkL2xpYi9jbGFzc05hbWVzXCI7XG5cbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2FydGljbGUtY2FyZC5tb2R1bGUuc2Nzc1wiO1xuXG5pbnRlcmZhY2UgQXJ0aWNsZUNhcmRQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgYXJ0aWNsZTogQXJ0aWNsZVNjaGVtYTtcbn1cblxuZXhwb3J0IGNvbnN0IEFydGljbGVDYXJkOiBGQzxBcnRpY2xlQ2FyZFByb3BzPiA9ICh7IGFydGljbGUsIGNsYXNzTmFtZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGFydGljbGUgY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMuQXJ0aWNsZUNhcmQsIHt9LCBbY2xhc3NOYW1lXSl9PlxuICAgICAgPExpbmsgc2Nyb2xsIGNsYXNzTmFtZT17Y2xhc3Nlcy5MaW5rfSBocmVmPXtgL2FydGljbGUvJHthcnRpY2xlLmlkfWB9PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLkltZ31cbiAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgXCJodHRwczovL3d3dy5hbGphemVlcmEuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIxLzA2LzIwMjEtMDYtMjhUMjIwNDM5Wl8yMTA3NTQ1MDI5X1VQMUVINlMxUEJQQjJfUlRSTUFEUF8zX1NPQ0NFUi1FVVJPLUZSQS1TV0ktUkVQT1JULmpwZ1wiXG4gICAgICAgICAgfVxuICAgICAgICAgIGFsdD17YXJ0aWNsZS50aXRsZX1cbiAgICAgICAgLz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT17Y2xhc3Nlcy5UaXRsZX0+e2FydGljbGUudGl0bGV9PC9oMz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtjbGFzc2VzLkRlc2NyaXB0aW9ufT57YXJ0aWNsZS5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgIDx0aW1lIGNsYXNzTmFtZT17Y2xhc3Nlcy5wdWJsaXNoZWRBdH0+XG4gICAgICAgICAge25vcm1hbGl6ZURhdGUoYXJ0aWNsZS5wdWJsaXNoZWRBdCl9XG4gICAgICAgIDwvdGltZT5cbiAgICAgIDwvTGluaz5cbiAgICA8L2FydGljbGU+XG4gICk7XG59O1xuIl0sIm5hbWVzIjpbIkxpbmsiLCJub3JtYWxpemVEYXRlIiwiY2xhc3NOYW1lcyIsImNsYXNzZXMiLCJBcnRpY2xlQ2FyZCIsImFydGljbGUiLCJjbGFzc05hbWUiLCJzY3JvbGwiLCJocmVmIiwiaWQiLCJpbWciLCJJbWciLCJzcmMiLCJhbHQiLCJ0aXRsZSIsImgzIiwiVGl0bGUiLCJwIiwiRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsInRpbWUiLCJwdWJsaXNoZWRBdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/entities/article-card/ui/article-card.tsx\n"));

/***/ })

});