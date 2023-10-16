"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_manage-product_manage-product_module_ts"],{

/***/ 2433:
/*!***************************************************************!*\
  !*** ./src/app/pages/manage-product/manage-product.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagePageModule": () => (/* binding */ ManagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 1382);
/* harmony import */ var src_app_shared_shared_layout_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared-layout-component.module */ 8340);
/* harmony import */ var _manage_product_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manage-product.page */ 1847);






let ManagePageModule = class ManagePageModule {
};
ManagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild([
                {
                    path: '',
                    component: _manage_product_page__WEBPACK_IMPORTED_MODULE_2__.ManagePage,
                },
            ]),
            src_app_shared_shared_layout_component_module__WEBPACK_IMPORTED_MODULE_1__.SharedLayoutComponentModule,
        ],
        declarations: [_manage_product_page__WEBPACK_IMPORTED_MODULE_2__.ManagePage],
    })
], ManagePageModule);



/***/ }),

/***/ 1847:
/*!*************************************************************!*\
  !*** ./src/app/pages/manage-product/manage-product.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagePage": () => (/* binding */ ManagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manage_product_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./manage-product.page.html */ 9597);
/* harmony import */ var _manage_product_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manage-product.page.scss */ 5570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-url.module */ 1646);






let ManagePage = class ManagePage {
    constructor(router) {
        this.router = router;
        this.manageNavigate = [
            {
                label: 'ສິນຄ້າ',
                icon: 'id-card',
                link: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl.product,
            },
            {
                label: 'ສັ່ງຊື້ສິນຄ້າ',
                icon: 'cube',
                link: '',
            },
            {
                label: 'ປະເພດສິນຄ້າ',
                icon: 'folder-open',
                link: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl.category,
            },
            {
                label: 'ຫົວໜ່ວຍ',
                icon: 'server',
                link: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl.unit,
            },
            {
                label: 'ຕຳແໜ່ງ',
                icon: 'locate',
                link: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl.zone,
            },
        ];
        this.url = src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl;
    }
    ngOnInit() { }
    isNavigate(link) {
        if (this.url.home === link) {
            return;
        }
        this.router.navigate([this.url.home, link]);
    }
};
ManagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ManagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-manage',
        template: _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manage_product_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_manage_product_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ManagePage);



/***/ }),

/***/ 9597:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/manage-product/manage-product.page.html ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header title=\"ຈັດການຂໍ້ມູນສິນຄ້າ\" [href]=\"url.home\"> </app-header>\n\n<ion-content>\n  <div class=\"manage-page\">\n    <ion-grid>\n      <ion-row>\n        <ng-container *ngFor=\"let nav of manageNavigate\">\n          <ion-col sizeLg=\"4\" sizeMd=\"6\" sizeSm=\"6\" sizeXs=\"6\">\n            <ion-card (click)=\"isNavigate(nav.link)\">\n              <div class=\"ion-activatable ripple-parent rounded-rectangle\">\n                <ion-ripple-effect></ion-ripple-effect>\n                <ion-card-content>\n                  <div class=\"card-container\">\n                    <div class=\"card-img\">\n                      <ion-icon color=\"primary\" [name]=\"nav.icon\"></ion-icon>\n                    </div>\n                    <div class=\"card-title\">\n                      <p color=\"primary\">{{nav.label}}</p>\n                    </div>\n                  </div>\n                </ion-card-content>\n              </div>\n            </ion-card>\n          </ion-col>\n        </ng-container>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 5570:
/*!***************************************************************!*\
  !*** ./src/app/pages/manage-product/manage-product.page.scss ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = ".ion-toolbar ion-button[shape=circle] {\n  --border-radius: 50%;\n  --width: 50px;\n  --height: 50px;\n}\n\n.manage-page {\n  margin-top: 0.5rem;\n}\n\n.manage-page ion-col.ios.hydrated,\n.manage-page ion-col.md.hydrated {\n  padding: 0;\n}\n\n.manage-page ion-card {\n  box-shadow: 0 2px 8px #214aef40;\n  cursor: pointer;\n}\n\n.manage-page ion-card .card-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.manage-page ion-card .card-container .card-img {\n  margin-bottom: 0.5rem;\n}\n\n.manage-page ion-card .card-container .card-img ion-icon {\n  font-size: 2.8rem;\n}\n\n.manage-page ion-card .card-container .card-title p {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1hbmFnZS1wcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFBSjs7QUFJQTtFQUNFLGtCQUFBO0FBREY7O0FBR0U7O0VBRUUsVUFBQTtBQURKOztBQUlFO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0FBRko7O0FBSUk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUZOOztBQUlNO0VBQ0UscUJBQUE7QUFGUjs7QUFJUTtFQUNFLGlCQUFBO0FBRlY7O0FBUVE7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTlYiLCJmaWxlIjoibWFuYWdlLXByb2R1Y3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi10b29sYmFyIHtcclxuICBpb24tYnV0dG9uW3NoYXBlPWNpcmNsZV0ge1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtLXdpZHRoOiA1MHB4O1xyXG4gICAgLS1oZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFuYWdlLXBhZ2Uge1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuXHJcbiAgaW9uLWNvbC5pb3MuaHlkcmF0ZWQsXHJcbiAgaW9uLWNvbC5tZC5oeWRyYXRlZCB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgaW9uLWNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4ICMyMTRhZWY0MDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAuY2FyZC1jb250YWluZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgLmNhcmQtaW1nIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcblxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMi44cmVtO1xyXG4gICAgICAgICAgLy8gY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgIC8vIGNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_manage-product_manage-product_module_ts.js.map