(self["webpackChunkEduAppV1"] = self["webpackChunkEduAppV1"] || []).push([["src_app_page_forgotpassword_forgotpassword_module_ts"],{

/***/ 2794:
/*!**********************************************************************!*\
  !*** ./src/app/page/forgotpassword/forgotpassword-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpasswordPageRoutingModule": () => (/* binding */ ForgotpasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotpassword.page */ 4721);




const routes = [
    {
        path: '',
        component: _forgotpassword_page__WEBPACK_IMPORTED_MODULE_0__.ForgotpasswordPage
    }
];
let ForgotpasswordPageRoutingModule = class ForgotpasswordPageRoutingModule {
};
ForgotpasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotpasswordPageRoutingModule);



/***/ }),

/***/ 3649:
/*!**************************************************************!*\
  !*** ./src/app/page/forgotpassword/forgotpassword.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpasswordPageModule": () => (/* binding */ ForgotpasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotpassword-routing.module */ 2794);
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotpassword.page */ 4721);







let ForgotpasswordPageModule = class ForgotpasswordPageModule {
};
ForgotpasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotpasswordPageRoutingModule
        ],
        declarations: [_forgotpassword_page__WEBPACK_IMPORTED_MODULE_1__.ForgotpasswordPage]
    })
], ForgotpasswordPageModule);



/***/ }),

/***/ 4721:
/*!************************************************************!*\
  !*** ./src/app/page/forgotpassword/forgotpassword.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpasswordPage": () => (/* binding */ ForgotpasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_forgotpassword_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./forgotpassword.page.html */ 477);
/* harmony import */ var _forgotpassword_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotpassword.page.scss */ 6821);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_service_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/student.service */ 302);








let ForgotpasswordPage = class ForgotpasswordPage {
    constructor(router, ngFireAuth, studentService, alertController) {
        this.router = router;
        this.ngFireAuth = ngFireAuth;
        this.studentService = studentService;
        this.alertController = alertController;
        this.user = {
            email: ''
        };
    }
    ngOnInit() {
    }
    displayAlert(header, subHeader, msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: header,
                subHeader: subHeader,
                message: msg,
                buttons: ['OK'],
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
        });
    }
    sendResetMail() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.studentService.sendResetMail(this.user.email).then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.displayAlert('', '', 'Please check you email.');
                this.router.navigate(['/login']);
            }), (error) => (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
                this.displayAlert('Error', '', error);
            }));
        });
    }
    Cancel() {
        this.router.navigate(['/login']);
    }
};
ForgotpasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth },
    { type: src_app_service_student_service__WEBPACK_IMPORTED_MODULE_2__.StudentService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
ForgotpasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-forgotpassword',
        template: _raw_loader_forgotpassword_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_forgotpassword_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ForgotpasswordPage);



/***/ }),

/***/ 6821:
/*!**************************************************************!*\
  !*** ./src/app/page/forgotpassword/forgotpassword.page.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3RwYXNzd29yZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 477:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/forgotpassword/forgotpassword.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Reset Password</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card-content>\n    \n    <ion-item>\n      <ion-label text-wrap><p>Please insert your email to reset your password</p></ion-label> \n        \n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input [(ngModel)]=\"user.email\" placeholder=\"Email\"></ion-input>\n    </ion-item>\n    <div style=\"align-items: center;\">\n    <ion-button  (click)=\"sendResetMail()\">Reset</ion-button>\n    <ion-button color=\"warning\" (click)=\"Cancel()\">Cancel</ion-button>\n  </div>\n  </ion-card-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_forgotpassword_forgotpassword_module_ts.js.map