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
exports.GalleryListComponent = void 0;
var core_1 = require("@angular/core");
var gallery_service_1 = require("../../../services/gallery.service");
var GalleryListComponent = /** @class */ (function () {
    function GalleryListComponent(galleryService) {
        this.galleryService = galleryService;
        /* galleryItem: GalleryItem; */
        //inject service into component
        this.galleryItems = [];
    }
    GalleryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.galleryService.getGallery().subscribe(function (items) {
            console.log('gallery items!');
            console.log(items);
            _this.galleryItems = items;
        });
    };
    GalleryListComponent.prototype.counter = function (i) {
        return new Array(i);
    };
    GalleryListComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-gallery-list',
            templateUrl: './gallery-list.component.html',
            styleUrls: ['./gallery-list.component.css']
        }),
        __metadata("design:paramtypes", [gallery_service_1.GalleryService])
    ], GalleryListComponent);
    return GalleryListComponent;
}());
exports.GalleryListComponent = GalleryListComponent;
//# sourceMappingURL=gallery-list.component.js.map