(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/reason/EditReason.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/reason/EditReason.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      reason_id: null,
      reason: null
    };
  },
  created: function created() {
    this.reason_id = this.$route.params.id;
    this.getReasonFromId(this.reason_id);
  },
  methods: {
    getReasonFromId: function getReasonFromId(id) {
      var _this = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('api/reason/' + id + "/edit").then(function (res) {
        console.log(res);
        _this.reason = res.data.data[0];
      });
    },
    updateReason: function updateReason() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_0___default.a.put('api/reason/' + this.reason_id, this.reason).then(function (res) {
        _this2.$router.push({
          path: '/reason'
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/reason/EditReason.vue?vue&type=template&id=771bbfdd&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/views/reason/EditReason.vue?vue&type=template&id=771bbfdd& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticStyle: { "margin-left": "20px" } }, [
    _c("h3", [_vm._v("Sửa Lý Do")]),
    _vm._v(" "),
    _c("form", [
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "name" } }, [_vm._v("Tiêu Đề: ")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.reason.title,
                expression: "reason.title",
              },
            ],
            staticClass: "form-control",
            attrs: {
              type: "text",
              name: "name",
              id: "name",
              placeholder: "Enter tilte...",
            },
            domProps: { value: _vm.reason.title },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.reason, "title", $event.target.value)
              },
            },
          }),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "form-group" }, [
          _c("label", { attrs: { for: "name" } }, [_vm._v("Mô Tả: ")]),
          _vm._v(" "),
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.reason.description,
                expression: "reason.description",
              },
            ],
            staticClass: "form-control",
            attrs: { rows: "5", name: "description", id: "description" },
            domProps: { value: _vm.reason.description },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.reason, "description", $event.target.value)
              },
            },
          }),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-md-8" }, [
        _c("div", { staticClass: "text-right" }, [
          _c(
            "button",
            { staticClass: "btn btn-default", attrs: { type: "reset" } },
            [_vm._v("Cancel")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "btn btn-primary",
              attrs: { type: "button" },
              on: {
                click: function ($event) {
                  return _vm.updateReason()
                },
              },
            },
            [_vm._v("Save")]
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/views/reason/EditReason.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/views/reason/EditReason.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditReason_vue_vue_type_template_id_771bbfdd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditReason.vue?vue&type=template&id=771bbfdd& */ "./resources/js/components/views/reason/EditReason.vue?vue&type=template&id=771bbfdd&");
/* harmony import */ var _EditReason_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditReason.vue?vue&type=script&lang=js& */ "./resources/js/components/views/reason/EditReason.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditReason_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditReason_vue_vue_type_template_id_771bbfdd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditReason_vue_vue_type_template_id_771bbfdd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/views/reason/EditReason.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/views/reason/EditReason.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/views/reason/EditReason.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditReason_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditReason.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/reason/EditReason.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditReason_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/views/reason/EditReason.vue?vue&type=template&id=771bbfdd&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/views/reason/EditReason.vue?vue&type=template&id=771bbfdd& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditReason_vue_vue_type_template_id_771bbfdd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditReason.vue?vue&type=template&id=771bbfdd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/views/reason/EditReason.vue?vue&type=template&id=771bbfdd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditReason_vue_vue_type_template_id_771bbfdd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditReason_vue_vue_type_template_id_771bbfdd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);