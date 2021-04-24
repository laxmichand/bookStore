(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Project\Practice\MEAN\bookStore\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "Cdxl":
/*!*************************************************!*\
  !*** ./src/app/shared/loader/loader.service.ts ***!
  \*************************************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoaderService {
    constructor() {
        this.loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.loaderState = this.loaderSubject.asObservable();
    }
    show(flag) {
        this.loaderSubject.next({ show: flag });
    }
    hide(flag) {
        this.loaderSubject.next({ show: flag });
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
LoaderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "F5nt":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





class AppService {
    constructor(http, _api) {
        this.http = http;
        this._api = _api;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]({
                'Content-Type': 'application/json',
            }),
        };
    }
    saveBooks(req) {
        return this.http
            .post(this._api + '/book/savebook', req)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    getAllBooks() {
        return this.http
            .get(this._api + '/book/getallbook')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    deletedbyId(id) {
        return this.http
            .delete(this._api + '/book/delete/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
    }
    handleError(error) {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
            // Client-side errors
            errorMessage = `Error: ${error.error.message}`;
        }
        else {
            // Server-side errors
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        window.alert(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"]('apiBase')); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "QX6l":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.service */ "F5nt");
/* harmony import */ var _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/loader/loader.service */ "Cdxl");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function DashboardComponent_tbody_42_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_tbody_42_tr_1_Template_i_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const row_r3 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.operation(row_r3, "edit"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_tbody_42_tr_1_Template_i_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const row_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.operation(row_r3, "delete"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r4 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r3.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r3.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](row_r3.webSite);
} }
function DashboardComponent_tbody_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_tbody_42_tr_1_Template, 13, 4, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.bookStoreObj.bookDataList);
} }
function DashboardComponent_tbody_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Nothing Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DashboardComponent {
    constructor(service, loaderService, toastr) {
        this.service = service;
        this.loaderService = loaderService;
        this.toastr = toastr;
        this.bookStoreObj = {
            bookObj: {
                title: '',
                webSite: '',
                author: '',
            },
            bookDataList: [],
        };
    }
    ngOnInit() {
        this.loaderService.show(true);
        this.resetBook();
        this.getAllbooks();
    }
    getAllbooks() {
        this.loaderService.show(true);
        this.service.getAllBooks().subscribe((res) => {
            this.bookStoreObj.bookDataList = res;
            this.loaderService.show(false);
        }, (err) => {
            this.toastr.error('Someting went wrong', err);
            this.loaderService.show(false);
        });
    }
    saveBook() {
        this.loaderService.show(true);
        let query = {
            data: {
                title: this.bookStoreObj.bookObj.title,
                webSite: this.bookStoreObj.bookObj.webSite,
                author: this.bookStoreObj.bookObj.author,
            },
            updateCriteria: { id: this.bookStoreObj.bookObj.id },
        };
        this.service.saveBooks(query).subscribe((data) => {
            this.toastr.success('Record successfully saved.');
            this.getAllbooks();
            this.resetBook();
        }, (error) => {
            this.toastr.error('Error while saving record', error);
            this.loaderService.show(false);
            console.log('error', error);
        });
    }
    resetBook() {
        this.bookStoreObj.bookObj = {
            title: '',
            webSite: '',
            author: '',
            id: '',
        };
    }
    operation(row, action) {
        this.loaderService.show(true);
        this.resetBook();
        if (action === 'edit') {
            this.bookStoreObj.bookObj = {
                title: row.title,
                webSite: row.webSite,
                author: row.author,
                id: row._id,
            };
            this.loaderService.show(false);
        }
        if (action === 'delete') {
            this.service.deletedbyId(row._id).subscribe((data) => {
                this.toastr.success('Record succsessfully deleted');
                this.getAllbooks();
                this.loaderService.show(false);
            }, (error) => {
                this.toastr.success('Error while delete record', error);
                this.loaderService.show(false);
                console.log('error', error);
            });
        }
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 44, vars: 5, consts: [[1, "container-fuild", "margin-top-dashboard"], [1, "row", "rowCustom"], [1, "col-sm-3", 2, "border", "1px solid gainsboro", "padding", "0px", "border-radius", "4px"], [1, "lableCustom", "labelbookEntry"], [2, "border-radius", "4px", "padding", "10px"], ["for", "fname", 1, ""], ["id", "title", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["for", "input", "placeholder", "Title", "alt", "Enter Title"], ["id", "author", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["for", "input", "placeholder", "Author", "alt", "Enter Author"], ["id", "webSite", "type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["for", "input", "placeholder", "Website", "alt", "Enter Website"], [1, "button", "button3", "buttonReset", 3, "click"], [1, "button", "button3", 3, "click"], [1, "col-sm-9", "mobileview"], [1, "lableCustom", "lableBookList", "boderBoolist"], [1, "booklistTableborder"], [2, "background-color", "white"], ["scope", "col"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["data-label", "#"], ["data-label", "Name"], ["data-label", "Author"], ["data-label", "Website"], ["data-label", "Action"], [1, "bi", "bi-pencil-square", "cursercss", 3, "click"], [1, "bi", "bi-trash", "cursercss", 3, "click"], ["col-span", "5"], ["colspan", "5"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Add Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_9_listener($event) { return ctx.bookStoreObj.bookObj.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_14_listener($event) { return ctx.bookStoreObj.bookObj.author = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_19_listener($event) { return ctx.bookStoreObj.bookObj.webSite = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_21_listener() { return ctx.resetBook(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_23_listener() { return ctx.saveBook(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Add Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Book List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "thead", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, DashboardComponent_tbody_42_Template, 2, 1, "tbody", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, DashboardComponent_tbody_43_Template, 4, 0, "tbody", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bookStoreObj.bookObj.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bookStoreObj.bookObj.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bookStoreObj.bookObj.webSite);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bookStoreObj.bookDataList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.bookStoreObj.bookDataList.length === 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".margin-top-dashboard[_ngcontent-%COMP%] {\r\n  margin-top: 40px;\r\n}\r\n.rowCustom[_ngcontent-%COMP%] {\r\n  padding-right: 35px;\r\n  padding-left: 35px;\r\n  padding-top: 29px;\r\n}\r\n.lableCustom[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  color: white;\r\n  width: 100%;\r\n  background: green;\r\n  \r\n}\r\n.labelbookEntry[_ngcontent-%COMP%] {\r\n  background-color: forestgreen;\r\n  \r\n  \r\n  font-family: muli;\r\n}\r\n.lableBookList[_ngcontent-%COMP%] {\r\n  background-color: #8080806e;\r\n  color: black;\r\n}\r\n.boderBoolist[_ngcontent-%COMP%] {\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n  margin-bottom: 0px;\r\n}\r\n.booklistTableborder[_ngcontent-%COMP%] {\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  border-bottom-left-radius: 5px;\r\n  border-bottom-right-radius: 5px;\r\n  border-top: none;\r\n  border-right: none;\r\n  border-left: none;\r\n}\r\n.lable[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 10px 10px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\ninput[type=\"submit\"][_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: #4caf50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\ninput[type=\"submit\"][_ngcontent-%COMP%]:hover {\r\n  background-color: #45a049;\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: calc(3em + 2px);\r\n  margin: 0 0 1em;\r\n  padding: 6px;\r\n  border: 1px solid #bababa;\r\n  border-radius: 3px;\r\n  background: #fff;\r\n  font-size: 16px;\r\n  resize: none;\r\n  outline: none;\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%]:focus {\r\n  border-color: #00bafa;\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%]:focus    + label[placeholder][_ngcontent-%COMP%]:before {\r\n  color: #0091da;\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%]:focus    + label[placeholder][_ngcontent-%COMP%]:before, input[type=\"text\"][_ngcontent-%COMP%]:valid    + label[placeholder][_ngcontent-%COMP%]:before {\r\n  transition-duration: 0.2s;\r\n  transform: translate(0, -1.6em) scale(0.9, 0.9);\r\n  font-weight: bold;\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%]:valid {\r\n  border-color: green;\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%]:valid    + label[placeholder][_ngcontent-%COMP%]:before {\r\n  color: green;\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%]:invalid    + label[placeholder][alt][_ngcontent-%COMP%]:before {\r\n  content: attr(alt);\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%]    + label[placeholder][_ngcontent-%COMP%] {\r\n  display: block;\r\n  pointer-events: none;\r\n  line-height: 1.25em;\r\n  margin-top: calc(-3em - 2px);\r\n  margin-bottom: calc((3em - 1em) + 2px);\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%]    + label[placeholder][_ngcontent-%COMP%]:before {\r\n  content: attr(placeholder);\r\n  display: inline-block;\r\n  margin: 0 calc(0.5em + 2px);\r\n  padding: 0 2px;\r\n  color: #7d7d7d;\r\n  white-space: nowrap;\r\n  transition: 0.3s ease-in-out;\r\n  background-image: linear-gradient(to bottom, #ffffff, #ffffff);\r\n  background-size: 100% 5px;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\nhtml[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  font-size: 16px;\r\n}\r\nbody[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  margin: 20px auto;\r\n  width: 50%;\r\n}\r\n.button[_ngcontent-%COMP%] {\r\n  background-color: #4caf50; \r\n  border: none;\r\n  color: white;\r\n  padding: 7px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n}\r\n.buttonReset[_ngcontent-%COMP%] {\r\n  background-color: red; \r\n}\r\n.button3[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n}\r\n.cursercss[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n  border: 1px solid #ccc;\r\n  border-collapse: collapse;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  table-layout: fixed;\r\n}\r\ntable[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\r\n  font-size: 1.5em;\r\n  margin: 0.5em 0 0.75em;\r\n}\r\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  background-color: #f8f8f8;\r\n  border: 1px solid #ddd;\r\n  padding: 0.35em;\r\n}\r\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 0.625em;\r\n  text-align: center;\r\n}\r\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  font-size: 0.85em;\r\n  letter-spacing: 0.1em;\r\n  \r\n}\r\n@media screen and (max-width: 600px) {\r\n  table[_ngcontent-%COMP%] {\r\n    border: 0;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\r\n    font-size: 1.3em;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n    border: none;\r\n    clip: rect(0 0 0 0);\r\n    height: 1px;\r\n    margin: -1px;\r\n    overflow: hidden;\r\n    padding: 0;\r\n    position: absolute;\r\n    width: 1px;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    border-bottom: 3px solid #ddd;\r\n    display: block;\r\n    margin-bottom: 0.625em;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #ddd;\r\n    display: block;\r\n    font-size: 0.8em;\r\n    text-align: right;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\r\n    \r\n    content: attr(data-label);\r\n    float: left;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\r\n    border-bottom: 0;\r\n  }\r\n\r\n  .mobileview[_ngcontent-%COMP%] {\r\n    padding-right: 0px;\r\n    padding-left: 0px;\r\n    margin-top: 15px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,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SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRTs7O09BR0c7SUFDSCx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjtBQUNGIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbi10b3AtZGFzaGJvYXJkIHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcbi5yb3dDdXN0b20ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDM1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAyOXB4O1xyXG59XHJcbi5sYWJsZUN1c3RvbSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogZ3JlZW47XHJcbiAgLyogYm9yZGVyLXJhZGl1czogNHB4OyAqL1xyXG59XHJcblxyXG4ubGFiZWxib29rRW50cnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGZvcmVzdGdyZWVuO1xyXG4gIC8qIHdpZHRoOiAxMDglOyAqL1xyXG4gIC8qIG1hcmdpbi1sZWZ0OiAtMTdweDsgKi9cclxuICBmb250LWZhbWlseTogbXVsaTtcclxufVxyXG5cclxuLmxhYmxlQm9va0xpc3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MDgwODA2ZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5ib2RlckJvb2xpc3Qge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5ib29rbGlzdFRhYmxlYm9yZGVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbn1cclxuXHJcbi5sYWJsZSBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogY2FsYygzZW0gKyAycHgpO1xyXG4gIG1hcmdpbjogMCAwIDFlbTtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2JhYmFiYTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogIzAwYmFmYTtcclxufVxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyArIGxhYmVsW3BsYWNlaG9sZGVyXTpiZWZvcmUge1xyXG4gIGNvbG9yOiAjMDA5MWRhO1xyXG59XHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzICsgbGFiZWxbcGxhY2Vob2xkZXJdOmJlZm9yZSxcclxuaW5wdXRbdHlwZT1cInRleHRcIl06dmFsaWQgKyBsYWJlbFtwbGFjZWhvbGRlcl06YmVmb3JlIHtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xLjZlbSkgc2NhbGUoMC45LCAwLjkpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOnZhbGlkIHtcclxuICBib3JkZXItY29sb3I6IGdyZWVuO1xyXG59XHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOnZhbGlkICsgbGFiZWxbcGxhY2Vob2xkZXJdOmJlZm9yZSB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmludmFsaWQgKyBsYWJlbFtwbGFjZWhvbGRlcl1bYWx0XTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IGF0dHIoYWx0KTtcclxufVxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSArIGxhYmVsW3BsYWNlaG9sZGVyXSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcclxuICBtYXJnaW4tdG9wOiBjYWxjKC0zZW0gLSAycHgpO1xyXG4gIG1hcmdpbi1ib3R0b206IGNhbGMoKDNlbSAtIDFlbSkgKyAycHgpO1xyXG59XHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdICsgbGFiZWxbcGxhY2Vob2xkZXJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogYXR0cihwbGFjZWhvbGRlcik7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMCBjYWxjKDAuNWVtICsgMnB4KTtcclxuICBwYWRkaW5nOiAwIDJweDtcclxuICBjb2xvcjogIzdkN2Q3ZDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZmZmZiwgI2ZmZmZmZik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDVweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5ib2R5ID4gKiB7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDsgLyogR3JlZW4gKi9cclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDdweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luOiA0cHggMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvblJlc2V0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IC8qIEdyZWVuICovXHJcbn1cclxuXHJcbi5idXR0b24zIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5jdXJzZXJjc3Mge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxudGFibGUge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xyXG59XHJcblxyXG50YWJsZSBjYXB0aW9uIHtcclxuICBmb250LXNpemU6IDEuNWVtO1xyXG4gIG1hcmdpbjogMC41ZW0gMCAwLjc1ZW07XHJcbn1cclxuXHJcbnRhYmxlIHRyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgcGFkZGluZzogMC4zNWVtO1xyXG59XHJcblxyXG50YWJsZSB0aCxcclxudGFibGUgdGQge1xyXG4gIHBhZGRpbmc6IDAuNjI1ZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG50YWJsZSB0aCB7XHJcbiAgZm9udC1zaXplOiAwLjg1ZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gIC8qIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7ICovXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgdGFibGUge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxuXHJcbiAgdGFibGUgY2FwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gIH1cclxuXHJcbiAgdGFibGUgdGhlYWQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgbWFyZ2luOiAtMXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gIH1cclxuXHJcbiAgdGFibGUgdHIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNkZGQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNjI1ZW07XHJcbiAgfVxyXG5cclxuICB0YWJsZSB0ZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuXHJcbiAgdGFibGUgdGQ6OmJlZm9yZSB7XHJcbiAgICAvKlxyXG4gICAgICAqIGFyaWEtbGFiZWwgaGFzIG5vIGFkdmFudGFnZSwgaXQgd29uJ3QgYmUgcmVhZCBpbnNpZGUgYSB0YWJsZVxyXG4gICAgICBjb250ZW50OiBhdHRyKGFyaWEtbGFiZWwpO1xyXG4gICAgICAqL1xyXG4gICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIH1cclxuXHJcbiAgdGFibGUgdGQ6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgLm1vYmlsZXZpZXcge1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/loader/loader.component */ "o7am");





class AppComponent {
    constructor() {
        this.title = 'frontend';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "angular-loader");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/loader/loader.component */ "o7am");
/* harmony import */ var _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/loader/loader.service */ "Cdxl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");














class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [{ provide: 'apiBase', useValue: '' }, _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_11__["LoaderService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"],
        _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_10__["LoaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"]] }); })();


/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 3, vars: 0, consts: [[1, "footer"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  background-color: black;\r\n  color: black;\r\n  text-align: center;\r\n  z-index: 10;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: black;\r\n  color: black;\r\n  text-align: center;\r\n  z-index: 10;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "o7am":
/*!***************************************************!*\
  !*** ./src/app/shared/loader/loader.component.ts ***!
  \***************************************************/
/*! exports provided: LoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderComponent", function() { return LoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.service */ "Cdxl");


class LoaderComponent {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.show = false;
    }
    ngOnInit() {
        this.subscription = this.loaderService.loaderState.subscribe((state) => {
            this.show = state.show;
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"])); };
LoaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["angular-loader"]], decls: 4, vars: 2, consts: [[1, "modal-backdrop"], [1, "progress-bar", "progress-bar-striped", "progress-bar-animated", "loading"], ["role", "progressbar", "aria-valuenow", "100", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "100%"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("loader-hidden", !ctx.show);
    } }, styles: [".loader-hidden[_ngcontent-%COMP%] {\r\n  visibility: hidden;\r\n}\r\n.loader-overlay[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  opacity: 1;\r\n  z-index: 500000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE1BQU07RUFDTixPQUFPO0VBQ1AsVUFBVTtFQUNWLGVBQWU7QUFDakIiLCJmaWxlIjoibG9hZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyLWhpZGRlbiB7XHJcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG59XHJcbi5sb2FkZXItb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgei1pbmRleDogNTAwMDAwO1xyXG59XHJcbiJdfQ== */", ".modal-backdrop[_ngcontent-%COMP%] {\n    opacity: 0.7;\n    filter: alpha(opacity=70);\n    background: #fff;\n    z-index: 2;\n  }\n\n  div.loading[_ngcontent-%COMP%] {\n    position: fixed;\n    margin: auto;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    width: 200px;\n    height: 30px;\n    z-index: 3;\n  }"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map