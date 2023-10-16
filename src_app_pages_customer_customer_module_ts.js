"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_customer_customer_module_ts"],{

/***/ 8645:
/*!*********************************************************!*\
  !*** ./src/app/pages/add-customer/add-customer.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddCustomerPage": () => (/* binding */ AddCustomerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_customer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./add-customer.page.html */ 8580);
/* harmony import */ var _add_customer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-customer.page.scss */ 1572);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 8377);
/* harmony import */ var src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-url.module */ 1646);
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/customer.service */ 8378);
/* harmony import */ var src_app_services_district_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/district.service */ 35);
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/global.service */ 5293);
/* harmony import */ var src_app_services_province_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/province.service */ 2742);












let AddCustomerPage = class AddCustomerPage {
    constructor(activeRoute, provinceService, districtService, customerService, globalService, router) {
        this.activeRoute = activeRoute;
        this.provinceService = provinceService;
        this.districtService = districtService;
        this.customerService = customerService;
        this.globalService = globalService;
        this.router = router;
        this.isCreate = false;
        this.url = src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl;
        this.provinces = [];
        this.districts = [];
    }
    get f() {
        return this.form.controls;
    }
    ngOnInit() {
        this.initializeApp();
        this.onFetchProvince();
        this.onFetchById();
    }
    initializeApp() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(''),
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            province: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            district: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            village: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
        });
    }
    onFetchById() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.activeRoute.paramMap.subscribe((param) => {
                if (param.get('id')) {
                    this.globalService.backdropLoading$.next(true);
                    this.customerService.getCustomer(param.get('id')).subscribe({
                        next: (data) => {
                            if (!!data) {
                                this.form.patchValue({
                                    id: data.id,
                                    firstname: data.firstname,
                                    lastname: data.lastname,
                                    phone: data.phone,
                                    province: data.provinceId,
                                    district: data.districtId,
                                    village: data.village,
                                });
                                this.onChangeProvince(data.provinceId.toString());
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
        });
    }
    onFetchProvince() {
        this.provinceService
            .getAllProvince()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((val) => val.provinces))
            .subscribe({
            next: (data) => {
                this.provinces = data;
            },
            error: () => { },
            complete: () => { },
        });
    }
    onChangeProvince(value) {
        this.districtService
            .getAllProvince(value)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((val) => val.districts))
            .subscribe({
            next: (data) => {
                this.districts = data;
            },
            error: () => { },
            complete: () => { },
        });
    }
    onSave() {
        if (this.form.invalid) {
            return this.form.markAllAsTouched();
        }
        const data = {
            customerId: this.f.id.value,
            districtId: this.f.district.value,
            firstname: this.f.firstname.value,
            lastname: this.f.lastname.value,
            phone: this.f.phone.value,
            provinceId: this.f.province.value,
            village: this.f.village.value,
        };
        if (this.isCreate) {
            this.customerService.updateCustomer(data).subscribe({
                next: () => {
                    this.router.navigate([this.url.home, this.url.customer]);
                },
                error: () => { },
                complete: () => { },
            });
        }
        else {
            this.customerService.createCustomer(data).subscribe({
                next: () => {
                    this.router.navigate([this.url.home, this.url.customer]);
                },
                error: () => { },
                complete: () => { },
            });
        }
    }
};
AddCustomerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: src_app_services_province_service__WEBPACK_IMPORTED_MODULE_6__.ProvinceService },
    { type: src_app_services_district_service__WEBPACK_IMPORTED_MODULE_4__.DistrictService },
    { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__.CustomerService },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_5__.GlobalService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router }
];
AddCustomerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-add-customer',
        template: _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_add_customer_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_add_customer_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AddCustomerPage);



/***/ }),

/***/ 3363:
/*!***************************************************!*\
  !*** ./src/app/pages/customer/customer.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerPageModule": () => (/* binding */ CustomerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 1382);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_shared_shared_layout_component_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared-layout-component.module */ 8340);
/* harmony import */ var _customer_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./customer.page */ 6615);
/* harmony import */ var src_app_shared_shared_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared-component.module */ 7125);
/* harmony import */ var src_app_app_url_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-url.module */ 1646);
/* harmony import */ var _add_customer_add_customer_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-customer/add-customer.page */ 8645);









