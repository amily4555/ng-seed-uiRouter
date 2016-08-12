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
var agent_serv_1 = require('./agent.serv');
var AgentsCpt = (function () {
    function AgentsCpt(agentServ) {
        this.agentServ = agentServ;
    }
    AgentsCpt.prototype.ngOnInit = function () {
        var _this = this;
        this.agentServ.getAgents().subscribe(function (rst) { return _this.agents = rst.data; });
    };
    AgentsCpt = __decorate([
        core_1.Component({
            providers: [agent_serv_1.AgentServ],
            selector: 'page.agents',
            templateUrl: 'views/agent/agents.html'
        }), 
        __metadata('design:paramtypes', [agent_serv_1.AgentServ])
    ], AgentsCpt);
    return AgentsCpt;
}());
exports.AgentsCpt = AgentsCpt;
//# sourceMappingURL=agents.cpt.js.map