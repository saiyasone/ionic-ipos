"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 6868:
/*!********************************************!*\
  !*** ./src/app/guards/LoginGuard.guard.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginGuard": () => (/* binding */ LoginGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/storage.service */ 9900);
/* harmony import */ var _app_url_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-url.module */ 1646);





let LoginGuard = class LoginGuard {
    constructor(router, storageService) {
        this.router = router;
        this.storageService = storageService;
    }
    canActivate(route, state) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const isAuthenticated = yield this.storageService.storageData('token');
            if (!!isAuthenticated) {
                return this.router.navigate([_app_url_module__WEBPACK_IMPORTED_MODULE_1__.appUrl.home]);
            }
            return true;
        });
    }
};
LoginGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_0__.StorageService }
];
LoginGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({ providedIn: 'root' })
], LoginGuard);



/***/ }),

/***/ 2371:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 9004);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 1382);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_guards_LoginGuard_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/guards/LoginGuard.guard */ 6868);
/* harmony import */ var src_app_shared_shared_component_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared-component.module */ 7125);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild([
                {
                    path: '',
                    component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage,
                    canActivate: [src_app_guards_LoginGuard_guard__WEBPACK_IMPORTED_MODULE_2__.LoginGuard],
                },
            ]),
            src_app_shared_shared_component_module__WEBPACK_IMPORTED_MODULE_3__.SharedComponenttModule,
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage],
    })
], LoginPageModule);



/***/ }),

/***/ 9004:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.page.html */ 7230);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 8918);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6511);
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/auth.service */ 6636);
/* harmony import */ var src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/global.service */ 5293);









let LoginPage = class LoginPage {
    constructor(authService, globalService) {
        this.authService = authService;
        this.globalService = globalService;
        this.showPassword = false;
        this.ondestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    }
    get f() {
        return this.form.controls;
    }
    ngOnInit() {
        this.initializeForm();
    }
    ngOnDestroy() {
        this.form.reset();
        this.ondestroy$.unsubscribe();
    }
    initializeForm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
                username: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            });
        });
    }
    isShowPassword() {
        this.showPassword = !this.showPassword;
    }
    onSave() {
        if (this.form.invalid) {
            return this.form.markAllAsTouched();
        }
        this.globalService.backdropLoading$.next(true);
        this.authService.setUsername = this.f.username.value;
        this.authService.setPassword = this.f.password.value;
        this.authService.signIn().subscribe({
            next: (data) => {
                this.authService.saveAuthData(data);
            },
            error: () => {
                this.globalService.backdropLoading$.next(false);
            },
            complete: () => {
                this.globalService.backdropLoading$.next(false);
            },
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService },
    { type: src_app_services_global_service__WEBPACK_IMPORTED_MODULE_3__.GlobalService }
];
LoginPage.propDecorators = {
    routerOutlet: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRouterOutlet, { static: true },] }]
};
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-login',
        template: _D_ionic_ipos_app_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        providers: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonRouterOutlet],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 7230:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/pages/login/login.page.html ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<app-backdrop-loading></app-backdrop-loading>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"login-page\">\n    <div class=\"login-logo\">\n      <img src=\"assets/icons/login-ipos.png\" alt=\"login-ipos\" />\n    </div>\n    <div class=\"login-header\">\n      <ion-text color=\"primary\">\n        <h1>ເຂົ້າສູ່ລະບົບ</h1>\n      </ion-text>\n    </div>\n\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSave()\">\n      <div class=\"form-group\">\n        <ion-text>\n          <label>ຊື່ຜູ້ໃຊ້</label>\n        </ion-text>\n        <app-input-form\n          type=\"text\"\n          placeholder=\"ຊື່ຜູ້ໃຊ້\"\n          [control]=\"$any(f['username'])\"\n        >\n        </app-input-form>\n      </div>\n      <div class=\"form-group\">\n        <ion-text>\n          <label> ລະຫັດຜ່ານ </label>\n        </ion-text>\n        <app-input-password\n          type=\"password\"\n          placeholder=\"ລະຫັດຜ່ານ\"\n          [control]=\"$any(f['password'])\"\n          [show]=\"showPassword\"\n          (showPasswordEmit)=\"isShowPassword()\"\n        ></app-input-password>\n      </div>\n\n      <div class=\"form-action\">\n        <ion-button type=\"submit\" size=\"default\" color=\"primary\" expand=\"block\">\n          ເຂົ້າສູ່ລະບົບ\n        </ion-button>\n      </div>\n    </form>\n\n    <div class=\"login-footer\">\n      <p>ພັດທະນາໂດຍ JLS IT Solution</p>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 8918:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((module) => {

module.exports = ".login-page .form-group {\n  margin-bottom: 0.5rem;\n}\n.login-page .login-logo {\n  margin-top: 2rem;\n  margin-bottom: 1rem;\n  text-align: center;\n}\n.login-page .login-logo img {\n  width: 200px;\n  height: 100%;\n  object-fit: cover;\n}\n.login-page .login-header {\n  margin-bottom: 2rem;\n  text-align: center;\n}\n.login-page .login-header ion-text h1 {\n  font-size: 1.3rem;\n  font-weight: 500;\n}\n.login-page .form-action {\n  margin-top: 2rem;\n}\n.login-page .form-action ion-button {\n  text-transform: inherit;\n}\n.login-page .login-footer {\n  margin-top: 4rem;\n  text-align: center;\n}\n.login-page .login-footer p {\n  font-size: 1rem;\n  color: gray;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHFCQUFBO0FBQUo7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQURKO0FBR0k7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRE47QUFLRTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFISjtBQU1NO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQUpSO0FBVUU7RUFDRSxnQkFBQTtBQVJKO0FBVUk7RUFDRSx1QkFBQTtBQVJOO0FBWUU7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBVko7QUFZSTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFWTiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW4tcGFnZSB7XHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmxvZ2luLWxvZ28ge1xyXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmxvZ2luLWhlYWRlciB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIGlvbi10ZXh0IHtcclxuICAgICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgLy8gZm9udC1mYW1pbHk6IE5vdG9TYW5zICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5mb3JtLWFjdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sb2dpbi1mb290ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map