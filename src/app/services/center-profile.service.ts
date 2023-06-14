import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DataTablesResponse } from '../models/data-tables-response';

const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CenterProfileService {

  constructor(
    private http: HttpClient
  ) {}

  get(params: any = null, urlPrefix: string = '') {
    return this.http.post<DataTablesResponse>(`${baseUrl}${urlPrefix}centers-profile/search`, params);
  }

  add(params: any, urlPrefix: string = '') {
    return this.http.post(`${baseUrl}${urlPrefix}centers-profile`, params);
  }

  getById(id: string, urlPrefix: string = '') {
    return this.http.get(`${baseUrl}${urlPrefix}centers-profile/${id}`);
  }

  update(id: string, params: any, urlPrefix: string = '') {
    return this.http.post(`${baseUrl}${urlPrefix}centers-profile/${id}`, params);
  }

  delete(uuid: string, urlPrefix: string = '') {
    return this.http.delete(`${baseUrl}${urlPrefix}centers-profile/${uuid}`);
  }

  getQuestions(params: any, urlPrefix: string = '') {
    return this.http.get(`${baseUrl}${urlPrefix}centers-profile/get-questions`, { params: params });
  }

  educatorSearch(params: any, urlPrefix: string = '') {
    return this.http.post(`${baseUrl}${urlPrefix}centers-profile/educator-search`, params);
  }

  downloadLists(searchHistoryUuid: string, urlPrefix: string = ''): Observable<Blob> {
    return this.http.get(`${baseUrl}${urlPrefix}centers-profile/download-lists/${searchHistoryUuid}`, { responseType: 'blob' });
  }

  sendLists(params: any, urlPrefix: string = '') {
    return this.http.post(`${baseUrl}${urlPrefix}centers-profile/send-lists`, params);
  }

  getLiveUpdates(params: any = null, urlPrefix: string = '') {
    return this.http.get(`${baseUrl}${urlPrefix}centers-profile/live-updates`, { params: params });
  }

  getBalance(params: any = null, urlPrefix: string = '') {
    return this.http.get(`${baseUrl}${urlPrefix}centers-profile/get-balance`, { params: params });
  }
}
