import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IDapp } from '../models/profile-models';

@Injectable({
  providedIn: 'root'
})
export class ProfileService{

  constructor(private http: HttpClient) { }

  getAllDapps(): Observable<IDapp[]> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
      };
      return this.http.get<IDapp[]>(
        'api.dapp.africa:1337/dapps/',
        httpOptions
      );
  }
}
