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
var MatchComponent = (function () {
    function MatchComponent(matchService) {
        this.matchService = matchService;
        this.question = 1;
        this.win = false;
        this.server = true;
        this.aggressive = false;
        this.shot = "";
        this.firstShot = false;
        this.forehand = false;
        this.sameLast = false;
        this.tactics = false;
        this.skillRating = 0;
        this.effortRating = 0;
        this.gameNumber = 1;
        this.pointNumber = 1;
        this.myPointScore = 0;
        this.opponentPointScore = 0;
        this.myGameScore = 0;
        this.opponentGameScore = 0;
        this.serveCount = 0;
        this.firstServer = true;
        this.exitBox = false;
        this.finishBox = false;
        this.firstPlayerName = "You";
        this.secondPlayerName = "Opponent";
        this.updatePlayerNames = false;
        this.pointArray = [];
        this.gameArray = [];
        this.undoGameBox = false;
        this.matchData = [];
        this.notes = "";
    }
    MatchComponent.prototype.incrementQuestion = function () {
        this.question++;
    };
    MatchComponent.prototype.updatePlayers = function () {
        this.updatePlayerNames = !this.updatePlayerNames;
    };
    MatchComponent.prototype.setWinner = function () {
        this.win = true;
        this.myPointScore++;
        this.pointArray.push('y');
    };
    MatchComponent.prototype.setLoser = function () {
        this.opponentPointScore++;
        this.pointArray.push('o');
    };
    MatchComponent.prototype.setServer = function () {
        if (this.gameNumber != 1 || this.opponentPointScore != 0 || this.myPointScore != 0) {
            this.server = false;
            this.firstServer = false;
        }
    };
    MatchComponent.prototype.setStyle = function () {
        this.aggressive = true;
    };
    MatchComponent.prototype.checkFirstPoint = function () {
        if (this.gameNumber != 1 || this.opponentPointScore != 0 || this.myPointScore != 0) {
            this.question++;
        }
    };
    MatchComponent.prototype.setFirstShot = function () {
        this.firstShot = true;
    };
    MatchComponent.prototype.setForehand = function () {
        this.forehand = true;
    };
    MatchComponent.prototype.setSameLast = function () {
        this.sameLast = true;
    };
    MatchComponent.prototype.setShot = function (shotType) {
        this.shot = shotType;
    };
    MatchComponent.prototype.setTactics = function () {
        this.tactics = true;
    };
    MatchComponent.prototype.setSkillRating = function (rating) {
        this.skillRating = rating;
    };
    MatchComponent.prototype.setEffortRating = function (rating) {
        this.effortRating = rating;
    };
    MatchComponent.prototype.exitWarning = function () {
        this.exitBox = !this.exitBox;
    };
    MatchComponent.prototype.print = function () {
        this.matchData.push({
            myGames: this.myGameScore,
            opponentgames: this.opponentGameScore,
            pointData: {
                server: this.server,
                win: this.win,
                aggressive: this.aggressive,
                forehand: this.forehand,
                sameLast: this.sameLast,
                tactics: this.tactics,
                shot: this.shot,
                skillRating: this.skillRating,
                effortRating: this.effortRating,
                me: this.firstPlayerName,
                opponent: this.secondPlayerName,
                myPoints: this.myPointScore,
                opponentPoints: this.opponentPointScore,
                notes: this.notes
            }
        });
    };
    MatchComponent.prototype.newPoint = function () {
        this.question = 1;
        this.win = false;
        this.aggressive = false;
        this.firstShot = false;
        this.forehand = false;
        this.sameLast = false;
        this.tactics = false;
        this.shot = '';
        this.skillRating = 0;
        this.effortRating = 0;
        this.notes = '';
        this.serveCount++;
        if (this.serveCount == 2) {
            this.server = !this.server;
            this.serveCount = 0;
        }
    };
    MatchComponent.prototype.undoPoint = function () {
        if (this.myPointScore > 0 || this.opponentPointScore > 0) {
            if (this.question == 1) {
                var popped = this.pointArray.pop();
                if (popped == 'y') {
                    this.myPointScore--;
                    if (this.serveCount == 1) {
                        this.serveCount--;
                    }
                    else if (this.serveCount == 0) {
                        this.serveCount = 1;
                        this.server = !this.server;
                    }
                }
                else if (popped = 'o') {
                    this.opponentPointScore--;
                    if (this.serveCount == 1) {
                        this.serveCount--;
                    }
                    else if (this.serveCount == 0) {
                        this.serveCount = 1;
                        this.server = !this.server;
                    }
                }
                this.serveCount--;
                this.newPoint();
            }
            else if (this.question > 1) {
                var popped = this.pointArray.pop();
                if (popped == 'y') {
                    this.myPointScore--;
                }
                else if (popped = 'o') {
                    this.opponentPointScore--;
                }
                this.question = 1;
            }
        }
    };
    MatchComponent.prototype.submitName = function () {
        if (this.firstPlayerName.length < 14 && this.secondPlayerName.length < 14 && this.firstPlayerName && this.secondPlayerName) {
            this.updatePlayerNames = !this.updatePlayerNames;
        }
    };
    MatchComponent.prototype.fullyUndoGame = function () {
        this.undoGameBox = !this.undoGameBox;
        if (this.myPointScore > 0 || this.opponentPointScore > 0) {
            this.myPointScore = 0;
            this.opponentPointScore = 0;
            this.server = this.firstServer;
            this.serveCount = 0;
            this.gameNumber--;
            this.question = 1;
        }
        else if ((this.myPointScore == 0 && this.opponentPointScore == 0) && (this.myGameScore > 0 || this.opponentGameScore > 0)) {
            var popped = this.gameArray.pop();
            if (popped = 'y') {
                this.myGameScore--;
                this.serveCount = 0;
                this.firstServer = !this.firstServer;
                this.server = this.firstServer;
                this.question = 1;
            }
            else if (popped = 'o') {
                this.opponentGameScore--;
                this.serveCount = 0;
                this.firstServer = !this.firstServer;
                this.server = this.firstServer;
                this.question = 1;
            }
        }
    };
    MatchComponent.prototype.undoGame = function () {
        this.undoGameBox = !this.undoGameBox;
    };
    MatchComponent.prototype.incrementPointGame = function () {
        if (this.myPointScore >= 11 && this.opponentPointScore < 10) {
            this.myGameScore++;
            this.gameNumber++;
            this.gameArray.push('y');
            this.myPointScore = 0;
            this.opponentPointScore = 0;
            this.server = !this.firstServer;
            this.firstServer = !this.firstServer;
            this.serveCount = 0;
        }
        else if (this.opponentPointScore >= 11 && this.myPointScore < 10) {
            this.opponentGameScore++;
            this.gameNumber++;
            this.gameArray.push('o');
            this.myPointScore = 0;
            this.opponentPointScore = 0;
            this.server = !this.firstServer;
            this.firstServer = !this.firstServer;
            this.serveCount = 0;
        }
        else if (this.opponentPointScore >= 10 && this.myPointScore >= 10) {
            if (this.opponentPointScore - this.myPointScore >= 2) {
                this.opponentGameScore++;
                this.gameNumber++;
                this.gameArray.push('o');
                this.myPointScore = 0;
                this.opponentPointScore = 0;
                this.server = !this.firstServer;
                this.firstServer = !this.firstServer;
                this.serveCount = 0;
            }
            else if (this.myPointScore - this.opponentPointScore >= 2) {
                this.myGameScore++;
                this.gameNumber++;
                this.gameArray.push('y');
                this.myPointScore = 0;
                this.opponentPointScore = 0;
                this.server = !this.firstServer;
                this.firstServer = !this.firstServer;
                this.serveCount = 0;
            }
        }
    };
    MatchComponent.prototype.setMatchData = function () {
        this.matchService.setMatchData(this.matchData);
    };
    MatchComponent.prototype.finishMatch = function () {
        this.matchData.push(this.gameArray);
        this.matchData.push(this.pointArray);
        this.setMatchData();
        this.finishBox = !this.finishBox;
    };
    MatchComponent = __decorate([
        core_1.Component({
            selector: 'match',
            templateUrl: 'app/match.component/match.component.html',
            styleUrls: ['app/match.component/match.component.css']
        }), 
        __metadata('design:paramtypes', [match_service_1.MatchService])
    ], MatchComponent);
    return MatchComponent;
}());
exports.MatchComponent = MatchComponent;
//# sourceMappingURL=match.component.js.map