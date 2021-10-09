(self["webpackChunkEduAppV1"] = self["webpackChunkEduAppV1"] || []).push([["main"],{

/***/ 8255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 8255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/login/login.module */ 7760)).then(m => m.LoginPageModule)
    },
    {
        path: 'edit-user',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_edit-user_edit-user_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/edit-user/edit-user.module */ 1688)).then(m => m.EditUserPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/login/login.module */ 7760)).then(m => m.LoginPageModule)
    },
    {
        path: 'home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_component_component_modules_ts"), __webpack_require__.e("src_app_page_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./page/home/home.module */ 2040)).then(m => m.HomePageModule)
    },
    {
        path: 'newuser',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_newuser_newuser_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/newuser/newuser.module */ 6650)).then(m => m.NewuserPageModule)
    },
    {
        path: 'notifications',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_component_component_modules_ts"), __webpack_require__.e("src_app_page_notifications_notifications_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./page/notifications/notifications.module */ 1607)).then(m => m.NotificationsPageModule)
    },
    {
        path: 'fileupview',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_fileupview_fileupview_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/fileupview/fileupview.module */ 2678)).then(m => m.FileupviewPageModule)
    },
    {
        path: 'assignmentview',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_component_component_modules_ts"), __webpack_require__.e("src_app_page_assignmentview_assignmentview_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./page/assignmentview/assignmentview.module */ 6653)).then(m => m.AssignmentviewPageModule)
    },
    {
        path: 'subjects',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_component_component_modules_ts"), __webpack_require__.e("src_app_page_subjects_subjects_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./page/subjects/subjects.module */ 8124)).then(m => m.SubjectsPageModule)
    },
    {
        path: 'lessonsview',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_component_component_modules_ts"), __webpack_require__.e("src_app_page_lessonsview_lessonsview_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./page/lessonsview/lessonsview.module */ 5405)).then(m => m.LessonsviewPageModule)
    },
    {
        path: 'quick-submit',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_component_component_modules_ts"), __webpack_require__.e("src_app_page_quick-submit_quick-submit_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./page/quick-submit/quick-submit.module */ 384)).then(m => m.QuickSubmitPageModule)
    },
    {
        path: 'support',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_component_component_modules_ts"), __webpack_require__.e("src_app_page_support_support_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./page/support/support.module */ 5230)).then(m => m.SupportPageModule)
    },
    {
        path: 'forgotpassword',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_page_forgotpassword_forgotpassword_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./page/forgotpassword/forgotpassword.module */ 3649)).then(m => m.ForgotpasswordPageModule)
    },
    {
        path: 'update-user',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_component_component_modules_ts"), __webpack_require__.e("src_app_page_update-user_update-user_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./page/update-user/update-user.module */ 5218)).then(m => m.UpdateUserPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 1106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 3069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let AppComponent = class AppComponent {
    constructor() {
        console.log('menu');
        this.imgUrl = localStorage.getItem('path');
        this.name = localStorage.getItem('Name');
        this.studentId = localStorage.getItem('StudentId');
        //alert(this.name)
    }
    ngOnInit() {
    }
};
AppComponent.ctorParameters = () => [];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 9075);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/compat */ 8747);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/compat/database */ 9978);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 2340);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _service_student_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/student.service */ 302);
/* harmony import */ var _service_photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/photo.service */ 5263);
/* harmony import */ var _service_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./service/alert.service */ 3833);
/* harmony import */ var _service_file_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/file.service */ 2248);
/* harmony import */ var _service_assignment_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service/assignment.service */ 9254);
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/notification.service */ 7320);
/* harmony import */ var _service_network_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./service/network.service */ 1617);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 4267);
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ionic2-calendar */ 7732);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/network/ngx */ 5592);
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ 1535);

























//import{NotificationComponent} from './component/notification/notification.component'
let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_14__.CUSTOM_ELEMENTS_SCHEMA],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_17__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase),
            _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_18__.AngularFireAuthModule,
            _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_19__.AngularFireDatabaseModule,
            _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_20__.AngularFirestoreModule.enablePersistence(),
            _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule,
            ionic2_calendar__WEBPACK_IMPORTED_MODULE_22__.NgCalendarModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_23__.CommonModule
            // Camera
        ],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_24__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_16__.IonicRouteStrategy },
            _service_student_service__WEBPACK_IMPORTED_MODULE_3__.StudentService,
            _service_photo_service__WEBPACK_IMPORTED_MODULE_4__.PhotoService,
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_10__.Camera,
            _service_alert_service__WEBPACK_IMPORTED_MODULE_5__.AlertService,
            _service_notification_service__WEBPACK_IMPORTED_MODULE_8__.NotificationService,
            _service_file_service__WEBPACK_IMPORTED_MODULE_6__.FileService,
            _service_assignment_service__WEBPACK_IMPORTED_MODULE_7__.AssignmentService,
            _service_network_service__WEBPACK_IMPORTED_MODULE_9__.NetworkService,
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_11__.Network,
            _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_12__.EmailComposer],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 5939:
