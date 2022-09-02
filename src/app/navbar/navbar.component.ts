import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userId!:string|null;
  loginId!:string|null;
  constructor(private router : Router) { }
  

  ngOnInit(): void {
    this.userId=sessionStorage.getItem("userId");
    this.loginId=sessionStorage.getItem("loginId");
  }


  onLogout(){
    sessionStorage.clear();
    this.router.navigate(['login']);
  }


}
