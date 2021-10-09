(self["webpackChunkEduAppV1"] = self["webpackChunkEduAppV1"] || []).push([["src_app_page_subjects_subjects_module_ts"],{

/***/ 4536:
/*!**********************************************************!*\
  !*** ./src/app/page/subjects/subjects-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubjectsPageRoutingModule": () => (/* binding */ SubjectsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _subjects_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subjects.page */ 5563);




const routes = [
    {
        path: '',
        component: _subjects_page__WEBPACK_IMPORTED_MODULE_0__.SubjectsPage
    }
];
let SubjectsPageRoutingModule = class SubjectsPageRoutingModule {
};
SubjectsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SubjectsPageRoutingModule);



/***/ }),

/***/ 8124:
/*!**************************************************!*\
  !*** ./src/app/page/subjects/subjects.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubjectsPageModule": () => (/* binding */ SubjectsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _subjects_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./subjects-routing.module */ 4536);
/* harmony import */ var _subjects_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subjects.page */ 5563);
/* harmony import */ var _component_component_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/component.modules */ 5657);








let SubjectsPageModule = class SubjectsPageModule {
};
SubjectsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _component_component_modules__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _subjects_routing_module__WEBPACK_IMPORTED_MODULE_0__.SubjectsPageRoutingModule
        ],
        declarations: [_subjects_page__WEBPACK_IMPORTED_MODULE_1__.SubjectsPage]
    })
], SubjectsPageModule);



/***/ }),

/***/ 5563:
/*!************************************************!*\
  !*** ./src/app/page/subjects/subjects.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SubjectsPage": () => (/* binding */ SubjectsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_subjects_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./subjects.page.html */ 4100);
/* harmony import */ var _subjects_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subjects.page.scss */ 4311);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 476);






let SubjectsPage = class SubjectsPage {
    constructor(menu, router) {
        this.menu = menu;
        this.router = router;
        this.visiblePure = false;
        this.visibleApplied = false;
        this.visibleChem = false;
        this.visiblePhysics = false;
        this.visibleBio = false;
        console.log('subjects');
        if (localStorage.getItem('stream').toString() == "maths") {
            this.visibleApplied = true;
            this.visibleChem = true;
            this.visiblePure = true;
            this.visiblePhysics = true;
        }
        else if (localStorage.getItem('stream').toString() == "bio") {
            this.visibleChem = true;
            this.visibleBio = true;
            this.visiblePhysics = true;
        }
    }
    ngOnInit() {
    }
    //bind the menu
    openFirst() {
        this.menu.enable(true, 'first');
        //this.menu.open('first');
    }
    LoadLessons(subject) {
        localStorage.setItem("Subject", subject);
        this.router.navigate(['/lessonsview']);
    }
    LoadAssignments(subject) {
        localStorage.setItem("Subject", subject);
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
                this.router.navigated = false;
                window.scrollTo(0, 0);
            }
        });
        this.router.navigateByUrl('/assignmentview');
        //this.router.navigate(['/assignmentview'])
    }
};
SubjectsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.MenuController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SubjectsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-subjects',
        template: _raw_loader_subjects_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_subjects_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SubjectsPage);



/***/ }),

