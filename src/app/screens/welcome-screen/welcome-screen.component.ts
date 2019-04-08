import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oupri-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrls: ['./welcome-screen.component.scss'],
})
export class WelcomeScreenComponent implements OnInit {
  alias: string = ''

  constructor() { }

  ngOnInit() { }

}
