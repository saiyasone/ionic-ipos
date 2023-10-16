"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_category_category_module_ts"],{

/***/ 1998:
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryPageModule": () => (/* binding */ CategoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 1382);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_shared_shared_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared-component.module */ 7125);
/* harmony import */ var _category_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.page */ 7766);
/* harmony import */ var src_app_shared_shared_layout_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared-layout-component.module */ 8340);







let CategoryPageModule = class CategoryPageModule {
};
CategoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([
                {
                    path: '',
                    component: _category_page__WEBPACK_IMPORTED_MODULE_2__.CategoryPage,
                },
            ]),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            src_app_shared_shared_component_module__WEBPACK_IMPORTED_MODULE_1__.SharedComponenttModule,
            src_app_shared_shared_layout_component_module__WEBPACK_IMPORTED_MODULE_3__.SharedLayoutComponentModule,
        ],
        declarations: [_category_page__WEBPACK_IMPORTED_MODULE_2__.CategoryPage],
    })
], CategoryPageModule);



/***/ }),

/***/ 7766:
/*!*************************************************!*\
  !*** ./src/app/pages/category/category.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryPage": () => (/* binding */ CategoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_category_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./category.page.html */ 7648);
/* harmony import */ var _category_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category.page.scss */ 1815);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 8377);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 6511);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/category.service */ 5061);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var src_app_app_url_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app-url.module */ 1646);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/global.service */ 5293);












let CategoryPage = class CategoryPage {
    constructor(cateService, alertController, location, globalService) {
        this.cateService = cateService;
        this.alertController = alertController;
        this.location = location;
        this.globalService = globalService;
        this.isCreate = false;
        this.isModal = false;
        this.loading = false;
        this.backdrop = false;
        this.categories = [];
        this.url = src_app_app_url_module__WEBPACK_IMPORTED_MODULE_3__.appUrl;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl(''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
        });
        this.ondestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subscription();
    }
    get f() {
        return this.form.controls;
    }
    ngOnInit() {
        this.onFetchData();
        this.ondestroy$ = this.globalService.loading$.subscribe((value) => {
            this.backdrop = value;
        });
    }
    ngOnDestroy() {
        this.ondestroy$.unsubscribe();
    }
    isBack() {
        this.location.back();
    }
    setModal() {
        this.isModal = !this.isModal;
    }
    closeForm() {
        this.isCreate = false;
        this.form.reset();
        this.setModal();
    }
    isRefresh(evt) {
        setTimeout(() => {
            this.onFetchData();
            evt.target.complete();
        }, 500);
    }
    onFetchData() {
        this.globalService.loading$.next(true);
        this.cateService.getAllCategory().then((data) => {
            data.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((val) => val.cate)).subscribe({
                next: (value) => {
                    this.categories = value;
                },
                error: () => {
                    this.globalService.loading$.next(false);
                },
                complete: () => {
                    this.globalService.loading$.next(false);
                },
            });
        });
    }
    onFilter(data) {
        this.isCreate = true;
        this.form.setValue({
            id: data.id,
            name: data.name,
        });
        this.setModal();
    }
    onSave() {
        if (this.form.invalid) {
            return this.form.markAllAsTouched();
        }
        const category = {
            categoryId: this.f.id.value,
            name: this.f.name.value,
        };
        if (this.isCreate) {
            this.cateService.updateCategory(category).subscribe({
                next: () => {
                    this.onFetchData();
                    this.closeForm();
                },
                error: () => { },
                complete: () => { },
            });
        }
        else {
            this.cateService.createCategory(category).subscribe({
                next: () => {
                    this.onFetchData();
                    this.closeForm();
                },
                error: () => { },
                complete: () => { },
            });
        }
    }
    onDelete(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'ທ່ານຕ້ອງການລົບ ?',
                subHeader: data.name,
                buttons: [
                    {
                        text: 'ຍົກເລີກ',
                        role: 'cancel',
                        cssClass: 'alert-cancel',
                        handler: () => { },
                    },
                    {
                        text: 'ຕົກລົງ',
                        role: 'confirm',
                        cssClass: 'alert-confirm',
                        handler: () => {
                            this.cateService.deleteCategory(data.id).subscribe({
                                next: () => {
                                    this.onFetchData();
                                },
                                error: () => { },
                                complete: () => { },
                            });
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
};
CategoryPage.ctorParameters = () => [
    { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_2__.CategoryService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.Location },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__.GlobalService }
];
CategoryPage.propDecorators = {
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonModal,] }]
};
CategoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-category',
        template: _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_category_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonModal],
        styles: [_category_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CategoryPage);



/***/ }),

/***/ 7648:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/category/category.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- ======== loading template ======== -->\n\n<app-header\n  title=\"ປະເພດສິນຄ້າ\"\n  [href]=\"url.home +'/'+ url.manageProduct\"\n  [showAction]=\"true\"\n  (showActionEmit)=\"setModal()\"\n>\n</app-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"isRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ng-container *ngIf=\"categories.length && !backdrop; else loadingTemplate\">\n    <ion-list>\n      <ng-container *ngFor=\"let cate of categories; let i=index\">\n        <ion-item lines=\"full\">\n          <span slot=\"start\"> {{i+1}} </span>\n          <ion-label *ngIf=\"!loading; else labelTemplate\">\n            {{cate.name}}\n          </ion-label>\n          <ng-template #labelTemplate>\n            <ion-label>\n              <ion-skeleton-text\n                [animated]=\"true\"\n                style=\"width: 50%\"\n              ></ion-skeleton-text>\n            </ion-label>\n          </ng-template>\n\n          <app-edit-button\n            (editEmit)=\"onFilter(cate)\"\n            controlType=\"edit\"\n          ></app-edit-button>\n          <app-edit-button\n            (delEmit)=\"onDelete(cate)\"\n            controlType=\"del\"\n          ></app-edit-button>\n        </ion-item>\n      </ng-container>\n    </ion-list>\n  </ng-container>\n</ion-content>\n\n<ng-template #loadingTemplate>\n  <app-loading></app-loading>\n</ng-template>\n\n<!-- ========= Modal Form =========== -->\n<!-- (willDismiss)=\"onWillDismiss($event)\" -->\n<ion-modal [isOpen]=\"isModal\">\n  <ng-template>\n    <ion-header>\n      <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-button (click)=\"closeForm()\">ຍົກເລີກ</ion-button>\n        </ion-buttons>\n        <ion-title> {{isCreate ? 'ແກ້ໄຂ' : 'ເພີ່ມ'}}ປະເພດສິນຄ້າ</ion-title>\n        <ion-buttons slot=\"end\">\n          <ion-button (click)=\"onSave()\" [strong]=\"true\">ບັນທຶກ</ion-button>\n        </ion-buttons>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content class=\"ion-padding\">\n      <form [formGroup]=\"form\">\n        <app-input-form\n          placeholder=\"ໃສ່ຊື່\"\n          [control]=\"$any(f['name'])\"\n        ></app-input-form>\n      </form>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n");

/***/ }),

/***/ 1815:
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_category_category_module_ts.js.map