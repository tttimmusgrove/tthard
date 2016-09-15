import { Component } from '@angular/core';
import { MatchService } from '../match.service/match.service';

@Component({
  selector: 'match',
  templateUrl: 'app/match.component/match.component.html',
  styleUrls: ['app/match.component/match.component.css']
})

export class MatchComponent {
    question = 1;
    win = false;
    server = true;
    aggressive = false;
    shot = "";
    firstShot = false;
    forehand = false;
    sameLast = false;
    tactics = false;
    skillRating = 0;
    effortRating = 0;
    gameNumber = 1;
    pointNumber = 1;
    myPointScore = 0;
    opponentPointScore = 0;
    myGameScore = 0;
    opponentGameScore = 0;
    serveCount = 0;
    firstServer = true;
    exitBox = false;
    finishBox = false;
    firstPlayerName = "You";
    secondPlayerName = "Opponent";
    updatePlayerNames = false;
    pointArray = [];
    gameArray = [];
    undoGameBox = false;
    matchData = [];
    notes = "";

    constructor(private matchService: MatchService) {

    }

    incrementQuestion(): void {
        this.question++;
    }

    updatePlayers(): void {
        this.updatePlayerNames = !this.updatePlayerNames;
    }

    setWinner(): void {
        this.win = true;
        this.myPointScore++;
        this.pointArray.push('y');
    }

    setLoser(): void {
        this.opponentPointScore++;
        this.pointArray.push('o');
    }

    setServer(): void {
        if(this.gameNumber != 1 || this.opponentPointScore != 0 || this.myPointScore != 0) {
            this.server = false;
            this.firstServer = false;
        }
    }

    setStyle(): void {
        this.aggressive = true;
    }

    checkFirstPoint(): void {
        if(this.gameNumber != 1 || this.opponentPointScore != 0 || this.myPointScore != 0) {
            this.question++;
        }
    }

    setFirstShot(): void {
        this.firstShot = true;
    }

    setForehand(): void {
        this.forehand = true;
    }

    setSameLast(): void {
        this.sameLast = true;
    }

    setShot(shotType): void {
        this.shot = shotType;
    }

    setTactics(): void {
        this.tactics = true;
    }

    setSkillRating(rating): void {
        this.skillRating = rating;
    }

    setEffortRating(rating): void {
        this.effortRating = rating;
    }

    exitWarning(): void {
        this.exitBox = !this.exitBox;
    }

    print(): void {
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
        })
    }

    newPoint(): void {
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
        if(this.serveCount == 2) {
            this.server = !this.server;
            this.serveCount = 0;
        }
    }

    undoPoint(): void {
        if(this.myPointScore > 0 || this.opponentPointScore > 0) {
            if(this.question == 1) {
                var popped = this.pointArray.pop();
                if(popped == 'y') {
                    this.myPointScore--;
                    if(this.serveCount == 1) {
                        this.serveCount--;
                    } else if(this.serveCount == 0) {
                        this.serveCount = 1;
                        this.server = !this.server;
                    }
                } else if (popped = 'o') {
                    this.opponentPointScore--;
                    if(this.serveCount == 1) {
                        this.serveCount--;
                    } else if (this.serveCount == 0) {
                        this.serveCount = 1;
                        this.server = !this.server;
                    }
                }
                this.serveCount--;
                this.newPoint();
            } else if (this.question > 1) {
                var popped = this.pointArray.pop();
                if(popped == 'y') {
                    this.myPointScore--;
                } else if(popped = 'o') {
                    this.opponentPointScore--;
                }
                this.question = 1;
            }
        }
    }

    submitName(): void {
        if(this.firstPlayerName.length < 14 && this.secondPlayerName.length < 14 && this.firstPlayerName && this.secondPlayerName) {
            this.updatePlayerNames = !this.updatePlayerNames;
        }
    }

    fullyUndoGame(): void {
        this.undoGameBox = !this.undoGameBox;
        if(this.myPointScore > 0 || this.opponentPointScore > 0) {
            this.myPointScore = 0;
            this.opponentPointScore = 0;
            this.server = this.firstServer;
            this.serveCount = 0;
            this.gameNumber--;
            this.question = 1;
        } else if ((this.myPointScore == 0 && this.opponentPointScore == 0) && (this.myGameScore > 0 || this.opponentGameScore > 0)) {
            var popped = this.gameArray.pop();
            if(popped = 'y') {
                this.myGameScore--;
                this.serveCount = 0;
                this.firstServer = !this.firstServer;
                this.server = this.firstServer;
                this.question = 1;
            } else if (popped = 'o') {
                this.opponentGameScore--;
                this.serveCount = 0;
                this.firstServer = !this.firstServer;
                this.server = this.firstServer;
                this.question = 1;
            }
        }
    }

    undoGame(): void {
        this.undoGameBox = !this.undoGameBox;
    }

    incrementPointGame(): void {
        if(this.myPointScore >= 11 && this.opponentPointScore < 10) {
            this.myGameScore++;
            this.gameNumber++;
            this.gameArray.push('y');
            this.myPointScore = 0;
            this.opponentPointScore = 0;
            this.server = !this.firstServer;
            this.firstServer = !this.firstServer;
            this.serveCount = 0;
        } else if (this.opponentPointScore >= 11 && this.myPointScore < 10) {
            this.opponentGameScore++;
            this.gameNumber++;
            this.gameArray.push('o');
            this.myPointScore = 0;
            this.opponentPointScore = 0;
            this.server = !this.firstServer;
            this.firstServer = !this.firstServer;
            this.serveCount = 0;
        } else if (this.opponentPointScore >= 10 && this.myPointScore >= 10) {
            if(this.opponentPointScore - this.myPointScore >= 2) {
                this.opponentGameScore++;
                this.gameNumber++;
                this.gameArray.push('o');
                this.myPointScore = 0;
                this.opponentPointScore = 0;
                this.server = !this.firstServer;
                this.firstServer = !this.firstServer;
                this.serveCount = 0;
            } else if (this.myPointScore - this.opponentPointScore >= 2) {
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

    }

    setMatchData(): void {
        this.matchService.setMatchData(this.matchData);
    }

    finishMatch(): void {
        this.matchData.push(this.gameArray);
        this.matchData.push(this.pointArray);
        this.setMatchData();
        this.finishBox = !this.finishBox;
    }
}
