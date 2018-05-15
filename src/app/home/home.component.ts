import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'caw-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public map: any = { lat: 5.616907, lng: -0.196581 };

  constructor() { }

  ngOnInit() {
  }

}
