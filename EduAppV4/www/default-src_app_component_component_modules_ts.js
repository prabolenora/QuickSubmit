(self["webpackChunkEduAppV1"] = self["webpackChunkEduAppV1"] || []).push([["default-src_app_component_component_modules_ts"],{

/***/ 3856:
/*!**************************************************************!*\
  !*** ./src/app/component/assignment/assignment.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignmentComponent": () => (/* binding */ AssignmentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_assignment_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./assignment.component.html */ 6358);
/* harmony import */ var _assignment_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignment.component.scss */ 2407);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_service_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/file.service */ 2248);
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/notification.service */ 7320);









let AssignmentComponent = class AssignmentComponent {
    constructor(ngFireAuth, fireservices, notificationService, fileService, toastController, renderer) {
        this.ngFireAuth = ngFireAuth;
        this.fireservices = fireservices;
        this.notificationService = notificationService;
        this.fileService = fileService;
        this.toastController = toastController;
        this.renderer = renderer;
        this.expanded = false;
        this.expandHeight = "150px";
    }
    ngOnInit() {
        this.fileService.getImageDetailList();
        console.log('assigmntlist');
        console.log(this.assignmentList);
        localStorage.setItem("AssigmentId", this.assignmentList.imgId);
    }
    view() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.assignmentList.imgId);
            yield this.fileService.getImage(this.assignmentList.imgId);
            //alert(localStorage.getItem('dataurl').toString());
            // this.dataurl=localStorage.getItem('dataurl').toString();
            // alert(this.dataurl);
        });
    }
    ngAfterViewInit() {
        this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
    }
};
AssignmentComponent.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_5__.AngularFireAuth },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_6__.AngularFirestore },
    { type: _service_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService },
    { type: src_app_service_file_service__WEBPACK_IMPORTED_MODULE_2__.FileService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject, args: [src_app_service_file_service__WEBPACK_IMPORTED_MODULE_2__.FileService,] }] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2 }
];
AssignmentComponent.propDecorators = {
    assignmentList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input }],
    expandWrapper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ["expandWrapper", { read: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef },] }],
    expanded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ["expanded",] }],
    expandHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input, args: ["expandHeight",] }]
};
AssignmentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-assignment',
        template: _raw_loader_assignment_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_assignment_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AssignmentComponent);



/***/ }),

/***/ 5657:
/*!************************************************!*\
  !*** ./src/app/component/component.modules.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": () => (/* binding */ ComponentsModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _component_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/header/header.component */ 4456);
/* harmony import */ var _component_notification_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/notification/notification.component */ 9285);
/* harmony import */ var _component_assignment_assignment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../component/assignment/assignment.component */ 3856);
/* harmony import */ var _component_submit_assignmnet_submit_assignmnet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/submit-assignmnet/submit-assignmnet.component */ 2475);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);







let ComponentsModule = class ComponentsModule {
};
ComponentsModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [
            _component_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
            _component_notification_notification_component__WEBPACK_IMPORTED_MODULE_1__.NotificationComponent,
            _component_assignment_assignment_component__WEBPACK_IMPORTED_MODULE_2__.AssignmentComponent,
            _component_submit_assignmnet_submit_assignmnet_component__WEBPACK_IMPORTED_MODULE_3__.SubmitAssignmnetComponent
        ],
        exports: [
            _component_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent,
            _component_notification_notification_component__WEBPACK_IMPORTED_MODULE_1__.NotificationComponent,
            _component_assignment_assignment_component__WEBPACK_IMPORTED_MODULE_2__.AssignmentComponent,
            _component_submit_assignmnet_submit_assignmnet_component__WEBPACK_IMPORTED_MODULE_3__.SubmitAssignmnetComponent
        ],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_5__.CUSTOM_ELEMENTS_SCHEMA],
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule]
    })
], ComponentsModule);



/***/ }),

/***/ 4456:
/*!******************************************************!*\
  !*** ./src/app/component/header/header.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./header.component.html */ 9373);
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss */ 1658);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() { }
};
HeaderComponent.ctorParameters = () => [];
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HeaderComponent);



/***/ }),

/***/ 9285:
/*!******************************************************************!*\
  !*** ./src/app/component/notification/notification.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationComponent": () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_notification_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./notification.component.html */ 3853);
/* harmony import */ var _notification_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification.component.scss */ 6647);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/notification.service */ 7320);







