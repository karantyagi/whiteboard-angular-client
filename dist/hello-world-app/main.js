(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item.active {\r\n  z-index: 2;\r\n  color: #fff;\r\n  background-color: rgba(0,168,255,0.5);\r\n  border-color: rgba(0,168,255,0.5);\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-light\" style=\"background-color: #e3f2fd;\">\n  <!--<a class=\"navbar-brand\" href=\"#\">White-Board</a>-->\n  <a class=\"navbar-brand\" href=\"#\" style=\"color: #007bff; font-size: x-large\">WhiteBoard</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\"\n          aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n      </li>\n      <li class=\"nav-item\" [hidden]=!loggedIn>\n        <a class=\"nav-link\" routerLink=\"/profile\">Profile</a>\n      </li>\n      <li class=\"nav-item\" [hidden]=!loggedIn>\n        <a class=\"nav-link\" [hidden]=!admin\n           routerLink=\"/admin\">Admin</a>\n      </li>\n    </ul>\n    <!--<form class=\"form-inline my-2 my-lg-0\">-->\n    <form class=\"form-inline mt-2 mt-md-0\">\n      <span class=\"navbar-text\">\n        Logged in as : </span>\n      <span style=\"color: dimgrey; font-weight: bold\">&nbsp;{{username}}\n      </span>\n      &nbsp;&nbsp;\n      <button class=\"btn btn-outline-primary my-2 my-sm-0\"\n              (click)=\"logout()\">Logout\n      </button>\n    </form>\n  </div>\n</nav>\n\n<div style=\"margin: 5px; padding: 15px;\">\n  <div class=\"row\">\n    <div class=\"col mr-0\">\n      <ul class=\"list-group rounded py-1 my-1\" style=\"width: 18rem\">\n        <li *ngFor=\"let course of courses\"\n            class=\"list-group-item shadow rounded my-2\"\n            (click)=\"selectCourse(course.id, course.title)\"\n            [ngClass]=\"{'active': course.id === selectedCourseId}\">\n          <span style=\"font-size: large; color:dodgerblue;\"> </span>{{course.title}}\n          <!--<button class=\"float-right btn btn-outline-primary float-right\"-->\n          <!--routerLink=\"/course/{{course.id}}/section\">View Sections</button>-->\n          <!--(click)=\"showSections(section)\"-->\n        </li>\n      </ul>\n    </div>\n    <div class=\"col-8 ml-0\">\n      <!--<h3 class=\"mb-1 text-center\" style=\"color: dimgray;\"> Section Editor</h3>-->\n      <div style=\"padding: 10px;\">\n        <h2 style=\"color: darkorange\" class=\"text-center\">Sections</h2>\n        <div [hidden]=!admin>\n          <div class=\"row ml-1 mb-2\">\n            <button [hidden]=addMode\n                    [disabled] = updateMode\n                    (click)=\"addSection()\"\n                    class=\"float-right btn btn-outline-warning rounded shadow\">\n              <i class=\"fas fa-plus\"></i>&nbsp;&nbsp;Add new section\n            </button>\n\n          </div>\n          <h4 [hidden]=!updateMode class=\"text-center p-0 mb-2\" style=\"color: limegreen\">Edit this section</h4>\n          <div [hidden] = !updateMode>\n          <form>\n\n            <div class=\"form-group row\">\n              <label for=\"sectionFld1\" class=\"text-center col-form-label\"  style=\"width:15%\">\n                Section Name </label>\n              <div class=\"col-sm-10\">\n                <input [ngModelOptions]=\"{standalone: true}\"\n                       [(ngModel)]=\"sectionName\"\n                       id=\"sectionFld1\"\n                       class=\"form-control wbdv-password-fld\"\n                       placeholder=\"Section Name\">\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <label for=\"seatsFld2\" class=\"text-center col-form-label\" style=\"width:15%\">\n                Max Seats</label>\n              <div class=\"col-sm-10\">\n                <input [ngModelOptions]=\"{standalone: true}\"\n                       [(ngModel)]=\"maxSeats\"\n                       id=\"seatsFld2\"\n                       class=\"form-control wbdv-password-fld\"\n                       placeholder=\"Max Seats in section\">\n              </div>\n            </div>\n            <button id=\"updateBtn\"\n                    [hidden] = !updateMode\n                    (click)=\"updateSection()\"\n                    class=\"btn btn-success\"\n                    style=\"margin-left:0%; width: 100%;\">\n              Update Section\n            </button>\n            <button id=\"cancelUpdateBtn\"\n                    [hidden]=!updateMode\n                    (click)=\"cancelUpdateMode()\"\n                    class=\"btn btn-secondary mt-2 mb-3\"\n                    style=\"margin-left:0%; width: 100%;\">\n              Cancel\n            </button>\n          </form>\n          </div>\n\n\n          <div [hidden]=!addMode class=\"mb-3\">\n            <form>\n\n              <div class=\"form-group row\">\n                <label for=\"sectionFld\" class=\"text-center col-form-label\" style=\"width:15%\">\n                  Section Name </label>\n                <div class=\"col-sm-10\">\n                  <input [ngModelOptions]=\"{standalone: true}\"\n                         [(ngModel)]=\"sectionName\"\n                         id=\"sectionFld\"\n                         class=\"form-control wbdv-password-fld\"\n                         placeholder=\"Section Name\">\n                </div>\n              </div>\n\n              <div class=\"form-group row\">\n                <label for=\"seatsFld\" class=\"text-center col-form-label\" style=\"width:15%\">\n                  Max Seats </label>\n                <div class=\"col-sm-10\">\n                  <input [ngModelOptions]=\"{standalone: true}\"\n                         [(ngModel)]=\"maxSeats\"\n                         id=\"seatsFld\"\n                         class=\"form-control wbdv-password-fld\"\n                         placeholder=\"Max Seats in section\">\n                </div>\n              </div>\n              <button id=\"createBtn\"\n                      [hidden]=updateMode\n                      (click)=\"createSection(sectionName, maxSeats)\"\n                      class=\"btn\"\n                      style=\"margin-left:0%; width: 100%; color: white; background-color: orange\">\n                Add Section\n              </button>\n              <button id=\"cancelBtn\"\n                      [hidden]=updateMode\n                      (click)=\"cancel()\"\n                      class=\"btn btn-secondary mt-2\"\n                      style=\"margin-left:0%; width: 100%;\">\n                Cancel\n              </button>\n            </form>\n          </div>\n          <ul class=\"list-group rounded py-1 my-1\" style=\"width: 36rem\">\n            <li *ngFor=\"let section of sections\" class=\"list-group-item shadow bg-light\">\n              <span style=\"font-size: large; color:dodgerblue;\"> </span>{{section.name}}\n              <button (click)=\"deleteSection(section)\"\n                      class=\"float-right btn btn-outline-danger float-right mt-2\">\n                <i class=\"fas fa-trash-alt\"></i></button>\n              <button (click)=\"editSection(section)\"\n                      class=\"float-right btn btn-outline-success float-right mt-2 mr-2\">\n                <i class=\"fas fa-pencil-alt\"></i></button>\n              <br>\n              <span style=\"color: dimgrey; font-style: italic \"> Max Seats :  </span>\n              {{section.maxSeats}}\n              <span style=\"color: dimgrey; font-style: italic \">&nbsp;&nbsp;|&nbsp;&nbsp; Seats Available :  </span>\n              {{section.seats}}\n            </li>\n          </ul>\n          <br>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminComponent = /** @class */ (function () {
    function AdminComponent(service, sectionService, userService, router) {
        this.service = service;
        this.sectionService = sectionService;
        this.userService = userService;
        this.router = router;
        this.sections = [];
        this.courses = [];
        this.addMode = false;
        this.updateMode = false;
        this.updateId = 0;
        this.sectionName = '';
        this.maxSeats = '';
        this.seats = '';
        this.admin = false;
        this.loggedIn = true;
    }
    AdminComponent.prototype.loadSections = function () {
        var _this = this;
        this
            .sectionService
            .findSectionsForCourse(this.selectedCourseId)
            .then(function (sections) { return _this.sections = sections; });
    };
    AdminComponent.prototype.logout = function () {
        var _this = this;
        this.userService
            .logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    AdminComponent.prototype.addSection = function () {
        this.addMode = true;
        this.sectionName = this.selectedCourseTitle + ' Section 1';
    };
    AdminComponent.prototype.cancel = function () {
        this.addMode = false;
    };
    AdminComponent.prototype.cancelUpdateMode = function () {
        this.updateMode = false;
    };
    AdminComponent.prototype.editSection = function (section) {
        this.updateMode = true;
        this.sectionName = section.name;
        this.maxSeats = section.maxSeats;
        this.currentSeats = section.seats;
        this.currentMaxSeats = section.maxSeats;
        this.updateId = section._id;
    };
    AdminComponent.prototype.deleteSection = function (section) {
        var _this = this;
        // alert('delete section : ' + section._id);
        this
            .sectionService
            .deleteSection(section._id)
            .then(function () {
            _this.sectionService
                .unEnrollAllStudentsFromSection(section._id)
                .then(function () {
                _this.loadSections();
            });
        });
    };
    AdminComponent.prototype.updateSection = function () {
        var _this = this;
        if (this.maxSeats.valueOf() > this.currentMaxSeats.valueOf()) {
            this.seats = (Number(this.currentSeats) + (Number(this.maxSeats) - Number(this.currentMaxSeats))).toString();
            console.log('New maxSeats : ', this.maxSeats, ' | New Available seats (??): ', this.seats);
            console.log('Current maxSeats : ', this.currentMaxSeats, ' | Current Available seats : ', this.currentSeats);
            this
                .sectionService
                .updateSection(this.updateId, this.sectionName, this.maxSeats, this.seats)
                .then(function () {
                _this.loadSections();
            });
            alert('Section updated');
            this.updateMode = false;
            this.sectionName = '';
            this.maxSeats = '';
        }
        else {
            this.seats = (Number(this.currentSeats) - (Number(this.currentMaxSeats) - Number(this.maxSeats))).toString();
            console.log('New maxSeats : ', this.maxSeats, ' | New Available seats (??): ', this.seats);
            console.log('Current maxSeats : ', this.currentMaxSeats, ' | Current Available seats : ', this.currentSeats);
            if (this.seats.valueOf() < '0'.valueOf()) {
                alert('You cannot decrease seats to ' + this.maxSeats + ' \n' +
                    '(as ' + (this.currentMaxSeats - this.currentSeats) + ' students are already enrolled.)');
            }
            else {
                this
                    .sectionService
                    .updateSection(this.updateId, this.sectionName, this.maxSeats, this.seats)
                    .then(function () {
                    _this.loadSections();
                });
                alert('Section updated');
                this.updateMode = false;
                this.sectionName = '';
                this.maxSeats = '';
            }
        }
    };
    AdminComponent.prototype.createSection = function (sectionName, maxSeats) {
        var _this = this;
        // console.log(sectionName, ' ', seats);
        if (this.sectionName === '') {
            alert('Enter Section Name');
        }
        else {
            if (this.maxSeats === '') {
                alert('Enter Number of Maximum seats');
            }
            else {
                this
                    .sectionService
                    .createSection(this.selectedCourseId, sectionName, maxSeats, maxSeats)
                    .then(function () {
                    // this.loadSections(this.courseId);
                    _this.sectionService
                        .findSectionsForCourse(_this.selectedCourseId)
                        .then(function (sections) {
                        _this.sections = sections;
                        _this.sectionName = '';
                        _this.maxSeats = '';
                        _this.addMode = false;
                    });
                });
            }
        }
    };
    AdminComponent.prototype.selectCourse = function (id, title) {
        var _this = this;
        this.selectedCourseId = id;
        this.selectedCourseTitle = title;
        this.sectionService
            .findSectionsForCourse(this.selectedCourseId)
            .then(function (sections) { return _this.sections = sections; });
    };
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService
            .profile()
            .then(function (user) {
            console.log('logged in as : ', user);
            _this.username = user.username;
            if (_this.username === 'No session maintained') {
                _this.loggedIn = false;
            }
            if (_this.username === 'admin') {
                _this.admin = true;
            }
        });
        this.service.findAllCourses()
            .then(function (courses) {
            _this.courses = courses;
            _this.selectedCourseId = _this.courses[0].id;
            _this.selectedCourseTitle = _this.courses[0].title;
            _this.sectionService
                .findSectionsForCourse(_this.selectedCourseId)
                .then(function (sections) { return _this.sections = sections; });
        });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_2__["CourseServiceClient"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_1__["SectionServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<!--<app-white-board></app-white-board>-->\n<!--<app-course-navigator></app-course-navigator>-->\n\n\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hello-world/hello-world.component */ "./src/app/hello-world/hello-world.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_course_navigator_service_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/course-navigator.service.client */ "./src/app/services/course-navigator.service.client.ts");
/* harmony import */ var _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-navigator/course-navigator.component */ "./src/app/course-navigator/course-navigator.component.ts");
/* harmony import */ var _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./white-board/white-board.component */ "./src/app/white-board/white-board.component.ts");
/* harmony import */ var _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./course-grid/course-grid.component */ "./src/app/course-grid/course-grid.component.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./course-viewer/course-viewer.component */ "./src/app/course-viewer/course-viewer.component.ts");
/* harmony import */ var _module_list_module_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./module-list/module-list.component */ "./src/app/module-list/module-list.component.ts");
/* harmony import */ var _lesson_tabs_lesson_tabs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lesson-tabs/lesson-tabs.component */ "./src/app/lesson-tabs/lesson-tabs.component.ts");
/* harmony import */ var _topic_pills_topic_pills_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./topic-pills/topic-pills.component */ "./src/app/topic-pills/topic-pills.component.ts");
/* harmony import */ var _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./widget-list/widget-list.component */ "./src/app/widget-list/widget-list.component.ts");
/* harmony import */ var _services_module_service_client__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/module.service.client */ "./src/app/services/module.service.client.ts");
/* harmony import */ var _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/lesson.service.client */ "./src/app/services/lesson.service.client.ts");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/widget.service.client */ "./src/app/services/widget.service.client.ts");
/* harmony import */ var _services_topic_service_client__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/topic.service.client */ "./src/app/services/topic.service.client.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./section-list/section-list.component */ "./src/app/section-list/section-list.component.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _enrolled_courses_enrolled_courses_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./enrolled-courses/enrolled-courses.component */ "./src/app/enrolled-courses/enrolled-courses.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _hello_world_hello_world_component__WEBPACK_IMPORTED_MODULE_3__["HelloWorldComponent"],
                _course_navigator_course_navigator_component__WEBPACK_IMPORTED_MODULE_6__["CourseNavigatorComponent"],
                _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_7__["WhiteBoardComponent"],
                _course_grid_course_grid_component__WEBPACK_IMPORTED_MODULE_8__["CourseGridComponent"],
                _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_11__["CourseViewerComponent"],
                _module_list_module_list_component__WEBPACK_IMPORTED_MODULE_12__["ModuleListComponent"],
                _lesson_tabs_lesson_tabs_component__WEBPACK_IMPORTED_MODULE_13__["LessonTabsComponent"],
                _topic_pills_topic_pills_component__WEBPACK_IMPORTED_MODULE_14__["TopicPillsComponent"],
                _widget_list_widget_list_component__WEBPACK_IMPORTED_MODULE_15__["WidgetListComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_20__["RegisterComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_24__["SectionListComponent"],
                _enrolled_courses_enrolled_courses_component__WEBPACK_IMPORTED_MODULE_26__["EnrolledCoursesComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_27__["AdminComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_10__["routing"]
            ],
            providers: [
                _services_course_navigator_service_client__WEBPACK_IMPORTED_MODULE_5__["CourseNavigatorServiceClient"],
                _services_course_service_client__WEBPACK_IMPORTED_MODULE_9__["CourseServiceClient"],
                _services_module_service_client__WEBPACK_IMPORTED_MODULE_16__["ModuleServiceClient"],
                _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_17__["LessonServiceClient"],
                _services_topic_service_client__WEBPACK_IMPORTED_MODULE_19__["TopicServiceClient"],
                _services_widget_service_client__WEBPACK_IMPORTED_MODULE_18__["WidgetServiceClient"],
                _services_user_service_client__WEBPACK_IMPORTED_MODULE_23__["UserServiceClient"],
                _services_section_service_client__WEBPACK_IMPORTED_MODULE_25__["SectionServiceClient"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./white-board/white-board.component */ "./src/app/white-board/white-board.component.ts");
/* harmony import */ var _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-viewer/course-viewer.component */ "./src/app/course-viewer/course-viewer.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./section-list/section-list.component */ "./src/app/section-list/section-list.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");








var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_1__["WhiteBoardComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"] },
    { path: 'course/:courseId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_2__["CourseViewerComponent"] },
    { path: 'course/:courseId/section', component: _section_list_section_list_component__WEBPACK_IMPORTED_MODULE_6__["SectionListComponent"] },
    { path: 'course/:courseId/module/:moduleId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_2__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_2__["CourseViewerComponent"] },
    { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: _course_viewer_course_viewer_component__WEBPACK_IMPORTED_MODULE_2__["CourseViewerComponent"] },
    { path: '**', component: _white_board_white_board_component__WEBPACK_IMPORTED_MODULE_1__["WhiteBoardComponent"] } // last
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/course-grid/course-grid.component.css":
/*!*******************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\r\n  margin-bottom: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/course-grid/course-grid.component.html":
/*!********************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2 style=\"color: #0069d9;\">All Courses ({{courses.length}})</h2>\n<!--<br/>-->\n<div class=\"row pt-3\" >\n  <div *ngFor=\"let course of courses\" class=\"col-sm-3 \">\n    <div class=\"card rounded shadow\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">{{course.title}}</h5>\n        <!--<p class=\"card-text\">Explore this course.</p>-->\n        <a routerLink=\"/course/{{course.id}}\" class=\"btn shadow btn-primary\">View Modules</a>\n        &nbsp;&nbsp;&nbsp;\n      </div>\n      <div class=\"card-footer text-muted\" [hidden] = admin>\n        <a routerLink=\"/course/{{course.id}}/section\"\n           class=\"btn btn-success shadow-lg\">Enroll</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/course-grid/course-grid.component.ts":
/*!******************************************************!*\
  !*** ./src/app/course-grid/course-grid.component.ts ***!
  \******************************************************/
/*! exports provided: CourseGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseGridComponent", function() { return CourseGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CourseGridComponent = /** @class */ (function () {
    function CourseGridComponent(service, userService) {
        this.service = service;
        this.userService = userService;
        this.courses = [];
        this.admin = false;
        this.username = '';
    }
    CourseGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService
            .profile()
            .then(function (user) {
            _this.username = user.username;
            if (_this.username === 'admin') {
                _this.admin = true;
            }
            _this.service.findAllCourses()
                .then(function (courses) { return _this.courses = courses; });
        });
    };
    CourseGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-grid',
            template: __webpack_require__(/*! ./course-grid.component.html */ "./src/app/course-grid/course-grid.component.html"),
            styles: [__webpack_require__(/*! ./course-grid.component.css */ "./src/app/course-grid/course-grid.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], CourseGridComponent);
    return CourseGridComponent;
}());



/***/ }),

/***/ "./src/app/course-navigator/course-navigator.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/course-navigator/course-navigator.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item.active.course {\r\n  z-index: 2;\r\n  color: #fff;\r\n  background-color: rgba(0,168,255,0.9);\r\n  border-color: rgba(0,168,255,0.9);\r\n}\r\n\r\n.list-group-item.active.module {\r\n  z-index: 2;\r\n  color: #fff;\r\n  background-color: rgba(240,168,205,0.9);\r\n  border-color: rgba(240,168,205,0.9);\r\n}\r\n\r\n.list-group-item.active.lesson {\r\n  z-index: 2;\r\n  color: #fff;\r\n  background-color: rgba(20,240,160,0.7);\r\n  border-color: rgba(20,240,160,0.7);\r\n}\r\n\r\n.list-group-item.active.topic {\r\n  z-index: 2;\r\n  color: #fff;\r\n  background-color: rgba(90,240,20,0.9);\r\n  border-color: rgba(90,240,20,0.9);\r\n}\r\n\r\n.list-group-item.active.widget {\r\n  z-index: 2;\r\n  color: #fff;\r\n  background-color: rgba(245,155,20,0.9);\r\n  border-color: rgba(245,155,20,0.9);\r\n}\r\n"

/***/ }),

