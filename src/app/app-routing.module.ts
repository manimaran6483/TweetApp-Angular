import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { MytweetsComponent } from './mytweets/mytweets.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './services/auth.guard';
import { TweetsComponent } from './Tweet/tweets/tweets.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:'',redirectTo: 'home', pathMatch: 'full'},
  { path: 'login', component:LoginComponent},
  {path: 'home', component: LandingComponent, children: [
    {path: '',component: TweetsComponent},
    {path: 'users',component: UsersComponent},
    {path: 'mytweets/:id',component: MytweetsComponent},
    {path: 'my-profile/:id',component: ProfileComponent}
  ],canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
