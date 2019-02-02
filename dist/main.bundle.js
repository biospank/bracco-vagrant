webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_accounts_guards_auth_guard__ = __webpack_require__("./src/app/components/accounts/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_can_deactivate_can_deactivate_guard__ = __webpack_require__("./src/app/helpers/can-deactivate/can-deactivate.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_layout_logged_layout_logged_layout_component__ = __webpack_require__("./src/app/components/layout/logged-layout/logged-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_layout_notlogged_layout_notlogged_layout_component__ = __webpack_require__("./src/app/components/layout/notlogged-layout/notlogged-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_layout_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/layout/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_accounts_signin_signin_component__ = __webpack_require__("./src/app/components/accounts/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_accounts_add_add_component__ = __webpack_require__("./src/app/components/accounts/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_accounts_list_list_component__ = __webpack_require__("./src/app/components/accounts/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_accounts_details_details_component__ = __webpack_require__("./src/app/components/accounts/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_accounts_profile_profile_component__ = __webpack_require__("./src/app/components/accounts/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_address_book_add_add_component__ = __webpack_require__("./src/app/components/address-book/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_address_book_list_list_component__ = __webpack_require__("./src/app/components/address-book/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_address_book_archived_archived_component__ = __webpack_require__("./src/app/components/address-book/archived/archived.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_address_book_details_details_component__ = __webpack_require__("./src/app/components/address-book/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_notes_details_details_component__ = __webpack_require__("./src/app/components/notes/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_notes_add_add_component__ = __webpack_require__("./src/app/components/notes/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_notes_list_list_component__ = __webpack_require__("./src/app/components/notes/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_notes_archived_archived_component__ = __webpack_require__("./src/app/components/notes/archived/archived.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_tickets_add_add_component__ = __webpack_require__("./src/app/components/tickets/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_tickets_list_list_component__ = __webpack_require__("./src/app/components/tickets/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_tickets_archived_archived_component__ = __webpack_require__("./src/app/components/tickets/archived/archived.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_tickets_details_details_component__ = __webpack_require__("./src/app/components/tickets/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_documents_list_list_component__ = __webpack_require__("./src/app/components/documents/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_documents_add_add_component__ = __webpack_require__("./src/app/components/documents/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_documents_details_details_component__ = __webpack_require__("./src/app/components/documents/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_documents_archived_archived_component__ = __webpack_require__("./src/app/components/documents/archived/archived.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// Layouts



// end





















var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__components_layout_logged_layout_logged_layout_component__["a" /* LoggedLayoutComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__components_accounts_guards_auth_guard__["a" /* AuthGuard */]],
        children: [
            {
                path: 'documents/add',
                component: __WEBPACK_IMPORTED_MODULE_25__components_documents_add_add_component__["a" /* DocumentAddComponent */],
                data: {
                    title: 'Aggiungi Documento',
                    breadcrumb: 'Aggiungi Documento'
                }
            },
            {
                path: 'documents/list',
                component: __WEBPACK_IMPORTED_MODULE_24__components_documents_list_list_component__["a" /* DocumentListComponent */],
                data: {
                    title: 'Lista Documenti',
                    breadcrumb: 'Lista Documenti'
                }
            },
            {
                path: 'documents/archived',
                component: __WEBPACK_IMPORTED_MODULE_27__components_documents_archived_archived_component__["a" /* DocumentsArchivedComponent */],
                data: {
                    title: 'Lista Documenti archiviati',
                    breadcrumb: 'Lista Documenti archiviati'
                }
            },
            {
                path: 'documents/:id',
                component: __WEBPACK_IMPORTED_MODULE_26__components_documents_details_details_component__["a" /* DocumentDetailsComponent */],
                data: {
                    title: 'Dettaglio documento',
                    breadcrumb: false
                },
                canDeactivate: [__WEBPACK_IMPORTED_MODULE_3__helpers_can_deactivate_can_deactivate_guard__["a" /* CanDeactivateGuard */]]
            },
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_6__components_layout_dashboard_dashboard_component__["a" /* DashboardComponent */],
                pathMatch: 'full',
                data: {
                    title: 'Dashboard',
                }
            },
            {
                path: 'profile',
                component: __WEBPACK_IMPORTED_MODULE_11__components_accounts_profile_profile_component__["a" /* AccountProfileComponent */],
                data: {
                    title: 'Profilo Utente',
                    breadcrumb: 'Profilo'
                }
            },
            {
                path: 'accounts/add',
                component: __WEBPACK_IMPORTED_MODULE_8__components_accounts_add_add_component__["a" /* AddAccountComponent */],
                data: {
                    title: 'Registrazione',
                    breadcrumb: 'Aggiungi account'
                }
            },
            {
                path: 'accounts',
                component: __WEBPACK_IMPORTED_MODULE_9__components_accounts_list_list_component__["a" /* AccountsListComponent */],
                data: {
                    title: 'Lista dipendenti',
                    breadcrumb: 'Lista dipendenti'
                }
            },
            {
                path: 'accounts/:id',
                component: __WEBPACK_IMPORTED_MODULE_10__components_accounts_details_details_component__["a" /* AccountDetailsComponent */],
                data: {
                    title: 'Dettaglio account',
                    breadcrumb: "Dettaglio"
                },
                canDeactivate: [__WEBPACK_IMPORTED_MODULE_3__helpers_can_deactivate_can_deactivate_guard__["a" /* CanDeactivateGuard */]]
            },
            {
                path: 'addressbook/add',
                component: __WEBPACK_IMPORTED_MODULE_12__components_address_book_add_add_component__["a" /* AddingAddressBookComponent */],
                data: {
                    title: 'Aggiungi in rubrica',
                    breadcrumb: 'Aggiungi in rubrica'
                }
            },
            {
                path: 'addressbook',
                component: __WEBPACK_IMPORTED_MODULE_13__components_address_book_list_list_component__["a" /* AddressbookListComponent */],
                data: {
                    title: 'Rubrica',
                    breadcrumb: 'Rubrica'
                }
            },
            {
                path: 'addressbook/archived',
                component: __WEBPACK_IMPORTED_MODULE_14__components_address_book_archived_archived_component__["a" /* AddressbookArchivedComponent */],
                data: {
                    title: 'Lista indirizzi rubrica archiviati',
                    breadcrumb: 'Archivio Rubrica'
                }
            },
            {
                path: 'addressbook/:id',
                component: __WEBPACK_IMPORTED_MODULE_15__components_address_book_details_details_component__["a" /* AddressbookDetailsComponent */],
                data: {
                    title: 'Dettaglio indirizzo rubrica',
                    breadcrumb: 'Dettaglio'
                },
                canDeactivate: [__WEBPACK_IMPORTED_MODULE_3__helpers_can_deactivate_can_deactivate_guard__["a" /* CanDeactivateGuard */]]
            },
            {
                path: 'notes/add',
                component: __WEBPACK_IMPORTED_MODULE_17__components_notes_add_add_component__["a" /* NotesAddComponent */],
                data: {
                    title: 'Aggiungi appunti',
                    breadcrumb: 'Aggiungi appunti'
                }
            },
            {
                path: 'notes',
                component: __WEBPACK_IMPORTED_MODULE_18__components_notes_list_list_component__["a" /* NotesListComponent */],
                data: {
                    title: 'Lista appunti',
                    breadcrumb: 'Lista appunti'
                }
            },
            {
                path: 'notes/archived',
                component: __WEBPACK_IMPORTED_MODULE_19__components_notes_archived_archived_component__["a" /* NotesArchivedComponent */],
                data: {
                    title: 'Lista appunti archiviati',
                    breadcrumb: 'Lista appunti archiviati'
                }
            },
            {
                path: 'notes/:id',
                component: __WEBPACK_IMPORTED_MODULE_16__components_notes_details_details_component__["a" /* NotesDetailsComponent */],
                data: {
                    title: 'Dettaglio appunto',
                    breadcrumb: 'Dettaglio'
                },
                canDeactivate: [__WEBPACK_IMPORTED_MODULE_3__helpers_can_deactivate_can_deactivate_guard__["a" /* CanDeactivateGuard */]]
            },
            {
                path: 'tickets/add',
                component: __WEBPACK_IMPORTED_MODULE_20__components_tickets_add_add_component__["a" /* TicketAddComponent */],
                data: {
                    title: 'Aggiungi ticket',
                    breadcrumb: 'Aggiungi ticket'
                }
            },
            {
                path: 'tickets',
                component: __WEBPACK_IMPORTED_MODULE_21__components_tickets_list_list_component__["a" /* TicketListComponent */],
                data: {
                    title: 'Lista ticket',
                    breadcrumb: 'Lista ticket'
                }
            },
            {
                path: 'tickets/archived',
                component: __WEBPACK_IMPORTED_MODULE_22__components_tickets_archived_archived_component__["a" /* TicketArchivedComponent */],
                data: {
                    title: 'Lista ticket archiviati',
                    breadcrumb: 'Lista ticket archiviati'
                }
            },
            {
                path: 'tickets/:id',
                component: __WEBPACK_IMPORTED_MODULE_23__components_tickets_details_details_component__["a" /* TicketDetailsComponent */],
                data: {
                    title: 'Dettaglio ticket',
                    breadcrumb: 'Dettaglio'
                }
            },
        ]
    },
    // No layout routes
    {
        path: 'signin',
        component: __WEBPACK_IMPORTED_MODULE_5__components_layout_notlogged_layout_notlogged_layout_component__["a" /* NotloggedLayoutComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_7__components_accounts_signin_signin_component__["a" /* SigninComponent */],
                pathMatch: 'full',
                data: { title: 'Login' }
            }
        ]
    },
    // otherwise redirect to home
    {
        path: '**', redirectTo: ''
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(appRoutes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services

var AppComponent = /** @class */ (function () {
    function AppComponent(messageService) {
        var _this = this;
        this.messageService = messageService;
        // subscribe to home component messages
        this.subscription = this.messageService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_message_service__["a" /* MessageService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular_froala_wysiwyg__ = __webpack_require__("./node_modules/angular-froala-wysiwyg/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__toverux_ngx_sweetalert2__ = __webpack_require__("./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__helpers_build_request_url__ = __webpack_require__("./src/app/helpers/build-request-url.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__helpers_timezone__ = __webpack_require__("./src/app/helpers/timezone.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__helpers_check_object__ = __webpack_require__("./src/app/helpers/check-object.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__helpers_session_storage__ = __webpack_require__("./src/app/helpers/session-storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__helpers_local_storage__ = __webpack_require__("./src/app/helpers/local-storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__helpers_navigation__ = __webpack_require__("./src/app/helpers/navigation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__helpers_can_deactivate_can_deactivate_guard__ = __webpack_require__("./src/app/helpers/can-deactivate/can-deactivate.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_accounts_service_account_service__ = __webpack_require__("./src/app/components/accounts/service/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_notes_service_note_service__ = __webpack_require__("./src/app/components/notes/service/note.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_event_source_listener_service__ = __webpack_require__("./src/app/services/event-source-listener.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_tickets_comments_service_comment_service__ = __webpack_require__("./src/app/components/tickets/comments/service/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_accounts_guards_auth_guard__ = __webpack_require__("./src/app/components/accounts/_guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_accounts_signin_signin_component__ = __webpack_require__("./src/app/components/accounts/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_accounts_add_add_component__ = __webpack_require__("./src/app/components/accounts/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_accounts_list_list_component__ = __webpack_require__("./src/app/components/accounts/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_layout_header_header_component__ = __webpack_require__("./src/app/components/layout/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_layout_logged_layout_logged_layout_component__ = __webpack_require__("./src/app/components/layout/logged-layout/logged-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_layout_notlogged_layout_notlogged_layout_component__ = __webpack_require__("./src/app/components/layout/notlogged-layout/notlogged-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_widgets_alert_message_alert_message_component__ = __webpack_require__("./src/app/components/widgets/alert-message/alert-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_widgets_search_form_search_form_component__ = __webpack_require__("./src/app/components/widgets/search-form/search-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_widgets_modal_prompt_modal_prompt_component__ = __webpack_require__("./src/app/components/widgets/modal-prompt/modal-prompt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_widgets_page_not_found_page_not_found_component__ = __webpack_require__("./src/app/components/widgets/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_widgets_back_button_back_button_component__ = __webpack_require__("./src/app/components/widgets/back-button/back-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_layout_dashboard_dashboard_component__ = __webpack_require__("./src/app/components/layout/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_accounts_list_row_row_component__ = __webpack_require__("./src/app/components/accounts/list/row/row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__components_accounts_details_details_component__ = __webpack_require__("./src/app/components/accounts/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_address_book_add_add_component__ = __webpack_require__("./src/app/components/address-book/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__components_address_book_list_list_component__ = __webpack_require__("./src/app/components/address-book/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__components_address_book_list_row_row_component__ = __webpack_require__("./src/app/components/address-book/list/row/row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__components_address_book_archived_archived_component__ = __webpack_require__("./src/app/components/address-book/archived/archived.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__components_address_book_archived_row_row_component__ = __webpack_require__("./src/app/components/address-book/archived/row/row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__components_address_book_details_details_component__ = __webpack_require__("./src/app/components/address-book/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__components_notes_add_add_component__ = __webpack_require__("./src/app/components/notes/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__components_notes_details_details_component__ = __webpack_require__("./src/app/components/notes/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__components_notes_list_list_component__ = __webpack_require__("./src/app/components/notes/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__components_notes_list_row_row_component__ = __webpack_require__("./src/app/components/notes/list/row/row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__components_widgets_message_notrecords_message_notrecords_component__ = __webpack_require__("./src/app/components/widgets/message-notrecords/message-notrecords.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__components_notes_archived_archived_component__ = __webpack_require__("./src/app/components/notes/archived/archived.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__components_notes_archived_row_row_component__ = __webpack_require__("./src/app/components/notes/archived/row/row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__components_tickets_add_add_component__ = __webpack_require__("./src/app/components/tickets/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__components_tickets_list_list_component__ = __webpack_require__("./src/app/components/tickets/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__components_tickets_list_row_row_component__ = __webpack_require__("./src/app/components/tickets/list/row/row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__components_accounts_profile_profile_component__ = __webpack_require__("./src/app/components/accounts/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__components_accounts_profile_personal_info_personal_info_component__ = __webpack_require__("./src/app/components/accounts/profile/personal-info/personal-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__components_accounts_profile_change_email_change_email_component__ = __webpack_require__("./src/app/components/accounts/profile/change-email/change-email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__components_accounts_profile_change_password_change_password_component__ = __webpack_require__("./src/app/components/accounts/profile/change-password/change-password.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__components_tickets_archived_archived_component__ = __webpack_require__("./src/app/components/tickets/archived/archived.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__components_tickets_archived_row_row_component__ = __webpack_require__("./src/app/components/tickets/archived/row/row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__components_tickets_details_details_component__ = __webpack_require__("./src/app/components/tickets/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__components_layout_header_main_nav_main_nav_component__ = __webpack_require__("./src/app/components/layout/header/main-nav/main-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__components_widgets_dropdown_icon_nav_dropdown_icon_nav_component__ = __webpack_require__("./src/app/components/widgets/dropdown-icon-nav/dropdown-icon-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__components_layout_header_profile_main_nav_profile_main_nav_component__ = __webpack_require__("./src/app/components/layout/header/profile-main-nav/profile-main-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__components_layout_sidebar_sidebar_nav_sidebar_nav_component__ = __webpack_require__("./src/app/components/layout/sidebar/sidebar-nav/sidebar-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__components_layout_sidebar_sidebar_profile_sidebar_profile_component__ = __webpack_require__("./src/app/components/layout/sidebar/sidebar-profile/sidebar-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__components_layout_dashboard_ticket_list_ticket_list_component__ = __webpack_require__("./src/app/components/layout/dashboard/ticket-list/ticket-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__components_layout_dashboard_addressbook_list_addressbook_list_component__ = __webpack_require__("./src/app/components/layout/dashboard/addressbook-list/addressbook-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__components_tickets_comments_list_list_component__ = __webpack_require__("./src/app/components/tickets/comments/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__components_tickets_comments_add_add_component__ = __webpack_require__("./src/app/components/tickets/comments/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__components_widgets_buddle_boxes_buddle_boxes_component__ = __webpack_require__("./src/app/components/widgets/buddle-boxes/buddle-boxes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__components_widgets_text_warning_text_warning_component__ = __webpack_require__("./src/app/components/widgets/text-warning/text-warning.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__components_tickets_filter_form_filter_form_component__ = __webpack_require__("./src/app/components/tickets/filter-form/filter-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__components_layout_sidebar_sidebar_toggle_button_sidebar_toggle_button_component__ = __webpack_require__("./src/app/components/layout/sidebar/sidebar-toggle-button/sidebar-toggle-button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__components_layout_logo_logo_component__ = __webpack_require__("./src/app/components/layout/logo/logo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__components_widgets_notify_alert_notify_alert_component__ = __webpack_require__("./src/app/components/widgets/notify-alert/notify-alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__components_tickets_comments_list_row_row_component__ = __webpack_require__("./src/app/components/tickets/comments/list/row/row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__components_accounts_profile_settings_settings_component__ = __webpack_require__("./src/app/components/accounts/profile/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_78__components_layout_dashboard_note_list_note_list_component__ = __webpack_require__("./src/app/components/layout/dashboard/note-list/note-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_79__components_documents_list_list_component__ = __webpack_require__("./src/app/components/documents/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_80__components_documents_add_add_component__ = __webpack_require__("./src/app/components/documents/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_81__components_documents_list_row_row_component__ = __webpack_require__("./src/app/components/documents/list/row/row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_82__components_documents_details_details_component__ = __webpack_require__("./src/app/components/documents/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_83__components_tickets_assignees_list_assignees_list_component__ = __webpack_require__("./src/app/components/tickets/assignees-list/assignees-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_84__components_layout_breadcrumb_breadcrumb_component__ = __webpack_require__("./src/app/components/layout/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_85__components_documents_shared_documents_with_shared_documents_with_component__ = __webpack_require__("./src/app/components/documents/shared-documents-with/shared-documents-with.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_86__components_documents_archived_archived_component__ = __webpack_require__("./src/app/components/documents/archived/archived.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_87__components_documents_archived_row_row_component__ = __webpack_require__("./src/app/components/documents/archived/row/row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_88__components_layout_dashboard_document_list_document_list_component__ = __webpack_require__("./src/app/components/layout/dashboard/document-list/document-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_89__components_widgets_notify_alert_item_item_component__ = __webpack_require__("./src/app/components/widgets/notify-alert/item/item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_90__components_layout_dashboard_team_members_team_members_component__ = __webpack_require__("./src/app/components/layout/dashboard/team-members/team-members.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_91__components_widgets_switch_status_switch_status_component__ = __webpack_require__("./src/app/components/widgets/switch-status/switch-status.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// Helpers







// Services












































































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                //Widgets
                __WEBPACK_IMPORTED_MODULE_30__components_widgets_alert_message_alert_message_component__["a" /* AlertMessageComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_widgets_search_form_search_form_component__["a" /* SearchFormComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_widgets_modal_prompt_modal_prompt_component__["a" /* ModalPromptComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_widgets_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_widgets_back_button_back_button_component__["a" /* BackButtonComponent */],
                //end
                __WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_accounts_signin_signin_component__["a" /* SigninComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_accounts_add_add_component__["a" /* AddAccountComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_accounts_list_list_component__["a" /* AccountsListComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_layout_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_layout_logged_layout_logged_layout_component__["a" /* LoggedLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_layout_notlogged_layout_notlogged_layout_component__["a" /* NotloggedLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_layout_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_accounts_list_row_row_component__["a" /* AccountListRowComponent */],
                __WEBPACK_IMPORTED_MODULE_37__components_accounts_details_details_component__["a" /* AccountDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_38__components_address_book_add_add_component__["a" /* AddingAddressBookComponent */],
                __WEBPACK_IMPORTED_MODULE_39__components_address_book_list_list_component__["a" /* AddressbookListComponent */],
                __WEBPACK_IMPORTED_MODULE_40__components_address_book_list_row_row_component__["a" /* AddressbookListRowComponent */],
                __WEBPACK_IMPORTED_MODULE_42__components_address_book_archived_row_row_component__["a" /* AddressbookArchivedRowComponent */],
                __WEBPACK_IMPORTED_MODULE_41__components_address_book_archived_archived_component__["a" /* AddressbookArchivedComponent */],
                __WEBPACK_IMPORTED_MODULE_43__components_address_book_details_details_component__["a" /* AddressbookDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_44__components_notes_add_add_component__["a" /* NotesAddComponent */],
                __WEBPACK_IMPORTED_MODULE_45__components_notes_details_details_component__["a" /* NotesDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_46__components_notes_list_list_component__["a" /* NotesListComponent */],
                __WEBPACK_IMPORTED_MODULE_47__components_notes_list_row_row_component__["a" /* NotesListRowComponent */],
                __WEBPACK_IMPORTED_MODULE_48__components_widgets_message_notrecords_message_notrecords_component__["a" /* MessageNotrecordsComponent */],
                __WEBPACK_IMPORTED_MODULE_49__components_notes_archived_archived_component__["a" /* NotesArchivedComponent */],
                __WEBPACK_IMPORTED_MODULE_50__components_notes_archived_row_row_component__["a" /* ArchivedNotesRowComponent */],
                __WEBPACK_IMPORTED_MODULE_51__components_tickets_add_add_component__["a" /* TicketAddComponent */],
                __WEBPACK_IMPORTED_MODULE_52__components_tickets_list_list_component__["a" /* TicketListComponent */],
                __WEBPACK_IMPORTED_MODULE_53__components_tickets_list_row_row_component__["a" /* TicketListRowComponent */],
                __WEBPACK_IMPORTED_MODULE_54__components_accounts_profile_profile_component__["a" /* AccountProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_55__components_accounts_profile_personal_info_personal_info_component__["a" /* AccountPersonalInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_56__components_accounts_profile_change_email_change_email_component__["a" /* AccountEmailChangeComponent */],
                __WEBPACK_IMPORTED_MODULE_57__components_accounts_profile_change_password_change_password_component__["a" /* AccountPasswordChangeComponent */],
                __WEBPACK_IMPORTED_MODULE_58__components_tickets_archived_archived_component__["a" /* TicketArchivedComponent */],
                __WEBPACK_IMPORTED_MODULE_59__components_tickets_archived_row_row_component__["a" /* TicketsArchivedRowComponent */],
                __WEBPACK_IMPORTED_MODULE_60__components_tickets_details_details_component__["a" /* TicketDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_61__components_layout_header_main_nav_main_nav_component__["a" /* HeaderMainNavComponent */],
                __WEBPACK_IMPORTED_MODULE_62__components_widgets_dropdown_icon_nav_dropdown_icon_nav_component__["a" /* DropdownIconNavComponent */],
                __WEBPACK_IMPORTED_MODULE_63__components_layout_header_profile_main_nav_profile_main_nav_component__["a" /* ProfileMainNavComponent */],
                __WEBPACK_IMPORTED_MODULE_64__components_layout_sidebar_sidebar_nav_sidebar_nav_component__["a" /* SidebarNavComponent */],
                __WEBPACK_IMPORTED_MODULE_65__components_layout_sidebar_sidebar_profile_sidebar_profile_component__["a" /* SidebarProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_66__components_layout_dashboard_ticket_list_ticket_list_component__["a" /* CardTicketListComponent */],
                __WEBPACK_IMPORTED_MODULE_67__components_layout_dashboard_addressbook_list_addressbook_list_component__["a" /* CardAddressbookListComponent */],
                __WEBPACK_IMPORTED_MODULE_68__components_tickets_comments_list_list_component__["a" /* TicketCommentsListComponent */],
                __WEBPACK_IMPORTED_MODULE_69__components_tickets_comments_add_add_component__["a" /* TicketCommentAddComponent */],
                __WEBPACK_IMPORTED_MODULE_70__components_widgets_buddle_boxes_buddle_boxes_component__["a" /* BuddleBoxesComponent */],
                __WEBPACK_IMPORTED_MODULE_71__components_widgets_text_warning_text_warning_component__["a" /* TextWarningComponent */],
                __WEBPACK_IMPORTED_MODULE_72__components_tickets_filter_form_filter_form_component__["a" /* FilterFormComponent */],
                __WEBPACK_IMPORTED_MODULE_73__components_layout_sidebar_sidebar_toggle_button_sidebar_toggle_button_component__["a" /* SidebarToggleButtonComponent */],
                __WEBPACK_IMPORTED_MODULE_74__components_layout_logo_logo_component__["a" /* LogoComponent */],
                __WEBPACK_IMPORTED_MODULE_75__components_widgets_notify_alert_notify_alert_component__["a" /* NotifyAlertComponent */],
                __WEBPACK_IMPORTED_MODULE_76__components_tickets_comments_list_row_row_component__["a" /* CommentListRowComponent */],
                __WEBPACK_IMPORTED_MODULE_77__components_accounts_profile_settings_settings_component__["a" /* AppSettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_78__components_layout_dashboard_note_list_note_list_component__["a" /* CardNoteListComponent */],
                __WEBPACK_IMPORTED_MODULE_79__components_documents_list_list_component__["a" /* DocumentListComponent */],
                __WEBPACK_IMPORTED_MODULE_80__components_documents_add_add_component__["a" /* DocumentAddComponent */],
                __WEBPACK_IMPORTED_MODULE_81__components_documents_list_row_row_component__["a" /* DocumentListRowComponent */],
                __WEBPACK_IMPORTED_MODULE_82__components_documents_details_details_component__["a" /* DocumentDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_83__components_tickets_assignees_list_assignees_list_component__["a" /* AssigneesListComponent */],
                __WEBPACK_IMPORTED_MODULE_84__components_layout_breadcrumb_breadcrumb_component__["a" /* BreadcrumbComponent */],
                __WEBPACK_IMPORTED_MODULE_85__components_documents_shared_documents_with_shared_documents_with_component__["a" /* SharedDocumentsWithComponent */],
                __WEBPACK_IMPORTED_MODULE_86__components_documents_archived_archived_component__["a" /* DocumentsArchivedComponent */],
                __WEBPACK_IMPORTED_MODULE_87__components_documents_archived_row_row_component__["a" /* DocumentArchivedRowComponent */],
                __WEBPACK_IMPORTED_MODULE_88__components_layout_dashboard_document_list_document_list_component__["a" /* CardDocumentListComponent */],
                __WEBPACK_IMPORTED_MODULE_89__components_widgets_notify_alert_item_item_component__["a" /* NotifyAlertItemComponent */],
                __WEBPACK_IMPORTED_MODULE_90__components_layout_dashboard_team_members_team_members_component__["a" /* CardTeamMembersComponent */],
                __WEBPACK_IMPORTED_MODULE_91__components_widgets_switch_status_switch_status_component__["a" /* SwitchStatusComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__toverux_ngx_sweetalert2__["a" /* SweetAlert2Module */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__services_http_service__["a" /* Service */],
                __WEBPACK_IMPORTED_MODULE_22__components_accounts_guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_9__helpers_build_request_url__["a" /* RequestUrl */],
                __WEBPACK_IMPORTED_MODULE_10__helpers_timezone__["a" /* Timezone */],
                __WEBPACK_IMPORTED_MODULE_11__helpers_check_object__["a" /* CheckObject */],
                __WEBPACK_IMPORTED_MODULE_17__components_accounts_service_account_service__["a" /* AccountService */],
                __WEBPACK_IMPORTED_MODULE_18__components_notes_service_note_service__["a" /* NoteService */],
                __WEBPACK_IMPORTED_MODULE_12__helpers_session_storage__["a" /* SessionStorageService */],
                __WEBPACK_IMPORTED_MODULE_13__helpers_local_storage__["a" /* LocalStorageService */],
                __WEBPACK_IMPORTED_MODULE_14__helpers_navigation__["a" /* NavigationService */],
                __WEBPACK_IMPORTED_MODULE_19__services_message_service__["a" /* MessageService */],
                __WEBPACK_IMPORTED_MODULE_21__components_tickets_comments_service_comment_service__["a" /* CommentService */],
                __WEBPACK_IMPORTED_MODULE_20__services_event_source_listener_service__["a" /* EventSourceListenerService */],
                __WEBPACK_IMPORTED_MODULE_15__helpers_can_deactivate_can_deactivate_guard__["a" /* CanDeactivateGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/accounts/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_account_service__ = __webpack_require__("./src/app/components/accounts/service/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_local_storage__ = __webpack_require__("./src/app/helpers/local-storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services

// Helpers

var AuthGuard = /** @class */ (function () {
    function AuthGuard(accountService, router, lsService) {
        this.accountService = accountService;
        this.router = router;
        this.lsService = lsService;
        // Gets the current time
        this.now = new Date();
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var account = {
            "id": this.lsService.get('accountId')
        };
        if (this.now.getTime() < +this.lsService.get('expires')) {
            return true;
        }
        else {
            this.accountService.logout(account);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__helpers_local_storage__["a" /* LocalStorageService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/components/accounts/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-all-side-40\">\n  <h2 class=\"mb-20 mt-0 weight--light\">Crea nuovo account</h2>\n  <alertMessage></alertMessage>\n  <div class=\"card light mb-4 p-all-side-25\">\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && checkAccountAlreadyExist(f)\" #f=\"ngForm\" novalidate class=\"form--light p-all-side-20\">\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !firstname.valid }\">\n        <label for=\"firstname\" class=\"form__label\">Nome <span class=\"text-danger\">*</span></label>\n        <input type=\"text\" class=\"form-control black\" name=\"firstname\" ngModel #firstname=\"ngModel\" required placeholder=\"e.g. Mario\" />\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !lastname.valid }\">\n        <label for=\"lastname\" class=\"form__label\">Cognome <span class=\"text-danger\">*</span></label>\n        <input type=\"text\" class=\"form-control black\" name=\"lastname\" ngModel #lastname=\"ngModel\" required placeholder=\"e.g. Rossi\" />\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n        <label for=\"email\" class=\"form__label\">Email <span class=\"text-danger\">*</span></label>\n        <input type=\"email\" class=\"form-control black\" name=\"email\" ngModel #email=\"ngModel\" placeholder=\"e.g. email@example.com\" required />\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !nickname.valid }\">\n        <label for=\"nickname\" class=\"form__label\">Nickname <span class=\"text-danger\">*</span></label>\n        <input type=\"text\" class=\"form-control black\" name=\"nickname\" ngModel #nickname=\"ngModel\" required />\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !psw.valid }\">\n        <label for=\"psw\" class=\"form__label\">Password <span class=\"text-danger\">*</span></label>\n        <input type=\"password\" class=\"form-control black\" name=\"psw\" ngModel #psw=\"ngModel\" required #password (blur)=\"checkPassword()\" />\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !confirm_psw.valid }\">\n        <label for=\"confirm_psw\" class=\"form__label\">Conferma password <span class=\"text-danger\">*</span></label>\n        <input type=\"password\" class=\"form-control black\" name=\"confirm_psw\" ngModel #confirm_psw=\"ngModel\" required #confirm_password (blur)=\"checkPassword()\" />\n        <small #message></small>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !profile.valid }\">\n        <label for=\"profile\" class=\"form__label\">Tipo di utenza <span class=\"text-danger\">*</span></label>\n        <select class=\"form-control black\" name=\"profile\" ngModel #profile=\"ngModel\" required>\n          <option value=\"\">Seleziona</option>\n          <option value=\"0\">Amministratore</option>\n          <option value=\"1\" selected>Utente</option>\n        </select>\n      </div>\n      <div class=\"row mt-30\">\n        <div class=\"col\">\n          <button [disabled]=\"f.invalid\" class=\"btn btn-success\">Crea <i *ngIf=\"loading\" class=\"fa fa-spinner fa-pulse fa-fw\"></i></button>\n          <a [routerLink]=\"['/signin']\" class=\"btn btn-warning\">Cancella</a>\n        </div>\n        <div class=\"col\">\n          <text-warning></text-warning>\n        </div>\n      </div>\n    </form>\n  </div>\n  <back-button></back-button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/accounts/add/add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/accounts/add/add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_md5__ = __webpack_require__("./src/app/helpers/md5.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Services


var AddAccountComponent = /** @class */ (function () {
    function AddAccountComponent(service, messageService) {
        this.service = service;
        this.messageService = messageService;
        this.loading = false;
        this.sub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__["a" /* Subscription */]();
    }
    AddAccountComponent.prototype.checkAccountAlreadyExist = function (form) {
        var _this = this;
        this.loading = true;
        var query = "nickname=eq." + form.value.nickname + "&deleted=neq." + true;
        var subscription = this.service.getRecord("accounts", query).subscribe(function (already_registered) {
            _this.loading = false;
            _this.messageService.setMessage("prohibition");
        }, function (not_registered_yet) {
            _this.loading = false;
            _this.create(form);
        });
        this.sub.add(subscription);
    };
    AddAccountComponent.prototype.checkPassword = function () {
        var message = this.message.nativeElement;
        var password_value = this.password.nativeElement.value;
        var el_password = this.password.nativeElement;
        var confirm_password_value = this.confirm_password.nativeElement.value;
        var el_confirmPassword = this.confirm_password.nativeElement;
        if (password_value && confirm_password_value) {
            if (confirm_password_value !== password_value) {
                el_confirmPassword.style.borderColor = 'red';
                message.textContent = 'Conferma password errata';
                message.style.color = 'red';
            }
            else {
                el_confirmPassword.style.borderColor = 'green';
                message.style.color = 'green';
                message.textContent = 'Password confermata';
            }
        }
    };
    AddAccountComponent.prototype.getLocationHeaders = function (data) {
        var patt = /(\d+)/g;
        var comment_id = data.headers.get("location");
        var comment_id_match = comment_id.match(patt);
        return +comment_id_match[0];
    };
    AddAccountComponent.prototype.create = function (form) {
        var _this = this;
        if (form.value.psw == form.value.confirm_psw) {
            form.value.psw = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_md5__["a" /* md5 */])(form.value.psw);
            form.value.confirm_psw = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_md5__["a" /* md5 */])(form.value.confirm_psw);
            var subscription = this.service.create("accounts", form.value).subscribe(function (data) {
                _this.messageService.setMessage("success");
                _this.account_id = _this.getLocationHeaders(data);
                form.reset();
            }, function (err) {
                console.log(err);
                _this.messageService.setMessage("rejected");
                _this.loading = false;
            }, function () {
                var settings = {
                    account_id: _this.account_id
                };
                _this.service.create("profile_settings", settings).subscribe(function (data) {
                    _this.profile_settings_id = _this.getLocationHeaders(data);
                }, function (err) {
                    console.log(err);
                }, function () {
                    var query = "id=eq." + _this.account_id;
                    var obj = {
                        profile_settings_id: _this.profile_settings_id
                    };
                    _this.service.update("accounts", query, obj).subscribe(function (data) {
                        console.log("salvato profile setting id");
                    }, function (err) {
                        console.log(err);
                    });
                });
            });
            this.sub.add(subscription);
        }
        else {
            this.messageService.setMessage("confirm_incorrect_psw");
        }
    };
    AddAccountComponent.prototype.ngOnInit = function () { };
    AddAccountComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('password'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AddAccountComponent.prototype, "password", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('confirm_password'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AddAccountComponent.prototype, "confirm_password", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('message'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AddAccountComponent.prototype, "message", void 0);
    AddAccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/components/accounts/add/add.component.html"),
            styles: [__webpack_require__("./src/app/components/accounts/add/add.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_4__services_message_service__["a" /* MessageService */]])
    ], AddAccountComponent);
    return AddAccountComponent;
}());



/***/ }),

/***/ "./src/app/components/accounts/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-all-side-40\">\n  <alertMessage></alertMessage>\n  <h3 class=\"mb-20 mt-0 weight--light\">Dettagli</h3>\n  <div class=\"card light mb-4 p-all-side-25\">\n    <form #form=\"ngForm\" novalidate class=\"form--light\">\n      <div class=\"form-group\">\n        <label for=\"firstname\">Nome</label>\n        <input type=\"text\" class=\"form-control\" name=\"firstname\" [(ngModel)]=\"account.firstname\" readonly />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"lastname\">Cognome</label>\n        <input type=\"text\" class=\"form-control\" name=\"lastname\" [(ngModel)]=\"account.lastname\" readonly />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"nickname\">Nickname</label>\n        <input type=\"text\" class=\"form-control\" name=\"nickname\" [(ngModel)]=\"account.nickname\" readonly />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"account.email\" readonly />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"profile\">Profilo</label>\n        <select class=\"form-control\" name=\"profile\" [(ngModel)]=\"account.profile\">\n          <option [value]=\"0\">Amministratore</option>\n          <option [value]=\"1\">Utente</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"status\">Stato</label>\n        <select class=\"form-control\" name=\"status\" [(ngModel)]=\"account.status\">\n          <option [value]=\"1\">Attivato</option>\n          <option [value]=\"0\">Disattivato</option>\n        </select>\n      </div>\n      <div class=\"mt-30\">\n        <button class=\"btn btn-success mr-2\" (click)=\"active(form)\">Salva modifiche</button>\n        <button class=\"btn btn-warning\" (click)=\"revoke()\">Annulla</button>\n      </div>\n    </form>\n  </div>\n  <back-button></back-button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/accounts/details/details.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/accounts/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_form_can_deactivate_form_can_deactivate__ = __webpack_require__("./src/app/helpers/form-can-deactivate/form-can-deactivate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Models
//import { Company } from '../_models/index';
// Services


var AccountDetailsComponent = /** @class */ (function (_super) {
    __extends(AccountDetailsComponent, _super);
    function AccountDetailsComponent(service, route, messageService) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.route = route;
        _this.messageService = messageService;
        _this.account = {};
        _this.sub = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subscription__["a" /* Subscription */]();
        return _this;
    }
    AccountDetailsComponent.prototype.active = function (data) {
        var _this = this;
        var query = "id=eq." + this.account.id;
        var subscription = this.service.update("accounts", query, this.account).subscribe(function (data) {
            _this.messageService.setMessage("success");
        }, function (err) {
            _this.messageService.setMessage("rejected");
        });
        this.sub.add(subscription);
    };
    AccountDetailsComponent.prototype.getAccount = function () {
        var _this = this;
        var subscription = this.service.getBy("accounts", "id", this.id).subscribe(function (data) {
            _this.account = data;
        });
        this.sub.add(subscription);
    };
    AccountDetailsComponent.prototype.revoke = function () {
        this.getAccount();
    };
    AccountDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var subscription = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            _this.getAccount();
        });
        this.sub.add(subscription);
    };
    AccountDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* NgForm */])
    ], AccountDetailsComponent.prototype, "form", void 0);
    AccountDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/components/accounts/details/details.component.html"),
            styles: [__webpack_require__("./src/app/components/accounts/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__services_message_service__["a" /* MessageService */]])
    ], AccountDetailsComponent);
    return AccountDetailsComponent;
}(__WEBPACK_IMPORTED_MODULE_2__helpers_form_can_deactivate_form_can_deactivate__["a" /* FormCanDeactivate */]));



/***/ }),

/***/ "./src/app/components/accounts/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-all-side-40\">\n  <div class=\"d-flex align-items-center mb-4\">\n    <h3 class=\"weight--light flex-fill mb-0\">Dipendenti</h3>\n    <a [routerLink]=\"['/accounts/add']\" class=\"btn btn--shadow btn-dark text-uppercase weight--light d-flex align-items-center pt-10 pb-10\">\n      Aggiungi dipendente\n    </a>\n  </div>\n  <div class=\"mb-4\">\n    <search-form [setDataForRequest]=\"dataForRequestSearchComp\" (results)=\"accounts = $event\"></search-form>\n  </div>\n  <alertMessage></alertMessage>\n  <div class=\"card light mb-4 p-all-side-25\">\n    <table class=\"table table-striped table--light mb-0\" *ngIf=\"accounts.length; else noAccountList\">\n      <thead class=\"\">\n        <tr>\n          <th class=\"weight--medium\">Nome e Cognome</th>\n          <th class=\"weight--medium\">Nickname</th>\n          <th class=\"weight--medium d-none d-md-block\">Profilo</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr [accounts]=\"accounts\" [account]=\"account\" [tickets]=\"tickets\"\n          *ngFor=\"let account of accounts | paginate: { itemsPerPage: 10, currentPage: p }\"\n          (data)=\"accounts = $event\" accounts-list-row>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"d-flex justify-content-center\" *ngIf=\"accounts.length >= 10\">\n      <pagination-controls class=\"pagination\" (pageChange)=\"p = $event\"></pagination-controls>\n    </div>\n    <ng-template #noAccountList>\n      <message-notrecords [message]=\"'Non sono stati trovati risulati'\"></message-notrecords>\n    </ng-template>\n  </div>\n  <back-button></back-button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/accounts/list/list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/accounts/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services

var AccountsListComponent = /** @class */ (function () {
    function AccountsListComponent(service) {
        this.service = service;
        this.tickets = [];
        this.accounts = [];
        this.dataForRequestSearchComp = {
            "table": "accounts",
            "parameters": ["firstname", "lastname", "email", "nickname"],
            "condition": "deleted=is.false"
        };
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
        this.p = 1;
        this.loadAllItems("tickets", "tickets", "all");
        this.loadAllItems("accounts", "accounts", "not_deleted");
    }
    AccountsListComponent.prototype.loadAllItems = function (table, variable, condition) {
        var _this = this;
        var subscription = this.service.getAll(table, condition).subscribe(function (data) {
            _this[variable] = data;
        });
        this.sub.add(subscription);
    };
    AccountsListComponent.prototype.ngOnInit = function () { };
    AccountsListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    AccountsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            template: __webpack_require__("./src/app/components/accounts/list/list.component.html"),
            styles: [__webpack_require__("./src/app/components/accounts/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */]])
    ], AccountsListComponent);
    return AccountsListComponent;
}());



/***/ }),

/***/ "./src/app/components/accounts/list/row/row.component.html":
/***/ (function(module, exports) {

module.exports = "<td class=\"align-middle\">\n  <div class=\"d-flex\">\n    <div>\n      <span class=\"avatar radius small reset-height mr-3\" [style.background-color]=\"account.avatar_color\">\n        {{account.firstname | slice:0:1}}\n        <i *ngIf=\"account.online == true\" class=\"bg-success badge dot bottom\"></i>\n        <i *ngIf=\"account.online == false\" class=\"bg-danger badge dot bottom\"></i>\n      </span>\n    </div>\n    <div>\n      <p class=\"mb-0 text-capitalize\">{{account.firstname}} {{account.lastname}} <span *ngIf=\"logged_account_id == account.id\">(Io)</span></p>\n      <small class=\"text-black-50\">{{account.email}}</small>\n    </div>\n  </div>\n</td>\n<td class=\"align-middle\">{{account.nickname}}</td>\n<td class=\"align-middle\">\n  <span *ngIf=\"account.profile == 0; else normalUser\">\n    Amministratore\n  </span>\n  <ng-template #normalUser>\n    Utente semplice\n  </ng-template>\n</td>\n<td class=\"text-right\">\n  <span *ngIf=\"logged_account_id == account.id; else activeButtons\">\n    <a [routerLink]=\"['/accounts', account.id]\" class=\"btn btn-info disabled\" title=\"Info\">\n      <i class=\"fa fa-info text--shadow\" aria-hidden=\"true\"></i>\n    </a>\n    <a [routerLink]=\"['/accounts', account.id]\" class=\"btn btn-primary disabled\" title=\"Modifica\">\n      <i class=\"fa fa-pencil text--shadow\" aria-hidden=\"true\"></i>\n    </a>\n    <button (click)=\"passDataToParent('active')\" class=\"btn btn-success disabled\" [title]=\"(account.status == 1) ? 'Disattiva' : 'Attiva'\" data-toggle=\"modal\" data-target=\"#messageModal\">\n      <i class=\"fa fa-toggle-on text--shadow\" aria-hidden=\"true\" *ngIf=\"account.status == 1; else disactiveAccount\"></i>\n      <ng-template #disactiveAccount>\n        <i class=\"fa fa-toggle-off text--shadow\" aria-hidden=\"true\"></i>\n      </ng-template>\n    </button>\n    <button class=\"btn btn-danger disabled\" title=\"Elimina\">\n      <i class=\"fa fa-trash text--shadow\" aria-hidden=\"true\"></i>\n    </button>\n  </span>\n  <ng-template #activeButtons>\n    <a [routerLink]=\"['/accounts', account.id]\" class=\"btn btn-info\" title=\"Info\">\n      <i class=\"fa fa-info text--shadow\" aria-hidden=\"true\"></i>\n    </a>\n    <a [routerLink]=\"['/accounts', account.id]\" class=\"btn btn-primary\" title=\"Modifica\">\n      <i class=\"fa fa-pencil text--shadow\" aria-hidden=\"true\"></i>\n    </a>\n    <button class=\"btn btn-success\" [title]=\"(account.status == 1) ? 'Disattiva' : 'Attiva'\"\n      [swal]=\"{title: 'Sei sicuro di voler eseguire questa modifica?', showCancelButton: true}\" (confirm)=\"statuSet()\">\n      <i class=\"fa fa-toggle-on text--shadow\" aria-hidden=\"true\" *ngIf=\"account.status == 1; else disactiveAccount\"></i>\n      <ng-template #disactiveAccount>\n        <i class=\"fa fa-toggle-off text--shadow\" aria-hidden=\"true\"></i>\n      </ng-template>\n    </button>\n    <button [ngClass]=\"{ 'disabled': account.status == 1 }\"\n      [ngClass]=\"{ 'disabled': logged_account_id == account.id }\" class=\"btn btn-danger\"\n      [swal]=\"{title: 'Sei sicuro di volerlo cancellare?', text: 'Se confermi non sarà più possibile tornare indietro', showCancelButton: true}\" (confirm)=\"deleteIt()\">\n      <i class=\"fa fa-trash text--shadow\" aria-hidden=\"true\"></i>\n    </button>\n  </ng-template>\n</td>\n"

/***/ }),

/***/ "./src/app/components/accounts/list/row/row.component.scss":
/***/ (function(module, exports) {

module.exports = ".badge.dot {\n  width: 12px;\n  height: 12px;\n  line-height: 12px;\n  border-radius: 50% !important;\n  text-align: center;\n  border: 2px solid white; }\n  .badge.dot.bottom {\n    position: absolute;\n    right: 0px;\n    bottom: 0px; }\n"

/***/ }),

/***/ "./src/app/components/accounts/list/row/row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountListRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_account_service__ = __webpack_require__("./src/app/components/accounts/service/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_local_storage__ = __webpack_require__("./src/app/helpers/local-storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services



// Helpers

var AccountListRowComponent = /** @class */ (function () {
    function AccountListRowComponent(lsService, service, messageService, accountService) {
        this.lsService = lsService;
        this.service = service;
        this.messageService = messageService;
        this.accountService = accountService;
        this.accounts = [];
        this.tickets = [];
        this.data = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
        this.logged_account_id = +this.lsService.get("accountId");
    }
    AccountListRowComponent.prototype.checkIfLinkedTo = function () {
        var _this = this;
        var exist = [];
        this.tickets.forEach(function (ticket) {
            if (ticket.assignees_id.includes(_this.account.id) || ticket.created_by == _this.account.id) {
                exist.push(true);
                _this.messageService.setMessage('account_in_use');
            }
            else {
                exist.push(false);
            }
        });
        return exist;
    };
    AccountListRowComponent.prototype.deleteIt = function () {
        var _this = this;
        var query = "id=eq." + this.account.id;
        var index = this.accounts.indexOf(this.account);
        var delete_set = {
            'deleted': true
        };
        if (!this.checkIfLinkedTo().includes(true)) {
            var subscription = this.service.update("accounts", query, delete_set).subscribe(function (data) {
                _this.accounts.splice(index, 1);
                _this.messageService.setMessage('delete');
                _this.data.emit(_this.accounts);
            }, function (err) {
                console.log(err);
            });
            this.sub.add(subscription);
        }
    };
    AccountListRowComponent.prototype.statuSet = function () {
        var _this = this;
        var query = "id=eq." + this.account.id;
        var active_or_disactive = {
            'status': this.account.status
        };
        if (this.account.status == 1) {
            active_or_disactive.status = 0;
        }
        else {
            active_or_disactive.status = 1;
        }
        if (!this.checkIfLinkedTo().includes(true)) {
            var subscription = this.service.update("accounts", query, active_or_disactive).subscribe(function (data) {
                _this.account.status = active_or_disactive.status;
            }, function (err) {
                console.log(err);
            });
            this.sub.add(subscription);
        }
    };
    AccountListRowComponent.prototype.ngOnInit = function () { };
    AccountListRowComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AccountListRowComponent.prototype, "account", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], AccountListRowComponent.prototype, "accounts", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], AccountListRowComponent.prototype, "tickets", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AccountListRowComponent.prototype, "data", void 0);
    AccountListRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[accounts-list-row]',
            template: __webpack_require__("./src/app/components/accounts/list/row/row.component.html"),
            styles: [__webpack_require__("./src/app/components/accounts/list/row/row.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__helpers_local_storage__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_4__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_3__service_account_service__["a" /* AccountService */]])
    ], AccountListRowComponent);
    return AccountListRowComponent;
}());



/***/ }),

/***/ "./src/app/components/accounts/profile/change-email/change-email.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-20\">\n  <div class=\"card-body\">\n    La tua email attuale è <strong>{{account.email}}</strong>\n  </div>\n</div>\n<form name=\"form\" #email=\"ngForm\" novalidate>\n  <div class=\"form-group\">\n    <label for=\"email\">Nuova email <span class=\"text-danger\">*</span></label>\n    <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"account.email\" #email=\"ngModel\" required />\n  </div>\n  <div class=\"row mt-40\">\n    <div class=\"col\">\n      <button class=\"btn btn-success mr-2\" (click)=\"email.form.valid && update(email)\" [disabled]=\"email.invalid\">Salva modifiche</button>\n      <button class=\"btn btn-warning\" (click)=\"revoke()\" [disabled]=\"email.invalid\">Annulla</button>\n    </div>\n    <div class=\"col\">\n      <text-warning></text-warning>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/accounts/profile/change-email/change-email.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/accounts/profile/change-email/change-email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountEmailChangeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_account_service__ = __webpack_require__("./src/app/components/accounts/service/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_local_storage__ = __webpack_require__("./src/app/helpers/local-storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services



// Helpers

var AccountEmailChangeComponent = /** @class */ (function () {
    function AccountEmailChangeComponent(service, accountService, messageService, lsService) {
        this.service = service;
        this.accountService = accountService;
        this.messageService = messageService;
        this.lsService = lsService;
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
    }
    AccountEmailChangeComponent.prototype.update = function (form) {
        var _this = this;
        var query = "id=eq." + this.account.id;
        var subscription = this.service.update("accounts", query, this.account).subscribe(function (data) {
            _this.messageService.setMessage("success");
            _this.accountService.setLoggedAccount(_this.account);
        }, function (err) {
            console.log(err);
            _this.messageService.setMessage("rejected");
        });
        this.sub.add(subscription);
    };
    AccountEmailChangeComponent.prototype.revoke = function () {
        this.account = JSON.parse(this.lsService.get("account"));
    };
    AccountEmailChangeComponent.prototype.ngOnInit = function () { };
    AccountEmailChangeComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AccountEmailChangeComponent.prototype, "account", void 0);
    AccountEmailChangeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'account-email-change',
            template: __webpack_require__("./src/app/components/accounts/profile/change-email/change-email.component.html"),
            styles: [__webpack_require__("./src/app/components/accounts/profile/change-email/change-email.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__service_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_4__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_5__helpers_local_storage__["a" /* LocalStorageService */]])
    ], AccountEmailChangeComponent);
    return AccountEmailChangeComponent;
}());



/***/ }),

