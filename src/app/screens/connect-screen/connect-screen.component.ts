import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'oupri-connect-screen',
  templateUrl: './connect-screen.component.html',
  styleUrls: ['./connect-screen.component.scss'],
})
export class ConnectScreenComponent implements OnInit {

  constructor(private cookie: CookieService) { }

  ngOnInit() { }

  alias() {
    return this.cookie.get('member_alias')
  }

}
