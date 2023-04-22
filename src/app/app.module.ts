import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // here import formModule because without formModule we cant access ngModel
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule // here active formModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
