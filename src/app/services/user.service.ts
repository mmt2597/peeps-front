import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DataTablesResponse } from '../models/data-tables-response';
import { User } from '../models/user.model';

const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  get(params: any, urlPrefix: string = '') {
    return this.http.post<DataTablesResponse>(`${baseUrl}${urlPrefix}user/search`, params);
  }

  getUserInfo() {
    return this.http.get(`${baseUrl}user-info`);
  }

  add(params: any, urlPrefix: string = '') {
    return this.http.post(`${baseUrl}${urlPrefix}user`, params);
  }

  update(uuid: string, params: any, urlPrefix: string = '') {
    return this.http.post(`${baseUrl}${urlPrefix}user/${uuid}`, params);
  }

  updateProfile(params: User) {
    return this.http.put(`${baseUrl}user/update-profile`, params);
  }

  getByUuid(uuid: string, params: any, urlPrefix: string = '') {
    return this.http.get(`${baseUrl}${urlPrefix}user/${uuid}`, { params: params });
  }

  uploadAvatar(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('avatar', image);

    return this.http.post(`${baseUrl}user/upload-avatar`, formData);
  }

  removeAvatar() {
    return this.http.post(`${baseUrl}user/remove-avatar`, {});
  }

  saveRole(role: string) {
    return this.http.post(`${baseUrl}user/update-role`, {role: role});
  }

  delete(uuid: string, params: any= null, urlPrefix: string = '') {
    return this.http.delete(`${baseUrl}${urlPrefix}user/${uuid}`, { params: params });
  }

  changePassword(params: any, urlPrefix: string = '') {
    return this.http.post(`${baseUrl}${urlPrefix}user/change-password`, params);
  }

  addBalance(params: any, urlPrefix: string = '') {
    return this.http.put(`${baseUrl}${urlPrefix}user/add-balance`, params);
  }
}
