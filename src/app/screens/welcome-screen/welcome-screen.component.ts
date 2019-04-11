import { Component, OnInit } from '@angular/core';
import { CommService } from '../../services/comm.service'
import { CookieService } from 'ngx-cookie-service';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'oupri-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
})
export class WelcomeScreenComponent implements OnInit {
  alias: string = ''

  constructor(private comm: CommService, private cookie: CookieService, private router: Router) { }

  ngOnInit() {
    console.log('Initialized welcome screen')
    this.redirectIfAlias()
  }

  createMember(alias) {
    const welcome = this
    console.log('create member with alias ', alias)

    this.comm.createMember(alias)
      .subscribe(function (response: any) {
        console.log('Created Alias ', response)

        welcome.cookie.set('member_alias', response.alias)
        welcome.cookie.set('member_id', response.id)

        welcome.redirectIfAlias()
      })
  }

  redirectIfAlias() {
    const welcome = this
    console.log('existing alias ', welcome.cookie.get('member_alias'))
    if (welcome.cookie.get('member_alias')) {
      welcome.router.navigateByUrl('/connect')

    }
  }


}