/***/ "./src/app/course-navigator/course-navigator.component.html":
/*!******************************************************************!*\
  !*** ./src/app/course-navigator/course-navigator.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n      <div class=\"col\">\n        <ul class=\"list-group shadow\">\n          <li class=\"list-group-item active\">\n            Courses</li>\n          <li class=\"list-group-item course\"\n              *ngFor=\"let course of courses\"\n              (click)=\"selectCourse(course.id)\"\n              [ngClass]=\"{'active': course.id === selectedCourseId}\">\n            {{course.title}}</li>\n        </ul>\n      </div>\n      <div class=\"col\">\n        <ul class=\"list-group shadow\">\n          <li class=\"list-group-item active\">\n            Modules</li>\n          <li class=\"list-group-item module\"\n              *ngFor=\"let module of modules\"\n              (click)=\"selectModule(module.id)\"\n              [ngClass]=\"{'active': module.id === selectedModuleId}\">\n            {{module.title}}\n          </li>\n        </ul>\n      </div>\n      <div class=\"col\">\n        <ul class=\"list-group shadow\">\n          <li class=\"list-group-item active\">\n            Lessons</li>\n          <li class=\"list-group-item lesson\"\n              *ngFor=\"let lesson of lessons\"\n              (click)=\"selectLesson(lesson.id)\"\n              [ngClass]=\"{'active': lesson.id === selectedLessonId}\">\n            {{lesson.title}}</li>\n        </ul>\n      </div>\n      <div class=\"col\">\n        <ul class=\"list-group shadow\">\n          <li class=\"list-group-item active\">\n            Topics</li>\n          <li class=\"list-group-item topic\"\n              *ngFor=\"let topic of topics\"\n              (click)=\"selectTopic(topic.id)\"\n              [ngClass]=\"{'active': topic.id === selectedTopicId}\">\n            {{topic.title}}</li>\n        </ul>\n      </div>\n      <div class=\"col\">\n        <ul class=\"list-group shadow\">\n          <li class=\"list-group-item active\">\n            Widgets</li>\n          <li class=\"list-group-item widget\"\n              *ngFor=\"let widget of widgets\"\n              (click)=\"selectWidget(widget.id)\"\n              [ngClass]=\"{'active': widget.id === selectedWidgetId}\">\n            {{widget.widgetType}}\n            <!--<br>-->\n            <!--Title: {{widget.title}}</li>-->\n        </ul>\n      </div>\n    </div>\n\n"

/***/ }),

