import { Component } from '@angular/core';

export class Weather{
  city: String
  conditions: String
  temperature: number
  icon: String
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean-app';
}