/*!**********************************************!*\
  !*** ./src/app/page/newuser/newuser.page.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewuserPage": () => (/* binding */ NewuserPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_newuser_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./newuser.page.html */ 4925);
/* harmony import */ var _newuser_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newuser.page.scss */ 1513);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var _service_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/student.service */ 302);
/* harmony import */ var _service_photo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/photo.service */ 5263);
/* harmony import */ var _service_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/alert.service */ 3833);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 4267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/storage */ 3893);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8939);
var NewuserPage_1;













let NewuserPage = NewuserPage_1 = class NewuserPage {
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
        this.win = window;
        this.fnameValidator = false;
        this.lnameValidator = false;
        this.emailValidator = false;
        this.passwordValidator = false;
        this.stuIdValidator = false;
        this.user = {
            email: '',
            password: '',
        };
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
        console.log('newuser');
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            NewuserPage_1.loading = yield this.loadingController.create({
                message: 'Processing...',
                showBackdrop: false,
            });
        });
    }
    showPreview(event) {
        this.selectedImage = localStorage.getItem('selectedImage');
        //alert(this.selectedImage)
    }
    OpenCamera() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.photoService.OpenCameraV1(null).then((ret) => {
                if (ret == "success") {
                    this.imgUrl = localStorage.getItem('imagePath');
                }
            });
            this.imgUrl = localStorage.getItem('imagePath');
        });
    }
    OpenGallery() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            yield this.photoService.OpenGalleryV1();
            this.imgUrl = localStorage.getItem('imagePath').toString();
        });
    }
    CheckInputVal(textField) {
        if (textField == 'fnameValidator') {
            this.fnameValidator = false;
        }
        else if (textField == 'lnameValidator') {
            this.lnameValidator = false;
        }
        else if (textField == 'emailValidator') {
            this.emailValidator = false;
        }
        else if (textField == 'passwordValidator') {
            this.passwordValidator = false;
        }
        else if (textField == 'stuIdValidator') {
            this.stuIdValidator = false;
        }
    }
    checkValidation() {
        let returnVal = true;
        if (this.student.firstName == '') {
            this.fnameValidator = true;
            returnVal = false;
        }
        if (this.student.lastName == '') {
            this.lnameValidator = true;
            returnVal = false;
        }
        if (this.student.email == '') {
            this.emailValidator = true;
            returnVal = false;
        }
        if (this.student.password == '') {
            this.passwordValidator = true;
            returnVal = false;
        }
        if (this.student.studentId == '') {
            this.stuIdValidator = true;
            returnVal = false;
        }
        // this.student.path=this.imgUrl.toString();
        return returnVal;
    }
    RegisterUser(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log('RegisterUser');
            if (this.checkValidation() == true) {
                yield NewuserPage_1.loading.present();
                this.testSubscription = yield this.studentService
                    .SearchId(this.student.studentId)
                    .subscribe((detail) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                    if (detail) {
                        if (detail['email'] == this.student.email) {
                            this.student.stream = detail['stream'];
                            this.CheckUserCred();
                        }
                        else {
                            NewuserPage_1.loading.dismiss();
                            const alert = yield this.alertController.create({
                                cssClass: 'my-custom-class',
                                header: 'Error!',
                                //subHeader: 'Subtitle',
                                message: 'Invalid student ID or Email',
                                buttons: ['OK']
                            });
                            yield alert.present();
                            const { role } = yield alert.onDidDismiss();
                            console.log('onDidDismiss resolved with role', role);
                        }
                    }
                    else {
                        NewuserPage_1.loading.dismiss();
                        const alert = yield this.alertController.create({
                            cssClass: 'my-custom-class',
                            header: 'Error!',
                            //subHeader: 'Subtitle',
                            message: 'Invalid student ID or Email',
                            buttons: ['OK']
                        });
                        yield alert.present();
                        const { role } = yield alert.onDidDismiss();
                        console.log('onDidDismiss resolved with role', role);
                        NewuserPage_1.loading.dismiss();
                    }
                }));
            }
        });
    }
    CheckUserCred() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.selectedImage = localStorage.getItem('imagePathDB');
            if (this.selectedImage != null || this.selectedImage != '')
                this.student.path = this.selectedImage;
            else
                this.selectedImage = '';
            yield this.studentService.RegisterUserLogin(this.student).toString();
            this.testSubscription.unsubscribe();
            NewuserPage_1.loading.dismiss();
        });
    }
    RegisterUserImg() {
        var name = this.imgUrl.toString();
        const fileRef = this.storage.ref(name);
        this.storage.upload(name, localStorage.getItem('selectedImage').toString()).snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.finalize)(() => {
            fileRef.getDownloadURL().subscribe((url) => {
                let url1 = url;
                // this.fileService.insertImageDetails(this.id,this.url);
                //alert('Upload Successful');
            });
        })).subscribe();
    }
    UpdateUser() {
        let dbId = "oEA4QeJY5UU8darU1drF";
        this.student.firstName = "edit";
        this.student.lastName = "user";
        this.student.stream = "bio";
        this.student.userToken = "213e3efmf";
        this.studentService.update_employee(dbId, this.student);
    }
};
NewuserPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_9__.AngularFireAuth },
    { type: _service_student_service__WEBPACK_IMPORTED_MODULE_2__.StudentService },
    { type: _service_photo_service__WEBPACK_IMPORTED_MODULE_3__.PhotoService },
    { type: _service_alert_service__WEBPACK_IMPORTED_MODULE_4__.AlertService },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController },
    { type: _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_11__.AngularFireStorage, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Inject, args: [_angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_11__.AngularFireStorage,] }] }
];
NewuserPage.propDecorators = {
    inputElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild, args: ['input',] }]
};
NewuserPage = NewuserPage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-newuser',
        template: _raw_loader_newuser_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_newuser_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NewuserPage);



