import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable, catchError, throwError, delay } from 'rxjs';
import { CountryResponse } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';
import { Country } from '../interfaces/countri.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  private readonly httpClient: HttpClient = inject(HttpClient);


  searchCountryByCapital(query: string): Observable<Country[]> {

    query = query.toLowerCase().trim();
    return this.httpClient.get<CountryResponse[]>(`${environment.apiUrl}/capital/${query}`).pipe(
      map((countries) => CountryMapper.restCountryToCountries(countries)),
      catchError(() => {
        return throwError(() => new Error(`No se encontraron países con la capital "${query}"`));
      })
    );

  }

  searchCountryByName(query: string): Observable<Country[]> {
    
    query = query.toLowerCase().trim();
    return this.httpClient.get<CountryResponse[]>(`${environment.apiUrl}/name/${query}`).pipe(
      map((countries) => CountryMapper.restCountryToCountries(countries)),
      delay(3000),
      catchError(() => {
        return throwError(() => new Error(`No se encontraron países con el nombre "${query}"`));
      })
    );

  }


  searchCountryByAlphaCode(alpha: string): Observable<Country[]> {
    
    return this.httpClient.get<CountryResponse[]>(`${environment.apiUrl}/alpha/${alpha}`).pipe(
      map((countries) => CountryMapper.restCountryToCountries(countries)),
      map((cuntry) => cuntry.splice(0, 1)),
      // map((cuntry) => cuntry.at(0) ? [cuntry.at(0)!] : []),
      delay(3000),
      catchError(() => {
        return throwError(() => new Error(`No se encontraron países con el código alfa "${alpha}"`));
      })
    );

  }

}
