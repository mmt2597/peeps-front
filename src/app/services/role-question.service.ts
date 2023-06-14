import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DataTablesResponse } from '../models/data-tables-response';

const apiUrl = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class RoleQuestionService {

  constructor(
    private http: HttpClient
  ) { }

  get(params: any, urlPrefix: string = '') {
    return this.http.post<DataTablesResponse>(`${apiUrl}${urlPrefix}role-question/search`, params);
  }

  add(params: any, urlPrefix: string = '') {
    return this.http.post(`${apiUrl}${urlPrefix}role-question`, params);
  }

  update(uuid: string, params: any, urlPrefix: string = '') {
    return this.http.put(`${apiUrl}${urlPrefix}role-question/${uuid}`, params);
  }

  delete(uuid: string, params: any, urlPrefix: string = '') {
    return this.http.delete(`${apiUrl}${urlPrefix}role-question/${uuid}`, { params: params });
  }

  getById(uuid: string, urlPrefix: string = '') {
    return this.http.get(`${apiUrl}${urlPrefix}role-question/${uuid}`);
  }

  reorder(params: any, urlPrefix: string = '') {
    return this.http.post(`${apiUrl}${urlPrefix}role-question/reorder`, params);
  }

  getTotalPercentage(params: any, urlPrefix: string = '') {
    return this.http.get(`${apiUrl}${urlPrefix}role-question/total-percentage`, { params: params });
  }
}
