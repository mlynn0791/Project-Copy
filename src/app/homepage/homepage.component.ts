import { Component, OnInit } from '@angular/core';
import { IHomePage } from '../ihome-page';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  current: IHomePage
  constructor() { 
    this.current = {
      title: 'Hello All',
      cast: 'The Simpsons',
      image: '',
    }
  }

  ngOnInit(): void {
  }

}
