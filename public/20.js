(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/auth/ResetForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/auth/ResetForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      data: {
        password: null,
        confirm_password: null,
        token: null
      }
    };
  },
  created: function created() {
    this.data.token = this.$route.params.token;
  },
  methods: {
    resetPassword: function resetPassword() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('api/reset-password/' + this.data.token, this.data).then(function (res) {
        _this.$router.push({
          path: '/user-login'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/auth/ResetForm.vue?vue&type=template&id=5dc583b5&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user/auth/ResetForm.vue?vue&type=template&id=5dc583b5& ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { attrs: { id: "layoutAuthentication" } }, [
      _c("div", { attrs: { id: "layoutAuthentication_content" } }, [
        _c("main", [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row justify-content-center" }, [
              _c("div", { staticClass: "col-lg-7" }, [
                _c(
                  "div",
                  { staticClass: "card shadow-lg border-0 rounded-lg mt-5" },
                  [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("div", { staticClass: "card-body" }, [
                      _c("form", [
                        _c("div", { staticClass: "row mb-3" }, [
                          _c("div", { staticClass: "col-md-6" }, [
                            _c(
                              "div",
                              { staticClass: "form-floating mb-3 mb-md-0" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.data.password,
                                      expression: "data.password",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    id: "inputPassword",
                                    type: "password",
                                    placeholder: "Create a password",
                                  },
                                  domProps: { value: _vm.data.password },
                                  on: {
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.data,
                                        "password",
                                        $event.target.value
                                      )
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  { attrs: { for: "inputPassword" } },
                                  [_vm._v("Mật Khẩu")]
                                ),
                              ]
                            ),
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-md-6" }, [
                            _c(
                              "div",
                              { staticClass: "form-floating mb-3 mb-md-0" },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.data.confirm_password,
                                      expression: "data.confirm_password",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    id: "inputPasswordConfirm",
                                    type: "password",
                                    placeholder: "Confirm password",
                                  },
                                  domProps: {
                                    value: _vm.data.confirm_password,
                                  },
                                  on: {
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.data,
                                        "confirm_password",
                                        $event.target.value
                                      )
                                    },
                                  },
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  { attrs: { for: "inputPasswordConfirm" } },
                                  [_vm._v("Xác Nhận Mật Khẩu")]
                                ),
                              ]
                            ),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "mt-4 mb-0" }, [
                          _c("div", { staticClass: "d-grid" }, [
                            _c(
                              "a",
                              {
                                staticClass: "btn btn-primary btn-block",
                                on: {
                                  click: function ($event) {
                                    return _vm.resetPassword()
                                  },
                                },
                              },
                              [_vm._v("Xac Nhan")]
                            ),
                          ]),
                        ]),
                      ]),
                    ]),
                    _vm._v(" "),
                    _vm._m(1),
                  ]
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "text-center font-weight-light my-4" }, [
        _vm._v("Reset Password  "),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-footer text-center py-3" }, [
      _c("div", { staticClass: "small" }, [_c("a", [_vm._v("Go to login")])]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/user/auth/ResetForm.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/user/auth/ResetForm.vue ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResetForm_vue_vue_type_template_id_5dc583b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResetForm.vue?vue&type=template&id=5dc583b5& */ "./resources/js/components/user/auth/ResetForm.vue?vue&type=template&id=5dc583b5&");
/* harmony import */ var _ResetForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResetForm.vue?vue&type=script&lang=js& */ "./resources/js/components/user/auth/ResetForm.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ResetForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ResetForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResetForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResetForm_vue_vue_type_template_id_5dc583b5___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResetForm_vue_vue_type_template_id_5dc583b5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user/auth/ResetForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user/auth/ResetForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/user/auth/ResetForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ResetForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/auth/ResetForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user/auth/ResetForm.vue?vue&type=template&id=5dc583b5&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/user/auth/ResetForm.vue?vue&type=template&id=5dc583b5& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetForm_vue_vue_type_template_id_5dc583b5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ResetForm.vue?vue&type=template&id=5dc583b5& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user/auth/ResetForm.vue?vue&type=template&id=5dc583b5&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetForm_vue_vue_type_template_id_5dc583b5___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResetForm_vue_vue_type_template_id_5dc583b5___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);