/***/ "./src/app/course-navigator/course-navigator.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/course-navigator/course-navigator.component.ts ***!
  \****************************************************************/
/*! exports provided: CourseNavigatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseNavigatorComponent", function() { return CourseNavigatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_navigator_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/course-navigator.service.client */ "./src/app/services/course-navigator.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourseNavigatorComponent = /** @class */ (function () {
    function CourseNavigatorComponent(service) {
        this.service = service;
        this.courses = [];
        this.modules = [];
        this.lessons = [];
        this.topics = [];
        this.widgets = [];
        this.selectedCourseId = 0;
        this.selectedModuleId = 0;
        this.selectedLessonId = 0;
        this.selectedTopicId = 0;
        this.selectedWidgetId = 0;
    }
    CourseNavigatorComponent.prototype.selectCourse = function (courseId) {
        var _this = this;
        this.selectedCourseId = courseId;
        this.selectedModuleId = 0;
        this.selectedLessonId = 0;
        this.selectedTopicId = 0;
        this.selectedWidgetId = 0;
        this.modules = [];
        this.lessons = [];
        this.topics = [];
        this.widgets = [];
        this.service.findAllModulesForCourse(courseId)
            .then(function (modules) { return _this.modules = modules; });
    };
    CourseNavigatorComponent.prototype.selectModule = function (moduleId) {
        var _this = this;
        this.selectedModuleId = moduleId;
        this.selectedLessonId = 0;
        this.selectedTopicId = 0;
        this.selectedWidgetId = 0;
        this.lessons = [];
        this.topics = [];
        this.widgets = [];
        // alert('Course ID: ' + this.selectedCourseId + 'Module ID: ' + moduleId);
        this.service.findAllLessonsForModule(this.selectedCourseId, moduleId)
            .then(function (lessons) { return _this.lessons = lessons; });
    };
    CourseNavigatorComponent.prototype.selectLesson = function (lessonId) {
        var _this = this;
        this.selectedLessonId = lessonId;
        this.selectedTopicId = 0;
        this.selectedWidgetId = 0;
        this.topics = [];
        this.widgets = [];
        this.service.findAllTopicsForLesson(this.selectedCourseId, this.selectedModuleId, lessonId)
            .then(function (topics) { return _this.topics = topics; });
    };
    CourseNavigatorComponent.prototype.selectTopic = function (topicId) {
        var _this = this;
        this.selectedTopicId = topicId;
        this.selectedWidgetId = 0;
        this.widgets = [];
        this.service.findAllWidgetsForTopic(this.selectedCourseId, this.selectedModuleId, this.selectedLessonId, topicId)
            .then(function (widgets) { return _this.widgets = widgets; });
    };
    CourseNavigatorComponent.prototype.selectWidget = function (widgetId) {
        this.selectedWidgetId = widgetId;
        // alert('Widget : ' + widgetId);
    };
    CourseNavigatorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.findAllCourses()
            .then(function (courses) {
            _this.courses = courses;
        });
    };
    CourseNavigatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-navigator',
            template: __webpack_require__(/*! ./course-navigator.component.html */ "./src/app/course-navigator/course-navigator.component.html"),
            styles: [__webpack_require__(/*! ./course-navigator.component.css */ "./src/app/course-navigator/course-navigator.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_navigator_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseNavigatorServiceClient"]])
    ], CourseNavigatorComponent);
    return CourseNavigatorComponent;
}());



/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.html":
/*!************************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\" style=\"background-color: #e3f2fd;\">\n  <a class=\"navbar-brand\" href=\"#\" style=\"color: #007bff; font-size: x-large\">WhiteBoard</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo\" aria-controls=\"navbarTogglerDemo\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n      </li>\n      <li class=\"nav-item\" [hidden] = !loggedIn>\n        <a class=\"nav-link\" routerLink=\"/profile\">Profile</a>\n      </li>\n      <li class=\"nav-item\" [hidden] = !loggedIn>\n        <a class=\"nav-link\" [hidden] = !admin\n           routerLink=\"/admin\">Admin</a>\n      </li>\n    </ul>\n\n    <form [hidden]=!loggedIn\n          class=\"form-inline mt-2 mt-md-0\">\n      <span class=\"navbar-text\">\n      Logged in as : </span>\n      <span style=\"color: dimgrey; font-weight: bold\">&nbsp;{{username}}\n      </span>\n      &nbsp;&nbsp;\n      <button class=\"btn btn-outline-primary my-2 my-sm-0\"\n              (click)=\"logout()\">Logout\n      </button>\n    </form>\n\n\n    <form [hidden]=loggedIn\n          class=\"form-inline mt-2 mt-md-0\">\n\n      <button class=\"btn btn-outline-primary my-2 my-sm-0 mr-2\"\n              routerLink=\"/login\">&nbsp;Login&nbsp;\n      </button>\n\n      <button class=\"btn btn-outline-primary my-2 my-sm-0\"\n              routerLink=\"/register\">Register\n      </button>\n    </form>\n\n\n  </div>\n</nav>\n\n\n<div class=\"mr-1 ml-1 mt-0 p-3\">\n  <h2 style=\"color: #0069d9;\">{{course.title}}</h2>\n  <app-module-list></app-module-list>\n</div>\n"

/***/ }),

/***/ "./src/app/course-viewer/course-viewer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/course-viewer/course-viewer.component.ts ***!
  \**********************************************************/
/*! exports provided: CourseViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseViewerComponent", function() { return CourseViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_course_model_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/course.model.client */ "./src/app/models/course.model.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CourseViewerComponent = /** @class */ (function () {
    function CourseViewerComponent(service, userService, route, router) {
        var _this = this;
        this.service = service;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.admin = false;
        this.loggedIn = false;
        this.course = new _models_course_model_client__WEBPACK_IMPORTED_MODULE_1__["Course"]();
        this.route.params.subscribe(function (params) { return _this.loadCourse(params['courseId']); });
    }
    CourseViewerComponent.prototype.loadCourse = function (courseId) {
        var _this = this;
        // console.log(courseId);
        this.service.findCourseById(courseId)
            .then(function (course) {
            _this.course = course;
            console.log('Course : ', _this.course);
        });
    };
    CourseViewerComponent.prototype.logout = function () {
        var _this = this;
        this.userService
            .logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    CourseViewerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService
            .profile()
            .then(function (user) {
            console.log('logged in as : ', user);
            _this.username = user.username;
            if (_this.username !== 'No session maintained') {
                _this.loggedIn = true;
            }
            if (_this.username === 'admin') {
                _this.admin = true;
            }
        });
    };
    CourseViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-course-viewer',
            template: __webpack_require__(/*! ./course-viewer.component.html */ "./src/app/course-viewer/course-viewer.component.html"),
            styles: [__webpack_require__(/*! ./course-viewer.component.css */ "./src/app/course-viewer/course-viewer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_3__["CourseServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_4__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CourseViewerComponent);
    return CourseViewerComponent;
}());



/***/ }),

/***/ "./src/app/enrolled-courses/enrolled-courses.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/enrolled-courses/enrolled-courses.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/enrolled-courses/enrolled-courses.component.html":
/*!******************************************************************!*\
  !*** ./src/app/enrolled-courses/enrolled-courses.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 style=\"color: #0069d9;\">My Active Courses : {{courseList.length}} </h2>\n\n<!--<br/>-->\n<ul class=\"list-group py-1 my-1 rounded\" style=\"width: 20rem\">\n  <li *ngFor=\"let course of courseList\" class=\"list-group-item shadow bg-light\">\n    {{course.title}}\n    <!--<div class=\"row\">-->\n      <!--<div class=\"col-5 border-right my-0\">-->\n        <!--{{course.title}}-->\n      <!--</div>-->\n      <!--<div class=\"col-7 pl-4\">-->\n        <!--<span style=\"color: dimgrey;\">{{getSection(course.id)}}</span>-->\n      <!--</div>-->\n    <!--</div>-->\n    <!--<span class=\"border-right border-danger mx-2\"></span>-->\n    <!---->\n  </li>\n</ul>\n\n<!--<div class=\"row pt-3 my-2\" >-->\n  <!--<div *ngFor=\"let course of courses\" class=\"col-sm-3 \">-->\n    <!--<div class=\"card rounded shadow\">-->\n      <!--<div class=\"card-body\">-->\n        <!--<h5 class=\"card-title\">{{course.title}}</h5>-->\n        <!--&lt;!&ndash;<p class=\"card-text\">Explore this course.</p>&ndash;&gt;-->\n        <!--&nbsp;&nbsp;&nbsp;-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</div>-->\n"

/***/ }),

