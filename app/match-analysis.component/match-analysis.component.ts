import { Component, OnInit } from '@angular/core';
import { MatchService } from '../match.service/match.service';

@Component({
  selector: 'match-analysis',
  templateUrl: 'app/match-analysis.component/match-analysis.component.html',
  styleUrls: ['app/match-analysis.component/match-analysis.component.css']
})

export class MatchAnalysisComponent implements OnInit {
    matchData = [];

    constructor(private matchService: MatchService) {

    }

    ngOnInit(): void {
        this.getMatchData();
    }

    getMatchData(): void {
        this.matchData = this.matchService.getMatchData();
        console.log(this.matchData);
    }
}
