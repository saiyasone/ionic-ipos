"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_product_product_module_ts"],{

/***/ 5933:
/*!*******************************************************!*\
  !*** ./src/app/pages/add-product/add-product.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddProductPage": () => (/* binding */ AddProductPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_product_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-product.page.html */ 4136);
/* harmony import */ var _add_product_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-product.page.scss */ 4715);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 6511);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 8377);
/* harmony import */ var src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-url.module */ 1646);
/* harmony import */ var src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/category.service */ 5061);
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/global.service */ 5293);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/product.service */ 602);
/* harmony import */ var src_app_services_unit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/unit.service */ 1402);
/* harmony import */ var src_app_services_zone_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/zone.service */ 8822);
















let AddProductPage = class AddProductPage {
    constructor(globalService, productService, cateService, unitService, zoneService, alertCtrl, location, activeRoute) {
        this.globalService = globalService;
        this.productService = productService;
        this.cateService = cateService;
        this.unitService = unitService;
        this.zoneService = zoneService;
        this.alertCtrl = alertCtrl;
        this.location = location;
        this.activeRoute = activeRoute;
        this.url = src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl;
        this.isCreate = false;
        this.selectFile = null;
        this.categories = [];
        this.units = [];
        this.zones = [];
        this.ondestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subscription();
    }
    get f() {
        return this.form.controls;
    }
    ngOnInit() {
        this.initializeApp();
        this.onFetchCategory();
        this.onFetchZone();
        this.onFetchUnit();
    }
    ngOnDestroy() {
        this.ondestroy$.unsubscribe();
        this.globalService.clearFile();
    }
    initializeApp() {
        // eslint-disable-next-line no-underscore-dangle
        this.globalService._file.subscribe((data) => {
            this.selectFile = data;
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(''),
            barcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(''),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
            alertAmount: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
            unit: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
            zone: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(''),
            cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]),
            wholesale: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl(''),
        });
        this.onFetchById();
    }
    onFetchCategory() {
        this.cateService.getAllCategory().then((observe) => {
            observe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)((val) => val.cate)).subscribe({
                next: (data) => {
                    this.categories = data;
                },
                error: () => { },
                complete: () => { },
            });
        });
    }
    onFetchUnit() {
        this.unitService.getAllUnit().then((observe) => {
            observe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)((val) => val.unit)).subscribe({
                next: (data) => {
                    this.units = data;
                },
                error: () => { },
                complete: () => { },
            });
        });
    }
    onFetchZone() {
        this.zoneService.getAllZone().then((observe) => {
            observe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)((val) => val.zone)).subscribe({
                next: (data) => {
                    this.zones = data;
                },
                error: () => { },
                complete: () => { },
            });
        });
    }
    onFetchById() {
        this.activeRoute.paramMap.subscribe((param) => {
            if (param.get('id')) {
                this.globalService.backdropLoading$.next(true);
                this.productService.getProduct(param.get('id')).subscribe({
                    next: (data) => {
                        if (!!data) {
                            this.form.patchValue({
                                id: data.id,
                                barcode: data.barCodeNumber,
                                name: data.name,
                                category: data.categoryId,
                            });
                            const stock = data.Stocks;
                            stock.map((el) => {
                                this.form.patchValue({
                                    unit: el.unitId,
                                    zone: el.zoneId ? el.zoneId : '',
                                    cost: el.cost,
                                    price: el.price,
                                    wholesale: el.wholesale,
                                    alertAmount: el.alertAmount,
                                    amount: el.amount,
                                });
                            });
                            this.isCreate = true;
                        }
                    },
                    error: () => {
                        this.globalService.backdropLoading$.next(false);
                    },
                    complete: () => {
                        this.globalService.backdropLoading$.next(false);
                    },
                });
            }
        });
    }
    handleFile(evt) {
        this.globalService.handleFile(evt);
    }
    onSave() {
        if (this.form.invalid) {
            return this.form.markAllAsTouched();
        }
        if (!this.isCreate) {
            if (!this.selectFile) {
                const alert = this.alertCtrl.create({
                    message: 'ເລືອກຮູບພາບກ່ອນ',
                    header: 'ຄຳເຕືອນ!',
                });
                alert.then((obx) => {
                    obx.present();
                });
                return;
            }
        }
        const data = {
            productId: this.f.id.value,
            name: this.f.name.value,
            barcode: this.f.barcode.value,
            categoryId: this.f.category.value,
            unitId: this.f.unit.value,
            zoneId: this.f.zone.value,
            amount: this.f.amount.value || 0,
            alertAmount: this.f.alertAmount.value,
            cost: this.f.cost.value,
            price: this.f.price.value,
            wholesale: this.f.wholesale.value,
            photo: this.selectFile,
        };
        if (this.isCreate) {
            this.productService.updateProduct(data).subscribe({
                next: () => {
                    this.location.back();
                },
                error: () => { },
                complete: () => { },
            });
        }
        else {
            this.productService.createProduct(data).subscribe({
                next: () => {
                    this.location.back();
                },
                error: () => { },
                complete: () => { },
            });
        }
    }
};
AddProductPage.ctorParameters = () => [
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__.GlobalService },
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_5__.ProductService },
    { type: src_app_services_category_service__WEBPACK_IMPORTED_MODULE_3__.CategoryService },
    { type: src_app_services_unit_service__WEBPACK_IMPORTED_MODULE_6__.UnitService },
    { type: src_app_services_zone_service__WEBPACK_IMPORTED_MODULE_7__.ZoneService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.ActivatedRoute }
];
AddProductPage = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-add-product',
        template: _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_product_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_product_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddProductPage);



