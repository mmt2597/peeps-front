import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ChargebeeService {

  constructor(
    private http: HttpClient
  ) { }

  httpHostedPage(urlPrefix: string, planId: string) {
    return this.http.get(`${baseUrl}${urlPrefix}chargebee/hosted-page/${planId}`);
  }

  httpSession(urlPrefix: string) {
    return this.http.get(`${baseUrl}${urlPrefix}chargebee/session`);
  }
}
