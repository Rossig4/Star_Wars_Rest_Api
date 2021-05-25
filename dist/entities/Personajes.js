"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
exports.__esModule = true;
exports.Personajes = void 0;
var typeorm_1 = require("typeorm");
var Planetas_1 = require("./Planetas");
var Personajes = /** @class */ (function (_super) {
    __extends(Personajes, _super);
    function Personajes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Personajes.prototype, "Id");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Personajes.prototype, "Nombre");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Personajes.prototype, "Estatura");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Date)
    ], Personajes.prototype, "Nacimiento");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Personajes.prototype, "Fotograf\u00EDa");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Personajes.prototype, "Color_de_ojos");
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Personajes.prototype, "Ocupaci\u00F3n");
    __decorate([
        typeorm_1.ManyToOne(function () { return Planetas; }, function (planeta) { return planeta.personajes; }),
        __metadata("design:type", Planetas_1.Planeta)
    ], Personajes.prototype, "planeta");
    Personajes = __decorate([
        typeorm_1.Entity()
    ], Personajes);
    return Personajes;
}(typeorm_1.BaseEntity));
exports.Personajes = Personajes;
