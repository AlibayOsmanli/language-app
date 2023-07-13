import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TrainComponent } from './train/train.component';
import { WordService } from './word-service.service';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TrainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

  ],
  providers: [WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