/***/ }),

/***/ 8559:
/*!*************************************************!*\
  !*** ./src/app/pages/product/product.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPageModule": () => (/* binding */ ProductPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _product_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.page */ 2859);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 1382);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_shared_shared_layout_component_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared-layout-component.module */ 8340);
/* harmony import */ var src_app_shared_shared_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared-component.module */ 7125);
/* harmony import */ var src_app_app_url_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-url.module */ 1646);
/* harmony import */ var _add_product_add_product_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-product/add-product.page */ 5933);









let ProductPageModule = class ProductPageModule {
};
ProductPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([
                {
                    path: '',
                    component: _product_page__WEBPACK_IMPORTED_MODULE_0__.ProductPage,
                },
                {
                    path: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_4__.appUrl.addProduct,
                    component: _add_product_add_product_page__WEBPACK_IMPORTED_MODULE_5__.AddProductPage,
                },
                {
                    path: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_4__.appUrl.editProduct + '/:id',
                    component: _add_product_add_product_page__WEBPACK_IMPORTED_MODULE_5__.AddProductPage,
                },
            ]),
            src_app_shared_shared_layout_component_module__WEBPACK_IMPORTED_MODULE_2__.SharedLayoutComponentModule,
            src_app_shared_shared_component_module__WEBPACK_IMPORTED_MODULE_3__.SharedComponenttModule,
        ],
        declarations: [_product_page__WEBPACK_IMPORTED_MODULE_0__.ProductPage, _add_product_add_product_page__WEBPACK_IMPORTED_MODULE_5__.AddProductPage],
    })
], ProductPageModule);



/***/ }),

/***/ 2859:
/*!***********************************************!*\
  !*** ./src/app/pages/product/product.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPage": () => (/* binding */ ProductPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_product_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./product.page.html */ 1238);
/* harmony import */ var _product_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product.page.scss */ 1684);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 8377);
/* harmony import */ var src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-url.module */ 1646);
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/product.service */ 602);








let ProductPage = class ProductPage {
    constructor(productService, router, activeRoute) {
        this.productService = productService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.products = [];
        this.url = src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl;
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
    addProduct() {
        this.router.navigate([src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl.addProduct], { relativeTo: this.activeRoute });
    }
    editProduct(id) {
        this.router.navigate([src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl.editProduct, id], {
            relativeTo: this.activeRoute,
        });
    }
    onFetchData() {
        this.productService.getAllProduct().then((observe) => {
            observe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((val) => val.product)).subscribe({
                next: (data) => {
                    this.products = data;
                },
                error: () => { },
                complete: () => { },
            });
        });
    }
};
ProductPage.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_3__.ProductService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
ProductPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-product',
        template: _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_product_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_product_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProductPage);



/***/ }),

/***/ 602:
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ 9900);




let ProductService = class ProductService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.url = 'products';
    }
    getAllProduct() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const branch = yield this.storage.storageData('branch');
            return yield this.http.get(this.url + `/${branch}`);
        });
    }
    getProduct(id) {
        return this.http.get(this.url + `/get/${id}`);
    }
    createProduct(product) {
        const f = new FormData();
        // eslint-disable-next-line guard-for-in
        for (const key in product) {
            f.append(key, product[key]);
        }
        return this.http.post(this.url, f);
    }
    updateProduct(product) {
        const f = new FormData();
        // eslint-disable-next-line guard-for-in
        for (const key in product) {
            f.append(key, product[key]);
        }
        return this.http.put(this.url, f);
    }
};
ProductService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService }
];
ProductService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({ providedIn: 'root' })
], ProductService);



