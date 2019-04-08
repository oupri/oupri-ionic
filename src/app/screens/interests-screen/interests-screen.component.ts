import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'oupri-interests-screen',
  templateUrl: './interests-screen.component.html',
  styleUrls: ['./interests-screen.component.scss'],
})
export class InterestsScreenComponent implements OnInit {
  interests: any = require('./interests.json')

  constructor() { }

  ngOnInit() { }

}
