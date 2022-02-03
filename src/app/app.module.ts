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
@NgModule({
  declarations: [
    AppComponent,
    DevTeamComponent,
    // ContactComponent,
    TagComponentComponent,
    WeatherComponent,
    PolicyFinderComponent,
    ComponentScheduleComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
