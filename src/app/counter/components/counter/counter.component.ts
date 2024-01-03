import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h2>Componente Counter</h2>
  <h3>Counter: {{ counter }}</h3>
  <button (click)="incrementedBy(1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="incrementedBy(-1)">-1</button>`
})

export class CounterComponent{


  //Propertys
  public counter : number = 10;

  //Methods
  incrementedBy( value: number) {
    this.counter += value;
  }
  resetCounter() {
    this.counter = 10;
  }

}
