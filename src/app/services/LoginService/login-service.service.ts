import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TweetAppConstants } from '../../app.constants';
import { LoginRequest } from '../../request/LoginRequest';
import { UserResponse } from '../../response/UserResponse';
import { RegisterRequest } from 'src/app/request/RegisterRequest';
import * as uuid from "uuid";
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: HttpClient) { }

  login(request:LoginRequest): Observable<any> {
    let url = environment.backendEndpoint+TweetAppConstants.LOGIN_URL;
    return this.http.post<UserResponse>(url,request);
  }

  register(request:RegisterRequest){
    let url = environment.backendEndpoint+TweetAppConstants.REGISTER_PATH;
    return this.http.post<UserResponse>(url,request);
  }

  forgotPassword(request:any,username:any){
    username = username? username : sessionStorage.getItem("loginId");
    let url = environment.backendEndpoint+'/'+username+TweetAppConstants.FORGOTPASSWORD_PATH;
    return this.http.post<UserResponse>(url,request);
  }
  getAuthStatus(){
    return sessionStorage.getItem("isLoggedIn") === 'true' ? true : false;
  }

  getAllUsers(){
    let url = environment.backendEndpoint+TweetAppConstants.GET_ALL_USERS_PATH;
    const headers = this.getHeaders();
    return this.http.get<UserResponse>(url,{headers : headers});
  }

  searchUser(username:any){
    let url = environment.backendEndpoint+TweetAppConstants.SEARCH_USER_PATH+username;
    const headers = this.getHeaders();
    return this.http.get<UserResponse>(url,{headers : headers});
  }

  getHeaders(){
    return new HttpHeaders().set("transactionId",uuid.v4()).set("Content-Type","application/json");
  }




  
}
