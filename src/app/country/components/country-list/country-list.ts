import { Component, input } from '@angular/core';
import { CountryResponse } from '../../interfaces/country.interface';
import { Country } from '../../interfaces/countri.interface';

@Component({
  selector: 'app-country-list',
  imports: [],
  templateUrl: './country-list.html',
  styleUrl: './country-list.scss',
})
export class CountryList {

  public countries = input.required<Country[]>();

}
