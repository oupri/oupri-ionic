import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common'
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'oupri-wait-screen',
  templateUrl: './wait-screen.component.html',
  styleUrls: ['./wait-screen.component.scss'],
  providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
})
export class WaitScreenComponent implements OnInit {

  constructor(private location: Location, private router: Router) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const wait = this
    console.log('Wait ', wait)
    setTimeout(function () {
      console.log('reached here again')
      //wait.location.go('match')
      wait.router.navigateByUrl('match');
    }, 2000)
  }
}
