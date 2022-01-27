import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DevTeamComponent } from './dev-team/dev-team.component';
<<<<<<< HEAD
import { WeatherComponent } from './weather/weather.component';
=======
import { PolicyFinderComponent } from './policy-finder/policy-finder.component';
>>>>>>> f129f4298760ece88091b76c0c634c3d5cb8ac0f

@NgModule({
  declarations: [
    AppComponent,
    DevTeamComponent,
<<<<<<< HEAD
    WeatherComponent
=======
    PolicyFinderComponent
>>>>>>> f129f4298760ece88091b76c0c634c3d5cb8ac0f
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
