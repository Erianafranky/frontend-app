import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'frontend-app';
  


  ngOnInit() {

  firebase.initializeApp( {

  	apiKey: "AIzaSyDaEWp9ABZiBpCGwYyWHf9EWj8eXS1UAkY",
    authDomain: "fir-project-5e03d.firebaseapp.com",
    databaseURL: "https://fir-project-5e03d.firebaseio.com",
    projectId: "fir-project-5e03d",
    storageBucket: "fir-project-5e03d.appspot.com",
    messagingSenderId: "183235174770"

   
  	});

  	console.log('FIREBASE APP INITIATED');
  }


}