/***/ }),

/***/ 4136:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/add-product/add-product.page.html ***!
  \************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  [title]=\" isCreate ? 'ແກ້ໄຂສີນຄ້າ': 'ເພີ່ມສີນຄ້າ'\"\n  [href]=\"url.home +'/'+ url.product\"\n>\n</app-header>\n\n<app-backdrop-loading></app-backdrop-loading>\n\n<ion-content class=\"ion-padding\">\n  <form [formGroup]=\"form\">\n    <ion-list>\n      <ion-grid>\n        <ion-row>\n          <!-- select file -->\n          <ion-col size=\"12\">\n            <div class=\"form-group\">\n              <ion-text>\n                <label>ເລືອກຮູບ</label>\n              </ion-text>\n              <ion-item lines=\"none\" class=\"item-input\">\n                <ion-input\n                  type=\"file\"\n                  placeholder=\"ເລືອກຮູບ\"\n                  accept=\"image/png, image/gif, image/jpeg\"\n                  (input)=\"handleFile($event)\"\n                ></ion-input>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n        <!-- barcode -->\n        <ion-row>\n          <ion-col size=\"12\">\n            <div class=\"form-group\">\n              <ion-text>\n                <label>ລະຫັດບາໂຄດ</label>\n              </ion-text>\n              <app-input-form\n                placeholder=\"ລະຫັດບາໂຄດ\"\n                [control]=\"$any(f['barcode'])\"\n              ></app-input-form>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <!-- name && category -->\n        <ion-row>\n          <ion-col size=\"12\" sizeMd=\"6\">\n            <div class=\"form-group\">\n              <ion-text>\n                <label>ລາຍການສິນຄ້າ</label>\n              </ion-text>\n              <app-input-form\n                placeholder=\"ລາຍການສິນຄ້າ\"\n                [control]=\"$any(f['name'])\"\n              ></app-input-form>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\" sizeMd=\"6\">\n            <div class=\"form-group\">\n              <ion-text>\n                <label>ປະເພດສິນຄ້າ</label>\n              </ion-text>\n              <ion-item\n                lines=\"none\"\n                class=\"item-input\"\n                [ngClass]=\"{ error: f['category'].errors && (f['category'].dirty || f['category'].touched) }\"\n              >\n                <ion-select\n                  interface=\"action-sheet\"\n                  placeholder=\"ເລືອກປະເພດສິນຄ້າ\"\n                  formControlName=\"category\"\n                >\n                  <ng-container *ngFor=\"let cate of categories\">\n                    <ion-select-option [value]=\"cate.id\">\n                      {{cate.name}}\n                    </ion-select-option>\n                  </ng-container>\n                </ion-select>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <!-- amount && alertAmount -->\n        <ion-row>\n          <ion-col size=\"12\" sizeMd=\"6\">\n            <div class=\"form-group\">\n              <ion-text>\n                <label>ຈຳນວນສິນຄ້າ</label>\n              </ion-text>\n              <app-input-form\n                type=\"number\"\n                placeholder=\"ຈຳນວນສິນຄ້າ\"\n                [control]=\"$any(f['amount'])\"\n              ></app-input-form>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\" sizeMd=\"6\">\n            <div class=\"form-group\">\n              <ion-text>\n                <label>ຈຸດແຈ້ງເຕືອນ</label>\n              </ion-text>\n              <app-input-form\n                type=\"number\"\n                placeholder=\"ຈຸດແຈ້ງເຕືອນ\"\n                [control]=\"$any(f['alertAmount'])\"\n              ></app-input-form>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <!-- unit && zone -->\n        <ion-row>\n          <ion-col size=\"12\" sizeMd=\"6\">\n            <div class=\"form-group\">\n              <ion-text>\n                <label>ຫົວໜ່ວຍ</label>\n              </ion-text>\n              <ion-item\n                lines=\"none\"\n                class=\"item-input\"\n                [ngClass]=\"{ error: f['unit'].errors && (f['unit'].dirty || f['unit'].touched) }\"\n              >\n                <ion-select\n                  interface=\"action-sheet\"\n                  placeholder=\"ເລືອກຫົວໜ່ວຍ\"\n                  formControlName=\"unit\"\n                >\n                  <ng-container *ngFor=\"let unit of units\">\n                    <ion-select-option [value]=\"unit.id\">\n                      {{unit.name}}\n                    </ion-select-option>\n                  </ng-container>\n                </ion-select>\n              </ion-item>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\" sizeMd=\"6\">\n            <div class=\"form-group\">\n              <ion-text>\n                <label>ຕຳແໜ່ງ</label>\n              </ion-text>\n              <ion-item lines=\"none\" class=\"item-input\">\n                <ion-select\n                  interface=\"action-sheet\"\n                  placeholder=\"ເລືອກຕຳແໜ່ງ\"\n                  formControlName=\"zone\"\n                >\n                  <ng-container *ngFor=\"let zone of zones\">\n                    <ion-select-option [value]=\"zone.id\">\n                      {{zone.name}}\n                    </ion-select-option>\n                  </ng-container>\n                </ion-select>\n              </ion-item>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <!-- cost-->\n        <ion-row>\n          <ion-col size=\"12\">\n            <div class=\"form-group\">\n              <ion-text>\n                <label>ລາຄາຊື້</label>\n              </ion-text>\n              <app-input-form\n                type=\"number\"\n                placeholder=\"ລາຄາຊື້\"\n                [control]=\"$any(f['cost'])\"\n              ></app-input-form>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <!-- price && wholesale -->\n        <ion-row>\n          <ion-col size=\"12\" sizeMd=\"6\">\n            <div class=\"form-group\">\n              <ion-text>\n                <label>ລາຄາຍ່ອຍ</label>\n              </ion-text>\n              <app-input-form\n                type=\"number\"\n                placeholder=\"ລາຄາຍ່ອຍ\"\n                [control]=\"$any(f['price'])\"\n              ></app-input-form>\n            </div>\n          </ion-col>\n          <ion-col size=\"12\" sizeMd=\"6\">\n            <div class=\"form-group\">\n              <ion-text>\n                <label>ລາຄາສົ່ງ</label>\n              </ion-text>\n              <app-input-form\n                type=\"number\"\n                placeholder=\"ລາຄາສົ່ງ\"\n                [control]=\"$any(f['wholesale'])\"\n              ></app-input-form>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-list>\n\n    <div class=\"form-action\">\n      <ion-button\n        (click)=\"onSave()\"\n        color=\"primary\"\n        fill=\"solid\"\n        expand=\"block\"\n      >\n        ບັນທຶກ\n      </ion-button>\n    </div>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ 1238:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/product/product.page.html ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  title=\"ລາຍການສິນຄ້າ\"\n  iconAction=\"bag-add-outline\"\n  [href]=\"url.home +'/'+ url.manageProduct\"\n  [showAction]=\"true\"\n  (showActionEmit)=\"addProduct()\"\n>\n</app-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"isRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-list>\n    <ng-container *ngFor=\"let product of products\">\n      <ion-item lines=\"full\">\n        <ion-label>\n          <p>\n            {{product.name}}\n            <strong>({{product.Category.name}})</strong>\n          </p>\n          <ng-container *ngFor=\"let item of product.Stocks\">\n            <span>ຄົງເຫຼືອ {{ item.amount | number}}</span>\n          </ng-container>\n        </ion-label>\n\n        <app-edit-button\n          (editEmit)=\"editProduct(product.id)\"\n          controlType=\"edit\"\n        ></app-edit-button>\n        <app-edit-button controlType=\"del\"></app-edit-button>\n      </ion-item>\n    </ng-container>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ 4715:
