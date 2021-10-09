(self["webpackChunkEduAppV1"] = self["webpackChunkEduAppV1"] || []).push([["src_app_page_home_home_module_ts"],{

/***/ 8556:
/*!******************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponent": () => (/* binding */ ExploreContainerComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_explore_container_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./explore-container.component.html */ 6993);
/* harmony import */ var _explore_container_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./explore-container.component.scss */ 3643);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);




let ExploreContainerComponent = class ExploreContainerComponent {
    constructor() { }
    ngOnInit() { }
};
ExploreContainerComponent.ctorParameters = () => [];
ExploreContainerComponent.propDecorators = {
    name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
ExploreContainerComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-explore-container',
        template: _raw_loader_explore_container_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_explore_container_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ExploreContainerComponent);



/***/ }),

/***/ 581:
/*!***************************************************************!*\
  !*** ./src/app/explore-container/explore-container.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExploreContainerComponentModule": () => (/* binding */ ExploreContainerComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _explore_container_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore-container.component */ 8556);






let ExploreContainerComponentModule = class ExploreContainerComponentModule {
};
ExploreContainerComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule],
        declarations: [_explore_container_component__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponent],
        exports: [_explore_container_component__WEBPACK_IMPORTED_MODULE_0__.ExploreContainerComponent]
    })
], ExploreContainerComponentModule);



/***/ }),

/***/ 7520:
/*!**************************************************!*\
  !*** ./src/app/page/home/home-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 8261);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 2040:
/*!******************************************!*\
  !*** ./src/app/page/home/home.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 7520);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page */ 8261);
/* harmony import */ var _component_component_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/component.modules */ 5657);
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ionic2-calendar */ 7732);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../explore-container/explore-container.module */ 581);










let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomePageRoutingModule,
            _component_component_modules__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_3__.ExploreContainerComponentModule,
            ionic2_calendar__WEBPACK_IMPORTED_MODULE_9__.NgCalendarModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_1__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 8261:
/*!****************************************!*\
  !*** ./src/app/page/home/home.page.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 7457);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 7346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _service_student_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/student.service */ 302);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/compat/auth */ 1325);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 2182);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/notification.service */ 7320);
/* harmony import */ var ionic2_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ionic2-calendar */ 7732);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/network/ngx */ 5592);
/* harmony import */ var src_app_service_network_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/network.service */ 1617);
var HomePage_1;