/***/ "./src/app/components/accounts/profile/change-password/change-password.component.html":
/***/ (function(module, exports) {

module.exports = "<h5 class=\"mb-5\">Cambia la tua password</h5>\n<p class=\"mb-30\">Dopo il salvataggio della nuova password verrai reindirizzato alla pagina di login.</p>\n<form name=\"form\" (ngSubmit)=\"password.form.valid && checkIfRecordExist(password)\" #password=\"ngForm\" novalidate class=\"form--light\">\n  <div class=\"form-group\">\n    <label for=\"current_psw\">Password attuale <span class=\"text-danger\">*</span></label>\n    <input type=\"password\" class=\"form-control\" name=\"current_psw\" ngModel #current_psw=\"ngModel\" required />\n  </div>\n  <div class=\"form-group\">\n    <label for=\"new_psw\" class=\"form__label\">Nuova Password <span class=\"text-danger\">*</span></label>\n    <input type=\"password\" class=\"form-control\" name=\"new_psw\" ngModel #new_psw required (blur)=\"checkPassword()\" />\n  </div>\n  <div class=\"form-group\">\n    <label for=\"confirm_new_psw\" class=\"form__label\">Conferma nuova password <span class=\"text-danger\">*</span></label>\n    <input type=\"password\" class=\"form-control\" name=\"confirm_new_psw\" ngModel #confirm_new_psw required (blur)=\"checkPassword()\" />\n    <small #message></small>\n  </div>\n  <div class=\"row mt-40\">\n    <div class=\"col\">\n      <button class=\"btn btn-success\" [disabled]=\"password.invalid\">Salva modifiche</button>\n    </div>\n    <div class=\"col\">\n      <text-warning></text-warning>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/accounts/profile/change-password/change-password.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/accounts/profile/change-password/change-password.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPasswordChangeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_md5__ = __webpack_require__("./src/app/helpers/md5.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_account_service__ = __webpack_require__("./src/app/components/accounts/service/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Helpers

// Services



var AccountPasswordChangeComponent = /** @class */ (function () {
    function AccountPasswordChangeComponent(service, accountService, messageService) {
        this.service = service;
        this.accountService = accountService;
        this.messageService = messageService;
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
    }
    // Check if password inserted by user is correct
    AccountPasswordChangeComponent.prototype.checkIfRecordExist = function (form) {
        var _this = this;
        var query = "id=eq." + this.account.id + "&" + "psw=eq." + Object(__WEBPACK_IMPORTED_MODULE_2__helpers_md5__["a" /* md5 */])(form.value.current_psw);
        var subscription = this.service.getRecord("accounts", query).subscribe(function (data) {
            _this.update({
                "psw": Object(__WEBPACK_IMPORTED_MODULE_2__helpers_md5__["a" /* md5 */])(form.value.new_psw),
                "confirm_psw": Object(__WEBPACK_IMPORTED_MODULE_2__helpers_md5__["a" /* md5 */])(form.value.confirm_new_psw)
            });
        }, function (err) {
            _this.messageService.setMessage("psw-rejected");
        });
        this.sub.add(subscription);
    };
    AccountPasswordChangeComponent.prototype.update = function (data) {
        var _this = this;
        var query = "id=eq." + this.account.id;
        if (data.psw == data.confirm_psw) {
            var subscription = this.service.update("accounts", query, data).subscribe(function (data) {
                _this.accountService.logout(_this.account);
            }, function (err) {
                _this.messageService.setMessage("rejected");
            });
            this.sub.add(subscription);
        }
        else {
            this.messageService.setMessage("confirm_incorrect_psw");
        }
    };
    AccountPasswordChangeComponent.prototype.checkPassword = function () {
        var message = this.message.nativeElement;
        var password_value = this.new_psw.nativeElement.value;
        var el_password = this.new_psw.nativeElement;
        var confirm_password_value = this.confirm_new_psw.nativeElement.value;
        var el_confirmPassword = this.confirm_new_psw.nativeElement;
        if (password_value && confirm_password_value) {
            if (confirm_password_value !== password_value) {
                el_confirmPassword.style.borderColor = 'red';
                message.textContent = 'Conferma password errata';
                message.style.color = 'red';
            }
            else {
                el_confirmPassword.style.borderColor = 'green';
                message.style.color = 'green';
                message.textContent = 'Password confermata';
            }
        }
    };
    AccountPasswordChangeComponent.prototype.ngOnInit = function () { };
    AccountPasswordChangeComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AccountPasswordChangeComponent.prototype, "account", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('new_psw'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AccountPasswordChangeComponent.prototype, "new_psw", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('confirm_new_psw'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AccountPasswordChangeComponent.prototype, "confirm_new_psw", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('message'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], AccountPasswordChangeComponent.prototype, "message", void 0);
    AccountPasswordChangeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'account-password-change',
            template: __webpack_require__("./src/app/components/accounts/profile/change-password/change-password.component.html"),
            styles: [__webpack_require__("./src/app/components/accounts/profile/change-password/change-password.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_5__service_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_4__services_message_service__["a" /* MessageService */]])
    ], AccountPasswordChangeComponent);
    return AccountPasswordChangeComponent;
}());



/***/ }),

/***/ "./src/app/components/accounts/profile/personal-info/personal-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"media\">\n  <span class=\"avatar radius medium mr-3\" [style.background-color]=\"account.avatar_color\">\n    <input type=\"color\" [(ngModel)]=\"account.avatar_color\" name=\"avatar_color\" class=\"opacity full\">\n  </span>\n  <div class=\"media-body\">\n    <form name=\"form\" #info=\"ngForm\" novalidate class=\"form--light\">\n      <div class=\"form-group\">\n        <label for=\"\">Nome <span class=\"text-danger\">*</span></label>\n        <input type=\"text\" class=\"form-control\" name=\"firstname\" [(ngModel)]=\"account.firstname\" #firstname=\"ngModel\" required />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Cognome <span class=\"text-danger\">*</span></label>\n        <input type=\"text\" class=\"form-control\" name=\"lastname\" [(ngModel)]=\"account.lastname\" #lastname=\"ngModel\" required />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"\">Nickname <span class=\"text-danger\">*</span></label>\n        <input type=\"text\" class=\"form-control\" name=\"nickname\" [(ngModel)]=\"account.nickname\" #nickname=\"ngModel\" required />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"profile\">Tipo di utenza <span class=\"text-danger\">*</span></label>\n        <select class=\"form-control\" name=\"profile\" [(ngModel)]=\"account.profile\" #profile=\"ngModel\" required *ngIf=\"account.profile == 0; else noAdministrator\">\n          <option [value]=\"0\">Amministratore</option>\n          <option [value]=\"1\" selected>Utente</option>\n        </select>\n        <ng-template #noAdministrator>\n          <input type=\"text\" class=\"form-control\" name=\"profile\" value=\"Utenza semplice\" readonly />\n        </ng-template>\n      </div>\n      <div class=\"row mt-40\">\n        <div class=\"col\">\n          <button class=\"btn btn-success mr-2\" (click)=\"info.form.valid && update(info)\" [disabled]=\"info.invalid\">Salva modifiche</button>\n          <button class=\"btn btn-warning\" (click)=\"revoke()\" [disabled]=\"info.invalid\">Annulla</button>\n        </div>\n        <div class=\"col\">\n          <text-warning></text-warning>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/accounts/profile/personal-info/personal-info.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/accounts/profile/personal-info/personal-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPersonalInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_account_service__ = __webpack_require__("./src/app/components/accounts/service/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_local_storage__ = __webpack_require__("./src/app/helpers/local-storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services



// Helpers

var AccountPersonalInfoComponent = /** @class */ (function () {
    function AccountPersonalInfoComponent(service, accountService, messageService, lsService) {
        this.service = service;
        this.accountService = accountService;
        this.messageService = messageService;
        this.lsService = lsService;
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
    }
    AccountPersonalInfoComponent.prototype.update = function (form) {
        var _this = this;
        form.value.avatar_color = this.account.avatar_color;
        var query = "id=eq." + this.account.id;
        var subscription = this.service.update("accounts", query, form.value).subscribe(function (data) {
            _this.messageService.setMessage("success");
            _this.accountService.setLoggedAccount(_this.account);
        }, function (err) {
            console.log(err);
            _this.messageService.setMessage("rejected");
        });
        this.sub.add(subscription);
    };
    AccountPersonalInfoComponent.prototype.revoke = function () {
        this.account = JSON.parse(this.lsService.get("account"));
    };
    AccountPersonalInfoComponent.prototype.ngOnInit = function () {
    };
    AccountPersonalInfoComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AccountPersonalInfoComponent.prototype, "account", void 0);
    AccountPersonalInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'account-personal-info',
            template: __webpack_require__("./src/app/components/accounts/profile/personal-info/personal-info.component.html"),
            styles: [__webpack_require__("./src/app/components/accounts/profile/personal-info/personal-info.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__service_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_4__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_5__helpers_local_storage__["a" /* LocalStorageService */]])
    ], AccountPersonalInfoComponent);
    return AccountPersonalInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/accounts/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <nav class=\"profile-nav\">\n    <div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\n      <a class=\"profile-nav__item nav-item nav-link active\" id=\"nav-info-tab\" data-toggle=\"tab\" href=\"#nav-info\" role=\"tab\" aria-controls=\"nav-info\" aria-selected=\"true\">\n        <i class=\"fa fa-user-o profile-nav__item-icon mr-2\" aria-hidden=\"true\"></i>\n        <span class=\"profile-nav__item-text\">\n          Informazioni generali\n        </span>\n      </a>\n      <a class=\"profile-nav__item nav-item nav-link\" id=\"nav-email-tab\" data-toggle=\"tab\" href=\"#nav-email\" role=\"tab\" aria-controls=\"nav-email\" aria-selected=\"false\">\n        <i class=\"fa fa-at profile-nav__item-icon mr-2\" aria-hidden=\"true\"></i>\n        <span class=\"profile-nav__item-text\">\n          Email\n        </span>\n      </a>\n      <a class=\"profile-nav__item nav-item nav-link\" id=\"nav-sicurity-tab\" data-toggle=\"tab\" href=\"#nav-sicurity\" role=\"tab\" aria-controls=\"nav-sicurity\" aria-selected=\"false\">\n        <i class=\"fa fa-key profile-nav__item-icon mr-2\" aria-hidden=\"true\"></i>\n        <span class=\"profile-nav__item-text\">\n          Sicurezza\n        </span>\n      </a>\n      <a class=\"profile-nav__item nav-item nav-link\" id=\"nav-settings-tab\" data-toggle=\"tab\" href=\"#nav-settings\" role=\"tab\" aria-controls=\"nav-settings\" aria-selected=\"false\">\n        <i class=\"fa fa-cog profile-nav__item-icon mr-2\" aria-hidden=\"true\"></i>\n        <span class=\"profile-nav__item-text\">\n          Impostazioni\n        </span>\n      </a>\n    </div>\n  </nav>\n  <div class=\"tab-content bg-white pt-20 pb-20 pl-5 pr-5\" id=\"pills-tabContent\">\n    <alertMessage></alertMessage>\n    <div class=\"tab-pane fade show active\" id=\"nav-info\" role=\"tabpanel\" aria-labelledby=\"pills-info-tab\">\n      <account-personal-info [account]=\"logged_account\"></account-personal-info>\n    </div>\n    <div class=\"tab-pane fade\" id=\"nav-email\" role=\"tabpanel\" aria-labelledby=\"pills-email-tab\">\n      <account-email-change [account]=\"logged_account\"></account-email-change>\n    </div>\n    <div class=\"tab-pane fade\" id=\"nav-sicurity\" role=\"tabpanel\" aria-labelledby=\"pills-sicurity-tab\">\n      <account-password-change [account]=\"logged_account\"></account-password-change>\n    </div>\n    <div class=\"tab-pane fade\" id=\"nav-settings\" role=\"tabpanel\" aria-labelledby=\"pills-settings-tab\">\n      <app-settings [account]=\"logged_account\"></app-settings>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/accounts/profile/profile.component.scss":
/***/ (function(module, exports) {

module.exports = ".profile-nav {\n  padding: 3rem 3rem 0;\n  background: #fafbfc;\n  border-bottom: 1px solid #dee2e6; }\n  .profile-nav .nav-tabs {\n    border-bottom: 0; }\n  .profile-nav__item {\n    border-radius: 3px 3px 0 0;\n    padding: 7px 15px 8px; }\n  .profile-nav__item.active {\n      background-color: #fff;\n      border-top: 3px solid #0094D4;\n      color: #24292e; }\n  .profile-nav__item-text {\n      color: #586069;\n      font-size: 0.9rem; }\n  .profile-nav__item-icon {\n      color: rgba(27, 31, 35, 0.3); }\n"

/***/ }),

/***/ "./src/app/components/accounts/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_account_service__ = __webpack_require__("./src/app/components/accounts/service/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_local_storage__ = __webpack_require__("./src/app/helpers/local-storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services

// Helpers

var AccountProfileComponent = /** @class */ (function () {
    function AccountProfileComponent(lsService, accountService) {
        var _this = this;
        this.lsService = lsService;
        this.accountService = accountService;
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
        var subscription = this.accountService.logged_account.subscribe(function (res) {
            if (res == null) {
                _this.logged_account = JSON.parse(_this.lsService.get("account"));
            }
            else {
                _this.logged_account = res;
            }
        });
        this.sub.add(subscription);
    }
    AccountProfileComponent.prototype.ngOnInit = function () { };
    AccountProfileComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    AccountProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/components/accounts/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/accounts/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__helpers_local_storage__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_2__service_account_service__["a" /* AccountService */]])
    ], AccountProfileComponent);
    return AccountProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/accounts/profile/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"account\">\n  <h6>Vuoi ricevere le notifiche sui tickets?</h6>\n  <form name=\"form\" #settings=\"ngForm\" novalidate class=\"form--light\">\n    <div class=\"form-check form-check-inline\">\n      <input type=\"radio\" class=\"form-check-input\" name=\"tickets_notifications\" [(ngModel)]=\"account.settings[0].tickets_notifications\" [value]=\"true\" #tickets_notifications=\"ngModel\" />\n      <label class=\"form-check-label\" for=\"tickets_notifications\">Sì</label>\n    </div>\n    <div class=\"form-check form-check-inline\">\n      <input type=\"radio\" class=\"form-check-input\" name=\"tickets_notifications\" [(ngModel)]=\"account.settings[0].tickets_notifications\" [value]=\"false\" #tickets_notifications=\"ngModel\" />\n      <label class=\"form-check-label\" for=\"inlineRadio2\">No</label>\n    </div>\n    <div class=\"row mt-40\">\n      <div class=\"col\">\n        <button class=\"btn btn-success mr-2\" (click)=\"settings.form.valid && update(settings)\" [disabled]=\"settings.invalid\">Salva modifiche</button>\n        <button class=\"btn btn-warning\" (click)=\"revoke()\" [disabled]=\"settings.invalid\">Annulla</button>\n      </div>\n      <!-- <div class=\"col\">\n        <text-warning></text-warning>\n      </div> -->\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/accounts/profile/settings/settings.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/accounts/profile/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_account_service__ = __webpack_require__("./src/app/components/accounts/service/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_local_storage__ = __webpack_require__("./src/app/helpers/local-storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services



// Helpers

var AppSettingsComponent = /** @class */ (function () {
    function AppSettingsComponent(service, accountService, messageService, lsService) {
        this.service = service;
        this.accountService = accountService;
        this.messageService = messageService;
        this.lsService = lsService;
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
    }
    AppSettingsComponent.prototype.update = function (form) {
        var _this = this;
        var query = "id=eq." + this.account.settings[0].id;
        var subscription = this.service.update("profile_settings", query, form.value).subscribe(function (data) {
            _this.messageService.setMessage("success");
            _this.accountService.setLoggedAccount(_this.account);
        }, function (err) {
            console.log(err);
            _this.messageService.setMessage("rejected");
        });
        this.sub.add(subscription);
    };
    AppSettingsComponent.prototype.revoke = function () {
        this.account = JSON.parse(this.lsService.get("account"));
    };
    AppSettingsComponent.prototype.ngOnInit = function () { };
    AppSettingsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AppSettingsComponent.prototype, "account", void 0);
    AppSettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-settings',
            template: __webpack_require__("./src/app/components/accounts/profile/settings/settings.component.html"),
            styles: [__webpack_require__("./src/app/components/accounts/profile/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_4__service_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_5__helpers_local_storage__["a" /* LocalStorageService */]])
    ], AppSettingsComponent);
    return AppSettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/accounts/service/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_local_storage__ = __webpack_require__("./src/app/helpers/local-storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_navigation__ = __webpack_require__("./src/app/helpers/navigation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services

// Helpers


var AccountService = /** @class */ (function () {
    //logged_account: Subject<any> = new Subject<any>();
    // public account_id: number;
    // public account_profile: number;
    function AccountService(service, lsService, navigation) {
        this.service = service;
        this.lsService = lsService;
        this.navigation = navigation;
        this.logged_account = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
    }
    AccountService.prototype.getLoggedAccount = function () {
        return this.logged_account.asObservable();
    };
    AccountService.prototype.setLoggedAccount = function (account) {
        this.logged_account.next(account);
        this.lsService.set([
            {
                'key': 'account',
                'value': JSON.stringify(account)
            }
        ]);
    };
    AccountService.prototype.logout = function (account) {
        // remove user from local storage to log user out
        this.setOnlineStatus(account, false);
        this.lsService.reset([
            'expires', 'accountId', 'accountProfile', 'account'
        ]);
        this.clean();
        this.navigation.redirect('/signin');
    };
    AccountService.prototype.clean = function () {
        this.logged_account.next(null);
        // this.account_id = null;
        // this.account_profile = null;
    };
    AccountService.prototype.setOnlineStatus = function (account, status) {
        var query = "id=eq." + account.id;
        var online = {
            online: status
        };
        this.service.update("accounts", query, online);
    };
    AccountService.prototype.setLocalStorage = function (account, expire_date) {
        this.lsService.set([
            {
                'key': 'account',
                'value': JSON.stringify(account)
            },
            {
                'key': 'accountId',
                'value': account.id
            },
            {
                'key': 'accountProfile',
                'value': account.profile
            },
            {
                'key': 'expires',
                'value': (expire_date).toString()
            }
        ]);
        this.navigation.redirect('/');
    };
    AccountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__helpers_local_storage__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_4__helpers_navigation__["a" /* NavigationService */]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/components/accounts/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signin align-self-center\">\n  <alertMessage></alertMessage>\n  <div class=\"signin__wrapper\">\n    <div class=\"text-center mb-30\">\n      <logo></logo>\n    </div>\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && login(f)\" #f=\"ngForm\" novalidate class=\"signin__form\">\n      <div class=\"form-group signin__form-field\" [ngClass]=\"{ 'has-error': f.submitted && !nickname.valid }\">\n        <div class=\"input-group round_edges mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text bg--dark p-3\">\n              <i class=\"fa fa-user signin__form-field-icon\" aria-hidden=\"true\"></i>\n            </span>\n          </div>\n          <input type=\"text\" class=\"form-control bg--dark pl-3\" name=\"nickname\" ngModel #nickname=\"ngModel\" autocomplete=\"off\" required placeholder=\"Username\" />\n        </div>\n        <div *ngIf=\"f.submitted && !nickname.valid\" class=\"is-invalid\">Campo obbligatorio</div>\n      </div>\n      <div class=\"form-group signin__form-field\" [ngClass]=\"{ 'has-error': f.submitted && !psw.valid }\">\n        <div class=\"input-group round_edges mb-3\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text bg--dark p-3\">\n              <i class=\"fa fa-lock signin__form-field-icon\" aria-hidden=\"true\"></i>\n            </span>\n          </div>\n          <input type=\"password\" class=\"form-control bg--dark round_edges pl-3\" name=\"psw\" ngModel #psw=\"ngModel\" autocomplete=\"off\" required placeholder=\"Password\" />\n        </div>\n        <div *ngIf=\"f.submitted && !psw.valid\" class=\"is-invalid\">Campo obbligatorio</div>\n      </div>\n      <button [disabled]=\"loading\" class=\"btn btn-info btn-block btn--round_edges text-center btn-lg pboth-10\">Entra <i *ngIf=\"loading\" class=\"fa fa-spinner fa-pulse fa-fw\"></i></button>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/accounts/signin/signin.component.scss":
/***/ (function(module, exports) {

module.exports = "app-signin:host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n\n.signin__wrapper {\n  position: relative;\n  background-color: transparent;\n  min-width: 400px; }\n\n.signin__form-field-icon {\n  color: white; }\n\n.signin__form-field .input-group-text {\n  background-color: white;\n  border: none;\n  font-size: 20px;\n  color: white;\n  padding-left: 25px !important; }\n\n.signin__form-field .form-control {\n  color: white;\n  height: calc(3.25rem + 2px);\n  border: none;\n  background-color: black;\n  opacity: 0.8;\n  filter: alpha(opacity=80); }\n\n.signin__form-field .form-control::-moz-placeholder {\n    color: white;\n    opacity: 1; }\n\n.signin__form-field .form-control:-ms-input-placeholder {\n    color: white; }\n\n.signin__form-field .form-control::-webkit-input-placeholder {\n    color: white; }\n\n.signin__form-field .form-control:focus {\n    outline-offset: 0;\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\n.signin__form input:-webkit-autofill {\n  background: transparent !important; }\n"

/***/ }),

/***/ "./src/app/components/accounts/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_md5__ = __webpack_require__("./src/app/helpers/md5.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns__ = __webpack_require__("./node_modules/date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_local_storage__ = __webpack_require__("./src/app/helpers/local-storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_navigation__ = __webpack_require__("./src/app/helpers/navigation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_account_service__ = __webpack_require__("./src/app/components/accounts/service/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Helpers


// Services



var SigninComponent = /** @class */ (function () {
    function SigninComponent(accountService, service, lsService, messageService, navigation) {
        this.accountService = accountService;
        this.service = service;
        this.lsService = lsService;
        this.messageService = messageService;
        this.navigation = navigation;
        this.sub = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subscription__["a" /* Subscription */]();
        this.loading = false;
    }
    SigninComponent.prototype.login = function (form) {
        var _this = this;
        var addingHours = Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["addHours"])(new Date(), 8);
        var expire_date = Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["getTime"])(addingHours);
        this.loading = true;
        form.value.psw = Object(__WEBPACK_IMPORTED_MODULE_1__helpers_md5__["a" /* md5 */])(form.value.psw);
        var query = "nickname=eq." + form.value.nickname + "&psw=eq." + form.value.psw + "&status=eq." + 1 + "&select=id, firstname, lastname, nickname, email, profile, status, avatar_color, online, settings: profile_settings(*)";
        this.service.getRecord("accounts", query).subscribe(function (data) {
            _this.accountService.setLoggedAccount(data);
            _this.accountService.setOnlineStatus(data, true);
            _this.accountService.setLocalStorage(data, expire_date);
        }, function (err) {
            console.log(err);
            _this.messageService.setMessage('access-denied');
            _this.loading = false;
        });
        //this.sub.add(subscription);
    };
    SigninComponent.prototype.ngOnInit = function () {
        if (Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["getTime"])(new Date()) < +this.lsService.get('expires')) {
            this.navigation.redirect('/');
        }
    };
    SigninComponent.prototype.ngOnDestroy = function () {
        //this.sub.unsubscribe();
    };
    SigninComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signin',
            template: __webpack_require__("./src/app/components/accounts/signin/signin.component.html"),
            styles: [__webpack_require__("./src/app/components/accounts/signin/signin.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__service_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_6__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_4__helpers_local_storage__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_8__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_5__helpers_navigation__["a" /* NavigationService */]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/components/address-book/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-all-side-40\">\n  <h2 class=\"mb-20 weight--light\">Aggiungi alla rubrica</h2>\n  <alertMessage></alertMessage>\n  <div class=\"card light mb-4 p-all-side-25\">\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && add(f)\" #f=\"ngForm\" novalidate class=\"form--light\">\n      <div class=\"mb-30\">\n        <h4 class=\"weight--regular\">Informazioni personali</h4>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !company.valid }\">\n          <label for=\"company\" class=\"form__label\">Nome azienda</label>\n          <input type=\"text\" class=\"form-control\" name=\"company\" ngModel #company=\"ngModel\" required />\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !firstname.valid }\">\n              <label for=\"firstname\" class=\"form__label\">Nome <span class=\"text-danger\">*</span></label>\n              <input type=\"text\" class=\"form-control\" name=\"firstname\" ngModel #firstname=\"ngModel\" required />\n            </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !lastname.valid }\">\n              <label for=\"lastname\" class=\"form__label\">Cognome <span class=\"text-danger\">*</span></label>\n              <input type=\"text\" class=\"form-control\" name=\"lastname\" ngModel #lastname=\"ngModel\" required />\n            </div>\n          </div>\n        </div>\n      </div>\n      <div>\n        <h4 class=\"weight--regular\">Contatti</h4>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email.valid }\">\n          <label for=\"email\" class=\"form__label\">Email</label>\n          <input type=\"email\" class=\"form-control\" name=\"email\" ngModel #email=\"ngModel\" />\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !mobilephone.valid }\">\n          <label for=\"mobilephone\" class=\"form__label\">Cellulare</label>\n          <input type=\"text\" class=\"form-control\" name=\"mobilephone\" ngModel #mobilephone=\"ngModel\" />\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !homephone.valid }\">\n          <label for=\"homephone\" class=\"form__label\">Telefono casa</label>\n          <input type=\"text\" class=\"form-control\" name=\"homephone\" ngModel #homephone=\"ngModel\" />\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !officephone.valid }\">\n          <label for=\"officephone\" class=\"form__label\">Telefono ufficio</label>\n          <input type=\"text\" class=\"form-control\" name=\"officephone\" ngModel #officephone=\"ngModel\" />\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !fax.valid }\">\n          <label for=\"fax\" class=\"form__label\">Fax</label>\n          <input type=\"text\" class=\"form-control\" name=\"fax\" ngModel #fax=\"ngModel\" />\n        </div>\n      </div>\n      <div class=\"row mt-30\">\n        <div class=\"col\">\n          <button class=\"btn btn-success\" [disabled]=\"f.invalid\">Crea <i *ngIf=\"loading\" class=\"fa fa-spinner fa-pulse fa-fw\"></i></button>\n          <a [routerLink]=\"['/signin']\" class=\"btn btn-warning\">Cancella</a>\n        </div>\n        <div class=\"col\">\n          <text-warning></text-warning>\n        </div>\n      </div>\n    </form>\n  </div>\n  <back-button></back-button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/address-book/add/add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/address-book/add/add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddingAddressBookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Models
//import { Company } from '../_models/index';
// Services


var AddingAddressBookComponent = /** @class */ (function () {
    function AddingAddressBookComponent(service, messageService) {
        this.service = service;
        this.messageService = messageService;
        this.loading = false;
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
    }
    AddingAddressBookComponent.prototype.add = function (form) {
        var _this = this;
        this.loading = true;
        var subscription = this.service.create("addressbook", form.value).subscribe(function (data) {
            _this.loading = false;
            _this.messageService.setMessage('success');
            form.reset();
        }, function (err) {
            console.log(err);
            _this.loading = false;
            _this.messageService.setMessage('rejected');
        });
        this.sub.add(subscription);
    };
    AddingAddressBookComponent.prototype.ngOnInit = function () { };
    AddingAddressBookComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    AddingAddressBookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/components/address-book/add/add.component.html"),
            styles: [__webpack_require__("./src/app/components/address-book/add/add.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]])
    ], AddingAddressBookComponent);
    return AddingAddressBookComponent;
}());



/***/ }),

/***/ "./src/app/components/address-book/archived/archived.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-all-side-40\">\n  <div class=\"d-flex align-items-center mb-20\">\n    <h3 class=\"weight--light flex-fill mb-0\">Contatti archiviati</h3>\n    <a [routerLink]=\"['/tickets/add']\" class=\"btn btn--shadow btn-dark text-uppercase weight--light d-flex align-items-center pt-10 pb-10\">\n      Aggiungi contatto\n    </a>\n  </div>\n  <div class=\"mb-3\">\n    <search-form [setDataForRequest]=\"dataForRequestSearchComp\" (results)=\"addressesbook = $event\"></search-form>\n  </div>\n  <alertMessage></alertMessage>\n  <div class=\"card light p-all-side-25 mb-4\">\n    <table class=\"table table-striped mb-0\" *ngIf=\"addressesbook.length; else noAddressbook\">\n      <thead class=\"\">\n        <tr>\n          <th>Azienda</th>\n          <th>Nome Cognome</th>\n          <th>Telefono ufficio</th>\n          <th>Email</th>\n          <th></th>\n      </thead>\n      <tbody>\n        <tr [addressesbook]=\"addressesbook\" [addressbook]=\"addressbook\" *ngFor=\"let addressbook of addressesbook | paginate: { itemsPerPage: 10, currentPage: p }\" archived-addressbook-row></tr>\n      </tbody>\n    </table>\n    <ng-template #noAddressbook>\n      <message-notrecords [message]=\"'Non sono presenti records salvati nel database'\"></message-notrecords>\n    </ng-template>\n    <div class=\"d-flex justify-content-center\" *ngIf=\"addressesbook.length >= 10\">\n      <pagination-controls class=\"pagination\" (pageChange)=\"p = $event\"></pagination-controls>\n    </div>\n  </div>\n  <back-button></back-button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/address-book/archived/archived.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/address-book/archived/archived.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressbookArchivedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services

var AddressbookArchivedComponent = /** @class */ (function () {
    function AddressbookArchivedComponent(service) {
        this.service = service;
        this.addressesbook = [];
        this.dataForRequestSearchComp = {
            "table": "addressbook",
            "parameters": ["firstname", "lastname", "company", "email", "mobilephone"],
            "condition": "archived=is.true"
        };
        this.p = 1;
        this.loadAllItems("addressbook", "addressesbook", "archived");
    }
    AddressbookArchivedComponent.prototype.loadAllItems = function (table, variable, condition) {
        var _this = this;
        this.service.getAll(table, condition).subscribe(function (data) {
            _this[variable] = data;
        });
    };
    AddressbookArchivedComponent.prototype.ngOnInit = function () { };
    AddressbookArchivedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/components/address-book/archived/archived.component.html"),
            styles: [__webpack_require__("./src/app/components/address-book/archived/archived.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* Service */]])
    ], AddressbookArchivedComponent);
    return AddressbookArchivedComponent;
}());



/***/ }),

/***/ "./src/app/components/address-book/archived/row/row.component.html":
/***/ (function(module, exports) {

module.exports = "<td class=\"text-capitalize align-middle\">{{addressbook.company}}</td>\n<td class=\"text-capitalize align-middle\">{{addressbook.firstname}} {{addressbook.lastname}}</td>\n<td class=\"align-middle\">{{addressbook.officephone}}</td>\n<td class=\"align-middle\">{{addressbook.email}}</td>\n<td class=\"text-right\">\n  <button class=\"btn btn-warning\" title=\"Ripristina\"\n    [swal]=\"{ title: 'Sei sicuro di volerlo ripristinare?', showCancelButton: true }\" (confirm)=\"rollbackIt()\">\n    <i class=\"fa fa-reply text--shadow\" aria-hidden=\"true\"></i>\n  </button>\n  <button class=\"btn btn-danger\" title=\"Cancella definitivamente\"\n    [swal]=\"{ title: 'Sei sicuro di volerlo Cancellare?', text: 'Non sarà più possibile recuperarlo.', showCancelButton: true }\" (confirm)=\"deleteIt()\">\n    <i class=\"fa fa-trash text--shadow\" aria-hidden=\"true\"></i>\n  </button>\n</td>\n"

/***/ }),

/***/ "./src/app/components/address-book/archived/row/row.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/address-book/archived/row/row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressbookArchivedRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services


var AddressbookArchivedRowComponent = /** @class */ (function () {
    function AddressbookArchivedRowComponent(service, messageService) {
        this.service = service;
        this.messageService = messageService;
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
    }
    AddressbookArchivedRowComponent.prototype.rollbackIt = function () {
        var _this = this;
        var index = this.addressesbook.indexOf(this.addressbook);
        var archived = {
            "archived": false
        };
        var subscription = this.service.archived("addressbook", this.addressbook.id, archived).subscribe(function (data) {
            _this.addressesbook.splice(index, 1);
            _this.messageService.setMessage('rollback');
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    AddressbookArchivedRowComponent.prototype.deleteIt = function () {
        var _this = this;
        var index = this.addressesbook.indexOf(this.addressbook);
        var subscription = this.service.delete("addressbook", "id", this.addressbook.id).subscribe(function (data) {
            _this.addressesbook.splice(index, 1);
            _this.messageService.setMessage('delete');
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    AddressbookArchivedRowComponent.prototype.ngOnInit = function () { };
    AddressbookArchivedRowComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AddressbookArchivedRowComponent.prototype, "addressbook", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], AddressbookArchivedRowComponent.prototype, "addressesbook", void 0);
    AddressbookArchivedRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[archived-addressbook-row]',
            template: __webpack_require__("./src/app/components/address-book/archived/row/row.component.html"),
            styles: [__webpack_require__("./src/app/components/address-book/archived/row/row.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]])
    ], AddressbookArchivedRowComponent);
    return AddressbookArchivedRowComponent;
}());



/***/ }),

/***/ "./src/app/components/address-book/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-all-side-40\">\n  <alertMessage></alertMessage>\n  <h3 class=\"mb-20 mt-0 weight--light\">Dettagli</h3>\n  <div class=\"card light mb-30 p-all-side-25\">\n    <form #form=\"ngForm\" novalidate>\n      <div>\n        <div class=\"form-group\" [ngClass]=\"{\n          'has-danger': company.invalid && (company.dirty || company.touched)\n        }\">\n          <label for=\"company\">Azienda </label> <span *ngIf=\"company.invalid && (company.dirty || company.touched)\" class=\"text-danger\">* Campo non valido</span>\n          <input type=\"text\" class=\"form-control\" name=\"company\" [(ngModel)]=\"addressbook.company\" #company=\"ngModel\" />\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{\n          'has-danger': firstname.invalid && (firstname.dirty || firstname.touched)\n        }\">\n          <label for=\"firstname\">Nome <span class=\"text-danger\">*</span></label> <span *ngIf=\"firstname.invalid && (firstname.dirty || firstname.touched)\" class=\"text-danger\">Campo non valido</span>\n          <input type=\"text\" class=\"form-control\" name=\"firstname\" [(ngModel)]=\"addressbook.firstname\" #firstname=\"ngModel\" required />\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{\n          'has-danger': lastname.invalid && (lastname.dirty || lastname.touched)\n        }\">\n          <label for=\"lastname\">Cognome <span class=\"text-danger\">*</span></label> <span *ngIf=\"lastname.invalid && (lastname.dirty || lastname.touched)\" class=\"text-danger\">Campo non valido</span>\n          <input type=\"text\" class=\"form-control\" name=\"lastname\" [(ngModel)]=\"addressbook.lastname\" #lastname=\"ngModel\" required />\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{\n          'has-danger': email.invalid && (email.dirty || email.touched)\n        }\">\n          <label for=\"email\">Email </label> <span *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"text-danger\">* Campo non valido</span>\n          <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"addressbook.email\" #email=\"ngModel\" />\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{\n          'has-danger': mobilephone.invalid && (mobilephone.dirty || mobilephone.touched)\n        }\">\n          <label for=\"mobilephone\">Cellulare </label> <span *ngIf=\"mobilephone.invalid && (mobilephone.dirty || mobilephone.touched)\" class=\"text-danger\">* Campo non valido</span>\n          <input type=\"text\" class=\"form-control\" name=\"mobilephone\" [(ngModel)]=\"addressbook.mobilephone\" #mobilephone=\"ngModel\" />\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{\n          'has-danger': homephone.invalid && (homephone.dirty || homephone.touched)\n        }\">\n          <label for=\"homephone\">Telefono casa </label> <span *ngIf=\"homephone.invalid && (homephone.dirty || homephone.touched)\" class=\"text-danger\">* Campo non valido</span>\n          <input type=\"text\" class=\"form-control\" name=\"homephone\" [(ngModel)]=\"addressbook.homephone\" #homephone=\"ngModel\" />\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{\n          'has-danger': officephone.invalid && (officephone.dirty || officephone.touched)\n        }\">\n          <label for=\"officephone\">Telefono ufficio </label> <span *ngIf=\"officephone.invalid && (officephone.dirty || officephone.touched)\" class=\"text-danger\">* Campo non valido</span>\n          <input type=\"text\" class=\"form-control\" name=\"officephone\" [(ngModel)]=\"addressbook.officephone\" #officephone=\"ngModel\" />\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{\n          'has-danger': fax.invalid && (fax.dirty || fax.touched)\n        }\">\n          <label for=\"fax\">Fax </label> <span *ngIf=\"fax.invalid && (fax.dirty || fax.touched)\" class=\"text-danger\">* Campo non valido</span>\n          <input type=\"text\" class=\"form-control\" name=\"fax\" [(ngModel)]=\"addressbook.fax\" #fax=\"ngModel\" />\n        </div>\n      </div>\n      <div class=\"row mt-20\">\n        <div class=\"col\">\n          <button class=\"btn btn-success mr-2\" (click)=\"update(f)\" [disabled]=\"form.invalid\">Salva modifiche</button>\n          <button class=\"btn btn-warning\" (click)=\"revoke()\">Annulla</button>\n        </div>\n        <div class=\"col\">\n          <text-warning></text-warning>\n        </div>\n      </div>\n    </form>\n  </div>\n  <back-button></back-button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/address-book/details/details.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/address-book/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressbookDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_form_can_deactivate_form_can_deactivate__ = __webpack_require__("./src/app/helpers/form-can-deactivate/form-can-deactivate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Services


var AddressbookDetailsComponent = /** @class */ (function (_super) {
    __extends(AddressbookDetailsComponent, _super);
    function AddressbookDetailsComponent(service, route, messageService) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.route = route;
        _this.messageService = messageService;
        _this.addressbook = {};
        _this.sub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__["a" /* Subscription */]();
        return _this;
    }
    AddressbookDetailsComponent.prototype.update = function (data) {
        var _this = this;
        var query = "id=eq." + this.addressbook.id;
        var subscription = this.service.update("addressbook", query, this.addressbook).subscribe(function (data) {
            _this.messageService.setMessage('success');
        }, function (err) {
            console.log(err);
            _this.messageService.setMessage('rejected');
        });
        this.sub.add(subscription);
    };
    AddressbookDetailsComponent.prototype.revoke = function () {
        this.getAddressbook();
    };
    AddressbookDetailsComponent.prototype.getAddressbook = function () {
        var _this = this;
        var subscription = this.service.getBy("addressbook", "id", this.id).subscribe(function (data) {
            _this.addressbook = data;
        });
        this.sub.add(subscription);
    };
    AddressbookDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var subscription = this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.getAddressbook();
        });
        this.sub.add(subscription);
    };
    AddressbookDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */])
    ], AddressbookDetailsComponent.prototype, "form", void 0);
    AddressbookDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/components/address-book/details/details.component.html"),
            styles: [__webpack_require__("./src/app/components/address-book/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__services_message_service__["a" /* MessageService */]])
    ], AddressbookDetailsComponent);
    return AddressbookDetailsComponent;
}(__WEBPACK_IMPORTED_MODULE_3__helpers_form_can_deactivate_form_can_deactivate__["a" /* FormCanDeactivate */]));



/***/ }),

