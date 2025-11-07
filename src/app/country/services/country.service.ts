import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable } from 'rxjs';
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
      map((countries) => CountryMapper.restCountryToCountries(countries))
    );

  }

}
