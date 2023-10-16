"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_unit_unit_module_ts"],{

/***/ 8700:
/*!*******************************************!*\
  !*** ./src/app/pages/unit/unit.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitPageModule": () => (/* binding */ UnitPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 1382);
/* harmony import */ var _unit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit.page */ 5056);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_shared_shared_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared-component.module */ 7125);
/* harmony import */ var src_app_shared_shared_layout_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared-layout-component.module */ 8340);







let UnitPageModule = class UnitPageModule {
};
UnitPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([
                {
                    path: '',
                    component: _unit_page__WEBPACK_IMPORTED_MODULE_1__.UnitPage,
                },
            ]),
            src_app_shared_shared_component_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponenttModule,
            src_app_shared_shared_layout_component_module__WEBPACK_IMPORTED_MODULE_3__.SharedLayoutComponentModule,
        ],
        declarations: [_unit_page__WEBPACK_IMPORTED_MODULE_1__.UnitPage],
    })
], UnitPageModule);



/***/ }),

/***/ 5056:
/*!*****************************************!*\
  !*** ./src/app/pages/unit/unit.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnitPage": () => (/* binding */ UnitPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_unit_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./unit.page.html */ 1509);
/* harmony import */ var _unit_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unit.page.scss */ 4915);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8377);
/* harmony import */ var src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-url.module */ 1646);
/* harmony import */ var src_app_services_unit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/unit.service */ 1402);







let UnitPage = class UnitPage {
    constructor(unitService) {
        this.unitService = unitService;
        this.url = src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl;
        this.units = [];
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
        this.unitService.getAllUnit().then((observe) => {
            observe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((val) => val.unit)).subscribe({
                next: (data) => {
                    this.units = data;
                },
                error: () => { },
                complete: () => { },
            });
        });
    }
};
UnitPage.ctorParameters = () => [
    { type: src_app_services_unit_service__WEBPACK_IMPORTED_MODULE_3__.UnitService }
];
UnitPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-unit',
        template: _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_unit_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_unit_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], UnitPage);



/***/ }),

/***/ 1509:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/unit/unit.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  title=\"ຫົວໜ່ວຍ\"\n  [href]=\"url.home +'/'+ url.manageProduct\"\n  [showAction]=\"true\"\n>\n</app-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"isRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <ng-container *ngFor=\"let unit of units; let i=index\">\n      <ion-item lines=\"full\">\n        <span slot=\"start\"> {{i+1}} </span>\n        <ion-label> {{unit.name}} </ion-label>\n        <app-edit-button controlType=\"edit\"></app-edit-button>\n        <app-edit-button controlType=\"del\"></app-edit-button>\n      </ion-item>\n    </ng-container>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 4915:
/*!*******************************************!*\
  !*** ./src/app/pages/unit/unit.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1bml0LnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_unit_unit_module_ts.js.map