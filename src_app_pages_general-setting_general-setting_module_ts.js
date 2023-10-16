"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_general-setting_general-setting_module_ts"],{

/***/ 7520:
/*!*****************************************************************!*\
  !*** ./src/app/pages/general-setting/general-setting.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralSettingPageModule": () => (/* binding */ GeneralSettingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 1382);
/* harmony import */ var _general_setting_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general-setting.page */ 4010);
/* harmony import */ var src_app_shared_shared_layout_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared-layout-component.module */ 8340);






let GeneralSettingPageModule = class GeneralSettingPageModule {
};
GeneralSettingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([
                {
                    path: '',
                    component: _general_setting_page__WEBPACK_IMPORTED_MODULE_1__.GeneralSettingPage,
                },
            ]),
            src_app_shared_shared_layout_component_module__WEBPACK_IMPORTED_MODULE_2__.SharedLayoutComponentModule,
        ],
        declarations: [_general_setting_page__WEBPACK_IMPORTED_MODULE_1__.GeneralSettingPage],
    })
], GeneralSettingPageModule);



/***/ }),

/***/ 4010:
/*!***************************************************************!*\
  !*** ./src/app/pages/general-setting/general-setting.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralSettingPage": () => (/* binding */ GeneralSettingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_general_setting_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./general-setting.page.html */ 3863);
/* harmony import */ var _general_setting_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general-setting.page.scss */ 4361);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-url.module */ 1646);






let GeneralSettingPage = class GeneralSettingPage {
    constructor(router) {
        this.router = router;
        this.url = src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl;
        this.navbars = [
            {
                label: 'ອັດຕາແລກປ່ຽນ',
                link: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl.currency,
                icon: 'cash-outline',
            },
            {
                label: 'ພາສີອາກອນ',
                link: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl.vat,
                icon: 'pricetag-outline',
            },
            {
                label: 'ທະນາຄານ',
                link: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl.bank,
                icon: 'qr-code-outline',
            },
        ];
    }
    ngOnInit() { }
    navigate(link) {
        this.router.navigate([src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl.home, link]);
    }
};
GeneralSettingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
GeneralSettingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-general-setting',
        template: _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_general_setting_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_general_setting_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], GeneralSettingPage);



/***/ }),

/***/ 3863:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/general-setting/general-setting.page.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"ຕັ້ງຄ່າທົ່ວໄປ\" [href]=\"url.home\"> </app-header>\n\n<ion-content>\n  <ion-list>\n    <ng-container *ngFor=\"let nav of navbars\">\n      <ion-item\n        (click)=\"navigate(nav.link)\"\n        button\n        lines=\"none\"\n        [detail]=\"false\"\n      >\n        <ion-icon color=\"primary\" slot=\"start\" [name]=\"nav.icon\"></ion-icon>\n        <ion-label color=\"primary\"> {{nav.label}} </ion-label>\n      </ion-item>\n    </ng-container>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 4361:
/*!*****************************************************************!*\
  !*** ./src/app/pages/general-setting/general-setting.page.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLXNldHRpbmcucGFnZS5zY3NzIn0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_general-setting_general-setting_module_ts.js.map