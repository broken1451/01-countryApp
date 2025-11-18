import { Component, computed, input, OnInit } from '@angular/core';
import { Country } from '../../../interfaces/countri.interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-country-information',
  imports: [DecimalPipe],
  templateUrl: './country-information.html',
  styleUrl: './country-information.scss',
})
export class CountryInformation implements OnInit {

  public country = input.required<Country>()
  public currentYear = computed(() => new Date().getFullYear());

  ngOnInit(): void {
    console.log(this.country());
  }

}
