function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/create-company/create-company.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/create-company/create-company.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminCreateCompanyCreateCompanyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"example-form div2 animated bounceInRight\"\n      (ngSubmit)=\"onSubmit()\"\n>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           placeholder=\"Company name\"\n           [formControl]=\"form.get('name')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('name').hasError('minlength') && !form.get('name').hasError('required')\">\n      Please enter a valid name (Minimum length: 4)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('name').hasError('maxlength') && !form.get('name').hasError('required')\">\n      Please enter a valid name (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('name').hasError('required')\">\n      Name is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           placeholder=\"Email\"\n           [formControl]=\"form.get('email')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('email').hasError('email') && !form.get('email').hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"form.get('email').hasError('maxlength') && !form.get('email').hasError('required')\">\n      Please enter a valid email (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('email').hasError('required')\">\n      Email is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           type=\"password\"\n           placeholder=\"Password\"\n           [formControl]=\"form.get('password')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('password').hasError('minlength') && !form.get('password').hasError('required')\">\n      Please enter a valid password (Minimum length: 4)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('password').hasError('maxlength') && !form.get('password').hasError('required')\">\n      Please enter a valid password (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('password').hasError('required')\">\n      Password is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <button mat-button class=\"button2\" [disabled]=\"form.invalid\">Add</button>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/create-coupon/create-coupon.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/create-coupon/create-coupon.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminCreateCouponCreateCouponComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"example-form div2 animated bounceInRight\"\n      (ngSubmit)=\"onSubmit()\"\n>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           placeholder=\"Title\"\n           [formControl]=\"form.get('title')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('title').hasError('minlength') && !form.get('title').hasError('required')\">\n      Please enter a valid title (Minimum length: 4)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('title').hasError('maxlength') && !form.get('title').hasError('required')\">\n      Please enter a valid title (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('title').hasError('required')\">\n      Title is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field style=\"width: 50%\" color=\"accent\">\n    <mat-label>Start date</mat-label>\n    <input matInput\n           type=\"date\"\n           [matDatepicker]=\"startDate\"\n           [formControl]=\"form.get('startDate')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('startDate').hasError('required')\">\n      Start date is <strong>required</strong>\n    </mat-error>\n    <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\n    <mat-datepicker #startDate></mat-datepicker>\n  </mat-form-field>\n  <mat-form-field style=\"width: 50%\" color=\"accent\">\n    <mat-label>End date</mat-label>\n    <input matInput\n           type=\"date\"\n           [matDatepicker]=\"endDate\"\n           [formControl]=\"form.get('endDate')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('endDate').hasError('required')\">\n      End date is <strong>required</strong>\n    </mat-error>\n    <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n    <mat-datepicker #endDate color=\"primary\"></mat-datepicker>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           type=\"number\"\n           placeholder=\"Amount\"\n           [formControl]=\"form.get('amount')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('amount').hasError('min') && !form.get('amount').hasError('required')\">\n      Please enter a valid amount (Minimum: 1)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('amount').hasError('required')\">\n      Amount is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field>\n    <mat-select\n      placeholder=\"Coupon type\"\n      [formControl]=\"form.get('couponType')\"\n    >\n      <mat-option *ngFor=\"let coupon of coupons\" [value]=\"coupon.value\">\n        {{coupon.value}}\n      </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"form.get('couponType').hasError('required')\">\n      Coupon type is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           placeholder=\"Message\"\n           [formControl]=\"form.get('message')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('message').hasError('minlength') && !form.get('message').hasError('required')\">\n      Please enter a valid message (Minimum length: 4)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('message').hasError('maxlength') && !form.get('message').hasError('required')\">\n      Please enter a valid message (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('message').hasError('required')\">\n      Message is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           type=\"number\"\n           placeholder=\"Price\"\n           [formControl]=\"form.get('price')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('price').hasError('min') && !form.get('price').hasError('required')\">\n      Please enter a valid price (Minimum: 1)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('price').hasError('required')\">\n      Price is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           type=\"number\"\n           placeholder=\"Company ID\"\n           [formControl]=\"form.get('companyId')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('companyId').hasError('required')\">\n      Company ID is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <button mat-button class=\"button2\" [disabled]=\"form.invalid\">Add</button>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/create-customer/create-customer.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/create-customer/create-customer.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminCreateCustomerCreateCustomerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"example-form div2 animated bounceInRight\"\n      (ngSubmit)=\"onSubmit()\"\n>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           placeholder=\"Customer name\"\n           [formControl]=\"form.get('name')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('name').hasError('minlength') && !form.get('name').hasError('required')\">\n      Please enter a valid name (Minimum length: 4)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('name').hasError('maxlength') && !form.get('name').hasError('required')\">\n      Please enter a valid name (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('name').hasError('required')\">\n      Name is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           placeholder=\"Email\"\n           [formControl]=\"form.get('email')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('email').hasError('email') && !form.get('email').hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"form.get('email').hasError('maxlength') && !form.get('email').hasError('required')\">\n      Please enter a valid email (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('email').hasError('required')\">\n      Email is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           type=\"password\"\n           placeholder=\"Password\"\n           [formControl]=\"form.get('password')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('password').hasError('minlength') && !form.get('password').hasError('required')\">\n      Please enter a valid password (Minimum length: 4)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('password').hasError('maxlength') && !form.get('password').hasError('required')\">\n      Please enter a valid password (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('password').hasError('required')\">\n      Password is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <button mat-button class=\"button2\" [disabled]=\"form.invalid\">Add</button>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/get-companies/get-companies.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/get-companies/get-companies.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminGetCompaniesGetCompaniesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Company Table</h3>\n<form class=\"div2 animated bounceInRight\">\n  <mat-form-field>\n    <input matInput (keyup)=\"companyFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n\n  <table mat-table [dataSource]=\"companySource\" multiTemplateDataRows class=\"mat-elevation-z8\">\n\n    <ng-container matColumnDef=\"name\">\n      <th mat-header-cell *matHeaderCellDef>Name</th>\n      <td mat-cell *matCellDef=\"let element\">{{element.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"password\">\n      <th mat-header-cell *matHeaderCellDef>Password</th>\n      <td mat-cell *matCellDef=\"let element\">{{element.password}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"email\">\n      <th mat-header-cell *matHeaderCellDef>Email</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n    </ng-container>\n\n\n\n\n\n    <ng-container matColumnDef=\"expandedDetail\">\n      <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"companyColumns.length\">\n        <div class=\"example-element-detail\"\n             [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n          <div class=\"example-element-description\">\n            <button mat-stroked-button class=\"button3\"\n                    (click)=\"onShowUpdate()\"\n            >Update\n            </button>\n            <br>\n            <button mat-stroked-button class=\"button3\"\n                    (click)=\"onDelete(element.id)\"\n            >Remove\n            </button>\n            <br>\n            <form *ngIf=\"showUpdate\" class=\"example-form div2 animated bounceInUp faster\"\n                  (ngSubmit)=\"onUpdate(element.id)\"\n            >\n              <mat-form-field class=\"example-full-width\">\n                <input matInput\n                       placeholder=\"Name\"\n                       [formControl]=\"form.get('name')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error *ngIf=\"form.get('name').hasError('minlength') && !form.get('name').hasError('required')\">\n                  Please enter a valid name (Minimum length: 4)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('name').hasError('maxlength') && !form.get('name').hasError('required')\">\n                  Please enter a valid name (Maximum length: 20)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('name').hasError('required')\">\n                  Name is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <br>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput\n                       placeholder=\"Email\"\n                       [formControl]=\"form.get('email')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error *ngIf=\"form.get('email').hasError('email') && !form.get('email').hasError('required')\">\n                  Please enter a valid email address\n                </mat-error>\n                <mat-error *ngIf=\"form.get('email').hasError('maxlength') && !form.get('email').hasError('required')\">\n                  Please enter a valid email (Maximum length: 20)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('email').hasError('required')\">\n                  Email is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <br>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput\n                       type=\"password\"\n                       placeholder=\"Password\"\n                       [formControl]=\"form.get('password')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error\n                  *ngIf=\"form.get('password').hasError('minlength') && !form.get('password').hasError('required')\">\n                  Please enter a valid password (Minimum length: 4)\n                </mat-error>\n                <mat-error\n                  *ngIf=\"form.get('password').hasError('maxlength') && !form.get('password').hasError('required')\">\n                  Please enter a valid password (Maximum length: 20)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('password').hasError('required')\">\n                  Password is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <button mat-button class=\"button2\" [disabled]=\"form.invalid\">Update</button>\n            </form>\n          </div>\n        </div>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"companyColumns\"></tr>\n    <tr mat-row *matRowDef=\"let element; columns: companyColumns;\"\n        class=\"example-element-row\"\n        [class.example-expanded-row]=\"expandedElement === element\"\n        (click)=\"expandedElement = expandedElement === element ? null : element\">\n    </tr>\n    <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n  </table>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/get-coupons/get-coupons.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/get-coupons/get-coupons.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminGetCouponsGetCouponsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Coupon Table</h3>\n<form class=\"div2 animated bounceInRight\">\n  <mat-form-field>\n    <input matInput (keyup)=\"couponFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n\n  <table mat-table [dataSource]=\"couponSource\" multiTemplateDataRows class=\"mat-elevation-z8\">\n\n    <ng-container matColumnDef=\"title\">\n      <th mat-header-cell *matHeaderCellDef>Title</th>\n      <td mat-cell *matCellDef=\"let element\">{{element.title}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"startDate\">\n      <th mat-header-cell *matHeaderCellDef>Creation Date</th>\n      <td mat-cell *matCellDef=\"let element\">{{element.startDate}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"endDate\">\n      <th mat-header-cell *matHeaderCellDef>Experation Date</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.endDate}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"amount\">\n      <th mat-header-cell *matHeaderCellDef>Amount</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.amount}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"couponType\">\n      <th mat-header-cell *matHeaderCellDef>Coupon Type</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.couponType}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"message\">\n      <th mat-header-cell *matHeaderCellDef>Message</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.message}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"price\">\n      <th mat-header-cell *matHeaderCellDef>Price</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"companyId\">\n      <th mat-header-cell *matHeaderCellDef>Company ID</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.companyId}} </td>\n    </ng-container>\n\n\n<!-- ['title', 'startDate', 'endDate', 'amount', 'couponType', 'message', 'price', 'companyId'] -->\n\n\n    <ng-container matColumnDef=\"expandedDetail\">\n      <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"couponColumns.length\">\n        <div class=\"example-element-detail\"\n             [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n          <div class=\"example-element-description\">\n            <button mat-stroked-button class=\"button3\"\n                    (click)=\"onShowUpdate()\"\n            >Update\n            </button>\n            <br>\n            <button mat-stroked-button class=\"button3\"\n                    (click)=\"onDelete(element.id)\"\n            >Remove\n            </button>\n            <br>\n            <form *ngIf=\"showUpdate\" class=\"example-form div2 animated bounceInUp faster\"\n                  (ngSubmit)=\"onUpdate(element.id)\"\n            >\n              <mat-form-field class=\"example-full-width\">\n                <input matInput\n                       placeholder=\"Title\"\n                       [formControl]=\"form.get('Title')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error *ngIf=\"form.get('Title').hasError('minlength') && !form.get('Title').hasError('required')\">\n                  Please enter a valid title (Minimum length: 4)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('Title').hasError('maxlength') && !form.get('Title').hasError('required')\">\n                  Please enter a valid title (Maximum length: 20)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('Title').hasError('required')\">\n                  Title is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <br>\n              <mat-form-field style=\"width: 50%\" color=\"accent\">\n                <mat-label>Start date</mat-label>\n                <input matInput\n                       type=\"date\"\n                       [matDatepicker]=\"startDate\"\n                       [formControl]=\"form.get('startDate')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error *ngIf=\"form.get('startDate').hasError('required')\">\n                  Start date is <strong>required</strong>\n                </mat-error>\n                <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\n                <mat-datepicker #startDate></mat-datepicker>\n              </mat-form-field>\n              <mat-form-field style=\"width: 50%\" color=\"accent\">\n                <mat-label>End date</mat-label>\n                <input matInput\n                       type=\"date\"\n                       [matDatepicker]=\"endDate\"\n                       [formControl]=\"form.get('endDate')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error *ngIf=\"form.get('endDate').hasError('required')\">\n                  End date is <strong>required</strong>\n                </mat-error>\n                <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n                <mat-datepicker #endDate color=\"primary\"></mat-datepicker>\n              </mat-form-field>\n              <br>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput\n                       type=\"number\"\n                       placeholder=\"Amount\"\n                       [formControl]=\"form.get('amount')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error *ngIf=\"form.get('amount').hasError('min') && !form.get('amount').hasError('required')\">\n                  Please enter a valid amount (Minimum: 1)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('amount').hasError('required')\">\n                  Amount is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <br>\n              <mat-form-field>\n                <mat-select\n                  placeholder=\"Coupon type\"\n                  [formControl]=\"form.get('couponType')\"\n                >\n                  <mat-option *ngFor=\"let coupon of coupons\" [value]=\"coupon.value\">\n                    {{coupon.value}}\n                  </mat-option>\n                </mat-select>\n                <mat-error *ngIf=\"form.get('couponType').hasError('required')\">\n                  Coupon type is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <br>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput\n                       placeholder=\"Message\"\n                       [formControl]=\"form.get('message')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error\n                  *ngIf=\"form.get('message').hasError('minlength') && !form.get('message').hasError('required')\">\n                  Please enter a valid message (Minimum length: 4)\n                </mat-error>\n                <mat-error\n                  *ngIf=\"form.get('message').hasError('maxlength') && !form.get('message').hasError('required')\">\n                  Please enter a valid message (Maximum length: 20)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('message').hasError('required')\">\n                  Message is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <br>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput\n                       type=\"number\"\n                       placeholder=\"Price\"\n                       [formControl]=\"form.get('price')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error *ngIf=\"form.get('price').hasError('min') && !form.get('price').hasError('required')\">\n                  Please enter a valid price (Minimum: 1)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('price').hasError('required')\">\n                  Price is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <br>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput\n                       type=\"number\"\n                       placeholder=\"Company ID\"\n                       [formControl]=\"form.get('companyId')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error *ngIf=\"form.get('companyId').hasError('required')\">\n                  Company ID is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <button mat-button class=\"button2\" [disabled]=\"form.invalid\">Update</button>\n            </form>\n          </div>\n        </div>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"couponColumns\"></tr>\n    <tr mat-row *matRowDef=\"let element; columns: couponColumns;\"\n        class=\"example-element-row\"\n        [class.example-expanded-row]=\"expandedElement === element\"\n        (click)=\"expandedElement = expandedElement === element ? null : element\">\n    </tr>\n    <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n  </table>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/get-customers/get-customers.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/get-customers/get-customers.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminGetCustomersGetCustomersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Customer Table</h3>\n<div class=\"div2 animated bounceInRight\">\n  <mat-form-field>\n    <input matInput (keyup)=\"customerFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n\n   <table mat-table [dataSource]=\"customerSource\" multiTemplateDataRows class=\"mat-elevation-z8\">\n\n     <ng-container matColumnDef=\"name\">\n       <th mat-header-cell *matHeaderCellDef>Name</th>\n       <td mat-cell *matCellDef=\"let element\">{{element.name}} </td>\n     </ng-container>\n\n     <ng-container matColumnDef=\"password\">\n       <th mat-header-cell *matHeaderCellDef>Password</th>\n       <td mat-cell *matCellDef=\"let element\">{{element.password}} </td>\n     </ng-container>\n\n     <ng-container matColumnDef=\"email\">\n       <th mat-header-cell *matHeaderCellDef>Email</th>\n       <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n     </ng-container>\n\n\n\n\n\n    <ng-container matColumnDef=\"expandedDetail\">\n      <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"customerColumns.length\">\n        <div class=\"example-element-detail\"\n             [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n          <div class=\"example-element-description\">\n            <button mat-stroked-button class=\"button3\"\n                    (click)=\"onShowUpdate()\"\n            >Update\n            </button>\n            <br>\n            <button mat-stroked-button class=\"button3\"\n                    (click)=\"onDelete(element.id)\"\n            >Remove\n            </button>\n            <br>\n            <form *ngIf=\"showUpdate\" class=\"example-form div2 animated bounceInUp faster\"\n                  (ngSubmit)=\"onUpdate(element.id)\"\n            >\n              <mat-form-field class=\"example-full-width\">\n                <input matInput\n                       placeholder=\"Name\"\n                       [formControl]=\"form.get('name')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error *ngIf=\"form.get('name').hasError('minlength') && !form.get('name').hasError('required')\">\n                  Please enter a valid name (Minimum length: 4)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('name').hasError('maxlength') && !form.get('name').hasError('required')\">\n                  Please enter a valid name (Maximum length: 20)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('name').hasError('required')\">\n                  Name is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <br>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput\n                       placeholder=\"Email\"\n                       [formControl]=\"form.get('email')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error *ngIf=\"form.get('email').hasError('email') && !form.get('email').hasError('required')\">\n                  Please enter a valid email address\n                </mat-error>\n                <mat-error *ngIf=\"form.get('email').hasError('maxlength') && !form.get('email').hasError('required')\">\n                  Please enter a valid email (Maximum length: 20)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('email').hasError('required')\">\n                  Email is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <br>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput\n                       type=\"password\"\n                       placeholder=\"Password\"\n                       [formControl]=\"form.get('password')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error\n                  *ngIf=\"form.get('password').hasError('minlength') && !form.get('password').hasError('required')\">\n                  Please enter a valid password (Minimum length: 4)\n                </mat-error>\n                <mat-error\n                  *ngIf=\"form.get('password').hasError('maxlength') && !form.get('password').hasError('required')\">\n                  Please enter a valid password (Maximum length: 20)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('password').hasError('required')\">\n                  Password is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <button mat-button class=\"button2\" [disabled]=\"form.invalid\">Update</button>\n            </form>\n          </div>\n        </div>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"customerColumns\"></tr>\n    <tr mat-row *matRowDef=\"let element; columns: customerColumns;\"\n        class=\"example-element-row\"\n        [class.example-expanded-row]=\"expandedElement === element\"\n        (click)=\"expandedElement = expandedElement === element ? null : element\">\n    </tr>\n    <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n  </table>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/get-incomes/get-incomes.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/get-incomes/get-incomes.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminGetIncomesGetIncomesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Income Table</h3>\n<form class=\"div2 animated bounceInRight\">\n  <mat-form-field>\n    <input matInput (keyup)=\"incomeFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n\n  <table mat-table [dataSource]=\"incomeSource\" class=\"mat-elevation-z8\">\n\n    <!-- Company name column -->\n    <ng-container matColumnDef=\"companyName\">\n      <th mat-header-cell *matHeaderCellDef>Company Name</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.companyName}} </td>\n    </ng-container>\n\n    <!-- Customer name column -->\n    <ng-container matColumnDef=\"customerName\">\n      <th mat-header-cell *matHeaderCellDef>Customer Name</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.customerName}} </td>\n    </ng-container>\n\n    <!-- Date column -->\n    <ng-container matColumnDef=\"date\">\n      <th mat-header-cell *matHeaderCellDef>@ Date</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.date}} </td>\n    </ng-container>\n\n    <!-- ExperationDate column\n    <ng-container matColumnDef=\"expDate\">\n      <th mat-header-cell *matHeaderCellDef>ExperationDate</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.expDate}} </td>\n    </ng-container> -->\n\n    <!-- Description column -->\n    <ng-container matColumnDef=\"description\">\n      <th mat-header-cell *matHeaderCellDef>Description</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.description}} </td>\n    </ng-container>\n\n      <!-- Price column -->\n      <ng-container matColumnDef=\"price\">\n       <th mat-header-cell *matHeaderCellDef>Price</th>\n       <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\n      </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"incomeColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: incomeColumns;\"></tr>\n  </table>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/company/create-company-coupon/create-company-coupon.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/create-company-coupon/create-company-coupon.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCompanyCreateCompanyCouponCreateCompanyCouponComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Create Coupon</h3>\n\n<form class=\"example-form div2 animated bounceInRight\"\n      (ngSubmit)=\"onSubmit()\">\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           placeholder=\"Title\"\n           [formControl]=\"form.get('title')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('title').hasError('minlength') && !form.get('title').hasError('required')\">\n      Please enter a valid title (Minimum length: 4)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('title').hasError('maxlength') && !form.get('title').hasError('required')\">\n      Please enter a valid title (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('title').hasError('required')\">\n      Title is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field style=\"width: 50%\" color=\"accent\">\n    <input matInput\n           placeholder=\"Start date\"\n           [formControl]=\"form.get('startDate')\"\n           [errorStateMatcher]=\"matcher\"\n           [matDatepicker]=\"startDate\"\n    >\n    <mat-error *ngIf=\"form.get('startDate').hasError('required')\">\n      Start date is <strong>required</strong>\n    </mat-error>\n    <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\n    <mat-datepicker #startDate></mat-datepicker>\n  </mat-form-field>\n  <mat-form-field style=\"width: 50%\" color=\"accent\">\n    <input matInput\n           placeholder=\"End date\"\n           [formControl]=\"form.get('endDate')\"\n           [errorStateMatcher]=\"matcher\"\n           [matDatepicker]=\"endDate\"\n    >\n    <mat-error *ngIf=\"form.get('endDate').hasError('required')\">\n      End date is <strong>required</strong>\n    </mat-error>\n    <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n    <mat-datepicker #endDate color=\"primary\"></mat-datepicker>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           type=\"number\"\n           placeholder=\"Amount\"\n           [formControl]=\"form.get('amount')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('amount').hasError('min') && !form.get('amount').hasError('required')\">\n      Please enter a valid amount (Minimum: 1)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('amount').hasError('required')\">\n      Amount is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field>\n    <mat-select\n      placeholder=\"Coupon type\"\n      [formControl]=\"form.get('couponType')\"\n    >\n      <mat-option *ngFor=\"let coupon of coupons\" [value]=\"coupon.value\">\n        {{coupon.value}}\n      </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"form.get('couponType').hasError('required')\">\n      Coupon type is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           placeholder=\"Message\"\n           [formControl]=\"form.get('message')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('message').hasError('minlength') && !form.get('message').hasError('required')\">\n      Please enter a valid message (Minimum length: 4)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('message').hasError('maxlength') && !form.get('message').hasError('required')\">\n      Please enter a valid message (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('message').hasError('required')\">\n      Message is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           type=\"number\"\n           placeholder=\"Price\"\n           [formControl]=\"form.get('price')\"\n           [errorStateMatcher]=\"matcher\"\n    >\n    <mat-error *ngIf=\"form.get('price').hasError('min') && !form.get('price').hasError('required')\">\n      Please enter a valid price (Minimum: 1)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('price').hasError('required')\">\n      Price is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <button mat-button class=\"button2\" [disabled]=\"form.invalid\">Add</button>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/company/get-company-coupons/get-company-coupons.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/company/get-company-coupons/get-company-coupons.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCompanyGetCompanyCouponsGetCompanyCouponsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Company's Coupon Table </h3>\n\n<form class=\"div2 animated bounceInRight\">\n  <mat-form-field>\n    <input matInput (keyup)=\"couponFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n\n<table mat-table [dataSource]=\"couponSource\" multiTemplateDataRows class=\"mat-elevation-z8\">\n\n  <ng-container matColumnDef=\"title\">\n    <th mat-header-cell *matHeaderCellDef>Title</th>\n    <td mat-cell *matCellDef=\"let element\">{{element.title}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"startDate\">\n    <th mat-header-cell *matHeaderCellDef>Creation Date</th>\n    <td mat-cell *matCellDef=\"let element\">{{element.startDate}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"endDate\">\n    <th mat-header-cell *matHeaderCellDef>Experation Date</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.endDate}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"amount\">\n    <th mat-header-cell *matHeaderCellDef>Amount</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.amount}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"couponType\">\n    <th mat-header-cell *matHeaderCellDef>Coupon Type</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.couponType}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"message\">\n    <th mat-header-cell *matHeaderCellDef>Message</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.message}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"price\">\n    <th mat-header-cell *matHeaderCellDef>Price</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\n  </ng-container>\n\n  <ng-container matColumnDef=\"companyId\">\n    <th mat-header-cell *matHeaderCellDef>Company ID</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.companyId}} </td>\n  </ng-container>\n\n\n\n    <ng-container matColumnDef=\"expandedDetail\">\n      <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"couponColumns.length\">\n        <div class=\"example-element-detail\"\n             [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n          <div class=\"example-element-description\">\n            <button mat-stroked-button class=\"button3\"\n                    (click)=\"onShowUpdate()\"\n            >Update\n            </button>\n            <button mat-stroked-button class=\"button3\"\n                    (click)=\"onDelete(element.id)\"\n            >Remove\n            </button>\n            <br>\n            <form *ngIf=\"showUpdate\" class=\"example-form div2 animated bounceInUp faster\"\n                  (ngSubmit)=\"onUpdate(element.id)\"\n            >\n              <mat-form-field color=\"accent\">\n                <mat-label>End date</mat-label>\n                <input matInput\n                       [matDatepicker]=\"endDate\"\n                       [formControl]=\"form.get('endDate')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error *ngIf=\"form.get('endDate').hasError('required')\">\n                  End date is <strong>required</strong>\n                </mat-error>\n                <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\n                <mat-datepicker #endDate color=\"primary\"></mat-datepicker>\n              </mat-form-field>\n              <br>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput\n                       type=\"number\"\n                       placeholder=\"Price\"\n                       [formControl]=\"form.get('price')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error *ngIf=\"form.get('price').hasError('min') && !form.get('price').hasError('required')\">\n                  Please enter a valid price (Minimum: 1)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('price').hasError('required')\">\n                  Price is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <br>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput\n                       type=\"number\"\n                       placeholder=\"Amount\"\n                       [formControl]=\"form.get('amount')\"\n                       [errorStateMatcher]=\"matcher\"\n                >\n                <mat-error *ngIf=\"form.get('amount').hasError('min') && !form.get('amount').hasError('required')\">\n                  Please enter a valid amount (Minimum: 1)\n                </mat-error>\n                <mat-error *ngIf=\"form.get('amount').hasError('required')\">\n                  Amount is <strong>required</strong>\n                </mat-error>\n              </mat-form-field>\n              <button mat-button class=\"button2\" [disabled]=\"form.invalid\">Update</button>\n            </form>\n          </div>\n        </div>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"couponColumns\"></tr>\n    <tr mat-row *matRowDef=\"let element; columns: couponColumns;\"\n        class=\"example-element-row\"\n        [class.example-expanded-row]=\"expandedElement === element\"\n        (click)=\"expandedElement = expandedElement === element ? null : element\">\n    </tr>\n    <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n  </table>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/get-customer-coupons/get-customer-coupons.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/get-customer-coupons/get-customer-coupons.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomerGetCustomerCouponsGetCustomerCouponsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>My Coupons</h3>\n\n<form class=\"div2 animated bounceInRight\">\n  <mat-form-field>\n    <input matInput (keyup)=\"couponFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n\n  <table mat-table [dataSource]=\"couponSource\" class=\"mat-elevation-z8\">\n\n    <!-- Title column -->\n    <ng-container matColumnDef=\"title\">\n      <th mat-header-cell *matHeaderCellDef>Title</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.title}} </td>\n    </ng-container>\n\n    <!-- Start date column -->\n    <ng-container matColumnDef=\"startDate\">\n      <th mat-header-cell *matHeaderCellDef>Creation Date</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.startDate}} </td>\n    </ng-container>\n\n    <!-- End date column -->\n    <ng-container matColumnDef=\"endDate\">\n      <th mat-header-cell *matHeaderCellDef>Experation Date</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.endDate}} </td>\n    </ng-container>\n\n    <!-- Amount column -->\n    <ng-container matColumnDef=\"amount\">\n      <th mat-header-cell *matHeaderCellDef>Amount</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.amount}} </td>\n    </ng-container>\n\n    <!-- Type column -->\n    <ng-container matColumnDef=\"couponType\">\n      <th mat-header-cell *matHeaderCellDef>Coupon Type</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.couponType}} </td>\n    </ng-container>\n\n    <!-- Message column -->\n    <ng-container matColumnDef=\"message\">\n      <th mat-header-cell *matHeaderCellDef>Message</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.message}} </td>\n    </ng-container>\n\n    <!-- Price column -->\n    <ng-container matColumnDef=\"price\">\n      <th mat-header-cell *matHeaderCellDef>Price</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\n    </ng-container>\n\n    <!-- Image column -->\n    <ng-container matColumnDef=\"image\">\n      <th mat-header-cell *matHeaderCellDef>Image</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.image}} </td>\n    </ng-container>\n\n\n\n\n\n    <tr mat-header-row *matHeaderRowDef=\"couponColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: couponColumns;\"></tr>\n  </table>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/purchase-coupon/purchase-coupon.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/customer/purchase-coupon/purchase-coupon.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCustomerPurchaseCouponPurchaseCouponComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h3>Available Coupons Table</h3>\n\n<form class=\"div2 animated bounceInRight\">\n  <mat-form-field>\n    <input matInput (keyup)=\"couponFilter($event.target.value)\" placeholder=\"Filter\">\n  </mat-form-field>\n\n  <table mat-table [dataSource]=\"couponSource\" multiTemplateDataRows class=\"mat-elevation-z8\">\n\n    <ng-container matColumnDef=\"title\">\n      <th mat-header-cell *matHeaderCellDef>Title</th>\n      <td mat-cell *matCellDef=\"let element\">{{element.title}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"startDate\">\n      <th mat-header-cell *matHeaderCellDef>Creation Date</th>\n      <td mat-cell *matCellDef=\"let element\">{{element.startDate}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"endDate\">\n      <th mat-header-cell *matHeaderCellDef>Experation Date</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.endDate}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"amount\">\n      <th mat-header-cell *matHeaderCellDef>Amount</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.amount}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"couponType\">\n      <th mat-header-cell *matHeaderCellDef>Coupon Type</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.couponType}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"message\">\n      <th mat-header-cell *matHeaderCellDef>Message</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.message}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"price\">\n      <th mat-header-cell *matHeaderCellDef>Price</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"companyId\">\n      <th mat-header-cell *matHeaderCellDef>Company ID</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.companyId}} </td>\n    </ng-container>\n\n\n\n    <ng-container matColumnDef=\"expandedDetail\">\n      <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"couponColumns.length\">\n        <div class=\"example-element-detail\"\n             [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n          <div class=\"example-element-description\">\n            <button mat-stroked-button class=\"button3\"\n                    (click)=\"onPurchase(element.id)\"\n            >Purchase\n            </button>\n          </div>\n        </div>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"couponColumns\"></tr>\n    <tr mat-row *matRowDef=\"let element; columns: couponColumns;\"\n        class=\"example-element-row\"\n        [class.example-expanded-row]=\"expandedElement === element\"\n        (click)=\"expandedElement = expandedElement === element ? null : element\">\n    </tr>\n    <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n  </table>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"div1 animated fadeIn slow\" (ngSubmit)=\"onSubmit()\">\n  <mat-form-field class=\"example-full-width\">\n    <input\n      matInput\n      placeholder=\"Username\"\n      [formControl]=\"form.get('name')\"\n      [errorStateMatcher]=\"matcher\"\n    />\n    <mat-error\n      *ngIf=\"\n        form.get('name').hasError('minlength') &&\n        !form.get('name').hasError('required')\n      \"\n    >\n      Please enter a valid username (Minimum length: 4)\n    </mat-error>\n    <mat-error\n      *ngIf=\"\n        form.get('name').hasError('maxlength') &&\n        !form.get('name').hasError('required')\n      \"\n    >\n      Please enter a valid username (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('name').hasError('required')\">\n      Username is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br />\n  <mat-form-field class=\"example-full-width\">\n    <input\n      matInput\n      type=\"password\"\n      placeholder=\"Password\"\n      [formControl]=\"form.get('password')\"\n      [errorStateMatcher]=\"matcher\"\n    />\n    <mat-error\n      *ngIf=\"\n        form.get('password').hasError('minlength') &&\n        !form.get('password').hasError('required')\n      \"\n    >\n      Please enter a valid password (Minimum length: 4)\n    </mat-error>\n    <mat-error\n      *ngIf=\"\n        form.get('password').hasError('maxlength') &&\n        !form.get('password').hasError('required')\n      \"\n    >\n      Please enter a valid password (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('password').hasError('required')\">\n      Password is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br />\n  <mat-form-field>\n    <mat-select\n      placeholder=\"Client type\"\n      [formControl]=\"form.get('clientType')\"\n    >\n      <mat-option *ngFor=\"let client of clients\" [value]=\"client.value\">\n        {{ client.value }}\n      </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"form.get('clientType').hasError('required')\">\n      Client type is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br />\n  <button mat-button [disabled]=\"form.invalid || form.disabled\">Sing in</button>\n  <button mat-button routerLink=\"/registration\">Sing up</button>\n</form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRegistrationRegistrationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<form class=\"div1 animated fadeIn slow\"\n      (ngSubmit)=\"onSubmit()\"\n>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           placeholder=\"Email\"\n           [formControl]=\"form.get('email')\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error *ngIf=\"form.get('email').hasError('email') && !form.get('email').hasError('required')\">\n      Please enter a valid email address\n    </mat-error>\n    <mat-error *ngIf=\"form.get('email').hasError('maxlength') && !form.get('email').hasError('required')\">\n      Please enter a valid email (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('email').hasError('required')\">\n      Email is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           placeholder=\"Username\"\n           [formControl]=\"form.get('name')\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error *ngIf=\"form.get('name').hasError('minlength') && !form.get('name').hasError('required')\">\n      Please enter a valid username (Minimum length: 4)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('name').hasError('maxlength') && !form.get('name').hasError('required')\">\n      Please enter a valid username (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('name').hasError('required')\">\n      Username is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput\n           type=\"password\"\n           placeholder=\"Password\"\n           [formControl]=\"form.get('password')\"\n           [errorStateMatcher]=\"matcher\">\n    <mat-error *ngIf=\"form.get('password').hasError('minlength') && !form.get('password').hasError('required')\">\n      Please enter a valid password (Minimum length: 4)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('password').hasError('maxlength') && !form.get('password').hasError('required')\">\n      Please enter a valid password (Maximum length: 20)\n    </mat-error>\n    <mat-error *ngIf=\"form.get('password').hasError('required')\">\n      Password is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <mat-form-field>\n    <mat-select\n      placeholder=\"Client type\"\n      [formControl]=\"form.get('clientType')\"\n    >\n      <mat-option *ngFor=\"let client of clients\" [value]=\"client.value\">\n        {{client.value}}\n      </mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"form.get('clientType').hasError('required')\">\n      Client type is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n  <br>\n  <button mat-button routerLink=\"/login\">Sing in</button>\n  <button mat-button [disabled]=\"form.invalid || form.disabled\">Sing up</button>\n</form>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layouts/admin/admin.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layouts/admin/admin.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLayoutsAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container class=\"container\">\n  <mat-sidenav #sidenav [(mode)]=\"over\" [(opened)]=\"opened\" class=\"bottom-to-top\">\n    <div class=\"my-2\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\"></div>\n    <div class=\"mt-2 py-3 text-white\" fxLayout=\"column\"\n         fxLayoutAlign=\"center center\"\n         fxLayoutGap=\"7px\">\n      <div>\n        <a>\n          <span class=\"lead\">ADMIN</span>\n        </a>\n      </div>\n    </div>\n    <hr width=\"90%\">\n    <div>\n      <mat-accordion multi=\"true\" [displayMode]=\"displayMode\">\n        <mat-expansion-panel class=\"no-shadow my-0\">\n          <mat-expansion-panel-header fxLayout=\"row\" [expandedHeight]=\"expandHeight\" [collapsedHeight]=\"collapseHeight\">\n            <mat-panel-title class=\"text-white\">\n              Companies\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <mat-nav-list class=\"ml-0\" dense>\n            <mat-nav-list class=\"ml-0\" dense>\n              <button mat-button class=\"button1\" routerLink=\"/admin/create-company\">Add</button>\n              <button mat-button class=\"button1\" routerLink=\"/admin/get-companies\">Show</button>\n              <hr width=\"90%\">\n            </mat-nav-list>\n          </mat-nav-list>\n        </mat-expansion-panel>\n        <mat-expansion-panel class=\"no-shadow my-0\">\n          <mat-expansion-panel-header fxLayout=\"row\" [expandedHeight]=\"expandHeight\" [collapsedHeight]=\"collapseHeight\">\n            <mat-panel-title class=\"text-white\">\n              Customers\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <mat-nav-list class=\"ml-0\" dense>\n            <button mat-button class=\"button1\" routerLink=\"/admin/create-customer\">Add</button>\n            <button mat-button class=\"button1\" routerLink=\"/admin/get-customers\">Show</button>\n            <hr width=\"90%\">\n          </mat-nav-list>\n        </mat-expansion-panel>\n        <mat-expansion-panel class=\"no-shadow my-0\">\n          <mat-expansion-panel-header fxLayout=\"row\" [expandedHeight]=\"expandHeight\" [collapsedHeight]=\"collapseHeight\">\n            <mat-panel-title class=\"text-white\">\n              Coupons\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <mat-nav-list class=\"ml-0\" dense>\n            <button mat-button class=\"button1\" routerLink=\"/admin/create-coupon\">Add</button>\n            <button mat-button class=\"button1\" routerLink=\"/admin/get-coupons\">Show</button>\n            <hr width=\"90%\">\n          </mat-nav-list>\n        </mat-expansion-panel>\n        <button mat-button class=\"button4\" routerLink=\"/admin/get-incomes\">Incomes</button>\n      </mat-accordion>\n    </div>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\" class=\"header-box-shadow\">\n      <button mat-icon-button (click)=\"sidenav.toggle()\" fxShow.sm=\"true\" fxShow.gt-sm=\"false\">\n        <mat-icon>menu</mat-icon>\n      </button>\n      <mat-icon class=\"mr-1\">home</mat-icon>\n      <span>Coupon System</span>\n      <span class=\"spacer\"></span>\n      <button mat-button [matMenuTriggerFor]=\"menu\" fxShow.lt-md=\"false\" fxShow.gt-sm=\"true\">\n        <mat-icon>exit_to_app</mat-icon>\n        <span class=\"ml-2\">Sign out</span>\n      </button>\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\" fxShow.lt-md=\"true\" fxShow.gt-sm=\"false\">\n        <mat-menu #menu=\"matMenu\" overlapTrigger=\"false\">\n          <span class=\"sure\">Are you sure?</span>\n          <button mat-menu-item>\n            <span>No</span>\n          </button>\n          <button mat-menu-item (click)=\"auth.logout()\">\n            <span>Yes</span>\n          </button>\n        </mat-menu>\n      </button>\n    </mat-toolbar>\n\n    <router-outlet></router-outlet>\n    <div class=\"animated fadeOut slower\">\n      <h1>Welcome</h1>\n      <h2>{{date}}</h2>\n    </div>\n\n  </mat-sidenav-content>\n</mat-sidenav-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layouts/authorisation/authorisation.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layouts/authorisation/authorisation.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLayoutsAuthorisationAuthorisationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container class=\"container\">\n    <div class=\"animated fadeInDown fast\">\n      <h1>Coupon System</h1>\n    </div>\n  <router-outlet></router-outlet>\n</mat-sidenav-container>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layouts/company/company.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layouts/company/company.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLayoutsCompanyCompanyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container class=\"container\">\n  <mat-sidenav #sidenav [(mode)]=\"over\" [(opened)]=\"opened\" class=\"bottom-to-top\">\n    <div class=\"my-2\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\"></div>\n    <div class=\"mt-2 py-3 text-white\" fxLayout=\"column\"\n         fxLayoutAlign=\"center center\"\n         fxLayoutGap=\"7px\">\n      <div>\n        <a>\n          <span class=\"lead\">COMPANY</span>\n        </a>\n      </div>\n    </div>\n    <hr width=\"90%\">\n    <div>\n      <mat-nav-list>\n        <button mat-button class=\"button1\" routerLink=\"/company/create-coupon\">Add Coupon</button>\n        <button mat-button class=\"button1\" routerLink=\"/company/my-coupons\">My Coupons</button>\n      </mat-nav-list>\n    </div>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\" class=\"header-box-shadow\">\n      <button mat-icon-button (click)=\"sidenav.toggle()\" fxShow.sm=\"true\" fxShow.gt-sm=\"false\">\n        <mat-icon>menu</mat-icon>\n      </button>\n      <mat-icon class=\"mr-1\">home</mat-icon>\n      <span>Coupon System</span>\n      <span class=\"spacer\"></span>\n      <button mat-button [matMenuTriggerFor]=\"menu\" fxShow.lt-md=\"false\" fxShow.gt-sm=\"true\">\n        <mat-icon>exit_to_app</mat-icon>\n        <span class=\"ml-2\">Sign out</span>\n      </button>\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\" fxShow.lt-md=\"true\" fxShow.gt-sm=\"false\">\n        <mat-menu #menu=\"matMenu\" overlapTrigger=\"false\">\n          <span class=\"sure\">Are you sure?</span>\n          <button mat-menu-item>\n            <span>No</span>\n          </button>\n          <button mat-menu-item (click)=\"auth.logout()\">\n            <span>Yes</span>\n          </button>\n        </mat-menu>\n      </button>\n    </mat-toolbar>\n\n    <router-outlet></router-outlet>\n    <div class=\"animated fadeOut slower\">\n      <h1>Welcome</h1>\n      <h2>{{date}}</h2>\n    </div>\n\n  </mat-sidenav-content>\n</mat-sidenav-container>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layouts/customer/customer.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layouts/customer/customer.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedLayoutsCustomerCustomerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container class=\"container\">\n  <mat-sidenav #sidenav [(mode)]=\"over\" [(opened)]=\"opened\" class=\"bottom-to-top\">\n    <div class=\"my-2\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\"></div>\n    <div class=\"mt-2 py-3 text-white\" fxLayout=\"column\"\n         fxLayoutAlign=\"center center\"\n         fxLayoutGap=\"7px\">\n      <div>\n        <a>\n          <span class=\"lead\">CUSTOMER</span>\n        </a>\n      </div>\n    </div>\n    <hr width=\"90%\">\n    <div>\n      <mat-nav-list>\n        <button mat-button class=\"button1\" routerLink=\"/customer/purchase-coupon\">Purchase Coupon</button>\n        <button mat-button class=\"button1\" routerLink=\"/customer/my-coupons\">My Coupons</button>\n      </mat-nav-list>\n    </div>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <mat-toolbar color=\"primary\" class=\"header-box-shadow\">\n      <button mat-icon-button (click)=\"sidenav.toggle()\" fxShow.sm=\"true\" fxShow.gt-sm=\"false\">\n        <mat-icon>menu</mat-icon>\n      </button>\n      <mat-icon class=\"mr-1\">home</mat-icon>\n      <span>Coupon System</span>\n      <span class=\"spacer\"></span>\n      <button mat-button [matMenuTriggerFor]=\"menu\" fxShow.lt-md=\"false\" fxShow.gt-sm=\"true\">\n        <mat-icon>exit_to_app</mat-icon>\n        <span class=\"ml-2\">Sign out</span>\n      </button>\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\" fxShow.lt-md=\"true\" fxShow.gt-sm=\"false\">\n        <mat-menu #menu=\"matMenu\" overlapTrigger=\"false\">\n          <span class=\"sure\">Are you sure?</span>\n          <button mat-menu-item>\n            <span>No</span>\n          </button>\n          <button mat-menu-item (click)=\"auth.logout()\">\n            <span>Yes</span>\n          </button>\n        </mat-menu>\n      </button>\n    </mat-toolbar>\n\n    <router-outlet></router-outlet>\n    <div class=\"animated fadeOut slower\">\n      <h1>Welcome</h1>\n      <h2>{{date}}</h2>\n    </div>\n\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/page404/page404.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/page404/page404.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedPage404Page404ComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <button mat-fab color=\"primary\" routerLink=\"/login\">Home</button>\n  <img src=\"/src/app/shared/page404/404.gif\" alt=\"page 404\" class=\"center\">\n  <router-outlet></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/admin/create-company/create-company.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/admin/create-company/create-company.component.ts ***!
    \******************************************************************/

  /*! exports provided: CreateCompanyComponent */

  /***/
  function srcAppAdminCreateCompanyCreateCompanyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateCompanyComponent", function () {
      return CreateCompanyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/admin.service */
    "./src/app/shared/services/admin.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../models/errorStateMatcher */
    "./src/app/models/errorStateMatcher.ts");

    var CreateCompanyComponent =
    /*#__PURE__*/
    function () {
      function CreateCompanyComponent(admin, snackBar) {
        _classCallCheck(this, CreateCompanyComponent);

        this.admin = admin;
        this.snackBar = snackBar;
        this.matcher = new _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_5__["MyErrorStateMatcher"]();
      }

      _createClass(CreateCompanyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)])
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          this.admin.createCompany(this.form.value).subscribe(function () {
            return _this.snackBar.open('New company successfully added.', '', {
              duration: 3000
            });
          }, function (error) {
            _this.snackBar.open(error, '', {
              duration: 3000
            });
          });
        }
      }]);

      return CreateCompanyComponent;
    }();

    CreateCompanyComponent.ctorParameters = function () {
      return [{
        type: _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }];
    };

    CreateCompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-company',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-company.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/create-company/create-company.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../app/shared/layouts/admin/admin.component.css */
      "./src/app/shared/layouts/admin/admin.component.css")).default]
    })], CreateCompanyComponent);
    /***/
  },

  /***/
  "./src/app/admin/create-coupon/create-coupon.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/admin/create-coupon/create-coupon.component.ts ***!
    \****************************************************************/

  /*! exports provided: CreateCouponComponent */

  /***/
  function srcAppAdminCreateCouponCreateCouponComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateCouponComponent", function () {
      return CreateCouponComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../models/errorStateMatcher */
    "./src/app/models/errorStateMatcher.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/services/admin.service */
    "./src/app/shared/services/admin.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var CreateCouponComponent =
    /*#__PURE__*/
    function () {
      function CreateCouponComponent(admin, snackBar) {
        _classCallCheck(this, CreateCouponComponent);

        this.admin = admin;
        this.snackBar = snackBar;
        this.matcher = new _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_3__["MyErrorStateMatcher"]();
        this.coupons = [{
          value: 'FOOD'
        }, {
          value: 'SPORTS'
        }, {
          value: 'HEALTH'
        }, {
          value: 'CAMPING'
        }, {
          value: 'TRAVELLING'
        }, {
          value: 'RESTAURANTS'
        }, {
          value: 'ELECTRICITY'
        }];
      }

      _createClass(CreateCouponComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]),
            couponType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]),
            companyId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;

          var coupon = {
            title: this.form.value.title,
            startDate: new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US').transform(this.form.value.startDate, 'yyyy-MM-dd'),
            endDate: new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US').transform(this.form.value.endDate, 'yyyy-MM-dd'),
            amount: this.form.value.amount,
            couponType: this.form.value.couponType,
            message: this.form.value.message,
            price: this.form.value.price,
            companyId: this.form.value.companyId
          };
          this.admin.createCoupon(coupon).subscribe(function () {
            return _this2.snackBar.open('New coupon successfully added.', '', {
              duration: 3000
            });
          }, function (error) {
            _this2.snackBar.open(error, '', {
              duration: 3000
            });
          });
        }
      }]);

      return CreateCouponComponent;
    }();

    CreateCouponComponent.ctorParameters = function () {
      return [{
        type: _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_5__["AdminService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }];
    };

    CreateCouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-coupon',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-coupon.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/create-coupon/create-coupon.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../app/shared/layouts/company/company.component.css */
      "./src/app/shared/layouts/company/company.component.css")).default]
    })], CreateCouponComponent);
    /***/
  },

  /***/
  "./src/app/admin/create-customer/create-customer.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/admin/create-customer/create-customer.component.ts ***!
    \********************************************************************/

  /*! exports provided: CreateCustomerComponent */

  /***/
  function srcAppAdminCreateCustomerCreateCustomerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateCustomerComponent", function () {
      return CreateCustomerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/admin.service */
    "./src/app/shared/services/admin.service.ts");
    /* harmony import */


    var _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models/errorStateMatcher */
    "./src/app/models/errorStateMatcher.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var CreateCustomerComponent =
    /*#__PURE__*/
    function () {
      function CreateCustomerComponent(admin, snackBar) {
        _classCallCheck(this, CreateCustomerComponent);

        this.admin = admin;
        this.snackBar = snackBar;
        this.matcher = new _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_4__["MyErrorStateMatcher"]();
      }

      _createClass(CreateCustomerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)])
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this3 = this;

          this.admin.createCustomer(this.form.value).subscribe(function () {
            return _this3.snackBar.open('New customer successfully added.', '', {
              duration: 3000
            });
          }, function (error) {
            _this3.snackBar.open(error, '', {
              duration: 3000
            });
          });
        }
      }]);

      return CreateCustomerComponent;
    }();

    CreateCustomerComponent.ctorParameters = function () {
      return [{
        type: _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }];
    };

    CreateCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-customer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-customer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/create-customer/create-customer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../app/shared/layouts/admin/admin.component.css */
      "./src/app/shared/layouts/admin/admin.component.css")).default]
    })], CreateCustomerComponent);
    /***/
  },

  /***/
  "./src/app/admin/get-companies/get-companies.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/admin/get-companies/get-companies.component.ts ***!
    \****************************************************************/

  /*! exports provided: GetCompaniesComponent */

  /***/
  function srcAppAdminGetCompaniesGetCompaniesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetCompaniesComponent", function () {
      return GetCompaniesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/admin.service */
    "./src/app/shared/services/admin.service.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../models/errorStateMatcher */
    "./src/app/models/errorStateMatcher.ts");

    var GetCompaniesComponent =
    /*#__PURE__*/
    function () {
      function GetCompaniesComponent(admin, snackBar) {
        _classCallCheck(this, GetCompaniesComponent);

        this.admin = admin;
        this.snackBar = snackBar;
        this.companyColumns = ['name', 'password', 'email'];
        this.matcher = new _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_6__["MyErrorStateMatcher"]();
        this.showUpdate = false;
      }

      _createClass(GetCompaniesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.admin.getAllCompanies().subscribe(function (comps) {
            return _this4.companySource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](comps);
          }, function (error) {
            _this4.snackBar.open(error, '', {
              duration: 3000
            });
          });
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20)])
          });
        }
      }, {
        key: "companyFilter",
        value: function companyFilter(filterValue) {
          this.companySource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          var _this5 = this;

          this.admin.deleteCompany(id).subscribe(function () {
            return _this5.snackBar.open('Company successfully removed.', '', {
              duration: 3000
            });
          }, function (error) {
            _this5.snackBar.open(error, '', {
              duration: 3000
            });
          });
        }
      }, {
        key: "onUpdate",
        value: function onUpdate(id) {
          var _this6 = this;

          var company = {
            id: id,
            name: this.form.value.name,
            password: this.form.value.password,
            email: this.form.value.email
          };
          this.admin.updateCompany(company).subscribe(function () {
            return _this6.snackBar.open('Company successfully updated.', '', {
              duration: 3000
            });
          }, function (error) {
            _this6.snackBar.open(error, '', {
              duration: 3000
            });
          });
        }
      }, {
        key: "onShowUpdate",
        value: function onShowUpdate() {
          this.showUpdate === false ? this.showUpdate = true : this.showUpdate = false;
        }
      }]);

      return GetCompaniesComponent;
    }();

    GetCompaniesComponent.ctorParameters = function () {
      return [{
        type: _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    GetCompaniesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-get-companies',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./get-companies.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/get-companies/get-companies.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('detailExpand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        height: '0px',
        minHeight: '0',
        display: 'none'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        height: '*'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../app/shared/layouts/admin/admin.component.css */
      "./src/app/shared/layouts/admin/admin.component.css")).default]
    })], GetCompaniesComponent);
    /***/
  },

  /***/
  "./src/app/admin/get-coupons/get-coupons.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/admin/get-coupons/get-coupons.component.ts ***!
    \************************************************************/

  /*! exports provided: GetCouponsComponent */

  /***/
  function srcAppAdminGetCouponsGetCouponsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetCouponsComponent", function () {
      return GetCouponsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/admin.service */
    "./src/app/shared/services/admin.service.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../models/errorStateMatcher */
    "./src/app/models/errorStateMatcher.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var GetCouponsComponent =
    /*#__PURE__*/
    function () {
      function GetCouponsComponent(admin, snackBar) {
        _classCallCheck(this, GetCouponsComponent);

        this.admin = admin;
        this.snackBar = snackBar;
        this.couponColumns = ['title', 'startDate', 'endDate', 'amount', 'couponType', 'message', 'price', 'companyId'];
        this.matcher = new _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_6__["MyErrorStateMatcher"]();
        this.showUpdate = false;
        this.coupons = [{
          value: 'FOOD'
        }, {
          value: 'SPORTS'
        }, {
          value: 'HEALTH'
        }, {
          value: 'CAMPING'
        }, {
          value: 'TRAVELLING'
        }, {
          value: 'RESTAURANTS'
        }, {
          value: 'ELECTRICITY'
        }];
      }

      _createClass(GetCouponsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.admin.getAllCoupons().subscribe(function (coupons) {
            return _this7.couponSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](coupons);
          }, function (error) {
            _this7.snackBar.open(error, '', {
              duration: 3000
            });
          });
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20)]),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1)]),
            couponType: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20)]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1)]),
            companyId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])
          });
        }
      }, {
        key: "couponFilter",
        value: function couponFilter(filterValue) {
          this.couponSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          var _this8 = this;

          this.admin.deleteCoupon(id).subscribe(function () {
            return _this8.snackBar.open('Coupon successfully removed.', '', {
              duration: 3000
            });
          }, function (error) {
            _this8.snackBar.open(error, '', {
              duration: 3000
            });
          });
        }
      }, {
        key: "onUpdate",
        value: function onUpdate(id) {
          var _this9 = this;

          var coupon = {
            id: id,
            title: this.form.value.title,
            startDate: new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('en-US').transform(this.form.value.startDate, 'yyyy-MM-dd'),
            endDate: new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('en-US').transform(this.form.value.endDate, 'yyyy-MM-dd'),
            amount: this.form.value.amount,
            couponType: this.form.value.couponType,
            message: this.form.value.message,
            price: this.form.value.price,
            companyId: this.form.value.companyId
          };
          this.admin.updateCoupon(coupon).subscribe(function () {
            return _this9.snackBar.open('Coupon successfully updated.', '', {
              duration: 3000
            });
          }, function (error) {
            _this9.snackBar.open(error, '', {
              duration: 3000
            });
          });
        }
      }, {
        key: "onShowUpdate",
        value: function onShowUpdate() {
          this.showUpdate === false ? this.showUpdate = true : this.showUpdate = false;
        }
      }]);

      return GetCouponsComponent;
    }();

    GetCouponsComponent.ctorParameters = function () {
      return [{
        type: _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    GetCouponsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-get-coupons',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./get-coupons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/get-coupons/get-coupons.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('detailExpand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        height: '0px',
        minHeight: '0',
        display: 'none'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        height: '*'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../app/shared/layouts/admin/admin.component.css */
      "./src/app/shared/layouts/admin/admin.component.css")).default]
    })], GetCouponsComponent);
    /***/
  },

  /***/
  "./src/app/admin/get-customers/get-customers.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/admin/get-customers/get-customers.component.ts ***!
    \****************************************************************/

  /*! exports provided: GetCustomersComponent */

  /***/
  function srcAppAdminGetCustomersGetCustomersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetCustomersComponent", function () {
      return GetCustomersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/admin.service */
    "./src/app/shared/services/admin.service.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../models/errorStateMatcher */
    "./src/app/models/errorStateMatcher.ts");

    var GetCustomersComponent =
    /*#__PURE__*/
    function () {
      function GetCustomersComponent(admin, snackBar) {
        _classCallCheck(this, GetCustomersComponent);

        this.admin = admin;
        this.snackBar = snackBar;
        this.customerColumns = ['name', 'password', 'email'];
        this.matcher = new _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_6__["MyErrorStateMatcher"]();
        this.showUpdate = false;
      }

      _createClass(GetCustomersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.admin.getAllCustomers().subscribe(function (customers) {
            return _this10.customerSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](customers);
          }, function (error) {
            _this10.snackBar.open(error, '', {
              duration: 3000
            });
          });
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20)])
          });
        }
      }, {
        key: "customerFilter",
        value: function customerFilter(filterValue) {
          this.customerSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          var _this11 = this;

          this.admin.deleteCustomer(id).subscribe(function () {
            return _this11.snackBar.open('Customer successfully removed.', '', {
              duration: 3000
            });
          }, function (error) {
            _this11.snackBar.open(error, '', {
              duration: 3000
            });
          });
        }
      }, {
        key: "onUpdate",
        value: function onUpdate(id) {
          var _this12 = this;

          var customer = {
            id: id,
            name: this.form.value.name,
            password: this.form.value.password,
            email: this.form.value.email
          };
          this.admin.updateCustomer(customer).subscribe(function () {
            return _this12.snackBar.open('Customer successfully updated.', '', {
              duration: 3000
            });
          }, function (error) {
            _this12.snackBar.open(error, '', {
              duration: 3000
            });
          });
        }
      }, {
        key: "onShowUpdate",
        value: function onShowUpdate() {
          this.showUpdate === false ? this.showUpdate = true : this.showUpdate = false;
        }
      }]);

      return GetCustomersComponent;
    }();

    GetCustomersComponent.ctorParameters = function () {
      return [{
        type: _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    GetCustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-get-customers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./get-customers.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/get-customers/get-customers.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('detailExpand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        height: '0px',
        minHeight: '0',
        display: 'none'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        height: '*'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../app/shared/layouts/admin/admin.component.css */
      "./src/app/shared/layouts/admin/admin.component.css")).default]
    })], GetCustomersComponent);
    /***/
  },

  /***/
  "./src/app/admin/get-incomes/get-incomes.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/admin/get-incomes/get-incomes.component.ts ***!
    \************************************************************/

  /*! exports provided: GetIncomesComponent */

  /***/
  function srcAppAdminGetIncomesGetIncomesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetIncomesComponent", function () {
      return GetIncomesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/admin.service */
    "./src/app/shared/services/admin.service.ts");

    var GetIncomesComponent =
    /*#__PURE__*/
    function () {
      function GetIncomesComponent(admin, snackBar) {
        _classCallCheck(this, GetIncomesComponent);

        this.admin = admin;
        this.snackBar = snackBar;
        this.incomeColumns = ['companyName', 'customerName', 'description', 'date', 'price'];
      }

      _createClass(GetIncomesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.admin.getIncomes().subscribe(function (incomes) {
            return _this13.incomeSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](incomes);
          }, function (error) {
            _this13.snackBar.open(error, '', {
              duration: 3000
            });
          });
        }
      }, {
        key: "incomeFilter",
        value: function incomeFilter(filterValue) {
          this.incomeSource.filter = filterValue.trim().toLowerCase();
        }
      }]);

      return GetIncomesComponent;
    }();

    GetIncomesComponent.ctorParameters = function () {
      return [{
        type: _shared_services_admin_service__WEBPACK_IMPORTED_MODULE_3__["AdminService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    GetIncomesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-get-all-incomes',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./get-incomes.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/get-incomes/get-incomes.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../app/shared/layouts/admin/admin.component.css */
      "./src/app/shared/layouts/admin/admin.component.css")).default]
    })], GetIncomesComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shared/layouts/admin/admin.component */
    "./src/app/shared/layouts/admin/admin.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _shared_layouts_company_company_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shared/layouts/company/company.component */
    "./src/app/shared/layouts/company/company.component.ts");
    /* harmony import */


    var _shared_layouts_customer_customer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shared/layouts/customer/customer.component */
    "./src/app/shared/layouts/customer/customer.component.ts");
    /* harmony import */


    var _shared_layouts_authorisation_authorisation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shared/layouts/authorisation/authorisation.component */
    "./src/app/shared/layouts/authorisation/authorisation.component.ts");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./registration/registration.component */
    "./src/app/registration/registration.component.ts");
    /* harmony import */


    var _admin_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./admin/create-company/create-company.component */
    "./src/app/admin/create-company/create-company.component.ts");
    /* harmony import */


    var _admin_get_companies_get_companies_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./admin/get-companies/get-companies.component */
    "./src/app/admin/get-companies/get-companies.component.ts");
    /* harmony import */


    var _admin_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./admin/create-customer/create-customer.component */
    "./src/app/admin/create-customer/create-customer.component.ts");
    /* harmony import */


    var _admin_get_customers_get_customers_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./admin/get-customers/get-customers.component */
    "./src/app/admin/get-customers/get-customers.component.ts");
    /* harmony import */


    var _company_create_company_coupon_create_company_coupon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./company/create-company-coupon/create-company-coupon.component */
    "./src/app/company/create-company-coupon/create-company-coupon.component.ts");
    /* harmony import */


    var _company_get_company_coupons_get_company_coupons_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./company/get-company-coupons/get-company-coupons.component */
    "./src/app/company/get-company-coupons/get-company-coupons.component.ts");
    /* harmony import */


    var _customer_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./customer/purchase-coupon/purchase-coupon.component */
    "./src/app/customer/purchase-coupon/purchase-coupon.component.ts");
    /* harmony import */


    var _customer_get_customer_coupons_get_customer_coupons_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./customer/get-customer-coupons/get-customer-coupons.component */
    "./src/app/customer/get-customer-coupons/get-customer-coupons.component.ts");
    /* harmony import */


    var _admin_create_coupon_create_coupon_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./admin/create-coupon/create-coupon.component */
    "./src/app/admin/create-coupon/create-coupon.component.ts");
    /* harmony import */


    var _admin_get_coupons_get_coupons_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./admin/get-coupons/get-coupons.component */
    "./src/app/admin/get-coupons/get-coupons.component.ts");
    /* harmony import */


    var _shared_guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./shared/guards/admin-auth.guard */
    "./src/app/shared/guards/admin-auth.guard.ts");
    /* harmony import */


    var _shared_page404_page404_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./shared/page404/page404.component */
    "./src/app/shared/page404/page404.component.ts");
    /* harmony import */


    var _shared_guards_company_auth_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./shared/guards/company-auth.guard */
    "./src/app/shared/guards/company-auth.guard.ts");
    /* harmony import */


    var _shared_guards_customer_auth_guard__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./shared/guards/customer-auth.guard */
    "./src/app/shared/guards/customer-auth.guard.ts");
    /* harmony import */


    var _admin_get_incomes_get_incomes_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./admin/get-incomes/get-incomes.component */
    "./src/app/admin/get-incomes/get-incomes.component.ts");

    var routes = [{
      path: '',
      component: _shared_layouts_authorisation_authorisation_component__WEBPACK_IMPORTED_MODULE_7__["AuthorisationComponent"],
      children: [{
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
      }, {
        path: 'registration',
        component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_8__["RegistrationComponent"]
      }]
    }, {
      path: 'admin',
      component: _shared_layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
      canActivate: [_shared_guards_admin_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AdminAuthGuard"]],
      children: [{
        path: 'create-company',
        component: _admin_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_9__["CreateCompanyComponent"]
      }, {
        path: 'get-companies',
        component: _admin_get_companies_get_companies_component__WEBPACK_IMPORTED_MODULE_10__["GetCompaniesComponent"]
      }, {
        path: 'create-coupon',
        component: _admin_create_coupon_create_coupon_component__WEBPACK_IMPORTED_MODULE_17__["CreateCouponComponent"]
      }, {
        path: 'get-coupons',
        component: _admin_get_coupons_get_coupons_component__WEBPACK_IMPORTED_MODULE_18__["GetCouponsComponent"]
      }, {
        path: 'create-customer',
        component: _admin_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_11__["CreateCustomerComponent"]
      }, {
        path: 'get-customers',
        component: _admin_get_customers_get_customers_component__WEBPACK_IMPORTED_MODULE_12__["GetCustomersComponent"]
      }, {
        path: 'get-incomes',
        component: _admin_get_incomes_get_incomes_component__WEBPACK_IMPORTED_MODULE_23__["GetIncomesComponent"]
      }]
    }, {
      path: 'company',
      component: _shared_layouts_company_company_component__WEBPACK_IMPORTED_MODULE_5__["CompanyComponent"],
      canActivate: [_shared_guards_company_auth_guard__WEBPACK_IMPORTED_MODULE_21__["CompanyAuthGuard"]],
      children: [{
        path: 'create-coupon',
        component: _company_create_company_coupon_create_company_coupon_component__WEBPACK_IMPORTED_MODULE_13__["CreateCompanyCouponComponent"]
      }, {
        path: 'my-coupons',
        component: _company_get_company_coupons_get_company_coupons_component__WEBPACK_IMPORTED_MODULE_14__["GetCompanyCouponsComponent"]
      }]
    }, {
      path: 'customer',
      component: _shared_layouts_customer_customer_component__WEBPACK_IMPORTED_MODULE_6__["CustomerComponent"],
      canActivate: [_shared_guards_customer_auth_guard__WEBPACK_IMPORTED_MODULE_22__["CustomerAuthGuard"]],
      children: [{
        path: 'purchase-coupon',
        component: _customer_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_15__["PurchaseCouponComponent"]
      }, {
        path: 'my-coupons',
        component: _customer_get_customer_coupons_get_customer_coupons_component__WEBPACK_IMPORTED_MODULE_16__["GetCustomerCouponsComponent"]
      }]
    }, {
      path: '**',
      component: _shared_page404_page404_component__WEBPACK_IMPORTED_MODULE_20__["Page404Component"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: '<router-outlet></router-outlet>'
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _shared_layouts_authorisation_authorisation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/layouts/authorisation/authorisation.component */
    "./src/app/shared/layouts/authorisation/authorisation.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./registration/registration.component */
    "./src/app/registration/registration.component.ts");
    /* harmony import */


    var _shared_layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shared/layouts/admin/admin.component */
    "./src/app/shared/layouts/admin/admin.component.ts");
    /* harmony import */


    var _shared_layouts_company_company_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./shared/layouts/company/company.component */
    "./src/app/shared/layouts/company/company.component.ts");
    /* harmony import */


    var _shared_layouts_customer_customer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shared/layouts/customer/customer.component */
    "./src/app/shared/layouts/customer/customer.component.ts");
    /* harmony import */


    var _admin_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./admin/create-company/create-company.component */
    "./src/app/admin/create-company/create-company.component.ts");
    /* harmony import */


    var _admin_get_companies_get_companies_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./admin/get-companies/get-companies.component */
    "./src/app/admin/get-companies/get-companies.component.ts");
    /* harmony import */


    var _admin_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./admin/create-customer/create-customer.component */
    "./src/app/admin/create-customer/create-customer.component.ts");
    /* harmony import */


    var _admin_get_customers_get_customers_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./admin/get-customers/get-customers.component */
    "./src/app/admin/get-customers/get-customers.component.ts");
    /* harmony import */


    var _company_create_company_coupon_create_company_coupon_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./company/create-company-coupon/create-company-coupon.component */
    "./src/app/company/create-company-coupon/create-company-coupon.component.ts");
    /* harmony import */


    var _company_get_company_coupons_get_company_coupons_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./company/get-company-coupons/get-company-coupons.component */
    "./src/app/company/get-company-coupons/get-company-coupons.component.ts");
    /* harmony import */


    var _customer_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./customer/purchase-coupon/purchase-coupon.component */
    "./src/app/customer/purchase-coupon/purchase-coupon.component.ts");
    /* harmony import */


    var _customer_get_customer_coupons_get_customer_coupons_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./customer/get-customer-coupons/get-customer-coupons.component */
    "./src/app/customer/get-customer-coupons/get-customer-coupons.component.ts");
    /* harmony import */


    var _admin_get_coupons_get_coupons_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./admin/get-coupons/get-coupons.component */
    "./src/app/admin/get-coupons/get-coupons.component.ts");
    /* harmony import */


    var _admin_create_coupon_create_coupon_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./admin/create-coupon/create-coupon.component */
    "./src/app/admin/create-coupon/create-coupon.component.ts");
    /* harmony import */


    var _shared_page404_page404_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./shared/page404/page404.component */
    "./src/app/shared/page404/page404.component.ts");
    /* harmony import */


    var _admin_get_incomes_get_incomes_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./admin/get-incomes/get-incomes.component */
    "./src/app/admin/get-incomes/get-incomes.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _shared_page404_page404_component__WEBPACK_IMPORTED_MODULE_25__["Page404Component"], _shared_layouts_authorisation_authorisation_component__WEBPACK_IMPORTED_MODULE_9__["AuthorisationComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_11__["RegistrationComponent"], _shared_layouts_admin_admin_component__WEBPACK_IMPORTED_MODULE_12__["AdminComponent"], _admin_create_company_create_company_component__WEBPACK_IMPORTED_MODULE_15__["CreateCompanyComponent"], _admin_get_companies_get_companies_component__WEBPACK_IMPORTED_MODULE_16__["GetCompaniesComponent"], _admin_create_coupon_create_coupon_component__WEBPACK_IMPORTED_MODULE_24__["CreateCouponComponent"], _admin_get_coupons_get_coupons_component__WEBPACK_IMPORTED_MODULE_23__["GetCouponsComponent"], _admin_create_customer_create_customer_component__WEBPACK_IMPORTED_MODULE_17__["CreateCustomerComponent"], _admin_get_customers_get_customers_component__WEBPACK_IMPORTED_MODULE_18__["GetCustomersComponent"], _shared_layouts_company_company_component__WEBPACK_IMPORTED_MODULE_13__["CompanyComponent"], _company_create_company_coupon_create_company_coupon_component__WEBPACK_IMPORTED_MODULE_19__["CreateCompanyCouponComponent"], _company_get_company_coupons_get_company_coupons_component__WEBPACK_IMPORTED_MODULE_20__["GetCompanyCouponsComponent"], _shared_layouts_customer_customer_component__WEBPACK_IMPORTED_MODULE_14__["CustomerComponent"], _customer_purchase_coupon_purchase_coupon_component__WEBPACK_IMPORTED_MODULE_21__["PurchaseCouponComponent"], _customer_get_customer_coupons_get_customer_coupons_component__WEBPACK_IMPORTED_MODULE_22__["GetCustomerCouponsComponent"], _admin_get_incomes_get_incomes_component__WEBPACK_IMPORTED_MODULE_26__["GetIncomesComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/company/create-company-coupon/create-company-coupon.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/company/create-company-coupon/create-company-coupon.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: CreateCompanyCouponComponent */

  /***/
  function srcAppCompanyCreateCompanyCouponCreateCompanyCouponComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateCompanyCouponComponent", function () {
      return CreateCompanyCouponComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/company.service */
    "./src/app/shared/services/company.service.ts");
    /* harmony import */


    var _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models/errorStateMatcher */
    "./src/app/models/errorStateMatcher.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var CreateCompanyCouponComponent =
    /*#__PURE__*/
    function () {
      function CreateCompanyCouponComponent(company, snackBar) {
        _classCallCheck(this, CreateCompanyCouponComponent);

        this.company = company;
        this.snackBar = snackBar;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          title: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]),
          startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]),
          couponType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]),
          price: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)])
        });
        this.matcher = new _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_4__["MyErrorStateMatcher"]();
        this.coupons = [{
          value: 'FOOD'
        }, {
          value: 'SPORTS'
        }, {
          value: 'HEALTH'
        }, {
          value: 'CAMPING'
        }, {
          value: 'TRAVELLING'
        }, {
          value: 'RESTAURANTS'
        }, {
          value: 'ELECTRICITY'
        }];
      }

      _createClass(CreateCompanyCouponComponent, [{
        key: "onSubmit",
        value: function onSubmit() {
          var _this14 = this;

          var coupon = {
            title: this.form.value.title,
            startDate: new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US').transform(this.form.value.startDate, 'yyyy-MM-dd'),
            endDate: new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US').transform(this.form.value.endDate, 'yyyy-MM-dd'),
            amount: this.form.value.amount,
            couponType: this.form.value.couponType,
            message: this.form.value.message,
            price: this.form.value.price
          };
          this.company.createCoupon(coupon).subscribe(function () {
            return _this14.snackBar.open('New coupon successfully added.', '', {
              duration: 3000
            });
          }, function (error) {
            _this14.snackBar.open(error, '', {
              duration: 3000
            });
          });
        }
      }]);

      return CreateCompanyCouponComponent;
    }();

    CreateCompanyCouponComponent.ctorParameters = function () {
      return [{
        type: _shared_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }];
    };

    CreateCompanyCouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-coupon',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-company-coupon.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/company/create-company-coupon/create-company-coupon.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../app/shared/layouts/company/company.component.css */
      "./src/app/shared/layouts/company/company.component.css")).default]
    })], CreateCompanyCouponComponent);
    /***/
  },

  /***/
  "./src/app/company/get-company-coupons/get-company-coupons.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/company/get-company-coupons/get-company-coupons.component.ts ***!
    \******************************************************************************/

  /*! exports provided: GetCompanyCouponsComponent */

  /***/
  function srcAppCompanyGetCompanyCouponsGetCompanyCouponsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetCompanyCouponsComponent", function () {
      return GetCompanyCouponsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _shared_services_company_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/company.service */
    "./src/app/shared/services/company.service.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../models/errorStateMatcher */
    "./src/app/models/errorStateMatcher.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var GetCompanyCouponsComponent =
    /*#__PURE__*/
    function () {
      function GetCompanyCouponsComponent(company, snackBar) {
        _classCallCheck(this, GetCompanyCouponsComponent);

        this.company = company;
        this.snackBar = snackBar;
        this.couponColumns = ['title', 'startDate', 'endDate', 'amount', 'couponType', 'message', 'price'];
        this.matcher = new _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_6__["MyErrorStateMatcher"]();
        this.showUpdate = false;
        this.coupons = [{
          value: 'FOOD'
        }, {
          value: 'SPORTS'
        }, {
          value: 'HEALTH'
        }, {
          value: 'CAMPING'
        }, {
          value: 'TRAVELLING'
        }, {
          value: 'RESTAURANTS'
        }, {
          value: 'ELECTRICITY'
        }];
      }

      _createClass(GetCompanyCouponsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.company.getAllCoupons().subscribe(function (coupons) {
            return _this15.couponSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](coupons);
          }, function (error) {
            _this15.snackBar.open(error, '', {
              duration: 3000
            });
          });
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])
          });
        }
      }, {
        key: "couponFilter",
        value: function couponFilter(filterValue) {
          this.couponSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "onDelete",
        value: function onDelete(id) {
          var _this16 = this;

          this.company.deleteCoupon(id).subscribe(function () {
            return _this16.snackBar.open('Coupon successfully removed.', '', {
              duration: 3000
            });
          }, function (error) {
            _this16.snackBar.open(error, '', {
              duration: 3000
            });
          });
        }
      }, {
        key: "onUpdate",
        value: function onUpdate(id) {
          var _this17 = this;

          var coupon = {
            id: id,
            endDate: new _angular_common__WEBPACK_IMPORTED_MODULE_7__["DatePipe"]('en-US').transform(this.form.value.endDate, 'yyyy-MM-dd'),
            amount: this.form.value.amount,
            price: this.form.value.price
          };
          this.company.updateCoupon(coupon).subscribe(function () {
            return _this17.snackBar.open('Coupon successfully updated.', '', {
              duration: 3000
            });
          }, function (error) {
            _this17.snackBar.open(error, '', {
              duration: 3000
            });
          });
        }
      }, {
        key: "onShowUpdate",
        value: function onShowUpdate() {
          this.showUpdate === false ? this.showUpdate = true : this.showUpdate = false;
        }
      }]);

      return GetCompanyCouponsComponent;
    }();

    GetCompanyCouponsComponent.ctorParameters = function () {
      return [{
        type: _shared_services_company_service__WEBPACK_IMPORTED_MODULE_3__["CompanyService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    GetCompanyCouponsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-get-coupons',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./get-company-coupons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/company/get-company-coupons/get-company-coupons.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('detailExpand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        height: '0px',
        minHeight: '0',
        display: 'none'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
        height: '*'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../shared/layouts/company/company.component.css */
      "./src/app/shared/layouts/company/company.component.css")).default]
    })], GetCompanyCouponsComponent);
    /***/
  },

  /***/
  "./src/app/customer/get-customer-coupons/get-customer-coupons.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/customer/get-customer-coupons/get-customer-coupons.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: GetCustomerCouponsComponent */

  /***/
  function srcAppCustomerGetCustomerCouponsGetCustomerCouponsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetCustomerCouponsComponent", function () {
      return GetCustomerCouponsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _shared_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/customer.service */
    "./src/app/shared/services/customer.service.ts");

    var GetCustomerCouponsComponent =
    /*#__PURE__*/
    function () {
      function GetCustomerCouponsComponent(customer, snackBar) {
        _classCallCheck(this, GetCustomerCouponsComponent);

        this.customer = customer;
        this.snackBar = snackBar;
        this.couponColumns = ['title', 'startDate', 'endDate', 'amount', 'couponType', 'message', 'price', 'image'];
      }

      _createClass(GetCustomerCouponsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.customer.getPurchasedCoupons().subscribe(function (coupons) {
            return _this18.couponSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](coupons);
          }, function (error) {
            _this18.snackBar.open(error, '', {
              duration: 3000
            });
          });
        }
      }, {
        key: "couponFilter",
        value: function couponFilter(filterValue) {
          this.couponSource.filter = filterValue.trim().toLowerCase();
        }
      }]);

      return GetCustomerCouponsComponent;
    }();

    GetCustomerCouponsComponent.ctorParameters = function () {
      return [{
        type: _shared_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    GetCustomerCouponsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-get-coupons',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./get-customer-coupons.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/get-customer-coupons/get-customer-coupons.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../shared/layouts/customer/customer.component.css */
      "./src/app/shared/layouts/customer/customer.component.css")).default]
    })], GetCustomerCouponsComponent);
    /***/
  },

  /***/
  "./src/app/customer/purchase-coupon/purchase-coupon.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/customer/purchase-coupon/purchase-coupon.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PurchaseCouponComponent */

  /***/
  function srcAppCustomerPurchaseCouponPurchaseCouponComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PurchaseCouponComponent", function () {
      return PurchaseCouponComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _shared_services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/services/customer.service */
    "./src/app/shared/services/customer.service.ts");
    /* harmony import */


    var _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../models/errorStateMatcher */
    "./src/app/models/errorStateMatcher.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var PurchaseCouponComponent =
    /*#__PURE__*/
    function () {
      function PurchaseCouponComponent(customer, snackBar) {
        _classCallCheck(this, PurchaseCouponComponent);

        this.customer = customer;
        this.snackBar = snackBar;
        this.couponColumns = ['title', 'startDate', 'endDate', 'amount', 'couponType', 'message', 'price'];
        this.matcher = new _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_4__["MyErrorStateMatcher"]();
      }

      _createClass(PurchaseCouponComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.customer.getAvailableCoupons().subscribe(function (coupons) {
            return _this19.couponSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](coupons);
          }, function (error) {
            _this19.snackBar.open(error, '', {
              duration: 3000
            });
          });
        }
      }, {
        key: "couponFilter",
        value: function couponFilter(filterValue) {
          this.couponSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "onPurchase",
        value: function onPurchase(id) {
          var _this20 = this;

          this.customer.purchaseCoupon(id).subscribe(function () {
            return _this20.snackBar.open('Coupon successfully purchased.', '', {
              duration: 3000
            });
          }, function (error) {
            _this20.snackBar.open(error, '', {
              duration: 3000
            });
          });
        }
      }]);

      return PurchaseCouponComponent;
    }();

    PurchaseCouponComponent.ctorParameters = function () {
      return [{
        type: _shared_services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
      }];
    };

    PurchaseCouponComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-purchase-coupon',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./purchase-coupon.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/customer/purchase-coupon/purchase-coupon.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('detailExpand', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        height: '0px',
        minHeight: '0',
        display: 'none'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({
        height: '*'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../app/shared/layouts/customer/customer.component.css */
      "./src/app/shared/layouts/customer/customer.component.css")).default]
    })], PurchaseCouponComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_authorisation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/authorisation.service */
    "./src/app/shared/services/authorisation.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../models/errorStateMatcher */
    "./src/app/models/errorStateMatcher.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(auth, router, snackBar) {
        _classCallCheck(this, LoginComponent);

        this.auth = auth;
        this.router = router;
        this.snackBar = snackBar;
        this.matcher = new _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_5__["MyErrorStateMatcher"]();
        this.clients = [{
          value: 'ADMIN'
        }, {
          value: 'COMPANY'
        }, {
          value: 'CUSTOMER'
        }];
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]),
            clientType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.sub) {
            this.sub.unsubscribe();
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this21 = this;

          this.form.disable();
          this.sub = this.auth.login(this.form.value).subscribe(function () {
            if (_this21.form.value.clientType === 'ADMIN') {
              _this21.router.navigate(['/admin']);
            } else if (_this21.form.value.clientType === 'COMPANY') {
              _this21.router.navigate(['/company']);
            } else if (_this21.form.value.clientType === 'CUSTOMER') {
              _this21.router.navigate(['/customer']);
            }
          }, function (error) {
            _this21.snackBar.open(error, '', {
              duration: 3000
            });

            _this21.form.enable();
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _shared_services_authorisation_service__WEBPACK_IMPORTED_MODULE_3__["AuthorisationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../shared/layouts/authorisation/authorisation.component.css */
      "./src/app/shared/layouts/authorisation/authorisation.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/models/errorStateMatcher.ts":
  /*!*********************************************!*\
    !*** ./src/app/models/errorStateMatcher.ts ***!
    \*********************************************/

  /*! exports provided: MyErrorStateMatcher */

  /***/
  function srcAppModelsErrorStateMatcherTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function () {
      return MyErrorStateMatcher;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /** Error when invalid control is dirty, touched, or submitted. */


    var MyErrorStateMatcher =
    /*#__PURE__*/
    function () {
      function MyErrorStateMatcher() {
        _classCallCheck(this, MyErrorStateMatcher);
      }

      _createClass(MyErrorStateMatcher, [{
        key: "isErrorState",
        value: function isErrorState(control, form) {
          var isSubmitted = form && form.submitted;
          return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
        }
      }]);

      return MyErrorStateMatcher;
    }();
    /***/

  },

  /***/
  "./src/app/registration/registration.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/registration/registration.component.ts ***!
    \********************************************************/

  /*! exports provided: RegistrationComponent */

  /***/
  function srcAppRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_services_authorisation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/services/authorisation.service */
    "./src/app/shared/services/authorisation.service.ts");
    /* harmony import */


    var _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/errorStateMatcher */
    "./src/app/models/errorStateMatcher.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var RegistrationComponent =
    /*#__PURE__*/
    function () {
      function RegistrationComponent(auth, snackBar) {
        _classCallCheck(this, RegistrationComponent);

        this.auth = auth;
        this.snackBar = snackBar;
        this.matcher = new _models_errorStateMatcher__WEBPACK_IMPORTED_MODULE_4__["MyErrorStateMatcher"]();
        this.clients = [{
          value: 'COMPANY'
        }, {
          value: 'CUSTOMER'
        }];
      }

      _createClass(RegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(20)]),
            clientType: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.sub) {
            this.sub.unsubscribe();
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this22 = this;

          this.form.disable();
          var regUser = {
            name: this.form.value.name,
            password: this.form.value.password,
            email: this.form.value.email
          };

          if (this.form.value.clientType === 'COMPANY') {
            this.sub = this.auth.regCompany(regUser).subscribe(function () {
              return _this22.snackBar.open('Successful registration.', '', {
                duration: 3000
              });
            }, function (error) {
              _this22.snackBar.open(error, '', {
                duration: 3000
              });

              _this22.form.enable();
            });
          } else if (this.form.value.clientType === 'CUSTOMER') {
            this.sub = this.auth.regCustomer(regUser).subscribe(function () {
              return _this22.snackBar.open('Successful registration.', '', {
                duration: 3000
              });
            }, function (error) {
              _this22.snackBar.open(error, '', {
                duration: 3000
              });

              _this22.form.enable();
            });
          }
        }
      }]);

      return RegistrationComponent;
    }();

    RegistrationComponent.ctorParameters = function () {
      return [{
        type: _shared_services_authorisation_service__WEBPACK_IMPORTED_MODULE_3__["AuthorisationService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }];
    };

    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-registration',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./registration.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../shared/layouts/authorisation/authorisation.component.css */
      "./src/app/shared/layouts/authorisation/authorisation.component.css")).default]
    })], RegistrationComponent);
    /***/
  },

  /***/
  "./src/app/shared/guards/admin-auth.guard.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/guards/admin-auth.guard.ts ***!
    \***************************************************/

  /*! exports provided: AdminAuthGuard */

  /***/
  function srcAppSharedGuardsAdminAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminAuthGuard", function () {
      return AdminAuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_authorisation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/authorisation.service */
    "./src/app/shared/services/authorisation.service.ts");

    var AdminAuthGuard =
    /*#__PURE__*/
    function () {
      function AdminAuthGuard(auth, router) {
        _classCallCheck(this, AdminAuthGuard);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AdminAuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.auth.isAdminLoggedIn()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
          } else {
            this.router.navigate(['/login']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
          }
        }
      }, {
        key: "canActivateChild",
        value: function canActivateChild(childRoute, state) {
          return this.canActivate(childRoute, state);
        }
      }]);

      return AdminAuthGuard;
    }();

    AdminAuthGuard.ctorParameters = function () {
      return [{
        type: _services_authorisation_service__WEBPACK_IMPORTED_MODULE_4__["AuthorisationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AdminAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AdminAuthGuard);
    /***/
  },

  /***/
  "./src/app/shared/guards/company-auth.guard.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/guards/company-auth.guard.ts ***!
    \*****************************************************/

  /*! exports provided: CompanyAuthGuard */

  /***/
  function srcAppSharedGuardsCompanyAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyAuthGuard", function () {
      return CompanyAuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_authorisation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/authorisation.service */
    "./src/app/shared/services/authorisation.service.ts");

    var CompanyAuthGuard =
    /*#__PURE__*/
    function () {
      function CompanyAuthGuard(auth, router) {
        _classCallCheck(this, CompanyAuthGuard);

        this.auth = auth;
        this.router = router;
      }

      _createClass(CompanyAuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.auth.isCompanyLoggedIn()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
          } else {
            this.router.navigate(['/login']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
          }
        }
      }, {
        key: "canActivateChild",
        value: function canActivateChild(childRoute, state) {
          return this.canActivate(childRoute, state);
        }
      }]);

      return CompanyAuthGuard;
    }();

    CompanyAuthGuard.ctorParameters = function () {
      return [{
        type: _services_authorisation_service__WEBPACK_IMPORTED_MODULE_4__["AuthorisationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    CompanyAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CompanyAuthGuard);
    /***/
  },

  /***/
  "./src/app/shared/guards/customer-auth.guard.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/guards/customer-auth.guard.ts ***!
    \******************************************************/

  /*! exports provided: CustomerAuthGuard */

  /***/
  function srcAppSharedGuardsCustomerAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerAuthGuard", function () {
      return CustomerAuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _services_authorisation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/authorisation.service */
    "./src/app/shared/services/authorisation.service.ts");

    var CustomerAuthGuard =
    /*#__PURE__*/
    function () {
      function CustomerAuthGuard(auth, router) {
        _classCallCheck(this, CustomerAuthGuard);

        this.auth = auth;
        this.router = router;
      }

      _createClass(CustomerAuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.auth.isCustomerLoggedIn()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
          } else {
            this.router.navigate(['/login']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false);
          }
        }
      }, {
        key: "canActivateChild",
        value: function canActivateChild(childRoute, state) {
          return this.canActivate(childRoute, state);
        }
      }]);

      return CustomerAuthGuard;
    }();

    CustomerAuthGuard.ctorParameters = function () {
      return [{
        type: _services_authorisation_service__WEBPACK_IMPORTED_MODULE_4__["AuthorisationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    CustomerAuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CustomerAuthGuard);
    /***/
  },

  /***/
  "./src/app/shared/layouts/admin/admin.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/shared/layouts/admin/admin.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedLayoutsAdminAdminComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.mat-menu-item {\n  color: #3e50b5;\n  text-align: center;\n}\n\n.sure {\n  font-family: Arial;\n  font-size: small;\n  text-align: center;\n  color: #3e50b5;\n  margin-top: 5px;\n  margin-bottom: 15px;\n  margin-left: 15px;\n}\n\n.container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\nmat-sidenav {\n  width: 250px;;\n}\n\n.no-shadow {\n  box-shadow: none !important;\n}\n\n::ng-deep .mat-expansion-panel-body {\n  padding: 0 !important;\n  padding-left: 10px !important;\n}\n\n.header-box-shadow {\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\n}\n\n.bottom-to-top {\n  border: 0 solid;\n  border-right-width: 1px;\n  -webkit-border-image:\n  -webkit-gradient(linear, left bottom, left top, from(#c1c1c1), to(rgba(0, 0, 0, 0))) 1 100%;\n  -webkit-border-image:\n  linear-gradient(to top, #c1c1c1, rgba(0, 0, 0, 0)) 1 100%;\n       -o-border-image:\n  linear-gradient(to top, #c1c1c1, rgba(0, 0, 0, 0)) 1 100%;\n          border-image:\n  -webkit-gradient(linear, left bottom, left top, from(#c1c1c1), to(rgba(0, 0, 0, 0))) 1 100%;\n          border-image:\n  linear-gradient(to top, #c1c1c1, rgba(0, 0, 0, 0)) 1 100%\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\n.button1 {\n  color: #3e50b5;\n  text-align: left;\n  font-weight: normal;\n  font-size: 14px;\n  width: 230px;\n}\n\n.button2 {\n  color: #3e50b5;\n  width: 100%;\n}\n\n.button3 {\n  color: #3e50b5;\n  width: 1000px;\n}\n\n.button4 {\n  color: #3e50b5;\n  text-align: left;\n  font-weight: normal;\n  font-size: 14px;\n  width: 230px;\n  margin-left: 9px;\n}\n\nh1 {\n  text-align: center;\n  font-family: Arial;\n  font-size: 130px;\n  color: #3e50b5;\n  text-shadow: 1px 3px 0 #969696, 1px 13px 5px #aba8a8;\n}\n\nh2 {\n  text-align: center;\n  font-family: Arial;\n  font-size: 65px;\n  color: #3e50b5;\n  text-shadow: 1px 3px 0 #969696, 1px 13px 5px #aba8a8;\n}\n\nh3 {\n  text-align: center;\n  font-family: Arial;\n  font-size: 40px;\n  color: #3e50b5;\n  text-shadow: 1px 5px 3px #969696, 3px 9px 7px #aba8a8;\n}\n\nth {\n  font-size: 15px;\n  font-weight: bold;\n    color: #6f737a;\n}\n\ntable {\n  width: 100%;\n}\n\ntr.example-detail-row {\n  height: 0;\n}\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #f5f5f5;\n}\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n}\n\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description {\n  padding: 16px;\n}\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFjO1VBQWQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtBQUNWOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHFHQUFxRztBQUN2Rzs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkI7NkZBQ3dEO0VBRHhEOzJEQUN3RDtPQUR4RDsyREFDd0Q7VUFEeEQ7NkZBQ3dEO1VBRHhEOztBQUVGOztBQUdBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QscURBQXFEO0FBQ3ZEOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtJQUNmLGNBQWM7QUFDbEI7O0FBR0E7RUFDRSxXQUFXO0FBQ2I7O0FBR0E7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQWE7RUFBYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xheW91dHMvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLm1hdC1tZW51LWl0ZW0ge1xuICBjb2xvcjogIzNlNTBiNTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3VyZSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzNlNTBiNTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIHdpZHRoOiAyNTBweDs7XG59XG5cbi5uby1zaGFkb3cge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1ib3gtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsMCwwLC4xMik7XG59XG5cbi5ib3R0b20tdG8tdG9wIHtcbiAgYm9yZGVyOiAwIHNvbGlkO1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcbiAgYm9yZGVyLWltYWdlOlxuICBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjYzFjMWMxLCByZ2JhKDAsIDAsIDAsIDApKSAxIDEwMCVcbn1cblxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnV0dG9uMSB7XG4gIGNvbG9yOiAjM2U1MGI1O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAyMzBweDtcbn1cblxuLmJ1dHRvbjIge1xuICBjb2xvcjogIzNlNTBiNTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b24zIHtcbiAgY29sb3I6ICMzZTUwYjU7XG4gIHdpZHRoOiAxMDAwcHg7XG59XG5cbi5idXR0b240IHtcbiAgY29sb3I6ICMzZTUwYjU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDIzMHB4O1xuICBtYXJnaW4tbGVmdDogOXB4O1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBmb250LXNpemU6IDEzMHB4O1xuICBjb2xvcjogIzNlNTBiNTtcbiAgdGV4dC1zaGFkb3c6IDFweCAzcHggMCAjOTY5Njk2LCAxcHggMTNweCA1cHggI2FiYThhODtcbn1cblxuaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgZm9udC1zaXplOiA2NXB4O1xuICBjb2xvcjogIzNlNTBiNTtcbiAgdGV4dC1zaGFkb3c6IDFweCAzcHggMCAjOTY5Njk2LCAxcHggMTNweCA1cHggI2FiYThhODtcbn1cblxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogIzNlNTBiNTtcbiAgdGV4dC1zaGFkb3c6IDFweCA1cHggM3B4ICM5Njk2OTYsIDNweCA5cHggN3B4ICNhYmE4YTg7XG59XG5cbnRoIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzZmNzM3YTtcbn1cblxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5cbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XG4gIGhlaWdodDogMDtcbn1cblxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG5cbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGlhZ3JhbSB7XG4gIG1pbi13aWR0aDogODBweDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGhlaWdodDogMTA0cHg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtc3ltYm9sIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24tYXR0cmlidXRpb24ge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/layouts/admin/admin.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/shared/layouts/admin/admin.component.ts ***!
    \*********************************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppSharedLayoutsAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _services_authorisation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/authorisation.service */
    "./src/app/shared/services/authorisation.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var AdminComponent = function AdminComponent(mediaObserver, auth) {
      var _this23 = this;

      _classCallCheck(this, AdminComponent);

      this.auth = auth;
      this.date = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]("en-US").transform(new Date(), "EEEE, MMMM d, y");
      this.opened = true;
      this.over = "side";
      this.expandHeight = "42px";
      this.collapseHeight = "42px";
      this.displayMode = "flat";
      this.watcher = mediaObserver.media$.subscribe(function (change) {
        if (change.mqAlias === "sm" || change.mqAlias === "xs") {
          _this23.opened = false;
          _this23.over = "over";
        } else {
          _this23.opened = true;
          _this23.over = "side";
        }
      });
    };

    AdminComponent.ctorParameters = function () {
      return [{
        type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"]
      }, {
        type: _services_authorisation_service__WEBPACK_IMPORTED_MODULE_3__["AuthorisationService"]
      }];
    };

    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-login",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layouts/admin/admin.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./admin.component.css */
      "./src/app/shared/layouts/admin/admin.component.css")).default]
    })], AdminComponent);
    /***/
  },

  /***/
  "./src/app/shared/layouts/authorisation/authorisation.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/shared/layouts/authorisation/authorisation.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedLayoutsAuthorisationAuthorisationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n  text-align: center;\n  font-family: Arial;\n  font-size: 130px;\n  color: #3e50b5;\n  text-shadow: 1px 3px 0 #969696, 1px 13px 5px #aba8a8;\n}\n\n.container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.mat-form-field {\n  width: 40%;\n}\n\n.mat-button {\n  color: #3e50b5;\n  width: 20%;\n}\n\nform {\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dHMvYXV0aG9yaXNhdGlvbi9hdXRob3Jpc2F0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsb0RBQW9EO0FBQ3REOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbGF5b3V0cy9hdXRob3Jpc2F0aW9uL2F1dGhvcmlzYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGZvbnQtc2l6ZTogMTMwcHg7XG4gIGNvbG9yOiAjM2U1MGI1O1xuICB0ZXh0LXNoYWRvdzogMXB4IDNweCAwICM5Njk2OTYsIDFweCAxM3B4IDVweCAjYWJhOGE4O1xufVxuXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi5tYXQtYnV0dG9uIHtcbiAgY29sb3I6ICMzZTUwYjU7XG4gIHdpZHRoOiAyMCU7XG59XG5cbmZvcm0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/layouts/authorisation/authorisation.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/shared/layouts/authorisation/authorisation.component.ts ***!
    \*************************************************************************/

  /*! exports provided: AuthorisationComponent */

  /***/
  function srcAppSharedLayoutsAuthorisationAuthorisationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthorisationComponent", function () {
      return AuthorisationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AuthorisationComponent = function AuthorisationComponent() {
      _classCallCheck(this, AuthorisationComponent);
    };

    AuthorisationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-authorization',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./authorisation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layouts/authorisation/authorisation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./authorisation.component.css */
      "./src/app/shared/layouts/authorisation/authorisation.component.css")).default]
    })], AuthorisationComponent);
    /***/
  },

  /***/
  "./src/app/shared/layouts/company/company.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/shared/layouts/company/company.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedLayoutsCompanyCompanyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.mat-menu-item {\n  color: #3e50b5;\n  text-align: center;\n}\n\n.sure {\n  font-family: Arial;\n  font-size: small;\n  text-align: center;\n  color: #3e50b5;\n  margin-top: 5px;\n  margin-bottom: 15px;\n  margin-left: 15px;\n}\n\nmat-sidenav {\n  width: 250px;;\n}\n\n.no-shadow {\n  box-shadow: none !important;\n}\n\n::ng-deep .mat-expansion-panel-body {\n  padding: 0 !important;\n  padding-left: 10px !important;\n}\n\n.header-box-shadow {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, .2), 0 6px 10px 0 rgba(0, 0, 0, .14), 0 1px 18px 0 rgba(0, 0, 0, .12);\n}\n\n.bottom-to-top {\n  border: 0 solid;\n  border-right-width: 1px;\n  -webkit-border-image: -webkit-gradient(linear, left bottom, left top, from(#c1c1c1), to(rgba(0, 0, 0, 0))) 1 100%;\n  -webkit-border-image: linear-gradient(to top, #c1c1c1, rgba(0, 0, 0, 0)) 1 100%;\n       -o-border-image: linear-gradient(to top, #c1c1c1, rgba(0, 0, 0, 0)) 1 100%;\n          border-image: -webkit-gradient(linear, left bottom, left top, from(#c1c1c1), to(rgba(0, 0, 0, 0))) 1 100%;\n          border-image: linear-gradient(to top, #c1c1c1, rgba(0, 0, 0, 0)) 1 100%\n}\n\ntable {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\n.button1 {\n  color: #3e50b5;\n  text-align: left;\n  font-weight: normal;\n  font-size: 15px;\n  width: 230px;\n  margin-left: 11px;\n}\n\n.button2 {\n  color: #3e50b5;\n  width: 100%;\n}\n\n.button3 {\n  color: #3e50b5;\n  width: 1000px;\n}\n\nh1 {\n  text-align: center;\n  font-family: Arial;\n  font-size: 130px;\n  color: #3e50b5;\n  text-shadow: 1px 3px 0 #969696, 1px 13px 5px #aba8a8;\n}\n\nh2 {\n  text-align: center;\n  font-family: Arial;\n  font-size: 65px;\n  color: #3e50b5;\n  text-shadow: 1px 3px 0 #969696, 1px 13px 5px #aba8a8;\n}\n\nh3 {\n  text-align: center;\n  font-family: Arial;\n  font-size: 40px;\n  color: #3e50b5;\n  text-shadow: 1px 5px 3px #969696, 3px 9px 7px #aba8a8;\n}\n\nth {\n  font-size: 15px;\n  font-weight: bold;\n  color: #6f737a;\n}\n\ntable {\n  width: 100%;\n}\n\ntr.example-detail-row {\n  height: 0;\n}\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #f5f5f5;\n}\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n}\n\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description {\n  padding: 16px;\n}\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dHMvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBYztVQUFkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtBQUNWOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSw4R0FBOEc7QUFDaEg7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGlIQUFzRTtFQUF0RSwrRUFBc0U7T0FBdEUsMEVBQXNFO1VBQXRFLHlHQUFzRTtVQUF0RTtBQUNGOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsb0RBQW9EO0FBQ3REOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQWE7RUFBYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xheW91dHMvY29tcGFueS9jb21wYW55LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BhY2VyIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLm1hdC1tZW51LWl0ZW0ge1xuICBjb2xvcjogIzNlNTBiNTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3VyZSB7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgZm9udC1zaXplOiBzbWFsbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzNlNTBiNTtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxubWF0LXNpZGVuYXYge1xuICB3aWR0aDogMjUwcHg7O1xufVxuXG4ubm8tc2hhZG93IHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5oZWFkZXItYm94LXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgLjIpLCAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLCAwIDFweCAxOHB4IDAgcmdiYSgwLCAwLCAwLCAuMTIpO1xufVxuXG4uYm90dG9tLXRvLXRvcCB7XG4gIGJvcmRlcjogMCBzb2xpZDtcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxcHg7XG4gIGJvcmRlci1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgI2MxYzFjMSwgcmdiYSgwLCAwLCAwLCAwKSkgMSAxMDAlXG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b24xIHtcbiAgY29sb3I6ICMzZTUwYjU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgd2lkdGg6IDIzMHB4O1xuICBtYXJnaW4tbGVmdDogMTFweDtcbn1cblxuLmJ1dHRvbjIge1xuICBjb2xvcjogIzNlNTBiNTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5idXR0b24zIHtcbiAgY29sb3I6ICMzZTUwYjU7XG4gIHdpZHRoOiAxMDAwcHg7XG59XG5cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGZvbnQtc2l6ZTogMTMwcHg7XG4gIGNvbG9yOiAjM2U1MGI1O1xuICB0ZXh0LXNoYWRvdzogMXB4IDNweCAwICM5Njk2OTYsIDFweCAxM3B4IDVweCAjYWJhOGE4O1xufVxuXG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBmb250LXNpemU6IDY1cHg7XG4gIGNvbG9yOiAjM2U1MGI1O1xuICB0ZXh0LXNoYWRvdzogMXB4IDNweCAwICM5Njk2OTYsIDFweCAxM3B4IDVweCAjYWJhOGE4O1xufVxuXG5oMyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGNvbG9yOiAjM2U1MGI1O1xuICB0ZXh0LXNoYWRvdzogMXB4IDVweCAzcHggIzk2OTY5NiwgM3B4IDlweCA3cHggI2FiYThhODtcbn1cblxudGgge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzZmNzM3YTtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcbiAgaGVpZ2h0OiAwO1xufVxuXG50ci5leGFtcGxlLWVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbn1cblxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDA7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGV0YWlsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kaWFncmFtIHtcbiAgbWluLXdpZHRoOiA4MHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZzogOHB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luOiA4cHggMDtcbiAgaGVpZ2h0OiAxMDRweDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1zeW1ib2wge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbi1hdHRyaWJ1dGlvbiB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuIl19 */";
    /***/
  },

  /***/
  "./src/app/shared/layouts/company/company.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/shared/layouts/company/company.component.ts ***!
    \*************************************************************/

  /*! exports provided: CompanyComponent */

  /***/
  function srcAppSharedLayoutsCompanyCompanyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyComponent", function () {
      return CompanyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _services_authorisation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/authorisation.service */
    "./src/app/shared/services/authorisation.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var CompanyComponent = function CompanyComponent(mediaObserver, auth) {
      var _this24 = this;

      _classCallCheck(this, CompanyComponent);

      this.auth = auth;
      this.date = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]("en-US").transform(new Date(), "EEEE, MMMM d, y");
      this.opened = true;
      this.over = "side";
      this.expandHeight = "42px";
      this.collapseHeight = "42px";
      this.displayMode = "flat";
      this.watcher = mediaObserver.media$.subscribe(function (change) {
        if (change.mqAlias === "sm" || change.mqAlias === "xs") {
          _this24.opened = false;
          _this24.over = "over";
        } else {
          _this24.opened = true;
          _this24.over = "side";
        }
      });
    };

    CompanyComponent.ctorParameters = function () {
      return [{
        type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"]
      }, {
        type: _services_authorisation_service__WEBPACK_IMPORTED_MODULE_3__["AuthorisationService"]
      }];
    };

    CompanyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-company",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./company.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layouts/company/company.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./company.component.css */
      "./src/app/shared/layouts/company/company.component.css")).default]
    })], CompanyComponent);
    /***/
  },

  /***/
  "./src/app/shared/layouts/customer/customer.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/shared/layouts/customer/customer.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedLayoutsCustomerCustomerComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".spacer {\n  -webkit-box-flex: 1;\n          flex: 1 1 auto;\n}\n\n.container {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.mat-menu-item {\n  color: #3e50b5;\n  text-align: center;\n}\n\n.sure {\n  font-family: Arial;\n  font-size: small;\n  text-align: center;\n  color: #3e50b5;\n  margin-top: 5px;\n  margin-bottom: 15px;\n  margin-left: 15px;\n}\n\nmat-sidenav {\n  width: 250px;;\n}\n\n.no-shadow {\n  box-shadow: none !important;\n}\n\n::ng-deep .mat-expansion-panel-body {\n  padding: 0 !important;\n  padding-left: 10px !important;\n}\n\n.header-box-shadow {\n  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\n}\n\n.bottom-to-top {\n  border: 0 solid;\n  border-right-width: 1px;\n  -webkit-border-image:\n    -webkit-gradient(linear, left bottom, left top, from(#c1c1c1), to(rgba(0, 0, 0, 0))) 1 100%;\n  -webkit-border-image:\n    linear-gradient(to top, #c1c1c1, rgba(0, 0, 0, 0)) 1 100%;\n       -o-border-image:\n    linear-gradient(to top, #c1c1c1, rgba(0, 0, 0, 0)) 1 100%;\n          border-image:\n    -webkit-gradient(linear, left bottom, left top, from(#c1c1c1), to(rgba(0, 0, 0, 0))) 1 100%;\n          border-image:\n    linear-gradient(to top, #c1c1c1, rgba(0, 0, 0, 0)) 1 100%\n}\n\ntable {\n  width: 100%;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\n.button1 {\n  color: #3e50b5;\n  text-align: left;\n  font-weight: normal;\n  font-size: 15px;\n  width: 230px;\n  margin-left: 11px;\n}\n\n.button2 {\n  color: #3e50b5;\n  width: 100%;\n}\n\n.button3 {\n  color: #3e50b5;\n  width: 1000px;\n}\n\nh1 {\n  text-align: center;\n  font-family: Arial;\n  font-size: 130px;\n  color: #3e50b5;\n  text-shadow: 1px 3px 0 #969696, 1px 13px 5px #aba8a8;\n}\n\nh2 {\n  text-align: center;\n  font-family: Arial;\n  font-size: 65px;\n  color: #3e50b5;\n  text-shadow: 1px 3px 0 #969696, 1px 13px 5px #aba8a8;\n}\n\nh3 {\n  text-align: center;\n  font-family: Arial;\n  font-size: 40px;\n  color: #3e50b5;\n  text-shadow: 1px 5px 3px #969696, 3px 9px 7px #aba8a8;\n}\n\nth {\n  font-size: 15px;\n  font-weight: bold;\n  color: #6f737a;\n}\n\ntable {\n  width: 100%;\n}\n\ntr.example-detail-row {\n  height: 0;\n}\n\ntr.example-element-row:not(.example-expanded-row):hover {\n  background: #f5f5f5;\n}\n\ntr.example-element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n\n.example-element-row td {\n  border-bottom-width: 0;\n}\n\n.example-element-detail {\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n}\n\n.example-element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n\n.example-element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n\n.example-element-description {\n  padding: 16px;\n}\n\n.example-element-description-attribution {\n  opacity: 0.5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xheW91dHMvY3VzdG9tZXIvY3VzdG9tZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFjO1VBQWQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHFHQUFxRztBQUN2Rzs7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkI7K0ZBQzBEO0VBRDFEOzZEQUMwRDtPQUQxRDs2REFDMEQ7VUFEMUQ7K0ZBQzBEO1VBRDFEOztBQUVGOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsb0RBQW9EO0FBQ3REOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsY0FBYztFQUNkLG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxxREFBcUQ7QUFDdkQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsb0JBQWE7RUFBYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xheW91dHMvY3VzdG9tZXIvY3VzdG9tZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xufVxuXG4ubWF0LW1lbnUtaXRlbSB7XG4gIGNvbG9yOiAjM2U1MGI1O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdXJlIHtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBmb250LXNpemU6IHNtYWxsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjM2U1MGI1O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5tYXQtc2lkZW5hdiB7XG4gIHdpZHRoOiAyNTBweDs7XG59XG5cbi5uby1zaGFkb3cge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1ib3gtc2hhZG93IHtcbiAgYm94LXNoYWRvdzogMCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksIDAgNnB4IDEwcHggMCByZ2JhKDAsMCwwLC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsMCwwLC4xMik7XG59XG5cbi5ib3R0b20tdG8tdG9wIHtcbiAgYm9yZGVyOiAwIHNvbGlkO1xuICBib3JkZXItcmlnaHQtd2lkdGg6IDFweDtcbiAgYm9yZGVyLWltYWdlOlxuICAgIGxpbmVhci1ncmFkaWVudCh0byB0b3AsICNjMWMxYzEsIHJnYmEoMCwgMCwgMCwgMCkpIDEgMTAwJVxufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnV0dG9uMSB7XG4gIGNvbG9yOiAjM2U1MGI1O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHdpZHRoOiAyMzBweDtcbiAgbWFyZ2luLWxlZnQ6IDExcHg7XG59XG5cbi5idXR0b24yIHtcbiAgY29sb3I6ICMzZTUwYjU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYnV0dG9uMyB7XG4gIGNvbG9yOiAjM2U1MGI1O1xuICB3aWR0aDogMTAwMHB4O1xufVxuXG5oMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBmb250LXNpemU6IDEzMHB4O1xuICBjb2xvcjogIzNlNTBiNTtcbiAgdGV4dC1zaGFkb3c6IDFweCAzcHggMCAjOTY5Njk2LCAxcHggMTNweCA1cHggI2FiYThhODtcbn1cblxuaDIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgZm9udC1zaXplOiA2NXB4O1xuICBjb2xvcjogIzNlNTBiNTtcbiAgdGV4dC1zaGFkb3c6IDFweCAzcHggMCAjOTY5Njk2LCAxcHggMTNweCA1cHggI2FiYThhODtcbn1cblxuaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogIzNlNTBiNTtcbiAgdGV4dC1zaGFkb3c6IDFweCA1cHggM3B4ICM5Njk2OTYsIDNweCA5cHggN3B4ICNhYmE4YTg7XG59XG5cbnRoIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM2ZjczN2E7XG59XG5cbnRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRyLmV4YW1wbGUtZGV0YWlsLXJvdyB7XG4gIGhlaWdodDogMDtcbn1cblxudHIuZXhhbXBsZS1lbGVtZW50LXJvdzpub3QoLmV4YW1wbGUtZXhwYW5kZWQtcm93KTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG5cbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1yb3cgdGQge1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xufVxuXG4uZXhhbXBsZS1lbGVtZW50LWRldGFpbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGlhZ3JhbSB7XG4gIG1pbi13aWR0aDogODBweDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGhlaWdodDogMTA0cHg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtc3ltYm9sIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLmV4YW1wbGUtZWxlbWVudC1kZXNjcmlwdGlvbiB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5leGFtcGxlLWVsZW1lbnQtZGVzY3JpcHRpb24tYXR0cmlidXRpb24ge1xuICBvcGFjaXR5OiAwLjU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/layouts/customer/customer.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shared/layouts/customer/customer.component.ts ***!
    \***************************************************************/

  /*! exports provided: CustomerComponent */

  /***/
  function srcAppSharedLayoutsCustomerCustomerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerComponent", function () {
      return CustomerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _services_authorisation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/authorisation.service */
    "./src/app/shared/services/authorisation.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var CustomerComponent = function CustomerComponent(mediaObserver, auth) {
      var _this25 = this;

      _classCallCheck(this, CustomerComponent);

      this.auth = auth;
      this.date = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]("en-US").transform(new Date(), "EEEE, MMMM d, y");
      this.opened = true;
      this.over = "side";
      this.watcher = mediaObserver.media$.subscribe(function (change) {
        if (change.mqAlias === "sm" || change.mqAlias === "xs") {
          _this25.opened = false;
          _this25.over = "over";
        } else {
          _this25.opened = true;
          _this25.over = "side";
        }
      });
    };

    CustomerComponent.ctorParameters = function () {
      return [{
        type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["MediaObserver"]
      }, {
        type: _services_authorisation_service__WEBPACK_IMPORTED_MODULE_3__["AuthorisationService"]
      }];
    };

    CustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-customer",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./customer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/layouts/customer/customer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./customer.component.css */
      "./src/app/shared/layouts/customer/customer.component.css")).default]
    })], CustomerComponent);
    /***/
  },

  /***/
  "./src/app/shared/page404/page404.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/page404/page404.component.ts ***!
    \*****************************************************/

  /*! exports provided: Page404Component */

  /***/
  function srcAppSharedPage404Page404ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Page404Component", function () {
      return Page404Component;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var Page404Component =
    /*#__PURE__*/
    function () {
      function Page404Component() {
        _classCallCheck(this, Page404Component);
      }

      _createClass(Page404Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Page404Component;
    }();

    Page404Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page404',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./page404.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/page404/page404.component.html")).default,
      styles: ["\n    .center {\n      display: block;\n      margin-left: auto;\n      margin-right: auto;\n      width: 32%;\n    }\n  "]
    })], Page404Component);
    /***/
  },

  /***/
  "./src/app/shared/services/admin.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/services/admin.service.ts ***!
    \**************************************************/

  /*! exports provided: AdminService */

  /***/
  function srcAppSharedServicesAdminServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminService", function () {
      return AdminService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./error.service */
    "./src/app/shared/services/error.service.ts");

    var AdminService =
    /*#__PURE__*/
    function () {
      function AdminService(http, errorService) {
        _classCallCheck(this, AdminService);

        this.http = http;
        this.errorService = errorService;
        this.companyUrl = "https://couponmanagementsystem.herokuapp.com/admin/companies";
        this.couponUrl = "https://couponmanagementsystem.herokuapp.com/admin/coupons";
        this.customerUrl = "https://couponmanagementsystem.herokuapp.com/admin/customers";
        this.incomeUrl = "https://couponmanagementsystem.herokuapp.com/admin/incomes";
      }

      _createClass(AdminService, [{
        key: "createCompany",
        value: function createCompany(company) {
          var _this26 = this;

          return this.http.post(this.companyUrl, company, {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return _this26.errorService.errorHandler(err);
          }));
        }
      }, {
        key: "deleteCompany",
        value: function deleteCompany(id) {
          var _this27 = this;

          return this.http.delete(this.companyUrl + "/" + id, {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return _this27.errorService.errorHandler(err);
          }));
        }
      }, {
        key: "updateCompany",
        value: function updateCompany(company) {
          var _this28 = this;

          return this.http.put(this.companyUrl, company, {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return _this28.errorService.errorHandler(err);
          }));
        }
      }, {
        key: "getAllCompanies",
        value: function getAllCompanies() {
          var _this29 = this;

          return this.http.get(this.companyUrl, {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return _this29.errorService.errorHandler(err);
          }));
        }
      }, {
        key: "createCoupon",
        value: function createCoupon(coupon) {
          var _this30 = this;

          return this.http.post(this.couponUrl + "/" + coupon.companyId, coupon, {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return _this30.errorService.errorHandler(err);
          }));
        }
      }, {
        key: "deleteCoupon",
        value: function deleteCoupon(id) {
          var _this31 = this;

          return this.http.delete(this.couponUrl + "/" + id, {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return _this31.errorService.errorHandler(err);
          }));
        }
      }, {
        key: "updateCoupon",
        value: function updateCoupon(coupon) {
          var _this32 = this;

          return this.http.put(this.couponUrl + "/" + coupon.companyId, coupon, {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return _this32.errorService.errorHandler(err);
          }));
        }
      }, {
        key: "getAllCoupons",
        value: function getAllCoupons() {
          var _this33 = this;

          return this.http.get(this.couponUrl, {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return _this33.errorService.errorHandler(err);
          }));
        }
      }, {
        key: "createCustomer",
        value: function createCustomer(customer) {
          var _this34 = this;

          return this.http.post(this.customerUrl, customer, {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return _this34.errorService.errorHandler(err);
          }));
        }
      }, {
        key: "deleteCustomer",
        value: function deleteCustomer(id) {
          var _this35 = this;

          return this.http.delete(this.customerUrl + "/" + id, {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return _this35.errorService.errorHandler(err);
          }));
        }
      }, {
        key: "updateCustomer",
        value: function updateCustomer(customer) {
          var _this36 = this;

          return this.http.put(this.customerUrl, customer, {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return _this36.errorService.errorHandler(err);
          }));
        }
      }, {
        key: "getAllCustomers",
        value: function getAllCustomers() {
          var _this37 = this;

          return this.http.get(this.customerUrl, {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return _this37.errorService.errorHandler(err);
          }));
        }
      }, {
        key: "getIncomes",
        value: function getIncomes() {
          var _this38 = this;

          return this.http.get(this.incomeUrl, {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return _this38.errorService.errorHandler(err);
          }));
        }
      }]);

      return AdminService;
    }();

    AdminService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"]
      }];
    };

    AdminService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AdminService);
    /***/
  },

  /***/
  "./src/app/shared/services/authorisation.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/services/authorisation.service.ts ***!
    \**********************************************************/

  /*! exports provided: AuthorisationService */

  /***/
  function srcAppSharedServicesAuthorisationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthorisationService", function () {
      return AuthorisationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./error.service */
    "./src/app/shared/services/error.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthorisationService =
    /*#__PURE__*/
    function () {
      function AuthorisationService(http, errorService, router) {
        _classCallCheck(this, AuthorisationService);

        this.http = http;
        this.errorService = errorService;
        this.router = router;
        this.logUrl = "https://couponmanagementsystem.herokuapp.com/login";
        this.regCompanyUrl = "https://couponmanagementsystem.herokuapp.com/registration/companies";
        this.regCustomerUrl = "https://couponmanagementsystem.herokuapp.com/registration/customers";
      }

      _createClass(AuthorisationService, [{
        key: "login",
        value: function login(logUser) {
          var _this39 = this;

          return this.http.post(this.logUrl, logUser, {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () {
            if (logUser.clientType === "ADMIN") {
              sessionStorage.setItem("adminLogged", logUser.clientType);
            } else if (logUser.clientType === "COMPANY") {
              sessionStorage.setItem("companyLogged", logUser.clientType);
            } else if (logUser.clientType === "CUSTOMER") {
              sessionStorage.setItem("customerLogged", logUser.clientType);
            }
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return _this39.errorService.errorHandler(err);
          }));
        }
      }, {
        key: "regCompany",
        value: function regCompany(regUser) {
          var _this40 = this;

          return this.http.post(this.regCompanyUrl, regUser, {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return _this40.errorService.errorHandler(err);
          }));
        }
      }, {
        key: "regCustomer",
        value: function regCustomer(regUser) {
          var _this41 = this;

          return this.http.post(this.regCustomerUrl, regUser, {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return _this41.errorService.errorHandler(err);
          }));
        }
      }, {
        key: "isAdminLoggedIn",
        value: function isAdminLoggedIn() {
          if (sessionStorage.getItem("adminLogged") === "ADMIN") {
            return true;
          }
        }
      }, {
        key: "isCompanyLoggedIn",
        value: function isCompanyLoggedIn() {
          if (sessionStorage.getItem("companyLogged") === "COMPANY") {
            return true;
          }
        }
      }, {
        key: "isCustomerLoggedIn",
        value: function isCustomerLoggedIn() {
          if (sessionStorage.getItem("customerLogged") === "CUSTOMER") {
            return true;
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          sessionStorage.clear();
          this.router.navigate(["/login"]);
        }
      }]);

      return AuthorisationService;
    }();

    AuthorisationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    AuthorisationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], AuthorisationService);
    /***/
  },

  /***/
  "./src/app/shared/services/company.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/services/company.service.ts ***!
    \****************************************************/

  /*! exports provided: CompanyService */

  /***/
  function srcAppSharedServicesCompanyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompanyService", function () {
      return CompanyService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./error.service */
    "./src/app/shared/services/error.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var CompanyService =
    /*#__PURE__*/
    function () {
      function CompanyService(http, errorService) {
        _classCallCheck(this, CompanyService);

        this.http = http;
        this.errorService = errorService;
        this.companyUrl = "https://couponmanagementsystem.herokuapp.com/company/coupons";
      }

      _createClass(CompanyService, [{
        key: "createCoupon",
        value: function createCoupon(coupon) {
          var _this42 = this;

          return this.http.post(this.companyUrl, coupon, {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return _this42.errorService.errorHandler(err);
          }));
        }
      }, {
        key: "deleteCoupon",
        value: function deleteCoupon(id) {
          var _this43 = this;

          return this.http.delete(this.companyUrl + "/" + id, {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return _this43.errorService.errorHandler(err);
          }));
        }
      }, {
        key: "updateCoupon",
        value: function updateCoupon(coupon) {
          var _this44 = this;

          return this.http.put(this.companyUrl, coupon, {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return _this44.errorService.errorHandler(err);
          }));
        }
      }, {
        key: "getAllCoupons",
        value: function getAllCoupons() {
          var _this45 = this;

          return this.http.get(this.companyUrl, {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return _this45.errorService.errorHandler(err);
          }));
        }
      }]);

      return CompanyService;
    }();

    CompanyService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorService"]
      }];
    };

    CompanyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], CompanyService);
    /***/
  },

  /***/
  "./src/app/shared/services/customer.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/services/customer.service.ts ***!
    \*****************************************************/

  /*! exports provided: CustomerService */

  /***/
  function srcAppSharedServicesCustomerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerService", function () {
      return CustomerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _error_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./error.service */
    "./src/app/shared/services/error.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var CustomerService =
    /*#__PURE__*/
    function () {
      function CustomerService(http, errorService) {
        _classCallCheck(this, CustomerService);

        this.http = http;
        this.errorService = errorService;
        this.couponsUrl = "https://couponmanagementsystem.herokuapp.com/customer/coupons";
        this.availableUrl = "https://couponmanagementsystem.herokuapp.com/customer/coupons-available";
      }

      _createClass(CustomerService, [{
        key: "purchaseCoupon",
        value: function purchaseCoupon(id) {
          var _this46 = this;

          return this.http.get(this.couponsUrl + "/" + id, {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return _this46.errorService.errorHandler(err);
          }));
        }
      }, {
        key: "getPurchasedCoupons",
        value: function getPurchasedCoupons() {
          var _this47 = this;

          return this.http.get(this.couponsUrl, {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return _this47.errorService.errorHandler(err);
          }));
        }
      }, {
        key: "getAvailableCoupons",
        value: function getAvailableCoupons() {
          var _this48 = this;

          return this.http.get(this.availableUrl, {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) {
            return _this48.errorService.errorHandler(err);
          }));
        }
      }]);

      return CustomerService;
    }();

    CustomerService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _error_service__WEBPACK_IMPORTED_MODULE_3__["ErrorService"]
      }];
    };

    CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], CustomerService);
    /***/
  },

  /***/
  "./src/app/shared/services/error.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/services/error.service.ts ***!
    \**************************************************/

  /*! exports provided: ErrorService */

  /***/
  function srcAppSharedServicesErrorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorService", function () {
      return ErrorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ErrorService =
    /*#__PURE__*/
    function () {
      function ErrorService() {
        _classCallCheck(this, ErrorService);
      }

      _createClass(ErrorService, [{
        key: "errorHandler",
        value: function errorHandler(error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.error);
        }
      }]);

      return ErrorService;
    }();

    ErrorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ErrorService);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"]],
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\yUValG\Desktop\couponSystem\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map