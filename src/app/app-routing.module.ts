import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { WelcomeScreenComponent } from './screens/welcome-screen/welcome-screen.component'
import { ConnectScreenComponent } from './screens/connect-screen/connect-screen.component'
import { InterestsScreenComponent } from './screens/interests-screen/interests-screen.component'
import { CallScreenComponent } from './screens/call-screen/call-screen.component'
import { WaitScreenComponent } from './screens/wait-screen/wait-screen.component'
import { MatchScreenComponent } from './screens/match-screen/match-screen.component'
import { CallingScreenComponent } from './screens/calling-screen/calling-screen.component'
import { ReviewScreenComponent } from './screens/review-screen/review-screen.component'
import { FeedbackScreenComponent } from './screens/feedback-screen/feedback-screen.component'


const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'welcome', component: WelcomeScreenComponent },
  { path: 'connect', component: ConnectScreenComponent },
  { path: 'interests', component: InterestsScreenComponent },
  { path: 'call', component: CallScreenComponent },
  { path: 'wait', component: WaitScreenComponent },
  { path: 'match', component: MatchScreenComponent },
  { path: 'calling', component: CallingScreenComponent },
  { path: 'review', component: ReviewScreenComponent },
  { path: 'feedback', component: FeedbackScreenComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
