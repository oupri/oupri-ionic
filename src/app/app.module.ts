import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeScreenComponent } from './screens/welcome-screen/welcome-screen.component'
import { ConnectScreenComponent } from './screens/connect-screen/connect-screen.component'
import { InterestsScreenComponent } from './screens/interests-screen/interests-screen.component'
import { CallScreenComponent } from './screens/call-screen/call-screen.component'
import { WaitScreenComponent } from './screens/wait-screen/wait-screen.component'
import { MatchScreenComponent } from './screens/match-screen/match-screen.component'
import { CallingScreenComponent } from './screens/calling-screen/calling-screen.component'
import { ReviewScreenComponent } from './screens/review-screen/review-screen.component'
import { FeedbackScreenComponent } from './screens/feedback-screen/feedback-screen.component'
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [AppComponent,
    WelcomeScreenComponent,
    ConnectScreenComponent,
    InterestsScreenComponent,
    CallScreenComponent,
    WaitScreenComponent,
    MatchScreenComponent,
    CallScreenComponent,
    WaitScreenComponent,
    MatchScreenComponent,
    CallingScreenComponent,
    ReviewScreenComponent,
    FeedbackScreenComponent],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
