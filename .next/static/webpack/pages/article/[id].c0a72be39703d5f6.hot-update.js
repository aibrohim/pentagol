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

/***/ "./src/widgets/article-info/model/services/articleDetailsApi.ts":
/*!**********************************************************************!*\
  !*** ./src/widgets/article-info/model/services/articleDetailsApi.ts ***!
  \**********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"articleDetailsApi\": function() { return /* binding */ articleDetailsApi; },\n/* harmony export */   \"useGetArticleInfoQuery\": function() { return /* binding */ useGetArticleInfoQuery; }\n/* harmony export */ });\n/* harmony import */ var _app_providers_store_config_configureApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/providers/store/config/configureApi */ \"./src/app/providers/store/config/configureApi.ts\");\n\nvar articleDetailsApi = _app_providers_store_config_configureApi__WEBPACK_IMPORTED_MODULE_0__.baseApi.injectEndpoints({\n    endpoints: function(builder) {\n        return {\n            getArticleInfo: builder.query({\n                query: function(id) {\n                    return \"articles/\" + id;\n                }\n            })\n        };\n    }\n});\nvar useGetArticleInfoQuery = articleDetailsApi.useGetArticleInfoQuery;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2lkZ2V0cy9hcnRpY2xlLWluZm8vbW9kZWwvc2VydmljZXMvYXJ0aWNsZURldGFpbHNBcGkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW9FO0FBRzdELElBQU1DLG9CQUFvQkQsNkZBQXVCLENBQUM7SUFDdkRHLFdBQVcsU0FBQ0M7ZUFBYTtZQUN2QkMsZ0JBQWdCRCxRQUFRRSxLQUFLLENBQStCO2dCQUMxREEsT0FBTyxTQUFDQzsyQkFBTyxjQUFjQTs7WUFDL0I7UUFDRjs7QUFDRixHQUFHO0FBRUksSUFBTSx5QkFBNkJOLGtCQUEzQk8sdUJBQTZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy93aWRnZXRzL2FydGljbGUtaW5mby9tb2RlbC9zZXJ2aWNlcy9hcnRpY2xlRGV0YWlsc0FwaS50cz8yMjM0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJhc2VBcGkgfSBmcm9tIFwiQC9hcHAvcHJvdmlkZXJzL3N0b3JlL2NvbmZpZy9jb25maWd1cmVBcGlcIjtcbmltcG9ydCB7IEFydGljbGVTY2hlbWEgfSBmcm9tIFwiQC9lbnRpdGllcy9hcnRpY2xlXCI7XG5cbmV4cG9ydCBjb25zdCBhcnRpY2xlRGV0YWlsc0FwaSA9IGJhc2VBcGkuaW5qZWN0RW5kcG9pbnRzKHtcbiAgZW5kcG9pbnRzOiAoYnVpbGRlcikgPT4gKHtcbiAgICBnZXRBcnRpY2xlSW5mbzogYnVpbGRlci5xdWVyeTxBcnRpY2xlU2NoZW1hLCBudW1iZXIgfCBudWxsPih7XG4gICAgICBxdWVyeTogKGlkKSA9PiBcImFydGljbGVzL1wiICsgaWQsXG4gICAgfSksXG4gIH0pLFxufSk7XG5cbmV4cG9ydCBjb25zdCB7IHVzZUdldEFydGljbGVJbmZvUXVlcnkgfSA9IGFydGljbGVEZXRhaWxzQXBpO1xuIl0sIm5hbWVzIjpbImJhc2VBcGkiLCJhcnRpY2xlRGV0YWlsc0FwaSIsImluamVjdEVuZHBvaW50cyIsImVuZHBvaW50cyIsImJ1aWxkZXIiLCJnZXRBcnRpY2xlSW5mbyIsInF1ZXJ5IiwiaWQiLCJ1c2VHZXRBcnRpY2xlSW5mb1F1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/widgets/article-info/model/services/articleDetailsApi.ts\n"));

/***/ }),

/***/ "./src/widgets/article-info/model/services/index.ts":
/*!**********************************************************!*\
  !*** ./src/widgets/article-info/model/services/index.ts ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _articleDetailsApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./articleDetailsApi */ \"./src/widgets/article-info/model/services/articleDetailsApi.ts\");\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _articleDetailsApi__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = function(key) { return _articleDetailsApi__WEBPACK_IMPORTED_MODULE_0__[key]; }.bind(0, __WEBPACK_IMPORT_KEY__)\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2lkZ2V0cy9hcnRpY2xlLWluZm8vbW9kZWwvc2VydmljZXMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBb0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3dpZGdldHMvYXJ0aWNsZS1pbmZvL21vZGVsL3NlcnZpY2VzL2luZGV4LnRzPzUxNGYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0ICogZnJvbSBcIi4vYXJ0aWNsZURldGFpbHNBcGlcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/widgets/article-info/model/services/index.ts\n"));

/***/ }),

