import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablesComponent } from './tables/tables/tables.component';
import { MenuComponent } from './menu-mod/menu/menu.component';
import { FoodMenuComponent } from './menu-mod/food-menu/food-menu.component';

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'menu' },
  {
    path:'tables',
  loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
  },
  { path: 'menu', component: MenuComponent },
  { path: 'food', component: FoodMenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
