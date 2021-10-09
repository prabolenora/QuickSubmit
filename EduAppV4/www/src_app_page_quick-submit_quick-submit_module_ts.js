(self["webpackChunkEduAppV1"] = self["webpackChunkEduAppV1"] || []).push([["src_app_page_quick-submit_quick-submit_module_ts"],{

/***/ 2986:
/*!******************************************************************!*\
  !*** ./src/app/page/quick-submit/quick-submit-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuickSubmitPageRoutingModule": () => (/* binding */ QuickSubmitPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _quick_submit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quick-submit.page */ 187);




const routes = [
    {
        path: '',
        component: _quick_submit_page__WEBPACK_IMPORTED_MODULE_0__.QuickSubmitPage
    }
];
let QuickSubmitPageRoutingModule = class QuickSubmitPageRoutingModule {
};
QuickSubmitPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], QuickSubmitPageRoutingModule);



/***/ }),

/***/ 384:
/*!**********************************************************!*\
  !*** ./src/app/page/quick-submit/quick-submit.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuickSubmitPageModule": () => (/* binding */ QuickSubmitPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _quick_submit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quick-submit-routing.module */ 2986);
/* harmony import */ var _component_component_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../component/component.modules */ 5657);
/* harmony import */ var _quick_submit_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quick-submit.page */ 187);








let QuickSubmitPageModule = class QuickSubmitPageModule {
};
QuickSubmitPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _quick_submit_routing_module__WEBPACK_IMPORTED_MODULE_0__.QuickSubmitPageRoutingModule,
            _component_component_modules__WEBPACK_IMPORTED_MODULE_1__.ComponentsModule
        ],
        declarations: [_quick_submit_page__WEBPACK_IMPORTED_MODULE_2__.QuickSubmitPage]
    })
], QuickSubmitPageModule);



/***/ }),

/***/ 187:
/*!********************************************************!*\
  !*** ./src/app/page/quick-submit/quick-submit.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuickSubmitPage": () => (/* binding */ QuickSubmitPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_quick_submit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./quick-submit.page.html */ 7722);
/* harmony import */ var _quick_submit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quick-submit.page.scss */ 137);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_service_assignment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/assignment.service */ 9254);






