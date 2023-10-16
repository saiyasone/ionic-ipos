"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_bank_bank_module_ts"],{

/***/ 3791:
/*!*******************************************!*\
  !*** ./src/app/pages/bank/bank.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankPageModule": () => (/* binding */ BankPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 1382);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_shared_shared_layout_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared-layout-component.module */ 8340);
/* harmony import */ var _bank_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bank.page */ 686);
/* harmony import */ var src_app_shared_shared_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared-component.module */ 7125);







let BankPageModule = class BankPageModule {
};
BankPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([
                {
                    path: '',
                    component: _bank_page__WEBPACK_IMPORTED_MODULE_2__.BankPage,
                },
            ]),
            src_app_shared_shared_layout_component_module__WEBPACK_IMPORTED_MODULE_1__.SharedLayoutComponentModule,
            src_app_shared_shared_component_module__WEBPACK_IMPORTED_MODULE_3__.SharedComponenttModule,
        ],
        declarations: [_bank_page__WEBPACK_IMPORTED_MODULE_2__.BankPage],
    })
], BankPageModule);



/***/ }),

/***/ 686:
/*!*****************************************!*\
  !*** ./src/app/pages/bank/bank.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankPage": () => (/* binding */ BankPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_bank_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./bank.page.html */ 4302);
/* harmony import */ var _bank_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bank.page.scss */ 3134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-url.module */ 1646);
/* harmony import */ var src_app_services_bank_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/bank.service */ 9140);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ 875);







let BankPage = class BankPage {
    constructor(bankService) {
        this.bankService = bankService;
        this.banks = [];
        this.url = src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl;
        this.imgPath = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__.imagePath;
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
        this.bankService.getAllBank().then((observe) => {
            observe.subscribe({
                next: (data) => {
                    this.banks = data;
                },
                error: () => { },
                complete: () => { },
            });
        });
    }
};
BankPage.ctorParameters = () => [
    { type: src_app_services_bank_service__WEBPACK_IMPORTED_MODULE_3__.BankService }
];
BankPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-bank',
        template: _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_bank_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_bank_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], BankPage);



/***/ }),

/***/ 9140:
/*!******************************************!*\
  !*** ./src/app/services/bank.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BankService": () => (/* binding */ BankService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ 9900);




let BankService = class BankService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.url = 'qrCodes';
    }
    getAllBank() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const branch = yield this.storage.storageData('branch');
            return yield this.http.get(this.url + `/${branch}`);
        });
    }
};
BankService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService }
];
BankService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({ providedIn: 'root' })
], BankService);



/***/ }),

/***/ 4302:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/bank/bank.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"ທະນາຄານ\" [href]=\"url.home+'/'+url.generalSetting\">\n</app-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"isRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <ng-container *ngFor=\"let bank of banks\">\n      <ion-item lines=\"full\">\n        <ion-avatar slot=\"start\">\n          <img [src]=\"imgPath(bank.Bank.logo)\" [alt]=\"bank.Bank.name\" />\n        </ion-avatar>\n        <ion-label>\n          <h4>{{bank.name}}</h4>\n          <p>{{bank.Bank.name}}</p>\n        </ion-label>\n\n        <app-edit-button controlType=\"edit\"></app-edit-button>\n        <app-edit-button controlType=\"del\"></app-edit-button>\n      </ion-item>\n    </ng-container>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 3134:
/*!*******************************************!*\
  !*** ./src/app/pages/bank/bank.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYW5rLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_bank_bank_module_ts.js.map