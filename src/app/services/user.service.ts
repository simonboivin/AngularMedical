import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { httpOptions } from '../variables';

@Injectable( {
  providedIn: 'root'
} )
export class UserService {

  constructor( private httpClient: HttpClient ) { }

  authenticate ( user: any ) {
    return this.httpClient.post<any>( environment.urlApi + "login", user, httpOptions );
  }

}
