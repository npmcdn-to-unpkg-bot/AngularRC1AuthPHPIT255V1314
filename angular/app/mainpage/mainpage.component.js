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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var search_1 = require('../pipe/search');
require('rxjs/Rx');
var MainPageComponent = (function () {
    function MainPageComponent(http) {
        var _this = this;
        this.name = "";
        http.get('korisnici.json')
            .map(function (res) { return res.json(); })
            .subscribe(function (korisnici) { _this.korisnici = korisnici; });
    }
    MainPageComponent = __decorate([
        core_1.Component({
            pipes: [search_1.SearchPipe],
            selector: 'MainPage',
            templateUrl: 'app/mainpage/mainpage.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MainPageComponent);
    return MainPageComponent;
}());
exports.MainPageComponent = MainPageComponent;
//# sourceMappingURL=mainpage.component.js.map