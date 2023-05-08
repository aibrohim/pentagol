"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"nextAuthOptions\": () => (/* binding */ nextAuthOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst nextAuthOptions = {\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            credentials: {},\n            async authorize (credentials) {\n                const { email , password  } = credentials;\n                try {\n                    const res = await fetch(\"http://localhost:8080/login\", {\n                        method: \"POST\",\n                        body: JSON.stringify({\n                            email,\n                            password\n                        }),\n                        headers: {\n                            \"Content-Type\": \"application/json\"\n                        }\n                    });\n                    const user = await res.json();\n                    if (user) {\n                        return user.user;\n                    } else {\n                        return null;\n                    }\n                } catch (error) {\n                    return;\n                }\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/auth/login\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(nextAuthOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFzRDtBQUNZO0FBRTNELE1BQU1FLGtCQUFtQztJQUM5Q0MsV0FBVztRQUNURixzRUFBbUJBLENBQUM7WUFDbEJHLGFBQWEsQ0FBQztZQUNkLE1BQU1DLFdBQVVELFdBQVcsRUFBRTtnQkFDM0IsTUFBTSxFQUFFRSxNQUFLLEVBQUVDLFNBQVEsRUFBRSxHQUFHSDtnQkFJNUIsSUFBSTtvQkFDRixNQUFNSSxNQUFNLE1BQU1DLE1BQU0sK0JBQStCO3dCQUNyREMsUUFBUTt3QkFDUkMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDOzRCQUNuQlA7NEJBQ0FDO3dCQUNGO3dCQUNBTyxTQUFTOzRCQUNQLGdCQUFnQjt3QkFDbEI7b0JBQ0Y7b0JBRUEsTUFBTUMsT0FBTyxNQUFNUCxJQUFJUSxJQUFJO29CQUUzQixJQUFJRCxNQUFNO3dCQUNSLE9BQU9BLEtBQUtBLElBQUk7b0JBQ2xCLE9BQU87d0JBQ0wsT0FBTyxJQUFJO29CQUNiLENBQUM7Z0JBQ0gsRUFBRSxPQUFPRSxPQUFPO29CQUNkO2dCQUNGO1lBQ0Y7UUFDRjtLQUNEO0lBQ0RDLFNBQVM7UUFDUEMsVUFBVTtJQUNaO0lBQ0FDLE9BQU87UUFDTEMsUUFBUTtJQUNWO0FBQ0YsRUFBRTtBQUVGLGlFQUFlckIsZ0RBQVFBLENBQUNFLGdCQUFnQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BlbnRhZ29sLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz8yZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCwgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuXG5leHBvcnQgY29uc3QgbmV4dEF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgY3JlZGVudGlhbHM6IHt9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkIH0gPSBjcmVkZW50aWFscyBhcyBSZWNvcmQ8XG4gICAgICAgICAgXCJlbWFpbFwiIHwgXCJwYXNzd29yZFwiLFxuICAgICAgICAgIHN0cmluZ1xuICAgICAgICA+O1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2xvZ2luXCIsIHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgICAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgICAgICByZXR1cm4gdXNlci51c2VyO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6IFwiand0XCIsXG4gIH0sXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiBcIi9hdXRoL2xvZ2luXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChuZXh0QXV0aE9wdGlvbnMpO1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsIm5leHRBdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImNyZWRlbnRpYWxzIiwiYXV0aG9yaXplIiwiZW1haWwiLCJwYXNzd29yZCIsInJlcyIsImZldGNoIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJoZWFkZXJzIiwidXNlciIsImpzb24iLCJlcnJvciIsInNlc3Npb24iLCJzdHJhdGVneSIsInBhZ2VzIiwic2lnbkluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();