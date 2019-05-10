import { Component, OnInit } from '@angular/core';

import{HttpClient} from '@angular/common/http';
import { games } from '../gamemodel/Gaming.component';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
 game1:games[];
  baseUrl: string='http://localhost:3000/GameList';
  
  constructor(private http: HttpClient) { }
  getgames()
  {
    return this.http.get<games[]>(this.baseUrl)
  }
  ngOnInit() {
    this.getgames().subscribe((data:games[]) => {this.game1=data;});
    console.log(this.game1);
  }
}
