(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Project\Practice\MEAN\b\bookStore\frontend\src\main.ts */"zUnb");


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
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}\n${error.error.message}`;
        }
        // window.alert(errorMessage);
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.service */ "F5nt");
/* harmony import */ var _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/loader/loader.service */ "Cdxl");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function DashboardComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Title should be 3 character. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DashboardComponent_div_11_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DashboardComponent_div_11_div_2_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.f.name.errors.minlength);
} }
function DashboardComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Author is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_16_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Author should be 3 character. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DashboardComponent_div_16_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DashboardComponent_div_16_div_2_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.f.Author.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.f.Author.errors.minlength);
} }
function DashboardComponent_div_21_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Web site is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_21_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Enter valid url.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DashboardComponent_div_21_div_1_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DashboardComponent_div_21_div_2_Template, 2, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.f.webSite.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.f.webSite.errors.pattern);
} }
function DashboardComponent_tbody_43_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_tbody_43_tr_1_Template_i_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const row_r12 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r14.operation(row_r12, "edit"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_tbody_43_tr_1_Template_i_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const row_r12 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r16.operation(row_r12, "delete"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r12 = ctx.$implicit;
    const i_r13 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r13 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](row_r12.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r12.author, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", row_r12.webSite, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", row_r12.webSite, "");
} }
function DashboardComponent_tbody_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DashboardComponent_tbody_43_tr_1_Template, 14, 5, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.bookStoreObj.bookDataList);
} }
function DashboardComponent_tbody_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tr", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Nothing Found");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class DashboardComponent {
    constructor(service, loaderService, toastr) {
        this.service = service;
        this.loaderService = loaderService;
        this.toastr = toastr;
        this.urlRegex = `(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?`;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)]),
            Author: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(3)]),
            webSite: new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.urlRegex),
            ]),
        });
        this.bookStoreObj = {
            bookObj: {
                title: '',
                webSite: '',
                author: '',
            },
            bookDataList: [],
        };
    }
    get f() {
        return this.form.controls;
    }
    ngOnInit() {
        this.loaderService.show(true);
        this.resetBook();
        this.getAllbooks();
    }
    getAllbooks() {
        this.loaderService.show(true);
        this.service.getAllBooks().subscribe((res) => {
            this.bookStoreObj.bookDataList =
                res['result'] !== undefined ? res['result'] : [];
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
            this.resetBook();
            this.getAllbooks();
        }, (error) => {
            this.toastr.error('Error while saving record', error);
            this.loaderService.show(false);
        });
    }
    resetBook() {
        this.bookStoreObj.bookObj = {
            title: '',
            webSite: '',
            author: '',
            id: '',
        };
        this.form.reset();
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
            if (window.confirm('You want to delete this entry.')) {
                this.service.deletedbyId(row._id).subscribe((data) => {
                    this.toastr.success('Record succsessfully deleted');
                    this.getAllbooks();
                    this.form.reset();
                    this.loaderService.show(false);
                }, (error) => {
                    this.toastr.success('Error while delete record', error);
                    this.form.reset();
                    this.loaderService.show(false);
                });
            }
            else {
                this.loaderService.show(false);
            }
        }
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_3__["LoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 45, vars: 10, consts: [[1, "container-fuild", "margin-top-dashboard"], [1, "row", "rowCustom"], [1, "col-sm-3", 2, "border", "1px solid gainsboro", "padding", "0px", "border-radius", "4px"], [1, "lableCustom", "labelbookEntry"], [2, "border-radius", "4px", "padding", "10px"], [3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "fname", 1, "label-font"], ["formControlName", "name", "id", "name", "type", "text", "placeholder", "Enter title", "autocomplete", "off", 1, "form-control", "input-bottom", 3, "ngModel", "ngModelChange"], ["class", "alert alert-danger validation", 4, "ngIf"], ["for", "Author", 1, "label-font"], ["formControlName", "Author", "id", "Author", "type", "text", "placeholder", "Enter author", "autocomplete", "off", 1, "form-control", "input-bottom", 3, "ngModel", "ngModelChange"], ["for", "Website", 1, "label-font"], ["formControlName", "webSite", "id", "webSite", "type", "text", "placeholder", "Enter website", "autocomplete", "off", 1, "form-control", "input-bottom", 3, "ngModel", "ngModelChange"], ["type", "reset", 1, "btn", "btn-danger", "button", "button3", "buttonReset"], ["type", "submit", 1, "btn", "btn-success", "button", "button3", "buttonsubmit", 3, "disabled"], [1, "col-sm-9", "mobileview"], [1, "lableCustom", "lableBookList", "boderBoolist"], [1, "booklistTableborder"], [2, "background-color", "white"], ["scope", "col"], [4, "ngIf"], [1, "alert", "alert-danger", "validation"], [4, "ngFor", "ngForOf"], ["data-label", "#"], ["data-label", "Name"], ["data-label", "Author"], ["data-label", "Website", 1, "textwrape", 2, "word-break", "break-all"], ["target", "_blank", 1, "aCustom", 3, "href"], ["data-label", "Action"], [1, "bi", "bi-pencil-square", "cursercss", 3, "click"], [1, "bi", "bi-trash", "cursercss", 3, "click"], ["col-span", "5"], ["colspan", "5"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Add Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function DashboardComponent_Template_form_ngSubmit_6_listener() { return ctx.saveBook(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_10_listener($event) { return ctx.bookStoreObj.bookObj.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, DashboardComponent_div_11_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_15_listener($event) { return ctx.bookStoreObj.bookObj.author = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, DashboardComponent_div_16_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DashboardComponent_Template_input_ngModelChange_20_listener($event) { return ctx.bookStoreObj.bookObj.webSite = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, DashboardComponent_div_21_Template, 3, 2, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Add Book ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Book List");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "thead", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Author");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Website");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, DashboardComponent_tbody_43_Template, 2, 1, "tbody", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, DashboardComponent_tbody_44_Template, 4, 0, "tbody", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.bookStoreObj.bookObj.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.f.name.touched && ctx.f.name.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.bookStoreObj.bookObj.author);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.f.Author.touched && ctx.f.Author.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.bookStoreObj.bookObj.webSite);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.f.webSite.touched && ctx.f.webSite.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bookStoreObj.bookDataList.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.bookStoreObj.bookDataList.length === 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".margin-top-dashboard[_ngcontent-%COMP%] {\r\n  margin-top: 40px;\r\n}\r\n.rowCustom[_ngcontent-%COMP%] {\r\n  padding-right: 28px;\r\n  padding-left: 48px;\r\n  padding-top: 18px;\r\n}\r\n.lableCustom[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  color: white;\r\n  width: 100%;\r\n  background: green;\r\n}\r\n.labelbookEntry[_ngcontent-%COMP%] {\r\n  background-color: forestgreen;\r\n  font-family: muli;\r\n}\r\n.lableBookList[_ngcontent-%COMP%] {\r\n  background-color: #8080806e;\r\n  color: black;\r\n}\r\n.boderBoolist[_ngcontent-%COMP%] {\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n  margin-bottom: 0px;\r\n}\r\n.booklistTableborder[_ngcontent-%COMP%] {\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  border-bottom-left-radius: 5px;\r\n  border-bottom-right-radius: 5px;\r\n  border-top: none;\r\n  border-right: none;\r\n  border-left: none;\r\n  overflow-y: scroll;\r\n  max-height: 444px;\r\n  padding: 7px;\r\n  border-left: 1px solid rgba(0, 0, 0, 0.1);\r\n}\r\n.textwrape[_ngcontent-%COMP%] {\r\n  white-space: nowrap;\r\n  width: 50px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n.input-bottom[_ngcontent-%COMP%] {\r\n  margin-bottom: 5px !important;\r\n  height: 39px !important;\r\n}\r\n.label-font[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n}\r\n.lable[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%], select[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  padding: 10px 10px;\r\n  margin: 8px 0;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n}\r\ninput[type=\"submit\"][_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: #4caf50;\r\n  color: white;\r\n  padding: 14px 20px;\r\n  margin: 8px 0;\r\n  border: none;\r\n  border-radius: 4px;\r\n  cursor: pointer;\r\n}\r\ninput[type=\"submit\"][_ngcontent-%COMP%]:hover {\r\n  background-color: #45a049;\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: calc(3em + 2px);\r\n  margin: 0 0 1em;\r\n  padding: 6px;\r\n  border: 1px solid #bababa;\r\n  border-radius: 3px;\r\n  background: #fff;\r\n  font-size: 16px;\r\n  resize: none;\r\n  outline: none;\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%]:focus {\r\n  border-color: #00bafa;\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%]:focus    + label[placeholder][_ngcontent-%COMP%]:before {\r\n  color: #0091da;\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%]:focus    + label[placeholder][_ngcontent-%COMP%]:before, input[type=\"text\"][_ngcontent-%COMP%]:valid    + label[placeholder][_ngcontent-%COMP%]:before {\r\n  transition-duration: 0.2s;\r\n  transform: translate(0, -1.6em) scale(0.9, 0.9);\r\n  font-weight: bold;\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%]:valid {\r\n  border-color: green;\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%]:valid    + label[placeholder][_ngcontent-%COMP%]:before {\r\n  color: green;\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%]:invalid    + label[placeholder][alt][_ngcontent-%COMP%]:before {\r\n  content: attr(alt);\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%]    + label[placeholder][_ngcontent-%COMP%] {\r\n  display: block;\r\n  pointer-events: none;\r\n  line-height: 1.25em;\r\n  margin-top: calc(-3em - 2px);\r\n  margin-bottom: calc((3em - 1em) + 2px);\r\n}\r\ninput[type=\"text\"][_ngcontent-%COMP%]    + label[placeholder][_ngcontent-%COMP%]:before {\r\n  content: attr(placeholder);\r\n  display: inline-block;\r\n  margin: 0 calc(0.5em + 2px);\r\n  padding: 0 2px;\r\n  color: #7d7d7d;\r\n  white-space: nowrap;\r\n  transition: 0.3s ease-in-out;\r\n  background-image: linear-gradient(to bottom, #ffffff, #ffffff);\r\n  background-size: 100% 5px;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\nhtml[_ngcontent-%COMP%] {\r\n  height: 100%;\r\n  font-size: 16px;\r\n}\r\nbody[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\r\n  margin: 20px auto;\r\n  width: 50%;\r\n}\r\n.button[_ngcontent-%COMP%] {\r\n  background-color: #4caf50; \r\n  border: none;\r\n  color: white;\r\n  padding: 7px;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  cursor: pointer;\r\n}\r\n.buttonReset[_ngcontent-%COMP%] {\r\n  background-color: #af4343;\r\n  padding-left: 16px;\r\n  padding-right: 16px;\r\n}\r\n.buttonsubmit[_ngcontent-%COMP%] {\r\n  padding-left: 16px;\r\n  padding-right: 16px;\r\n}\r\n.button3[_ngcontent-%COMP%] {\r\n  border-radius: 4px;\r\n}\r\n.cursercss[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\ntable[_ngcontent-%COMP%] {\r\n  border: 1px solid #ccc;\r\n  border-collapse: collapse;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  table-layout: fixed;\r\n}\r\ntable[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\r\n  font-size: 1.5em;\r\n  margin: 0.5em 0 0.75em;\r\n}\r\ntable[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n  background-color: #f8f8f8;\r\n  border: 1px solid #ddd;\r\n  padding: 0.35em;\r\n}\r\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n  padding: 0.625em;\r\n  text-align: center;\r\n}\r\ntable[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n  font-size: 0.85em;\r\n  letter-spacing: 0.1em;\r\n  background-color: white;\r\n  position: sticky;\r\n  top: 0;\r\n  \r\n}\r\n@media screen and (max-width: 600px) {\r\n  table[_ngcontent-%COMP%] {\r\n    border: 0;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%]   caption[_ngcontent-%COMP%] {\r\n    font-size: 1.3em;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\r\n    border: none;\r\n    clip: rect(0 0 0 0);\r\n    height: 1px;\r\n    margin: -1px;\r\n    overflow: hidden;\r\n    padding: 0;\r\n    position: absolute;\r\n    width: 1px;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\r\n    border-bottom: 3px solid #ddd;\r\n    display: block;\r\n    margin-bottom: 0.625em;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    border-bottom: 1px solid #ddd;\r\n    display: block;\r\n    font-size: 0.8em;\r\n    text-align: right;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\r\n    \r\n    content: attr(data-label);\r\n    float: left;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n  }\r\n\r\n  table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\r\n    border-bottom: 0;\r\n  }\r\n\r\n  .mobileview[_ngcontent-%COMP%] {\r\n    padding-right: 0px;\r\n    padding-left: 0px;\r\n    margin-top: 15px;\r\n  }\r\n\r\n  .buttonReset[_ngcontent-%COMP%] {\r\n    background-color: #af4343;\r\n    width: auto;\r\n  }\r\n  .buttonsubmit[_ngcontent-%COMP%] {\r\n    width: auto;\r\n  }\r\n  .textwrape[_ngcontent-%COMP%] {\r\n    white-space: break-spaces;\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n  }\r\n  .rowCustom[_ngcontent-%COMP%] {\r\n    padding-right: 8px;\r\n    padding-left: 22px;\r\n    padding-top: 18px;\r\n  }\r\n  .aCustom[_ngcontent-%COMP%] {\r\n    width: 327px;\r\n    float: right;\r\n  }\r\n}\r\n.validation[_ngcontent-%COMP%] {\r\n  padding: 0px;\r\n  text-align: center;\r\n  font-size: 12px;\r\n}\r\n\r\n@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2) {\r\n  \r\n  .aCustom[_ngcontent-%COMP%] {\r\n    width: 304px;\r\n    float: right;\r\n  }\r\n}\r\n\r\n@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2) {\r\n  \r\n  .aCustom[_ngcontent-%COMP%] {\r\n    width: 316px;\r\n    float: right;\r\n  }\r\n}\r\n@media only screen and (min-device-width: 414px) and (max-device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2) {\r\n  \r\n  .aCustom[_ngcontent-%COMP%] {\r\n    width: 312px;\r\n    float: left !important;\r\n  }\r\n}\r\n\r\n@media only screen and (min-device-width: 375px) and (max-device-height: 667px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2) {\r\n  \r\n  .aCustom[_ngcontent-%COMP%] {\r\n    width: 316px !important;\r\n    float: right;\r\n  }\r\n}\r\n@media only screen and (min-device-width: 320px) and (max-device-height: 568px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2) {\r\n  \r\n  .aCustom[_ngcontent-%COMP%] {\r\n    width: 220px;\r\n    float: left;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsWUFBWTtBQUNkO0FBRUE7RUFDRSxvQ0FBb0M7RUFDcEMsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHlDQUF5QztBQUMzQztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBOztFQUVFLHlCQUF5QjtFQUN6QiwrQ0FBK0M7RUFDL0MsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSwwQkFBMEI7RUFDMUIscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixjQUFjO0VBQ2QsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUIsOERBQThEO0VBQzlELHlCQUF5QjtFQUN6Qiw0QkFBNEI7RUFDNUIsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjtBQUVBO0VBQ0UseUJBQXlCLEVBQUUsVUFBVTtFQUNyQyxZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGVBQWU7QUFDakI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7QUFFQTs7RUFFRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLCtCQUErQjtBQUNqQztBQUVBO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRTs7O09BR0c7SUFDSCx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7RUFDQTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDtBQUNGO0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFFQSxrQ0FBa0M7QUFDbEM7RUFDRSxXQUFXO0VBQ1g7SUFDRSxZQUFZO0lBQ1osWUFBWTtFQUNkO0FBQ0Y7QUFFQSwrQkFBK0I7QUFDL0I7RUFDRSxXQUFXO0VBQ1g7SUFDRSxZQUFZO0lBQ1osWUFBWTtFQUNkO0FBQ0Y7QUFFQTtFQUNFLFdBQVc7RUFDWDtJQUNFLFlBQVk7SUFDWixzQkFBc0I7RUFDeEI7QUFDRjtBQUVBLCtCQUErQjtBQUMvQjtFQUNFLFdBQVc7RUFDWDtJQUNFLHVCQUF1QjtJQUN2QixZQUFZO0VBQ2Q7QUFDRjtBQUVBO0VBQ0UsV0FBVztFQUNYO0lBQ0UsWUFBWTtJQUNaLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbi10b3AtZGFzaGJvYXJkIHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcbi5yb3dDdXN0b20ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI4cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiA0OHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxOHB4O1xyXG59XHJcbi5sYWJsZUN1c3RvbSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogZ3JlZW47XHJcbn1cclxuXHJcbi5sYWJlbGJvb2tFbnRyeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZm9yZXN0Z3JlZW47XHJcbiAgZm9udC1mYW1pbHk6IG11bGk7XHJcbn1cclxuXHJcbi5sYWJsZUJvb2tMaXN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODA4MDgwNmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uYm9kZXJCb29saXN0IHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uYm9va2xpc3RUYWJsZWJvcmRlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBtYXgtaGVpZ2h0OiA0NDRweDtcclxuICBwYWRkaW5nOiA3cHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuXHJcbi50ZXh0d3JhcGUge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufVxyXG5cclxuLmlucHV0LWJvdHRvbSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAzOXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxhYmVsLWZvbnQge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5sYWJsZSBpbnB1dFt0eXBlPVwidGV4dFwiXSxcclxuc2VsZWN0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTRweCAyMHB4O1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NWEwNDk7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogY2FsYygzZW0gKyAycHgpO1xyXG4gIG1hcmdpbjogMCAwIDFlbTtcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2JhYmFiYTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuaW5wdXRbdHlwZT1cInRleHRcIl06Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogIzAwYmFmYTtcclxufVxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXTpmb2N1cyArIGxhYmVsW3BsYWNlaG9sZGVyXTpiZWZvcmUge1xyXG4gIGNvbG9yOiAjMDA5MWRhO1xyXG59XHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmZvY3VzICsgbGFiZWxbcGxhY2Vob2xkZXJdOmJlZm9yZSxcclxuaW5wdXRbdHlwZT1cInRleHRcIl06dmFsaWQgKyBsYWJlbFtwbGFjZWhvbGRlcl06YmVmb3JlIHtcclxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xLjZlbSkgc2NhbGUoMC45LCAwLjkpO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOnZhbGlkIHtcclxuICBib3JkZXItY29sb3I6IGdyZWVuO1xyXG59XHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOnZhbGlkICsgbGFiZWxbcGxhY2Vob2xkZXJdOmJlZm9yZSB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdOmludmFsaWQgKyBsYWJlbFtwbGFjZWhvbGRlcl1bYWx0XTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6IGF0dHIoYWx0KTtcclxufVxyXG5pbnB1dFt0eXBlPVwidGV4dFwiXSArIGxhYmVsW3BsYWNlaG9sZGVyXSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcclxuICBtYXJnaW4tdG9wOiBjYWxjKC0zZW0gLSAycHgpO1xyXG4gIG1hcmdpbi1ib3R0b206IGNhbGMoKDNlbSAtIDFlbSkgKyAycHgpO1xyXG59XHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdICsgbGFiZWxbcGxhY2Vob2xkZXJdOmJlZm9yZSB7XHJcbiAgY29udGVudDogYXR0cihwbGFjZWhvbGRlcik7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMCBjYWxjKDAuNWVtICsgMnB4KTtcclxuICBwYWRkaW5nOiAwIDJweDtcclxuICBjb2xvcjogIzdkN2Q3ZDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZmZmZiwgI2ZmZmZmZik7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDVweDtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5ib2R5ID4gKiB7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDsgLyogR3JlZW4gKi9cclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDdweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luOiA0cHggMnB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvblJlc2V0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWY0MzQzO1xyXG4gIHBhZGRpbmctbGVmdDogMTZweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4uYnV0dG9uc3VibWl0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxufVxyXG5cclxuLmJ1dHRvbjMge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmN1cnNlcmNzcyB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuXHJcbnRhYmxlIGNhcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgbWFyZ2luOiAwLjVlbSAwIDAuNzVlbTtcclxufVxyXG5cclxudGFibGUgdHIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBwYWRkaW5nOiAwLjM1ZW07XHJcbn1cclxuXHJcbnRhYmxlIHRoLFxyXG50YWJsZSB0ZCB7XHJcbiAgcGFkZGluZzogMC42MjVlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbnRhYmxlIHRoIHtcclxuICBmb250LXNpemU6IDAuODVlbTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgLyogdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgKi9cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICB0YWJsZSB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgfVxyXG5cclxuICB0YWJsZSBjYXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgfVxyXG5cclxuICB0YWJsZSB0aGVhZCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBtYXJnaW46IC0xcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgfVxyXG5cclxuICB0YWJsZSB0ciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2RkZDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC42MjVlbTtcclxuICB9XHJcblxyXG4gIHRhYmxlIHRkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDAuOGVtO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG5cclxuICB0YWJsZSB0ZDo6YmVmb3JlIHtcclxuICAgIC8qXHJcbiAgICAgICogYXJpYS1sYWJlbCBoYXMgbm8gYWR2YW50YWdlLCBpdCB3b24ndCBiZSByZWFkIGluc2lkZSBhIHRhYmxlXHJcbiAgICAgIGNvbnRlbnQ6IGF0dHIoYXJpYS1sYWJlbCk7XHJcbiAgICAgICovXHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgfVxyXG5cclxuICB0YWJsZSB0ZDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICAubW9iaWxldmlldyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uUmVzZXQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FmNDM0MztcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuICAuYnV0dG9uc3VibWl0IHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gIH1cclxuICAudGV4dHdyYXBlIHtcclxuICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgfVxyXG4gIC5yb3dDdXN0b20ge1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE4cHg7XHJcbiAgfVxyXG4gIC5hQ3VzdG9tIHtcclxuICAgIHdpZHRoOiAzMjdweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbn1cclxuXHJcbi52YWxpZGF0aW9uIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLyogaVBob25lIDYrLCA3KywgOCsgLS0tLS0tLS0tLS0gKi9cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNDE0cHgpIGFuZCAobWF4LWRldmljZS1oZWlnaHQ6IDczNnB4KSBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kICgtd2Via2l0LWRldmljZS1waXhlbC1yYXRpbzogMikge1xyXG4gIC8qIFN0eWxlcyAqL1xyXG4gIC5hQ3VzdG9tIHtcclxuICAgIHdpZHRoOiAzMDRweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbn1cclxuXHJcbi8qIGlQaG9uZSA2LCA3LCA4IC0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiA2NjdweCkgYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAoLXdlYmtpdC1kZXZpY2UtcGl4ZWwtcmF0aW86IDIpIHtcclxuICAvKiBTdHlsZXMgKi9cclxuICAuYUN1c3RvbSB7XHJcbiAgICB3aWR0aDogMzE2cHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0MTRweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogNzM2cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XHJcbiAgLyogU3R5bGVzICovXHJcbiAgLmFDdXN0b20ge1xyXG4gICAgd2lkdGg6IDMxMnB4O1xyXG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi8qIGlQaG9uZSA2LCA3LCA4IC0tLS0tLS0tLS0tICovXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDM3NXB4KSBhbmQgKG1heC1kZXZpY2UtaGVpZ2h0OiA2NjdweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XHJcbiAgLyogU3R5bGVzICovXHJcbiAgLmFDdXN0b20ge1xyXG4gICAgd2lkdGg6IDMxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiAzMjBweCkgYW5kIChtYXgtZGV2aWNlLWhlaWdodDogNTY4cHgpIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKC13ZWJraXQtZGV2aWNlLXBpeGVsLXJhdGlvOiAyKSB7XHJcbiAgLyogU3R5bGVzICovXHJcbiAgLmFDdXN0b20ge1xyXG4gICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "QX6l");
/* harmony import */ var _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/loader/loader.component */ "o7am");
/* harmony import */ var _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/loader/loader.service */ "Cdxl");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");
















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ providers: [{ provide: 'apiBase', useValue: '' }, _shared_loader_loader_service__WEBPACK_IMPORTED_MODULE_10__["LoaderService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"].register('./ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:30000',
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
        _shared_loader_loader_component__WEBPACK_IMPORTED_MODULE_9__["LoaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"]] }); })();


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
    } }, styles: [".footer[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  background-color: black;\r\n  \r\n  text-align: center;\r\n  z-index: 10;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAvKiBjb2xvcjogYmxhY2s7ICovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHotaW5kZXg6IDEwO1xyXG59XHJcbiJdfQ== */"] });


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
    ngOnInit() { }
    gotoPortfolio() {
        window.open('http://laxmichand.surge.sh/', '_blank');
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, "footer"], ["data-toggle", "tooltip", "title", "More About me!", 1, "bi", "bi-info-circle", "infoIcn", 3, "click"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_i_click_2_listener() { return ctx.gotoPortfolio(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  left: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  background-color: black;\r\n  \r\n  text-align: center;\r\n  z-index: 10;\r\n}\r\n\r\n.infoIcn[_ngcontent-%COMP%] {\r\n  color: orange;\r\n  cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIC8qIGNvbG9yOiBibGFjazsgKi9cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMTA7XHJcbn1cclxuXHJcbi5pbmZvSWNuIHtcclxuICBjb2xvcjogb3JhbmdlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4iXX0= */"] });


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