/***/ "./src/app/enrolled-courses/enrolled-courses.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/enrolled-courses/enrolled-courses.component.ts ***!
  \****************************************************************/
/*! exports provided: EnrolledCoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrolledCoursesComponent", function() { return EnrolledCoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EnrolledCoursesComponent = /** @class */ (function () {
    function EnrolledCoursesComponent(service, sectionService, userService) {
        this.service = service;
        this.sectionService = sectionService;
        this.userService = userService;
        // courses: Course[] = [];
        this.sections = [];
        this.courseIds = [];
        this.courseList = [];
        this.admin = false;
        this.loggedIn = true;
        this.unique = function (value, index, self) {
            return self.indexOf(value) === index;
        };
    }
    EnrolledCoursesComponent.prototype.getSection = function (courseId) {
        for (var i = 0; i < this.sections.length; i++) {
            if (courseId === this.sections[i].section.courseId) {
                return (this.sections[i].section.name);
            }
        }
        return ('');
    };
    EnrolledCoursesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService
            .profile()
            .then(function (user) {
            console.log('logged in as : ', user);
            _this.username = user.username;
            if (_this.username === 'No session maintained') {
                _this.loggedIn = false;
            }
            if (_this.username === 'admin') {
                _this.admin = true;
            }
            if (_this.loggedIn) {
                _this.sectionService
                    .findSectionsForStudent()
                    .then(function (sections) {
                    _this.sections = sections;
                    for (var i = 0; i < _this.sections.length; i++) {
                        _this.courseIds.push(_this.sections[i].section.courseId
                        //   {
                        //   'section': this.sections[i].section.name,
                        //   'course': this.sections[i].section.courseId
                        // }
                        );
                    }
                    _this.courseIds = _this.courseIds.filter(_this.unique);
                    console.log('course ids: ', _this.courseIds);
                    for (var i = 0; i < _this.courseIds.length; i++) {
                        (_this.service.findCourseById(_this.courseIds[i])
                            .then(function (course) {
                            _this.courseList.push(course);
                        }));
                    }
                });
            }
        });
    };
    EnrolledCoursesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enrolled-courses',
            template: __webpack_require__(/*! ./enrolled-courses.component.html */ "./src/app/enrolled-courses/enrolled-courses.component.html"),
            styles: [__webpack_require__(/*! ./enrolled-courses.component.css */ "./src/app/enrolled-courses/enrolled-courses.component.css")]
        }),
        __metadata("design:paramtypes", [_services_course_service_client__WEBPACK_IMPORTED_MODULE_1__["CourseServiceClient"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__["SectionServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"]])
    ], EnrolledCoursesComponent);
    return EnrolledCoursesComponent;
}());



/***/ }),

/***/ "./src/app/hello-world/hello-world.component.css":
/*!*******************************************************!*\
  !*** ./src/app/hello-world/hello-world.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hello-world/hello-world.component.html":
/*!********************************************************!*\
  !*** ./src/app/hello-world/hello-world.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2> Courses {{courses.length}}</h2>\n<ul>\n  <li *ngFor=\"let course of courses\" class=\"list-item\">\n    {{course.title}}\n    <button (click)=\"deleteCourse(course.id)\"\n            class=\"btn btn-danger\">\n      Delete\n    </button>\n\n  </li>\n</ul>\n\n<input [(ngModel)]=\"courseTitle\"\u000b\tclass=\"form-control\"/>\n\n<button\n  class=\"btn btn-success\"\n  (click)=\"addCourse\n(courseTitle)\">\n  Add Course\n</button>\n\n\n"

/***/ }),

/***/ "./src/app/hello-world/hello-world.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hello-world/hello-world.component.ts ***!
  \******************************************************/
