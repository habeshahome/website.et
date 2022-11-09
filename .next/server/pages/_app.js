(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(764);
;// CONCATENATED MODULE: external "@mui/system"
const system_namespaceObject = require("@mui/system");
;// CONCATENATED MODULE: ./@theme/theme.ts

const theme = (0,system_namespaceObject.createTheme)({});

;// CONCATENATED MODULE: external "recoil"
const external_recoil_namespaceObject = require("recoil");
;// CONCATENATED MODULE: ./pages/_app.tsx





function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(external_recoil_namespaceObject.RecoilRoot, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(system_namespaceObject.ThemeProvider, {
            theme: {
                theme: theme
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
}


/***/ }),

/***/ 764:
/***/ (() => {



/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(240));
module.exports = __webpack_exports__;

})();