import { Component } from '@angular/core';
import { Auth } from '../auth/auth.service';

@Component({
  selector: 'landing',
  templateUrl: 'app/landing.component/landing.component.html',
  styleUrls: ['app/landing.component/landing.component.css'],
  providers: [Auth]
})
export class LandingComponent {
    constructor(private auth: Auth) {}
}
