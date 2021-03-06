import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';

import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  cities: City[] = [];
  selectedCity?: City;
  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.getCities();
  }

  getCities(): void {
  this.cityService.getCities().subscribe(cities => this.cities = cities);
  }

  onSelect(city: City): void {
      this.selectedCity = city;
    }
}
