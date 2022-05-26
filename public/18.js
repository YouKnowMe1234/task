(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/reason/Reason.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/reason/Reason.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      reasons: [],
      search: null
    };
  },
  created: function created() {
    this.getReason();
  },
  watch: {
    search: function search(after, before) {
      this.getDataSearch();
    }
  },
  methods: {
    getReason: function getReason() {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/reason').then(function (res) {
        _this.reasons = res.data.data;
      });
    },
    deleteReason: function deleteReason(id) {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a["delete"]('/api/reason/' + id).then(function (res) {
        _this2.getReason();
      });
    },
    getDataSearch: function getDataSearch() {
      var _this3 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('api/search-reason', {
        params: {
          search: this.search
        }
      }).then(function (res) {
        // console.log(res.data.data);
        _this3.reasons = res.data.data;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/reason/Reason.vue?vue&type=template&id=39343db3&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/reason/Reason.vue?vue&type=template&id=39343db3& ***!
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
    _c("div", { staticClass: "card mb-4" }, [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-8", staticStyle: { margin: "auto" } }, [
        _c("div", { staticClass: "form-outline" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.search,
                expression: "search",
              },
            ],
            staticClass: "form-control",
            attrs: {
              type: "search",
              id: "form1",
              placeholder: "Search...",
              "aria-label": "Search",
            },
            domProps: { value: _vm.search },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.search = $event.target.value
              },
            },
          }),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "card-body" },
        [
          _c(
            "export-excel",
            {
              staticClass: "btn btn-success",
              attrs: {
                data: _vm.reasons,
                type: "xlsx",
                worksheet: "My Worksheet",
                name: "reason.xls",
              },
            },
            [_vm._v("\n                Export Excel\n                ")]
          ),
          _vm._v(" "),
          _c("table", { staticClass: "table" }, [
            _vm._m(1),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.reasons, function (reason) {
                return _c("tr", { key: reason.id }, [
                  _c("td", [_vm._v(_vm._s(reason.id))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(reason.title))]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(reason.description))]),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: "EditReason",
                              params: { id: reason.id },
                            },
                          },
                        },
                        [
                          _c(
                            "button",
                            {
                              staticClass: "btn btn-primary btn-sm",
                              attrs: { id: "myButton" },
                            },
                            [_c("span", { staticClass: "fa fa-edit" })]
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-danger btn-sm",
                          attrs: { type: "button" },
                          on: {
                            click: function ($event) {
                              return _vm.deleteReason(reason.id)
                            },
                          },
                        },
                        [_c("span", { staticClass: "fa fa-trash" })]
                      ),
                    ],
                    1
                  ),
                ])
              }),
              0
            ),
          ]),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("i", { staticClass: "fas fa-table me-1" }),
      _vm._v("\n            Bảng Danh Mục Lý Do\n    "),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("Lý Do")]),
        _vm._v(" "),
        _c("th", [_vm._v("Mô Tả")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/views/reason/Reason.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/views/reason/Reason.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Reason_vue_vue_type_template_id_39343db3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Reason.vue?vue&type=template&id=39343db3& */ "./resources/js/components/views/reason/Reason.vue?vue&type=template&id=39343db3&");
/* harmony import */ var _Reason_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Reason.vue?vue&type=script&lang=js& */ "./resources/js/components/views/reason/Reason.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Reason_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Reason_vue_vue_type_template_id_39343db3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Reason_vue_vue_type_template_id_39343db3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/reason/Reason.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/reason/Reason.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/views/reason/Reason.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reason_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Reason.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/reason/Reason.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Reason_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/reason/Reason.vue?vue&type=template&id=39343db3&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/views/reason/Reason.vue?vue&type=template&id=39343db3& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reason_vue_vue_type_template_id_39343db3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Reason.vue?vue&type=template&id=39343db3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/reason/Reason.vue?vue&type=template&id=39343db3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reason_vue_vue_type_template_id_39343db3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Reason_vue_vue_type_template_id_39343db3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);