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
var dialog_1 = require("@angular/material/dialog");
var gallery_dialog_component_1 = require("../gallery-dialog/gallery-dialog.component");
var GalleryListComponent = /** @class */ (function () {
    function GalleryListComponent(dialog) {
        this.dialog = dialog;
        /* galleryItem: GalleryItem; */
        //inject service into component
        this.galleryItems = [];
    }
    GalleryListComponent.prototype.ngOnInit = function () {
    };
    GalleryListComponent.prototype.onArtSelected = function (message) {
        //console.log('Caught event: ' + message);
        this.selectedArtUrl = message;
        //display dialogue after event url
        this.openDialog();
    };
    GalleryListComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(gallery_dialog_component_1.GalleryDialogComponent, {
            panelClass: 'app-full-bleed-dialog',
            data: { imageUrl: this.selectedArtUrl },
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    __decorate([
        (0, core_1.Input)(),
        __metadata("design:type", Array)
    ], GalleryListComponent.prototype, "galleryItems", void 0);
    __decorate([
        (0, core_1.Input)(),
        __metadata("design:type", String)
    ], GalleryListComponent.prototype, "selectedArtUrl", void 0);
    GalleryListComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-gallery-list',
            templateUrl: './gallery-list.component.html',
            styleUrls: ['./gallery-list.component.css']
        }),
        __metadata("design:paramtypes", [dialog_1.MatDialog])
    ], GalleryListComponent);
    return GalleryListComponent;
}());
exports.GalleryListComponent = GalleryListComponent;
//# sourceMappingURL=gallery-list.component.js.map