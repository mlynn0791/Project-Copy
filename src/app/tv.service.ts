import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITvAppData } from './itv-app-data';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(private httpclient: HttpClient) { }

  getSearchedShows(name: string){
    return this.httpclient.get<ITvAppData>(`https://api.tvmaze.com/singlesearch/shows?q=${name}`)
    .pipe(map(data => this.transformToIsearchedshows(data) ))
  }


  private transformToIsearchedshows(data:
    ITvAppData){
      return {
        name: data.name,
        summary: data.summary


      }
    }
  }