/***/ }),

/***/ 3833:
/*!******************************************!*\
  !*** ./src/app/service/alert.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AlertService": () => (/* binding */ AlertService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 476);



let AlertService = class AlertService {
    constructor(alertController) {
        this.alertController = alertController;
    }
    defaultNotification(header, message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: header,
                //subHeader: 'Subtitle',
                message: message,
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
        });
    }
};
AlertService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController }
];
AlertService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], AlertService);



/***/ }),

/***/ 9254:
/*!***********************************************!*\
  !*** ./src/app/service/assignment.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignmentService": () => (/* binding */ AssignmentService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);





let AssignmentService = class AssignmentService {
    constructor(fireservices, ngFireAuth, router) {
        this.fireservices = fireservices;
        this.ngFireAuth = ngFireAuth;
        this.router = router;
    }
    getAllSubjectAssignment(subject) {
        if (subject == "chem") {
            return this.fireservices.collection('ChemAssignments').snapshotChanges();
        }
        else if (subject == "physics") {
            return this.fireservices.collection('physicsAssignments').snapshotChanges();
        }
        else if (subject == "pure") {
            return this.fireservices.collection('pureMathsAssignmet').snapshotChanges();
        }
        else if (subject == "applied") {
            return this.fireservices.collection('appliedMathsAssignment').snapshotChanges();
        }
    }
};
AssignmentService.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_0__.AngularFirestore },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_1__.AngularFireAuth },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AssignmentService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], AssignmentService);



/***/ }),

/***/ 2248:
/*!*****************************************!*\
  !*** ./src/app/service/file.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileService": () => (/* binding */ FileService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/compat/database */ 9978);



let FileService = class FileService {
    constructor(firebase) {
        this.firebase = firebase;
        this.dataSet = {
            id: '',
            url: ''
        };
        this.msg = 'error';
    }
    getImageDetailList() {
        this.imageDetailList = this.firebase.list('imageDetails');
    }
    insertImageDetails(id, url) {
        this.dataSet = {
            id: id,
            url: url
        };
        this.imageDetailList.push(this.dataSet);
    }
    getImage(value) {
        this.imageDetailList.snapshotChanges().subscribe(list => {
            this.fileList = list.map(item => { return item.payload.val(); });
            this.fileList.forEach(element => {
                if (element.id === value)
                    this.msg = element.url;
                //alert(this.msg);
            });
            if (this.msg === 'error')
                alert('No record found');
            else {
                window.open(this.msg);
                this.msg = 'error';
            }
        });
        // localStorage.setItem(
        //   'dataurl',
        //   this.msg
        // );
    }
};
FileService.ctorParameters = () => [
    { type: _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_0__.AngularFireDatabase, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject, args: [_angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_0__.AngularFireDatabase,] }] }
];
FileService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], FileService);



