import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ramschema } from '../model/ramschema';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  //url till json-filen som innehåller ramschemat
  private url:string = "assets/ramschema_ht23.json";

  //HttpClient för http-anrop
  constructor(private http: HttpClient) { }

  //funktion för att hämta in ramschemat från json-filen
  getRamschema(): Observable<Ramschema[]> {

    //http get till url:n som returnerar svar från ramschemat
    return this.http.get<Ramschema[]>(this.url);
  }
}
