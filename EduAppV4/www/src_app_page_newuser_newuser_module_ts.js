(self["webpackChunkEduAppV1"] = self["webpackChunkEduAppV1"] || []).push([["src_app_page_newuser_newuser_module_ts"],{

/***/ 4476:
/*!********************************************************!*\
  !*** ./src/app/page/newuser/newuser-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewuserPageRoutingModule": () => (/* binding */ NewuserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _newuser_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newuser.page */ 5939);




const routes = [
    {
        path: '',
        component: _newuser_page__WEBPACK_IMPORTED_MODULE_0__.NewuserPage
    }
];
let NewuserPageRoutingModule = class NewuserPageRoutingModule {
};
NewuserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewuserPageRoutingModule);



/***/ }),

/***/ 6650:
/*!************************************************!*\
  !*** ./src/app/page/newuser/newuser.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewuserPageModule": () => (/* binding */ NewuserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _newuser_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newuser-routing.module */ 4476);
/* harmony import */ var _newuser_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newuser.page */ 5939);







let NewuserPageModule = class NewuserPageModule {
};
NewuserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _newuser_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewuserPageRoutingModule,
        ],
        declarations: [_newuser_page__WEBPACK_IMPORTED_MODULE_1__.NewuserPage]
    })
], NewuserPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_page_newuser_newuser_module_ts.js.map