import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  imports: [],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

   private readonly router =inject(Router);



   goto(path: string) {
      this.router.navigate([path]);
   }

}
