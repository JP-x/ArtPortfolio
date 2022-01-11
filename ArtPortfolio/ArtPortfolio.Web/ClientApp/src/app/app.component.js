"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Jippu';
        this.pageTitle = 'Artist Portfolio';
        this.logoUrl = 'https://cdn-endpoint-artist-portfolio.azureedge.net/artist-portfolio/assets/jippu_logo_simple.jpg';
        this.logoUrlLight = 'https://cdn-endpoint-artist-portfolio.azureedge.net/artist-portfolio/assets/jippu_logo_black.png';
        this.logoUrlDark = 'https://cdn-endpoint-artist-portfolio.azureedge.net/artist-portfolio/assets/jippu_logo_simple_logo_only.png';
        this.createdBy = 'Jonathan Padilla';
        this.year = new Date().getFullYear();
    }
    AppComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map