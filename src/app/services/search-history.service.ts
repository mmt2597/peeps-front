import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class SearchHistoryService {

  constructor(
    private http: HttpClient,
  ) {}

  get(params: any, urlPrefix: string = '') {
    return this.http.post(`${apiUrl}${urlPrefix}search-history/search`, params);
  }

  getByUuid(uuid: string, urlPrefix: string = '') {
    return this.http.get(`${apiUrl}${urlPrefix}search-history/${uuid}`);
  }

  update(uuid: string, params: any, urlPrefix: string = '') {
    return this.http.put(`${apiUrl}${urlPrefix}search-history/${uuid}`, params);
  }

  delete(uuid: string, params: any, urlPrefix: string = '') {
    return this.http.delete(`${apiUrl}${urlPrefix}search-history/${uuid}`, { params: params });
  }

  buyList(params: any, urlPrefix: string = '') {
    return this.http.post(`${apiUrl}${urlPrefix}search-history/purchase`, params);
  }

  fetchEducatorSearch(uuid: string, urlPrefix: string = '') {
    return this.http.get(`${apiUrl}${urlPrefix}search-history/${uuid}/fetch-educator-search`);
  }
}