let NotificationComponent = class NotificationComponent {
    constructor(ngFireAuth, fireservices, notificationService) {
        this.ngFireAuth = ngFireAuth;
        this.fireservices = fireservices;
        this.notificationService = notificationService;
    }
    ngOnInit() {
        console.log("notifi comp");
    }
};
NotificationComponent.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_3__.AngularFireAuth },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_4__.AngularFirestore },
    { type: _service_notification_service__WEBPACK_IMPORTED_MODULE_2__.NotificationService }
];
NotificationComponent.propDecorators = {
    notificationList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
NotificationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-notification',
        template: _raw_loader_notification_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_notification_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NotificationComponent);



/***/ }),

/***/ 2475:
/*!****************************************************************************!*\
  !*** ./src/app/component/submit-assignmnet/submit-assignmnet.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubmitAssignmnetComponent": () => (/* binding */ SubmitAssignmnetComponent),
/* harmony export */   "iSubmitList": () => (/* binding */ iSubmitList)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_submit_assignmnet_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./submit-assignmnet.component.html */ 246);
/* harmony import */ var _submit_assignmnet_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./submit-assignmnet.component.scss */ 7136);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/storage */ 3893);
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ 4267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 8939);
/* harmony import */ var src_app_page_assignmentview_assignmentview_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/page/assignmentview/assignmentview.page */ 6577);
/* harmony import */ var src_app_service_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/file.service */ 2248);
/* harmony import */ var src_app_service_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/network.service */ 1617);
/* harmony import */ var src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/notification.service */ 7320);













