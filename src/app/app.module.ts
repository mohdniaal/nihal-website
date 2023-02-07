import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AnimComponent } from './anim/anim.component';
import { Router } from '@angular/router';
import { ContentsComponent } from './contents/contents.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AnimComponent,
    ContentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