/***/ "./src/app/components/address-book/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-all-side-40\">\n  <div class=\"d-flex align-items-center mb-20\">\n    <h3 class=\"weight--light flex-fill mb-0\">Contatti clienti</h3>\n    <a [routerLink]=\"['/tickets/add']\" class=\"btn btn--shadow btn-dark text-uppercase weight--light d-flex align-items-center pt-10 pb-10\">\n      Aggiungi contatto\n    </a>\n  </div>\n  <div class=\"mb-3\">\n    <search-form [setDataForRequest]=\"dataForRequestSearchComp\" (results)=\"addressesbook = $event\"></search-form>\n  </div>\n  <alertMessage></alertMessage>\n  <div class=\"card light mb-4 p-all-side-25\">\n    <table class=\"table table-striped table--light mb-0\" *ngIf=\"addressesbook.length; else noAddressbook\">\n      <thead class=\"\">\n        <tr>\n          <th class=\"weight--medium\">Azienda</th>\n          <th class=\"weight--medium\">Nome Cognome</th>\n          <th class=\"weight--medium\">Telefono ufficio</th>\n          <th class=\"weight--medium\">Email</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr [addressesbook]=\"addressesbook\" [addressbook]=\"addressbook\" *ngFor=\"let addressbook of addressesbook | paginate: { itemsPerPage: 10, currentPage: p }\" addressbook-list-row></tr>\n      </tbody>\n    </table>\n    <div class=\"d-flex justify-content-center\" *ngIf=\"addressesbook.length >= 10\">\n      <pagination-controls class=\"pagination\" (pageChange)=\"p = $event\"></pagination-controls>\n    </div>\n    <ng-template #noAddressbook>\n      <message-notrecords [message]=\"'Non sono presenti records salvati nel database'\"></message-notrecords>\n    </ng-template>\n  </div>\n  <back-button></back-button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/address-book/list/list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/address-book/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressbookListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services

var AddressbookListComponent = /** @class */ (function () {
    function AddressbookListComponent(service) {
        this.service = service;
        this.addressesbook = [];
        this.dataForRequestSearchComp = {
            "table": "addressbook",
            "parameters": ["firstname", "lastname", "company", "email", "mobilephone"],
            "condition": "archived=is.false"
        };
        this.p = 1;
        this.loadAllItems("addressbook", "addressesbook", "not_archived");
    }
    AddressbookListComponent.prototype.loadAllItems = function (table, variable, condition) {
        var _this = this;
        this.service.getAll(table, condition).subscribe(function (data) {
            _this[variable] = data;
        });
    };
    AddressbookListComponent.prototype.ngOnInit = function () { };
    AddressbookListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            moduleId: module.i,
            template: __webpack_require__("./src/app/components/address-book/list/list.component.html"),
            styles: [__webpack_require__("./src/app/components/address-book/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* Service */]])
    ], AddressbookListComponent);
    return AddressbookListComponent;
}());



/***/ }),

/***/ "./src/app/components/address-book/list/row/row.component.html":
/***/ (function(module, exports) {

module.exports = "<td class=\"text-capitalize align-middle\">{{addressbook.company}}</td>\n<td class=\"text-capitalize align-middle\">{{addressbook.firstname}} {{addressbook.lastname}}</td>\n<td class=\"align-middle\">{{addressbook.officephone}}</td>\n<td class=\"align-middle\">{{addressbook.email}}</td>\n<td class=\"text-right\">\n  <a [routerLink]=\"['/addressbook', addressbook.id]\" class=\"btn btn-info\">\n    <i class=\"fa fa-info text--shadow\" aria-hidden=\"true\"></i>\n  </a>\n  <a [routerLink]=\"['/addressbook', addressbook.id]\" class=\"btn btn-primary\">\n    <i class=\"fa fa-pencil text--shadow\" aria-hidden=\"true\"></i>\n  </a>\n  <button class=\"btn btn-warning\" title=\"Archivia\"\n    [swal]=\"{ title: 'Sei sicuro di volerlo archiviare?', text: 'Sarà possibile ripristinarlo in seguito.', showCancelButton: true }\" (confirm)=\"archiveIt()\">\n    <i class=\"fa fa-archive text--shadow\" aria-hidden=\"true\"></i>\n  </button>\n  <button class=\"btn btn-danger\" title=\"Elimina\"\n    [swal]=\"{ title: 'Sei sicuro di volerlo cancellare?', text: 'Non sarà possibile ripristinarlo in seguito.', showCancelButton: true }\" (confirm)=\"deleteIt()\">\n    <i class=\"fa fa-trash text--shadow\" aria-hidden=\"true\"></i>\n  </button>\n</td>\n"

/***/ }),

/***/ "./src/app/components/address-book/list/row/row.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/address-book/list/row/row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressbookListRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services


