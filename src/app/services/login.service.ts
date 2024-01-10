import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ROLES } from '../model/roles';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private roles = ROLES;
  loggedIn = false;
  loggedInUser = new BehaviorSubject(false);
  user = {
    loggedIn: false,
    role: 0,
    toolAccessList: [],
    uploadAccess: [],
    userName: 'user'
  };
  userDetails = new BehaviorSubject(this.user);

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  login(data: { userName: string, password: string }): Observable<boolean> {
    const subject = new Subject<boolean>();
    const chk = false;
    this.loginDbCall(data).subscribe((response) => {
      if (response.some(responseData => responseData.userName === data.userName)) {
        const selectedUser = response.filter(responseData => responseData.userName === data.userName)[0];
        if (selectedUser.password === String(data.password)) {
          this.loggedInUser.next(true);
          this.loggedIn = true;
          this.user.loggedIn = true;
          this.user.role = selectedUser.role;
          this.user.toolAccessList = selectedUser.toolAccessList;
          this.user.uploadAccess = selectedUser.uploadAccess;
          this.user.userName = selectedUser.name;
          this.userDetails.next(this.user);
          subject.next(true);
        }
        else{
          this.loggedInUser.next(false);
          this.loggedIn = false;
          subject.next(false);
        }
      }
      else{
        this.loggedInUser.next(false);
        this.loggedIn = false;
        subject.next(false);
      }
    });
    return subject.asObservable();
  }

  private loginDbCall(data: { userName: string, password: string }): Observable<any> {
    return this.httpClient.get('../../assets/db/userData.json');
  }

  signUp(data) {

  }

  logOut() {
    this.loggedInUser.next(false);
    this.loggedIn = false;
    this.router.navigateByUrl('/login');
  }
}
