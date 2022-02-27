import { Component, Input, OnInit } from '@angular/core';
import { Isearchedshows } from '../isearched-shows';
import { TvService } from '../tv.service';

@Component({
  selector: 'app-searched-shows',
  templateUrl: './searched-shows.component.html',
  styleUrls: ['./searched-shows.component.css']
})
export class SearchedShowsComponent implements OnInit {

  @Input() shows: Isearchedshows[]
  constructor(private tvService: TvService) {
  
    this.shows = [{
      name: '',
      language: '',
      genres: [],
      rating: 0,
      image: '',
      summary: '',
      network: '',
      schedule: '',
    }]
  }
 

  ngOnInit(): void {
    this.tvService.getShows('Girls').
    subscribe(data => this.shows = data)

  }

} 
