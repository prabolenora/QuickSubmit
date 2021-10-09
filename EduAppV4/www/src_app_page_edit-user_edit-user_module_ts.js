(self["webpackChunkEduAppV1"] = self["webpackChunkEduAppV1"] || []).push([["src_app_page_edit-user_edit-user_module_ts"],{

/***/ 3612:
/*!************************************************************!*\
  !*** ./src/app/page/edit-user/edit-user-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditUserPageRoutingModule": () => (/* binding */ EditUserPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _edit_user_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-user.page */ 9772);




const routes = [
    {
        path: '',
        component: _edit_user_page__WEBPACK_IMPORTED_MODULE_0__.EditUserPage
    }
];
let EditUserPageRoutingModule = class EditUserPageRoutingModule {
};
EditUserPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditUserPageRoutingModule);



/***/ }),

/***/ 1688:
/*!****************************************************!*\
  !*** ./src/app/page/edit-user/edit-user.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditUserPageModule": () => (/* binding */ EditUserPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _edit_user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-user-routing.module */ 3612);
/* harmony import */ var _edit_user_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-user.page */ 9772);







let EditUserPageModule = class EditUserPageModule {
};
EditUserPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _edit_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditUserPageRoutingModule
        ],
        declarations: [_edit_user_page__WEBPACK_IMPORTED_MODULE_1__.EditUserPage]
    })
], EditUserPageModule);



/***/ }),

/***/ 9772:
/*!**************************************************!*\
  !*** ./src/app/page/edit-user/edit-user.page.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditUserPage": () => (/* binding */ EditUserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_edit_user_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-user.page.html */ 443);
/* harmony import */ var _edit_user_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-user.page.scss */ 6731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 4267);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/storage */ 3893);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
var EditUserPage_1;








let EditUserPage = EditUserPage_1 = class EditUserPage {
    constructor(camera, navController, laodingController, ngFireAuth, angularFirestore) {
        this.camera = camera;
        this.navController = navController;
        this.laodingController = laodingController;
        this.ngFireAuth = ngFireAuth;
        this.angularFirestore = angularFirestore;
        this.onSuccess = snapshot => {
            snapshot.ref.getDownloadUrl().then(function (downloadURL) {
                alert('onsuc1');
                EditUserPage_1.URL = downloadURL;
                EditUserPage_1.loading.dismiss();
                alert('onsuc');
            });
        };
    }
    ngOnInit() {
        // this.angularFirestore.getReference("/User_Profile_Images").child(userEmail);
    }
    OpenCamera() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const options = {
                quality: 20,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                saveToPhotoAlbum: true,
            };
            yield this.camera.getPicture(options).then((imageData) => {
                let base64Image = 'data:image/jpeg;base64,' + imageData;
                this.selectedPhoto = this.datURLtoBlob(base64Image);
                this.uploadImage();
            }, (err) => {
                alert(err);
            });
        });
    }
    datURLtoBlob(dataURL) {
        try {
            alert('datURLtoBlob');
            alert(dataURL);
            let binay = atob(dataURL.split(',')[1]);
            //let binay = atob(dataURL);
            alert(binay);
            let array = [];
            for (let i = 0; i < binay.length; i++) {
                array.push(binay.charCodeAt(i));
            }
            return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
        }
        catch (ex) {
            alert(ex);
        }
    }
    ;
    uploadImage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            EditUserPage_1.loading = yield this.laodingController.create({
                message: 'Uploading...',
                showBackdrop: false,
            });
            yield EditUserPage_1.loading.present();
            if (this.selectedPhoto) {
                alert('4' + this.selectedPhoto);
                var name = new Date().getTime();
                var uploadTask = this.angularFirestore.storage.ref().child(name.toString()).put(this.selectedPhoto);
                EditUserPage_1.loading.dismiss();
                try {
                    uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                        //EditUserPage.URL = downloadURL;
                        this.imgUrl = downloadURL;
                        alert(downloadURL);
                        EditUserPage_1.loading.dismiss();
                        alert('onsuc');
                    });
                }
                catch (ex) {
                }
                // uploadTask.then(this.onSuccess, this.onError);
            }
        });
    }
    // onSuccess() {
    //   alert('onsuc');
    //   return snapshot => {
    //     snapshot.ref.getDownloadUrl().then(function (downloadURL) {
    //       EditUserPage.URL = downloadURL;
    //       this.imgUrl = downloadURL
    //       alert(downloadURL);
    //       EditUserPage.loading.dismiss();
    //       alert('onsuc')
    //     });
    //   }
    // }
    onError() {
        alert('oneerror');
    }
};
EditUserPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth },
    { type: _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_6__.AngularFireStorage }
];
EditUserPage = EditUserPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-edit-user',
        template: _raw_loader_edit_user_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_user_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditUserPage);



/***/ }),

/***/ 6731:
/*!****************************************************!*\
  !*** ./src/app/page/edit-user/edit-user.page.scss ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXVzZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 443:
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/edit-user/edit-user.page.html ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>editUser</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-button class=\"btn-cam\" color=\"secondary\" size=\"small\" style=\"width: 150px\" (click)=\"OpenCamera()\">Open\n    Camera</ion-button>\n    <img src=\"{{imgUrl}}\"  height=\"100\" width=\"100\" />\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_edit-user_edit-user_module_ts.js.map