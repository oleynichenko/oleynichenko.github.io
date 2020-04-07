(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n  <mat-sidenav-content>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/add-user/add-user.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/add-user/add-user.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"add__header mat-display-2\">\n  New User\n</h1>\n<section class=\"add__block\">\n  <form [formGroup]=\"addForm\"\n        (ngSubmit)=\"onAddFormSubmit()\"\n        class=\"add__form formFieldWidth-auto\">\n    <mat-form-field class=\"add__form-field\">\n      <input type=\"text\"\n             matInput\n             placeholder=\"Id\"\n             formControlName=\"id\">\n      <mat-error *ngIf=\"!addForm.get('id').valid\">\n        Should not be empty</mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"add__form-field\">\n      <input type=\"text\"\n             matInput\n             placeholder=\"Name\"\n             formControlName=\"name\">\n      <mat-error *ngIf=\"!addForm.get('name').valid\">\n        Should not be empty</mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"add__form-field\">\n      <input type=\"text\"\n             matInput\n             placeholder=\"Email\"\n             formControlName=\"email\">\n      <mat-error *ngIf=\"!addForm.get('email').valid\">\n        Email is invalid</mat-error>\n    </mat-form-field>\n    <div class=\"add__btns\">\n      <button class=\"add__form-btn add__form-btn--ml\"\n              mat-raised-button\n              type=\"button\"\n              (click)=\"cancelUser()\"\n              color=\"primary\">Cancel</button>\n\n      <button class=\"add__form-btn\"\n              mat-raised-button\n              type=\"submit\"\n              [disabled]=\"addForm.invalid\"\n              color=\"primary\">Save</button>\n    </div>\n  </form>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/user-list/user-list.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/user-list/user-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"list__header\">\n  <a class=\"list__btn\"\n     routerLink=\"/users/add\"\n     mat-raised-button\n     color=\"primary\"\n     mat-button>ADD NEW</a>\n</header>\n<section class=\"list__cards\"\n         *ngIf=\"users\">\n  <mat-card *ngFor=\"let user of users\"\n            class=\"list__card mat-elevation-z2\"\n            (click)=\"onCardClick(user.id)\">\n    <div class=\"list__content\">\n      <mat-card-title>{{user.name}}</mat-card-title>\n      <mat-card-subtitle>{{user.email}}</mat-card-subtitle>\n    </div>\n  </mat-card>\n</section>\n\n<mat-paginator class=\"list__paginator\"\n               [length]=\"totalCount\"\n               [pageSize]=\"limit\"\n               [pageIndex]=\"0\"\n               [pageSizeOptions]=\"[2, 4, 10]\"\n               (page)=\"pageEvent = getUsers($event)\">\n</mat-paginator>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/user-profile/user-profile.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/user-profile/user-profile.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"profile__header mat-display-2\">\n  User Info\n</h1>\n<section class=\"profile__block\">\n  <form [formGroup]=\"profileForm\"\n        (ngSubmit)=\"onProfileFormSubmit()\"\n        class=\"profile__form formFieldWidth-auto\">\n    <mat-form-field class=\"profile__form-field\">\n      <input type=\"text\"\n             matInput\n             placeholder=\"Name\"\n             (ngModelChange)=\"onValueChange()\"\n             formControlName=\"name\">\n      <mat-error *ngIf=\"!profileForm.get('name').valid\">\n        Should not be empty</mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"profile__form-field\">\n      <input type=\"text\"\n             matInput\n             placeholder=\"Email\"\n             (ngModelChange)=\"onValueChange()\"\n             formControlName=\"email\">\n      <mat-error *ngIf=\"!profileForm.get('email').valid\">\n        Email is invalid</mat-error>\n    </mat-form-field>\n    <div class=\"profile__btns\">\n      <button class=\"profile__form-btn profile__form-btn--mr\"\n              (click)=\"backToUsers()\"\n              type=\"button\"\n              mat-button>Back to users</button>\n\n      <button class=\"profile__form-btn\"\n              mat-raised-button\n              type=\"button\"\n              (click)=\"deleteUser()\"\n              color=\"primary\">Delete</button>\n\n      <button class=\"profile__form-btn\"\n              mat-raised-button\n              type=\"submit\"\n              [disabled]=\"profileForm.invalid || !userWasChanged\"\n              color=\"primary\">Save</button>\n    </div>\n  </form>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/users/users.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"main\">\n  <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _users_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/user-profile/user-profile.component */ "./src/app/users/user-profile/user-profile.component.ts");
/* harmony import */ var _users_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users/user-list/user-list.component */ "./src/app/users/user-list/user-list.component.ts");
/* harmony import */ var _users_user_profile_user_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users/user-profile/user.resolver */ "./src/app/users/user-profile/user.resolver.ts");
/* harmony import */ var _users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/add-user/add-user.component */ "./src/app/users/add-user/add-user.component.ts");








