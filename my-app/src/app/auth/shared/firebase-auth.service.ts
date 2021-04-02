import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {

  currentUser$ = new Observable<firebase.User | null>();

  constructor(private router: Router, private afAuth: AngularFireAuth) {
    this.currentUser$ = this.afAuth.authState;
  }
  
  googleSignIn() {
    this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(() => {
      this.router.navigate(['/auth/dashboard']);
    }).catch(error => {
      console.log('[FirebaseAuthService]', error);
    });
  }
  signin() { }
  signOut() {
    this.afAuth.signOut();
    this.router.navigate(['/home'])
   }
}
