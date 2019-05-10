import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { games } from '../gamemodel/Gaming.component';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
baseUrl: string='http://localhost:3000/GameList'
  constructor(private http: HttpClient) { }
  getgames()
  {
    return this.http.get<games[]>(this.baseUrl)
  }
}



