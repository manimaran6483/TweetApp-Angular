import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TweetAppConstants } from '../../app.constants';
import { TweetResponse } from 'src/app/response/TweetResponse';
import * as uuid from "uuid";
@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private http: HttpClient) { }

  getAllTweets(): Observable<any> {
    let url = environment.backendEndpoint+TweetAppConstants.GET_ALL_TWEETS_PATH;
    const headers = this.getHeaders();
    return this.http.get<TweetResponse>(url,{headers : headers});
  }

  getTweetsofUser(username:any){
    username = username? username : sessionStorage.getItem("loginId");
    let url = environment.backendEndpoint+'/'+username;
    const headers = this.getHeaders();
    return this.http.get<TweetResponse>(url,{headers : headers});
  }

  postTweet(request:any,username:any): Observable<any> {
    username = username? username : sessionStorage.getItem("loginId");
    let url = environment.backendEndpoint+'/'+username+TweetAppConstants.POST_TWEET_PATH;
    const headers = this.getHeaders();
    return this.http.post<TweetResponse>(url,request,{headers : headers});
  }

  updateTweet(request:any,username:any,tweetId:any): Observable<any> {
    username = username? username : sessionStorage.getItem("loginId");
    let url = environment.backendEndpoint+'/'+username+TweetAppConstants.UPDATE_TWEET_PATH+tweetId;
    const headers = this.getHeaders();
    return this.http.put<TweetResponse>(url,request,{headers : headers});
  }

  deleteTweet(username:any,tweetId:any): Observable<any> {
    username = username? username : sessionStorage.getItem("loginId");
    let url = environment.backendEndpoint+'/'+username+TweetAppConstants.DELETE_TWEET_PATH+tweetId;
    const headers = this.getHeaders();
    return this.http.delete<TweetResponse>(url,{headers : headers});
  }

  likeTweet(request:any,username:any,tweetId:any): Observable<any> {
    username = username? username : sessionStorage.getItem("loginId");
    let url = environment.backendEndpoint+'/'+username+TweetAppConstants.LIKE_TWEET_PATH+tweetId;
    const headers = this.getHeaders();
    return this.http.post<TweetResponse>(url,request,{headers : headers});
  }

  replyTweet(request:any,username:any,tweetId:any): Observable<any> {
    username = username? username : sessionStorage.getItem("loginId");
    let url = environment.backendEndpoint+'/'+username+TweetAppConstants.REPLY_TWEET+tweetId;
    const headers = this.getHeaders();
    return this.http.post<TweetResponse>(url,request,{headers : headers});
  }

  getHeaders(){
    return new HttpHeaders().set("transactionId",uuid.v4()).set("Content-Type","application/json");
  }


}
