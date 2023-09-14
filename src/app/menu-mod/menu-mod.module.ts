import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { MenuComponent } from './menu/menu.component';
import { FoodMenuComponent } from './food-menu/food-menu.component';



@NgModule({
  declarations: [
    MenuComponent,
    FoodMenuComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class MenuModModule { }