let CustomerPageModule = class CustomerPageModule {
};
CustomerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([
                {
                    path: '',
                    component: _customer_page__WEBPACK_IMPORTED_MODULE_2__.CustomerPage,
                },
                {
                    path: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_4__.appUrl.addCustomer,
                    component: _add_customer_add_customer_page__WEBPACK_IMPORTED_MODULE_5__.AddCustomerPage,
                },
                {
                    path: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_4__.appUrl.editCustomer + '/:id',
                    component: _add_customer_add_customer_page__WEBPACK_IMPORTED_MODULE_5__.AddCustomerPage,
                },
            ]),
            src_app_shared_shared_layout_component_module__WEBPACK_IMPORTED_MODULE_1__.SharedLayoutComponentModule,
            src_app_shared_shared_component_module__WEBPACK_IMPORTED_MODULE_3__.SharedComponenttModule,
        ],
        declarations: [_customer_page__WEBPACK_IMPORTED_MODULE_2__.CustomerPage, _add_customer_add_customer_page__WEBPACK_IMPORTED_MODULE_5__.AddCustomerPage],
    })
], CustomerPageModule);



/***/ }),

/***/ 6615:
/*!*************************************************!*\
  !*** ./src/app/pages/customer/customer.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerPage": () => (/* binding */ CustomerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_customer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./customer.page.html */ 2032);
/* harmony import */ var _customer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer.page.scss */ 5942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6511);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8377);
/* harmony import */ var src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-url.module */ 1646);
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/customer.service */ 8378);
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/global.service */ 5293);










let CustomerPage = class CustomerPage {
    constructor(router, activeRoute, customerService, globalService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.customerService = customerService;
        this.globalService = globalService;
        this.customers = [];
        this.url = src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl;
        this.loading = false;
        this.ondestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    }
    ngOnInit() {
        this.onFetchData();
        this.initializeApp();
    }
    ngOnDestroy() {
        this.ondestroy$.unsubscribe();
    }
    initializeApp() {
        this.ondestroy$ = this.globalService.loading$.subscribe((value) => {
            this.loading = value;
        });
    }
    addCustomer() {
        this.router.navigate([this.url.addCustomer], {
            relativeTo: this.activeRoute,
        });
    }
    editCustomer(id) {
        this.router.navigate([this.url.editCustomer, id], {
            relativeTo: this.activeRoute,
        });
    }
    isRefresh(evt) {
        setTimeout(() => {
            this.onFetchData();
            evt.target.complete();
        }, 1000);
    }
    onFetchData() {
        this.globalService.loading$.next(true);
        this.customerService.getAllCustomer().then((observe) => {
            observe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)((val) => val.customer)).subscribe({
                next: (data) => {
                    this.customers = data;
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
};
CustomerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute },
    { type: src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_3__.CustomerService },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_4__.GlobalService }
];
CustomerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-customer',
        template: _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_customer_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_customer_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], CustomerPage);



/***/ }),

/***/ 8378:
/*!**********************************************!*\
  !*** ./src/app/services/customer.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerService": () => (/* binding */ CustomerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.service */ 9900);




let CustomerService = class CustomerService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.url = 'customers';
    }
    getAllCustomer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const branch = yield this.storage.storageData('branch');
            return yield this.http.get(this.url + `/${branch}`);
        });
    }
    getCustomer(id) {
        return this.http.get(this.url + `/get/${id}`);
    }
    createCustomer(customer) {
        return this.http.post(this.url, customer);
    }
    updateCustomer(customer) {
        return this.http.put(this.url, customer);
    }
};
CustomerService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService }
];
CustomerService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root',
    })
], CustomerService);



/***/ }),

/***/ 35:
/*!**********************************************!*\
  !*** ./src/app/services/district.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DistrictService": () => (/* binding */ DistrictService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3981);



let DistrictService = class DistrictService {
    constructor(http) {
        this.http = http;
        this.url = 'districts';
    }
    getAllProvince(id) {
        return this.http.get(this.url + `/${id}`);
    }
};
DistrictService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
DistrictService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' })
], DistrictService);



/***/ }),

/***/ 2742:
/*!**********************************************!*\
  !*** ./src/app/services/province.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProvinceService": () => (/* binding */ ProvinceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 3981);



let ProvinceService = class ProvinceService {
    constructor(http) {
        this.http = http;
        this.url = 'provinces';
    }
    getAllProvince() {
        return this.http.get(this.url);
    }
    getProvince(id) {
        return this.http.get(this.url);
    }
};
ProvinceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient }
];
ProvinceService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({ providedIn: 'root' })
], ProvinceService);



/***/ }),

