import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  API_URL: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  get httpParams() {
    return new HttpParams().set('fields', 'flags,name,capital,population,cca2,borders,subregion');
  }

  buscarPais(termino: string): Observable<Pais[]> {
    const url = `${this.API_URL}/name/${termino}`;
    return this.http.get<Pais[]>(url, { params: this.httpParams }); //.pipe( ( catchError( err  => of(Pais)) ) )
  }

  buscarCapital(termino: string): Observable<Pais[]> {
    const url = `${this.API_URL}/capital/${termino}`;
    return this.http.get<Pais[]>(url, { params: this.httpParams });
  }

  buscarRegion(termino: string): Observable<Pais[]> {
    const url = `${this.API_URL}/region/${termino}`;
    return this.http.get<Pais[]>(url);
  }

  getPaisPorId(id: string): Observable<Pais> {
    const url = `${this.API_URL}/alpha/${id}`;
    return this.http.get<Pais>(url, { params: this.httpParams });
  }

  todosLosPaises(): Observable<Pais[]> {
    const url = `${this.API_URL}/all`;
    return this.http.get<Pais[]>(url, { params: this.httpParams });
  }


}
