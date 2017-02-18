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
/**
 * Created by china on 2017/2/12.
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/map");
var HttpHeader_1 = require("../component/config/HttpHeader");
var DnaSportServer_1 = require("../component/config/remote/DnaSportServer");
var HeroService = (function () {
    function HeroService($http) {
        this.$http = $http;
    }
    HeroService.prototype.getHeroes = function () {
        return this.$http.post(DnaSportServer_1.DnaSportServer.getUser, {}, { headers: HttpHeader_1.HttpHeader.HEADERS })
            .toPromise();
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=HeroService.js.map