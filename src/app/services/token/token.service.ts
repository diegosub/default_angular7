import { HOST_AVA } from '../ava.api';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class TokenService {

  constructor(private http: HttpClient) {}

  validateAuthenticationToken(login: string, token: string){
    let headers = new HttpHeaders().set('Authorization', token);
    return this.http.post(`${HOST_AVA}/api/validate`, login, {headers});
  }

}
