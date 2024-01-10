import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters : Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1500
  },{
    id: uuid(),
    name: 'Goku',
    power: 11000
  },
  {
    id: uuid(),
    name: 'Veget',
    power: 9500
  }];

  addNewCharacter(character : Character) : void{

    const newCharacter: Character = { id: uuid(), ...character }

    this.characters.push(newCharacter);
  }

  deleteCharacterById(id:string) : void{

   this.characters = this.characters.filter(character => character.id != id);

  }


}
