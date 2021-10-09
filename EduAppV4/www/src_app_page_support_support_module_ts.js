(self["webpackChunkEduAppV1"] = self["webpackChunkEduAppV1"] || []).push([["src_app_page_support_support_module_ts"],{

/***/ 4145:
/*!********************************************************!*\
  !*** ./src/app/page/support/support-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportPageRoutingModule": () => (/* binding */ SupportPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support.page */ 1288);




const routes = [
    {
        path: '',
        component: _support_page__WEBPACK_IMPORTED_MODULE_0__.SupportPage
    }
];
let SupportPageRoutingModule = class SupportPageRoutingModule {
};
SupportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SupportPageRoutingModule);



/***/ }),

/***/ 5230:
/*!************************************************!*\
  !*** ./src/app/page/support/support.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportPageModule": () => (/* binding */ SupportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _support_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./support-routing.module */ 4145);
/* harmony import */ var _support_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support.page */ 1288);
/* harmony import */ var _component_component_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/component.modules */ 5657);








let SupportPageModule = class SupportPageModule {
};
SupportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _support_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupportPageRoutingModule,
            _component_component_modules__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule
        ],
        declarations: [_support_page__WEBPACK_IMPORTED_MODULE_1__.SupportPage]
    })
], SupportPageModule);



/***/ }),

/***/ 1288:
/*!**********************************************!*\
  !*** ./src/app/page/support/support.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupportPage": () => (/* binding */ SupportPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_support_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./support.page.html */ 7762);
/* harmony import */ var _support_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./support.page.scss */ 1350);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ 1535);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);






let SupportPage = class SupportPage {
    constructor(composer, menu) {
        this.composer = composer;
        this.menu = menu;
        // this.composer.isAvailable(true);
    }
    ngOnInit() {
    }
    openFirst() {
        this.menu.enable(true, 'first');
        //this.menu.open('first');
    }
    openEmailComposer() {
        this.composer.open({
            to: "suppor@quicksubmit.lk",
        });
    }
};
SupportPage.ctorParameters = () => [
    { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_2__.EmailComposer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController }
];
SupportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-support',
        template: _raw_loader_support_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_support_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SupportPage);



/***/ }),

/***/ 1350:
/*!************************************************!*\
  !*** ./src/app/page/support/support.page.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".ion-card-list {\n  background-size: cover;\n  height: 50%;\n}\n\n.card-content-md {\n  color: #00000a;\n  align-content: center;\n}\n\n.item-title {\n  color: #000875;\n  padding-left: 10%;\n  align-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1cHBvcnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7RUFFQSxXQUFBO0FBQUo7O0FBRUE7RUFFSSxjQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFHQTtFQUVJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0FBREoiLCJmaWxlIjoic3VwcG9ydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLWNhcmQtbGlzdCB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjOGJmMWI2O1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbn1cclxuLmNhcmQtY29udGVudC1tZCB7XHJcblxyXG4gICAgY29sb3I6IHJnYigwLCAwLCAxMCk7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pdGVtLXRpdGxle1xyXG4gICAgXHJcbiAgICBjb2xvcjogcmdiKDAsIDgsIDExNyk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */");

/***/ }),

/***/ 7762:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/support/support.page.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" color=\"black\">\n  <ion-toolbar class=\"page-header\">\n    <ion-buttons slot=\"start\" menu=\"first\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"page-titles\">\n      Support\n    </ion-title>\n    <app-header slot=\"end\"></app-header>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-card class=\"ion-card-list\">\n    <div style=\"padding-left: 15%; align-content: center;font-size: large;\">\n    <ion-label class=\"item-title\">\n      <p style=\"font-size: large;\">We are happy to help you.Please contact us clicking on below button.</p>\n    </ion-label>\n  </div>\n  <div style=\"padding-top: 10%;padding-left: 30%;\">\n    <ion-button shape=\"round\" style=\"color: aquamarine;\" (click)=\"openEmailComposer()\">Contact Us</ion-button>\n  </div>\n  </ion-card>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_support_support_module_ts.js.map