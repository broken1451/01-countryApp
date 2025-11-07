import { Component, inject, resource, signal } from '@angular/core';
import { CountrySearch } from '../../components/country-search/country-search';
import { CountryList } from '../../components/country-list/country-list';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/countri.interface';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-by-capital-page',
  imports: [CountrySearch, CountryList],
  templateUrl: './by-capital-page.html',
  styleUrl: './by-capital-page.scss',
})
export class ByCapitalPage {

  private readonly countryService: CountryService = inject(CountryService);
  public query = signal('');
  
  public countryResource = resource({
      params: () => ({query: this.query()}),
      loader: async ({params}) =>{
      
        if(!params.query){
          return [];
        }

        // cuando se trabaja con resource se debe regresar promesas
        return await firstValueFrom(
          this.countryService.searchCountryByCapital(params.query)
        );
      }
  })
  
  // public isLoading = signal(false);
  // public isError = signal<string | null>(null)
  // public countries = signal<Country[]>([]);

  // searchTerm(term: string){
  //   if(this.isLoading()){
  //     return;
  //   };
  //   this.isError.set(null);
  //   this.isLoading.set(true);
  //   this.countryService.searchCountryByCapital(term).subscribe({
  //     next: (countries) => {
  //       console.log(countries);
  //       this.isLoading.set(false);
  //       this.countries.set(countries);
  //     },
  //     error: (err) => { 
  //       console.error(err); 
  //       this.isLoading.set(false);
  //       this.countries.set([]);
  //       this.isError.set(`${err}`);
  //     },
  //     complete: () => {}
  //   })
  // }

}