let HomePage = HomePage_1 = class HomePage {
    constructor(ngFireAuth, fireservices, studentService, networkService, menu, laodingController, network, notificationService, alertController) {
        this.ngFireAuth = ngFireAuth;
        this.fireservices = fireservices;
        this.studentService = studentService;
        this.networkService = networkService;
        this.menu = menu;
        this.laodingController = laodingController;
        this.network = network;
        this.notificationService = notificationService;
        this.alertController = alertController;
        this.eventSource = [];
        this.selectedDate = new Date();
        this.calendar = {
            mode: 'month',
            currentDate: new Date(),
        };
        console.log('home');
        this.networkService.ConnectionStatus();
        if (localStorage.getItem('networkConnection') == 'false') {
            this.importantNotifications = JSON.parse(localStorage.getItem('ImportantNotification'));
            //this.eventSource=angular.fromJson(localStorage.getItem('CalanderEvents'));;
            var json_data = JSON.parse(localStorage.getItem('CalanderEvents'));
            var result = [];
            for (var i in json_data)
                result.push(json_data[i]);
            this.eventSource = result;
        }
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            //let imNot1 =  JSON.parse(localStorage.getItem('ImportantNotification'))
            HomePage_1.loading = yield this.laodingController.create({
                message: 'Loading...',
                showBackdrop: false,
            });
            HomePage_1.loading.present();
            this.openFirst();
            yield this.fireservices
                .collection(`events`)
                .snapshotChanges()
                .subscribe((colSnap) => {
                this.eventSource = [];
                colSnap.forEach((snap) => {
                    let event = snap.payload.doc.data();
                    event.id = snap.payload.doc.id;
                    event.startTime = event.startTime.toDate();
                    event.endTime = event.endTime.toDate();
                    //console.log(event);
                    this.eventSource.push(event);
                });
                localStorage.setItem("CalanderEvents", JSON.stringify(this.eventSource));
                var json_data = JSON.parse(localStorage.getItem('CalanderEvents'));
                var result = [];
                for (var i in json_data)
                    result.push(json_data[i]);
            });
            yield this.notificationService.getAllImportantNotification().subscribe((data) => {
                this.importantNotifications = data.map((e) => {
                    return {
                        id: e.payload.doc.id,
                        title: e.payload.doc.data()['title'],
                        description: e.payload.doc.data()['description'],
                    };
                });
                localStorage.setItem("ImportantNotification", JSON.stringify(this.importantNotifications));
            });
            HomePage_1.loading.dismiss();
        });
    }
    //bind the menu
    openFirst() {
        //alert('test');
        this.menu.enable(true, 'first');
    }
    addNewEvent() {
        let start = this.selectedDate;
        let end = this.selectedDate;
        end.setMinutes(end.getMinutes() + 60);
        let event = {
            title: 'Maths test',
            startTime: start,
            endTime: end,
            allDay: false,
        };
        this.fireservices.collection(`events`).add(event);
    }
    onViewTitleChanged(title) {
        this.viewTitle = title;
    }
    onEventSelected(event) {
        // console.log(
        //   'Event selected:' +
        //   event.startTime +
        //   '-' +
        //   event.endTime +
        //   ',' +
        //   event.title
        // );
    }
    onTimeSelected(ev) {
        // console.log(
        //   'Selected time: ' +
        //   ev.selectedTime +
        //   ', hasEvents: ' +
        //   (ev.events !== undefined && ev.events.length !== 0) +
        //   ', disabled: ' +
        //   ev.disabled
        // );
        this.selectedDate = ev.selectedTime;
    }
    onCurrentDateChanged(event) {
        //console.log('current date change: ' + event);
    }
    onRangeChanged(ev) {
        // console.log(
        //   'range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime
        // );
    }
    UpdateUser(Record) {
        Record.isedit = true;
        Record.editname = Record.firstname;
        Record.editage = Record.lastname;
        Record.editaddress = Record.id;
    }
    back() {
        this.myCalendar.slidePrev();
    }
    next() {
        this.myCalendar.slideNext();
    }
    Updatarecord(recorddata) {
        let record = {};
        record['firstName'] = recorddata.editname;
        record['lastName'] = recorddata.editage;
        this.studentService.update_employee(recorddata.id, record);
        recorddata.isedit = false;
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_7__.AngularFireAuth },
    { type: _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_8__.AngularFirestore },
    { type: _service_student_service__WEBPACK_IMPORTED_MODULE_2__.StudentService },
    { type: src_app_service_network_service__WEBPACK_IMPORTED_MODULE_5__.NetworkService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_4__.Network },
    { type: _service_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController }
];
HomePage.propDecorators = {
    myCalendar: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: [ionic2_calendar__WEBPACK_IMPORTED_MODULE_11__.CalendarComponent, null,] }]
};
HomePage = HomePage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 3643:
/*!********************************************************************!*\
  !*** ./src/app/explore-container/explore-container.component.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGIiwiZmlsZSI6ImV4cGxvcmUtY29udGFpbmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4jY29udGFpbmVyIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XG59XG5cbiNjb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG5cbiAgY29sb3I6ICM4YzhjOGM7XG5cbiAgbWFyZ2luOiAwO1xufVxuXG4jY29udGFpbmVyIGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59Il19 */");

/***/ }),

/***/ 7346:
/*!******************************************!*\
  !*** ./src/app/page/home/home.page.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 6993:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/explore-container/explore-container.component.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<div id=\"container\">\n  <strong>{{ name }}</strong>\n  <p>Explore <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://ionicframework.com/docs/components\">UI Components</a></p>\n</div>");

/***/ }),

