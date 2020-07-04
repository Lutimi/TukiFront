import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { ActivatedRoute, Router } from '@angular/router';
import {LoginService} from "../core/services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
    this.initComponent();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/' ;
  }

  buildForm(){
    this.loginForm = this.fb.group({
      'email' : [null, [Validators.required, Validators.email]],
      'password' : [null, Validators.required],
    });
  }

  initComponent(){
    this.buildForm();
  }

  onSubmit(){
    console.log(this.loginForm.value)
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value).subscribe(result=>{
        localStorage.setItem('currentUser', JSON.stringify(result));
        this.router.navigate([this.returnUrl]);
      })
    }
  }
}
