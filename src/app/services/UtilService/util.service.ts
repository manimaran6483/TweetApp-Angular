import { fn } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';

import {v4 as uuidv4} from 'uuid';
import { LoginRequest } from '../../request/LoginRequest';
import { RegisterRequest } from '../../request/RegisterRequest';
import { RequestHeader } from "../../request/RequestHeader"

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }


  getLoginRequest(loginID:string,password:string){
    return new LoginRequest(this.getRequestHeader("LOGIN"),loginID,password);
  }

  getRegisterRequest(loginId:string,password:string,cPassword:string,fname:string,lname:string,
    emailId:string,number:string){
    return new RegisterRequest(this.getRequestHeader("REGISTRATION"),loginId,password,emailId,fname,lname,cPassword,number);
  }

  getRequestHeader(type:string){
    let requestHeader = {
      consumer:{
        id:"localhost",
        name:"TweetApp",
        businessTransactionType:type,
        type:type,
        requestDateTime: new Date(),
        hostName:"LOCALHOST"
      },
      transactionId: uuidv4()
    }
    return requestHeader;
  }
  getTransactionId(){
    return uuidv4();
  }
}
