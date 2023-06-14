import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor(
    private http: HttpClient
  ) { }

  send(params: any = null, urlPrefix: string = '') {
    return this.http.post(`${baseUrl}${urlPrefix}contact-form/send`, params);
  }
}
