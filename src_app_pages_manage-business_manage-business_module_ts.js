"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_manage-business_manage-business_module_ts"],{

/***/ 9069:
/*!*****************************************************************!*\
  !*** ./src/app/pages/manage-business/manage-business.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageBusinessPageModule": () => (/* binding */ ManageBusinessPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 1382);
/* harmony import */ var src_app_shared_shared_layout_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared-layout-component.module */ 8340);
/* harmony import */ var _manage_business_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-business.page */ 4874);






let ManageBusinessPageModule = class ManageBusinessPageModule {
};
ManageBusinessPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([
                {
                    path: '',
                    component: _manage_business_page__WEBPACK_IMPORTED_MODULE_2__.ManageBusinessPage,
                },
            ]),
            src_app_shared_shared_layout_component_module__WEBPACK_IMPORTED_MODULE_1__.SharedLayoutComponentModule,
        ],
        declarations: [_manage_business_page__WEBPACK_IMPORTED_MODULE_2__.ManageBusinessPage],
    })
], ManageBusinessPageModule);



/***/ }),

/***/ 4874:
/*!***************************************************************!*\
  !*** ./src/app/pages/manage-business/manage-business.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManageBusinessPage": () => (/* binding */ ManageBusinessPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manage_business_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./manage-business.page.html */ 3369);
/* harmony import */ var _manage_business_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-business.page.scss */ 7890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-url.module */ 1646);






let ManageBusinessPage = class ManageBusinessPage {
    constructor(router) {
        this.router = router;
        this.navbars = [
            {
                label: 'ສາຂາ',
                link: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl.branch,
                icon: 'business-outline',
            },
            {
                label: 'ລູກຄ້າ',
                link: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl.customer,
                icon: 'person-outline',
            },
            {
                label: 'ພະນັກງານ',
                link: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl.staff,
                icon: 'people-outline',
            },
            {
                label: 'ລູກໜີ້',
                link: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl.personDebt,
                icon: 'briefcase-outline',
            },
            {
                label: 'ຜູ້ສະໜອງ',
                link: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl.supplier,
                icon: 'receipt-outline',
            },
        ];
        this.url = src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl;
    }
    navigate(link) {
        if (link) {
            this.router.navigate([src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl.home, link]);
        }
    }
};
ManageBusinessPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ManageBusinessPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-manage-business',
        template: _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manage_business_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_manage_business_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ManageBusinessPage);



/***/ }),

/***/ 3369:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/manage-business/manage-business.page.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"ບໍລິຫານ\" [href]=\"url.home\"> </app-header>\n\n<ion-content>\n  <ion-list>\n    <ng-container *ngFor=\"let nav of navbars\">\n      <ion-item\n        (click)=\"navigate(nav.link)\"\n        button\n        lines=\"none\"\n        [detail]=\"false\"\n      >\n        <ion-icon slot=\"start\" [name]=\"nav.icon\"></ion-icon>\n        <ion-label> {{nav.label}} </ion-label>\n      </ion-item>\n    </ng-container>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 7890:
/*!*****************************************************************!*\
  !*** ./src/app/pages/manage-business/manage-business.page.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "ion-item ion-icon {\n  color: var(--ion-color-primary);\n}\nion-item ion-label {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS1idXNpbmVzcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSwrQkFBQTtBQUFKO0FBR0U7RUFDRSwrQkFBQTtBQURKIiwiZmlsZSI6Im1hbmFnZS1idXNpbmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgaW9uLWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICB9XHJcblxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_manage-business_manage-business_module_ts.js.map