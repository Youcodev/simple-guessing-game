import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GreetingAndGuessingComponent } from './greeting-and-guessing/greeting-and-guessing.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingAndGuessingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
