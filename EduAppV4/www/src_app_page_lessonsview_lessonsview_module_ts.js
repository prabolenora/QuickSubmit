(self["webpackChunkEduAppV1"] = self["webpackChunkEduAppV1"] || []).push([["src_app_page_lessonsview_lessonsview_module_ts"],{

/***/ 8246:
/*!****************************************************************!*\
  !*** ./src/app/page/lessonsview/lessonsview-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LessonsviewPageRoutingModule": () => (/* binding */ LessonsviewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _lessonsview_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lessonsview.page */ 342);




const routes = [
    {
        path: '',
        component: _lessonsview_page__WEBPACK_IMPORTED_MODULE_0__.LessonsviewPage
    }
];
let LessonsviewPageRoutingModule = class LessonsviewPageRoutingModule {
};
LessonsviewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LessonsviewPageRoutingModule);



/***/ }),

/***/ 5405:
/*!********************************************************!*\
  !*** ./src/app/page/lessonsview/lessonsview.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LessonsviewPageModule": () => (/* binding */ LessonsviewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _lessonsview_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lessonsview-routing.module */ 8246);
/* harmony import */ var _lessonsview_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lessonsview.page */ 342);
/* harmony import */ var _component_component_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/component.modules */ 5657);








let LessonsviewPageModule = class LessonsviewPageModule {
};
LessonsviewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _lessonsview_routing_module__WEBPACK_IMPORTED_MODULE_0__.LessonsviewPageRoutingModule,
            _component_component_modules__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        ],
        declarations: [_lessonsview_page__WEBPACK_IMPORTED_MODULE_1__.LessonsviewPage]
    })
], LessonsviewPageModule);



/***/ }),

/***/ 342:
/*!******************************************************!*\
  !*** ./src/app/page/lessonsview/lessonsview.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LessonsviewPage": () => (/* binding */ LessonsviewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_lessonsview_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./lessonsview.page.html */ 9106);
/* harmony import */ var _lessonsview_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lessonsview.page.scss */ 8606);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_service_assignment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/assignment.service */ 9254);
/* harmony import */ var src_app_service_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/file.service */ 2248);
/* harmony import */ var _service_lesson_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/lesson.service */ 3677);









let LessonsviewPage = class LessonsviewPage {
    constructor(menu, lessonService, router, fileService, assignmentService) {
        this.menu = menu;
        this.lessonService = lessonService;
        this.router = router;
        this.fileService = fileService;
        this.assignmentService = assignmentService;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log('debug');
            this.Subject = localStorage.getItem('Subject').toString();
            localStorage.setItem("Subject", 'all');
            if (this.Subject == 'chem') {
                this.LessonTitle = "Chemistry Lessons";
            }
            else if (this.Subject == 'pure') {
                this.LessonTitle = "Pure Mathematics Lessons";
            }
            else if (this.Subject == 'applied') {
                this.LessonTitle = "Applied Mathematics Lessons";
            }
            else if (this.Subject == 'physics') {
                this.LessonTitle = "Physics Lessons";
            }
            yield this.lessonService.getAllLessons(this.Subject).subscribe((data) => {
                this.lessonsList = data.map((e) => {
                    return {
                        id: e.payload.doc.id,
                        title: e.payload.doc.data()['Title'],
                        description: e.payload.doc.data()['UploadedDate'].toDate(),
                        imgId: e.payload.doc.data()['ID'],
                        expanded: false
                    };
                });
            });
            console.log(this.lessonsList);
        });
    }
    //bind the menu
    openFirst() {
        this.menu.enable(true, 'first');
        //this.menu.open('first');
    }
    view() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            yield this.fileService.getImage(this.lessonsList.imgId);
            //alert(localStorage.getItem('dataurl').toString());
            // this.dataurl=localStorage.getItem('dataurl').toString();
            // alert(this.dataurl);
        });
    }
    previouspage() {
        this.router.navigate(['/subjects']);
    }
    expandItem(item) {
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.lessonsList.map(listItem => {
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
};
LessonsviewPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: _service_lesson_service__WEBPACK_IMPORTED_MODULE_4__.LessonService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_service_file_service__WEBPACK_IMPORTED_MODULE_3__.FileService, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Inject, args: [src_app_service_file_service__WEBPACK_IMPORTED_MODULE_3__.FileService,] }] },
    { type: src_app_service_assignment_service__WEBPACK_IMPORTED_MODULE_2__.AssignmentService }
];
LessonsviewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-lessonsview',
        template: _raw_loader_lessonsview_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_lessonsview_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LessonsviewPage);



