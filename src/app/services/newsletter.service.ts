import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  constructor(
    private http: HttpClient,
  ) { }

  subscribe(params: any, urlPrefix: string = '') {
    return this.http.post(`${apiUrl}${urlPrefix}newsletter/subscribe`, params);
  }
}
