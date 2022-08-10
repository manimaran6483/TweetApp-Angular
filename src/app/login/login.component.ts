import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login-service.service';
import { LoginRequest } from '../request/LoginRequest';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  result = '';
  showMessage=false;
  showError=false;
  isLogin!:boolean
  isRegister!:boolean
  isForgot !:boolean;
  constructor(private loginService: LoginService,private utilService: UtilService,
    private router: Router) { }

    ngOnInit(): void {
      this.isLogin=true
    }

  onLoginSubmit(formdata:any) {
    //write validation if needed
    const loginRequest:LoginRequest = this.utilService.getLoginRequest(formdata.value.username,formdata.value.password);
    console.log(formdata);
    loginRequest.loginID=formdata.value.username;
    loginRequest.password=formdata.value.password;
    this.loginService.login(loginRequest).subscribe(data => {
      this.result = data.responseHeader.transactionNotification.status;
      let statusCode = data.responseHeader.transactionNotification.statusCode;
      if(statusCode === '0'){
        this.loginService.setAuthStatus(true);
      }
      this.showMessage=true;
    });

  }

  onRegisterSubmit(formdata:any){
    const registerRequest = this.utilService.getRegisterRequest(formdata.value.username,formdata.value.password,formdata.value.cpassword,
      formdata.value.firstname,formdata.value.lastname,formdata.value.email,formdata.value.number);
      console.log(formdata.value);
      console.log(registerRequest);
  }

  onChange(event:any){

    var password = event.target.value.toString();
    console.log(password);
    var pattern = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)"
    );
    if(password.length<8 || !pattern.test(password)){
      this.showError=true;
    }else{
      this.showError=false;
      
    }
    
  }

  onRegister(event:any){
    this.isLogin=false;
    this.isRegister=true;
    this.isForgot=false;
  }

  onForgot(event:any){
    this.isLogin=false;
    this.isRegister=false;
    this.isForgot=true;
  }
}
