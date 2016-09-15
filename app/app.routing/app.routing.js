"use strict";
var router_1 = require('@angular/router');
var landing_component_1 = require('../landing.component/landing.component');
var match_component_1 = require('../match.component/match.component');
var profile_component_1 = require('../profile.component/profile.component');
var match_analysis_component_1 = require('../match-analysis.component/match-analysis.component');
var appRoutes = [
    {
        path: '',
        component: landing_component_1.LandingComponent
    },
    {
        path: 'new',
        component: match_component_1.MatchComponent
    },
    {
        path: 'matchAnalysis',
        component: match_analysis_component_1.MatchAnalysisComponent
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map