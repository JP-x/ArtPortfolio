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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryDialogComponent = void 0;
var core_1 = require("@angular/core");
var dialog_1 = require("@angular/material/dialog");
var GalleryDialogComponent = /** @class */ (function () {
    function GalleryDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    GalleryDialogComponent.prototype.ngOnInit = function () {
    };
    GalleryDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    GalleryDialogComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-gallery-dialog',
            templateUrl: './gallery-dialog.component.html',
            styleUrls: ['./gallery-dialog.component.css']
        }),
        __param(1, (0, core_1.Inject)(dialog_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [dialog_1.MatDialogRef, Object])
    ], GalleryDialogComponent);
    return GalleryDialogComponent;
}());
exports.GalleryDialogComponent = GalleryDialogComponent;
//# sourceMappingURL=gallery-dialog.component.js.map