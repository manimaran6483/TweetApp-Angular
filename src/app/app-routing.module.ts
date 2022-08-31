import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { TweetsComponent } from './Tweet/tweets/tweets.component';

const routes: Routes = [
  {path:'',redirectTo: 'home', pathMatch: 'full'},
  { path: 'login', component:LoginComponent},
  {path: 'home', component: LandingComponent, children: [
    {path: '',component: TweetsComponent}
  ],canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
