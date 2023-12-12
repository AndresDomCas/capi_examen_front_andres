import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/enviroment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  API_USERS_URL = `${environment.apiUrl}`;
  public ngUnsubscribe = new Subject<void>();

  constructor(private http: HttpClient) { }

  getUsuarios(){
    const httpHeaders = new HttpHeaders({
      'Access-Control-Allow-Methods': "GEt",
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    return this.http.get(`${this.API_USERS_URL}/users`, {headers: httpHeaders});
  }
}