/***/ }),

/***/ 1617:
/*!********************************************!*\
  !*** ./src/app/service/network.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkService": () => (/* binding */ NetworkService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/storage */ 3893);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/network/ngx */ 5592);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file.service */ 2248);






let NetworkService = class NetworkService {
    constructor(network, alertController, storage, fileService) {
        this.network = network;
        this.alertController = alertController;
        this.storage = storage;
        this.fileService = fileService;
    }
    displayAlert(header, subHeader, msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: header,
                subHeader: subHeader,
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
        });
    }
    ConnectionStatus() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.network.onDisconnect().subscribe(() => {
                setTimeout(() => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                    localStorage.setItem("networkConnection", "false");
                    const alert = yield this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Connection Interrupted!',
                        message: 'Your internet connection appears to be offline',
                        buttons: ['OK']
                    });
                    yield alert.present();
                    const { role } = yield alert.onDidDismiss();
                }), 3000);
                //this.importantNotifications=JSON.stringify(localStorage.getItem('ImportantNotification'));
            });
            this.network.onConnect().subscribe(() => {
                // We just got a connection but we need to wait briefly
                // before we determine the connection type. Might need to wait.
                // prior to doing any api requests as well.
                setTimeout(() => {
                    if (this.network.type === 'wifi') {
                        localStorage.setItem("networkConnection", "true");
                    }
                }, 3000);
            });
        });
    }
};
NetworkService.ctorParameters = () => [
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_0__.Network },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_4__.AngularFireStorage, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject, args: [_angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_4__.AngularFireStorage,] }] },
    { type: _file_service__WEBPACK_IMPORTED_MODULE_1__.FileService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Inject, args: [_file_service__WEBPACK_IMPORTED_MODULE_1__.FileService,] }] }
];
NetworkService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], NetworkService);



/***/ }),

/***/ 7320:
/*!*************************************************!*\
  !*** ./src/app/service/notification.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);





let NotificationService = class NotificationService {
    constructor(fireservices, ngFireAuth, router) {
        this.fireservices = fireservices;
        this.ngFireAuth = ngFireAuth;
        this.router = router;
    }
    getAllImportantNotification() {
        return this.fireservices.collection('importanNotifications').snapshotChanges();
    }
    getAllNotification() {
        return this.fireservices.collection('notifications').snapshotChanges();
    }
};
NotificationService.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_0__.AngularFirestore },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_1__.AngularFireAuth },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
NotificationService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], NotificationService);



/***/ }),

/***/ 5263:
/*!******************************************!*\
  !*** ./src/app/service/photo.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoService": () => (/* binding */ PhotoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 4267);
/* harmony import */ var src_app_page_newuser_newuser_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/page/newuser/newuser.page */ 5939);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/storage */ 3893);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8939);