/***/ "./src/widgets/article-info/ui/article-info.tsx":
/*!******************************************************!*\
  !*** ./src/widgets/article-info/ui/article-info.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ArticleInfo\": function() { return /* binding */ ArticleInfo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shared_lib_classNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/lib/classNames */ \"./src/shared/lib/classNames/index.ts\");\n/* harmony import */ var _shared_lib_normalize_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/lib/normalize-date */ \"./src/shared/lib/normalize-date/index.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _model_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model/services */ \"./src/widgets/article-info/model/services/index.ts\");\n/* harmony import */ var _article_info_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article-info.module.scss */ \"./src/widgets/article-info/ui/article-info.module.scss\");\n/* harmony import */ var _article_info_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_article_info_module_scss__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar ArticleInfo = function(param) {\n    var className = param.className;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    var id = router.query.id;\n    var _useGetArticleInfoQuery = (0,_model_services__WEBPACK_IMPORTED_MODULE_4__.useGetArticleInfoQuery)(id ? +id : null), articleDetails = _useGetArticleInfoQuery.data, error = _useGetArticleInfoQuery.error;\n    if (error === null || error === void 0 ? void 0 : error.error) return error === null || error === void 0 ? void 0 : error.error;\n    if (!articleDetails) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (0,_shared_lib_classNames__WEBPACK_IMPORTED_MODULE_1__.classNames)((_article_info_module_scss__WEBPACK_IMPORTED_MODULE_5___default().ArticleInfo), {}, [\n            className\n        ]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"time\", {\n                className: (_article_info_module_scss__WEBPACK_IMPORTED_MODULE_5___default().Time),\n                children: (0,_shared_lib_normalize_date__WEBPACK_IMPORTED_MODULE_2__.normalizeDate)(articleDetails.publishedAt)\n            }, void 0, false, {\n                fileName: \"/Users/ibrohim/Desktop/pentagol/src/widgets/article-info/ui/article-info.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_article_info_module_scss__WEBPACK_IMPORTED_MODULE_5___default().Title),\n                children: articleDetails.title\n            }, void 0, false, {\n                fileName: \"/Users/ibrohim/Desktop/pentagol/src/widgets/article-info/ui/article-info.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_article_info_module_scss__WEBPACK_IMPORTED_MODULE_5___default().Description),\n                children: articleDetails.description\n            }, void 0, false, {\n                fileName: \"/Users/ibrohim/Desktop/pentagol/src/widgets/article-info/ui/article-info.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: (_article_info_module_scss__WEBPACK_IMPORTED_MODULE_5___default().Img),\n                src: \"https://www.aljazeera.com/wp-content/uploads/2021/06/2021-06-28T220439Z_2107545029_UP1EH6S1PBPB2_RTRMADP_3_SOCCER-EURO-FRA-SWI-REPORT.jpg\",\n                alt: articleDetails.title\n            }, void 0, false, {\n                fileName: \"/Users/ibrohim/Desktop/pentagol/src/widgets/article-info/ui/article-info.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_article_info_module_scss__WEBPACK_IMPORTED_MODULE_5___default().Body),\n                children: articleDetails.body\n            }, void 0, false, {\n                fileName: \"/Users/ibrohim/Desktop/pentagol/src/widgets/article-info/ui/article-info.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ibrohim/Desktop/pentagol/src/widgets/article-info/ui/article-info.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, _this);\n};\n_s(ArticleInfo, \"ZRN/+7+jDqevmSJ4xRjYJCq51YQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        _model_services__WEBPACK_IMPORTED_MODULE_4__.useGetArticleInfoQuery\n    ];\n});\n_c = ArticleInfo;\nvar _c;\n$RefreshReg$(_c, \"ArticleInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvd2lkZ2V0cy9hcnRpY2xlLWluZm8vdWkvYXJ0aWNsZS1pbmZvLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ087QUFDcEI7QUFFbUI7QUFDVjtBQU0xQyxJQUFNSyxjQUFvQyxnQkFBbUI7UUFBaEJDLGtCQUFBQTs7SUFDbEQsSUFBTUMsU0FBU0wsc0RBQVNBO0lBQ3hCLElBQU0sS0FBU0ssT0FBT0UsS0FBSyxDQUFuQkQ7SUFFUixJQUF3Q0wsMEJBQUFBLHVFQUFzQkEsQ0FDNURLLEtBQUssQ0FBQ0EsS0FBSyxJQUFJLEdBRFRFLGlCQUFnQ1Asd0JBQWhDTyxNQUFzQkUsUUFBVVQsd0JBQVZTO0lBSTlCLElBQUlBLGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsTUFBT0EsS0FBSyxFQUFFLE9BQU9BLGtCQUFBQSxtQkFBQUEsS0FBQUEsSUFBQUEsTUFBT0EsS0FBSztJQUNyQyxJQUFJLENBQUNELGdCQUFnQixPQUFPLElBQUk7SUFFaEMscUJBQ0UsOERBQUNFO1FBQVFQLFdBQVdOLGtFQUFVQSxDQUFDSSw4RUFBbUIsRUFBRSxDQUFDLEdBQUc7WUFBQ0U7U0FBVTs7MEJBQ2pFLDhEQUFDUTtnQkFBS1IsV0FBV0YsdUVBQVk7MEJBQzFCSCx5RUFBYUEsQ0FBQ1UsZUFBZUssV0FBVzs7Ozs7OzBCQUUzQyw4REFBQ0M7Z0JBQUdYLFdBQVdGLHdFQUFhOzBCQUFHTyxlQUFlUSxLQUFLOzs7Ozs7MEJBQ25ELDhEQUFDQztnQkFBRWQsV0FBV0YsOEVBQW1COzBCQUFHTyxlQUFlVyxXQUFXOzs7Ozs7MEJBRTlELDhEQUFDQztnQkFDQ2pCLFdBQVdGLHNFQUFXO2dCQUN0QnFCLEtBQ0U7Z0JBRUZDLEtBQUtmLGVBQWVRLEtBQUs7Ozs7OzswQkFHM0IsOERBQUNDO2dCQUFFZCxXQUFXRix1RUFBWTswQkFBR08sZUFBZWlCLElBQUk7Ozs7Ozs7Ozs7OztBQUd0RCxFQUFFO0dBOUJXdkI7O1FBQ0lILGtEQUFTQTtRQUdnQkMsbUVBQXNCQTs7O0tBSm5ERSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvd2lkZ2V0cy9hcnRpY2xlLWluZm8vdWkvYXJ0aWNsZS1pbmZvLnRzeD9lNjVkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsYXNzTmFtZXMgfSBmcm9tIFwiQC9zaGFyZWQvbGliL2NsYXNzTmFtZXNcIjtcbmltcG9ydCB7IG5vcm1hbGl6ZURhdGUgfSBmcm9tIFwiQC9zaGFyZWQvbGliL25vcm1hbGl6ZS1kYXRlXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VHZXRBcnRpY2xlSW5mb1F1ZXJ5IH0gZnJvbSBcIi4uL21vZGVsL3NlcnZpY2VzXCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9hcnRpY2xlLWluZm8ubW9kdWxlLnNjc3NcIjtcblxuaW50ZXJmYWNlIEFydGljbGVJbmZvUHJvcHMge1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBBcnRpY2xlSW5mbzogRkM8QXJ0aWNsZUluZm9Qcm9wcz4gPSAoeyBjbGFzc05hbWUgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIGNvbnN0IHsgZGF0YTogYXJ0aWNsZURldGFpbHMsIGVycm9yIH0gPSB1c2VHZXRBcnRpY2xlSW5mb1F1ZXJ5KFxuICAgIGlkID8gK2lkIDogbnVsbFxuICApO1xuXG4gIGlmIChlcnJvcj8uZXJyb3IpIHJldHVybiBlcnJvcj8uZXJyb3I7XG4gIGlmICghYXJ0aWNsZURldGFpbHMpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMuQXJ0aWNsZUluZm8sIHt9LCBbY2xhc3NOYW1lXSl9PlxuICAgICAgPHRpbWUgY2xhc3NOYW1lPXtjbGFzc2VzLlRpbWV9PlxuICAgICAgICB7bm9ybWFsaXplRGF0ZShhcnRpY2xlRGV0YWlscy5wdWJsaXNoZWRBdCl9XG4gICAgICA8L3RpbWU+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLlRpdGxlfT57YXJ0aWNsZURldGFpbHMudGl0bGV9PC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT17Y2xhc3Nlcy5EZXNjcmlwdGlvbn0+e2FydGljbGVEZXRhaWxzLmRlc2NyaXB0aW9ufTwvcD5cblxuICAgICAgPGltZ1xuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuSW1nfVxuICAgICAgICBzcmM9e1xuICAgICAgICAgIFwiaHR0cHM6Ly93d3cuYWxqYXplZXJhLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMS8wNi8yMDIxLTA2LTI4VDIyMDQzOVpfMjEwNzU0NTAyOV9VUDFFSDZTMVBCUEIyX1JUUk1BRFBfM19TT0NDRVItRVVSTy1GUkEtU1dJLVJFUE9SVC5qcGdcIlxuICAgICAgICB9XG4gICAgICAgIGFsdD17YXJ0aWNsZURldGFpbHMudGl0bGV9XG4gICAgICAvPlxuXG4gICAgICA8cCBjbGFzc05hbWU9e2NsYXNzZXMuQm9keX0+e2FydGljbGVEZXRhaWxzLmJvZHl9PC9wPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiY2xhc3NOYW1lcyIsIm5vcm1hbGl6ZURhdGUiLCJ1c2VSb3V0ZXIiLCJ1c2VHZXRBcnRpY2xlSW5mb1F1ZXJ5IiwiY2xhc3NlcyIsIkFydGljbGVJbmZvIiwiY2xhc3NOYW1lIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsImRhdGEiLCJhcnRpY2xlRGV0YWlscyIsImVycm9yIiwic2VjdGlvbiIsInRpbWUiLCJUaW1lIiwicHVibGlzaGVkQXQiLCJoMSIsIlRpdGxlIiwidGl0bGUiLCJwIiwiRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsImltZyIsIkltZyIsInNyYyIsImFsdCIsIkJvZHkiLCJib2R5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/widgets/article-info/ui/article-info.tsx\n"));

/***/ })

});