let SubmitAssignmnetComponent = class SubmitAssignmnetComponent {
    constructor(storage, fileService, camera, navController, laodingController, ngFireAuth, angularFirestore, alertController, networkService, notificationService) {
        this.storage = storage;
        this.fileService = fileService;
        this.camera = camera;
        this.navController = navController;
        this.laodingController = laodingController;
        this.ngFireAuth = ngFireAuth;
        this.angularFirestore = angularFirestore;
        this.alertController = alertController;
        this.networkService = networkService;
        this.notificationService = notificationService;
        this.selectedImage = null;
        this.inputValue = "";
        this.user = {
            email: '',
            password: ''
        };
        this.stuIdValidator = true;
        this.empList = [];
        console.log('submit');
        // this.networkService.ConnectionStatus();
    }
    ngOnInit() {
        this.subject = localStorage.getItem("LogedSubject").toString();
        this.studentId = localStorage.getItem("StudentId").toString();
    }
    showPreview(event) {
        this.selectedImage = event.target.files[0];
    }
    getAssignmetnId(ev) {
        this.assignmentId = ev.target.value;
    }
    displayAlert(header, subHeader, msg) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
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
    SubmitUploadFile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log('SubmitUploadFile');
            if (this.selectedImage == null) {
                this.stuIdValidator = true;
                yield this.displayAlert("Error!", "Invalid Input", "Please select a file to upload");
            }
            else if (localStorage.getItem("LogedSubject").toString() == 'all') {
                yield this.displayAlert("Error!", "", "Please select the subject first");
            }
            else {
                this.subject = localStorage.getItem("LogedSubject").toString();
                var name = this.subject + '/' + this.selectedImage.name;
                const fileRef = this.storage.ref(name);
                src_app_page_assignmentview_assignmentview_page__WEBPACK_IMPORTED_MODULE_3__.AssignmentviewPage.loading = yield this.laodingController.create({
                    message: 'Uploading...',
                    showBackdrop: false,
                });
                yield src_app_page_assignmentview_assignmentview_page__WEBPACK_IMPORTED_MODULE_3__.AssignmentviewPage.loading.present();
                //alert(localStorage.getItem('networkConnection'));
                if (localStorage.getItem('networkConnection') == 'false') {
                    src_app_page_assignmentview_assignmentview_page__WEBPACK_IMPORTED_MODULE_3__.AssignmentviewPage.loading.dismiss();
                    this.empList = JSON.parse(localStorage.getItem('submitList'));
                    if (this.empList == null) {
                        this.empList = [];
                    }
                    this.empList.push({
                        name: name,
                        selectedPicture: this.selectedImage,
                        ref: fileRef
                    });
                    localStorage.setItem("submitList", JSON.stringify(this.empList));
                    this.displayAlert("Notice!", "", "Your assignment will be uploaded when you are online");
                }
                this.storage.upload(name, this.selectedImage).snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => {
                    fileRef.getDownloadURL().subscribe((url) => {
                        this.url = url;
                        this.fileService.insertImageDetails(name, this.url);
                        src_app_page_assignmentview_assignmentview_page__WEBPACK_IMPORTED_MODULE_3__.AssignmentviewPage.loading.dismiss();
                        this.displayAlert("Success", "", "Assigment submission is success");
                    });
                })).subscribe();
            }
        });
    }
    OpenCamera(inputValue) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            // alert(inputValue);
            // alert(this.assigmentSubmission)
            if (this.assignmentId == null) {
                yield this.displayAlert("Error!", "Invalid Input ID", "Please insert the assigmnet ID first");
            }
            else if (localStorage.getItem("LogedSubject").toString() == 'all') {
                yield this.displayAlert("Error!", "Invalid Input", "Please select the subject first");
            }
            else {
                this.subject = localStorage.getItem("LogedSubject").toString();
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
                    //alert(err);
                });
            }
        });
    }
    uploadImageV1() {
        let name = this.selectedPhoto.name;
        const fileRef = this.storage.ref('myFolder1/' + name);
        this.storage.upload(name, this.selectedImage).snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => {
            fileRef.getDownloadURL().subscribe((url) => {
                this.url = url;
                this.fileService.insertImageDetails(name, this.url);
                alert('Upload Successful');
            });
        })).subscribe();
    }
    uploadImage() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            src_app_page_assignmentview_assignmentview_page__WEBPACK_IMPORTED_MODULE_3__.AssignmentviewPage.loading = yield this.laodingController.create({
                message: 'Uploading...',
                showBackdrop: false,
            });
            yield src_app_page_assignmentview_assignmentview_page__WEBPACK_IMPORTED_MODULE_3__.AssignmentviewPage.loading.present();
            if (this.selectedPhoto) {
                var name = new Date().getTime();
                //const uploadTask = this.angularFirestore.storage.ref().child(this.subject).child(this.assignmentId + '_' + this.studentId).put(this.selectedPhoto);
                var pathUrl = this.subject + "/" + this.assignmentId + '_' + this.studentId + ".png";
                const uploadTask = this.angularFirestore.ref(pathUrl);
                let upim = uploadTask.put(this.selectedPhoto);
                upim.snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.finalize)(() => {
                    uploadTask.getDownloadURL().subscribe(url => {
                        src_app_page_assignmentview_assignmentview_page__WEBPACK_IMPORTED_MODULE_3__.AssignmentviewPage.loading.dismiss();
                        alert(url); // <-- do what ever you want with the url..
                        this.displayAlert("Success", "", "Assigment submission is success");
                    });
                })).subscribe();
            }
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
};
SubmitAssignmnetComponent.ctorParameters = () => [
    { type: _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_9__.AngularFireStorage, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject, args: [_angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_9__.AngularFireStorage,] }] },
    { type: src_app_service_file_service__WEBPACK_IMPORTED_MODULE_4__.FileService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Inject, args: [src_app_service_file_service__WEBPACK_IMPORTED_MODULE_4__.FileService,] }] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__.Camera },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_12__.AngularFireAuth },
    { type: _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_9__.AngularFireStorage },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: src_app_service_network_service__WEBPACK_IMPORTED_MODULE_5__.NetworkService },
    { type: src_app_service_notification_service__WEBPACK_IMPORTED_MODULE_6__.NotificationService }
];
SubmitAssignmnetComponent.propDecorators = {
    assigmentSubmission: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }]
};
SubmitAssignmnetComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-submit-assignmnet',
        template: _raw_loader_submit_assignmnet_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_submit_assignmnet_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SubmitAssignmnetComponent);

class iSubmitList {
}


/***/ }),

/***/ 6577:
/*!************************************************************!*\
  !*** ./src/app/page/assignmentview/assignmentview.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AssignmentviewPage": () => (/* binding */ AssignmentviewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_assignmentview_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./assignmentview.page.html */ 5008);
/* harmony import */ var _assignmentview_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assignmentview.page.scss */ 7129);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _service_assignment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/assignment.service */ 9254);






