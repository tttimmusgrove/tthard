import { Component } from '@angular/core';
import {LandingComponent} from '../landing.component/landing.component';
import { MatchService } from '../match.service/match.service';

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`,
  providers: [MatchService]
})
export class AppComponent { }
