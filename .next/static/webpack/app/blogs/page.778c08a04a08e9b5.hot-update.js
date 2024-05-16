"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/blogs/page",{

/***/ "(app-pages-browser)/./src/components/blogs/blog-list/index.tsx":
/*!**************************************************!*\
  !*** ./src/components/blogs/blog-list/index.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BlogList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _single_blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../single-blog */ \"(app-pages-browser)/./src/components/blogs/single-blog/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _category_errorPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../category/errorPage */ \"(app-pages-browser)/./src/components/category/errorPage.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction BlogList(param) {\n    let { lists } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    if (!lists) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_category_errorPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n            fileName: \"/home/leonidas/SimpleBlogManager/src/components/blogs/blog-list/index.tsx\",\n            lineNumber: 14,\n            columnNumber: 12\n        }, this);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        router.refresh();\n    }, []);\n    async function handleDelete(id) {\n        console.log(id);\n        const res = await fetch(\"/api/blog-post/delete-post?id=\".concat(id), {\n            method: \"DELETE\",\n            cache: \"no-store\"\n        });\n        const data = await res.json();\n        if (data && data.success) router.refresh();\n    }\n    async function handleEdit(id) {\n        console.log(id);\n    // const res = await fetch(`/api/blog-post/edit-post?id=${id}`, {\n    //   method: \"PUT\",\n    //   cache: \"no-store\",\n    // });\n    // const data = await res.json();\n    // if (data && data.success) router.refresh();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"pt-[120px] pb-[120px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"-mx-4 grid grid-cols-3 gap-2\",\n                children: lists && lists.length ? lists.map((listItem)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"px-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_single_blog__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                handleDelete: handleDelete,\n                                blogItem: listItem,\n                                handleEdit: function(id) {\n                                    throw new Error(\"Function not implemented.\");\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/leonidas/SimpleBlogManager/src/components/blogs/blog-list/index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 19\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_single_blog__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                handleEdit: handleEdit,\n                                blogItem: listItem,\n                                handleDelete: function(id) {\n                                    throw new Error(\"Function not implemented.\");\n                                }\n                            }, void 0, false, {\n                                fileName: \"/home/leonidas/SimpleBlogManager/src/components/blogs/blog-list/index.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 19\n                            }, this)\n                        ]\n                    }, listItem.id, true, {\n                        fileName: \"/home/leonidas/SimpleBlogManager/src/components/blogs/blog-list/index.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this)) : null\n            }, void 0, false, {\n                fileName: \"/home/leonidas/SimpleBlogManager/src/components/blogs/blog-list/index.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/leonidas/SimpleBlogManager/src/components/blogs/blog-list/index.tsx\",\n            lineNumber: 47,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/leonidas/SimpleBlogManager/src/components/blogs/blog-list/index.tsx\",\n        lineNumber: 46,\n        columnNumber: 5\n    }, this);\n}\n_s(BlogList, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = BlogList;\nvar _c;\n$RefreshReg$(_c, \"BlogList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2Jsb2dzL2Jsb2ctbGlzdC9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUd3QztBQUNOO0FBQ1U7QUFDWTtBQUd6QyxTQUFTSSxTQUFTLEtBQTRCO1FBQTVCLEVBQUVDLEtBQUssRUFBcUIsR0FBNUI7O0lBQy9CLE1BQU1DLFNBQVNKLDBEQUFTQTtJQUN4QixJQUFJLENBQUNHLE9BQ0w7UUFDRSxxQkFBTyw4REFBQ0YsMkRBQWdCQTs7Ozs7SUFDMUI7SUFDQUYsZ0RBQVNBLENBQUM7UUFDUkssT0FBT0MsT0FBTztJQUNoQixHQUFHLEVBQUU7SUFFTCxlQUFlQyxhQUFhQyxFQUFVO1FBQ3BDQyxRQUFRQyxHQUFHLENBQUNGO1FBRVosTUFBTUcsTUFBTSxNQUFNQyxNQUFNLGlDQUFvQyxPQUFISixLQUFNO1lBQzdESyxRQUFRO1lBQ1JDLE9BQU87UUFDVDtRQUVBLE1BQU1DLE9BQU8sTUFBTUosSUFBSUssSUFBSTtRQUUzQixJQUFJRCxRQUFRQSxLQUFLRSxPQUFPLEVBQUVaLE9BQU9DLE9BQU87SUFDMUM7SUFDQSxlQUFlWSxXQUFXVixFQUFVO1FBQ2xDQyxRQUFRQyxHQUFHLENBQUNGO0lBRVosaUVBQWlFO0lBQ2pFLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsTUFBTTtJQUVOLGlDQUFpQztJQUVqQyw4Q0FBOEM7SUFDaEQ7SUFFQSxxQkFDRSw4REFBQ1c7UUFBUUMsV0FBVTtrQkFDakIsNEVBQUNDO1lBQUlELFdBQVU7c0JBQ2IsNEVBQUNDO2dCQUFJRCxXQUFVOzBCQUNaaEIsU0FBU0EsTUFBTWtCLE1BQU0sR0FDbEJsQixNQUFNbUIsR0FBRyxDQUFDLENBQUNDLHlCQUNULDhEQUFDSDt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNyQixvREFBVUE7Z0NBQUNRLGNBQWNBO2dDQUFja0IsVUFBVUQ7Z0NBQVVOLFlBQVksU0FBVVYsRUFBVTtvQ0FDNUYsTUFBTSxJQUFJa0IsTUFBTTtnQ0FDbEI7Ozs7OzswQ0FDRSw4REFBQzNCLG9EQUFVQTtnQ0FBQ21CLFlBQVlBO2dDQUFZTyxVQUFVRDtnQ0FBVWpCLGNBQWMsU0FBVUMsRUFBVTtvQ0FDMUYsTUFBTSxJQUFJa0IsTUFBTTtnQ0FDbEI7Ozs7Ozs7dUJBTjJCRixTQUFTaEIsRUFBRTs7OztnQ0FVeEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLZDtHQXhEd0JMOztRQUNQRixzREFBU0E7OztLQURGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9ibG9ncy9ibG9nLWxpc3QvaW5kZXgudHN4PzY0ZTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IEJsb2cgfSBmcm9tIFwiQC91dGlscy90eXBlc1wiO1xuaW1wb3J0IFNpbmdsZUJsb2cgZnJvbSBcIi4uL3NpbmdsZS1ibG9nXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBOb0Jsb2dzQXZhaWxhYmxlIGZyb20gXCIuLi8uLi9jYXRlZ29yeS9lcnJvclBhZ2VcIjtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCbG9nTGlzdCh7IGxpc3RzIH06IHsgbGlzdHM6IEJsb2dbXSB9KSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBpZiAoIWxpc3RzKVxuICB7XG4gICAgcmV0dXJuIDxOb0Jsb2dzQXZhaWxhYmxlIC8+O1xuICB9XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcm91dGVyLnJlZnJlc2goKTtcbiAgfSwgW10pO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZURlbGV0ZShpZDogbnVtYmVyKSB7XG4gICAgY29uc29sZS5sb2coaWQpO1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYC9hcGkvYmxvZy1wb3N0L2RlbGV0ZS1wb3N0P2lkPSR7aWR9YCwge1xuICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgY2FjaGU6IFwibm8tc3RvcmVcIixcbiAgICB9KTtcblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgaWYgKGRhdGEgJiYgZGF0YS5zdWNjZXNzKSByb3V0ZXIucmVmcmVzaCgpO1xuICB9XG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZUVkaXQoaWQ6IG51bWJlcikge1xuICAgIGNvbnNvbGUubG9nKGlkKTtcblxuICAgIC8vIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAvYXBpL2Jsb2ctcG9zdC9lZGl0LXBvc3Q/aWQ9JHtpZH1gLCB7XG4gICAgLy8gICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgLy8gICBjYWNoZTogXCJuby1zdG9yZVwiLFxuICAgIC8vIH0pO1xuXG4gICAgLy8gY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICAvLyBpZiAoZGF0YSAmJiBkYXRhLnN1Y2Nlc3MpIHJvdXRlci5yZWZyZXNoKCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInB0LVsxMjBweF0gcGItWzEyMHB4XVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCItbXgtNCBncmlkIGdyaWQtY29scy0zIGdhcC0yXCI+XG4gICAgICAgICAge2xpc3RzICYmIGxpc3RzLmxlbmd0aFxuICAgICAgICAgICAgPyBsaXN0cy5tYXAoKGxpc3RJdGVtOiBCbG9nKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00XCIga2V5PXtsaXN0SXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgICA8U2luZ2xlQmxvZyBoYW5kbGVEZWxldGU9e2hhbmRsZURlbGV0ZX0gYmxvZ0l0ZW09e2xpc3RJdGVtfSBoYW5kbGVFZGl0PXtmdW5jdGlvbiAoaWQ6IG51bWJlcik6IHt9IHtcbiAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkZ1bmN0aW9uIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gICAgICAgICAgICAgICAgfSB9IC8+XG4gICAgICAgICAgICAgICAgICA8U2luZ2xlQmxvZyBoYW5kbGVFZGl0PXtoYW5kbGVFZGl0fSBibG9nSXRlbT17bGlzdEl0ZW19IGhhbmRsZURlbGV0ZT17ZnVuY3Rpb24gKGlkOiBudW1iZXIpOiB7fSB7XG4gICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGdW5jdGlvbiBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICAgICAgICAgICAgICAgIH0gfSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJTaW5nbGVCbG9nIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiTm9CbG9nc0F2YWlsYWJsZSIsIkJsb2dMaXN0IiwibGlzdHMiLCJyb3V0ZXIiLCJyZWZyZXNoIiwiaGFuZGxlRGVsZXRlIiwiaWQiLCJjb25zb2xlIiwibG9nIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJjYWNoZSIsImRhdGEiLCJqc29uIiwic3VjY2VzcyIsImhhbmRsZUVkaXQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwiZGl2IiwibGVuZ3RoIiwibWFwIiwibGlzdEl0ZW0iLCJibG9nSXRlbSIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/blogs/blog-list/index.tsx\n"));

/***/ })

});