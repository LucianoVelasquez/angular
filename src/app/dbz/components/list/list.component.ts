import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input() //Cumple la funcion de props como en react.
  public characterlist : Character[] = [];

  @Output()
  public onDeleteCharacter : EventEmitter<string> = new EventEmitter();

  deleteCharacter(id? : string) : void{

    if(!id) return;

    this.onDeleteCharacter.emit(id)

  }

}
