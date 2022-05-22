import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FollowingComponent } from './following/following.component';
import { DiscoverComponent } from './discover/discover.component';


@NgModule({
  declarations: [
    NavbarComponent,
    NavigationComponent,
    FollowingComponent,
    DiscoverComponent,
  ],
  imports: [
    BrowserModule,
  ],
exports:[NavbarComponent, NavigationComponent, FollowingComponent, DiscoverComponent]
})
export class ComponentsModule { }