/***/ }),

/***/ 3677:
/*!*******************************************!*\
  !*** ./src/app/service/lesson.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LessonService": () => (/* binding */ LessonService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let LessonService = class LessonService {
    constructor(fireservices, ngFireAuth, router) {
        this.fireservices = fireservices;
        this.ngFireAuth = ngFireAuth;
        this.router = router;
    }
    getAllLessons(subject) {
        if (subject == "chem") {
            return this.fireservices.collection('chemLessons').snapshotChanges();
        }
        else if (subject == "physics") {
            return this.fireservices.collection('physicsLessons').snapshotChanges();
        }
        else if (subject == "pure") {
            return this.fireservices.collection('pureMathsLessons').snapshotChanges();
        }
        else if (subject == "applied") {
            return this.fireservices.collection('appliedMathsLessons').snapshotChanges();
        }
    }
};
LessonService.ctorParameters = () => [
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_0__.AngularFirestore },
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_1__.AngularFireAuth },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
LessonService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root'
    })
], LessonService);



/***/ }),

/***/ 8606:
/*!********************************************************!*\
  !*** ./src/app/page/lessonsview/lessonsview.page.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".expand-wrapper {\n  transition: max-height 0.4s ease-in-out;\n  overflow: hidden;\n  height: auto;\n}\n\n.collapsed {\n  max-height: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlc3NvbnN2aWV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0U7RUFDRSx3QkFBQTtBQUVKIiwiZmlsZSI6Imxlc3NvbnN2aWV3LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBhbmQtd3JhcHBlciB7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNHMgZWFzZS1pbi1vdXQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAuY29sbGFwc2VkIHtcclxuICAgIG1heC1oZWlnaHQ6IDAgIWltcG9ydGFudDtcclxuICB9Il19 */");

/***/ }),

/***/ 9106:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/lessonsview/lessonsview.page.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" color=\"black\">\n  <ion-toolbar class=\"page-header\">\n    <ion-buttons slot=\"start\" menu=\"first\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"page-titles\">\n      <img src=\"./../../../assets/Images/back.png\" style=\"width : 15% ; height : 15%\" (click)=\"previouspage()\" >\n     Lessons\n    </ion-title>\n    <app-header slot=\"end\"></app-header>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"ion-card-list\">\n    <ion-title size=\"large\" style=\"padding-bottom: 5%;padding-top: 5%; color: blue;\">{{LessonTitle}}</ion-title>\n    <div *ngFor=\"let item of lessonsList ;let i=index\" >   \n      <!-- <ion-item> </ion-item>  -->\n      <div (click)=\"expandItem(item)\" >\n        <ion-label style=\"padding-left: 5%;\" class=\"item-title\">Assignment: {{i+1}}</ion-label>\n        <ion-card-content>       \n          <div #expandWrapper class=\"expand-wrapper\" expandHeight=\"100%\" [class.collapsed]=\"!item.expanded\">\n    \n            <ion-card  class=\"ion-card-list\" collapse=\"condense\">\n              <ion-card-content>\n                <ion-title size=\"small\">{{item.title}}</ion-title>\n                <!-- <ion-label class=\"item-title\"><p>{{assignmentList.title}}</p></ion-label> -->\n                <ion-label class=\"item-title\">Assignment ID : {{item.imgId}}</ion-label>\n                <ion-card-content>\n                 Uploaded Date is \n                  <p>{{item.UploadedDate}}</p>\n                 \n                </ion-card-content>\n              </ion-card-content>\n              <ion-card-content>\n                <ion-label class=\"item-title\"><p>Download the assigmnet using below link</p></ion-label>\n                <ion-button expand=\"block\" color=\"tertiary\" fill=\"clear\" (click)=\"view()\">Download Lesson</ion-button>\n              </ion-card-content>\n            </ion-card>\n          </div>\n        </ion-card-content>   \n        </div>\n   \n    </div>\n\n  </ion-card>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_lessonsview_lessonsview_module_ts.js.map