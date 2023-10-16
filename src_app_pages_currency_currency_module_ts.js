"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_currency_currency_module_ts"],{

/***/ 7952:
/*!***************************************************!*\
  !*** ./src/app/pages/currency/currency.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyPageModule": () => (/* binding */ CurrencyPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 1382);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_shared_shared_layout_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared-layout-component.module */ 8340);
/* harmony import */ var _currency_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./currency.page */ 9814);
/* harmony import */ var src_app_shared_shared_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared-component.module */ 7125);







let CurrencyPageModule = class CurrencyPageModule {
};
CurrencyPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([
                {
                    path: '',
                    component: _currency_page__WEBPACK_IMPORTED_MODULE_2__.CurrencyPage,
                },
            ]),
            src_app_shared_shared_layout_component_module__WEBPACK_IMPORTED_MODULE_1__.SharedLayoutComponentModule,
            src_app_shared_shared_component_module__WEBPACK_IMPORTED_MODULE_3__.SharedComponenttModule,
        ],
        declarations: [_currency_page__WEBPACK_IMPORTED_MODULE_2__.CurrencyPage],
    })
], CurrencyPageModule);



/***/ }),

/***/ 9814:
/*!*************************************************!*\
  !*** ./src/app/pages/currency/currency.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyPage": () => (/* binding */ CurrencyPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_currency_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./currency.page.html */ 3510);
/* harmony import */ var _currency_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./currency.page.scss */ 4529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8377);
/* harmony import */ var src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-url.module */ 1646);
/* harmony import */ var src_app_services_currency_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/currency.service */ 5575);







let CurrencyPage = class CurrencyPage {
    constructor(rateService) {
        this.rateService = rateService;
        this.rates = [];
        this.currencies = [];
        this.url = src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl;
    }
    ngOnInit() {
        this.onFetchData();
    }
    isRefresh(evt) {
        setTimeout(() => {
            this.onFetchData();
            evt.target.complete();
        }, 500);
    }
    onFetchData() {
        this.rateService.getAllRate().then((observe) => {
            observe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((val) => val.rate)).subscribe({
                next: (data) => {
                    this.rates = data;
                },
                error: () => { },
                complete: () => { },
            });
        });
    }
};
CurrencyPage.ctorParameters = () => [
    { type: src_app_services_currency_service__WEBPACK_IMPORTED_MODULE_3__.CurrencyService }
];
CurrencyPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-currency',
        template: _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_currency_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_currency_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CurrencyPage);



/***/ }),

/***/ 5575:
/*!**********************************************!*\
  !*** ./src/app/services/currency.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyService": () => (/* binding */ CurrencyService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ 9900);




let CurrencyService = class CurrencyService {
    constructor(http, storageService) {
        this.http = http;
        this.storageService = storageService;
        this.rateUrl = 'rates';
        this.currencyUrl = 'currencies';
    }
    getAllRate() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const branch = yield this.storageService.storageData('branch');
            return yield this.http.get(this.rateUrl + `/${branch}`);
        });
    }
};
CurrencyService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService }
];
CurrencyService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({ providedIn: 'root' })
], CurrencyService);



/***/ }),

/***/ 3510:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/currency/currency.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  title=\"ອັດຕາແລກປ່ຽນ\"\n  [href]=\"url.home +'/'+ url.generalSetting\"\n  [showAction]=\"true\"\n>\n</app-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"isRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <ng-container *ngFor=\"let rate of rates; let i=index\">\n      <ion-item lines=\"full\" [detail]=\"false\">\n        <span slot=\"start\"> {{i+1}} </span>\n        <ion-label>\n          <h4>{{rate.Currency.name}}</h4>\n          <p>ອັດຕາແລກປ່ຽນ {{rate.rate | number}}</p>\n        </ion-label>\n\n        <app-edit-button controlType=\"edit\"></app-edit-button>\n      </ion-item>\n    </ng-container>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 4529:
/*!***************************************************!*\
  !*** ./src/app/pages/currency/currency.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXJyZW5jeS5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_currency_currency_module_ts.js.map