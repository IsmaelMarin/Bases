import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:String='Hulk';
  public age:number=300;

  get capitalizedName():string{
    return this.name.toUpperCase();

  }

  public getHeroDescription():string{
    return `${this.name} - ${this.age}`

  }

  changeHero():void{

    this.name="SpiderMan";

  }
  changeAge(){

    this.age=30;

  }
  resetForm():void{
    this.name="Thor";
    this.age=90;
  }


}
