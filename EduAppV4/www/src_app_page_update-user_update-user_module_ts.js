(self["webpackChunkEduAppV1"] = self["webpackChunkEduAppV1"] || []).push([["src_app_page_update-user_update-user_module_ts"],{

/***/ 5332:
/*!****************************************************************!*\
  !*** ./src/app/page/update-user/update-user-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateUserPageRoutingModule": () => (/* binding */ UpdateUserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _update_user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-user.page */ 3608);




const routes = [
    {
        path: '',
        component: _update_user_page__WEBPACK_IMPORTED_MODULE_0__.UpdateUserPage
    }
];
let UpdateUserPageRoutingModule = class UpdateUserPageRoutingModule {
};
UpdateUserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UpdateUserPageRoutingModule);



/***/ }),

/***/ 5218:
/*!********************************************************!*\
  !*** ./src/app/page/update-user/update-user.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateUserPageModule": () => (/* binding */ UpdateUserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _update_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-user-routing.module */ 5332);
/* harmony import */ var _component_component_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/component.modules */ 5657);
/* harmony import */ var _update_user_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update-user.page */ 3608);








let UpdateUserPageModule = class UpdateUserPageModule {
};
UpdateUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _component_component_modules__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule,
            _update_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UpdateUserPageRoutingModule
        ],
        declarations: [_update_user_page__WEBPACK_IMPORTED_MODULE_2__.UpdateUserPage]
    })
], UpdateUserPageModule);



/***/ }),

/***/ 3608:
/*!******************************************************!*\
  !*** ./src/app/page/update-user/update-user.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateUserPage": () => (/* binding */ UpdateUserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_update_user_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./update-user.page.html */ 6531);
/* harmony import */ var _update_user_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-user.page.scss */ 8799);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/storage */ 3893);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 4267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/alert.service */ 3833);
/* harmony import */ var src_app_service_photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/photo.service */ 5263);
/* harmony import */ var src_app_service_student_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/student.service */ 302);












let UpdateUserPage = class UpdateUserPage {
    constructor(router, ngFireAuth, studentService, photoService, alertService, camera, alertController, loadingController, storage) {
        this.router = router;
        this.ngFireAuth = ngFireAuth;
        this.studentService = studentService;
        this.photoService = photoService;
        this.alertService = alertService;
        this.camera = camera;
        this.alertController = alertController;
        this.loadingController = loadingController;
        this.storage = storage;
        this.fnameValidator = false;
        this.lnameValidator = false;
        this.student = {
            firstName: '',
            lastName: '',
            studentId: '',
            path: '',
            createdDate: '',
            updatedDate: '',
            email: '',
            password: '',
            userToken: '',
            stream: ''
        };
        this.selectedImage = '';
    }
    ngOnInit() {
        console.log('updateus');
        this.student = JSON.parse(localStorage.getItem('StudentData'));
        this.imgUrl = this.student.path;
    }
    UpdateUser() {
        console.log('upus');
        if (localStorage.getItem('imagePathDB') != null && localStorage.getItem('imagePathDB') != "") {
            this.student.path = localStorage.getItem('imagePathDB');
        }
        this.studentService.update_employee(localStorage.getItem('iId'), this.student);
    }
    CheckInputVal(textField) {
        if (textField == 'fnameValidator') {
            this.fnameValidator = false;
        }
        else if (textField == 'lnameValidator') {
            this.lnameValidator = false;
        }
    }
    showPreview(event) {
        this.selectedImage = localStorage.getItem('selectedImage');
        alert(this.selectedImage);
    }
    OpenCamera() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.photoService.OpenCameraV1(null).then((ret) => {
                if (ret == "success") {
                    this.imgUrl = localStorage.getItem('imagePath');
                }
            });
            this.imgUrl = localStorage.getItem('imagePath');
            localStorage.setItem('path', this.imgUrl.toString());
        });
    }
    OpenGallery() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.photoService.OpenGalleryV1();
            this.imgUrl = localStorage.getItem('imagePath');
            localStorage.setItem('path', this.imgUrl.toString());
        });
    }
};
UpdateUserPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_8__.AngularFireAuth },
    { type: src_app_service_student_service__WEBPACK_IMPORTED_MODULE_5__.StudentService },
    { type: src_app_service_photo_service__WEBPACK_IMPORTED_MODULE_4__.PhotoService },
    { type: src_app_service_alert_service__WEBPACK_IMPORTED_MODULE_3__.AlertService },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_10__.AngularFireStorage, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Inject, args: [_angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_10__.AngularFireStorage,] }] }
];
UpdateUserPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-update-user',
        template: _raw_loader_update_user_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_update_user_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], UpdateUserPage);



