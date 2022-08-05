import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login-service.service';
import { LoginRequest } from '../request/LoginRequest';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  formdata:any;
  result = '';
  showMessage=false;
  showError=false;
  isLogin!:boolean
  isRegister!:boolean
  isForgot !:boolean;
  constructor(private loginService: LoginService,
    private router: Router) { }

    ngOnInit(): void {
      this.isLogin=true
    }

  onSubmit(formdata:any) {
    let loginRequest:LoginRequest = this.loginService.getLoginRequest(formdata.value.username,formdata.value.password);
    console.log(formdata);
    loginRequest.loginID=formdata.value.username;
    loginRequest.password=formdata.value.password;
    this.loginService.validate(loginRequest).subscribe(data => {
      this.result = data.responseHeader.transactionNotification.status;
      this.showMessage=true;
    });

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