var AddressbookListRowComponent = /** @class */ (function () {
    function AddressbookListRowComponent(service, messageService) {
        this.service = service;
        this.messageService = messageService;
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
    }
    AddressbookListRowComponent.prototype.archiveIt = function () {
        var _this = this;
        var index = this.addressesbook.indexOf(this.addressbook);
        var archived = {
            "archived": true
        };
        var subscription = this.service.archived("addressbook", this.addressbook.id, archived).subscribe(function (data) {
            _this.addressesbook.splice(index, 1);
            _this.messageService.setMessage('archive');
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    AddressbookListRowComponent.prototype.deleteIt = function () {
        var _this = this;
        var index = this.addressesbook.indexOf(this.addressbook);
        var subscription = this.service.delete("addressbook", "id", this.addressbook.id).subscribe(function (data) {
            _this.addressesbook.splice(index, 1);
            _this.messageService.setMessage('delete');
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    AddressbookListRowComponent.prototype.ngOnInit = function () { };
    AddressbookListRowComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AddressbookListRowComponent.prototype, "addressbook", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], AddressbookListRowComponent.prototype, "addressesbook", void 0);
    AddressbookListRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[addressbook-list-row]',
            template: __webpack_require__("./src/app/components/address-book/list/row/row.component.html"),
            styles: [__webpack_require__("./src/app/components/address-book/list/row/row.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]])
    ], AddressbookListRowComponent);
    return AddressbookListRowComponent;
}());



/***/ }),

/***/ "./src/app/components/documents/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-all-side-40\">\n  <h2 class=\"mb-20 weight--light\">Crea nuovo documento</h2>\n  <alertMessage></alertMessage>\n  <div class=\"card light p-all-side-25\">\n    <form #form=\"ngForm\" (ngSubmit)=\"create(form)\" novalidate>\n      <div class=\"form-group\">\n        <label for=\"share_with\">Condividi con</label>\n        <select multiple class=\"form-control text-capitalize\" ngModel name=\"share_with\">\n          <option value=\"\" disabled>Seleziona</option>\n          <option *ngFor=\"let account of accounts\" value=\"{{account.id}}\" class=\"text-capitalize\">\n            {{account.firstname}} {{account.lastname}}\n          </option>\n        </select>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{\n        'has-danger': title.invalid && (title.dirty || title.touched)\n      }\">\n        <label for=\"title\">Titolo </label> <span *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"text-danger\">* Campo non valido</span>\n        <input type=\"text\" class=\"form-control\" name=\"title\" ngModel #title=\"ngModel\" required />\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{\n        'has-danger': body_text.invalid && (body_text.dirty || body_text.touched)\n      }\">\n        <label for=\"body_text\">Corpo del documento </label> <span *ngIf=\"body_text.invalid && (body_text.dirty || body_text.touched)\" class=\"text-danger\">* Campo non valido</span>\n        <textarea [froalaEditor]=\"editor_options\" name=\"body_text\" #body_text=\"ngModel\" ngModel></textarea>\n      </div>\n      <div>\n        <button class=\"btn btn-success btn--shadow\" [disabled]=\"form.invalid\">Crea</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/documents/add/add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/documents/add/add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accounts_service_account_service__ = __webpack_require__("./src/app/components/accounts/service/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_local_storage__ = __webpack_require__("./src/app/helpers/local-storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services



// Helpers

var DocumentAddComponent = /** @class */ (function () {
    function DocumentAddComponent(lsService, service, messageService, accountService) {
        this.lsService = lsService;
        this.service = service;
        this.messageService = messageService;
        this.accountService = accountService;
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
        this.editor_options = {
            placeholderText: 'Inserisci testo',
            charCounterCount: false,
            toolbarVisibleWithoutSelection: false,
            toolbarSticky: false,
            toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', '|', 'fontFamily', 'fontSize', 'color', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'insertLink', 'insertTable', '|', 'insertHR', 'selectAll', 'clearFormatting', '|', 'undo', 'redo'],
            height: 300,
            theme: "gray",
            tooltips: true
        };
        this.getAccounts();
    }
    DocumentAddComponent.prototype.create = function (form) {
        var _this = this;
        form.value.created_by = +this.lsService.get("accountId");
        form.value.share_with.push(+this.lsService.get("accountId"));
        // Convert id from string to number, because DB accepts only numbers
        if (form.value.share_with.length > 0) {
            form.value.share_with = form.value.share_with.map(function (user_id) {
                return parseInt(user_id, 10);
            });
            form.value.share_with = "{" + form.value.share_with.join(",") + "}";
        }
        else {
            form.value.share_with = "{}";
        }
        // end
        var subscription = this.service.create("documents", form.value).subscribe(function (data) {
            _this.messageService.setMessage('success');
            form.reset();
        }, function (err) {
            console.log(err);
            _this.messageService.setMessage('rejected');
        });
        this.sub.add(subscription);
    };
    DocumentAddComponent.prototype.getAccounts = function () {
        var _this = this;
        var query = "status=eq." + 1 + "&id=neq." + +this.lsService.get("accountId") + "&deleted=is.false";
        var subscription = this.service.getRecords("accounts", query).subscribe(function (data) {
            _this.accounts = data;
        });
        this.sub.add(subscription);
    };
    DocumentAddComponent.prototype.ngOnInit = function () { };
    DocumentAddComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    DocumentAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add',
            template: __webpack_require__("./src/app/components/documents/add/add.component.html"),
            styles: [__webpack_require__("./src/app/components/documents/add/add.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__helpers_local_storage__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_4__accounts_service_account_service__["a" /* AccountService */]])
    ], DocumentAddComponent);
    return DocumentAddComponent;
}());



/***/ }),

/***/ "./src/app/components/documents/archived/archived.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-all-side-40\">\n  <alertMessage></alertMessage>\n  <div class=\"d-flex align-items-center mb-20\">\n    <h3 class=\"weight--light flex-fill mb-0\">I tuoi documenti archiviati</h3>\n    <a [routerLink]=\"['/documents/add']\" class=\"btn btn--shadow btn-dark text-uppercase weight--light d-flex align-items-center pt-10 pb-10\">\n      Aggiungi nuovo documento\n    </a>\n  </div>\n  <div class=\"card light mb-4 p-all-side-25\">\n    <table class=\"table table-striped avatar-list mb-0\" *ngIf=\"documents.length; else noCurrentDaydocumentList\">\n      <thead class=\"\">\n        <tr>\n          <th>Document N°</th>\n          <th>Titolo</th>\n          <th>Condiviso con</th>\n          <th>Creato da</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr [documents]=\"documents\" [document]=\"document\" [account_id]=\"account_id\" [account_profile]=\"account_profile\" *ngFor=\"let document of documents | paginate: { itemsPerPage: 10, currentPage: p }\" (data)=\"current_document = $event\" (msg)=\"modal_message.text = $event\" archived-documents-row></tr>\n      </tbody>\n    </table>\n    <ng-template #noCurrentDaydocumentList>\n      <message-notrecords [message]=\"'Non sono presenti records salvati nel database'\"></message-notrecords>\n    </ng-template>\n    <div class=\"d-flex justify-content-center\" *ngIf=\"documents.length >= 10\">\n      <pagination-controls class=\"pagination\" (pageChange)=\"p = $event\"></pagination-controls>\n    </div>\n  </div>\n  <back-button></back-button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/documents/archived/archived.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/documents/archived/archived.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsArchivedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accounts_service_account_service__ = __webpack_require__("./src/app/components/accounts/service/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_local_storage__ = __webpack_require__("./src/app/helpers/local-storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services


// Helpers

var DocumentsArchivedComponent = /** @class */ (function () {
    function DocumentsArchivedComponent(service, lsService, accountService) {
        this.service = service;
        this.lsService = lsService;
        this.accountService = accountService;
        this.accounts = [];
        this.documents = [];
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
        this.p = 1;
        this.account_id = +this.lsService.get("accountId");
        this.account_profile = +this.lsService.get("accountProfile");
        this.loadAllItems("accounts", "accounts", "active_and_not_deleted");
    }
    DocumentsArchivedComponent.prototype.getDocuments = function () {
        var _this = this;
        var query = "share_with=cs." + "{" + this.account_id + "}" + "&archived=" + "is.true" + "&order=" + "id.desc" + "&select=*, created_by: accounts(id, firstname, lastname)";
        var subscription = this.service.getRecords("documents", query).subscribe(function (data) {
            var accounts = _this.accounts;
            _this.documents = data;
            _this.documents.map(function (document) {
                document["accounts"] = [];
                document.share_with.forEach(function (account) {
                    accounts.forEach(function (elem) {
                        if (elem.id == account) {
                            var obj = {
                                "id": elem.id,
                                "firstname": elem.firstname,
                                "lastname": elem.lastname,
                                "avatar_color": elem.avatar_color
                            };
                            document.accounts.push(obj);
                        }
                    });
                });
            });
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    DocumentsArchivedComponent.prototype.loadAllItems = function (table, variable, condition) {
        var _this = this;
        this.service.getAll(table, condition).subscribe(function (data) {
            _this[variable] = data;
        });
    };
    DocumentsArchivedComponent.prototype.ngOnInit = function () {
        this.getDocuments();
    };
    DocumentsArchivedComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    DocumentsArchivedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/components/documents/archived/archived.component.html"),
            styles: [__webpack_require__("./src/app/components/documents/archived/archived.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_4__helpers_local_storage__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_3__accounts_service_account_service__["a" /* AccountService */]])
    ], DocumentsArchivedComponent);
    return DocumentsArchivedComponent;
}());



/***/ }),

/***/ "./src/app/components/documents/archived/row/row.component.html":
/***/ (function(module, exports) {

module.exports = "<td class=\"align-middle text-uppercase\">\n  document-{{document.id}}\n</td>\n<td class=\"text-capitalize align-middle\">\n  {{document.title}}\n</td>\n<td class=\"align-middle\">\n  <ng-container *ngFor=\"let account of document.accounts; index as i\">\n    <ng-container *ngIf=\"i <= 2\">\n      <span class=\"avatar radius small\" [style.background]=\"account.avatar_color\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{account.firstname}} {{account.lastname}}\">\n        {{account.firstname | slice:0:1}}\n      </span>\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"document.accounts.length == 0\">\n    <p class=\"mb-0\">Nessun utente</p>\n  </ng-container>\n  <ng-container *ngIf=\"document.accounts.length > 3\">\n    <span class=\"navbar-notification nav-item dropdown\">\n      <a class=\"avatar radius small\" style=\"background: white\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        + {{document.accounts.length - 3}}\n      </a>\n      <div class=\"dropdown-menu p-all-side-5 mt-5\">\n        <ng-container *ngFor=\"let account of document.accounts; index as i\">\n          <p *ngIf=\"i > 2\" class=\"mb-0\">\n            <span class=\"avatar radius small mr-2\" [style.background]=\"account.avatar_color\">\n              {{account.firstname | slice:0:1}}\n            </span>\n            <small>{{account.firstname}} {{account.lastname}}</small>\n          </p>\n        </ng-container>\n      </div>\n    </span>\n  </ng-container>\n</td>\n<td class=\"align-middle\">{{document.created_by.firstname}} {{document.created_by.lastname}}</td>\n<td class=\"text-right\">\n  <button [ngClass]=\"{ 'disabled': document.created_by != account_id && account_profile != 0 }\"\n    class=\"btn btn-warning\" title=\"Ripristina\"\n    [swal]=\"{ title: 'Sei sicuro di volerlo ripristinare?', showCancelButton: true }\" (confirm)=\"rollbackIt()\">\n    <i class=\"fa fa-reply text--shadow\" aria-hidden=\"true\"></i>\n  </button>\n  <button [ngClass]=\"{ 'disabled': document.created_by != account_id && account_profile != 0 }\"\n    class=\"btn btn-danger\" title=\"Cancella definitivamente\"\n    [swal]=\"{ title: 'Sei sicuro di volerlo cancellare?', text: 'Non sarà più possibile recuperarlo.', showCancelButton: true }\" (confirm)=\"deleteIt()\">\n    <i class=\"fa fa-trash text--shadow\" aria-hidden=\"true\"></i>\n  </button>\n</td>\n"

/***/ }),

/***/ "./src/app/components/documents/archived/row/row.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/documents/archived/row/row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentArchivedRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services


var DocumentArchivedRowComponent = /** @class */ (function () {
    function DocumentArchivedRowComponent(service, messageService) {
        this.service = service;
        this.messageService = messageService;
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
    }
    DocumentArchivedRowComponent.prototype.rollbackIt = function () {
        var _this = this;
        var index = this.documents.indexOf(this.document);
        var archived = {
            "archived": false,
            "updated_by": this.account_id
        };
        var subscription = this.service.archived("documents", this.document.id, archived).subscribe(function (data) {
            _this.documents.splice(index, 1);
            _this.messageService.setMessage('rollback');
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    DocumentArchivedRowComponent.prototype.deleteIt = function () {
        var _this = this;
        var index = this.documents.indexOf(this.document);
        var subscription = this.service.delete("documents", "id", this.document.id).subscribe(function (data) {
            _this.documents.splice(index, 1);
            _this.messageService.setMessage('delete');
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    DocumentArchivedRowComponent.prototype.ngOnInit = function () { };
    DocumentArchivedRowComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], DocumentArchivedRowComponent.prototype, "document", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], DocumentArchivedRowComponent.prototype, "documents", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], DocumentArchivedRowComponent.prototype, "account_profile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], DocumentArchivedRowComponent.prototype, "account_id", void 0);
    DocumentArchivedRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[archived-documents-row]',
            template: __webpack_require__("./src/app/components/documents/archived/row/row.component.html"),
            styles: [__webpack_require__("./src/app/components/documents/archived/row/row.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]])
    ], DocumentArchivedRowComponent);
    return DocumentArchivedRowComponent;
}());



/***/ }),

/***/ "./src/app/components/documents/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-all-side-40\">\n  <div class=\"card light p-all-side-25\">\n    <alertMessage></alertMessage>\n    <p class=\"mb-0\">\n      <i class=\"fa fa-square text-success mr-1\"></i> <span class=\"text-black-50 text-uppercase\">document-{{document.id}}</span>\n    </p>\n    <section *ngIf=\"document.accounts\">\n      <hr>\n      <h6 class=\"weight--regular\">Il documento è condiviso con:</h6>\n      <shared-documents-with [account_id]=\"account_id\" [document]=\"document\"></shared-documents-with>\n      <hr>\n    </section>\n    <div class=\"row\" *ngIf=\"document\">\n      <section class=\"col-md-9 col-lg-10\">\n        <form #mainInfo=\"ngForm\" novalidate>\n          <div class=\"form-group\" [ngClass]=\"{\n            'has-danger': title.invalid && (title.dirty || title.touched)\n          }\">\n            <label for=\"title\">Titolo </label> <span *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"text-danger\">* Campo non valido</span>\n            <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"document.title\" #title=\"ngModel\" required />\n          </div>\n          <textarea [froalaEditor]=\"editor_options\" name=\"body_text\" #body_text=\"ngModel\" [(ngModel)]=\"document.body_text\"></textarea>\n          <div id=\"document_canvas\" [froalaView]=\"document.body_text\" class=\"d-none\"></div>\n          <div class=\"row mt-20\">\n            <div class=\"col\">\n              <button class=\"btn btn-success btn--shadow mr-2\" (click)=\"update(mainInfo)\" [disabled]=\"mainInfo.invalid\">Salva modifiche</button>\n              <button class=\"btn btn-warning\" (click)=\"revoke()\">Annulla</button>\n            </div>\n            <div class=\"col text-right\">\n              <button class=\"btn btn-primary btn--shadow\" (click)=\"generatePDF()\">Genera PDF</button>\n            </div>\n          </div>\n        </form>\n      </section>\n      <aside class=\"col-md-3 col-lg-2\" *ngIf=\"document.created_by\">\n        <form #sideInfo=\"ngForm\" novalidate class=\"form--light\">\n          <div class=\"form-group\">\n            <label for=\"share_with\">Condividi con</label>\n            <select id=\"share_with\" class=\"form-control text-capitalize\" ngModel name=\"share_with\" #share_with=\"ngModel\" (change)=\"shareWith(share_with)\">\n              <option value=\"\" disabled>Seleziona</option>\n              <option *ngFor=\"let account of accounts\" value=\"{{account.id}};{{account.firstname}};{{account.lastname}}\" class=\"text-capitalize\">\n                {{account.firstname}} {{account.lastname}}\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"created_by\">Creato da</label>\n            <div class=\"form-control text-capitalize\">\n              {{document.created_by.firstname}} {{document.created_by.lastname}}\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <small>\n              <label>Data di creazione:</label>\n              <p>{{created_at}} fa</p>\n            </small>\n          </div>\n          <div class=\"form-group\" *ngIf=\"updated_at\">\n            <small>\n              <label>Data ultima modifica:</label>\n              <p>{{updated_at}} fa</p>\n            </small>\n          </div>\n        </form>\n      </aside>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/documents/details/details.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/documents/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jspdf__ = __webpack_require__("./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jspdf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_form_can_deactivate_form_can_deactivate__ = __webpack_require__("./src/app/helpers/form-can-deactivate/form-can-deactivate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__accounts_service_account_service__ = __webpack_require__("./src/app/components/accounts/service/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__helpers_timezone__ = __webpack_require__("./src/app/helpers/timezone.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__helpers_local_storage__ = __webpack_require__("./src/app/helpers/local-storage.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// Services



// Helpers


var DocumentDetailsComponent = /** @class */ (function (_super) {
    __extends(DocumentDetailsComponent, _super);
    function DocumentDetailsComponent(service, route, timezone, messageService, accountService, lsService) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.route = route;
        _this.timezone = timezone;
        _this.messageService = messageService;
        _this.accountService = accountService;
        _this.lsService = lsService;
        _this.sub = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subscription__["a" /* Subscription */]();
        _this.editor_options = {
            placeholderText: 'Inserisci testo',
            charCounterCount: false,
            toolbarVisibleWithoutSelection: false,
            toolbarSticky: false,
            toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', '|', 'fontFamily', 'fontSize', 'color', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'insertLink', 'insertTable', '|', 'insertHR', 'selectAll', 'clearFormatting', '|', 'undo', 'redo'],
            height: 300,
            theme: "gray",
            tooltips: true
        };
        _this.document = {};
        _this.route.params.subscribe(function (params) {
            _this.document_id = +params['id'];
            _this.getcurrentDocumentData(_this.document_id);
        });
        _this.account_id = +_this.lsService.get("accountId");
        return _this;
    }
    DocumentDetailsComponent.prototype.generatePDF = function () {
        var id = this.document_id;
        var pdf = new __WEBPACK_IMPORTED_MODULE_2_jspdf__('p', 'pt', 'letter');
        var source = document.getElementById('document_canvas');
        var specialElementHandlers = {
            '#bypassme': function (element, renderer) {
                // true = "handled elsewhere, bypass text extraction"
                return true;
            }
        };
        var margins = {
            top: 60,
            bottom: 60,
            left: 40,
            width: 522
        };
        pdf.fromHTML(source, // HTML string or DOM elem ref.
        margins.left, // x coord
        margins.top, {
            'width': margins.width,
            'elementHandlers': specialElementHandlers
        }, function (dispose) {
            pdf.save("Bracco-" + id + ".pdf");
        }, margins);
    };
    DocumentDetailsComponent.prototype.revoke = function () {
        this.getcurrentDocumentData(this.document_id);
    };
    DocumentDetailsComponent.prototype.checkIfAlreadySelected = function (data) {
        return this.document.share_with.includes(data);
    };
    DocumentDetailsComponent.prototype.split = function (data) {
        var str = data.split(";");
        var obj = {
            "id": +str[0],
            "firstname": str[1],
            "lastname": str[2]
        };
        return obj;
    };
    DocumentDetailsComponent.prototype.shareWith = function (data) {
        var _this = this;
        var accountSelected = this.split(data.value);
        // Request
        var query_document;
        if (this.document.updated_at != null) {
            query_document = "id=eq." + this.document.id + "&" + "updated_at=eq." + this.document.updated_at;
        }
        else {
            query_document = "id=eq." + this.document.id;
        }
        // end
        // Check if account is has been already assignated to
        var resultCheck = this.checkIfAlreadySelected(accountSelected.id);
        if (resultCheck != true) {
            this.document.share_with.push(accountSelected.id);
            // Create obj to send
            var upload_document_1 = {
                "updated_by": this.account_id,
                "updated_at": this.timezone.getCurrentDate(),
                "share_with": "{" + this.document.share_with.join(",") + "}"
            };
            // end
            //
            var subscription = this.service.update("documents", query_document, upload_document_1).subscribe(function (data) {
                _this.messageService.setMessage('success');
                // Get current Date in words
                _this.updated_at = _this.timezone.getDistanceInWordsToNow(new Date());
                // end
                _this.document.updated_at = upload_document_1.updated_at;
                _this.document.accounts.push(accountSelected);
            }, function (err) {
                _this.messageService.setMessage('overwrite');
                console.log(err);
            });
            this.sub.add(subscription);
        }
        else {
            this.messageService.setMessage('prohibition');
        }
        // end
    };
    DocumentDetailsComponent.prototype.update = function (form) {
        var _this = this;
        var query;
        if (this.document.updated_at != null) {
            query = "id=eq." + this.document.id + "&" + "updated_at=eq." + this.document.updated_at;
        }
        else {
            query = "id=eq." + this.document.id;
        }
        form.value.updated_by = this.account_id;
        form.value.updated_at = this.timezone.getCurrentDate();
        var subscription = this.service.update("documents", query, form.value).subscribe(function (data) {
            _this.messageService.setMessage('success');
            _this.updated_at = _this.timezone.getDistanceInWordsToNow(new Date());
            _this.document.updated_at = form.value.updated_at;
        }, function (err) {
            console.log(err);
            _this.messageService.setMessage('rejected');
        });
        this.sub.add(subscription);
    };
    DocumentDetailsComponent.prototype.getAssociatedAccounts = function () {
        var _this = this;
        var request_query = "id=in." + "(" + this.document.share_with.toString() + ")" + "&deleted=is.false" + "&status=eq.1" + "&select=id,firstname,lastname";
        var subscription = this.service.getRecords("accounts", request_query).subscribe(function (data) {
            _this.document.accounts = data;
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    DocumentDetailsComponent.prototype.getcurrentDocumentData = function (document_id) {
        var _this = this;
        var query = "id=eq." + document_id + "&select=*, created_by: accounts(id, firstname, lastname)";
        var subscription = this.service.getRecord("documents", query).subscribe(function (data) {
            _this.document = data;
            _this.getAssociatedAccounts();
            _this.created_at = _this.timezone.getDistanceInWordsToNow(_this.document.created_at);
            if (_this.document.updated_at != null) {
                _this.updated_at = _this.timezone.getDistanceInWordsToNow(_this.document.updated_at);
            }
        });
        this.sub.add(subscription);
    };
    DocumentDetailsComponent.prototype.getAccounts = function () {
        var _this = this;
        var query = "deleted=is.false" + "&status=eq." + 1 + "&id=neq." + this.account_id;
        var subscription = this.service.getRecords("accounts", query).subscribe(function (data) {
            _this.accounts = data;
        });
        this.sub.add(subscription);
    };
    DocumentDetailsComponent.prototype.ngOnInit = function () {
        this.getAccounts();
    };
    DocumentDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('mainInfo'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */])
    ], DocumentDetailsComponent.prototype, "form", void 0);
    DocumentDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/components/documents/details/details.component.html"),
            styles: [__webpack_require__("./src/app/components/documents/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_9__helpers_timezone__["a" /* Timezone */],
            __WEBPACK_IMPORTED_MODULE_7__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_8__accounts_service_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_10__helpers_local_storage__["a" /* LocalStorageService */]])
    ], DocumentDetailsComponent);
    return DocumentDetailsComponent;
}(__WEBPACK_IMPORTED_MODULE_3__helpers_form_can_deactivate_form_can_deactivate__["a" /* FormCanDeactivate */]));



/***/ }),

/***/ "./src/app/components/documents/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-all-side-40\">\n  <alertMessage></alertMessage>\n  <div class=\"d-flex align-items-center mb-20\">\n    <h3 class=\"weight--light flex-fill mb-0\">I tuoi documenti</h3>\n    <a [routerLink]=\"['/documents/add']\" class=\"btn btn--shadow btn-dark text-uppercase weight--light d-flex align-items-center pt-10 pb-10\">\n      Aggiungi nuovo documento\n    </a>\n  </div>\n  <div class=\"card light mb-4 p-all-side-25\">\n    <table class=\"table table-striped avatar-list mb-0\" *ngIf=\"documents.length; else noCurrentDaydocumentList\">\n      <thead class=\"\">\n        <tr>\n          <th>Documento N°</th>\n          <th>Titolo</th>\n          <th>Condiviso con</th>\n          <th>Creato da</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr [documents]=\"documents\" [document]=\"document\" [account_id]=\"account_id\" [account_profile]=\"account_profile\" *ngFor=\"let document of documents | paginate: { itemsPerPage: 10, currentPage: p }\" documents-list-row></tr>\n      </tbody>\n    </table>\n    <ng-template #noCurrentDaydocumentList>\n      <message-notrecords [message]=\"'Non sono presenti records salvati nel database'\"></message-notrecords>\n    </ng-template>\n    <div class=\"d-flex justify-content-center\" *ngIf=\"documents.length >= 10\">\n      <pagination-controls class=\"pagination\" (pageChange)=\"p = $event\"></pagination-controls>\n    </div>\n  </div>\n  <back-button></back-button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/documents/list/list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/documents/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accounts_service_account_service__ = __webpack_require__("./src/app/components/accounts/service/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_local_storage__ = __webpack_require__("./src/app/helpers/local-storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services


// Helpers

var DocumentListComponent = /** @class */ (function () {
    function DocumentListComponent(lsService, service, accountService) {
        this.lsService = lsService;
        this.service = service;
        this.accountService = accountService;
        this.accounts = [];
        this.documents = [];
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
        this.p = 1;
        this.account_id = +this.lsService.get("accountId");
        this.account_profile = +this.lsService.get("accountProfile");
        this.loadAllItems("accounts", "accounts", "active_and_not_deleted");
    }
    DocumentListComponent.prototype.get_documents = function () {
        var _this = this;
        var query = "share_with=cs." + "{" + this.account_id + "}" + "&archived=" + "is.false" + "&order=" + "id.desc" + "&select=*, created_by: accounts(id, firstname, lastname)";
        var subscription = this.service.getRecords("documents", query).subscribe(function (data) {
            var accounts = _this.accounts;
            _this.documents = data;
            _this.documents.map(function (document) {
                document["accounts"] = [];
                document.share_with.forEach(function (account) {
                    accounts.forEach(function (elem) {
                        if (elem.id == account) {
                            var obj = {
                                "id": elem.id,
                                "firstname": elem.firstname,
                                "lastname": elem.lastname,
                                "avatar_color": elem.avatar_color
                            };
                            document.accounts.push(obj);
                        }
                    });
                });
            });
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    DocumentListComponent.prototype.loadAllItems = function (table, variable, condition) {
        var _this = this;
        this.service.getAll(table, condition).subscribe(function (data) {
            _this[variable] = data;
        });
    };
    DocumentListComponent.prototype.ngOnInit = function () {
        this.get_documents();
    };
    DocumentListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    DocumentListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/components/documents/list/list.component.html"),
            styles: [__webpack_require__("./src/app/components/documents/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__helpers_local_storage__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__accounts_service_account_service__["a" /* AccountService */]])
    ], DocumentListComponent);
    return DocumentListComponent;
}());



/***/ }),

/***/ "./src/app/components/documents/list/row/row.component.html":
/***/ (function(module, exports) {

module.exports = "<td class=\"align-middle text-uppercase\">\n  document-{{document.id}}\n</td>\n<td class=\"text-capitalize align-middle\">\n  {{document.title}}\n</td>\n<td class=\"align-middle\">\n  <ng-container *ngFor=\"let account of document.accounts; index as i\">\n    <ng-container *ngIf=\"i <= 2\">\n      <span class=\"avatar avatar--inline radius small\" [style.background]=\"account.avatar_color\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{account.firstname}} {{account.lastname}}\">\n        {{account.firstname | slice:0:1}}\n      </span>\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"document.accounts.length == 0\">\n    <p class=\"mb-0\">Nessun utente</p>\n  </ng-container>\n  <ng-container *ngIf=\"document.accounts.length > 3\">\n    <span class=\"navbar-notification nav-item dropdown\">\n      <a class=\"avatar avatar--inline radius small bg--white\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        + {{document.accounts.length - 3}}\n      </a>\n      <div class=\"dropdown-menu p-all-side-5 mt-5\">\n        <ng-container *ngFor=\"let account of document.accounts; index as i\">\n          <p *ngIf=\"i > 2\" class=\"mb-0\">\n            <span class=\"avatar radius small mr-2\" [style.background]=\"account.avatar_color\">\n              {{account.firstname | slice:0:1}}\n            </span>\n            <small>{{account.firstname}} {{account.lastname}}</small>\n          </p>\n        </ng-container>\n      </div>\n    </span>\n  </ng-container>\n</td>\n<td class=\"align-middle\">{{document.created_by.firstname}} {{document.created_by.lastname}}</td>\n<td class=\"text-right\">\n  <a [routerLink]=\"['/documents', document.id]\" class=\"btn btn-info\" title=\"Info\">\n    <i class=\"fa fa-info text--shadow\" aria-hidden=\"true\"></i>\n  </a>\n  <a [routerLink]=\"['/documents', document.id]\" class=\"btn btn-success\" title=\"Modifica\">\n    <i class=\"fa fa-pencil text--shadow\" aria-hidden=\"true\"></i>\n  </a>\n  <button [ngClass]=\"{ 'disabled': document.created_by.id != account_id && account_profile != 0 }\" class=\"btn btn-warning\" title=\"Archivia\"\n    [swal]=\"{ title: 'Sei sicuro di volerlo archiviare?', text: 'Sarà possibile ripristinarlo successivamente.', showCancelButton: true }\" (confirm)=\"archiveIt()\">\n    <i class=\"fa fa-archive text--shadow\" aria-hidden=\"true\"></i>\n  </button>\n  <button [ngClass]=\"{ 'disabled': document.created_by.id != account_id && account_profile != 0 }\" class=\"btn btn-danger\" title=\"Cancella\"\n    [swal]=\"{ title: 'Sei sicuro di volerlo cancellare?', text: 'Non sarà più possibile recuperarlo.', showCancelButton: true }\" (confirm)=\"deleteIt()\">\n    <i class=\"fa fa-trash text--shadow\" aria-hidden=\"true\"></i>\n  </button>\n</td>\n"

/***/ }),

/***/ "./src/app/components/documents/list/row/row.component.scss":
/***/ (function(module, exports) {

module.exports = ".avatar--inline {\n  margin-left: -10px;\n  position: relative; }\n  .avatar--inline:hover {\n    z-index: 9999;\n    top: -3px; }\n"

/***/ }),

/***/ "./src/app/components/documents/list/row/row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentListRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services


var DocumentListRowComponent = /** @class */ (function () {
    function DocumentListRowComponent(service, messageService) {
        this.service = service;
        this.messageService = messageService;
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
    }
    DocumentListRowComponent.prototype.archiveIt = function () {
        var _this = this;
        var index = this.documents.indexOf(this.document);
        var archived = {
            "archived": true,
            "updated_by": this.account_id
        };
        var subscription = this.service.archived("documents", this.document.id, archived).subscribe(function (data) {
            _this.documents.splice(index, 1);
            _this.messageService.setMessage('archive');
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    DocumentListRowComponent.prototype.deleteIt = function () {
        var _this = this;
        var index = this.documents.indexOf(this.document);
        var subscription = this.service.delete("documents", "id", this.document.id).subscribe(function (data) {
            _this.documents.splice(index, 1);
            _this.messageService.setMessage('delete');
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    DocumentListRowComponent.prototype.ngOnInit = function () { };
    DocumentListRowComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], DocumentListRowComponent.prototype, "document", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], DocumentListRowComponent.prototype, "documents", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], DocumentListRowComponent.prototype, "account_id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], DocumentListRowComponent.prototype, "account_profile", void 0);
    DocumentListRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[documents-list-row]',
            template: __webpack_require__("./src/app/components/documents/list/row/row.component.html"),
            styles: [__webpack_require__("./src/app/components/documents/list/row/row.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]])
    ], DocumentListRowComponent);
    return DocumentListRowComponent;
}());



/***/ }),

/***/ "./src/app/components/documents/shared-documents-with/shared-documents-with.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mboth-20 clearfix sharewith-list\">\n  <span class=\"sharewith-list__item badge bg--main mr-2 pull-left d-table\" *ngFor=\"let account of document.accounts\">\n    <span class=\"weight--regular\">{{account.firstname}} {{account.lastname}}</span>\n    <button (click)=\"removeIt(account)\" class=\"btn btn-link text--white p-all-side-0 ml-2\" *ngIf=\"account.id != account_id\"><i class=\"fa fa-close\"></i></button>\n  </span>\n</div>\n"

/***/ }),

/***/ "./src/app/components/documents/shared-documents-with/shared-documents-with.component.scss":
/***/ (function(module, exports) {

module.exports = ".sharewith-list__item {\n  height: 30px;\n  line-height: 30px;\n  padding: 0.15em .6em;\n  opacity: 0.5;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/components/documents/shared-documents-with/shared-documents-with.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedDocumentsWithComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_timezone__ = __webpack_require__("./src/app/helpers/timezone.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services


// Helpers

var SharedDocumentsWithComponent = /** @class */ (function () {
    function SharedDocumentsWithComponent(service, timezone, messageService) {
        this.service = service;
        this.timezone = timezone;
        this.messageService = messageService;
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
    }
    SharedDocumentsWithComponent.prototype.removeIt = function (account) {
        var _this = this;
        // Request
        var query;
        if (this.document.updated_at != null) {
            query = "id=eq." + this.document.id + "&" + "updated_at=eq." + this.document.updated_at;
        }
        else {
            query = "id=eq." + this.document.id;
        }
        // end
        // Remove assigne id from model for assignees list
        this.document.share_with.splice(this.document.share_with.indexOf(account.id), 1);
        // end
        // Create obj to send for upload
        var upload_document = {
            "updated_by": this.account_id,
            "updated_at": this.timezone.getCurrentDate(),
            "share_with": "{" + this.document.share_with.join(",") + "}"
        };
        // end
        var subscription = this.service.update("documents", query, upload_document).subscribe(function (data) {
            _this.messageService.setMessage('success');
            _this.document.updated_at = upload_document.updated_at;
            // Remove assignee selected from view
            _this.document.accounts.splice(_this.document.accounts.indexOf(account), 1);
            // end
        }, function (err) {
            _this.messageService.setMessage('overwrite');
            console.log(err);
        });
        this.sub.add(subscription);
    };
    SharedDocumentsWithComponent.prototype.ngOnInit = function () { };
    SharedDocumentsWithComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SharedDocumentsWithComponent.prototype, "document", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SharedDocumentsWithComponent.prototype, "account_id", void 0);
    SharedDocumentsWithComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'shared-documents-with',
            template: __webpack_require__("./src/app/components/documents/shared-documents-with/shared-documents-with.component.html"),
            styles: [__webpack_require__("./src/app/components/documents/shared-documents-with/shared-documents-with.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_4__helpers_timezone__["a" /* Timezone */],
            __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]])
    ], SharedDocumentsWithComponent);
    return SharedDocumentsWithComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/breadcrumb/breadcrumb.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"breadcrumb\" *ngIf=\"breadcrumbs\">\n  <li *ngFor=\"let breadcrumb of breadcrumbs\"\n      class=\"breadcrumb-item\">\n    <a routerLink=\"{{breadcrumb.url}}\">\n      {{ breadcrumb.label }}\n    </a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/layout/breadcrumb/breadcrumb.component.scss":
/***/ (function(module, exports) {

module.exports = ".breadcrumb {\n  border-radius: 0;\n  margin-bottom: 0;\n  padding: 1rem; }\n  .breadcrumb-item a {\n    font-size: 0.8rem; }\n"

/***/ }),

/***/ "./src/app/components/layout/breadcrumb/breadcrumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BreadcrumbComponent = /** @class */ (function () {
    function BreadcrumbComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    BreadcrumbComponent.prototype.getBreadcrumbs = function (route, url, breadcrumbs) {
        if (url === void 0) { url = ""; }
        if (breadcrumbs === void 0) { breadcrumbs = []; }
        var ROUTE_DATA_BREADCRUMB = "breadcrumb";
        //debugger
        //get the child routes
        var children = route.children;
        //return if there are no more children
        if (children.length === 0) {
            return breadcrumbs;
        }
        //iterate over each children
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            //verify primary route
            // if (child.outlet !== PRIMARY_OUTLET || child.snapshot.url.length == 0) {
            //   continue;
            // }
            //verify the custom data property "breadcrumb" is specified on the route
            if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                return this.getBreadcrumbs(child, url, breadcrumbs);
            }
            //get the route's URL segment
            var routeURL = child.snapshot.url.map(function (segment) { return segment.path; }).join("/");
            //append route URL to URL
            url += "/" + routeURL;
            //add breadcrumb
            var breadcrumb = {
                label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
                url: url
            };
            breadcrumbs.push(breadcrumb);
            //recursive
            return this.getBreadcrumbs(child, url, breadcrumbs);
        }
        return breadcrumbs;
    };
    BreadcrumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        var breadcrumb = {
            label: 'Home',
            url: ''
        };
        this.router.events.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["filter"])(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; })).subscribe(function (event) {
            //set breadcrumbs
            var root = _this.route.root;
            _this.breadcrumbs = _this.getBreadcrumbs(root);
            _this.breadcrumbs = [breadcrumb].concat(_this.breadcrumbs);
        });
    };
    BreadcrumbComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'breadcrumb',
            template: __webpack_require__("./src/app/components/layout/breadcrumb/breadcrumb.component.html"),
            styles: [__webpack_require__("./src/app/components/layout/breadcrumb/breadcrumb.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/dashboard/addressbook-list/addressbook-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card light card-addressbook mb-30\">\n  <div class=\"card-header text-uppercase\">\n  \tRubrica clienti\n    <a [routerLink]=\"['/addressbook/add']\" class=\"btn card-addressbook__header-button btn-dark btn--shadow pull-right\">\n      <i class=\"fa fa-plus\"></i>\n    </a>\n  </div>\n  <div class=\"card-body card-addressbook__list p-all-side-0\" #list>\n    <div *ngIf=\"customer_contacts.length; else noAddressbook\">\n      <div class=\"card-addressbook__list-item d-flex align-items-center\" *ngFor=\"let contact of customer_contacts\">\n        <div class=\"flex-fill\">\n          <a [routerLink]=\"['/addressbook', contact.id]\" class=\"task-list__link\">\n            <p class=\"mb-0 text-capitalize weight--regular text-black-50\">{{contact.company}}</p>\n            <small class=\"text-black-50 weight--light\">{{contact.email}}</small>\n          </a>\n        </div>\n        <div class=\"flex-fill text-right\">\n          <p class=\"pr-4 mb-0\" *ngIf=\"contact.mobilephone\">\n            <i class=\"fa fa-phone mr-2 text--main_color\" aria-hidden=\"true\"></i>\n            <span class=\"text-black-50\">{{contact.mobilephone}}</span>\n          </p>\n        </div>\n      </div>\n    </div>\n    <ng-template #noAddressbook>\n      <div class=\"p-all-side-25\">\n        <message-notrecords [message]=\"'Non sono presenti clienti in rubrica.'\"></message-notrecords>\n      </div>\n    </ng-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/layout/dashboard/addressbook-list/addressbook-list.component.scss":
/***/ (function(module, exports) {

module.exports = ".card-addressbook__header-button {\n  padding: 5px 10px; }\n\n.card-addressbook__list {\n  overflow-y: auto;\n  max-height: 250px; }\n\n.card-addressbook__list-item {\n    border: 0;\n    padding: .8rem 2.083rem;\n    background-color: transparent !important;\n    -webkit-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out; }\n\n.card-addressbook__list-item:hover {\n      background-color: #F7F7FA !important;\n      z-index: 0; }\n\n.card-addressbook__list-item:hover a {\n        text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/components/layout/dashboard/addressbook-list/addressbook-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardAddressbookListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services

var CardAddressbookListComponent = /** @class */ (function () {
    function CardAddressbookListComponent(service) {
        this.service = service;
        this.customer_contacts = [];
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
    }
    CardAddressbookListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var subscription = this.service.getAll("addressbook", "not_archived").subscribe(function (data) {
            _this.customer_contacts = data;
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    CardAddressbookListComponent.prototype.ngAfterViewInit = function () {
        var list = this.list.nativeElement;
        $(list).niceScroll({
            cursorwidth: "5px",
            zindex: "auto",
            cursorcolor: "#7e7e7e"
        });
    };
    CardAddressbookListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('list'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CardAddressbookListComponent.prototype, "list", void 0);
    CardAddressbookListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'card-addressbook-list',
            template: __webpack_require__("./src/app/components/layout/dashboard/addressbook-list/addressbook-list.component.html"),
            styles: [__webpack_require__("./src/app/components/layout/dashboard/addressbook-list/addressbook-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */]])
    ], CardAddressbookListComponent);
    return CardAddressbookListComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-all-side-40\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <card-team-members></card-team-members>\n      <card-addressbook-list></card-addressbook-list>\n    </div>\n    <div class=\"col\">\n      <card-ticket-list></card-ticket-list>\n      <card-note-list [account]=\"account\"></card-note-list>\n      <card-document-list></card-document-list>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/layout/dashboard/dashboard.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/layout/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_local_storage__ = __webpack_require__("./src/app/helpers/local-storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accounts_service_account_service__ = __webpack_require__("./src/app/components/accounts/service/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(lsService, messageService, accountService) {
        this.lsService = lsService;
        this.messageService = messageService;
        this.accountService = accountService;
        this.sendMessage();
        this.account = JSON.parse(this.lsService.get("account"));
        // this.accountService.logged_account.subscribe(
        //   (res: any) => {
        //     this.account = res;
        //   }
        // );
    }
    DashboardComponent.prototype.sendMessage = function () {
        // send message to subscribers via observable subject
        this.messageService.setMessage('Message from Home Component to App Component!');
    };
    DashboardComponent.prototype.clearMessage = function () {
        // clear message
        this.messageService.clearMessage();
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/components/layout/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/components/layout/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__helpers_local_storage__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_1__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_3__accounts_service_account_service__["a" /* AccountService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/dashboard/document-list/document-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card light card-documents mb-30\">\n  <div class=\"card-header text-uppercase\">\n  \tI tuoi documenti\n    <a [routerLink]=\"['/documents/add']\" class=\"btn card-documents__header-button btn-dark btn--shadow pull-right\">\n      <i class=\"fa fa-plus\"></i>\n    </a>\n  </div>\n  <div class=\"card-body card-documents__list p-all-side-0\" #list>\n    <div *ngIf=\"documents.length; else noDocuments\">\n      <div class=\"card-documents__list-item d-flex align-items-center\" *ngFor=\"let document of documents\">\n        <div class=\"flex-fill\">\n          <a [routerLink]=\"['/documents', document.id]\" class=\"task-list__link text-capitalize\">\n            <span class=\"text-black-50 weight--regular\">{{document.title}}</span><br>\n            <small class=\"text-black-50 weight--light\">Creato da: {{document.account.firstname}} {{document.account.lastname}}</small>\n          </a>\n        </div>\n        <div class=\"flex-fill text-right\">\n\n        </div>\n      </div>\n    </div>\n    <ng-template #noDocuments>\n      <div class=\"p-all-side-25\">\n        <message-notrecords [message]=\"'Non ci sono documenti salvati.'\"></message-notrecords>\n      </div>\n    </ng-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/layout/dashboard/document-list/document-list.component.scss":
/***/ (function(module, exports) {

module.exports = ".card-documents__header-button {\n  padding: 5px 10px; }\n\n.card-documents__list {\n  overflow-y: auto;\n  max-height: 250px; }\n\n.card-documents__list-item {\n    border: 0;\n    padding: .8rem 2.083rem;\n    background-color: transparent !important;\n    -webkit-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out; }\n\n.card-documents__list-item:hover {\n      background-color: #F7F7FA !important;\n      z-index: 0; }\n\n.card-documents__list-item:hover a {\n        text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/components/layout/dashboard/document-list/document-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardDocumentListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accounts_service_account_service__ = __webpack_require__("./src/app/components/accounts/service/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_local_storage__ = __webpack_require__("./src/app/helpers/local-storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services


// Helpers

var CardDocumentListComponent = /** @class */ (function () {
    function CardDocumentListComponent(service, accountService, lsService) {
        this.service = service;
        this.accountService = accountService;
        this.lsService = lsService;
        this.documents = [];
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
    }
    CardDocumentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var account_id = +this.lsService.get("accountId");
        var query = "share_with=cs." + "{" + account_id + "}" + "&" + "archived=" + "is.false" + "&select=*, account: accounts(firstname, lastname)";
        ;
        var subscription = this.service.getRecords("documents", query).subscribe(function (data) {
            _this.documents = data;
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    CardDocumentListComponent.prototype.ngAfterViewInit = function () {
        var list = this.list.nativeElement;
        $(list).niceScroll({
            cursorwidth: "5px",
            zindex: "auto",
            cursorcolor: "#7e7e7e"
        });
    };
    CardDocumentListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('list'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CardDocumentListComponent.prototype, "list", void 0);
    CardDocumentListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'card-document-list',
            template: __webpack_require__("./src/app/components/layout/dashboard/document-list/document-list.component.html"),
            styles: [__webpack_require__("./src/app/components/layout/dashboard/document-list/document-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__accounts_service_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_4__helpers_local_storage__["a" /* LocalStorageService */]])
    ], CardDocumentListComponent);
    return CardDocumentListComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/dashboard/note-list/note-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card light card-notes mb-30\">\n  <div class=\"card-header text-uppercase\">\n  \tI tuoi appunti\n    <a [routerLink]=\"['/notes/add']\" class=\"btn card-notes__header-button btn-dark btn--shadow pull-right\">\n      <i class=\"fa fa-plus\"></i>\n    </a>\n  </div>\n  <div class=\"card-body card-notes__list p-all-side-0\" #list>\n    <div *ngIf=\"notes.length; else noNotes\">\n      <div class=\"card-notes__list-item d-flex align-items-center\" *ngFor=\"let note of notes\">\n        <div class=\"flex-fill\">\n          <a [routerLink]=\"['/notes', note.id]\" class=\"notes-list__link\">\n            <div class=\"mb-5\">\n              <small>\n                <i class=\"fa fa-calendar mr-2 text--main_color\"></i>\n                <span class=\"text-black-50\">\n                  {{note.alarm_date | date: 'dd'}}/{{note.alarm_date | date:'MM'}}/{{note.alarm_date | date: 'yyyy'}}\n                </span>\n              </small>\n              <span class=\"ml-2 mr-2\">|</span>\n              <small>\n                <i class=\"fa fa-clock-o mr-2 text--main_color\"></i>\n                <span class=\"text-black-50\">{{note.alarm_time}}</span>\n              </small>\n            </div>\n            <p class=\"text-capitalize mb-0 text-body text-black-50 weight--regular\">{{note.title}}</p>\n          </a>\n        </div>\n        <div class=\"flex-fill text-right\">\n\n        </div>\n      </div>\n    </div>\n    <ng-template #noNotes>\n      <div class=\"p-all-side-25\">\n        <message-notrecords [message]=\"'Non sono presenti appunti per oggi.'\"></message-notrecords>\n      </div>\n    </ng-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/layout/dashboard/note-list/note-list.component.scss":
/***/ (function(module, exports) {

module.exports = ".card-notes__header-button {\n  padding: 5px 10px; }\n\n.card-notes__list {\n  overflow-y: auto;\n  max-height: 250px; }\n\n.card-notes__list-item {\n    border: 0;\n    padding: .8rem 2.083rem;\n    background-color: transparent !important;\n    -webkit-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out; }\n\n.card-notes__list-item:hover {\n      background-color: #F7F7FA !important;\n      z-index: 0; }\n\n.card-notes__list-item:hover a {\n        text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/components/layout/dashboard/note-list/note-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardNoteListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accounts_service_account_service__ = __webpack_require__("./src/app/components/accounts/service/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services


var CardNoteListComponent = /** @class */ (function () {
    function CardNoteListComponent(accountService, service) {
        this.accountService = accountService;
        this.service = service;
        this.notes = [];
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
    }
    CardNoteListComponent.prototype.get_notes = function () {
        var _this = this;
        var query = "account_id=eq." + this.account.id + "&archived=" + "is.false";
        var subscription = this.service.getRecords("notes", query).subscribe(function (data) {
            _this.notes = data;
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    CardNoteListComponent.prototype.ngOnInit = function () {
        this.get_notes();
    };
    CardNoteListComponent.prototype.ngAfterViewInit = function () {
        var list = this.list.nativeElement;
        $(list).niceScroll({
            cursorwidth: "5px",
            zindex: "auto",
            cursorcolor: "#7e7e7e"
        });
    };
    CardNoteListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CardNoteListComponent.prototype, "account", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('list'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CardNoteListComponent.prototype, "list", void 0);
    CardNoteListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'card-note-list',
            template: __webpack_require__("./src/app/components/layout/dashboard/note-list/note-list.component.html"),
            styles: [__webpack_require__("./src/app/components/layout/dashboard/note-list/note-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__accounts_service_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */]])
    ], CardNoteListComponent);
    return CardNoteListComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/dashboard/team-members/team-members.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card light card-team-members mb-30\">\n  <div class=\"card-header text-uppercase\">\n  \tMembri del team\n  </div>\n  <div class=\"card-body card-team-members__list p-all-side-0\" #list>\n    <div class=\"d-flex card-team-members__list-item\" *ngFor=\"let account of accounts\">\n      <div>\n        <span class=\"avatar radius small reset-height mr-3 text--white\" [style.background-color]=\"account.avatar_color\">\n          {{account.firstname | slice:0:1}}\n        </span>\n      </div>\n      <div>\n        <p class=\"mb-0 text-capitalize weight--regular text-black-50\">{{account.firstname}} {{account.lastname}}</p>\n        <small class=\"text-black-50 weight--light\">{{account.email}}</small>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/layout/dashboard/team-members/team-members.component.scss":
/***/ (function(module, exports) {

module.exports = ".card-team-members__list {\n  overflow-y: auto;\n  max-height: 250px; }\n  .card-team-members__list-item {\n    padding: .8rem 2.083rem;\n    -webkit-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out; }\n  .card-team-members__list-item:hover {\n      background-color: #F7F7FA; }\n"

/***/ }),

/***/ "./src/app/components/layout/dashboard/team-members/team-members.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardTeamMembersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services

var CardTeamMembersComponent = /** @class */ (function () {
    function CardTeamMembersComponent(service) {
        this.service = service;
        this.accounts = [];
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
        this.loadAllItems("accounts", "accounts", "not_deleted");
    }
    CardTeamMembersComponent.prototype.loadAllItems = function (table, variable, condition) {
        var _this = this;
        var subscription = this.service.getAll(table, condition).subscribe(function (data) {
            _this[variable] = data;
        });
        this.sub.add(subscription);
    };
    CardTeamMembersComponent.prototype.ngOnInit = function () {
    };
    CardTeamMembersComponent.prototype.ngAfterViewInit = function () {
        var list = this.list.nativeElement;
        $(list).niceScroll({
            cursorwidth: "5px",
            zindex: "auto",
            cursorcolor: "#7e7e7e"
        });
    };
    CardTeamMembersComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('list'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CardTeamMembersComponent.prototype, "list", void 0);
    CardTeamMembersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'card-team-members',
            template: __webpack_require__("./src/app/components/layout/dashboard/team-members/team-members.component.html"),
            styles: [__webpack_require__("./src/app/components/layout/dashboard/team-members/team-members.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */]])
    ], CardTeamMembersComponent);
    return CardTeamMembersComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/dashboard/ticket-list/ticket-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card light card-tickets mb-30\">\n  <div class=\"card-header text-uppercase\">\n  \tI tuoi Ticket\n    <a [routerLink]=\"['/tickets/add']\" class=\"btn card-tickets__header-button btn-dark btn--shadow pull-right\">\n      <i class=\"fa fa-plus\"></i>\n    </a>\n  </div>\n  <div class=\"card-body card-tickets__list p-all-side-0\" #list>\n    <div *ngIf=\"tickets.length; else noTickets\">\n      <div class=\"card-tickets__list-item d-flex align-items-center\" *ngFor=\"let ticket of tickets\">\n        <div class=\"flex-fill\">\n          <a [routerLink]=\"['/tickets', ticket.id]\" class=\"task-list__link text-capitalize\">\n            <span class=\"text-black-50 weight--regular\">{{ticket.title}}</span><br>\n            <small class=\"text-black-50 weight--light\">Creato da: {{ticket.reporter.firstname}} {{ticket.reporter.lastname}}</small>\n          </a>\n        </div>\n        <div class=\"flex-fill text-right\">\n          <switch-status [status]=\"ticket.status\"></switch-status>\n        </div>\n      </div>\n    </div>\n    <ng-template #noTickets>\n      <div class=\"p-all-side-25\">\n        <message-notrecords [message]=\"'Non ci sono ticket assegnati a te.'\"></message-notrecords>\n      </div>\n    </ng-template>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/layout/dashboard/ticket-list/ticket-list.component.scss":
/***/ (function(module, exports) {

module.exports = ".card-tickets__header-button {\n  padding: 5px 10px; }\n\n.card-tickets__list {\n  overflow-y: auto;\n  max-height: 250px; }\n\n.card-tickets__list-item {\n    border: 0;\n    padding: .8rem 2.083rem;\n    background-color: transparent !important;\n    -webkit-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out; }\n\n.card-tickets__list-item:hover {\n      background-color: #F7F7FA !important;\n      z-index: 0; }\n\n.card-tickets__list-item:hover a {\n        text-decoration: none; }\n"

/***/ }),

/***/ "./src/app/components/layout/dashboard/ticket-list/ticket-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardTicketListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_local_storage__ = __webpack_require__("./src/app/helpers/local-storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services

// Helpers

var CardTicketListComponent = /** @class */ (function () {
    function CardTicketListComponent(service, lsService) {
        this.service = service;
        this.lsService = lsService;
        this.tickets = [];
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
    }
    CardTicketListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var account_id = this.lsService.get('accountId');
        var query = "assignees_id=cs." + "{" + account_id + "}" + "&" + "archived=" + "is.false" + "&" + "status=neq." + "3" + "&select=*, reporter: accounts(firstname, lastname)";
        var subscription = this.service.getRecords("tickets", query).subscribe(function (data) {
            _this.tickets = data;
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    CardTicketListComponent.prototype.ngAfterViewInit = function () {
        var list = this.list.nativeElement;
        $(list).niceScroll({
            cursorwidth: "5px",
            zindex: "auto",
            cursorcolor: "#7e7e7e"
        });
    };
    CardTicketListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('list'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CardTicketListComponent.prototype, "list", void 0);
    CardTicketListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'card-ticket-list',
            template: __webpack_require__("./src/app/components/layout/dashboard/ticket-list/ticket-list.component.html"),
            styles: [__webpack_require__("./src/app/components/layout/dashboard/ticket-list/ticket-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__helpers_local_storage__["a" /* LocalStorageService */]])
    ], CardTicketListComponent);
    return CardTicketListComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"header\" class=\"navbar navbar-expand navbar-fixed-top\">\n  <div class=\"navbar-nav-scroll\">\n    <button (click)=\"hideSidebar()\" class=\"text--main_color bg--transparent border-0\">\n      <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n    </button>\n  </div>\n  <div class=\"flex-row ml-auto d-flex align-items-center\">\n    <span *ngIf=\"message\">{{message.text}}</span>\n    <dropdown-icon-nav [icon_class]=\"'bell'\" [list]=\"notes\"></dropdown-icon-nav>\n    <profile-main-nav [account]=\"account\"></profile-main-nav>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = "#header {\n  background-color: white;\n  -webkit-box-shadow: 0 2px 23px 0 rgba(0, 0, 0, 0.1), 0 2px 49px 0 rgba(0, 0, 0, 0.06);\n  box-shadow: 0 2px 23px 0 rgba(0, 0, 0, 0.1), 0 2px 49px 0 rgba(0, 0, 0, 0.06);\n  padding: 1rem 1rem 0.9rem;\n  margin: 0 0 0 260px;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  z-index: 9999; }\n  #header.hide {\n    margin-left: 0; }\n  #header .logo {\n    text-align: left;\n    color: white;\n    margin-top: 15px; }\n"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accounts_service_account_service__ = __webpack_require__("./src/app/components/accounts/service/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_timezone__ = __webpack_require__("./src/app/helpers/timezone.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services


// Helpers

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(service, accountService, timezoneHelper) {
        this.service = service;
        this.accountService = accountService;
        this.timezoneHelper = timezoneHelper;
        this.notes = [];
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
        this.current_day = "";
        this.current_day = this.splitTimeZoneDate(this.timezoneHelper.getCurrentDate());
    }
    HeaderComponent.prototype.splitTimeZoneDate = function (current_date) {
        return current_date.split("T")[0];
    };
    HeaderComponent.prototype.getNotesCurrentDay = function () {
        var _this = this;
        var query = "account_id=eq." + this.account.id + "&archived=" + "is.false" + "&alarm_date=eq." + this.current_day;
        var subscription = this.service.getRecords("notes", query).subscribe(function (data) {
            _this.notes = data;
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    HeaderComponent.prototype.hideSidebar = function () {
        $("#aside").toggleClass("hide");
        $("#main-container").toggleClass("hide");
        $("#header").toggleClass("hide");
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.getNotesCurrentDay();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "account", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], HeaderComponent.prototype, "notes", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/components/layout/header/header.component.html"),
            styles: [__webpack_require__("./src/app/components/layout/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__accounts_service_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_4__helpers_timezone__["a" /* Timezone */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/header/main-nav/main-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"navbar-nav bd-navbar-nav flex-row main-nav\">\n  <li class=\"nav-item\" [class.active]=\"router.url==='/'\">\n    <a class=\"nav-link weight--light\" [routerLink]=\"['/']\">Dashboard</a>\n  </li>\n  <li class=\"nav-item dropdown\" [class.active]=\"router.url==='/notes/add' || router.url==='/notes/list' || router.url==='/notes/archived'\">\n    <a class=\"nav-link weight--light dropdown-toggle\" data-toggle=\"dropdown\" aria-controls=\"dropdown-basic\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      Tickets\n    </a>\n    <div class=\"dropdown-menu\">\n      <a class=\"dropdown-item\" [routerLink]=\"['/tickets/add']\">Crea nuovo</a>\n      <a class=\"dropdown-item\" [routerLink]=\"['/tickets/list']\">Lista</a>\n      <a class=\"dropdown-item\" [routerLink]=\"['/tickets/archived']\">Archiviati</a>\n    </div>\n  </li>\n  <li class=\"nav-item dropdown\" [class.active]=\"router.url==='/notes/add' || router.url==='/notes/list' || router.url==='/notes/archived'\">\n    <a class=\"nav-link weight--light dropdown-toggle\" data-toggle=\"dropdown\" aria-controls=\"dropdown-basic\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      Appunti\n    </a>\n    <div class=\"dropdown-menu\">\n      <a class=\"dropdown-item\" [routerLink]=\"['/notes/add']\">Crea nuovo</a>\n      <a class=\"dropdown-item\" [routerLink]=\"['/notes/list']\">Lista</a>\n      <a class=\"dropdown-item\" [routerLink]=\"['/notes/archived']\">Archiviati</a>\n    </div>\n  </li>\n  <li class=\"nav-item dropdown\" [class.active]=\"router.url==='/addressbook/add' || router.url==='/addressbook/list' || router.url==='/addressbook/archived'\">\n    <a class=\"nav-link weight--light dropdown-toggle\" data-toggle=\"dropdown\" aria-controls=\"dropdown-basic\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      Rubrica\n    </a>\n    <div class=\"dropdown-menu\">\n      <a class=\"dropdown-item\" [routerLink]=\"['/addressbook/add']\">Crea nuovo</a>\n      <a class=\"dropdown-item\" [routerLink]=\"['/addressbook/list']\">Lista</a>\n      <a class=\"dropdown-item\" [routerLink]=\"['/addressbook/archived']\">Archiviati</a>\n    </div>\n  </li>\n  <li class=\"nav-item dropdown\" *ngIf=\"account_profile == 0\" [class.active]=\"router.url==='/accounts/add' || router.url==='/accounts/list' || router.url==='/accounts/archived'\">\n    <a class=\"nav-link weight--light dropdown-toggle\" data-toggle=\"dropdown\" aria-controls=\"dropdown-basic\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      Amministrazione\n    </a>\n    <div class=\"dropdown-menu\">\n      <a class=\"dropdown-item\" [routerLink]=\"['/accounts/add']\">Crea nuovo</a>\n      <a class=\"dropdown-item\" [routerLink]=\"['/accounts/list']\">Lista</a>\n      <a class=\"dropdown-item\" [routerLink]=\"['/accounts/archived']\">Archiviati</a>\n    </div>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/layout/header/main-nav/main-nav.component.scss":
/***/ (function(module, exports) {

module.exports = ".main-nav .nav-link {\n  color: white; }\n"

/***/ }),

/***/ "./src/app/components/layout/header/main-nav/main-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderMainNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_local_storage__ = __webpack_require__("./src/app/helpers/local-storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Helpers

var HeaderMainNavComponent = /** @class */ (function () {
    function HeaderMainNavComponent(router, lsService) {
        this.router = router;
        this.lsService = lsService;
    }
    HeaderMainNavComponent.prototype.ngOnInit = function () {
        this.account_profile = +this.lsService.get('accountProfile');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], HeaderMainNavComponent.prototype, "account", void 0);
    HeaderMainNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'header-main-nav',
            template: __webpack_require__("./src/app/components/layout/header/main-nav/main-nav.component.html"),
            styles: [__webpack_require__("./src/app/components/layout/header/main-nav/main-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__helpers_local_storage__["a" /* LocalStorageService */]])
    ], HeaderMainNavComponent);
    return HeaderMainNavComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/header/profile-main-nav/profile-main-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"profile-nav navbar-nav ml-3\" *ngIf=\"account\">\n  <li class=\"nav-item dropdown\">\n    <a class=\"nav-link dropdown-toggle ml-md-2 d-block text-dark\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      <div class=\"d-inline-flex align-items-center align-middle\">\n        <i class=\"fa fa-cog pr-2\" aria-hidden=\"true\"></i>\n        <span class=\"align-self-center\" *ngIf=\"account.email; else showFullname\">{{account.email}}</span>\n        <ng-template #showFullname>\n          <span class=\"align-self-center text-capitalize\">{{account.firstname}} {{account.lastname}}</span>\n        </ng-template>\n      </div>\n    </a>\n    <div class=\"dropdown-menu arrow dropdown-menu-right mt-15\">\n      <a class=\"dropdown-item\" [routerLink]=\"['/profile']\">Impostazioni</a>\n      <a class=\"dropdown-item\" (click)=\"logout()\">Logout</a>\n    </div>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/layout/header/profile-main-nav/profile-main-nav.component.scss":
/***/ (function(module, exports) {

module.exports = ".profile-nav {\n  padding-bottom: 0;\n  padding-top: 0; }\n  .profile-nav .nav-link {\n    padding: 0;\n    color: white;\n    cursor: pointer; }\n  .profile-nav__avatar {\n    width: 25px;\n    height: 25px;\n    line-height: 25px;\n    border-radius: 50% !important;\n    text-align: center;\n    background-color: white;\n    margin-right: 5px; }\n"

/***/ }),

/***/ "./src/app/components/layout/header/profile-main-nav/profile-main-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileMainNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accounts_service_account_service__ = __webpack_require__("./src/app/components/accounts/service/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services

var ProfileMainNavComponent = /** @class */ (function () {
    function ProfileMainNavComponent(accountService) {
        this.accountService = accountService;
    }
    ProfileMainNavComponent.prototype.logout = function () {
        this.accountService.logout(this.account);
    };
    ProfileMainNavComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ProfileMainNavComponent.prototype, "account", void 0);
    ProfileMainNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'profile-main-nav',
            template: __webpack_require__("./src/app/components/layout/header/profile-main-nav/profile-main-nav.component.html"),
            styles: [__webpack_require__("./src/app/components/layout/header/profile-main-nav/profile-main-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__accounts_service_account_service__["a" /* AccountService */]])
    ], ProfileMainNavComponent);
    return ProfileMainNavComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/logged-layout/logged-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"app\" *ngIf=\"logged_account\">\n  <app-header [account]=\"logged_account\" [notes]=\"notes\"></app-header>\n  <div class=\"d-flex align-items-stretch flex-xl-nowrap\">\n    <aside id=\"aside\">\n      <logo></logo>\n      <sidebar-profile [account]=\"logged_account\"></sidebar-profile>\n      <sidebar-nav [account]=\"logged_account\"></sidebar-nav>\n    </aside>\n    <main id=\"main-container\" class=\"flex-grow-1\">\n      <notify-alert [account]=\"logged_account\"></notify-alert>\n      <breadcrumb></breadcrumb>\n      <div class=\"container\">\n      </div>\n      <router-outlet></router-outlet>\n    </main>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/layout/logged-layout/logged-layout.component.scss":
/***/ (function(module, exports) {

module.exports = "#aside {\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n  overflow-y: auto;\n  height: 100%;\n  width: 260px;\n  position: fixed;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  z-index: 9999;\n  background-color: #0094D4;\n  -webkit-box-shadow: 0 0 10px 0 rgba(33, 33, 33, 0.2);\n  box-shadow: 0 0 10px 0 rgba(33, 33, 33, 0.2); }\n  #aside.hide {\n    width: 0; }\n  #main-container {\n  margin-left: 260px;\n  margin-top: 71px; }\n  #main-container.hide {\n    margin-left: 0; }\n"

/***/ }),

/***/ "./src/app/components/layout/logged-layout/logged-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggedLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_event_source_listener_service__ = __webpack_require__("./src/app/services/event-source-listener.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notes_service_note_service__ = __webpack_require__("./src/app/components/notes/service/note.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accounts_service_account_service__ = __webpack_require__("./src/app/components/accounts/service/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_timezone__ = __webpack_require__("./src/app/helpers/timezone.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_local_storage__ = __webpack_require__("./src/app/helpers/local-storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services




// Helpers


var LoggedLayoutComponent = /** @class */ (function () {
    function LoggedLayoutComponent(noteService, lsService, service, eventSourceListenerService, timezoneHelper, accountService) {
        var _this = this;
        this.noteService = noteService;
        this.lsService = lsService;
        this.service = service;
        this.eventSourceListenerService = eventSourceListenerService;
        this.timezoneHelper = timezoneHelper;
        this.accountService = accountService;
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
        this.eventSourceListenerService.connect();
        var subscription = this.accountService.logged_account.subscribe(function (res) {
            if (res == null) {
                _this.logged_account = JSON.parse(_this.lsService.get("account"));
            }
            else {
                _this.logged_account = res;
            }
        });
        this.sub.add(subscription);
    }
    // listenNoteSubject() {
    //   this.noteService.notes.subscribe(
    //     (res: any) => {
    //       this.notes = res;
    //     }
    //   )
    // }
    LoggedLayoutComponent.prototype.ngOnInit = function () { };
    LoggedLayoutComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    LoggedLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-logged-layout',
            template: __webpack_require__("./src/app/components/layout/logged-layout/logged-layout.component.html"),
            styles: [__webpack_require__("./src/app/components/layout/logged-layout/logged-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__notes_service_note_service__["a" /* NoteService */],
            __WEBPACK_IMPORTED_MODULE_7__helpers_local_storage__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__services_event_source_listener_service__["a" /* EventSourceListenerService */],
            __WEBPACK_IMPORTED_MODULE_6__helpers_timezone__["a" /* Timezone */],
            __WEBPACK_IMPORTED_MODULE_5__accounts_service_account_service__["a" /* AccountService */]])
    ], LoggedLayoutComponent);
    return LoggedLayoutComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/logo/logo.component.html":
/***/ (function(module, exports) {

module.exports = "<a class=\"d-block text-center mboth-20 text-link-unstyled\" [routerLink]=\"['/']\">\n  <span id=\"logo\">Bracco</span>\n</a>\n"

/***/ }),

/***/ "./src/app/components/layout/logo/logo.component.scss":
/***/ (function(module, exports) {

module.exports = "#logo {\n  font-family: 'Luckiest Guy', cursive;\n  text-decoration: none;\n  color: white;\n  font-size: 30px;\n  line-height: normal;\n  text-transform: uppercase; }\n"

/***/ }),

/***/ "./src/app/components/layout/logo/logo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    LogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'logo',
            template: __webpack_require__("./src/app/components/layout/logo/logo.component.html"),
            styles: [__webpack_require__("./src/app/components/layout/logo/logo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/notlogged-layout/notlogged-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container d-flex align-self-stretch justify-content-center\">\n  <router-outlet></router-outlet>\n</div>\n<buddle-boxes></buddle-boxes>\n"

/***/ }),

/***/ "./src/app/components/layout/notlogged-layout/notlogged-layout.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #0094D4;\n  max-width: none;\n  width: 100%;\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/components/layout/notlogged-layout/notlogged-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotloggedLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotloggedLayoutComponent = /** @class */ (function () {
    function NotloggedLayoutComponent() {
    }
    NotloggedLayoutComponent.prototype.ngOnInit = function () {
    };
    NotloggedLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-notlogged-layout',
            template: __webpack_require__("./src/app/components/layout/notlogged-layout/notlogged-layout.component.html"),
            styles: [__webpack_require__("./src/app/components/layout/notlogged-layout/notlogged-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotloggedLayoutComponent);
    return NotloggedLayoutComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/sidebar/sidebar-nav/sidebar-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"sidebar-nav\" *ngIf=\"account\">\n  <ul class=\"nav nav-pills nav-stacked\" id=\"sidebar-nav\">\n    <li class=\"sidebar-nav__tab\" [class.active]=\"router.url==='/'\">\n      <a class=\"sidebar-nav__tab-link weight--light\" [routerLink]=\"['/']\">\n        <i class=\"fa fa-home pr-2 sidebar-nav__icon\" aria-hidden=\"true\"></i>\n        <span>Dashboard</span>\n      </a>\n    </li>\n    <li class=\"sidebar-nav__tab dropdown\" *ngIf=\"account.profile == 0\" [class.active]=\"router.url==='/accounts/add' || router.url==='/accounts' || router.url==='/accounts/archived'\">\n      <a href=\"#collapseAccounts\" aria-expanded=\"true\" data-toggle=\"collapse\" class=\"sidebar-nav__tab-link dropdown-toggle\">\n        <i class=\"fa fa-users sidebar-nav__icon\" aria-hidden=\"true\"></i>\n        <span class=\"sidebar-nav__tab-voice\">Dipendenti</span>\n      </a>\n      <nav class=\"sidebar-nav-submenu collapse in\" id=\"collapseAccounts\" aria-expanded=\"true\" data-parent=\"#sidebar-nav\">\n        <ul class=\"nav\">\n          <li class=\"sidebar-nav-submenu__tab\">\n            <a class=\"sidebar-nav-submenu__tab-link\" [routerLink]=\"['/accounts/add']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Crea nuovo</a>\n          </li>\n          <li class=\"sidebar-nav-submenu__tab\">\n            <a class=\"sidebar-nav-submenu__tab-link\" [routerLink]=\"['/accounts']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Lista</a>\n          </li>\n        </ul>\n      </nav>\n    </li>\n    <li class=\"sidebar-nav__tab dropdown\" [class.active]=\"router.url == '/tickets/add' || router.url==='/tickets' || router.url==='/tickets/archived'\">\n      <a href=\"#collapseTodo\" aria-expanded=\"true\" data-toggle=\"collapse\" class=\"sidebar-nav__tab-link dropdown-toggle\">\n        <i class=\"fa fa-list sidebar-nav__icon\" aria-hidden=\"true\"></i>\n        <span class=\"sidebar-nav__tab-voice\">Tickets</span>\n      </a>\n      <nav class=\"sidebar-nav-submenu collapse in\" id=\"collapseTodo\" aria-expanded=\"true\" data-parent=\"#sidebar-nav\">\n        <ul class=\"nav\">\n          <li class=\"sidebar-nav-submenu__tab\">\n            <a class=\"sidebar-nav-submenu__tab-link\" [routerLink]=\"['/tickets/add']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Crea nuovo</a>\n          </li>\n          <li class=\"sidebar-nav-submenu__tab\">\n            <a class=\"sidebar-nav-submenu__tab-link\" [routerLink]=\"['/tickets']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Lista</a>\n          </li>\n          <li class=\"sidebar-nav-submenu__tab\">\n            <a class=\"sidebar-nav-submenu__tab-link\" [routerLink]=\"['/tickets/archived']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Archiviati</a>\n          </li>\n        </ul>\n      </nav>\n    </li>\n    <li class=\"sidebar-nav__tab dropdown\" [class.active]=\"router.url==='/notes/add' || router.url==='/notes' || router.url==='/notes/archived'\">\n      <a href=\"#collapseNote\" aria-expanded=\"true\" data-toggle=\"collapse\" class=\"sidebar-nav__tab-link dropdown-toggle\">\n        <i class=\"fa fa-clipboard sidebar-nav__icon\" aria-hidden=\"true\"></i>\n        <span class=\"sidebar-nav__tab-voice\">Appunti</span>\n      </a>\n      <nav class=\"sidebar-nav-submenu collapse in\" id=\"collapseNote\" aria-expanded=\"true\" data-parent=\"#sidebar-nav\">\n        <ul class=\"nav\">\n          <li class=\"sidebar-nav-submenu__tab\">\n            <a class=\"sidebar-nav-submenu__tab-link\" [routerLink]=\"['/notes/add']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Crea nuovo</a>\n          </li>\n          <li class=\"sidebar-nav-submenu__tab\">\n            <a class=\"sidebar-nav-submenu__tab-link\" [routerLink]=\"['/notes']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Lista</a>\n          </li>\n          <li class=\"sidebar-nav-submenu__tab\">\n            <a class=\"sidebar-nav-submenu__tab-link\" [routerLink]=\"['/notes/archived']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Archiviati</a>\n          </li>\n        </ul>\n      </nav>\n    </li>\n    <li class=\"sidebar-nav__tab dropdown\" [class.active]=\"router.url==='/addressbook/add' || router.url==='/addressbook' || router.url==='/addressbook/archived'\">\n      <a href=\"#collapseAddressbook\" aria-expanded=\"true\" data-toggle=\"collapse\" class=\"sidebar-nav__tab-link dropdown-toggle\">\n        <i class=\"fa fa-address-book sidebar-nav__icon\" aria-hidden=\"true\"></i>\n        <span class=\"sidebar-nav__tab-voice\">Rubrica</span>\n      </a>\n      <nav class=\"sidebar-nav-submenu collapse in\" id=\"collapseAddressbook\" aria-expanded=\"true\" data-parent=\"#sidebar-nav\">\n        <ul class=\"nav\">\n          <li class=\"sidebar-nav-submenu__tab\">\n            <a class=\"sidebar-nav-submenu__tab-link\" [routerLink]=\"['/addressbook/add']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Crea nuovo</a>\n          </li>\n          <li class=\"sidebar-nav-submenu__tab\">\n            <a class=\"sidebar-nav-submenu__tab-link\" [routerLink]=\"['/addressbook']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Lista</a>\n          </li>\n          <li class=\"sidebar-nav-submenu__tab\">\n            <a class=\"sidebar-nav-submenu__tab-link\" [routerLink]=\"['/addressbook/archived']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Archiviati</a>\n          </li>\n        </ul>\n      </nav>\n    </li>\n    <li class=\"sidebar-nav__tab dropdown\" [class.active]=\"router.url==='/documents/add' || router.url==='/documents/list' || router.url==='/documents/archived'\">\n      <a href=\"#collapseDocument\" aria-expanded=\"true\" data-toggle=\"collapse\" class=\"sidebar-nav__tab-link dropdown-toggle\">\n        <i class=\"fa fa-clipboard sidebar-nav__icon\" aria-hidden=\"true\"></i>\n        <span class=\"sidebar-nav__tab-voice\">Documenti</span>\n      </a>\n      <nav class=\"sidebar-nav-submenu collapse in\" id=\"collapseDocument\" aria-expanded=\"true\" data-parent=\"#sidebar-nav\">\n        <ul class=\"nav\">\n          <li class=\"sidebar-nav-submenu__tab\">\n            <a class=\"sidebar-nav-submenu__tab-link\" [routerLink]=\"['/documents/add']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Crea nuovo</a>\n          </li>\n          <li class=\"sidebar-nav-submenu__tab\">\n            <a class=\"sidebar-nav-submenu__tab-link\" [routerLink]=\"['/documents/list']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Lista</a>\n          </li>\n          <li class=\"sidebar-nav-submenu__tab\">\n            <a class=\"sidebar-nav-submenu__tab-link\" [routerLink]=\"['/documents/archived']\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\">Archiviati</a>\n          </li>\n        </ul>\n      </nav>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/layout/sidebar/sidebar-nav/sidebar-nav.component.scss":
/***/ (function(module, exports) {

module.exports = ".sidebar-nav {\n  padding: 0 15px;\n  margin-bottom: 30px; }\n  .sidebar-nav__tab {\n    width: 100%; }\n  .sidebar-nav__tab-link {\n      display: block;\n      -webkit-transition: all 0.3s ease-out;\n      transition: all 0.3s ease-out;\n      padding: 10px;\n      position: relative;\n      font-size: 1em;\n      color: white;\n      font-weight: 300; }\n  .sidebar-nav__tab-link:hover {\n        text-decoration: none; }\n  .sidebar-nav__tab-link.dropdown-toggle::after {\n        position: absolute;\n        right: 13px;\n        top: 20px; }\n  .sidebar-nav__tab-arrow {\n      position: absolute;\n      right: 13px;\n      top: 13px; }\n  .sidebar-nav__tab-voice {\n      padding: 0 13px; }\n  .sidebar-nav__tab.active {\n      margin-bottom: 4px; }\n  .sidebar-nav__tab.active .sidebar-nav__tab-link {\n        background-color: #0070a1; }\n  .sidebar-nav-submenu__tab {\n    width: 100%; }\n  .sidebar-nav-submenu__tab-link {\n      display: block;\n      -webkit-transition: all 0.3s ease-out;\n      transition: all 0.3s ease-out;\n      padding: 5px 5px 5px 45px;\n      font-size: 1rem;\n      color: white !important;\n      font-weight: 300; }\n  .sidebar-nav-submenu__tab-link:hover {\n        color: #08b4ff !important;\n        text-decoration: none; }\n  .sidebar-nav-submenu__tab-link:active, .sidebar-nav-submenu__tab-link:focus, .sidebar-nav-submenu__tab-link.active {\n        color: #00293b !important; }\n"

/***/ }),

/***/ "./src/app/components/layout/sidebar/sidebar-nav/sidebar-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarNavComponent = /** @class */ (function () {
    function SidebarNavComponent(router) {
        this.router = router;
    }
    SidebarNavComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SidebarNavComponent.prototype, "account", void 0);
    SidebarNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sidebar-nav',
            template: __webpack_require__("./src/app/components/layout/sidebar/sidebar-nav/sidebar-nav.component.html"),
            styles: [__webpack_require__("./src/app/components/layout/sidebar/sidebar-nav/sidebar-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], SidebarNavComponent);
    return SidebarNavComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/sidebar/sidebar-profile/sidebar-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"account\" *ngIf=\"account\">\n  <div class=\"media\">\n    <span class=\"avatar radius small mr-3\" [style.background-color]=\"account.avatar_color\"></span>\n    <div class=\"media-body\">\n      <h5 class=\"mt-0 account__firstinfo text-capitalize\">{{account.firstname}} {{account.lastname}}</h5>\n      <small class=\"account__lastinfo\">{{account.email}}</small>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/layout/sidebar/sidebar-profile/sidebar-profile.component.scss":
/***/ (function(module, exports) {

module.exports = ".account {\n  margin-top: 15px;\n  margin-bottom: 15px;\n  position: relative; }\n  .account .media {\n    border-radius: 2px;\n    overflow: hidden;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: row;\n    flex-direction: row;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    cursor: pointer;\n    font-size: 12px;\n    background-color: #0070a1;\n    -webkit-transition: background-color 0.3s;\n    transition: background-color 0.3s;\n    padding: 10px; }\n  .account .media:hover {\n      background-color: #004d6e; }\n  .account__photo {\n    width: 40px;\n    height: 40px; }\n  .account__firstinfo {\n    font-size: 13px;\n    color: white;\n    font-weight: 600;\n    margin-bottom: 0; }\n  .account__lastinfo {\n    font-size: 12px;\n    color: rgba(255, 255, 255, 0.7);\n    font-weight: 300; }\n"

/***/ }),

/***/ "./src/app/components/layout/sidebar/sidebar-profile/sidebar-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarProfileComponent = /** @class */ (function () {
    function SidebarProfileComponent() {
    }
    SidebarProfileComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SidebarProfileComponent.prototype, "account", void 0);
    SidebarProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sidebar-profile',
            template: __webpack_require__("./src/app/components/layout/sidebar/sidebar-profile/sidebar-profile.component.html"),
            styles: [__webpack_require__("./src/app/components/layout/sidebar/sidebar-profile/sidebar-profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarProfileComponent);
    return SidebarProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/sidebar/sidebar-toggle-button/sidebar-toggle-button.component.html":
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" id=\"sidebarCollapse\" class=\"btn btn-info\">\n  <i class=\"fas fa-align-left\"></i>\n  <span>Toggle Sidebar</span>\n</button>\n"

/***/ }),

/***/ "./src/app/components/layout/sidebar/sidebar-toggle-button/sidebar-toggle-button.component.scss":
/***/ (function(module, exports) {

module.exports = "#sidebarCollapse {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  border-radius: 50% !important;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/components/layout/sidebar/sidebar-toggle-button/sidebar-toggle-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarToggleButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarToggleButtonComponent = /** @class */ (function () {
    function SidebarToggleButtonComponent() {
    }
    SidebarToggleButtonComponent.prototype.ngOnInit = function () {
    };
    SidebarToggleButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'sidebar-toggle-button',
            template: __webpack_require__("./src/app/components/layout/sidebar/sidebar-toggle-button/sidebar-toggle-button.component.html"),
            styles: [__webpack_require__("./src/app/components/layout/sidebar/sidebar-toggle-button/sidebar-toggle-button.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarToggleButtonComponent);
    return SidebarToggleButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/notes/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-all-side-40\">\n  <h2 class=\"mb-20 weight--light\">Appunti</h2>\n  <alertMessage></alertMessage>\n  <div class=\"card light mb-4 p-all-side-25\">\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && create(f)\" #f=\"ngForm\" novalidate class=\"form--light\">\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !title.valid }\">\n        <label for=\"title\" class=\"form__label\">Titolo <span class=\"text-danger\">*</span></label> <span *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"text-danger\">Campo non valido</span>\n        <input type=\"text\" class=\"form-control\" name=\"title\" ngModel #title=\"ngModel\" required />\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !description.valid }\">\n        <label for=\"description\" class=\"form__label\">Descrizione</label>\n        <textarea id=\"description\" rows=\"15\" class=\"form-control black\" ngModel #description=\"ngModel\" name=\"description\"></textarea>\n      </div>\n      <div>\n        <p>Vuoi settare l'allarme?</p>\n        <div class=\"form-check form-check-inline\">\n          <input type=\"radio\" class=\"form-check-input\" name=\"alarm\" value=\"yes\" (change)=\"activeAlarm(true)\">\n          <label class=\"form-check-label\" for=\"set_alarm_yes\">SI</label>\n        </div>\n        <div class=\"form-check form-check-inline\">\n          <input type=\"radio\" class=\"form-check-input\" name=\"alarm\" value=\"no\" (change)=\"activeAlarm(false)\">\n          <label class=\"form-check-label\" for=\"set_alarm_no\">NO</label>\n        </div>\n      </div>\n      <div class=\"row mt-15\" *ngIf=\"alarm == true\">\n        <div class=\"col\">\n          <div class=\"form-group\">\n            <label>Giorno</label>\n            <input type=\"date\" class=\"form-control\" name=\"alarm_date\" ngModel>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"form-group\">\n            <label>Ora</label>\n            <input type=\"time\" class=\"form-control\" name=\"alarm_time\" ngModel>\n          </div>\n        </div>\n      </div>\n      <div class=\"row mt-30\">\n        <div class=\"col\">\n          <button class=\"btn btn-success\" [disabled]=\"f.invalid\">Crea <i *ngIf=\"loading\" class=\"fa fa-spinner fa-pulse fa-fw\"></i></button>\n          <a [routerLink]=\"['/signin']\" class=\"btn btn-warning\">Cancella</a>\n        </div>\n        <div class=\"col\">\n          <text-warning></text-warning>\n        </div>\n      </div>\n    </form>\n  </div>\n  <back-button></back-button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/notes/add/add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/notes/add/add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accounts_service_account_service__ = __webpack_require__("./src/app/components/accounts/service/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_navigation__ = __webpack_require__("./src/app/helpers/navigation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_local_storage__ = __webpack_require__("./src/app/helpers/local-storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services



// Helpers


var NotesAddComponent = /** @class */ (function () {
    function NotesAddComponent(service, messageService, accountService, navigation, lsService) {
        this.service = service;
        this.messageService = messageService;
        this.accountService = accountService;
        this.navigation = navigation;
        this.lsService = lsService;
        this.loading = false;
        this.alarm = false;
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
    }
    NotesAddComponent.prototype.activeAlarm = function (value) {
        this.alarm = value;
    };
    NotesAddComponent.prototype.create = function (form) {
        var _this = this;
        this.loading = true;
        form.value.account_id = +this.lsService.get("accountId");
        var subscription = this.service.create("notes", form.value).subscribe(function (data) {
            _this.loading = false;
            _this.messageService.setMessage('success');
            form.reset();
        }, function (err) {
            console.log(err);
            _this.loading = false;
            _this.messageService.setMessage('rejected');
        });
        this.sub.add(subscription);
    };
    NotesAddComponent.prototype.ngOnInit = function () { };
    NotesAddComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    NotesAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/components/notes/add/add.component.html"),
            styles: [__webpack_require__("./src/app/components/notes/add/add.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_4__accounts_service_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_5__helpers_navigation__["a" /* NavigationService */],
            __WEBPACK_IMPORTED_MODULE_6__helpers_local_storage__["a" /* LocalStorageService */]])
    ], NotesAddComponent);
    return NotesAddComponent;
}());



/***/ }),

/***/ "./src/app/components/notes/archived/archived.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-all-side-40\">\n  <div class=\"d-flex align-items-center mb-20\">\n    <h3 class=\"weight--light flex-fill mb-0\">Appunti Archiviati</h3>\n    <a [routerLink]=\"['/notes/add']\" class=\"btn btn--shadow btn-dark text-uppercase weight--light d-flex align-items-center pt-10 pb-10\">\n      Aggiungi nota\n    </a>\n  </div>\n  <div class=\"mb-3\">\n    <search-form [setDataForRequest]=\"dataForRequestSearchComp\" (results)=\"notes = $event\"></search-form>\n  </div>\n  <alertMessage></alertMessage>\n  <div class=\"card light mb-4 p-all-side-25\">\n    <table class=\"table table-striped mb-0\" *ngIf=\"notes.length; else noNotes\">\n      <thead class=\"thead--dark\">\n        <tr>\n          <th>Data di scadenza</th>\n          <th>Titolo</th>\n          <th>Descrizione</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr [notes]=\"notes\" [note]=\"note\" *ngFor=\"let note of notes | paginate: { itemsPerPage: 10, currentPage: p }\" archived-notes-row></tr>\n      </tbody>\n    </table>\n    <ng-template #noNotes>\n      <message-notrecords [message]=\"'Non sono presenti records salvati nel database'\"></message-notrecords>\n    </ng-template>\n    <div class=\"d-flex justify-content-center\" *ngIf=\"notes.length >= 10\">\n      <pagination-controls class=\"pagination\" (pageChange)=\"p = $event\"></pagination-controls>\n    </div>\n  </div>\n  <back-button></back-button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/notes/archived/archived.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/notes/archived/archived.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesArchivedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accounts_service_account_service__ = __webpack_require__("./src/app/components/accounts/service/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_local_storage__ = __webpack_require__("./src/app/helpers/local-storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services


// Helpers

var NotesArchivedComponent = /** @class */ (function () {
    function NotesArchivedComponent(service, accountService, lsService) {
        this.service = service;
        this.accountService = accountService;
        this.lsService = lsService;
        this.notes = [];
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
        this.p = 1;
        this.dataForRequestSearchComp = {
            "table": "notes",
            "parameters": ["title", "description"],
            "condition": "archived=is.true" + "&account_id=eq." + +this.lsService.get("accountId")
        };
    }
    NotesArchivedComponent.prototype.getNotes = function () {
        var _this = this;
        var query = "account_id=eq." + +this.lsService.get("accountId") + "&archived=" + "is.true";
        var subscription = this.service.getRecords("notes", query).subscribe(function (data) {
            _this.notes = data;
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    NotesArchivedComponent.prototype.ngOnInit = function () {
        this.getNotes();
    };
    NotesArchivedComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    NotesArchivedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/components/notes/archived/archived.component.html"),
            styles: [__webpack_require__("./src/app/components/notes/archived/archived.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__accounts_service_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_4__helpers_local_storage__["a" /* LocalStorageService */]])
    ], NotesArchivedComponent);
    return NotesArchivedComponent;
}());



/***/ }),

/***/ "./src/app/components/notes/archived/row/row.component.html":
/***/ (function(module, exports) {

module.exports = "<td class=\"align-middle\">\n  <div class=\"d-inline\" *ngIf=\"note.alarm_date; else dateNull\">\n    <i class=\"fa fa-calendar\"></i>\n    <span>{{note.alarm_date}}</span>\n  </div>\n  <ng-template #dateNull>\n    <p class=\"mb-0\">Non è stato settato un allarme</p>\n  </ng-template>\n</td>\n<td class=\"text-capitalize align-middle\">{{note.title}}</td>\n<td class=\"align-middle\">{{note.description | slice:0:60}}...</td>\n<td class=\"text-right\">\n  <button class=\"btn btn-warning\" title=\"Ripristina\"\n    [swal]=\"{ title: 'Sei sicuro di volerlo ripristinare?', showCancelButton: true }\" (confirm)=\"rollbackIt()\">\n    <i class=\"fa fa-reply text--shadow\" aria-hidden=\"true\"></i>\n  </button>\n  <button class=\"btn btn-danger\" title=\"Cancella definitivamente\"\n    [swal]=\"{ title: 'Sei sicuro di volerlo cancellare?', text: 'Non sarà più possibile recuperarlo.', showCancelButton: true }\" (confirm)=\"deleteIt()\">\n    <i class=\"fa fa-trash text--shadow\" aria-hidden=\"true\"></i>\n  </button>\n</td>\n"

/***/ }),

/***/ "./src/app/components/notes/archived/row/row.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/notes/archived/row/row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchivedNotesRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services


var ArchivedNotesRowComponent = /** @class */ (function () {
    function ArchivedNotesRowComponent(service, messageService) {
        this.service = service;
        this.messageService = messageService;
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
    }
    ArchivedNotesRowComponent.prototype.rollbackIt = function () {
        var _this = this;
        var index = this.notes.indexOf(this.note);
        var archived = {
            "archived": false
        };
        var subscription = this.service.archived("notes", this.note.id, archived).subscribe(function (data) {
            _this.notes.splice(index, 1);
            _this.messageService.setMessage('rollback');
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    ArchivedNotesRowComponent.prototype.deleteIt = function () {
        var _this = this;
        var index = this.notes.indexOf(this.note);
        var subscription = this.service.delete("notes", "id", this.note.id).subscribe(function (data) {
            _this.notes.splice(index, 1);
            _this.messageService.setMessage('delete');
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    ArchivedNotesRowComponent.prototype.ngOnInit = function () { };
    ArchivedNotesRowComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ArchivedNotesRowComponent.prototype, "note", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], ArchivedNotesRowComponent.prototype, "notes", void 0);
    ArchivedNotesRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[archived-notes-row]',
            template: __webpack_require__("./src/app/components/notes/archived/row/row.component.html"),
            styles: [__webpack_require__("./src/app/components/notes/archived/row/row.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]])
    ], ArchivedNotesRowComponent);
    return ArchivedNotesRowComponent;
}());



/***/ }),

/***/ "./src/app/components/notes/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-all-side-40\">\n  <alertMessage></alertMessage>\n  <h3 class=\"mb-20 mt-0 weight--light\">Dettagli {{note.title}}</h3>\n  <div class=\"card light mb-4 p-all-side-25\">\n    <form #form=\"ngForm\" novalidate>\n      <div *ngIf=\"note.alarm_date\">\n        <h5 class=\"weight--regular\">Impostazione allarme</h5>\n        <div class=\"bg-dark p-all-side-15 mb-20 text--white\">\n          <div class=\"d-inline mr-5\">\n            <i class=\"fa fa-calendar\"></i>\n            <span>{{note.alarm_date}}</span>\n          </div>\n          <div class=\"d-inline\">\n            <i class=\"fa fa-clock-o\"></i>\n            <span>{{note.alarm_time}}</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{\n        'has-danger': title.invalid && (title.dirty || title.touched)\n      }\">\n        <label for=\"title\">Titolo </label> <span *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"text-danger\">* Campo non valido</span>\n        <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"note.title\" #title=\"ngModel\" required />\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{\n        'has-danger': description.invalid && (description.dirty || description.touched)\n      }\">\n        <label for=\"description\">Descrizione </label> <span *ngIf=\"description.invalid && (description.dirty || description.touched)\" class=\"text-danger\">* Campo non valido</span>\n        <textarea rows=\"10\" class=\"form-control\" name=\"description\" [(ngModel)]=\"note.description\" #description=\"ngModel\" required></textarea>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{\n        'has-danger': alarm_date.invalid && (alarm_date.dirty || alarm_date.touched)\n      }\">\n        <label for=\"alarm_date\">Giorno </label> <span *ngIf=\"alarm_date.invalid && (alarm_date.dirty || alarm_date.touched)\" class=\"text-danger\">* Campo non valido</span>\n        <input type=\"date\" class=\"form-control\" name=\"alarm_date\" [(ngModel)]=\"note.alarm_date\" #alarm_date=\"ngModel\" />\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{\n        'has-danger': alarm_time.invalid && (alarm_time.dirty || alarm_time.touched)\n      }\">\n        <label for=\"alarm_time\">Ora </label> <span *ngIf=\"alarm_time.invalid && (alarm_time.dirty || alarm_time.touched)\" class=\"text-danger\">* Campo non valido</span>\n        <input type=\"time\" class=\"form-control\" name=\"alarm_time\" [(ngModel)]=\"note.alarm_time\" #alarm_time=\"ngModel\" />\n      </div>\n      <div class=\"mt-30\">\n        <button class=\"btn btn-success mr-2\" (click)=\"update(form)\" [disabled]=\"form.invalid\">Salva modifiche</button>\n        <button class=\"btn btn-warning\" (click)=\"revoke()\">Annulla</button>\n      </div>\n    </form>\n  </div>\n  <back-button></back-button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/notes/details/details.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/notes/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_form_can_deactivate_form_can_deactivate__ = __webpack_require__("./src/app/helpers/form-can-deactivate/form-can-deactivate.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__notes_service_note_service__ = __webpack_require__("./src/app/components/notes/service/note.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// Services



var NotesDetailsComponent = /** @class */ (function (_super) {
    __extends(NotesDetailsComponent, _super);
    function NotesDetailsComponent(service, noteService, route, messageService) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.noteService = noteService;
        _this.route = route;
        _this.messageService = messageService;
        _this.note = {};
        _this.notes = [];
        _this.sub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__["a" /* Subscription */]();
        return _this;
    }
    NotesDetailsComponent.prototype.update = function (data) {
        var _this = this;
        var query = "id=eq." + this.note.id;
        var subscription = this.service.update("notes", query, this.note).subscribe(function (data) {
            _this.messageService.setMessage('success');
        }, function (err) {
            console.log(err);
            _this.messageService.setMessage('rejected');
        }, function () {
            var note = _this.note;
            _this.notes = _this.notes.map(function (item) {
                return item.id == note.id ? note : item;
            });
            _this.noteService.set(_this.notes);
        });
        this.sub.add(subscription);
    };
    NotesDetailsComponent.prototype.revoke = function () {
        this.getNote();
    };
    NotesDetailsComponent.prototype.getNote = function () {
        var _this = this;
        var subscription = this.service.getBy("notes", "id", this.id).subscribe(function (data) {
            _this.note = data;
        });
        this.sub.add(subscription);
    };
    NotesDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var subNotes = this.noteService.notes.subscribe(function (res) {
            _this.notes = res;
        });
        var subNote = this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 'id' to a number
            _this.getNote();
        });
        this.sub
            .add(subNotes)
            .add(subNote);
    };
    NotesDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('form'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* NgForm */])
    ], NotesDetailsComponent.prototype, "form", void 0);
    NotesDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/components/notes/details/details.component.html"),
            styles: [__webpack_require__("./src/app/components/notes/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_7__notes_service_note_service__["a" /* NoteService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__services_message_service__["a" /* MessageService */]])
    ], NotesDetailsComponent);
    return NotesDetailsComponent;
}(__WEBPACK_IMPORTED_MODULE_3__helpers_form_can_deactivate_form_can_deactivate__["a" /* FormCanDeactivate */]));



/***/ }),

/***/ "./src/app/components/notes/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-all-side-40\">\n  <div class=\"d-flex align-items-center mb-20\">\n    <h3 class=\"weight--light flex-fill mb-0\">Appunti</h3>\n    <a [routerLink]=\"['/notes/add']\" class=\"btn btn--shadow btn-dark text-uppercase weight--light d-flex align-items-center pt-10 pb-10\">\n      Aggiungi nota\n    </a>\n  </div>\n  <div class=\"mb-3\">\n    <search-form [setDataForRequest]=\"dataForRequestSearchComp\" (results)=\"notes = $event\"></search-form>\n  </div>\n  <alertMessage></alertMessage>\n  <div class=\"card light mb-4 p-all-side-25\">\n    <table class=\"table table-striped mb-0\" *ngIf=\"notes.length; else noNotes\">\n      <thead>\n        <tr>\n          <th class=\"weight--medium\">Allarme settato il giorno</th>\n          <th class=\"weight--medium\">Titolo</th>\n          <th class=\"weight--medium\">Description</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr [notes]=\"notes\" [note]=\"note\" *ngFor=\"let note of notes | paginate: { itemsPerPage: 10, currentPage: p }\" notes-list-row></tr>\n      </tbody>\n    </table>\n    <ng-template #noNotes>\n      <message-notrecords [message]=\"'Non sono presenti records salvati nel database'\"></message-notrecords>\n    </ng-template>\n    <div class=\"d-flex justify-content-center\" *ngIf=\"notes.length >= 10\">\n      <pagination-controls class=\"pagination\" (pageChange)=\"p = $event\"></pagination-controls>\n    </div>\n  </div>\n  <back-button></back-button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/notes/list/list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/notes/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accounts_service_account_service__ = __webpack_require__("./src/app/components/accounts/service/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_local_storage__ = __webpack_require__("./src/app/helpers/local-storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services


// Helpers

var NotesListComponent = /** @class */ (function () {
    function NotesListComponent(service, accountService, lsService) {
        this.service = service;
        this.accountService = accountService;
        this.lsService = lsService;
        this.notes = [];
        this.p = 1;
        this.dataForRequestSearchComp = {
            "table": "notes",
            "parameters": ["title", "description"],
            "condition": "archived=is.false" + "&account_id=eq." + +this.lsService.get("accountId")
        };
    }
    NotesListComponent.prototype.get_notes = function () {
        var _this = this;
        var query = "account_id=eq." + +this.lsService.get("accountId") + "&archived=" + "is.false";
        this.service.getRecords("notes", query).subscribe(function (data) {
            _this.notes = data;
        }, function (err) {
            console.log(err);
        });
    };
    NotesListComponent.prototype.ngOnInit = function () {
        this.get_notes();
    };
    NotesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/components/notes/list/list.component.html"),
            styles: [__webpack_require__("./src/app/components/notes/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_2__accounts_service_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_3__helpers_local_storage__["a" /* LocalStorageService */]])
    ], NotesListComponent);
    return NotesListComponent;
}());



/***/ }),

/***/ "./src/app/components/notes/list/row/row.component.html":
/***/ (function(module, exports) {

module.exports = "<td class=\"align-middle\">\n  <div class=\"d-inline\" *ngIf=\"note.alarm_date; else dateNull\">\n    <i class=\"fa fa-calendar mr-2\"></i>\n    <span>{{note.alarm_date}}</span>\n  </div>\n  <ng-template #dateNull>\n    <p class=\"mb-0\">Non è stato settato un allarme</p>\n  </ng-template>\n</td>\n<td class=\"text-capitalize align-middle\">{{note.title}}</td>\n<td class=\"text-capitalize align-middle\">{{note.description | slice:0:60}}...</td>\n<td class=\"text-right\">\n  <a [routerLink]=\"['/notes', note.id]\" class=\"btn btn-info\" title=\"Dettagli\">\n    <i class=\"fa fa-info text--shadow\" aria-hidden=\"true\"></i>\n  </a>\n  <a [routerLink]=\"['/notes', note.id]\" class=\"btn btn-success\" title=\"Modifica\">\n    <i class=\"fa fa-pencil text--shadow\" aria-hidden=\"true\"></i>\n  </a>\n  <button class=\"btn btn-warning\" title=\"Archivia\"\n    [swal]=\"{ title: 'Sei sicuro di volerlo archiviare?', text: 'Sarà possibile ripristinarlo', showCancelButton: true }\" (confirm)=\"archiveIt()\">\n    <i class=\"fa fa-archive text--shadow\" aria-hidden=\"true\"></i>\n  </button>\n  <button class=\"btn btn-danger\" title=\"Cancella\"\n    [swal]=\"{ title: 'Sei sicuro di volerlo cancellare?', text: 'Non sarà possibile ripristinarlo', showCancelButton: true }\" (confirm)=\"deleteIt()\">\n    <i class=\"fa fa-trash text--shadow\" aria-hidden=\"true\"></i>\n  </button>\n</td>\n"

/***/ }),

/***/ "./src/app/components/notes/list/row/row.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/notes/list/row/row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesListRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services


var NotesListRowComponent = /** @class */ (function () {
    function NotesListRowComponent(service, messageService) {
        this.service = service;
        this.messageService = messageService;
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
    }
    NotesListRowComponent.prototype.archiveIt = function () {
        var _this = this;
        var index = this.notes.indexOf(this.note);
        var archived = {
            "archived": true
        };
        var subscription = this.service.archived("notes", this.note.id, archived).subscribe(function (data) {
            _this.notes.splice(index, 1);
            _this.messageService.setMessage('archive');
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    NotesListRowComponent.prototype.deleteIt = function () {
        var _this = this;
        var index = this.notes.indexOf(this.note);
        var subscription = this.service.delete("notes", "id", this.note.id).subscribe(function (data) {
            _this.notes.splice(index, 1);
            _this.messageService.setMessage('delete');
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    NotesListRowComponent.prototype.ngOnInit = function () { };
    NotesListRowComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], NotesListRowComponent.prototype, "note", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], NotesListRowComponent.prototype, "notes", void 0);
    NotesListRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[notes-list-row]',
            template: __webpack_require__("./src/app/components/notes/list/row/row.component.html"),
            styles: [__webpack_require__("./src/app/components/notes/list/row/row.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]])
    ], NotesListRowComponent);
    return NotesListRowComponent;
}());



/***/ }),

/***/ "./src/app/components/notes/service/note.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var NoteService = /** @class */ (function () {
    function NoteService() {
        this.notes = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"]([]);
    }
    NoteService.prototype.set = function (list) {
        this.notes.next(list);
    };
    NoteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], NoteService);
    return NoteService;
}());



/***/ }),

/***/ "./src/app/components/tickets/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-all-side-40\">\n  <h2 class=\"mb-20 weight--light\">Crea ticket</h2>\n  <alertMessage></alertMessage>\n  <div class=\"card light mb-4 p-all-side-25\">\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && create(f)\" #f=\"ngForm\" novalidate>\n      <div class=\"form-group\" [ngClass]=\"{\n        'has-danger': assignees_id.invalid && (assignees_id.dirty || assignees_id.touched)\n      }\">\n        <label for=\"assignees_id\">\n          Assegna a <span class=\"text-danger\">*</span>\n        </label>\n        <span *ngIf=\"assignees_id.invalid && (assignees_id.dirty || assignees_id.touched)\" class=\"text-danger\">Campo non valido</span>\n        <select id=\"assignees_id\" multiple class=\"form-control black text-capitalize\" ngModel name=\"assignees_id\" #assignees_id=\"ngModel\" required>\n          <option value=\"\" disabled>Seleziona</option>\n          <option *ngFor=\"let account of accounts\" value=\"{{account.id}}\">\n            {{account.firstname}} {{account.lastname}}\n          </option>\n        </select>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{\n        'has-danger': title.invalid && (title.dirty || title.touched)\n      }\">\n        <label for=\"title\" class=\"form__label\">\n          Titolo <span class=\"text-danger\">*</span>\n        </label>\n        <span *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"text-danger\">Campo non valido</span>\n        <input type=\"text\" class=\"form-control\" name=\"title\" ngModel #title=\"ngModel\" required />\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{\n        'has-danger': description.invalid && (description.dirty || description.touched)\n      }\">\n        <label for=\"description\" class=\"form__label\">\n          Descrizione <span class=\"text-danger\">*</span>\n        </label>\n        <span *ngIf=\"description.invalid && (description.dirty || description.touched)\" class=\"text-danger\">Campo non valido</span>\n        <textarea [froalaEditor]=\"editor_options\" name=\"description\" #description=\"ngModel\" ngModel></textarea>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{\n        'has-danger': expire_at.invalid && (expire_at.dirty || expire_at.touched)\n      }\">\n        <label for=\"expire_at\" class=\"form__label\">\n          Data scadenza <span class=\"text-danger\">*</span>\n        </label>\n        <span *ngIf=\"expire_at.invalid && (expire_at.dirty || expire_at.touched)\" class=\"text-danger\">Campo non valido</span>\n        <input type=\"date\" class=\"form-control\" name=\"expire_at\" ngModel #expire_at=\"ngModel\" />\n      </div>\n      <div class=\"row mt-30\">\n        <div class=\"col\">\n          <button class=\"btn btn-success\" [disabled]=\"f.invalid\">Crea <i *ngIf=\"loading\" class=\"fa fa-spinner fa-pulse fa-fw\"></i></button>\n          <a [routerLink]=\"['/signin']\" class=\"btn btn-warning\">Cancella</a>\n        </div>\n        <div class=\"col\">\n          <text-warning></text-warning>\n        </div>\n      </div>\n    </form>\n  </div>\n  <back-button></back-button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/tickets/add/add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tickets/add/add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accounts_service_account_service__ = __webpack_require__("./src/app/components/accounts/service/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_local_storage__ = __webpack_require__("./src/app/helpers/local-storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services



// Helpers

var TicketAddComponent = /** @class */ (function () {
    function TicketAddComponent(service, messageService, accountService, lsService) {
        this.service = service;
        this.messageService = messageService;
        this.accountService = accountService;
        this.lsService = lsService;
        this.accounts = [];
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
        this.loading = false;
        this.editor_options = {
            placeholderText: 'Inserisci testo',
            toolbarVisibleWithoutSelection: false,
            height: 300,
            theme: "gray",
            tooltips: true,
        };
        this.loadAllItems("accounts", "accounts", "active_and_not_deleted");
        this.account = JSON.parse(this.lsService.get("account"));
        // let subscription = this.accountService.logged_account.subscribe(
        //   (res: any) => {
        //     this.account = res;
        //   }
        // );
        //this.sub.add(subscription);
    }
    TicketAddComponent.prototype.trasformToNumber = function (data) {
        var result = [];
        data.map(function (item) {
            result.push(+item);
        });
        return result;
    };
    TicketAddComponent.prototype.create = function (form) {
        var _this = this;
        form.value.assignees_id = this.trasformToNumber(form.value.assignees_id);
        form.value.assignees_id = "{" + form.value.assignees_id.join(",") + "}";
        form.value.created_by = this.account.id;
        form.value.updated_by = this.account.id;
        var subscription = this.service.create("tickets", form.value).subscribe(function (data) {
            _this.loading = false;
            _this.messageService.setMessage('success');
            form.reset();
        }, function (err) {
            console.log(err);
            _this.loading = false;
            _this.messageService.setMessage('rejected');
        });
        this.sub.add(subscription);
    };
    TicketAddComponent.prototype.loadAllItems = function (table, variable, condition) {
        var _this = this;
        this.service.getAll(table, condition).subscribe(function (data) {
            _this[variable] = data;
        });
    };
    TicketAddComponent.prototype.ngOnInit = function () { };
    TicketAddComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TicketAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/components/tickets/add/add.component.html"),
            styles: [__webpack_require__("./src/app/components/tickets/add/add.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_4__accounts_service_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_5__helpers_local_storage__["a" /* LocalStorageService */]])
    ], TicketAddComponent);
    return TicketAddComponent;
}());



/***/ }),

/***/ "./src/app/components/tickets/archived/archived.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-all-side-40\">\n  <alertMessage></alertMessage>\n  <div class=\"d-flex align-items-center mb-20\">\n    <h3 class=\"weight--light flex-fill mb-0\">I tuoi tickets</h3>\n    <a [routerLink]=\"['/tickets/add']\" class=\"btn btn--shadow btn-dark text-uppercase weight--light d-flex align-items-center pt-10 pb-10\">\n      Aggiungi ticket\n    </a>\n  </div>\n  <div class=\"mb-10\">\n    <filter-form (list)=\"tickets = $event\" [account_profile]=\"account_profile\" [account_id]=\"account_id\" [tickets]=\"tickets\" [archived]=\"true\"></filter-form>\n  </div>\n  <div class=\"card light mb-4 p-all-side-25\">\n    <table class=\"table table-striped avatar-list mb-0\" *ngIf=\"tickets.length; else noTickets\">\n      <thead class=\"thead--dark\">\n        <tr>\n          <th>Ticket numero</th>\n          <th>Assegnato a</th>\n          <th>Reporter</th>\n          <th>Scadenza</th>\n          <th>Titolo</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr [tickets]=\"tickets\" [ticket]=\"ticket\" [account_id]=\"account_id\" [account_profile]=\"account_profile\" *ngFor=\"let ticket of tickets | paginate: { itemsPerPage: 10, currentPage: p }\" archived-tickets-row></tr>\n      </tbody>\n    </table>\n    <ng-template #noTickets>\n      <message-notrecords [message]=\"'Non sono presenti records salvati nel database'\"></message-notrecords>\n    </ng-template>\n    <div class=\"d-flex justify-content-center\" *ngIf=\"tickets.length >= 10\">\n      <pagination-controls class=\"pagination\" (pageChange)=\"p = $event\"></pagination-controls>\n    </div>\n  </div>\n  <back-button></back-button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/tickets/archived/archived.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tickets/archived/archived.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketArchivedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accounts_service_account_service__ = __webpack_require__("./src/app/components/accounts/service/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_local_storage__ = __webpack_require__("./src/app/helpers/local-storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services


// Helpers

var TicketArchivedComponent = /** @class */ (function () {
    function TicketArchivedComponent(lsService, service, accountService) {
        this.lsService = lsService;
        this.service = service;
        this.accountService = accountService;
        this.accounts = [];
        this.tickets = [];
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
        this.p = 1;
        this.account_id = +this.lsService.get("accountId");
        this.account_profile = +this.lsService.get("accountProfile");
        this.loadAllItems("accounts", "accounts", "active_and_not_deleted");
    }
    TicketArchivedComponent.prototype.getArchivedTickets = function () {
        var _this = this;
        var query = "&archived=" + "is.true" + "&assignees_id=cs." + "{" + this.account_id + "}" + "&order=" + "id.desc" + "&select=*, reporter: accounts(id, firstname, lastname)";
        var subscription = this.service.getRecords("tickets", query).subscribe(function (data) {
            var accounts = _this.accounts;
            _this.tickets = data;
            _this.tickets.map(function (ticket) {
                ticket["accounts"] = [];
                ticket.assignees_id.forEach(function (account) {
                    accounts.forEach(function (elem) {
                        if (elem.id == account) {
                            var obj = {
                                "id": elem.id,
                                "firstname": elem.firstname,
                                "lastname": elem.lastname,
                                "avatar_color": elem.avatar_color
                            };
                            ticket.accounts.push(obj);
                        }
                    });
                });
            });
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    TicketArchivedComponent.prototype.loadAllItems = function (table, variable, condition) {
        var _this = this;
        this.service.getAll(table, condition).subscribe(function (data) {
            _this[variable] = data;
        });
    };
    TicketArchivedComponent.prototype.ngOnInit = function () {
        this.getArchivedTickets();
    };
    TicketArchivedComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TicketArchivedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/components/tickets/archived/archived.component.html"),
            styles: [__webpack_require__("./src/app/components/tickets/archived/archived.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__helpers_local_storage__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__accounts_service_account_service__["a" /* AccountService */]])
    ], TicketArchivedComponent);
    return TicketArchivedComponent;
}());



/***/ }),

/***/ "./src/app/components/tickets/archived/row/row.component.html":
/***/ (function(module, exports) {

module.exports = "<td class=\"align-middle\">TICKET-{{ticket.id}}</td>\n<td class=\"text-capitalize align-middle\">\n  <ng-container *ngFor=\"let account of ticket.accounts; index as i\">\n    <ng-container *ngIf=\"i <= 2\">\n      <span class=\"avatar avatar--inline radius small\" [style.background]=\"account.avatar_color\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{account.firstname}} {{account.lastname}}\">\n        {{account.firstname | slice:0:1}}\n      </span>\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"ticket.accounts.length == 0\">\n    <p class=\"mb-0\">Nessun utente</p>\n  </ng-container>\n  <ng-container *ngIf=\"ticket.accounts.length > 3\">\n    <span class=\"navbar-notification nav-item dropdown\">\n      <a class=\"avatar radius small\" style=\"background: white\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        + {{ticket.accounts.length - 3}}\n      </a>\n      <div class=\"dropdown-menu p-all-side-5 mt-5\">\n        <ng-container *ngFor=\"let account of ticket.accounts; index as i\">\n          <p *ngIf=\"i > 2\" class=\"mb-0\">\n            <span class=\"avatar radius small mr-2\" [style.background]=\"account.avatar_color\">\n              {{account.firstname | slice:0:1}}\n            </span>\n            <small>{{account.firstname}} {{account.lastname}}</small>\n          </p>\n        </ng-container>\n      </div>\n    </span>\n  </ng-container>\n</td>\n<td class=\"text-capitalize align-middle\">\n  {{ticket.reporter.firstname}} {{ticket.reporter.lastname}}\n</td>\n<td class=\"align-middle\">\n  <div class=\"d-inline\" *ngIf=\"ticket.expire_at; else dateNull\">\n    <i class=\"fa fa-calendar\"></i>\n    <span>{{ticket.expire_at}}</span>\n  </div>\n  <ng-template #dateNull>\n    <p class=\"mb-0\">Non è stato settato un allarme</p>\n  </ng-template>\n</td>\n<td class=\"text-capitalize align-middle\">{{ticket.title}}</td>\n<td class=\"text-right\">\n  <button [ngClass]=\"{ 'disabled': ticket.created_by != account_id && account_profile != 0 }\"\n    class=\"btn btn-warning\" title=\"Ripristina\"\n    [swal]=\"{ title: 'Sei sicuro di volerlo ripristinare', showCancelButton: true }\" (confirm)=\"rollbackIt()\">\n    <i class=\"fa fa-reply text--shadow\" aria-hidden=\"true\"></i>\n  </button>\n  <button [ngClass]=\"{ 'disabled': ticket.created_by != account_id && account_profile != 0 }\"\n    class=\"btn btn-danger\" title=\"Cancella definitivamente\"\n    [swal]=\"{ title: 'Sei sicuro di volerlo cancellare', text: 'Non sarà più possibile recuperarlo.', showCancelButton: true }\" (confirm)=\"deleteIt()\">\n    <i class=\"fa fa-trash text--shadow\" aria-hidden=\"true\"></i>\n  </button>\n</td>\n"

/***/ }),

/***/ "./src/app/components/tickets/archived/row/row.component.scss":
/***/ (function(module, exports) {

module.exports = ".avatar--inline {\n  margin-left: -10px;\n  position: relative; }\n  .avatar--inline:hover {\n    z-index: 9999;\n    top: -3px; }\n"

/***/ }),

/***/ "./src/app/components/tickets/archived/row/row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketsArchivedRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services


var TicketsArchivedRowComponent = /** @class */ (function () {
    function TicketsArchivedRowComponent(service, messageService) {
        this.service = service;
        this.messageService = messageService;
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
    }
    TicketsArchivedRowComponent.prototype.rollbackIt = function () {
        var _this = this;
        var index = this.tickets.indexOf(this.ticket);
        var archived = {
            "archived": false,
            "updated_by": this.account_id
        };
        var subscription = this.service.archived("tickets", this.ticket.id, archived).subscribe(function (data) {
            _this.tickets.splice(index, 1);
            _this.messageService.setMessage('rollback');
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    TicketsArchivedRowComponent.prototype.deleteIt = function () {
        var _this = this;
        var index = this.tickets.indexOf(this.ticket);
        var subscription = this.service.delete("tickets", "id", this.ticket.id).subscribe(function (data) {
            _this.tickets.splice(index, 1);
            _this.messageService.setMessage('delete');
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    TicketsArchivedRowComponent.prototype.ngOnInit = function () {
    };
    TicketsArchivedRowComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TicketsArchivedRowComponent.prototype, "ticket", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], TicketsArchivedRowComponent.prototype, "tickets", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], TicketsArchivedRowComponent.prototype, "account_profile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], TicketsArchivedRowComponent.prototype, "account_id", void 0);
    TicketsArchivedRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[archived-tickets-row]',
            template: __webpack_require__("./src/app/components/tickets/archived/row/row.component.html"),
            styles: [__webpack_require__("./src/app/components/tickets/archived/row/row.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]])
    ], TicketsArchivedRowComponent);
    return TicketsArchivedRowComponent;
}());



/***/ }),

/***/ "./src/app/components/tickets/assignees-list/assignees-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mboth-20 clearfix assignees-list\">\n  <span class=\"assignees-list__item badge bg--main mr-2 pull-left d-table\" *ngFor=\"let assignee of ticket.assignees\">\n    <span class=\"weight--regular\">{{assignee.firstname}} {{assignee.lastname}}</span>\n    <button (click)=\"removeAssignee(assignee)\" class=\"btn btn-link text--white p-all-side-0 ml-2\" *ngIf=\"assignee.id != account_id\"><i class=\"fa fa-close\"></i></button>\n  </span>\n</div>\n"

/***/ }),

/***/ "./src/app/components/tickets/assignees-list/assignees-list.component.scss":
/***/ (function(module, exports) {

module.exports = ".assignees-list__item {\n  height: 30px;\n  line-height: 30px;\n  padding: 0.15em .6em;\n  opacity: 0.5;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/components/tickets/assignees-list/assignees-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AssigneesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_timezone__ = __webpack_require__("./src/app/helpers/timezone.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services


// Helpers

var AssigneesListComponent = /** @class */ (function () {
    function AssigneesListComponent(service, timezone, messageService) {
        this.service = service;
        this.timezone = timezone;
        this.messageService = messageService;
        //@Output() updated_ticket = new EventEmitter();
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
    }
    AssigneesListComponent.prototype.removeAssignee = function (assignee) {
        var _this = this;
        // Request
        var query_ticket;
        if (this.ticket.updated_at != null) {
            query_ticket = "id=eq." + this.ticket.id + "&" + "updated_at=eq." + this.ticket.updated_at;
        }
        else {
            query_ticket = "id=eq." + this.ticket.id;
        }
        // end
        // Remove assigne id from model for assignees list
        this.ticket.assignees_id.splice(this.ticket.assignees_id.indexOf(assignee.id), 1);
        // end
        // Create obj to send for upload
        var upload_ticket = {
            "updated_by": this.account_id,
            "updated_at": this.timezone.getCurrentDate(),
            "assignees_id": "{" + this.ticket.assignees_id.join(",") + "}"
        };
        // end
        var subscription = this.service.update("tickets", query_ticket, upload_ticket).subscribe(function (data) {
            _this.messageService.setMessage('success');
            _this.ticket.updated_at = upload_ticket.updated_at;
            // Remove assignee selected from view
            var index = _this.ticket.assignees.indexOf(assignee);
            _this.ticket.assignees.splice(index, 1);
            // end
            // this.updated_ticket.emit({
            //   "ticket": this.ticket,
            //   "updated_at": this.timezone.getDistanceInWordsToNow(new Date())
            // })
        }, function (err) {
            _this.messageService.setMessage('overwrite');
            console.log(err);
        });
        this.sub.add(subscription);
    };
    AssigneesListComponent.prototype.ngOnInit = function () {
    };
    AssigneesListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AssigneesListComponent.prototype, "ticket", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AssigneesListComponent.prototype, "account_id", void 0);
    AssigneesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'assignees-list',
            template: __webpack_require__("./src/app/components/tickets/assignees-list/assignees-list.component.html"),
            styles: [__webpack_require__("./src/app/components/tickets/assignees-list/assignees-list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_4__helpers_timezone__["a" /* Timezone */],
            __WEBPACK_IMPORTED_MODULE_3__services_message_service__["a" /* MessageService */]])
    ], AssigneesListComponent);
    return AssigneesListComponent;
}());



/***/ }),

/***/ "./src/app/components/tickets/comments/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"media comment-form\" *ngIf=\"account\">\n  <span class=\"avatar radius small mr-3\" [style.background-color]=\"account.avatar_color\"></span>\n  <div class=\"media-body\">\n    <form name=\"form\" #comments=\"ngForm\" novalidate>\n      <textarea [froalaEditor]=\"editor_options\" name=\"body_text\" #body_text=\"ngModel\" ngModel required></textarea>\n      <div #buttons class=\"mt-20 comment-form__buttons\">\n        <button class=\"btn btn-info btn--shadow\" (click)=\"comments.form.valid && add(comments)\">Aggiungi <i *ngIf=\"loading\" class=\"fa fa-spinner fa-pulse fa-fw\"></i></button>\n        <button class=\"btn btn-warning btn--shadow\" (click)=\"revoke($event)\">Annulla</button>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/tickets/comments/add/add.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tickets/comments/add/add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketCommentAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_comment_service__ = __webpack_require__("./src/app/components/tickets/comments/service/comment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services


var TicketCommentAddComponent = /** @class */ (function () {
    function TicketCommentAddComponent(service, commentService) {
        this.service = service;
        this.commentService = commentService;
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
        this.loading = false;
        this.editor_options = {
            placeholderText: 'Inserisci commento',
            charCounterCount: false,
            toolbarSticky: false,
            toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', '|', 'fontFamily', 'fontSize', 'color', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatUL', 'outdent', 'indent', '|', 'quote', 'insertLink', 'insertHR', 'clearFormatting', '|', 'undo', 'redo'],
            //height: 300,
            theme: "gray",
            tooltips: true,
            events: {
                'froalaEditor.initialized': function (e, editor) {
                    editor.toolbar.hide();
                },
                'froalaEditor.focus': function (e, editor) {
                    editor.toolbar.show();
                    editor.opts.height = 300;
                    editor.size.refresh();
                }
                // 'froalaEditor.blur' : function(e, editor) {
                //   editor.toolbar.hide();
                // }
            }
        };
    }
    TicketCommentAddComponent.prototype.getLocationHeaders = function (data) {
        var patt = /(\d+)/g;
        var comment_id = data.headers.get("location");
        var comment_id_match = comment_id.match(patt);
        return +comment_id_match[0];
    };
    TicketCommentAddComponent.prototype.add = function (form) {
        var _this = this;
        this.loading = true;
        form.value.account_id = this.account.id;
        form.value.ticket_id = this.ticket_id;
        var subscription = this.service.create("comments", form.value).subscribe(function (data) {
            form.value.id = _this.getLocationHeaders(data);
            form.value.created_at = null;
            form.value.updated_at = null;
            form.value.account = _this.account;
            _this.comments.push(form.value);
            _this.loading = false;
            form.reset();
            _this.hiddenToolbar();
            _this.hiddenButtons();
        }, function (err) {
            console.log(err);
            _this.loading = false;
        }, function () {
            _this.commentService.changeComment(_this.comments);
        });
        this.sub.add(subscription);
    };
    TicketCommentAddComponent.prototype.revoke = function (event) {
        this.hiddenToolbar();
        this.hiddenButtons();
    };
    TicketCommentAddComponent.prototype.hiddenToolbar = function () {
        var body_text = this.body_text.nativeElement;
        $(body_text).froalaEditor('toolbar.hide');
    };
    TicketCommentAddComponent.prototype.hiddenButtons = function () {
        var buttons = this.buttons.nativeElement;
        buttons.style.display = 'none';
        // $(this.body_text.nativeElement).froalaEditor({
        //   height: 56
        // })
    };
    TicketCommentAddComponent.prototype.showButtons = function () {
        var buttons = this.buttons.nativeElement;
        buttons.style.display = 'block';
    };
    TicketCommentAddComponent.prototype.ngOnInit = function () {
    };
    TicketCommentAddComponent.prototype.ngAfterViewInit = function () {
        var _self = this;
        this.hiddenButtons();
        $(this.body_text.nativeElement).on('froalaEditor.focus', function (e, editor) {
            _self.showButtons();
        });
    };
    TicketCommentAddComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TicketCommentAddComponent.prototype, "account", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TicketCommentAddComponent.prototype, "reporter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], TicketCommentAddComponent.prototype, "ticket_id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], TicketCommentAddComponent.prototype, "comments", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("buttons", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TicketCommentAddComponent.prototype, "buttons", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("body_text", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TicketCommentAddComponent.prototype, "body_text", void 0);
    TicketCommentAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ticket-comments-add',
            template: __webpack_require__("./src/app/components/tickets/comments/add/add.component.html"),
            styles: [__webpack_require__("./src/app/components/tickets/comments/add/add.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__service_comment_service__["a" /* CommentService */]])
    ], TicketCommentAddComponent);
    return TicketCommentAddComponent;
}());



/***/ }),

/***/ "./src/app/components/tickets/comments/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"comments.length\">\n  <h4 class=\"weight--light mb-30\">Commenti</h4>\n  <comment-list-row [comment]=\"comment\" [account]=\"account\" (return_to_parent)=\"removeFromList($event)\" *ngFor=\"let comment of comments\"></comment-list-row>\n</section>\n"

/***/ }),

/***/ "./src/app/components/tickets/comments/list/list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tickets/comments/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketCommentsListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_comment_service__ = __webpack_require__("./src/app/components/tickets/comments/service/comment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services

var TicketCommentsListComponent = /** @class */ (function () {
    function TicketCommentsListComponent(commentService) {
        this.commentService = commentService;
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
    }
    TicketCommentsListComponent.prototype.removeFromList = function (comment) {
        var index = this.comments.indexOf(comment);
        this.comments.splice(index, 1);
    };
    TicketCommentsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var subscription = this.commentService.comment.subscribe(function (res) {
            _this.comments = res;
        });
        this.sub.add(subscription);
    };
    TicketCommentsListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TicketCommentsListComponent.prototype, "account", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], TicketCommentsListComponent.prototype, "ticket_id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TicketCommentsListComponent.prototype, "comments", void 0);
    TicketCommentsListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ticket-comments-list',
            template: __webpack_require__("./src/app/components/tickets/comments/list/list.component.html"),
            styles: [__webpack_require__("./src/app/components/tickets/comments/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_comment_service__["a" /* CommentService */]])
    ], TicketCommentsListComponent);
    return TicketCommentsListComponent;
}());



/***/ }),

/***/ "./src/app/components/tickets/comments/list/row/row.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"media d-flex align-items-top mb-25 comment\" id=\"comment-{{comment.id}}\">\n  <span class=\"avatar radius small mr-3\" [style.background-color]=\"comment.account.avatar_color\">\n    {{comment.account.firstname | slice:0:1}}\n  </span>\n  <div class=\"media-body\">\n    <div class=\"mb-5 d-flex\">\n      <span class=\"mr-2 text-black-50 text-capitalize flex-grow-1\">{{comment.account.firstname}} {{comment.account.lastname}}</span>\n      <span *ngIf=\"comment.updated_at != null\">\n        <small>Modificato {{comment.updated_at}} fa</small>\n      </span>\n    </div>\n    <textarea [froalaEditor]=\"editor_options\" name=\"body_text\" #body_text=\"ngModel\" [(ngModel)]=\"comment.body_text\"></textarea>\n    <div class=\"comment__buttons d-flex justify-content-between mt-5\" *ngIf=\"logged_account_id == comment.account_id\">\n      <div>\n        <button class=\"btn btn__link btn__link--hover-underline text--main_color mr-3\" (click)=\"edit($event)\"><small>Modifica</small></button>\n        <button class=\"btn btn__link btn__link--hover-underline text--main_color mr-3\" (click)=\"revoke($event)\"><small>Annulla</small></button>\n      </div>\n      <div>\n        <button class=\"btn btn__link btn__link--hover-underline text--main_color mr-3\" (click)=\"update($event)\"><small>Salva modifiche</small></button>\n        <button class=\"btn btn__link btn__link--hover-underline text--main_color\" (click)=\"delete()\"><small>Elimina</small></button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/tickets/comments/list/row/row.component.scss":
/***/ (function(module, exports) {

module.exports = "* /deep/ .ql-toolbar {\n  display: none; }\n"

/***/ }),

/***/ "./src/app/components/tickets/comments/list/row/row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentListRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns__ = __webpack_require__("./node_modules/date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_locale_it_index_js__ = __webpack_require__("./node_modules/date-fns/locale/it/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_date_fns_locale_it_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_date_fns_locale_it_index_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__accounts_service_account_service__ = __webpack_require__("./src/app/components/accounts/service/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_timezone__ = __webpack_require__("./src/app/helpers/timezone.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__helpers_local_storage__ = __webpack_require__("./src/app/helpers/local-storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Services



// Helpers


var CommentListRowComponent = /** @class */ (function () {
    function CommentListRowComponent(service, timezone, messageService, lsService, accountService) {
        this.service = service;
        this.timezone = timezone;
        this.messageService = messageService;
        this.lsService = lsService;
        this.accountService = accountService;
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
        this.return_to_parent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.editor_options = {
            charCounterCount: false,
            toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', '|', 'fontFamily', 'fontSize', 'color', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatUL', 'outdent', 'indent', '|', 'quote', 'insertLink', 'insertHR', 'clearFormatting', '|', 'undo', 'redo'],
            toolbarSticky: false,
            theme: "gray",
            tooltips: true,
            events: {
                'froalaEditor.initialized': function (e, editor) {
                    editor.toolbar.hide();
                    editor.edit.off();
                }
            }
        };
    }
    CommentListRowComponent.prototype.getDistanceInWordsToNow = function (date) {
        return Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["distanceInWordsToNow"])(date, { locale: __WEBPACK_IMPORTED_MODULE_3_date_fns_locale_it_index_js__ });
    };
    CommentListRowComponent.prototype.getByIdCurrentComment = function (event) {
        var target = event.target || event.srcElement || event.currentTarget;
        var closest = target.closest(".media");
        var idAttr = closest.attributes.id;
        var idValue = idAttr.nodeValue;
        //let toolbar = (<HTMLElement>document.querySelector('#' + idValue + ' .fr-toolbar'));
        return idValue;
    };
    CommentListRowComponent.prototype.edit = function (event) {
        var id = this.getByIdCurrentComment(event);
        var toolbar = document.querySelector('#' + id + ' .fr-toolbar');
        toolbar.style.display = "block";
        var textarea = document.querySelector('#' + id + ' textarea');
        $(textarea).froalaEditor("edit.on");
    };
    CommentListRowComponent.prototype.revoke = function (event) {
        var id = this.getByIdCurrentComment(event);
        var toolbar = document.querySelector('#' + id + ' .fr-toolbar');
        toolbar.style.display = "none";
        var textarea = document.querySelector('#' + id + ' textarea');
        $(textarea).froalaEditor("edit.off");
    };
    CommentListRowComponent.prototype.delete = function () {
        var _this = this;
        var subscription = this.service.delete("comments", "id", this.comment.id).subscribe(function (data) {
            _this.return_to_parent.emit(_this.comment);
        });
        this.sub.add(subscription);
    };
    CommentListRowComponent.prototype.update = function (event) {
        var _this = this;
        var query = "id=eq." + this.comment.id;
        var date = new Date();
        //let date = this.timezone.getCurrentDate();
        // FIX: Reset value to pass to DB just because DB less 1 hour
        date = Object(__WEBPACK_IMPORTED_MODULE_2_date_fns__["addHours"])(date, 1);
        // end
        var obj = {
            body_text: this.comment.body_text,
            updated_at: date
        };
        //console.log(obj);
        var subscription = this.service.update("comments", query, obj).subscribe(function (data) {
            obj.updated_at = new Date();
            _this.comment.updated_at = _this.getDistanceInWordsToNow(obj.updated_at);
            var id = _this.getByIdCurrentComment(event);
            var toolbar = document.querySelector('#' + id + ' .fr-toolbar');
            toolbar.style.display = "none";
            var textarea = document.querySelector('#' + id + ' textarea');
            $(textarea).froalaEditor("edit.off");
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    CommentListRowComponent.prototype.ngOnInit = function () {
        this.logged_account_id = +this.lsService.get("accountId");
        if (this.comment.updated_at !== null) {
            this.comment.updated_at = this.getDistanceInWordsToNow(this.comment.updated_at);
        }
    };
    CommentListRowComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CommentListRowComponent.prototype, "comment", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CommentListRowComponent.prototype, "account", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], CommentListRowComponent.prototype, "return_to_parent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("body_text", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CommentListRowComponent.prototype, "body_text", void 0);
    CommentListRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'comment-list-row',
            template: __webpack_require__("./src/app/components/tickets/comments/list/row/row.component.html"),
            styles: [__webpack_require__("./src/app/components/tickets/comments/list/row/row.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_7__helpers_timezone__["a" /* Timezone */],
            __WEBPACK_IMPORTED_MODULE_5__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_8__helpers_local_storage__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_6__accounts_service_account_service__["a" /* AccountService */]])
    ], CommentListRowComponent);
    return CommentListRowComponent;
}());



/***/ }),

/***/ "./src/app/components/tickets/comments/service/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CommentService = /** @class */ (function () {
    function CommentService() {
        this.comments = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.comment = this.comments.asObservable();
    }
    CommentService.prototype.changeComment = function (comments) {
        this.comments.next(comments);
    };
    CommentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "./src/app/components/tickets/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-all-side-40\">\n  <div class=\"card light mb-4\">\n    <alertMessage></alertMessage>\n    <div class=\"clearfix bg--light-grey rounded\" *ngIf=\"ticket\">\n      <section class=\"col-lg-9 pull-left p-all-side-25 bg--white border-right rounded-left rounded-bottom\" style=\"min-height: 810px;\">\n        <div class=\"mb-40\">\n          <p>\n            <i class=\"fa fa-square text-success mr-1\"></i> <span class=\"text-black-50\">TICKET-{{ticket.id}}</span>\n          </p>\n          <assignees-list [account_id]=\"account.id\" [ticket]=\"ticket\"></assignees-list>\n          <form #mainInfo=\"ngForm\" novalidate  class=\"form--light ticket-info ticket-info--main\">\n            <div class=\"form-group\" [ngClass]=\"{\n              'has-danger': title.invalid && (title.dirty || title.touched)\n            }\">\n              <label for=\"title\">Titolo </label> <span *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"text-danger\">* Campo non valido</span>\n              <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"ticket.title\" #title=\"ngModel\" required (change)=\"update(mainInfo)\" />\n            </div>\n            <div class=\"form-group\" [ngClass]=\"{\n              'has-danger': description.invalid && (description.dirty || description.touched)\n            }\">\n              <label for=\"description\">Descrizione </label> <span *ngIf=\"description.invalid && (description.dirty || description.touched)\" class=\"text-danger\">* Campo non valido</span>\n              <textarea [froalaEditor]=\"editor_options\" class=\"form-control\" name=\"description\" #description=\"ngModel\" [(ngModel)]=\"ticket.description\"></textarea>\n            </div>\n            <div class=\"ticket-info--main__buttons\" #buttons>\n              <button class=\"btn btn-info btn--shadow\" (click)=\"update(mainInfo)\" [disabled]=\"mainInfo.invalid\">Salva modifiche</button>\n              <button class=\"btn btn-warning btn--shadow\" (click)=\"revoke()\">Annulla</button>\n            </div>\n          </form>\n        </div>\n        <ticket-comments-list [account]=\"account\" [ticket_id]=\"ticket_id\" [comments]=\"comments\"></ticket-comments-list>\n        <hr class=\"mboth-40\">\n        <ticket-comments-add [comments]=\"comments\" [account]=\"account\" [reporter]=\"ticket.created_by\" [ticket_id]=\"ticket.id\"></ticket-comments-add>\n      </section>\n      <aside class=\"col-lg-3 pull-right p-all-side-25\">\n        <form #sideInfo=\"ngForm\" novalidate class=\"form--light\">\n          <div class=\"form-group\">\n            <label for=\"status\">Stato</label>\n            <select class=\"form-control\" name=\"status\" [(ngModel)]=\"ticket.status\" #status=\"ngModel\" (change)=\"onSelectionChange(sideInfo)\">\n              <option value=\"0\">Da lavorare</option>\n              <option value=\"1\">In lavorazione</option>\n              <option value=\"2\">In fase di controllo</option>\n              <option value=\"3\">Terminata</option>\n              <option value=\"4\">Rigettata</option>\n            </select>\n          </div>\n          <div class=\"form-group\" *ngIf=\"account\">\n            <label for=\"assignee_id\">Aggiungi assegnatario</label>\n            <select id=\"assignee_id\" class=\"form-control text-capitalize\" ngModel name=\"assignee_id\" #assignee_id=\"ngModel\" (change)=\"addAssignee(assignee_id)\">\n              <option value=\"\" disabled>Seleziona</option>\n              <option *ngFor=\"let account of accounts\" value=\"{{account.id}};{{account.firstname}};{{account.lastname}}\" class=\"text-capitalize\">\n                <!-- <span class=\"avatar radius small mr-3\" [style.background-color]=\"account.avatar_color\"></span> -->\n                {{account.firstname}} {{account.lastname}}\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group\" *ngIf=\"ticket.reporter\">\n            <label for=\"created_by\">Reporter</label>\n            <div class=\"form-control text-capitalize\">\n              {{ticket.reporter.firstname}} {{ticket.reporter.lastname}}\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"expire_at\">Data di scadenza</label>\n            <div class=\"form-control text-capitalize\">\n              {{ticket.expire_at}}\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <small>\n              <label for=\"created_at\">Giorni mancanti alla scadenza:</label>\n              <p for=\"created_at\">\n                {{deadline_at}}\n                <ng-container *ngIf=\"deadline_at != 0; else expired\">\n                  <ng-container *ngIf=\"deadline_at == 1; else moreThanOne\">giorno mancante</ng-container>\n                  <ng-template #moreThanOne>giorni mancanti</ng-template>\n                </ng-container>\n                <ng-template #expired><span class=\"badge badge-danger\">Issue scaduta</span></ng-template>\n              </p>\n            </small>\n          </div>\n          <div class=\"form-group\">\n            <small>\n              <label for=\"created_at\">Data di creazione:</label>\n              <p>{{created_at}} fa</p>\n            </small>\n          </div>\n          <div class=\"form-group\" *ngIf=\"ticket.updated_at\">\n            <small>\n              <label for=\"updated_at\">Data ultima modifica:</label>\n              <p>{{updated_at}} fa</p>\n            </small>\n          </div>\n        </form>\n      </aside>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/tickets/details/details.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tickets/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__accounts_service_account_service__ = __webpack_require__("./src/app/components/accounts/service/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_timezone__ = __webpack_require__("./src/app/helpers/timezone.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_local_storage__ = __webpack_require__("./src/app/helpers/local-storage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__helpers_navigation__ = __webpack_require__("./src/app/helpers/navigation.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Services



// Helpers



var TicketDetailsComponent = /** @class */ (function () {
    function TicketDetailsComponent(service, route, timezone, messageService, lsService, accountService, navigation) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.timezone = timezone;
        this.messageService = messageService;
        this.lsService = lsService;
        this.accountService = accountService;
        this.navigation = navigation;
        this.ticket = {};
        this.sub = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subscription__["a" /* Subscription */]();
        this.editor_options = {
            placeholderText: 'Inserisci testo',
            charCounterCount: false,
            toolbarVisibleWithoutSelection: false,
            toolbarSticky: false,
            toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', '|', 'fontFamily', 'fontSize', 'color', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', 'insertLink', 'insertTable', '|', 'insertHR', 'selectAll', 'clearFormatting', '|', 'undo', 'redo'],
            height: 300,
            theme: "gray",
            tooltips: true,
            events: {
                'froalaEditor.initialized': function (e, editor) {
                    editor.toolbar.hide();
                },
                'froalaEditor.focus': function (e, editor) {
                    editor.toolbar.show();
                }
            }
        };
        var subTicket = this.route.params.subscribe(function (params) {
            _this.ticket_id = +params['id'];
            _this.getcurrentTicketData(_this.ticket_id);
        });
        this.account = JSON.parse(this.lsService.get("account"));
        // let subLoggedAccount = this.accountService.logged_account.subscribe(
        //   (res: any) => {
        //     this.account = res;
        //   }
        // );
        this.sub
            .add(subTicket);
        //.add(subLoggedAccount);
    }
    TicketDetailsComponent.prototype.updateTicketFromChild = function (data) {
        this.updated_at = data.updated_at;
        this.ticket = data.ticket;
    };
    TicketDetailsComponent.prototype.onSelectionChange = function (form) {
        var _this = this;
        //console.log(form.value);
        //let form_copy = new Object(form.value);
        var form_copy = form.value;
        delete form_copy['assignee_id'];
        form_copy.updated_by = this.account.id;
        this.updated_at = this.timezone.getDistanceInWordsToNow(this.timezone.getCurrentDate());
        var query = "id=eq." + this.ticket.id;
        var subscription = this.service.update("tickets", query, form_copy).subscribe(function (data) {
            _this.messageService.setMessage('success');
        }, function (err) {
            console.log(err);
            _this.messageService.setMessage('rejected');
        });
        this.sub.add(subscription);
    };
    TicketDetailsComponent.prototype.update = function (form) {
        var _this = this;
        var query;
        if (this.ticket.updated_at != null) {
            query = "id=eq." + this.ticket.id + "&" + "updated_at=eq." + this.ticket.updated_at;
        }
        else {
            query = "id=eq." + this.ticket.id;
        }
        form.value.updated_by = this.account.id;
        form.value.updated_at = this.timezone.getCurrentDate();
        var subscription = this.service.update("tickets", query, form.value).subscribe(function (data) {
            _this.messageService.setMessage('success');
            _this.updated_at = _this.timezone.getDistanceInWordsToNow(new Date());
            _this.ticket.updated_at = form.value.updated_at;
            _this.hiddenToolbar();
            _this.hiddenButtons();
        }, function (err) {
            console.log(err);
            _this.messageService.setMessage('rejected');
        });
        this.sub.add(subscription);
    };
    TicketDetailsComponent.prototype.hiddenToolbar = function () {
        var description = this.description.nativeElement;
        $(description).froalaEditor('toolbar.hide');
    };
    TicketDetailsComponent.prototype.hiddenButtons = function () {
        var buttons = this.buttons.nativeElement;
        buttons.style.display = 'none';
    };
    TicketDetailsComponent.prototype.showButtons = function () {
        var buttons = this.buttons.nativeElement;
        buttons.style.display = 'block';
    };
    TicketDetailsComponent.prototype.revoke = function () {
        this.hiddenToolbar();
        this.hiddenButtons();
        this.getcurrentTicketData(this.ticket_id);
    };
    TicketDetailsComponent.prototype.getAssignees = function () {
        var _this = this;
        var request_query = "id=in." + "(" + this.ticket.assignees_id.toString() + ")" + "&deleted=is.false" + "&status=eq.1" + "&select=id,firstname,lastname";
        //let request_query = "id=in." + "(" + this.ticket.assignees_id.toString() + ")" + "&select=id,firstname,lastname";
        var subscription = this.service.getRecords("accounts", request_query).subscribe(function (data) {
            _this.ticket.assignees = data;
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    TicketDetailsComponent.prototype.getcurrentTicketData = function (ticket_id) {
        var _this = this;
        var query = "id=eq." + ticket_id + "&select=*, reporter: accounts(id, firstname, lastname)";
        var subscription = this.service.getRecord("tickets", query).subscribe(function (data) {
            _this.ticket = data;
            _this.getAssignees();
            _this.deadline_at = Math.abs(_this.timezone.getDifferenceInDays(_this.ticket.expire_at));
            _this.created_at = _this.timezone.getDistanceInWordsToNow(_this.ticket.created_at);
            _this.updated_at = _this.timezone.getDistanceInWordsToNow(_this.ticket.updated_at);
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    TicketDetailsComponent.prototype.getComments = function () {
        var _this = this;
        var query = "ticket_id=eq." + this.ticket_id + "&order=" + "id.asc" + "&select=*, account: accounts(avatar_color, firstname, lastname, id)";
        var subscription = this.service.getRecords("comments", query).subscribe(function (data) {
            _this.comments = data;
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    TicketDetailsComponent.prototype.checkIfAlreadySelected = function (data) {
        return this.ticket.assignees_id.includes(data);
    };
    TicketDetailsComponent.prototype.split = function (data) {
        var str = data.split(";");
        var obj = {
            "id": +str[0],
            "firstname": str[1],
            "lastname": str[2]
        };
        return obj;
    };
    TicketDetailsComponent.prototype.addAssignee = function (data) {
        var _this = this;
        var assigneeSelected = this.split(data.value);
        // Request
        var query_ticket;
        if (this.ticket.updated_at != null) {
            query_ticket = "id=eq." + this.ticket.id + "&" + "updated_at=eq." + this.ticket.updated_at;
        }
        else {
            query_ticket = "id=eq." + this.ticket.id;
        }
        // end
        // Check if account is has been already assignated to
        var resultCheck = this.checkIfAlreadySelected(assigneeSelected.id);
        if (resultCheck != true) {
            this.ticket.assignees_id.push(assigneeSelected.id);
            // Create obj to send
            var upload_ticket_1 = {
                "updated_by": this.account.id,
                "updated_at": this.timezone.getCurrentDate(),
                "assignees_id": "{" + this.ticket.assignees_id.join(",") + "}"
            };
            // end
            var subscription = this.service.update("tickets", query_ticket, upload_ticket_1).subscribe(function (data) {
                _this.messageService.setMessage('success');
                // Get current Date in words
                _this.updated_at = _this.timezone.getDistanceInWordsToNow(new Date());
                // end
                _this.ticket.updated_at = upload_ticket_1.updated_at;
                _this.ticket.assignees.push(assigneeSelected);
            }, function (err) {
                _this.messageService.setMessage('overwrite');
                console.log(err);
            });
            this.sub.add(subscription);
        }
        else {
            this.messageService.setMessage('prohibition');
        }
        // end
    };
    TicketDetailsComponent.prototype.getAccounts = function () {
        var _this = this;
        var query = "deleted=is.false" + "&status=eq." + 1 + "&id=neq." + this.account.id;
        var subscription = this.service.getRecords("accounts", query).subscribe(function (data) {
            _this.accounts = data;
        });
        this.sub.add(subscription);
    };
    TicketDetailsComponent.prototype.ngOnInit = function () {
        this.getComments();
        this.getAccounts();
    };
    TicketDetailsComponent.prototype.ngAfterViewInit = function () {
        var _self = this;
        this.hiddenButtons();
        $(this.description.nativeElement).on('froalaEditor.focus', function (e, editor) {
            _self.showButtons();
        });
    };
    TicketDetailsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("buttons", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TicketDetailsComponent.prototype, "buttons", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("description", { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], TicketDetailsComponent.prototype, "description", void 0);
    TicketDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/components/tickets/details/details.component.html"),
            styles: [__webpack_require__("./src/app/components/tickets/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_6__helpers_timezone__["a" /* Timezone */],
            __WEBPACK_IMPORTED_MODULE_4__services_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_7__helpers_local_storage__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_5__accounts_service_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_8__helpers_navigation__["a" /* NavigationService */]])
    ], TicketDetailsComponent);
    return TicketDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/tickets/filter-form/filter-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form #filtering=\"ngForm\" name=\"form\" class=\"filtering form-inline form--light\">\n  <div class=\"form-row align-items-center\">\n    <!-- <div class=\"col-auto\">\n      <select id=\"id\" class=\"filtering__field form-control mb-2\" ngModel name=\"id\" (change)=\"search(filtering)\">\n        <option value=\"null\" disabled>Ticket numero</option>\n        <option value=\"\">Nessun ticket</option>\n        <option *ngFor=\"let ticket of tickets\" value=\"{{ticket.id}}\">\n          TICKET-{{ticket.id}}\n        </option>\n      </select>\n    </div> -->\n    <div class=\"col-auto\">\n      <!-- <label class=\"justify-content-start mb-10\">Assegnato a</label> -->\n      <select id=\"assignees_id\" class=\"filtering__field form-control mb-2\" ngModel name=\"assignees_id\" (change)=\"search(filtering)\">\n        <option value=\"null\" disabled>Assegnato a</option>\n        <option value=\"\">Senza assegnazione</option>\n        <option *ngFor=\"let account of accounts\" value=\"{{account.id}}\" class=\"text-capitalize\">\n          {{account.firstname}} {{account.lastname}} <span *ngIf=\"account.status == 0\">NA</span>\n        </option>\n      </select>\n    </div>\n    <div class=\"col-auto\" *ngIf=\"account_profile == 0\">\n      <!-- <label class=\"justify-content-start mb-10\">Assegnato da</label> -->\n      <select id=\"created_by\" class=\"filtering__field form-control mb-2\" #created_by ngModel name=\"created_by\" (change)=\"search(filtering)\">\n        <option value=\"null\" disabled>Assegnato da</option>\n        <option value=\"\">Senza assegnazione</option>\n        <option *ngFor=\"let account of accounts\" value=\"{{account.id}}\" class=\"text-capitalize\">\n          {{account.firstname}} {{account.lastname}}\n        </option>\n      </select>\n    </div>\n    <div class=\"col-auto\">\n      <!-- <label class=\"justify-content-start mb-10\">Stato</label> -->\n      <select id=\"status\" class=\"filtering__field form-control mb-2\" ngModel name=\"status\" (change)=\"search(filtering)\">\n        <option value=\"null\" disabled>Stato</option>\n        <option value=\"\">Nessun stato</option>\n        <option value=\"0\">Da lavorare</option>\n        <option value=\"1\">In lavorazione</option>\n        <option value=\"2\">In fase di controllo</option>\n        <option value=\"3\">Terminata</option>\n        <option value=\"4\">Rigettata</option>\n      </select>\n    </div>\n    <div class=\"col-auto\">\n      <button type=\"button\" (click)=\"resetFilter(filtering)\" class=\"filtering__btn btn btn-link text--main_color mb-2\">\n        <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n        Annulla\n      </button>\n    </div>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/tickets/filter-form/filter-form.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tickets/filter-form/filter-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_build_request_url__ = __webpack_require__("./src/app/helpers/build-request-url.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_check_object__ = __webpack_require__("./src/app/helpers/check-object.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services

// Helpers


var FilterFormComponent = /** @class */ (function () {
    function FilterFormComponent(service, buildUrl, checkObject) {
        this.service = service;
        this.buildUrl = buildUrl;
        this.checkObject = checkObject;
        this.list = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.tickets = [];
        this.accounts = [];
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
        this.loadAllItems("accounts", "accounts", "active_and_not_deleted");
    }
    FilterFormComponent.prototype.resetFilter = function (data) {
        data.reset();
        this.search(data);
    };
    FilterFormComponent.prototype.search = function (data) {
        var query = "archived=" + "is." + this.archived;
        var return_not_empty_params = this.checkObject.getNotEmptyPropertiesValue(data.value);
        if (this.account_profile != 0) {
            // query = "archived=" + "is.false";
            //query = "and=" + "(archived.is.false" + ",or(" + "assignees_id.cs." + "{" + this.account_id + "}" + "," + "created_by.eq." + this.account_id + "))";
            if (return_not_empty_params["assignees_id"] == undefined) {
                query += "&" + "assignees_id=cs." + "{" + this.account_id + "}";
            }
            else if (return_not_empty_params["assignees_id"] != undefined) {
                if (return_not_empty_params["assignees_id"] != this.account_id) {
                    query += "&" + "created_by=eq." + this.account_id;
                }
            }
        }
        if (!this.checkObject.isBlank(return_not_empty_params)) {
            query += "&" + this.buildUrl.build(return_not_empty_params);
        }
        else {
            query = "assignees_id=cs." + "{" + this.account_id + "}" + "&archived=" + "is." + this.archived;
        }
        query += "&order=" + "id.desc" + "&select=*, reporter: accounts(id, firstname, lastname)";
        this.sendRequest(query);
    };
    FilterFormComponent.prototype.sendRequest = function (query) {
        var _this = this;
        var subscription = this.service.getRecords("tickets", query).subscribe(function (data) {
            var accounts = _this.accounts;
            var tickets = data;
            tickets.map(function (ticket) {
                ticket["accounts"] = [];
                ticket.assignees_id.forEach(function (account) {
                    accounts.forEach(function (elem) {
                        if (elem.id == account) {
                            var obj = {
                                "id": elem.id,
                                "firstname": elem.firstname,
                                "lastname": elem.lastname,
                                "avatar_color": elem.avatar_color
                            };
                            ticket.accounts.push(obj);
                        }
                    });
                });
            });
            _this.list.emit(tickets);
            //console.log(tickets)
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    FilterFormComponent.prototype.loadAllItems = function (table, variable, condition) {
        var _this = this;
        this.service.getAll(table, condition).subscribe(function (data) {
            _this[variable] = data;
        });
    };
    FilterFormComponent.prototype.ngOnInit = function () { };
    FilterFormComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], FilterFormComponent.prototype, "list", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], FilterFormComponent.prototype, "account_profile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], FilterFormComponent.prototype, "account_id", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], FilterFormComponent.prototype, "tickets", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], FilterFormComponent.prototype, "archived", void 0);
    FilterFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'filter-form',
            template: __webpack_require__("./src/app/components/tickets/filter-form/filter-form.component.html"),
            styles: [__webpack_require__("./src/app/components/tickets/filter-form/filter-form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_3__helpers_build_request_url__["a" /* RequestUrl */],
            __WEBPACK_IMPORTED_MODULE_4__helpers_check_object__["a" /* CheckObject */]])
    ], FilterFormComponent);
    return FilterFormComponent;
}());



/***/ }),

/***/ "./src/app/components/tickets/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid p-all-side-40\">\n  <alertMessage></alertMessage>\n  <div class=\"d-flex align-items-center mb-20\">\n    <h3 class=\"weight--light flex-fill mb-0\">I tuoi tickets</h3>\n    <a [routerLink]=\"['/tickets/add']\" class=\"btn btn--shadow btn-dark text-uppercase weight--light d-flex align-items-center pt-10 pb-10\">\n      Aggiungi ticket\n    </a>\n  </div>\n  <div class=\"mb-10\">\n    <filter-form (list)=\"tickets = $event\" [account_profile]=\"account_profile\" [account_id]=\"account_id\" [tickets]=\"tickets\" [archived]=\"false\"></filter-form>\n  </div>\n  <div class=\"card light mb-4 p-all-side-25\">\n    <table class=\"table table-striped avatar-list mb-0\" *ngIf=\"tickets.length; else noCurrentDayTicketList\">\n      <thead class=\"\">\n        <tr>\n          <th>Ticket N°</th>\n          <th>Assegnato a</th>\n          <th>Reporter</th>\n          <th>Scadenza</th>\n          <th>Titolo</th>\n          <th>Stato</th>\n          <th></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr [tickets]=\"tickets\" [ticket]=\"ticket\" [account_id]=\"account_id\"\n          [account_profile]=\"account_profile\"\n          *ngFor=\"let ticket of tickets | paginate: { itemsPerPage: 10, currentPage: p }\"\n          tickets-list-row>\n        </tr>\n      </tbody>\n    </table>\n    <ng-template #noCurrentDayTicketList>\n      <message-notrecords [message]=\"'Non sono presenti records salvati nel database'\"></message-notrecords>\n    </ng-template>\n    <div class=\"d-flex justify-content-center\" *ngIf=\"tickets.length >= 10\">\n      <pagination-controls class=\"pagination\" (pageChange)=\"p = $event\"></pagination-controls>\n    </div>\n  </div>\n  <back-button></back-button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/tickets/list/list.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tickets/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__accounts_service_account_service__ = __webpack_require__("./src/app/components/accounts/service/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_local_storage__ = __webpack_require__("./src/app/helpers/local-storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services


// Helpers

var TicketListComponent = /** @class */ (function () {
    function TicketListComponent(service, lsService, accountService) {
        this.service = service;
        this.lsService = lsService;
        this.accountService = accountService;
        this.accounts = [];
        this.tickets = [];
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
        this.p = 1;
        this.account = JSON.parse(this.lsService.get("account"));
        // this.accountService.logged_account.subscribe(
        //   (res: any) => {
        //     //console.log(res);
        //     this.account = res;
        //   }
        // );
        //this.account = this.accountService.logged_account;
        console.log(this.account);
        //this.account_id = this.accountService.logged_account;
        //this.account_profile = this.accountService.account_profile;
        this.loadAllItems("accounts", "accounts", "active_and_not_deleted");
    }
    TicketListComponent.prototype.get_tickets = function () {
        var _this = this;
        var query = "assignees_id=cs." + "{" + this.account.id + "}" + "&archived=" + "is.false" + "&order=" + "id.desc" + "&select=*, reporter: accounts(id, firstname, lastname)";
        var subscription = this.service.getRecords("tickets", query).subscribe(function (data) {
            var accounts = _this.accounts;
            _this.tickets = data;
            _this.tickets.map(function (ticket) {
                ticket["accounts"] = [];
                ticket.assignees_id.forEach(function (account) {
                    accounts.forEach(function (elem) {
                        if (elem.id == account) {
                            var obj = {
                                "id": elem.id,
                                "firstname": elem.firstname,
                                "lastname": elem.lastname,
                                "avatar_color": elem.avatar_color
                            };
                            ticket.accounts.push(obj);
                        }
                    });
                });
            });
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    TicketListComponent.prototype.loadAllItems = function (table, variable, condition) {
        var _this = this;
        this.service.getAll(table, condition).subscribe(function (data) {
            _this[variable] = data;
        });
    };
    TicketListComponent.prototype.ngOnInit = function () {
        this.get_tickets();
    };
    TicketListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    TicketListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/components/tickets/list/list.component.html"),
            styles: [__webpack_require__("./src/app/components/tickets/list/list.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_4__helpers_local_storage__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_3__accounts_service_account_service__["a" /* AccountService */]])
    ], TicketListComponent);
    return TicketListComponent;
}());



/***/ }),

/***/ "./src/app/components/tickets/list/row/row.component.html":
/***/ (function(module, exports) {

module.exports = "<td class=\"align-middle\">\n  TICKET-{{ticket.id}}\n</td>\n<td class=\"text-capitalize align-middle\">\n  <ng-container *ngFor=\"let account of ticket.accounts; index as i\">\n    <ng-container *ngIf=\"i <= 2\">\n      <span class=\"avatar avatar--inline radius small\" [style.background]=\"account.avatar_color\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{account.firstname}} {{account.lastname}}\">\n        {{account.firstname | slice:0:1}}\n      </span>\n    </ng-container>\n  </ng-container>\n  <ng-container *ngIf=\"ticket.accounts.length == 0\">\n    <p class=\"mb-0\">Nessun utente</p>\n  </ng-container>\n  <ng-container *ngIf=\"ticket.accounts.length > 3\">\n    <span class=\"navbar-notification nav-item dropdown\">\n      <a class=\"avatar avatar--inline radius small bg--white\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        + {{ticket.accounts.length - 3}}\n      </a>\n      <div class=\"dropdown-menu p-all-side-5 mt-5\">\n        <ng-container *ngFor=\"let account of ticket.accounts; index as i\">\n          <p *ngIf=\"i > 2\" class=\"mb-0\">\n            <span class=\"avatar radius small mr-2 border border--white\" [style.background]=\"account.avatar_color\">\n              {{account.firstname | slice:0:1}}\n            </span>\n            <small>{{account.firstname}} {{account.lastname}}</small>\n          </p>\n        </ng-container>\n      </div>\n    </span>\n  </ng-container>\n</td>\n<td class=\"text-capitalize align-middle\">\n  {{ticket.reporter.firstname}} {{ticket.reporter.lastname}}\n</td>\n<td class=\"align-middle\">\n  <div class=\"d-inline\" *ngIf=\"ticket.expire_at; else dateNull\">\n    <i class=\"fa fa-calendar\"></i>\n    <span>{{ticket.expire_at}}</span>\n  </div>\n  <ng-template #dateNull>\n    <p class=\"mb-0\">Non è stato settato un allarme</p>\n  </ng-template>\n</td>\n<td class=\"text-capitalize align-middle\">{{ticket.title | slice:0:20}}...</td>\n<td class=\"align-middle\">\n  <switch-status [status]=\"ticket.status\"></switch-status>\n</td>\n<td class=\"text-right\">\n  <a [routerLink]=\"['/tickets', ticket.id]\" class=\"btn btn-info\" title=\"Info\">\n    <i class=\"fa fa-info text--shadow\" aria-hidden=\"true\"></i>\n  </a>\n  <a [routerLink]=\"['/tickets', ticket.id]\" class=\"btn btn-success\" title=\"Modifica\">\n    <i class=\"fa fa-pencil text--shadow\" aria-hidden=\"true\"></i>\n  </a>\n  <button [ngClass]=\"{ 'disabled': ticket.created_by != account_id && account_profile != 0 }\"\n    class=\"btn btn-warning\" title=\"Archivia\"\n    [swal]=\"{ title: 'Sei sicuro di volerlo archiviare?', text: 'Sarà possibile ripristinarlo successivamente.', showCancelButton: true }\" (confirm)=\"archiveIt()\">\n    <i class=\"fa fa-archive text--shadow\" aria-hidden=\"true\"></i>\n  </button>\n</td>\n"

/***/ }),

/***/ "./src/app/components/tickets/list/row/row.component.scss":
/***/ (function(module, exports) {

module.exports = ".avatar--inline {\n  margin-left: -10px;\n  position: relative; }\n  .avatar--inline:hover {\n    z-index: 9999;\n    top: -3px; }\n"

/***/ }),

/***/ "./src/app/components/tickets/list/row/row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketListRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__ = __webpack_require__("./node_modules/rxjs/_esm5/Subscription.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_http_service__ = __webpack_require__("./src/app/services/http.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// Services


var TicketListRowComponent = /** @class */ (function () {
    function TicketListRowComponent(service, messageService) {
        this.service = service;
        this.messageService = messageService;
        this.tickets = [];
        this.sub = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subscription__["a" /* Subscription */]();
    }
    TicketListRowComponent.prototype.archiveIt = function () {
        var _this = this;
        var index = this.tickets.indexOf(this.ticket);
        var archived = {
            "archived": true,
            "updated_by": this.account_id
        };
        var subscription = this.service.archived("tickets", this.ticket.id, archived).subscribe(function (data) {
            _this.tickets.splice(index, 1);
            _this.messageService.setMessage('archive');
        }, function (err) {
            console.log(err);
        });
        this.sub.add(subscription);
    };
    TicketListRowComponent.prototype.ngOnInit = function () { };
    TicketListRowComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TicketListRowComponent.prototype, "ticket", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], TicketListRowComponent.prototype, "tickets", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], TicketListRowComponent.prototype, "account_profile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], TicketListRowComponent.prototype, "account_id", void 0);
    TicketListRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[tickets-list-row]',
            template: __webpack_require__("./src/app/components/tickets/list/row/row.component.html"),
            styles: [__webpack_require__("./src/app/components/tickets/list/row/row.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_http_service__["a" /* Service */],
            __WEBPACK_IMPORTED_MODULE_2__services_message_service__["a" /* MessageService */]])
    ], TicketListRowComponent);
    return TicketListRowComponent;
}());



/***/ }),

/***/ "./src/app/components/widgets/alert-message/alert-message.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-{{message.class}} alert-dismissible fixed bounceInDown animated\" [ngClass]=\"{ 'd-block': message.display }\" role=\"alert\" *ngIf=\"message\">\n  {{message.text}}\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/widgets/alert-message/alert-message.component.scss":
/***/ (function(module, exports) {

module.exports = ".alert-dismissible {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n  .alert-dismissible .close {\n    padding: 0.65rem 1.25rem; }\n  .fixed {\n  position: fixed;\n  left: 0;\n  top: 0;\n  z-index: 99999;\n  width: 100%;\n  border-radius: 0; }\n"

/***/ }),

/***/ "./src/app/components/widgets/alert-message/alert-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_message_service__ = __webpack_require__("./src/app/services/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services

var AlertMessageComponent = /** @class */ (function () {
    function AlertMessageComponent(messageService) {
        var _this = this;
        this.messageService = messageService;
        // subscribe to home component messages
        this.subscription = this.messageService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    }
    AlertMessageComponent.prototype.ngOnInit = function () { };
    AlertMessageComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    AlertMessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'alertMessage',
            template: __webpack_require__("./src/app/components/widgets/alert-message/alert-message.component.html"),
            styles: [__webpack_require__("./src/app/components/widgets/alert-message/alert-message.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_message_service__["a" /* MessageService */]])
    ], AlertMessageComponent);
    return AlertMessageComponent;
}());



/***/ }),

/***/ "./src/app/components/widgets/back-button/back-button.component.html":
/***/ (function(module, exports) {

module.exports = "<button (click)=\"goBack()\" class=\"btn btn-dark btn--shadow weight--light\">\n  <!-- <i class=\"fa fa-long-arrow-left\" aria-hidden=\"true\"></i> -->\n  Indietro\n</button>\n"

/***/ }),

/***/ "./src/app/components/widgets/back-button/back-button.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widgets/back-button/back-button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BackButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BackButtonComponent = /** @class */ (function () {
    function BackButtonComponent(location) {
        this.location = location;
    }
    BackButtonComponent.prototype.goBack = function () {
        this.location.back();
    };
    BackButtonComponent.prototype.ngOnInit = function () {
    };
    BackButtonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'back-button',
            template: __webpack_require__("./src/app/components/widgets/back-button/back-button.component.html"),
            styles: [__webpack_require__("./src/app/components/widgets/back-button/back-button.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]])
    ], BackButtonComponent);
    return BackButtonComponent;
}());



/***/ }),

/***/ "./src/app/components/widgets/buddle-boxes/buddle-boxes.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"bubble-boxes\">\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n  <li></li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/widgets/buddle-boxes/buddle-boxes.component.scss":
/***/ (function(module, exports) {

module.exports = "/*Bubble Boxes Animation CSS*/\n.bubble-boxes {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 40%; }\n.bubble-boxes li {\n    position: absolute;\n    list-style: none;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 20px;\n    height: 20px;\n    background: rgba(255, 255, 255, 0.2);\n    -webkit-animation: animate 25s linear infinite;\n            animation: animate 25s linear infinite;\n    bottom: -800px; }\n.bubble-boxes li:nth-child(1) {\n      left: 25%;\n      width: 80px;\n      height: 80px;\n      -webkit-animation-delay: 0;\n              animation-delay: 0; }\n.bubble-boxes li:nth-child(2) {\n      left: 10%;\n      width: 20px;\n      height: 20px;\n      -webkit-animation-delay: 2s;\n              animation-delay: 2s;\n      -webkit-animation-duration: 12s;\n              animation-duration: 12s; }\n.bubble-boxes li:nth-child(3) {\n      left: 70%;\n      width: 20px;\n      height: 20px;\n      -webkit-animation-delay: 4s;\n              animation-delay: 4s; }\n.bubble-boxes li:nth-child(4) {\n      left: 40%;\n      width: 60px;\n      height: 60px;\n      -webkit-animation-delay: 0s;\n              animation-delay: 0s;\n      -webkit-animation-duration: 18s;\n              animation-duration: 18s; }\n.bubble-boxes li:nth-child(5) {\n      left: 65%;\n      width: 20px;\n      height: 20px;\n      -webkit-animation-delay: 0s;\n              animation-delay: 0s; }\n.bubble-boxes li:nth-child(6) {\n      left: 75%;\n      width: 110px;\n      height: 110px;\n      -webkit-animation-delay: 3s;\n              animation-delay: 3s; }\n.bubble-boxes li:nth-child(7) {\n      left: 35%;\n      width: 150px;\n      height: 150px;\n      -webkit-animation-delay: 7s;\n              animation-delay: 7s; }\n.bubble-boxes li:nth-child(8) {\n      left: 50%;\n      width: 25px;\n      height: 25px;\n      -webkit-animation-delay: 15s;\n              animation-delay: 15s;\n      -webkit-animation-duration: 45s;\n              animation-duration: 45s; }\n.bubble-boxes li:nth-child(9) {\n      left: 20%;\n      width: 15px;\n      height: 15px;\n      -webkit-animation-delay: 2s;\n              animation-delay: 2s;\n      -webkit-animation-duration: 35s;\n              animation-duration: 35s; }\n.bubble-boxes li:nth-child(10) {\n      left: 85%;\n      width: 150px;\n      height: 150px;\n      -webkit-animation-delay: 0s;\n              animation-delay: 0s;\n      -webkit-animation-duration: 12s;\n              animation-duration: 12s; }\n@-webkit-keyframes animate {\n  0% {\n    -webkit-transform: translateY(0) rotate(0deg);\n            transform: translateY(0) rotate(0deg);\n    opacity: 1;\n    border-radius: 0; }\n  100% {\n    -webkit-transform: translateY(-1000px) rotate(720deg);\n            transform: translateY(-1000px) rotate(720deg);\n    opacity: 1;\n    border-radius: 50%; } }\n@keyframes animate {\n  0% {\n    -webkit-transform: translateY(0) rotate(0deg);\n            transform: translateY(0) rotate(0deg);\n    opacity: 1;\n    border-radius: 0; }\n  100% {\n    -webkit-transform: translateY(-1000px) rotate(720deg);\n            transform: translateY(-1000px) rotate(720deg);\n    opacity: 1;\n    border-radius: 50%; } }\n"

/***/ }),

/***/ "./src/app/components/widgets/buddle-boxes/buddle-boxes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BuddleBoxesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BuddleBoxesComponent = /** @class */ (function () {
    function BuddleBoxesComponent() {
    }
    BuddleBoxesComponent.prototype.ngOnInit = function () {
    };
    BuddleBoxesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'buddle-boxes',
            template: __webpack_require__("./src/app/components/widgets/buddle-boxes/buddle-boxes.component.html"),
            styles: [__webpack_require__("./src/app/components/widgets/buddle-boxes/buddle-boxes.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BuddleBoxesComponent);
    return BuddleBoxesComponent;
}());



/***/ }),

/***/ "./src/app/components/widgets/dropdown-icon-nav/dropdown-icon-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-notification nav-item dropdown\" *ngIf=\"list\">\n  <a class=\"nav-link dropdown-toggle hide-arrow text-dark\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n    <i class=\"fa fa-{{icon_class}}\" aria-hidden=\"true\" class=\"position-relative\">\n      <span class=\"badge dot top bg--main navbar-notification__dot\" [ngClass]=\"list.length ? 'animation' : ''\"></span>\n    </i>\n\n  </a>\n  <div class=\"dropdown-menu-right dropdown-menu\">\n    <div class=\"alarm-notifications\">\n      <ul class=\"list-unstyled mb-0\" *ngIf=\"list.length; else noNotesList\">\n        <ng-container *ngFor=\"let current of list; let i=index\">\n          <li class=\"border-bottom\" *ngIf=\"i <= 3\">\n            <div class=\"media d-flex align-items-center alarm-notifications__item\">\n              <div class=\"mr-3 alarm-notifications__item-icon\">\n                <i class=\"fa fa-{{icon_class}}-o fa-2x text--main_color\"></i>\n              </div>\n              <div class=\"media-body\">\n                <a [routerLink]=\"['/notes', current.id]\" class=\"alarm-notifications__linking\">\n                  <small class=\"weight--light text-body\">{{current.alarm_date}} <span class=\"ml-2 mr-2\">|</span> {{current.alarm_time}}</small>\n                  <p class=\"mb-0 text-capitalize weight--light text-dark\">{{current.title}}</p>\n                </a>\n              </div>\n            </div>\n          </li>\n        </ng-container>\n      </ul>\n      <ng-template #noNotesList>\n        <message-notrecords [message]=\"'Non sono presenti appunti per oggi'\"></message-notrecords>\n      </ng-template>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/widgets/dropdown-icon-nav/dropdown-icon-nav.component.scss":
/***/ (function(module, exports) {

module.exports = ".navbar-notification .nav-link {\n  position: relative;\n  color: white;\n  cursor: pointer; }\n\n.navbar-notification__dot {\n  right: 7px !important; }\n\n.navbar-notification__dot.animation {\n    -webkit-animation: pulse 1s infinite;\n    /* Safari 4.0 - 8.0 */\n    animation: pulse 1s infinite; }\n\n.alarm-notifications {\n  width: 320px; }\n\n.alarm-notifications li {\n    padding: 10px; }\n\n.alarm-notifications li:last-child {\n      border-bottom: 0 !important; }\n\n.alarm-notifications__item {\n    cursor: pointer;\n    padding: 10px;\n    -webkit-transition: all 0.3s ease-out;\n    transition: all 0.3s ease-out; }\n\n.alarm-notifications__item:hover {\n      background-color: rgba(0, 0, 0, 0.05); }\n\n.alarm-notifications__item .icon {\n      width: 50px;\n      height: 50px;\n      line-height: 50px;\n      border-radius: 50% !important;\n      text-align: center;\n      background: rgba(0, 0, 0, 0.05);\n      display: -webkit-inline-box;\n      display: -ms-inline-flexbox;\n      display: inline-flex;\n      position: relative;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      text-align: center;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center; }\n\n.alarm-notifications__linking {\n    display: block; }\n\n.alarm-notifications__linking:hover {\n      text-decoration: none; }\n\n@-webkit-keyframes pulse {\n  0% {\n    background-color: #0094D4; }\n  100% {\n    background-color: transparent; } }\n\n@keyframes pulse {\n  0% {\n    background-color: #0094D4; }\n  100% {\n    background-color: transparent; } }\n"

/***/ }),

/***/ "./src/app/components/widgets/dropdown-icon-nav/dropdown-icon-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownIconNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownIconNavComponent = /** @class */ (function () {
    function DropdownIconNavComponent() {
        this.list = [];
    }
    DropdownIconNavComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], DropdownIconNavComponent.prototype, "icon_class", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], DropdownIconNavComponent.prototype, "list", void 0);
    DropdownIconNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dropdown-icon-nav',
            template: __webpack_require__("./src/app/components/widgets/dropdown-icon-nav/dropdown-icon-nav.component.html"),
            styles: [__webpack_require__("./src/app/components/widgets/dropdown-icon-nav/dropdown-icon-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DropdownIconNavComponent);
    return DropdownIconNavComponent;
}());



/***/ }),

/***/ "./src/app/components/widgets/message-notrecords/message-notrecords.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"alert alert-warning mb-0\">{{message}}</p>\n"

/***/ }),

/***/ "./src/app/components/widgets/message-notrecords/message-notrecords.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widgets/message-notrecords/message-notrecords.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageNotrecordsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageNotrecordsComponent = /** @class */ (function () {
    function MessageNotrecordsComponent() {
        this.message = "";
    }
    MessageNotrecordsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], MessageNotrecordsComponent.prototype, "message", void 0);
    MessageNotrecordsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'message-notrecords',
            template: __webpack_require__("./src/app/components/widgets/message-notrecords/message-notrecords.component.html"),
            styles: [__webpack_require__("./src/app/components/widgets/message-notrecords/message-notrecords.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MessageNotrecordsComponent);
    return MessageNotrecordsComponent;
}());



/***/ }),

/***/ "./src/app/components/widgets/modal-prompt/modal-prompt.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal message-modal fade\" id=\"messageModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"messageModal\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <h2>{{message.text}}</h2>\n        <p>\n          Tutti i dati associati saranno permanentemente rimossi<br>\n          Non sarà più possibile tornare indietro!\n        </p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-lg btn--dark\" data-dismiss=\"modal\" (click)=\"setConfirm('true')\">Si</button>\n        <button type=\"button\" class=\"btn btn-lg btn--dark\" data-dismiss=\"modal\" (click)=\"setConfirm('false')\">Annulla</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/widgets/modal-prompt/modal-prompt.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widgets/modal-prompt/modal-prompt.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPromptComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalPromptComponent = /** @class */ (function () {
    function ModalPromptComponent() {
        this.confirm = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    ModalPromptComponent.prototype.setConfirm = function (data) {
        this.confirm.emit(data);
    };
    ModalPromptComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ModalPromptComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ModalPromptComponent.prototype, "confirm", void 0);
    ModalPromptComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'modalPrompt',
            template: __webpack_require__("./src/app/components/widgets/modal-prompt/modal-prompt.component.html"),
            styles: [__webpack_require__("./src/app/components/widgets/modal-prompt/modal-prompt.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ModalPromptComponent);
    return ModalPromptComponent;
}());



/***/ }),

/***/ "./src/app/components/widgets/notify-alert/item/item.component.html":
/***/ (function(module, exports) {

module.exports = "<li class=\"notify-alert__item\">\n  <div class=\"alert alert-dismissible\" role=\"alert\">\n    <p class=\"mb-0\">\n      {{message.text}}\n      <a [routerLink]=\"['/' + message.table, message.id]\" *ngIf=\"message.table != 'comments'; else comments\">Guarda!</a>\n      <ng-template #comments>\n        <a [routerLink]=\"['/tickets', data.ticket_id]\">Guarda!</a>\n      </ng-template>\n    </p>\n    <button type=\"button\" (click)=\"removeIt()\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n      <span aria-hidden=\"true\" class=\"text--main_color\">&times;</span>\n    </button>\n  </div>\n</li>\n"

/***/ }),

/***/ "./src/app/components/widgets/notify-alert/item/item.component.scss":
/***/ (function(module, exports) {

module.exports = ".notify-alert__item {\n  background: white;\n  border-right: 0;\n  border-radius: 3px;\n  padding-bottom: 15px; }\n  .notify-alert__item .alert {\n    padding-right: 25px; }\n  .notify-alert__item .alert .close {\n      padding: 0;\n      display: block; }\n"

/***/ }),

/***/ "./src/app/components/widgets/notify-alert/item/item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifyAlertItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotifyAlertItemComponent = /** @class */ (function () {
    function NotifyAlertItemComponent() {
    }
    NotifyAlertItemComponent.prototype.removeIt = function () {
        var index = this.messages.indexOf(this.message);
        this.messages.splice(index, 1);
    };
    NotifyAlertItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], NotifyAlertItemComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], NotifyAlertItemComponent.prototype, "message", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], NotifyAlertItemComponent.prototype, "messages", void 0);
    NotifyAlertItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'notify-alert-item',
            template: __webpack_require__("./src/app/components/widgets/notify-alert/item/item.component.html"),
            styles: [__webpack_require__("./src/app/components/widgets/notify-alert/item/item.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotifyAlertItemComponent);
    return NotifyAlertItemComponent;
}());



