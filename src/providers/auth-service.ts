import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthProviders, AngularFireAuth, FirebaseAuthState, AuthMethods, AngularFire } from 'angularfire2';


@Injectable()
export class AuthService {
  private authState: FirebaseAuthState;
  authLogeado: any;

  constructor(public auth$: AngularFireAuth, private af: AngularFire) {
    this.authState = auth$.getAuth();
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  getData(){
    return this.authState;
  }

  loginWithEmail(credentials) {
    return Observable.create(observer => {
      this.af.auth.login(credentials, {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
      }).then((authData) => {
        observer.next(authData);
      }).catch((error) => {
        observer.error(error);
      });
    });
  }


  signInWithGoogle(): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    });
  }

  signOut(): void {
    this.auth$.logout();
  }

  displayName(): string {
    if (this.authState != null) {
      return this.authState.google.displayName;
    } else {
      return '';
    }
  }

}
