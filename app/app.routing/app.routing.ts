import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent }      from '../landing.component/landing.component';
import { MatchComponent }      from '../match.component/match.component';
import { ProfileComponent }      from '../profile.component/profile.component';
import { MatchAnalysisComponent }   from '../match-analysis.component/match-analysis.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'new',
    component: MatchComponent
},
{
    path: 'matchAnalysis',
    component: MatchAnalysisComponent
},
{
    path: 'profile',
    component: ProfileComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
