"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_object_spread */ \"./node_modules/@swc/helpers/esm/_object_spread.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-progress */ \"./node_modules/next-progress/dist/index.js\");\n/* harmony import */ var _app_providers_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/app/providers/theme */ \"./src/app/providers/theme/index.ts\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/main.scss */ \"./styles/main.scss\");\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/layout */ \"./src/app/layout.tsx\");\n\n\n\n\n\n\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_providers_theme__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_progress__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                height: 3,\n                delay: 300,\n                color: \"var(--green-3)\"\n            }, void 0, false, {\n                fileName: \"/Users/ibrohim/Desktop/pentagol/pages/_app.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            Component.getLayout ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_5__._)({}, pageProps), void 0, false, {\n                fileName: \"/Users/ibrohim/Desktop/pentagol/pages/_app.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_layout__WEBPACK_IMPORTED_MODULE_4__.Layout, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, (0,_swc_helpers_object_spread__WEBPACK_IMPORTED_MODULE_5__._)({}, pageProps), void 0, false, {\n                    fileName: \"/Users/ibrohim/Desktop/pentagol/pages/_app.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 18\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/ibrohim/Desktop/pentagol/pages/_app.tsx\",\n                lineNumber: 31,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ibrohim/Desktop/pentagol/pages/_app.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUt5QztBQUdhO0FBR3pCO0FBQ1M7QUFXdEMsU0FBU0csTUFBTSxLQUE0QyxFQUFFO1FBQTVDQyxZQUFGLE1BQUVBLFdBQVdDLFlBQWIsTUFBYUE7SUFDMUIscUJBQ0UsOERBQUNKLCtEQUFhQTs7MEJBQ1osOERBQUNELHFEQUFZQTtnQkFBQ00sUUFBUTtnQkFBR0MsT0FBTztnQkFBS0MsT0FBTTs7Ozs7O1lBQzFDSixVQUFVSyxTQUFTLGlCQUNsQiw4REFBQ0wsV0FBQUEsNkRBQUFBLEtBQWNDOzs7O3FDQUVmLDhEQUFDSCwrQ0FBTUE7MEJBQUUsNEVBQUNFLFdBQUFBLDZEQUFBQSxLQUFjQzs7Ozs7Ozs7O29CQUN6Qjs7Ozs7OztBQUdQO0tBWFNGO0FBYVQsK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZWFjdEVsZW1lbnQsIFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gXCJuZXh0L2FwcFwiO1xuXG5pbXBvcnQgTmV4dFByb2dyZXNzIGZyb20gXCJuZXh0LXByb2dyZXNzXCI7XG5cbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tIFwiQC9hcHAvcHJvdmlkZXJzL3N0b3JlXCI7XG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkAvYXBwL3Byb3ZpZGVycy90aGVtZVwiO1xuaW1wb3J0IHsgVGhlbWUgfSBmcm9tIFwiQC9zaGFyZWQvY29uZmlnL3RoZW1lXCI7XG5cbmltcG9ydCBcIi4uL3N0eWxlcy9tYWluLnNjc3NcIjtcbmltcG9ydCB7IExheW91dCB9IGZyb20gXCJAL2FwcC9sYXlvdXRcIjtcblxuZXhwb3J0IHR5cGUgTmV4dFBhZ2VXaXRoTGF5b3V0PFAgPSB7fSwgSVAgPSBQPiA9IE5leHRQYWdlPFAsIElQPiAmIHtcbiAgZ2V0TGF5b3V0PzogKHBhZ2U6IFJlYWN0RWxlbWVudCkgPT4gUmVhY3ROb2RlO1xufTtcblxuaW50ZXJmYWNlIEFwcFByb3BzV2l0aExheW91dCBleHRlbmRzIEFwcFByb3BzIHtcbiAgdGhlbWU/OiBUaGVtZTtcbiAgQ29tcG9uZW50OiBOZXh0UGFnZVdpdGhMYXlvdXQ7XG59XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHNXaXRoTGF5b3V0KSB7XG4gIHJldHVybiAoXG4gICAgPFRoZW1lUHJvdmlkZXI+XG4gICAgICA8TmV4dFByb2dyZXNzIGhlaWdodD17M30gZGVsYXk9ezMwMH0gY29sb3I9XCJ2YXIoLS1ncmVlbi0zKVwiIC8+XG4gICAgICB7Q29tcG9uZW50LmdldExheW91dCA/IChcbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPExheW91dD57PENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPn08L0xheW91dD5cbiAgICAgICl9XG4gICAgPC9UaGVtZVByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcbiJdLCJuYW1lcyI6WyJOZXh0UHJvZ3Jlc3MiLCJUaGVtZVByb3ZpZGVyIiwiTGF5b3V0IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJoZWlnaHQiLCJkZWxheSIsImNvbG9yIiwiZ2V0TGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n"));

/***/ })

});