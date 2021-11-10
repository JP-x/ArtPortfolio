"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var gallery_list_component_1 = require("./shared/components/gallery-list/gallery-list.component");
var gallery_item_component_1 = require("./shared/components/gallery-item/gallery-item.component");
var home_component_1 = require("./home/home.component");
var gallery_component_1 = require("./gallery/gallery.component");
var social_list_component_1 = require("./shared/components/social-list/social-list.component");
var card_1 = require("@angular/material/card");
var paginator_1 = require("@angular/material/paginator");
var parallax_directive_1 = require("./shared/directives/parallax.directive");
var angular_fontawesome_1 = require("@fortawesome/angular-fontawesome");
var free_brands_svg_icons_1 = require("@fortawesome/free-brands-svg-icons");
var AppModule = /** @class */ (function () {
    function AppModule(library) {
        this.library = library;
        library.addIcons(free_brands_svg_icons_1.faGithub, free_brands_svg_icons_1.faLinkedin, free_brands_svg_icons_1.faInstagram, free_brands_svg_icons_1.faTwitch, free_brands_svg_icons_1.faTwitter, free_brands_svg_icons_1.faEtsy);
    }
    AppModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                app_component_1.AppComponent,
                gallery_list_component_1.GalleryListComponent,
                gallery_item_component_1.GalleryItemComponent,
                home_component_1.HomeComponent,
                gallery_component_1.GalleryComponent,
                parallax_directive_1.ParallaxDirective,
                social_list_component_1.SocialListComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                card_1.MatCardModule,
                paginator_1.MatPaginatorModule,
                angular_fontawesome_1.FontAwesomeModule,
                http_1.HttpClientModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        }),
        __metadata("design:paramtypes", [angular_fontawesome_1.FaIconLibrary])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map