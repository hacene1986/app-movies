import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-movies';
  constructor(){
    var config = {
      apiKey: "AIzaSyBmR1GirlThhZCLpDDdW8jbgqybzobt8TM",
      authDomain: "movies-a4e71.firebaseapp.com",
      databaseURL: "https://movies-a4e71.firebaseio.com",
      projectId: "movies-a4e71",
      storageBucket: "",
      messagingSenderId: "574901000914"
    };
    firebase.initializeApp(config);
  }
}
