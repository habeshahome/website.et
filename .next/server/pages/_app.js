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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./@theme/theme.ts":
/*!*************************!*\
  !*** ./@theme/theme.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ \"@mui/material/styles\");\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__);\n\n/*\nconst theme_blue: ''\n= '#0077ED'\nconst theme_blue_text: ''\n= '#0066CC'\nconst theme_dark_blue: ''\n= '#12192f'\nconst theme_orange: ''\n= '#ff8f58'\nconst theme_red: ''\n= '#D0102B'\n*/ // creating a theme instance.\nconst theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__.createTheme)({\n    palette: {\n        mode: \"dark\"\n    },\n    // palette: {\n    //   mode: 'light',\n    //   primary: {\n    //     main: '#333333',\n    //     light: '#F5F5F7',\n    //     dark: '#00000',\n    //     contrastText: '#ff00ff'\n    //   },\n    //   secondary: {\n    //     main: '#0088CC',\n    //     light: '#FF8F58',\n    //     dark: '#12192f',\n    //     contrastText: '#fff'\n    //   },\n    //   error: {\n    //     main: '#FF8F58'\n    //   },\n    // text: {\n    //   // primary, secondary, disabled, primaryChannel, secondaryChannel, divider\n    // },\n    // divider: 'rgba(0,0,0,12)',\n    // background: {\n    //   default: '#FFFEFC',\n    //   paper: '#F5F5F7'\n    // },\n    // action: {\n    //   /*\n    //   active, hover, hoverOpacity, selected, selectedOpacity\n    //    disabled, disabledBackground, disabledOpacity,\n    //    focus, focusOpacity, activatedOpacity,\n    //    activeChannel, selectedChannel\n    //   */\n    // }\n    // },\n    // shape: {\n    //   borderRadius: 3\n    // },\n    // mixins: {\n    //   toolbar: {\n    //     minHeight: 48\n    //   }\n    // },\n    // // ,shadows: { // 0, 1, 2, 3, 4, 5, ...}\n    typography: {\n        fontFamily: '\"Ubuntu\", Roboto, sans-serif'\n    },\n    shadows: [\n        \"none\",\n        \"0px 2px 1px -1px rgba(255,255,255,0.2),0px 1px 1px 0px rgba(255,255,255,0.14),0px 1px 3px 0px rgba(255,255,255,0.12)\",\n        \"0px 3px 1px -2px rgba(255,255,255,0.2),0px 2px 2px 0px rgba(255,255,255,0.14),0px 1px 5px 0px rgba(255,255,255,0.12)\",\n        \"0px 3px 3px -2px rgba(255,255,255,0.2),0px 3px 4px 0px rgba(255,255,255,0.14),0px 1px 8px 0px rgba(255,255,255,0.12)\",\n        \"0px 2px 4px -1px rgba(255,255,255,0.2),0px 4px 5px 0px rgba(255,255,255,0.14),0px 1px 10px 0px rgba(255,255,255,0.12)\",\n        \"0px 3px 5px -1px rgba(255,255,255,0.2),0px 5px 8px 0px rgba(255,255,255,0.14),0px 1px 14px 0px rgba(255,255,255,0.12)\",\n        \"0px 3px 5px -1px rgba(255,255,255,0.2),0px 6px 10px 0px rgba(255,255,255,0.14),0px 1px 18px 0px rgba(255,255,255,0.12)\",\n        \"0px 4px 5px -2px rgba(255,255,255,0.2),0px 7px 10px 1px rgba(255,255,255,0.14),0px 2px 16px 1px rgba(255,255,255,0.12)\",\n        \"0px 5px 5px -3px rgba(255,255,255,0.2),0px 8px 10px 1px rgba(255,255,255,0.14),0px 3px 14px 2px rgba(255,255,255,0.12)\",\n        \"0px 5px 6px -3px rgba(255,255,255,0.2),0px 9px 12px 1px rgba(255,255,255,0.14),0px 3px 16px 2px rgba(255,255,255,0.12)\",\n        \"0px 6px 6px -3px rgba(255,255,255,0.2),0px 10px 14px 1px rgba(255,255,255,0.14),0px 4px 18px 3px rgba(255,255,255,0.12)\",\n        \"0px 6px 7px -4px rgba(255,255,255,0.2),0px 11px 15px 1px rgba(255,255,255,0.14),0px 4px 20px 3px rgba(255,255,255,0.12)\",\n        \"0px 7px 8px -4px rgba(255,255,255,0.2),0px 12px 17px 2px rgba(255,255,255,0.14),0px 5px 22px 4px rgba(255,255,255,0.12)\",\n        \"0px 7px 8px -4px rgba(255,255,255,0.2),0px 13px 19px 2px rgba(255,255,255,0.14),0px 5px 24px 4px rgba(255,255,255,0.12)\",\n        \"0px 7px 9px -4px rgba(255,255,255,0.2),0px 14px 21px 2px rgba(255,255,255,0.14),0px 5px 26px 4px rgba(255,255,255,0.12)\",\n        \"0px 8px 9px -5px rgba(255,255,255,0.2),0px 15px 22px 2px rgba(255,255,255,0.14),0px 6px 28px 5px rgba(255,255,255,0.12)\",\n        \"0px 8px 10px -5px rgba(255,255,255,0.2),0px 16px 24px 2px rgba(255,255,255,0.14),0px 6px 30px 5px rgba(255,255,255,0.12)\",\n        \"0px 8px 11px -5px rgba(255,255,255,0.2),0px 17px 26px 2px rgba(255,255,255,0.14),0px 6px 32px 5px rgba(255,255,255,0.12)\",\n        \"0px 9px 11px -5px rgba(255,255,255,0.2),0px 18px 28px 2px rgba(255,255,255,0.14),0px 7px 34px 6px rgba(255,255,255,0.12)\",\n        \"0px 9px 12px -6px rgba(255,255,255,0.2),0px 19px 29px 2px rgba(255,255,255,0.14),0px 7px 36px 6px rgba(255,255,255,0.12)\",\n        \"0px 10px 13px -6px rgba(255,255,255,0.2),0px 20px 31px 3px rgba(255,255,255,0.14),0px 8px 38px 7px rgba(255,255,255,0.12)\",\n        \"0px 10px 13px -6px rgba(255,255,255,0.2),0px 21px 33px 3px rgba(255,255,255,0.14),0px 8px 40px 7px rgba(255,255,255,0.12)\",\n        \"0px 10px 14px -6px rgba(255,255,255,0.2),0px 22px 35px 3px rgba(255,255,255,0.14),0px 8px 42px 7px rgba(255,255,255,0.12)\",\n        \"\",\n        \"\"\n    ]\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9AdGhlbWUvdGhlbWUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtEO0FBRWxEOzs7Ozs7Ozs7OztBQVdBLEdBRUEsNkJBQTZCO0FBQzdCLE1BQU1DLFFBQVFELGlFQUFXQSxDQUFDO0lBQ3hCRSxTQUFTO1FBQ1BDLE1BQU07SUFDUjtJQUNBLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixPQUFPO0lBQ1AsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtJQUMzQixPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixPQUFPO0lBQ1AsVUFBVTtJQUNWLCtFQUErRTtJQUMvRSxLQUFLO0lBQ0wsNkJBQTZCO0lBQzdCLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLEtBQUs7SUFDTCxZQUFZO0lBQ1osT0FBTztJQUNQLDJEQUEyRDtJQUMzRCxvREFBb0Q7SUFDcEQsNENBQTRDO0lBQzVDLG9DQUFvQztJQUNwQyxPQUFPO0lBQ1AsSUFBSTtJQUNKLEtBQUs7SUFFTCxXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLEtBQUs7SUFDTCxZQUFZO0lBQ1osZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixNQUFNO0lBQ04sS0FBSztJQUNMLDJDQUEyQztJQUMzQ0MsWUFBWTtRQUNWQyxZQUFZO0lBQ2Q7SUFDQUMsU0FBUztRQUNQO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0Q7QUFFSDtBQUVBLGlFQUFlTCxLQUFLQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Vic2l0ZS5ldC8uL0B0aGVtZS90aGVtZS50cz9kMGVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVRoZW1lIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnXG5cbi8qXG5jb25zdCB0aGVtZV9ibHVlOiAnJ1xuPSAnIzAwNzdFRCdcbmNvbnN0IHRoZW1lX2JsdWVfdGV4dDogJydcbj0gJyMwMDY2Q0MnXG5jb25zdCB0aGVtZV9kYXJrX2JsdWU6ICcnXG49ICcjMTIxOTJmJ1xuY29uc3QgdGhlbWVfb3JhbmdlOiAnJ1xuPSAnI2ZmOGY1OCdcbmNvbnN0IHRoZW1lX3JlZDogJydcbj0gJyNEMDEwMkInXG4qL1xuXG4vLyBjcmVhdGluZyBhIHRoZW1lIGluc3RhbmNlLlxuY29uc3QgdGhlbWUgPSBjcmVhdGVUaGVtZSh7XG4gIHBhbGV0dGU6IHtcbiAgICBtb2RlOiAnZGFyaydcbiAgfSxcbiAgLy8gcGFsZXR0ZToge1xuICAvLyAgIG1vZGU6ICdsaWdodCcsXG4gIC8vICAgcHJpbWFyeToge1xuICAvLyAgICAgbWFpbjogJyMzMzMzMzMnLFxuICAvLyAgICAgbGlnaHQ6ICcjRjVGNUY3JyxcbiAgLy8gICAgIGRhcms6ICcjMDAwMDAnLFxuICAvLyAgICAgY29udHJhc3RUZXh0OiAnI2ZmMDBmZidcbiAgLy8gICB9LFxuICAvLyAgIHNlY29uZGFyeToge1xuICAvLyAgICAgbWFpbjogJyMwMDg4Q0MnLFxuICAvLyAgICAgbGlnaHQ6ICcjRkY4RjU4JyxcbiAgLy8gICAgIGRhcms6ICcjMTIxOTJmJyxcbiAgLy8gICAgIGNvbnRyYXN0VGV4dDogJyNmZmYnXG4gIC8vICAgfSxcbiAgLy8gICBlcnJvcjoge1xuICAvLyAgICAgbWFpbjogJyNGRjhGNTgnXG4gIC8vICAgfSxcbiAgLy8gdGV4dDoge1xuICAvLyAgIC8vIHByaW1hcnksIHNlY29uZGFyeSwgZGlzYWJsZWQsIHByaW1hcnlDaGFubmVsLCBzZWNvbmRhcnlDaGFubmVsLCBkaXZpZGVyXG4gIC8vIH0sXG4gIC8vIGRpdmlkZXI6ICdyZ2JhKDAsMCwwLDEyKScsXG4gIC8vIGJhY2tncm91bmQ6IHtcbiAgLy8gICBkZWZhdWx0OiAnI0ZGRkVGQycsXG4gIC8vICAgcGFwZXI6ICcjRjVGNUY3J1xuICAvLyB9LFxuICAvLyBhY3Rpb246IHtcbiAgLy8gICAvKlxuICAvLyAgIGFjdGl2ZSwgaG92ZXIsIGhvdmVyT3BhY2l0eSwgc2VsZWN0ZWQsIHNlbGVjdGVkT3BhY2l0eVxuICAvLyAgICBkaXNhYmxlZCwgZGlzYWJsZWRCYWNrZ3JvdW5kLCBkaXNhYmxlZE9wYWNpdHksXG4gIC8vICAgIGZvY3VzLCBmb2N1c09wYWNpdHksIGFjdGl2YXRlZE9wYWNpdHksXG4gIC8vICAgIGFjdGl2ZUNoYW5uZWwsIHNlbGVjdGVkQ2hhbm5lbFxuICAvLyAgICovXG4gIC8vIH1cbiAgLy8gfSxcblxuICAvLyBzaGFwZToge1xuICAvLyAgIGJvcmRlclJhZGl1czogM1xuICAvLyB9LFxuICAvLyBtaXhpbnM6IHtcbiAgLy8gICB0b29sYmFyOiB7XG4gIC8vICAgICBtaW5IZWlnaHQ6IDQ4XG4gIC8vICAgfVxuICAvLyB9LFxuICAvLyAvLyAsc2hhZG93czogeyAvLyAwLCAxLCAyLCAzLCA0LCA1LCAuLi59XG4gIHR5cG9ncmFwaHk6IHtcbiAgICBmb250RmFtaWx5OiAnXCJVYnVudHVcIiwgUm9ib3RvLCBzYW5zLXNlcmlmJ1xuICB9LFxuICBzaGFkb3dzOiBbXG4gICAgJ25vbmUnLFxuICAgICcwcHggMnB4IDFweCAtMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC4yKSwwcHggMXB4IDFweCAwcHggcmdiYSgyNTUsMjU1LDI1NSwwLjE0KSwwcHggMXB4IDNweCAwcHggcmdiYSgyNTUsMjU1LDI1NSwwLjEyKScsXG4gICAgJzBweCAzcHggMXB4IC0ycHggcmdiYSgyNTUsMjU1LDI1NSwwLjIpLDBweCAycHggMnB4IDBweCByZ2JhKDI1NSwyNTUsMjU1LDAuMTQpLDBweCAxcHggNXB4IDBweCByZ2JhKDI1NSwyNTUsMjU1LDAuMTIpJyxcbiAgICAnMHB4IDNweCAzcHggLTJweCByZ2JhKDI1NSwyNTUsMjU1LDAuMiksMHB4IDNweCA0cHggMHB4IHJnYmEoMjU1LDI1NSwyNTUsMC4xNCksMHB4IDFweCA4cHggMHB4IHJnYmEoMjU1LDI1NSwyNTUsMC4xMiknLFxuICAgICcwcHggMnB4IDRweCAtMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC4yKSwwcHggNHB4IDVweCAwcHggcmdiYSgyNTUsMjU1LDI1NSwwLjE0KSwwcHggMXB4IDEwcHggMHB4IHJnYmEoMjU1LDI1NSwyNTUsMC4xMiknLFxuICAgICcwcHggM3B4IDVweCAtMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC4yKSwwcHggNXB4IDhweCAwcHggcmdiYSgyNTUsMjU1LDI1NSwwLjE0KSwwcHggMXB4IDE0cHggMHB4IHJnYmEoMjU1LDI1NSwyNTUsMC4xMiknLFxuICAgICcwcHggM3B4IDVweCAtMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC4yKSwwcHggNnB4IDEwcHggMHB4IHJnYmEoMjU1LDI1NSwyNTUsMC4xNCksMHB4IDFweCAxOHB4IDBweCByZ2JhKDI1NSwyNTUsMjU1LDAuMTIpJyxcbiAgICAnMHB4IDRweCA1cHggLTJweCByZ2JhKDI1NSwyNTUsMjU1LDAuMiksMHB4IDdweCAxMHB4IDFweCByZ2JhKDI1NSwyNTUsMjU1LDAuMTQpLDBweCAycHggMTZweCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwLjEyKScsXG4gICAgJzBweCA1cHggNXB4IC0zcHggcmdiYSgyNTUsMjU1LDI1NSwwLjIpLDBweCA4cHggMTBweCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwLjE0KSwwcHggM3B4IDE0cHggMnB4IHJnYmEoMjU1LDI1NSwyNTUsMC4xMiknLFxuICAgICcwcHggNXB4IDZweCAtM3B4IHJnYmEoMjU1LDI1NSwyNTUsMC4yKSwwcHggOXB4IDEycHggMXB4IHJnYmEoMjU1LDI1NSwyNTUsMC4xNCksMHB4IDNweCAxNnB4IDJweCByZ2JhKDI1NSwyNTUsMjU1LDAuMTIpJyxcbiAgICAnMHB4IDZweCA2cHggLTNweCByZ2JhKDI1NSwyNTUsMjU1LDAuMiksMHB4IDEwcHggMTRweCAxcHggcmdiYSgyNTUsMjU1LDI1NSwwLjE0KSwwcHggNHB4IDE4cHggM3B4IHJnYmEoMjU1LDI1NSwyNTUsMC4xMiknLFxuICAgICcwcHggNnB4IDdweCAtNHB4IHJnYmEoMjU1LDI1NSwyNTUsMC4yKSwwcHggMTFweCAxNXB4IDFweCByZ2JhKDI1NSwyNTUsMjU1LDAuMTQpLDBweCA0cHggMjBweCAzcHggcmdiYSgyNTUsMjU1LDI1NSwwLjEyKScsXG4gICAgJzBweCA3cHggOHB4IC00cHggcmdiYSgyNTUsMjU1LDI1NSwwLjIpLDBweCAxMnB4IDE3cHggMnB4IHJnYmEoMjU1LDI1NSwyNTUsMC4xNCksMHB4IDVweCAyMnB4IDRweCByZ2JhKDI1NSwyNTUsMjU1LDAuMTIpJyxcbiAgICAnMHB4IDdweCA4cHggLTRweCByZ2JhKDI1NSwyNTUsMjU1LDAuMiksMHB4IDEzcHggMTlweCAycHggcmdiYSgyNTUsMjU1LDI1NSwwLjE0KSwwcHggNXB4IDI0cHggNHB4IHJnYmEoMjU1LDI1NSwyNTUsMC4xMiknLFxuICAgICcwcHggN3B4IDlweCAtNHB4IHJnYmEoMjU1LDI1NSwyNTUsMC4yKSwwcHggMTRweCAyMXB4IDJweCByZ2JhKDI1NSwyNTUsMjU1LDAuMTQpLDBweCA1cHggMjZweCA0cHggcmdiYSgyNTUsMjU1LDI1NSwwLjEyKScsXG4gICAgJzBweCA4cHggOXB4IC01cHggcmdiYSgyNTUsMjU1LDI1NSwwLjIpLDBweCAxNXB4IDIycHggMnB4IHJnYmEoMjU1LDI1NSwyNTUsMC4xNCksMHB4IDZweCAyOHB4IDVweCByZ2JhKDI1NSwyNTUsMjU1LDAuMTIpJyxcbiAgICAnMHB4IDhweCAxMHB4IC01cHggcmdiYSgyNTUsMjU1LDI1NSwwLjIpLDBweCAxNnB4IDI0cHggMnB4IHJnYmEoMjU1LDI1NSwyNTUsMC4xNCksMHB4IDZweCAzMHB4IDVweCByZ2JhKDI1NSwyNTUsMjU1LDAuMTIpJyxcbiAgICAnMHB4IDhweCAxMXB4IC01cHggcmdiYSgyNTUsMjU1LDI1NSwwLjIpLDBweCAxN3B4IDI2cHggMnB4IHJnYmEoMjU1LDI1NSwyNTUsMC4xNCksMHB4IDZweCAzMnB4IDVweCByZ2JhKDI1NSwyNTUsMjU1LDAuMTIpJyxcbiAgICAnMHB4IDlweCAxMXB4IC01cHggcmdiYSgyNTUsMjU1LDI1NSwwLjIpLDBweCAxOHB4IDI4cHggMnB4IHJnYmEoMjU1LDI1NSwyNTUsMC4xNCksMHB4IDdweCAzNHB4IDZweCByZ2JhKDI1NSwyNTUsMjU1LDAuMTIpJyxcbiAgICAnMHB4IDlweCAxMnB4IC02cHggcmdiYSgyNTUsMjU1LDI1NSwwLjIpLDBweCAxOXB4IDI5cHggMnB4IHJnYmEoMjU1LDI1NSwyNTUsMC4xNCksMHB4IDdweCAzNnB4IDZweCByZ2JhKDI1NSwyNTUsMjU1LDAuMTIpJyxcbiAgICAnMHB4IDEwcHggMTNweCAtNnB4IHJnYmEoMjU1LDI1NSwyNTUsMC4yKSwwcHggMjBweCAzMXB4IDNweCByZ2JhKDI1NSwyNTUsMjU1LDAuMTQpLDBweCA4cHggMzhweCA3cHggcmdiYSgyNTUsMjU1LDI1NSwwLjEyKScsXG4gICAgJzBweCAxMHB4IDEzcHggLTZweCByZ2JhKDI1NSwyNTUsMjU1LDAuMiksMHB4IDIxcHggMzNweCAzcHggcmdiYSgyNTUsMjU1LDI1NSwwLjE0KSwwcHggOHB4IDQwcHggN3B4IHJnYmEoMjU1LDI1NSwyNTUsMC4xMiknLFxuICAgICcwcHggMTBweCAxNHB4IC02cHggcmdiYSgyNTUsMjU1LDI1NSwwLjIpLDBweCAyMnB4IDM1cHggM3B4IHJnYmEoMjU1LDI1NSwyNTUsMC4xNCksMHB4IDhweCA0MnB4IDdweCByZ2JhKDI1NSwyNTUsMjU1LDAuMTIpJyxcbiAgICAnJyxcbiAgICAnJ1xuICBdXG4gIC8vIHRyYW5zaXRpb25zIHsgZWFzaW5nLCBkdXJhdGlvbiAuLi59XG59KVxuXG5leHBvcnQgZGVmYXVsdCB0aGVtZVxuIl0sIm5hbWVzIjpbImNyZWF0ZVRoZW1lIiwidGhlbWUiLCJwYWxldHRlIiwibW9kZSIsInR5cG9ncmFwaHkiLCJmb250RmFtaWx5Iiwic2hhZG93cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./@theme/theme.ts\n");

