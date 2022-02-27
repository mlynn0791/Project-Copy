import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITvAppData } from './itv-app-data';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(private httpclient: HttpClient) { }

 
  getShows(name: string){
    return this.httpclient.get<ITvAppData[]>(`https://api.tvmaze.com/search/shows?q=${name}`)
    .pipe(map((data)=> {
      return data.map ((show)=> {return this.transformToIsearchedshows(show)})}))
  }

  private getImage(image: any) {
    let isImage;
    return (isImage = image ? image.medium
    : 'http://static.tvmaze.com/images/no-img/no-img-portrait-text.png');
   }

  private isNull(item:any) {
    let notNull;
    return (notNull = item ? item.name : null);
  }
  
  private transformToIsearchedshows(shows:ITvAppData){
    return {
      name: shows.show.name,
      language: shows.show.language,
      genres: shows.show.genres,
      rating: shows.show.rating,
      schedule: shows.show.schedule,
      summary: shows.show.summary,
      network: this.isNull(shows.show.network)

      }
    }
  }
