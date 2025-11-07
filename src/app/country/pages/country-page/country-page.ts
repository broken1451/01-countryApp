import { Component } from '@angular/core';
import { CountrySearch } from "../../components/country-search/country-search";
import { CountryList } from "../../components/country-list/country-list";

@Component({
  selector: 'app-country-page',
  imports: [CountrySearch, CountryList],
  templateUrl: './country-page.html',
  styleUrl: './country-page.scss',
})
export class CountryPage {


  searchTerm(term: string){
    console.log(term);
  }

}