/***/ }),

/***/ "./context/AuthProvider.tsx":
/*!**********************************!*\
  !*** ./context/AuthProvider.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthProvider\": () => (/* binding */ AuthProvider),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({\n    auth: null,\n    setAuth: ()=>{},\n    isLoggedIn: false,\n    setIsLoggedIn: Function\n});\nconst AuthProvider = ({ children  })=>{\n    const [auth, setAuth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});\n    const [isLoggedIn, setIsLoggedIn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"AuthProvider\");\n        console.log(auth);\n        console.log(isLoggedIn);\n    }, [\n        auth,\n        isLoggedIn\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            auth,\n            setAuth,\n            isLoggedIn,\n            setIsLoggedIn\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/luck/Desktop/business/website.et/client/github-website.et/context/AuthProvider.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0F1dGhQcm92aWRlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBaUU7QUFNakUsTUFBTUksNEJBQ0pGLG9EQUFhQSxDQUtWO0lBQ0RHLE1BQU0sSUFBSTtJQUNWQyxTQUFTLElBQU0sQ0FBQztJQUNoQkMsWUFBWSxLQUFLO0lBQ2pCQyxlQUFlQztBQUNqQjtBQUVLLE1BQU1DLGVBQWUsQ0FBQyxFQUFFQyxTQUFRLEVBQWdCLEdBQWtCO0lBQ3ZFLE1BQU0sQ0FBQ04sTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQyxDQUFDO0lBQ2xDLE1BQU0sQ0FBQ00sWUFBWUMsY0FBYyxHQUFHUCwrQ0FBUUEsQ0FBQyxLQUFLO0lBRWxERSxnREFBU0EsQ0FBQyxJQUFNO1FBQ2RTLFFBQVFDLEdBQUcsQ0FBQztRQUNaRCxRQUFRQyxHQUFHLENBQUNSO1FBQ1pPLFFBQVFDLEdBQUcsQ0FBQ047SUFDZCxHQUFHO1FBQUNGO1FBQU1FO0tBQVc7SUFFckIscUJBQ0UsOERBQUNILFlBQVlVLFFBQVE7UUFBQ0MsT0FBTztZQUFFVjtZQUFNQztZQUFTQztZQUFZQztRQUFjO2tCQUNwRUc7Ozs7OztBQUdSLEVBQUM7QUFFRCxpRUFBZVAsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnNpdGUuZXQvLi9jb250ZXh0L0F1dGhQcm92aWRlci50c3g/ZjNmNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5pbnRlcmZhY2UgQXV0aFByb3BUeXBlIHtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZVtdXG59XG5cbmNvbnN0IEF1dGhDb250ZXh0ID1cbiAgY3JlYXRlQ29udGV4dDx7XG4gICAgYXV0aDogYW55XG4gICAgc2V0QXV0aDogRnVuY3Rpb25cbiAgICBpc0xvZ2dlZEluOiBib29sZWFuXG4gICAgc2V0SXNMb2dnZWRJbjogRnVuY3Rpb25cbiAgfT4oe1xuICAgIGF1dGg6IG51bGwsXG4gICAgc2V0QXV0aDogKCkgPT4ge30sXG4gICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgc2V0SXNMb2dnZWRJbjogRnVuY3Rpb25cbiAgfSlcblxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IEF1dGhQcm9wVHlwZSk6IEpTWC5FbGVtZW50ID0+IHtcbiAgY29uc3QgW2F1dGgsIHNldEF1dGhdID0gdXNlU3RhdGUoe30pXG4gIGNvbnN0IFtpc0xvZ2dlZEluLCBzZXRJc0xvZ2dlZEluXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ0F1dGhQcm92aWRlcicpXG4gICAgY29uc29sZS5sb2coYXV0aClcbiAgICBjb25zb2xlLmxvZyhpc0xvZ2dlZEluKVxuICB9LCBbYXV0aCwgaXNMb2dnZWRJbl0pXG5cbiAgcmV0dXJuIChcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgYXV0aCwgc2V0QXV0aCwgaXNMb2dnZWRJbiwgc2V0SXNMb2dnZWRJbiB9fT5cbiAgICAgIHsgY2hpbGRyZW4gfVxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aENvbnRleHRcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsIkF1dGhDb250ZXh0IiwiYXV0aCIsInNldEF1dGgiLCJpc0xvZ2dlZEluIiwic2V0SXNMb2dnZWRJbiIsIkZ1bmN0aW9uIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjb25zb2xlIiwibG9nIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./context/AuthProvider.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"recoil\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(recoil__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ \"@emotion/react\");\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _theme_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../@theme/theme */ \"./@theme/theme.ts\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! notistack */ \"notistack\");\n/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(notistack__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _context_AuthProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context/AuthProvider */ \"./context/AuthProvider.tsx\");\n\n\n\n\n\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_3__.RecoilRoot, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n            theme: _theme_theme__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.CssBaseline, {}, void 0, false, {\n                    fileName: \"/home/luck/Desktop/business/website.et/client/github-website.et/pages/_app.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"apple-touch-icon\",\n                            href: \"/apple-touch-icon.png\"\n                        }, void 0, false, {\n                            fileName: \"/home/luck/Desktop/business/website.et/client/github-website.et/pages/_app.tsx\",\n                            lineNumber: 18,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                            rel: \"manifest\",\n                            href: \"/manifest.json\"\n                        }, void 0, false, {\n                            fileName: \"/home/luck/Desktop/business/website.et/client/github-website.et/pages/_app.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/luck/Desktop/business/website.et/client/github-website.et/pages/_app.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_AuthProvider__WEBPACK_IMPORTED_MODULE_9__.AuthProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(notistack__WEBPACK_IMPORTED_MODULE_7__.SnackbarProvider, {\n                        maxSnack: 3,\n                        anchorOrigin: {\n                            vertical: \"top\",\n                            horizontal: \"right\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                            ...pageProps\n                        }, void 0, false, {\n                            fileName: \"/home/luck/Desktop/business/website.et/client/github-website.et/pages/_app.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 14\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/luck/Desktop/business/website.et/client/github-website.et/pages/_app.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/luck/Desktop/business/website.et/client/github-website.et/pages/_app.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/luck/Desktop/business/website.et/client/github-website.et/pages/_app.tsx\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/luck/Desktop/business/website.et/client/github-website.et/pages/_app.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFDSztBQUVLO0FBQ1c7QUFDWDtBQUNQO0FBQ2dCO0FBQ0Q7QUFDVztBQUV2QyxTQUFTUSxJQUFLLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFZLEVBQWU7SUFDNUUscUJBQ0UsOERBQUNULDhDQUFVQTtrQkFDVCw0RUFBQ0MseURBQWFBO1lBQUNDLE9BQVFBLG9EQUFLQTs7OEJBQzFCLDhEQUFDRyxzREFBV0E7Ozs7OzhCQUNaLDhEQUFDRixrREFBSUE7O3NDQUNILDhEQUFDTzs0QkFBS0MsS0FBSTs0QkFBbUJDLE1BQUs7Ozs7OztzQ0FFbEMsOERBQUNGOzRCQUFLQyxLQUFJOzRCQUFXQyxNQUFLOzs7Ozs7Ozs7Ozs7OEJBSzlCLDhEQUFDTiwrREFBWUE7OEJBQ1gsNEVBQUNGLHVEQUFnQkE7d0JBQ2ZTLFVBQVU7d0JBQ1ZDLGNBQWM7NEJBQ1pDLFVBQVU7NEJBQ1ZDLFlBQVk7d0JBQ2Q7a0NBQ0csNEVBQUNSOzRCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2Vic2l0ZS5ldC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnXG5pbXBvcnQgeyBSZWNvaWxSb290IH0gZnJvbSAncmVjb2lsJ1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ0BlbW90aW9uL3JlYWN0J1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL0B0aGVtZS90aGVtZSdcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IFNuYWNrYmFyUHJvdmlkZXIgfSBmcm9tICdub3Rpc3RhY2snXG5pbXBvcnQgeyBDc3NCYXNlbGluZSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0L0F1dGhQcm92aWRlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKTogSlNYLkVsZW1lbnQge1xuICByZXR1cm4gKFxuICAgIDxSZWNvaWxSb290PlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9eyB0aGVtZSB9PlxuICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmsgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiIGhyZWY9XCIvYXBwbGUtdG91Y2gtaWNvbi5wbmdcIiAvPlxuICAgICAgICAgIHsvKiBsaW5rIG1hbmlmZXN0Lmpzb24gKi99XG4gICAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL21hbmlmZXN0Lmpzb25cIiAvPlxuICAgICAgICAgIHsvKiB0aGlzIHNldHMgdGhlIGNvbG9yIG9mIHVybCBiYXIgICovfVxuICAgICAgICAgIHsvKiA8bWV0YSBuYW1lPVwidGhlbWUtY29sb3JcIiBjb250ZW50PVwiIzkwY2RmNFwiIG1lZGlhPVwiKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKVwiLz5cbiAgICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD0nd2Vic2l0ZSBkZXZlbG9wbWVudCBjb21wYW55IGluIEV0aGlvcGlhLCB3ZWIgZGVzaWduLCBtYXJrZXRpbmcsIGRpZ2l0YWwgbWFya2V0aW5nLCBhZHZlcnRpc2luZycgLz4gKi99XG4gICAgICAgIDwvSGVhZD5cbiAgICAgIDxBdXRoUHJvdmlkZXI+XG4gICAgICAgIDxTbmFja2JhclByb3ZpZGVyXG4gICAgICAgICAgbWF4U25hY2s9ezN9XG4gICAgICAgICAgYW5jaG9yT3JpZ2luPXt7XG4gICAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXG4gICAgICAgICAgICBob3Jpem9udGFsOiAncmlnaHQnXG4gICAgICAgICAgfX0+XG4gICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICA8L1NuYWNrYmFyUHJvdmlkZXI+XG4gICAgICAgIDwvQXV0aFByb3ZpZGVyPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgIDwvUmVjb2lsUm9vdD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUmVjb2lsUm9vdCIsIlRoZW1lUHJvdmlkZXIiLCJ0aGVtZSIsIkhlYWQiLCJTbmFja2JhclByb3ZpZGVyIiwiQ3NzQmFzZWxpbmUiLCJBdXRoUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1heFNuYWNrIiwiYW5jaG9yT3JpZ2luIiwidmVydGljYWwiLCJob3Jpem9udGFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@emotion/react":
/*!*********************************!*\
  !*** external "@emotion/react" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/material/styles":
/*!***************************************!*\
  !*** external "@mui/material/styles" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/material/styles");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "notistack":
/*!****************************!*\
  !*** external "notistack" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("notistack");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "recoil":
/*!*************************!*\
  !*** external "recoil" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("recoil");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();