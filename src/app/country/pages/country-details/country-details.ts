import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/countri.interface';
import { rxResource } from '@angular/core/rxjs-interop';
import { JsonPipe } from '@angular/common';
import { NotFound } from "../../../shared/components/not-found/not-found";
import { CountryInformation } from "./country-information/country-information";

@Component({
  selector: 'app-country-details',
  imports: [JsonPipe, NotFound, CountryInformation],
  templateUrl: './country-details.html',
  styleUrl: './country-details.scss',
})
export class CountryDetails implements OnInit{


  private activateRoute = inject(ActivatedRoute);
  private countryService = inject(CountryService);
  public codeAlpha = signal<string>("");


  public countryResource = rxResource({
    params: () => ({
      tes:1,
      code: this.activateRoute.snapshot.params['code']
    }),
    stream: ({ params }) => {
      // params.tes;
      this.codeAlpha.set(this.activateRoute.snapshot.params['code']);
      return this.getCountryByAlphaCode(params.code);
    }
  })

  ngOnInit(): void {

    // this.activateRoute.params.pipe(
    //   switchMap(({ code }) => {
    //     console.log(code);
    //     return this.getCountryByAlphaCode(code);
    //   })
    // ).subscribe({
    //   next: (country) => {
    //     console.log(country);
    //   },
    //   error: (err) => {},
    // });

  }


  getCountryByAlphaCode(alpha: string): Observable<Country[]> {
    return this.countryService.searchCountryByAlphaCode(alpha);
  }


}
