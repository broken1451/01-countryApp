import { Location } from '@angular/common';
import { Component, inject, input } from '@angular/core';

@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss',
})
export class NotFound {

  public text = input<string>("No se encontró el país");
  public location = inject(Location);
  

  goback(){
    this.location.back();
  }

}
