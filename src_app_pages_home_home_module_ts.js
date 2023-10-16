"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 3401:
/*!***************************************************************!*\
  !*** ./src/app/components/layouts/header/header.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./header.component.html */ 8577);
/* harmony import */ var _header_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss */ 6581);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);




let HeaderComponent = class HeaderComponent {
    constructor() {
        this.iconAction = 'add-circle-outline';
        this.showAction = false;
        this.showActionEmit = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    }
    show() {
        this.showActionEmit.emit();
    }
};
HeaderComponent.propDecorators = {
    title: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    href: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    iconAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    showAction: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    showActionEmit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-header',
        template: _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_header_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_header_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HeaderComponent);



/***/ }),

/***/ 9915:
/*!*****************************************************************!*\
  !*** ./src/app/components/layouts/sidebar/sidebar.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./sidebar.component.html */ 9202);
/* harmony import */ var _sidebar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.component.scss */ 8478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6511);
/* harmony import */ var src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/app-url.module */ 1646);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ 6636);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ 7524);










let SidebarComponent = class SidebarComponent {
    constructor(router, authService, menuCtrl, userService, alertCtrl) {
        this.router = router;
        this.authService = authService;
        this.menuCtrl = menuCtrl;
        this.userService = userService;
        this.alertCtrl = alertCtrl;
        this.url = src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl;
        this.sectionOne = [
            {
                label: 'ຂາຍສິນຄ້າ',
                icon: 'cart-outline',
                link: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl.sale,
            },
            {
                label: 'ຈັດການຂໍ້ມູນ',
                icon: 'build-outline',
                link: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl.manageProduct,
            },
            {
                label: 'ບໍລິຫານ',
                icon: 'business-outline',
                link: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl.manageBusiness,
            },
            {
                label: 'ລາຍງານ',
                icon: 'receipt-outline',
                link: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl.manageReport,
            },
        ];
        this.sectionTwo = [
            {
                label: 'ຄ້າງຊຳລະ',
                icon: 'document-text-outline',
                link: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl.home,
            },
            {
                label: 'ຕັ້ງຄ່າທົ່ວໄປ',
                icon: 'settings-outline',
                link: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl.generalSetting,
            },
        ];
        this.ondestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
        this.initializeApp();
    }
    initializeApp() {
        this.ondestroy$ = this.userService.user$.subscribe((data) => {
            this.user = data;
        });
    }
    ngOnDestroy() {
        this.ondestroy$.unsubscribe();
    }
    isNavigate(link) {
        if (link === src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl.home) {
            this.menuCtrl.close();
            return;
        }
        this.router.navigate([src_app_app_url_module__WEBPACK_IMPORTED_MODULE_2__.appUrl.home + '/' + link]);
        this.menuCtrl.close();
    }
    onSignOut() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message: 'ຕ້ອງການອອກຈາກລະບົບ ?',
                buttons: [
                    {
                        text: 'ບໍ່',
                        role: 'cancel',
                        cssClass: 'alert-sign-no',
                    },
                    {
                        text: 'ແມ່ນ',
                        role: 'confirm',
                        cssClass: 'alert-sign-yes',
                        handler: () => {
                            this.authService.signOut();
                            this.menuCtrl.close();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.MenuController },
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController }
];
SidebarComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-sidebar',
        template: _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_sidebar_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SidebarComponent);



/***/ }),

/***/ 4260:
/*!**************************************!*\
  !*** ./src/app/guards/shop.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShopGuard": () => (/* binding */ ShopGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/storage.service */ 9900);
/* harmony import */ var _app_url_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-url.module */ 1646);





let ShopGuard = class ShopGuard {
    constructor(router, storageService) {
        this.router = router;
        this.storageService = storageService;
    }
    canActivate(route, state) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const isShop = yield this.storageService.storageData('shop');
            const isBranch = yield this.storageService.storageData('branch');
            if (isShop && isBranch) {
                return true;
            }
            return this.router.navigate([_app_url_module__WEBPACK_IMPORTED_MODULE_1__.appUrl.selectShop]);
        });
    }
};
ShopGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService }
];
ShopGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({ providedIn: 'root' })
], ShopGuard);



/***/ }),

/***/ 9639:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 8774);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../guards/auth.guard */ 3036);
/* harmony import */ var src_app_guards_shop_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/guards/shop.guard */ 4260);
/* harmony import */ var src_app_app_url_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app-url.module */ 1646);







