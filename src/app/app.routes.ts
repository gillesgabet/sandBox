import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { LoginPageComponent } from './components/login/loginPage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const appRoutes: Routes = [
  { path: '', component: LoginPageComponent },
  // Add other routes here
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
    , ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }