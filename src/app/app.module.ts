import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TimelineComponent } from './home/timeline/timeline.component';
import { ProfileComponent } from './home/profile/profile.component';
import { MessagesComponent } from './home/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimelineComponent,
    ProfileComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
