import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DataTablesResponse } from '../models/data-tables-response';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(
    private http: HttpClient
  ) { }

  get(params: any = null, urlPrefix: string = '') {
    return this.http.post<DataTablesResponse>(`${apiUrl}${urlPrefix}faq/search`, params);
  }

  add(params: any, urlPrefix: string = '') {
    return this.http.post(`${apiUrl}${urlPrefix}faq`, params);
  }

  getById(id: string, urlPrefix: string) {
    return this.http.get(`${apiUrl}${urlPrefix}faq/${id}`);
  }

  update(id: string, params: any, urlPrefix: string = '') {
    return this.http.put(`${apiUrl}${urlPrefix}faq/${id}`, params);
  }

  delete(id: string, urlPrefix: string = '') {
    return this.http.delete(`${apiUrl}${urlPrefix}faq/${id}`);
  }
}
