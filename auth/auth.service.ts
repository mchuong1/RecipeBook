import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';


const config = {
  apiKey: "AIzaSyAOjV7akZ0i--9UiznoZY63BWhUSvfgMz8",
  authDomain: "recipebook-8013f.firebaseapp.com",
  databaseURL: "https://recipebook-8013f.firebaseio.com",
  projectId: "recipebook-8013f",
  storageBucket: "recipebook-8013f.appspot.com",
  messagingSenderId: "760269398327"
};
firebase.initializeApp(config);


@Injectable()
export class AuthService {

  token: string;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        response => {
          this.router.navigate(['/']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token: string) => this.token = token
            )
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => this.token = token
      );
    return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }
}