/***/ }),

/***/ "./src/app/components/widgets/notify-alert/notify-alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"notify-alert hide bounceInRight animated\">\n  <div class=\"p-all-side-15\">\n    <h4 class=\"text-center\">\n      Notifiche\n      <button type=\"button\" class=\"notify-alert__btn close\" aria-label=\"Close\" (click)=\"hideSidebar()\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </h4>\n    <hr class=\"mb-0\"/>\n  </div>\n  <button class=\"notify-alert__btn notify-alert__btn--show\" (click)=\"hideSidebar()\">\n    <i class=\"fa fa-flash\"></i>\n  </button>\n  <ng-container *ngIf=\"messages.length; else noNotifications\">\n    <ul class=\"notify-alert__list list-unstyled\">\n      <notify-alert-item [messages]=\"messages\" [data]=\"data\" [message]=\"message\" *ngFor=\"let message of messages; let i=index\"></notify-alert-item>\n    </ul>\n    <div class=\"pl-3 pr-3 pb-3\">\n      <button (click)=\"deleteAllNotifications()\" class=\"btn btn-primary\">Cancella notifiche</button>\n    </div>\n  </ng-container>\n  <ng-template #noNotifications>\n    <p class=\"mb-0 p-all-side-15\">\n      <span class=\"alert alert-warning mb-0 d-block\">Non ci sono notifiche.</span>\n    </p>\n  </ng-template>\n</div>\n"

