import { Component, OnInit } from '@angular/core';

import { Weather} from '../app.component';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent {
  weather: Weather = {
  city: "Florence",
  conditions: "Sunny",
  temperature: 70,
  icon: ""
  }
}


// export class WeatherComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
