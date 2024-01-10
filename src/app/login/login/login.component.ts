import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginError = false;
  message: string;
  loggedIn = false;
  private subscriptions: Subscription = new Subscription();

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.createForm();
    // this.loginService.login({
    //   userName: 'AD1234',
    //   password: '123456'
    // });
    this.loginService.loggedInUser.subscribe((value) => {
      if (value) {
        this.router.navigateByUrl(`/dashboard`);
      }
    });
  }

  async login() {
    this.toastrService.clear();
    if (this.loginForm.invalid) {
      this.message = 'Please enter username and password.';
      this.toastrService.error('Please enter username and password.');
      this.loginError = true;
    }
    else {
      await this.loginService.login(this.loginForm.value).subscribe((loginData) => {
        console.log(loginData);
        if (loginData) {
          this.router.navigateByUrl(`/dashboard`);
          this.toastrService.success('User logged in.');
        }
        else {
          this.toastrService.error('Please enter correct username and password.');
          this.message = 'Please enter correct username and password.';
          this.loginError = true;
        }
      });
    }
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

}
