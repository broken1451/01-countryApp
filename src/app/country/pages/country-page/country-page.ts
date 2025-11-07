import { Component, inject, resource, signal } from '@angular/core';
import { CountrySearch } from "../../components/country-search/country-search";
import { CountryList } from "../../components/country-list/country-list";
import { CountryService } from '../../services/country.service';
import { firstValueFrom, of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-country-page',
  imports: [CountrySearch, CountryList],
  templateUrl: './country-page.html',
  styleUrl: './country-page.scss',
})
export class CountryPage {
  
  private readonly countryService: CountryService = inject(CountryService);
  public query = signal('');

  // trabaja con observables rxResource
  public countryResource = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({ params }) => {
      if (!params.query) {
        return of([]);
      }
      return this.countryService.searchCountryByName(params.query)
    }
  });


  // public countryResource = resource({
  //     params: () => ({query: this.query()}),
  //     loader: async ({params}) =>{
      
  //       if(!params.query){
  //         return [];
  //       }

  //       // cuando se trabaja con resource se debe regresar promesas
  //       return await firstValueFrom(
  //         this.countryService.searchCountryByName(params.query)
  //       );
  //     }
  // })

  searchTerm(term: string){
    console.log(term);
  }

}
