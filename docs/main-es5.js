function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
  "./src/app/BigBasketData.service.ts":
  /*!******************************************!*\
    !*** ./src/app/BigBasketData.service.ts ***!
    \******************************************/

  /*! exports provided: BigBasketDataService */

  /***/
  function srcAppBigBasketDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BigBasketDataService", function () {
      return BigBasketDataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _product_list_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./product-list/product */
    "./src/app/product-list/product.ts");

    var BigBasketDataService = /*#__PURE__*/function () {
      function BigBasketDataService() {
        _classCallCheck(this, BigBasketDataService);

        this.productList = []; //super();

        var p1 = new _product_list_product__WEBPACK_IMPORTED_MODULE_1__["Product"](1, "MotoG4", "Mobiles", 24000, "assets/images/1.jpg");
        var p2 = new _product_list_product__WEBPACK_IMPORTED_MODULE_1__["Product"](2, "SonyDSC", "Camera", 64000, "assets/images/2.jpg");
        var p3 = new _product_list_product__WEBPACK_IMPORTED_MODULE_1__["Product"](3, "Lenovo110", "Laptops", 54000, "assets/images/3.jpg");
        var p4 = new _product_list_product__WEBPACK_IMPORTED_MODULE_1__["Product"](4, "Xiomi55", "Mobiles", 14000, "assets/images/4.jpg");
        var p5 = new _product_list_product__WEBPACK_IMPORTED_MODULE_1__["Product"](5, "Samsung Galaxy", "Mobiles", 44000, "assets/images/5.jpg");
        this.productList.push(p1);
        this.productList.push(p2);
        this.productList.push(p3);
        this.productList.push(p4);
        this.productList.push(p5);
      }

      _createClass(BigBasketDataService, [{
        key: "getProductList",
        value: function getProductList() {
          return this.productList;
        }
      }]);

      return BigBasketDataService;
    }();

    BigBasketDataService.ɵfac = function BigBasketDataService_Factory(t) {
      return new (t || BigBasketDataService)();
    };

    BigBasketDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BigBasketDataService,
      factory: BigBasketDataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BigBasketDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./userlist/userlist.component */
    "./src/app/userlist/userlist.component.ts");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./registration/registration.component */
    "./src/app/registration/registration.component.ts");
    /* harmony import */


    var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pagenotfound/pagenotfound.component */
    "./src/app/pagenotfound/pagenotfound.component.ts");
    /* harmony import */


    var _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./userdetails/userdetails.component */
    "./src/app/userdetails/userdetails.component.ts");
    /* harmony import */


    var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./inventory/inventory.component */
    "./src/app/inventory/inventory.component.ts");
    /* harmony import */


    var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./product-list/product-list.component */
    "./src/app/product-list/product-list.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _cart_list_cart_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./cart-list/cart-list.component */
    "./src/app/cart-list/cart-list.component.ts");

    var routes = [{
      path: '',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, {
      path: 'users',
      component: _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_3__["UserlistComponent"],
      children: [{
        path: 'userdetails/:id',
        component: _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_6__["UserdetailsComponent"]
      }]
    }, {
      path: 'inventory',
      component: _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_7__["InventoryComponent"]
    }, {
      path: 'registration',
      component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"]
    }, {
      path: 'products',
      component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductListComponent"]
    }, {
      path: 'header',
      component: _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"]
    }, {
      path: 'cart',
      component: _cart_list_cart_list_component__WEBPACK_IMPORTED_MODULE_10__["CartListComponent"]
    }, {
      path: '**',
      component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_5__["PagenotfoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); //typescript imports


    function AppComponent_nav_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Product");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "cart");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_nav_0_Template_a_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Logout");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(auth, router) {
        _classCallCheck(this, AppComponent);

        this.auth = auth;
        this.router = router;
        this.title = 'demo'; //model
      }

      _createClass(AppComponent, [{
        key: "editTitle",
        value: function editTitle() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.auth.getUserName().subscribe(function (newusername) {
            return _this.username = newusername;
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.auth.logout();
          this.router.navigate(['/login']);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 1,
      consts: [["class", "navbar navbar-expand navbar-dark bg-dark", 4, "ngIf"], [1, "navbar", "navbar-expand", "navbar-dark", "bg-dark"], [1, "navbar-nav"], ["routerLink", "/users", "mat-menu-item", "", 1, "nav-item", "nav-link"], ["routerLink", "/products", 1, "nav-item", "nav-link"], ["routerLink", "/cart", 1, "nav-item", "nav-link"], [1, "nav-item", "nav-link", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_nav_0_Template, 10, 0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.username);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["h1[_ngcontent-%COMP%]{\r\n    color: brown;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMXtcclxuICAgIGNvbG9yOiBicm93bjtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./product-list/product-list.component */
    "./src/app/product-list/product-list.component.ts");
    /* harmony import */


    var _BigBasketData_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./BigBasketData.service */
    "./src/app/BigBasketData.service.ts");
    /* harmony import */


    var _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./inventory/inventory.component */
    "./src/app/inventory/inventory.component.ts");
    /* harmony import */


    var _priceupdater_priceupdater_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./priceupdater/priceupdater.component */
    "./src/app/priceupdater/priceupdater.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./userlist/userlist.component */
    "./src/app/userlist/userlist.component.ts");
    /* harmony import */


    var _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./userdetails/userdetails.component */
    "./src/app/userdetails/userdetails.component.ts");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./registration/registration.component */
    "./src/app/registration/registration.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _cart_list_cart_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./cart-list/cart-list.component */
    "./src/app/cart-list/cart-list.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _routing_routing_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./routing/routing.module */
    "./src/app/routing/routing.module.ts"); //import { MatInputModule } from "@angular/material";


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_BigBasketData_service__WEBPACK_IMPORTED_MODULE_7__["BigBasketDataService"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"], _routing_routing_module__WEBPACK_IMPORTED_MODULE_18__["RoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductListComponent"], _priceupdater_priceupdater_component__WEBPACK_IMPORTED_MODULE_9__["PriceupdaterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_12__["UserlistComponent"], _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_13__["UserdetailsComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_14__["RegistrationComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"], _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_8__["InventoryComponent"], _cart_list_cart_list_component__WEBPACK_IMPORTED_MODULE_16__["CartListComponent"] // list of components
        ],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"], _routing_routing_module__WEBPACK_IMPORTED_MODULE_18__["RoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductListComponent"], _priceupdater_priceupdater_component__WEBPACK_IMPORTED_MODULE_9__["PriceupdaterComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _userlist_userlist_component__WEBPACK_IMPORTED_MODULE_12__["UserlistComponent"], _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_13__["UserdetailsComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_14__["RegistrationComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_15__["MenuComponent"], _inventory_inventory_component__WEBPACK_IMPORTED_MODULE_8__["InventoryComponent"], _cart_list_cart_list_component__WEBPACK_IMPORTED_MODULE_16__["CartListComponent"] // list of components
          ],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"], _routing_routing_module__WEBPACK_IMPORTED_MODULE_18__["RoutingModule"]],
          providers: [_BigBasketData_service__WEBPACK_IMPORTED_MODULE_7__["BigBasketDataService"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] // which is root component

        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth.service.ts":
  /*!*********************************!*\
    !*** ./src/app/auth.service.ts ***!
    \*********************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _userdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./userdata.service */
    "./src/app/userdata.service.ts");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(userDataSerice) {
        _classCallCheck(this, AuthService);

        this.userDataSerice = userDataSerice;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](); // stream of values
      }

      _createClass(AuthService, [{
        key: "setUserName",
        value: function setUserName(username) {
          this.subject.next(username); // add it to the stream of values
        }
      }, {
        key: "getUserName",
        value: function getUserName() {
          return this.subject.asObservable(); // emit  every new value
        }
      }, {
        key: "login",
        value: function login(username, password) {
          //const users = this.userDataSerice.userList.find();
          var users = this.userDataSerice.getUsers();
          console.log(users);
          var user = users.find(function (x) {
            return x.username === username && x.password === password;
          });

          if (!user) {
            return 'Invalid user name or password';
          } else {
            return '';
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          this.subject.next(null);
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_userdata_service__WEBPACK_IMPORTED_MODULE_2__["UserdataService"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _userdata_service__WEBPACK_IMPORTED_MODULE_2__["UserdataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cart-list/cart-list.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/cart-list/cart-list.component.ts ***!
    \**************************************************/

  /*! exports provided: CartListComponent */

  /***/
  function srcAppCartListCartListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartListComponent", function () {
      return CartListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _cartdata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../cartdata.service */
    "./src/app/cartdata.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CartListComponent_tr_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.price);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r1.imgPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var CartListComponent = /*#__PURE__*/function () {
      function CartListComponent(cartService) {
        _classCallCheck(this, CartListComponent);

        this.cartService = cartService;
      }

      _createClass(CartListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cartProductList = this.cartService.getCartProductList();
        }
      }]);

      return CartListComponent;
    }();

    CartListComponent.ɵfac = function CartListComponent_Factory(t) {
      return new (t || CartListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cartdata_service__WEBPACK_IMPORTED_MODULE_1__["CartdataService"]));
    };

    CartListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CartListComponent,
      selectors: [["app-cart-list"]],
      decls: 4,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], [3, "src"]],
      template: function CartListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "cart-list works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CartListComponent_tr_3_Template, 7, 3, "tr", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cartProductList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQtbGlzdC9jYXJ0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cart-list',
          templateUrl: './cart-list.component.html',
          styleUrls: ['./cart-list.component.css']
        }]
      }], function () {
        return [{
          type: _cartdata_service__WEBPACK_IMPORTED_MODULE_1__["CartdataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cartdata.service.ts":
  /*!*************************************!*\
    !*** ./src/app/cartdata.service.ts ***!
    \*************************************/

  /*! exports provided: CartdataService */

  /***/
  function srcAppCartdataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartdataService", function () {
      return CartdataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CartdataService = /*#__PURE__*/function () {
      function CartdataService() {
        _classCallCheck(this, CartdataService);

        this.carProductList = [];
      }

      _createClass(CartdataService, [{
        key: "addProduct",
        value: function addProduct(product) {
          this.carProductList.push(product);
        }
      }, {
        key: "getCartProductList",
        value: function getCartProductList() {
          return this.carProductList;
        }
      }]);

      return CartdataService;
    }();

    CartdataService.ɵfac = function CartdataService_Factory(t) {
      return new (t || CartdataService)();
    };

    CartdataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CartdataService,
      factory: CartdataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartdataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(auth) {
        _classCallCheck(this, HeaderComponent);

        this.auth = auth;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.auth.getUserName().subscribe(function (newusername) {
            return _this2.username = newusername;
          });
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 2,
      vars: 1,
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcome ", ctx.username, "");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/inventory/inventory.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/inventory/inventory.component.ts ***!
    \**************************************************/

  /*! exports provided: InventoryComponent */

  /***/
  function srcAppInventoryInventoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InventoryComponent", function () {
      return InventoryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _productdataservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../productdataservice.service */
    "./src/app/productdataservice.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _priceupdater_priceupdater_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../priceupdater/priceupdater.component */
    "./src/app/priceupdater/priceupdater.component.ts");

    function InventoryComponent_tr_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-priceupdater", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("update", function InventoryComponent_tr_3_Template_app_priceupdater_update_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var product_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.setNewValue($event, product_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InventoryComponent_tr_3_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var product_r1 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4["delete"](product_r1.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 3, product_r1.price));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pricevalue", product_r1.price);
      }
    }

    var InventoryComponent = /*#__PURE__*/function () {
      function InventoryComponent(dataService) {
        _classCallCheck(this, InventoryComponent);

        this.dataService = dataService;
      }

      _createClass(InventoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.products = this.dataService.getProductList();
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) this.products.splice(i, 1);
          }
        }
      }, {
        key: "setNewValue",
        value: function setNewValue(newPrice, id) {
          var p = this.findproductbyid(id);
          p.price = newPrice;
        }
      }, {
        key: "findproductbyid",
        value: function findproductbyid(id) {
          //let p= this.products.find(p=> id===id);
          var _iterator = _createForOfIteratorHelper(this.products),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var p = _step.value;
              if (p.id == id) return p;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }
      }]);

      return InventoryComponent;
    }();

    InventoryComponent.ɵfac = function InventoryComponent_Factory(t) {
      return new (t || InventoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_productdataservice_service__WEBPACK_IMPORTED_MODULE_1__["ProductdataserviceService"]));
    };

    InventoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: InventoryComponent,
      selectors: [["app-inventory"]],
      decls: 4,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], [3, "pricevalue", "update"], [3, "click"]],
      template: function InventoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Inventory Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InventoryComponent_tr_3_Template, 10, 5, "tr", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _priceupdater_priceupdater_component__WEBPACK_IMPORTED_MODULE_3__["PriceupdaterComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]],
      styles: ["img[_ngcontent-%COMP%]{\r\n    height: 100px;\r\n    width: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50b3J5L2ludmVudG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9pbnZlbnRvcnkvaW52ZW50b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InventoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-inventory',
          templateUrl: './inventory.component.html',
          styleUrls: ['./inventory.component.css']
        }]
      }], function () {
        return [{
          type: _productdataservice_service__WEBPACK_IMPORTED_MODULE_1__["ProductdataserviceService"]
        }];
      }, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(auth, router, formBuilder) {
        _classCallCheck(this, LoginComponent);

        this.auth = auth;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.loading = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {//   this.loginForm = this.formBuilder.group({
          //     username: ['', Validators.required],
          //     password: ['', Validators.required]
          // });
        } //get f() { return this.loginForm.controls; }

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true;
          this.loading = true;
          console.log('onSubmit');
          this.resultString = this.auth.login(this.username, this.password);
          console.log(this.resultString);

          if (this.resultString === '') {
            this.auth.setUserName(this.username);
            this.router.navigate(['/products']);
          } //this.router.navigate(['header']);
          //this.router.navigateByUrl('/header');

        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 14,
      vars: 3,
      consts: [["matInput", "", "type", "text", "name", "username", "required", "", 3, "ngModel", "ngModelChange"], ["type", "password", 3, "ngModel", "ngModelChange"], [3, "click"], ["routerLink", "/registration", 1, "btn", "btn-link"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Enter Username: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_3_listener($event) {
            return ctx.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Enter Password: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_6_listener($event) {
            return ctx.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_8_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", ctx.resultString, " ");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var MenuComponent = /*#__PURE__*/function () {
      function MenuComponent() {
        _classCallCheck(this, MenuComponent);
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenuComponent;
    }();

    MenuComponent.ɵfac = function MenuComponent_Factory(t) {
      return new (t || MenuComponent)();
    };

    MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponent,
      selectors: [["app-menu"]],
      decls: 10,
      vars: 0,
      consts: [[1, "nav", "nav-pills"], ["role", "presentation"], ["routerLink", "products"], ["routerLink", "users"], ["routerLink", "cart"]],
      template: function MenuComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Users");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu',
          templateUrl: './menu.component.html',
          styleUrls: ['./menu.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pagenotfound/pagenotfound.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pagenotfound/pagenotfound.component.ts ***!
    \********************************************************/

  /*! exports provided: PagenotfoundComponent */

  /***/
  function srcAppPagenotfoundPagenotfoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function () {
      return PagenotfoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PagenotfoundComponent = /*#__PURE__*/function () {
      function PagenotfoundComponent() {
        _classCallCheck(this, PagenotfoundComponent);
      }

      _createClass(PagenotfoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PagenotfoundComponent;
    }();

    PagenotfoundComponent.ɵfac = function PagenotfoundComponent_Factory(t) {
      return new (t || PagenotfoundComponent)();
    };

    PagenotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PagenotfoundComponent,
      selectors: [["app-pagenotfound"]],
      decls: 2,
      vars: 0,
      template: function PagenotfoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " The Page you looking for is not found.\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagenotfoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pagenotfound',
          templateUrl: './pagenotfound.component.html',
          styleUrls: ['./pagenotfound.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/priceupdater/priceupdater.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/priceupdater/priceupdater.component.ts ***!
    \********************************************************/

  /*! exports provided: PriceupdaterComponent */

  /***/
  function srcAppPriceupdaterPriceupdaterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PriceupdaterComponent", function () {
      return PriceupdaterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var PriceupdaterComponent = /*#__PURE__*/function () {
      function PriceupdaterComponent() {
        _classCallCheck(this, PriceupdaterComponent);

        this.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(PriceupdaterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "updatePrice",
        value: function updatePrice() {
          console.log('updatePrice'); //emit a custom event with new value

          this.update.emit(this.pricevalue);
        }
      }]);

      return PriceupdaterComponent;
    }();

    PriceupdaterComponent.ɵfac = function PriceupdaterComponent_Factory(t) {
      return new (t || PriceupdaterComponent)();
    };

    PriceupdaterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PriceupdaterComponent,
      selectors: [["app-priceupdater"]],
      inputs: {
        pricevalue: "pricevalue"
      },
      outputs: {
        update: "update"
      },
      decls: 3,
      vars: 1,
      consts: [["type", "number", 3, "ngModel", "ngModelChange"], [3, "click"]],
      template: function PriceupdaterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PriceupdaterComponent_Template_input_ngModelChange_0_listener($event) {
            return ctx.pricevalue = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PriceupdaterComponent_Template_button_click_1_listener() {
            return ctx.updatePrice();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.pricevalue);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaWNldXBkYXRlci9wcmljZXVwZGF0ZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PriceupdaterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-priceupdater',
          templateUrl: './priceupdater.component.html',
          styleUrls: ['./priceupdater.component.css']
        }]
      }], function () {
        return [];
      }, {
        pricevalue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/product-list/product-list.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/product-list/product-list.component.ts ***!
    \********************************************************/

  /*! exports provided: ProductListComponent */

  /***/
  function srcAppProductListProductListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductListComponent", function () {
      return ProductListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _productdataservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../productdataservice.service */
    "./src/app/productdataservice.service.ts");
    /* harmony import */


    var _cartdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../cartdata.service */
    "./src/app/cartdata.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProductListComponent_tr_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductListComponent_tr_3_Template_button_click_8_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var product_r1 = ctx.$implicit;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.addToCart(product_r1);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "+");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.price);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r1.imgPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var ProductListComponent = /*#__PURE__*/function () {
      function ProductListComponent(dataService, cartService) {
        _classCallCheck(this, ProductListComponent);

        //let dataService= new ProductdataserviceService();
        this.dataService = dataService;
        this.cartService = cartService;
      }

      _createClass(ProductListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.productList = this.dataService.getProductList();
        }
      }, {
        key: "addToCart",
        value: function addToCart(item) {
          console.log('add to cart');
          this.cartService.addProduct(item);
        }
      }]);

      return ProductListComponent;
    }();

    ProductListComponent.ɵfac = function ProductListComponent_Factory(t) {
      return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_productdataservice_service__WEBPACK_IMPORTED_MODULE_1__["ProductdataserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_cartdata_service__WEBPACK_IMPORTED_MODULE_2__["CartdataService"]));
    };

    ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductListComponent,
      selectors: [["app-product-list"]],
      decls: 4,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], [3, "src"], [3, "click"]],
      template: function ProductListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "product-list works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductListComponent_tr_3_Template, 10, 3, "tr", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.productList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-list',
          templateUrl: './product-list.component.html',
          styleUrls: ['./product-list.component.css']
        }]
      }], function () {
        return [{
          type: _productdataservice_service__WEBPACK_IMPORTED_MODULE_1__["ProductdataserviceService"]
        }, {
          type: _cartdata_service__WEBPACK_IMPORTED_MODULE_2__["CartdataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/product-list/product.ts":
  /*!*****************************************!*\
    !*** ./src/app/product-list/product.ts ***!
    \*****************************************/

  /*! exports provided: Product */

  /***/
  function srcAppProductListProductTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Product", function () {
      return Product;
    });

    var Product = function Product(id, name, category, price, imgPath) {
      _classCallCheck(this, Product);

      this.id = id;
      this.name = name;
      this.imgPath = imgPath;
      this.price = price;
      this.category = category;
    };
    /***/

  },

  /***/
  "./src/app/productdataservice.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/productdataservice.service.ts ***!
    \***********************************************/

  /*! exports provided: ProductdataserviceService */

  /***/
  function srcAppProductdataserviceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductdataserviceService", function () {
      return ProductdataserviceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _product_list_product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./product-list/product */
    "./src/app/product-list/product.ts");

    var ProductdataserviceService = /*#__PURE__*/function () {
      function ProductdataserviceService() {
        _classCallCheck(this, ProductdataserviceService);

        this.productList = []; //super();

        var p1 = new _product_list_product__WEBPACK_IMPORTED_MODULE_1__["Product"](1, "MotoG4", "Mobiles", 24000, "assets/images/1.jpg");
        var p2 = new _product_list_product__WEBPACK_IMPORTED_MODULE_1__["Product"](2, "SonyDSC", "Camera", 64000, "assets/images/2.jpg");
        var p3 = new _product_list_product__WEBPACK_IMPORTED_MODULE_1__["Product"](3, "Lenovo110", "Laptops", 54000, "assets/images/3.jpg");
        var p4 = new _product_list_product__WEBPACK_IMPORTED_MODULE_1__["Product"](4, "Xiomi55", "Mobiles", 14000, "assets/images/4.jpg");
        var p5 = new _product_list_product__WEBPACK_IMPORTED_MODULE_1__["Product"](5, "Samsung Galaxy", "Mobiles", 44000, "assets/images/5.jpg");
        this.productList.push(p1);
        this.productList.push(p2);
        this.productList.push(p3);
        this.productList.push(p4);
        this.productList.push(p5);
      }

      _createClass(ProductdataserviceService, [{
        key: "getProductList",
        value: function getProductList() {
          return this.productList;
        }
      }]);

      return ProductdataserviceService;
    }();

    ProductdataserviceService.ɵfac = function ProductdataserviceService_Factory(t) {
      return new (t || ProductdataserviceService)();
    };

    ProductdataserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ProductdataserviceService,
      factory: ProductdataserviceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductdataserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _userdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../userdata.service */
    "./src/app/userdata.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function RegistrationComponent_label_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter user name. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", "error");
      }
    }

    function RegistrationComponent_label_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enter password. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var RegistrationComponent = /*#__PURE__*/function () {
      function RegistrationComponent(userdata, router, formBuilder) {
        _classCallCheck(this, RegistrationComponent);

        this.userdata = userdata;
        this.router = router;
        this.formBuilder = formBuilder;
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
          lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
          username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
      }

      _createClass(RegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          /* this.signupForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
          }); */
        } //get f() { return this.signupForm.controls; }

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (this.signupForm.valid) {
            console.log('form submitted', this.signupForm.value);
            /* this.userdata.addUser({email:this.signupForm.value.email,Password:this.signupForm.value.password,gender:this.signupForm.value.gender,country:this.signupForm.value.country}).subscribe(resp=>{
              console.log(resp);
            });
            }else{
            console.log('input wrong input');
            } */

            this.userdata.addUser({
              firstname: this.signupForm.value.firstname,
              lastname: this.signupForm.value.lastname,
              username: this.signupForm.value.username,
              password: this.signupForm.value.password
            });
            this.router.navigate(['/login']);
          }
        }
      }]);

      return RegistrationComponent;
    }();

    RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
      return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_userdata_service__WEBPACK_IMPORTED_MODULE_2__["UserdataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegistrationComponent,
      selectors: [["app-registration"]],
      decls: 36,
      vars: 9,
      consts: [[3, "formGroup", "ngSubmit"], [1, "form-group"], ["for", "firstname"], ["type", "text", "id", "firstname", "placeholder", "firstname", "formControlName", "firstname"], ["for", "lastname"], ["type", "text", "id", "lastname", "placeholder", "lastname", "formControlName", "lastname"], ["for", "inputusername"], ["type", "text", "id", "inputusername", "placeholder", "username", "formControlName", "username", "required", ""], [3, "ngClass", 4, "ngIf"], ["for", "inputPassword"], ["type", "password", "id", "inputPassword", "placeholder", "Password", "formControlName", "password", "required", ""], [4, "ngIf"], ["routerLink", "/login", 1, "btn", "btn-link"], ["type", "submit", 1, "btn", "btn-primary"], [3, "ngClass"]],
      template: function RegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_Template_form_ngSubmit_2_listener() {
            return ctx.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "legend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "SignUp");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "firstname");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "lastname");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "username");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, RegistrationComponent_label_18_Template, 2, 1, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, RegistrationComponent_label_24_Template, 2, 0, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](32, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signupForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.get("username").invalid && ctx.signupForm.get("username").dirty);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signupForm.get("password").invalid);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Form value ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](32, 5, ctx.signupForm.value), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Form status ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 7, ctx.signupForm.status), " ");
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]],
      styles: ["label[_ngcontent-%COMP%]{\r\n    display: inline-block;\r\n    width: 140px;\r\n    text-align: left;\r\n}\r\ninput.invalid[_ngcontent-%COMP%]{\r\n    border-left: solid 5px red;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVse1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5pbnB1dC5pbnZhbGlke1xyXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDVweCByZWQ7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-registration',
          templateUrl: './registration.component.html',
          styleUrls: ['./registration.component.css']
        }]
      }], function () {
        return [{
          type: _userdata_service__WEBPACK_IMPORTED_MODULE_2__["UserdataService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/routing/routing.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/routing/routing.module.ts ***!
    \*******************************************/

  /*! exports provided: RoutingModule */

  /***/
  function srcAppRoutingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoutingModule", function () {
      return RoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var RoutingModule = function RoutingModule() {
      _classCallCheck(this, RoutingModule);
    };

    RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: RoutingModule
    });
    RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function RoutingModule_Factory(t) {
        return new (t || RoutingModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoutingModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/userdata.service.ts":
  /*!*************************************!*\
    !*** ./src/app/userdata.service.ts ***!
    \*************************************/

  /*! exports provided: UserdataService */

  /***/
  function srcAppUserdataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserdataService", function () {
      return UserdataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var UserdataService = /*#__PURE__*/function () {
      function UserdataService(http) {
        _classCallCheck(this, UserdataService);

        this.http = http;
        this.userList = [];
      }
      /* getUsers():Observable<any>{
        return this.http.get('http://jsonplaceholder.typicode.com/users');
      } */


      _createClass(UserdataService, [{
        key: "getUsers",
        value: function getUsers() {
          return this.userList;
        } // getUser(id:number):Observable<any>{
        //   return this.http.get('http://jsonplaceholder.typicode.com/users/'+ id);
        // }

      }, {
        key: "getUser",
        value: function getUser(username) {
          //return this.userList.find(x=>);
          return this.userList.find(function (x) {
            return x.username === username;
          });
        }
        /* addUser(user:any):Observable<any>{
          return this.http.post('http://jsonplaceholder.typicode.com/users', user);
        } */

      }, {
        key: "addUser",
        value: function addUser(user) {
          this.userList.push(user);
        }
      }]);

      return UserdataService;
    }();

    UserdataService.ɵfac = function UserdataService_Factory(t) {
      return new (t || UserdataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    UserdataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: UserdataService,
      factory: UserdataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserdataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/userdetails/userdetails.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/userdetails/userdetails.component.ts ***!
    \******************************************************/

  /*! exports provided: UserdetailsComponent */

  /***/
  function srcAppUserdetailsUserdetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserdetailsComponent", function () {
      return UserdetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _userdata_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../userdata.service */
    "./src/app/userdata.service.ts"); //import { FlatMap } from "rxjs/operators";


    var UserdetailsComponent = /*#__PURE__*/function () {
      //params: any;
      function UserdetailsComponent(activateroute, userservice) {
        _classCallCheck(this, UserdetailsComponent);

        this.activateroute = activateroute;
        this.userservice = userservice;
        console.log(this.activateroute.params);
      }

      _createClass(UserdetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          /* this.activateroute.params.subscribe(params =>{
            console.log('user id' + params['id']);
           this.userid=params['id'];
          }); */
          var queryParams = this.activateroute.snapshot.queryParams;
          var routeParams = this.activateroute.snapshot.params; // do something with the parameters

          console.log(routeParams.username); //goToProductDetails(id) {
          //  this.router.navigate(['/product-details', id]);
          //}
          // this.activateroute.paramMap
          // .pipe(flatMap(routeparams=>this.userservice.getUser((routeparams.get('id'))))
          // .subscribe(userobj=>this.user=userobj);

          this.user = this.userservice.getUser(this.userid);
        }
      }]);

      return UserdetailsComponent;
    }();

    UserdetailsComponent.ɵfac = function UserdetailsComponent_Factory(t) {
      return new (t || UserdetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_userdata_service__WEBPACK_IMPORTED_MODULE_2__["UserdataService"]));
    };

    UserdetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserdetailsComponent,
      selectors: [["app-userdetails"]],
      decls: 9,
      vars: 3,
      template: function UserdetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "User Details Component");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" User Details for ", ctx.user == null ? null : ctx.user.username, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Name: ", ctx.user == null ? null : ctx.user.firstname, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email:", ctx.user == null ? null : ctx.user.lastname, "");
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJkZXRhaWxzL3VzZXJkZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserdetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-userdetails',
          templateUrl: './userdetails.component.html',
          styleUrls: ['./userdetails.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _userdata_service__WEBPACK_IMPORTED_MODULE_2__["UserdataService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/userlist/userlist.component.ts":
  /*!************************************************!*\
    !*** ./src/app/userlist/userlist.component.ts ***!
    \************************************************/

  /*! exports provided: UserlistComponent */

  /***/
  function srcAppUserlistUserlistComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserlistComponent", function () {
      return UserlistComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _userdata_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../userdata.service */
    "./src/app/userdata.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a1) {
      return ["userdetails", a1];
    };

    function UserlistComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, user_r1.username));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r1.username);
      }
    }

    var UserlistComponent = /*#__PURE__*/function () {
      function UserlistComponent(userdataService) {
        _classCallCheck(this, UserlistComponent);

        this.userdataService = userdataService;
      }

      _createClass(UserlistComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          /* this.userdata.getUsers().subscribe(userarray  => {
            this.userList=userarray;
          }); */
          this.userList = this.userdataService.getUsers();
        }
      }]);

      return UserlistComponent;
    }();

    UserlistComponent.ɵfac = function UserlistComponent_Factory(t) {
      return new (t || UserlistComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_userdata_service__WEBPACK_IMPORTED_MODULE_1__["UserdataService"]));
    };

    UserlistComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UserlistComponent,
      selectors: [["app-userlist"]],
      decls: 5,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"], [3, "routerLink"]],
      template: function UserlistComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "List of Users ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UserlistComponent_li_4_Template, 3, 4, "li", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userList);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJsaXN0L3VzZXJsaXN0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserlistComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-userlist',
          templateUrl: './userlist.component.html',
          styleUrls: ['./userlist.component.css']
        }]
      }], function () {
        return [{
          type: _userdata_service__WEBPACK_IMPORTED_MODULE_1__["UserdataService"]
        }];
      }, null);
    })();
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
    /*! D:\angular\angular1-main (1)\angular1-main\AngularSelfAssignment (2)\AngularSelfAssignment\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map