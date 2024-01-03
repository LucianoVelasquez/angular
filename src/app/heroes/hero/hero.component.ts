import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {


  public name : string = 'iroman';
  public age: number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDiscription():string {

    return `${this.name} - ${this.age}`;
  }

  changeName(value : string) : void{
    this.name = value;
  }

  changeAge(value : number) : void{
    this.age = value;
  }

  reset() : void {
    this.name = 'iroman';
    this.age = 45;
  }
}
