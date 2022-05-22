import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ComponentsModule
  ],
exports:[HomeComponent]
})
export class PagesModule { }
