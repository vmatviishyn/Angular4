import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
  public isCollapsed = true;



  constructor(public auth: AuthService) { }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
  
  logout(){
    this.auth.logout();
  }

}
