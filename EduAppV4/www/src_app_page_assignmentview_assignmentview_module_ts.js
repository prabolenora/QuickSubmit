(self["webpackChunkEduAppV1"] = self["webpackChunkEduAppV1"] || []).push([["src_app_page_assignmentview_assignmentview_module_ts"],{

/***/ 2105:
/*!**********************************************************************!*\
  !*** ./src/app/page/assignmentview/assignmentview-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignmentviewPageRoutingModule": () => (/* binding */ AssignmentviewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _assignmentview_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assignmentview.page */ 6577);




const routes = [
    {
        path: '',
        component: _assignmentview_page__WEBPACK_IMPORTED_MODULE_0__.AssignmentviewPage
    }
];
let AssignmentviewPageRoutingModule = class AssignmentviewPageRoutingModule {
};
AssignmentviewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AssignmentviewPageRoutingModule);



/***/ }),

/***/ 6653:
/*!**************************************************************!*\
  !*** ./src/app/page/assignmentview/assignmentview.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignmentviewPageModule": () => (/* binding */ AssignmentviewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _assignmentview_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assignmentview-routing.module */ 2105);
/* harmony import */ var _component_component_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/component.modules */ 5657);
/* harmony import */ var _assignmentview_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assignmentview.page */ 6577);








let AssignmentviewPageModule = class AssignmentviewPageModule {
};
AssignmentviewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _component_component_modules__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
            _assignmentview_routing_module__WEBPACK_IMPORTED_MODULE_0__.AssignmentviewPageRoutingModule
        ],
        declarations: [_assignmentview_page__WEBPACK_IMPORTED_MODULE_2__.AssignmentviewPage]
    })
], AssignmentviewPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_page_assignmentview_assignmentview_module_ts.js.map