/***/ }),

/***/ "./src/app/components/widgets/notify-alert/notify-alert.component.scss":
/***/ (function(module, exports) {

module.exports = ".notify-alert {\n  z-index: 9999;\n  position: absolute;\n  right: 0px;\n  top: 80px;\n  bottom: 0;\n  background-color: white;\n  -webkit-box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  width: 390px; }\n  .notify-alert.hide {\n    right: -392px; }\n  .notify-alert__btn {\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s; }\n  .notify-alert__btn.open {\n      background-color: #0094D4; }\n  .notify-alert__btn.open i {\n        color: white; }\n  .notify-alert__btn:focus {\n      outline: none !important; }\n  .notify-alert__btn--show {\n      cursor: pointer;\n      width: 35px;\n      height: 35px;\n      -webkit-box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n      box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);\n      border: 0;\n      border-top-left-radius: 3px;\n      border-bottom-left-radius: 3px;\n      position: absolute;\n      left: -35px;\n      top: 0;\n      background-color: white; }\n  .notify-alert__btn--show i {\n        color: #0094D4; }\n  .notify-alert__list {\n    position: relative;\n    margin: 0;\n    padding: 15px 15px 0; }\n  .notify-alert__list.hide {\n      display: none;\n      margin-right: 0; }\n"

/***/ }),

