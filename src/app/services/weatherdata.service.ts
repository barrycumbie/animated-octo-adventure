import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

let serviceUrl: String = 'https://api.openweathermap.org/data/2.5/weather'
let apiKey: String = "c0a9423e3925611ca4ad1b8bdfde4b4f"  // insert your API key here

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