let AssignmentviewPage = class AssignmentviewPage {
    constructor(assignmentService, router) {
        this.assignmentService = assignmentService;
        this.router = router;
        console.log('click');
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.Subject = localStorage.getItem('Subject').toString();
            localStorage.setItem("Subject", 'all');
            if (this.Subject == 'chem') {
                this.AssigmentTitle = "Chemistry Assignmnet";
                localStorage.setItem("LogedSubject", 'chem');
            }
            else if (this.Subject == 'pure') {
                this.AssigmentTitle = "Pure Mathematics Assignmnet";
                localStorage.setItem("LogedSubject", 'pure');
            }
            else if (this.Subject == 'applied') {
                this.AssigmentTitle = "Applied Mathematics Assignmnet";
                localStorage.setItem("LogedSubject", 'applied');
            }
            else if (this.Subject == 'physics') {
                this.AssigmentTitle = "Physics Assignmnet";
                localStorage.setItem("LogedSubject", 'physics');
            }
            yield this.assignmentService.getAllSubjectAssignment(this.Subject).subscribe((data) => {
                this.assigmnetList = data.map((e) => {
                    return {
                        id: e.payload.doc.id,
                        title: e.payload.doc.data()['Title'],
                        description: e.payload.doc.data()['DueDate'].toDate(),
                        imgId: e.payload.doc.data()['ID'],
                        status: e.payload.doc.data()['Active'],
                        expanded: false
                    };
                });
            });
        });
    }
    toggleSection(index) {
        //alert(index);
        this.assigmnetList[index].open = true;
    }
    expandItem(item) {
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.assigmnetList.map(listItem => {
                if (item == listItem) {
                    listItem.expanded = !listItem.expanded;
                }
                else {
                    listItem.expanded = false;
                }
                return listItem;
            });
        }
    }
    previouspage() {
        this.router.navigate(['/subjects']);
    }
};
AssignmentviewPage.ctorParameters = () => [
    { type: _service_assignment_service__WEBPACK_IMPORTED_MODULE_2__.AssignmentService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
AssignmentviewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-assignmentview',
        template: _raw_loader_assignmentview_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_assignmentview_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AssignmentviewPage);



/***/ }),

/***/ 2407:
/*!****************************************************************!*\
  !*** ./src/app/component/assignment/assignment.component.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".expand-wrapper {\n  transition: max-height 0.4s ease-in-out;\n  overflow: hidden;\n  height: auto;\n}\n\n.collapsed {\n  max-height: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2lnbm1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUNFO0VBQ0Usd0JBQUE7QUFFSiIsImZpbGUiOiJhc3NpZ25tZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4cGFuZC13cmFwcGVyIHtcclxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC40cyBlYXNlLWluLW91dDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIC5jb2xsYXBzZWQge1xyXG4gICAgbWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 1658:
/*!********************************************************!*\
  !*** ./src/app/component/header/header.component.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ 6647:
/*!********************************************************************!*\
  !*** ./src/app/component/notification/notification.component.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".ion-card-list {\n  background-size: cover;\n  background-color: #bdebf7;\n}\n\n.card-content-md {\n  color: #00000a;\n}\n\n.item-title {\n  background-color: #bdebf7;\n  color: #000875;\n  font-family: Impact, Haettenschweiler, \"Gill Sans\", \"Gill Sans MT\", Calibri, \"Trebuchet MS\", sans-serif, sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFDQTtFQUVJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1IQUFBO0FBQ0oiLCJmaWxlIjoibm90aWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi1jYXJkLWxpc3Qge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGViZjc7XHJcbn1cclxuLmNhcmQtY29udGVudC1tZCB7XHJcblxyXG4gICAgY29sb3I6IHJnYigwLCAwLCAxMCk7XHJcbn1cclxuXHJcbi5pdGVtLXRpdGxle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JkZWJmNztcclxuICAgIGNvbG9yOiByZ2IoMCwgOCwgMTE3KTtcclxuICAgIGZvbnQtZmFtaWx5OiBJbXBhY3QsIEhhZXR0ZW5zY2h3ZWlsZXIsICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWYsIHNhbnMtc2VyaWY7XHJcbn0iXX0= */");

/***/ }),

/***/ 7136:
/*!******************************************************************************!*\
  !*** ./src/app/component/submit-assignmnet/submit-assignmnet.component.scss ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJtaXQtYXNzaWdubW5ldC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ 7129:
/*!**************************************************************!*\
  !*** ./src/app/page/assignmentview/assignmentview.page.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhc3NpZ25tZW50dmlldy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 6358:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/assignment/assignment.component.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div #expandWrapper class=\"expand-wrapper\" [class.collapsed]=\"!expanded\">\n    \n  <ion-card  class=\"ion-card-list\" collapse=\"condense\">\n    <ion-card-content>\n      <ion-title size=\"small\">{{assignmentList.title}}</ion-title>\n      <!-- <ion-label class=\"item-title\"><p>{{assignmentList.title}}</p></ion-label> -->\n      <ion-label class=\"item-title\">Assignment ID : {{assignmentList.imgId}}</ion-label>\n      <ion-card-content>\n        Submission Due Date is \n        <p>{{assignmentList.description}}</p>\n       \n      </ion-card-content>\n    </ion-card-content>\n    <ion-card-content>\n      <ion-label class=\"item-title\"><p>Download the assigmnet using below link</p></ion-label>\n      <ion-button expand=\"block\" color=\"tertiary\" fill=\"clear\" (click)=\"view()\">Download Asssignmnet</ion-button>\n    </ion-card-content>\n  </ion-card>\n</div>\n\n\n\n");

/***/ }),

