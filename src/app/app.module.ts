import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TimelineComponent } from './home/timeline/timeline.component';
import { ProfileComponent } from './home/profile/profile.component';
import { MessagesComponent } from './home/messages/messages.component';
import { FriendsComponent } from './home/friends/friends.component';
import { ContentsComponent } from './home/contents/contents.component';
import { ShopComponent } from './home/shop/shop.component';
import { NotificationComponent } from './home/notification/notification.component';
import { MenuComponent } from './home/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimelineComponent,
    ProfileComponent,
    MessagesComponent,
    FriendsComponent,
    ContentsComponent,
    ShopComponent,
    NotificationComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
