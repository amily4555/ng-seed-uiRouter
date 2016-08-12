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
var admin_serv_1 = require('./admin.serv');
var AdminsCpt = (function () {
    function AdminsCpt(ts) {
        this.ts = ts;
    }
    AdminsCpt.prototype.ngOnInit = function () {
        var _this = this;
        this.ts.getAdmin().subscribe(function (res) { return _this.admins = res.data; });
    };
    AdminsCpt = __decorate([
        core_1.Component({
            selector: 'page.admins',
            templateUrl: 'views/admin/admins.html',
            providers: [admin_serv_1.AdminServ]
        }), 
        __metadata('design:paramtypes', [admin_serv_1.AdminServ])
    ], AdminsCpt);
    return AdminsCpt;
}());
exports.AdminsCpt = AdminsCpt;
//# sourceMappingURL=admins.cpt.js.map