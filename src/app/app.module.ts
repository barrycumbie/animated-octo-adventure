import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DevTeamComponent } from './dev-team/dev-team.component';
// import { ContactComponent } from './contact/contact.component';
import { TagComponentComponent } from './tag-component/tag-component.component';
import { WeatherComponent } from './weather/weather.component';
import { PolicyFinderComponent } from './policy-finder/policy-finder.component';
import { ComponentScheduleComponent } from './component-schedule/component-schedule.component';
import { FooterComponent } from './footer/footer.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { WeatherdataService} from './services/weatherdata.service';
=======

import { MemeComponent } from './meme/meme.component';

>>>>>>> 6a206dad4a858b5dccf57e5119d11f64c51ff307


@NgModule({
  declarations: [
    AppComponent,
    DevTeamComponent,
    // ContactComponent,
    TagComponentComponent,
    WeatherComponent,
    PolicyFinderComponent,
<<<<<<< HEAD
    ComponentScheduleComponent,
    FooterComponent,
    ComponentScheduleComponent
   
=======


    ComponentScheduleComponent,
    FooterComponent,


    ComponentScheduleComponent,


    ComponentScheduleComponent,
    FooterComponent,

    MemeComponent

>>>>>>> 6a206dad4a858b5dccf57e5119d11f64c51ff307
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,


  ],
  providers: [WeatherdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
