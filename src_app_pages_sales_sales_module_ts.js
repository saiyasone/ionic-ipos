"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_sales_sales_module_ts"],{

/***/ 6171:
/*!*********************************************!*\
  !*** ./src/app/pages/sales/sales.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesPageModule": () => (/* binding */ SalesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 1382);
/* harmony import */ var _sales_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales.page */ 3949);
/* harmony import */ var src_app_shared_shared_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared-component.module */ 7125);
/* harmony import */ var src_app_shared_shared_layout_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared-layout-component.module */ 8340);







let SalesPageModule = class SalesPageModule {
};
SalesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([
                {
                    path: '',
                    component: _sales_page__WEBPACK_IMPORTED_MODULE_1__.SalesPage,
                },
            ]),
            src_app_shared_shared_component_module__WEBPACK_IMPORTED_MODULE_2__.SharedComponenttModule,
            src_app_shared_shared_layout_component_module__WEBPACK_IMPORTED_MODULE_3__.SharedLayoutComponentModule,
        ],
        declarations: [_sales_page__WEBPACK_IMPORTED_MODULE_1__.SalesPage],
    })
], SalesPageModule);



/***/ }),

/***/ 3949:
/*!*******************************************!*\
  !*** ./src/app/pages/sales/sales.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalesPage": () => (/* binding */ SalesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sales_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sales.page.html */ 9322);
/* harmony import */ var _sales_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sales.page.scss */ 6774);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-url.module */ 1646);




// import { Printer } from '@ionic-native/printer/ngx';

let SalesPage = class SalesPage {
    constructor() {
        this.url = src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl;
    }
    // constructor(private printer: Printer) {}
    ngOnInit() { }
    onPrint() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            // this.printer.print('<h1>Receipt</h1><p>Thank you for your purchase!</p>');
        });
    }
};
SalesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-sales',
        template: _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sales_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sales_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SalesPage);



/***/ }),

/***/ 9322:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/sales/sales.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"primary\" [defaultHref]=\"url.home\">\n      </ion-back-button>\n    </ion-buttons>\n    <ion-title>ໜ້າຮ້ານ</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-segment value=\"all\">\n      <ion-segment-button value=\"all\">\n        <ion-label>ທັງໝົດ</ion-label>\n      </ion-segment-button>\n      <ion-segment-button value=\"favorites\">\n        <ion-label>ທີ່ມັກ</ion-label>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <p>ໜ້າຮ້ານ ແຊບ</p>\n  <ion-button color=\"success\" (click)=\"onPrint()\">\n    <ion-icon slot=\"start\" name=\"print\"></ion-icon>\n    ພິມໃບບິນ\n  </ion-button>\n</ion-content>\n");

/***/ }),

/***/ 6774:
/*!*********************************************!*\
  !*** ./src/app/pages/sales/sales.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWxlcy5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_sales_sales_module_ts.js.map