let PhotoService = class PhotoService {
    constructor(platform, camera, laodingController, ngFireAuth, angularFirestore) {
        this.camera = camera;
        this.laodingController = laodingController;
        this.ngFireAuth = ngFireAuth;
        this.angularFirestore = angularFirestore;
        this.win = window;
        this.platform = platform;
    }
    /**
     * Open the camera and get the photo
     */
    OpenCamera() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const options = {
                quality: 100,
                destinationType: this.camera.DestinationType.FILE_URI,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                saveToPhotoAlbum: true,
            };
            yield this.camera.getPicture(options).then((imageData) => {
                localStorage.setItem('imagePath', this.win.Ionic.WebView.convertFileSrc(imageData));
            }, (err) => {
                //alert(err)
            });
        });
    }
    OpenCameraV1(inputValue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            localStorage.setItem('imagePath', null);
            const options = {
                quality: 20,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                saveToPhotoAlbum: true,
            };
            yield this.camera.getPicture(options).then((imageData) => {
                localStorage.setItem('imagePath', this.win.Ionic.WebView.convertFileSrc(imageData));
                let base64Image = 'data:image/jpeg;base64,' + imageData;
                localStorage.setItem('imagePath', base64Image);
                this.selectedPhoto = this.datURLtoBlob(base64Image);
                this.uploadImage();
                return "success";
            }, (err) => {
                //alert(err);
            });
            return "";
        });
    }
    datURLtoBlob(dataURL) {
        try {
            let binay = atob(dataURL.split(',')[1]);
            let array = [];
            for (let i = 0; i < binay.length; i++) {
                array.push(binay.charCodeAt(i));
            }
            return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
        }
        catch (ex) {
        }
    }
    ;
    uploadImage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            src_app_page_newuser_newuser_page__WEBPACK_IMPORTED_MODULE_1__.NewuserPage.loading = yield this.laodingController.create({
                message: 'Uploading...',
                showBackdrop: false,
            });
            yield src_app_page_newuser_newuser_page__WEBPACK_IMPORTED_MODULE_1__.NewuserPage.loading.present();
            if (this.selectedPhoto) {
                var name = new Date().getTime();
                var pathUrl = "UserImages/" + name + ".png";
                const uploadTask = this.angularFirestore.ref(pathUrl);
                let upim = uploadTask.put(this.selectedPhoto);
                upim.snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => {
                    uploadTask.getDownloadURL().subscribe(url => {
                        src_app_page_newuser_newuser_page__WEBPACK_IMPORTED_MODULE_1__.NewuserPage.loading.dismiss();
                        localStorage.setItem('imagePathDB', url);
                        // alert(localStorage.getItem('imagePathDB').toString()); // <-- do what ever you want with the url..
                        // this.displayAlert("Success", "", "Assigment submission is success");
                    });
                })).subscribe();
            }
        });
    }
    /**
     * Open the phone gallery and upload the photo
     */
    OpenGallery() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.camera
                .getPicture({
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                destinationType: this.camera.DestinationType.FILE_URI,
            })
                .then((imageData) => {
                localStorage.setItem('imagePath', this.win.Ionic.WebView.convertFileSrc(imageData));
            }, (err) => { });
        });
    }
    OpenGalleryV1() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.camera
                .getPicture({
                sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                destinationType: this.camera.DestinationType.DATA_URL,
            })
                .then((imageData) => (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
                var name = new Date().getTime();
                var pathUrl = "UserImages/" + name + ".png";
                let base64Image = 'data:image/jpeg;base64,' + imageData;
                localStorage.setItem('imagePath', base64Image);
                this.selectedPhoto = this.datURLtoBlob(base64Image);
                const fileRef = this.angularFirestore.ref(pathUrl);
                src_app_page_newuser_newuser_page__WEBPACK_IMPORTED_MODULE_1__.NewuserPage.loading = yield this.laodingController.create({
                    message: 'Uploading...',
                    showBackdrop: false,
                });
                yield src_app_page_newuser_newuser_page__WEBPACK_IMPORTED_MODULE_1__.NewuserPage.loading.present();
                this.angularFirestore.upload(pathUrl, this.selectedPhoto).snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.finalize)(() => {
                    fileRef.getDownloadURL().subscribe((url) => {
                        localStorage.setItem('imagePathDB', url);
                        //this.url = url;
                        //this.fileService.insertImageDetails(name, this.url);
                        src_app_page_newuser_newuser_page__WEBPACK_IMPORTED_MODULE_1__.NewuserPage.loading.dismiss();
                        //alert(url);
                        //this.displayAlert("Success", "", "Assigment submission is success");
                    });
                })).subscribe();
            }), (err) => { });
        });
    }
};
PhotoService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_0__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth },
    { type: _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_6__.AngularFireStorage }
];
PhotoService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root',
    })
], PhotoService);



/***/ }),

/***/ 302:
/*!********************************************!*\
  !*** ./src/app/service/student.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StudentService": () => (/* binding */ StudentService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/storage */ 3893);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8939);
/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file.service */ 2248);









