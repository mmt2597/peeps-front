import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DataTablesResponse } from '../models/data-tables-response';

const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class SearchTemplateService {

  constructor(
    private http: HttpClient
  ) { }

  get(params: any, urlPrefix: string = '') {
    return this.http.get<DataTablesResponse>(`${baseUrl}${urlPrefix}search-template`, {params: params});
  }

}
