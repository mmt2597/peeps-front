import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserQuestionService {

  constructor(
    private http: HttpClient
  ) { }

  getQuestions(params: any, urlPrefix: string = '') {
    return this.http.get(`${apiUrl}${urlPrefix}user-questions/get-questions`, { params: params });
  }

  updateOrCreateQuestions(params: any, urlPrefix: string = '') {
    return this.http.post(`${apiUrl}${urlPrefix}user-questions/update-or-create-questions`, params);
  }
}
