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
exports.SocialListComponent = void 0;
var core_1 = require("@angular/core");
var SocialListComponent = /** @class */ (function () {
    function SocialListComponent() {
        this.urlGithub = 'https://github.com/JP-x';
        this.urlLinkedIn = 'https://www.linkedin.com/in/jonathanpadilla4/';
        this.urlInstagram = 'https://instagram.com/jpversusart';
        this.urlTwitch = '';
        this.urlTwitter = '';
        this.urlEtsy = '';
    }
    SocialListComponent.prototype.ngOnInit = function () {
    };
    SocialListComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-social-list',
            templateUrl: './social-list.component.html',
            styleUrls: ['./social-list.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], SocialListComponent);
    return SocialListComponent;
}());
exports.SocialListComponent = SocialListComponent;
//# sourceMappingURL=social-list.component.js.map