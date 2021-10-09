(self["webpackChunkEduAppV1"] = self["webpackChunkEduAppV1"] || []).push([["src_app_page_notifications_notifications_module_ts"],{

/***/ 4007:
/*!********************************************************************!*\
  !*** ./src/app/page/notifications/notifications-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPageRoutingModule": () => (/* binding */ NotificationsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications.page */ 2787);




const routes = [
    {
        path: '',
        component: _notifications_page__WEBPACK_IMPORTED_MODULE_0__.NotificationsPage
    }
];
let NotificationsPageRoutingModule = class NotificationsPageRoutingModule {
};
NotificationsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NotificationsPageRoutingModule);



/***/ }),

/***/ 1607:
/*!************************************************************!*\
  !*** ./src/app/page/notifications/notifications.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPageModule": () => (/* binding */ NotificationsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notifications-routing.module */ 4007);
/* harmony import */ var _notifications_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page */ 2787);
/* harmony import */ var _component_component_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/component.modules */ 5657);








let NotificationsPageModule = class NotificationsPageModule {
};
NotificationsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _notifications_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationsPageRoutingModule,
            _component_component_modules__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
        ],
        declarations: [_notifications_page__WEBPACK_IMPORTED_MODULE_1__.NotificationsPage]
    })
], NotificationsPageModule);



/***/ }),

/***/ 2787:
/*!**********************************************************!*\
  !*** ./src/app/page/notifications/notifications.page.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationsPage": () => (/* binding */ NotificationsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_notifications_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./notifications.page.html */ 3873);
/* harmony import */ var _notifications_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notifications.page.scss */ 5018);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/network/ngx */ 5592);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _service_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/notification.service */ 7320);








let NotificationsPage = class NotificationsPage {
    constructor(notificationService, alertController, network, router) {
        // this.network.onDisconnect().subscribe(() => {
        //   setTimeout(async () => {
        //     //alert('network was disconnected');
        //     localStorage.setItem("networkConnection", "false");
        //     const alert = await this.alertController.create({
        //       cssClass: 'my-custom-class',
        //       header: 'Connection Interrupted!',
        //       message: 'Your internet connection appears to be offline',
        //       buttons: ['OK']
        //     });       
        //     await alert.present();       
        //     const { role } = await alert.onDidDismiss();               
        //   }, 3000);
        // });
        this.notificationService = notificationService;
        this.alertController = alertController;
        this.network = network;
        this.router = router;
        // this.network.onConnect().subscribe(() => {
        //   setTimeout(() => {
        //     if (this.network.type === 'wifi') {
        //       localStorage.setItem("networkConnection", "true");
        //     }
        //   }, 3000);
        // });
    }
    ngOnInit() {
        this.notificationService.getAllNotification().subscribe((data) => {
            this.notifications = data.map((e) => {
                return {
                    id: e.payload.doc.id,
                    title: e.payload.doc.data()['title'],
                    description: e.payload.doc.data()['description'],
                };
            });
        });
    }
    doRefresh(event) {
        console.log('Begin async operation');
        this.notificationService.getAllNotification().subscribe((data) => {
            this.notifications = data.map((e) => {
                return {
                    id: e.payload.doc.id,
                    title: e.payload.doc.data()['title'],
                    description: e.payload.doc.data()['description'],
                };
            });
            event.target.complete();
        });
        // setTimeout(async () => {      
        //   await this.loadData();
        //   event.target.complete();
        // }, 3000);
    }
    loadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.notificationService.getAllNotification().subscribe((data) => {
                this.notifications = data.map((e) => {
                    return {
                        id: e.payload.doc.id,
                        title: e.payload.doc.data()['title'],
                        description: e.payload.doc.data()['description'],
                    };
                });
            });
        });
    }
};
NotificationsPage.ctorParameters = () => [
    { type: _service_notification_service__WEBPACK_IMPORTED_MODULE_3__.NotificationService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_2__.Network },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router }
];
NotificationsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-notifications',
        template: _raw_loader_notifications_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_notifications_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NotificationsPage);



/***/ }),

/***/ 5018:
/*!************************************************************!*\
  !*** ./src/app/page/notifications/notifications.page.scss ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3RpZmljYXRpb25zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 3873:
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/notifications/notifications.page.html ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar class=\"page-header\">\n    <ion-buttons slot=\"start\" menu=\"first\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title class=\"page-titles\">\n      Notifications\n    </ion-title>\n    <app-header slot=\"end\" ></app-header>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n      <ion-refresher-content\n        pullingIcon=\"chevron-down-circle-outline\"\n        pullingText=\"Pull to refresh\"\n        refreshingSpinner=\"circles\"\n        refreshingText=\"Refreshing...\">\n      </ion-refresher-content>\n    </ion-refresher>\n\n \n  <app-notification *ngFor=\"let item of notifications\" [notificationList]=\"item\" >\n  </app-notification>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_page_notifications_notifications_module_ts.js.map