/***/ "./src/app/components/widgets/notify-alert/notify-alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotifyAlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_event_source_listener_service__ = __webpack_require__("./src/app/services/event-source-listener.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Services

var NotifyAlertComponent = /** @class */ (function () {
    function NotifyAlertComponent(eventSourceListenerService) {
        var _this = this;
        this.eventSourceListenerService = eventSourceListenerService;
        this.bar_open = false;
        this.messages = [];
        this.subscription = this.eventSourceListenerService.getData().subscribe(function (data) {
            if (data.message !== undefined) {
                if (_this.account.settings.tickets_notifications == true) {
                    _this.data = data.message.record;
                    _this.messages.push(_this.switchMessage(data.message.record.id, data.message.operation, data.message.table));
                    $(".notify-alert__btn").addClass("open");
                }
            }
        });
    }
    NotifyAlertComponent.prototype.hideSidebar = function () {
        this.bar_open = !this.bar_open;
        $(".notify-alert").toggleClass("hide");
    };
    NotifyAlertComponent.prototype.deleteAllNotifications = function () {
        this.messages = [];
        $(".notify-alert__btn").removeClass("open");
    };
    NotifyAlertComponent.prototype.switchMessage = function (id, operation, table) {
        var casestudies = { "DELETE": 1, "ARCHIVE": 2, "INSERT": 3, "UPDATE": 4 };
        switch (casestudies[operation]) {
            case 1:
                {
                    if (table == 'tickets') {
                        return {
                            "id": id,
                            "text": "Il ticket TICKET-" + id + " è stato cancellato.",
                            "table": table,
                            "operation": operation
                        };
                    }
                    else if (table == 'comments') {
                        return {
                            "id": id,
                            "text": "Al ticket TICKET-" + this.data.ticket_id + " è stato eliminato un commento.",
                            "table": table,
                            "operation": operation
                        };
                    }
                    else if (table == 'documents') {
                        return {
                            "id": id,
                            "text": "Il document DOCUMENT-" + id + " è stato cancellato.",
                            "table": table,
                            "operation": operation
                        };
                    }
                }
                ;
            case 2:
                {
                    if (table == 'tickets') {
                        return {
                            "id": id,
                            "text": "Il ticket TICKET-" + id + " è stato archiviato.",
                            "table": table,
                            "operation": operation
                        };
                    }
                    else if (table == 'documents') {
                        return {
                            "id": id,
                            "text": "Il documento DOCUMNT-" + id + " è stato archiviato.",
                            "table": table,
                            "operation": operation
                        };
                    }
                }
                ;
            case 3:
                {
                    if (table == 'tickets') {
                        return {
                            "id": id,
                            "text": "Ti è stato assegnato un nuovo ticket",
                            "table": table,
                            "operation": operation
                        };
                    }
                    else if (table == 'comments') {
                        return {
                            "id": id,
                            "text": "E' stato inserito un nuovo commento al ticket " + "TICKET-" + this.data.ticket_id,
                            "table": table,
                            "operation": operation
                        };
                    }
                }
                ;
            case 4:
                {
                    if (table == 'tickets') {
                        return {
                            "id": id,
                            "text": "Il ticket TICKET-" + id + " è stato modificato.",
                            "table": table,
                            "operation": operation
                        };
                    }
                    else if (table == 'comments') {
                        return {
                            "id": id,
                            "text": "Al ticket TICKET-" + this.data.ticket_id + " è stato modificato un commento.",
                            "table": table,
                            "operation": operation
                        };
                    }
                    else if (table == 'documents') {
                        return {
                            "id": id,
                            "text": "Il documento DOCUMENT-" + id + " è stato modificato.",
                            "table": table,
                            "operation": operation
                        };
                    }
                }
                ;
        }
    };
    NotifyAlertComponent.prototype.ngOnDestroy = function () {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    };
    NotifyAlertComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], NotifyAlertComponent.prototype, "account", void 0);
    NotifyAlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'notify-alert',
            template: __webpack_require__("./src/app/components/widgets/notify-alert/notify-alert.component.html"),
            styles: [__webpack_require__("./src/app/components/widgets/notify-alert/notify-alert.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_event_source_listener_service__["a" /* EventSourceListenerService */]])
    ], NotifyAlertComponent);
    return NotifyAlertComponent;
}());



