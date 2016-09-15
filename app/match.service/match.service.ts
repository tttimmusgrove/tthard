import { Injectable }    from '@angular/core';

@Injectable()
export class MatchService {
    private matchData = [];

    setMatchData(data) {
        this.matchData = data;
        console.log(this.matchData);
    }

    getMatchData() {
        console.log("GETTING MATCH DATA");
        return this.matchData;
    }
}