/*! exports provided: HelloWorldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloWorldComponent", function() { return HelloWorldComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelloWorldComponent = /** @class */ (function () {
    function HelloWorldComponent() {
        this.message = 'hello from hello world component';
        this.courses = [
            { title: 'CS5200', id: 123 },
            { title: 'CS5610', id: 234 },
            { title: 'CS3200', id: 345 },
            { title: 'CS4550', id: 456 }
        ];
    }
    // deleteCourse(courseId) {
    //   alert('DELETE : ' + courseId);
    // }
    HelloWorldComponent.prototype.deleteCourse = function (courseId) {
        this.courses =
            this.courses
                .filter(function (course) {
                return course.id !== courseId;
            });
    };
    HelloWorldComponent.prototype.addCourse = function (title) {
        var largestId = Math.max.apply(Math, this.courses.map(function (course) {
            return course.id;
        }));
        this.courses.push({ title: title, id: largestId + 1 });
    };
    HelloWorldComponent.prototype.ngOnInit = function () {
    };
    HelloWorldComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hello-world',
            template: __webpack_require__(/*! ./hello-world.component.html */ "./src/app/hello-world/hello-world.component.html"),
            styles: [__webpack_require__(/*! ./hello-world.component.css */ "./src/app/hello-world/hello-world.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HelloWorldComponent);
    return HelloWorldComponent;
}());



/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.css":
/*!*******************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active.wbdv {\r\n  background-color: rgba(0, 170, 255, 0.12);\r\n  border-color: rgba(0, 170, 255, 0.12);\r\n}\r\n\r\n.active.wbdv a {\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.html":
/*!********************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<ul class=\"nav nav-tabs\">\n  <li *ngFor=\"let lesson of lessons\"\n      class=\"nav-item\">\n    <a class=\"nav-link wbdv\"\n       [ngClass]=\"{'active': lesson.id == lessonId}\"\n       routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lesson.id}}\">\n      {{lesson.title}}\n    </a>\n  </li>\n</ul>\n<!--<div class=\"border border-light rounded shadow-sm mt-2 mb-3 p-2 bg-light\">-->\n  <div class=\"mt-2 mb-3 p-2\">\n  <app-topic-pills></app-topic-pills>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/lesson-tabs/lesson-tabs.component.ts":
/*!******************************************************!*\
  !*** ./src/app/lesson-tabs/lesson-tabs.component.ts ***!
  \******************************************************/
/*! exports provided: LessonTabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonTabsComponent", function() { return LessonTabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_lesson_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/lesson.service.client */ "./src/app/services/lesson.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LessonTabsComponent = /** @class */ (function () {
    function LessonTabsComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.courseId = 0;
        this.moduleId = 0;
        this.lessonId = 0;
        this.lessons = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    LessonTabsComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.lessonId = params['lessonId'];
        this.loadLessons(this.courseId, this.moduleId);
    };
    LessonTabsComponent.prototype.loadLessons = function (courseId, moduleId) {
        var _this = this;
        this.moduleId = moduleId;
        // console.log('Module id : ', moduleId);
        this.service.findLessonsForModule(courseId, moduleId)
            .then(function (lessons) { return _this.lessons = lessons; });
    };
    LessonTabsComponent.prototype.ngOnInit = function () {
    };
    LessonTabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lesson-tabs',
            template: __webpack_require__(/*! ./lesson-tabs.component.html */ "./src/app/lesson-tabs/lesson-tabs.component.html"),
            styles: [__webpack_require__(/*! ./lesson-tabs.component.css */ "./src/app/lesson-tabs/lesson-tabs.component.css")]
        }),
        __metadata("design:paramtypes", [_services_lesson_service_client__WEBPACK_IMPORTED_MODULE_1__["LessonServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], LessonTabsComponent);
    return LessonTabsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\" style=\"background-color: #e3f2fd;\">\n  <a class=\"navbar-brand\" href=\"#\" style=\"color: #007bff; font-size: x-large\">WhiteBoard</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo\" aria-controls=\"navbarTogglerDemo\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/register\">Register</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n\n\n\n<div style=\"margin: 5px; padding: 15px;\">\n    <h2 style=\"color: #0069d9;\">Login</h2>\n    <br>\n\n      <form>\n        <div class=\"form-group row\">\n          <label for=\"usernameFld\" class=\"col-sm-2 col-form-label text-center\">\n            Username </label>\n          <div class=\"col-sm-10\">\n            <input [(ngModel)]=\"username\"\n                   [ngModelOptions]=\"{standalone: true}\"\n                   class=\"form-control\"\n                   id=\"usernameFld\"\n                   placeholder=\"username\">\n          </div>\n        </div>\n        <div class=\"form-group row\">\n          <label for=\"passwordFld\" class=\"col-sm-2 text-center col-form-label\">\n            Password </label>\n          <div class=\"col-sm-10\">\n            <input [(ngModel)]=\"password\"\n                   [ngModelOptions]=\"{standalone: true}\"\n                   id=\"passwordFld\"\n                   class=\"form-control wbdv-password-fld\"\n                   placeholder=\"password\">\n          </div>\n        </div>\n        <div class=\"form-group row align-content-center\">\n          <div class=\"col-sm-12\">\n            <button (click)=\"login(username, password)\"\n                    id=\"loginBtn\" class=\"btn btn-primary mb-2\"\n                    style=\"margin-left:3%; width: 97%;\">\n              Login\n            </button>\n            <button (click)=\"reset(username, password)\"\n              id=\"resetBtn\" class=\"btn btn-secondary btn-block\"\n                    style=\"margin-left:3%; width: 97%;\">\n\n              Reset\n            </button>\n\n          </div>\n        </div>\n      </form>\n    </div>\n\n  <!--<a class=\"btn btn-outline-primary\" routerLink=\"/register\">Register</a>-->\n  <!--&nbsp; &nbsp; &nbsp; &nbsp;-->\n  <!--<a class=\"btn btn-outline-primary\" routerLink=\"/home\">Home</a>-->\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, service) {
        this.router = router;
        this.service = service;
        this.username = '';
        this.password = '';
        this.user = {};
    }
    LoginComponent.prototype.reset = function (username, password) {
        this.username = '';
        this.password = '';
    };
    LoginComponent.prototype.login = function (username, password) {
        var _this = this;
        if (username === '') {
            alert('Enter username');
        }
        else {
            if (password === '') {
                alert('Enter password');
            }
            else {
                this.service
                    .login(username, password)
                    .then(function (user) {
                    console.log('user found : ', user);
                    if (user === null) {
                        alert('Invalid username or password.\nPlease try again !');
                    }
                    else {
                        if (_this.password === user.password) {
                            _this.router.navigate(['profile']);
                        }
                    }
                });
            }
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_2__["UserServiceClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/course.model.client.ts":
/*!***********************************************!*\
  !*** ./src/app/models/course.model.client.ts ***!
  \***********************************************/
/*! exports provided: Course */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Course", function() { return Course; });
var Course = /** @class */ (function () {
    function Course() {
    }
    return Course;
}());



/***/ }),

/***/ "./src/app/module-list/module-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/module-list/module-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active.wbdv {\r\n  background-color: rgba(0, 170, 255, 0.65);\r\n  border-top-color: whitesmoke;\r\n  border-bottom-color: rgba(0, 170, 255, 0);\r\n  border-right-color: rgba(0, 170, 255, 0.02);\r\n  border-left-color: rgba(0, 170, 255, 0.02);\r\n  /*border-color: rgba(0, 170, 255, 0.65);*/\r\n}\r\n\r\n.active.wbdv a {\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/module-list/module-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/module-list/module-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-3\">\n    <ul class=\"list-group rounded\">\n      <li class=\"list-group-item active\">Modules</li>\n      <li [ngClass]=\"{'active': module.id == moduleId}\" *ngFor=\"let module of modules\"\n          class=\"list-group-item wbdv\"\n      >\n        <a routerLink=\"/course/{{courseId}}/module/{{module.id}}\">\n          {{module.title}}</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-9\">\n    <app-lesson-tabs></app-lesson-tabs>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/module-list/module-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/module-list/module-list.component.ts ***!
  \******************************************************/
/*! exports provided: ModuleListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleListComponent", function() { return ModuleListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_module_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/module.service.client */ "./src/app/services/module.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModuleListComponent = /** @class */ (function () {
    function ModuleListComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.modules = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    ModuleListComponent.prototype.setParams = function (params) {
        // console.log('module params : ', params);
        this.courseId = params['courseId'];
        // console.log('Course Id : ', this.courseId);
        this.moduleId = params['moduleId'];
        this.loadModules(this.courseId);
    };
    ModuleListComponent.prototype.loadModules = function (courseId) {
        var _this = this;
        this.courseId = courseId;
        this.service.findModulesForCourse(courseId)
            .then(function (modules) { return _this.modules = modules; });
    };
    ModuleListComponent.prototype.ngOnInit = function () {
    };
    ModuleListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-module-list',
            template: __webpack_require__(/*! ./module-list.component.html */ "./src/app/module-list/module-list.component.html"),
            styles: [__webpack_require__(/*! ./module-list.component.css */ "./src/app/module-list/module-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_module_service_client__WEBPACK_IMPORTED_MODULE_2__["ModuleServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ModuleListComponent);
    return ModuleListComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\" style=\"background-color: #e3f2fd;\">\n  <a class=\"navbar-brand\" href=\"#\" style=\"color: #007bff; font-size: x-large\">WhiteBoard</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo\" aria-controls=\"navbarTogglerDemo\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n      </li>\n      <li class=\"nav-item active disabled\" [hidden]=!loggedIn>\n        <a class=\"nav-link\" routerLink=\"/profile\">Profile</a>\n      </li>\n      <li class=\"nav-item\" [hidden]=!loggedIn>\n        <a class=\"nav-link\" [hidden]=!admin\n           routerLink=\"/admin\">Admin</a>\n      </li>\n    </ul>\n    <!--<form class=\"form-inline my-2 my-lg-0\">-->\n    <form [hidden]=!loggedIn\n          class=\"form-inline mt-2 mt-md-0\">\n      <span class=\"navbar-text\">\n        Logged in as : </span>\n      <span style=\"color: dimgrey; font-weight: bold\">&nbsp;{{username}}\n      </span>\n      &nbsp;&nbsp;\n      <button class=\"btn btn-outline-primary my-2 my-sm-0\"\n              (click)=\"logout()\">Logout\n      </button>\n    </form>\n\n    <form [hidden]=loggedIn\n          class=\"form-inline mt-2 mt-md-0\">\n\n      <button class=\"btn btn-outline-primary my-2 my-sm-0 mr-2\"\n              routerLink=\"/login\">&nbsp;Login&nbsp;\n      </button>\n\n      <button class=\"btn btn-outline-primary my-2 my-sm-0\"\n              routerLink=\"/register\">Register\n      </button>\n    </form>\n  </div>\n</nav>\n\n\n<div style=\"margin: 5px; padding: 15px;\">\n  <h2 style=\"color: #0069d9;\">Profile</h2>\n  <div [hidden]=!loggedIn>\n    <br>\n    <form>\n      <div class=\"form-group row\">\n        <label for=\"inputUserName\" class=\"col-form-label ml-5 px-2\" style=\"width: 12%\">User Name</label>\n        <div class=\"col-sm-10\">\n          <input [(ngModel)]=\"username\" [ngModelOptions]=\"{standalone: true}\"\n                 type=\"text\" class=\"form-control\" id=\"inputUserName\" placeholder=\"Username\" value=\"\">\n        </div>\n      </div>\n\n      <div class=\"form-group row \">\n        <label for=\"inputFirstName\" class=\"col-form-label ml-5 px-2\" style=\"width: 12%\">First Name</label>\n        <div class=\"col-sm-10\">\n          <input [(ngModel)]=\"firstName\" [ngModelOptions]=\"{standalone: true}\"\n                 type=\"text\" class=\"form-control\" id=\"inputFirstName\" placeholder=\"Firstname\" value=\"\">\n        </div>\n      </div>\n\n      <div class=\"form-group row \">\n        <label for=\"inputLastName\" class=\"col-form-label ml-5 px-2\" style=\"width: 12%\">Last Name</label>\n        <div class=\"col-sm-10\">\n          <input [(ngModel)]=\"lastName\" [ngModelOptions]=\"{standalone: true}\"\n                 type=\"text\" class=\"form-control\" id=\"inputLastName\" placeholder=\"Lastname\" value=\"\">\n        </div>\n      </div>\n\n\n      <div class=\"form-group row\">\n        <label for=\"inputPhone\" class=\"col-form-label ml-5 px-2\" style=\"width: 12%\">Phone Number</label>\n        <div class=\"col-sm-10\">\n          <input [(ngModel)]=\"phone\" [ngModelOptions]=\"{standalone: true}\"\n                 type=\"text\" class=\"form-control\" id=\"inputPhone\" placeholder=\"phone number\" value=\"\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"inputEmail\" class=\"col-form-label ml-5 px-2\" style=\"width: 12%\">Email</label>\n        <div class=\"col-sm-10\">\n          <input [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\"\n                 type=\"text\" class=\"form-control\" id=\"inputEmail\" placeholder=\"email\" value=\"\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\">\n        <label for=\"inputAddress\" class=\"col-form-label ml-5 px-2\" style=\"width: 12%\">Address</label>\n        <div class=\"col-sm-10\">\n          <input [(ngModel)]=\"address\" [ngModelOptions]=\"{standalone: true}\"\n                 type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"address\" value=\"\">\n        </div>\n      </div>\n\n      <button (click)=\"update()\"\n              class=\"btn btn-primary\" style=\"margin-left:4%; width: 96%\">\n        Update\n      </button>\n\n    </form>\n\n    <div [hidden]=admin>\n      <hr>\n      <h2 class=\"ml-lg-4\" style=\"color: mediumblue;\">Sections Enrolled in : {{sections.length}}</h2>\n      <ul class=\"list-group ml-lg-2\">\n        <li *ngFor=\"let enrollment of sections\" class=\"list-group-item my-1 rounded bg-light shadow-sm col-md-8\">\n          <div class=\"row\">\n            <div class=\"col-4 border-right my-0\">\n              <b>{{enrollment.section.name}}</b>\n            </div>\n            <div class=\"col-4 pl-4\">\n              <span style=\"color: dimgrey;\">\n                <i> Course : {{getCourseName(enrollment.section.courseId)}}</i>\n              </span>\n          </div>\n            <div class=\"col-4 pl-4\">\n              <button (click)=\"dropSection(enrollment)\"\n\n                      class=\"float-right btn btn-outline-danger mr-2\">\n                <i class=\"fas fa-times\"></i>&nbsp;&nbsp;Un Enroll</button>\n            </div>\n          </div>\n        </li>\n      </ul>\n\n    </div>\n\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _services_course_service_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/course.service.client */ "./src/app/services/course.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(service, sectionService, courseService, router) {
        this.service = service;
        this.sectionService = sectionService;
        this.courseService = courseService;
        this.router = router;
        this.username = '';
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.address = '';
        this.phone = '';
        this.user = {};
        this.admin = false;
        this.loggedIn = true;
        this.sections = [];
        this.courseIds = [];
        this.courseList = [];
    }
    ProfileComponent.prototype.update = function () {
        // console.log('Username : ', this.username);
        // console.log('First name : ', this.firstName);
        // console.log('Last name : ', this.lastName);
        // console.log('email : ', this.email);
        // console.log('address : ', this.address);
        this.user = {
            'username': this.username,
            'firstName': this.firstName,
            'lastName': this.lastName,
            'email': this.email,
            'address': this.address,
            'phone': this.phone
        };
        // console.log('User : ', this.user);
        // console.log('ID : ', this.updateId);
        this
            .service
            .updateUser(this.updateId, this.user)
            .then(function () {
            alert('Profile updated !');
        });
    };
    ProfileComponent.prototype.logout = function () {
        var _this = this;
        this.service
            .logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    ProfileComponent.prototype.getCourseName = function (courseId) {
        // console.log('course ID :' , courseId);
        // console.log(this.courseList);
        for (var i = 0; i < this.courseList.length; i++) {
            if (courseId === this.courseList[i].id) {
                return (this.courseList[i].title);
            }
        }
        return ('');
    };
    ProfileComponent.prototype.dropSection = function (enrollment) {
        var _this = this;
        // console.log('You will be un-enrolled from this course section.');
        console.log(enrollment.section._id);
        this.sectionService
            .unEnrollStudentFromSection(enrollment._id, enrollment.section._id)
            .then(function () {
            _this.sectionService
                .findSectionsForStudent()
                .then(function (sections) {
                _this.sections = sections;
                for (var i = 0; i < _this.sections.length; i++) {
                    _this.courseIds.push({
                        'section': _this.sections[i].section.name,
                        'course': _this.sections[i].section.courseId
                    });
                }
                for (var i = 0; i < _this.courseIds.length; i++) {
                    (_this.courseService.findCourseById(_this.courseIds[i].course)
                        .then(function (course) {
                        _this.courseList.push(course);
                    }));
                }
            });
            console.log('Successfully unenrolled !');
        });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .profile()
            .then(function (userProfile) {
            if (userProfile.username === 'No session maintained') {
                _this.loggedIn = false;
                _this.router.navigate(['login']);
            }
            if (userProfile.username === 'admin') {
                _this.admin = true;
            }
            _this.service.findUserById(userProfile._id)
                .then(function (user) {
                console.log('user from DB : ', user);
                _this.updateId = user._id;
                _this.username = user.username;
                _this.phone = user.phone;
                _this.email = user.email;
                _this.address = user.address;
                _this.firstName = user.firstName;
                _this.lastName = user.lastName;
                if (_this.username !== 'admin' && _this.username !== 'No session maintained') {
                    _this.sectionService
                        .findSectionsForStudent()
                        .then(function (sections) {
                        _this.sections = sections;
                        console.log('Sections : ', sections);
                        for (var i = 0; i < _this.sections.length; i++) {
                            _this.courseIds.push({
                                'section': _this.sections[i].section.name,
                                'course': _this.sections[i].section.courseId
                            });
                        }
                        for (var i = 0; i < _this.courseIds.length; i++) {
                            (_this.courseService.findCourseById(_this.courseIds[i].course)
                                .then(function (course) {
                                _this.courseList.push(course);
                            }));
                        }
                    });
                }
            });
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _services_section_service_client__WEBPACK_IMPORTED_MODULE_3__["SectionServiceClient"],
            _services_course_service_client__WEBPACK_IMPORTED_MODULE_4__["CourseServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\" style=\"background-color: #e3f2fd;\">\n  <a class=\"navbar-brand\" href=\"#\" style=\"color: #007bff; font-size: x-large\">WhiteBoard</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo\" aria-controls=\"navbarTogglerDemo\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/login\">Login</a>\n      </li>\n      <!--<li class=\"nav-item\">-->\n      <!--<a class=\"nav-link\" routerLink=\"/register\">Register</a>-->\n      <!--</li>-->\n    </ul>\n  </div>\n</nav>\n\n<div style=\"margin: 5px; padding: 15px;\">\n  <h2 style=\"color: #0069d9;\">Register</h2>\n  <br>\n\n\n  <form>\n    <div class=\"form-group row\">\n      <label for=\"usernameFld\"  class=\"col-form-label ml-5\" style=\"width: 12%\">Username</label>\n      <div class=\"col-sm-10\">\n        <input type=\"text\" class=\"form-control\" id=\"usernameFld\" name=\"first_name\" placeholder=\"Alice\"\n               [(ngModel)]=\"username\"\n               [ngModelOptions]=\"{standalone: true}\"\n               required=\"required\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"passwordFld\"  class=\"col-form-label ml-5\" style=\"width: 12%\">Password</label>\n      <div class=\"col-sm-10\">\n        <input type=\"password\" class=\"form-control\" id=\"passwordFld\" name=\"password\" placeholder=\"123qwe#$%\"\n               [(ngModel)]=\"password\"\n               [ngModelOptions]=\"{standalone: true}\"\n               required=\"required\">\n      </div>\n    </div>\n\n    <div class=\"form-group row\">\n      <label for=\"verifyPasswordFld\" class=\"col-form-label ml-5\" style=\"width: 12%\">Verify Password</label>\n      <div class=\"col-sm-10\">\n        <input [(ngModel)]=\"password2\" [ngModelOptions]=\"{standalone: true}\"\n          type=\"password\" class=\"form-control\" id=\"verifyPasswordFld\" name=\"verify_password\"\n\n        placeholder=\"123qwe#$%\" required=\"required\">\n      </div>\n    </div>\n\n    <button id=\"registerBtn\"\n            type=\"button\"\n            (click)=\"register(username, password, password2)\"\n            class=\"btn text-white mb-2\" style=\"margin-left:3%; width: 97%; background-color: darkgreen\">Register\n    </button>\n\n    <button (click)=\"reset(username, password, password2)\"\n            id=\"resetBtn\" class=\"btn btn-secondary btn-block\"\n            style=\"margin-left:3%; width: 97%;\">\n\n      Reset\n    </button>\n    <div>\n    </div>\n\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router, service) {
        this.router = router;
        this.service = service;
        this.username = '';
        this.password = '';
        this.password2 = '';
    }
    RegisterComponent.prototype.register = function (username, password, password2) {
        var _this = this;
        if (username === '') {
            alert('Enter Username !');
        }
        else {
            this.service.findUserByUsername(username)
                .then(function (user) {
                console.log('User found : ', user);
                if (user !== null) {
                    alert('This username already exists');
                }
                else {
                    if (password === '') {
                        alert('Enter Password !');
                    }
                    else {
                        if (password2 === '') {
                            alert('Verify Password !');
                        }
                        else if (password2 !== password) {
                            alert('Passwords do not match !');
                        }
                        else {
                            _this.service
                                .createUser(username, password)
                                .then(function () {
                                return _this.router.navigate(['profile']);
                            });
                        }
                    }
                }
            });
        }
    };
    RegisterComponent.prototype.reset = function (username, password, password2) {
        this.username = '';
        this.password = '';
        this.password2 = '';
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/section-list/section-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/section-list/section-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/section-list/section-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/section-list/section-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\" style=\"background-color: #e3f2fd;\">\n  <a class=\"navbar-brand\" href=\"#\" style=\"color: #007bff; font-size: x-large\">WhiteBoard</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo\" aria-controls=\"navbarTogglerDemo\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n      </li>\n      <li class=\"nav-item\" [hidden] = !loggedIn>\n        <a class=\"nav-link\" routerLink=\"/profile\">Profile</a>\n      </li>\n      <li class=\"nav-item\" [hidden] = !loggedIn>\n        <a class=\"nav-link\" [hidden] = !admin\n           routerLink=\"/admin\">Admin</a>\n      </li>\n    </ul>\n\n    <form [hidden]=!loggedIn\n          class=\"form-inline mt-2 mt-md-0\">\n      <span class=\"navbar-text\">\n      Logged in as : </span>\n      <span style=\"color: dimgrey; font-weight: bold\">&nbsp;{{username}}\n      </span>\n      &nbsp;&nbsp;\n      <button class=\"btn btn-outline-primary my-2 my-sm-0\"\n              (click)=\"logout()\">Logout\n      </button>\n    </form>\n\n\n    <form [hidden]=loggedIn\n          class=\"form-inline mt-2 mt-md-0\">\n\n      <button class=\"btn btn-outline-primary my-2 my-sm-0 mr-2\"\n              routerLink=\"/login\">&nbsp;Login&nbsp;\n      </button>\n\n      <button class=\"btn btn-outline-primary my-2 my-sm-0\"\n              routerLink=\"/register\">Register\n      </button>\n    </form>\n\n  </div>\n</nav>\n\n<div style=\"margin: 5px; padding: 15px;\">\n  <h2 style=\"color: darkorange\">Sections for course: {{courseId}}</h2>\n\n  <div [hidden]=admin>\n    <ul class=\"list-group rounded py-1 my-1\" style=\"width: 36rem\">\n      <li *ngFor=\"let section of sections\" class=\"list-group-item shadow bg-light\">\n        <span style=\"font-size: large; color:dodgerblue;\"> </span>{{section.name}}\n        <button\n          (click)=\"enroll(section)\"\n          class=\"float-right btn btn-primary float-right mt-2\">Enroll\n        </button>\n        <br> <span style=\"color: dimgrey; font-style: italic \"> Seats Available :  </span>\n        {{section.seats}}\n      </li>\n    </ul>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/section-list/section-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/section-list/section-list.component.ts ***!
  \********************************************************/
/*! exports provided: SectionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionListComponent", function() { return SectionListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_section_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/section.service.client */ "./src/app/services/section.service.client.ts");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SectionListComponent = /** @class */ (function () {
    function SectionListComponent(service, userService, router, route) {
        var _this = this;
        this.service = service;
        this.userService = userService;
        this.router = router;
        this.route = route;
        this.sectionName = '';
        this.seats = '';
        this.courseId = '';
        this.sections = [];
        this.admin = false;
        this.loggedIn = true;
        this.updateMode = false;
        this.updateId = 0;
        this.route.params.subscribe(function (params) { return _this.loadSections(params['courseId']); });
    }
    SectionListComponent.prototype.loadSections = function (courseId) {
        var _this = this;
        this.courseId = courseId;
        this
            .service
            .findSectionsForCourse(courseId)
            .then(function (sections) { return _this.sections = sections; });
    };
    SectionListComponent.prototype.enroll = function (section) {
        var _this = this;
        if (this.loggedIn === true) {
            // console.log('validating enrollment');
            // console.log(this.userId, section._id);
            // alert(section._id + 'check if student is already enrolled in this section');
            this.service.findEnrollmentByCredentials(this.userId, section._id)
                .then(function (enrollment) {
                // console.log('returned value -need null here !');
                // console.log('check : ', enrollment);
                console.log('Available Seats (in this section): ', section.seats);
                if (section.seats === 0) {
                    alert('Cannot Enroll. Seats Full !!');
                }
                else {
                    if (enrollment != null) {
                        alert('You are already enrolled in this course !');
                    }
                    else {
                        _this.service
                            .enrollStudentInSection(section._id)
                            .then(function () {
                            _this.router.navigate(['profile']);
                        });
                    }
                }
            });
        }
        else {
            alert('Login to enroll in a course section.');
        }
    };
    SectionListComponent.prototype.logout = function () {
        var _this = this;
        this.userService
            .logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    SectionListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService
            .profile()
            .then(function (user) {
            console.log('logged in as : ', user);
            _this.username = user.username;
            _this.userId = user._id;
            if (_this.username === 'No session maintained') {
                _this.loggedIn = false;
            }
            if (_this.username === 'admin') {
                _this.admin = true;
            }
        });
    };
    SectionListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-section-list',
            template: __webpack_require__(/*! ./section-list.component.html */ "./src/app/section-list/section-list.component.html"),
            styles: [__webpack_require__(/*! ./section-list.component.css */ "./src/app/section-list/section-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_section_service_client__WEBPACK_IMPORTED_MODULE_2__["SectionServiceClient"],
            _services_user_service_client__WEBPACK_IMPORTED_MODULE_3__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SectionListComponent);
    return SectionListComponent;
}());



/***/ }),

/***/ "./src/app/services/course-navigator.service.client.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/course-navigator.service.client.ts ***!
  \*************************************************************/
/*! exports provided: CourseNavigatorServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseNavigatorServiceClient", function() { return CourseNavigatorServiceClient; });
var CourseNavigatorServiceClient = /** @class */ (function () {
    function CourseNavigatorServiceClient() {
    }
    CourseNavigatorServiceClient.prototype.findAllCourses = function () {
        return fetch('https://kt-course-manager-server.herokuapp.com/api/course')
            .then(function (response) { return response.json(); });
    };
    CourseNavigatorServiceClient.prototype.findAllModulesForCourse = function (courseId) {
        return fetch('https://kt-course-manager-server.herokuapp.com/api/course/' + courseId + '/module')
            .then(function (response) { return response.json(); });
    };
    CourseNavigatorServiceClient.prototype.findAllLessonsForModule = function (courseId, moduleId) {
        return fetch('https://kt-course-manager-server.herokuapp.com/api/course/' + courseId + '/module/' + moduleId + '/lesson')
            .then(function (response) { return response.json(); });
    };
    CourseNavigatorServiceClient.prototype.findAllTopicsForLesson = function (courseId, moduleId, lessonId) {
        return fetch('https://kt-course-manager-server.herokuapp.com/api/course/' + courseId + '/module/' + moduleId +
            '/lesson/' + lessonId + '/topic')
            .then(function (response) { return response.json(); });
    };
    CourseNavigatorServiceClient.prototype.findAllWidgetsForTopic = function (courseId, moduleId, lessonId, topicId) {
        return fetch('https://kt-course-manager-server.herokuapp.com/api/topic/' + topicId + '/widget')
            .then(function (response) { return response.json(); });
    };
    return CourseNavigatorServiceClient;
}());



/***/ }),

/***/ "./src/app/services/course.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/course.service.client.ts ***!
  \***************************************************/
/*! exports provided: CourseServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseServiceClient", function() { return CourseServiceClient; });
var CourseServiceClient = /** @class */ (function () {
    function CourseServiceClient() {
        this.COURSE_URL = 'https://kt-course-manager-server.herokuapp.com/api/course';
    }
    CourseServiceClient.prototype.findAllCourses = function () {
        return fetch(this.COURSE_URL)
            .then(function (response) { return response.json(); });
    };
    CourseServiceClient.prototype.findCourseById = function (courseId) {
        return fetch(this.COURSE_URL + '/' + courseId)
            .then(function (response) { return response.json(); });
    };
    return CourseServiceClient;
}());



/***/ }),

/***/ "./src/app/services/lesson.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/lesson.service.client.ts ***!
  \***************************************************/
/*! exports provided: LessonServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonServiceClient", function() { return LessonServiceClient; });
var LessonServiceClient = /** @class */ (function () {
    function LessonServiceClient() {
    }
    LessonServiceClient.prototype.findLessonsForModule = function (courseId, moduleId) {
        return fetch('https://kt-course-manager-server.herokuapp.com/api/course/' + courseId + '/module/' + moduleId + '/lesson')
            .then(function (response) { return response.json(); });
    };
    return LessonServiceClient;
}());



/***/ }),

/***/ "./src/app/services/module.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/module.service.client.ts ***!
  \***************************************************/
/*! exports provided: ModuleServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleServiceClient", function() { return ModuleServiceClient; });
var ModuleServiceClient = /** @class */ (function () {
    function ModuleServiceClient() {
        this.MODULE_URL = 'https://kt-course-manager-server.herokuapp.com/api/course/COURSE_ID/module';
    }
    ModuleServiceClient.prototype.findModulesForCourse = function (courseId) {
        return fetch(this.MODULE_URL.replace('COURSE_ID', courseId))
            .then(function (response) { return response.json(); });
    };
    return ModuleServiceClient;
}());



/***/ }),

