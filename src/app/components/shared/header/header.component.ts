import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  login: string;

  constructor(public router: Router) 
  {
  }

  ngOnInit() {
    this.login = JSON.parse(localStorage.getItem("usuario")).login;
  }

  logout() {
      localStorage.removeItem("usuario");
      localStorage.removeItem("token");
      this.router.navigate(['/login']);
  }

}