/***/ 9373:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/header/header.component.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n\n<a href=\"/home\" ion-button full clear>\n  <ion-icon name=\"home\" size=\"large\" ></ion-icon>\n</a>\n<a href=\"/notifications\" ion-button full clear hidden>\n  <ion-icon name=\"notifications-circle-outline\" size=\"large\" ></ion-icon>\n</a>\n<a href=\"/quick-submit\" ion-button full clear>\n  <ion-icon name=\"folder-outline\" size=\"large\" ></ion-icon>\n</a>\n<a href=\"/login\" ion-button full clear>\n  <ion-icon name=\"log-out\" size=\"large\"></ion-icon>\n</a>\n\n\n");

/***/ }),

/***/ 3853:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/notification/notification.component.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div><ion-card class=\"ion-card-list\">\n  <ion-card-content> \n      <ion-label class=\"item-title\">{{notificationList.title}}</ion-label>\n      <ion-card-content>\n        {{notificationList.description}}\n      </ion-card-content>    \n  </ion-card-content>\n</ion-card>\n</div>");

/***/ }),

/***/ 246:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/submit-assignmnet/submit-assignmnet.component.html ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div>\n  <ion-card class=\"ion-card-list\">\n    <ion-card-content>\n      \n      <ion-label class=\"item-title\"><p>Before Upload the assigment rename your file like below</p></ion-label>\n      <ion-label class=\"item-title\">file name = assignment ID_Student ID</ion-label>\n      <ion-input  type=\"file\" (change)=\"showPreview($event)\"></ion-input>\n      <ion-label class=\"item-title\" *ngIf=\"stuIdValidator\">Please Select a file</ion-label>\n      <ion-button expand=\"block\" color=\"secondary\" (click)=\"SubmitUploadFile()\">Submit uploaded file</ion-button>\n    \n    </ion-card-content>\n    <ion-card-content>      \n      <ion-label class=\"item-title\"><p>If you are using camera option to upload an image please insert the assigment ID in given the field.</p></ion-label>\n      <ion-row>\n        <ion-col>\n          <ion-label class=\"item-title\">Insert assigmnet ID</ion-label>\n        </ion-col>\n        <ion-col>\n          <ion-input  type=\"text\" placeholder=\"Assigment ID\" (ionInput)=\"getAssignmetnId($event)\"></ion-input>\n        </ion-col>\n        </ion-row>\n        <ion-button expand=\"block\" class=\"btn-cam\" color=\"secondary\" style=\"--background:red\" (click)=\"OpenCamera(inputValue)\">Open\n          Camera and submit</ion-button>\n    </ion-card-content>\n    \n    <!-- <img src=\"imgUrl\"  height=\"100\" width=\"100\" /> -->\n    <!-- <ion-input value=\"\" [(ngModel)]=\"inputName\"></ion-input> -->\n           \n  </ion-card>\n</div>");

/***/ }),

/***/ 5008:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/assignmentview/assignmentview.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" color=\"black\">\n  <ion-toolbar class=\"page-header\">\n    <ion-buttons slot=\"start\" menu=\"first\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    \n    <ion-title class=\"page-titles\">\n      <img src=\"./../../../assets/Images/back.png\" style=\"width : 15% ; height : 15%\" (click)=\"previouspage()\" >\n      Assigments\n    </ion-title>\n    <app-header slot=\"end\"></app-header>\n  </ion-toolbar>\n</ion-header>\n<!-- routerLink=\"/notifications\" -->\n<ion-content>\n  <ion-card class=\"ion-card-list\">\n    <ion-title size=\"large\" style=\"padding-bottom: 5%;padding-top: 5%; color: blue;\">{{AssigmentTitle}}</ion-title>\n    <div *ngFor=\"let item of assigmnetList ;let i=index\" >   \n      <!-- <ion-item> </ion-item>  -->\n      <div (click)=\"expandItem(item)\" >\n        <ion-label style=\"padding-left: 5%;\" class=\"item-title\">Assignment: {{i+1}}</ion-label>\n        <ion-card-content>        \n          <app-assignment [expanded]=\"item.expanded\"expandHeight=\"100%\" [assignmentList]=\"item\" >         \n          </app-assignment></ion-card-content>\n        </div>\n   \n    </div>\n\n    \n    <app-submit-assignmnet [assigmentSubmission]=subject ></app-submit-assignmnet>  \n  </ion-card>\n\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=default-src_app_component_component_modules_ts.js.map