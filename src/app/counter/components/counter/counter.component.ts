/*
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'selector-name',
  templateUrl: 'name.component.html'
})

export class NameComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
*/

import { Component } from "@angular/core";
import { count } from "rxjs";

//Es un decorador que transforma mi clase en un componente
@Component({
  selector:'app-counter',
  template:`

  <p>Bienvenidos en Angular</p>
<h2>Counter : {{counter}}</h2>
<button (click)="increaseBy(+1)">+1</button>
<button (click)="reset()">Reset</button>
<button (click)="increaseBy(-1)">-1</button>



  `,
})
export class CounterComponent{

  public counter:number=10;

  increaseBy(value:number):void{
    this.counter += value;
  }

  reset():void{
    this.counter=10;
  }


}
