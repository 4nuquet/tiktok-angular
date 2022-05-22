import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from './navbar/navbar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { TrendsComponent } from './trends/trends.component';
import { MediaPlayerInfoComponent } from './media-player-info/media-player-info.component';
import { MediaPlayerComponent } from './media-player/media-player.component';

@NgModule({
  declarations: [
    NavbarComponent,
    NavigationComponent,
    SuggestionsComponent,
    TrendsComponent,
    MediaPlayerInfoComponent,
    MediaPlayerComponent,
  ],
  imports: [BrowserModule],
  exports: [
    NavbarComponent,
    NavigationComponent,
    SuggestionsComponent,
    TrendsComponent,
    MediaPlayerInfoComponent,
    MediaPlayerComponent,
  ],
})
export class ComponentsModule {}
