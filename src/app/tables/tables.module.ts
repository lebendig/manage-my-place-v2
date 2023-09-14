import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablesRoutingModule } from './tables-routing.module';
import { TablesComponent } from './tables/tables.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { TableFormComponent } from './table-form/table-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TablesComponent,
    TableFormComponent
  ],
  imports: [
    CommonModule,
    TablesRoutingModule,
    AppMaterialModule,
    ReactiveFormsModule
  ]
})
export class TablesModule { }
