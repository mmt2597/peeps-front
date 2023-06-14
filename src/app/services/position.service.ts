import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataTablesResponse } from '../models/data-tables-response';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor(
    private http: HttpClient
  ) {}

  get(params: any = null, urlPrefix: string = '') {
    return this.http.post<DataTablesResponse>(`${apiUrl}${urlPrefix}position/search`, params);
  }

}