/***/ 4311:
/*!**************************************************!*\
  !*** ./src/app/page/subjects/subjects.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".card {\n  background-color: #f50e0e;\n}\n\n.column {\n  background-color: #a1eee1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1YmplY3RzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtBQUNKIiwiZmlsZSI6InN1YmplY3RzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsIDE0LCAxNCk7IC8vIGJsYWNrXHJcbiAgIC8vIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIC5jb2x1bW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MSwgMjM4LCAyMjUpOyAvLyBibGFja1xyXG4gICAvLyBib3gtc2hhZG93OiBub25lO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ 4100:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/subjects/subjects.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" color=\"black\">\n  <ion-toolbar class=\"page-header\">\n    <ion-buttons slot=\"start\" menu=\"first\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"page-titles\">\n      My Subjects\n    </ion-title>\n    <app-header slot=\"end\"></app-header>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n\n    <ion-card *ngIf=\"visiblePure\">\n      <ion-item href=\"#\" class=\"ion-activated\" class=\"card\" >\n        <img src=\"../../../assets/Images/puremath.png\" height=\"100\" width=\"100\" />\n        <ion-card-title style=\"padding-left: 10%;\">Pure Mathematics</ion-card-title>\n      </ion-item>\n      <ion-card>\n        <ion-row>\n          <ion-col style=\"width: 50%;\">\n            <ion-button shape=\"round\" color=\"medium\" (click)=\"LoadLessons('pure')\">Lessons</ion-button>\n          </ion-col>\n          <ion-col style=\"width: 50%;\">\n            <ion-button shape=\"round\" color=\"medium\" (click)=\"LoadAssignments('pure')\">Assigments</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-card >\n    <ion-card *ngIf=\"visibleApplied\">\n      <ion-item href=\"#\" class=\"ion-activated\" class=\"card\">\n        <img src=\"../../../assets/Images/appliedmath.png\" height=\"100\" width=\"100\" />\n        <ion-card-title style=\"padding-left: 10%;\">Applied Mathematics</ion-card-title>\n      </ion-item>\n      <ion-card>\n        <ion-row>\n          <ion-col style=\"width: 50%;\">\n            <ion-button shape=\"round\" color=\"medium\" (click)=\"LoadLessons('applied')\">Lessons</ion-button>\n          </ion-col>\n          <ion-col style=\"width: 50%;\">\n            <ion-button shape=\"round\" color=\"medium\" (click)=\"LoadAssignments('applied')\">Assigments</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-card>\n    <ion-card *ngIf=\"visibleChem\">\n      <ion-item href=\"#\" class=\"ion-activated\" class=\"card\">\n        <img src=\"../../../assets/Images/chem.png\" height=\"100\" width=\"100\" />\n        <ion-card-title style=\"padding-left: 10%;\">Chemistry</ion-card-title>\n      </ion-item>\n      <ion-card>\n        <ion-row>\n          <ion-col style=\"width: 50%;\">\n            <ion-button shape=\"round\" color=\"medium\" (click)=\"LoadLessons('chem')\">Lessons</ion-button>\n          </ion-col>\n          <ion-col style=\"width: 50%;\">\n            <ion-button shape=\"round\" color=\"medium\" (click)=\"LoadAssignments('chem')\">Assigments</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-card>\n    <ion-card *ngIf=\"visiblePhysics\">\n      <ion-item href=\"#\" class=\"ion-activated\" class=\"card\">\n        <img src=\"../../../assets/Images/physics.png\" height=\"100\" width=\"100\" />\n        <ion-card-title style=\"padding-left: 10%;\">Physics</ion-card-title>\n      </ion-item>\n      <ion-card>\n        <ion-row>\n          <ion-col style=\"width: 50%;\">\n            <ion-button shape=\"round\" color=\"medium\" (click)=\"LoadLessons('physics')\">Lessons</ion-button>\n          </ion-col>\n          <ion-col style=\"width: 50%;\">\n            <ion-button shape=\"round\" color=\"medium\" (click)=\"LoadAssignments('physics')\">Assigments</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-card>\n    <ion-card *ngIf=\"visibleBio\">\n      <ion-item href=\"#\" class=\"ion-activated\" class=\"card\">\n        <img src=\"../../../assets/Images/bio.png\" height=\"100\" width=\"100\" />\n        <ion-card-title style=\"padding-left: 10%;\">Biology</ion-card-title>\n      </ion-item>\n      <ion-card>\n        <ion-row>\n          <ion-col style=\"width: 50%;\">\n            <ion-button shape=\"round\" color=\"medium\" (click)=\"LoadLessons('bio')\">Lessons</ion-button>\n          </ion-col>\n          <ion-col style=\"width: 50%;\">\n            <ion-button shape=\"round\" color=\"medium\" (click)=\"LoadAssignments('bio')\">Assigments</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    </ion-card>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_subjects_subjects_module_ts.js.map