/***/ 8580:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/add-customer/add-customer.page.html ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  [title]=\"isCreate? 'ແກ້ໄຂລູກຄ້າ': 'ເພີ່ມລູກຄ້າ' \"\n  [href]=\"url.home +'/'+ url.customer\"\n>\n</app-header>\n\n<app-backdrop-loading></app-backdrop-loading>\n\n<ion-content class=\"ion-padding\">\n  <form [formGroup]=\"form\">\n    <ion-grid>\n      <!-- firstname && lastname -->\n      <ion-row>\n        <ion-col size=\"12\" sizeMd=\"6\">\n          <div class=\"form-group\">\n            <label>ຊື່</label>\n            <app-input-form\n              placeholder=\"ຊື່\"\n              [control]=\"$any(f['firstname'])\"\n            ></app-input-form>\n          </div>\n        </ion-col>\n        <ion-col size=\"12\" sizeMd=\"6\">\n          <div class=\"form-group\">\n            <label>ນາມສະກຸນ</label>\n            <app-input-form\n              placeholder=\"ນາມສະກຸນ\"\n              [control]=\"$any(f['lastname'])\"\n            ></app-input-form>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <!-- phone -->\n      <ion-row>\n        <ion-col size=\"12\">\n          <div class=\"form-group\">\n            <label>ເບີໂທ</label>\n            <app-input-form\n              placeholder=\"ເບີໂທ\"\n              [control]=\"$any(f['phone'])\"\n            ></app-input-form>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <!-- province && district -->\n      <ion-row>\n        <ion-col size=\"12\" sizeMd=\"6\">\n          <div class=\"form-group\">\n            <label>ເລືອກແຂວງ</label>\n            <ion-item\n              lines=\"none\"\n              class=\"item-input\"\n              [ngClass]=\"{ error: f['province'].errors && (f['province'].dirty || f['province'].touched) }\"\n            >\n              <ion-select\n                formControlName=\"province\"\n                placeholder=\"ເລືອກແຂວງ\"\n                interface=\"action-sheet\"\n                #province\n                (ionChange)=\"onChangeProvince(province.value)\"\n              >\n                <ng-container *ngFor=\"let data of provinces\">\n                  <ion-select-option [value]=\"data.id\">\n                    {{data.name}}\n                  </ion-select-option>\n                </ng-container>\n              </ion-select>\n            </ion-item>\n          </div>\n        </ion-col>\n        <ion-col size=\"12\" sizeMd=\"6\">\n          <div class=\"form-group\">\n            <label>ເລືອກເມືອງ</label>\n            <ion-item\n              lines=\"none\"\n              class=\"item-input\"\n              [ngClass]=\"{ error: f['district'].errors && (f['district'].dirty || f['district'].touched) }\"\n            >\n              <ion-select\n                formControlName=\"district\"\n                placeholder=\"ເລືອກເມືອງ\"\n                interface=\"action-sheet\"\n              >\n                <ng-container *ngFor=\"let data of districts\">\n                  <ion-select-option [value]=\"data.id\">\n                    {{data.name}}\n                  </ion-select-option>\n                </ng-container>\n              </ion-select>\n            </ion-item>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <!-- village -->\n      <ion-row>\n        <ion-col size=\"12\">\n          <div class=\"form-group\">\n            <label>ບ້ານ</label>\n            <app-input-form\n              placeholder=\"ບ້ານ\"\n              [control]=\"$any(f['village'])\"\n            ></app-input-form>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"action-form\">\n        <ion-col size=\"12\">\n          <ion-button\n            type=\"button\"\n            color=\"primary\"\n            expand=\"block\"\n            shape=\"round\"\n            (click)=\"onSave()\"\n          >\n            ບັນທຶກ\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n");

/***/ }),

/***/ 2032:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/customer/customer.page.html ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-header\n  title=\"ລູກຄ້າ\"\n  iconAction=\"person-add-outline\"\n  [href]=\"url.home +'/'+ url.manageBusiness\"\n  [showAction]=\"true\"\n  (showActionEmit)=\"addCustomer()\"\n>\n</app-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"isRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ng-container *ngIf=\"customers.length && !loading; else loadingTemplate\">\n    <ion-list>\n      <ng-container *ngFor=\"let customer of customers\">\n        <ion-item lines=\"full\">\n          <ion-label>\n            <h4>{{customer.firstname}} {{customer.lastname}}</h4>\n            <p>ເບີໂທ : {{customer.phone}}</p>\n          </ion-label>\n          <app-edit-button\n            controlType=\"edit\"\n            (editEmit)=\"editCustomer(customer.id || '')\"\n          ></app-edit-button>\n          <app-edit-button controlType=\"del\"></app-edit-button>\n        </ion-item>\n      </ng-container>\n    </ion-list>\n  </ng-container>\n\n  <ng-template #loadingTemplate>\n    <app-loading></app-loading>\n  </ng-template>\n</ion-content>\n");

/***/ }),

/***/ 1572:
/*!***********************************************************!*\
  !*** ./src/app/pages/add-customer/add-customer.page.scss ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = ".action-form {\n  margin-top: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1jdXN0b21lci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtBQUNGIiwiZmlsZSI6ImFkZC1jdXN0b21lci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aW9uLWZvcm0ge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 5942:
/*!***************************************************!*\
  !*** ./src/app/pages/customer/customer.page.scss ***!
  \***************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci5wYWdlLnNjc3MifQ== */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_customer_customer_module_ts.js.map