const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'users'
    },
    {
        path: 'users',
        component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"],
        children: [
            {
                path: '',
                component: _users_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_5__["UserListComponent"]
            },
            {
                path: 'add',
                component: _users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_7__["AddUserComponent"]
            },
            {
                path: ':id',
                resolve: { content: _users_user_profile_user_resolver__WEBPACK_IMPORTED_MODULE_6__["UserResolver"] },
                component: _users_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_4__["UserProfileComponent"]
            }
        ]
    },
    { path: '**', redirectTo: '' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        providers: [_users_user_profile_user_resolver__WEBPACK_IMPORTED_MODULE_6__["UserResolver"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'UserList';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: ["\n    mat-sidenav-container, mat-sidenav-content {\n      height: 100%;\n    }"]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: API_URL, ApiUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiUrl", function() { return ApiUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

const apiUrl = 'https://indigo-conf.herokuapp.com/api';
const API_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('API_URL');
// API endpoints
const ApiUrl = {
    get users() {
        return `${apiUrl}/users`;
    },
    user(id) {
        return `${apiUrl}/users/${id}`;
    }
};


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _users_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users/user-list/user-list.component */ "./src/app/users/user-list/user-list.component.ts");
/* harmony import */ var _users_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/user-profile/user-profile.component */ "./src/app/users/user-profile/user-profile.component.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./users/add-user/add-user.component */ "./src/app/users/add-user/add-user.component.ts");












let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"],
            _users_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_6__["UserListComponent"],
            _users_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_7__["UserProfileComponent"],
            _users_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_11__["AddUserComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"]
        ],
        providers: [
            { provide: _app_config__WEBPACK_IMPORTED_MODULE_8__["API_URL"], useValue: _app_config__WEBPACK_IMPORTED_MODULE_8__["ApiUrl"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/shared/data.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/data.service.ts ***!
  \****************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.config */ "./src/app/app.config.ts");






let DataService = class DataService {
    constructor(http, ApiUrl) {
        this.http = http;
        this.ApiUrl = ApiUrl;
    }
    getUsers(offset, limit) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set(`offset`, offset.toString())
            .set(`limit`, limit.toString());
        // second request made in order to receive total number of users. Should be changed in future
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["zip"])(this.http.get(this.ApiUrl.users, { params }), this.http.get(this.ApiUrl.users).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(data => data.length)));
    }
    getUserById(id) {
        return this.http.get(this.ApiUrl.user(id));
    }
    saveUser(id, user) {
        return this.http.put(this.ApiUrl.user(id), user);
    }
    deleteUser(id) {
        return this.http.delete(this.ApiUrl.user(id));
    }
    createUser(user) {
        return this.http.post(this.ApiUrl.users, user);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_app_config__WEBPACK_IMPORTED_MODULE_5__["API_URL"],] }] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_5__["API_URL"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], Object])
], DataService);



/***/ }),

/***/ "./src/app/shared/delete-user.component.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/delete-user.component.ts ***!
  \*************************************************/
/*! exports provided: DeleteUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteUserComponent", function() { return DeleteUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let DeleteUserComponent = class DeleteUserComponent {
    constructor(data) {
        this.data = data;
    }
};
DeleteUserComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DeleteUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-delete-user',
        template: `
    <h1 mat-dialog-title>{{data.message}}</h1>
      <mat-dialog-actions>
        <button mat-button [mat-dialog-close]="true">Yes</button>
        <button mat-button [mat-dialog-close]="false">No</button>
      </mat-dialog-actions>
  `
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], DeleteUserComponent);



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




const items = [
    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]
];
let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: items,
        exports: items
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/shared/server-error.interceptor.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/server-error.interceptor.ts ***!
  \****************************************************/
