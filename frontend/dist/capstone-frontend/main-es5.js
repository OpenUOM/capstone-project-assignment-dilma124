(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


      var _components_add_new_student_add_new_student_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/add-new-student/add-new-student.component */
      "./src/app/components/add-new-student/add-new-student.component.ts");
      /* harmony import */


      var _components_add_new_teacher_add_new_teacher_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/add-new-teacher/add-new-teacher.component */
      "./src/app/components/add-new-teacher/add-new-teacher.component.ts");
      /* harmony import */


      var _components_edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/edit-student/edit-student.component */
      "./src/app/components/edit-student/edit-student.component.ts");
      /* harmony import */


      var _components_edit_teacher_edit_teacher_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/edit-teacher/edit-teacher.component */
      "./src/app/components/edit-teacher/edit-teacher.component.ts");
      /* harmony import */


      var _components_student_table_student_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/student-table/student-table.component */
      "./src/app/components/student-table/student-table.component.ts");
      /* harmony import */


      var _components_teacher_table_teacher_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/teacher-table/teacher-table.component */
      "./src/app/components/teacher-table/teacher-table.component.ts");
      /* harmony import */


      var _components_db_initialize_db_initialize_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/db-initialize/db-initialize.component */
      "./src/app/components/db-initialize/db-initialize.component.ts");

      var routes = [{
        path: '',
        component: _components_teacher_table_teacher_table_component__WEBPACK_IMPORTED_MODULE_7__["TeacherTableComponent"]
      }, {
        path: 'student',
        component: _components_student_table_student_table_component__WEBPACK_IMPORTED_MODULE_6__["StudentTableComponent"]
      }, {
        path: 'addTeacher',
        component: _components_add_new_teacher_add_new_teacher_component__WEBPACK_IMPORTED_MODULE_3__["AddNewTeacherComponent"]
      }, {
        path: 'addStudent',
        component: _components_add_new_student_add_new_student_component__WEBPACK_IMPORTED_MODULE_2__["AddNewStudentComponent"]
      }, {
        path: 'editStudent',
        component: _components_edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_4__["EditStudentComponent"]
      }, {
        path: 'editTeacher',
        component: _components_edit_teacher_edit_teacher_component__WEBPACK_IMPORTED_MODULE_5__["EditTeacherComponent"]
      }, {
        path: 'dbinitialize',
        component: _components_db_initialize_db_initialize_component__WEBPACK_IMPORTED_MODULE_8__["DbInitializeComponent"]
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

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
    "./src/app/app-service.service.ts":
    /*!****************************************!*\
      !*** ./src/app/app-service.service.ts ***!
      \****************************************/

    /*! exports provided: AppServiceService */

    /***/
    function srcAppAppServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppServiceService", function () {
        return AppServiceService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

      var AppServiceService = /*#__PURE__*/function () {
        function AppServiceService(http) {
          _classCallCheck(this, AppServiceService);

          this.http = http;

          if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production == false) {
            this.ROOT_URL = 'test';
          } else {
            this.ROOT_URL = 'api';
          }
        }

        _createClass(AppServiceService, [{
          key: "initializeDB",
          value: function initializeDB() {
            return this.http.get("/".concat(this.ROOT_URL, "/dbinitialize"));
          }
        }, {
          key: "getTeacherData",
          value: function getTeacherData() {
            return this.http.get("/".concat(this.ROOT_URL, "/listTeachers"));
          }
        }, {
          key: "getStudentData",
          value: function getStudentData() {
            return this.http.get("/".concat(this.ROOT_URL, "/listStudents"));
          }
        }, {
          key: "getOneStudentData",
          value: function getOneStudentData(payload) {
            return this.http.post("/".concat(this.ROOT_URL, "/getStudentInfo"), payload);
          }
        }, {
          key: "getOneTeacherData",
          value: function getOneTeacherData(payload) {
            return this.http.post("/".concat(this.ROOT_URL, "/getTeacherInfo"), payload);
          }
        }, {
          key: "addTeacher",
          value: function addTeacher(payload) {
            return this.http.post("/".concat(this.ROOT_URL, "/addTeacher"), payload);
          }
        }, {
          key: "deleteTeacher",
          value: function deleteTeacher(payload) {
            return this.http.post("/".concat(this.ROOT_URL, "/deleteTeacher"), payload);
          }
        }, {
          key: "editTeacher",
          value: function editTeacher(payload) {
            return this.http.post("/".concat(this.ROOT_URL, "/editTeacher"), payload);
          }
        }, {
          key: "editStudent",
          value: function editStudent(payload) {
            return this.http.post("/".concat(this.ROOT_URL, "/editStudent"), payload);
          }
        }, {
          key: "addStudent",
          value: function addStudent(payload) {
            return this.http.post("/".concat(this.ROOT_URL, "/addStudent"), payload);
          }
        }, {
          key: "deleteStudent",
          value: function deleteStudent(payload) {
            return this.http.post("/".concat(this.ROOT_URL, "/deleteStudent"), payload);
          }
        }]);

        return AppServiceService;
      }();

      AppServiceService.ɵfac = function AppServiceService_Factory(t) {
        return new (t || AppServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      AppServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AppServiceService,
        factory: AppServiceService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppServiceService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'capstone-frontend';
      });

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
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
        }], null, null);
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/navbar/navbar.component */
      "./src/app/components/navbar/navbar.component.ts");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
      /* harmony import */


      var _components_student_table_student_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/student-table/student-table.component */
      "./src/app/components/student-table/student-table.component.ts");
      /* harmony import */


      var _components_teacher_table_teacher_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/teacher-table/teacher-table.component */
      "./src/app/components/teacher-table/teacher-table.component.ts");
      /* harmony import */


      var _components_add_new_teacher_add_new_teacher_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/add-new-teacher/add-new-teacher.component */
      "./src/app/components/add-new-teacher/add-new-teacher.component.ts");
      /* harmony import */


      var _components_add_new_student_add_new_student_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/add-new-student/add-new-student.component */
      "./src/app/components/add-new-student/add-new-student.component.ts");
      /* harmony import */


      var _components_edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/edit-student/edit-student.component */
      "./src/app/components/edit-student/edit-student.component.ts");
      /* harmony import */


      var _components_edit_teacher_edit_teacher_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/edit-teacher/edit-teacher.component */
      "./src/app/components/edit-teacher/edit-teacher.component.ts");
      /* harmony import */


      var _components_db_initialize_db_initialize_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/db-initialize/db-initialize.component */
      "./src/app/components/db-initialize/db-initialize.component.ts");

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _components_student_table_student_table_component__WEBPACK_IMPORTED_MODULE_8__["StudentTableComponent"], _components_teacher_table_teacher_table_component__WEBPACK_IMPORTED_MODULE_9__["TeacherTableComponent"], _components_add_new_teacher_add_new_teacher_component__WEBPACK_IMPORTED_MODULE_10__["AddNewTeacherComponent"], _components_add_new_student_add_new_student_component__WEBPACK_IMPORTED_MODULE_11__["AddNewStudentComponent"], _components_edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_12__["EditStudentComponent"], _components_edit_teacher_edit_teacher_component__WEBPACK_IMPORTED_MODULE_13__["EditTeacherComponent"], _components_db_initialize_db_initialize_component__WEBPACK_IMPORTED_MODULE_14__["DbInitializeComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _components_student_table_student_table_component__WEBPACK_IMPORTED_MODULE_8__["StudentTableComponent"], _components_teacher_table_teacher_table_component__WEBPACK_IMPORTED_MODULE_9__["TeacherTableComponent"], _components_add_new_teacher_add_new_teacher_component__WEBPACK_IMPORTED_MODULE_10__["AddNewTeacherComponent"], _components_add_new_student_add_new_student_component__WEBPACK_IMPORTED_MODULE_11__["AddNewStudentComponent"], _components_edit_student_edit_student_component__WEBPACK_IMPORTED_MODULE_12__["EditStudentComponent"], _components_edit_teacher_edit_teacher_component__WEBPACK_IMPORTED_MODULE_13__["EditTeacherComponent"], _components_db_initialize_db_initialize_component__WEBPACK_IMPORTED_MODULE_14__["DbInitializeComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/add-new-student/add-new-student.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/components/add-new-student/add-new-student.component.ts ***!
      \*************************************************************************/

    /*! exports provided: AddNewStudentComponent */

    /***/
    function srcAppComponentsAddNewStudentAddNewStudentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddNewStudentComponent", function () {
        return AddNewStudentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_app_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/app-service.service */
      "./src/app/app-service.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      "./src/app/components/navbar/navbar.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var AddNewStudentComponent = /*#__PURE__*/function () {
        function AddNewStudentComponent(service, router) {
          _classCallCheck(this, AddNewStudentComponent);

          this.service = service;
          this.router = router;
        }

        _createClass(AddNewStudentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "createStudent",
          value: function createStudent(value) {
            var _this = this;

            // Validate inputs
            if (!value.id || !value.name || !value.age || !value.hometown) {
              alert('Please fill in all fields: ID, Name, Age, and Hometown');
              return;
            } // Validate age is a number


            var age = parseInt(value.age, 10);

            if (isNaN(age) || age <= 0) {
              alert('Please enter a valid age');
              return;
            }

            var student = {
              id: value.id,
              name: value.name,
              age: age,
              hometown: value.hometown
            };
            console.log('Sending student data to backend:', student);
            this.service.addStudent(student).subscribe(function (response) {
              console.log('Student added successfully', response);
              alert('Student added successfully!');

              _this.router.navigate(['student']);
            }, function (error) {
              console.error('ERROR adding student - Full error details:', error);
              console.error('Error status:', error.status);
              console.error('Error message:', error.message);
              console.error('Error response:', error.error);
              var errorMsg = 'Error adding student';

              if (error.status === 0) {
                errorMsg = 'Cannot connect to backend server. Please ensure the backend is running on port 3000.';
              } else if (error.error && error.error.error) {
                errorMsg = error.error.error;
              } else if (error.message) {
                errorMsg = error.message;
              }

              alert(errorMsg);
            });
          }
        }]);

        return AddNewStudentComponent;
      }();

      AddNewStudentComponent.ɵfac = function AddNewStudentComponent_Factory(t) {
        return new (t || AddNewStudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_service_service__WEBPACK_IMPORTED_MODULE_1__["AppServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AddNewStudentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddNewStudentComponent,
        selectors: [["app-add-new-student"]],
        decls: 10,
        vars: 0,
        consts: [["title", "Add New Student"], [1, "form-container", 3, "ngSubmit"], ["addStudentForm", "ngForm"], ["id", "student-id", "ngModel", "", "name", "id", "type", "text", "placeholder", "ID"], ["id", "student-name", "ngModel", "", "name", "name", "type", "text", "placeholder", "Name"], ["id", "student-age", "ngModel", "", "name", "age", "type", "text", "placeholder", "Age"], ["id", "student-hometown", "ngModel", "", "name", "hometown", "type", "text", "placeholder", "Hometown"], ["type", "submit", "id", "student-add", 1, "form-button"]],
        template: function AddNewStudentComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddNewStudentComponent_Template_form_ngSubmit_2_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

              return ctx.createStudent(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Create");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
        styles: [".form-container[_ngcontent-%COMP%]{\r\n    padding-top: 100px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtbmV3LXN0dWRlbnQvYWRkLW5ldy1zdHVkZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQtbmV3LXN0dWRlbnQvYWRkLW5ldy1zdHVkZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddNewStudentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-new-student',
            templateUrl: './add-new-student.component.html',
            styleUrls: ['./add-new-student.component.css']
          }]
        }], function () {
          return [{
            type: src_app_app_service_service__WEBPACK_IMPORTED_MODULE_1__["AppServiceService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/add-new-teacher/add-new-teacher.component.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/components/add-new-teacher/add-new-teacher.component.ts ***!
      \*************************************************************************/

    /*! exports provided: AddNewTeacherComponent */

    /***/
    function srcAppComponentsAddNewTeacherAddNewTeacherComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddNewTeacherComponent", function () {
        return AddNewTeacherComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../app-service.service */
      "./src/app/app-service.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      "./src/app/components/navbar/navbar.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var AddNewTeacherComponent = /*#__PURE__*/function () {
        function AddNewTeacherComponent(service, router) {
          _classCallCheck(this, AddNewTeacherComponent);

          this.service = service;
          this.router = router;
        }

        _createClass(AddNewTeacherComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "createTeacher",
          value: function createTeacher(value) {
            var _this2 = this;

            // Validate inputs
            if (!value.id || !value.name || !value.age) {
              alert('Please fill in all fields: ID, Name, and Age');
              return;
            } // Validate age is a number


            var age = parseInt(value.age, 10);

            if (isNaN(age) || age <= 0) {
              alert('Please enter a valid age');
              return;
            }

            var teacher = {
              id: value.id,
              name: value.name,
              age: age
            };
            console.log('Sending teacher data to backend:', teacher);
            this.service.addTeacher(teacher).subscribe(function (response) {
              console.log('Teacher added successfully', response);
              alert('Teacher added successfully!');

              _this2.router.navigate(['']);
            }, function (error) {
              console.error('ERROR adding teacher - Full error details:', error);
              console.error('Error status:', error.status);
              console.error('Error message:', error.message);
              console.error('Error response:', error.error);
              var errorMsg = 'Error adding teacher';

              if (error.status === 0) {
                errorMsg = 'Cannot connect to backend server. Please ensure the backend is running on port 3000.';
              } else if (error.error && error.error.error) {
                errorMsg = error.error.error;
              } else if (error.message) {
                errorMsg = error.message;
              }

              alert(errorMsg);
            });
          }
        }]);

        return AddNewTeacherComponent;
      }();

      AddNewTeacherComponent.ɵfac = function AddNewTeacherComponent_Factory(t) {
        return new (t || AddNewTeacherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service_service__WEBPACK_IMPORTED_MODULE_1__["AppServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      AddNewTeacherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddNewTeacherComponent,
        selectors: [["app-add-new-teacher"]],
        decls: 9,
        vars: 0,
        consts: [["title", "Add New Teacher"], [1, "form-container", 3, "ngSubmit"], ["addTeacherForm", "ngForm"], ["id", "teacher-id", "ngModel", "", "name", "id", "type", "text", "placeholder", "ID"], ["id", "teacher-name", "ngModel", "", "name", "name", "type", "text", "placeholder", "Name"], ["id", "teacher-age", "ngModel", "", "name", "age", "type", "text", "placeholder", "Age"], ["type", "submit", "id", "teacher-add", 1, "form-button"]],
        template: function AddNewTeacherComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AddNewTeacherComponent_Template_form_ngSubmit_2_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

              return ctx.createTeacher(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Create");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
        styles: [".form-container[_ngcontent-%COMP%]{\r\n    padding-top: 100px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtbmV3LXRlYWNoZXIvYWRkLW5ldy10ZWFjaGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQtbmV3LXRlYWNoZXIvYWRkLW5ldy10ZWFjaGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddNewTeacherComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-add-new-teacher',
            templateUrl: './add-new-teacher.component.html',
            styleUrls: ['./add-new-teacher.component.css']
          }]
        }], function () {
          return [{
            type: _app_service_service__WEBPACK_IMPORTED_MODULE_1__["AppServiceService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/db-initialize/db-initialize.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/components/db-initialize/db-initialize.component.ts ***!
      \*********************************************************************/

    /*! exports provided: DbInitializeComponent */

    /***/
    function srcAppComponentsDbInitializeDbInitializeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DbInitializeComponent", function () {
        return DbInitializeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../app-service.service */
      "./src/app/app-service.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var DbInitializeComponent = /*#__PURE__*/function () {
        function DbInitializeComponent(service, router) {
          _classCallCheck(this, DbInitializeComponent);

          this.service = service;
          this.router = router;
        }

        _createClass(DbInitializeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.service.initializeDB().subscribe(function (response) {
              console.log('Database initialized:', response); // Redirect to home page after initialization

              _this3.router.navigate(['']);
            }, function (error) {
              console.error('Error initializing database:', error); // Still redirect even if there's an error

              _this3.router.navigate(['']);
            });
          }
        }]);

        return DbInitializeComponent;
      }();

      DbInitializeComponent.ɵfac = function DbInitializeComponent_Factory(t) {
        return new (t || DbInitializeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service_service__WEBPACK_IMPORTED_MODULE_1__["AppServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      DbInitializeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DbInitializeComponent,
        selectors: [["app-db-initialize"]],
        decls: 3,
        vars: 0,
        consts: [[1, "initializing"]],
        template: function DbInitializeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Initializing database...");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".initializing[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 100vh;\r\n    font-size: 18px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kYi1pbml0aWFsaXplL2RiLWluaXRpYWxpemUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kYi1pbml0aWFsaXplL2RiLWluaXRpYWxpemUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbml0aWFsaXppbmcge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DbInitializeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-db-initialize',
            templateUrl: './db-initialize.component.html',
            styleUrls: ['./db-initialize.component.css']
          }]
        }], function () {
          return [{
            type: _app_service_service__WEBPACK_IMPORTED_MODULE_1__["AppServiceService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/edit-student/edit-student.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/components/edit-student/edit-student.component.ts ***!
      \*******************************************************************/

    /*! exports provided: EditStudentComponent */

    /***/
    function srcAppComponentsEditStudentEditStudentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditStudentComponent", function () {
        return EditStudentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../app-service.service */
      "./src/app/app-service.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      "./src/app/components/navbar/navbar.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var EditStudentComponent = /*#__PURE__*/function () {
        function EditStudentComponent(service, router) {
          _classCallCheck(this, EditStudentComponent);

          this.service = service;
          this.router = router;
          this.studentData = {};
        }

        _createClass(EditStudentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _a, _b;

            var navigation = this.router.getCurrentNavigation();

            if ((_b = (_a = navigation === null || navigation === void 0 ? void 0 : navigation.extras) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.id) {
              this.studentId = navigation.extras.state.id;
              this.getStudentData();
            }
          }
        }, {
          key: "getStudentData",
          value: function getStudentData() {
            var _this4 = this;

            var student = {
              id: this.studentId
            };
            this.service.getOneStudentData(student).subscribe(function (response) {
              if (response && Array.isArray(response) && response.length > 0) {
                _this4.studentData = response[0];
              }
            }, function (error) {
              console.log('ERROR getting student data - ', error);
            });
          }
        }, {
          key: "editStudent",
          value: function editStudent(values) {
            var _this5 = this;

            // Validate inputs
            var name = values.name || this.studentData.name;
            var age = values.age || this.studentData.age;
            var hometown = values.hometown || this.studentData.hometown;

            if (!name || !age || !hometown) {
              alert('Please fill in all fields: Name, Age, and Hometown');
              return;
            } // Validate age is a number


            var ageNum = parseInt(age, 10);

            if (isNaN(ageNum) || ageNum <= 0) {
              alert('Please enter a valid age');
              return;
            }

            var updatedStudent = {
              id: this.studentId,
              name: name,
              age: ageNum,
              hometown: hometown
            };
            console.log('Sending updated student data to backend:', updatedStudent);
            this.service.editStudent(updatedStudent).subscribe(function (response) {
              console.log('Student updated successfully');
              alert('Student updated successfully!');

              _this5.router.navigate(['student']);
            }, function (error) {
              console.error('ERROR updating student - Full error details:', error);
              console.error('Error status:', error.status);
              console.error('Error message:', error.message);
              console.error('Error response:', error.error);
              var errorMsg = 'Error updating student';

              if (error.status === 0) {
                errorMsg = 'Cannot connect to backend server. Please ensure the backend is running on port 3000.';
              } else if (error.error && error.error.error) {
                errorMsg = error.error.error;
              } else if (error.message) {
                errorMsg = error.message;
              }

              alert(errorMsg);
            });
          }
        }]);

        return EditStudentComponent;
      }();

      EditStudentComponent.ɵfac = function EditStudentComponent_Factory(t) {
        return new (t || EditStudentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service_service__WEBPACK_IMPORTED_MODULE_1__["AppServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      EditStudentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditStudentComponent,
        selectors: [["app-edit-student"]],
        decls: 9,
        vars: 3,
        consts: [["title", "Edit Student Details"], [1, "form-container", 3, "ngSubmit"], ["editStudentForm", "ngForm"], ["id", "student-name", "name", "name", "type", "text", "placeholder", "Name", 3, "ngModel", "ngModelChange"], ["id", "student-age", "name", "age", "type", "text", "placeholder", "Age", 3, "ngModel", "ngModelChange"], ["id", "student-hometown", "name", "hometown", "type", "text", "placeholder", "Hometown", 3, "ngModel", "ngModelChange"], ["type", "submit", "id", "student-edit", 1, "form-button"]],
        template: function EditStudentComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditStudentComponent_Template_form_ngSubmit_2_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

              return ctx.editStudent(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditStudentComponent_Template_input_ngModelChange_4_listener($event) {
              return ctx.studentData.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditStudentComponent_Template_input_ngModelChange_5_listener($event) {
              return ctx.studentData.age = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditStudentComponent_Template_input_ngModelChange_6_listener($event) {
              return ctx.studentData.hometown = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Edit & Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.studentData.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.studentData.age);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.studentData.hometown);
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
        styles: [".form-container[_ngcontent-%COMP%]{\r\n    padding-top: 100px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LXN0dWRlbnQvZWRpdC1zdHVkZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lZGl0LXN0dWRlbnQvZWRpdC1zdHVkZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditStudentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-student',
            templateUrl: './edit-student.component.html',
            styleUrls: ['./edit-student.component.css']
          }]
        }], function () {
          return [{
            type: _app_service_service__WEBPACK_IMPORTED_MODULE_1__["AppServiceService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/edit-teacher/edit-teacher.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/components/edit-teacher/edit-teacher.component.ts ***!
      \*******************************************************************/

    /*! exports provided: EditTeacherComponent */

    /***/
    function srcAppComponentsEditTeacherEditTeacherComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditTeacherComponent", function () {
        return EditTeacherComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../app-service.service */
      "./src/app/app-service.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      "./src/app/components/navbar/navbar.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var EditTeacherComponent = /*#__PURE__*/function () {
        function EditTeacherComponent(service, router) {
          _classCallCheck(this, EditTeacherComponent);

          this.service = service;
          this.router = router;
          this.teacherData = {};
        }

        _createClass(EditTeacherComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _a, _b;

            var navigation = this.router.getCurrentNavigation();

            if ((_b = (_a = navigation === null || navigation === void 0 ? void 0 : navigation.extras) === null || _a === void 0 ? void 0 : _a.state) === null || _b === void 0 ? void 0 : _b.id) {
              this.teacherId = navigation.extras.state.id;
              this.getTeacherData();
            }
          }
        }, {
          key: "getTeacherData",
          value: function getTeacherData() {
            var _this6 = this;

            var teacher = {
              id: this.teacherId
            };
            this.service.getOneTeacherData(teacher).subscribe(function (response) {
              if (response && Array.isArray(response) && response.length > 0) {
                _this6.teacherData = response[0];
              }
            }, function (error) {
              console.log('ERROR getting teacher data - ', error);
            });
          }
        }, {
          key: "editTeacher",
          value: function editTeacher(values) {
            var _this7 = this;

            // Validate inputs
            var name = values.name || this.teacherData.name;
            var age = values.age || this.teacherData.age;

            if (!name || !age) {
              alert('Please fill in all fields: Name and Age');
              return;
            } // Validate age is a number


            var ageNum = parseInt(age, 10);

            if (isNaN(ageNum) || ageNum <= 0) {
              alert('Please enter a valid age');
              return;
            }

            var updatedTeacher = {
              id: this.teacherId,
              name: name,
              age: ageNum
            };
            console.log('Sending updated teacher data to backend:', updatedTeacher);
            this.service.editTeacher(updatedTeacher).subscribe(function (response) {
              console.log('Teacher updated successfully');
              alert('Teacher updated successfully!');

              _this7.router.navigate(['']);
            }, function (error) {
              console.error('ERROR updating teacher - Full error details:', error);
              console.error('Error status:', error.status);
              console.error('Error message:', error.message);
              console.error('Error response:', error.error);
              var errorMsg = 'Error updating teacher';

              if (error.status === 0) {
                errorMsg = 'Cannot connect to backend server. Please ensure the backend is running on port 3000.';
              } else if (error.error && error.error.error) {
                errorMsg = error.error.error;
              } else if (error.message) {
                errorMsg = error.message;
              }

              alert(errorMsg);
            });
          }
        }]);

        return EditTeacherComponent;
      }();

      EditTeacherComponent.ɵfac = function EditTeacherComponent_Factory(t) {
        return new (t || EditTeacherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service_service__WEBPACK_IMPORTED_MODULE_1__["AppServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
      };

      EditTeacherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditTeacherComponent,
        selectors: [["app-edit-teacher"]],
        decls: 8,
        vars: 2,
        consts: [["title", "Edit Teacher Details"], [1, "form-container", 3, "ngSubmit"], ["editTeacherForm", "ngForm"], ["id", "teacher-name", "name", "name", "type", "text", "placeholder", "Name", 3, "ngModel", "ngModelChange"], ["id", "teacher-age", "name", "age", "type", "text", "placeholder", "Age", 3, "ngModel", "ngModelChange"], ["type", "submit", "id", "teacher-edit", 1, "form-button"]],
        template: function EditTeacherComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditTeacherComponent_Template_form_ngSubmit_2_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

              return ctx.editTeacher(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditTeacherComponent_Template_input_ngModelChange_4_listener($event) {
              return ctx.teacherData.name = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EditTeacherComponent_Template_input_ngModelChange_5_listener($event) {
              return ctx.teacherData.age = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Edit & Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.teacherData.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.teacherData.age);
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
        styles: [".form-container[_ngcontent-%COMP%]{\r\n    padding-top: 100px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LXRlYWNoZXIvZWRpdC10ZWFjaGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lZGl0LXRlYWNoZXIvZWRpdC10ZWFjaGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditTeacherComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-teacher',
            templateUrl: './edit-teacher.component.html',
            styleUrls: ['./edit-teacher.component.css']
          }]
        }], function () {
          return [{
            type: _app_service_service__WEBPACK_IMPORTED_MODULE_1__["AppServiceService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/navbar/navbar.component.ts":
    /*!*******************************************************!*\
      !*** ./src/app/components/navbar/navbar.component.ts ***!
      \*******************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var _c0 = function _c0(a0) {
        return {
          bold: a0
        };
      };

      var NavbarComponent = /*#__PURE__*/function () {
        function NavbarComponent(router) {
          _classCallCheck(this, NavbarComponent);

          this.router = router;
        }

        _createClass(NavbarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NavbarComponent;
      }();

      NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
        return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavbarComponent,
        selectors: [["app-navbar"]],
        inputs: {
          title: "title"
        },
        decls: 17,
        vars: 7,
        consts: [[1, "navbar-container"], [1, "logo-container"], ["width", "80px", "src", "http://placehold.jp/18/ffffff/000000/120x120.png?text=LOGO", "alt", "Logo"], [1, "links-container"], ["id", "teacher-link", "routerLink", "", 3, "ngClass"], ["id", "student-link", "routerLink", "student", 3, "ngClass"], [1, "blank-space"], [1, "info-container"], [1, "info-text"]],
        template: function NavbarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Teachers");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "|");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Students");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.title == "Teachers"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.title == "Students"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
        styles: [".navbar-container[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 120px;\r\n    background-color: #272928;\r\n    display: flex;\r\n}\r\n\r\n.logo-container[_ngcontent-%COMP%]{\r\n    width: 33%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    \r\n}\r\n\r\n.blank-space[_ngcontent-%COMP%]{\r\n    width: 33%;\r\n\r\n    \r\n}\r\n\r\n.links-container[_ngcontent-%COMP%]{\r\n    width: 33%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    color: white;\r\n    font-size: 30px;\r\n    font-weight: 100;\r\n\r\n    \r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    font-size: 22px;\r\n    margin: 20px;\r\n    color: white;\r\n    font-weight: 300;\r\n}\r\n\r\n.bold[_ngcontent-%COMP%]{\r\n    font-weight: 400;\r\n}\r\n\r\n.logout[_ngcontent-%COMP%]{\r\n    font-weight: 200;\r\n}\r\n\r\n.info-container[_ngcontent-%COMP%]{\r\n    background-color: #EEEEEE;\r\n    height: 100px;\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: left;\r\n    align-items: center;\r\n\r\n}\r\n\r\n.info-text-container[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-left: 6%;\r\n   \r\n}\r\n\r\n.info-text[_ngcontent-%COMP%]{\r\n    font-size: 32px;\r\n    font-weight: 500;\r\n    letter-spacing: -2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkI7MEJBQ3NCO0FBQzFCOztBQUVBO0lBQ0ksVUFBVTs7SUFFVjswQkFDc0I7QUFDMUI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCOztJQUVoQjswQkFDc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyOTI4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmxvZ28tY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLyogYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7ICovXHJcbn1cclxuXHJcbi5ibGFuay1zcGFjZXtcclxuICAgIHdpZHRoOiAzMyU7XHJcblxyXG4gICAgLyogYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7ICovXHJcbn1cclxuXHJcbi5saW5rcy1jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMzMlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcblxyXG4gICAgLyogYm9yZGVyLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7ICovXHJcbn1cclxuXHJcbmF7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBtYXJnaW46IDIwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG59XHJcblxyXG4uYm9sZHtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5sb2dvdXR7XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG59XHJcblxyXG4uaW5mby1jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4uaW5mby10ZXh0LWNvbnRhaW5lcntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogNiU7XHJcbiAgIFxyXG59XHJcblxyXG4uaW5mby10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMnB4O1xyXG59XHJcblxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-navbar',
            templateUrl: './navbar.component.html',
            styleUrls: ['./navbar.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, {
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/components/student-table/student-table.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/components/student-table/student-table.component.ts ***!
      \*********************************************************************/

    /*! exports provided: StudentTableComponent */

    /***/
    function srcAppComponentsStudentTableStudentTableComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StudentTableComponent", function () {
        return StudentTableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
      /* harmony import */


      var _app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../app-service.service */
      "./src/app/app-service.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      "./src/app/components/navbar/navbar.component.ts");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function StudentTableComponent_tr_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentTableComponent_tr_21_Template_td_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var student_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.editStudent(student_r2[0].id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fa-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentTableComponent_tr_21_Template_td_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var student_r2 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.deleteStudent(student_r2[0].id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "fa-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var student_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r2[0].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r2[0].id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](2022 - student_r2[0].age);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r2[0].hometown);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "student-edit-", student_r2[0].id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faPenSquare);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "student-delete-", student_r2[0].id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faTrash);
        }
      }

      var StudentTableComponent = /*#__PURE__*/function () {
        function StudentTableComponent(service, router) {
          _classCallCheck(this, StudentTableComponent);

          this.service = service;
          this.router = router;
          this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrash"];
          this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"];
          this.faPenSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPenSquare"];
          this.studentData = [];
        }

        _createClass(StudentTableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeDB();
          }
        }, {
          key: "addNewStudent",
          value: function addNewStudent() {
            this.router.navigate(['addStudent']);
          }
        }, {
          key: "editStudent",
          value: function editStudent(id) {
            if (!id) {
              console.error('Student ID is missing');
              return;
            }

            var navigationExtras = {
              state: {
                id: id
              }
            };
            this.router.navigate(['editStudent'], navigationExtras);
          }
        }, {
          key: "initializeDB",
          value: function initializeDB() {
            var _this8 = this;

            this.service.initializeDB().subscribe(function (response) {
              console.log('DB initialized');

              _this8.getStudentData();
            }, function (error) {
              console.log('ERROR initializing DB - ', error);

              _this8.getStudentData();
            });
          }
        }, {
          key: "getStudentData",
          value: function getStudentData() {
            var _this9 = this;

            this.service.getStudentData().subscribe(function (response) {
              if (response && Object.keys(response).length > 0) {
                _this9.studentData = Object.keys(response).map(function (key) {
                  return [response[key]];
                });
              } else {
                _this9.studentData = [];
              }

              console.log('Student data loaded:', _this9.studentData);
            }, function (error) {
              console.log('ERROR loading students - ', error);
              _this9.studentData = [];
            });
          }
        }, {
          key: "deleteStudent",
          value: function deleteStudent(itemid) {
            var _this10 = this;

            if (!itemid) {
              console.error('Student ID is missing for delete');
              return;
            }

            if (!confirm('Are you sure you want to delete this student?')) {
              return;
            }

            var student = {
              id: itemid
            };
            this.service.deleteStudent(student).subscribe(function (response) {
              console.log('Student deleted successfully');

              _this10.getStudentData();
            }, function (error) {
              console.log('ERROR deleting student - ', error);
              alert('Error deleting student');
            });
          }
        }, {
          key: "search",
          value: function search(value) {
            var foundItems = [];

            if (value.length <= 0) {
              this.getStudentData();
            } else {
              this.studentData.filter(function (student) {
                if (student[0].name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                  foundItems.push(student);
                }
              });
              this.studentData = foundItems;
            }
          }
        }]);

        return StudentTableComponent;
      }();

      StudentTableComponent.ɵfac = function StudentTableComponent_Factory(t) {
        return new (t || StudentTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      StudentTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StudentTableComponent,
        selectors: [["app-student-table"]],
        decls: 22,
        vars: 2,
        consts: [["title", "Students"], [1, "add-btn-container"], [1, "add-btn-elements-container"], ["id", "student-search", "placeholder", "Search", 1, "search-input", 3, "keyup"], ["box", ""], [1, "btn", "add-button", 3, "click"], [3, "icon"], [1, "table-container"], ["id", "student-table"], [1, "action-column"], [4, "ngFor", "ngForOf"], [1, "action-cell", 3, "id", "click"], [1, "edit-icon", 3, "icon"], [1, "action-cell", "delete-cell", 3, "id", "click"], [1, "trash-icon", 3, "icon"]],
        template: function StudentTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function StudentTableComponent_Template_input_keyup_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

              return ctx.search(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StudentTableComponent_Template_button_click_5_listener() {
              return ctx.addNewStudent();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add New \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Student ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "DOB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Hometown");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, StudentTableComponent_tr_21_Template, 13, 8, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPlus);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.studentData);
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
        styles: ["table[_ngcontent-%COMP%] {\r\n    font-family: 'Poppins', sans-serif;\r\n    border-collapse: collapse;\r\n    width: 75%;\r\n    border-radius: 10px;\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n  }\r\n  \r\n  td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n    \r\n    text-align: left;\r\n    padding: 8px;\r\n  }\r\n  \r\n  th[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n    background-color: #dddddd;\r\n  }\r\n  \r\n  tr[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    background-color: white;\r\n  }\r\n  \r\n  .table-container[_ngcontent-%COMP%]{\r\n    padding: 0px 50px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n  \r\n  .edit-icon[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  margin-left: -75px;\r\n  color: #5c625f;\r\n}\r\n  \r\n  .edit-icon[_ngcontent-%COMP%]:hover{\r\n  cursor: pointer;\r\n  color: #212322;\r\n}\r\n  \r\n  .trash-icon[_ngcontent-%COMP%]{\r\n  font-size: 16px;\r\n  margin-left: -75px;\r\n}\r\n  \r\n  .trash-icon[_ngcontent-%COMP%]:hover{\r\n  cursor: pointer;\r\n  color: #f44009;\r\n}\r\n  \r\n  .add-btn-container[_ngcontent-%COMP%]{\r\n  padding: 20px 220px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n  \r\n  .add-btn-elements-container[_ngcontent-%COMP%]{\r\n  width: 1000px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n  \r\n  .btn[_ngcontent-%COMP%]{\r\n  height: 30px;\r\n  font-size: 12px;\r\n  border-radius: 5px;\r\n}\r\n  \r\n  .add-button[_ngcontent-%COMP%]{\r\n  width: 120px;\r\n  height: 43px;\r\n  font-size: 14px;\r\n}\r\n  \r\n  .search-input[_ngcontent-%COMP%]{\r\n  height: 20px;\r\n}\r\n  \r\n  .action-column[_ngcontent-%COMP%]{\r\n  width: 50px;\r\n}\r\n  \r\n  .action-cell[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n  \r\n  .delete-cell[_ngcontent-%COMP%]{\r\n  color: #FC4F4F;\r\n}\r\n  \r\n  .navbar-container[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 120px;\r\n  background-color: #272928;\r\n  display: flex;\r\n}\r\n  \r\n  .logo-container[_ngcontent-%COMP%]{\r\n  width: 33%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n  \r\n  .blank-space[_ngcontent-%COMP%]{\r\n  width: 33%;\r\n}\r\n  \r\n  .links-container[_ngcontent-%COMP%]{\r\n  width: 33%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: white;\r\n  font-size: 30px;\r\n  font-weight: 100;\r\n}\r\n  \r\n  a[_ngcontent-%COMP%]{\r\n  font-size: 22px;\r\n  margin: 20px;\r\n  color: white;\r\n  font-weight: 500;\r\n}\r\n  \r\n  .logout[_ngcontent-%COMP%]{\r\n  font-weight: 200;\r\n}\r\n  \r\n  .info-container[_ngcontent-%COMP%]{\r\n  background-color: #EEEEEE;\r\n  height: 100px;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: left;\r\n  align-items: center;\r\n}\r\n  \r\n  .info-text-container[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-left: 6%;\r\n}\r\n  \r\n  .info-text[_ngcontent-%COMP%]{\r\n  font-size: 32px;\r\n  font-weight: 500;\r\n  letter-spacing: -2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdHVkZW50LXRhYmxlL3N0dWRlbnQtdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQix1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRSxrQ0FBa0M7SUFDbEMsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7SUFDZix5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsdUJBQXVCO0VBQ3pCOztFQUVGO0lBQ0ksaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztFQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztFQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0VBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztFQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0VBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0VBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0VBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7RUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7RUFFQTtFQUNFLFlBQVk7QUFDZDs7RUFFQTtFQUNFLFdBQVc7QUFDYjs7RUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7RUFFQTtFQUNFLGNBQWM7QUFDaEI7O0VBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0VBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztFQUVBO0VBQ0UsVUFBVTtBQUNaOztFQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7RUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7RUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7RUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsV0FBVztFQUNYLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztFQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0VBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3R1ZGVudC10YWJsZS9zdHVkZW50LXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gIH1cclxuICBcclxuICB0ZCwgdGgge1xyXG4gICAgLyogYm9yZGVyOiAwLjAxcHggc29saWQgI2RkZGRkZDsgKi9cclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG5cclxuICB0aHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XHJcbiAgfVxyXG5cclxuICB0cntcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbi50YWJsZS1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAwcHggNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5lZGl0LWljb257XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtNzVweDtcclxuICBjb2xvcjogIzVjNjI1ZjtcclxufVxyXG5cclxuLmVkaXQtaWNvbjpob3ZlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICMyMTIzMjI7XHJcbn1cclxuXHJcbi50cmFzaC1pY29ue1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBtYXJnaW4tbGVmdDogLTc1cHg7XHJcbn1cclxuXHJcbi50cmFzaC1pY29uOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogI2Y0NDAwOTtcclxufVxyXG5cclxuLmFkZC1idG4tY29udGFpbmVye1xyXG4gIHBhZGRpbmc6IDIwcHggMjIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYWRkLWJ0bi1lbGVtZW50cy1jb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG57XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5hZGQtYnV0dG9ue1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDQzcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWlucHV0e1xyXG4gIGhlaWdodDogMjBweDtcclxufVxyXG5cclxuLmFjdGlvbi1jb2x1bW57XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5hY3Rpb24tY2VsbHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kZWxldGUtY2VsbHtcclxuICBjb2xvcjogI0ZDNEY0RjtcclxufVxyXG5cclxuLm5hdmJhci1jb250YWluZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjcyOTI4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5sb2dvLWNvbnRhaW5lcntcclxuICB3aWR0aDogMzMlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ibGFuay1zcGFjZXtcclxuICB3aWR0aDogMzMlO1xyXG59XHJcblxyXG4ubGlua3MtY29udGFpbmVye1xyXG4gIHdpZHRoOiAzMyU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbn1cclxuXHJcbmF7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmxvZ291dHtcclxuICBmb250LXdlaWdodDogMjAwO1xyXG59XHJcblxyXG4uaW5mby1jb250YWluZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRUVFRTtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbmZvLXRleHQtY29udGFpbmVye1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDYlO1xyXG59XHJcblxyXG4uaW5mby10ZXh0e1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMnB4O1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StudentTableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-student-table',
            templateUrl: './student-table.component.html',
            styleUrls: ['./student-table.component.css']
          }]
        }], function () {
          return [{
            type: _app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/components/teacher-table/teacher-table.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/components/teacher-table/teacher-table.component.ts ***!
      \*********************************************************************/

    /*! exports provided: TeacherTableComponent */

    /***/
    function srcAppComponentsTeacherTableTeacherTableComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TeacherTableComponent", function () {
        return TeacherTableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fortawesome/free-solid-svg-icons */
      "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
      /* harmony import */


      var _app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../app-service.service */
      "./src/app/app-service.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../navbar/navbar.component */
      "./src/app/components/navbar/navbar.component.ts");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function TeacherTableComponent_tr_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherTableComponent_tr_19_Template_td_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var teacher_r2 = ctx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.editTeacher(teacher_r2[0].id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "fa-icon", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherTableComponent_tr_19_Template_td_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var teacher_r2 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.deleteTeacher(teacher_r2[0].id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fa-icon", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var teacher_r2 = ctx.$implicit;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](teacher_r2[0].name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](teacher_r2[0].id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](2022 - teacher_r2[0].age);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "teacher-edit-", teacher_r2[0].id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faPenSquare);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "teacher-delete-", teacher_r2[0].id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r1.faTrash);
        }
      }

      var TeacherTableComponent = /*#__PURE__*/function () {
        function TeacherTableComponent(service, router) {
          _classCallCheck(this, TeacherTableComponent);

          this.service = service;
          this.router = router;
          this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faTrash"];
          this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPlus"];
          this.faPenSquare = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPenSquare"];
          this.teacherData = [];
        }

        _createClass(TeacherTableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.initializeDB();
          }
        }, {
          key: "addNewTeacher",
          value: function addNewTeacher() {
            this.router.navigate(['addTeacher']);
          }
        }, {
          key: "editTeacher",
          value: function editTeacher(id) {
            if (!id) {
              console.error('Teacher ID is missing');
              return;
            }

            var navigationExtras = {
              state: {
                id: id
              }
            };
            this.router.navigate(['editTeacher'], navigationExtras);
          }
        }, {
          key: "initializeDB",
          value: function initializeDB() {
            var _this11 = this;

            this.service.initializeDB().subscribe(function (response) {
              console.log('DB initialized');

              _this11.getTeacherData();
            }, function (error) {
              console.log('ERROR initializing DB - ', error);

              _this11.getTeacherData();
            });
          }
        }, {
          key: "getTeacherData",
          value: function getTeacherData() {
            var _this12 = this;

            this.selected = 'Teachers';
            this.service.getTeacherData().subscribe(function (response) {
              if (response && Object.keys(response).length > 0) {
                _this12.teacherData = Object.keys(response).map(function (key) {
                  return [response[key]];
                });
              } else {
                _this12.teacherData = [];
              }

              console.log('Teacher data loaded:', _this12.teacherData);
            }, function (error) {
              console.log('ERROR loading teachers - ', error);
              _this12.teacherData = [];
            });
          }
        }, {
          key: "getStudentData",
          value: function getStudentData() {
            var _this13 = this;

            this.selected = 'Students';
            this.service.getStudentData().subscribe(function (response) {
              _this13.teacherData = response;
            }, function (error) {
              console.log('ERROR loading students - ', error);
            });
          }
        }, {
          key: "search",
          value: function search(value) {
            var foundItems = [];

            if (value.length <= 0) {
              this.getTeacherData();
            } else {
              this.teacherData.filter(function (teacher) {
                if (teacher[0].name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
                  foundItems.push(teacher);
                }
              });
              this.teacherData = foundItems;
            }
          }
        }, {
          key: "deleteTeacher",
          value: function deleteTeacher(itemid) {
            var _this14 = this;

            if (!itemid) {
              console.error('Teacher ID is missing for delete');
              return;
            }

            if (!confirm('Are you sure you want to delete this teacher?')) {
              return;
            }

            var deletePayload = {
              id: itemid
            };
            this.service.deleteTeacher(deletePayload).subscribe(function (response) {
              console.log('Teacher deleted successfully');

              _this14.getTeacherData();
            }, function (error) {
              console.log('ERROR deleting teacher - ', error);
              alert('Error deleting teacher');
            });
          }
        }]);

        return TeacherTableComponent;
      }();

      TeacherTableComponent.ɵfac = function TeacherTableComponent_Factory(t) {
        return new (t || TeacherTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
      };

      TeacherTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TeacherTableComponent,
        selectors: [["app-teacher-table"]],
        decls: 20,
        vars: 2,
        consts: [["title", "Teachers"], [1, "add-btn-container"], [1, "add-btn-elements-container"], ["id", "teacher-search", "placeholder", "Search", 1, "search-input", 3, "keyup"], ["box", ""], [1, "btn", "add-button", 3, "click"], [3, "icon"], [1, "table-container"], ["id", "teacher-table"], [1, "action-column"], [4, "ngFor", "ngForOf"], [1, "action-cell", 3, "id", "click"], [1, "edit-icon", 3, "icon"], [1, "action-cell", "delete-cell", 3, "id", "click"], [1, "trash-icon", 3, "icon"]],
        template: function TeacherTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function TeacherTableComponent_Template_input_keyup_3_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

              return ctx.search(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TeacherTableComponent_Template_button_click_5_listener() {
              return ctx.addNewTeacher();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add New \xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Staff ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "DOB");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "th", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TeacherTableComponent_tr_19_Template, 11, 7, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPlus);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.teacherData);
          }
        },
        directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]],
        styles: ["table[_ngcontent-%COMP%] {\r\n    font-family: 'Poppins', sans-serif;\r\n    border-collapse: collapse;\r\n    width: 75%;\r\n    border-radius: 10px;\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n  }\r\n  \r\n  td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    padding: 8px;\r\n  }\r\n  \r\n  th[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n    background-color: #dddddd;\r\n  }\r\n  \r\n  tr[_ngcontent-%COMP%]{\r\n    font-size: 14px;\r\n    background-color: white;\r\n  }\r\n  \r\n  .table-container[_ngcontent-%COMP%]{\r\n    padding: 0px 50px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n  \r\n  .trash-icon[_ngcontent-%COMP%]{\r\n  font-size: 16px;\r\n  margin-left: -75px;\r\n}\r\n  \r\n  .trash-icon[_ngcontent-%COMP%]:hover{\r\n  cursor: pointer;\r\n  color: #f44009;\r\n}\r\n  \r\n  .add-btn-container[_ngcontent-%COMP%]{\r\n  padding: 20px 220px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n  \r\n  .add-btn-elements-container[_ngcontent-%COMP%]{\r\n  width: 1000px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n  \r\n  .btn[_ngcontent-%COMP%]{\r\n  height: 30px;\r\n  font-size: 12px;\r\n  border-radius: 5px;\r\n}\r\n  \r\n  .add-button[_ngcontent-%COMP%]{\r\n  width: 120px;\r\n  height: 43px;\r\n  font-size: 14px;\r\n}\r\n  \r\n  .search-input[_ngcontent-%COMP%]{\r\n  height: 20px;\r\n}\r\n  \r\n  .action-column[_ngcontent-%COMP%]{\r\n  width: 50px;\r\n}\r\n  \r\n  .action-cell[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\r\n  \r\n  .delete-cell[_ngcontent-%COMP%]{\r\n  color: #FC4F4F;\r\n}\r\n  \r\n  .navbar-container[_ngcontent-%COMP%]{\r\n  width: 100%;\r\n  height: 120px;\r\n  background-color: #272928;\r\n  display: flex;\r\n}\r\n  \r\n  .logo-container[_ngcontent-%COMP%]{\r\n  width: 33%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n  \r\n  .blank-space[_ngcontent-%COMP%]{\r\n  width: 33%;\r\n}\r\n  \r\n  .links-container[_ngcontent-%COMP%]{\r\n  width: 33%;\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  color: white;\r\n  font-size: 30px;\r\n  font-weight: 100;\r\n}\r\n  \r\n  a[_ngcontent-%COMP%]{\r\n  font-size: 22px;\r\n  margin: 20px;\r\n  color: white;\r\n  font-weight: 500;\r\n}\r\n  \r\n  .logout[_ngcontent-%COMP%]{\r\n  font-weight: 200;\r\n}\r\n  \r\n  .info-container[_ngcontent-%COMP%]{\r\n  background-color: #EEEEEE;\r\n  height: 100px;\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: left;\r\n  align-items: center;\r\n}\r\n  \r\n  .info-text-container[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-left: 6%;\r\n}\r\n  \r\n  .edit-icon[_ngcontent-%COMP%]{\r\n  font-size: 20px;\r\n  margin-left: -75px;\r\n  color: #5c625f;\r\n}\r\n  \r\n  .edit-icon[_ngcontent-%COMP%]:hover{\r\n  cursor: pointer;\r\n  color: #212322;\r\n}\r\n  \r\n  .info-text[_ngcontent-%COMP%]{\r\n  font-size: 32px;\r\n  font-weight: 500;\r\n  letter-spacing: -2px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWFjaGVyLXRhYmxlL3RlYWNoZXItdGFibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQix1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsZUFBZTtJQUNmLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGVBQWU7SUFDZix1QkFBdUI7RUFDekI7O0VBRUY7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0VBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztFQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0VBRUE7RUFDRSxtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0VBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0VBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7RUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7RUFFQTtFQUNFLFlBQVk7QUFDZDs7RUFFQTtFQUNFLFdBQVc7QUFDYjs7RUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7RUFFQTtFQUNFLGNBQWM7QUFDaEI7O0VBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0VBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztFQUVBO0VBQ0UsVUFBVTtBQUNaOztFQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7RUFFQTtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7RUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7RUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsV0FBVztFQUNYLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOztFQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0VBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGNBQWM7QUFDaEI7O0VBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7RUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90ZWFjaGVyLXRhYmxlL3RlYWNoZXItdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgfVxyXG4gIFxyXG4gIHRkLCB0aCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gIH1cclxuXHJcbiAgdGh7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xyXG4gIH1cclxuXHJcbiAgdHJ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4udGFibGUtY29udGFpbmVye1xyXG4gICAgcGFkZGluZzogMHB4IDUwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4udHJhc2gtaWNvbntcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC03NXB4O1xyXG59XHJcblxyXG4udHJhc2gtaWNvbjpob3ZlcntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICNmNDQwMDk7XHJcbn1cclxuXHJcbi5hZGQtYnRuLWNvbnRhaW5lcntcclxuICBwYWRkaW5nOiAyMHB4IDIyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFkZC1idG4tZWxlbWVudHMtY29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnRue1xyXG4gIGhlaWdodDogMzBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4uYWRkLWJ1dHRvbntcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgaGVpZ2h0OiA0M3B4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLnNlYXJjaC1pbnB1dHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5hY3Rpb24tY29sdW1ue1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uYWN0aW9uLWNlbGx7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZGVsZXRlLWNlbGx7XHJcbiAgY29sb3I6ICNGQzRGNEY7XHJcbn1cclxuXHJcbi5uYXZiYXItY29udGFpbmVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjkyODtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ubG9nby1jb250YWluZXJ7XHJcbiAgd2lkdGg6IDMzJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYmxhbmstc3BhY2V7XHJcbiAgd2lkdGg6IDMzJTtcclxufVxyXG5cclxuLmxpbmtzLWNvbnRhaW5lcntcclxuICB3aWR0aDogMzMlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcblxyXG5he1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5sb2dvdXR7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG5cclxuLmluZm8tY29udGFpbmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUVFRUU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaW5mby10ZXh0LWNvbnRhaW5lcntcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1sZWZ0OiA2JTtcclxufVxyXG5cclxuLmVkaXQtaWNvbntcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC03NXB4O1xyXG4gIGNvbG9yOiAjNWM2MjVmO1xyXG59XHJcblxyXG4uZWRpdC1pY29uOmhvdmVye1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogIzIxMjMyMjtcclxufVxyXG5cclxuLmluZm8tdGV4dHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsZXR0ZXItc3BhY2luZzogLTJweDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeacherTableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-teacher-table',
            templateUrl: './teacher-table.component.html',
            styleUrls: ['./teacher-table.component.css']
          }]
        }], function () {
          return [{
            type: _app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
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
      /*! C:\Users\Dilma\Downloads\capstone-project-assignment-dilma124\frontend\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map