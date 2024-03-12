import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Value } from '../interfaces/value';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _url: string = "https://localhost:44360/api/Values";

  constructor(private http: HttpClient) { }

  getValues(): Observable<Value[]> {
    return this.http.get<Value[]>(this._url);
  }
}
