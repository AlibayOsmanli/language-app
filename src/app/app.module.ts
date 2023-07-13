import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TrainComponent } from './train/train.component';
import { WordService } from './word-service.service';

const firebaseConfig = {
  apiKey: "AIzaSyB4KdJ3TmA0YHMGl43SVKxG1zHQkx7E5cQ",
  authDomain: "word-learning-app-ea2a2.firebaseapp.com",
  databaseURL: "https://word-learning-app-ea2a2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "word-learning-app-ea2a2",
  storageBucket: "word-learning-app-ea2a2.appspot.com",
  messagingSenderId: "229633040628",
  appId: "1:229633040628:web:b13365732ec5f2d51bfea1",
  measurementId: "G-SZL3BLGP9D"
};

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
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [WordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
