import { Component, Input,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CharactersInterface } from '../models/characters.interface'

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.page.html',
  styleUrls: ['./userlist.page.scss'],
})
export class UserlistPage implements OnInit {
  @Input() user!: CharactersInterface;

  characters: [] = [];

  constructor(
    private http: HttpClient
    ) { }

  ngOnInit() {
    this.http.get<any>('https://rickandmortyapi.com/api/character')
    .subscribe(data => {
      console.log(data)
      this.characters = data.results;
    })
  }

}
