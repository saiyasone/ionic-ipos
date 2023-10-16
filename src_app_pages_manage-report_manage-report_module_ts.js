"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_manage-report_manage-report_module_ts"],{

/***/ 2377:
/*!*************************************************************!*\
  !*** ./src/app/pages/manage-report/manage-report.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageReportPageModule": () => (/* binding */ ManageReportPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _manage_report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manage-report.page */ 1136);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 1382);
/* harmony import */ var src_app_shared_shared_layout_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared-layout-component.module */ 8340);






let ManageReportPageModule = class ManageReportPageModule {
};
ManageReportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([
                {
                    path: '',
                    component: _manage_report_page__WEBPACK_IMPORTED_MODULE_0__.ManageReportPage,
                },
            ]),
            src_app_shared_shared_layout_component_module__WEBPACK_IMPORTED_MODULE_2__.SharedLayoutComponentModule,
        ],
        declarations: [_manage_report_page__WEBPACK_IMPORTED_MODULE_0__.ManageReportPage],
    })
], ManageReportPageModule);



/***/ }),

/***/ 1136:
/*!***********************************************************!*\
  !*** ./src/app/pages/manage-report/manage-report.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageReportPage": () => (/* binding */ ManageReportPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manage_report_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./manage-report.page.html */ 6470);
/* harmony import */ var _manage_report_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-report.page.scss */ 7198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-url.module */ 1646);





let ManageReportPage = class ManageReportPage {
    constructor() {
        this.reportNavs = [
            {
                link: '',
                label: 'ຍອດຂາຍ',
                icon: 'storefront-outline',
            },
            {
                link: '',
                label: 'ຕິດໜີ້',
                icon: 'cash-outline',
            },
            {
                link: '',
                label: 'ຍອດກຳໄລ',
                icon: 'wallet-outline',
            },
            {
                link: '',
                label: 'ປະຫວັດການຂາຍ',
                icon: 'time-outline',
            },
            {
                link: '',
                label: 'ສິນຄ້າຂາຍດີ',
                icon: 'hourglass-outline',
            },
            {
                link: '',
                label: 'ສິນຄ້າເຫຼືອ',
                icon: 'basket-outline',
            },
            {
                link: '',
                label: 'ການສັ່ງຊື້',
                icon: 'document-text-outline',
            },
            {
                link: '',
                label: 'ສິນຄ້ານຳເຂົ້າ',
                icon: 'cube-outline',
            },
            {
                link: '',
                label: 'ສິນຄ້າອອກສາງ',
                icon: 'albums-outline',
            },
        ];
        this.url = src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl;
    }
    ngOnInit() { }
};
ManageReportPage.ctorParameters = () => [];
ManageReportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-manage-report',
        template: _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manage_report_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_manage_report_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ManageReportPage);



/***/ }),

/***/ 6470:
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/manage-report/manage-report.page.html ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"ລາຍງານ\" [href]=\"url.home\"> </app-header>\n\n<ion-content>\n  <ion-list>\n    <ng-container *ngFor=\"let nav of reportNavs\">\n      <ion-item button lines=\"none\" [detail]=\"false\">\n        <ion-icon color=\"primary\" slot=\"start\" [name]=\"nav.icon\"></ion-icon>\n        <ion-label color=\"primary\"> {{nav.label}} </ion-label>\n      </ion-item>\n    </ng-container>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 7198:
/*!*************************************************************!*\
  !*** ./src/app/pages/manage-report/manage-report.page.scss ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW5hZ2UtcmVwb3J0LnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_manage-report_manage-report_module_ts.js.map