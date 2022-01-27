import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DevTeamComponent } from './dev-team/dev-team.component';
import { PolicyFinderComponent } from './policy-finder/policy-finder.component';

@NgModule({
  declarations: [
    AppComponent,
    DevTeamComponent,
    PolicyFinderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
