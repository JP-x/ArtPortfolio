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
exports.GalleryItemComponent = void 0;
var core_1 = require("@angular/core");
var GalleryItemComponent = /** @class */ (function () {
    function GalleryItemComponent() {
        this.imageUrl = '';
        this.imageUrlThumbnail = '';
        this.itemArtist = '';
        this.itemTitle = '';
        //emit the "notify" event
        this.artSelected = new core_1.EventEmitter();
    }
    GalleryItemComponent.prototype.ngOnInit = function () {
    };
    //emit the "notify" event
    GalleryItemComponent.prototype.onClick = function () {
        //console.log(this.itemTitle + ' clicked!');
        this.artSelected.emit(this.imageUrl);
    };
    __decorate([
        (0, core_1.Input)(),
        __metadata("design:type", Object)
    ], GalleryItemComponent.prototype, "imageUrl", void 0);
    __decorate([
        (0, core_1.Input)(),
        __metadata("design:type", Object)
    ], GalleryItemComponent.prototype, "imageUrlThumbnail", void 0);
    __decorate([
        (0, core_1.Input)(),
        __metadata("design:type", Object)
    ], GalleryItemComponent.prototype, "itemArtist", void 0);
    __decorate([
        (0, core_1.Input)(),
        __metadata("design:type", Object)
    ], GalleryItemComponent.prototype, "itemTitle", void 0);
    __decorate([
        (0, core_1.Output)(),
        __metadata("design:type", core_1.EventEmitter)
    ], GalleryItemComponent.prototype, "artSelected", void 0);
    GalleryItemComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-gallery-item',
            templateUrl: './gallery-item.component.html',
            styleUrls: ['./gallery-item.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], GalleryItemComponent);
    return GalleryItemComponent;
}());
exports.GalleryItemComponent = GalleryItemComponent;
//# sourceMappingURL=gallery-item.component.js.map