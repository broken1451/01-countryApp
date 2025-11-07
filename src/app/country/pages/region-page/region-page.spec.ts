import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryReginPage } from './country-regin-page';

describe('CountryReginPage', () => {
  let component: CountryReginPage;
  let fixture: ComponentFixture<CountryReginPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountryReginPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountryReginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
