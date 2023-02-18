import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentsComponent } from './home/contents/contents.component';
import { FriendsComponent } from './home/friends/friends.component';
import { MenuComponent } from './home/menu/menu.component';
import { NotificationComponent } from './home/notification/notification.component';
import { ShopComponent } from './home/shop/shop.component';
import { TimelineComponent } from './home/timeline/timeline.component';

const routes: Routes = [
  { path: '', component: TimelineComponent },
  { path: 'friends', component: FriendsComponent },
  { path: 'notification', component: NotificationComponent },
  { path: 'contents', component: ContentsComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'shop', component: ShopComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
