import { Injectable } from '@angular/core';
import { Table } from '../model/table';
import {  HttpClient } from '@angular/common/http';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  private readonly API = 'api/tables';

  constructor(private httpCLient: HttpClient) { }

  getAllTables() {
    return this.httpCLient.get<Table[]>(this.API);
  }

  saveTable(record: Table){
    return this.httpCLient.post<Table>(this.API, record).pipe(first()); //pipe n é ncessario
  }
}
