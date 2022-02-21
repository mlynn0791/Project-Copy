import { Component, OnInit } from '@angular/core';
import { ITvMaze } from '../isearched-shows';

@Component({
  selector: 'app-searched-shows',
  templateUrl: './searched-shows.component.html',
  styleUrls: ['./searched-shows.component.css']
})
export class SearchedShowsComponent implements OnInit {

  current: ITvMaze
  constructor() {
    this.current = {
      title: 'Inventing Anna',
      director:'Shonda Rhimes',
      image: '',
    }
  }
  

  ngOnInit(): void {
  }

}