const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard, src_app_guards_shop_guard__WEBPACK_IMPORTED_MODULE_2__.ShopGuard],
        children: [
            // initialize Routing
            {
                path: '',
                redirectTo: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_3__.appUrl.dashboard,
                pathMatch: 'full',
            },
            {
                path: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_3__.appUrl.dashboard,
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../dashboard/dashboard.module */ 349)).then((m) => m.DashboardPageModule),
            },
            // ========= Sales ==========
            {
                path: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_3__.appUrl.sale,
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared-component_module_ts"), __webpack_require__.e("src_app_pages_sales_sales_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../sales/sales.module */ 6171)).then((m) => m.SalesPageModule),
            },
            // ========= Manage Product =========
            {
                path: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_3__.appUrl.manageProduct,
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_manage-product_manage-product_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../manage-product/manage-product.module */ 2433)).then((m) => m.ManagePageModule),
            },
            {
                path: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_3__.appUrl.category,
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared-component_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_category_category_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../category/category.module */ 1998)).then((m) => m.CategoryPageModule),
            },
            {
                path: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_3__.appUrl.product,
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared-component_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_product_product_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../product/product.module */ 8559)).then((m) => m.ProductPageModule),
            },
            {
                path: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_3__.appUrl.zone,
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared-component_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_zone_zone_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../zone/zone.module */ 6071)).then((m) => m.ZonePageModule),
            },
            {
                path: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_3__.appUrl.unit,
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared-component_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_unit_unit_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../unit/unit.module */ 8700)).then((m) => m.UnitPageModule),
            },
            // ========= Manage Report =========
            {
                path: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_3__.appUrl.manageReport,
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_manage-report_manage-report_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../manage-report/manage-report.module */ 2377)).then((m) => m.ManageReportPageModule),
            },
            // ========= Manage Business =========
            {
                path: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_3__.appUrl.manageBusiness,
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_manage-business_manage-business_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../manage-business/manage-business.module */ 9069)).then((m) => m.ManageBusinessPageModule),
            },
            {
                path: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_3__.appUrl.customer,
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared-component_module_ts"), __webpack_require__.e("src_app_pages_customer_customer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../customer/customer.module */ 3363)).then((m) => m.CustomerPageModule),
            },
            // ========= General Setting =========
            {
                path: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_3__.appUrl.generalSetting,
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_general-setting_general-setting_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../general-setting/general-setting.module */ 7520)).then((m) => m.GeneralSettingPageModule),
            },
            {
                path: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_3__.appUrl.vat,
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared-component_module_ts"), __webpack_require__.e("src_app_pages_vat_vat_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../vat/vat.module */ 4845)).then((m) => m.VatPageModule),
            },
            {
                path: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_3__.appUrl.currency,
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared-component_module_ts"), __webpack_require__.e("src_app_pages_currency_currency_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../currency/currency.module */ 7952)).then((m) => m.CurrencyPageModule),
            },
            {
                path: src_app_app_url_module__WEBPACK_IMPORTED_MODULE_3__.appUrl.bank,
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_shared-component_module_ts"), __webpack_require__.e("src_app_pages_bank_bank_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../bank/bank.module */ 3791)).then((m) => m.BankPageModule),
            },
        ],
    },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
    })
], HomePageRoutingModule);



/***/ }),

/***/ 5129:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/shared.module */ 1382);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 9639);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page */ 8774);
/* harmony import */ var src_app_shared_shared_layout_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared-layout-component.module */ 8340);






let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule, src_app_shared_shared_layout_component_module__WEBPACK_IMPORTED_MODULE_3__.SharedLayoutComponentModule],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_2__.HomePage],
    })
], HomePageModule);



/***/ }),

/***/ 8774:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.page.html */ 9090);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 932);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6511);
/* harmony import */ var _capacitor_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/app */ 2225);
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/user.service */ 7524);
/* harmony import */ var src_app_app_url_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app-url.module */ 1646);









