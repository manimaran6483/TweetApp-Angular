import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TweetsComponent } from './Tweet/tweets/tweets.component';
import { PostTweetComponent } from './Tweet/post-tweet/post-tweet.component';
import { TweetItemComponent } from './Tweet/tweet-item/tweet-item.component';
import { ProfileComponent } from './profile/profile.component';
import { MytweetsComponent } from './mytweets/mytweets.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    NavbarComponent,
    TweetsComponent,
    PostTweetComponent,
    TweetItemComponent,
    ProfileComponent,
    MytweetsComponent,
    UsersComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
