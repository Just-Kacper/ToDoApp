"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/main",{

/***/ "./src/pages/main.js":
/*!***************************!*\
  !*** ./src/pages/main.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var _swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_to_consumable_array */ \"./node_modules/@swc/helpers/esm/_to_consumable_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/index.module.css */ \"./src/styles/index.module.css\");\n/* harmony import */ var _styles_index_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\n\n\nfunction NewPage() {\n    var _this = this;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), 2), tasks = _useState[0], setTasks = _useState[1];\n    var _useState1 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), newTask = _useState1[0], setNewTask = _useState1[1];\n    var _useState2 = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_3__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), showModal = _useState2[0], setShowModal = _useState2[1];\n    var handleAddTask = function() {\n        if (newTask.trim() !== \"\") {\n            setTasks((0,_swc_helpers_to_consumable_array__WEBPACK_IMPORTED_MODULE_4__._)(tasks).concat([\n                newTask\n            ]));\n            setNewTask(\"\");\n            setShowModal(false);\n        }\n    };\n    var handleRemoveTask = function() {\n        var updatedTask = tasks.filter(function(_, index) {\n            return index !== indexToRemove;\n        });\n        setTasks(updatedTasks);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mainboard flex min-h-screen font-body text-white bg-gray-50\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-72 p-4 bg-indigo-600 flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"p-4 text-3xl font-bold text-center bg-vision rounded-md\",\n                        children: \"Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex-1 flex items-center justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: \"flex flex-col items-center w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"mb-5 w-full text-xl font-medium\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"p-4 w-full bg-indigo-400 rounded hover:bg-indigo-500 transition duration:300\",\n                                        onClick: function() {\n                                            return setShowModal(true);\n                                        },\n                                        children: \"Add Task\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, this),\n                                showModal && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-white p-8 rounded shadow-md max-w-md\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                                className: \"text-xl font-bold mb-4\",\n                                                children: \"Add Task\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                                                lineNumber: 43,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                type: \"text\",\n                                                className: \"w-full border border-gray-300 text-black rounded px-3 py-2 mb-4\",\n                                                placeholder: \"Enter task\",\n                                                value: newTask,\n                                                onChange: function(e) {\n                                                    return setNewTask(e.target.value);\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"flex justify-end\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        className: \"px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500\",\n                                                        onClick: handleAddTask,\n                                                        children: \"Add\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                                                        lineNumber: 52,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        className: \"ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-200\",\n                                                        onClick: function() {\n                                                            return setShowModal(false);\n                                                        },\n                                                        children: \"Cancel\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                                                        lineNumber: 58,\n                                                        columnNumber: 21\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                                                lineNumber: 51,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center items-end p-8 bg-vision rounded-md\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"mb-4\",\n                                        children: \"Important Tasks:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"mb-4\",\n                                        children: \"Today's Tasks:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"mb-4\",\n                                        children: \"Completed Tasks:\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"p-4 text-center text-3xl font-bold mb-4 bg-vision rounded-md\",\n                        children: \"Tasks\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-4 grid-rows-3 gap-12 p-4 text-center text-black\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \" border border-1 border-amber-400\",\n                                children: tasks.map(function(task, index) {\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"p-4\",\n                                        children: task\n                                    }, index, false, {\n                                        fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                                        lineNumber: 93,\n                                        columnNumber: 15\n                                    }, _this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                                lineNumber: 91,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \" border border-1 border-amber-400\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"p-4\",\n                                    children: \"Yes\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                                lineNumber: 99,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \" border border-1 border-amber-400\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"p-4 \",\n                                    children: \"Yes\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                                    lineNumber: 103,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                                lineNumber: 102,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \" border border-1 border-amber-400\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"p-4 \",\n                                    children: \"Yes\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                                    lineNumber: 106,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                                lineNumber: 105,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\kakao.DESKTOP-T6ENPS1\\\\Desktop\\\\todo-app\\\\src\\\\pages\\\\main.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(NewPage, \"DdCn9gEHH+sbXWtJCjrKmpoh7u0=\");\n_c = NewPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewPage);\nvar _c;\n$RefreshReg$(_c, \"NewPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztHQTVHU2pCO0tBQUFBO0FBOEdULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9tYWluLmpzPzY0YTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL2luZGV4Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmZ1bmN0aW9uIE5ld1BhZ2UoKSB7XHJcbiAgY29uc3QgW3Rhc2tzLCBzZXRUYXNrc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW25ld1Rhc2ssIHNldE5ld1Rhc2tdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkVGFzayA9ICgpID0+IHtcclxuICAgIGlmIChuZXdUYXNrLnRyaW0oKSAhPT0gXCJcIikge1xyXG4gICAgICBzZXRUYXNrcyhbLi4udGFza3MsIG5ld1Rhc2tdKTtcclxuICAgICAgc2V0TmV3VGFzayhcIlwiKTtcclxuICAgICAgc2V0U2hvd01vZGFsKGZhbHNlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZW1vdmVUYXNrID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlZFRhc2sgPSB0YXNrcy5maWx0ZXIoKF8sIGluZGV4KSA9PiBpbmRleCAhPT0gaW5kZXhUb1JlbW92ZSk7XHJcbiAgICBzZXRUYXNrcyh1cGRhdGVkVGFza3MpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5ib2FyZCBmbGV4IG1pbi1oLXNjcmVlbiBmb250LWJvZHkgdGV4dC13aGl0ZSBiZy1ncmF5LTUwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy03MiBwLTQgYmctaW5kaWdvLTYwMCBmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInAtNCB0ZXh0LTN4bCBmb250LWJvbGQgdGV4dC1jZW50ZXIgYmctdmlzaW9uIHJvdW5kZWQtbWRcIj5cclxuICAgICAgICAgIERhc2hib2FyZFxyXG4gICAgICAgIDwvaDE+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYi01IHctZnVsbCB0ZXh0LXhsIGZvbnQtbWVkaXVtXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicC00IHctZnVsbCBiZy1pbmRpZ28tNDAwIHJvdW5kZWQgaG92ZXI6YmctaW5kaWdvLTUwMCB0cmFuc2l0aW9uIGR1cmF0aW9uOjMwMFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwodHJ1ZSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQWRkIFRhc2tcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgey8qIE1vZGFsICovfVxyXG4gICAgICAgICAgICB7c2hvd01vZGFsICYmIChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTAgei01MCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ncmF5LTkwMCBiZy1vcGFjaXR5LTUwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHAtOCByb3VuZGVkIHNoYWRvdy1tZCBtYXgtdy1tZFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgbWItNFwiPkFkZCBUYXNrPC9oMj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHRleHQtYmxhY2sgcm91bmRlZCBweC0zIHB5LTIgbWItNFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB0YXNrXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmV3VGFza31cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld1Rhc2soZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC00IHB5LTIgYmctaW5kaWdvLTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgaG92ZXI6YmctaW5kaWdvLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVBZGRUYXNrfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIEFkZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIgcHgtNCBweS0yIGJnLWdyYXktMzAwIHRleHQtZ3JheS03MDAgcm91bmRlZCBob3ZlcjpiZy1ncmF5LTIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWVuZCBwLTggYmctdmlzaW9uIHJvdW5kZWQtbWRcIj5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtYi00XCI+SW1wb3J0YW50IFRhc2tzOjwvaDQ+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwibWItNFwiPlRvZGF5J3MgVGFza3M6PC9oND5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJtYi00XCI+Q29tcGxldGVkIFRhc2tzOjwvaDQ+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHAtNFwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJwLTQgdGV4dC1jZW50ZXIgdGV4dC0zeGwgZm9udC1ib2xkIG1iLTQgYmctdmlzaW9uIHJvdW5kZWQtbWRcIj5cclxuICAgICAgICAgIFRhc2tzXHJcbiAgICAgICAgPC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTQgZ3JpZC1yb3dzLTMgZ2FwLTEyIHAtNCB0ZXh0LWNlbnRlciB0ZXh0LWJsYWNrXCI+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiIGJvcmRlciBib3JkZXItMSBib3JkZXItYW1iZXItNDAwXCI+XHJcbiAgICAgICAgICAgIHt0YXNrcy5tYXAoKHRhc2ssIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInAtNFwiPlxyXG4gICAgICAgICAgICAgICAge3Rhc2t9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiIGJvcmRlciBib3JkZXItMSBib3JkZXItYW1iZXItNDAwXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJwLTRcIj5ZZXM8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCIgYm9yZGVyIGJvcmRlci0xIGJvcmRlci1hbWJlci00MDBcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInAtNCBcIj5ZZXM8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCIgYm9yZGVyIGJvcmRlci0xIGJvcmRlci1hbWJlci00MDBcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInAtNCBcIj5ZZXM8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOZXdQYWdlO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIk5ld1BhZ2UiLCJ0YXNrcyIsInNldFRhc2tzIiwibmV3VGFzayIsInNldE5ld1Rhc2siLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJoYW5kbGVBZGRUYXNrIiwidHJpbSIsImhhbmRsZVJlbW92ZVRhc2siLCJ1cGRhdGVkVGFzayIsImZpbHRlciIsIl8iLCJpbmRleCIsImluZGV4VG9SZW1vdmUiLCJ1cGRhdGVkVGFza3MiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInVsIiwibGkiLCJidXR0b24iLCJvbkNsaWNrIiwiaDIiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwiaDQiLCJtYXAiLCJ0YXNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/main.js\n"));

/***/ })

});