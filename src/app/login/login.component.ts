import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators, NgForm} from '@angular/forms';
import {AuthenticationService} from '../authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from "../core/services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: string;
  users: any

  constructor(
    private fb: FormBuilder,
    private auth: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService
  ) {
  }

  ngOnInit() {
    this.getDataConst()
    this.initComponent();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  getDataConst() {
    this.users = [
      {
        id: 1, firstName: 'Frank', lastName: 'Popovic', email: 'test123@gmail.com', password: 'welcome',
        bio: 'Explorador, aventurero esas son las palabras que me definen, me apasioona viajar por el mundo conociendo nuevas culturas y lugares. Soy abierto a conocer a todos, Conoceme más en la red de tuki.   Mi numero:+51989302415 Facebook: @Frankpopovic  Instagram: @Frank.Popo.vic'
        , role: 'admin', image: 'user-4.jpg'
      },
      {
        id: 2, firstName: 'rohan', lastName: 'gupta', email: 'test345@gmail.com', password: 'welcome',
        bio: 'i am a subscriber', role: 'subscriber', image: 'user-4.jpg'
      },
      {
        id: 3, firstName: 'Frank', lastName: 'Popovic', email: 'test123@gmail.com', password: 'welcome',
        bio: 'Explorador, aventurero esas son las palabras que me definen, me apasioona viajar por el mundo conociendo nuevas culturas y lugares. Soy abierto a conocer a todos, Conoceme más en la red de tuki.   Mi numero:+51989302415 Facebook: @Frankpopovic  Instagram: @Frank.Popo.vic'
        , role: 'admin', image: 'user-4.jpg'
      },
      {
        id: 4, firstName: 'rohan', lastName: 'gupta', email: 'test345@gmail.com', password: 'welcome',
        bio: 'i am a subscriber', role: 'subscriber', image: 'user-4.jpg'
      },
      {
        id: 5, firstName: 'Frank', lastName: 'Popovic', email: 'test123@gmail.com', password: 'welcome',
        bio: 'Explorador, aventurero esas son las palabras que me definen, me apasioona viajar por el mundo conociendo nuevas culturas y lugares. Soy abierto a conocer a todos, Conoceme más en la red de tuki.   Mi numero:+51989302415 Facebook: @Frankpopovic  Instagram: @Frank.Popo.vic'
        , role: 'admin', image: 'user-4.jpg'
      },
      {
        id: 6, firstName: 'rohan', lastName: 'gupta', email: 'test345@gmail.com', password: 'welcome',
        bio: 'i am a subscriber', role: 'subscriber', image: 'user-4.jpg'
      }
    ];
  }

  buildForm() {
    this.loginForm = this.fb.group({
      'email': [null, [Validators.required, Validators.email]],
      'password': [null, Validators.required],
    });
  }

  initComponent() {
    this.buildForm();
  }

  onSubmit() {
    console.log(this.loginForm.value)
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe((result: any) => {
        let users = this.users.find(user => user.id === Number(result.id))
        result.bio = users.bio
        result.image = users.image
        localStorage.setItem('currentUser', JSON.stringify(result));
        this.router.navigate(['/blog']);
      })
    }
  }
}

// "createdAt": "2020-06-20T15:11:24.000+0000",
//   "updatedAt": "2020-06-20T15:11:24.000+0000",
//   "id": 3,
//   "email": "richard.cancinov@gmail.com",
//   "password": "992424558",
//   "firstName": " Richard",
//   "lastName": "Cancino",
//   "tukicoins": 0
