import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ROLESLIST } from '../model/roles';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  loginForm: FormGroup;
  loginError = false;
  message: string;
  loggedIn = false;
  roles = ROLESLIST;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.loginService.loggedInUser.subscribe((value) => {
     if (value) {
      this.router.navigateByUrl(`/dashboard`);
     }
    });
  }

  signUp() {
    if (this.loginForm.invalid) {
      this.message = 'Please enter username and password.';
      this.loginError = true;
    }
    else {
      this.toastrService.success('Request send successfully.');
      this.router.navigateByUrl(`/login`);
      const login = this.loginService.signUp(this.loginForm.value);
      if (login['status']) {
        this.router.navigateByUrl(`/login`);
      }
      else {
        this.message = 'Please enter correct username and password.';
        this.loginError = true;
      }
    }
  }

  private createForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      cpassword: ['', [Validators.required]],
      role: ['', [Validators.required]],
    });
  }

}
