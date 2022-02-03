import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

let serviceUrl: String = 'https://api.openweathermap.org/data/2.5/weather'
let apiKey: String = "d3075f43256f043acde62ff52d6075e9"  // insert your API key here

@Injectable({
  providedIn: 'root'
})
export class WeatherdataService {

  constructor(private http: HttpClient) { }

  load(city: String) {
    return this.http.get(serviceUrl + '?q=' + city + '&APPID=' + apiKey)
}
getIconUrl(icon: String) {
  return 'http://openweathermap.org/img/w/' + icon + ".png"
}
}