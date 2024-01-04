import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  public character : Character[] = [{
    name: 'Krillin',
    power: 1500
  },{
    name: 'Goku',
    power: 11000
  },
  {
    name: 'Veget',
    power: 9500
  }];



 }
