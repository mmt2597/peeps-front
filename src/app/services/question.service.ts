import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Question } from 'src/app/models/question';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  userRole!: string;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.userRole = this.authService.getRoleSlug();
  }

  get(params: any) {
    return this.http.post(`${baseUrl}${this.userRole}/question/search`, params);
  }

  add(params: any) {
    return this.http.post(`${baseUrl}${this.userRole}/question`, params);
  }

  getById(id: string, urlPrefix: string = '', params = {}) {
    return this.http.get(`${baseUrl}${urlPrefix}question/${id}`, { params: params });
  }

  update(id: string, params: any) {
    return this.http.put(`${baseUrl}${this.userRole}/question/${id}`, params);
  }

  delete(uuid: string, params: any, urlPrefix: string = '') {
    return this.http.delete(`${baseUrl}${urlPrefix}question/${uuid}`);
  }
}