/***/ }),

/***/ "./src/app/components/widgets/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <section class=\"error-page\">\n    <div class=\"error-page__inner\">\n      <h1 class=\"error-page__title\">404</h1>\n      <h2 class=\"error-page__subtitle\">La pagina che stai cercando non esiste</h2>\n      <p class=\"error-page__description\">Donec in ex eget orci facilisis gravida vitae ut tortor. In tempus lacus ac dui iaculis, placerat tempus diam vehiculaed suscipit tortor id lorem mollis</p>\n    </div>\n  </section>\n</div>\n"

/***/ }),

/***/ "./src/app/components/widgets/page-not-found/page-not-found.component.scss":
/***/ (function(module, exports) {

module.exports = ".error-page__inner {\n  margin: 0 auto;\n  max-width: 600px;\n  width: 100%;\n  padding: 3rem;\n  text-align: center;\n  border-radius: 10px;\n  background-color: rgba(0, 0, 0, 0.2); }\n\n.error-page__title {\n  font-size: 8rem;\n  color: white;\n  font-weight: 700;\n  text-shadow: 0 0 10px rgba(0, 0, 0, 0.03);\n  line-height: 100%;\n  margin-bottom: 1.5rem; }\n\n.error-page__subtitle {\n  margin: 1.3rem 0;\n  font-size: 1.5rem;\n  color: rgba(255, 255, 255, 0.85);\n  font-weight: 400; }\n\n.error-page__description {\n  font-size: 1.1rem;\n  color: rgba(255, 255, 255, 0.7);\n  font-weight: 300; }\n"

/***/ }),

/***/ "./src/app/components/widgets/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/components/widgets/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/components/widgets/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/widgets/search-form/_services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_service__ = __webpack_require__("./src/app/components/widgets/search-form/_services/search.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__search_service__["a"]; });



/***/ }),

/***/ "./src/app/components/widgets/search-form/_services/search.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.base_url = 'http://' + window.location.hostname + ':3000/';
    }
    SearchService.prototype.buildUrl = function (dataForRequest, value) {
        var url = "";
        var query_url = '?';
        // let table = dataForRequest.table;
        /*
        Ogni volta che entro in questa funzione ( quindi a ogni keyup), devo resettare
        query_url e base_url perchè ogni volta che entra a base_url aggiunge il nome della tabella
        passata quindi se non elimini la stringa della tabella passata la riaggiunege
        nuovamente, ottenendo la seguente stringa: "http://localhost:3000/dubbersdubbers"
        */
        //query_url = "?";
        this.base_url = 'http://' + window.location.hostname + ':3000/';
        // end
        if (value != "") {
            this.base_url += dataForRequest.table;
            var params = dataForRequest.parameters;
            var array_params_1 = [];
            params.map(function (par) {
                var string = par + ".ilike.*" + value + "*";
                array_params_1.push(string);
            });
            query_url += "or=(" + array_params_1.join(",") + ")";
            query_url += "&" + dataForRequest.condition;
            url += this.base_url + query_url;
        }
        else {
            url += this.base_url + dataForRequest.table + "?" + dataForRequest.condition;
        }
        var results = this.sendSearch(url);
        return results;
    };
    SearchService.prototype.sendSearch = function (url) {
        return this.http.get(url);
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/components/widgets/search-form/search-form.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"search\" id=\"search-form\">\n  <div class=\"search__inner\">\n    <input type=\"text\" #searchInput class=\"search__text\" placeholder=\"Cerca\">\n    <i class=\"fa fa-search search__helper\"></i>\n    <button class=\"search__empty\" (click)=\"emptyResearch()\">\n      <i class=\"fa fa-close\"></i>\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/widgets/search-form/search-form.component.scss":
/***/ (function(module, exports) {

module.exports = ".search {\n  border-radius: 4px;\n  background-color: white;\n  width: 50%;\n  border: 1px solid #ced4da; }\n  .search:focus {\n    outline: 0 !important; }\n  .search__inner {\n    position: relative; }\n  .search__empty {\n    cursor: pointer;\n    position: absolute;\n    right: 11px;\n    top: 11px;\n    border: 0;\n    background-color: transparent; }\n  .search__empty:focus {\n      outline: 0 !important; }\n  .search__text {\n    background-color: rgba(255, 255, 255, 0.08);\n    color: black;\n    border: 0;\n    border-radius: 2px;\n    width: 100%;\n    height: 2.9rem;\n    padding-left: 3rem;\n    -webkit-transition: background-color 0.3s, color 0.3s;\n    transition: background-color 0.3s, color 0.3s; }\n  .search__text:focus {\n      outline: 0 !important; }\n  .search__text::-moz-placeholder {\n      color: black;\n      opacity: 1; }\n  .search__text:-ms-input-placeholder {\n      color: black; }\n  .search__text::-webkit-input-placeholder {\n      color: black; }\n  .search__helper {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 3rem;\n    height: 100%;\n    font-size: 1.3rem;\n    color: #0094D4;\n    text-align: center;\n    line-height: 2.9rem;\n    cursor: pointer;\n    -webkit-transition: color 0.3s, transform 0.4s;\n    -webkit-transition: color 0.3s, -webkit-transform 0.4s;\n    transition: color 0.3s, -webkit-transform 0.4s;\n    transition: color 0.3s, transform 0.4s;\n    transition: color 0.3s, transform 0.4s, -webkit-transform 0.4s; }\n"

/***/ }),

/***/ "./src/app/components/widgets/search-form/search-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("./src/app/components/widgets/search-form/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Subject } from 'rxjs/Subject';


// Services

var SearchFormComponent = /** @class */ (function () {
    function SearchFormComponent(searchService) {
        this.searchService = searchService;
        this.results = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    SearchFormComponent.prototype.submit = function (value) {
        var _this = this;
        this.searchService.buildUrl(this.setDataForRequest, value).subscribe(function (data) {
            _this.results.emit(data);
        });
    };
    SearchFormComponent.prototype.emptyResearch = function () {
        var input_value = this.searchInput.nativeElement.value;
        if (input_value != "") {
            var empty_field = this.searchInput.nativeElement.value = "";
            this.submit(empty_field);
        }
    };
    SearchFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].fromEvent(this.searchInput.nativeElement, 'keyup')
            .map(function (evt) { return evt.target.value; })
            .debounceTime(1000)
            .distinctUntilChanged()
            .subscribe(function (text) { return _this.submit(text); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchFormComponent.prototype, "setDataForRequest", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], SearchFormComponent.prototype, "results", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('searchInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], SearchFormComponent.prototype, "searchInput", void 0);
    SearchFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'search-form',
            template: __webpack_require__("./src/app/components/widgets/search-form/search-form.component.html"),
            styles: [__webpack_require__("./src/app/components/widgets/search-form/search-form.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* SearchService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* SearchService */]])
    ], SearchFormComponent);
    return SearchFormComponent;
}());



/***/ }),

/***/ "./src/app/components/widgets/switch-status/switch-status.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"status\" class=\"p-all-side-5 mb-0\">\n  <p *ngSwitchCase=\"'0'\">\n    <i class=\"badge dot badge-secondary\"></i> <span class=\"text-secondary\">Da lavorare</span>\n  </p>\n  <p *ngSwitchCase=\"'1'\">\n    <i class=\"badge dot badge-primary\"></i> <span class=\"text-primary\">In lavorazione</span>\n  </p>\n  <p *ngSwitchCase=\"'2'\">\n    <i class=\"badge dot badge-info\"></i> <span class=\"text-info\">In fase di controllo</span>\n  </p>\n  <p *ngSwitchCase=\"'3'\">\n    <i class=\"badge dot badge-success\"></i> <span class=\"text-success\">Terminata</span>\n  </p>\n  <p *ngSwitchCase=\"'4'\">\n    <i class=\"badge dot badge-danger\"></i> <span class=\"text-danger\">Rigettata</span>\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/components/widgets/switch-status/switch-status.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widgets/switch-status/switch-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwitchStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SwitchStatusComponent = /** @class */ (function () {
    function SwitchStatusComponent() {
    }
    SwitchStatusComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SwitchStatusComponent.prototype, "status", void 0);
    SwitchStatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'switch-status',
            template: __webpack_require__("./src/app/components/widgets/switch-status/switch-status.component.html"),
            styles: [__webpack_require__("./src/app/components/widgets/switch-status/switch-status.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SwitchStatusComponent);
    return SwitchStatusComponent;
}());



/***/ }),

/***/ "./src/app/components/widgets/text-warning/text-warning.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"mb-0 mt-0 text-right\">\n  <span class=\"fa-stack\">\n    <i class=\"fa fa-circle fa-stack-2x text-warning\"></i>\n    <i class=\"fa fa-exclamation fa-stack-1x\"></i>\n  </span>\n  <small>I campi contrassegnati da <span class=\"text-danger\">*</span> sono obbligatori</small>\n</p>\n"

/***/ }),

/***/ "./src/app/components/widgets/text-warning/text-warning.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/widgets/text-warning/text-warning.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextWarningComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextWarningComponent = /** @class */ (function () {
    function TextWarningComponent() {
    }
    TextWarningComponent.prototype.ngOnInit = function () {
    };
    TextWarningComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'text-warning',
            template: __webpack_require__("./src/app/components/widgets/text-warning/text-warning.component.html"),
            styles: [__webpack_require__("./src/app/components/widgets/text-warning/text-warning.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TextWarningComponent);
    return TextWarningComponent;
}());



/***/ }),

/***/ "./src/app/helpers/build-request-url.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestUrl; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RequestUrl = /** @class */ (function () {
    // end
    function RequestUrl() {
        // Dichiara qui se un campo è di tipo array
        this.arrays_list = [
            "assignees_id"
        ];
    }
    RequestUrl.prototype.build = function (obj_params) {
        var postgrest_query = [];
        for (var key in obj_params) {
            if (this.arrays_list.includes(key)) {
                postgrest_query.push(key + "=cs." + "{" + obj_params[key] + "}");
            }
            else {
                postgrest_query.push(key + "=eq." + obj_params[key]);
            }
        }
        return postgrest_query.join("&");
    };
    RequestUrl = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], RequestUrl);
    return RequestUrl;
}());



/***/ }),

/***/ "./src/app/helpers/can-deactivate/can-deactivate.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanDeactivateGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CanDeactivateGuard = /** @class */ (function () {
    function CanDeactivateGuard() {
    }
    CanDeactivateGuard.prototype.canDeactivate = function (component) {
        //let confirm: Observable<boolean> = Observable.of(false);
        if (!component.canDeactivate()) {
            // Swal({
            //   title: "Are you sure?",
            //   text: "Do you want to change the dropdown?",
            //   type: "warning",
            //   showCancelButton: true,
            //   confirmButtonColor: "#DD6B55",
            //   confirmButtonText: "Yes",
            //   cancelButtonText: "No"
            // }).then(
            //   function(isConfirm) {
            //     if(isConfirm) {
            //       console.log(isConfirm);
            //       confirm = Observable.of(true);
            //       return true;
            //     } else {
            //       console.log(isConfirm);
            //       confirm = Observable.of(false);
            //       return false;
            //     }
            //   }
            // ).catch(Swal.noop);
            if (confirm("Sei sicuro di voler uscire senza salvare?")) {
                return true;
            }
            else {
                return false;
            }
        }
        return true;
    };
    CanDeactivateGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], CanDeactivateGuard);
    return CanDeactivateGuard;
}());



/***/ }),

/***/ "./src/app/helpers/can-deactivate/component-can-deactivate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentCanDeactivate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentCanDeactivate = /** @class */ (function () {
    function ComponentCanDeactivate() {
    }
    // @HostListener('window:beforeunload', ['$event'])
    // unloadNotification($event: any) {
    //   console.log("chiamato");
    //   if (!this.canDeactivate()) {
    //     $event.returnValue = true;
    //   }
    // }
    ComponentCanDeactivate.prototype.onchange = function (e) {
        //e.preventDefault();
        if (!this.canDeactivate()) {
            e.returnValue = true;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('change', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ComponentCanDeactivate.prototype, "onchange", null);
    return ComponentCanDeactivate;
}());



/***/ }),

/***/ "./src/app/helpers/check-object.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckObject; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckObject = /** @class */ (function () {
    function CheckObject() {
    }
    CheckObject.prototype.isBlank = function (obj) {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    };
    CheckObject.prototype.getNotEmptyPropertiesValue = function (obj) {
        var data = {};
        for (var key in obj) {
            if (obj[key] !== null && obj[key] != "") {
                data[key] = obj[key];
            }
        }
        return data;
    };
    CheckObject = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CheckObject);
    return CheckObject;
}());



/***/ }),

/***/ "./src/app/helpers/form-can-deactivate/form-can-deactivate.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormCanDeactivate; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__can_deactivate_component_can_deactivate__ = __webpack_require__("./src/app/helpers/can-deactivate/component-can-deactivate.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FormCanDeactivate = /** @class */ (function (_super) {
    __extends(FormCanDeactivate, _super);
    function FormCanDeactivate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormCanDeactivate.prototype.canDeactivate = function () {
        return this.form.submitted || !this.form.dirty;
    };
    return FormCanDeactivate;
}(__WEBPACK_IMPORTED_MODULE_0__can_deactivate_component_can_deactivate__["a" /* ComponentCanDeactivate */]));



/***/ }),

/***/ "./src/app/helpers/local-storage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
    }
    LocalStorageService.prototype.reset = function (keys) {
        keys.map(function (item) {
            localStorage.removeItem(item);
        });
    };
    LocalStorageService.prototype.set = function (objectList) {
        objectList.map(function (item) {
            localStorage.setItem(item.key, item.value);
        });
    };
    LocalStorageService.prototype.get = function (key) {
        return localStorage.getItem(key);
    };
    LocalStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/helpers/md5.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return md5; });
var md5 = function (string) {
    function RotateLeft(lValue, iShiftBits) {
        return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
    }
    function AddUnsigned(lX, lY) {
        var lX4, lY4, lX8, lY8, lResult;
        lX8 = (lX & 0x80000000);
        lY8 = (lY & 0x80000000);
        lX4 = (lX & 0x40000000);
        lY4 = (lY & 0x40000000);
        lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
        if (lX4 & lY4) {
            return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
        }
        if (lX4 | lY4) {
            if (lResult & 0x40000000) {
                return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
            }
            else {
                return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
            }
        }
        else {
            return (lResult ^ lX8 ^ lY8);
        }
    }
    function F(x, y, z) {
        return (x & y) | ((~x) & z);
    }
    function G(x, y, z) {
        return (x & z) | (y & (~z));
    }
    function H(x, y, z) {
        return (x ^ y ^ z);
    }
    function I(x, y, z) {
        return (y ^ (x | (~z)));
    }
    function FF(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function GG(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function HH(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function II(a, b, c, d, x, s, ac) {
        a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
        return AddUnsigned(RotateLeft(a, s), b);
    }
    ;
    function ConvertToWordArray(string) {
        var lWordCount;
        var lMessageLength = string.length;
        var lNumberOfWords_temp1 = lMessageLength + 8;
        var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
        var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
        var lWordArray = Array(lNumberOfWords - 1);
        var lBytePosition = 0;
        var lByteCount = 0;
        while (lByteCount < lMessageLength) {
            lWordCount = (lByteCount - (lByteCount % 4)) / 4;
            lBytePosition = (lByteCount % 4) * 8;
            lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
            lByteCount++;
        }
        lWordCount = (lByteCount - (lByteCount % 4)) / 4;
        lBytePosition = (lByteCount % 4) * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
        lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
        lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
        return lWordArray;
    }
    ;
    function WordToHex(lValue) {
        var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
        for (lCount = 0; lCount <= 3; lCount++) {
            lByte = (lValue >>> (lCount * 8)) & 255;
            WordToHexValue_temp = "0" + lByte.toString(16);
            WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
        }
        return WordToHexValue;
    }
    ;
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
    ;
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
    string = Utf8Encode(string);
    x = ConvertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
    }
    var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
    return temp.toLowerCase();
};


/***/ }),

/***/ "./src/app/helpers/navigation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationService = /** @class */ (function () {
    function NavigationService(router) {
        this.router = router;
    }
    NavigationService.prototype.redirect = function (redirect_to) {
        this.router.navigate([redirect_to]);
    };
    NavigationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], NavigationService);
    return NavigationService;
}());



/***/ }),

/***/ "./src/app/helpers/session-storage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SessionStorageService = /** @class */ (function () {
    function SessionStorageService() {
    }
    SessionStorageService.prototype.reset = function (keys) {
        keys.map(function (item) {
            sessionStorage.removeItem(item);
        });
    };
    SessionStorageService.prototype.set = function (objectList) {
        objectList.map(function (item) {
            sessionStorage.setItem(item.key, item.value);
        });
    };
    SessionStorageService.prototype.get = function (key) {
        return sessionStorage.getItem(key);
    };
    SessionStorageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], SessionStorageService);
    return SessionStorageService;
}());



/***/ }),

/***/ "./src/app/helpers/timezone.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timezone; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__("./node_modules/date-fns/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_locale_it_index_js__ = __webpack_require__("./node_modules/date-fns/locale/it/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_date_fns_locale_it_index_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_date_fns_locale_it_index_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Timezone = /** @class */ (function () {
    function Timezone() {
    }
    Timezone.prototype.getCurrentDate = function () {
        var date = new Date();
        var isoDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
        return isoDate;
    };
    Timezone.prototype.getDistanceInWordsToNow = function (date) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["distanceInWordsToNow"])(date, { locale: __WEBPACK_IMPORTED_MODULE_2_date_fns_locale_it_index_js__, includeSeconds: true });
    };
    Timezone.prototype.getDifferenceInDays = function (date) {
        return Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["differenceInDays"])(new Date(), new Date(date));
    };
    Timezone.prototype.splitTimeZoneDate = function (current_date) {
        return current_date.split("T")[0];
    };
    Timezone = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], Timezone);
    return Timezone;
}());



/***/ }),

/***/ "./src/app/services/event-source-listener.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventSourceListenerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_local_storage__ = __webpack_require__("./src/app/helpers/local-storage.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Subject } from 'rxjs/Subject';

// Helpers

var EventSourceListenerService = /** @class */ (function () {
    function EventSourceListenerService(lsService) {
        this.lsService = lsService;
        this.myData = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */]([]);
        this.url = "";
        this.account_id = +this.lsService.get('accountId');
        this.url = 'http://' + window.location.hostname + ':4001/bracco/' + this.account_id + "/events";
    }
    EventSourceListenerService.prototype.connect = function () {
        var _this = this;
        var source = new window['EventSource'](this.url);
        source.addEventListener('message', function (event) {
            // console.log(JSON.parse(event.data))
            _this.myData.next(JSON.parse(event.data));
        });
        source.addEventListener('open', function (event) {
            console.log("eventsource connected.");
            //addStatus('eventsource connected.')
        });
        source.addEventListener('error', function (event) {
            // if (event.eventPhase == EventSource.CLOSED) {
            //   console.log("eventsource was closed.")
            // }
            console.log("eventsource was closed.");
        });
    };
    // clearMessage() {
    //   this.myData.next('');
    // }
    EventSourceListenerService.prototype.getData = function () {
        return this.myData.asObservable();
    };
    EventSourceListenerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__helpers_local_storage__["a" /* LocalStorageService */]])
    ], EventSourceListenerService);
    return EventSourceListenerService;
}());



/***/ }),

/***/ "./src/app/services/http.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import 'rxjs/add/operator/map';
var Service = /** @class */ (function () {
    // Inject HttpClient into your component or service.
    function Service(http) {
        this.http = http;
        this.url_root = 'http://' + window.location.hostname + ':3000/';
    }
    Service.prototype.ngOnInit = function () { };
    Service.prototype.getAll = function (table, condition) {
        if (condition == "all") {
            return this.http.get(this.url_root + table);
        }
        else if (condition == "deleted") {
            return this.http.get(this.url_root + table + "?" + "deleted=" + "is.true" + "&order=" + "id.desc");
        }
        else if (condition == "not_deleted") {
            return this.http.get(this.url_root + table + "?" + "deleted=" + "is.false" + "&order=" + "id.desc");
        }
        else if (condition == "active_and_not_deleted") {
            return this.http.get(this.url_root + table + "?" + "deleted=" + "is.false" + "&status=" + "eq.1" + "&order=" + "id.desc");
        }
        else if (condition == "archived") {
            return this.http.get(this.url_root + table + "?" + "archived=" + "is.true" + "&order=" + "id.desc");
        }
        else if (condition == "not_archived") {
            return this.http.get(this.url_root + table + "?" + "archived=" + "is.false" + "&order=" + "id.desc");
        }
        else if (condition == "expired") {
            return this.http.get(this.url_root + table + "?" + "expired=" + "is.true" + "&order=" + "id.desc");
        }
        else if (condition == "not_expired") {
            return this.http.get(this.url_root + table + "?" + "expired=" + "is.false" + "&order=" + "id.desc");
        }
        else if (condition == "default") {
            return this.http.get(this.url_root + table + "?" + "_default=" + "is.true" + "&order=" + "id.desc", { headers: { 'Accept': 'application/vnd.pgrst.object+json' } });
        }
        else if (condition == "active") {
            return this.http.get(this.url_root + table + "?" + "status=" + "eq.1" + "&order=" + "id.desc");
        }
        else if (condition == "active_and_not-archived") {
            return this.http.get(this.url_root + table + "?" + "archived=" + "is.false" + "&status=" + "eq.1" + "&order=" + "id.desc");
        }
    };
    Service.prototype.create = function (table, item) {
        return this.http.post(this.url_root + table, item, { observe: 'response' });
    };
    Service.prototype.delete = function (table, column, id) {
        return this.http.delete(this.url_root + table + "?" + column + "=eq." + id);
    };
    Service.prototype.archived = function (table, id, set) {
        return this.http.patch(this.url_root + table + "?" + "id=eq." + id, set);
    };
    Service.prototype.update = function (table, query, item) {
        return this.http.patch(this.url_root + table + "?" + query, item);
    };
    Service.prototype.updateIfExist = function (table, query, item) {
        return this.http.put(this.url_root + table + "?" + query, item);
    };
    Service.prototype.getBy = function (table, column, data) {
        return this.http.get(this.url_root + table + "?" + column + "=eq." + data, { headers: { 'Accept': 'application/vnd.pgrst.object+json' } });
    };
    // getById(table, column, id: number) {
    //   return this.http.get(this.url_root + table + "?" + column + "=eq." + id, {headers: {'Accept': 'application/vnd.pgrst.object+json'}});
    // }
    Service.prototype.getRecordsBy = function (table, column, value) {
        return this.http.get(this.url_root + table + "?" + column + "=eq." + value);
    };
    Service.prototype.setAsDefault = function (table, item_id, set) {
        return this.http.patch(this.url_root + table + "?" + "id=eq." + item_id, set);
    };
    Service.prototype.resetDefault = function (table, item_id, reset) {
        return this.http.patch(this.url_root + table + "?" + "dubber_id=eq." + item_id + "&" + "_default=is." + true, reset);
        // return this.http.patch(this.url_root + table + "?" + "dubber_id=eq." + item_id, reset);
    };
    Service.prototype.deleteFilmDubber = function (table, film_id, dubber_id) {
        return this.http.delete(this.url_root + table + "?" + "film_id=eq." + film_id + "&" + "dubber_id=eq." + dubber_id);
    };
    Service.prototype.getByDate = function (table, column, date, condition) {
        if (condition == "equal") {
            return this.http.get(this.url_root + table + "?" + column + "=eq." + date);
        }
        else if (condition == "gte") {
            return this.http.get(this.url_root + table + "?" + column + "=gte." + date);
        }
        else if (condition == "lt") {
            return this.http.get(this.url_root + table + "?" + column + "=lt." + date);
        }
    };
    Service.prototype.getRecords = function (table, query) {
        return this.http.get(this.url_root + table + "?" + query);
    };
    Service.prototype.getRecord = function (table, query) {
        return this.http.get(this.url_root + table + "?" + query, { headers: { 'Accept': 'application/vnd.pgrst.object+json' } });
    };
    Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], Service);
    return Service;
}());



/***/ }),

/***/ "./src/app/services/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
    }
    MessageService.prototype.setMessage = function (type) {
        var message = this.switchMessage(type);
        this.subject.next(message);
        setTimeout(function () {
            this.clearMessage();
        }.bind(this), 3000);
    };
    MessageService.prototype.clearMessage = function () {
        this.subject.next({});
    };
    MessageService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    MessageService.prototype.switchMessage = function (type) {
        var message = { "success": 1, "delete": 2, "rejected": 3, "prohibition": 4, "archive": 5, "rollback": 6, "access-denied": 7, "psw-rejected": 8, "overwrite": 9, "account_in_use": 10, "confirm_incorrect_psw": 11 };
        switch (message[type]) {
            case 1:
                return {
                    "text": "L'operazione è andata a buon fine!",
                    "class": "success",
                    "display": true
                };
            case 2:
                return {
                    "text": "Cancellato con successo!",
                    "class": "success",
                    "display": true
                };
            case 3:
                return {
                    "text": "Si è verificato un errore",
                    "class": "danger",
                    "display": true
                };
            case 4:
                return {
                    "text": "Non puoi aggiungerlo poichè è già presente!",
                    "class": "danger",
                    "display": true
                };
            case 5:
                return {
                    "text": "Archiviato con successo! NOTA: Hai la possibilità di ripristinarlo!",
                    "class": "success",
                    "display": true
                };
            case 6:
                return {
                    "text": "Ripristinato con successo!",
                    "class": "success",
                    "display": true
                };
            case 7:
                return {
                    "text": "Accesso non consentito. Email o Password non validi",
                    "class": "danger",
                    "display": true
                };
            case 8:
                return {
                    "text": "La password corrente da te inserita non corrisponde",
                    "class": "danger",
                    "display": true
                };
            case 9:
                return {
                    "text": "Al momento non è possibile salvare perchè un altro utente ha effettuato delle modifiche",
                    "class": "danger",
                    "display": true
                };
            case 10:
                return {
                    "text": "Non è possibile eliminare l'account perché è attualmente collegato a dei tickets",
                    "class": "danger",
                    "display": true
                };
            case 11:
                return {
                    "text": "Non ti è consentito anadare avanti perché la password di conferma inserita non corrisponde alla password",
                    "class": "danger",
                    "display": true
                };
        }
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map