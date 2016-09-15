import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from '../app.component/app.component';
import { FormsModule } from '@angular/forms';
import { LandingComponent }   from '../landing.component/landing.component';
import { ProfileComponent }   from '../profile.component/profile.component';
import { MatchComponent }   from '../match.component/match.component';
import { MatchAnalysisComponent }   from '../match-analysis.component/match-analysis.component';
import { routing }              from '../app.routing/app.routing';
import { Auth } from '../auth/auth.service';
import { MatchService } from '../match.service/match.service';
@NgModule({
  imports:      [ BrowserModule,
                  routing,
                  FormsModule ],
  declarations: [ AppComponent,
                  LandingComponent,
                  MatchComponent,
                  ProfileComponent,
                  MatchAnalysisComponent],
  providers:    [Auth, MatchService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
