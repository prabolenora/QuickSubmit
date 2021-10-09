(self["webpackChunkEduAppV1"] = self["webpackChunkEduAppV1"] || []).push([["src_app_page_login_login_module_ts"],{

/***/ 482:
/*!****************************************************!*\
  !*** ./src/app/page/login/login-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 7569);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 7760:
/*!********************************************!*\
  !*** ./src/app/page/login/login.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 482);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 7569);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 7569:
/*!******************************************!*\
  !*** ./src/app/page/login/login.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 5573);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 9214);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var src_app_service_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/student.service */ 302);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);








let LoginPage = class LoginPage {
    constructor(router, ngFireAuth, studentService, alertController) {
        this.router = router;
        this.ngFireAuth = ngFireAuth;
        this.studentService = studentService;
        this.alertController = alertController;
        this.user = {
            email: '',
            password: '',
        };
        localStorage.setItem('ImportantNotification', null);
    }
    ngOnInit() { }
    Login() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            console.log('user');
            try {
                const user = yield this.ngFireAuth.signInWithEmailAndPassword(this.user.email, this.user.password);
                console.log(user);
                if (user.user.email) {
                    localStorage.setItem('StudentEmail', user.user.email);
                    //StudentEmail
                    localStorage.setItem('Subject', 'all');
                    localStorage.setItem('LogedSubject', 'all');
                    localStorage.setItem('submitList', null);
                    this.studentService.getAllstudent();
                    this.router.navigate(['/home']);
                }
                else {
                    this.displayAlert('Invalid Login', '', 'Invalid username or password.');
                }
            }
            catch (ex) {
                this.displayAlert('Invalid Login', '', 'Invalid username or password.');
            }
        });
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
    RegisterUser() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.router.navigate(['/newuser']);
        });
    }
    RestPassword() {
        this.router.navigate(['/forgotpassword']);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth },
    { type: src_app_service_student_service__WEBPACK_IMPORTED_MODULE_2__.StudentService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 9214:
/*!********************************************!*\
  !*** ./src/app/page/login/login.page.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 5573:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/login/login.page.html ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <!-- <img src=\"http://localhost/_capacitor_file_/storage/emulated/0/HD Wallpapers/hd_25862b7c557fbac15ee088f543f561f8.jpg\"> -->\n      <img style=\"height:30%;\" src=\"./../../../assets/Images/QuickSubmit.png\">\n    </ion-card-header>\n  \n    <ion-card-content>\n      <ion-item>\n        <ion-label position=\"floating\">Username</ion-label>\n        <ion-input [(ngModel)]=\"user.email\" placeholder=\"username\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Password</ion-label>\n        <ion-input [(ngModel)]=\"user.password\" placeholder=\"password\" type=\"password\"></ion-input>\n      </ion-item>\n      <ion-button expand=\"block\" (click)=\"Login()\">Login</ion-button>\n      <ion-button expand=\"block\" color=\"secondary\" (click)=\"RegisterUser()\">Register</ion-button>\n      <ion-button expand=\"block\" color=\"light\" (click)=\"RestPassword()\">Forgot Password</ion-button>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_login_login_module_ts.js.map