/*! exports provided: ServerErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerErrorInterceptor", function() { return ServerErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");





let ServerErrorInterceptor = class ServerErrorInterceptor {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            // depending on details in ApiError should be more advanced logic
            const message = error.error
                ? error.error.title
                : error.message;
            this.snackBar.open(message, 'Close', { duration: 10000 });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
};
ServerErrorInterceptor.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
ServerErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
], ServerErrorInterceptor);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data.service */ "./src/app/shared/data.service.ts");
/* harmony import */ var _delete_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./delete-user.component */ "./src/app/shared/delete-user.component.ts");
/* harmony import */ var _server_error_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./server-error.interceptor */ "./src/app/shared/server-error.interceptor.ts");









let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _delete_user_component__WEBPACK_IMPORTED_MODULE_7__["DeleteUserComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        providers: [
            _data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                useClass: _server_error_interceptor__WEBPACK_IMPORTED_MODULE_8__["ServerErrorInterceptor"],
                multi: true
            }
        ],
        exports: [
            _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        entryComponents: [_delete_user_component__WEBPACK_IMPORTED_MODULE_7__["DeleteUserComponent"]]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/users/add-user/add-user.component.css":
/*!*******************************************************!*\
  !*** ./src/app/users/add-user/add-user.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add__header {\n  margin-bottom: 32px;\n  text-align: center;\n}\n\n.add__block {\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n\n  width: 65%;\n}\n\n.add__form {\n  display: flex;\n  flex-direction: column;\n}\n\n.add__form-field {\n  margin-bottom: 8px;\n}\n\n.add__btns {\n  display: flex;\n  width: 100%;\n  margin-top: 56px;\n}\n\n.add__form-btn {\n  margin-left: 16px;\n  letter-spacing: 1px;\n}\n\n.add__form-btn--ml {\n  margin-left: auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvYWRkLXVzZXIvYWRkLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGNBQWM7O0VBRWQsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2FkZC11c2VyL2FkZC11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkX19oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hZGRfX2Jsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbiAgd2lkdGg6IDY1JTtcbn1cblxuLmFkZF9fZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5hZGRfX2Zvcm0tZmllbGQge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5hZGRfX2J0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogNTZweDtcbn1cblxuLmFkZF9fZm9ybS1idG4ge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLmFkZF9fZm9ybS1idG4tLW1sIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/users/add-user/add-user.component.ts":
/*!******************************************************!*\
  !*** ./src/app/users/add-user/add-user.component.ts ***!
  \******************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/index.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/data.service */ "./src/app/shared/data.service.ts");
/* harmony import */ var _shared_delete_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/delete-user.component */ "./src/app/shared/delete-user.component.ts");








let AddUserComponent = class AddUserComponent {
    constructor(router, dataService, snackBar, dialog) {
        this.router = router;
        this.dataService = dataService;
        this.snackBar = snackBar;
        this.dialog = dialog;
    }
    ngOnInit() {
        this.addForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])(), // user can change generated id
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])
        });
    }
    // creating user
    onAddFormSubmit() {
        this.dataService.createUser({
            id: this.addForm.value.id,
            name: this.addForm.value.name,
            email: this.addForm.value.email
        }).subscribe((data) => {
            this.snackBar.open('User created', 'Close', { duration: 3000 });
            this.router.navigate([`/users/${this.addForm.value.id}`]);
        });
    }
    // cancel user creating
    cancelUser() {
        const dialogRef = this.dialog.open(_shared_delete_user_component__WEBPACK_IMPORTED_MODULE_7__["DeleteUserComponent"], {
            data: {
                message: 'User not saved. Are you sure about leaving this page?'
            }
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.router.navigate(['/users']);
            }
        });
    }
};
AddUserComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-user',
        template: __webpack_require__(/*! raw-loader!./add-user.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/add-user/add-user.component.html"),
        styles: [__webpack_require__(/*! ./add-user.component.css */ "./src/app/users/add-user/add-user.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _shared_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
        _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
], AddUserComponent);



