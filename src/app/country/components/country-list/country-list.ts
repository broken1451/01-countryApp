import { Component, inject, input } from '@angular/core';
import { CountryResponse } from '../../interfaces/country.interface';
import { Country } from '../../interfaces/countri.interface';
import { DecimalPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-list',
  imports: [DecimalPipe],
  templateUrl: './country-list.html',
  styleUrl: './country-list.scss',
})
export class CountryList {

  public countries = input.required<Country[]>();
  private readonly router: Router = inject(Router);


  goto(cca2: string){
    this.router.navigate(['/country/by', cca2]);
  }

}
