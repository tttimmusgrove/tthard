import { Component } from '@angular/core';
import { Auth } from '../auth/auth.service';

@Component({
  selector: 'profile',
  templateUrl: 'app/profile.component/profile.component.html',
  styleUrls: ['app/profile.component/profile.component.css'],
  providers: [Auth]
})
export class ProfileComponent {
    constructor(private auth: Auth) {}
}
