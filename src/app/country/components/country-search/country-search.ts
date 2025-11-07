import { Component, input, output, model } from '@angular/core';

@Component({
  selector: 'app-country-search',
  imports: [],
  templateUrl: './country-search.html',
  styleUrl: './country-search.scss',
})
export class CountrySearch {

  public searchCountryTerm = output<string>();
  public placeholder = input<string>('Buscar país');
  age       = model(0);   

  searchTerm(term: string) {
    this.searchCountryTerm.emit(term);
  }

}