/*!*********************************************************!*\
  !*** ./src/app/pages/add-product/add-product.page.scss ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = "form {\n  margin-bottom: 1rem;\n}\nform .form-action {\n  margin-top: 1rem;\n}\nform .form-group {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1wcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLGdCQUFBO0FBQ0o7QUFPRTtFQUNFLGdCQUFBO0FBTEoiLCJmaWxlIjoiYWRkLXByb2R1Y3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgLmZvcm0tYWN0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDFyZW07XHJcblxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIC8vIC0tcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICAgIC8vIC0tcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 1684:
/*!*************************************************!*\
  !*** ./src/app/pages/product/product.page.scss ***!
  \*************************************************/
/***/ ((module) => {

module.exports = "ion-item {\n  --padding: 1rem;\n}\nion-item ion-label {\n  padding-top: 6px;\n  padding-bottom: 6px;\n}\nion-item ion-label p {\n  margin: 0;\n  font-size: 1rem;\n}\nion-item ion-label span {\n  font-size: 0.75rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGO0FBQ0U7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7QUFDSTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FBQ047QUFFSTtFQUNFLGtCQUFBO0FBQU4iLCJmaWxlIjoicHJvZHVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XHJcbiAgLS1wYWRkaW5nOiAxcmVtO1xyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgcGFkZGluZy10b3A6IDZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBmb250LXNpemU6IC43NXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_product_product_module_ts.js.map