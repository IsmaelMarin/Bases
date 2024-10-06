import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames:string[] =['SpiderMan','Iroman','She Hulk','Hulk','Thor','Zeus'];
  public deletedHero?:string;

  removeHeroes():void{
    this.deletedHero=this.heroNames.pop();
    //console.log({}) Este solo vive dentro del método
  }

}