/***/ "./src/app/services/section.service.client.ts":
/*!****************************************************!*\
  !*** ./src/app/services/section.service.client.ts ***!
  \****************************************************/
/*! exports provided: SectionServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionServiceClient", function() { return SectionServiceClient; });
var SectionServiceClient = /** @class */ (function () {
    function SectionServiceClient() {
        this.SECTION_URL = 'https://kt-whiteboard-nodejs-server.herokuapp.com/api/course/COURSEID/section';
    }
    SectionServiceClient.prototype.findSectionsForStudent = function () {
        return fetch('https://kt-whiteboard-nodejs-server.herokuapp.com/api/student/section', {
            credentials: 'include'
        })
            .then(function (response) { return response.json(); });
    };
    SectionServiceClient.prototype.enrollStudentInSection = function (sectionId) {
        console.log('Client works fine');
        var url = 'https://kt-whiteboard-nodejs-server.herokuapp.com/api/section/' + sectionId + '/enrollment';
        return fetch(url, {
            method: 'post',
            credentials: 'include'
        });
    };
    SectionServiceClient.prototype.unEnrollStudentFromSection = function (enrollmentId, sectionId) {
        console.log('EnrollmentID : ', enrollmentId, ' | SectionID : ', sectionId);
        return fetch('https://kt-whiteboard-nodejs-server.herokuapp.com/api/section/' + sectionId + '/enrollment/' + enrollmentId, {
            method: 'delete',
            credentials: 'include'
        });
    };
    SectionServiceClient.prototype.unEnrollAllStudentsFromSection = function (sectionId) {
        console.log('SectionID : ', sectionId);
        return fetch('https://kt-whiteboard-nodejs-server.herokuapp.com/api/section/' + sectionId + '/enrollment', {
            method: 'delete',
            credentials: 'include'
        });
    };
    SectionServiceClient.prototype.findEnrollmentByCredentials = function (studentId, sectionId) {
        console.log('student : ', studentId, ' | section : ', sectionId);
        return fetch('https://kt-whiteboard-nodejs-server.herokuapp.com/api/student/' + studentId + '/section/' + sectionId)
            .then(function (response) { return response.json(); });
    };
    SectionServiceClient.prototype.findSectionsForCourse = function (courseId) {
        return fetch(this.SECTION_URL.replace('COURSEID', courseId))
            .then(function (response) { return response.json(); });
    };
    SectionServiceClient.prototype.createSection = function (courseId, name, maxSeats, seats) {
        var section = { courseId: courseId, name: name, maxSeats: maxSeats, seats: seats };
        return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
            method: 'post',
            body: JSON.stringify(section),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    SectionServiceClient.prototype.deleteSection = function (sectionId) {
        return fetch('https://kt-whiteboard-nodejs-server.herokuapp.com/api/section/' + sectionId, {
            method: 'delete',
            credentials: 'include',
        });
    };
    SectionServiceClient.prototype.updateSection = function (sectionId, name, maxSeats, seats) {
        var section = { name: name, maxSeats: maxSeats, seats: seats };
        console.log('section body at client service: ', section);
        return fetch('https://kt-whiteboard-nodejs-server.herokuapp.com/api/section/' + sectionId, {
            method: 'put',
            body: JSON.stringify(section),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    return SectionServiceClient;
}());



/***/ }),

/***/ "./src/app/services/topic.service.client.ts":
/*!**************************************************!*\
  !*** ./src/app/services/topic.service.client.ts ***!
  \**************************************************/
/*! exports provided: TopicServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicServiceClient", function() { return TopicServiceClient; });
var TopicServiceClient = /** @class */ (function () {
    function TopicServiceClient() {
    }
    TopicServiceClient.prototype.findTopicsForLesson = function (courseId, moduleId, lessonId) {
        return fetch('https://kt-course-manager-server.herokuapp.com/api/course/' + courseId +
            '/module/' + moduleId + '/lesson/' + lessonId + '/topic')
            .then(function (response) { return response.json(); });
    };
    return TopicServiceClient;
}());



/***/ }),

