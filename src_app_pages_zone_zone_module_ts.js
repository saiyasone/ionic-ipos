"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_zone_zone_module_ts"],{

/***/ 6071:
/*!*******************************************!*\
  !*** ./src/app/pages/zone/zone.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZonePageModule": () => (/* binding */ ZonePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _zone_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zone.page */ 7727);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 1382);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_shared_shared_layout_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared-layout-component.module */ 8340);
/* harmony import */ var src_app_shared_shared_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared-component.module */ 7125);







let ZonePageModule = class ZonePageModule {
};
ZonePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([
                {
                    path: '',
                    component: _zone_page__WEBPACK_IMPORTED_MODULE_0__.ZonePage,
                },
            ]),
            src_app_shared_shared_layout_component_module__WEBPACK_IMPORTED_MODULE_2__.SharedLayoutComponentModule,
            src_app_shared_shared_component_module__WEBPACK_IMPORTED_MODULE_3__.SharedComponenttModule,
        ],
        declarations: [_zone_page__WEBPACK_IMPORTED_MODULE_0__.ZonePage],
    })
], ZonePageModule);



/***/ }),

/***/ 7727:
/*!*****************************************!*\
  !*** ./src/app/pages/zone/zone.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZonePage": () => (/* binding */ ZonePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_zone_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./zone.page.html */ 7647);
/* harmony import */ var _zone_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zone.page.scss */ 568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8377);
/* harmony import */ var src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-url.module */ 1646);
/* harmony import */ var src_app_services_zone_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/zone.service */ 8822);







let ZonePage = class ZonePage {
    constructor(zoneService) {
        this.zoneService = zoneService;
        this.url = src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl;
        this.zones = [];
    }
    ngOnInit() {
        this.onFetchData();
    }
    isRefresh(evt) {
        setTimeout(() => {
            this.onFetchData();
            evt.target.complete();
        }, 1000);
    }
    onFetchData() {
        this.zoneService.getAllZone().then((observe) => {
            observe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((val) => val.zone)).subscribe({
                next: (data) => {
                    this.zones = data;
                },
                error: () => { },
                complete: () => { },
            });
        });
    }
};
ZonePage.ctorParameters = () => [
    { type: src_app_services_zone_service__WEBPACK_IMPORTED_MODULE_3__.ZoneService }
];
ZonePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-zone',
        template: _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_zone_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_zone_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ZonePage);



/***/ }),

/***/ 7647:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/zone/zone.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  title=\"ຕຳແໜ່ງ\"\n  [href]=\"url.home +'/'+ url.manageProduct\"\n  [showAction]=\"true\"\n>\n</app-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"isRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <ng-container *ngFor=\"let zone of zones; let i=index\">\n      <ion-item lines=\"full\">\n        <span slot=\"start\"> {{i+1}} </span>\n        <ion-label> {{zone.name}} </ion-label>\n        <app-edit-button controlType=\"edit\"></app-edit-button>\n        <app-edit-button controlType=\"del\"></app-edit-button>\n      </ion-item>\n    </ng-container>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 568:
/*!*******************************************!*\
  !*** ./src/app/pages/zone/zone.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ6b25lLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_zone_zone_module_ts.js.map