import { Directive, HostListener } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from 'firebase/auth';
@Directive({
  selector: '[appGoogleSign]'
})
export class GoogleSignDirective {

  constructor(private afAuth:AngularFireAuth) { }
  
  @HostListener('click')
  onClick(){
    this.afAuth.signInWithPopup(new GoogleAuthProvider());
  }

}
