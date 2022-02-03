import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DevTeamComponent } from './dev-team/dev-team.component';
import { WeatherComponent } from './weather/weather.component';
import { PolicyFinderComponent } from './policy-finder/policy-finder.component';
import { ComponentScheduleComponent } from './component-schedule/component-schedule.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherdataService} from './services/weatherdata.service';
import { SelectionComponent } from './components/selection/selection.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DevTeamComponent,
    WeatherComponent,
    PolicyFinderComponent,
    ComponentScheduleComponent,
    FooterComponent,
    ComponentScheduleComponent,
    SelectionComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
