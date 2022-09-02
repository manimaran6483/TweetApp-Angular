import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../services/LoginService/login-service.service';
import { UtilService } from '../services/UtilService/util.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  allUsers!: [];
  user!: any;
  showForgotPassword:boolean = false;
  showError: boolean=false;
  constructor(private loginService: LoginService,private utilityService: UtilService) { }

  ngOnInit(): void {
    this.loginService.searchUser(sessionStorage.getItem('loginId')).subscribe(response => {
      this.allUsers = response.data;
      if (this.allUsers.length > 0) {
        this.user = this.allUsers.slice(0,1);
    console.log(this.user);

      }
    });
  }
  showforgot(){
    this.showForgotPassword=!this.showForgotPassword;
  }
  onSubmit(formdata:NgForm){
    let password = formdata.value.password;
    let confirmPassword = formdata.value.cpassword;
    let requestHeader = this.utilityService.getRequestHeader("FORGOT PASSWORD");
    let request = {
      requestHeader,
      password,
      confirmPassword
    }
    if(password === confirmPassword){
      this.loginService.forgotPassword(request,sessionStorage.getItem('loginId')).subscribe(response =>{
        let statusCode = response.responseHeader.transactionNotification.statusCode;
        if(statusCode === '0'){
          formdata.reset();
          window.alert(response.responseHeader.transactionNotification.remarks.messages[0].description);
        }else{
          window.alert(response.responseHeader.transactionNotification.remarks.messages[0].description);
        }
      },(response:any)=> {
        window.alert(response.error.responseHeader.transactionNotification.remarks.messages[0].description);
      });
      this.showForgotPassword=false;
    }else{
      window.alert("Both Password should be same")
    }

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
}
