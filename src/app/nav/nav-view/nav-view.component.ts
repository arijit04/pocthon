import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-nav-view',
  templateUrl: './nav-view.component.html',
  styleUrls: ['./nav-view.component.scss']
})
export class NavViewComponent implements OnInit, OnDestroy {

  loggedIn = false;
  userDetails;
  private subscriptions: Subscription = new Subscription();
  userName: string;
  userRole: string;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.subscriptions.add(
    this.loginService.loggedInUser.subscribe((value) => {
      this.loggedIn = value;
    }));
    this.subscriptions.add(
      this.loginService.userDetails.subscribe((data) => {
        this.userDetails = data;
        this.userName = data.userName;
        this.userRole = this.getRole(data.role);
      })
    )
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }


  logOut(): void {
    this.loginService.logOut();
  }

  goTo(path: string): void {
    this.router.navigateByUrl(path);
  }

  private getRole(id) {
    switch (id) {
      case 1:
        return 'Admin';
      case 2:
        return 'Developer';
      case 3:
        return 'Tester';
      case 4:
        return 'System Analyst';
      case 5:
        return 'Business Analyst';
    }
  }

}
