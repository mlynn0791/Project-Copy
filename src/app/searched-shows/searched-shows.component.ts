import { Component, OnInit } from '@angular/core';
import { ITvMaze } from '../isearched-shows';
import { TvService } from '../tv.service';

@Component({
  selector: 'app-searched-shows',
  templateUrl: './searched-shows.component.html',
  styleUrls: ['./searched-shows.component.css']
})
export class SearchedShowsComponent implements OnInit {

  current: ITvMaze
  constructor(private tvService: TvService) {
    this.current = {
      name: '',
      summary: '',
    }
  }
  

  ngOnInit(): void {
    this.tvService.getSearchedShows('Girls').
    subscribe(data => this.current = data)

  }

} 
