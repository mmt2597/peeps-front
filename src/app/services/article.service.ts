import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Article } from '../models/article';
import { DataTablesResponse } from '../models/data-tables-response';

const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient
  ) { }

  get(params: any = null, urlPrefix: string = '') {
    return this.http.post<DataTablesResponse>(`${baseUrl}${urlPrefix}article/search`, params);
  }

  add(params: any, urlPrefix: string = '') {
    return this.http.post(`${baseUrl}${urlPrefix}article`, params);
  }

  getById(id: string, urlPrefix: string = '') {
    return this.http.get<Article>(`${baseUrl}${urlPrefix}article/${id}`);
  }

  update(id: string, params: any, urlPrefix: string = '') {
    return this.http.post(`${baseUrl}${urlPrefix}article/${id}`, params);
  }

  delete(id: string, urlPrefix: string = '') {
    return this.http.delete(`${baseUrl}${urlPrefix}article/${id}`);
  }
}