let StudentService = class StudentService {
    constructor(fireservices, ngFireAuth, router, alertController, storage, fileService) {
        this.fireservices = fireservices;
        this.ngFireAuth = ngFireAuth;
        this.router = router;
        this.alertController = alertController;
        this.storage = storage;
        this.fileService = fileService;
        this.dataSet = {
            id: '',
            url: ''
        };
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
    }
    displayAlert(header, subHeader, msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: header,
                subHeader: subHeader,
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
        });
    }
    SearchId(id) {
        // var ref=this.fireservices.collection('student');
        // ref.orderByChild("height").equalTo(25).on("child_added", function(snapshot) {
        //   console.log(snapshot.key);
        // });
        return this.fireservices.doc('/studentIdList/' + id).valueChanges();
    }
    // save() {
    //   var name = this.selectedImage.name;
    //   const fileRef = this.storage.ref(name);
    //   this.storage.upload(name, this.selectedImage).snapshotChanges().pipe(
    //     finalize(() => {
    //       fileRef.getDownloadURL().subscribe((url) => {
    //         this.url = url;
    //         this.fileService.insertImageDetails(this.id,this.url);
    //         alert('Upload Successful');
    //       })
    //     })
    //   ).subscribe();
    // }
    RegisterUserLogin(student) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            console.log('studentservice');
            this.testSubscription = yield this.ngFireAuth
                .createUserWithEmailAndPassword(student.email, student.password)
                .then((userCredential) => {
                student.userToken = userCredential.user.uid;
                student.createdDate = Date.now().toString();
                this.fireservices
                    .collection('student')
                    .add(student)
                    .then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                    this.save(student.email, student.path);
                }))
                    .catch((error) => {
                    console.log(error);
                });
            })
                .catch((error) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                const errorCode = error.code;
                const errorMessage = error.message;
                const alert = yield this.alertController.create({
                    cssClass: 'my-custom-class',
                    header: 'Error!',
                    //subHeader: 'Subtitle',
                    message: 'This user is already exist',
                    buttons: ['OK']
                });
                yield alert.present();
                const { role } = yield alert.onDidDismiss();
            }));
        });
    }
    save(email, path) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const fileRef = this.storage.ref(email);
            this.storage.upload(email, path).snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.finalize)(() => {
                fileRef.getDownloadURL().subscribe((url) => (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
                    let url1 = url;
                    //this.fileService.insertImageDetails(email,url1);
                    const alert = yield this.alertController.create({
                        cssClass: 'my-custom-class',
                        header: 'Success!',
                        //subHeader: 'Subtitle',
                        message: 'User successfully registered',
                        buttons: ['OK']
                    });
                    yield alert.present();
                    const { role } = yield alert.onDidDismiss();
                    this.router.navigate(['/login']);
                }));
            })).subscribe();
        });
    }
    create_student(student) {
        console.log(student);
        return this.fireservices.collection('student').add(student);
    }
    getAllstudent() {
        console.log('getAllstudent');
        return this.fireservices.collection('student').snapshotChanges().subscribe((data) => {
            this.studentDetail = data.map((e) => {
                return {
                    id: e.payload.doc.id,
                    studentEmail: e.payload.doc.data()['email'],
                    studentId: e.payload.doc.data()['studentId'],
                    firstName: e.payload.doc.data()['firstName'],
                    lastName: e.payload.doc.data()['lastName'],
                    stream: e.payload.doc.data()['stream'],
                    imgPath: e.payload.doc.data()['path'],
                    createdDate: e.payload.doc.data()['createdDate'],
                    userToken: e.payload.doc.data()['userToken'],
                };
            });
            this.studentDetail.forEach(element => {
                if (element.studentEmail == localStorage.getItem("StudentEmail").toString()) {
                    localStorage.setItem("StudentId", element.studentId);
                    localStorage.setItem("Name", element.firstName + ' ' + element.lastName);
                    localStorage.setItem("stream", element.stream),
                        localStorage.setItem("path", element.imgPath),
                        localStorage.setItem("iId", element.id),
                        console.log('Student ID');
                    console.log(localStorage.getItem("StudentId").toString());
                    this.student.firstName = element.firstName;
                    this.student.lastName = element.lastName;
                    this.student.studentId = element.studentId;
                    this.student.path = element.imgPath;
                    this.student.createdDate = element.createdDate;
                    this.student.updatedDate = element.createdDate;
                    this.student.email = element.studentEmail;
                    this.student.userToken = element.userToken;
                    this.student.stream = element.stream;
                    localStorage.setItem("StudentData", JSON.stringify(this.student));
                    //student.password=element.
                }
            });
        });
    }
    /**
     * Represents a book.
     * @param {string} recordid - The title of the book.
     * @param {object} record - The author of the book.
     */
    update_employee(recordid, record) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.fireservices.doc('student/' + recordid).update(record);
            this.displayAlert('Success', '', 'Your profile is updated.Please login again to refresh.');
            // this.fireservices.
        });
    }
    sendResetMail(email) {
        return this.ngFireAuth.sendPasswordResetEmail(email);
    }
};
StudentService.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_3__.AngularFirestore },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_4__.AngularFireAuth },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_7__.AngularFireStorage, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Inject, args: [_angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_7__.AngularFireStorage,] }] },
    { type: _file_service__WEBPACK_IMPORTED_MODULE_0__.FileService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Inject, args: [_file_service__WEBPACK_IMPORTED_MODULE_0__.FileService,] }] }
];
StudentService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root',
    })
], StudentService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBjhQADE4W4sYtyziejoflX3pjlx9916aE",
        authDomain: "eduappweb.firebaseapp.com",
        projectId: "eduappweb",
        storageBucket: "eduappweb.appspot.com",
        messagingSenderId: "962423474708",
        appId: "1:962423474708:web:f6c4ef635829eb92b3b501"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 4608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		7321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		6108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		1489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		5830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		7757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		6911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		8695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		2239,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		8837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		4195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		1709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		5931,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		4513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		8056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		1855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		8708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		3527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		4694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		9222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		9921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		3122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		1602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		6164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		7162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		7896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		5043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		7802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		9072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		2191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		7110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 3069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".page-titles {\n  color: red;\n}\n\n.imgIcons {\n  width: 15%;\n  height: 15%;\n}\n\n#loading {\n  z-index: 10;\n  height: 100px;\n  width: 200px;\n  background-color: rgba(255, 255, 255, 0.85);\n  padding: 40px;\n  border: 1px solid #d3d3d3;\n  border-radius: 5px;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0E7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSwyQ0FBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUFFSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS10aXRsZXN7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbi5pbWdJY29uc3tcclxuICAgIHdpZHRoOiAxNSU7XHJcbiAgICBoZWlnaHQ6IDE1JTtcclxufVxyXG5cclxuI2xvYWRpbmd7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuODUpO1xyXG4gICAgcGFkZGluZzogNDBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkM2QzZDM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgIGJveC1zaGFkb3c6IDBweCAxcHggM3B4IHJnYmEoMCwwLDAsMC41KTtcclxufSJdfQ== */");

