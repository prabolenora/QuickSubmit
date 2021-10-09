(self["webpackChunkEduAppV1"] = self["webpackChunkEduAppV1"] || []).push([["src_app_page_fileupview_fileupview_module_ts"],{

/***/ 4193:
/*!**************************************************************!*\
  !*** ./src/app/page/fileupview/fileupview-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileupviewPageRoutingModule": () => (/* binding */ FileupviewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _fileupview_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fileupview.page */ 7207);




const routes = [
    {
        path: '',
        component: _fileupview_page__WEBPACK_IMPORTED_MODULE_0__.FileupviewPage
    }
];
let FileupviewPageRoutingModule = class FileupviewPageRoutingModule {
};
FileupviewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FileupviewPageRoutingModule);



/***/ }),

/***/ 2678:
/*!******************************************************!*\
  !*** ./src/app/page/fileupview/fileupview.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileupviewPageModule": () => (/* binding */ FileupviewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _fileupview_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fileupview-routing.module */ 4193);
/* harmony import */ var _fileupview_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fileupview.page */ 7207);







let FileupviewPageModule = class FileupviewPageModule {
};
FileupviewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _fileupview_routing_module__WEBPACK_IMPORTED_MODULE_0__.FileupviewPageRoutingModule
        ],
        declarations: [_fileupview_page__WEBPACK_IMPORTED_MODULE_1__.FileupviewPage]
    })
], FileupviewPageModule);



/***/ }),

/***/ 7207:
/*!****************************************************!*\
  !*** ./src/app/page/fileupview/fileupview.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileupviewPage": () => (/* binding */ FileupviewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_fileupview_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./fileupview.page.html */ 9544);
/* harmony import */ var _fileupview_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fileupview.page.scss */ 7668);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/storage */ 3893);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8939);
/* harmony import */ var _service_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/file.service */ 2248);








let FileupviewPage = class FileupviewPage {
    constructor(storage, fileService) {
        this.storage = storage;
        this.fileService = fileService;
        this.selectedImage = null;
    }
    ngOnInit() {
        this.fileService.getImageDetailList();
    }
    showPreview(event) {
        this.selectedImage = event.target.files[0];
        alert(this.selectedImage);
    }
    save() {
        var name = this.selectedImage.name;
        const fileRef = this.storage.ref(name);
        this.storage.upload(name, this.selectedImage).snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => {
            fileRef.getDownloadURL().subscribe((url) => {
                this.url = url;
                this.fileService.insertImageDetails(this.id, this.url);
                alert('Upload Successful');
            });
        })).subscribe();
        // this.fireservices
        //       .collection('student')
        //       .add(student)
        //       .then(async (res) => {           
        //         //this.save(student.email,student.path);
        //       })
        //       .catch((error) => {
        //         console.log(error);
        //       });
    }
    view() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.fileService.getImage(this.file);
            alert(localStorage.getItem('dataurl').toString());
            // this.dataurl=localStorage.getItem('dataurl').toString();
            // alert(this.dataurl);
        });
    }
};
FileupviewPage.ctorParameters = () => [
    { type: _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_5__.AngularFireStorage, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject, args: [_angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_5__.AngularFireStorage,] }] },
    { type: _service_file_service__WEBPACK_IMPORTED_MODULE_2__.FileService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Inject, args: [_service_file_service__WEBPACK_IMPORTED_MODULE_2__.FileService,] }] }
];
FileupviewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-fileupview',
        template: _raw_loader_fileupview_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_fileupview_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], FileupviewPage);



/***/ }),

/***/ 7668:
/*!******************************************************!*\
  !*** ./src/app/page/fileupview/fileupview.page.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxldXB2aWV3LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 9544:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/fileupview/fileupview.page.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<h2>File Upload</h2>\n<input type=\"text\" placeholder=\"Save with Key\" name=\"id\" [(ngModel)]=\"id\">\n<br><br>\n<input type=\"file\" (change)=\"showPreview($event)\">\n<button (click)=\"save()\">Save</button>\n<h2>File View</h2>\n<input type=\"text\" name=\"file\" [(ngModel)]=\"file\" placeholder=\"Enter Unique Search Key\">\n<a src={{dataurl}}>click heare to download</a>\n<button (click)=\"view()\">View</button>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_fileupview_fileupview_module_ts.js.map