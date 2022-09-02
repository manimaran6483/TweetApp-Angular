import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/LoginService/login-service.service';
import { UtilService } from '../services/UtilService/util.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  allUsers!:any[];
  allAvatars=[
    '../../assets/1.png',
      '../../assets/2.png',
      '../../assets/3.png',
      '../../assets/4.png',
      '../../assets/5.png',
      '../../assets/6.png',
      '../../assets/7.png',
      '../../assets/8.png',
      '../../assets/9.png',
      '../../assets/10.png'
  ]
  constructor(private loginService : LoginService,private utilService :UtilService) { }

  ngOnInit(): void {
    this.loginService.getAllUsers().subscribe(response =>{
      this.allUsers = response.data;
      this.allUsers.forEach( (user,index) =>{
        user.avatar=this.allAvatars[index%10];
      })
    });
  }

  searchUser(searchString:string){
    console.log(searchString);
    if(searchString){
      this.loginService.searchUser(searchString).subscribe( response=>{
        this.allUsers = response.data;
        this.allUsers.forEach( (user,index) =>{
          user.avatar=this.allAvatars[index%10];
        })
      })
    }else{
      this.loginService.getAllUsers().subscribe(response =>{
        this.allUsers = response.data;
        this.allUsers.forEach( (user,index) =>{
          user.avatar=this.allAvatars[index%10];
        })
      });
    }
  }
}
