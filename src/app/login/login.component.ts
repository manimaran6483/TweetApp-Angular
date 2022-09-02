import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/LoginService/login-service.service';
import { LoginRequest } from '../request/LoginRequest';
import { UtilService } from '../services/UtilService/util.service';
import { NgForm } from '@angular/forms';
import { UserResponse } from '../response/UserResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  RegError!:string;
  showError=false;
  isLogin!:boolean
  isRegister!:boolean
  constructor(private loginService: LoginService,private utilService: UtilService,
    private router: Router) { }

    ngOnInit(): void {
      this.isLogin=true;
    }

  onLoginSubmit(formdata:NgForm) {
    //write validation if needed
    const loginRequest:LoginRequest = this.utilService.getLoginRequest(formdata.value.username,formdata.value.password);
    loginRequest.loginID=formdata.value.username;
    loginRequest.password=formdata.value.password;
    this.loginService.login(loginRequest).subscribe((response :UserResponse) => {
      console.log(response);
      let statusCode = response.responseHeader.transactionNotification.statusCode;
      if(statusCode === '0'){
        this.setSession(response);
        formdata.reset();
        this.router.navigate(['']);
      }else{
        this.RegError=response.responseHeader.transactionNotification.remarks.messages[0].description;
        window.alert(this.RegError);
      }
    },(response:any)=>{
      this.RegError=response.error.responseHeader.transactionNotification.remarks.messages[0].description;
      window.alert(this.RegError);
    });
    
  }

  setSession(response:UserResponse){
    const userDetail= response.data;
    if(userDetail.length >0){
      let user = userDetail[0];
      sessionStorage.setItem("userId",user.userId);
      sessionStorage.setItem("loginId",user.loginId);
      sessionStorage.setItem("isLoggedIn","true");
    }
}

  onRegisterSubmit(formdata:NgForm){
    console.log(formdata);
    const registerRequest = this.utilService.getRegisterRequest(formdata.value.username,formdata.value.password,formdata.value.cpassword,
      formdata.value.firstname,formdata.value.lastname,formdata.value.email,formdata.value.number);
      this.loginService.register(registerRequest).subscribe((response :UserResponse) =>{
        let statusCode = response.responseHeader.transactionNotification.statusCode;
        if(statusCode === '0'){
          formdata.reset();
          window.alert(response.responseHeader.transactionNotification.remarks.messages[0].description);
          this.onLogin('');
          this.router.navigate(['login']);
        }else{
          this.RegError=response.responseHeader.transactionNotification.remarks.messages[0].description;
          window.alert(this.RegError);
        }
      },(response:any)=>{
        this.RegError=response.error.responseHeader.transactionNotification.remarks.messages[0].description;
        window.alert(this.RegError);
      });

    
  }

  onChangePassword(event:any){

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
  }

  onLogin(event:any){
    this.isLogin=true;
    this.isRegister=false;
  }
}
