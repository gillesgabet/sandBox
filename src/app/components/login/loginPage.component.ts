import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { Login } from '../../interfaces/user-Profile/login';

@Component({
  selector: 'app-login',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.css']
})
export class LoginPageComponent implements OnInit {

  $loginForm: Login = <Login>{};
  //profilUtilisateur$  : ProfilUtilisateur = <ProfilUtilisateur>{};
  
  loginForm: FormGroup = this.fb.group({
    login:          ['', [Validators.required, Validators.minLength(3)]],
    email:          ['', Validators.required],
    password:       ['', Validators.required],
    stayConnected:  [false]
  }); // | undefined;

  constructor(private fb: FormBuilder
            , private http: HttpClient
            , private router: Router) { }
  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login:          ['', [Validators.required, Validators.minLength(3)]],
      email:          ['', [Validators.required, Validators.minLength(3)]],
      password:       ['', [Validators.required]],
      stayConnected:  [false]
    });
  }

  login() {
    this.http.post<Login>("http://localhost:3000/signupUsersList", this.loginForm.value)
      .subscribe((data: Login) => {
        alert('Vous êtes connecté');
        this.$loginForm = data;
        //this.$loginForm.reset();
        this.router.navigate(["/app/home"]);
      }, err => {
        alert("Login ou mot de passe incorrect");
      });
  }

  controlPassword() {
    return true;
  }
}