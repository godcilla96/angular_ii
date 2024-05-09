import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ramschema } from '../model/ramschema';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private url:string = "assets/ramschema_ht23.json";

  constructor(private http: HttpClient) { }

  //funktion för att hämta in ramschemat
  getRamschema(): Observable<Ramschema[]> {
    return this.http.get<Ramschema[]>(this.url);

  }
}