/***/ }),

/***/ 1513:
/*!************************************************!*\
  !*** ./src/app/page/newuser/newuser.page.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".btn-cam {\n  color: \"green\";\n  size: \"small\";\n  width: \"150px\";\n}\n\n.my-label {\n  font-size: 0.7em;\n  color: red;\n}\n\n.my-custom-class .alert-wrapper {\n  background: #e5e5e5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld3VzZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLFVBQUE7QUFFSjs7QUFDRTtFQUNFLG1CQUFBO0FBRUoiLCJmaWxlIjoibmV3dXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuLWNhbXtcclxuICAgIGNvbG9yIDogXCJncmVlblwiO1xyXG4gICAgc2l6ZSA6XCJzbWFsbFwiO1xyXG4gICAgd2lkdGg6IFwiMTUwcHhcIjtcclxufVxyXG4ubXktbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAwLjdlbTtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgfVxyXG5cclxuICAubXktY3VzdG9tLWNsYXNzIC5hbGVydC13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ 1106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n  <ion-menu side=\"start\" menuId=\"first\" contentId=\"main\">\n    <ion-header>\n      <ion-toolbar style=\"align-items: center;\" color=\"secondary\">\n        <div style=\"padding-left: 40%; padding-bottom: 5%; padding-top: 5%;\">\n          <ion-avatar>\n            <img src=\"{{imgUrl}}\" height=\"100\" width=\"100\" />\n          </ion-avatar>\n        </div>\n      </ion-toolbar>\n      <ion-toolbar color=\"primary\">\n        <div>\n          <ion-label style=\"padding-left: 10%; padding-bottom: 5%;\">{{name}}</ion-label>\n        </div>\n        <div>\n          <ion-label style=\"padding-left: 10%;\">Studen ID: {{studentId}} </ion-label>\n        </div>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle hidden>\n          <ion-item routerLink=\"/edit-user\">\n            <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n            <ion-label>Update Profile</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle hidden>\n          <ion-item routerLink=\"/fileupview\">\n            <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n            <ion-label>File upload</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle hidden>\n          <ion-item routerLink=\"/assignmentview\">\n            <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n            <ion-label>View Assignments</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle>\n          <ion-item routerLink=\"/home\">\n            <ion-img class=\"imgIcons\" slot=\"start\" src=\"../assets/Images/menu_home.png\"></ion-img>\n            <ion-label style=\"font-weight: bold;\">Home</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle>\n          <ion-item routerLink=\"/notifications\">\n            <ion-img class=\"imgIcons\" slot=\"start\" src=\"../assets/Images/menu_notification.png\"></ion-img>\n\n            <ion-label style=\"font-weight: bold;\">Notification</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n\n        <ion-menu-toggle>\n          <ion-item routerLink=\"/subjects\">\n            <ion-img class=\"imgIcons\" slot=\"start\" src=\"../assets/Images/menu_subjects.png\"></ion-img>\n            <ion-label style=\"font-weight: bold;\">Subjects</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle>\n          <ion-item routerLink=\"/quick-submit\">\n            <ion-img class=\"imgIcons\" slot=\"start\" src=\"../assets/Images/menu_upload.png\"></ion-img>\n            <ion-label style=\"font-weight: bold;\">Quick Submit</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle>\n          <ion-item routerLink=\"/update-user\">\n            <ion-img class=\"imgIcons\" slot=\"start\" src=\"../assets/Images/menu_profile.png\"></ion-img>\n            <ion-label style=\"font-weight: bold;\">My Profile</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle>\n          <ion-item routerLink=\"/support\">\n            <ion-img class=\"imgIcons\" slot=\"start\" src=\"../assets/Images/menu_support.png\"></ion-img>\n            <ion-label style=\"font-weight: bold;\">Support</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle>\n          <ion-item routerLink=\"/login\">\n            <ion-img class=\"imgIcons\" slot=\"start\" src=\"../assets/Images/menu_logout.png\"></ion-img>\n            <ion-label style=\"font-weight: bold;\">Logout</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\n</ion-app>");

/***/ }),

