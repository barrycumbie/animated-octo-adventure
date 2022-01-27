import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DevTeamComponent } from './dev-team/dev-team.component';
import { ComponentScheduleComponent } from './component-schedule/component-schedule.component';

@NgModule({
  declarations: [
    AppComponent,
    DevTeamComponent,
    ComponentScheduleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