let HomePage = class HomePage {
    constructor(userService, platform, alertCtrl) {
        this.userService = userService;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.url = src_app_app_url_module__WEBPACK_IMPORTED_MODULE_4__.appUrl;
        this.ondestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
    }
    ngOnInit() {
        this.initializeApp();
        this.onFetchUser();
    }
    ngOnDestroy() {
        this.ondestroy$.unsubscribe();
    }
    initializeApp() {
        // this.backButtonEvent();
    }
    onFetchUser() {
        this.userService.getUserLogin().subscribe({
            next: (data) => {
                this.userService.user$.next(data);
            },
            error: () => { },
            complete: () => { },
        });
    }
    backButtonEvent() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.ondestroy$ = this.platform.backButton.subscribeWithPriority(0, () => {
                if (!this.routerOutlet.canGoBack()) {
                    this.exitApplication();
                }
                else {
                    window.history.back();
                }
            });
        });
    }
    exitApplication() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                message: 'ຕ້ອງການອອກຈາກແອບ ?',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'ບໍ່',
                        role: 'cancel',
                        cssClass: 'alert-cancel',
                    },
                    {
                        text: 'ແມ່ນ',
                        cssClass: 'alert-confirm',
                        handler: () => {
                            _capacitor_app__WEBPACK_IMPORTED_MODULE_2__.App.exitApp();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
};
HomePage.ctorParameters = () => [
    { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController }
];
HomePage.propDecorators = {
    routerOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRouterOutlet, { static: true },] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-home',
        template: _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRouterOutlet],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 8340:
/*!**********************************************************!*\
  !*** ./src/app/shared/shared-layout-component.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedLayoutComponentModule": () => (/* binding */ SharedLayoutComponentModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ 1382);
/* harmony import */ var _components_layouts_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layouts/header/header.component */ 3401);
/* harmony import */ var _components_layouts_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layouts/sidebar/sidebar.component */ 9915);





let SharedLayoutComponentModule = class SharedLayoutComponentModule {
};
SharedLayoutComponentModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [_components_layouts_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _components_layouts_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent],
        imports: [_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule],
        exports: [_components_layouts_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _components_layouts_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent],
    })
], SharedLayoutComponentModule);



/***/ }),

/***/ 8577:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/layouts/header/header.component.html ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"ion-toolbar\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button color=\"light\" [defaultHref]=\"href\"> </ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ion-title\">\n      {{ title }}\n    </ion-title>\n\n    <ng-container *ngIf=\"showAction\">\n      <ion-button\n        slot=\"end\"\n        (click)=\"show()\"\n        color=\"light\"\n        shape=\"circle\"\n        fill=\"clear\"\n      >\n        <ion-icon [name]=\"iconAction\"></ion-icon>\n      </ion-button>\n    </ng-container>\n  </ion-toolbar>\n</ion-header>\n");

/***/ }),

/***/ 9202:
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/layouts/sidebar/sidebar.component.html ***!
  \**********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-menu contentId=\"main-content\">\n  <!-- <ion-header> -->\n  <ion-toolbar class=\"header-toolbar\">\n    <div class=\"ion-text-center\">\n      <div class=\"header-info\">\n        <div class=\"header-circle\">\n          <ion-icon name=\"person-circle-outline\"></ion-icon>\n        </div>\n        <ng-container *ngIf=\"user\">\n          <div class=\"header-text\">\n            <ion-title>\n              {{ user.Profile?.firstname }}\n              {{ user.Profile?.lastname }}\n            </ion-title>\n          </div>\n          <div class=\"header-branch\">\n            <ion-label>ຮ້ານຄ້າ ສົມສະໜຸກ</ion-label>\n          </div>\n        </ng-container>\n      </div>\n    </div>\n  </ion-toolbar>\n  <!-- </ion-header> -->\n  <ion-content class=\"ion-padding-top\">\n    <ion-list>\n      <ng-container *ngFor=\"let nav of sectionOne\">\n        <ion-item\n          button\n          (click)=\"isNavigate(nav.link)\"\n          lines=\"none\"\n          [detail]=\"false\"\n        >\n          <ion-icon slot=\"start\" [name]=\"nav.icon\"></ion-icon>\n          <ion-label>\n            {{ nav.label }}\n          </ion-label>\n        </ion-item>\n      </ng-container>\n      <!-- ======== divider ========= -->\n\n      <div class=\"divided\"></div>\n      <ng-container *ngFor=\"let nav of sectionTwo\">\n        <ion-item\n          (click)=\"isNavigate(nav.link)\"\n          button\n          lines=\"none\"\n          [detail]=\"false\"\n        >\n          <ion-icon slot=\"start\" [name]=\"nav.icon\"></ion-icon>\n          <ion-label>\n            {{ nav.label }}\n          </ion-label>\n        </ion-item>\n      </ng-container>\n\n      <!-- ======== divider ========= -->\n      <div class=\"divided\"></div>\n      <ion-item (click)=\"isNavigate('')\" button lines=\"none\" [detail]=\"false\">\n        <ion-icon slot=\"start\" name=\"grid-outline\"></ion-icon>\n        <ion-label>Dashboard</ion-label>\n      </ion-item>\n      <ion-item (click)=\"onSignOut()\" button lines=\"none\" [detail]=\"false\">\n        <ion-icon slot=\"start\" name=\"log-out-outline\"></ion-icon>\n        <ion-label>ອອກຈາກລະບົບ</ion-label>\n      </ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n<div class=\"ion-page\" id=\"main-content\">\n  <!--  -->\n</div>\n");

