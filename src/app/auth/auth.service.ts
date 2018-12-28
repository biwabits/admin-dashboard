import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class AuthService {

  public user: Observable<firebase.User>;
  public userDetails: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router,
    private _firestore: AngularFirestore) {

    this.user = _firebaseAuth.authState;
    this.user.subscribe((user) => {
      if (user) {
        this.userDetails = user;
        console.log("user details: " + this.userDetails);
      } else {
        this.userDetails = null;
      }
    });
  }

  isVerification(): boolean {
    if (this._firebaseAuth.auth.currentUser.emailVerified) {
      return true;
    } else {
      return false;
    }
  }

  async register(email: any, password: any, fullName: any): Promise<void> {
    await this._firebaseAuth.auth.createUserWithEmailAndPassword(email, password).then((afUser) => {

      // simpan data ke database - firestore
      this._firestore.collection("users").doc(afUser.user.uid).set({
        uid: afUser.user.uid,
        displayName: fullName,
        photoURL: ""
      });

      // notifikasi ke email
      let user = this._firebaseAuth.auth.currentUser;
      user.sendEmailVerification();

      // show alert

      // redirect to login

    }).catch((err) => {
      // log
      console.log("err Register: " + JSON.stringify(err));

      //alert error

    });
  }

  requestPass(email: any) {
    return this._firebaseAuth.auth.sendPasswordResetEmail(email);
  }

  confirmPasswordReset(code: any, newPassword: any) { // param: oobCode=<code>
    return this._firebaseAuth.auth.confirmPasswordReset(code, newPassword);
  }

  /*verifyPasswordResetCode(code){
    return this._firebaseAuth.auth.verifyPasswordResetCode(code);
  }*/

  async signInWithEmail(email: any, password: any) {
    await this._firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signInWithTwitter() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    )
  }

  signInWithFacebook() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    )
  }

  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  isLoggedIn() {
    if (this.userDetails == null) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/auth/login']));
  }
}
