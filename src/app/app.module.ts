import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DevTeamComponent } from './dev-team/dev-team.component';
import { ContactComponent } from './contact/contact.component';
import { TagComponentComponent } from './tag-component/tag-component.component';

@NgModule({
  declarations: [
    AppComponent,
    DevTeamComponent,
    ContactComponent,
    TagComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