/***/ }),

/***/ 9090:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/home/home.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app>\r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ 6581:
/*!*****************************************************************!*\
  !*** ./src/app/components/layouts/header/header.component.scss ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = "ion-button[shape=circle] {\n  --border-radius: 50%;\n  width: 50px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uW3NoYXBlPWNpcmNsZV0ge1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 8478:
/*!*******************************************************************!*\
  !*** ./src/app/components/layouts/sidebar/sidebar.component.scss ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = "ion-menu::part(container) {\n  border-radius: 0 10px 10px 0;\n}\n\n.divided {\n  margin-top: 1.5rem;\n  margin-bottom: 1rem;\n  width: 100%;\n  height: 1px;\n  background-color: #ddd;\n}\n\nion-menu ion-toolbar {\n  --background: var(--ion-color-primary);\n  color: #fff;\n  padding-top: 0.65rem;\n  padding-bottom: 0.65rem;\n}\n\nion-menu ion-toolbar .header-info {\n  display: flex;\n  flex-direction: column;\n}\n\nion-menu ion-toolbar .header-info .header-text ion-title {\n  font-size: 1rem;\n}\n\nion-menu ion-toolbar .header-info .header-circle ion-icon {\n  font-size: 3.5rem;\n}\n\nion-menu ion-toolbar .header-info .header-branch ion-label {\n  font-size: 0.8rem;\n}\n\nion-menu ion-item {\n  --background: #fff;\n}\n\nion-menu ion-item ion-icon {\n  margin-right: 1.2rem;\n  color: var(--ion-color-primary);\n}\n\nion-menu ion-item ion-label {\n  color: var(--ion-color-primary);\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFHRTtFQUNFLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7QUFBSjs7QUFFSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUFOOztBQUlRO0VBQ0UsZUFBQTtBQUZWOztBQU9RO0VBQ0UsaUJBQUE7QUFMVjs7QUFVUTtFQUNFLGlCQUFBO0FBUlY7O0FBY0U7RUFPRSxrQkFBQTtBQWxCSjs7QUFhSTtFQUNFLG9CQUFBO0VBQ0EsK0JBQUE7QUFYTjs7QUFnQkk7RUFDRSwrQkFBQTtFQUNBLGVBQUE7QUFkTiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnU6OnBhcnQoY29udGFpbmVyKSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAxMHB4IDEwcHggMDtcclxufVxyXG5cclxuLmRpdmlkZWQge1xyXG4gIG1hcmdpbi10b3A6IDEuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XHJcbn1cclxuXHJcbmlvbi1tZW51IHtcclxuICBpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZy10b3A6IDAuNjVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMC42NXJlbTtcclxuXHJcbiAgICAuaGVhZGVyLWluZm8ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgLmhlYWRlci10ZXh0IHtcclxuXHJcbiAgICAgICAgaW9uLXRpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5oZWFkZXItY2lyY2xlIHtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5oZWFkZXItYnJhbmNoIHtcclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24taXRlbSB7XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEuMnJlbTtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgIH1cclxuXHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcblxyXG4gICAgaW9uLWxhYmVsIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 932:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/***/ ((module) => {

module.exports = ".ion-toolbar ion-title {\n  font-size: 1rem;\n  --color: #fff;\n}\n.ion-toolbar ion-menu-button {\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUFBSjtBQUdFO0VBQ0UsV0FBQTtBQURKIiwiZmlsZSI6ImhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlvbi10b29sYmFyIHtcclxuICBpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIGlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map