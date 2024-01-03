import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public herosName: string[] = ['Spiderman','Batman','Thor','Ironman','Catman'];

  public deleteHero?: string = '';

  removeLasHero():void{
    this.deleteHero = this.herosName.pop();
  }

}