/***/ }),

/***/ "./src/app/users/user-list/user-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/users/user-list/user-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list__header {\n  display: flex;\n  margin-bottom: 32px;\n}\n\n.list__btn {\n  letter-spacing: 1px;\n  margin-left: auto;\n}\n\n.list__cards {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.list__card {\n  box-sizing: border-box;\n  display: flex;\n\n  width: 48%;\n  margin-bottom: 28px;\n\n  cursor: pointer;\n}\n\n.list__card:nth-child(odd) {\n   margin-right: 4%;\n}\n\n.list__content {\n  display: flex;\n  flex-direction: column;\n\n  padding-bottom: 4px;\n  padding-top: 4px;\n  overflow: hidden;\n}\n\n.list__paginator {\n  margin-bottom: 16px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlci1saXN0L3VzZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixhQUFhOztFQUViLFVBQVU7RUFDVixtQkFBbUI7O0VBRW5CLGVBQWU7QUFDakI7O0FBRUE7R0FDRyxnQkFBZ0I7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCOztFQUV0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0X19oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuXG4ubGlzdF9fYnRuIHtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cbi5saXN0X19jYXJkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmxpc3RfX2NhcmQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuXG4gIHdpZHRoOiA0OCU7XG4gIG1hcmdpbi1ib3R0b206IDI4cHg7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGlzdF9fY2FyZDpudGgtY2hpbGQob2RkKSB7XG4gICBtYXJnaW4tcmlnaHQ6IDQlO1xufVxuXG4ubGlzdF9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgcGFkZGluZy1ib3R0b206IDRweDtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmxpc3RfX3BhZ2luYXRvciB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/users/user-list/user-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/users/user-list/user-list.component.ts ***!
  \********************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/data.service */ "./src/app/shared/data.service.ts");





let UserListComponent = class UserListComponent {
    constructor(router, snackBar, dataService) {
        this.router = router;
        this.snackBar = snackBar;
        this.dataService = dataService;
        this.limit = 10;
    }
    ngOnInit() {
        this.getUsers();
    }
    onCardClick(id) {
        if (id === '') {
            this.snackBar.open('User can not be modified. Contact admin.', 'Close', { duration: 5000 });
        }
        else {
            this.router.navigate([`/users/${id}`]);
        }
    }
    getUsers(event) {
        const limit = event ? event.pageSize : this.limit;
        const offset = event ? (event.pageIndex) * limit : 0;
        this.dataService.getUsers(offset, limit).subscribe((data) => {
            this.users = data[0];
            this.totalCount = data[1];
        });
    }
};
UserListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _shared_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], UserListComponent.prototype, "paginator", void 0);
UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-list',
        template: __webpack_require__(/*! raw-loader!./user-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/user-list/user-list.component.html"),
        styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/users/user-list/user-list.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
        _shared_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
], UserListComponent);



/***/ }),

/***/ "./src/app/users/user-profile/user-profile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/users/user-profile/user-profile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile__header {\n  margin-bottom: 32px;\n  text-align: center;\n}\n\n.profile__block {\n  display: flex;\n  flex-direction: column;\n  margin: 0 auto;\n\n  width: 65%;\n}\n\n.profile__form {\n  display: flex;\n  flex-direction: column;\n}\n\n.profile__form-field {\n  margin-bottom: 8px;\n}\n\n.profile__btns {\n  /*align-self: flex-end;*/\n  display: flex;\n  width: 100%;\n  margin-top: 56px;\n}\n\n.profile__form-btn {\n  margin-left: 16px;\n  letter-spacing: 1px;\n}\n\n.profile__form-btn--mr {\n  margin-right: auto;\n  margin-left: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsY0FBYzs7RUFFZCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvdXNlcnMvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGVfX2hlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnByb2ZpbGVfX2Jsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAwIGF1dG87XG5cbiAgd2lkdGg6IDY1JTtcbn1cblxuLnByb2ZpbGVfX2Zvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucHJvZmlsZV9fZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLnByb2ZpbGVfX2J0bnMge1xuICAvKmFsaWduLXNlbGY6IGZsZXgtZW5kOyovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiA1NnB4O1xufVxuXG4ucHJvZmlsZV9fZm9ybS1idG4ge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLnByb2ZpbGVfX2Zvcm0tYnRuLS1tciB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/users/user-profile/user-profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/users/user-profile/user-profile.component.ts ***!
  \**************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/data.service */ "./src/app/shared/data.service.ts");
