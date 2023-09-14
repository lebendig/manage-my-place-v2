import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TablesComponent } from './tables/tables.component';
import { TableFormComponent } from './table-form/table-form.component';

const routes: Routes = [
  { path: '', component: TablesComponent } ,
  { path: 'new', component: TableFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
