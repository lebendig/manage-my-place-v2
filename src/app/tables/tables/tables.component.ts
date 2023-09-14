import { TablesService } from './../services/tables.service';
import { Component } from '@angular/core';
import { Table } from '../model/table';
import { Observable, catchError, delay, first, of, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent {
  tables$: Observable<Table[]>;
  displayedColumns = ['number', 'actions']

  constructor(private tableService: TablesService, public dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
    this.tables$ = this.tableService.getAllTables().pipe(
      first(),
  //    delay(5000),
      catchError(error => {
        this.onError('Erro ao carregar dados.')
        return of([])
      }),
      tap(tables => console.log(tables)),
    );
  }

  onAdd(){
    this.router.navigate(['tables/new']);
    console.log('click');
  }


  onError(errorMsg: string){
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,})
  }
}

