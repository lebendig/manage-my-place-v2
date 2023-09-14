import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TablesService } from '../services/tables.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { config } from 'rxjs';

@Component({
  selector: 'app-table-form',
  templateUrl: './table-form.component.html',
  styleUrls: ['./table-form.component.scss']
})
export class TableFormComponent {
  form: FormGroup;

  //incia form com as propriedades e campos
  constructor(private formBuilder: FormBuilder, private tableService: TablesService, private _snackBar: MatSnackBar){
    this.form = formBuilder.group({
      number: [null]
    });
  }

  onSave(){
    this.tableService.saveTable(this.form.value).subscribe(result => console.log(result), error => {
      this.onError();
    });
  }

  onCancel(){}

  onError(){
    this._snackBar.open('An error occurred while saving', '', { duration: 500 });
  }

}
