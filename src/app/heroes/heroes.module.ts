import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";



@NgModule({
  exports:[
    ListComponent,
    HeroComponent
  ],
  declarations:[
    ListComponent,
    HeroComponent
  ],
  imports:[
    CommonModule  //Se utiliza para importar las directivas
  ]

})

export class HeroesModule{

}
