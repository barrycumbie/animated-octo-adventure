import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DevTeamComponent } from './dev-team/dev-team.component';
<<<<<<< HEAD
import { ContactComponent } from './contact/contact.component';
import { TagComponentComponent } from './tag-component/tag-component.component';
=======
import { WeatherComponent } from './weather/weather.component';
import { PolicyFinderComponent } from './policy-finder/policy-finder.component';
import { ComponentScheduleComponent } from './component-schedule/component-schedule.component';
>>>>>>> dde15bc32b0ffe63213376c58693c4fe39516863

@NgModule({
  declarations: [
    AppComponent,
    DevTeamComponent,
<<<<<<< HEAD
    ContactComponent,
    TagComponentComponent
=======
    WeatherComponent,
    PolicyFinderComponent,
    ComponentScheduleComponent
>>>>>>> dde15bc32b0ffe63213376c58693c4fe39516863
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
