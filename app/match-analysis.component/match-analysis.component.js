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
var match_service_1 = require('../match.service/match.service');
var MatchAnalysisComponent = (function () {
    function MatchAnalysisComponent(matchService) {
        this.matchService = matchService;
        this.matchData = [];
    }
    MatchAnalysisComponent.prototype.ngOnInit = function () {
        this.getMatchData();
    };
    MatchAnalysisComponent.prototype.getMatchData = function () {
        this.matchData = this.matchService.getMatchData();
        console.log(this.matchData);
    };
    MatchAnalysisComponent = __decorate([
        core_1.Component({
            selector: 'match-analysis',
            templateUrl: 'app/match-analysis.component/match-analysis.component.html',
            styleUrls: ['app/match-analysis.component/match-analysis.component.css']
        }), 
        __metadata('design:paramtypes', [match_service_1.MatchService])
    ], MatchAnalysisComponent);
    return MatchAnalysisComponent;
}());
exports.MatchAnalysisComponent = MatchAnalysisComponent;
//# sourceMappingURL=match-analysis.component.js.map