/***/ 7457:
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/home/home.page.html ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\" color=\"black\">\n  <ion-toolbar class=\"page-header\">\n    <ion-buttons slot=\"start\" menu=\"first\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"page-titles\">\n      Home\n    </ion-title>\n    <app-header slot=\"end\"></app-header>\n    <!-- <ion-buttons slot=\"end\" menu=\"first\">\n      <app-menu1 slot=\"end\"></app-menu1>\n    </ion-buttons> -->\n\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"has-header\" [fullscreen]=\"true\">\n  <ion-card>\n    <ion-card-content>\n      <ion-row>\n        <!-- Move back one screen of the slides -->\n        <ion-col size=\"2\">\n          <ion-button fill=\"clear\" (click)=\"back()\">\n            <ion-icon name=\"arrow-back\" slot=\"icon-only\"></ion-icon>\n          </ion-button>\n        </ion-col>\n\n        <ion-col size=\"8\" class=\"ion-text-center\">\n          <h2>{{ viewTitle }}</h2>\n        </ion-col>\n\n        <!-- Move forward one screen of the slides -->\n        <ion-col size=\"2\">\n          <ion-button fill=\"clear\" (click)=\"next()\">\n            <ion-icon name=\"arrow-forward\" slot=\"icon-only\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n      <!-- <ion-button (click)=\"addNewEvent()\">Add New Event</ion-button> -->\n\n      <calendar [eventSource]=\"eventSource\" [calendarMode]=\"calendar.mode\" [currentDate]=\"calendar.currentDate\"\n        (onCurrentDateChanged)=\"onCurrentDateChanged($event)\" (onRangeChanged)=\"reloadSource(startTime, endTime)\"\n        (onEventSelected)=\"onEventSelected($event)\" (onTitleChanged)=\"onViewTitleChanged($event)\"\n        (onTimeSelected)=\"onTimeSelected($event)\" [step]=\"calendar.step\">\n\n      </calendar>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class=\"ion-card-list\">\n  <ion-title size=\"large\">Important Notifications</ion-title>\n  <app-notification *ngFor=\"let item of importantNotifications\" [notificationList]=\"item\" routerLink=\"/notifications\">\n  </app-notification>\n</ion-card>\n</ion-content>\n<!-- <ion-card>\n    <ion-title size=\"large\">Important Notifications</ion-title>\n    <ion-card-content>\n      <div *ngFor=\"let item of importantNotifications\" >\n        <ion-item [routerLink]=\"['/notifications']\" class=\"ion-activated\">\n          <ion-label>{{item.title}}</ion-label>\n        </ion-item>\n        <ion-card-content>\n          {{item.description}}\n        </ion-card-content>\n      </div>\n    </ion-card-content>\n  </ion-card> -->\n<!-- <app-notification></app-notification>\n\n</ion-content> -->\n\n\n\n<!-- <ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        ID\n      </ion-col>\n      <ion-col>\n        First Name\n      </ion-col>\n      <ion-col>\n        Last Name\n      </ion-col>\n      <ion-col>\n        ion-col\n      </ion-col>\n    </ion-row>\n    <div *ngFor=\"let item of student\" >\n      <div *ngIf=\"!item.isedit; else elseBlock\">\n        <ion-row>\n          <ion-col>\n            {{item.firstname}}\n          </ion-col>\n          <ion-col>\n            {{item.lastname}}\n            \n          </ion-col>\n          <ion-col>\n            Last Name\n          </ion-col>\n          <ion-col>\n            ion-col\n          </ion-col>\n          <ion-col>\n            <ion-button (click)=\"UpdateUser(item)\">update</ion-button>\n            <ion-button (click)=\"DeleteUser(item.id)\">delete</ion-button>\n          </ion-col>\n        </ion-row>\n      </div>\n      <ng-template #elseBlock>\n        <div class=\"card\">\n            <div class=\"card-body\">\n                <div class=\"card-title\">\n                    Edit Employee\n                </div>\n                <div class=\"row\">\n                    <div class=\"form-group\">\n                        <div class=\"col-md-12\">\n                            <input type=\"text\" [(ngModel)]=\"item.editname\" class=\"form-control\">\n                        </div>\n                        <div class=\"col-md-12\">\n                            <input type=\"number\" [(ngModel)]=\"item.editage\" class=\"form-control\">\n                        </div>\n                       \n                    </div>\n                </div>\n\n                <a href=\"#\" class=\"btn btn-danger btn-xs\" (click)=\"item.isedit = false\">Cancel</a>\n                <a href=\"#\" class=\"btn btn-primary btn-xs\" (click)=\"Updatarecord(item)\">Update Employee</a>\n           \n            </div>\n        </div>\n    </ng-template>\n    </div>\n  </ion-grid>\n  \n</ion-content> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_page_home_home_module_ts.js.map