/* harmony import */ var _shared_delete_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/delete-user.component */ "./src/app/shared/delete-user.component.ts");







let UserProfileComponent = class UserProfileComponent {
    constructor(route, router, dataService, snackBar, dialog) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.userWasChanged = false;
    }
    ngOnInit() {
        this.route.data.subscribe((data) => {
            const user = data.content;
            this.userId = user.id;
            this.profileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](user.name, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](user.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])
            });
        });
    }
    deleteUser() {
        const dialogRef = this.dialog.open(_shared_delete_user_component__WEBPACK_IMPORTED_MODULE_6__["DeleteUserComponent"], {
            data: {
                message: 'Dou you really want to delete this user?'
            }
        });
        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.dataService.deleteUser(this.userId).subscribe((data) => {
                    this.snackBar.open('User was successfully deleted', 'Close', { duration: 3000 });
                    this.router.navigate(['/users']);
                });
            }
        });
    }
    // saving user
    onProfileFormSubmit() {
        this.dataService.saveUser(this.userId, {
            id: this.userId,
            name: this.profileForm.value.name,
            email: this.profileForm.value.email
        }).subscribe(() => {
            this.userWasChanged = false;
            this.snackBar.open('User is successfully saved', 'Close', { duration: 3000 });
        });
    }
    // check form input values changes to make 'save' button active
    onValueChange() {
        if (!this.userWasChanged) {
            this.userWasChanged = true;
        }
    }
    backToUsers() {
        // if user data was changed we ask for confirm before leaving the page
        if (this.userWasChanged) {
            const dialogRef = this.dialog.open(_shared_delete_user_component__WEBPACK_IMPORTED_MODULE_6__["DeleteUserComponent"], {
                data: {
                    message: 'User not saved. Are you sure you want to leave the page?'
                }
            });
            dialogRef.afterClosed().subscribe((result) => {
                if (result) {
                    this.router.navigate(['/users']);
                }
            });
        }
        else {
            this.router.navigate(['/users']);
        }
    }
};
UserProfileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _shared_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-profile',
        template: __webpack_require__(/*! raw-loader!./user-profile.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/user-profile/user-profile.component.html"),
        styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/users/user-profile/user-profile.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _shared_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
        _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
], UserProfileComponent);



/***/ }),

/***/ "./src/app/users/user-profile/user.resolver.ts":
/*!*****************************************************!*\
  !*** ./src/app/users/user-profile/user.resolver.ts ***!
  \*****************************************************/
/*! exports provided: UserResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserResolver", function() { return UserResolver; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app.config */ "./src/app/app.config.ts");
/* harmony import */ var _shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/data.service */ "./src/app/shared/data.service.ts");




let UserResolver = class UserResolver {
    constructor(dataService, ApiUrl) {
        this.dataService = dataService;
        this.ApiUrl = ApiUrl;
    }
    resolve(route, state) {
        const userId = route.params.id;
        return this.dataService.getUserById(userId);
    }
};
UserResolver.ctorParameters = () => [
    { type: _shared_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_app_config__WEBPACK_IMPORTED_MODULE_2__["API_URL"],] }] }
];
UserResolver = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_app_config__WEBPACK_IMPORTED_MODULE_2__["API_URL"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], Object])
], UserResolver);



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main {\n  max-width: 734px;\n  padding: 56px 16px 0;\n  margin: 0 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gIG1heC13aWR0aDogNzM0cHg7XG4gIHBhZGRpbmc6IDU2cHggMTZweCAwO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UsersComponent = class UsersComponent {
};
UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: __webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/index.js!./src/app/users/users.component.html"),
        styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")]
    })
], UsersComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\userlist\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map