/***/ "./src/app/services/user.service.client.ts":
/*!*************************************************!*\
  !*** ./src/app/services/user.service.client.ts ***!
  \*************************************************/
/*! exports provided: UserServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserServiceClient", function() { return UserServiceClient; });
var UserServiceClient = /** @class */ (function () {
    function UserServiceClient() {
    }
    UserServiceClient.prototype.findUserById = function (userId) {
        return fetch('https://kt-whiteboard-nodejs-server.herokuapp.com/api/user/' + userId, {
            method: 'get',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.findUserByUsername = function (username) {
        console.log('username : ', username);
        return fetch('https://kt-whiteboard-nodejs-server.herokuapp.com/api/user/username/' + username, {
            method: 'get',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.login = function (username, password) {
        var credentials = {
            username: username,
            password: password
        };
        return fetch('https://kt-whiteboard-nodejs-server.herokuapp.com/api/login', {
            method: 'post',
            body: JSON.stringify(credentials),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) { return response.json(); });
    };
    UserServiceClient.prototype.logout = function () {
        return fetch('https://kt-whiteboard-nodejs-server.herokuapp.com/api/logout', {
            method: 'post',
            credentials: 'include'
        });
    };
    UserServiceClient.prototype.profile = function () {
        return fetch('https://kt-whiteboard-nodejs-server.herokuapp.com/api/profile', {
            credentials: 'include',
        })
            .then(function (response) {
            console.log('response in client at Profile : ', response);
            return response.json();
        });
    };
    UserServiceClient.prototype.createUser = function (username, password) {
        var user = {
            username: username,
            password: password
        };
        return fetch('https://kt-whiteboard-nodejs-server.herokuapp.com/api/user', {
            body: JSON.stringify(user),
            credentials: 'include',
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    UserServiceClient.prototype.updateUser = function (userId, user) {
        return fetch('https://kt-whiteboard-nodejs-server.herokuapp.com/api/user/' + userId, {
            method: 'put',
            body: JSON.stringify(user),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    };
    return UserServiceClient;
}());



/***/ }),

/***/ "./src/app/services/widget.service.client.ts":
/*!***************************************************!*\
  !*** ./src/app/services/widget.service.client.ts ***!
  \***************************************************/
/*! exports provided: WidgetServiceClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetServiceClient", function() { return WidgetServiceClient; });
var WidgetServiceClient = /** @class */ (function () {
    function WidgetServiceClient() {
    }
    WidgetServiceClient.prototype.findWidgetsForLesson = function (topicId) {
        return fetch('https://kt-course-manager-server.herokuapp.com/api/topic/' + topicId + '/widget')
            .then(function (response) { return response.json(); });
    };
    return WidgetServiceClient;
}());



/***/ }),

/***/ "./src/app/topic-pills/topic-pills.component.css":
/*!*******************************************************!*\
  !*** ./src/app/topic-pills/topic-pills.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active.wbdv {\r\n  background-color: rgba(255, 120, 0, 0.85);\r\n  border-color: darkorange;\r\n}\r\n\r\n.active.wbdv a {\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/topic-pills/topic-pills.component.html":
/*!********************************************************!*\
  !*** ./src/app/topic-pills/topic-pills.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills\">\n  <li *ngFor=\"let topic of topics\"\n    class=\"nav-item\">\n    <a class=\"nav-link wbdv\"\n       [ngClass]=\"{'active': topic.id == topicId}\"\n       routerLink=\"/course/{{courseId}}/module/{{moduleId}}/lesson/{{lessonId}}/topic/{{topic.id}}\">\n      {{topic.title}}\n    </a>\n  </li>\n</ul>\n<div class=\"mt-2 mb-3 p-2\" >\n  <app-widget-list></app-widget-list>\n</div>\n"

/***/ }),

/***/ "./src/app/topic-pills/topic-pills.component.ts":
/*!******************************************************!*\
  !*** ./src/app/topic-pills/topic-pills.component.ts ***!
  \******************************************************/
/*! exports provided: TopicPillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicPillsComponent", function() { return TopicPillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_topic_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/topic.service.client */ "./src/app/services/topic.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopicPillsComponent = /** @class */ (function () {
    function TopicPillsComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.courseId = 0;
        this.moduleId = 0;
        this.lessonId = 0;
        this.topicId = 0;
        this.topics = [];
        this.route.params.subscribe(function (params) { return _this.setParams(params); });
    }
    TopicPillsComponent.prototype.setParams = function (params) {
        this.courseId = params['courseId'];
        this.moduleId = params['moduleId'];
        this.lessonId = params['lessonId'];
        this.topicId = params['topicId'];
        this.loadTopics(this.courseId, this.moduleId, this.lessonId);
    };
    TopicPillsComponent.prototype.loadTopics = function (courseId, moduleId, lessonId) {
        var _this = this;
        this.lessonId = lessonId;
        console.log('Topic Pills constructor called !!');
        // console.log('Lesson : ', lessonId + ' | Topic : ', this.topicId);
        this.service.findTopicsForLesson(courseId, moduleId, lessonId)
            .then(function (topics) { return _this.topics = topics; });
    };
    TopicPillsComponent.prototype.ngOnInit = function () {
    };
    TopicPillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topic-pills',
            template: __webpack_require__(/*! ./topic-pills.component.html */ "./src/app/topic-pills/topic-pills.component.html"),
            styles: [__webpack_require__(/*! ./topic-pills.component.css */ "./src/app/topic-pills/topic-pills.component.css")]
        }),
        __metadata("design:paramtypes", [_services_topic_service_client__WEBPACK_IMPORTED_MODULE_2__["TopicServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], TopicPillsComponent);
    return TopicPillsComponent;
}());



/***/ }),

/***/ "./src/app/white-board/white-board.component.css":
/*!*******************************************************!*\
  !*** ./src/app/white-board/white-board.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/white-board/white-board.component.html":
/*!********************************************************!*\
  !*** ./src/app/white-board/white-board.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light\" style=\"background-color: #e3f2fd;\">\n  <a class=\"navbar-brand\" href=\"#\" style=\"color: #007bff; font-size: x-large\">WhiteBoard</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo\" aria-controls=\"navbarTogglerDemo\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo\">\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/home\">Home</a>\n      </li>\n      <li class=\"nav-item\" [hidden] = !loggedIn>\n        <a class=\"nav-link\" routerLink=\"/profile\">Profile</a>\n      </li>\n      <li class=\"nav-item\" [hidden] = !loggedIn>\n        <a class=\"nav-link\" [hidden] = !admin\n           routerLink=\"/admin\">Admin</a>\n      </li>\n    </ul>\n\n    <form [hidden]=!loggedIn\n          class=\"form-inline mt-2 mt-md-0\">\n      <span class=\"navbar-text\">\n      Logged in as : </span>\n      <span style=\"color: dimgrey; font-weight: bold\">&nbsp;{{username}}\n      </span>\n      &nbsp;&nbsp;\n      <button class=\"btn btn-outline-primary my-2 my-sm-0\"\n              (click)=\"logout()\">Logout\n      </button>\n    </form>\n\n\n    <form [hidden]=loggedIn\n          class=\"form-inline mt-2 mt-md-0\">\n\n      <button class=\"btn btn-outline-primary my-2 my-sm-0 mr-2\"\n              routerLink=\"/login\">&nbsp;Login&nbsp;\n      </button>\n\n      <button class=\"btn btn-outline-primary my-2 my-sm-0\"\n              routerLink=\"/register\">Register\n      </button>\n    </form>\n\n\n  </div>\n</nav>\n\n<div style=\"margin: 5px; padding: 15px;\">\n  <div [hidden]=!loggedIn>\n    <app-enrolled-courses [hidden]=admin></app-enrolled-courses>\n    <hr/>\n  </div>\n  <app-course-grid></app-course-grid>\n  <!--<h1 style=\"color: #007bff\">WhiteBoard</h1>-->\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/white-board/white-board.component.ts":
/*!******************************************************!*\
  !*** ./src/app/white-board/white-board.component.ts ***!
  \******************************************************/
/*! exports provided: WhiteBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhiteBoardComponent", function() { return WhiteBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service.client */ "./src/app/services/user.service.client.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WhiteBoardComponent = /** @class */ (function () {
    function WhiteBoardComponent(service, router) {
        this.service = service;
        this.router = router;
        this.admin = false;
        this.loggedIn = false;
    }
    WhiteBoardComponent.prototype.logout = function () {
        var _this = this;
        this.service
            .logout()
            .then(function () {
            return _this.router.navigate(['login']);
        });
    };
    WhiteBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service
            .profile()
            .then(function (user) {
            console.log('logged in as : ', user);
            _this.username = user.username;
            if (_this.username !== 'No session maintained') {
                _this.loggedIn = true;
            }
            if (_this.username === 'admin') {
                _this.admin = true;
            }
        });
    };
    WhiteBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-white-board',
            template: __webpack_require__(/*! ./white-board.component.html */ "./src/app/white-board/white-board.component.html"),
            styles: [__webpack_require__(/*! ./white-board.component.css */ "./src/app/white-board/white-board.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service_client__WEBPACK_IMPORTED_MODULE_1__["UserServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WhiteBoardComponent);
    return WhiteBoardComponent;
}());