/***/ }),

/***/ 8799:
/*!********************************************************!*\
  !*** ./src/app/page/update-user/update-user.page.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".item-avatar {\n  width: 100% !important;\n  height: 100% !important;\n  max-width: 100px !important;\n  max-height: 100px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS11c2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0FBQ0oiLCJmaWxlIjoidXBkYXRlLXVzZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tYXZhdGFyICB7ICAgICBcclxuICAgIHdpZHRoOjEwMCUgIWltcG9ydGFudDsgIFxyXG4gICAgaGVpZ2h0IDogMTAwJSAhaW1wb3J0YW50OyAgXHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7ICAvL2FueSBzaXplXHJcbiAgICBtYXgtaGVpZ2h0OiAxMDBweCAhaW1wb3J0YW50OyAvL2FueSBzaXplIFxyXG4gICAgfSJdfQ== */");

/***/ }),

/***/ 6531:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/update-user/update-user.page.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" color=\"black\">\n  <ion-toolbar class=\"page-header\">\n    <ion-buttons slot=\"start\" menu=\"first\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"page-titles\">\n      My Profile\n    </ion-title>\n    <app-header slot=\"end\"></app-header>\n    <!-- <ion-buttons slot=\"end\" menu=\"first\">\n      <app-menu1 slot=\"end\"></app-menu1>\n    </ion-buttons> -->\n\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div style=\"padding-left: 40%; padding-bottom: 5%; padding-top: 5%;\">\n    <ion-avatar>\n      <img src=\"{{imgUrl}}\" />\n    </ion-avatar>\n  </div>\n  <ion-item>\n    <div>\n      <ion-label position=\"floating\">First Name</ion-label>\n      <ion-input id=\"name\" name=\"name\" (ionInput)=\"CheckInputVal('fnameValidator')\" [(ngModel)]=\"student.firstName\" required minlength=\"1\">\n      </ion-input>\n    </div>\n    <div>\n      <ion-label class=\"my-label\" *ngIf=\"fnameValidator\">Please enter First Name</ion-label>\n    </div>\n  </ion-item>\n  <ion-item>\n    <div>\n      <ion-label position=\"floating\">Last Name</ion-label>\n      <ion-input [(ngModel)]=\"student.lastName\" (ionInput)=\"CheckInputVal('lnameValidator')\"></ion-input>\n    </div>\n    <div>\n      <ion-label class=\"my-label\" *ngIf=\"lnameValidator\">Please enter Last Name</ion-label>\n    </div>\n  </ion-item>\n  <ion-item>\n    <div>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input [(ngModel)]=\"student.email\" (ionInput)=\"CheckInputVal('emailValidator')\" readonly></ion-input>\n    </div>\n    <div>\n      <ion-label class=\"my-label\" *ngIf=\"emailValidator\">Please enter email</ion-label>\n    </div>\n  </ion-item>\n  <ion-item hidden>\n    <div>\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input [(ngModel)]=\"student.password\"  type=\"password\" (ionInput)=\"CheckInputVal('passwordValidator')\"></ion-input>\n    </div>\n    <div>\n      <ion-label class=\"my-label\" *ngIf=\"passwordValidator\">Please enter Password</ion-label>\n    </div>\n  </ion-item>\n  <ion-item>\n    <div>\n      <ion-label position=\"floating\">Student ID</ion-label>\n      <ion-input [(ngModel)]=\"student.studentId\" (ionInput)=\"CheckInputVal('stuIdValidator')\" readonly></ion-input>\n    </div>\n    <div>\n      <ion-label class=\"my-label\" *ngIf=\"stuIdValidator\">Please enter Student ID</ion-label>\n    </div>\n  </ion-item>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-align-self-end\">\n        <ion-row>\n          <ion-button class=\"btn-cam\" color=\"secondary\" size=\"small\" style=\"width: 150px\" (change)=\"showPreview($event)\" (click)=\"OpenCamera()\">Open\n            Camera</ion-button>\n        </ion-row>\n        <ion-row>\n          <ion-button class=\"btn-cam\" color=\"secondary\" size=\"small\" style=\"width: 150px\" (change)=\"showPreview($event)\" (click)=\"OpenGallery()\">Open\n            Gallerry</ion-button>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"ion-align-self-end\" hidden> <img src=\"{{imgUrl}}\"  height=\"100\" width=\"100\" /></ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-button expand=\"block\" (click)=\"UpdateUser()\">Update</ion-button>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_update-user_update-user_module_ts.js.map