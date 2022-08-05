import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest } from '../request/LoginRequest';
import { RequestHeader } from "../request/RequestHeader"
import { environment } from 'src/environments/environment';
import { TweetAppConstants } from '../app.constants';
import {v4 as uuidv4} from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginReqeust!:LoginRequest;
  requestHeader!:RequestHeader;
  constructor(private http: HttpClient) { }


  validate(request:LoginRequest): Observable<any> {
    let url = environment.backendEndpoint+TweetAppConstants.LOGIN_URL;
    return this.http.post<any>(url,request);
  }










  getLoginRequest(loginID:string,password:string){
    this.requestHeader = {
      consumer:{
        id:"localhost",
        name:"TweetApp",
        businessTransactionType:"LOGIN",
        type:"LOGIN",
        requestDateTime: new Date(),
        hostName:"LOCALHOST"
      },
      transactionId: uuidv4()
    }

    return new LoginRequest(this.requestHeader,loginID,password);
  }
}