/***/ 4925:
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/newuser/newuser.page.html ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"page-titles\">Register User</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <div>\n      <ion-label position=\"floating\">First Name</ion-label>\n      <ion-input id=\"name\" name=\"name\" (ionInput)=\"CheckInputVal('fnameValidator')\" [(ngModel)]=\"student.firstName\" required minlength=\"1\">\n      </ion-input>\n    </div>\n    <div>\n      <ion-label class=\"my-label\" *ngIf=\"fnameValidator\">Please enter First Name</ion-label>\n    </div>\n  </ion-item>\n  <ion-item>\n    <div>\n      <ion-label position=\"floating\">Last Name</ion-label>\n      <ion-input [(ngModel)]=\"student.lastName\" (ionInput)=\"CheckInputVal('lnameValidator')\"></ion-input>\n    </div>\n    <div>\n      <ion-label class=\"my-label\" *ngIf=\"lnameValidator\">Please enter Last Name</ion-label>\n    </div>\n  </ion-item>\n  <ion-item>\n    <div>\n      <ion-label position=\"floating\">Email</ion-label>\n      <ion-input [(ngModel)]=\"student.email\" (ionInput)=\"CheckInputVal('emailValidator')\"></ion-input>\n    </div>\n    <div>\n      <ion-label class=\"my-label\" *ngIf=\"emailValidator\">Please enter email</ion-label>\n    </div>\n  </ion-item>\n  <ion-item>\n    <div>\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input [(ngModel)]=\"student.password\"  type=\"password\" (ionInput)=\"CheckInputVal('passwordValidator')\"></ion-input>\n    </div>\n    <div>\n      <ion-label class=\"my-label\" *ngIf=\"passwordValidator\">Please enter Password</ion-label>\n    </div>\n  </ion-item>\n  <ion-item>\n    <div>\n      <ion-label position=\"floating\">Student ID</ion-label>\n      <ion-input [(ngModel)]=\"student.studentId\" (ionInput)=\"CheckInputVal('stuIdValidator')\"></ion-input>\n    </div>\n    <div>\n      <ion-label class=\"my-label\" *ngIf=\"stuIdValidator\">Please enter Student ID</ion-label>\n    </div>\n  </ion-item>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-align-self-end\">\n        <ion-row>\n          <ion-button class=\"btn-cam\" color=\"secondary\" size=\"small\" style=\"width: 150px\" (change)=\"showPreview($event)\" (click)=\"OpenCamera()\">Open\n            Camera</ion-button>\n        </ion-row>\n        <ion-row>\n          <ion-button class=\"btn-cam\" color=\"secondary\" size=\"small\" style=\"width: 150px\" (change)=\"showPreview($event)\" (click)=\"OpenGallery()\">Open\n            Gallerry</ion-button>\n        </ion-row>\n      </ion-col>\n      <ion-col class=\"ion-align-self-end\"> <img src=\"{{imgUrl}}\"  height=\"100\" width=\"100\" /></ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-button expand=\"block\" (click)=\"RegisterUser()\">Register</ion-button>\n</ion-content>");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map