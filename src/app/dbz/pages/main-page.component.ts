import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {

  public characters : Character[] = [{
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

  addNewCharacter(character : Character) : void{
    this.characters.push(character);
  }

  deleteCharacter(index:number) : void{
    this.characters.splice(index,1);
  }

 }