/***/ }),

/***/ "./src/app/widget-list/widget-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/widget-list/widget-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let widget of widgets\">\n  <div [ngSwitch]=\"widget.widgetType\">\n    <div *ngSwitchCase=\"'Heading'\">\n      <div [ngSwitch]=\"widget.size\">\n        <h1 *ngSwitchCase=\"'1'\">Heading Widget : <span style=\"color: orangered;\">{{widget.text}}</span></h1>\n        <h2 *ngSwitchCase=\"'2'\">Heading Widget : <span style=\"color: orangered;\">{{widget.text}}</span></h2>\n        <h3 *ngSwitchCase=\"'3'\">Heading Widget : <span style=\"color: orangered;\">{{widget.text}}</span></h3>\n        <h4 *ngSwitchCase=\"'4'\">Heading Widget : <span style=\"color: orangered;\">{{widget.text}}</span></h4>\n        <h5 *ngSwitchCase=\"'5'\">Heading Widget : <span style=\"color: orangered;\">{{widget.text}}</span></h5>\n        <h6 *ngSwitchCase=\"'6'\">Heading Widget : <span style=\"color: orangered;\">{{widget.text}}</span></h6>\n        <br/>\n      </div>\n    </div>\n    <div *ngSwitchCase=\"'Link'\">\n      <a href=\"{{widget.href}}\">{{widget.text}}</a>\n      <br/>\n    </div>\n    <div *ngSwitchCase=\"'Image'\">\n      <img src=\"{{widget.src}}\" alt=\"image\" class=\"shadow rounded card p-2\" height=\"250px\" />\n      <br/>\n    </div>\n    <div *ngSwitchCase=\"'List'\">\n      <h4>List Widget</h4>\n      <ul class=\"list-group\">\n        <li class=\"list-group-item bg-light\"\n            *ngFor=\"let item of widget.listItems.split('\\n')\">\n          {{item}}\n        </li>\n      </ul>\n      <br/>\n    </div>\n    <div *ngSwitchCase=\"'Exam'\">\n    </div>\n    <div *ngSwitchCase=\"'Assignment'\">\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/widget-list/widget-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/widget-list/widget-list.component.ts ***!
  \******************************************************/
/*! exports provided: WidgetListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetListComponent", function() { return WidgetListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/widget.service.client */ "./src/app/services/widget.service.client.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WidgetListComponent = /** @class */ (function () {
    function WidgetListComponent(service, route) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.widgets = [];
        this.route.params.subscribe(function (params) { return _this.setContext(params); });
    }
    WidgetListComponent.prototype.setContext = function (params) {
        this.context = params;
        this.loadWidgets(params.topicId);
    };
    WidgetListComponent.prototype.loadWidgets = function (topicId) {
        var _this = this;
        this.service.findWidgetsForLesson(topicId)
            .then(function (widgets) { return _this.widgets = widgets; });
    };
    WidgetListComponent.prototype.ngOnInit = function () {
    };
    WidgetListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widget-list',
            template: __webpack_require__(/*! ./widget-list.component.html */ "./src/app/widget-list/widget-list.component.html"),
            styles: [__webpack_require__(/*! ./widget-list.component.css */ "./src/app/widget-list/widget-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_widget_service_client__WEBPACK_IMPORTED_MODULE_2__["WidgetServiceClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], WidgetListComponent);
    return WidgetListComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\A5\whiteboard-angular-client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map