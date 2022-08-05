import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TweetAppConstants } from '../app.constants';
import { LoginRequest } from '../request/LoginRequest';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }


  login(request:LoginRequest): Observable<any> {
    let url = environment.backendEndpoint+TweetAppConstants.LOGIN_URL;
    return this.http.post<any>(url,request);
  }

  register(request:any){
    let url = environment.backendEndpoint+TweetAppConstants.REGISTER_PATH;
    return this.http.post<any>(url,request);
  }

  forgotPassword(request:any){
    let url = environment.backendEndpoint+TweetAppConstants.FORGOTPASSWORD_PATH;
    return this.http.post<any>(url,request);
  }










  
}