let QuickSubmitPage = class QuickSubmitPage {
    constructor(menu, assignmentService) {
        this.menu = menu;
        this.assignmentService = assignmentService;
        this.visiblePure = false;
        this.visibleApplied = false;
        this.visibleChem = false;
        this.visiblePhysics = false;
        this.visibleBio = false;
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            if (localStorage.getItem('stream').toString() == "maths") {
                this.visibleApplied = true;
                this.visibleChem = true;
                this.visiblePure = true;
                this.visiblePhysics = true;
                this.getPureMaths();
                this.getAppliedMaths();
                this.getPhysics();
                this.getChemistry();
            }
            else if (localStorage.getItem('stream').toString() == "bio") {
                this.visibleChem = true;
                this.visibleBio = true;
                this.visiblePhysics = true;
                this.getPhysics();
                this.getChemistry();
            }
        });
    }
    optionsFn() {
        //alert(this.subject)
        localStorage.setItem("LogedSubject", this.subject);
    }
    loadData(refresh = false, refresher) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.assignmentService.getAllSubjectAssignment("chem").subscribe((data) => {
                this.chemAssigmnetList = data.map((e) => {
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
            yield this.assignmentService.getAllSubjectAssignment("pure").subscribe((data) => {
                this.pureAssigmnetList = data.map((e) => {
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
            yield this.assignmentService.getAllSubjectAssignment("applied").subscribe((data) => {
                this.appliedAssigmnetList = data.map((e) => {
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
            yield this.assignmentService.getAllSubjectAssignment("physics").subscribe((data) => {
                this.physicsAssigmnetList = data.map((e) => {
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
            if (refresher) {
                refresher.target.complete();
            }
        });
    }
    getPureMaths() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.assignmentService.getAllSubjectAssignment("pure").subscribe((data) => {
                this.pureAssigmnetList = data.map((e) => {
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
    getAppliedMaths() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.assignmentService.getAllSubjectAssignment("applied").subscribe((data) => {
                this.appliedAssigmnetList = data.map((e) => {
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
    getChemistry() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.assignmentService.getAllSubjectAssignment("chem").subscribe((data) => {
                this.chemAssigmnetList = data.map((e) => {
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
    getPhysics() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.assignmentService.getAllSubjectAssignment("physics").subscribe((data) => {
                this.physicsAssigmnetList = data.map((e) => {
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
    getBio() {
    }
    //bind the menu
    openFirst() {
        this.menu.enable(true, 'first');
        //this.menu.open('first');
    }
    expandChemItem(item) {
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.chemAssigmnetList.map(listItem => {
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
    expandPhysicsItem(item) {
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.physicsAssigmnetList.map(listItem => {
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
    expandPureItem(item) {
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.pureAssigmnetList.map(listItem => {
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
    expandAppliedItem(item) {
        if (item.expanded) {
            item.expanded = false;
        }
        else {
            this.appliedAssigmnetList.map(listItem => {
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
QuickSubmitPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.MenuController },
    { type: src_app_service_assignment_service__WEBPACK_IMPORTED_MODULE_2__.AssignmentService }
];
QuickSubmitPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-quick-submit',
        template: _raw_loader_quick_submit_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_quick_submit_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], QuickSubmitPage);



/***/ }),

/***/ 137:
/*!**********************************************************!*\
  !*** ./src/app/page/quick-submit/quick-submit.page.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxdWljay1zdWJtaXQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 7722:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/quick-submit/quick-submit.page.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" color=\"black\">\n  \n  <ion-toolbar class=\"page-header\">\n    <ion-buttons slot=\"start\" menu=\"first\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"page-titles\">\n      Quick Submit\n    </ion-title>\n    <app-header slot=\"end\"></app-header>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadData(true, $event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-card class=\"ion-card-list\" *ngIf=\"visibleChem\">\n    <ion-title size=\"large\" style=\"padding-bottom: 5%;padding-top: 5%; color: blue;\">Chemistry</ion-title>\n    <div *ngFor=\"let item of chemAssigmnetList ;let i=index\">\n      <!-- <ion-item> </ion-item>  -->\n      <div (click)=\"expandChemItem(item)\">\n        <ion-label style=\"padding-left: 5%;\" class=\"item-title\">View Assignment: {{i+1}}</ion-label>\n        <ion-card-content>\n          <app-assignment [expanded]=\"item.expanded\" expandHeight=\"100%\" [assignmentList]=\"item\">\n          </app-assignment>\n        </ion-card-content>\n      </div>\n    </div>\n  </ion-card>\n  <ion-card class=\"ion-card-list\" *ngIf=\"visiblePhysics\">\n    <ion-title size=\"large\" style=\"padding-bottom: 5%;padding-top: 5%; color: blue;\">Physics</ion-title>\n    <div *ngFor=\"let item of physicsAssigmnetList ;let i=index\">\n      <!-- <ion-item> </ion-item>  -->\n      <div (click)=\"expandPhysicsItem(item)\">\n        <ion-label style=\"padding-left: 5%;\" class=\"item-title\">View Assignment: {{i+1}}</ion-label>\n        <ion-card-content>\n          <app-assignment [expanded]=\"item.expanded\" expandHeight=\"100%\" [assignmentList]=\"item\">\n          </app-assignment>\n        </ion-card-content>\n      </div>\n    </div>\n  </ion-card>\n  <ion-card class=\"ion-card-list\"  *ngIf=\"visiblePure\">\n    <ion-title size=\"large\" style=\"padding-bottom: 5%;padding-top: 5%; color: blue;\">Pure Mathematics</ion-title>\n    <div *ngFor=\"let item of pureAssigmnetList ;let i=index\">\n      <!-- <ion-item> </ion-item>  -->\n      <div (click)=\"expandPureItem(item)\">\n        <ion-label style=\"padding-left: 5%;\" class=\"item-title\">View Assignment: {{i+1}}</ion-label>\n        <ion-card-content>\n          <app-assignment [expanded]=\"item.expanded\" expandHeight=\"100%\" [assignmentList]=\"item\">\n          </app-assignment>\n        </ion-card-content>\n      </div>\n    </div>\n  </ion-card>\n  <ion-card class=\"ion-card-list\" *ngIf=\"visibleApplied\">\n    <ion-title size=\"large\" style=\"padding-bottom: 5%;padding-top: 5%; color: blue;\">Applied Mathematics</ion-title>\n    <div *ngFor=\"let item of appliedAssigmnetList ;let i=index\">\n      <!-- <ion-item> </ion-item>  -->\n      <div (click)=\"expandAppliedItem(item)\">\n        <ion-label style=\"padding-left: 5%;\" class=\"item-title\">View Assignment: {{i+1}}</ion-label>\n        <ion-card-content>\n          <app-assignment [expanded]=\"item.expanded\" expandHeight=\"100%\" [assignmentList]=\"item\">\n          </app-assignment>\n        </ion-card-content>\n      </div>\n    </div>\n  </ion-card>\n  <ion-card class=\"ion-card-list\">\n    <ion-item>\n      <ion-label>Please select the subject </ion-label>\n      <ion-select interface=\"popover\" [(ngModel)]=\"subject\"  (ionChange)=\"optionsFn();\">\n        <ion-select-option value=\"chem\" *ngIf=\"visibleChem\">Chemistry</ion-select-option>\n        <ion-select-option value=\"physics\" *ngIf=\"visiblePhysics\">Physics</ion-select-option>\n        <ion-select-option value=\"pure\" *ngIf=\"visiblePure\"> Pure Mathematics</ion-select-option>\n        <ion-select-option value=\"applied\" *ngIf=\"visibleApplied\">Applied Mathematics</ion-select-option>\n        <ion-select-option value=\"bio\" *ngIf=\"visibleBio\">Biology</ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-card>\n  <app-submit-assignmnet [assigmentSubmission]=subject></app-submit-assignmnet>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_quick-submit_quick-submit_module_ts.js.map