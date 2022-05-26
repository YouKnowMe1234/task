(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/auth/Register.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/auth/Register.vue?vue&type=script&lang=js& ***!
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
        name: null,
        email: null,
        password: null,
        dob: null,
        level: null,
        role: 'admin',
        status: 'active',
        phone: null
      },
      confirm_password: null
    };
  },
  created: function created() {},
  methods: {
    register: function register() {
      var _this = this;

      if (this.confirm_password != this.data.password) {
        alert("Mật khẩu xác nhận sai!!");
        return;
      }

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('api/register', this.data).then(function (res) {
        _this.$router.push({
          path: '/login'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/auth/Register.vue?vue&type=template&id=aa563a24&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/auth/Register.vue?vue&type=template&id=aa563a24& ***!
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
                        _c("div", { staticClass: "form-floating mb-3" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.data.name,
                                expression: "data.name",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              id: "inputName",
                              type: "text",
                              placeholder: "Name",
                            },
                            domProps: { value: _vm.data.name },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.data, "name", $event.target.value)
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "inputName" } }, [
                            _vm._v("Họ Tên"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-floating mb-3" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.data.phone,
                                expression: "data.phone",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              id: "inputPhone",
                              type: "text",
                              placeholder: "Phone",
                            },
                            domProps: { value: _vm.data.phone },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.data, "phone", $event.target.value)
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "inputAccount" } }, [
                            _vm._v("SDT"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-floating mb-3" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.data.email,
                                expression: "data.email",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              id: "inputEmail",
                              type: "email",
                              placeholder: "Email",
                            },
                            domProps: { value: _vm.data.email },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.data, "email", $event.target.value)
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "inputEmail" } }, [
                            _vm._v("Email"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-floating mb-3" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.data.dob,
                                expression: "data.dob",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              id: "inputDOB",
                              type: "email",
                              placeholder: "DOB",
                            },
                            domProps: { value: _vm.data.dob },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.data, "dob", $event.target.value)
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "inputEmail" } }, [
                            _vm._v("Ngày sinh"),
                          ]),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-floating mb-3" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.data.level,
                                expression: "data.level",
                              },
                            ],
                            staticClass: "form-control",
                            attrs: {
                              id: "inputLevel",
                              type: "email",
                              placeholder: "Level",
                            },
                            domProps: { value: _vm.data.level },
                            on: {
                              input: function ($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.data, "level", $event.target.value)
                              },
                            },
                          }),
                          _vm._v(" "),
                          _c("label", { attrs: { for: "inputEmail" } }, [
                            _vm._v("Level"),
                          ]),
                        ]),
                        _vm._v(" "),
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
                                      value: _vm.confirm_password,
                                      expression: "confirm_password",
                                    },
                                  ],
                                  staticClass: "form-control",
                                  attrs: {
                                    id: "inputPasswordConfirm",
                                    type: "password",
                                    placeholder: "Confirm password",
                                  },
                                  domProps: { value: _vm.confirm_password },
                                  on: {
                                    input: function ($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.confirm_password = $event.target.value
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
                                    return _vm.register()
                                  },
                                },
                              },
                              [_vm._v("Tạo Tài Khoản")]
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
        _vm._v("Tạo Tài Khoản"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-footer text-center py-3" }, [
      _c("div", { staticClass: "small" }, [
        _c("a", [_vm._v("Have an account? Go to login")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/views/auth/Register.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/views/auth/Register.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_aa563a24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=aa563a24& */ "./resources/js/components/views/auth/Register.vue?vue&type=template&id=aa563a24&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/components/views/auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_aa563a24___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_aa563a24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/auth/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/auth/Register.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/views/auth/Register.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/auth/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/auth/Register.vue?vue&type=template&id=aa563a24&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/views/auth/Register.vue?vue&type=template&id=aa563a24& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_aa563a24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=aa563a24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/auth/Register.vue?vue&type=template&id=aa563a24&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_aa563a24___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_aa563a24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);